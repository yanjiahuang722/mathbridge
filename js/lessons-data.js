/* MathBridge 2.0 — editable, original introductory lesson content.
 * To add a lesson, copy an object and choose a unique id. HTML in concept/example
 * is authored by MathBridge (never generated from user input).
 */
'use strict';
window.MATHBRIDGE_LESSONS = [
  {
    id:'nt-divisibility',subject:'Number Theory',title:'Divisibility & the Division Algorithm',minutes:12,level:'Foundations',
    summary:'Define divisibility and learn to express an integer as a quotient and remainder.',
    objectives:['Interpret a ∣ b using an integer multiplier','Apply the division algorithm with a positive divisor','Explain why the remainder is uniquely determined'],
    concept:`<h2>What does it mean to divide?</h2><p>For integers <strong>a</strong> and <strong>b</strong>, where a ≠ 0, we say <strong>a divides b</strong>, written a ∣ b, if b = ak for some integer k. For example, 7 ∣ 42 because 42 = 7 · 6; but 7 ∤ 43.</p><h3>The division algorithm</h3><p>For any integer a and positive integer b, there are <strong>unique</strong> integers q and r such that</p><div class="math-block">a = bq + r,     0 ≤ r &lt; b</div><p>The number q is the quotient; r is the remainder. Notice that this also works for negative dividends if you choose q so that r stays nonnegative.</p><div class="note"><strong>Why uniqueness?</strong> If bq + r = bq′ + r′ with both remainders between 0 and b − 1, then b(q − q′) = r′ − r. The right-hand side has absolute value less than b, so the only multiple of b it can equal is 0.</div>`,
    example:`<h3>Worked example</h3><p>Divide −17 by 5. We need a remainder in {0, 1, 2, 3, 4}.</p><div class="math-block">−17 = 5(−4) + 3
q = −4, r = 3</div><p>Using q = −3 would produce remainder −2, which does <em>not</em> satisfy 0 ≤ r &lt; 5.</p>`,
    mistake:'A negative remainder is not permitted in the standard division algorithm when b > 0.',
    takeaway:'Divisibility means “an exact integer multiple,” while the division algorithm always gives one quotient and one remainder.',
    lab:'./math-lab.html#euclidean',labLabel:'Explore a related algorithm',
    quiz:[
      {prompt:'Which statement is true?',options:['6 ∣ 20','6 ∣ −42','6 ∣ 25','6 ∣ 35'],correct:1,hint:'Look for an integer k with 6k equal to the number.',explanation:'−42 = 6(−7), so 6 ∣ −42.'},
      {prompt:'For a = −17 and b = 5, what is the remainder?',options:['−2','2','3','5'],correct:2,hint:'It must satisfy 0 ≤ r < 5.',explanation:'−17 = 5(−4) + 3, so the remainder is 3.'},
      {prompt:'For positive b, which condition defines a valid remainder?',options:['−b < r ≤ 0','0 ≤ r < b','0 < r ≤ b','r can be any integer'],correct:1,hint:'Zero is allowed, b is not.',explanation:'The division algorithm requires 0 ≤ r < b.'}
    ]
  },
  {
    id:'nt-gcd',subject:'Number Theory',title:'GCD & Euclidean Algorithm',minutes:13,level:'Core',
    summary:'Compute a greatest common divisor using repeated division and justify the method.',
    objectives:['Compute gcd(a, b) efficiently','Explain why gcd(a, b) = gcd(b, r)','Recognize relatively prime integers'],
    concept:`<h2>The greatest common divisor</h2><p>For integers a and b that are not both 0, gcd(a, b) is their greatest positive common divisor. Two integers are <strong>relatively prime</strong> if their GCD is 1.</p><h3>Why the Euclidean algorithm works</h3><p>Whenever a = bq + r, an integer d divides both a and b <em>if and only if</em> it divides both b and r = a − bq. Therefore:</p><div class="math-block">gcd(a, b) = gcd(b, r)</div><p>Replace (a, b) with (b, r), and repeat. The successive nonnegative remainders strictly decrease, so they eventually reach 0.</p><div class="note"><strong>Stopping rule:</strong> The last nonzero remainder is the GCD. For b ≠ 0, gcd(a, 0) = |a|.</div>`,
    example:`<h3>Worked example</h3><p>Find gcd(252, 105):</p><div class="math-block">252 = 2(105) + 42
105 = 2(42) + 21
 42 = 2(21) + 0

gcd(252, 105) = 21</div><p>Because 21 divides both integers, and the common divisors are preserved at every step, 21 is the greatest common divisor.</p>`,
    mistake:'The GCD is the last nonzero remainder, not the final remainder of 0.',takeaway:'Repeated division reduces a large GCD problem to a smaller one without changing its answer.',lab:'./math-lab.html#euclidean',labLabel:'Try the Euclidean calculator',
    quiz:[
      {prompt:'What is gcd(84, 30)?',options:['3','6','12','14'],correct:1,hint:'84 = 2(30) + 24, then 30 = 24 + 6.',explanation:'The remainder sequence is 24, 6, 0; the GCD is 6.'},
      {prompt:'If 37 = 5(7) + 2, gcd(37, 7) equals which GCD?',options:['gcd(5, 2)','gcd(7, 2)','gcd(37, 2)','gcd(7, 5)'],correct:1,hint:'Apply gcd(a,b) = gcd(b,r).',explanation:'gcd(37,7) = gcd(7,2) = 1.'},
      {prompt:'Which pair is relatively prime?',options:['(18, 24)','(21, 35)','(14, 25)','(15, 45)'],correct:2,hint:'Look for a pair with no common prime factor.',explanation:'14 = 2 · 7 and 25 = 5², so gcd(14,25) = 1.'}
    ]
  },
  {
    id:'nt-bezout',subject:'Number Theory',title:'Bézout’s Identity',minutes:15,level:'Core',
    summary:'Trace the Euclidean algorithm backward to express a GCD as a linear combination.',
    objectives:['State Bézout’s identity','Back-substitute to find coefficients','Use the identity to prove divisibility facts'],
    concept:`<h2>The key identity</h2><p>For integers a and b, not both 0, there exist integers x and y satisfying:</p><div class="math-block">ax + by = gcd(a, b)</div><p>Those integers are <strong>Bézout coefficients</strong>. They need not be unique. The extended Euclidean algorithm finds a pair by tracking remainders backward.</p><div class="note"><strong>Useful consequence:</strong> If gcd(a, b) = 1, then ax + by = 1 for some integers x and y. Conversely, if ax + by = 1 for some integers x and y, then gcd(a, b) = 1.</div>`,
    example:`<h3>Worked example</h3><p>Find coefficients for 252 and 105. First run Euclid, then reverse the equations:</p><div class="math-block">21 = 105 − 2(42)
42 = 252 − 2(105)

21 = 105 − 2[252 − 2(105)]
   = −2(252) + 5(105)</div><p>Thus x = −2, y = 5 is one solution. Check: −504 + 525 = 21.</p>`,
    mistake:'Bézout’s coefficients may be negative; neither coefficient has to equal the GCD.',takeaway:'The Euclidean algorithm not only finds a GCD; reversing it explains how to build that GCD from the starting integers.',lab:'./math-lab.html#euclidean',labLabel:'Show Bézout coefficients',
    quiz:[
      {prompt:'Which equation verifies Bézout’s identity for 15 and 6?',options:['15(1) + 6(1) = 21','15(1) + 6(−2) = 3','15(2) + 6(−4) = 6','15(0) + 6(0) = 0'],correct:1,hint:'The right side must equal gcd(15,6).',explanation:'gcd(15,6) = 3, and 15 − 12 = 3.'},
      {prompt:'If 8x + 15y = 1 has integer solutions, what is gcd(8,15)?',options:['1','7','8','15'],correct:0,hint:'Every common divisor divides any integer linear combination.',explanation:'Any common divisor divides 1, hence gcd(8,15) = 1.'},
      {prompt:'Which pair (x, y) satisfies 10x + 6y = gcd(10,6)?',options:['(1, −1)','(−1, 2)','(2, −1)','(1, 1)'],correct:1,hint:'gcd(10,6) = 2.',explanation:'10(−1) + 6(2) = 2.'}
    ]
  },
  {
    id:'nt-primes',subject:'Number Theory',title:'Primes & Unique Factorization',minutes:13,level:'Core',
    summary:'Learn prime factorization, Euclid’s lemma, and why prime products are unique.',
    objectives:['Recognize primes and composites','Factor positive integers into primes','Use prime exponents to find gcd and lcm'],
    concept:`<h2>Prime numbers</h2><p>A prime is an integer p > 1 whose only positive divisors are 1 and p. The number 1 is <strong>not</strong> prime.</p><h3>Fundamental theorem of arithmetic</h3><p>Every integer n > 1 can be written as a product of primes, uniquely up to the order of its factors.</p><div class="math-block">360 = 2³ · 3² · 5</div><p>Euclid’s lemma underpins uniqueness: if prime p divides ab, then p divides a or p divides b.</p><p>Using prime exponents, the GCD takes the <strong>minimum</strong> exponent for each prime, while the LCM takes the <strong>maximum</strong>.</p>`,
    example:`<h3>Worked example</h3><p>Find gcd(84, 90) and lcm(84, 90).</p><div class="math-block">84 = 2² · 3 · 7
90 = 2 · 3² · 5

gcd(84, 90) = 2 · 3 = 6
lcm(84, 90) = 2² · 3² · 5 · 7 = 1260</div><p>Check: gcd(a,b) · lcm(a,b) = |ab| for nonzero a and b.</p>`,
    mistake:'Do not call 1 a prime, and do not forget repeated prime factors (for instance 12 = 2² · 3).',takeaway:'Prime factors act like building blocks for integer arithmetic.',lab:'./math-lab.html#euclidean',labLabel:'Compare with Euclidean GCD',
    quiz:[
      {prompt:'Which number is prime?',options:['1','21','29','39'],correct:2,hint:'Check divisibility by primes up to the square root.',explanation:'29 has no divisor among 2, 3, and 5, so it is prime.'},
      {prompt:'What is the prime factorization of 72?',options:['2³ · 3²','2² · 3³','2³ · 9²','2 · 3⁴'],correct:0,hint:'72 = 8 × 9.',explanation:'72 = 2³ · 3².'},
      {prompt:'What is lcm(12, 18)?',options:['6','24','36','72'],correct:2,hint:'Use the maximum prime exponents.',explanation:'12 = 2² · 3, 18 = 2 · 3², so lcm = 2² · 3² = 36.'}
    ]
  },
  {
    id:'nt-congruences',subject:'Number Theory',title:'Congruences & Modular Arithmetic',minutes:13,level:'Core',
    summary:'Use remainders to work with equivalence classes and modular arithmetic.',
    objectives:['Translate a ≡ b (mod m) into a divisibility statement','Add and multiply congruences','Distinguish valid operations from invalid cancellation'],
    concept:`<h2>Arithmetic with remainders</h2><p>For positive modulus m,</p><div class="math-block">a ≡ b (mod m) ⇔ m ∣ (a − b)</div><p>This is an equivalence relation. You may add, subtract, or multiply congruent numbers without changing their residue classes.</p><div class="math-block">a ≡ b (mod m), c ≡ d (mod m)
⇒ a + c ≡ b + d (mod m)
⇒ ac ≡ bd (mod m)</div><div class="note"><strong>Be careful with division.</strong> You cannot always cancel a common factor. For example 2 · 1 ≡ 2 · 4 (mod 6), but 1 ≢ 4 (mod 6).</div>`,
    example:`<h3>Worked example</h3><p>Find the remainder of 7²⁰ modulo 5.</p><div class="math-block">7 ≡ 2 (mod 5)
2⁴ = 16 ≡ 1 (mod 5)
7²⁰ ≡ (2⁴)⁵ ≡ 1 (mod 5)</div><p>Reducing intermediate expressions prevents huge calculations.</p>`,
    mistake:'Modular congruence is not ordinary equality. Cancellation requires justification (for example, a factor coprime to m).',takeaway:'Reduce numbers modulo m early, but never divide by an arbitrary factor without checking it is invertible.',lab:'./math-lab.html#inverse',labLabel:'Explore modular inverses',
    quiz:[
      {prompt:'Which number is congruent to −2 modulo 7?',options:['3','4','5','6'],correct:2,hint:'Add a multiple of 7 to −2.',explanation:'−2 + 7 = 5, so −2 ≡ 5 (mod 7).'},
      {prompt:'What is 13 × 12 modulo 5?',options:['0','1','2','3'],correct:1,hint:'13 ≡ 3 and 12 ≡ 2 (mod 5).',explanation:'3 · 2 = 6 ≡ 1 (mod 5).'},
      {prompt:'Which step is generally NOT valid modulo 6?',options:['Adding 3 to each side','Multiplying both sides by 2','Cancelling a factor of 2','Subtracting 1 from each side'],correct:2,hint:'Which operation requires an inverse?',explanation:'2 has no inverse modulo 6, so cancelling it need not preserve congruence.'}
    ]
  },
  {
    id:'nt-inverses',subject:'Number Theory',title:'Modular Inverses & Linear Congruences',minutes:16,level:'Applications',
    summary:'Solve ax ≡ b (mod m) and discover when a modular inverse exists.',
    objectives:['Determine if an inverse exists','Compute an inverse with Bézout’s identity','Solve ax ≡ b (mod m) or identify a solvability condition'],
    concept:`<h2>When can we divide modulo m?</h2><p>An inverse of a modulo m > 1 is a number u such that au ≡ 1 (mod m). Such an inverse exists <strong>if and only if gcd(a,m) = 1</strong>.</p><p>If ax + my = 1, then ax ≡ 1 (mod m), so x is an inverse of a. This is how the extended Euclidean algorithm helps.</p><h3>Solving ax ≡ b (mod m)</h3><p>Let d = gcd(a,m). The congruence has a solution exactly when d divides b. If d = 1, multiply by the inverse of a. If d > 1 and d ∣ b, divide a, b, and m by d to obtain a reduced congruence; the original solutions form d distinct residue classes modulo m.</p>`,
    example:`<h3>Worked example</h3><p>Solve 4x ≡ 2 (mod 6). We have d = gcd(4,6) = 2, and 2 divides the right-hand side.</p><div class="math-block">4x ≡ 2 (mod 6)
2x ≡ 1 (mod 3)
2⁻¹ ≡ 2 (mod 3)
x ≡ 2 (mod 3)

Modulo 6: x ≡ 2 or 5 (mod 6)</div>`,
    mistake:'If gcd(a,m) ≠ 1, an inverse does not exist, but ax ≡ b may still have solutions.',takeaway:'A linear congruence is solvable precisely when gcd(a,m) divides b.',lab:'./math-lab.html#inverse',labLabel:'Use the inverse explorer',
    quiz:[
      {prompt:'What is the inverse of 3 modulo 11?',options:['2','4','5','8'],correct:1,hint:'Find u so that 3u leaves remainder 1 on division by 11.',explanation:'3 · 4 = 12 ≡ 1 (mod 11).'},
      {prompt:'Which congruence has NO solution?',options:['4x ≡ 2 (mod 6)','3x ≡ 1 (mod 7)','6x ≡ 5 (mod 9)','5x ≡ 0 (mod 10)'],correct:2,hint:'Test whether gcd(a,m) divides b.',explanation:'gcd(6,9) = 3 does not divide 5.'},
      {prompt:'How many solutions modulo 6 does 4x ≡ 2 (mod 6) have?',options:['0','1','2','6'],correct:2,hint:'gcd(4,6) = 2.',explanation:'The solutions are x ≡ 2 and 5 (mod 6), exactly two residue classes.'}
    ]
  },
  {
    id:'nt-diophantine',subject:'Number Theory',title:'Linear Diophantine Equations',minutes:16,level:'Applications',
    summary:'Find all integer solutions to ax + by = c using GCDs.',
    objectives:['Test whether integer solutions exist','Find one solution by Bézout’s identity','Write the complete integer solution family'],
    concept:`<h2>Equations over the integers</h2><p>A <strong>linear Diophantine equation</strong> asks for integer solutions to ax + by = c.</p><p>When a and b are not both zero, let d = gcd(a,b). Integer solutions exist <strong>if and only if d ∣ c</strong>. If (x₀,y₀) is one solution, then all integer solutions are</p><div class="math-block">x = x₀ + (b/d)t
y = y₀ − (a/d)t
where t ∈ ℤ.</div><p>Why? Subtract two solutions to obtain a(x − x₀) = −b(y − y₀). After dividing by d, the coefficients are coprime, which forces the differences to be multiples of b/d and a/d respectively.</p>`,
    example:`<h3>Worked example</h3><p>Solve 15x + 6y = 9 in integers.</p><div class="math-block">gcd(15, 6) = 3, and 3 ∣ 9.
15(1) + 6(−1) = 9

x = 1 + 2t
y = −1 − 5t,  t ∈ ℤ</div><p>Substitution verifies every solution: 15(1 + 2t) + 6(−1 − 5t) = 9.</p>`,
    mistake:'Finding one integer pair is not the same as finding every solution; include the integer parameter t.',takeaway:'The GCD decides existence; Bézout provides one solution; the parameter formula describes the rest.',lab:'./math-lab.html#euclidean',labLabel:'Find a GCD first',
    quiz:[
      {prompt:'Does 12x + 18y = 5 have integer solutions?',options:['Yes, exactly one','Yes, infinitely many','No','Only if x = 0'],correct:2,hint:'gcd(12,18) = 6.',explanation:'6 does not divide 5, so no integer solutions exist.'},
      {prompt:'One solution to 7x + 3y = 1 is:',options:['(1, −2)','(2, −1)','(−1, 1)','(0, 1)'],correct:0,hint:'Substitute each candidate.',explanation:'7(1) + 3(−2) = 1.'},
      {prompt:'Given 15x + 6y = 9 and (x₀,y₀)=(1,−1), which gives all solutions?',options:['x=1+6t, y=−1−15t','x=1+2t, y=−1−5t','x=1+t, y=−1−t','x=1+5t, y=−1+2t'],correct:1,hint:'d = 3, so b/d = 2 and a/d = 5.',explanation:'The general solution is x = 1 + 2t, y = −1 − 5t.'}
    ]
  },
  {
    id:'nt-crt',subject:'Number Theory',title:'Chinese Remainder Theorem',minutes:16,level:'Applications',
    summary:'Combine compatible modular conditions into one solution class.',
    objectives:['State the CRT for pairwise coprime moduli','Solve two congruences by substitution','Recognize when non-coprime moduli need a compatibility check'],
    concept:`<h2>One number, multiple remainders</h2><p>The <strong>Chinese Remainder Theorem</strong> says that if m₁, …, mₖ are pairwise coprime positive integers, then any system x ≡ aᵢ (mod mᵢ) has exactly one solution modulo M = m₁ ··· mₖ.</p><p>For two moduli, a convenient method is to write x = a₁ + m₁t and substitute into the second congruence.</p><div class="note"><strong>Beyond the coprime case:</strong> x ≡ a (mod m) and x ≡ b (mod n) are simultaneously solvable exactly when gcd(m,n) divides b − a. The resulting solution is unique modulo lcm(m,n).</div>`,
    example:`<h3>Worked example</h3><p>Solve x ≡ 2 (mod 3) and x ≡ 3 (mod 5).</p><div class="math-block">x = 2 + 3t
2 + 3t ≡ 3 (mod 5)
3t ≡ 1 (mod 5)
t ≡ 2 (mod 5)

x = 2 + 3(2) = 8
x ≡ 8 (mod 15)</div><p>Check: 8 leaves remainder 2 mod 3 and 3 mod 5.</p>`,
    mistake:'CRT uniqueness is modulo the product only when the moduli are pairwise coprime.',takeaway:'A collection of remainders can pinpoint one residue class modulo the product of coprime moduli.',lab:'./math-lab.html#inverse',labLabel:'Practice modular inverses',
    quiz:[
      {prompt:'Solve x ≡ 1 (mod 3), x ≡ 2 (mod 5).',options:['x ≡ 7 (mod 15)','x ≡ 11 (mod 15)','x ≡ 8 (mod 15)','x ≡ 13 (mod 15)'],correct:0,hint:'Test 1, 4, 7, 10, 13 against modulo 5.',explanation:'7 ≡ 1 (mod 3) and 7 ≡ 2 (mod 5).'},
      {prompt:'What is the combined modulus for congruences modulo 4 and 9?',options:['13','18','36','72'],correct:2,hint:'4 and 9 are coprime.',explanation:'Their product is 4 × 9 = 36.'},
      {prompt:'Can x ≡ 1 (mod 4) and x ≡ 2 (mod 6) hold simultaneously?',options:['Yes','No','Only for x=2','Only for x=1'],correct:1,hint:'Check gcd(4,6) against 2−1.',explanation:'gcd(4,6) = 2 does not divide 1, so the system is incompatible.'}
    ]
  },
  {
    id:'pr-counting',subject:'Probability',title:'Sample Spaces & Counting',minutes:13,level:'Foundations',
    summary:'Describe outcomes precisely, then count them using permutations and combinations.',
    objectives:['Define a sample space and event','Apply the multiplication principle','Distinguish permutations from combinations'],
    concept:`<h2>Outcomes before probabilities</h2><p>A <strong>sample space</strong> Ω is the set of possible outcomes. An <strong>event</strong> A is a subset of Ω. When Ω is finite and every outcome is equally likely, P(A) = |A| / |Ω|.</p><p>The multiplication principle says a process with r successive choices, having n₁, …, nᵣ possibilities, has n₁ ··· nᵣ total outcomes if every sequence of choices is possible.</p><h3>Order matters—or it doesn't</h3><div class="math-block">Ordered choices without replacement:
P(n,k) = n! / (n−k)!

Unordered choices without replacement:
C(n,k) = n! / [k!(n−k)!]</div><p>A combination ignores order; a permutation records it.</p>`,
    example:`<h3>Worked example</h3><p>From 6 students, pick a 3-person committee. Since the roles are identical, order does not matter:</p><div class="math-block">C(6,3) = (6 · 5 · 4) / (3 · 2 · 1) = 20</div><p>If you instead choose a president, vice president, and secretary, the answer becomes 6 · 5 · 4 = 120.</p>`,
    mistake:'Do not use permutations for an unordered committee, or combinations when positions or ranks are distinct.',takeaway:'Always define the sample space and decide whether order matters before calculating.',lab:'./math-lab.html#binomial',labLabel:'Explore counting in binomial trials',
    quiz:[
      {prompt:'How many outcomes are possible when rolling two distinguishable six-sided dice?',options:['12','21','36','72'],correct:2,hint:'Each die has six outcomes.',explanation:'6 · 6 = 36 ordered pairs.'},
      {prompt:'How many 2-person committees can be chosen from 5 students?',options:['5','10','20','25'],correct:1,hint:'A pair has no ranking.',explanation:'C(5,2) = 5 · 4 / 2 = 10.'},
      {prompt:'From 4 students, choose a president and vice president. How many choices?',options:['6','8','12','16'],correct:2,hint:'The two roles are different.',explanation:'There are 4 choices for president and then 3 for vice president: 12.'}
    ]
  },
  {
    id:'pr-axioms',subject:'Probability',title:'Events & Inclusion–Exclusion',minutes:12,level:'Foundations',
    summary:'Use probability axioms, complements, and overlaps to avoid double-counting.',
    objectives:['Use complement and union rules','Interpret mutually exclusive events','Apply the two-event inclusion–exclusion formula'],
    concept:`<h2>The core probability rules</h2><p>Probability assigns a number to an event. The basic rules include P(A) ≥ 0, P(Ω) = 1, and additivity for disjoint events.</p><div class="math-block">P(Aᶜ) = 1 − P(A)
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</div><p>The term P(A ∩ B) is subtracted because it was counted twice. Events with A ∩ B = ∅ are <strong>mutually exclusive</strong>; then P(A ∪ B) = P(A) + P(B).</p><div class="note"><strong>Different ideas:</strong> Mutually exclusive events cannot occur together. Independent events do not change each other's probabilities. Except in trivial probability-zero cases, these are not the same.</div>`,
    example:`<h3>Worked example</h3><p>A student survey gives P(A) = 0.55 for liking algebra, P(B) = 0.40 for liking probability, and P(A ∩ B) = 0.20 for liking both.</p><div class="math-block">P(A ∪ B) = 0.55 + 0.40 − 0.20 = 0.75
P(neither) = 1 − 0.75 = 0.25</div>`,
    mistake:'Adding P(A) and P(B) without subtracting the overlap overcounts the intersection.',takeaway:'Unions count “A or B or both”; intersections count “A and B.”',lab:'./practice.html',labLabel:'Try practice questions',
    quiz:[
      {prompt:'If P(A)=0.6, P(B)=0.5, P(A∩B)=0.2, what is P(A∪B)?',options:['0.3','0.7','0.9','1.1'],correct:2,hint:'Add the individual probabilities, then subtract their overlap.',explanation:'0.6 + 0.5 − 0.2 = 0.9.'},
      {prompt:'If P(A)=0.28, what is P(Aᶜ)?',options:['0.28','0.72','0.82','1.28'],correct:1,hint:'Use the complement rule.',explanation:'1 − 0.28 = 0.72.'},
      {prompt:'Which statement must hold for mutually exclusive events?',options:['P(A∩B)=0','P(A)=P(B)','P(A∩B)=P(A)P(B)','P(A∪B)=0'],correct:0,hint:'Think of events that cannot occur together.',explanation:'Mutually exclusive events have empty intersection, so their intersection probability is zero.'}
    ]
  },
  {
    id:'pr-conditional',subject:'Probability',title:'Conditional Probability & Independence',minutes:15,level:'Core',
    summary:'Update probabilities when information arrives, and test independence correctly.',
    objectives:['Calculate P(A∣B)','Apply the multiplication rule','Distinguish conditional probability from independence'],
    concept:`<h2>Conditioning changes the sample space</h2><p>If P(B) > 0, the probability of A <em>given</em> B is</p><div class="math-block">P(A∣B) = P(A ∩ B) / P(B)</div><p>Rearranging gives the <strong>multiplication rule</strong>:</p><div class="math-block">P(A ∩ B) = P(A∣B) P(B)</div><p>A and B are <strong>independent</strong> when P(A ∩ B) = P(A)P(B). If P(B) > 0, this is equivalent to P(A∣B) = P(A).</p>`,
    example:`<h3>Worked example</h3><p>Roll a fair six-sided die. Let A = “even” and B = “greater than 3.”</p><div class="math-block">B = {4, 5, 6}
A ∩ B = {4, 6}
P(A∣B) = (2/6) / (3/6) = 2/3</div><p>Since P(A) = 1/2 and P(A∣B) = 2/3, A and B are not independent.</p>`,
    mistake:'P(A∣B) and P(B∣A) are generally different. Always check which event appears after the vertical bar.',takeaway:'Conditioning uses the given event as a new reference set; independence means that the given event does not change the probability.',lab:'./practice.html',labLabel:'Test conditional-probability skills',
    quiz:[
      {prompt:'P(A∩B)=0.12 and P(B)=0.30. Find P(A∣B).',options:['0.04','0.36','0.40','0.60'],correct:2,hint:'Divide the intersection probability by P(B).',explanation:'0.12 / 0.30 = 0.40.'},
      {prompt:'If A and B are independent, P(A)=0.4 and P(B)=0.2, then P(A∩B)=?',options:['0.08','0.2','0.4','0.6'],correct:0,hint:'Use the product rule for independent events.',explanation:'0.4 · 0.2 = 0.08.'},
      {prompt:'Which conclusion follows if P(A∣B)=P(A) and P(B)>0?',options:['A and B are mutually exclusive','A and B are independent','A=B','P(A)=1'],correct:1,hint:'Recall the definition of independence.',explanation:'P(A∣B)=P(A) implies P(A∩B)=P(A)P(B).'}
    ]
  },
  {
    id:'pr-bayes',subject:'Probability',title:'Bayes’ Theorem',minutes:16,level:'Core',
    summary:'Reverse conditional probabilities using prior probabilities and evidence.',
    objectives:['Apply the law of total probability','Use Bayes’ theorem','Interpret a base rate in a testing example'],
    concept:`<h2>How evidence changes beliefs</h2><p>For P(B) > 0, Bayes’ theorem follows from two ways to write P(A ∩ B):</p><div class="math-block">P(A∣B) = P(B∣A)P(A) / P(B)</div><p>When H and Hᶜ cover all cases, the <strong>law of total probability</strong> gives</p><div class="math-block">P(B) = P(B∣H)P(H)
     + P(B∣Hᶜ)P(Hᶜ)</div><p>This denominator matters. A test can have high sensitivity while most positive results come from people without the condition when the condition is rare.</p>`,
    example:`<h3>Worked example</h3><p>Suppose 1% of items are defective. A detector flags 90% of defective items and falsely flags 10% of good items. What fraction of flagged items are truly defective?</p><div class="math-block">P(D) = 0.01,  P(+∣D) = 0.90
P(+∣not D) = 0.10
P(+) = 0.90(0.01) + 0.10(0.99) = 0.108
P(D∣+) = 0.009 / 0.108 = 1/12 ≈ 8.33%</div>`,
    mistake:'Do not substitute P(positive∣defective) for P(defective∣positive). They answer different questions.',takeaway:'Posterior probability reflects both evidence quality and the original base rate.',lab:'./practice.html',labLabel:'Practice probability reasoning',
    quiz:[
      {prompt:'If P(H)=0.2, P(E∣H)=0.8, and P(E)=0.4, find P(H∣E).',options:['0.16','0.25','0.40','0.80'],correct:2,hint:'Multiply likelihood by prior, then divide by evidence.',explanation:'0.8 · 0.2 / 0.4 = 0.4.'},
      {prompt:'Which denominator appears in Bayes’ formula for P(H∣E)?',options:['P(H)','P(E)','P(E∣H)','1−P(H)'],correct:1,hint:'What event is being conditioned on?',explanation:'Bayes’ theorem divides by P(E).'},
      {prompt:'Why can a highly sensitive test still have a low positive predictive value?',options:['Because independent events are mutually exclusive','Because prior prevalence may be very low','Because P(E) must equal 1','Because Bayes’ theorem only applies to fair coins'],correct:1,hint:'Think about the number of healthy people tested.',explanation:'Low prevalence may allow false positives to outnumber true positives.'}
    ]
  },
  {
    id:'pr-random-variables',subject:'Probability',title:'Random Variables & Expectation',minutes:16,level:'Core',
    summary:'Connect outcomes to numerical random variables, means, and variances.',
    objectives:['Define a discrete random variable and PMF','Compute expectation and variance','Apply linearity of expectation'],
    concept:`<h2>Turning outcomes into numbers</h2><p>A random variable X assigns a number to each outcome in the sample space. For a <strong>discrete</strong> X, its probability mass function is p(x) = P(X = x), where p(x) ≥ 0 and Σ p(x) = 1.</p><div class="math-block">E[X] = Σ x · P(X=x)
E[g(X)] = Σ g(x) · P(X=x)
Var(X) = E[(X−E[X])²]
       = E[X²] − (E[X])²</div><p><strong>Linearity:</strong> E[X + Y] = E[X] + E[Y], whether or not X and Y are independent. By contrast, adding variances generally requires zero covariance (independence is sufficient).</p>`,
    example:`<h3>Worked example</h3><p>Let X be the number shown on a fair four-sided die: 1, 2, 3, 4, each with probability 1/4.</p><div class="math-block">E[X] = (1+2+3+4)/4 = 2.5
E[X²] = (1+4+9+16)/4 = 7.5
Var(X) = 7.5 − 2.5² = 1.25</div>`,
    mistake:'E[X²] is not usually equal to (E[X])². Their difference is the variance.',takeaway:'Expectation is a probability-weighted average; variance measures spread around that average.',lab:'./math-lab.html#binomial',labLabel:'See expectation on a distribution',
    quiz:[
      {prompt:'X equals 0 with probability 0.7 and 10 with probability 0.3. Find E[X].',options:['0.3','3','5','7'],correct:1,hint:'Weight each possible value by its probability.',explanation:'E[X] = 0(0.7) + 10(0.3) = 3.'},
      {prompt:'If E[X]=4 and E[X²]=20, what is Var(X)?',options:['2','4','16','24'],correct:1,hint:'Subtract (E[X])².',explanation:'Var(X) = 20 − 4² = 4.'},
      {prompt:'For any integrable X and Y, which relation always holds?',options:['E[X+Y]=E[X]+E[Y]','Var(X+Y)=Var(X)+Var(Y)','E[XY]=E[X]E[Y]','X and Y must be independent'],correct:0,hint:'Only one listed identity requires no independence assumption.',explanation:'Expectation is linear even for dependent variables.'}
    ]
  },
  {
    id:'pr-binomial',subject:'Probability',title:'Bernoulli Trials & Binomial Distribution',minutes:16,level:'Applications',
    summary:'Model the number of successes in independent yes/no trials.',
    objectives:['Recognize a binomial experiment','Calculate binomial probabilities','Interpret mean and variance in a binomial model'],
    concept:`<h2>Counting successes</h2><p>A Bernoulli trial has two outcomes: success (probability p) or failure (probability 1−p). For n <strong>independent, identically distributed</strong> trials, X = number of successes follows the binomial distribution.</p><div class="math-block">X ∼ Binomial(n,p)
P(X=k) = C(n,k) pᵏ (1−p)ⁿ⁻ᵏ
E[X] = np
Var(X) = np(1−p)</div><p>The combination C(n,k) counts which k trials succeed. Each particular success/failure ordering has probability pᵏ(1−p)ⁿ⁻ᵏ.</p>`,
    example:`<h3>Worked example</h3><p>Flip a fair coin 4 times independently. What is the probability of exactly 2 heads?</p><div class="math-block">P(X=2) = C(4,2)(1/2)²(1/2)²
       = 6/16 = 3/8</div><p>Here E[X] = 4(1/2) = 2 and Var(X) = 4(1/2)(1/2) = 1.</p>`,
    mistake:'Not every count is binomial. Check fixed n, independent trials, and constant success probability.',takeaway:'A binomial PMF combines the number of success arrangements with the probability of each arrangement.',lab:'./math-lab.html#binomial',labLabel:'Open the binomial visualizer',
    quiz:[
      {prompt:'What is P(X=2) for X∼Binomial(3, 1/2)?',options:['1/8','1/4','3/8','1/2'],correct:2,hint:'C(3,2)=3.',explanation:'C(3,2)(1/2)²(1/2) = 3/8.'},
      {prompt:'If X∼Binomial(10,0.3), what is E[X]?',options:['0.3','3','7','10'],correct:1,hint:'Use np.',explanation:'10 · 0.3 = 3.'},
      {prompt:'Which setting is NOT binomial in general?',options:['10 independent tosses of the same biased coin','20 independent yes/no trials with p=0.4','Drawing 3 cards without replacement and counting hearts','5 independent fair die rolls and counting sixes'],correct:2,hint:'Does the chance of success stay fixed between draws?',explanation:'Without replacement the trials are dependent and their success probabilities change.'}
    ]
  },
  {
    id:'pr-poisson',subject:'Probability',title:'Poisson Distribution & Approximation',minutes:15,level:'Applications',
    summary:'Model rare events using a rate parameter and approximate binomial counts.',
    objectives:['Compute Poisson probabilities','Recognize mean and variance of a Poisson variable','Use the binomial-to-Poisson approximation'],
    concept:`<h2>Counting occurrences</h2><p>A Poisson random variable X with rate parameter λ > 0 has probability mass function</p><div class="math-block">P(X=k) = e⁻λ λᵏ / k!,   k=0,1,2,...
E[X] = λ,      Var(X) = λ</div><p>When n is large and p is small, X ∼ Binomial(n,p) can often be approximated by a Poisson distribution with λ = np. This is a limit result when n → ∞, p → 0 while np approaches λ.</p><div class="note"><strong>Use with care:</strong> A Poisson approximation is not exact for a finite binomial distribution, and it is most useful for rare events.</div>`,
    example:`<h3>Worked example</h3><p>Suppose calls arrive at an average rate of 2 per minute according to a Poisson model. Find the probability of zero calls in one minute.</p><div class="math-block">X ∼ Poisson(2)
P(X=0) = e⁻² · 2⁰ / 0! = e⁻² ≈ 0.1353</div><p>For a binomial count with n = 200 and p = 0.01, λ = np = 2, so Poisson(2) is a useful approximation.</p>`,
    mistake:'A Poisson rate is λ = np for binomial approximation—not n/p or p/n.',takeaway:'The single parameter λ controls both the mean and the variance of a Poisson count.',lab:'./math-lab.html#binomial',labLabel:'Compare with the binomial explorer',
    quiz:[
      {prompt:'For X∼Poisson(3), E[X] equals:',options:['1/3','√3','3','9'],correct:2,hint:'For Poisson, the expectation equals the rate.',explanation:'E[X] = λ = 3.'},
      {prompt:'For Binomial(500,0.004), the Poisson approximation parameter is:',options:['0.004','2','4','125000'],correct:1,hint:'Multiply n by p.',explanation:'λ = 500 × 0.004 = 2.'},
      {prompt:'For X∼Poisson(λ), P(X=0) is:',options:['0','e⁻λ','λ','1−e⁻λ'],correct:1,hint:'Set k = 0 in the PMF.',explanation:'e⁻λ λ⁰ / 0! = e⁻λ.'}
    ]
  },
  {
    id:'pr-lln',subject:'Probability',title:'Law of Large Numbers',minutes:15,level:'Applications',
    summary:'Understand why repeated observations stabilize around their expected value.',
    objectives:['State a weak law for i.i.d. variables with finite variance','Distinguish sample average from single outcome','Avoid the gambler’s fallacy'],
    concept:`<h2>What averaging accomplishes</h2><p>Let X₁, X₂, … be independent and identically distributed variables with mean μ and finite variance σ². Their sample average is</p><div class="math-block">X̄ₙ = (X₁ + ··· + Xₙ)/n</div><p>Then E[X̄ₙ] = μ and Var(X̄ₙ) = σ²/n. Chebyshev’s inequality gives for any ε > 0:</p><div class="math-block">P(|X̄ₙ − μ| ≥ ε) ≤ σ²/(nε²)</div><p>As n grows, this bound approaches 0. This establishes the <strong>weak law of large numbers</strong> for this setting: the sample average converges in probability to μ.</p>`,
    example:`<h3>Worked example</h3><p>Flip independent fair coins and let Xᵢ = 1 for heads, 0 for tails. The proportion of heads is X̄ₙ.</p><div class="math-block">E[Xᵢ] = 1/2,   Var(Xᵢ) = 1/4
E[X̄ₙ] = 1/2
Var(X̄ₙ) = 1/(4n)</div><p>For n = 100, Var(X̄ₙ) = 0.0025. The proportion becomes less variable as n increases, even though the next flip remains fair.</p>`,
    mistake:'The law does NOT imply that after many heads a tail is “due.” Each independent coin flip still has probability 1/2 of heads.',takeaway:'Averages stabilize with many independent observations; individual outcomes remain unpredictable.',lab:'./math-lab.html#binomial',labLabel:'Experiment with repeated trials',
    quiz:[
      {prompt:'If i.i.d. observations have variance 9, what is the variance of the average of 9 observations?',options:['1','3','9','81'],correct:0,hint:'Var(X̄ₙ) = σ²/n.',explanation:'9 / 9 = 1.'},
      {prompt:'After 10 consecutive heads from a fair coin, what is the probability of heads next?',options:['0','1/4','1/2','Greater than 1/2'],correct:2,hint:'The flips are independent.',explanation:'Past independent outcomes do not change the next flip: probability 1/2.'},
      {prompt:'What does the weak LLN describe?',options:['Every outcome eventually equals μ','Sample averages converge in probability to μ','The variance of each Xᵢ goes to zero','Rare events become impossible'],correct:1,hint:'The law concerns averages.',explanation:'For every ε > 0, P(|X̄ₙ−μ|>ε) tends to 0.'}
    ]
  }
];
