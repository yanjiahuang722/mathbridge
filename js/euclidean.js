function calculateGCD() {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const output = document.getElementById("output");

  if (!Number.isSafeInteger(a) ||
      !Number.isSafeInteger(b) ||
      a <= 0 || b <= 0) {
    output.textContent =
      "Please enter two positive integers.";
    return;
  }

  let x = a;
  let y = b;
  let steps = [];

  while (y !== 0) {
    const q = Math.floor(x / y);
    const r = x % y;

    steps.push(`${x} = ${q}(${y}) + ${r}`);

    x = y;
    y = r;
  }

  steps.push(`\ngcd(${a}, ${b}) = ${x}`);
  output.textContent = steps.join("\n");
}

document.getElementById("run")
  .addEventListener("click", calculateGCD);

calculateGCD();