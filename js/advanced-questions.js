/* MathBridge 2.3 original advanced question bank. Independent of Learn checkpoints. */
window.MATHBRIDGE_QUESTIONS = (window.MATHBRIDGE_QUESTIONS || []).concat(
[
  {
    "id": "A001",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Fermat’s Little Theorem",
    "lessonId": "nt-fermat",
    "q": "For prime p=11, what is 3^10 modulo 11?",
    "options": [
      "0",
      "3",
      "10",
      "1"
    ],
    "answer": 3,
    "hint": "Check gcd(3,11) and use Fermat.",
    "explanation": "Since 11 is prime and gcd(3,11)=1, 3^10 ≡ 1 modulo 11."
  },
  {
    "id": "A002",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Fermat’s Little Theorem",
    "lessonId": "nt-fermat",
    "q": "What is 2^25 modulo 7?",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": 0,
    "hint": "Reduce the exponent modulo 6.",
    "explanation": "2^6 ≡ 1 mod 7, so 2^25 ≡ 2^(24+1) ≡ 2."
  },
  {
    "id": "A003",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Fermat’s Little Theorem",
    "lessonId": "nt-fermat",
    "q": "Which condition is sufficient for a^(p−1) ≡ 1 (mod p)?",
    "options": [
      "a is a multiple of p",
      "p prime and gcd(a,p)=1",
      "a is even",
      "p is any positive integer"
    ],
    "answer": 1,
    "hint": "The modulus matters.",
    "explanation": "Fermat's little theorem applies to a nonzero residue modulo a prime."
  },
  {
    "id": "A004",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Wilson’s Theorem",
    "lessonId": "nt-wilson",
    "q": "What is 4! modulo 5?",
    "options": [
      "1",
      "2",
      "4",
      "0"
    ],
    "answer": 2,
    "hint": "4! is 24.",
    "explanation": "24 ≡ 4 ≡ −1 modulo 5, as Wilson's theorem predicts."
  },
  {
    "id": "A005",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Wilson’s Theorem",
    "lessonId": "nt-wilson",
    "q": "If n>1 and (n−1)! ≡ −1 (mod n), what follows?",
    "options": [
      "n is even",
      "n is composite",
      "n is a perfect square",
      "n is prime"
    ],
    "answer": 3,
    "hint": "Use the converse of Wilson's theorem.",
    "explanation": "Wilson's theorem characterizes primes in both directions."
  },
  {
    "id": "A006",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Wilson’s Theorem",
    "lessonId": "nt-wilson",
    "q": "What is 6! modulo 7?",
    "options": [
      "6",
      "0",
      "1",
      "5"
    ],
    "answer": 0,
    "hint": "7 is prime, so use Wilson's theorem.",
    "explanation": "For prime 7, 6! ≡ −1 ≡ 6 modulo 7."
  },
  {
    "id": "A007",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Arithmetic Functions",
    "lessonId": "nt-arith-func",
    "q": "How many positive divisors does 36 have?",
    "options": [
      "12",
      "9",
      "6",
      "8"
    ],
    "answer": 1,
    "hint": "Use 36 = 2²·3².",
    "explanation": "The divisor count is (2+1)(2+1)=9."
  },
  {
    "id": "A008",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Arithmetic Functions",
    "lessonId": "nt-arith-func",
    "q": "What is Euler φ(15)?",
    "options": [
      "10",
      "14",
      "8",
      "6"
    ],
    "answer": 2,
    "hint": "15=3·5.",
    "explanation": "φ(15)=15(1−1/3)(1−1/5)=8."
  },
  {
    "id": "A009",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Arithmetic Functions",
    "lessonId": "nt-arith-func",
    "q": "What is the sum of the positive divisors of 12?",
    "options": [
      "24",
      "16",
      "12",
      "28"
    ],
    "answer": 3,
    "hint": "List 1,2,3,4,6,12.",
    "explanation": "σ(12)=1+2+3+4+6+12=28."
  },
  {
    "id": "A010",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Möbius Function",
    "lessonId": "nt-mobius",
    "q": "What is μ(12) for the Möbius function?",
    "options": [
      "0",
      "1",
      "−1",
      "2"
    ],
    "answer": 0,
    "hint": "Does 12 contain a squared prime factor?",
    "explanation": "12=2²·3 is not squarefree, so μ(12)=0."
  },
  {
    "id": "A011",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Möbius Function",
    "lessonId": "nt-mobius",
    "q": "What is μ(30)?",
    "options": [
      "3",
      "−1",
      "0",
      "1"
    ],
    "answer": 1,
    "hint": "30 is squarefree with three distinct primes.",
    "explanation": "μ(30)=(−1)^3=−1."
  },
  {
    "id": "A012",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Möbius Function",
    "lessonId": "nt-mobius",
    "q": "What is the sum Σ(d divides n) μ(d) when n=15?",
    "options": [
      "−1",
      "2",
      "0",
      "1"
    ],
    "answer": 2,
    "hint": "Use the Möbius divisor-sum identity.",
    "explanation": "For every n>1, the sum of μ(d) over positive divisors equals 0."
  },
  {
    "id": "A013",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Euler’s Theorem",
    "lessonId": "nt-euler",
    "q": "What is φ(9)?",
    "options": [
      "8",
      "3",
      "4",
      "6"
    ],
    "answer": 3,
    "hint": "Count integers 1 through 9 coprime to 9.",
    "explanation": "Of 1..9, the six numbers not divisible by 3 are coprime to 9."
  },
  {
    "id": "A014",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Euler’s Theorem",
    "lessonId": "nt-euler",
    "q": "Compute 2^6 modulo 9.",
    "options": [
      "1",
      "0",
      "2",
      "8"
    ],
    "answer": 0,
    "hint": "Use φ(9)=6.",
    "explanation": "Euler's theorem yields 2^6 ≡ 1 modulo 9 since gcd(2,9)=1."
  },
  {
    "id": "A015",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Euler’s Theorem",
    "lessonId": "nt-euler",
    "q": "What is 7^20 modulo 10?",
    "options": [
      "9",
      "1",
      "7",
      "3"
    ],
    "answer": 1,
    "hint": "φ(10)=4 and gcd(7,10)=1.",
    "explanation": "20 is a multiple of φ(10)=4, so 7^20 ≡ 1 modulo 10."
  },
  {
    "id": "A016",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Primitive Roots",
    "lessonId": "nt-primitive",
    "q": "What is the multiplicative order of 2 modulo 5?",
    "options": [
      "3",
      "5",
      "4",
      "2"
    ],
    "answer": 2,
    "hint": "Compute 2, 2², 2³, 2⁴ modulo 5.",
    "explanation": "2^4 ≡1 mod 5 and no smaller positive power does."
  },
  {
    "id": "A017",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Primitive Roots",
    "lessonId": "nt-primitive",
    "q": "Which number is a primitive root modulo 7?",
    "options": [
      "1",
      "2",
      "6",
      "3"
    ],
    "answer": 3,
    "hint": "A primitive root has order φ(7)=6.",
    "explanation": "Powers of 3 modulo 7 are 3,2,6,4,5,1, so order is six."
  },
  {
    "id": "A018",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Primitive Roots",
    "lessonId": "nt-primitive",
    "q": "If a has order 6 modulo m, which exponents k satisfy a^k ≡ 1 (mod m)?",
    "options": [
      "Multiples of 6",
      "Odd integers",
      "Multiples of 3",
      "All positive integers"
    ],
    "answer": 0,
    "hint": "Apply the definition of order.",
    "explanation": "The order is the smallest positive exponent giving 1, and divides any such exponent."
  },
  {
    "id": "A019",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Discrete Logarithms",
    "lessonId": "nt-indices",
    "q": "Solve 2^x ≡ 4 (mod 7) with 0 ≤ x < 3.",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answer": 1,
    "hint": "Try small powers.",
    "explanation": "2² ≡ 4 modulo 7, so x=2 fits the specified range."
  },
  {
    "id": "A020",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Discrete Logarithms",
    "lessonId": "nt-indices",
    "q": "If g is a primitive root modulo 7, how many nonzero residues have a discrete logarithm base g?",
    "options": [
      "3",
      "1",
      "6",
      "7"
    ],
    "answer": 2,
    "hint": "A primitive root generates all units.",
    "explanation": "All six nonzero residues of the field modulo 7 are powers of g."
  },
  {
    "id": "A021",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Discrete Logarithms",
    "lessonId": "nt-indices",
    "q": "With base 3 modulo 7, find k in 0..5 such that 3^k ≡ 5.",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "answer": 3,
    "hint": "List powers of 3 modulo 7.",
    "explanation": "3⁵=243 ≡5 modulo 7."
  },
  {
    "id": "A022",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Quadratic Residues",
    "lessonId": "nt-quadratic",
    "q": "Is 4 a quadratic residue modulo 7?",
    "options": [
      "Yes",
      "No",
      "Only if p is composite",
      "Undetermined"
    ],
    "answer": 0,
    "hint": "Check 2².",
    "explanation": "2² ≡4 modulo 7, so it is a quadratic residue."
  },
  {
    "id": "A023",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Quadratic Residues",
    "lessonId": "nt-quadratic",
    "q": "How many nonzero quadratic residues are there modulo an odd prime p?",
    "options": [
      "(p+1)/2",
      "(p−1)/2",
      "p−1",
      "p"
    ],
    "answer": 1,
    "hint": "Nonzero x and −x have equal squares.",
    "explanation": "The p−1 nonzero elements pair up as ±x, giving (p−1)/2 distinct nonzero squares."
  },
  {
    "id": "A024",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Quadratic Residues",
    "lessonId": "nt-quadratic",
    "q": "For p=11, what is the Legendre symbol (2/11)?",
    "options": [
      "1",
      "2",
      "−1",
      "0"
    ],
    "answer": 2,
    "hint": "List squares modulo 11: 1,3,4,5,9.",
    "explanation": "2 is not a nonzero square modulo 11, so the symbol is −1."
  },
  {
    "id": "A025",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Quadratic Reciprocity",
    "lessonId": "nt-reciprocity",
    "q": "For distinct odd primes p and q both ≡ 1 (mod 4), quadratic reciprocity says (p/q)(q/p) equals:",
    "options": [
      "−1",
      "0",
      "p+q",
      "1"
    ],
    "answer": 3,
    "hint": "Look at the exponent ((p−1)/2)((q−1)/2).",
    "explanation": "Both half-differences are even, so the reciprocity sign is +1."
  },
  {
    "id": "A026",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Quadratic Reciprocity",
    "lessonId": "nt-reciprocity",
    "q": "For odd primes p ≡ q ≡ 3 (mod 4), what is (p/q)(q/p)?",
    "options": [
      "−1",
      "1",
      "0",
      "2"
    ],
    "answer": 0,
    "hint": "Both (p−1)/2 and (q−1)/2 are odd.",
    "explanation": "The exponent is odd, hence the reciprocity sign is −1."
  },
  {
    "id": "A027",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Quadratic Reciprocity",
    "lessonId": "nt-reciprocity",
    "q": "Is 3 a quadratic residue modulo 11?",
    "options": [
      "Undefined",
      "Yes",
      "No",
      "Only if 11 is composite"
    ],
    "answer": 1,
    "hint": "Try 5² modulo 11.",
    "explanation": "5²=25≡3 modulo 11."
  },
  {
    "id": "A028",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "RSA Cryptography",
    "lessonId": "nt-rsa",
    "q": "RSA encryption uses which arithmetic operation for a message m?",
    "options": [
      "m/e",
      "m×n",
      "m^e mod n",
      "m+e+n"
    ],
    "answer": 2,
    "hint": "Think modular exponentiation.",
    "explanation": "RSA encryption computes ciphertext c ≡ m^e modulo n."
  },
  {
    "id": "A029",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "RSA Cryptography",
    "lessonId": "nt-rsa",
    "q": "For RSA primes p=3 and q=11, what is φ(pq)?",
    "options": [
      "33",
      "14",
      "10",
      "20"
    ],
    "answer": 3,
    "hint": "Use (p−1)(q−1).",
    "explanation": "φ(33)=(3−1)(11−1)=20."
  },
  {
    "id": "A030",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "RSA Cryptography",
    "lessonId": "nt-rsa",
    "q": "If e=3 and φ(n)=20, which listed d satisfies ed ≡ 1 (mod 20)?",
    "options": [
      "7",
      "3",
      "5",
      "10"
    ],
    "answer": 0,
    "hint": "Find an inverse of 3 modulo 20.",
    "explanation": "3×7=21≡1 modulo 20."
  },
  {
    "id": "A031",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Special Numbers",
    "lessonId": "nt-special",
    "q": "Which positive integer is perfect?",
    "options": [
      "12",
      "6",
      "8",
      "10"
    ],
    "answer": 1,
    "hint": "Its proper positive divisors sum to itself.",
    "explanation": "1+2+3=6, making 6 perfect."
  },
  {
    "id": "A032",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Special Numbers",
    "lessonId": "nt-special",
    "q": "Which number is a Mersenne number?",
    "options": [
      "33",
      "49",
      "31",
      "30"
    ],
    "answer": 2,
    "hint": "A Mersenne number has form 2^k−1.",
    "explanation": "31=2⁵−1."
  },
  {
    "id": "A033",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Special Numbers",
    "lessonId": "nt-special",
    "q": "Which listed integer is a Fermat number?",
    "options": [
      "15",
      "31",
      "63",
      "17"
    ],
    "answer": 3,
    "hint": "F_m=2^(2^m)+1.",
    "explanation": "17=2⁴+1=2^(2²)+1."
  },
  {
    "id": "A034",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Pythagorean Triples",
    "lessonId": "nt-pythagorean",
    "q": "Which triple satisfies x²+y²=z²?",
    "options": [
      "(5,12,13)",
      "(5,11,13)",
      "(4,8,10)",
      "(3,4,6)"
    ],
    "answer": 0,
    "hint": "Square each component.",
    "explanation": "25+144=169=13²."
  },
  {
    "id": "A035",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Pythagorean Triples",
    "lessonId": "nt-pythagorean",
    "q": "For coprime m=3>n=2 of opposite parity, Euclid's formula gives which triple?",
    "options": [
      "(3,4,5)",
      "(5,12,13)",
      "(6,8,10)",
      "(7,24,25)"
    ],
    "answer": 1,
    "hint": "Use m²−n², 2mn, m²+n².",
    "explanation": "The triple is (9−4,12,9+4)=(5,12,13)."
  },
  {
    "id": "A036",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Pythagorean Triples",
    "lessonId": "nt-pythagorean",
    "q": "Is (6,8,10) a primitive Pythagorean triple?",
    "options": [
      "Only for even hypotenuse",
      "Not a Pythagorean triple",
      "No",
      "Yes"
    ],
    "answer": 2,
    "hint": "Compute gcd(6,8,10).",
    "explanation": "gcd(6,8,10)=2, so it is not primitive."
  },
  {
    "id": "A037",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Sums of Squares",
    "lessonId": "nt-sums-squares",
    "q": "Which equality writes 65 as a sum of two positive squares?",
    "options": [
      "2²+7²",
      "4²+6²",
      "5²+7²",
      "1²+8²"
    ],
    "answer": 3,
    "hint": "Try 1² and 8².",
    "explanation": "1+64=65."
  },
  {
    "id": "A038",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Sums of Squares",
    "lessonId": "nt-sums-squares",
    "q": "Which prime congruence class can be written as a sum of two nonzero squares?",
    "options": [
      "p ≡ 1 (mod 4)",
      "p ≡ 3 (mod 4)",
      "p=2 only",
      "Every odd prime"
    ],
    "answer": 0,
    "hint": "Recall Fermat's theorem on sums of two squares.",
    "explanation": "Every prime p≡1 modulo 4 admits a sum of two positive integer squares."
  },
  {
    "id": "A039",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Sums of Squares",
    "lessonId": "nt-sums-squares",
    "q": "How many ordered signed pairs (x,y) solve x²+y²=5?",
    "options": [
      "16",
      "8",
      "4",
      "2"
    ],
    "answer": 1,
    "hint": "Start from 1²+2² and count signs and order.",
    "explanation": "There are 2 choices for ordering and 4 sign choices, giving 8 solutions."
  },
  {
    "id": "A040",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Fibonacci Numbers",
    "lessonId": "nt-fibonacci",
    "q": "With F₀=0 and F₁=1, what is F₇?",
    "options": [
      "21",
      "5",
      "13",
      "8"
    ],
    "answer": 2,
    "hint": "Add the previous two terms.",
    "explanation": "Sequence 0,1,1,2,3,5,8,13 gives F₇=13."
  },
  {
    "id": "A041",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Fibonacci Numbers",
    "lessonId": "nt-fibonacci",
    "q": "What is gcd(F₆,F₉)?",
    "options": [
      "1",
      "3",
      "5",
      "2"
    ],
    "answer": 3,
    "hint": "F₆=8 and F₉=34.",
    "explanation": "gcd(8,34)=2=F₃."
  },
  {
    "id": "A042",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Fibonacci Numbers",
    "lessonId": "nt-fibonacci",
    "q": "Which identity is valid for Fibonacci numbers F_n?",
    "options": [
      "gcd(F_m,F_n)=F_gcd(m,n)",
      "F_mF_n=F_(m+n)",
      "F_n=2^n",
      "F_(n+1)=2F_n"
    ],
    "answer": 0,
    "hint": "The gcd index appears in a classic identity.",
    "explanation": "For nonnegative indices, gcd(F_m,F_n)=F_gcd(m,n)."
  },
  {
    "id": "A043",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Continued Fractions",
    "lessonId": "nt-continued",
    "q": "What is the value of [2;3] as a finite simple continued fraction?",
    "options": [
      "3/7",
      "7/3",
      "5/3",
      "2/3"
    ],
    "answer": 1,
    "hint": "Compute 2+1/3.",
    "explanation": "[2;3]=2+1/3=7/3."
  },
  {
    "id": "A044",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Continued Fractions",
    "lessonId": "nt-continued",
    "q": "Compute [1;2,2].",
    "options": [
      "4/3",
      "3/2",
      "7/5",
      "5/3"
    ],
    "answer": 2,
    "hint": "Evaluate from the final 2 backward.",
    "explanation": "1+1/(2+1/2)=1+2/5=7/5."
  },
  {
    "id": "A045",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Continued Fractions",
    "lessonId": "nt-continued",
    "q": "What is a convergent of a real number's continued fraction?",
    "options": [
      "A decimal rounding only",
      "A prime denominator only",
      "The derivative",
      "A rational truncation"
    ],
    "answer": 3,
    "hint": "Truncate the continued-fraction expansion.",
    "explanation": "Convergents are rationals obtained by terminating the continued fraction after finitely many terms."
  },
  {
    "id": "A046",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Farey Fractions",
    "lessonId": "nt-farey",
    "q": "Which fractions are neighbors in F₅?",
    "options": [
      "1/3 and 2/5",
      "1/3 and 1/2",
      "1/4 and 3/4",
      "2/5 and 4/5"
    ],
    "answer": 0,
    "hint": "Neighboring reduced fractions a/b<c/d satisfy bc−ad=1.",
    "explanation": "For 1/3 and 2/5, 3·2−1·5=1, and they are adjacent in F₅."
  },
  {
    "id": "A047",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Farey Fractions",
    "lessonId": "nt-farey",
    "q": "What is the mediant of 1/3 and 1/2?",
    "options": [
      "3/4",
      "2/5",
      "1/5",
      "2/6"
    ],
    "answer": 1,
    "hint": "Add numerators and denominators.",
    "explanation": "(1+1)/(3+2)=2/5."
  },
  {
    "id": "A048",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Farey Fractions",
    "lessonId": "nt-farey",
    "q": "If a/b and c/d are neighbors in a Farey sequence, what is bc−ad?",
    "options": [
      "2",
      "−1",
      "1",
      "0"
    ],
    "answer": 2,
    "hint": "Assume a/b<c/d.",
    "explanation": "The determinant bc−ad equals 1 for neighbors in ascending order."
  },
  {
    "id": "A049",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Primality Testing",
    "lessonId": "nt-modern",
    "q": "To test primality of 101 by trial division, which set suffices?",
    "options": [
      "All integers ≤ 101",
      "Only 2",
      "Primes ≤ 50",
      "Primes ≤ 10"
    ],
    "answer": 3,
    "hint": "Test prime divisors up to √101.",
    "explanation": "√101≈10.05, so test 2,3,5,7."
  },
  {
    "id": "A050",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Primality Testing",
    "lessonId": "nt-modern",
    "q": "A base-a Fermat pseudoprime is:",
    "options": [
      "A composite that passes the base-a Fermat test",
      "A prime that fails trial division",
      "An irrational number",
      "An even prime"
    ],
    "answer": 0,
    "hint": "It is not actually prime.",
    "explanation": "It is composite but satisfies a^(n−1)≡1 (mod n) for a chosen base coprime to n."
  },
  {
    "id": "A051",
    "topic": "Number Theory",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Primality Testing",
    "lessonId": "nt-modern",
    "q": "Does failing a Fermat primality test prove a number composite?",
    "options": [
      "Only if the number is even",
      "Yes",
      "No",
      "Only if the base is 1"
    ],
    "answer": 1,
    "hint": "Primes satisfy Fermat congruences for coprime bases.",
    "explanation": "A nontrivial Fermat witness disproves primality; passing does not prove primality."
  },
  {
    "id": "A052",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Multinomial Counting",
    "lessonId": "pr-multinomial",
    "q": "How many arrangements are there of AAB?",
    "options": [
      "2",
      "4",
      "3",
      "6"
    ],
    "answer": 2,
    "hint": "Divide 3! by 2!.",
    "explanation": "There are 3!/2!=3 distinct permutations."
  },
  {
    "id": "A053",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Multinomial Counting",
    "lessonId": "pr-multinomial",
    "q": "For 5 trials with outcomes in categories of counts 2,2,1, the multinomial coefficient is:",
    "options": [
      "10",
      "60",
      "120",
      "30"
    ],
    "answer": 3,
    "hint": "Evaluate 5!/(2!2!1!).",
    "explanation": "120/4=30."
  },
  {
    "id": "A054",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Multinomial Counting",
    "lessonId": "pr-multinomial",
    "q": "In three independent categories with probabilities p₁,p₂,p₃ summing to 1, the probability of counts 1,1,1 in 3 trials is:",
    "options": [
      "6p₁p₂p₃",
      "3p₁p₂p₃",
      "p₁p₂p₃",
      "9p₁p₂p₃"
    ],
    "answer": 0,
    "hint": "Count arrangements of three distinct outcomes.",
    "explanation": "There are 3!=6 orderings, each with product p₁p₂p₃."
  },
  {
    "id": "A055",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Geometric Distribution",
    "lessonId": "pr-geometric",
    "q": "For success probability p=0.25, what is the mean number of trials until first success?",
    "options": [
      "2",
      "4",
      "3",
      "0.25"
    ],
    "answer": 1,
    "hint": "For a geometric variable counting trials, E[X]=1/p.",
    "explanation": "E[X]=1/0.25=4."
  },
  {
    "id": "A056",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Geometric Distribution",
    "lessonId": "pr-geometric",
    "q": "If p=0.3, what is P(first success on trial 2)?",
    "options": [
      "0.49",
      "0.09",
      "0.21",
      "0.30"
    ],
    "answer": 2,
    "hint": "Fail first, succeed next.",
    "explanation": "(1−0.3)×0.3=0.21."
  },
  {
    "id": "A057",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Geometric Distribution",
    "lessonId": "pr-geometric",
    "q": "For negative binomial waiting time to 3 successes with success probability 1/2, its mean number of trials is:",
    "options": [
      "3",
      "1.5",
      "9",
      "6"
    ],
    "answer": 3,
    "hint": "Use E[T]=r/p.",
    "explanation": "E[T]=3/(1/2)=6."
  },
  {
    "id": "A058",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Hypergeometric Distribution",
    "lessonId": "pr-hypergeom",
    "q": "Draw 2 balls without replacement from 3 red and 2 blue. What is P(both blue)?",
    "options": [
      "1/10",
      "1/5",
      "2/5",
      "1/2"
    ],
    "answer": 0,
    "hint": "Count blue pairs over all pairs.",
    "explanation": "C(2,2)/C(5,2)=1/10."
  },
  {
    "id": "A059",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Hypergeometric Distribution",
    "lessonId": "pr-hypergeom",
    "q": "For Hypergeometric(N=20,K=5,n=4), what is E[X]?",
    "options": [
      "0.25",
      "1",
      "4",
      "5"
    ],
    "answer": 1,
    "hint": "Use nK/N.",
    "explanation": "4·5/20=1."
  },
  {
    "id": "A060",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Hypergeometric Distribution",
    "lessonId": "pr-hypergeom",
    "q": "Hypergeometric sampling differs from binomial sampling because:",
    "options": [
      "Population is infinite",
      "Every sample is continuous",
      "Sampling without replacement changes success probabilities",
      "Trials are always independent"
    ],
    "answer": 2,
    "hint": "Consider dependence between draws.",
    "explanation": "Without replacement, success probabilities change across draws, unlike independent Bernoulli trials."
  },
  {
    "id": "A061",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Continuous Distributions",
    "lessonId": "pr-continuous",
    "q": "For a continuous random variable, P(X=a) is generally:",
    "options": [
      "1",
      "1/2",
      "f(a)",
      "0"
    ],
    "answer": 3,
    "hint": "Probability is area under a density.",
    "explanation": "A singleton has zero area under a probability density."
  },
  {
    "id": "A062",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Continuous Distributions",
    "lessonId": "pr-continuous",
    "q": "If f(x)=2x for 0≤x≤1, what is P(X≤0.5)?",
    "options": [
      "0.25",
      "0.5",
      "0.75",
      "1"
    ],
    "answer": 0,
    "hint": "Integrate 2x from 0 to 1/2.",
    "explanation": "∫₀^(1/2)2x dx=(1/2)²=0.25."
  },
  {
    "id": "A063",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Continuous Distributions",
    "lessonId": "pr-continuous",
    "q": "For density f(x)=3x² on (0,1), what is E[X]?",
    "options": [
      "1/4",
      "3/4",
      "1/2",
      "2/3"
    ],
    "answer": 1,
    "hint": "Integrate x·f(x).",
    "explanation": "E[X]=∫₀¹3x³ dx=3/4."
  },
  {
    "id": "A064",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Normal Distribution",
    "lessonId": "pr-normal",
    "q": "For X~N(10,4), what is its standard deviation?",
    "options": [
      "10",
      "16",
      "2",
      "4"
    ],
    "answer": 2,
    "hint": "The second parameter is variance.",
    "explanation": "σ=√4=2."
  },
  {
    "id": "A065",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Normal Distribution",
    "lessonId": "pr-normal",
    "q": "If X~N(5,9), what is the z-score of X=11?",
    "options": [
      "6",
      "11",
      "3",
      "2"
    ],
    "answer": 3,
    "hint": "Standardize (x−μ)/σ.",
    "explanation": "z=(11−5)/3=2."
  },
  {
    "id": "A066",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Normal Distribution",
    "lessonId": "pr-normal",
    "q": "For a standard normal Z, P(Z≤0) equals:",
    "options": [
      "0.5",
      "0",
      "1",
      "0.25"
    ],
    "answer": 0,
    "hint": "Use symmetry of the bell curve.",
    "explanation": "Half the N(0,1) mass lies on each side of zero."
  },
  {
    "id": "A067",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Exponential & Gamma",
    "lessonId": "pr-exponential",
    "q": "For Exponential(rate λ=2), what is E[X]?",
    "options": [
      "4",
      "0.5",
      "2",
      "1"
    ],
    "answer": 1,
    "hint": "Mean of exponential is 1/λ.",
    "explanation": "E[X]=1/2."
  },
  {
    "id": "A068",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Exponential & Gamma",
    "lessonId": "pr-exponential",
    "q": "For Exponential(rate 3), what is P(X>2)?",
    "options": [
      "1−e^(−6)",
      "6e^(−6)",
      "e^(−6)",
      "e^(−3)"
    ],
    "answer": 2,
    "hint": "Use P(X>t)=e^(−λt).",
    "explanation": "P(X>2)=e^(−3·2)=e^(−6)."
  },
  {
    "id": "A069",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Exponential & Gamma",
    "lessonId": "pr-exponential",
    "q": "If X~Gamma(shape 2, rate 4), what is E[X]?",
    "options": [
      "2",
      "8",
      "4",
      "0.5"
    ],
    "answer": 3,
    "hint": "Mean shape/rate.",
    "explanation": "E[X]=2/4=0.5."
  },
  {
    "id": "A070",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Transformations",
    "lessonId": "pr-transform",
    "q": "If X~Uniform(0,1) and Y=2X, what is the support of Y?",
    "options": [
      "[0,2]",
      "[0,1]",
      "[−1,1]",
      "[1,2]"
    ],
    "answer": 0,
    "hint": "Multiply the endpoints by 2.",
    "explanation": "As X ranges 0..1, Y ranges 0..2."
  },
  {
    "id": "A071",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Transformations",
    "lessonId": "pr-transform",
    "q": "If Y=3X+1 and Var(X)=2, what is Var(Y)?",
    "options": [
      "12",
      "18",
      "6",
      "7"
    ],
    "answer": 1,
    "hint": "Variance scales by the square of a constant.",
    "explanation": "Var(3X+1)=3²·2=18."
  },
  {
    "id": "A072",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Transformations",
    "lessonId": "pr-transform",
    "q": "For X~Uniform(0,1), Y=X² has CDF F_Y(y)=:",
    "options": [
      "y on 0≤y≤1",
      "1−√y on 0≤y≤1",
      "√y on 0≤y≤1",
      "y² on 0≤y≤1"
    ],
    "answer": 2,
    "hint": "P(X²≤y)=P(X≤√y).",
    "explanation": "For 0≤y≤1, F_Y(y)=√y."
  },
  {
    "id": "A073",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Joint Distributions",
    "lessonId": "pr-joint",
    "q": "If independent X,Y have P(X=1)=0.3 and P(Y=2)=0.4, what is P(X=1,Y=2)?",
    "options": [
      "0.7",
      "0.3",
      "0.4",
      "0.12"
    ],
    "answer": 3,
    "hint": "Multiply marginal probabilities under independence.",
    "explanation": "0.3×0.4=0.12."
  },
  {
    "id": "A074",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Joint Distributions",
    "lessonId": "pr-joint",
    "q": "If X and Y are independent and E[X]=2, E[Y]=3, what is E[XY]?",
    "options": [
      "6",
      "5",
      "1",
      "9"
    ],
    "answer": 0,
    "hint": "Product expectations factor under independence.",
    "explanation": "E[XY]=2×3=6."
  },
  {
    "id": "A075",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Joint Distributions",
    "lessonId": "pr-joint",
    "q": "Which condition is sufficient for independence of discrete X and Y?",
    "options": [
      "Var(X)=Var(Y)",
      "p(x,y)=p_X(x)p_Y(y) for all x,y",
      "Cov(X,Y)>0",
      "E[X]=E[Y]"
    ],
    "answer": 1,
    "hint": "Use a joint PMF factorization.",
    "explanation": "The joint PMF must factor as the product of the two marginals everywhere."
  },
  {
    "id": "A076",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Covariance",
    "lessonId": "pr-covariance",
    "q": "For independent X and Y with finite second moments, Cov(X,Y) equals:",
    "options": [
      "−1",
      "Var(X)",
      "0",
      "1"
    ],
    "answer": 2,
    "hint": "Independence yields E[XY]=E[X]E[Y].",
    "explanation": "Cov(X,Y)=0 under independence (converse need not hold)."
  },
  {
    "id": "A077",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Covariance",
    "lessonId": "pr-covariance",
    "q": "If Var(X)=2 and Var(Y)=3 with Cov(X,Y)=1, what is Var(X+Y)?",
    "options": [
      "5",
      "6",
      "8",
      "7"
    ],
    "answer": 3,
    "hint": "Add twice the covariance.",
    "explanation": "2+3+2(1)=7."
  },
  {
    "id": "A078",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Covariance",
    "lessonId": "pr-covariance",
    "q": "Correlation Corr(X,Y) must lie in which interval?",
    "options": [
      "[−1,1]",
      "[0,1]",
      "[−2,2]",
      "All real numbers"
    ],
    "answer": 0,
    "hint": "Use Cauchy–Schwarz.",
    "explanation": "Correlation lies between −1 and 1 when both variances are positive."
  },
  {
    "id": "A079",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Conditional Expectation",
    "lessonId": "pr-conditioning",
    "q": "If E[X given Y] is a conditional expectation, E[E[X given Y]] equals:",
    "options": [
      "Var(X)",
      "E[X]",
      "E[Y]",
      "0"
    ],
    "answer": 1,
    "hint": "Apply the tower property.",
    "explanation": "The law of total expectation gives E[E[X given Y]]=E[X]."
  },
  {
    "id": "A080",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Conditional Expectation",
    "lessonId": "pr-conditioning",
    "q": "If E[X given Y]=Y and E[Y]=4, what is E[X]?",
    "options": [
      "8",
      "16",
      "4",
      "0"
    ],
    "answer": 2,
    "hint": "Take expectations of both sides.",
    "explanation": "E[X]=E[E[X given Y]]=E[Y]=4."
  },
  {
    "id": "A081",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Conditional Expectation",
    "lessonId": "pr-conditioning",
    "q": "Which identity is the law of total variance?",
    "options": [
      "Var(X)=Var(E[X given Y])",
      "Var(X)=E[X given Y]",
      "Var(X)=Var(Y)",
      "Var(X)=E[Var(X given Y)]+Var(E[X given Y])"
    ],
    "answer": 3,
    "hint": "Separate within-group and between-group variability.",
    "explanation": "Total variance is average conditional variance plus variance of conditional means."
  },
  {
    "id": "A082",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Moment Generating Functions",
    "lessonId": "pr-mgf",
    "q": "For constant X=3, M_X(t) equals:",
    "options": [
      "e^(3t)",
      "3t",
      "e^t",
      "3"
    ],
    "answer": 0,
    "hint": "M_X(t)=E[e^(tX)].",
    "explanation": "The exponential of a constant is e^(3t)."
  },
  {
    "id": "A083",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Moment Generating Functions",
    "lessonId": "pr-mgf",
    "q": "If X is Bernoulli(p), its MGF is:",
    "options": [
      "p+t",
      "1−p+pe^t",
      "pe^t",
      "e^(pt)"
    ],
    "answer": 1,
    "hint": "Average e^(tX) over 0 and 1.",
    "explanation": "M_X(t)=(1−p)e^0+pe^t."
  },
  {
    "id": "A084",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Moment Generating Functions",
    "lessonId": "pr-mgf",
    "q": "For independent X,Y, the MGF of X+Y (when it exists) is:",
    "options": [
      "M_X(t)/M_Y(t)",
      "M_X(t)−M_Y(t)",
      "M_X(t)M_Y(t)",
      "M_X(t)+M_Y(t)"
    ],
    "answer": 2,
    "hint": "Factor E[e^(tX)e^(tY)].",
    "explanation": "Independence factors the expected product."
  },
  {
    "id": "A085",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Order Statistics",
    "lessonId": "pr-orderstats",
    "q": "For n continuous IID observations, the sample maximum is called:",
    "options": [
      "The median always",
      "The sample mean",
      "The standard deviation",
      "The largest order statistic"
    ],
    "answer": 3,
    "hint": "Order observations from smallest to largest.",
    "explanation": "The maximum is X_(n), the largest order statistic."
  },
  {
    "id": "A086",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Order Statistics",
    "lessonId": "pr-orderstats",
    "q": "For n IID Uniform(0,1), what is P(max≤0.5)?",
    "options": [
      "0.5^n",
      "1−0.5^n",
      "n/2",
      "0.5"
    ],
    "answer": 0,
    "hint": "All observations must be ≤0.5.",
    "explanation": "Independence gives P(max≤x)=x^n for 0≤x≤1."
  },
  {
    "id": "A087",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Order Statistics",
    "lessonId": "pr-orderstats",
    "q": "For n=2 IID Uniform(0,1), what is E[max(X₁,X₂)]?",
    "options": [
      "3/4",
      "2/3",
      "1/2",
      "1/3"
    ],
    "answer": 1,
    "hint": "Use CDF x² and density 2x.",
    "explanation": "E[max]=∫₀¹x(2x)dx=2/3."
  },
  {
    "id": "A088",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Probability Inequalities",
    "lessonId": "pr-chebyshev",
    "q": "If X≥0 and E[X]=2, Markov gives P(X≥10) ≤:",
    "options": [
      "0.8",
      "1",
      "0.2",
      "0.5"
    ],
    "answer": 2,
    "hint": "Divide the mean by threshold.",
    "explanation": "Markov's inequality yields P(X≥10)≤2/10=0.2."
  },
  {
    "id": "A089",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Probability Inequalities",
    "lessonId": "pr-chebyshev",
    "q": "If E[X]=0 and Var(X)=4, Chebyshev gives P(abs(X)≥4) ≤:",
    "options": [
      "0.5",
      "1",
      "0.75",
      "0.25"
    ],
    "answer": 3,
    "hint": "Bound variance/t².",
    "explanation": "4/16=0.25."
  },
  {
    "id": "A090",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Probability Inequalities",
    "lessonId": "pr-chebyshev",
    "q": "Chebyshev requires which condition?",
    "options": [
      "Finite variance",
      "Normal distribution",
      "Symmetric distribution",
      "Independent samples only"
    ],
    "answer": 0,
    "hint": "Chebyshev works very generally.",
    "explanation": "For a random variable with finite variance, deviation tails are bounded by variance/t²."
  },
  {
    "id": "A091",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Central Limit Theorem",
    "lessonId": "pr-clt",
    "q": "CLT describes the asymptotic distribution of suitably standardized:",
    "options": [
      "Only Bernoulli variables",
      "Sums or averages of IID variables with finite variance",
      "Each original observation",
      "Every finite sample exactly"
    ],
    "answer": 1,
    "hint": "Center, scale, and let n grow.",
    "explanation": "Under standard assumptions standardized sums or averages approach a normal distribution."
  },
  {
    "id": "A092",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Central Limit Theorem",
    "lessonId": "pr-clt",
    "q": "For IID X_i with mean μ and variance σ², Var(X̄_n) equals:",
    "options": [
      "σ²",
      "σ/n",
      "σ²/n",
      "nσ²"
    ],
    "answer": 2,
    "hint": "Variance of an average uses n² in the denominator.",
    "explanation": "Var(Σ X_i/n)=nσ²/n²=σ²/n."
  },
  {
    "id": "A093",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Central Limit Theorem",
    "lessonId": "pr-clt",
    "q": "For IID mean 10, variance 9 and n=100, the standard deviation of sample mean is:",
    "options": [
      "0.9",
      "3",
      "9",
      "0.3"
    ],
    "answer": 3,
    "hint": "σ/√n.",
    "explanation": "3/10=0.3."
  },
  {
    "id": "A094",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Laws of Large Numbers",
    "lessonId": "pr-slln",
    "q": "The weak law of large numbers gives convergence of sample mean to μ in:",
    "options": [
      "Probability",
      "Distribution only",
      "Mean square only by definition",
      "Every finite run exactly"
    ],
    "answer": 0,
    "hint": "Identify the weak law's mode of convergence.",
    "explanation": "Weak LLN typically states X̄_n→μ in probability."
  },
  {
    "id": "A095",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Laws of Large Numbers",
    "lessonId": "pr-slln",
    "q": "The strong law gives convergence of sample mean to μ:",
    "options": [
      "Deterministically at every n",
      "Almost surely",
      "Only in distribution",
      "Only for n=10"
    ],
    "answer": 1,
    "hint": "Distinguish the stronger type of convergence.",
    "explanation": "SLLN asserts sample means converge with probability 1 under its assumptions."
  },
  {
    "id": "A096",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Laws of Large Numbers",
    "lessonId": "pr-slln",
    "q": "For IID Bernoulli(0.4), what is the limit of sample success proportion a.s.?",
    "options": [
      "0.16",
      "1",
      "0.4",
      "0.6"
    ],
    "answer": 2,
    "hint": "Expected value is p.",
    "explanation": "The strong law yields limiting proportion p=0.4 almost surely."
  },
  {
    "id": "A097",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Poisson Approximation",
    "lessonId": "pr-poisson-approx",
    "q": "Binomial(n,p) can be approximated by Poisson(λ) when:",
    "options": [
      "n small, p large",
      "n=1 always",
      "p=0.5 always",
      "n large, p small, np≈λ"
    ],
    "answer": 3,
    "hint": "Think rare events.",
    "explanation": "The Poisson limit uses rare independent events with mean np tending to λ."
  },
  {
    "id": "A098",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Poisson Approximation",
    "lessonId": "pr-poisson-approx",
    "q": "For 1000 trials with p=0.002, the Poisson approximation parameter is:",
    "options": [
      "2",
      "0.002",
      "1000",
      "500"
    ],
    "answer": 0,
    "hint": "Compute n×p.",
    "explanation": "λ=np=1000×0.002=2."
  },
  {
    "id": "A099",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Poisson Approximation",
    "lessonId": "pr-poisson-approx",
    "q": "Under a Poisson(3) approximation, P(X=0) is:",
    "options": [
      "1/3",
      "e^(−3)",
      "3e^(−3)",
      "1−e^(−3)"
    ],
    "answer": 1,
    "hint": "Apply Poisson PMF at zero.",
    "explanation": "P(X=0)=e^(−3)3⁰/0!=e^(−3)."
  },
  {
    "id": "A100",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Poisson Processes",
    "lessonId": "pr-poisson-process",
    "q": "A Poisson process with rate 4 per hour has expected events in 2 hours:",
    "options": [
      "4",
      "16",
      "8",
      "2"
    ],
    "answer": 2,
    "hint": "Expected count=rate×time.",
    "explanation": "4×2=8."
  },
  {
    "id": "A101",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Poisson Processes",
    "lessonId": "pr-poisson-process",
    "q": "For Poisson process rate λ, waiting time to first event is:",
    "options": [
      "Uniform(0,λ)",
      "Bernoulli(λ)",
      "Normal(0,λ)",
      "Exponential(rate λ)"
    ],
    "answer": 3,
    "hint": "Interarrival times are memoryless.",
    "explanation": "Poisson process interarrival times are IID exponential with rate λ."
  },
  {
    "id": "A102",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Poisson Processes",
    "lessonId": "pr-poisson-process",
    "q": "Independent counts in nonoverlapping time intervals are a property of:",
    "options": [
      "Poisson processes",
      "All random processes",
      "Deterministic periodic arrivals",
      "All Markov chains"
    ],
    "answer": 0,
    "hint": "Recall independent increments.",
    "explanation": "A homogeneous Poisson process has independent increments."
  },
  {
    "id": "A103",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Markov Chains",
    "lessonId": "pr-markov",
    "q": "The Markov property means the next state depends on:",
    "options": [
      "Unrelated variables",
      "Current state given present state",
      "Every previous state separately",
      "Future states only"
    ],
    "answer": 1,
    "hint": "The present summarizes past information.",
    "explanation": "Conditional on current state, the future is independent of the past."
  },
  {
    "id": "A104",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Markov Chains",
    "lessonId": "pr-markov",
    "q": "A stochastic transition matrix has each row summing to:",
    "options": [
      "2",
      "Number of states",
      "1",
      "0"
    ],
    "answer": 2,
    "hint": "Each row lists probabilities of next states.",
    "explanation": "Transition probabilities in a row sum to 1."
  },
  {
    "id": "A105",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Markov Chains",
    "lessonId": "pr-markov",
    "q": "For transition matrix [[0.7,0.3],[0.2,0.8]], P(state 2 next given state 1 now) equals:",
    "options": [
      "0.7",
      "0.2",
      "0.8",
      "0.3"
    ],
    "answer": 3,
    "hint": "Read row 1, column 2.",
    "explanation": "Entry P₁₂=0.3 gives the desired transition probability."
  },
  {
    "id": "A106",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Entropy",
    "lessonId": "pr-entropy",
    "q": "For a fair binary outcome, Shannon entropy (base 2) equals:",
    "options": [
      "1 bit",
      "0 bit",
      "2 bits",
      "1/2 bit"
    ],
    "answer": 0,
    "hint": "Compute −2(0.5 log₂0.5).",
    "explanation": "H=−2×0.5×(−1)=1 bit."
  },
  {
    "id": "A107",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Entropy",
    "lessonId": "pr-entropy",
    "q": "For a certain event (probability 1), Shannon entropy is:",
    "options": [
      "−1",
      "0",
      "1",
      "Infinity"
    ],
    "answer": 1,
    "hint": "No uncertainty remains.",
    "explanation": "A deterministic distribution has entropy zero."
  },
  {
    "id": "A108",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Entropy",
    "lessonId": "pr-entropy",
    "q": "Which probability distribution on n outcomes maximizes entropy?",
    "options": [
      "Any two-point distribution",
      "Only a normal distribution",
      "Uniform distribution",
      "All mass on one outcome"
    ],
    "answer": 2,
    "hint": "Entropy favors evenly spread probabilities.",
    "explanation": "For a fixed finite support of n outcomes, uniform p_i=1/n maximizes Shannon entropy."
  },
  {
    "id": "A109",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Simulation",
    "lessonId": "pr-simulation",
    "q": "Inverse-CDF simulation starts from U distributed as:",
    "options": [
      "Normal(0,1)",
      "Exponential(1)",
      "Poisson(1)",
      "Uniform(0,1)"
    ],
    "answer": 3,
    "hint": "Use a source of uniform random numbers.",
    "explanation": "Set X=F^{-1}(U) for U~Uniform(0,1), using a generalized inverse."
  },
  {
    "id": "A110",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Simulation",
    "lessonId": "pr-simulation",
    "q": "To simulate Exponential(rate λ) from U~Uniform(0,1), use:",
    "options": [
      "−ln(U)/λ",
      "U/λ",
      "λU",
      "ln(U)/λ"
    ],
    "answer": 0,
    "hint": "Invert the exponential CDF.",
    "explanation": "−ln(U)/λ has the desired exponential distribution."
  },
  {
    "id": "A111",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Simulation",
    "lessonId": "pr-simulation",
    "q": "In acceptance–rejection sampling, the proposal density g must satisfy:",
    "options": [
      "M must be zero",
      "f(x)≤Mg(x) for some M≥1",
      "g(x)=0 wherever f(x)>0",
      "f(x)=g(x) exactly"
    ],
    "answer": 1,
    "hint": "Proposal envelope must dominate target.",
    "explanation": "A valid rejection sampler requires an envelope Mg covering f everywhere."
  },
  {
    "id": "A112",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Variance Reduction",
    "lessonId": "pr-variance-reduction",
    "q": "Antithetic variates commonly pair U with:",
    "options": [
      "2U",
      "U+1",
      "1−U",
      "U²"
    ],
    "answer": 2,
    "hint": "Use negatively correlated uniforms.",
    "explanation": "For U uniform on [0,1], 1−U is also uniform and can reduce variance when paired appropriately."
  },
  {
    "id": "A113",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Variance Reduction",
    "lessonId": "pr-variance-reduction",
    "q": "For independent sample averages, standard Monte Carlo error typically shrinks like:",
    "options": [
      "1/n²",
      "n",
      "√n",
      "1/√n"
    ],
    "answer": 3,
    "hint": "Use variance of an average.",
    "explanation": "Standard error is σ/√n."
  },
  {
    "id": "A114",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Variance Reduction",
    "lessonId": "pr-variance-reduction",
    "q": "A useful control variate is a correlated variable with:",
    "options": [
      "Known expectation",
      "Unknown distribution necessarily",
      "Infinite variance",
      "Zero sample size"
    ],
    "answer": 0,
    "hint": "Subtract a centered observable with known mean.",
    "explanation": "Control variates exploit known means and correlations to reduce estimator variance."
  },
  {
    "id": "A115",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Easy",
    "unit": "Multivariate Normal",
    "lessonId": "pr-multivariate-normal",
    "q": "For a bivariate normal vector with zero covariance, its components are:",
    "options": [
      "Non-normal",
      "Independent",
      "Always equal",
      "Necessarily anticorrelated"
    ],
    "answer": 1,
    "hint": "This is special to a joint Gaussian vector.",
    "explanation": "For jointly normal variables, zero covariance implies independence."
  },
  {
    "id": "A116",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Medium",
    "unit": "Multivariate Normal",
    "lessonId": "pr-multivariate-normal",
    "q": "A covariance matrix must be:",
    "options": [
      "Negative definite",
      "Diagonal always",
      "Symmetric positive semidefinite",
      "Skew-symmetric"
    ],
    "answer": 2,
    "hint": "Var(aᵀX)≥0 for every vector a.",
    "explanation": "Covariance matrices are symmetric and positive semidefinite."
  },
  {
    "id": "A117",
    "topic": "Probability",
    "stage": "Advanced",
    "level": "Hard",
    "unit": "Multivariate Normal",
    "lessonId": "pr-multivariate-normal",
    "q": "For X~N(μ,Σ), what is Var(aᵀX)?",
    "options": [
      "aᵀμ",
      "Σa",
      "aᵀa",
      "aᵀΣa"
    ],
    "answer": 3,
    "hint": "Use the variance of a linear combination.",
    "explanation": "Var(aᵀX)=aᵀΣa."
  }
]
);
