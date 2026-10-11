# MathBridge 2.3 — final user-side QA checklist

Use VS Code Live Server and check the pages **before** Commit and Push.

## Math Lab

- Euler Totient: n=360 → φ=96, τ=24, σ=1170, μ=0.
- Modular powers: a=7, e=128, m=13 → result 3 (verify with the page).
- Generalized CRT: x≡1 mod4, x≡3 mod6 → x≡9 mod12; change second residue to 2 → no solution.
- Quadratic residues: a=5,p=11 → Legendre symbol +1; a=2,p=11 → −1; p=9 → reject (not prime).
- Normal Distribution: μ=0, σ=1, a=−1, b=1 → ≈0.682689; reverse endpoints → error message.
- Central Limit Theorem: click Run with n=1, 12 and 60. Blue bars should change, with red standard normal reference curve.
- Also verify the original six tools still work.

## Practice

- All topics (course level All): 165 matching problems.
- Course level Advanced: 117 matching problems; Number Theory 51; Probability 66.
- Course level Foundations: 48 matching problems.
- Choose Specific topic: e.g., Euler’s Theorem or Central Limit Theorem → three advanced questions.
- Choose a subject, a topic, difficulty, and five questions. Answer one, click Check answer, and read Hint/Explanation.
- Reload the page: checked answers and your score should remain available.
- Generate a new set to check filtering; new attempts count only once per checked question.

## Learn / production

- Confirm all 55 Learn lessons still load, including advanced lessons.
- Check menu links on desktop and phone; make sure there is no horizontal overflow.
- GitHub Desktop → Summary: `Add advanced Math Lab and Practice bank (2.3)` → Commit to main → Push origin.
- After deployment, test the real GitHub Pages URL, not only `127.0.0.1:5500`.
