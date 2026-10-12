# MathBridge 2.4 redesign — validation checklist

## Before committing

- [ ] Main nav links work: Home, Learn, Math Lab, Practice, About.
- [ ] On Learn, all 55 chapters appear. Each card has a unique *relevant* math thumbnail.
- [ ] Try Learn filters for Number Theory and Probability, then filter Advanced; the latter should display 39 chapters.
- [ ] In the Learn chapter reader, open `lesson.html?id=nt-bezout`, answer all 3 checkpoint questions, and confirm the score updates.
- [ ] In Math Lab, check the top 12 preview cards jump to the matching functioning calculator below.
- [ ] Test GCD(252, 105)=21 and modular inverse of 3 modulo 11 = 4.
- [ ] Quadratic Reside test: the default a=2, p=7 should give roots 3 and 4.
- [ ] Practice has 165 original questions across the whole bank. Generate a set, answer and check; confirm feedback and score appear.
- [ ] Refresh an existing lesson and Practice page to confirm previously stored results continue to appear in this browser.
- [ ] On a narrow/mobile viewport, use the Menu button and check that no horizontal page scrolling occurs.
- [ ] Verify the live deployed website (not only Live Server) after Push origin.

## Visual customization

- Change the pastel colors and text sizing in the **MathBridge Notebook Edition** section at the end of `css/style.css`.
- Change homepage/section sticky-note text in the editorial hero markup in the appropriate `.html` file.
- Replace any individual lesson image by editing its corresponding `assets/lesson-art/nt-*.svg` or `assets/lesson-art/pr-*.svg`; don't change the file name.
- To change the illustration used on the lesson cards, edit `js/learn.js` and `js/lesson.js`. Both currently point to `./assets/lesson-art/<lesson-id>.svg`.
- Do not remove IDs or change input/form attributes in the Math Lab or Practice. Their JavaScript relies on those IDs.

## Validation performed

Static XML/HTML structure checked, all 55 SVG files parsed, JavaScript syntax checked, and an isolated browser execution test loaded 55 lesson cards, filtered 39 advanced chapters, found all 12 functional tools, evaluated the Euclidean Algorithm, generated Practice sessions, and ran an example chapter quiz. The browser environment disallowed direct local file/localhost navigation, so **Live Server and actual GitHub Pages navigation should still be tested by you**.
