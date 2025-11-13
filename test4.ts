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

// mix의 1번째 서랍 출력해 보세요
console.log(`mix[1]: `, mix[1]); // 어려운 데이터
console.log(`$mix[1]: ${mix[1]}`); // 쉬운 데이터
