import { convention, validateConvention } from './data/convention.js';

const errors = validateConvention(convention);
if (errors.length) throw new Error(`Convention data invalid:\n${errors.join('\n')}`);
const $ = (selector) => document.querySelector(selector);
const element = (tag, className, text) => { const node = document.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; };
const candidates = Object.values(convention.candidates).flat();
const state = { office: 'party_leader', issue: 'all' };
const sourceById = new Map(convention.sources.map((source) => [source.id, source]));

function button(label, value, active, onClick) { const node = element('button', active ? 'filter is-active' : 'filter', label); node.type = 'button'; node.dataset.value = value; node.setAttribute('aria-pressed', String(active)); node.addEventListener('click', onClick); return node; }
function renderFilters() {
  $('#office-filters').replaceChildren(
    button('당대표', 'party_leader', state.office === 'party_leader', () => { state.office = 'party_leader'; render(); }),
    button('최고위원', 'supreme_council', state.office === 'supreme_council', () => { state.office = 'supreme_council'; render(); }),
  );
  $('#issue-filters').replaceChildren(button('전체 이슈', 'all', state.issue === 'all', () => { state.issue = 'all'; render(); }), ...convention.issues.map((issue) => button(issue.label, issue.id, state.issue === issue.id, () => { state.issue = issue.id; render(); })));
}
function renderStatus() {
  const groups = Object.entries(convention.candidates).map(([office, list]) => { const section = element('section', 'status-group'); section.append(element('h3', null, office === 'party_leader' ? '당대표' : '최고위원')); const listNode = element('ul'); for (const candidate of list) { const item = element('li'); item.append(element('strong', null, candidate.name), document.createTextNode(` · ${candidate.finalBallot} · ${candidate.result}`)); listNode.append(item); } section.append(listNode); return section; });
  $('#candidate-status').replaceChildren(...groups);
  $('#excluded-candidates').replaceChildren(...convention.excludedAfterRegistration.map((item) => element('p', 'boundary', `${item.name} — ${item.reason}${item.date ? ` (${item.date})` : ''}. ${item.boundary}`)));
}
function sourceLink(source) { const link = element('a', null, source.title); link.href = source.url; link.target = '_blank'; link.rel = 'noreferrer'; return link; }
function cellFor(position) {
  const cell = element('td', `status-${position.status.replaceAll('·', '-')}`); cell.append(element('strong', 'status-label', position.status));
  if (position.status === '확인 자료 없음') { cell.append(element('p', 'boundary', position.boundary)); return cell; }
  cell.append(element('blockquote', null, `“${position.quote}”`));
  const source = sourceById.get(position.sourceId); const meta = element('p', 'source-meta'); meta.append(document.createTextNode(`${position.date} · ${position.tier} · `), sourceLink(source)); const context = position.statementContext ? element('p', 'statement-context', position.statementContext) : null; cell.append(meta); if (context) cell.append(context); cell.append(element('p', 'boundary', position.boundary)); return cell;
}
function renderComparison() {
  const officeCandidates = convention.candidates[state.office];
  const issues = convention.issues.filter((issue) => state.issue === 'all' || issue.id === state.issue);
  $('#comparison-note').textContent = `${state.office === 'party_leader' ? '당대표 후보끼리' : '최고위원 후보끼리'}만 비교합니다. 서로 다른 직위의 후보를 한 표에서 순위화하지 않습니다.`;
  const table = element('table', 'comparison-table'); const head = element('thead'); const row = element('tr'); row.append(element('th', null, '이슈')); for (const candidate of officeCandidates) row.append(element('th', null, candidate.name)); head.append(row); const body = element('tbody');
  for (const issue of issues) { const issueRow = element('tr'); const label = element('th'); label.scope = 'row'; label.append(element('strong', null, issue.label), element('span', 'issue-scope', issue.scope)); issueRow.append(label); for (const candidate of officeCandidates) issueRow.append(cellFor(issue.positions.find((position) => position.candidateId === candidate.id))); body.append(issueRow); }
  table.append(head, body); $('#comparison-table').replaceChildren(table);
}
function renderSources() {
  const grouped = new Map();
  for (const source of convention.sources) {
    const key = source.url;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(source);
  }
  $('#sources').replaceChildren(...[...grouped.values()].map((entries) => {
    const [source] = entries;
    const card = element('article', 'source-card');
    card.append(element('h3', null, source.title), element('p', null, `${source.date} · ${source.tier}`), sourceLink(source));
    if (entries.length === 1) card.append(element('p', 'boundary', source.caveat));
    else {
      const notes = element('ul', 'source-caveats');
      for (const entry of entries) notes.append(element('li', 'boundary', entry.caveat));
      card.append(notes);
    }
    return card;
  }));
}
function renderSelectionLens() {
  const lens = convention.event.issueSelectionLens;
  const list = element('ul');
  for (const priority of lens.priorities) list.append(element('li', null, priority));
  const note = element('p', 'boundary', lens.boundary);
  const source = element('a', null, '근거 메모 보기'); source.href = lens.sourceNote; source.target = '_blank'; source.rel = 'noreferrer';
  $('#selection-lens').replaceChildren(element('p', null, lens.basis), list, note, source);
}
function renderShowcase() {
  const candidateById = new Map(candidates.map((candidate) => [candidate.id, candidate]));
  const candidateSlides = convention.issues.flatMap((issue) => issue.positions
    .filter((position) => position.status === '직접 확인' && candidateById.get(position.candidateId)?.portrait)
    .map((position) => ({ ...position, issueLabel: issue.label, person: candidateById.get(position.candidateId), recordClass: '후보 공개 발언' })));
  const recordSlides = (convention.showcaseRecords ?? [])
    .filter((record) => record.status === '직접 확인' && record.person?.portrait)
    .map((record) => ({ ...record }));
  const slides = [...candidateSlides, ...recordSlides].sort((a, b) => b.date.localeCompare(a.date));
  const stage = $('#statement-showcase');
  const previous = $('#showcase-previous');
  const next = $('#showcase-next');
  const pause = $('#showcase-pause');
  if (!slides.length) { stage.textContent = '표시할 공개 프로필 사진과 직접 인용이 함께 확인된 기록이 없습니다.'; previous.hidden = next.hidden = pause.hidden = true; return; }
  let index = 0;
  let paused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer;
  const stop = () => { if (timer) window.clearInterval(timer); timer = undefined; };
  const start = () => { stop(); if (!paused) timer = window.setInterval(() => { index = (index + 1) % slides.length; draw(); }, 6500); };
  const draw = () => {
    const slide = slides[index]; const source = sourceById.get(slide.sourceId);
    const person = slide.person;
    const card = element('article', 'showcase-card');
    const photoLink = element('a', 'showcase-photo-link'); photoLink.href = person.portrait.sourceUrl; photoLink.target = '_blank'; photoLink.rel = 'noreferrer'; photoLink.setAttribute('aria-label', `${person.name} ${person.portrait.label} 원문 열기`);
    const photo = document.createElement('img'); photo.className = 'showcase-photo'; photo.src = person.portrait.url; photo.alt = `${person.name} 공개 프로필 사진`; photo.loading = 'eager'; photo.addEventListener('error', () => { photoLink.replaceChildren(element('span', 'showcase-photo-fallback', '사진 원문을 불러오지 못했습니다')); }); photoLink.append(photo);
    const copy = element('div', 'showcase-copy'); copy.append(element('p', 'showcase-position', person.office), element('h3', null, person.name), element('p', 'showcase-issue', slide.issueLabel), element('blockquote', null, `“${slide.quote}”`));
    const meta = element('p', 'showcase-meta'); meta.append(document.createTextNode(`${slide.date} · ${slide.recordClass} · ${slide.status} · `), sourceLink(source));
    const provenance = element('a', 'portrait-provenance', person.portrait.label); provenance.href = person.portrait.sourceUrl; provenance.target = '_blank'; provenance.rel = 'noreferrer'; copy.append(meta, provenance, element('p', 'boundary', slide.boundary));
    const count = element('p', 'showcase-count', `${index + 1} / ${slides.length}`); card.append(photoLink, copy, count); stage.replaceChildren(card);
    previous.disabled = slides.length < 2; next.disabled = slides.length < 2;
    pause.textContent = paused ? '자동 넘김 시작' : '자동 넘김 멈춤'; pause.setAttribute('aria-pressed', String(paused));
  };
  previous.addEventListener('click', () => { index = (index - 1 + slides.length) % slides.length; draw(); start(); });
  next.addEventListener('click', () => { index = (index + 1) % slides.length; draw(); start(); });
  pause.addEventListener('click', () => { paused = !paused; draw(); start(); });
  stage.addEventListener('mouseenter', stop); stage.addEventListener('mouseleave', start); stage.addEventListener('focusin', stop); stage.addEventListener('focusout', start);
  draw(); start();
}
function render() { renderFilters(); renderComparison(); }
renderShowcase();
renderStatus(); renderSelectionLens(); renderSources(); render();
