/* MathBridge 2.2 — original advanced topics; textbook-inspired curriculum outline, not copied content. */
'use strict';
(() => {
 const base = window.MATHBRIDGE_LESSONS || [];
 const advanced = [
 {
  "id": "nt-fermat",
  "subject": "Number Theory",
  "title": "Fermat’s Little Theorem",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Use prime moduli to reduce enormous powers.",
  "objectives": [
   "State Fermat’s theorem with the coprimality condition",
   "Reduce an exponent modulo p − 1",
   "Distinguish prime and composite moduli"
  ],
  "concept": "<h2>Fermat’s Little Theorem</h2><p>For a prime p and integer a not divisible by p, a^(p−1) ≡ 1 (mod p). Multiplying by a gives a^p ≡ a (mod p) for every integer a.</p><p>If p divides a, the first form cannot be used because a has no inverse modulo p.</p><div class=\"math-block\">p prime, gcd(a,p)=1 ⇒ a^(p−1) ≡ 1 (mod p)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §5.2. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Compute 3^100 (mod 7).\n3^6 ≡ 1 (mod 7); 100 = 6·16 + 4.\n3^100 ≡ 3^4 = 81 ≡ 4 (mod 7).</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Do not automatically replace φ(m) by m−1 when m is composite.",
  "takeaway": "Use prime moduli to reduce enormous powers.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "What is 2^20 (mod 5)?",
    "options": [
     "0",
     "1",
     "2",
     "4"
    ],
    "correct": 1,
    "explanation": "2^4 ≡ 1 (mod 5); 20 is divisible by 4.",
    "hint": "Use p−1 = 4."
   },
   {
    "prompt": "When is a^(p−1) ≡ 1 (mod p) guaranteed?",
    "options": [
     "p prime and p ∤ a",
     "Any positive p",
     "Only when a=1",
     "Only if a is prime"
    ],
    "correct": 0,
    "explanation": "Fermat’s theorem requires prime p and nonzero residue a modulo p.",
    "hint": "Ask whether a has a modular inverse."
   },
   {
    "prompt": "What is 3^7 (mod 7)?",
    "options": [
     "0",
     "1",
     "2",
     "3"
    ],
    "correct": 3,
    "explanation": "The equivalent form a^p ≡ a (mod p) gives 3^7 ≡ 3.",
    "hint": "Use the second form of Fermat’s theorem."
   }
  ],
  "source": "Burton §5.2"
 },
 {
  "id": "nt-wilson",
  "subject": "Number Theory",
  "title": "Wilson’s Theorem",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Characterize prime numbers using factorial congruences.",
  "objectives": [
   "State the factorial test for primality",
   "Pair multiplicative inverses modulo a prime",
   "Understand why the converse matters"
  ],
  "concept": "<h2>Wilson’s Theorem</h2><p>Wilson’s theorem says n&gt;1 is prime if and only if (n−1)! ≡ −1 (mod n). For prime p, every nonzero residue has an inverse. Apart from 1 and −1, these residues pair with distinct inverses, so their products equal 1.</p><div class=\"math-block\">n &gt; 1 prime ⇔ (n−1)! ≡ −1 (mod n)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §5.3. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">For p = 5:\n4! = 24 ≡ 4 ≡ −1 (mod 5).\nFor n = 6, 5! = 120 ≡ 0 (mod 6), not −1.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Wilson is a mathematical characterization, not an efficient large-integer primality test.",
  "takeaway": "Characterize prime numbers using factorial congruences.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "What is 6! modulo 7?",
    "options": [
     "0",
     "1",
     "6",
     "3"
    ],
    "correct": 2,
    "explanation": "Wilson gives 6! ≡ −1 ≡ 6 (mod 7).",
    "hint": "7 is prime."
   },
   {
    "prompt": "Which n satisfies Wilson’s condition?",
    "options": [
     "8",
     "9",
     "11",
     "15"
    ],
    "correct": 2,
    "explanation": "11 is prime; the condition characterizes primes.",
    "hint": "Look for the prime."
   },
   {
    "prompt": "Why do most nonzero residues cancel in pairs?",
    "options": [
     "Each has additive inverse",
     "Each has multiplicative inverse",
     "They are all even",
     "They sum to the modulus"
    ],
    "correct": 1,
    "explanation": "Every nonzero residue modulo p has a multiplicative inverse.",
    "hint": "Think about multiplication modulo p."
   }
  ],
  "source": "Burton §5.3"
 },
 {
  "id": "nt-arith-func",
  "subject": "Number Theory",
  "title": "Divisor Functions and Totients",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Count divisors, add their values, and count integers coprime to n.",
  "objectives": [
   "Use prime exponents to compute τ(n)",
   "Compute σ(n) and Euler’s φ(n)",
   "Distinguish additive from multiplicative properties"
  ],
  "concept": "<h2>Divisor Functions and Totients</h2><p>If n = ∏pᵢ^aᵢ, each positive divisor chooses an exponent from 0 through aᵢ. Thus τ(n)=∏(aᵢ+1). The divisor sum is σ(n)=∏(1+pᵢ+⋯+pᵢ^aᵢ). Euler’s φ(n) counts integers in {1,…,n} coprime to n.</p><div class=\"math-block\">φ(n) = n ∏(1 − 1/p)  (product over distinct primes p | n)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §§6.1–6.2. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">36 = 2²·3².\nτ(36) = (2+1)(2+1) = 9.\nσ(36) = (1+2+4)(1+3+9) = 91.\nφ(36) = 36(1−1/2)(1−1/3) = 12.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "The product in the φ formula is over distinct prime factors only.",
  "takeaway": "Count divisors, add their values, and count integers coprime to n.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "How many positive divisors does 72 = 2³·3² have?",
    "options": [
     "5",
     "6",
     "12",
     "72"
    ],
    "correct": 2,
    "explanation": "τ(72)=(3+1)(2+1)=12.",
    "hint": "Multiply one more than each exponent."
   },
   {
    "prompt": "What is φ(10)?",
    "options": [
     "2",
     "4",
     "5",
     "9"
    ],
    "correct": 1,
    "explanation": "1,3,7,9 are coprime to 10, so φ(10)=4.",
    "hint": "Exclude numbers divisible by 2 or 5."
   },
   {
    "prompt": "What is σ(6)?",
    "options": [
     "6",
     "9",
     "12",
     "18"
    ],
    "correct": 2,
    "explanation": "The positive divisors 1,2,3,6 sum to 12.",
    "hint": "List all positive divisors."
   }
  ],
  "source": "Burton §§6.1–6.2"
 },
 {
  "id": "nt-mobius",
  "subject": "Number Theory",
  "title": "Möbius Function and Inversion",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Recover an arithmetic function from sums over divisors.",
  "objectives": [
   "Evaluate μ(n) from the prime factorization",
   "Apply the divisor-sum identity for μ",
   "Recognize a Möbius inversion pattern"
  ],
  "concept": "<h2>Möbius Function and Inversion</h2><p>The Möbius function is μ(1)=1; μ(n)=0 if a prime square divides n; otherwise μ(n)=(−1)^k when n is the product of k distinct primes. Its divisor sum is 1 when n=1 and 0 for n&gt;1.</p><p>Möbius inversion says that if F(n)=∑_{d|n}f(d), then f(n)=∑_{d|n}μ(d)F(n/d).</p><div class=\"math-block\">F(n)=Σ_(d|n) f(d) ⇒ f(n)=Σ_(d|n) μ(d)F(n/d)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §6.3. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">μ(30)= (−1)^3 = −1 since 30=2·3·5.\nμ(12)=0 because 2² divides 12.\nFor n=6, Σ_(d|6)μ(d)=1−1−1+1=0.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "μ(n) is not the number of prime factors; repeated prime factors force μ(n)=0.",
  "takeaway": "Recover an arithmetic function from sums over divisors.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "What is μ(18)?",
    "options": [
     "−1",
     "0",
     "1",
     "2"
    ],
    "correct": 1,
    "explanation": "18 contains the square 3², hence μ(18)=0.",
    "hint": "Check for a square prime factor."
   },
   {
    "prompt": "What is μ(35)?",
    "options": [
     "−1",
     "0",
     "1",
     "2"
    ],
    "correct": 2,
    "explanation": "35=5·7 contains exactly two distinct prime factors, so μ(35)=1.",
    "hint": "Count distinct primes."
   },
   {
    "prompt": "For n>1, what is Σ_(d|n) μ(d)?",
    "options": [
     "0",
     "1",
     "n",
     "φ(n)"
    ],
    "correct": 0,
    "explanation": "The sum is 0 for every n>1.",
    "hint": "Recall the divisor-sum identity."
   }
  ],
  "source": "Burton §6.3"
 },
 {
  "id": "nt-euler",
  "subject": "Number Theory",
  "title": "Euler’s Theorem",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Extend Fermat’s theorem to composite moduli.",
  "objectives": [
   "Recognize the role of coprimality",
   "Compute a^φ(n) modulo n",
   "Connect Euler’s theorem with modular inverses"
  ],
  "concept": "<h2>Euler’s Theorem</h2><p>Euler’s theorem states that a^φ(n) ≡ 1 (mod n) when gcd(a,n)=1. The proof uses the reduced residue system: multiplying by a permutes all invertible residue classes.</p><p>When n is prime, φ(n)=n−1, recovering Fermat’s little theorem.</p><div class=\"math-block\">gcd(a,n)=1 ⇒ a^φ(n) ≡ 1 (mod n)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §§7.1–7.4. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Compute 3^20 (mod 10).\nφ(10)=4 and gcd(3,10)=1.\n3^20 = (3^4)^5 ≡ 1^5 ≡ 1 (mod 10).</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Euler’s theorem cannot be used in this form if gcd(a,n)>1.",
  "takeaway": "Extend Fermat’s theorem to composite moduli.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "What is φ(12)?",
    "options": [
     "2",
     "4",
     "6",
     "8"
    ],
    "correct": 1,
    "explanation": "The coprime residues are 1,5,7,11.",
    "hint": "Count integers relatively prime to 12."
   },
   {
    "prompt": "Find 7^4 modulo 10.",
    "options": [
     "0",
     "1",
     "3",
     "7"
    ],
    "correct": 1,
    "explanation": "φ(10)=4 and gcd(7,10)=1, so 7^4≡1.",
    "hint": "Use Euler’s theorem."
   },
   {
    "prompt": "Which base permits Euler’s theorem modulo 12?",
    "options": [
     "6",
     "8",
     "5",
     "9"
    ],
    "correct": 2,
    "explanation": "gcd(5,12)=1; the other bases share a factor with 12.",
    "hint": "Find a base coprime to 12."
   }
  ],
  "source": "Burton §§7.1–7.4"
 },
 {
  "id": "nt-primitive",
  "subject": "Number Theory",
  "title": "Orders and Primitive Roots",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Study repeated powers and generators of multiplicative residue groups.",
  "objectives": [
   "Define the multiplicative order",
   "Test whether a residue is a primitive root",
   "Distinguish an order from Euler’s totient"
  ],
  "concept": "<h2>Orders and Primitive Roots</h2><p>The order ordₙ(a) of an invertible residue a is the least positive k with a^k≡1 (mod n). Its order divides φ(n). A primitive root modulo n is a residue of order φ(n); not every modulus has one.</p><div class=\"math-block\">ordₙ(a) = min{k≥1 : a^k ≡ 1 (mod n)}</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §§8.1–8.3. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Modulo 7, powers of 3 are 3,2,6,4,5,1.\nThus ord₇(3)=6=φ(7): 3 is a primitive root modulo 7.\nThe order of 2 modulo 7 is 3.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "An element can have an order smaller than φ(n); not every invertible residue is primitive.",
  "takeaway": "Study repeated powers and generators of multiplicative residue groups.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "What is ord₇(2)?",
    "options": [
     "2",
     "3",
     "6",
     "7"
    ],
    "correct": 1,
    "explanation": "2,4,1 gives order 3.",
    "hint": "List powers until 1 appears."
   },
   {
    "prompt": "If ord₁₁(a)=10, what is a modulo 11 called?",
    "options": [
     "Zero divisor",
     "Primitive root",
     "Idempotent",
     "Prime power"
    ],
    "correct": 1,
    "explanation": "Order 10 equals φ(11), so it is a primitive root.",
    "hint": "Compare order with φ(11)."
   },
   {
    "prompt": "Which claim is always true when gcd(a,n)=1?",
    "options": [
     "ordₙ(a)=n",
     "ordₙ(a) divides φ(n)",
     "ordₙ(a)=1",
     "n is prime"
    ],
    "correct": 1,
    "explanation": "Lagrange’s theorem applied to units modulo n gives divisibility.",
    "hint": "Euler’s theorem puts an upper multiple on the order."
   }
  ],
  "source": "Burton §§8.1–8.3"
 },
 {
  "id": "nt-indices",
  "subject": "Number Theory",
  "title": "Discrete Logarithms (Indices)",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Translate powers of a generator into exponent equations.",
  "objectives": [
   "Define index/discrete logarithm in a cyclic unit group",
   "Solve a small discrete logarithm by a power table",
   "Explain why computing discrete logs becomes difficult"
  ],
  "concept": "<h2>Discrete Logarithms (Indices)</h2><p>If g generates a cyclic group of units modulo m, every element a in that group can be written g^k≡a (mod m). The exponent k (modulo the order of g) is an index or discrete logarithm. Small cases can be solved by listing powers.</p><div class=\"math-block\">g^k ≡ a (mod m) ⇔ k = log_g(a) in the generated group</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §8.4. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Modulo 7, 3 has order 6.\n3^1=3, 3^2=2, 3^3=6, 3^4=4, 3^5=5.\nSo log₃(5)≡5 (mod 6).</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Discrete logarithms are exponents modulo a group order—not ordinary real logarithms.",
  "takeaway": "Translate powers of a generator into exponent equations.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "Modulo 7, what is log₃(2)?",
    "options": [
     "1",
     "2",
     "3",
     "4"
    ],
    "correct": 1,
    "explanation": "3²=9≡2 (mod 7).",
    "hint": "Square 3 modulo 7."
   },
   {
    "prompt": "Discrete logarithms require what in the stated method?",
    "options": [
     "An additive group",
     "A fixed generator of the relevant cyclic group",
     "A real base > 1",
     "A composite modulus"
    ],
    "correct": 1,
    "explanation": "Every target must lie in the subgroup generated by the chosen base.",
    "hint": "Consider which residues the powers can reach."
   },
   {
    "prompt": "If g has order 6, exponents are unique modulo which number?",
    "options": [
     "3",
     "6",
     "7",
     "12"
    ],
    "correct": 1,
    "explanation": "g^(k+6)=g^k, so indices are determined modulo 6.",
    "hint": "Think of the power cycle length."
   }
  ],
  "source": "Burton §8.4"
 },
 {
  "id": "nt-quadratic",
  "subject": "Number Theory",
  "title": "Quadratic Residues and Euler’s Criterion",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Decide whether a number is a square modulo an odd prime.",
  "objectives": [
   "Define a quadratic residue",
   "Identify squares modulo a prime",
   "Use Euler’s criterion for nonzero residues"
  ],
  "concept": "<h2>Quadratic Residues and Euler’s Criterion</h2><p>For an odd prime p, a nonzero residue a is a quadratic residue if x²≡a (mod p) has a solution. Euler’s criterion gives a^((p−1)/2)≡1 for a nonzero quadratic residue and −1 for a nonresidue.</p><div class=\"math-block\">a^((p−1)/2) ≡ 1 or −1 (mod p), for p ∤ a</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §§9.1–9.2. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Modulo 7, nonzero squares are:\n1²=1, 2²=4, 3²=2, 4²=2, 5²=4, 6²=1.\nSo {1,2,4} are quadratic residues, and 3 is not.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "The zero residue must be treated separately from Euler’s ±1 criterion.",
  "takeaway": "Decide whether a number is a square modulo an odd prime.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "Which is a quadratic residue modulo 7?",
    "options": [
     "3",
     "5",
     "4",
     "6"
    ],
    "correct": 2,
    "explanation": "4≡2² (mod 7).",
    "hint": "List 1²,2²,3² mod 7."
   },
   {
    "prompt": "How many nonzero quadratic residues are there modulo an odd prime p?",
    "options": [
     "p",
     "p−1",
     "(p−1)/2",
     "(p+1)/2"
    ],
    "correct": 2,
    "explanation": "Opposite nonzero residues have the same square; each nonzero square has two roots.",
    "hint": "Pair x and −x."
   },
   {
    "prompt": "What is 3^3 mod 7?",
    "options": [
     "1",
     "6",
     "0",
     "3"
    ],
    "correct": 1,
    "explanation": "27≡6≡−1 (mod 7), showing 3 is a nonresidue.",
    "hint": "Calculate 27 modulo 7."
   }
  ],
  "source": "Burton §§9.1–9.2"
 },
 {
  "id": "nt-reciprocity",
  "subject": "Number Theory",
  "title": "Quadratic Reciprocity",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Relate quadratic-residue questions at different odd prime moduli.",
  "objectives": [
   "State the sign rule for distinct odd primes",
   "Recognize supplementary rules for −1 and 2",
   "Use reciprocity to reduce a Legendre-symbol calculation"
  ],
  "concept": "<h2>Quadratic Reciprocity</h2><p>For distinct odd primes p and q, quadratic reciprocity compares whether p is a square modulo q with whether q is a square modulo p. Their Legendre symbols have the same sign unless both primes are 3 modulo 4.</p><p>Supplementary rules handle −1 and 2 as numerators.</p><div class=\"math-block\">(p/q)(q/p) = (−1)^(((p−1)/2)((q−1)/2))</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §§9.3–9.4. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Take p=3 and q=7, both ≡3 (mod 4).\n(3/7)=−1, while (7/3)=(1/3)=1.\nThe symbols have opposite signs, as reciprocity predicts.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "The symbol (a/p) is not ordinary numerical division, and the theorem assumes distinct odd primes.",
  "takeaway": "Relate quadratic-residue questions at different odd prime moduli.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "If p≡q≡3 (mod 4), their Legendre symbols have what relation?",
    "options": [
     "Same sign",
     "Opposite signs",
     "Both zero",
     "Always 1"
    ],
    "correct": 1,
    "explanation": "The reciprocity sign is −1 in this case.",
    "hint": "Look at the exponent parity."
   },
   {
    "prompt": "Which prerequisite is required for the displayed reciprocity law?",
    "options": [
     "Both are distinct odd primes",
     "Both are even",
     "p=q",
     "Any integers p,q"
    ],
    "correct": 0,
    "explanation": "The standard law here is for distinct odd primes.",
    "hint": "Read the hypotheses."
   },
   {
    "prompt": "For p=5 and q=7, the reciprocity sign is",
    "options": [
     "−1",
     "0",
     "+1",
     "Undefined"
    ],
    "correct": 2,
    "explanation": "(5−1)/2=2 is even, so the exponent is even.",
    "hint": "One prime is 1 modulo 4."
   }
  ],
  "source": "Burton §§9.3–9.4"
 },
 {
  "id": "nt-rsa",
  "subject": "Number Theory",
  "title": "RSA and Modular Cryptography",
  "minutes": 15,
  "level": "Advanced",
  "summary": "See how modular exponentiation supports public-key encryption.",
  "objectives": [
   "Compute a toy RSA key",
   "Check the inverse condition ed≡1 modulo φ(n)",
   "Describe the role of factoring n"
  ],
  "concept": "<h2>RSA and Modular Cryptography</h2><p>In textbook RSA, choose primes p,q, set n=pq and φ(n)=(p−1)(q−1), then choose e coprime to φ(n). Find d with ed≡1 (mod φ(n)). Encrypt message residue m as c≡m^e (mod n) and decrypt c^d.</p><p>Modern implementations also need standardized padding and careful parameter generation; this lesson is an educational toy example, not secure cryptographic software.</p><div class=\"math-block\">c ≡ m^e (mod n);  m ≡ c^d (mod n)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §§10.1–10.3. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Choose p=3, q=11: n=33, φ(n)=20.\ne=3 and d=7 because 3·7=21≡1 (mod 20).\nFor m=2, c=2³=8 (mod 33).</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Never use tiny RSA primes or unpadded textbook RSA to protect real information.",
  "takeaway": "See how modular exponentiation supports public-key encryption.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "If p=5 and q=7, what is φ(pq)?",
    "options": [
     "12",
     "24",
     "35",
     "48"
    ],
    "correct": 1,
    "explanation": "(5−1)(7−1)=24.",
    "hint": "Multiply p−1 and q−1."
   },
   {
    "prompt": "If e=3 and φ(n)=20, which d works?",
    "options": [
     "3",
     "5",
     "7",
     "10"
    ],
    "correct": 2,
    "explanation": "3·7=21≡1 (mod 20).",
    "hint": "Look for the inverse of 3 modulo 20."
   },
   {
    "prompt": "What is the public modulus n for p=3 and q=11?",
    "options": [
     "14",
     "30",
     "33",
     "121"
    ],
    "correct": 2,
    "explanation": "n=pq=33.",
    "hint": "Multiply the two primes."
   }
  ],
  "source": "Burton §§10.1–10.3"
 },
 {
  "id": "nt-special",
  "subject": "Number Theory",
  "title": "Perfect, Mersenne, and Fermat Numbers",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Explore classic families of integers and their prime-factor properties.",
  "objectives": [
   "Recognize perfect numbers using divisor sums",
   "Define Mersenne and Fermat number families",
   "Distinguish a special form from primality"
  ],
  "concept": "<h2>Perfect, Mersenne, and Fermat Numbers</h2><p>A positive integer n is perfect if its positive proper divisors sum to n, or equivalently σ(n)=2n. Mersenne numbers have the form 2^p−1 and Fermat numbers have the form 2^(2^k)+1. Neither special algebraic form guarantees a prime.</p><div class=\"math-block\">perfect n ⇔ σ(n) = 2n;  M_p=2^p−1;  F_k=2^(2^k)+1</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §§11.1–11.4. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">6 has proper divisors 1,2,3 and 1+2+3=6, so 6 is perfect.\nM₃=2³−1=7 is prime; M₄=15 is not.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "A Mersenne number or Fermat number is not automatically prime.",
  "takeaway": "Explore classic families of integers and their prime-factor properties.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "Which number is perfect?",
    "options": [
     "6",
     "10",
     "12",
     "15"
    ],
    "correct": 0,
    "explanation": "The proper divisors 1,2,3 sum to 6.",
    "hint": "Add proper divisors."
   },
   {
    "prompt": "Compute M₅ = 2^5 − 1.",
    "options": [
     "15",
     "25",
     "31",
     "33"
    ],
    "correct": 2,
    "explanation": "2^5−1=31.",
    "hint": "Apply the definition."
   },
   {
    "prompt": "What must hold if 2^p−1 is prime?",
    "options": [
     "p must be prime",
     "p must be even",
     "p must equal 2",
     "p must be composite"
    ],
    "correct": 0,
    "explanation": "If p=ab is composite, 2^a−1 divides 2^(ab)−1.",
    "hint": "Use factorization of x^b−1."
   }
  ],
  "source": "Burton §§11.1–11.4"
 },
 {
  "id": "nt-pythagorean",
  "subject": "Number Theory",
  "title": "Pythagorean Triples and Nonlinear Equations",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Parametrize integer solutions of a²+b²=c².",
  "objectives": [
   "Check whether a triple is Pythagorean",
   "Generate primitive triples with two integers",
   "Distinguish linear and nonlinear Diophantine equations"
  ],
  "concept": "<h2>Pythagorean Triples and Nonlinear Equations</h2><p>A Pythagorean triple is positive integers a,b,c satisfying a²+b²=c². Primitive triples satisfy gcd(a,b,c)=1. Every primitive triple, up to interchanging legs, has a=m²−n², b=2mn, c=m²+n² for coprime m&gt;n&gt;0 of opposite parity.</p><div class=\"math-block\">a=m²−n², b=2mn, c=m²+n²</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §§12.1–12.2. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Take m=3, n=2:\na=9−4=5, b=12, c=13.\nCheck: 5²+12²=25+144=169=13².</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Not every choice of m,n gives a primitive triple: require coprimality and opposite parity.",
  "takeaway": "Parametrize integer solutions of a²+b²=c².",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "Which is a Pythagorean triple?",
    "options": [
     "(3,4,6)",
     "(5,12,13)",
     "(6,8,12)",
     "(2,3,4)"
    ],
    "correct": 1,
    "explanation": "25+144=169.",
    "hint": "Check a²+b² against c²."
   },
   {
    "prompt": "If m=2 and n=1, the generated hypotenuse is",
    "options": [
     "2",
     "3",
     "4",
     "5"
    ],
    "correct": 3,
    "explanation": "c=m²+n²=4+1=5.",
    "hint": "Use c=m²+n²."
   },
   {
    "prompt": "Which condition helps ensure a primitive triple?",
    "options": [
     "m=n",
     "Both even",
     "m,n coprime with opposite parity",
     "Both odd"
    ],
    "correct": 2,
    "explanation": "The parameter conditions avoid common factors.",
    "hint": "Recall the parameter assumptions."
   }
  ],
  "source": "Burton §§12.1–12.2"
 },
 {
  "id": "nt-sums-squares",
  "subject": "Number Theory",
  "title": "Sums of Two Squares",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Study when integers are representable as x²+y².",
  "objectives": [
   "Test examples of two-square representations",
   "Use the prime-factor obstruction for primes 3 mod 4",
   "Explain why a necessary condition is not always sufficient by itself"
  ],
  "concept": "<h2>Sums of Two Squares</h2><p>Fermat’s two-square theorem: an odd prime p equals x²+y² with integers x,y precisely when p≡1 (mod 4). More generally n&gt;0 is a sum of two integer squares iff every prime ≡3 (mod 4) occurs to an even exponent in its prime factorization.</p><div class=\"math-block\">n=x²+y² ⇔ primes p≡3 (mod 4) divide n to even exponent</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §§13.1–13.3. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">65=5·13 and 65=1²+8²=4²+7².\n21=3·7 has two different primes ≡3 (mod 4), each to odd power, so 21 is not a sum of two integer squares.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "The criterion concerns integer squares (including 0) and the exponents in the full factorization.",
  "takeaway": "Study when integers are representable as x²+y².",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "Which integer is a sum of two squares?",
    "options": [
     "3",
     "7",
     "13",
     "21"
    ],
    "correct": 2,
    "explanation": "13=2²+3².",
    "hint": "Try small squares."
   },
   {
    "prompt": "Why is 6 not a sum of two integer squares?",
    "options": [
     "It is even",
     "3 occurs to odd exponent",
     "2 is prime",
     "6 is composite"
    ],
    "correct": 1,
    "explanation": "6=2·3 and 3≡3 mod4 occurs once.",
    "hint": "Inspect the prime factorization."
   },
   {
    "prompt": "For a prime p≡1 (mod4), which claim is true?",
    "options": [
     "p is always composite",
     "p=x²+y² for integers x,y",
     "p is even",
     "p is a perfect square"
    ],
    "correct": 1,
    "explanation": "This is Fermat’s two-square theorem.",
    "hint": "Recall the theorem’s conclusion."
   }
  ],
  "source": "Burton §§13.1–13.3"
 },
 {
  "id": "nt-fibonacci",
  "subject": "Number Theory",
  "title": "Fibonacci Numbers and Divisibility",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Explore a recursive sequence and its arithmetic structure.",
  "objectives": [
   "Generate Fibonacci values from the recurrence",
   "Use a basic sum identity",
   "Recognize a divisibility relation"
  ],
  "concept": "<h2>Fibonacci Numbers and Divisibility</h2><p>Define F₀=0,F₁=1, and Fₙ₊₂=Fₙ₊₁+Fₙ. Many identities follow by induction. For example ∑_(k=1)^n F_k = F_(n+2)−1. Fibonacci numbers also interact with divisibility: F_m divides F_n whenever m divides n and m&gt;0.</p><div class=\"math-block\">Fₙ₊₂ = Fₙ₊₁ + Fₙ;  Σ_(k=1)^n F_k = F_(n+2)−1</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §§14.1–14.3. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">F₁,…,F₆ = 1,1,2,3,5,8.\nTheir sum is 20, and F₈−1 = 21−1=20.\nF₃=2 divides F₆=8 since 3 divides 6.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Do not confuse the index n with the Fibonacci value Fₙ.",
  "takeaway": "Explore a recursive sequence and its arithmetic structure.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "What is F₇ if F₅=5 and F₆=8?",
    "options": [
     "11",
     "12",
     "13",
     "15"
    ],
    "correct": 2,
    "explanation": "F₇=F₆+F₅=13.",
    "hint": "Add the previous two terms."
   },
   {
    "prompt": "What is F₁+⋯+F₄?",
    "options": [
     "5",
     "6",
     "7",
     "8"
    ],
    "correct": 2,
    "explanation": "1+1+2+3=7 or F₆−1=8−1.",
    "hint": "Use the sum identity."
   },
   {
    "prompt": "If m divides n, which property holds for positive indices?",
    "options": [
     "Fₙ divides Fₘ",
     "Fₘ divides Fₙ",
     "Fₘ=Fₙ",
     "Fₙ must be prime"
    ],
    "correct": 1,
    "explanation": "F_m divides F_n whenever m|n.",
    "hint": "Recall the divisibility direction."
   }
  ],
  "source": "Burton §§14.1–14.3"
 },
 {
  "id": "nt-continued",
  "subject": "Number Theory",
  "title": "Continued Fractions and Convergents",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Approximate real numbers using nested fractions.",
  "objectives": [
   "Expand a rational number into a simple continued fraction",
   "Evaluate small convergents",
   "Explain how convergents approximate irrational numbers"
  ],
  "concept": "<h2>Continued Fractions and Convergents</h2><p>A simple continued fraction [a₀;a₁,…] means a₀+1/(a₁+1/(…)). The Euclidean algorithm computes the finite expansion for rational numbers. Its truncations are convergents, often excellent rational approximations.</p><div class=\"math-block\">[a₀; a₁,a₂] = a₀ + 1/(a₁ + 1/a₂)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §§15.1–15.4. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Evaluate [1;2,2]:\n1 + 1/(2 + 1/2) = 1 + 2/5 = 7/5.\nThe first two convergents are 1 and 3/2.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Square brackets denote a continued-fraction expansion, not a list of independent numbers.",
  "takeaway": "Approximate real numbers using nested fractions.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "What is [1;2]?",
    "options": [
     "1/2",
     "3/2",
     "2",
     "5/2"
    ],
    "correct": 1,
    "explanation": "1+1/2=3/2.",
    "hint": "Evaluate from inside."
   },
   {
    "prompt": "What is [2;2]?",
    "options": [
     "2",
     "5/2",
     "3",
     "4"
    ],
    "correct": 1,
    "explanation": "2+1/2=5/2.",
    "hint": "The final 2 is a denominator."
   },
   {
    "prompt": "Which algorithm produces rational continued-fraction quotients?",
    "options": [
     "Euclidean algorithm",
     "Newton method only",
     "Gaussian elimination",
     "Binary search only"
    ],
    "correct": 0,
    "explanation": "The Euclidean algorithm’s quotients are the partial quotients.",
    "hint": "Think of repeated integer division."
   }
  ],
  "source": "Burton §§15.1–15.4"
 },
 {
  "id": "nt-farey",
  "subject": "Number Theory",
  "title": "Farey Fractions",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Understand neighbors among reduced fractions with bounded denominators.",
  "objectives": [
   "Recognize Farey sequences",
   "Check the determinant relation for neighbors",
   "Find a mediant between fractions"
  ],
  "concept": "<h2>Farey Fractions</h2><p>The Farey sequence of order n lists reduced fractions between 0 and 1 whose denominators are at most n, in increasing order. If a/b&lt;c/d are neighbors, bc−ad=1. Their mediant (a+c)/(b+d) lies strictly between them.</p><div class=\"math-block\">a/b &lt; (a+c)/(b+d) &lt; c/d  (positive denominators)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §15.5. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Between 1/3 and 1/2, the mediant is (1+1)/(3+2)=2/5.\nThe neighbor determinant: 3·1−1·2=1.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Mediants add numerators and denominators; they are not arithmetic means.",
  "takeaway": "Understand neighbors among reduced fractions with bounded denominators.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "Mediant of 1/4 and 1/3 is",
    "options": [
     "1/7",
     "2/7",
     "2/12",
     "1/2"
    ],
    "correct": 1,
    "explanation": "(1+1)/(4+3)=2/7.",
    "hint": "Add tops and bottoms separately."
   },
   {
    "prompt": "For neighbors 1/3 and 1/2, bc−ad equals",
    "options": [
     "0",
     "1",
     "2",
     "3"
    ],
    "correct": 1,
    "explanation": "3·1−1·2=1.",
    "hint": "Use bc−ad."
   },
   {
    "prompt": "Which fraction lies between 1/3 and 1/2?",
    "options": [
     "1/4",
     "2/5",
     "3/5",
     "2/3"
    ],
    "correct": 1,
    "explanation": "0.333…<0.4<0.5.",
    "hint": "Compare to decimals or cross-multiply."
   }
  ],
  "source": "Burton §15.5"
 },
 {
  "id": "nt-modern",
  "subject": "Number Theory",
  "title": "Primality Testing and Integer Factorization",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Compare trial division, pseudoprimes, and probabilistic primality checks.",
  "objectives": [
   "Explain why trial division only needs primes up to √n",
   "Distinguish a probable prime from a proven prime",
   "Recognize why factoring and primality testing differ"
  ],
  "concept": "<h2>Primality Testing and Integer Factorization</h2><p>To prove a positive integer n&gt;1 is prime by trial division, test prime divisors up to √n. A composite n must have a factor no larger than √n. For very large n, more advanced tests are needed. Fermat-type tests can give false positives on pseudoprimes; repeated randomized Miller–Rabin tests greatly reduce error under standard assumptions.</p><div class=\"math-block\">n composite ⇒ some prime p | n has p ≤ √n</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Burton §§16.1–16.3. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Check n=97. Since √97&lt;10, only test primes 2,3,5,7.\nNone divides 97, so 97 is prime.\nFor 91, divisor 7 appears because 91=7·13.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Passing a naive Fermat test does not establish primality; Carmichael numbers fool all coprime bases.",
  "takeaway": "Compare trial division, pseudoprimes, and probabilistic primality checks.",
  "lab": "./math-lab.html#extended",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "To test 97 by trial division, how far is enough?",
    "options": [
     "Up to 97",
     "Up to 48",
     "Primes up to 9",
     "Only test 2"
    ],
    "correct": 2,
    "explanation": "√97<10; test primes 2,3,5,7.",
    "hint": "Use the square-root bound."
   },
   {
    "prompt": "What is a pseudoprime?",
    "options": [
     "Always prime",
     "A composite passing a specified prime-like test",
     "An even prime",
     "An irrational number"
    ],
    "correct": 1,
    "explanation": "A pseudoprime can pass a Fermat-style test despite being composite.",
    "hint": "It imitates a prime."
   },
   {
    "prompt": "What divides 91?",
    "options": [
     "2",
     "3",
     "5",
     "7"
    ],
    "correct": 3,
    "explanation": "91=7×13.",
    "hint": "Try primes up to √91."
   }
  ],
  "source": "Burton §§16.1–16.3"
 },
 {
  "id": "pr-multinomial",
  "subject": "Probability",
  "title": "Multinomial Counting",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Count arrangements with repeated categories and solve stars-and-bars problems.",
  "objectives": [
   "Apply multinomial coefficients",
   "Count solutions in nonnegative integers",
   "Explain when repetition changes the counting formula"
  ],
  "concept": "<h2>Multinomial Counting</h2><p>When n distinguishable positions contain groups of sizes n₁,…,nᵣ summing to n, the number of category arrangements is n!/(n₁!⋯nᵣ!). The stars-and-bars method counts nonnegative integer solutions of x₁+⋯+xᵣ=n as C(n+r−1,r−1).</p><div class=\"math-block\">Arrangements = n!/(n₁!⋯nᵣ!); solutions = C(n+r−1,r−1)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §§1.5–1.6. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">How many distinct permutations of AABBC?\n5!/(2!2!1!)=30.\nHow many (x,y,z)≥0 satisfy x+y+z=4?\nC(4+3−1,3−1)=C(6,2)=15.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Do not use ordinary permutations when objects repeat, or stars-and-bars when the variables have additional bounds.",
  "takeaway": "Count arrangements with repeated categories and solve stars-and-bars problems.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "How many distinct arrangements of AAB?",
    "options": [
     "3",
     "4",
     "6",
     "8"
    ],
    "correct": 0,
    "explanation": "3!/2!=3.",
    "hint": "Divide by permutations of equal symbols."
   },
   {
    "prompt": "How many nonnegative (x,y) satisfy x+y=4?",
    "options": [
     "3",
     "4",
     "5",
     "6"
    ],
    "correct": 2,
    "explanation": "The solutions range from (0,4) through (4,0).",
    "hint": "Use C(5,1)."
   },
   {
    "prompt": "What is C(6,2)?",
    "options": [
     "12",
     "15",
     "20",
     "30"
    ],
    "correct": 1,
    "explanation": "6·5/2=15.",
    "hint": "Compute the combination."
   }
  ],
  "source": "Ross §§1.5–1.6"
 },
 {
  "id": "pr-geometric",
  "subject": "Probability",
  "title": "Geometric and Negative Binomial Distributions",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Model waiting for the first or r-th success.",
  "objectives": [
   "Distinguish geometric from negative binomial trials",
   "Compute waiting-time probabilities",
   "State geometric memorylessness"
  ],
  "concept": "<h2>Geometric and Negative Binomial Distributions</h2><p>For independent Bernoulli trials with success probability p, the geometric random variable T (number of trials until the first success) has P(T=k)=(1−p)^(k−1)p. The negative binomial waiting time to r successes uses the number of ways to place r−1 successes before the last trial.</p><div class=\"math-block\">P(T=k)= (1−p)^(k−1)p, k=1,2,…</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §4.8. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">With p=1/2, P(first success on trial 3)= (1/2)^2(1/2)=1/8.\nFor two successes by trial 3 with success on trial 3:\nC(2,1)(1/2)^2(1/2)=1/4.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Some books define geometric variables as failures before first success; check whether support begins at 0 or 1.",
  "takeaway": "Model waiting for the first or r-th success.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "For p=1/2, P(T=2) equals",
    "options": [
     "1/2",
     "1/4",
     "1/8",
     "3/4"
    ],
    "correct": 1,
    "explanation": "One failure followed by one success gives 1/4.",
    "hint": "Use (1−p)p."
   },
   {
    "prompt": "The geometric distribution has which property?",
    "options": [
     "Normality",
     "Memorylessness",
     "Bounded support",
     "Constant T"
    ],
    "correct": 1,
    "explanation": "Conditional future waiting does not depend on elapsed failures.",
    "hint": "Think of independent trials."
   },
   {
    "prompt": "Under the trials-until-success convention, the minimum T is",
    "options": [
     "0",
     "1",
     "2",
     "−1"
    ],
    "correct": 1,
    "explanation": "A success can occur on the first trial.",
    "hint": "Count the successful trial."
   }
  ],
  "source": "Ross §4.8"
 },
 {
  "id": "pr-hypergeom",
  "subject": "Probability",
  "title": "Hypergeometric Sampling",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Compute counts of successes drawn without replacement.",
  "objectives": [
   "Recognize sampling without replacement",
   "Apply hypergeometric probabilities",
   "Compare with binomial sampling"
  ],
  "concept": "<h2>Hypergeometric Sampling</h2><p>Choose n items without replacement from a population of N items, K of which are labeled successes. Let X count successes. Each n-subset is equally likely. There are C(K,k) choices for successes and C(N−K,n−k) choices for failures.</p><div class=\"math-block\">P(X=k)= C(K,k)C(N−K,n−k)/C(N,n)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §4.8. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">A box has 4 red and 6 blue balls; draw 2 without replacement.\nP(two red)=C(4,2)/C(10,2)=6/45=2/15.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Hypergeometric trials are not independent because the population composition changes after each draw.",
  "takeaway": "Compute counts of successes drawn without replacement.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "Sampling without replacement suggests which distribution?",
    "options": [
     "Binomial",
     "Geometric",
     "Hypergeometric",
     "Normal"
    ],
    "correct": 2,
    "explanation": "Without replacement links draws through a finite population.",
    "hint": "Are the trials independent?"
   },
   {
    "prompt": "From 4 red and 6 blue, P(two red in 2 draws) =",
    "options": [
     "2/15",
     "4/10",
     "1/2",
     "1/15"
    ],
    "correct": 0,
    "explanation": "C(4,2)/C(10,2)=2/15.",
    "hint": "Use combinations."
   },
   {
    "prompt": "For fixed population N,K and sample size n, E[X]=",
    "options": [
     "K/N",
     "nK/N",
     "NK/n",
     "n/N"
    ],
    "correct": 1,
    "explanation": "By linearity, each sample position has success probability K/N.",
    "hint": "Multiply sample size by population proportion."
   }
  ],
  "source": "Ross §4.8"
 },
 {
  "id": "pr-continuous",
  "subject": "Probability",
  "title": "Continuous Random Variables and Densities",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Connect probability densities, areas, and expectation.",
  "objectives": [
   "Check a probability density integrates to one",
   "Integrate a density over an interval",
   "Find expectations for a uniform variable"
  ],
  "concept": "<h2>Continuous Random Variables and Densities</h2><p>A continuous random variable X with density f satisfies f(x)≥0 and ∫f(x)dx=1. Probabilities are areas: P(a≤X≤b)=∫_a^b f(x)dx. For a continuous density P(X=a)=0.</p><p>For X uniform on [a,b], f(x)=1/(b−a), E[X]=(a+b)/2, and Var(X)=(b−a)²/12.</p><div class=\"math-block\">P(a ≤ X ≤ b) = ∫ₐᵇ f(x) dx</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §§5.1–5.3. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">If X~Uniform(0,4), density f(x)=1/4 on [0,4].\nP(1≤X≤3)=∫₁³(1/4)dx=1/2.\nE[X]=2.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "A density value can exceed 1; only the total area must equal 1.",
  "takeaway": "Connect probability densities, areas, and expectation.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "For X~Uniform(0,4), P(X≤1)=",
    "options": [
     "0",
     "1/4",
     "1/2",
     "1"
    ],
    "correct": 1,
    "explanation": "Interval length 1 divided by total length 4.",
    "hint": "Use the density 1/4."
   },
   {
    "prompt": "For a continuous distribution, P(X=2)=",
    "options": [
     "0",
     "1/2",
     "1",
     "Depends on a point density"
    ],
    "correct": 0,
    "explanation": "A single point has zero area under a density.",
    "hint": "Think in terms of area."
   },
   {
    "prompt": "A valid density must integrate to",
    "options": [
     "0",
     "1",
     "2",
     "∞"
    ],
    "correct": 1,
    "explanation": "Total probability is 1.",
    "hint": "All outcomes together have probability one."
   }
  ],
  "source": "Ross §§5.1–5.3"
 },
 {
  "id": "pr-normal",
  "subject": "Probability",
  "title": "Normal Distribution and Standardization",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Use z-scores and recognize the bell curve’s symmetry.",
  "objectives": [
   "Standardize a normal variable",
   "Use symmetry about the mean",
   "Distinguish density values from probabilities"
  ],
  "concept": "<h2>Normal Distribution and Standardization</h2><p>If X~N(μ,σ²), then Z=(X−μ)/σ has the standard normal distribution N(0,1), where σ&gt;0. This transforms any normal-tail calculation into one involving the same reference curve. Symmetry gives P(Z≥0)=1/2.</p><div class=\"math-block\">Z = (X−μ)/σ;   Φ(z) = P(Z ≤ z)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §5.4. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">If X~N(10,4), its standard deviation is σ=2.\nFor X=12, z=(12−10)/2=1.\nHence P(X≤12)=Φ(1)≈0.8413.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "The second parameter in N(μ,σ²) is variance, not standard deviation.",
  "takeaway": "Use z-scores and recognize the bell curve’s symmetry.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "If X~N(10,4), z-score of X=12 is",
    "options": [
     "0.5",
     "1",
     "2",
     "4"
    ],
    "correct": 1,
    "explanation": "σ=√4=2, so z=2/2=1.",
    "hint": "Take the square root of variance."
   },
   {
    "prompt": "For standard normal Z, P(Z>0)=",
    "options": [
     "0",
     "0.25",
     "0.5",
     "1"
    ],
    "correct": 2,
    "explanation": "The standard normal curve is symmetric about zero.",
    "hint": "Use symmetry."
   },
   {
    "prompt": "Which statement is correct for X~N(μ,σ²)?",
    "options": [
     "σ² is the SD",
     "σ is positive SD",
     "μ is always 0",
     "X is discrete"
    ],
    "correct": 1,
    "explanation": "Standard deviation is σ; the second parameter is σ².",
    "hint": "Interpret parameters."
   }
  ],
  "source": "Ross §5.4"
 },
 {
  "id": "pr-exponential",
  "subject": "Probability",
  "title": "Exponential and Gamma Distributions",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Model continuous waiting times and sums of exponential waiting times.",
  "objectives": [
   "Write an exponential survival probability",
   "Use the memoryless property",
   "Describe the gamma waiting-time interpretation"
  ],
  "concept": "<h2>Exponential and Gamma Distributions</h2><p>For X~Exp(λ), λ&gt;0, the density is λe^(−λx) for x≥0 and P(X&gt;t)=e^(−λt). The exponential distribution is memoryless: P(X&gt;s+t|X&gt;s)=P(X&gt;t). A sum of r independent Exp(λ) waiting times has a Gamma distribution with integer shape r and rate λ.</p><div class=\"math-block\">P(X &gt; t)=e^(−λt), t≥0;  E[X]=1/λ</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §§5.5–5.6. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">With λ=2, P(X&gt;1)=e^(−2).\nThe mean waiting time is 1/2.\nFor two independent such intervals, the total waiting time has Gamma(shape=2,rate=2).</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Parameter conventions differ: some texts use scale θ=1/λ instead of rate λ.",
  "takeaway": "Model continuous waiting times and sums of exponential waiting times.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "For X~Exp(2), E[X]=",
    "options": [
     "2",
     "1",
     "1/2",
     "1/4"
    ],
    "correct": 2,
    "explanation": "The mean is 1/λ = 1/2.",
    "hint": "Invert the rate."
   },
   {
    "prompt": "P(X>0) for exponential X equals",
    "options": [
     "0",
     "1/2",
     "1",
     "λ"
    ],
    "correct": 2,
    "explanation": "A nonnegative continuous waiting time exceeds 0 with probability 1.",
    "hint": "Use e^0."
   },
   {
    "prompt": "Which distribution is memoryless among these?",
    "options": [
     "Uniform",
     "Exponential",
     "Normal",
     "Beta"
    ],
    "correct": 1,
    "explanation": "The exponential survival function yields memorylessness.",
    "hint": "Recall constant hazard rate."
   }
  ],
  "source": "Ross §§5.5–5.6"
 },
 {
  "id": "pr-transform",
  "subject": "Probability",
  "title": "Transformations of Random Variables",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Derive distributions of monotone functions of random variables.",
  "objectives": [
   "Use a CDF method to find a transformed distribution",
   "Account for the Jacobian for monotone changes",
   "Check non-monotone transformations carefully"
  ],
  "concept": "<h2>Transformations of Random Variables</h2><p>To find Y=g(X), one safe method is F_Y(y)=P(g(X)≤y). If g is differentiable, one-to-one, and monotone, density transformation gives f_Y(y)=f_X(g^(−1)(y)) |d(g^(−1)(y))/dy|. Non-monotone functions may require adding contributions from multiple roots.</p><div class=\"math-block\">f_Y(y)=f_X(g⁻¹(y)) |(d/dy) g⁻¹(y)|</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §5.7. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Take X~Uniform(0,1) and Y=X².\nFor 0≤y≤1: F_Y(y)=P(X≤√y)=√y.\nThus f_Y(y)=1/(2√y) for 0&lt;y&lt;1.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "For Y=X² and X taking positive and negative values, you must account for both roots ±√y.",
  "takeaway": "Derive distributions of monotone functions of random variables.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "If X~U(0,1), F_(X²)(1/4)=",
    "options": [
     "1/4",
     "1/2",
     "3/4",
     "1"
    ],
    "correct": 1,
    "explanation": "P(X²≤1/4)=P(X≤1/2)=1/2.",
    "hint": "Take the positive square root."
   },
   {
    "prompt": "Which technique always starts from P(g(X)≤y)?",
    "options": [
     "CDF method",
     "Characteristic roots",
     "Euclidean algorithm",
     "Factorization"
    ],
    "correct": 0,
    "explanation": "That probability defines the transformed CDF.",
    "hint": "Recall the definition of F_Y."
   },
   {
    "prompt": "For a one-to-one transformation, the density formula needs",
    "options": [
     "A Jacobian absolute derivative",
     "Only the original mean",
     "Only covariance",
     "A binomial coefficient"
    ],
    "correct": 0,
    "explanation": "Change of variables requires |dx/dy|.",
    "hint": "Remember the area-scaling factor."
   }
  ],
  "source": "Ross §5.7"
 },
 {
  "id": "pr-joint",
  "subject": "Probability",
  "title": "Joint Distributions and Independence",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Describe two random variables at once and test independence.",
  "objectives": [
   "Define joint probability mass and density",
   "Compute marginal distributions",
   "Test factorization for independence"
  ],
  "concept": "<h2>Joint Distributions and Independence</h2><p>A joint distribution assigns probabilities to pairs (X,Y). Marginals sum or integrate out the other variable. Discrete independence means p_XY(x,y)=p_X(x)p_Y(y) for every pair; in the continuous case it is analogous factorization of densities when they exist.</p><div class=\"math-block\">p_X(x)=Σ_y p_XY(x,y);  independent ⇔ p_XY=p_X p_Y</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §§6.1–6.3. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Suppose (X,Y) are independent fair bits.\nEach pair (0,0),(0,1),(1,0),(1,1) has probability 1/4.\nP(X=1)=1/2, P(Y=1)=1/2, and 1/4=(1/2)(1/2).</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Zero covariance does not in general imply independence.",
  "takeaway": "Describe two random variables at once and test independence.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "For independent fair bits, P(X=1,Y=1) is",
    "options": [
     "1/2",
     "1/4",
     "1/8",
     "1"
    ],
    "correct": 1,
    "explanation": "Multiply (1/2)(1/2).",
    "hint": "Use independence."
   },
   {
    "prompt": "The marginal p_X(x) is found by",
    "options": [
     "Summing p_XY(x,y) over y",
     "Multiplying all joint terms",
     "Taking square roots",
     "Adding x and y"
    ],
    "correct": 0,
    "explanation": "Sum all joint mass at fixed x.",
    "hint": "Remove y by summation."
   },
   {
    "prompt": "If variables are independent, Cov(X,Y) is (with finite variances)",
    "options": [
     "1",
     "0",
     "Var(X)",
     "−1"
    ],
    "correct": 1,
    "explanation": "E[XY]=E[X]E[Y], hence covariance is zero.",
    "hint": "Apply the product expectation rule."
   }
  ],
  "source": "Ross §§6.1–6.3"
 },
 {
  "id": "pr-covariance",
  "subject": "Probability",
  "title": "Covariance and Correlation",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Quantify linear association and compute the variance of sums.",
  "objectives": [
   "Use the covariance formula",
   "Expand Var(X+Y)",
   "Recognize correlation bounds and limitations"
  ],
  "concept": "<h2>Covariance and Correlation</h2><p>Cov(X,Y)=E[XY]−E[X]E[Y] measures linear association, with units of X·Y. Correlation ρ=Cov(X,Y)/(σ_Xσ_Y), when both standard deviations are positive, is unitless and lies in [−1,1]. In particular, Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y).</p><div class=\"math-block\">Var(X+Y)=Var(X)+Var(Y)+2Cov(X,Y)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §7.4. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Let Var(X)=4, Var(Y)=9, Cov(X,Y)=−2.\nVar(X+Y)=4+9+2(−2)=9.\nIf X,Y were independent, covariance would be 0 and variance would be 13.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Uncorrelated random variables need not be independent.",
  "takeaway": "Quantify linear association and compute the variance of sums.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "If Var(X)=4, Var(Y)=9, Cov=0, Var(X+Y)=",
    "options": [
     "5",
     "9",
     "13",
     "36"
    ],
    "correct": 2,
    "explanation": "4+9=13.",
    "hint": "Use the sum-variance formula."
   },
   {
    "prompt": "Correlation must lie in",
    "options": [
     "[0,1]",
     "[−1,1]",
     "[−∞,∞]",
     "Integers only"
    ],
    "correct": 1,
    "explanation": "Cauchy–Schwarz bounds its magnitude by 1.",
    "hint": "It is normalized covariance."
   },
   {
    "prompt": "If X and Y independent with finite variances, covariance is",
    "options": [
     "0",
     "1",
     "−1",
     "Undefined"
    ],
    "correct": 0,
    "explanation": "Factor E[XY]=E[X]E[Y].",
    "hint": "Use independence."
   }
  ],
  "source": "Ross §7.4"
 },
 {
  "id": "pr-conditioning",
  "subject": "Probability",
  "title": "Conditional Expectation and Total Variance",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Compute expectations by conditioning on partial information.",
  "objectives": [
   "Use law of total expectation",
   "Compute a conditional mean",
   "Apply law of total variance"
  ],
  "concept": "<h2>Conditional Expectation and Total Variance</h2><p>Conditional expectation E[X|Y] is a random variable depending on Y that summarizes the conditional mean. The tower property is E[E[X|Y]]=E[X]. The law of total variance splits uncertainty into average conditional variance and variance of the conditional mean.</p><div class=\"math-block\">E[X]=E[E[X|Y]];  Var(X)=E[Var(X|Y)]+Var(E[X|Y])</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §§7.5–7.6. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">A bag is chosen equally: bag A has expected score 2 and bag B has expected score 6.\nE[X]=0.5(2)+0.5(6)=4.\nKnowing the bag changes the conditional mean, but averaging restores 4.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "E[X|Y] is generally not a fixed constant: it can vary with the observed Y.",
  "takeaway": "Compute expectations by conditioning on partial information.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "If E[X|Y=0]=2 and E[X|Y=1]=6, P(Y=1)=1/2, then E[X]=",
    "options": [
     "2",
     "3",
     "4",
     "6"
    ],
    "correct": 2,
    "explanation": "E[X]=(1/2)2+(1/2)6=4.",
    "hint": "Apply total expectation."
   },
   {
    "prompt": "The tower property says",
    "options": [
     "E[E[X|Y]]=E[X]",
     "E[X|Y]=X always",
     "Var(X)=0",
     "E[X]=E[Y]"
    ],
    "correct": 0,
    "explanation": "Averaging a conditional mean recovers the overall mean.",
    "hint": "Condition and then average."
   },
   {
    "prompt": "Which quantity is always nonnegative?",
    "options": [
     "Cov(X,Y)",
     "E[X]",
     "E[Var(X|Y)]",
     "E[X−Y]"
    ],
    "correct": 2,
    "explanation": "Variance is always nonnegative, even conditionally.",
    "hint": "Focus on variance."
   }
  ],
  "source": "Ross §§7.5–7.6"
 },
 {
  "id": "pr-mgf",
  "subject": "Probability",
  "title": "Moment Generating Functions",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Find moments and distributions using exponential transforms.",
  "objectives": [
   "Define M_X(t)",
   "Differentiate M at zero to find moments",
   "Use products of MGFs for independent sums"
  ],
  "concept": "<h2>Moment Generating Functions</h2><p>The moment generating function, when finite in a neighborhood of zero, is M_X(t)=E[e^(tX)]. Differentiating at t=0 recovers raw moments, with M′(0)=E[X] and M″(0)=E[X²]. If X and Y are independent, M_(X+Y)(t)=M_X(t)M_Y(t).</p><div class=\"math-block\">M_X(t)=E[e^(tX)]; M′_X(0)=E[X]</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §7.7. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">If X~Bernoulli(p), M_X(t)=(1−p)+p e^t.\nM′_X(t)=p e^t, so E[X]=M′_X(0)=p.\nM″_X(0)=p gives Var(X)=p−p².</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "The MGF need not exist for every real-valued distribution (for instance, the Cauchy distribution).",
  "takeaway": "Find moments and distributions using exponential transforms.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "For Bernoulli(0.3), M′(0)=",
    "options": [
     "0",
     "0.3",
     "0.7",
     "1"
    ],
    "correct": 1,
    "explanation": "M′(0)=E[X]=p=0.3.",
    "hint": "Use the moment property."
   },
   {
    "prompt": "For independent X,Y, the MGF of X+Y is",
    "options": [
     "M_X+M_Y",
     "M_X M_Y",
     "M_X/M_Y",
     "M_X²"
    ],
    "correct": 1,
    "explanation": "MGFs multiply for independent sums.",
    "hint": "Factor the expectation of e^(tX)e^(tY)."
   },
   {
    "prompt": "M_X(0) equals (when defined)",
    "options": [
     "0",
     "1",
     "E[X]",
     "Var(X)"
    ],
    "correct": 1,
    "explanation": "E[e^0]=E[1]=1.",
    "hint": "Set t=0 in the definition."
   }
  ],
  "source": "Ross §7.7"
 },
 {
  "id": "pr-orderstats",
  "subject": "Probability",
  "title": "Order Statistics",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Analyze minima and maxima from independent samples.",
  "objectives": [
   "Compute a maximum CDF",
   "Derive a minimum survival probability",
   "Recognize the independence assumption"
  ],
  "concept": "<h2>Order Statistics</h2><p>For iid observations X₁,…,Xₙ with CDF F, the maximum M has P(M≤x)=F(x)^n because all observations must be ≤x. The minimum m has P(m&gt;x)=[1−F(x)]^n. These formulas are useful for estimating extremes.</p><div class=\"math-block\">F_max(x)=F(x)^n;   P(min&gt;x)=[1−F(x)]^n</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §6.6. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Take two independent U(0,1) observations.\nP(max≤0.5)=(0.5)^2=0.25.\nP(min&gt;0.5)=(0.5)^2=0.25.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Maximum CDFs are not found by simply multiplying x by n; use independent events.",
  "takeaway": "Analyze minima and maxima from independent samples.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "For two iid U(0,1) samples, P(max≤0.5)=",
    "options": [
     "0.25",
     "0.5",
     "0.75",
     "1"
    ],
    "correct": 0,
    "explanation": "Both draws must be ≤0.5.",
    "hint": "Multiply independent probabilities."
   },
   {
    "prompt": "For n iid samples, CDF of maximum is",
    "options": [
     "F(x)",
     "nF(x)",
     "F(x)^n",
     "1−F(x)^n"
    ],
    "correct": 2,
    "explanation": "All n observations must fall below the threshold.",
    "hint": "Use intersection of independent events."
   },
   {
    "prompt": "For two iid U(0,1), P(min>0.2)=",
    "options": [
     "0.16",
     "0.64",
     "0.8",
     "0.96"
    ],
    "correct": 1,
    "explanation": "Both exceed 0.2, each with probability 0.8; 0.8²=0.64.",
    "hint": "Use survival probabilities."
   }
  ],
  "source": "Ross §6.6"
 },
 {
  "id": "pr-chebyshev",
  "subject": "Probability",
  "title": "Markov and Chebyshev Inequalities",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Bound tail probabilities with only moments.",
  "objectives": [
   "State Markov inequality for nonnegative variables",
   "Use Chebyshev with a finite variance",
   "Explain why the bounds can be loose"
  ],
  "concept": "<h2>Markov and Chebyshev Inequalities</h2><p>Markov’s inequality gives P(X≥a)≤E[X]/a for X≥0 and a&gt;0. Chebyshev’s inequality follows by applying Markov to (X−μ)², producing P(|X−μ|≥kσ)≤1/k² when variance is finite.</p><div class=\"math-block\">P(|X−μ|≥kσ) ≤ 1/k², k&gt;0</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §§8.2, 8.5. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">A random variable has μ=10 and σ=2.\nChebyshev with k=2: P(|X−10|≥4)≤1/4.\nAt least 3/4 of the probability lies within 4 of the mean.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Chebyshev gives an upper bound, not usually an exact probability.",
  "takeaway": "Bound tail probabilities with only moments.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "Chebyshev at k=2 gives tail probability at most",
    "options": [
     "1/2",
     "1/4",
     "1/8",
     "1/16"
    ],
    "correct": 1,
    "explanation": "1/k²=1/4.",
    "hint": "Square k."
   },
   {
    "prompt": "Markov inequality requires X to be",
    "options": [
     "Normally distributed",
     "Nonnegative",
     "Uniform",
     "Independent of Y"
    ],
    "correct": 1,
    "explanation": "Markov applies to nonnegative variables.",
    "hint": "The lower-tail constraint matters."
   },
   {
    "prompt": "If E[X]=10 and X≥0, Markov bounds P(X≥20) by",
    "options": [
     "0.25",
     "0.5",
     "1",
     "2"
    ],
    "correct": 1,
    "explanation": "P(X≥20)≤10/20=1/2.",
    "hint": "Divide mean by threshold."
   }
  ],
  "source": "Ross §§8.2, 8.5"
 },
 {
  "id": "pr-clt",
  "subject": "Probability",
  "title": "Central Limit Theorem",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Use normal approximations for sums of many independent variables.",
  "objectives": [
   "State the iid CLT with finite positive variance",
   "Standardize sample means",
   "Distinguish an approximation from an exact equality"
  ],
  "concept": "<h2>Central Limit Theorem</h2><p>For iid variables with mean μ and finite variance σ²&gt;0, the standardized sample mean (X̄ₙ−μ)/(σ/√n) converges in distribution to N(0,1). As n grows, sums and averages become approximately normal under suitable conditions.</p><div class=\"math-block\">(X̄ₙ−μ)/(σ/√n) ⇒ N(0,1)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §8.3. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Suppose Xi have μ=2, σ=3 and n=100.\nThe standard deviation of the sample mean is 3/√100=0.3.\nP(X̄≤2.3)≈Φ((2.3−2)/0.3)=Φ(1)≈0.8413.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "The CLT does not claim that each original observation is normally distributed.",
  "takeaway": "Use normal approximations for sums of many independent variables.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "If σ=4 and n=16, standard deviation of the sample mean is",
    "options": [
     "1",
     "2",
     "4",
     "16"
    ],
    "correct": 0,
    "explanation": "σ/√n=4/4=1.",
    "hint": "Divide σ by square root of n."
   },
   {
    "prompt": "CLT convergence described here is",
    "options": [
     "Almost surely",
     "In distribution",
     "Equality for every n",
     "Convergence of all Xi to 0"
    ],
    "correct": 1,
    "explanation": "The standardized average converges in distribution.",
    "hint": "Recall the convergence symbol ⇒."
   },
   {
    "prompt": "What condition is present in the stated iid CLT?",
    "options": [
     "Infinite variance",
     "Finite positive variance",
     "Only 2 observations",
     "Deterministic sample"
    ],
    "correct": 1,
    "explanation": "Classical iid CLT assumes finite, nonzero variance.",
    "hint": "Read the hypotheses."
   }
  ],
  "source": "Ross §8.3"
 },
 {
  "id": "pr-slln",
  "subject": "Probability",
  "title": "Weak and Strong Laws of Large Numbers",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Compare convergence in probability and almost-sure convergence.",
  "objectives": [
   "Interpret the weak law of large numbers",
   "Interpret the strong law",
   "Understand why neither law guarantees monotone sample paths"
  ],
  "concept": "<h2>Weak and Strong Laws of Large Numbers</h2><p>For iid variables with finite mean μ, the strong law says X̄ₙ→μ almost surely. The weak law says X̄ₙ→μ in probability. Almost-sure convergence implies convergence in probability. Both concern growing sample sizes, not the behavior of each single trial.</p><div class=\"math-block\">X̄ₙ → μ almost surely (SLLN);  X̄ₙ → μ in probability (WLLN)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §§8.2, 8.4. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">For iid Bernoulli(0.6) observations, the running fraction of 1s approaches 0.6 almost surely.\nThe fraction need not equal 0.6 at any finite n; it can move up and down.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "LLN does not mean the proportion must get closer after every additional trial.",
  "takeaway": "Compare convergence in probability and almost-sure convergence.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "Which convergence is stronger?",
    "options": [
     "Convergence in probability",
     "Almost-sure convergence",
     "Both identical in all settings",
     "Neither"
    ],
    "correct": 1,
    "explanation": "Almost-sure convergence implies convergence in probability.",
    "hint": "Compare event-level guarantees."
   },
   {
    "prompt": "For Bernoulli(0.6), the sample proportion tends toward",
    "options": [
     "0",
     "0.5",
     "0.6",
     "1"
    ],
    "correct": 2,
    "explanation": "The mean of Bernoulli(0.6) is 0.6.",
    "hint": "Apply LLN to mean p."
   },
   {
    "prompt": "Which claim is false?",
    "options": [
     "The running proportion may fluctuate",
     "SLLN is about limits",
     "Every step gets closer to p",
     "The sample average can converge"
    ],
    "correct": 2,
    "explanation": "Even large sample proportions need not improve monotonically.",
    "hint": "Watch simulated fluctuations."
   }
  ],
  "source": "Ross §§8.2, 8.4"
 },
 {
  "id": "pr-poisson-approx",
  "subject": "Probability",
  "title": "Poisson Limits and Rare Events",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Approximate sums of many rare Bernoulli events.",
  "objectives": [
   "Recognize the rare-event regime",
   "Compute λ=np",
   "Explain when Poisson approximation is useful"
  ],
  "concept": "<h2>Poisson Limits and Rare Events</h2><p>For X~Binomial(n,p) with n large, p small, and λ=np moderate, Poisson(λ) often approximates the distribution of X. A limit occurs as n→∞, p→0, np→λ. Its mean and variance both equal λ.</p><div class=\"math-block\">Binomial(n,p) ≈ Poisson(np) for small p and large n</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §§8.5–8.6. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">1000 independent components each fail with probability 0.002.\nThen λ=np=2 and P(no failures)≈e^(−2)≈0.1353.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "This approximation can be poor when p is not small; it is not an identity for finite n.",
  "takeaway": "Approximate sums of many rare Bernoulli events.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "If n=1000 and p=0.002, λ=np equals",
    "options": [
     "0.2",
     "2",
     "20",
     "200"
    ],
    "correct": 1,
    "explanation": "1000×0.002=2.",
    "hint": "Multiply n by p."
   },
   {
    "prompt": "For Poisson(2), P(X=0) equals",
    "options": [
     "0",
     "e^−2",
     "2e^−2",
     "1/2"
    ],
    "correct": 1,
    "explanation": "Apply e^(−λ) λ^0/0!.",
    "hint": "Set k=0."
   },
   {
    "prompt": "Poisson approximation is especially good when",
    "options": [
     "n small p near 1",
     "n large p small",
     "All trials dependent",
     "p exactly 1"
    ],
    "correct": 1,
    "explanation": "Rare independent events lead to Poisson counts.",
    "hint": "Recall the rare-event regime."
   }
  ],
  "source": "Ross §§8.5–8.6"
 },
 {
  "id": "pr-poisson-process",
  "subject": "Probability",
  "title": "Poisson Processes",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Model random counts arriving at a constant average rate.",
  "objectives": [
   "State the count distribution N(t)",
   "Connect exponential interarrival times to counts",
   "Use independent increments"
  ],
  "concept": "<h2>Poisson Processes</h2><p>A homogeneous Poisson process with rate λ&gt;0 counts arrivals over time. N(t)~Poisson(λt), with disjoint time intervals having independent counts. Waiting times between arrivals are iid Exp(λ).</p><div class=\"math-block\">P(N(t)=k)=e^(−λt)(λt)^k/k!</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §9.1. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Calls arrive at rate λ=3 per hour.\nIn 2 hours, mean λt=6.\nP(N(2)=0)=e^(−6).</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "The parameter in the count formula is λt, not λ alone unless t=1.",
  "takeaway": "Model random counts arriving at a constant average rate.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "Rate 3/hour for 2 hours: E[N(2)] =",
    "options": [
     "1.5",
     "3",
     "5",
     "6"
    ],
    "correct": 3,
    "explanation": "E[N(t)]=λt=6.",
    "hint": "Multiply rate by duration."
   },
   {
    "prompt": "Poisson-process interarrival times have which distribution?",
    "options": [
     "Uniform",
     "Exponential",
     "Binomial",
     "Normal"
    ],
    "correct": 1,
    "explanation": "Interarrival waiting times are exponential.",
    "hint": "Recall the memoryless waiting-time law."
   },
   {
    "prompt": "Counts in disjoint intervals are",
    "options": [
     "Independent",
     "Always identical",
     "Always zero",
     "Negatively correlated with fixed sum"
    ],
    "correct": 0,
    "explanation": "Independent increments define the standard Poisson process.",
    "hint": "Review process assumptions."
   }
  ],
  "source": "Ross §9.1"
 },
 {
  "id": "pr-markov",
  "subject": "Probability",
  "title": "Markov Chains",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Analyze systems whose next state depends only on the current state.",
  "objectives": [
   "Interpret a transition matrix",
   "Compute one-step and two-step probabilities",
   "Describe the Markov property"
  ],
  "concept": "<h2>Markov Chains</h2><p>A discrete-time Markov chain has P(X_(n+1)=j | X_n=i, past)=P(X_(n+1)=j | X_n=i). Its transition matrix P has nonnegative entries with rows summing to 1. Two-step transition probabilities are entries of P².</p><div class=\"math-block\">P²_(ij)=Σ_k P_(ik) P_(kj)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §9.2. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">With states A,B, take P=[[0.8,0.2],[0.3,0.7]].\nP(A→B in two steps)=0.8·0.2+0.2·0.7=0.30.\nEvery row sums to 1.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Matrix entries represent conditional transition probabilities, not unconditional probabilities of occupying a state.",
  "takeaway": "Analyze systems whose next state depends only on the current state.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "For P row [0.8,0.2], one-step probability A→B is",
    "options": [
     "0.2",
     "0.3",
     "0.8",
     "1"
    ],
    "correct": 0,
    "explanation": "Read row A, column B.",
    "hint": "Choose the destination column."
   },
   {
    "prompt": "Rows of a transition matrix sum to",
    "options": [
     "0",
     "1",
     "Number of states",
     "2"
    ],
    "correct": 1,
    "explanation": "The next state must be one of the possible states.",
    "hint": "They form probability distributions."
   },
   {
    "prompt": "Two-step transition matrix is",
    "options": [
     "P+P",
     "P²",
     "P/2",
     "Pᵀ"
    ],
    "correct": 1,
    "explanation": "Matrix multiplication sums through intermediate states.",
    "hint": "Compose transitions."
   }
  ],
  "source": "Ross §9.2"
 },
 {
  "id": "pr-entropy",
  "subject": "Probability",
  "title": "Information and Entropy",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Measure uncertainty using probabilities and logarithms.",
  "objectives": [
   "Compute binary entropy in bits",
   "Recognize certainty versus maximum uncertainty",
   "Interpret expected information"
  ],
  "concept": "<h2>Information and Entropy</h2><p>Shannon entropy H(X)=−∑pᵢ log₂ pᵢ (taking 0log0 as 0) measures average surprise. A fair binary choice has entropy 1 bit; an outcome known with certainty has entropy 0. Entropy depends on the full probability distribution.</p><div class=\"math-block\">H(X)= −Σ_i p_i log₂ p_i</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §§9.3–9.4. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">For a fair coin, p(H)=p(T)=1/2.\nH=−2(1/2 log₂(1/2))=1 bit.\nFor a coin that always lands heads, H=−1·log₂1=0.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "A rare outcome is individually surprising, but entropy is average surprise across all outcomes.",
  "takeaway": "Measure uncertainty using probabilities and logarithms.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "Entropy of a fair binary variable (in bits) is",
    "options": [
     "0",
     "0.5",
     "1",
     "2"
    ],
    "correct": 2,
    "explanation": "H=−2(0.5·(−1))=1.",
    "hint": "Compute log₂(1/2)."
   },
   {
    "prompt": "Entropy of a certain outcome is",
    "options": [
     "0",
     "1",
     "∞",
     "−1"
    ],
    "correct": 0,
    "explanation": "−1·log₂1=0.",
    "hint": "Certainty has no surprise."
   },
   {
    "prompt": "Which base expresses entropy in bits?",
    "options": [
     "e",
     "2",
     "10",
     "0"
    ],
    "correct": 1,
    "explanation": "Logarithms base 2 give bits.",
    "hint": "Recall binary digits."
   }
  ],
  "source": "Ross §§9.3–9.4"
 },
 {
  "id": "pr-simulation",
  "subject": "Probability",
  "title": "Inverse-CDF and Rejection Simulation",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Generate random samples from specified distributions.",
  "objectives": [
   "Explain the inverse-transform method",
   "Simulate an exponential random variable",
   "Describe why rejection sampling needs a proposal distribution"
  ],
  "concept": "<h2>Inverse-CDF and Rejection Simulation</h2><p>If U~Uniform(0,1) and F is a continuous strictly increasing CDF, then F⁻¹(U) has CDF F. For exponential rate λ, solve U=1−e^(−λx) for x, yielding X=−ln(1−U)/λ. Rejection sampling proposes candidates from an easy distribution and retains some with probability related to the target density.</p><div class=\"math-block\">U~U(0,1) ⇒ F⁻¹(U)~F;   X_exp = −ln(1−U)/λ</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §§10.1–10.3. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Take U=1−e^(−2), λ=2.\nX=−ln(e^(−2))/2=1.\nThus this uniform draw maps to exponential waiting time 1.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "A simulated numerical sample approximates distributional behavior; one run does not prove a probability identity.",
  "takeaway": "Generate random samples from specified distributions.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "Inverse-transform simulation starts from which variable?",
    "options": [
     "Poisson",
     "Uniform(0,1)",
     "Standard normal only",
     "Fixed integer"
    ],
    "correct": 1,
    "explanation": "A uniform input passes through the inverse CDF.",
    "hint": "Remember the basic random-number generator."
   },
   {
    "prompt": "For Exp(λ), inverse CDF formula contains",
    "options": [
     "−ln(1−U)/λ",
     "λU",
     "U²",
     "1/λU"
    ],
    "correct": 0,
    "explanation": "Solve U=1−e^(−λx).",
    "hint": "Take logarithms."
   },
   {
    "prompt": "What is true about random simulation?",
    "options": [
     "One run proves convergence",
     "Repeated draws approximate target probabilities",
     "It always gives exact answers",
     "It needs no assumptions"
    ],
    "correct": 1,
    "explanation": "Simulation approximates probabilities empirically.",
    "hint": "Think about repeated random draws."
   }
  ],
  "source": "Ross §§10.1–10.3"
 },
 {
  "id": "pr-variance-reduction",
  "subject": "Probability",
  "title": "Variance Reduction in Monte Carlo",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Improve precision without necessarily increasing simulation budget.",
  "objectives": [
   "Explain the idea of antithetic variates",
   "Identify a control variate",
   "Relate precision to estimator variance"
  ],
  "concept": "<h2>Variance Reduction in Monte Carlo</h2><p>Monte Carlo averages have error connected to estimator variance. Variance reduction methods can improve precision at a fixed sample size. Antithetic variates pair negatively associated draws, often using U and 1−U. Control variates adjust an estimate using a correlated quantity with known expectation.</p><div class=\"math-block\">Estimator SE ≈ sqrt(Var(Y)/n) for iid replicates Y</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §10.4. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Estimate E[U] for U~U(0,1) by paired observations.\nAntithetic pair: U=0.2 and 1−U=0.8.\nTheir average is exactly 0.5, eliminating variance for this special example.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Antithetic pairing does not automatically reduce variance for every function of U.",
  "takeaway": "Improve precision without necessarily increasing simulation budget.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "For U=0.2, its antithetic partner is",
    "options": [
     "0.2",
     "0.5",
     "0.8",
     "1.2"
    ],
    "correct": 2,
    "explanation": "1−U=0.8.",
    "hint": "Subtract from one."
   },
   {
    "prompt": "A control variate should have",
    "options": [
     "Known expectation",
     "Infinite variance",
     "No correlation with target",
     "Unknown support"
    ],
    "correct": 0,
    "explanation": "Known expectation allows bias-free adjustment.",
    "hint": "What must be calibrated?"
   },
   {
    "prompt": "For iid Monte Carlo means, standard error generally scales as",
    "options": [
     "n",
     "1/n²",
     "1/√n",
     "√n"
    ],
    "correct": 2,
    "explanation": "Var(average)=Var(Y)/n.",
    "hint": "Take the square root of variance divided by n."
   }
  ],
  "source": "Ross §10.4"
 },
 {
  "id": "pr-multivariate-normal",
  "subject": "Probability",
  "title": "Multivariate Normal Distributions",
  "minutes": 15,
  "level": "Advanced",
  "summary": "Understand jointly Gaussian variables and covariance structure.",
  "objectives": [
   "Describe marginal normality",
   "Use covariance matrices",
   "Identify the special Gaussian zero-covariance property"
  ],
  "concept": "<h2>Multivariate Normal Distributions</h2><p>A multivariate normal vector is characterized by a mean vector and covariance matrix. Linear combinations of its entries are normally distributed. Unlike general random variables, jointly normal coordinates with zero covariance are independent.</p><div class=\"math-block\">X~N_d(μ,Σ) ⇒ aᵀX ~ N(aᵀμ, aᵀΣa)</div><div class=\"note\"><strong>Curriculum connection:</strong> Topic aligned with Ross §7.8. Explanations and checkpoints are newly written for MathBridge, not copied from the textbook.</div>",
  "example": "<h3>Worked example</h3><div class=\"math-block\">Suppose (X,Y) are jointly normal, Var(X)=1, Var(Y)=4, Cov(X,Y)=0.\nThen X and Y are independent.\nFor S=X+Y, Var(S)=1+4=5.</div><p>Check each assumption before applying the stated result. Try changing the values and explaining which steps still work.</p>",
  "mistake": "Two variables that are each marginally normal need not be jointly normal.",
  "takeaway": "Understand jointly Gaussian variables and covariance structure.",
  "lab": "./math-lab.html#lln",
  "labLabel": "Experiment with a related tool",
  "quiz": [
   {
    "prompt": "For a jointly normal pair, zero covariance implies",
    "options": [
     "Independence",
     "Equality",
     "Both zero",
     "Different means"
    ],
    "correct": 0,
    "explanation": "Joint normality is a special case where uncorrelated implies independent.",
    "hint": "The word jointly matters."
   },
   {
    "prompt": "If Var(X)=1, Var(Y)=4, Cov=0, Var(X+Y)=",
    "options": [
     "3",
     "5",
     "9",
     "0"
    ],
    "correct": 1,
    "explanation": "1+4+0=5.",
    "hint": "Use the variance-of-sum formula."
   },
   {
    "prompt": "A covariance matrix must be",
    "options": [
     "Negative definite",
     "Symmetric positive semidefinite",
     "Diagonal always",
     "All ones"
    ],
    "correct": 1,
    "explanation": "Covariance is symmetric and variances of linear combinations are nonnegative.",
    "hint": "For any a, aᵀΣa≥0."
   }
  ],
  "source": "Ross §7.8"
 }
];
 const labAnchors = {"nt-fermat": "modpow", "nt-wilson": "modpow", "nt-arith-func": "totient", "nt-mobius": "totient", "nt-euler": "modpow", "nt-primitive": "modpow", "nt-indices": "modpow", "nt-quadratic": "quadratic", "nt-reciprocity": "quadratic", "nt-rsa": "modpow", "nt-special": "totient", "nt-modern": "quadratic", "pr-normal": "normal", "pr-clt": "clt", "pr-slln": "lln", "pr-continuous": "normal", "pr-poisson-approx": "binomial"};
 advanced.forEach(lesson => { if(labAnchors[lesson.id]) { lesson.lab = "./math-lab.html#" + labAnchors[lesson.id]; lesson.labLabel = "Try an interactive Math Lab tool"; } });
 window.MATHBRIDGE_LESSONS = [...base.filter(x=>x.subject==='Number Theory'), ...advanced.filter(x=>x.subject==='Number Theory'), ...base.filter(x=>x.subject==='Probability'), ...advanced.filter(x=>x.subject==='Probability')];
})();
