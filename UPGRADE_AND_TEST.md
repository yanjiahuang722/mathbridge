# Upgrade MathBridge to version 2.2

1. In GitHub Desktop select your personal `mathbridge` repository and choose **Repository → Show in Finder**.
2. Back up that folder before replacing any files.
3. Extract the archive. Copy **the contents inside** the `MathBridge-Advanced` package into the repository folder, not an extra enclosing folder. Replace existing files when prompted.
4. Open `learn.html` using VS Code Live Server (or an ordinary browser as a basic fallback).
5. Verify there are **55 lessons** under **All levels**, **16 lessons** under **Foundations**, and **39 lessons** under **Advanced**.
6. Under Advanced, use the subject buttons to see **17 Number Theory** or **22 Probability** lessons. Search for `Quadratic Reciprocity` or `Central Limit Theorem` and open the result.
7. Complete any advanced lesson's three questions, then reload: the completion status should persist in the same browser. Original foundation lessons should also remain completed if they were completed before.
8. Visit Math Lab and Practice to make sure the previous versions still load and work.
9. Use GitHub Desktop **Commit to main → Push origin**, then wait for GitHub Pages to finish deployment. Check the live URL https://yanjiahuang722.github.io/mathbridge/.

Suggested commit summary: `Add 39 advanced Number Theory and Probability lessons`

## What changed

- New `js/advanced-lessons.js` with 39 original advanced topic lessons, 3 checks each.
- `learn.html`, `js/learn.js`, and CSS add an independent foundations/advanced filter.
- `lesson.html` loads both foundation and advanced lesson datasets; `js/lesson.js` improves previous/next within each subject.
- Updated site statistics and `ADVANCED_CURRICULUM.md` with topic mappings.
- Preserved original `js/lessons-data.js`, Math Lab code, Practice code, and local-storage completion key.

**Scope:** Curriculum covers a substantial selection of topics from later chapters of Burton and Ross, not every theorem, derivation, proof, or textbook exercise. Material is not official, licensed, or endorsed by the publishers.

## Version 2.3 quick smoke test
1. `math-lab.html`: φ(360)=96; CRT x≡1 mod4 and x≡3 mod6 → x≡9 mod12; Normal N(0,1) interval [-1,1] ≈0.682689.
2. `math-lab.html`: Quadratic residue a=5,p=11 → (5/11)=1; CLT Run creates an SVG histogram.
3. `practice.html`: Course level Advanced → 117 matches; Number Theory Advanced → 51; Probability Advanced → 66. Choose a specific topic and generate five questions.
4. Answer one and refresh: the score remains saved locally. The existing 16+39 Learn course pages still open.
