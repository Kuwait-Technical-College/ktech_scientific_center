---
theme: default
title: "🌊 Ocean Quest: Code Your Fish, Publish Your Ocean"
info: |
  ## The Scientific Center of Kuwait
  An Agentic Coding Workshop
  Using VS Code, GitHub Copilot, Git, and GitHub
drawings:
  persist: false
transition: slide-left
mdc: true
---

<style>
:root {
  --slidev-theme-primary: #0a3d62;
  --slidev-theme-accent: #38ada9;
}
.slidev-layout {
  --color-primary: #0a3d62;
}
a {
  color: #38ada9;
}
h1, h2, h3 {
  color: #0a3d62 !important;
}
.slidev-layout.section h1,
.slidev-layout.section h2 {
  color: #e8f4fd !important;
}
section.slidev-layout.section {
  background: linear-gradient(135deg, #0a3d62 0%, #0d6e8f 100%);
}
.slidev-layout.section p {
  color: #a8d8ea;
}
.slidev-layout.center h1 {
  color: #0a3d62 !important;
}
blockquote {
  border-left-color: #38ada9;
}
code {
  color: #0a3d62;
}
.ocean-badge {
  display: inline-block;
  background: #38ada9;
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}
</style>

<div class="flex flex-col items-center text-center pt-6">
  <div class="flex items-center gap-8 mb-6">
    <img src="/scientific_center_logo.png" class="h-16" alt="Scientific Center of Kuwait logo" />
    <img src="/ktech_logo_light.svg" class="h-14" alt="ktech logo" />
  </div>

  <h1 class="!text-5xl !text-blue-900">🌊 Ocean Quest</h1>

  <p class="text-2xl text-teal-600 font-semibold mt-2">Code Your Fish, Publish Your Ocean</p>

  <p class="mt-4 opacity-70">An Agentic Coding Workshop · The Scientific Center of Kuwait</p>

  <div class="mt-6 flex gap-3">
    <span class="ocean-badge">VS Code</span>
    <span class="ocean-badge">GitHub Copilot</span>
    <span class="ocean-badge">Git</span>
    <span class="ocean-badge">GitHub Pages</span>
  </div>
</div>

---
transition: fade-out
---

# Session Overview

<br>

| | |
|---|---|
| **Duration** | 2 – 2.5 hours |
| **Audience** | Complete beginners — ages 15–20, no experience required |
| **Platform** | Online (Zoom / Teams / Meet) |
| **End Goal** | Add an animated fish to a web game and publish it live |
| **Theme** | 🌊 Sea animals — you create your own unique fish |
| **Tools** | VS Code · GitHub Copilot · Git · GitHub |

---

# What You Will Learn Today

<v-clicks>

- 🖥️ Use **VS Code** — a professional code editor used by millions of developers
- ⌨️ Run **terminal commands** to navigate your computer like a developer
- 🤖 Use **AI (GitHub Copilot)** as a coding partner — describe what you want, it helps you build it
- 🐙 Understand **open source** — how the internet and AI are built on shared code
- 🔀 Use **Git** to save and track your changes
- 🌐 Publish a **live website** using GitHub Pages
- 🐠 Make a **real contribution** to an open-source project that goes live immediately

</v-clicks>

---

# The Game: Ocean Quest 🌊

<v-clicks>

- 🌊 An **animated ocean** where fish swim across the screen
- 🐠 Every fish has a **custom color**, **name**, and **fun fact**
- 🎴 A **gallery** below the ocean showing all fish and their stories
- 📁 The entire project is **4 files** — you only edit one of them

</v-clicks>

<v-click>

```
ktech_scientific_center/
├── index.html     ← the main page
├── style.css      ← colors and design
├── app.js         ← makes fish swim
└── data/
    └── fish.js    ← ⭐ the ONLY file you edit today!
```

</v-click>

---

# Your Contribution: One Fish

Each student adds one entry to `data/fish.js`:

```javascript
{
  name:   "Neptune",
  colors: ["#5B2C8D", "#3A1A6E", "#C39BD3"],
  fact:   "Neptune once won a swimming race against a dolphin.",
  speed:  1.5
}
```

<v-click>

| Field | What it does |
|---|---|
| `name` | Your fish's unique name |
| `colors` | 3 hex codes: body · fins & tail · belly stripe |
| `fact` | A short fun sentence |
| `speed` | 0.5 = slow · 1.0 = normal · 2.0 = fast |

</v-click>

<v-click>

> When you publish, **anyone in the world** can open your link and see your fish. 🌍

</v-click>

---

# What is Agentic Coding? 🤖

<v-clicks>

- In the old days: developers wrote **every line of code** by hand
- Today: we use AI as an **active partner** that helps us code

</v-clicks>

<v-click>

| Old way | Agentic way |
|---|---|
| Write all code yourself | Describe what you want in English |
| Look up everything in docs | Ask AI to explain anything |
| Struggle alone with errors | Ask AI to help debug |
| Work slowly | Work fast with a tireless assistant |

</v-click>

<v-click>

> 🎬 **You are the director.** You know what you want. The AI is your crew — talented and fast. But **you** make the decisions.

</v-click>

---

# What is Open Source?

<v-clicks>

- 🔓 Source code is **publicly available** — anyone can view, use, modify, and share it
- 🌍 Built in the open — not locked inside one company
- 💻 **Linux**, **Android**, **Firefox**, **VS Code**, **Python** — all open source

</v-clicks>

<v-click>

> 🍳 Think of it like a community recipe book. Anyone can read the recipes, try them, suggest improvements, or add new ones. The more people contribute, the better it gets.

</v-click>

---

# Why Does Open Source Matter for You?

<v-clicks>

- 💼 **Career**: Your GitHub profile is public. Employers look at it. Real contributions show you can code and collaborate.
- 📚 **Learning**: Modifying real code is one of the fastest ways to improve.
- 🌍 **Community**: Today's project will be visible to anyone on the internet.
- 🤖 **AI connection**: GitHub Copilot was **trained on open-source code**. Without developers sharing their work, Copilot would not exist.

</v-clicks>

<v-click>

> Open code trains better AI. Better AI helps more people write open code. They fuel each other.

</v-click>

---
layout: section
---

# Phase 0
## Pre-Session Setup

⏱ ~15 minutes

---

# 0.1 — Install Visual Studio Code

<v-clicks>

1. Go to **https://code.visualstudio.com/**
2. Click **Download** — it detects your OS automatically
3. Run the installer with default settings
4. **Windows only**: Check ✅ **"Add to PATH"** on the Additional Tasks screen

</v-clicks>

<v-click>

> This lets you type `code .` in the terminal to open VS Code from any folder.

</v-click>

---

# 0.2 — Install Git

**Windows:**

<v-clicks>

1. Go to **https://git-scm.com/download/win**
2. Download and run the installer
3. Accept all default settings — click Next through every screen

</v-clicks>

<v-click>

**macOS:**

1. Open Terminal (search in Spotlight)
2. Type `git --version` — if not installed, click **Install** in the prompt

</v-click>

---

# 0.3 — Create a GitHub Account

<v-clicks>

1. Go to **https://github.com/join**
2. Sign up with your personal email
3. Verify your email — check your inbox!
4. **Write down your username and password** — you will need them today

</v-clicks>

<v-click>

> **Tip**: Choose a professional username — this is your public developer identity.

</v-click>

---

# 0.4 — Install GitHub Copilot

<v-clicks>

1. Open VS Code
2. Press **Ctrl+Shift+X** → Extensions sidebar
3. Search for **"GitHub Copilot"**
4. Click **Install**
5. Click **Sign in to GitHub** when prompted

</v-clicks>

<v-click>

> **Fallback**: Can't activate Copilot? Use [gemini.google.com](https://gemini.google.com) in a browser tab — same workflow, just paste the result.

</v-click>

---

# ✅ Setup Checklist

Before we start — confirm all four:

<v-clicks>

- [ ] VS Code is installed and opens without errors
- [ ] Git is installed — type `git --version` (should show `git version 2.x.x`)
- [ ] GitHub account is created and email is **verified**
- [ ] GitHub Copilot is installed and signed in

</v-clicks>

<v-click>

**Type ✅ in the chat when you're ready!**

</v-click>

---
layout: section
---

# Phase 1
## VS Code and the Terminal

⏱ ~20 minutes

---

# 1.1 — Tour of VS Code

Key areas to know:

| Area | Shortcut (Win) | Shortcut (Mac) | What It Does |
|---|---|---|---|
| **File Explorer** | `Ctrl+Shift+E` | `Cmd+Shift+E` | Browse files and folders |
| **Search** | `Ctrl+Shift+F` | `Cmd+Shift+F` | Search across all files |
| **Source Control** | `Ctrl+Shift+G` | `Cmd+Shift+G` | Visual Git interface |
| **Extensions** | `Ctrl+Shift+X` | `Cmd+Shift+X` | Install add-ons |
| **Terminal** | `` Ctrl+` `` | `` Ctrl+` `` | Built-in command line |

---

# 1.2 — What is a Terminal?

<v-click>

> Think of it as a **text-based version of File Explorer**. Instead of clicking to open folders, you **type commands**.

</v-click>

<br>

<v-click>

Open the terminal with `` Ctrl+` `` (the backtick key, above Tab)

</v-click>

<br>

<v-click>

Developers use the terminal because it's **faster** — and tools like Git are **designed for it**.

</v-click>

---

# 1.3 — Essential Terminal Commands

| Command (Windows) | Command (macOS) | What It Does |
|---|---|---|
| `cd` | `pwd` | Show current folder |
| `dir` | `ls` | List files in current folder |
| `cd Desktop` | `cd Desktop` | Move into Desktop |
| `cd ..` | `cd ..` | Move up one level |
| `mkdir my-folder` | `mkdir my-folder` | Create a new folder |
| `cls` | `clear` | Clear the screen |

<v-click>

> **Key concept**: You are always "inside" a folder — this is called your **working directory**.

</v-click>

---

# 1.4 — Practice Exercise

Type these commands in the terminal:

```bash
cd Desktop
mkdir ocean-projects
cd ocean-projects
```

<v-click>

You are now inside a new empty folder called `ocean-projects` on your Desktop.

</v-click>

<v-click>

**Checkpoint** 🧑‍💻

Type `pwd` (macOS) or `cd` (Windows) and share your path in the chat.
It should end with `/Desktop/ocean-projects`.

</v-click>

---
layout: section
---

# Phase 2
## Git and GitHub: Fork and Clone

⏱ ~25 minutes

---

# 2.1 — Key Concepts

| Concept | Simple Analogy |
|---|---|
| **Git** | "Track Changes" in Word, but for code |
| **GitHub** | Google Drive, but for code |
| **Repository** | A project folder tracked by Git |
| **Fork** | Your own copy of someone else's project |
| **Clone** | Download your fork to your computer |
| **Commit** | A save point — a snapshot with a description |
| **Push** | Upload your commits to GitHub |
| **GitHub Pages** | Free service: your repo becomes a live website |

---

# The Workflow for Today

```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│   FORK   │─▶│  CLONE   │─▶│   EDIT   │─▶│  COMMIT  │─▶│   PUSH   │─▶│  PAGES   │
│(GitHub)  │  │(terminal)│  │(VS Code +│  │  (Git)   │  │  (Git)   │  │(GitHub)  │
│          │  │          │  │ Copilot) │  │          │  │          │  │          │
└──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘
```

<v-click>

> **Fork** → Your copy on GitHub
> **Clone** → Download it locally
> **Edit** → Add your fish
> **Commit + Push** → Save and upload
> **Pull Request** → Ask the instructor to merge your fish 🐠

</v-click>

---

# 2.2 — Fork the Repository

<v-clicks>

1. Go to the class repo: **`https://github.com/Kuwait-Technical-College/ktech_scientific_center`**
2. Click the **Fork** button (top-right corner)
3. Keep all defaults on the "Create a new fork" screen
4. Click **Create fork**

</v-clicks>

<v-click>

You now have your own copy at:
`https://github.com/YOUR-USERNAME/ktech_scientific_center`

</v-click>

<v-click>

> 🐙 You are now working on **your copy**. Nothing you do affects the original until you choose to submit a Pull Request.

</v-click>

---

# 2.3 — Clone to Your Computer

<v-clicks>

1. On **your fork**, click the green **Code** button
2. Make sure **HTTPS** is selected
3. Click 📋 to copy the URL
4. In VS Code's terminal (inside `ocean-projects`), type:

</v-clicks>

<v-click>

```bash
git clone https://github.com/YOUR-USERNAME/ktech_scientific_center.git
cd ktech_scientific_center
code .
```

</v-click>

<v-click>

> A new VS Code window opens with the project loaded. You should see `index.html`, `style.css`, `app.js`, and `data/` at the top level.

</v-click>

---

# 2.4 — Set Up Your Git Identity *(one time only)*

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

<v-click>

Use the same email you used for GitHub.

</v-click>

---

# 2.5 — See the Game Running

<v-clicks>

1. In VS Code's File Explorer, find `index.html`
2. Double-click it — your browser opens with the ocean game!
3. You should see the example fish swimming 🐠

</v-clicks>

<v-click>

**Checkpoint** 🧑‍💻

Type ✅ in the chat if you can see fish swimming.
Type ❌ if the page is blank — we will help you.

</v-click>

---
layout: section
---

# Phase 3
## Design Your Fish with AI

⏱ ~25 minutes

---

# 3.1 — Open Copilot Chat

<v-clicks>

1. Press **Ctrl+Shift+I** (Win) / **Cmd+Shift+I** (Mac)
2. A chat panel opens on the right

</v-clicks>

<v-click>

This is your AI assistant. You can talk to it in plain English. Ask it anything.

</v-click>

<v-click>

> 🤖 **It is not just autocomplete.** You can have a full conversation with it, ask it to explain code, ask it to write code for you, and ask it to improve what it generates.

</v-click>

---

# 3.2 — Prompt 1: Understand the Code

Make sure `data/fish.js` is open in VS Code.

In Copilot Chat, type:

<v-click>

> **"I am a complete beginner. Can you explain what the code in fish.js does? What is the fishCollection array and what does each field mean?"**

</v-click>

<v-click>

Read the explanation. After this you should understand:
- What an **array** is (a list of things)
- What an **object** is (a bundle of named values)
- What `name`, `color`, `fact`, and `speed` do

</v-click>

<v-click>

> This is agentic coding — using AI to understand code instead of being stuck.

</v-click>

---

# 3.3 — Prompt 2: Design Your Fish

Think about your fish:

<v-clicks>

- 🐠 **Name**: What is it called? (must be unique — check existing names first!)
- 🎨 **Colors**: Pick 3 colors — [colorhunt.co/palettes/popular](https://colorhunt.co/palettes/popular) for ready-made palettes
- 📖 **Fun fact**: One interesting or funny sentence about your fish
- ⚡ **Speed**: 0.5 (lazy) · 1.0 (normal) · 2.0 (zoom)

</v-clicks>

<v-click>

Then tell Copilot in plain English:

> **"I want to add a fish called 'Neptune'. It has 3 colors: deep purple body, dark violet fins, and a light lavender belly. It swims very fast. Its fun fact is that it once won a swimming race against a dolphin. Generate the JavaScript object for fish.js using the `colors` array format."**

</v-click>

---

# 3.4 — Review and Iterate

Copilot generates something like:

```javascript
{
  name:   "Neptune",
  colors: ["#5B2C8D", "#3A1A6E", "#C39BD3"],
  fact:   "Neptune once won a swimming race against a dolphin.",
  speed:  2.0
}
```

<v-clicks>

- Do the colors look right? Pick a palette from [colorhunt.co/palettes/popular](https://colorhunt.co/palettes/popular) — each palette gives you 4 hex codes to choose from
- Does the fact sound fun and original?
- Ask Copilot to change things: *"Make the color more electric blue"*, *"Make the fact funnier"*

</v-clicks>

<v-click>

> AI gives you a starting point — **you make it yours.** Always review the output.

</v-click>

---

# 3.5 — Add Your Fish to fish.js

Open `data/fish.js`. Scroll to the comment:
`// ── ADD YOUR FISH HERE ──`

<v-click>

Add a **comma** after the last fish's `}`, then paste yours:

```javascript
  {
    name:   "Sandy",
    colors: ["#FFD93D", "#E0A800", "#FFF5CC"],
    fact:   "Sandy turns golden in the sunlight.",
    speed:  0.8
  },                           ← add this comma
  {
    name:   "Neptune",
    colors: ["#5B2C8D", "#3A1A6E", "#C39BD3"],
    fact:   "Neptune once won a swimming race against a dolphin.",
    speed:  2.0
  }                            ← NO comma after the last fish
```

</v-click>

<v-click>

Save: **Ctrl+S** (Win) / **Cmd+S** (Mac)

</v-click>

---

# 3.6 — Common Mistakes

<v-clicks>

- ❌ **Missing comma** between the last existing fish and your new one
- ❌ **Extra comma** after your fish (the very last entry must NOT have one)
- ❌ **Missing quotes** around text values
- ❌ **Wrong field name** — must be `name`, `colors`, `fact`, `speed` exactly

</v-clicks>

<v-click>

✅ VS Code shows **red squiggly underlines** for syntax errors. Fix them before saving.

</v-click>

---

# 3.7 — Verify Your Fish Appears

Reload `index.html` in your browser (press **F5**).

<v-click>

Your fish should be swimming in the ocean! 🐠

Scroll down to the gallery section — your fish card should be there too.

</v-click>

<v-click>

**Checkpoint** 🧑‍💻

Take a screenshot of your fish and share it in the chat!

</v-click>

---
layout: section
---

# Phase 4
## Commit, Push, and Publish

⏱ ~25 minutes

---

# 4.1 — Check What Changed

In the terminal:

```bash
git status
```

<v-click>

You should see:
```
modified:   data/fish.js
```

</v-click>

<v-click>

To see exactly what you changed:

```bash
git diff data/fish.js
```

Lines starting with `+` (green) = lines you added.

</v-click>

---

# 4.2 — Stage and Commit

**Stage your changes** — tell Git what to include in the save:

```bash
git add data/fish.js
```

<v-click>

> Think of it like putting items in a shipping box. You are choosing exactly what goes into this save.

</v-click>

<v-click>

**Create a commit** — save a snapshot with a description:

```bash
git commit -m "Add my fish: Neptune"
```

*(Replace Neptune with your actual fish name)*

</v-click>

<v-click>

> A commit is like a save point in a video game — you can always go back to it.

</v-click>

---

# 4.3 — Push to GitHub

Upload your commit from your computer to GitHub:

```bash
git push origin main
```

<v-clicks>

- `origin` = your GitHub fork
- `main` = the main branch (the primary line of development)

</v-clicks>

<v-click>

> **Windows**: A browser window may pop up asking you to sign in to GitHub. Sign in once — this only happens once.

</v-click>

---

# 4.4 — Open a Pull Request

Send your fish to the class ocean:

<v-clicks>

1. Go to your fork: `https://github.com/YOUR-USERNAME/ktech_scientific_center`
2. Click the **"Contribute"** button → **"Open pull request"**
3. Make sure it says: *base: Kuwait-Technical-College/ktech_scientific_center ← compare: YOUR-USERNAME/ktech_scientific_center*
4. Title your PR: **"Add my fish: [your fish name]"**
5. Click **Create pull request**

</v-clicks>

<v-click>

> 🐙 A Pull Request is how you say: *"Here's my change — please add it to the main project."* The instructor reviews and merges it.

</v-click>

---

# 4.5 — 🎉 Your Fish is Live!

<v-click>

Once the instructor **approves and merges** your Pull Request, your fish appears at:

```
https://kuwait-technical-college.github.io/ktech_scientific_center/
```

</v-click>

<v-click>

**Your fish is swimming with everyone else's — live on the internet.**

You can also see it locally any time by opening `index.html` in your browser.

</v-click>

<v-click>

**Checkpoint** 🧑‍💻

Share your Pull Request link in the chat right now!
Let's count how many fish are on their way. 🌊

</v-click>

---
layout: section
---

# Phase 5
## Wrap-Up and What's Next

⏱ ~10 minutes

---

# The Workflow You Learned

```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│   FORK   │─▶│  CLONE   │─▶│   EDIT   │─▶│  COMMIT  │─▶│   PUSH   │─▶│    PR    │
│(GitHub)  │  │(terminal)│  │(VS Code +│  │  (Git)   │  │  (Git)   │  │(GitHub)  │
│          │  │          │  │ Copilot) │  │          │  │          │  │          │
└──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘
 Your copy     Download       Change         Save a         Upload       Request to
 on GitHub     locally        the file       snapshot       to GitHub     merge 🌊
```

---

# Skills You Practiced

| Skill | What You Did |
|---|---|
| **VS Code** | Opened files, used the terminal, used Copilot Chat |
| **Terminal** | `cd`, `ls`/`dir`, `mkdir`, `git status`, `git diff` |
| **AI / Copilot** | Asked AI to explain code and generate a fish entry |
| **Git** | `git clone`, `git add`, `git commit`, `git push` |
| **GitHub** | Forked a repo, pushed changes, opened a Pull Request |
| **Open Source** | Modified and published a real open-source project |

---

# Bonus Challenges 🚀

<v-clicks>

1. **Resize your fish**: Find `.fish` in `style.css`. Ask Copilot: *"How do I change the fish size?"*
2. **Add a second fish**: Give it a completely different personality and color
3. **Change the ocean background**: Find `#ocean` in `style.css`. Ask Copilot to change the gradient colors
4. **Understand `app.js`**: Ask Copilot to explain `createFishSVG` line by line. Can you modify the fish shape?
5. **Share your ocean**: Open `https://kuwait-technical-college.github.io/ktech_scientific_center/` after the instructor merges — find your fish!

</v-clicks>

---

# Keep Learning 📚

| Resource | Link |
|---|---|
| VS Code Documentation | https://code.visualstudio.com/docs |
| Git Basics (free book) | https://git-scm.com/book/en/v2 |
| GitHub Skills (interactive) | https://skills.github.com/ |
| GitHub Copilot Docs | https://docs.github.com/en/copilot |
| freeCodeCamp (free web dev) | https://www.freecodecamp.org |

---

<div class="flex flex-col items-center text-center pt-8">
  <div class="flex items-center gap-6 mb-6">
    <img src="/scientific_center_logo.png" class="h-12" alt="Scientific Center of Kuwait logo" />
    <img src="/ktech_logo_light.svg" class="h-10" alt="ktech logo" />
  </div>

  <h1 class="!text-4xl !text-blue-900">You did it! 🎉</h1>

  <p class="text-xl text-teal-600 font-semibold mt-3">Your fish is swimming with everyone else's. 🌊</p>

  <p class="mt-4 opacity-60 max-w-xl">
    You used VS Code, ran terminal commands, used AI as a coding partner,
    tracked your changes with Git, and opened a real Pull Request.
    That is what real developers do — and now you have done it too.
  </p>

  <p class="mt-6 text-lg font-semibold text-blue-800">See your fish live! 🐠</p>
  <p class="opacity-50 text-sm mt-1">https://kuwait-technical-college.github.io/ktech_scientific_center/</p>
</div>
