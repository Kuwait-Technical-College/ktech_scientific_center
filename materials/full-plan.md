# Full Session Plan

## 🌊 Ocean Quest: Code Your Fish, Publish Your Ocean

### The Scientific Center of Kuwait — Online Workshop

---

## Session Identity

| | |
|---|---|
| **Title** | 🌊 Ocean Quest: Code Your Fish, Publish Your Ocean |
| **Tagline** | An Agentic Coding Workshop for Young Beginners |
| **Organization** | The Scientific Center of Kuwait |
| **Delivered By** | ktech (Kuwait Technical College) |
| **Format** | Online, live instructor-led, code-along |
| **Duration** | 2 – 2.5 hours |
| **Target Audience** | Students ages 15–20 |
| **Prerequisites** | None — complete beginners welcome |
| **Language** | English |
| **Platform** | Zoom / Microsoft Teams / Google Meet |

---

## Learning Outcomes

By the end of this session, students will be able to:

1. **Navigate VS Code** — open files, use the integrated terminal, install extensions
2. **Run basic terminal commands** — `cd`, `ls`/`dir`, `mkdir`, `git status`, `git diff`
3. **Explain open source** — what it is, why it matters for technology, AI, and careers
4. **Use GitHub Copilot as a coding partner** — ask it to explain code, generate entries, and iterate
5. **Apply Git fundamentals** — clone, add, commit, and push a change
6. **Fork and publish a GitHub repository** — enable GitHub Pages to create a live website
7. **Make a real open-source contribution** — a unique custom animated fish in a live web game

---

## Big Ideas (Conceptual Hooks)

This session connects three ideas students may not realize are deeply related:

| Concept | Hook |
|---|---|
| **AI** | Copilot is a coding agent you direct — describe what you want in English, it helps you build it |
| **Open Source** | The internet, AI tools, and the apps you use daily are all built on shared, open code |
| **Web Publishing** | A text file you write today becomes a live page anyone in the world can visit in minutes |

---

## Pre-Session Preparation

### Instructor Checklist *(complete at least 48 hours before the session)*

- [ ] **Create the class repository** on your GitHub account (or the organization account)
  - Repository name: `ocean-quest`
  - Visibility: **Public** (required for GitHub Pages)
  - Copy the contents of the `project/` folder from this package into the repo
- [ ] **Add 2–3 example fish** to `data/fish.js` before students arrive — so the ocean looks populated from the start
- [ ] **Test the full student workflow end-to-end**:
  fork → clone → edit `fish.js` → `git add` + `commit` + `push` → enable Pages → verify live URL
- [ ] **Confirm GitHub Pages deploys correctly** on a forked test account
- [ ] **Set up your demo screen**: VS Code open with project loaded, live ocean tab open in browser
- [ ] **Send the pre-work email** to students (template below)
- [ ] **Test your audio and screen share** 15 minutes before the session

### Pre-Work Email Template

```
Subject: 🌊 Ocean Quest Workshop — Please complete setup before our session!

Hi [Student Name],

Before our online workshop on [DATE], please complete these 4 steps
(about 15 minutes total):

1. Install VS Code:     https://code.visualstudio.com/
2. Install Git:         https://git-scm.com/download
3. Create a GitHub account: https://github.com/join (verify your email!)
4. Install GitHub Copilot in VS Code and sign in with your GitHub account

At the start of the session, type ✅ in the chat to confirm you're set up.

See you soon! 🐠

— [Instructor Name]
```

### Technical Requirements

| Item | Requirement |
|---|---|
| Student device | Windows 10+ or macOS 10.15+ |
| RAM | 4 GB minimum |
| Browser | Chrome, Firefox, Edge, or Safari (latest) |
| Internet | Stable connection — Git operations need network access |
| Screen resolution | 1280×768 minimum |
| Screen sharing | Students should be able to share screen for troubleshooting |

### Backup Plan

| Issue | Backup |
|---|---|
| GitHub Copilot unavailable | Use [Google Gemini](https://gemini.google.com) — same workflow, browser tab |
| Git install fails | Use [GitHub Desktop](https://desktop.github.com) — visual Git client |
| VS Code won't install | Use [vscode.dev](https://vscode.dev) — VS Code in the browser, no install |
| GitHub Pages slow | Show instructor's live page as reference; student publishes after session |

---

## Minute-by-Minute Delivery Plan

### Pre-Session (10 min before start)

| Action |
|---|
| Open VS Code with the project already cloned |
| Open the live GitHub Pages ocean in a browser tab |
| Open the class GitHub repo in another tab |
| Test screen share and audio |
| Post the repo link in the chat as students join |

---

### Opening (0:00 – 0:20) | ~20 minutes

| Time | Action | Facilitator Note |
|---|---|---|
| 0:00 | Welcome + check-in poll | *"Type ✅ in the chat if setup is done, ❌ if you need help"* |
| 0:02 | Help ❌ students | Give 3 minutes; continue with context while they work |
| 0:05 | Intro: What is agentic coding? | Key message: AI is your coding partner, not a replacement. You are the director. |
| 0:10 | Intro: What is open source? | Use the recipe book analogy. Show the connection to VS Code, Android, Python. |
| 0:15 | Live demo: show the ocean game | Open your GitHub Pages site on screen. *"Every fish was added by a student."* |
| 0:18 | Show `fish.js` | *"This is the only file you will edit today. Four lines of code. That's it."* |

---

### Phase 1: VS Code + Terminal (0:20 – 0:40) | ~20 minutes

| Time | Action | Facilitator Note |
|---|---|---|
| 0:20 | VS Code tour on screen | Open and close each panel — students follow along |
| 0:25 | Open terminal together | `Ctrl+backtick` — confirm everyone can see it |
| 0:27 | Live demo terminal commands | Type each command, narrate it as you go |
| 0:30 | `cd Desktop`, `mkdir ocean-projects`, `cd ocean-projects` | Students type along |
| 0:35 | Students practice independently | 5 min independent time |
| 0:38 | Checkpoint | *"Type your current folder path in the chat"* |

---

### Phase 2: Fork & Clone (0:40 – 1:05) | ~25 minutes

| Time | Action | Facilitator Note |
|---|---|---|
| 0:40 | Concept overview | Quick table: Git / GitHub / Fork / Clone / Commit / Push / Pages |
| 0:45 | Demo fork on screen | Click through each step slowly. Students watch first. |
| 0:48 | Students fork | 5 min. Confirm with ✅ in chat. |
| 0:52 | Demo clone | Copy URL, paste `git clone`, `cd`, `code .` |
| 0:55 | Students clone | Watch for authentication issues |
| 0:58 | `git config` identity | One-time setup — run with them |
| 1:00 | Open `index.html` in browser | Double-click or use Live Server |
| 1:03 | Explore `fish.js` | *"Read the comments — they explain exactly what to do"* |
| 1:05 | Checkpoint | *"Type ✅ if you can see fish swimming"* |

---

### Phase 3: Design Fish with Copilot (1:05 – 1:30) | ~25 minutes

| Time | Action | Facilitator Note |
|---|---|---|
| 1:05 | Open Copilot Chat | `Ctrl+Shift+I` — confirm all students see the chat panel |
| 1:07 | Demo Prompt 1: explain code | Ask Copilot to explain `fish.js`. Read the answer together. |
| 1:12 | Students ask Copilot to explain | 5 min independent — they read the explanation |
| 1:17 | Demo Prompt 2: design a fish | Design your instructor fish live — pick name, color, fact, speed |
| 1:20 | ⚡ BREAKOUT ROOMS | 10 min in groups of 3-4: design fish, get Copilot to generate it |
| 1:30 | Re-sync | *"Let's add the fish to the file together"* |
| 1:32 | Walk through file editing | Step by step: find location, add comma, paste fish, save |
| 1:34 | Checkpoint | *"Reload index.html — type ✅ if you see your fish!"* |

---

### Phase 4: Commit, Push, Publish (1:35 – 1:55) | ~20 minutes

| Time | Action | Facilitator Note |
|---|---|---|
| 1:35 | `git status` | Show modified file |
| 1:37 | `git diff data/fish.js` | Show green `+` lines — students understand what changed |
| 1:39 | `git add data/fish.js` | Explain staging with the "box before shipping" analogy |
| 1:41 | `git commit -m "Add my fish: Name"` | Students write their own fish name in the message |
| 1:43 | `git push origin main` | Watch for authentication pop-ups |
| 1:46 | Enable GitHub Pages live on screen | Settings → Pages → main → Save |
| 1:48 | Students enable Pages | 5 min — they follow the same steps |
| 1:52 | Wait for deployment | *"GitHub takes 1-2 minutes to publish. Let's check in 2 minutes."* |
| 1:53 | 🎉 Live site | Open student URLs in the chat. Display on screen. |

---

### Phase 5: Wrap-Up (1:55 – 2:10) | ~15 minutes

| Time | Action | Facilitator Note |
|---|---|---|
| 1:55 | Workflow recap | ASCII diagram — walk through each step |
| 1:58 | Skills recap table | What they learned: VS Code, terminal, AI, Git, GitHub, open source |
| 2:00 | Bonus challenges | Quick overview — encourage fast finishers to start |
| 2:03 | Resources list | Post links in the chat |
| 2:05 | Open Q&A | Invite questions |
| 2:08 | Closing | Thank students; share recording link; encourage them to share their ocean |

---

## Assessment and Completion Criteria

A student has completed the session if they can demonstrate all of the following:

| Criterion | How to Verify |
|---|---|
| ✅ Fish appears locally | Open `index.html` — student's fish is visible and swimming |
| ✅ Fish name is unique | Name does not match any existing fish in `fish.js` |
| ✅ Code is valid | No red underlines in VS Code; game renders without errors |
| ✅ Change pushed to GitHub | Fork on GitHub shows the updated `data/fish.js` |
| ✅ GitHub Pages is live | Student shares a working URL ending in `.github.io/ocean-quest` |

### Participation Rubric (Optional)

| Level | Description |
|---|---|
| 🐚 **Explorer** | Completed setup and opened the ocean game locally |
| 🐟 **Sailor** | Added a fish and saw it swimming locally |
| 🐠 **Navigator** | Pushed to GitHub and enabled GitHub Pages |
| 🦈 **Captain** | Live site is online + attempted at least one bonus challenge |

---

## Troubleshooting Matrix

| Problem | Symptoms | Solution |
|---|---|---|
| Wrong directory | `git clone` error: "not a git repository" | Type `cd ocean-projects` first |
| URL typo in clone | "Repository not found" | Re-copy from GitHub's green Code button |
| `code .` not found | "command not found" or no response | Use File → Open Folder in VS Code |
| JSON syntax error | Red underlines in `fish.js`; fish not visible | Check comma placement; use Copilot to debug |
| Push authentication | "Authentication failed" | Sign in via browser pop-up; or use a Personal Access Token |
| Pages returns 404 | URL loads but shows GitHub 404 page | Settings → Pages → confirm branch is `main` → Save |
| Pages slow to load | Site not loading after enabling | Wait 2-3 minutes; GitHub Pages has a deployment delay |
| Copilot not responding | No response in chat panel | Reload VS Code; fall back to Gemini in browser |
| Fish not visible after save | Page reloads but no fish | Open DevTools (F12) → Console tab for errors |

---

## Online Delivery Best Practices

### Before the Workshop
- Test audio and screen share 15 minutes early
- Have a co-host or TA who can monitor the chat and help with individual issues
- Post the repo link and setup checklist in the chat the moment students join
- If possible, use a second monitor: one for your demo, one for watching the chat

### During the Workshop
- **Narrate every keystroke** — say each command out loud before pressing Enter
- **Pause after each phase** — give students an extra 30 seconds before moving on
- **Use chat reactions** — ask students to use 👍 to confirm they are keeping up
- **Record the session** (with permission) — students can rewatch the Git commands
- **Breakout rooms** are highly effective during Phase 3 (fish design, 10 minutes in groups of 3-4)

### Engagement Techniques
- Ask students to share their fish color in the chat before they add it to the file
- Keep a running list of live URLs in the chat as students publish
- Celebrate each live URL: *"🎉 [Name]'s ocean is live at [link]!"*
- At the close, open 2-3 student oceans on screen to compare fish side by side

---

## Post-Session Checklist

### Instructor
- [ ] Share session recording link with students
- [ ] Post resources list in the class channel
- [ ] Collect student GitHub Pages URLs for an optional class gallery
- [ ] Run a 3-question feedback form: What worked? What was confusing? What would you add?
- [ ] Archive the session notes for future facilitation

### Student Next Steps (share in closing)
- [ ] Share your live ocean URL with friends and family
- [ ] Try at least one bonus challenge from Phase 5
- [ ] Follow [The Scientific Center of Kuwait](https://github.com) on GitHub
- [ ] Explore [freeCodeCamp](https://www.freecodecamp.org) for your next step in web development
