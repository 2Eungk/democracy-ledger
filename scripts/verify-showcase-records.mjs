import { execFile } from 'node:child_process';
import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { convention, validateConvention } from '../data/convention.js';

const execFileAsync = promisify(execFile);
const timeoutMs = 20_000;
const normalize = (value) => value
  .replace(/<[^>]*>/g, ' ')
  .replace(/&nbsp;|&#160;/gi, ' ')
  .replace(/&quot;|&#34;/gi, '"')
  .replace(/&amp;/gi, '&')
  .replace(/[“”‘’]/g, '')
  .replace(/\s+/g, '')
  .trim();

function sourceUserAgent(url) {
  const hostname = new URL(url).hostname;
  return hostname === 'facebook.com' || hostname.endsWith('.facebook.com')
    ? 'Mozilla/5.0'
    : 'democracy-ledger-source-verifier/1.0';
}

async function fetchWithCurl(url, userAgent) {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'democracy-ledger-'));
  const cookieJar = path.join(directory, 'cookies.txt');
  try {
    const { stdout } = await execFileAsync('curl', [
      '-fsSL',
      '--max-time', String(timeoutMs / 1000),
      '-A', userAgent,
      '-c', cookieJar,
      '-b', cookieJar,
      url,
    ], { maxBuffer: 10 * 1024 * 1024 });
    return stdout;
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

async function fetchText(url) {
  const userAgent = sourceUserAgent(url);
  try {
    const response = await fetch(url, {
      headers: { 'user-agent': userAgent },
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const contentType = response.headers.get('content-type') ?? '';
    if (!/text\/html|application\/xhtml\+xml/i.test(contentType)) throw new Error(`unexpected content type ${contentType}`);
    return response.text();
  } catch (fetchError) {
    try {
      return await fetchWithCurl(url, userAgent);
    } catch (curlError) {
      throw new Error(`fetch failed (${fetchError.message}); curl fallback failed (${curlError.message})`);
    }
  }
}

const validationErrors = validateConvention(convention);
if (validationErrors.length) {
  console.error('FAIL data validation');
  for (const error of validationErrors) console.error(`- ${error}`);
  process.exit(1);
}

const sourceById = new Map(convention.sources.map((source) => [source.id, source]));
const records = convention.showcaseRecords ?? [];
let failed = false;

for (const record of records) {
  const source = sourceById.get(record.sourceId);
  if (!source) {
    console.error(`FAIL ${record.id}: missing source ${record.sourceId}`);
    failed = true;
    continue;
  }

  try {
    const body = await fetchText(source.url);
    if (!normalize(body).includes(normalize(record.quote))) {
      console.error(`FAIL ${record.id}: quote absent from ${source.url}`);
      failed = true;
      continue;
    }
    console.log(`PASS ${record.id} · ${source.title}`);
  } catch (error) {
    console.error(`FAIL ${record.id}: ${error.message}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log(`PASS ${records.length} showcase record(s) verified against their linked source bodies.`);
