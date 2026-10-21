const labels = { en: "English", ko: "한국어", de: "Deutsch", zh: "中文" };
let posts = [];
function renderPost(post, target = document.querySelector("#latest-post")) {
  const available = Object.keys(post.translations);
  const first = available[0];
  target.innerHTML = `<p class="eyebrow">${escapeHtml(post.category)} · ${escapeHtml(post.id)}</p><h3 id="post-title"></h3><div class="language-tabs" role="group" aria-label="Choose language">${available.map((lang, i) => `<button type="button" data-lang="${lang}" aria-pressed="${i === 0}">${labels[lang] || lang}</button>`).join("")}</div><p class="post-body" id="post-body"></p>`;
  const show = (lang) => {
    const translation = post.translations[lang] || post.translations[first];
    target.querySelector("#post-title").textContent = translation.title;
    target.querySelector("#post-body").textContent = translation.body;
    target.querySelectorAll("[data-lang]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.lang === lang)));
  };
  target.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => show(button.dataset.lang)));
  show(first);
}
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c])); }
async function init() {
  try {
    const response = await fetch("posts.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Post feed unavailable");
    const data = await response.json();
    posts = [...data.posts].sort((a, b) => new Date(b.published) - new Date(a.published));
    if (!posts.length) throw new Error("No published posts");
    renderPost(posts[0]);
    document.querySelector("#post-date").textContent = new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(posts[0].published));
    const archive = document.querySelector("#archive");
    archive.innerHTML = posts.slice(1).map(post => `<article class="archive-item"><div><h3>${escapeHtml(post.translations.en?.title || post.id)}</h3><p>${new Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(post.published))} · ${escapeHtml(post.category)}</p></div><a href="posts/${encodeURIComponent(post.id)}/en/">Read →</a></article>`).join("") || `<p class="post-meta">New appeals will appear here as they are published.</p>`;
  } catch (error) {
    document.querySelector("#latest-post").innerHTML = `<p class="post-meta">The post feed could not be loaded. Please try again later.</p>`;
  }
}
init();
