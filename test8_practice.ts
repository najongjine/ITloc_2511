/*
1~45 까지의 숫자로 nums 를 채워주세요.
수동으로 하지 마시고, forloop 써서 해보세요
 */
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
let nums: number[] = [];
for (let index = 1; index <= 45; index++) {
  nums.push(index);
}

for (let i = 0; i < 45; i++) {
  let randIndex = getRandomInt(45);
  let temp = nums[randIndex];
  nums[i] = nums[randIndex];
  nums[randIndex] = temp;
}
console.log(`nums: `, nums);

/* num2 배열에 1~45 중, 랜덤숫자를 push 해주세요.
45개의 1~45 랜덤 숫자인데, 조건은 배열에 중복 데이터가 있으면 안되요 */
let num2: number[] = [];

for (; num2.length < 45; ) {
  let randomNum = getRandomInt(45) + 1;
  let foundNum = num2.find((e) => {
    return e == randomNum;
  });
  if (!foundNum) {
    num2.push(randomNum);
  }
}
//console.log(`num2: `, num2.length);

// Expected output: 0, 1 or 2
