# Justice for PlusToken Victims

A small, multilingual advocacy website with a weekly randomized publishing schedule. The site publishes between one and seven appeals per week, using a public GitHub Actions workflow and GitHub Pages hosting.

## Free hosting recommendation

For a hand-built site with this kind of automation, use **GitHub Pages**. The site is static, and the public repository's scheduled workflow updates its post feed. A free domain such as `username.github.io/repository` is provided. GitHub documents Pages availability for public repositories on the Free plan and its published-site limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

If you prefer no-code, **Blogger** is the easiest alternative. It supports scheduling individual posts, but randomly selecting one to seven posts per week is a manual workflow. https://support.google.com/blogger/answer/154172

## Publish your site

1. Create a public repository on GitHub.
2. Upload the contents of this folder to the repository root (including `.github`).
3. In repository **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. In **Settings → Actions → General → Workflow permissions**, allow read and write permissions so the publisher can commit new posts.
5. Open the **Actions** tab and enable workflows if GitHub asks. The hourly workflow chooses a random count from 1 to 7 for each UTC week and publishes due posts to the site.

GitHub scheduled workflow runs can be delayed, and GitHub notes that scheduled workflows run from the default branch and may be disabled in inactive repositories. Check the Actions tab occasionally. The site itself remains available if automation is paused.

## Manage and review posts

- `posts.json` contains published posts and translation templates. Edit or add entries in English (`en`), Korean (`ko`), German (`de`), and Chinese (`zh`).
- The publisher draws from the available posts as reusable appeal templates. Add varied, fact-checked copy to keep the campaign useful and avoid repetitive posting.
- `schedule.json` records the current week's randomly selected publication times. It is created automatically.
- The schedule uses UTC. The hourly check may publish up to about an hour after the selected time.
- To pause automation, disable **Publish scheduled appeal** from the repository's Actions tab.

## Editorial and safety notes

The sample language is a peaceful request for official information and a fair restitution process. It avoids asserting that specific individuals committed crimes or that any particular asset distribution is proven. Keep new posts factual, cite primary documents when making specific claims, and do not publish personal data, threats, or unverified recovery promises. This site does not collect visitor information or provide legal or financial services.
