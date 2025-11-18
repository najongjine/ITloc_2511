/*
함수
- 뭔가 넣어요 (옵션)
- 뭔가 해요 (필수)
- 퉤 뱉어요 (옵션)

함수를 정의할때는 function 이라는 키워드를 써요.
그다음에 함수 이름 지어줘요
() 이건 꼭 해줘야 해요.
{} 이거도 꼭 해줘야 되요. 이 부분을 함수의 몸체라고 해요
 함수를 만들고나면, 그냥 실행이 안되요. 
 꼭 함수이름(); 이거를 해줘야 실행이 되요
 */
// f(x) = x+2
function test1() {
  console.log(`함수 test1 이에요 `);
}

function test2(x: number) {
  console.log(`test2가 전달받은 값은 ${x} 에요`);
}

function test3(name: string, age: number) {
  let msg = `이름은 :${name}, 나이는: ${age}`;
  return msg;
}

//test1();
//test2(5);
let msg = test3(`홍길동`, 20);
console.log(msg);

let array1 = [5, 1, 3, 9, 99];
array1 = array1.sort();
console.log(`array1: `, array1);

/*
지금까지는 
* + / % = 
if()
for()
&& || < >
function()
 */

/* 
add1 이라는 함수를 만들어 주세요.
숫자 2개를 매개변수로 받고, 더한값을 리턴해 주세요
*/
