const SUPPORTED_LANGUAGES = ["en", "ko", "de", "zh", "ja"];
const LANGUAGE_LABELS = { en: "English", ko: "한국어", de: "Deutsch", zh: "中文", ja: "日本語" };
const DATE_LOCALES = { en: "en-US", ko: "ko-KR", de: "de-DE", zh: "zh-CN", ja: "ja-JP" };
const DATE_TIME_ZONE = "Asia/Seoul";
const COPY = {
  en: {
    nav_latest: "Latest appeal", nav_requests: "Our requests", nav_about: "About this campaign",
    hero_eyebrow: "PlusToken · China · Victim restitution", hero_title: "Seven years of waiting.", hero_title_em: "Victims deserve answers.",
    hero_intro: "We call on Chinese authorities to publish verifiable information about assets seized in connection with the PlusToken case and explain how victims can seek restitution.",
    hero_variants: [{"title":"Seven years of waiting.","emphasis":"Victims deserve answers."},{"title":"Chinese authorities: return","emphasis":"victims’ money."}],
    hero_button: "Read the latest appeal", hero_button_secondary: "See our 3 requests", hero_note: "Independent advocacy project. Not affiliated with any government or recovery service.",
    latest_eyebrow: "From the community", latest_title: "Latest appeal", archive_eyebrow: "The record", archive_title: "Previous posts",
    address_eyebrow: "Who we are addressing", address_title: "Chinese authorities", address_body: "We ask the authorities handling the PlusToken case to provide public, verifiable answers about seized assets and victim restitution.",
    request_eyebrow: "Our request", request_title: "Transparency and remedy", request_body: "We ask relevant authorities to publish accessible, verifiable updates and explain whether and how affected people may submit claims for seized assets.",
    languages_eyebrow: "Languages", languages_body: "Choose English, Korean, German, Chinese, or Japanese using the menu above.",
    schedule_eyebrow: "Publishing schedule", schedule_title: "Every one or two days", schedule_body: "At least one appeal is scheduled at a random time. Some intervals include a second appeal 6–12 hours later.",
    share_title: "Share responsibly", share_body: "Share public information and personal experiences without threats, private details, or unverified accusations.",
    requests_eyebrow: "What we are asking for", requests_title: "Three clear answers for PlusToken victims",
    request1_title: "Account for seized assets", request1_body: "Publish an official, verifiable account of assets seized in the PlusToken case and their current status.",
    request2_title: "Explain the legal process", request2_body: "Clarify which authorities are responsible and what decisions have been made about those assets.",
    request3_title: "Provide a path to restitution", request3_body: "Tell victims whether they can submit claims, what evidence is needed, and how to check progress.",
    requests_note: "This campaign requests transparency and a fair process. It does not claim that a specific distribution or recovery is guaranteed.",
    footer_note: "Factual, peaceful, and open to everyone.", choose_language: "Choose language", loading: "Loading the latest appeal…", read: "Read →", empty_archive: "New appeals will appear here as they are published.", feed_error: "The post feed could not be loaded. Please try again later.", choose_post_language: "Choose post language", page_previous: "Previous", page_next: "Next", page_label: "Page"
  },
  ko: {
    nav_latest: "최신 호소문", nav_requests: "요구사항", nav_about: "캠페인 소개",
    hero_eyebrow: "플러스토큰 · 중국 · 피해자 구제", hero_title: "7년째 기다리고 있습니다.", hero_title_em: "피해자는 답변을 원합니다.",
    hero_intro: "중국 당국에 플러스토큰 사건 관련 압수 자산에 관한 검증 가능한 정보를 공개하고, 피해자가 구제를 신청할 수 있는 절차를 설명해 달라고 요청합니다.",
    hero_variants: [{"title":"7년째 기다리고 있습니다.","emphasis":"피해자는 답변을 원합니다."},{"title":"중국 당국은 피해자에게","emphasis":"우리 돈을 돌려주세요."}],
    hero_button: "최신 호소문 보기", hero_button_secondary: "요구사항 3가지 보기", hero_note: "독립적인 공익 캠페인입니다. 정부 기관이나 자산 회수 업체와 관련이 없습니다.",
    latest_eyebrow: "피해자 목소리", latest_title: "최신 호소문", archive_eyebrow: "기록", archive_title: "이전 게시물",
    address_eyebrow: "요청 대상", address_title: "중국 당국", address_body: "플러스토큰 사건 담당 당국에 압수 자산과 피해자 구제에 관한 공개적이고 검증 가능한 답변을 요청합니다.",
    request_eyebrow: "우리의 요청", request_title: "투명한 정보와 피해 구제", request_body: "관련 당국에 확인 가능한 진행 상황을 공개하고 피해자가 압수 자산 반환을 신청할 수 있는지, 방법은 무엇인지 설명해 달라고 요청합니다.",
    languages_eyebrow: "언어", languages_body: "위 메뉴에서 영어, 한국어, 독일어, 중국어 또는 일본어를 선택할 수 있습니다.",
    schedule_eyebrow: "게시 일정", schedule_title: "하루 또는 이틀 간격", schedule_body: "매번 게시 시각은 무작위로 정해집니다. 일부 일정에는 6~12시간 뒤 추가 게시물이 올라옵니다.",
    share_title: "책임 있게 공유해 주세요", share_body: "위협, 개인정보 또는 확인되지 않은 주장을 게시하지 말고 공개 정보와 개인 경험을 공유해 주세요.",
    requests_eyebrow: "우리가 요구하는 것", requests_title: "플러스토큰 피해자를 위한 세 가지 답변",
    request1_title: "압수 자산 내역 공개", request1_body: "플러스토큰 사건에서 압수한 자산과 현재 상태를 공식적이고 검증 가능한 자료로 공개해 주세요.",
    request2_title: "법적 처리 절차 설명", request2_body: "담당 당국과 해당 자산에 대해 내려진 결정을 명확히 밝혀 주세요.",
    request3_title: "피해자 환급 절차 안내", request3_body: "피해자가 신청할 수 있는지, 필요한 증빙은 무엇인지, 진행 상황을 어떻게 확인하는지 알려 주세요.",
    requests_note: "이 캠페인은 투명한 정보 공개와 공정한 절차를 요청합니다. 특정한 환급이나 자산 회수를 보장하지 않습니다.",
    footer_note: "사실에 근거하고 평화롭게, 누구나 참여할 수 있습니다.", choose_language: "언어 선택", loading: "최신 호소문을 불러오는 중…", read: "읽기 →", empty_archive: "새 호소문이 게시되면 여기에 표시됩니다.", feed_error: "게시물을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.", choose_post_language: "게시물 언어 선택", page_previous: "이전", page_next: "다음", page_label: "페이지"
  },
  de: {
    nav_latest: "Aktueller Aufruf", nav_requests: "Unsere Forderungen", nav_about: "Über diese Kampagne",
    hero_eyebrow: "PlusToken · China · Entschädigung für Betroffene", hero_title: "Sieben Jahre des Wartens.", hero_title_em: "Betroffene verdienen Antworten.",
    hero_intro: "Wir fordern die chinesischen Behörden auf, überprüfbare Informationen zu den im Zusammenhang mit dem PlusToken-Fall beschlagnahmten Vermögenswerten zu veröffentlichen und zu erklären, wie Betroffene Entschädigung beantragen können.",
    hero_variants: [{"title":"Sieben Jahre des Wartens.","emphasis":"Betroffene verdienen Antworten."},{"title":"Chinesische Behörden: Geben Sie","emphasis":"den Betroffenen ihr Geld zurück."}],
    hero_button: "Aktuellen Aufruf lesen", hero_button_secondary: "Unsere drei Forderungen", hero_note: "Unabhängige Initiative. Keine Verbindung zu einer Regierung oder einem Rückholservice.",
    latest_eyebrow: "Aus der Gemeinschaft", latest_title: "Aktueller Aufruf", archive_eyebrow: "Dokumentation", archive_title: "Frühere Beiträge",
    address_eyebrow: "An wen wir uns wenden", address_title: "Chinesische Behörden", address_body: "Wir bitten die für den PlusToken-Fall zuständigen Behörden um öffentliche, überprüfbare Antworten zu beschlagnahmten Vermögenswerten und zur Entschädigung der Betroffenen.",
    request_eyebrow: "Unsere Forderung", request_title: "Transparenz und Abhilfe", request_body: "Wir bitten die zuständigen Behörden um zugängliche, überprüfbare Informationen und um eine Erklärung, ob und wie Betroffene Ansprüche auf beschlagnahmte Vermögenswerte geltend machen können.",
    languages_eyebrow: "Sprachen", languages_body: "Wählen Sie oben Englisch, Koreanisch, Deutsch, Chinesisch oder Japanisch.",
    schedule_eyebrow: "Veröffentlichungsrhythmus", schedule_title: "Alle ein bis zwei Tage", schedule_body: "Mindestens ein Aufruf erscheint zu einer zufällig gewählten Uhrzeit. Manchmal folgt sechs bis zwölf Stunden später ein weiterer.",
    share_title: "Bitte verantwortungsvoll teilen", share_body: "Teilen Sie öffentliche Informationen und persönliche Erfahrungen, jedoch keine Drohungen, privaten Daten oder unbestätigten Anschuldigungen.",
    requests_eyebrow: "Was wir fordern", requests_title: "Drei klare Antworten für PlusToken-Betroffene",
    request1_title: "Beschlagnahmte Vermögenswerte offenlegen", request1_body: "Veröffentlichen Sie eine offizielle, überprüfbare Aufstellung der im PlusToken-Fall beschlagnahmten Vermögenswerte und ihres aktuellen Status.",
    request2_title: "Das rechtliche Verfahren erklären", request2_body: "Klären Sie, welche Behörden zuständig sind und welche Entscheidungen zu diesen Vermögenswerten getroffen wurden.",
    request3_title: "Weg zur Entschädigung aufzeigen", request3_body: "Informieren Sie Betroffene, ob sie Anträge stellen können, welche Nachweise erforderlich sind und wie sie den Bearbeitungsstand prüfen können.",
    requests_note: "Diese Kampagne fordert Transparenz und ein faires Verfahren. Sie verspricht keine bestimmte Auszahlung oder Rückholung.",
    footer_note: "Sachlich, friedlich und offen für alle.", choose_language: "Sprache auswählen", loading: "Der aktuelle Aufruf wird geladen…", read: "Lesen →", empty_archive: "Neue Aufrufe erscheinen hier nach ihrer Veröffentlichung.", feed_error: "Die Beiträge konnten nicht geladen werden. Bitte versuchen Sie es später erneut.", choose_post_language: "Sprache des Beitrags auswählen", page_previous: "Zurück", page_next: "Weiter", page_label: "Seite"
  },
  ja: {
    nav_latest: "最新の訴え", nav_requests: "私たちの要望", nav_about: "このキャンペーンについて",
    hero_eyebrow: "PlusToken · 中国 · 被害者救済", hero_title: "被害者は7年間、待ち続けています。", hero_title_em: "明確な回答が必要です。",
    hero_intro: "PlusToken事件に関連して押収された資産について、検証可能な情報を公開し、被害者が救済を申請する方法を説明するよう中国当局に求めます。",
    hero_variants: [{"title":"被害者は7年間、待ち続けています。","emphasis":"明確な回答が必要です。"},{"title":"中国当局に求めます","emphasis":"被害者にお金を返してください。"}],
    hero_button: "最新の訴えを読む", hero_button_secondary: "3つの要望を見る", hero_note: "独立した市民活動です。政府機関や資産回収業者とは関係ありません。",
    latest_eyebrow: "コミュニティから", latest_title: "最新の訴え", archive_eyebrow: "記録", archive_title: "過去の投稿",
    address_eyebrow: "要望先", address_title: "中国当局", address_body: "PlusToken事件を担当する当局に対し、押収資産と被害者救済について、公開された検証可能な回答を求めます。",
    request_eyebrow: "私たちの要望", request_title: "透明性と救済", request_body: "関係当局に、確認可能な進捗情報を公開し、被害者が押収資産の返還を申請できるか、またその方法を説明するよう求めます。",
    languages_eyebrow: "言語", languages_body: "上のメニューから英語、韓国語、ドイツ語、中国語、日本語を選べます。",
    schedule_eyebrow: "投稿予定", schedule_title: "1～2日ごと", schedule_body: "投稿時刻は毎回ランダムに設定されます。一部の日程では、6～12時間後に追加の投稿が行われます。",
    share_title: "責任を持って共有してください", share_body: "脅迫、個人情報、未確認の主張を避け、公開情報や個人の経験を共有してください。",
    requests_eyebrow: "私たちが求めること", requests_title: "PlusToken被害者への3つの明確な回答",
    request1_title: "押収資産の内容を公開する", request1_body: "PlusToken事件で押収された資産と現在の状況について、公式かつ検証可能な情報を公開してください。",
    request2_title: "法的な処理手続きを説明する", request2_body: "担当機関と、資産について決定された内容を明らかにしてください。",
    request3_title: "被害者救済の申請方法を示す", request3_body: "申請の可否、必要書類、進捗状況の確認方法を被害者に知らせてください。",
    requests_note: "この活動は透明性と公正な手続きを求めるものです。特定の返金や資産回収を保証するものではありません。",
    footer_note: "事実に基づき、平和的に、誰でも参加できます。", choose_language: "言語を選択", loading: "最新の訴えを読み込んでいます…", read: "読む →", empty_archive: "新しい訴えは公開後ここに表示されます。", feed_error: "投稿を読み込めませんでした。後でもう一度お試しください。", choose_post_language: "投稿の言語を選択", page_previous: "前へ", page_next: "次へ", page_label: "ページ"
  },
  zh: {
    nav_latest: "最新呼吁", nav_requests: "我们的诉求", nav_about: "关于本行动",
    hero_eyebrow: "PlusToken · 中国 · 受害者救济", hero_title: "受害者已等待七年。", hero_title_em: "他们应当得到答复。",
    hero_intro: "我们呼吁中国有关部门公开可核实的 PlusToken 案相关查扣资产信息，并说明受害者如何申请救济。",
    hero_variants: [{"title":"受害者已等待七年。","emphasis":"他们应当得到答复。"},{"title":"请中国有关部门","emphasis":"把受害者的钱还回来。"}],
    hero_button: "阅读最新呼吁", hero_button_secondary: "查看三项诉求", hero_note: "这是独立的公益倡议，与任何政府机构或资产追回服务无关。",
    latest_eyebrow: "受害者心声", latest_title: "最新呼吁", archive_eyebrow: "记录", archive_title: "以往文章",
    address_eyebrow: "诉求对象", address_title: "中国有关部门", address_body: "我们请负责 PlusToken 案的部门公开、可核实地说明查扣资产情况及受害者救济安排。",
    request_eyebrow: "我们的诉求", request_title: "公开信息与救济", request_body: "我们呼吁有关部门发布清晰、可核实的进展，并说明受影响者能否以及如何申请查扣资产返还。",
    languages_eyebrow: "语言", languages_body: "请使用上方菜单选择英语、韩语、德语、中文或日语。",
    schedule_eyebrow: "发布安排", schedule_title: "每隔一至两天", schedule_body: "每篇呼吁的发布时间随机安排；部分时段会在 6 至 12 小时后再发布一篇。",
    share_title: "请负责任地分享", share_body: "分享公开信息和个人经历时，请勿发布威胁、隐私信息或未经核实的指控。",
    requests_eyebrow: "我们的具体诉求", requests_title: "请为 PlusToken 受害者明确答复三件事",
    request1_title: "说明查扣资产情况", request1_body: "请以官方且可核实的资料公布 PlusToken 案查扣资产及其当前状态。",
    request2_title: "解释法律处理程序", request2_body: "请说明由哪些部门负责，以及对相关资产已作出哪些决定。",
    request3_title: "公布受害者救济途径", request3_body: "请说明受害者能否提出申请、需要哪些证明，以及如何查询进度。",
    requests_note: "本行动呼吁信息透明和程序公平，不承诺一定能够获得返还或追回资产。",
    footer_note: "以事实为基础，和平表达，欢迎所有人参与。", choose_language: "选择语言", loading: "正在加载最新呼吁…", read: "阅读 →", empty_archive: "新呼吁发布后会显示在这里。", feed_error: "暂时无法加载文章，请稍后再试。", choose_post_language: "选择文章语言", page_previous: "上一页", page_next: "下一页", page_label: "页"
  }
};

let posts = [];
let currentLanguage = "en";
let heroMessageIndex = Math.floor(Math.random() * 2);
let archivePage = 1;
const ARCHIVE_PAGE_SIZE = 10;
function getSavedLanguage() {
  try {
    const saved = localStorage.getItem("plus-token-language");
    return SUPPORTED_LANGUAGES.includes(saved) ? saved : "en";
  } catch {
    return "en";
  }
}
function applyLanguage(language) {
  currentLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : "en";
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = COPY[currentLanguage][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  const heroMessage = COPY[currentLanguage].hero_variants[heroMessageIndex];
  document.querySelector("[data-i18n=hero_title]").textContent = heroMessage.title;
  document.querySelector("[data-i18n=hero_title_em]").textContent = heroMessage.emphasis;
  const selector = document.querySelector("#site-language");
  selector.value = currentLanguage;
  selector.setAttribute("aria-label", COPY[currentLanguage].choose_language);
  try { localStorage.setItem("plus-token-language", currentLanguage); } catch { /* Preference is optional. */ }
  if (posts.length) {
    renderPost(posts[0]);
    document.querySelector("#post-date").textContent = new Intl.DateTimeFormat(DATE_LOCALES[currentLanguage], { dateStyle: "medium", timeZone: DATE_TIME_ZONE }).format(new Date(posts[0].published));
    renderArchive();
  }
}
function renderPost(post, target = document.querySelector("#latest-post")) {
  const available = SUPPORTED_LANGUAGES.filter((language) => post.translations[language]);
  const selected = available.includes(currentLanguage) ? currentLanguage : available[0];
  target.innerHTML = `<p class="eyebrow">${escapeHtml(post.category)} · ${escapeHtml(post.id)}</p><h3 id="post-title"></h3><div class="language-tabs" role="group" aria-label="${COPY[currentLanguage].choose_post_language}">${available.map((language) => `<button type="button" data-lang="${language}" aria-pressed="${language === selected}">${LANGUAGE_LABELS[language]}</button>`).join("")}</div><p class="post-body" id="post-body"></p>`;
  const show = (language) => {
    const translation = post.translations[language] || post.translations.en;
    target.querySelector("#post-title").textContent = translation.title;
    target.querySelector("#post-body").textContent = translation.body;
    target.querySelectorAll("[data-lang]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
  };
  target.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => show(button.dataset.lang)));
  show(selected);
}
function renderArchive() {
  const archive = document.querySelector("#archive");
  const archivePosts = posts.slice(1);
  const pageCount = Math.ceil(archivePosts.length / ARCHIVE_PAGE_SIZE);
  archivePage = Math.min(archivePage, Math.max(pageCount, 1));
  const firstPost = (archivePage - 1) * ARCHIVE_PAGE_SIZE;
  archive.innerHTML = archivePosts.slice(firstPost, firstPost + ARCHIVE_PAGE_SIZE).map((post) => {
    const translation = post.translations[currentLanguage] || post.translations.en;
    const date = new Intl.DateTimeFormat(DATE_LOCALES[currentLanguage], { dateStyle: "medium", timeZone: DATE_TIME_ZONE }).format(new Date(post.published));
    const language = post.translations[currentLanguage] ? currentLanguage : "en";
    const postUrl = `posts/${encodeURIComponent(post.id)}/${language}/`;
    return `<article class="archive-item"><div><h3><a class="archive-title-link" href="${postUrl}">${escapeHtml(translation?.title || post.id)}</a></h3><p>${date} · ${escapeHtml(post.category)}</p></div><a href="${postUrl}">${COPY[currentLanguage].read}</a></article>`;
  }).join("") || `<p class="post-meta">${COPY[currentLanguage].empty_archive}</p>`;

  const pagination = document.querySelector("#archive-pagination");
  if (pageCount <= 1) {
    pagination.hidden = true;
    pagination.innerHTML = "";
    return;
  }
  pagination.hidden = false;
  const pageButtons = Array.from({ length: pageCount }, (_, index) => {
    const page = index + 1;
    return `<button type="button" class="page-number" data-page="${page}" aria-label="${COPY[currentLanguage].page_label} ${page}"${page === archivePage ? ' aria-current="page"' : ""}>${page}</button>`;
  }).join("");
  pagination.innerHTML = `<button type="button" class="page-step" data-page="${archivePage - 1}"${archivePage === 1 ? " disabled" : ""}>← ${COPY[currentLanguage].page_previous}</button>${pageButtons}<button type="button" class="page-step" data-page="${archivePage + 1}"${archivePage === pageCount ? " disabled" : ""}>${COPY[currentLanguage].page_next} →</button>`;
  pagination.querySelectorAll("[data-page]").forEach((button) => button.addEventListener("click", () => {
    archivePage = Number(button.dataset.page);
    renderArchive();
    document.querySelector("#archive-heading").scrollIntoView({ behavior: "smooth", block: "start" });
  }));
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}
async function init() {
  applyLanguage(getSavedLanguage());
  document.querySelector("#site-language").addEventListener("change", (event) => applyLanguage(event.target.value));
  try {
    const response = await fetch("posts.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Post feed unavailable");
    const data = await response.json();
    posts = [...data.posts].sort((a, b) => new Date(b.published) - new Date(a.published));
    if (!posts.length) throw new Error("No published posts");
    renderPost(posts[0]);
    document.querySelector("#post-date").textContent = new Intl.DateTimeFormat(DATE_LOCALES[currentLanguage], { dateStyle: "medium", timeZone: DATE_TIME_ZONE }).format(new Date(posts[0].published));
    renderArchive();
  } catch {
    document.querySelector("#latest-post").innerHTML = `<p class="post-meta">${COPY[currentLanguage].feed_error}</p>`;
  }
}
init();
