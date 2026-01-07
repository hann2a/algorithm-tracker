
# 🧠 Algorithm Tracker

A minimalist, colorful algorithm tracking calendar built with **Jekyll**, **Tailwind CSS**, and **GitHub Actions**.  
Write your posts in Markdown and see them automatically reflected on your GitHub Pages site.

---

## ✨ Features

- 📅 Monthly calendar that highlights days with solutions
- 🔗 Click on a date to view algorithm post (title, summary, code, and link)
- 🎨 Designed to match Figma layout using Tailwind + Pretendard
- 🔁 Auto deploy on push using GitHub Actions
- 🧾 Posts written in `_posts/YYYY-MM-DD-title.md`

---

## 🚀 Local Setup

```bash
# Install dependencies
npm install

# Build Tailwind CSS
npm run build

# Serve with Jekyll
bundle exec jekyll serve
```

---

## ✅ Deployment

Built and deployed automatically via **GitHub Actions** on every push to `main` or `master`.

---

## 📁 Folder Structure

```
.
├── _layouts/         # Jekyll layouts
├── _includes/        # Reusable components
├── _posts/           # Your algorithm notes
├── assets/css/       # Tailwind CSS input/output
├── .github/workflows # GitHub Actions config
└── index.md          # Homepage
```

---

## 📝 Write a Post

Create a file like:

```
_posts/2026-01-08-array-rotation.md
```

With content:

```markdown
---
title: "Array Rotation"
summary: "Rotating array by k steps using reversal"
link: "https://leetcode.com/problems/rotate-array"
code: |
  def rotate(nums, k):
      n = len(nums)
      k %= n
      nums[:] = nums[-k:] + nums[:-k]
---

```

And you're done!

---

## 💡 Credits

Built with ❤️ using Tailwind CSS + Jekyll + GitHub Pages  
Design inspired by Figma wireframes
