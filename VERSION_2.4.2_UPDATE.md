# MathBridge 2.4.2 — Custom Lesson Artwork Update

This update makes all 55 lesson illustrations content-specific and improves the handmade notebook design. It builds upon MathBridge 2.4.1, while keeping the existing lessons, quizzes, Math Lab and Practice scripts intact.

## Changes

- Replaced generic repetitive decorative marks, ticks and clock motifs with 55 individual, mathematically motivated SVG diagrams.
- Corrected diagram examples and visual semantics (e.g. Euler's theorem, Diophantine lattice points, Möbius divisor lattice, and a normalized joint-probability table).
- Moved Modular Inverse math away from the illustration by using a two-column art canvas with a reserved formula region.
- Replaced Farey Fractions' nearby fraction stack with a number line showing 1/3 < 2/5 < 1/2.
- Replaced Continued Fractions' generic fraction line with nested-fraction notation.
- Changed the pink sticky-note copy to 'Different ideas. Fresh views.' across the 5 main pages; text now fits within the sticky note.
- Preserved the complete-image `object-fit: contain` treatment for the lesson detail page and adjusted mobile sticky-note layering.

## Installing the PATCH

1. In GitHub Desktop, select `mathbridge` / `main` and use Repository > Show in Finder.
2. Unzip the PATCH file. Copy its contents (HTML files, the css folder and the assets folder) **into the root of your existing repository**, replacing files with the same names. Do not place the entire ZIP extraction folder inside the repository.
3. Keep your original `js/` folder! The patch does not modify or remove JavaScript.
4. In VS Code, use Live Server to test `learn.html`, any `lesson.html?id=...`, and the navigation to Math Lab and Practice.
5. When correct, enter a GitHub Desktop commit summary such as `Add custom artwork for all 55 lessons`, click Commit to main, then Push origin.

## Quick checks

- `learn.html`: view illustrations for Bézout, Wilson, Euler, Primitive Roots, Discrete Logarithms, Continued Fractions and Farey Fractions.
- `lesson.html?id=nt-crt`: the full artwork is visible in the lesson header, without cropping.
- `lesson.html?id=nt-inverses`: the equation on the left has clear spacing from the graphic on the right.
- Filter Learn to Advanced: 39 chapters remain.
- Math Lab: 12 tools; Practice: 165 independent questions; Learn: 55 lessons and 165 checkpoint questions.

No login, data collection or extra library is required. All SVGs are local, editable, and work with GitHub Pages.
