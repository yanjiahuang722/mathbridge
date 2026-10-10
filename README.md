# MathBridge 2.0

A free, student-built mathematics education website for high-school and introductory college students. Built as a static website (HTML, CSS, JavaScript) and deployable to GitHub Pages.

Live website (after you push this update): https://yanjiahuang722.github.io/mathbridge/

## New in version 2.0 — Guided Learn

- **16 original guided lessons**: 8 in Number Theory and 8 in Probability.
- Each lesson includes learning objectives, mathematical explanations, a worked example, common mistakes, key takeaways, and a three-question quiz with hints and explanations.
- **48 checkpoint questions** total (three per lesson).
- Lesson catalog with search and subject filters.
- Progress tracking: answering all three questions and correctly answering at least two marks the lesson complete.
- **Privacy**: completion records are stored using the current browser's `localStorage`; there are no accounts, uploads, servers, or analytics. Progress is not synchronized across devices and can disappear if browser storage is cleared.
- Mobile-responsive course catalog and lesson reader.

### Curriculum

**Number Theory**
1. Divisibility & the Division Algorithm
2. GCD & Euclidean Algorithm
3. Bézout’s Identity
4. Primes & Unique Factorization
5. Congruences & Modular Arithmetic
6. Modular Inverses & Linear Congruences
7. Linear Diophantine Equations
8. Chinese Remainder Theorem

**Probability**
1. Sample Spaces & Counting
2. Events & Inclusion–Exclusion
3. Conditional Probability & Independence
4. Bayes’ Theorem
5. Random Variables & Expectation
6. Bernoulli Trials & Binomial Distribution
7. Poisson Distribution & Approximation
8. Law of Large Numbers

## All pages

- `index.html` — homepage with updated statistics
- `learn.html` — searchable course catalog
- `lesson.html?id=nt-gcd` — template for each guided lesson; the `id` identifies a lesson
- `math-lab.html` — original Euclidean algorithm, modular inverse, and binomial visualizer
- `practice.html` — 10 original practice questions
- `about.html` — project mission, privacy and roadmap

### Files and editing new lessons

- `css/style.css` — shared layouts and responsive styles
- `js/lessons-data.js` — **all lesson content** (titles, definitions, examples, quiz answers and hints). Edit this file to revise or add a lesson.
- `js/learn.js` — builds the search-and-filter catalog
- `js/lesson.js` — renders lessons, checks answers and stores completion progress
- `js/app.js`, `js/math-lab.js`, `js/practice.js` — original v1 functionality
- `.gitignore` — hides macOS `.DS_Store` and Windows `Thumbs.db` files from Git changes

When adding a lesson, copy an existing object in `js/lessons-data.js`, give it a **unique `id`**, and provide exactly three quiz questions. Update numerical copy such as "16 lessons" and "48 questions" in `learn.html` and `index.html` if the counts change. The lesson content is hand-authored static HTML only; never insert untrusted user input into `innerHTML`.

## Develop and publish (VS Code + GitHub Desktop)

1. Extract the ZIP and **copy its contents**, not the outer folder, into the repository folder opened by GitHub Desktop → **Repository → Show in Finder**. Overwrite the same-named files.
2. Open the repository in VS Code and preview locally (e.g. using the Live Server extension).
3. Check `learn.html` and `lesson.html?id=nt-gcd`, then test Math Lab and Practice.
4. In GitHub Desktop, select the changes and **Commit to main**.
5. Click **Push origin**. GitHub Pages will deploy again from `main` and `/(root)`; no new Pages configuration is necessary.

`index.html` must remain at the **repository root**, not nested in another `mathbridge` folder. The source files need no build tools or server-side code.

## Scope

The lessons are introductory educational resources, not a substitute for instructor-led coursework. The project has not claimed user counts, tutoring partnerships, or measured learning gains. Future goals include improving clarity based on feedback, adding diagrams and deeper practice, and exploring outreach collaborations.

Issues and feedback: https://github.com/yanjiahuang722/mathbridge/issues
