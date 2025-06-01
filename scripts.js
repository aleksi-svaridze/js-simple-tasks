let result = 0;

let userPrompt = Number(prompt("Enter number"));

for (let i = 1; i <= 10; i++) {
  result = userPrompt * i;
  console.log(`${userPrompt} x ${i} = ${result}`);
}
