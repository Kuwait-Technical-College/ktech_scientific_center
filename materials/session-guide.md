# 🌊 Ocean Quest: Code Your Fish, Publish Your Ocean

### The Scientific Center of Kuwait

**An Agentic Coding Workshop — Using VS Code, GitHub Copilot, Git, and GitHub**

---

## Session Overview

| | |
|---|---|
| **Session Title** | 🌊 Ocean Quest: Code Your Fish, Publish Your Ocean |
| **Duration** | 2 – 2.5 hours |
| **Audience** | Complete beginners — ages 15–20, no prior experience required |
| **Platform** | Online (Zoom / Microsoft Teams / Google Meet) |
| **End Goal** | Add a unique animated fish to a web game and publish it live on GitHub Pages |
| **Theme** | Sea animals — each student creates and contributes one custom fish |
| **Key Tools** | VS Code · GitHub Copilot · Git · GitHub |

---

## What You Will Learn

By the end of this session, you will be able to:

- 🖥️ Use **VS Code** as a professional code editor
- ⌨️ Run basic **terminal commands** to navigate your computer
- 🤖 Use **AI (GitHub Copilot)** as a coding partner — describe what you want, let it help you build it
- 🐙 Explain what **open source** is and why it matters for technology and careers
- 🔀 Use **Git** to save and track your code changes
- 🌐 Use **GitHub** to publish a live website that anyone in the world can visit
- 🐠 Contribute a real feature to an open-source project

---

## What is Agentic Coding?

In the old days, developers had to write every line of code by hand — no shortcuts, no help.
Today, things are very different.

**Agentic coding** means using AI as an active partner that helps you code:

| Old way | Agentic way |
|---|---|
| Write all the code yourself | Describe what you want in plain English |
| Look up every answer in documentation | Ask AI to explain anything, instantly |
| Struggle with errors alone | Ask AI to help you debug |
| Work slowly | Work fast with an assistant that never gets tired |

> 🎬 **Think of it like directing a film.** You are the director — you know what you want the scene to look like. The AI is your crew — talented, fast, and ready to execute your vision. But **you** make the creative decisions.

This is not about replacing developers. The best developers in the world use AI tools to build faster and better. Today you will learn exactly that skill.

---

## About the Game

**Ocean Quest** is a simple open-source web game — a living ocean where every fish was added by a different student.

Here is what the game includes:

- 🌊 An **animated ocean** where fish swim smoothly across the screen
- 🐠 Each fish has a **custom color**, **unique name**, and **fun fact**
- 🎴 A **gallery** below the ocean showing every fish with its story

The entire game lives in one folder with just 4 files:

```
project/
├── index.html      ← The main webpage
├── style.css       ← Colors and visual design
├── app.js          ← Makes the fish swim
└── data/
    └── fish.js     ← ⭐ The only file you need to edit today!
```

Your contribution is adding **one fish** to `data/fish.js`. Each fish is a short block of code like this:

```javascript
{
  name:  "Neptune",
  color: "#5B2C8D",
  fact:  "Neptune once won a swimming race against a dolphin.",
  speed: 1.5
}
```

When you add this, save it, and publish it — your fish swims in your live ocean. The link is yours to share.

---

## What is Open Source?

**Open source** means the source code of a project is publicly available — anyone can view it, use it, change it, and share it.

> 🍳 Think of it like a community recipe book. Anyone can read the recipes, try cooking them, suggest improvements, or add their own. The more people contribute, the better the collection becomes.

Some of the world's most important software is open source:

- **Linux** — powers 96% of the world's web servers
- **Android** — the world's most popular mobile operating system
- **VS Code** — the editor you are using today
- **Git** — the tool that tracks all your code changes
- **Python**, **Firefox**, **React**, and thousands more

### Why Does Open Source Matter For You?

- 💼 **Career**: Your GitHub profile is public. Employers look at it. A real contribution shows you can code, collaborate, and ship work.
- 📚 **Learning**: Reading and modifying real code is one of the fastest ways to improve your skills.
- 🌍 **Community**: You connect with developers worldwide. Today's project is visible to anyone on the internet.
- 🤖 **AI connection**: GitHub Copilot was trained on open-source code. Without millions of developers sharing their work, AI coding tools like Copilot would not exist.

---

## Phase 0 — Pre-Session Setup

**⏱ ~15 minutes** — complete this before the session if possible

> **Online Note**: This section is sent to students 24 hours before the live session. At the start of class, do a quick check: *"Type ✅ in the chat if Git is installed."*

### 0.1 — Install Visual Studio Code

1. Go to **https://code.visualstudio.com/**
2. Click **Download** — the site detects your operating system automatically
3. Run the installer with default settings
4. **Windows only**: On the "Select Additional Tasks" screen, check ✅ **"Add to PATH"**

> This lets you type `code .` in the terminal to open VS Code from any folder.

### 0.2 — Install Git

**Windows:**
1. Go to **https://git-scm.com/download/win**
2. Download and run the installer
3. Accept all default settings — click Next through every screen

**macOS:**
1. Open the Terminal app (search "Terminal" in Spotlight)
2. Type `git --version` and press Enter
3. If Git is not installed, a prompt appears — click **Install**

### 0.3 — Create a GitHub Account

1. Go to **https://github.com/join**
2. Sign up with a personal email address
3. Verify your email (check your inbox)
4. **Write down your username and password** — you will need them several times today

> **Tip**: Choose a professional username — this becomes your public developer identity.

### 0.4 — Install GitHub Copilot

1. Open VS Code
2. Press **Ctrl+Shift+X** (Windows) or **Cmd+Shift+X** (macOS) — opens Extensions
3. Search for **"GitHub Copilot"**
4. Click **Install** on the result by GitHub
5. When prompted, click **Sign in to GitHub** and sign in with your account

> **Fallback**: If Copilot is unavailable, use **[Google Gemini](https://gemini.google.com)** in a browser tab — same idea, just paste the result instead of using the in-editor chat.

### ✅ Setup Checklist

Before the session starts, confirm all four items:

- [ ] VS Code is installed and opens without errors
- [ ] Git is installed — type `git --version` in a terminal; it should show a number like `git version 2.x.x`
- [ ] GitHub account is created and email is verified
- [ ] GitHub Copilot extension is installed and signed in

---

## Phase 1 — Orientation: VS Code and the Terminal

**⏱ ~20 minutes**

**Goal**: Open VS Code, run a terminal command, and navigate folders.

### 1.1 — Tour of VS Code

Open VS Code. There are five main areas:

| Area | Shortcut (Windows) | Shortcut (macOS) | What It Does |
|---|---|---|---|
| **File Explorer** | `Ctrl+Shift+E` | `Cmd+Shift+E` | Browse files and folders in your project |
| **Search** | `Ctrl+Shift+F` | `Cmd+Shift+F` | Search for text across all files |
| **Source Control** | `Ctrl+Shift+G` | `Cmd+Shift+G` | Visual Git interface |
| **Extensions** | `Ctrl+Shift+X` | `Cmd+Shift+X` | Install and manage extensions |
| **Terminal** | `` Ctrl+` `` | `` Ctrl+` `` | Built-in command line at the bottom |

> **Online Tip**: Share your screen and click each panel as you name it. Ask students to open and close each panel with you.

### 1.2 — Opening the Terminal

1. Press `` Ctrl+` `` — that is the backtick key, usually above the Tab key
2. A terminal panel opens at the bottom of VS Code
3. This is a real command line — the same as the Command Prompt or Terminal app on your computer

> **What is a terminal?** Think of it as a text-based version of File Explorer. Instead of clicking folders to open them, you type commands. Developers use the terminal because it's faster and more powerful, and many tools — like Git — are designed specifically for it.

### 1.3 — Essential Terminal Commands

Type each command and observe what happens:

| Command (Windows) | Command (macOS/Linux) | What It Does |
|---|---|---|
| `cd` | `pwd` | Show your current folder location |
| `dir` | `ls` | List files and folders in current location |
| `cd Desktop` | `cd Desktop` | Move into the Desktop folder |
| `cd ..` | `cd ..` | Move up one folder level |
| `mkdir my-folder` | `mkdir my-folder` | Create a new folder |
| `cls` | `clear` | Clear the terminal screen |

> **Key concept**: You are always "inside" a folder. The terminal shows you which folder you are in — this is called your **working directory**. When you type `cd`, you move to a different folder, just like double-clicking in File Explorer.

### 1.4 — Practice Exercise

Type these commands one by one in the terminal:

```
cd Desktop
mkdir ocean-projects
cd ocean-projects
```

*(These commands work the same on Windows and macOS.)*

You should now be inside a new empty folder called `ocean-projects` on your Desktop.

> 🧑‍💻 **Checkpoint**: Type `pwd` (macOS) or `cd` (Windows) and check your location. Share it in the chat — it should end with `/Desktop/ocean-projects`.

---

## Phase 2 — Git and GitHub: Fork and Clone

**⏱ ~25 minutes**

**Goal**: Get a personal copy of the Ocean Quest project onto your computer.

### 2.1 — Key Concepts

Before touching any tools, understand these terms:

| Concept | Simple Analogy |
|---|---|
| **Git** | Like "Track Changes" in Microsoft Word, but for code. It remembers every version of every file. |
| **GitHub** | Like Google Drive, but for code. Hosts Git projects online. |
| **Repository (repo)** | A project folder tracked by Git. |
| **Fork** | Making your own personal copy of someone else's project on GitHub. |
| **Clone** | Downloading your fork from GitHub to your computer. |
| **Commit** | Saving a snapshot of your changes, with a description of what you did. |
| **Push** | Uploading your commits from your computer back to GitHub. |
| **GitHub Pages** | A free service that turns your GitHub repo into a live website. |

**The full workflow for today:**

```
Fork (GitHub) → Clone (terminal) → Edit (VS Code + Copilot) → Commit → Push → Pages (live!)
```

### 2.2 — Fork the Repository

1. Open your browser and go to the class Ocean Quest repository:
   **`https://github.com/[INSTRUCTOR-USERNAME]/ocean-quest`**
   *(Your instructor will post this link in the chat)*
2. Click the **Fork** button in the top-right corner of the page
3. On the "Create a new fork" screen, keep all defaults
4. Click **Create fork**

You now have your own personal copy at:
`https://github.com/YOUR-USERNAME/ocean-quest`

> 🐙 **What just happened?** GitHub made a complete copy of the project under your account. You can do anything to your copy without affecting the original. It's like copying a recipe from a book — now you can adapt it any way you want.

> **Instructor Tip**: Show the fork on screen. Point to the text that says *"forked from [instructor]/ocean-quest"* — that tells you where it came from.

### 2.3 — Clone to Your Computer

1. On **your fork's** GitHub page, click the green **Code** button
2. Make sure **HTTPS** is selected at the top
3. Click the 📋 copy icon to copy the URL
4. Go back to VS Code's terminal (you should still be in `ocean-projects`)
5. Type:

```
git clone https://github.com/YOUR-USERNAME/ocean-quest.git
```

*(Replace `YOUR-USERNAME` with your actual GitHub username)*

6. Wait for it to finish, then move into the folder:

```
cd ocean-quest
```

7. Open this folder in VS Code:

```
code .
```

A new VS Code window opens with the project loaded. In the File Explorer on the left, you should see `index.html`, `style.css`, `app.js`, and `data/`.

> **Troubleshooting**: If `code .` gives an error, use **File → Open Folder** in VS Code and navigate to `Desktop/ocean-projects/ocean-quest` manually.

### 2.4 — Configure Your Git Identity

This is a one-time setup. Git needs to know who you are so it can label your changes:

```
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Use the same email you used to sign up for GitHub.

### 2.5 — See the Game Running

Let's open the game before you change anything:

1. In VS Code's File Explorer, right-click `index.html`
2. Click **"Open with Live Server"** if that option appears (requires the Live Server extension)
3. Or: open your file manager, navigate to the `ocean-quest` folder, and double-click `index.html`

The ocean appears in your browser with the example fish swimming! 🐠

> 🧑‍💻 **Checkpoint**: Can you see fish swimming in the ocean? Type ✅ in the chat. If you see a blank white page, type ❌ and we will help you.

---

## Phase 3 — Using Copilot to Design Your Fish

**⏱ ~25 minutes**

**Goal**: Use AI to help you design a unique fish and add it to the game.

### 3.1 — Open Copilot Chat

1. Press **Ctrl+Shift+I** (Windows) or **Cmd+Shift+I** (macOS) to open Copilot Chat
2. A chat panel opens on the right side — this is your AI coding assistant

> **What is GitHub Copilot?** It is an AI assistant built into VS Code. You can ask it questions in plain English, ask it to explain code, ask it to generate code, and ask it to help fix errors. Think of it as a very knowledgeable friend who knows a lot about code.

### 3.2 — First Prompt: Understand the Code

Before creating anything, let's understand what we are working with.

Make sure `data/fish.js` is open in VS Code (click it in File Explorer).

In Copilot Chat, type this message:

> **"I am a complete beginner. Can you explain what the code in fish.js does? What is the fishCollection array and what does each field mean?"**

Read the explanation that Copilot gives. You should now understand:
- What an **array** is (a list of items)
- What an **object** is (a collection of named values)
- What `name`, `color`, `fact`, and `speed` represent in the fish entry

> 🤖 **This is agentic coding**: You used AI to understand code without needing a teacher to explain it. You are directing the AI — asking specific questions, reading its answer, and deciding what to do next.

### 3.3 — Second Prompt: Design Your Fish

Now design your fish! Decide these four things:
- **Name**: What is your fish called? (must be unique — no two fish can share a name)
- **Colors**: Pick 3 colors — body, fins, and belly stripe. The easiest way is to visit **[colorhunt.co/palettes/popular](https://colorhunt.co/palettes/popular)**, pick a palette you like, and use the first three hex codes. Each code looks like `#FF6B6B`.
- **Fun fact**: One fun sentence about your fish
- **Speed**: 0.5 (slow), 1.0 (normal), or 2.0 (fast)

In Copilot Chat, describe your fish:

> **"I want to add a fish to my fish.js file. My fish is called 'Neptune'. It is deep purple, very fast, and its fun fact is that it once won a swimming race against a dolphin. Can you generate the JavaScript object I need to add to fishCollection?"**

Copilot will generate something like:

```javascript
{
  name:  "Neptune",
  color: "#5B2C8D",
  fact:  "Neptune once won a swimming race against a dolphin.",
  speed: 2.0
}
```

### 3.4 — Review and Iterate

Do not just paste the first result. Read it and ask yourself:
- Do the 3 colors look good together? Pick a palette from [colorhunt.co/palettes/popular](https://colorhunt.co/palettes/popular) for an instant match
- Does the fact sound fun and original?
- Does the speed match your fish's personality?

Ask Copilot to change things if needed:
- *"Make the color brighter"*
- *"Give me a funnier fact"*
- *"What is a good hex code for turquoise?"*
- *"Change the speed to medium"*

> **Instructor talking point**: "AI gives you a starting point — you make it yours. Always read and improve the output. You are the creator; the AI is your assistant."

### 3.5 — Add Your Fish to fish.js

Open `data/fish.js` in VS Code.

1. Scroll to the bottom of the file
2. Find the comment that says `// ── ADD YOUR FISH HERE ──`
3. Add a **comma** after the closing `}` of the last existing fish
4. Then paste your fish object

It should look like this when done correctly:

```javascript
  {
    name:  "Sandy",
    color: "#FFD93D",
    fact:  "Sandy turns golden in the sunlight.",
    speed: 0.8
  },                       ← you added this comma
  {
    name:  "Neptune",
    color: "#5B2C8D",
    fact:  "Neptune once won a swimming race against a dolphin.",
    speed: 2.0
  }                        ← NO comma after the last fish!
```

5. Save the file: **Ctrl+S** (Windows) or **Cmd+S** (macOS)

> **Common mistakes to watch for:**
> - ❌ Missing comma between the last existing fish and your new one
> - ❌ Extra comma after your fish (the very last entry must NOT have a trailing comma)
> - ❌ Missing `"` around text values
> - ✅ VS Code shows **red squiggly underlines** if there is a syntax error — look for them!

### 3.6 — Verify Your Fish Appears

Reload `index.html` in your browser (press **F5** or **Ctrl+R**).

You should see your fish swimming in the ocean! 🎉

Scroll down to the gallery section — your fish card should appear there too.

> 🧑‍💻 **Checkpoint**: Can you see your fish? Take a screenshot and share it in the chat!

---

## Phase 4 — Commit, Push, and Publish on GitHub Pages

**⏱ ~25 minutes**

**Goal**: Publish your ocean live on the internet.

### 4.1 — Check What Changed

In the VS Code terminal:

```
git status
```

You should see:

```
modified:   data/fish.js
```

Git detected your change. To see exactly what you changed:

```
git diff data/fish.js
```

Lines starting with `+` (in green) are lines you added.

> **Visual alternative**: Click the **Source Control** icon (`Ctrl+Shift+G`). You'll see `fish.js` listed as a changed file. Click it for a side-by-side comparison.

### 4.2 — Stage Your Changes

Tell Git you want to include this file in your next save:

```
git add data/fish.js
```

> **What is staging?** Think of it like putting items in a shipping box. You are telling Git: "These are the changes I want to include in this save." This is useful when you've changed multiple files but only want to save some of them.

### 4.3 — Commit Your Changes

Create a permanent snapshot with a description:

```
git commit -m "Add my fish: Neptune"
```

Change "Neptune" to your actual fish name.

> **What is a commit?** It is like a save point in a video game. It records the exact state of your files at that moment, with a message describing what changed. You can always go back to any commit.

### 4.4 — Push to GitHub

Upload your commit from your computer to GitHub:

```
git push origin main
```

- `origin` means "the GitHub repository you cloned from" (your fork)
- `main` is the name of the main branch (the main line of development)

> **Windows authentication**: A browser window may pop up asking you to sign in to GitHub. Sign in and authorize Git. This only happens once.
>
> **Troubleshooting**: If you get an "Authentication failed" error, ask your instructor. You may need to sign in via the browser pop-up, or generate a [Personal Access Token](https://github.com/settings/tokens).

### 4.5 — Enable GitHub Pages

This turns your repository into a live website in three clicks:

1. Go to your fork on GitHub: `https://github.com/YOUR-USERNAME/ocean-quest`
2. Click the **Settings** tab at the top of the page
3. In the left sidebar, click **Pages**
4. Under **Branch**, click the dropdown and select **main**
5. Leave the folder as `/ (root)`
6. Click **Save**

You will see: *"Your site is being published at https://YOUR-USERNAME.github.io/ocean-quest"*

Wait about 1–2 minutes for GitHub to build the page. Then refresh — the URL becomes clickable.

### 4.6 — See Your Fish Live! 🎉

Open `https://YOUR-USERNAME.github.io/ocean-quest` in your browser.

Your animated fish is swimming live on the internet. Anyone in the world can open this link.

> 🧑‍💻 **Checkpoint**: Share your GitHub Pages URL in the chat! Let's collect everyone's links.

---

## Phase 5 — Wrap-Up and Recap

**⏱ ~10 minutes**

### The Workflow You Learned

```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│   FORK   │─▶│  CLONE   │─▶│   EDIT   │─▶│  COMMIT  │─▶│   PUSH   │─▶│  PAGES   │
│(GitHub)  │  │(terminal)│  │(VS Code +│  │  (Git)   │  │  (Git)   │  │(GitHub)  │
│          │  │          │  │ Copilot) │  │          │  │          │  │          │
└──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘
 Your copy     Download      Change         Save a         Upload        Live site!
 on GitHub     locally       the file       snapshot       to GitHub
```

### Skills You Practiced

| Skill | What You Did |
|---|---|
| **VS Code** | Opened files, used the integrated terminal, used Copilot Chat |
| **Terminal** | `cd`, `ls`/`dir`, `mkdir`, `git status`, `git diff` |
| **AI / Copilot** | Asked Copilot to explain code and generate a fish entry |
| **Git** | `git clone`, `git add`, `git commit`, `git push` |
| **GitHub** | Forked a repository, enabled GitHub Pages, published a live site |
| **Open Source** | Modified and published an open-source web project |

### Resources to Keep Learning

| Resource | Link |
|---|---|
| VS Code Documentation | https://code.visualstudio.com/docs |
| Git Basics (free online book) | https://git-scm.com/book/en/v2 |
| GitHub Skills (interactive courses) | https://skills.github.com/ |
| GitHub Copilot Documentation | https://docs.github.com/en/copilot |
| freeCodeCamp (free web dev) | https://www.freecodecamp.org |

### Bonus Challenges (Fast Finishers)

1. **Make your fish bigger or smaller**: Open `style.css` and find the `.fish` rule. Ask Copilot: *"How do I change the fish size?"*
2. **Add a second fish**: Give it a completely different personality and color
3. **Change the ocean colors**: Find the `#ocean` rule in `style.css`. Ask Copilot to help you change the gradient to a sunset ocean
4. **Understand `app.js`**: Ask Copilot to explain the `createFishSVG` function line by line. Try changing the fish body shape
5. **Share your ocean**: Post your GitHub Pages link and challenge a classmate to find your fish

---

## Instructor Notes

### Before the Session

- [ ] **Create the class repo**: Use your GitHub account to host the Ocean Quest project. Make it public.
- [ ] **Add 2–3 example fish** to `data/fish.js` so students see a working ocean from day one
- [ ] **Test the full workflow**: fork → clone → edit `fish.js` → add/commit/push → enable Pages → verify live URL
- [ ] **Send the setup checklist** to students 24 hours before the session (see Phase 0 above)
- [ ] **Prepare your demo**: have VS Code and a live ocean tab open before students join
- [ ] **Backup plan**: if Copilot is unavailable, [Google Gemini](https://gemini.google.com) is a free browser alternative

### During the Online Session

**Tips for online delivery:**
- Post the repo link in the chat immediately when students join
- Use a **chat poll** at the start: "Type ✅ if setup is done, ❌ if you need help"
- **Narrate every command** as you type it — say it out loud first
- **Pause after each phase** — give students 30 extra seconds to catch up
- Use **breakout rooms** during Phase 3 (fish design) — groups of 3-4 for 10 minutes work well
- **Celebrate every live URL** posted in the chat: "🎉 [Name]'s ocean is live!"

**Common blockers and solutions:**

| Problem | Solution |
|---|---|
| `git clone` fails | Re-copy the URL from the green Code button on GitHub |
| Wrong directory | Type `cd ocean-projects` first, then retry |
| `code .` not recognized | Use File → Open Folder in VS Code |
| Fish doesn't appear | Check for red underlines in `fish.js`; most likely a missing comma |
| `git push` authentication failure | Sign in via the browser pop-up that appears |
| GitHub Pages shows 404 | Settings → Pages → confirm branch is `main` → Save; wait 2 min |
| Copilot unavailable | Use [gemini.google.com](https://gemini.google.com) in a browser tab |

### Timing Guide

| Phase | Content | Duration |
|---|---|---|
| Check-in | Setup verification + welcome | ~5 min |
| Intro | Agentic coding, open source, the game | ~15 min |
| Phase 0 | Setup help for students who need it | ~10 min |
| Phase 1 | VS Code + terminal orientation | ~20 min |
| Phase 2 | Fork, clone, explore | ~25 min |
| Phase 3 | Copilot + fish design + file edit | ~25 min |
| Phase 4 | Commit, push, GitHub Pages | ~20 min |
| Phase 5 | Recap + bonus challenges | ~10 min |
| Buffer | Troubleshooting + Q&A | ~10 min |
| | **Total** | **~2.5 hours** |
