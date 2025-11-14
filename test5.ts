/* if 문 연습 */
if (true && false && true && true) {
  console.log(` && 연산 결과에요`);
}

if (false || false || false || false || false) {
  console.log(` OR 연산 결과에요`);
}

let a = 1;
let b = 2;

if (a > b) {
  console.log(``);
}
if (a >= b) {
  console.log(`a 는 b보다 크거나 같습니다`);
}
if (a <= b) {
  console.log(`a 는 b 보다 같거나 작습니다`);
}

a = 1;
b = 2;

if (a >= b && b >= a) {
  console.log(`a>=b && b>=a 통과 될까요?`);
}
