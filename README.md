# Who is Thomas Gotwig? 🤔

<img src="assets/octocat.webp" width="20%" align="right">

Hellooo there! 👋 I'm a passioned programmer with background in **Bioinformatics** from my **Bachelor** study 👨‍🎓 Mainly interested in **DevOps**, **Cloud** and **Multimedia** topics 🧑‍💻

<details>
  <summary>⚡️ Recent activities</summary>

  <!--RECENT_ACTIVITY:start-->
1. 💬 Commented on [#1](https://github.com/tgotwig/java/pull/1#issuecomment-3309823837) in [tgotwig/java](https://github.com/tgotwig/java)<br>
2. 💬 Commented on [#1](https://github.com/tgotwig/java/pull/1#issuecomment-3309821192) in [tgotwig/java](https://github.com/tgotwig/java)<br>
3. 💬 Commented on [#1](https://github.com/tgotwig/java/pull/1#issuecomment-3309804444) in [tgotwig/java](https://github.com/tgotwig/java)<br>
4. 💬 Commented on [#1](https://github.com/tgotwig/java/pull/1#issuecomment-3309783950) in [tgotwig/java](https://github.com/tgotwig/java)<br>
5. 💬 Commented on [#1](https://github.com/tgotwig/java/pull/1#issuecomment-3309733438) in [tgotwig/java](https://github.com/tgotwig/java)<br>
6. 💬 Commented on [#1](https://github.com/tgotwig/java/pull/1#issuecomment-3309726102) in [tgotwig/java](https://github.com/tgotwig/java)<br>
7. 💬 Commented on [#1](https://github.com/tgotwig/java/pull/1#issuecomment-3309713032) in [tgotwig/java](https://github.com/tgotwig/java)<br>
8. 📔 Created new repository [tgotwig/java](https://github.com/tgotwig/java)<br>
<!--RECENT_ACTIVITY:end-->
</details>

<details>
  <summary>💡 My Coding Principles</summary>

  <details>
    <summary>↳ ☝️ General ones</summary>

  - **Check** for consistency across tools and platforms — use diff checkers on editor content and use things like the GitHub and Confluence search across all your projects and wiki pages.
  </details>

  <details>
    <summary>↳ ☕ Java, Python, ...</summary>

  - **Keep** code compact — limit function parameters (ideally ≤ 3), avoid deep nesting, and stick to a reasonable maximum line length.
  - **Use** consistent and meaningful naming — predictable naming patterns make searching, navigation, and bulk refactoring (e.g., find & replace) much more reliable and efficient.
  - **Don't** write db queries by hand — do it via repository functions.
  - **Let** an code generator generate classes for you — when dealing with an OpenAPI spec.
  - **Write** tests at multiple levels — use **unit tests** to check always one function without I/O (mock external dependencies where needed), **integration tests** to check always one function with real I/O, and **end-to-end tests** to check a full chain of functions (like `Camunda` or `Selenium` workflows, or a cli tool).
  </details>

  <details>
    <summary>↳ 🌳 Versioning (Git)</summary>

  - **Use** a Git GUI tool like `GitKraken` — a visual overview often leads to cleaner commits and makes advanced Git features (like interactive rebase or working with submodules) more accessible.
  - **Keep** commits focused and atomic — aim for “one logical change per commit” to make reviews easier and enable selective acceptance or reversion.
  - **Maintain** a consistent code style — avoid mixing style and functional changes in one commit; first apply the style update, then the logic change.
  - **Preserve** full commit history when migrating repositories — instead of squashing into a single commit, add the new remote and push as-is.
  - **Write** meaningful commit messages — use the imperative mood (“Add feature,” not “Added feature”), and avoid vague messages like “Update” to help others understand changes at a glance.
  - **Tag** commits not only for versioning — but also to highlight other special commits.
  - **Create** a `backup` branch before doing a complex rebase — to not accidently overwrite commits in a wrong way.
  </details>

  <details>
    <summary>↳ 🌐 Networking</summary>

  - **Document** the network layout using a diagram that includes key IPs, DNS names, and boundaries between subnets or zones.
  - **List** physical and virtual devices in a table with their IPs, DNS names, and MAC addresses, group them in CIDRs.
  - **Prefer** DNS names over hardcoded IPs, for better clarity and minimal fixes when the IP changes.
  - **Provide** a central "intranet" homepage linking to all important internal services.
  </details>

  <details>
    <summary>↳ ⚙️ Automation</summary>

  - **Build** the project ideally with 1 cmd — after cloning it, typically via `Taskfile`, also in CI / CD.
  - **Centralize** testing and releasing via CI / CD — and run them mostly during pull requests.
  - **Monitor** your resource usages — and have reportings before server crashes due to it.
  - **Backup** your data frequently in 3 ways — while removing some versions over time.
  - **Don't** try to automate everything — have runbooks for certain tasks.
  </details>

  <details>
    <summary>↳ 🐳 Containerization</summary>

  - **Configure** via env vars — better than via files with different encodings and permissions.
  - **Grant** 3rd party access via scoped tokens — avoid overly permissive ones.
  - **Print** all logs to the terminal — for a flexible understanding.
  - **Develop** with dev images — with all your fav tools in it.
  - **Minimize** images — for running in production.
  </details>

  <details>
    <summary>↳ 🔮 Terraform</summary>

  - **Design** modules for reusability — for deploying slightly different resources easily.
  - **Manage** the state file in an object storage — ensure it’s versioned, and use a lock file to prevent concurrent modifications. Consider maintaining a shared calendar for coordinated infrastructure changes.
  </details>
</details>

🐿️ [ChipChap](https://chipchap.s3.eu-central-1.amazonaws.com/index.html) - GUI app For editing chapter infos in video and audio files. (WiP)

🤓 Dev Links 👉 [Chocolatey](https://community.chocolatey.org/profiles/tgotwig) | [Dev](https://dev.to/tgotwig) | [Observable](https://observablehq.com/@tgotwig?tab=profile) | [Stackoverflow](https://stackoverflow.com/users/6244047/thomas-gotwig?tab=profile) | [Vagrantup](https://app.vagrantup.com/tomisia)

🍻 Social Links 👉 [LinkedIn](https://www.linkedin.com/in/tgotwig)
