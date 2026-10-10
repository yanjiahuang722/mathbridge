/* MathBridge 2.1: editable original question bank. */
window.MATHBRIDGE_QUESTIONS = [
  {
    "id": "Q01",
    "topic": "Number Theory",
    "level": "Easy",
    "unit": "GCD",
    "q": "What is gcd(84, 30)?",
    "options": [
      "3",
      "6",
      "12",
      "14"
    ],
    "answer": 1,
    "hint": "Apply successive divisions: 84 = 2·30 + 24.",
    "explanation": "84 = 2·30 + 24, 30 = 1·24 + 6, and 24 = 4·6. Therefore gcd(84,30)=6."
  },
  {
    "id": "Q02",
    "topic": "Number Theory",
    "level": "Easy",
    "unit": "Division Algorithm",
    "q": "What is the remainder when 29 is divided by 6?",
    "options": [
      "1",
      "3",
      "5",
      "6"
    ],
    "answer": 2,
    "hint": "Find the largest multiple of 6 not exceeding 29.",
    "explanation": "29 = 6·4 + 5 with 0 ≤ 5 < 6, so the remainder is 5."
  },
  {
    "id": "Q03",
    "topic": "Number Theory",
    "level": "Easy",
    "unit": "Divisibility",
    "q": "Which number is divisible by 3?",
    "options": [
      "1234",
      "1235",
      "1236",
      "1237"
    ],
    "answer": 2,
    "hint": "An integer is divisible by 3 if its digit sum is divisible by 3.",
    "explanation": "1+2+3+6 = 12 is divisible by 3; the other digit sums are not."
  },
  {
    "id": "Q04",
    "topic": "Number Theory",
    "level": "Easy",
    "unit": "Prime Factorization",
    "q": "Which is the prime factorization of 84?",
    "options": [
      "2²·3·7",
      "2·3²·7",
      "2²·3²",
      "2·3·7"
    ],
    "answer": 0,
    "hint": "Divide by the smallest primes repeatedly.",
    "explanation": "84 = 2·42 = 2²·21 = 2²·3·7."
  },
  {
    "id": "Q05",
    "topic": "Number Theory",
    "level": "Easy",
    "unit": "GCD",
    "q": "What is lcm(6, 8)?",
    "options": [
      "12",
      "14",
      "24",
      "48"
    ],
    "answer": 2,
    "hint": "Find the smallest positive integer divisible by both 6 and 8.",
    "explanation": "6 = 2·3 and 8 = 2³, so lcm(6,8) = 2³·3 = 24."
  },
  {
    "id": "Q06",
    "topic": "Number Theory",
    "level": "Easy",
    "unit": "Congruences",
    "q": "Which residue equals 35 modulo 8?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "hint": "Write 35 = 8q + r.",
    "explanation": "35 = 8·4 + 3, hence 35 ≡ 3 (mod 8)."
  },
  {
    "id": "Q07",
    "topic": "Number Theory",
    "level": "Easy",
    "unit": "Primes",
    "q": "What is the smallest prime factor of 91?",
    "options": [
      "3",
      "7",
      "11",
      "13"
    ],
    "answer": 1,
    "hint": "Try the small primes in ascending order.",
    "explanation": "91 = 7·13, and 7 is the smaller prime factor."
  },
  {
    "id": "Q08",
    "topic": "Number Theory",
    "level": "Easy",
    "unit": "Division Algorithm",
    "q": "In 38 = 5q + r with 0 ≤ r < 5, what is (q,r)?",
    "options": [
      "(6, 8)",
      "(7, 3)",
      "(8, −2)",
      "(7, 5)"
    ],
    "answer": 1,
    "hint": "Divide 38 by 5 and take the integer quotient.",
    "explanation": "38 = 5·7 + 3, and 0 ≤ 3 < 5, so q = 7, r = 3."
  },
  {
    "id": "Q09",
    "topic": "Number Theory",
    "level": "Medium",
    "unit": "Modular Inverses",
    "q": "What is the multiplicative inverse of 3 modulo 11?",
    "options": [
      "2",
      "4",
      "7",
      "8"
    ],
    "answer": 1,
    "hint": "Look for 3x ≡ 1 (mod 11).",
    "explanation": "3·4 = 12 ≡ 1 (mod 11), so the inverse is 4."
  },
  {
    "id": "Q10",
    "topic": "Number Theory",
    "level": "Medium",
    "unit": "Congruences",
    "q": "What solves 7x ≡ 1 (mod 10)?",
    "options": [
      "x ≡ 2",
      "x ≡ 3",
      "x ≡ 5",
      "No solution"
    ],
    "answer": 1,
    "hint": "7·3 is one more than a multiple of 10.",
    "explanation": "7·3 = 21 ≡ 1 (mod 10), giving x ≡ 3 (mod 10)."
  },
  {
    "id": "Q11",
    "topic": "Number Theory",
    "level": "Medium",
    "unit": "GCD",
    "q": "Find gcd(252,105).",
    "options": [
      "7",
      "14",
      "21",
      "42"
    ],
    "answer": 2,
    "hint": "252 = 2·105 + 42.",
    "explanation": "105 = 2·42 + 21 and 42 = 2·21. The gcd is 21."
  },
  {
    "id": "Q12",
    "topic": "Number Theory",
    "level": "Medium",
    "unit": "Bézout Identity",
    "q": "Which pair satisfies 26x + 15y = 1?",
    "options": [
      "(4, −7)",
      "(−4, 7)",
      "(1, −1)",
      "(−1, 2)"
    ],
    "answer": 1,
    "hint": "Substitute the candidate pairs.",
    "explanation": "26(−4)+15(7) = −104+105 = 1."
  },
  {
    "id": "Q13",
    "topic": "Number Theory",
    "level": "Medium",
    "unit": "Congruences",
    "q": "How many integers x with 0 ≤ x ≤ 30 satisfy x ≡ 2 (mod 7)?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": 1,
    "hint": "List 2, 9, 16, ... until you reach 30.",
    "explanation": "The valid values are 2, 9, 16, 23 and 30: five integers."
  },
  {
    "id": "Q14",
    "topic": "Number Theory",
    "level": "Medium",
    "unit": "Chinese Remainder Theorem",
    "q": "Solve x ≡ 1 (mod 3), x ≡ 2 (mod 5).",
    "options": [
      "x ≡ 7 (mod 15)",
      "x ≡ 8 (mod 15)",
      "x ≡ 11 (mod 15)",
      "No solution"
    ],
    "answer": 0,
    "hint": "Check numbers 2, 7, 12 modulo 3.",
    "explanation": "7 ≡ 1 (mod 3) and 7 ≡ 2 (mod 5). Since 3 and 5 are coprime, x ≡ 7 (mod 15)."
  },
  {
    "id": "Q15",
    "topic": "Number Theory",
    "level": "Medium",
    "unit": "GCD",
    "q": "If gcd(a,b)=6 and ab=216 for positive integers, what is lcm(a,b)?",
    "options": [
      "18",
      "24",
      "36",
      "72"
    ],
    "answer": 2,
    "hint": "Use gcd(a,b)·lcm(a,b)=ab for positive integers.",
    "explanation": "lcm(a,b) = 216 / 6 = 36."
  },
  {
    "id": "Q16",
    "topic": "Number Theory",
    "level": "Medium",
    "unit": "Linear Congruences",
    "q": "Find x modulo 7 from 6x ≡ 8 (mod 14).",
    "options": [
      "x ≡ 2",
      "x ≡ 4",
      "x ≡ 6",
      "No solution"
    ],
    "answer": 2,
    "hint": "Divide both sides and the modulus by gcd(6,14)=2.",
    "explanation": "3x ≡ 4 (mod 7). Since 3·5 ≡ 1 (mod 7), x ≡ 5·4 ≡ 6 (mod 7)."
  },
  {
    "id": "Q17",
    "topic": "Number Theory",
    "level": "Hard",
    "unit": "Diophantine Equations",
    "q": "Which pair solves 35x + 22y = 1?",
    "options": [
      "(5, −8)",
      "(−5, 8)",
      "(2, −3)",
      "(−3, 5)"
    ],
    "answer": 1,
    "hint": "Work backward through the Euclidean algorithm.",
    "explanation": "35(−5)+22(8) = −175+176 = 1."
  },
  {
    "id": "Q18",
    "topic": "Number Theory",
    "level": "Hard",
    "unit": "Chinese Remainder Theorem",
    "q": "Find the least nonnegative solution of x ≡ 2 (mod 7) and x ≡ 3 (mod 5).",
    "options": [
      "16",
      "18",
      "23",
      "28"
    ],
    "answer": 2,
    "hint": "Numbers ≡ 3 (mod 5) are 3,8,13,18,23,...",
    "explanation": "23 ≡ 2 (mod 7) and 23 ≡ 3 (mod 5). Thus x ≡ 23 (mod 35)."
  },
  {
    "id": "Q19",
    "topic": "Number Theory",
    "level": "Hard",
    "unit": "Linear Congruences",
    "q": "How many incongruent solutions modulo 12 satisfy 8x ≡ 4 (mod 12)?",
    "options": [
      "0",
      "2",
      "4",
      "8"
    ],
    "answer": 2,
    "hint": "A solvable ax ≡ b (mod m) has gcd(a,m) solutions modulo m.",
    "explanation": "gcd(8,12)=4 divides 4, so there are exactly 4 residue-class solutions modulo 12."
  },
  {
    "id": "Q20",
    "topic": "Number Theory",
    "level": "Hard",
    "unit": "Chinese Remainder Theorem",
    "q": "Find the least positive x satisfying x ≡ 2 (mod 4), x ≡ 3 (mod 5), x ≡ 1 (mod 3).",
    "options": [
      "18",
      "38",
      "58",
      "78"
    ],
    "answer": 2,
    "hint": "Start with x = 3 + 5k and impose the other two congruences.",
    "explanation": "58 mod 4 = 2, 58 mod 5 = 3 and 58 mod 3 = 1. The coprime moduli have product 60; 58 is the least positive solution."
  },
  {
    "id": "Q21",
    "topic": "Number Theory",
    "level": "Hard",
    "unit": "Euler Totient",
    "q": "What is φ(35), the number of integers from 1 to 35 coprime to 35?",
    "options": [
      "12",
      "20",
      "24",
      "30"
    ],
    "answer": 2,
    "hint": "35 = 5·7 with distinct primes.",
    "explanation": "φ(35) = 35(1−1/5)(1−1/7) = 24."
  },
  {
    "id": "Q22",
    "topic": "Number Theory",
    "level": "Hard",
    "unit": "GCD",
    "q": "Find gcd(2¹⁰ − 1, 2⁶ − 1).",
    "options": [
      "1",
      "3",
      "7",
      "15"
    ],
    "answer": 1,
    "hint": "Apply Euclidean divisions to 1023 and 63.",
    "explanation": "2¹⁰−1=1023, 2⁶−1=63. 1023=16·63+15, 63=4·15+3, 15=5·3, so gcd=3."
  },
  {
    "id": "Q23",
    "topic": "Number Theory",
    "level": "Hard",
    "unit": "Diophantine Equations",
    "q": "Which formula describes all solutions of 12x + 18y = 30?",
    "options": [
      "x = 1 + 3t, y = 1 − 2t",
      "x = 1 + 2t, y = 1 − 3t",
      "x = 1 + 3t, y = 1 + 2t",
      "x = 1 + t, y = 1 − t"
    ],
    "answer": 0,
    "hint": "(1,1) is a particular solution; use b/g and −a/g as parameter steps.",
    "explanation": "gcd(12,18)=6; x=1+(18/6)t=1+3t and y=1−(12/6)t=1−2t, for t∈ℤ."
  },
  {
    "id": "Q24",
    "topic": "Number Theory",
    "level": "Hard",
    "unit": "Chinese Remainder Theorem",
    "q": "Find the least positive integer x with x ≡ 1 (mod 4) and x ≡ 3 (mod 6).",
    "options": [
      "3",
      "5",
      "9",
      "No solution"
    ],
    "answer": 2,
    "hint": "gcd(4,6)=2. The residues differ by 2, so the system is compatible.",
    "explanation": "9 ≡ 1 (mod 4) and 9 ≡ 3 (mod 6). Solutions repeat modulo lcm(4,6)=12."
  },
  {
    "id": "Q25",
    "topic": "Probability",
    "level": "Easy",
    "unit": "Counting",
    "q": "Two independent fair coin flips: what is P(two heads)?",
    "options": [
      "1/2",
      "1/4",
      "3/4",
      "1/8"
    ],
    "answer": 1,
    "hint": "Write the four equally likely outcomes HH, HT, TH, TT.",
    "explanation": "Only HH works, so P = 1/4."
  },
  {
    "id": "Q26",
    "topic": "Probability",
    "level": "Easy",
    "unit": "Expectation",
    "q": "If X ~ Binomial(10,0.3), what is E[X]?",
    "options": [
      "0.3",
      "3",
      "7",
      "10"
    ],
    "answer": 1,
    "hint": "For a binomial variable, E[X]=np.",
    "explanation": "E[X]=10·0.3=3."
  },
  {
    "id": "Q27",
    "topic": "Probability",
    "level": "Easy",
    "unit": "Complement",
    "q": "Three independent fair coin flips: what is P(at least one head)?",
    "options": [
      "1/8",
      "3/8",
      "1/2",
      "7/8"
    ],
    "answer": 3,
    "hint": "Subtract P(all tails) from 1.",
    "explanation": "P(at least one head)=1−(1/2)³=7/8."
  },
  {
    "id": "Q28",
    "topic": "Probability",
    "level": "Easy",
    "unit": "Sample Space",
    "q": "A fair die is rolled once. What is P(even)?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "answer": 2,
    "hint": "Count 2, 4, 6 among six outcomes.",
    "explanation": "There are three even faces out of six, so 3/6=1/2."
  },
  {
    "id": "Q29",
    "topic": "Probability",
    "level": "Easy",
    "unit": "Complement",
    "q": "If P(A)=0.28, what is P(Aᶜ)?",
    "options": [
      "0.28",
      "0.62",
      "0.72",
      "0.82"
    ],
    "answer": 2,
    "hint": "Use P(Aᶜ)=1−P(A).",
    "explanation": "1−0.28=0.72."
  },
  {
    "id": "Q30",
    "topic": "Probability",
    "level": "Easy",
    "unit": "Bernoulli Trials",
    "q": "For a Bernoulli random variable with P(X=1)=0.7, what is E[X]?",
    "options": [
      "0.3",
      "0.7",
      "1.0",
      "1.7"
    ],
    "answer": 1,
    "hint": "X is 0 or 1, so E[X]=1·p+0·(1−p).",
    "explanation": "E[X]=0.7."
  },
  {
    "id": "Q31",
    "topic": "Probability",
    "level": "Easy",
    "unit": "Expectation",
    "q": "What is the expected result of a fair six-sided die roll?",
    "options": [
      "3",
      "3.5",
      "4",
      "4.5"
    ],
    "answer": 1,
    "hint": "Average the equally likely outcomes 1 through 6.",
    "explanation": "(1+2+3+4+5+6)/6 = 21/6 = 3.5."
  },
  {
    "id": "Q32",
    "topic": "Probability",
    "level": "Easy",
    "unit": "Independence",
    "q": "If A and B are independent with P(A)=0.4 and P(B)=0.5, what is P(A∩B)?",
    "options": [
      "0.1",
      "0.2",
      "0.4",
      "0.9"
    ],
    "answer": 1,
    "hint": "Independent intersections multiply.",
    "explanation": "P(A∩B)=0.4·0.5=0.2."
  },
  {
    "id": "Q33",
    "topic": "Probability",
    "level": "Medium",
    "unit": "Binomial Distribution",
    "q": "For X ~ Binomial(4,0.5), what is P(X=2)?",
    "options": [
      "1/4",
      "1/2",
      "3/8",
      "1/8"
    ],
    "answer": 2,
    "hint": "Use C(4,2)(1/2)⁴.",
    "explanation": "C(4,2)·(1/2)⁴ = 6/16 = 3/8."
  },
  {
    "id": "Q34",
    "topic": "Probability",
    "level": "Medium",
    "unit": "Conditional Probability",
    "q": "If P(A∩B)=0.15 and P(B)=0.30, what is P(A|B)?",
    "options": [
      "0.15",
      "0.30",
      "0.45",
      "0.50"
    ],
    "answer": 3,
    "hint": "Divide the intersection by P(B).",
    "explanation": "P(A|B)=0.15/0.30=0.50."
  },
  {
    "id": "Q35",
    "topic": "Probability",
    "level": "Medium",
    "unit": "Poisson Distribution",
    "q": "If X ~ Poisson(2), what is P(X=0)?",
    "options": [
      "e⁻²",
      "2e⁻²",
      "1−e⁻²",
      "1/2"
    ],
    "answer": 0,
    "hint": "Use e^(−λ) λᵏ/k! at k=0.",
    "explanation": "P(X=0)=e⁻²·2⁰/0!=e⁻²."
  },
  {
    "id": "Q36",
    "topic": "Probability",
    "level": "Medium",
    "unit": "Inclusion–Exclusion",
    "q": "If P(A)=0.6, P(B)=0.5 and P(A∩B)=0.2, what is P(A∪B)?",
    "options": [
      "0.7",
      "0.8",
      "0.9",
      "1.1"
    ],
    "answer": 2,
    "hint": "P(A∪B)=P(A)+P(B)−P(A∩B).",
    "explanation": "0.6+0.5−0.2=0.9."
  },
  {
    "id": "Q37",
    "topic": "Probability",
    "level": "Medium",
    "unit": "Binomial Distribution",
    "q": "If X ~ Binomial(10,0.2), what is Var(X)?",
    "options": [
      "0.8",
      "1.6",
      "2.0",
      "4.0"
    ],
    "answer": 1,
    "hint": "For binomial, Var(X)=np(1−p).",
    "explanation": "10·0.2·0.8=1.6."
  },
  {
    "id": "Q38",
    "topic": "Probability",
    "level": "Medium",
    "unit": "Bayes Theorem",
    "q": "A condition occurs in 10% of people. A test is positive for 90% with it and 10% without it. What is P(condition | positive)?",
    "options": [
      "0.1",
      "0.3",
      "0.5",
      "0.9"
    ],
    "answer": 2,
    "hint": "Compare true positives 0.1·0.9 and false positives 0.9·0.1.",
    "explanation": "P(condition|positive) = 0.09/(0.09+0.09)=0.5."
  },
  {
    "id": "Q39",
    "topic": "Probability",
    "level": "Medium",
    "unit": "Geometric Distribution",
    "q": "Independent trials have success probability 1/4. What is P(first success is on trial 3)?",
    "options": [
      "1/16",
      "3/16",
      "9/64",
      "27/64"
    ],
    "answer": 2,
    "hint": "The first two trials must fail and the third succeed.",
    "explanation": "(3/4)²(1/4)=9/64."
  },
  {
    "id": "Q40",
    "topic": "Probability",
    "level": "Medium",
    "unit": "Poisson Distribution",
    "q": "For X ~ Poisson(3), what is P(X=1)?",
    "options": [
      "e⁻³",
      "3e⁻³",
      "9e⁻³",
      "1−e⁻³"
    ],
    "answer": 1,
    "hint": "Apply the Poisson mass function at k=1.",
    "explanation": "P(X=1)=e⁻³·3¹/1!=3e⁻³."
  },
  {
    "id": "Q41",
    "topic": "Probability",
    "level": "Hard",
    "unit": "Bayes Theorem",
    "q": "Prevalence is 1%, sensitivity 99% and false-positive rate 5%. Approximately what is P(condition | positive)?",
    "options": [
      "0.0198",
      "0.1667",
      "0.5000",
      "0.9520"
    ],
    "answer": 1,
    "hint": "Use numerator 0.01·0.99 and denominator plus 0.99·0.05.",
    "explanation": "Posterior = 0.0099/(0.0099+0.0495)=1/6≈0.1667."
  },
  {
    "id": "Q42",
    "topic": "Probability",
    "level": "Hard",
    "unit": "Independence",
    "q": "P(A)=0.5, P(B)=0.4, P(A∩B)=0.2. Are A and B independent?",
    "options": [
      "Yes",
      "No",
      "Only if A=B",
      "Insufficient information"
    ],
    "answer": 0,
    "hint": "Compare P(A∩B) with P(A)P(B).",
    "explanation": "0.5·0.4=0.2=P(A∩B), which is the condition for independence."
  },
  {
    "id": "Q43",
    "topic": "Probability",
    "level": "Hard",
    "unit": "Poisson Approximation",
    "q": "For X ~ Binomial(1000,0.002), which expression approximates P(X=0)?",
    "options": [
      "e⁻¹",
      "e⁻²",
      "e⁻⁵",
      "1−e⁻²"
    ],
    "answer": 1,
    "hint": "The Poisson approximation has λ=np.",
    "explanation": "λ=1000·0.002=2 and P(Poisson(2)=0)=e⁻²."
  },
  {
    "id": "Q44",
    "topic": "Probability",
    "level": "Hard",
    "unit": "Law of Large Numbers",
    "q": "For independent identically distributed Bernoulli(0.6) trials, what does the law of large numbers imply?",
    "options": [
      "Every sequence is exactly 60% successes",
      "The sample proportion converges in probability to 0.6",
      "Every block of 10 has 6 successes",
      "The proportion must increase every trial"
    ],
    "answer": 1,
    "hint": "The theorem concerns convergence, not an exact finite-sample guarantee.",
    "explanation": "The sample average of independent Bernoulli(0.6) variables converges in probability (indeed almost surely) to 0.6."
  },
  {
    "id": "Q45",
    "topic": "Probability",
    "level": "Hard",
    "unit": "Variance",
    "q": "Independent X ~ Bernoulli(0.3) and Y ~ Bernoulli(0.5): find Var(X+Y).",
    "options": [
      "0.21",
      "0.25",
      "0.46",
      "0.80"
    ],
    "answer": 2,
    "hint": "Variances add for independent random variables.",
    "explanation": "Var(X+Y)=0.3·0.7+0.5·0.5=0.21+0.25=0.46."
  },
  {
    "id": "Q46",
    "topic": "Probability",
    "level": "Hard",
    "unit": "Total Probability",
    "q": "If P(A)=0.6, P(B|A)=0.7, P(B|Aᶜ)=0.2, what is P(B)?",
    "options": [
      "0.42",
      "0.50",
      "0.62",
      "0.90"
    ],
    "answer": 1,
    "hint": "Partition B into B∩A and B∩Aᶜ.",
    "explanation": "P(B)=0.6·0.7+0.4·0.2=0.42+0.08=0.50."
  },
  {
    "id": "Q47",
    "topic": "Probability",
    "level": "Hard",
    "unit": "Binomial Distribution",
    "q": "If X ~ Binomial(5,0.4), what is P(X≥1)?",
    "options": [
      "0.07776",
      "0.40000",
      "0.87040",
      "0.92224"
    ],
    "answer": 3,
    "hint": "Use 1−P(X=0).",
    "explanation": "1−(0.6)⁵=1−0.07776=0.92224."
  },
  {
    "id": "Q48",
    "topic": "Probability",
    "level": "Hard",
    "unit": "Conditional Probability",
    "q": "A bag has 2 red and 3 blue balls. Two are drawn without replacement. Given the first is red, what is P(second is red)?",
    "options": [
      "1/5",
      "1/4",
      "2/5",
      "1/2"
    ],
    "answer": 1,
    "hint": "After drawing one red, four balls remain with one red.",
    "explanation": "P(second red|first red) = 1/4."
  }
];
