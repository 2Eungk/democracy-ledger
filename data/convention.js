const unknown = (candidateId) => ({
  candidateId,
  status: '확인 자료 없음',
  quote: '',
  date: '',
  sourceId: '',
  tier: '',
  boundary: '검토한 공개 자료에서 직접 발언을 찾지 못함. 이는 해당 후보에게 입장이 없다는 증거는 아닙니다.',
});

const candidateIds = ['kim-min-seok', 'jung-cheong-rae', 'choi-min-hee', 'kim-yong', 'seo-mi-hwa', 'han-min-soo', 'lee-seong-yoon', 'park-sun-won'];
const fillUnknown = (records) => candidateIds.map((candidateId) => records.find((record) => record.candidateId === candidateId) ?? unknown(candidateId));

export const convention = Object.freeze({
  event: {
    name: '더불어민주당 제3차 정기전국당원대회',
    date: '2026-08-17',
    theme: '투표는 총알보다 강하다',
    boundary: '이 화면은 후보별 공개 발언의 확인 상태를 비교합니다. 찬반, 지지율, 계파·동기·영향력 또는 정책 효과를 판단하지 않습니다.',
    issueSelectionLens: {
      label: '사안 선정 관점',
      basis: '유시민이 김남국 사례를 계기로 제기한 “청와대와 민주당의 관계”, 그리고 책임추궁 부재에 관한 문제의식을 사안 선정의 우선순위로만 사용합니다.',
      priorities: ['당·대통령실 등 공적 권력 관계에서 결정의 독립성이 쟁점인가', '임명·공천·조직 운영에 책임추궁·설명 절차가 쟁점인가', '주장과 반론을 공개 원문·공식 기록으로 검증할 수 있는가'],
      boundary: '이 관점은 무엇을 먼저 조사할지 정하는 기준일 뿐, 영상 속 인과 해석을 사실로 확정하거나 후보의 동기·계파·우열·정책 효과를 판단하지 않습니다.',
      sourceNote: './docs/source-note-yusimin-video.md',
    },
  },
  candidates: {
    party_leader: [
      { id: 'kim-min-seok', name: '김민석', office: '당대표', finalBallot: '최종 투표 대상', result: '당선', resultSourceId: 'result-leader-report', portrait: { url: 'https://theminjoo.kr/people/connect/people/364/profile.jpg', sourceUrl: 'https://theminjoo.kr/main/sub/introduce/team.php?class=2', label: '더불어민주당 공개 프로필 사진' } },
      { id: 'jung-cheong-rae', name: '정청래', office: '당대표', finalBallot: '최종 투표 대상', result: '미당선', resultSourceId: 'result-leader-report', portrait: { url: 'https://theminjoo.kr/people/connect/people/355/profile.jpg', sourceUrl: 'https://theminjoo.kr/main/sub/introduce/team.php?class=2', label: '더불어민주당 공개 프로필 사진' } },
    ],
    supreme_council: [
      { id: 'choi-min-hee', name: '최민희', office: '최고위원', finalBallot: '최종 투표 대상', result: '당선', resultSourceId: 'result-supreme-report', portrait: { url: 'https://theminjoo.kr/people/connect/people/1288/profile.jpg', sourceUrl: 'https://theminjoo.kr/main/sub/introduce/team.php?class=2', label: '더불어민주당 공개 프로필 사진' } },
      { id: 'kim-yong', name: '김용', office: '최고위원', finalBallot: '최종 투표 대상', result: '미당선', resultSourceId: 'result-supreme-report' },
      { id: 'seo-mi-hwa', name: '서미화', office: '최고위원', finalBallot: '최종 투표 대상', result: '당선', resultSourceId: 'result-supreme-report', portrait: { url: 'https://theminjoo.kr/people/connect/people/13171917/profile.jpg', sourceUrl: 'https://theminjoo.kr/main/sub/introduce/team.php?class=2', label: '더불어민주당 공개 프로필 사진' } },
      { id: 'han-min-soo', name: '한민수', office: '최고위원', finalBallot: '최종 투표 대상', result: '당선', resultSourceId: 'result-supreme-report', portrait: { url: 'https://theminjoo.kr/people/connect/people/1422/profile.jpg', sourceUrl: 'https://theminjoo.kr/main/sub/introduce/team.php?class=2', label: '더불어민주당 공개 프로필 사진' } },
      { id: 'lee-seong-yoon', name: '이성윤', office: '최고위원', finalBallot: '최종 투표 대상', result: '당선', resultSourceId: 'result-supreme-report', portrait: { url: 'https://theminjoo.kr/people/connect/people/011301720/profile.jpg', sourceUrl: 'https://theminjoo.kr/main/sub/introduce/team.php?class=2', label: '더불어민주당 공개 프로필 사진' } },
      { id: 'park-sun-won', name: '박선원', office: '최고위원', finalBallot: '최종 투표 대상', result: '당선', resultSourceId: 'result-supreme-report', portrait: { url: 'https://theminjoo.kr/people/connect/people/13432363/profile.jpg', sourceUrl: 'https://theminjoo.kr/main/sub/introduce/team.php?class=2', label: '더불어민주당 공개 프로필 사진' } },
    ],
  },
  showcaseRecords: [
    {
      id: 'park-beom-gye-kim-rhetoric-response',
      person: { id: 'park-beom-gye', name: '박범계', office: '국회의원', portrait: { url: 'https://theminjoo.kr/people/connect/people/112/profile.jpg', sourceUrl: 'https://theminjoo.kr/main/sub/introduce/team.php?class=2', label: '더불어민주당 공개 프로필 사진' } },
      recordClass: '정치인 응답',
      issueLabel: '조희대 대법원장 관련 발언에 대한 응답',
      status: '직접 확인',
      quote: '저는 김민석 당대표의 표현을 넘어설 수가 없는 사람입니다.',
      date: '2026-08-20',
      sourceId: 'ddanzi-park-response',
      boundary: '김민석의 관련 표현을 직접 언급한 박범계의 인터뷰 응답입니다. 정식 탄핵 방침·당론·조직적 공조 또는 법적 판단으로 표시하지 않습니다.',
    },
    {
      id: 'kim-min-seok-convention-review-tf',
      person: { id: 'kim-min-seok', name: '김민석', office: '더불어민주당 당대표', portrait: { url: 'https://theminjoo.kr/people/connect/people/364/profile.jpg', sourceUrl: 'https://theminjoo.kr/main/sub/introduce/team.php?class=2', label: '더불어민주당 공개 프로필 사진' } },
      recordClass: '당 공식 회의 발언',
      issueLabel: '전당대회 평가·제도 개선 계획',
      status: '직접 확인',
      quote: '전대 과정에서 제기된 연설 없는 투표, 검증 없는 조사 등의 문제점 개선을 위해 곧 외부 인사 중심으로 전대 평가 및 전대 제도 개선 TF를 설치하겠습니다.',
      date: '2026-08-24',
      sourceId: 'theminjoo-kim-convention-review',
      boundary: '당대표의 TF 설치 계획 발언입니다. 여론조사 조작 등 개별 주장·법 위반의 사실, TF 구성 완료 또는 조사·법적 검토의 결과로 표시하지 않습니다.',
    },
    {
      id: 'kim-min-seok-presidential-office-unity-briefing',
      person: { id: 'kim-min-seok', name: '김민석', office: '더불어민주당 당대표', portrait: { url: 'https://theminjoo.kr/people/connect/people/364/profile.jpg', sourceUrl: 'https://theminjoo.kr/main/sub/introduce/team.php?class=2', label: '더불어민주당 공개 프로필 사진' } },
      recordClass: '청와대 공식 브리핑의 귀속 발언',
      issueLabel: '전당대회 이후 당내 단합 제안',
      status: '직접 확인',
      quote: '전당대회 과정에서의 일부 과한 표현에 대해 사과했고, 당의 단합과 국정운영의 뒷받침을 함께하자',
      date: '2026-08-19',
      sourceId: 'president-office-party-dinner',
      boundary: '청와대 서면브리핑이 김민석에게 귀속한 만찬 발언입니다. 청와대의 전당대회 지시·개입, 후보 선출 또는 내부 갈등 해결의 증거로 표시하지 않습니다.',
    },
    {
      id: 'kim-min-seok-grand-integration-launch',
      person: { id: 'kim-min-seok', name: '김민석', office: '더불어민주당 당대표', portrait: { url: 'https://theminjoo.kr/people/connect/people/364/profile.jpg', sourceUrl: 'https://theminjoo.kr/main/sub/introduce/team.php?class=2', label: '더불어민주당 공개 프로필 사진' } },
      recordClass: '당 공식 회의 발언',
      issueLabel: '전당대회 이후 대통합추진단 운영 방향',
      status: '직접 확인',
      quote: '대통합의 원칙은 ‘이기는 대통합’입니다. 그리고 ‘지속 가능한 대통합’입니다.',
      date: '2026-08-25',
      sourceId: 'theminjoo-kim-grand-integration',
      boundary: '대통합추진단 1차 회의에서의 당대표 발언입니다. 특정 정당과의 합당·연대 성사, 조직 구성의 최종 확정 또는 당내 갈등 해결을 입증하는 자료로 표시하지 않습니다.',
    },
  ],
  excludedAfterRegistration: [
    { name: '송영길', reason: '확인 자료 없음', date: '', boundary: '최종 결과표에 포함되지 않은 사유는 직접 확인한 공식 자료에서 찾지 못해 기재하지 않습니다.' },
    { name: '김영호', reason: '사퇴 공고', date: '2026-08-16', sourceId: 'withdrawal-official', boundary: '당 공식 사퇴 공고에 따른 기록이며, 이 화면은 사퇴 사유를 추가로 추정하지 않습니다.' },
    { name: '임미애', reason: '사퇴 공고', date: '2026-08-16', sourceId: 'withdrawal-official', boundary: '당 공식 사퇴 공고에 따른 기록이며, 이 화면은 사퇴 사유를 추가로 추정하지 않습니다.' },
  ],
  sources: [
    { id: 'result-leader-report', title: '더불어민주당 중앙당선거관리위원회 — 제3차 정기전국전당원대회 당대표·최고위원 선거 결과', url: 'https://theminjoo.kr/main/sub/news/view.php?sno=0&brd=1&post=1219700&search=', tier: '당 공식 선거 결과', date: '2026-08-17', caveat: '더불어민주당 공지에 게시된 선거 결과표입니다. 이 화면은 당선·미당선과 최종 투표 대상 여부만 보이며, 득표율·지지 기반·정치적 의미를 해석하지 않습니다.' },
    { id: 'result-supreme-report', title: '더불어민주당 중앙당선거관리위원회 — 제3차 정기전국전당원대회 당대표·최고위원 선거 결과', url: 'https://theminjoo.kr/main/sub/news/view.php?sno=0&brd=1&post=1219700&search=', tier: '당 공식 선거 결과', date: '2026-08-17', caveat: '더불어민주당 공지에 게시된 선거 결과표입니다. 이 화면은 당선·미당선과 최종 투표 대상 여부만 보이며, 득표율·지지 기반·정치적 의미를 해석하지 않습니다.' },
    { id: 'withdrawal-official', title: '더불어민주당 중앙당선거관리위원회 — 후보자 사퇴 공고', url: 'https://theminjoo.kr/main/sub/news/view.php?sno=0&brd=1&post=1219695&search=', tier: '당 공식 사퇴 공고', date: '2026-08-17', caveat: '더불어민주당 공지가 확인하는 것은 최고위원 본경선 등록 후보 두 명의 사퇴일입니다. 사퇴 사유나 다른 후보의 최종 결과표 미포함 사유는 이 자료로 판단하지 않습니다.' },
    { id: 'ddanzi-park-response', title: '박범계 인터뷰 — 김민석 표현 관련 응답', url: 'https://www.ddanzi.com/broadcast/892221259', tier: '방송·프로그램 전사', date: '2026-08-20', caveat: '프로그램 녹음·전사 페이지의 박범계 인터뷰입니다. 원문에 표시된 “약간의 오타가 있을 수” 있다는 고지를 따르며, 이 화면은 김민석 표현을 직접 언급한 응답의 범위만 표시합니다.' },
    { id: 'theminjoo-kim-convention-review', title: '더불어민주당 공보국 — 제4차 최고위원회의 모두발언', url: 'https://www.theminjoo.kr/main/sub/news/view.php?brd=230&post=1219781', tier: '당 공식 회의 발언', date: '2026-08-24', caveat: '더불어민주당 공보국이 공개한 제4차 최고위원회의 모두발언입니다. TF 설치와 법적 검토의 계획을 확인하는 자료이며, 개별 주장·조사·법적 처리의 사실 또는 결과를 입증하지 않습니다.' },
    { id: 'theminjoo-kim-grand-integration', title: '더불어민주당 공보국 — 김민석 당대표, 대통합추진단 1차 회의 모두발언', url: 'https://www.theminjoo.kr/main/sub/news/view.php?sno=0&brd=230&post=1219807&search=', tier: '당 공식 회의 발언', date: '2026-08-25', caveat: '더불어민주당 공보국이 공개한 대통합추진단 1차 회의 모두발언입니다. 추진단의 운영 방향에 관한 발언이며, 특정 정당과의 합당·연대 성사, 최종 조직 구성 또는 갈등 해결을 입증하지 않습니다.' },
    { id: 'president-office-party-dinner', title: '청와대 — 더불어민주당 당대표·후보자 만찬 간담회 서면브리핑', url: 'https://www.president.go.kr/briefings/3yJOCRPk', tier: '청와대 공식 브리핑', date: '2026-08-19', caveat: '청와대 정무수석 홍익표 명의의 서면브리핑입니다. 만찬과 브리핑에서 김민석에게 귀속한 발언을 확인하는 범위이며, 전당대회 지시·개입·후보 선출 또는 갈등 해결을 입증하지 않습니다.' },
    { id: 'yna-integration', title: '김민석표 연대·통합 시동', url: 'https://www.yna.co.kr/view/AKR20260824125000001?input=1195m', tier: '보도·발언 인용', date: '2026-08-24', caveat: '연합뉴스가 김민석 대표의 회의 발언을 인용한 보도입니다. 합당의 구체적 방식·시점까지 확정한 발언으로 읽지 않습니다.' },
    { id: 'yna-procedure', title: '제주·인천 합동연설회 보도', url: 'https://www.yna.co.kr/view/AKR20260808029951001?input=1195m', tier: '보도·발언 인용', date: '2026-08-08', caveat: '연합뉴스의 합동연설회 보도입니다. 해당 인용은 경선 절차 논쟁에 관한 발언이며, 일반적 제도 입장 전체를 확정하지 않습니다.' },
    { id: 'newsis-housing', title: '전당대회 D-4 수도권 표심 공략', url: 'https://www.newsis.com/view/NISX20260813_0003748547', tier: '보도·발언 인용', date: '2026-08-13', caveat: '뉴시스가 후보의 인터뷰·발언을 인용한 보도입니다. TF 설치 제안은 실행·입법 완료의 주장과 다릅니다.' },
    { id: 'mbn-kim-prosecution', title: '김용 더불어민주당 최고위원 후보 인터뷰', url: 'https://www.mbn.co.kr/news/politics/5208265', tier: '보도·발언 인용', date: '2026-07-26', caveat: 'MBN이 김용 후보 인터뷰를 전재한 보도입니다. 인용은 보완수사권 인정 문제와 대안 논의에 관한 것이며, 구체적 법안 문구의 지지로 넓히지 않습니다.' },
    { id: 'sbs-han-prosecution', title: '[정치쇼] 한민수 인터뷰', url: 'https://news.sbs.co.kr/news/endPage.do?news_id=N1008691324', tier: '보도·발언 인용', date: '2026-08-05', caveat: 'SBS가 한민수 후보 인터뷰로 게시한 문구입니다. 인용은 국회의 최종 입법 결정 절차를 언급한 범위이며, 보완수사권의 세부 설계를 확정한 발언으로 표시하지 않습니다.' },
    { id: 'ytn-park-prosecution', title: '박선원 "김민석 감기약? 잘못된 내용...당일 보낸 문자는 계엄 아닌 예산 관련 첩보"', url: 'https://www.ytn.co.kr/_ln/0101_202606291954121492', tier: '보도·발언 인용', date: '2026-06-29', caveat: 'YTN 라디오 인터뷰 전문입니다. 인용은 보완수사권 처리 시점과 숙의·공청회 제안에 관한 것이며, 최종 법안의 내용 또는 결과를 단정하지 않습니다.' },
    { id: 'mbc-choi-insurrection', title: '[뉴스하이킥] 최민희 "조희대-한덕수 만남 논란, 본질은 사법 신뢰 훼손과 특정 정치 세력 결탁 의혹"', url: 'https://n.news.naver.com/mnews/article/214/0001449920?sid=100', tier: '보도·발언 인용', date: '2025-09-17', caveat: 'MBC 라디오 인터뷰 전문입니다. 원문은 텍스트가 실제 방송과 차이가 날 수 있다고 고지합니다. 이 화면은 의총·상임위 논의 절차에 관한 발언 범위만 표시하며, 특정 법안의 지지·반대나 최종 당론으로 넓히지 않습니다.' },
    { id: 'ytn-han-insurrection', title: '한민수 "우상호, 정청래 막아섰다? 전혀 사실과 달라"', url: 'https://radio.ytn.co.kr/program/?f=2&id=104824&s_mcd=0214&s_hcd=01', tier: '보도·발언 인용', date: '2025-09-09', caveat: 'YTN 라디오 인터뷰 전문입니다. 원문은 텍스트가 실제 방송과 차이가 날 수 있다고 고지합니다. 이 화면은 전담 재판부 문제 제기와 형사부 구성 비유에 관한 발언 범위만 표시하며, 최종 당론·제도 설계·입법 결과를 단정하지 않습니다.' },
    { id: 'ohmy-kim-insurrection', title: '김용 "공소장이 무슨 연애편지인 줄" 정치검찰 디테일하게 파헤치니 헉!', url: 'https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003193415', tier: '보도·발언 인용', date: '2025-12-23', caveat: '오마이TV 인터뷰를 정리한 기사입니다. 이 화면은 진행자의 전담재판부 질문에 대한 짧은 응답만 표시하며, 구체적인 관할·법관 구성·헌법적 판단이나 입법 결과를 단정하지 않습니다.' },
    { id: 'ajunews-seo-insurrection', title: '與 3대특검특위 "내란전담재판부 법 통과 위해 최선 다할 것"', url: 'https://www.ajunews.com/view/20251121122542193', tier: '보도·발언 인용', date: '2025-11-21', caveat: '아주경제가 회의 발언을 인용한 기사입니다. 이 화면은 서미화 의원에게 직접 귀속된 사법부 책무 발언만 표시하며, 기사 제목이나 특위의 집단 입장을 개인의 전담재판부 법안 지지로 돌리지 않습니다.' },
    { id: 'news1-choi-property-tax', title: '최민희 "정부 세제개편안 옳다, 빨리 처리해야…미세 조정은 있을 수도"', url: 'https://www.news1.kr/politics/assembly/6261293', tier: '보도·발언 인용', date: '2026-08-18', caveat: '뉴스1이 라디오 발언을 인용한 보도입니다. 특정 세율·세목의 확정 지지나 입법 결과로 넓히지 않습니다.' },
    { id: 'news1-kim-property-tax', title: '與 "실수요자 주거 사다리 지킬 것"…부동산토론회 뒤 보유세 해법 분분', url: 'https://www.news1.kr/politics/assembly/6237910', tier: '보도·발언 인용', date: '2026-07-24', caveat: '뉴스1이 SBS 라디오 발언을 인용한 보도입니다. 대안 세제 설계 전체를 제시한 발언으로 표시하지 않습니다.' },
    { id: 'mbc-seo-property-tax', title: '[시선집중] 서미화 “대통령은 새벽까지 안 자고 일하는데 지도부는 잘 거 다 자고 자기 정치”', url: 'https://n.news.naver.com/mnews/article/214/0001515998?sid=100', tier: '보도·발언 인용', date: '2026-08-05', caveat: 'MBC 라디오 인터뷰 전문입니다. 서민 피해 방지와 세제 혜택 논의 발언 범위만 표시합니다.' },
    { id: 'mbc-han-property-tax', title: '[시선집중] 한민수 인터뷰', url: 'https://n.news.naver.com/mnews/article/214/0001515747?sid=100', tier: '보도·발언 인용', date: '2026-08-04', caveat: 'MBC 라디오 인터뷰 전문입니다. 당 공식 입장 미확정이라는 전제 아래 보도 내용에 대한 신중한 평가만 표시합니다.' },
    { id: 'mbc-choi-consumer', title: '[뉴스하이킥] 최민희 인터뷰', url: 'https://n.news.naver.com/mnews/article/214/0001429644?sid=100', tier: '보도·발언 인용', date: '2025-06-11', caveat: 'MBC 라디오 인터뷰 전문입니다. 원문은 텍스트가 실제 방송과 다를 수 있다고 고지합니다. 개인 의견으로 전제한 지역화폐 방식 언급만 표시합니다.' },
    { id: 'bbs-han-consumer', title: '한민수 인터뷰', url: 'https://news.bbsi.co.kr/news/articleView.html?idxno=3153611', tier: '보도·발언 인용', date: '2024-04-24', caveat: 'BBS 라디오 인터뷰 전문입니다. 원문은 실제 방송과 차이가 있을 수 있다고 고지합니다. 지원금의 소비·경제 활성화 가능성 언급 범위만 표시합니다.' },
    { id: 'penn-seo-consumer', title: '[펜앤현장] 복지위 추경안 보도', url: 'https://www.pennmike.com/news/articleView.html?idxno=117962', tier: '보도·발언 인용', date: '2026-04-02', caveat: '기사에 직접 귀속된 추경 처리 촉구 문구입니다. 특정 지급 방식·금액 또는 최종 예산 결과로 넓히지 않습니다.' },
    { id: 'incheon-park-consumer', title: '[인터뷰] 부평을 박선원', url: 'https://www.incheontoday.com/news/articleView.html?idxno=245578', tier: '보도·발언 인용', date: '2024-04-26', caveat: '인터뷰에 직접 귀속된 지원금 지급 주장입니다. 특정 법안의 최종 처리·정책 효과로 넓히지 않습니다.' },
    { id: 'hani-kim-internal', title: '김민석 후보 제주 합동연설회 발언', url: 'https://www.hani.co.kr/arti/politics/politics_general/1271986.html', tier: '보도·발언 인용', date: '2026-08-08', caveat: '한겨레가 김민석 후보의 합동연설회 발언을 인용한 보도입니다. 전당대회 이후 경선 갈등을 줄이겠다는 일반적 의지 범위만 표시합니다.' },
    { id: 'yna-kim-prosecution', title: '김민석 보완수사권 처리 발언', url: 'https://www.yna.co.kr/view/AKR20260716159451001', tier: '보도·발언 인용', date: '2026-07-16', caveat: '연합뉴스가 김민석 전 총리의 방송 발언을 인용한 보도입니다. 보완수사권 폐지 방향과 법 처리 시기 범위만 표시합니다.' },
    { id: 'ajunews-kim-insurrection', title: '김민석 국무회의 내란 심판 발언', url: 'https://www.ajunews.com/view/20251125103927193', tier: '보도·발언 인용', date: '2025-11-25', caveat: '아주경제가 김민석 국무총리의 국무회의 발언을 인용한 보도입니다. 내란 심판·정리의 일반 원칙 발언이며 재판부 설치·구성 판단으로 넓히지 않습니다.' },
    { id: 'einfomax-kim-property', title: '김민석 보유세·양도세 개편 신중 검토 발언', url: 'https://news.einfomax.co.kr/news/articleView.html?idxno=4421186', tier: '보도·발언 인용', date: '2026-06-22', caveat: '연합인포맥스가 김민석 국무총리의 간담회 답변을 인용한 보도입니다. 보유세·양도세 개편의 신중 검토와 미확정성 범위만 표시합니다.' },
    { id: 'ajunews-kim-consumer', title: '김민석 민생회복 소비쿠폰 신속 시행 발언', url: 'https://www.ajunews.com/view/20250705181720266', tier: '보도·발언 인용', date: '2025-07-05', caveat: '아주경제가 김민석 국무총리 SNS 문구를 인용한 보도입니다. 소비쿠폰의 신속 시행 발언이며 지급 방식·정책 효과의 확정으로 넓히지 않습니다.' },
    { id: 'seoul-jung-integration-prosecution', title: '정청래 통합·연대와 보완수사권 발언', url: 'https://m.seoul.co.kr/news/politics/2026/07/23/20260723500074', tier: '보도·발언 인용', date: '2026-07-23', caveat: '서울신문이 정청래 후보 기자회견 발언을 인용한 보도입니다. 통합·연대와 보완수사권 전면 폐지 발언을 각각의 문맥 범위에서만 표시합니다.' },
    { id: 'newsis-jung-internal', title: '정청래 선호투표제 발언', url: 'https://mobile.newsis.com/view/NISX20260714_0003708099', tier: '보도·발언 인용', date: '2026-07-14', caveat: '뉴시스가 정청래 후보의 방송 출연 발언을 인용한 보도입니다. 선호투표제의 당헌·당규상 근거에 관한 발언 범위만 표시합니다.' },
    { id: 'einfomax-jung-housing', title: '정청래 주택 공급 발언', url: 'https://news.einfomax.co.kr/news/articleView.html?idxno=4428807', tier: '보도·발언 인용', date: '2026-08-05', caveat: '연합인포맥스가 당대표 후보 방송토론의 정청래 발언을 인용한 보도입니다. LH 정상화와 공급 문제 발언을 세부 공약으로 넓히지 않습니다.' },
    { id: 'yna-jung-insurrection', title: '정청래 내란전담재판부 발언', url: 'https://www.yna.co.kr/view/AKR20251201043900001', tier: '보도·발언 인용', date: '2025-12-01', caveat: '연합뉴스가 정청래 대표 최고위원회의 발언을 인용한 보도입니다. 재판부 설치와 내란 청산 발언이며 개별 사건의 재판 결과를 단정하지 않습니다.' },
    { id: 'newsis-jung-consumer', title: '정청래 추경 민생지원금 발언', url: 'https://www.newsis.com/view/NISX20260404_0003577798', tier: '보도·발언 인용', date: '2026-04-04', caveat: '뉴시스가 정청래 대표 시장 방문 발언을 인용한 보도입니다. 추경 민생지원금의 위로·경기 활성화 기대 범위만 표시합니다.' },
  ],
  issues: [
    { id: 'integration', label: '정치 통합·연대의 절차', scope: '조국혁신당을 포함한 개혁·진보 세력과의 연대·통합 논의', positions: fillUnknown([
      { candidateId: 'kim-min-seok', status: '조건부·절차 제안', quote: '개혁 진보 정당들과 미래를 향한 연대의 다리를 놓겠다', date: '2026-08-24', sourceId: 'yna-integration', tier: '보도·발언 인용', boundary: '연대의 방향을 말한 인용입니다. 특정 정당과의 합당 방식·시점 확정으로 표시하지 않습니다.' },

      { candidateId: 'jung-cheong-rae', status: '직접 확인', quote: '범민주 진보의 통합과 연대를 추진하고 완성하겠다. 이래야 총선도 대선도 승리한다', date: '2026-07-23', sourceId: 'seoul-jung-integration-prosecution', tier: '보도·발언 인용', statementContext: '후보 활동 중 공개 발언', boundary: '범민주 진보의 통합·연대에 관한 발언입니다. 특정 정당·세력과의 협상 조건이나 실행 절차까지 정한 것으로 표시하지 않습니다.' },
    ]) },
    { id: 'internal-procedure', label: '당내 경선 절차', scope: '선호투표제·투표 진행을 둘러싼 공개 절차 논쟁', positions: fillUnknown([
      { candidateId: 'lee-seong-yoon', status: '직접 확인', quote: '전당대회 룰을 고치면서 당헌에 있지 않은 선호투표제를 도입하고 후보자 등록 때 무자격자를 등록해달라고 생떼 쓰고 투표가 끝났는데도 추가 투표를 요구하고 있다', date: '2026-08-08', sourceId: 'yna-procedure', tier: '보도·발언 인용', boundary: '해당 경선의 절차 변경·추가 투표 요구를 비판한 인용입니다. 다른 선거 제도 전반의 입장으로 넓히지 않습니다.' },
      { candidateId: 'kim-min-seok', status: '조건부·절차 제안', quote: '당의 모든 경선 갈등을 완전히 제로로 만들기 위한 노력을 시작하겠다', date: '2026-08-08', sourceId: 'hani-kim-internal', tier: '보도·발언 인용', statementContext: '후보 활동 중 공개 발언', boundary: '전당대회 이후 경선 갈등을 줄이겠다는 일반적 의지 발언입니다. 선호투표제·후보등록 등 개별 선거규칙의 찬반으로 표시하지 않습니다.' },
      { candidateId: 'jung-cheong-rae', status: '직접 확인', quote: '선호투표제는 전준위에서 결정할 때 그런 것을 할 수가 없었다. 당헌·당규에 없어서 당헌·당규 위반', date: '2026-07-14', sourceId: 'newsis-jung-internal', tier: '보도·발언 인용', statementContext: '후보 활동 중 공개 발언', boundary: '이번 전당대회 선호투표제의 당헌·당규상 근거에 관한 발언입니다. 모든 경선 절차에 대한 포괄 입장으로 넓히지 않습니다.' },
    ]) },
    { id: 'housing-supply', label: '주택 공급과 제도개혁', scope: '공급 확대를 위한 인허가·규제 및 입법 대응 제안', positions: fillUnknown([
      { candidateId: 'kim-min-seok', status: '조건부·절차 제안', quote: "당대표가 된다면, 당대표 직속으로 가칭 '부동산 공급드라이브 제도개혁 TF를 구성하고 입법 속도전을 전개하겠다", date: '2026-08-13', sourceId: 'newsis-housing', tier: '보도·발언 인용', boundary: 'TF 구성과 입법 대응이라는 제안입니다. 공급량·가격 효과 또는 실행 완료의 주장으로 표시하지 않습니다.' },
      { candidateId: 'jung-cheong-rae', status: '직접 확인', quote: '결국은 공급 문제를 해결해야 한다', date: '2026-08-05', sourceId: 'einfomax-jung-housing', tier: '보도·발언 인용', statementContext: '후보 활동 중 공개 발언', boundary: 'LH 정상화와 주택 공급 문제를 언급한 발언입니다. 공급 물량·입지·재원에 관한 독립적 세부 공약으로 표시하지 않습니다.' },
    ]) },
    { id: 'prosecution-supplemental-investigation', label: '검사의 보완수사권·처리 절차', scope: '검사의 보완수사권 존치·폐지 및 형사소송법 처리의 공개 발언', positions: fillUnknown([
      { candidateId: 'kim-min-seok', status: '직접 확인', quote: '폐지로 정리하는 게 좋겠다', date: '2026-07-16', sourceId: 'yna-kim-prosecution', tier: '보도·발언 인용', statementContext: '후보 활동 중 공개 발언', boundary: '보완수사권 폐지 방향과 법 처리 시기에 관한 발언입니다. 보완장치의 구체적 법안 문안이나 최종 국회 처리 결과로 넓히지 않습니다.' },
      { candidateId: 'jung-cheong-rae', status: '직접 확인', quote: '보완수사권은 전면 폐지하겠다', date: '2026-07-23', sourceId: 'seoul-jung-integration-prosecution', tier: '보도·발언 인용', statementContext: '후보 활동 중 공개 발언', boundary: '보완수사권의 전면 폐지와 당시 처리 목표를 말한 발언입니다. 폐지 뒤의 피해자 보호·경찰 통제 등 제도 설계 전체를 포괄하지 않습니다.' },
      { candidateId: 'kim-yong', status: '직접 확인', quote: '보완수사권을 갖다가 인정하는 문제는 빨리 좀 매듭짓는 이런 당의 방향대로 갔으면 좋겠습니다', date: '2026-07-26', sourceId: 'mbn-kim-prosecution', tier: '보도·발언 인용', boundary: '당의 처리 방향을 언급하면서도 국민이 납득할 대안 마련과 논의를 함께 말한 인용입니다. 특정 대안 조항을 지지한 것으로 표시하지 않습니다.' },
      { candidateId: 'han-min-soo', status: '조건부·절차 제안', quote: '국회에서 최종적으로 국회가 입법하는 거 아닙니까 하면서 국회에서 결정을 해달라고 말씀을 하셨기 때문에', date: '2026-08-05', sourceId: 'sbs-han-prosecution', tier: '보도·발언 인용', boundary: '보완수사권 관련 질문에서 국회의 최종 입법 결정 절차를 언급한 인용입니다. 한민수 후보가 세부 존치·폐지안을 확정한 발언으로 표시하지 않습니다.' },
      { candidateId: 'park-sun-won', status: '조건부·절차 제안', quote: '그래도 숙의를 해야 되고 공청회 같은 것을 한 번 정도는 더 해야 된다는 점', date: '2026-06-29', sourceId: 'ytn-park-prosecution', tier: '보도·발언 인용', boundary: '신속한 처리 가능성을 언급하면서 법사위 구성, 부작용 점검, 숙의·공청회를 제안한 인용입니다. 최종 법안의 내용 또는 결과를 단정하지 않습니다.' },
    ]) },
    { id: 'insurrection-adjudication-procedure', label: '내란 관련 사법처리·사법부 책임', scope: '내란 관련 사건의 전담 재판부 논의와 사법부 책임에 관해 직접 확인한 공개 발언', positions: fillUnknown([
      { candidateId: 'kim-min-seok', status: '조건부·절차 제안', quote: '내란의 심판과 정리에는 어떤 타협도 지연도 있어서는 안된다', date: '2025-11-25', sourceId: 'ajunews-kim-insurrection', tier: '보도·발언 인용', statementContext: '발언 당시 역할: 국무총리 (후보 공약 아님)', boundary: '국무회의에서 말한 내란 심판·정리의 일반 원칙입니다. 내란전담재판부 설치·구성·위헌성에 대한 찬반으로 표시하지 않습니다.' },
      { candidateId: 'jung-cheong-rae', status: '직접 확인', quote: '민주당은 신속한 내란전담재판부, 내란영장전담재판부 설치로 국민이 명령한 내란 청산을 반드시 완수하겠다', date: '2025-12-01', sourceId: 'yna-jung-insurrection', tier: '보도·발언 인용', statementContext: '발언 당시 역할: 당대표 (후보 공약 아님)', boundary: '내란전담·영장전담재판부 설치와 내란 청산에 관한 발언입니다. 개별 피고인의 처벌 결과 또는 사법판단을 단정하는 자료는 아닙니다.' },
      { candidateId: 'choi-min-hee', status: '조건부·절차 제안', quote: '일단 저는 내란 전담 재판부에 대해서 저희가 의총이나 이런 데서 한 번도 논의한 적이 없어요.', date: '2025-09-17', sourceId: 'mbc-choi-insurrection', tier: '보도·발언 인용', boundary: '2026-08-17 이전 공개 인터뷰에서 의총·상임위 논의 절차를 말한 기록입니다. 2026 전당대회 선거운동 공약, 특정 법안의 지지·반대, 최종 당론·입법 결과로 넓히지 않습니다.' },
      { candidateId: 'kim-yong', status: '직접 확인', quote: '진작 했어야죠.', date: '2025-12-23', sourceId: 'ohmy-kim-insurrection', tier: '보도·발언 인용', boundary: '2026-08-17 이전 공개 인터뷰에서 진행자의 내란전담재판부 질문에 짧게 응답한 기록입니다. 2026 전당대회 선거운동 공약, 구체적 관할·법관 구성·헌법적 판단, 최종 입법 결과로 넓히지 않습니다.' },
      { candidateId: 'seo-mi-hwa', status: '직접 확인', quote: '사법부는 국민에게 총칼을 들이댄 내란 세력을 일벌해야 할 의무가 있다', date: '2025-11-21', sourceId: 'ajunews-seo-insurrection', tier: '보도·발언 인용', boundary: '2026-08-17 이전 회의 발언에서 사법부의 책무를 말한 기록입니다. 2026 전당대회 선거운동 공약, 기사 제목의 집단 입장, 특정 전담재판부 법안의 개인 지지, 최종 입법 결과로 넓히지 않습니다.' },
      { candidateId: 'han-min-soo', status: '직접 확인', quote: '저는 문제 제기는 충분히 타당성이 있고요.', date: '2025-09-09', sourceId: 'ytn-han-insurrection', tier: '보도·발언 인용', boundary: '2026-08-17 이전 공개 인터뷰에서 전담 재판부 문제 제기와 형사부 구성 비유를 말한 기록입니다. 2026 전당대회 선거운동 공약, 최종 당론·제도 설계·입법 결과로 넓히지 않습니다.' },
    ]) },
    { id: 'property-tax-design', label: '부동산 보유세·세제 설계', scope: '보유세 강화와 실수요자·서민 보호에 관해 직접 확인한 공개 발언', positions: fillUnknown([
      { candidateId: 'kim-min-seok', status: '조건부·절차 제안', quote: '마지막까지 신중하게 보고 쉽게 결정하지 않는다는 입장을 일관되게 이야기해 왔다', date: '2026-06-22', sourceId: 'einfomax-kim-property', tier: '보도·발언 인용', statementContext: '발언 당시 역할: 국무총리 (후보 공약 아님)', boundary: '보유세·양도세 개편의 신중 검토와 미확정성을 말한 발언입니다. 증세·감세, 세율·대상, 특정 세목의 찬반으로 확대하지 않습니다.' },
      { candidateId: 'choi-min-hee', status: '직접 확인', quote: '정부의 세제개편안이 옳다고 생각하고 가능한 한 빨리 정부안을 처리하기를 바란다', date: '2026-08-18', sourceId: 'news1-choi-property-tax', tier: '보도·발언 인용', boundary: '2026-08-17 이후 공개 라디오 발언입니다. 2026 전당대회 선거운동 공약, 세부 세율·세목 확정 지지, 입법 결과 또는 정책 효과 단정으로 넓히지 않습니다.' },
      { candidateId: 'kim-yong', status: '직접 확인', quote: '보유세를 더 늘리면 안 된다', date: '2026-07-24', sourceId: 'news1-kim-property-tax', tier: '보도·발언 인용', boundary: '2026-08-17 이전 공개 라디오 발언입니다. 2026 전당대회 선거운동 공약, 대안 세제 설계 전체 또는 정책 효과 단정으로 넓히지 않습니다.' },
      { candidateId: 'seo-mi-hwa', status: '조건부·절차 제안', quote: '서민들이 피해가 되지 않도록 어떻게 하면 더 세제 혜택을 줄 수 있을 것인가. 이런 논의가 좀 더 심도 있게 되어져야 된다고 봐요.', date: '2026-08-05', sourceId: 'mbc-seo-property-tax', tier: '보도·발언 인용', boundary: '2026-08-17 이전 공개 인터뷰 발언입니다. 2026 전당대회 선거운동 공약, 특정 보유세율의 지지·반대 또는 정책 효과 단정으로 넓히지 않습니다.' },
      { candidateId: 'han-min-soo', status: '조건부·절차 제안', quote: '초고가의 핀셋증세다, 그리고 상당히 성과들이 나쁘지는 않게 보고 있습니다.', date: '2026-08-04', sourceId: 'mbc-han-property-tax', tier: '보도·발언 인용', boundary: '2026-08-17 이전 공개 인터뷰 발언입니다. 당 공식 입장 미확정 전제의 신중한 평가이며, 2026 전당대회 선거운동 공약, 세부 세율 확정 또는 정책 효과 단정으로 넓히지 않습니다.' },
    ]) },
    { id: 'consumer-support-payment', label: '민생회복 지원금·지역화폐 방식', scope: '소비 진작을 위한 민생회복 지원금과 지역화폐 방식에 관해 직접 확인한 공개 발언', positions: fillUnknown([
      { candidateId: 'kim-min-seok', status: '직접 확인', quote: '전 국민에 최대 55만 원을 지급하는 민생회복 소비쿠폰 사업을 빠르게 시행해 어려운 내수 시장에 활기를 불어넣겠다', date: '2025-07-05', sourceId: 'ajunews-kim-consumer', tier: '보도·발언 인용', statementContext: '발언 당시 역할: 국무총리 (후보 공약 아님)', boundary: '민생회복 소비쿠폰의 신속 시행 발언입니다. 지역화폐 방식, 이후 지급 규모 변경, 정책 효과의 실증·단정까지 포함하지 않습니다.' },
      { candidateId: 'jung-cheong-rae', status: '조건부·절차 제안', quote: '추경 민생 지원금이 조금이라도 위로가 됐으면 좋겠다', date: '2026-04-04', sourceId: 'newsis-jung-consumer', tier: '보도·발언 인용', statementContext: '발언 당시 역할: 당대표 (후보 공약 아님)', boundary: '추경 민생지원금의 위로와 경기 활성화 기대를 말한 발언입니다. 지급 대상, 금액, 보편·선별 기준을 제시한 것으로 표시하지 않습니다.' },
      { candidateId: 'choi-min-hee', status: '조건부·절차 제안', quote: '결정된 건 없지만 저 개인적으로는 전 국민하고 지역화폐 형식으로 하면 그게 훨씬 효과가 크지 않을까라고 개인적으로 생각합니다', date: '2025-06-11', sourceId: 'mbc-choi-consumer', tier: '보도·발언 인용', boundary: '2026-08-17 이전 공개 인터뷰의 개인 의견입니다. 2026 전당대회 선거운동 공약, 최종 지급 결정·규모 또는 정책 효과 단정으로 넓히지 않습니다.' },
      { candidateId: 'han-min-soo', status: '조건부·절차 제안', quote: '그러면 경제를 활성화시키는데 저는 충분한 역할을 할 수 있지 않을까.', date: '2024-04-24', sourceId: 'bbs-han-consumer', tier: '보도·발언 인용', boundary: '2026-08-17 이전 공개 인터뷰 발언입니다. 원문 텍스트가 방송과 다를 수 있다는 고지를 따르며, 2026 전당대회 선거운동 공약·최종 지급 결정 또는 정책 효과 단정으로 넓히지 않습니다.' },
      { candidateId: 'seo-mi-hwa', status: '조건부·절차 제안', quote: '추경은 처리 속도가 관건이다. 쓰지 않으면 민생 회복으로 이어질 수 있는 초유의 위기 국면', date: '2026-04-02', sourceId: 'penn-seo-consumer', tier: '보도·발언 인용', boundary: '2026-08-17 이전 기사에 직접 귀속된 발언입니다. 특정 지원금 지급 방식·금액, 2026 전당대회 선거운동 공약 또는 최종 예산 결과로 넓히지 않습니다.' },
      { candidateId: 'park-sun-won', status: '직접 확인', quote: '1인당 민생회복 지원금 25만원 지급이 이뤄져야 한다', date: '2024-04-26', sourceId: 'incheon-park-consumer', tier: '보도·발언 인용', boundary: '2026-08-17 이전 공개 인터뷰 발언입니다. 2026 전당대회 선거운동 공약, 최종 예산·법안 처리 또는 정책 효과 단정으로 넓히지 않습니다.' },
    ]) },
  ],
});

const allowedStatuses = new Set(['직접 확인', '조건부·절차 제안', '확인 자료 없음']);
const forbidden = new Set(['vote', 'votes', 'score', 'scorecard', 'faction', 'affiliation', 'influence', 'loyalty', 'motive', 'effectiveness', 'policyEffectiveness']);
const isHttpsUrl = (value) => {
  try { return typeof value === 'string' && /^https:\/\/[^/]/.test(value) && new URL(value).protocol === 'https:'; } catch { return false; }
};
const isIsoDate = (value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value ?? '')) return false;
  const [year, month, day] = value.split('-').map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return parsed.getUTCFullYear() === year && parsed.getUTCMonth() === month - 1 && parsed.getUTCDate() === day;
};
export function validateConvention(data) {
  const errors = [];
  const sourceIds = new Set(data.sources.map((source) => source.id));
  const ids = new Set(Object.values(data.candidates).flat().map((candidate) => candidate.id));
  for (const source of data.sources) if (!/^https:\/\//.test(source.url)) errors.push(`source ${source.id} requires HTTPS`);
  for (const candidate of Object.values(data.candidates).flat()) {
    if (!sourceIds.has(candidate.resultSourceId)) errors.push(`candidate result source missing: ${candidate.id}`);
    if (candidate.portrait && (!/^https:\/\//.test(candidate.portrait.url) || !/^https:\/\//.test(candidate.portrait.sourceUrl) || !candidate.portrait.label)) errors.push(`invalid portrait provenance: ${candidate.id}`);
  }
  for (const item of data.excludedAfterRegistration) {
    if (item.reason !== '확인 자료 없음' && !sourceIds.has(item.sourceId)) errors.push(`excluded candidate source missing: ${item.name}`);
  }
  for (const issue of data.issues) for (const position of issue.positions) {
    for (const key of Object.keys(position)) if (forbidden.has(key)) errors.push(`forbidden field: ${key}`);
    if (!ids.has(position.candidateId)) errors.push(`unknown candidate: ${position.candidateId}`);
    if (!allowedStatuses.has(position.status)) errors.push(`invalid evidence status: ${position.status}`);
    if (position.status === '확인 자료 없음') {
      if (!/직접 발언을 찾지 못함/.test(position.boundary) || !/입장이 없다는 증거는 아닙니다/.test(position.boundary)) errors.push('unknown position requires missing-material semantics');
    } else if (!sourceIds.has(position.sourceId) || !position.quote || !position.date || !position.boundary) errors.push(`sourced position incomplete: ${position.candidateId}`);
    else {
      const source = data.sources.find((item) => item.id === position.sourceId);
      if (position.statementContext && !(/^(후보 활동 중 공개 발언|발언 당시 역할: (국무총리|당대표) \(후보 공약 아님\))$/.test(position.statementContext))) errors.push(`invalid statement context: ${position.candidateId}`);
      if (/(국무총리|당대표)/.test(source?.caveat ?? '') && !position.statementContext) errors.push(`officeholder statement requires candidate-context label: ${position.candidateId}`);
    }
  }
  const showcaseIds = new Set();
  for (const record of data.showcaseRecords ?? []) {
    for (const key of Object.keys(record)) if (forbidden.has(key)) errors.push(`forbidden showcase field: ${key}`);
    const person = record.person;
    if (record.status !== '직접 확인' || !record.id || !record.recordClass || !record.issueLabel || !record.quote || !record.date || !record.boundary || !sourceIds.has(record.sourceId)) errors.push(`showcase record incomplete: ${record.id ?? 'unknown'}`);
    if (showcaseIds.has(record.id)) errors.push(`duplicate showcase record id: ${record.id}`);
    showcaseIds.add(record.id);
    if (!isIsoDate(record.date)) errors.push(`invalid showcase record date: ${record.id ?? 'unknown'}`);
    if (!person?.id || !person.name || !person.office || !person.portrait || !isHttpsUrl(person.portrait.url) || !isHttpsUrl(person.portrait.sourceUrl) || !person.portrait.label) errors.push(`invalid showcase portrait provenance: ${record.id ?? 'unknown'}`);
  }
  return errors;
}
