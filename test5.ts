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

if (1 >= 2 && 2 >= 1) {
  console.log(`a>=b && b>=a 통과 될까요?`);
}

let username = "홍길동";
let password = "1234";
if (!username || username != `홍길동` || !password || password != `1234`) {
  console.log(`이거 출력 될까요?`);
}

let score = 75;
if (score >= 90) {
  console.log(`A 학점 입니다`);
} else if (score >= 80) {
  console.log(`B 학점 입니다`);
} else {
  console.log(` C~F 학점 이겠죠`);
}


score =60;

else if( score == 60){
    console.log(`점수가 60이랑 같네요`);
}
