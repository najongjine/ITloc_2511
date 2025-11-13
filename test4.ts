let a = false;
let b = 0;

let c = true;
let d = 9999;

let str1 = "sss";

/* 어려운 자료형 */
let array1 = [3, 1, 9];

/* python에선 dictionary 라고도 하고 타입스크립트에선
자바스크립트 오브젝트라고도 불리고, 이름은 다양하게 불려요
근데 이름이 중요한게 아니라,  요 자료형이
사람도 쪼금 보기 편하고, 컴퓨터한테도 빠르다.
요걸 어플 만들때 맨날 쓸거에요 */
let jobject1 = { name: "홍길동", age: 20 };

let mix = [
  { name: "홍길동", age: 20 }, // 0
  { name: "이순신", age: 30 }, // 1
];

let jhard1 = {
  name: "홍길동",
  history: {
    job: "야구선수",
    year: "1999",
  },
};
/* 보여주기 */
console.log(`jhard : `, jhard1);
console.log(`jhard.name : `, jhard1.name);
console.log(`jhard.history : `, jhard1.history);
console.log(`jhard.history.year:`, jhard1.history.year);

// 값 수정
jhard1.history.year = "2019";
console.log(`jhard.history.year:`, jhard1.history.year);

/* 대입연산 연습해 봤어요 */

/* 제어 기능 */
// 타입이 문자열이면 숫자를 문자열로 바꿔서 저장해
if (typeof jhard1.history.year == "string") {
  jhard1.history.year = "2019";
} else {
  //@ts-ignore
  jhard1.history.year = 2019;
}

/* if문의 기본 이론 
() 안에 들어갈수 있는건 정해져 있어요
데이터, 수학수식, 함수
if 문 안에 () 는 결국 true, false로 치환되요
*/
let password = "";
/* 수학수식에는 + - * / 
논리연산
 */
//@ts-ignore
if (!password) {
  console.log(`실행 되요. 얘 0 아니에요`);
}
