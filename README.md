<div align="center">
  <img src="./assets/scientific_center_logo.png" height="60" alt="Scientific Center of Kuwait" />
  &nbsp;&nbsp;&nbsp;
  <img src="./assets/ktech_logo_light.svg" height="52" alt="ktech" />
</div>

# 🌊 Ocean Quest — Student Project

A simple animated ocean game where every fish was added by a different student.
**No tools needed** — just a browser and a text editor.

---

## 🐠 What Is This?

This is a web page that shows an animated ocean.
Every fish swimming in it was added by a student, just like you.

Your job: **add your own fish** and publish it live on the internet.

---

## 📁 Project Files

```
ocean-quest/
├── index.html        ← Open this in a browser to see the game
├── style.css         ← Colors and visual design (no need to edit)
├── app.js            ← Makes fish swim (no need to edit)
└── data/
    └── fish.js       ← ⭐ THIS is the only file you need to edit!
```

---

## 🚀 Quick Start — Run Locally (No Tools Required)

1. Make sure you have the project folder on your computer
2. Open the folder in File Explorer (Windows) or Finder (macOS)
3. **Double-click `index.html`** — it opens in your browser
4. You should see the ocean with fish swimming 🐠

> No Node.js, no npm, no server needed. It just works.

---

## ✏️ How to Add Your Fish

### Step 1 — Open `data/fish.js` in VS Code

In VS Code:
1. Press `Ctrl+Shift+E` to open the File Explorer panel
2. Navigate to `data/` → click `fish.js`

### Step 2 — Find the "ADD YOUR FISH HERE" comment

Scroll to the bottom of the file. You will see:

```javascript
  // ── ADD YOUR FISH HERE ──
```

### Step 3 — Add a comma after the last fish, then add yours

It should look like this:

```javascript
  {
    name:  "Sandy",
    color: "#FFD93D",
    fact:  "Sandy turns golden in the sunlight.",
    speed: 0.8
  },                          ← comma here (you add this)
  {
    name:  "YourFishName",    ← pick a unique name
    color: "#FF6B6B",         ← any color (try https://g.co/colorpicker)
    fact:  "A fun sentence about your fish.",
    speed: 1.0                ← 0.5 = slow, 1.0 = normal, 2.0 = fast
  }                           ← NO comma after the very last fish
```

### Step 4 — Save the file

Press `Ctrl+S` (Windows) or `Cmd+S` (macOS).

> If VS Code shows **red squiggly underlines**, there is a syntax error.
> Common fixes:
> - Missing comma between fish entries
> - Extra comma after the last fish
> - Missing `"` around a value

### Step 5 — Refresh your browser

Press `F5` or `Ctrl+R` on the `index.html` tab.
Your fish should appear swimming in the ocean! 🎉

---

## 🌐 How to Publish Your Ocean on GitHub Pages

Once your fish works locally, follow these steps to put it on the internet:

### Step 1 — Stage and commit your change

In VS Code's terminal (`Ctrl+\``):

```bash
git add data/fish.js
git commit -m "Add my fish: YourFishName"
```

### Step 2 — Push to GitHub

```bash
git push origin main
```

> A browser window may open asking you to sign in to GitHub. Sign in once and you're done.

### Step 3 — Enable GitHub Pages

1. Go to your fork on GitHub: `https://github.com/YOUR-USERNAME/ocean-quest`
2. Click the **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Branch**, select `main`
5. Leave the folder as `/ (root)`
6. Click **Save**

### Step 4 — Wait ~1 minute, then visit your live site

Your site will be live at:

```
https://YOUR-USERNAME.github.io/ocean-quest
```

Share this link — anyone in the world can now see your fish! 🌊

---

## ⚠️ Rules for Fish Entries

| Rule | Why |
|---|---|
| **Name must be unique** | Each fish is identified by its name |
| **Color must be a valid CSS color** | e.g. `"coral"`, `"#FF6B6B"`, `"rgb(255,107,107)"` |
| **Speed must be a number** | Recommended range: 0.3 to 2.5 |
| **Fact must be a string** | Keep it fun and school-appropriate |

---

## 🎨 Color Ideas

Your fish uses **3 colors** — body, fins & tail, and belly stripe.
The easiest way to pick them is to grab a ready-made palette:

- 🎨 **Color Hunt** (recommended): https://colorhunt.co/palettes/popular  
  Browse popular palettes — click any palette to copy the hex codes
- Google Color Picker: https://g.co/colorpicker
- Coolors palette generator: https://coolors.co
- CSS named colors: https://www.w3schools.com/cssref/css_colors.asp

---

## 🐛 Troubleshooting

| Problem | Fix |
|---|---|
| Fish doesn't appear after save | Check for red underlines in `fish.js`; reload the browser |
| Page is blank | Open browser DevTools (F12) → Console tab to see errors |
| `git push` fails | Sign in to GitHub via the browser pop-up |
| GitHub Pages shows 404 | Check Settings → Pages; wait 2 more minutes and refresh |

---

## 📚 Learn More

- [VS Code Docs](https://code.visualstudio.com/docs)
- [Git Basics](https://git-scm.com/book/en/v2)
- [GitHub Pages Guide](https://pages.github.com/)
- [GitHub Copilot](https://docs.github.com/en/copilot)

---

*Made with 💙 for The Scientific Center of Kuwait*
