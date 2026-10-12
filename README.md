# MathBridge — Notebook Edition (2.4)

MathBridge is a free, student-built mathematics learning website in HTML/CSS/JavaScript. This package is a visual redesign of the existing 2.3 project, inspired by math notebooks and hand-drawn learning notes.

## What has changed

- Home: editorial homepage, reusable math-note collage, course previews, and genuine links.
- Learn: redesigned catalog, responsive lesson cards, and 55 **distinct topic-specific SVG illustrations** (one for every course chapter).
- Lesson reader: matching visual styling and a small matching lesson illustration.
- Math Lab: illustrated jump-to-tool gallery plus **all 12 existing interactive tools**.
- Practice: cohesive page styling, existing **165 questions**, subject/topic/level/difficulty selection, answer checking and browser-local history.
- About: an updated, honest project story, learning approach and a GitHub feedback link.
- Mobile-friendly layout and keyboard-friendly native form controls.

**IMPORTANT:** No backend, database, account, sign-in, or analytics service is included. The mockup's sign-in buttons were intentionally NOT added, because they would not work. The visible buttons link to real pages or tools. No new mathematics topics have been invented merely to match the visual references.

## File overview

- `index.html`, `learn.html`, `lesson.html`, `math-lab.html`, `practice.html`, `about.html` are the six working HTML pages (five top navigation sections and one shared chapter reader).
- `css/style.css` contains the original responsive design styles plus the Notebook Edition design overrides.
- `js/learn.js` renders chapter cards and their illustrations. `js/lesson.js` changes the reader illustration according to the current chapter.
- `assets/lesson-art/*.svg` holds **55 editable scalable vector illustration files**, one per chapter ID. Files have direct mathematical relevance to the associated chapter; these are lightweight topic symbols/formulas, not textbook screenshots.
- All other `js/*.js` retain the current lesson content, calculators, quiz questions and browser-local storage behavior.

## Deploying on GitHub Pages

1. Make a backup or confirm the current project is already committed/pushed to GitHub.
2. In **GitHub Desktop**, select `mathbridge`, then `Repository → Show in Finder`.
3. **For the PATCH:** unzip and copy its contents into the folder opened by GitHub Desktop, merging the `assets/` and `js/` folders and replacing same-name files. Do not put the ZIP's outer directory inside the repo.
4. **For FULL:** unzip and copy all *contents* over your current repository root, not inside an extra nested directory.
5. Open `index.html`, `learn.html`, `math-lab.html` and `practice.html` through VS Code Live Server. Check that the SVGs load and calculators answer sample tests.
6. GitHub Desktop: summary `Redesign MathBridge with notebook-style illustrations`, then `Commit to main` and `Push origin`.
7. Open `https://yanjiahuang722.github.io/mathbridge/` and hard-refresh if the old CSS was cached.

## Important compatibility notes

- `mathbridge-lesson-completion-v2` (lesson completion) and prior practice keys are unchanged. No migration is needed for existing local browser progress.
- The two subject areas and original 55 lesson IDs remain unchanged.
- This release **does not publish your GitHub repository for you**; it only gives you the files to deploy.
- Some handwritten fonts may differ slightly depending on the fonts installed on each visitor's computer. No external font downloads are required.
- This is educational content, not a claim that the site's original question bank has been independently peer reviewed.
