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
