<div align="center">

# QuoteCraft Ionic Starter

**A lightweight Ionic and React learning starter.**  
Part of the QuoteCraft Studio development collection.

![Stack](https://img.shields.io/badge/Stack-Ionic%20%C2%B7%20React%20%C2%B7%20Capacitor-23647A)
![Status: Source starter](https://img.shields.io/badge/Status-Source%20starter-64748B)

[QuoteCraft Studio](https://quotecraftstudio.ca) · [Source](./source) · [Releases](https://github.com/QuoteCraftStudio/quotecraft-ionic-starter/releases)

</div>

---

## About this starter

A Hello World **source starter** for learning Ionic, React, and Capacitor. The included script generates the initial application and copies its home page source.

**Target environment:** Browser preview; optional later Android build.

### What's included

- `source/` — supplied sample application code.
- `setup.ps1` — Windows project generation and setup helper.
- `AGENTS.md` — project development and protection rules.
- The original setup, run, and verification instructions below are preserved.

## Setup on Windows

Install Node.js LTS. Start with the browser preview. To package for Android later, install Android Studio and follow the Capacitor Android setup.

Open this folder in VS Code, open a PowerShell terminal, and run:

```powershell
.\setup.ps1
```

If your computer blocks PowerShell scripts, do not change its security settings just for this project. Run the generation command below in a terminal, then copy the supplied files manually as listed:

```text
npx --yes --package @ionic/cli ionic start app blank --type=react --capacitor --no-git --no-interactive
```

- Copy `source/Home.tsx` to `app/src/pages/Home.tsx`.

The setup script uses the official project generator to create current platform files and compatible dependencies in `app/`, then adds the supplied Hello World screen. Internet access is required. It stops if `app/` already exists. If generation fails, inspect the incomplete folder before deciding whether to move it aside and retry.

## Run

```text
cd app
npx --yes --package @ionic/cli ionic serve
```

## GitHub

Commit this starter first. After successful setup, commit the generated `app/` project files and dependency lockfiles too. Generated build output, dependency caches, credentials and signing keys should stay out of GitHub.

## Verification

The supplied source files and archive have been checked structurally. The official generators and app builds have not been run here because the required SDKs and package downloads are unavailable in this environment. This is a setup-ready source starter, not a fully generated or build-tested app.

Official documentation: https://ionicframework.com/docs/intro/cli


## GitHub Releases

**[Release page](https://github.com/QuoteCraftStudio/quotecraft-ionic-starter/releases)** — No tested installer or packaged application is published as a GitHub Release. Please follow the source setup instructions above.

## QuoteCraft Studio

[quotecraftstudio.ca](https://quotecraftstudio.ca) · **support@QuoteCraftStudio.ca**
