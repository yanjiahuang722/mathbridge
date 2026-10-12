# MathBridge 2.4.1 — Lesson Artwork Display Fix

## What changed
- Lesson detail (`lesson.html?id=...`) hero illustrations now keep their native 600:260 proportion and use `object-fit: contain` rather than cropping.
- Artwork remains visible below the lesson heading on tablet and mobile screens instead of disappearing.
- Removed the decorative curved underscore in the lower-left corner of all 55 topic-specific SVG illustrations. Actual mathematical curves, lines and diagrams were kept.

## Installation
For an existing MathBridge 2.4 site, extract the PATCH ZIP and copy `css/style.css` and all SVGs under `assets/lesson-art/` into the corresponding repository folders. Replace existing files. Do **not** add another outer directory. Then test via VS Code Live Server and finally Commit + Push in GitHub Desktop.

The 55 Learn lessons, Math Lab, Practice, and completion history are unchanged.
