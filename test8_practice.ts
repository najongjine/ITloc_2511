/*
1~45 까지의 숫자로 nums 를 채워주세요.
수동으로 하지 마시고, forloop 써서 해보세요
 */
let nums: number[] = [];
for (let index = 1; index <= 45; index++) {
  nums.push(index);
}

/* num2 배열에 1~45 중, 랜덤숫자를 push 해주세요.
45개의 1~45 랜덤 숫자인데, 조건은 배열에 중복 데이터가 있으면 안되요 */
let num2: number[] = [1];
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
let randomNum = getRandomInt(45) + 1;
for (let i = 0; i < 45; i++) {
  num2.push(randomNum);
}
console.log(`num2: `, num2);

let foundNum = num2.find((e) => {
  return e == randomNum;
});
// Expected output: 0, 1 or 2
