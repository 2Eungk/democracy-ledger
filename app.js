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
  const source = sourceById.get(position.sourceId); const meta = element('p', 'source-meta'); meta.append(document.createTextNode(`${position.date} · ${position.tier} · `), sourceLink(source)); cell.append(meta, element('p', 'boundary', position.boundary)); return cell;
}
function renderComparison() {
  const officeCandidates = convention.candidates[state.office];
  const issues = convention.issues.filter((issue) => state.issue === 'all' || issue.id === state.issue);
  $('#comparison-note').textContent = `${state.office === 'party_leader' ? '당대표 후보끼리' : '최고위원 후보끼리'}만 비교합니다. 서로 다른 직위의 후보를 한 표에서 순위화하지 않습니다.`;
  const table = element('table', 'comparison-table'); const head = element('thead'); const row = element('tr'); row.append(element('th', null, '이슈')); for (const candidate of officeCandidates) row.append(element('th', null, candidate.name)); head.append(row); const body = element('tbody');
  for (const issue of issues) { const issueRow = element('tr'); const label = element('th'); label.scope = 'row'; label.append(element('strong', null, issue.label), element('span', 'issue-scope', issue.scope)); issueRow.append(label); for (const candidate of officeCandidates) issueRow.append(cellFor(issue.positions.find((position) => position.candidateId === candidate.id))); body.append(issueRow); }
  table.append(head, body); $('#comparison-table').replaceChildren(table);
}
function renderSources() { $('#sources').replaceChildren(...convention.sources.map((source) => { const card = element('article', 'source-card'); card.append(element('h3', null, source.title), element('p', null, `${source.date} · ${source.tier}`), sourceLink(source), element('p', 'boundary', source.caveat)); return card; })); }
function renderSelectionLens() {
  const lens = convention.event.issueSelectionLens;
  const list = element('ul');
  for (const priority of lens.priorities) list.append(element('li', null, priority));
  const note = element('p', 'boundary', lens.boundary);
  const source = element('a', null, '근거 메모 보기'); source.href = lens.sourceNote; source.target = '_blank'; source.rel = 'noreferrer';
  $('#selection-lens').replaceChildren(element('p', null, lens.basis), list, note, source);
}
function render() { renderFilters(); renderComparison(); }
renderStatus(); renderSelectionLens(); renderSources(); render();
