interface FishType {
  id: number;
  name?: string;
  weight?: number;
}
let fish4: FishType = {
  id: 4,
  name: "매기",
  weight: 25,
};
let fish3: FishType = {
  id: 3,
  name: "잉어",
  weight: 20,
};

let fish1: FishType = {
  id: 1,
  name: "붕어",
  weight: 10,
};
let fish2: FishType = {
  id: 2,
  name: "송어",
  weight: 2,
};

let fish5: FishType = {
  id: 5,
  name: "쏘가리",
  weight: 10,
};
let fishArray = [fish1, fish2, fish3, fish4, fish5];

/**
 @param fishArray: FishType 타입을 배열로 받아요
 @param fishArray 배열에서 제일 큰 물고기 3마리를 리턴해 주세요.
 */
function top3fish(fishArray: FishType[]) {
  fishArray?.sort((a, b) => {
    return (b?.weight ?? 0) - (a?.weight ?? 0);
  });
  let top3fishArray: FishType[] = [];
  for (let index = 0; index < 3; index++) {
    top3fishArray.push(fishArray[index]);
  }
  return top3fishArray;
}

let top3fishArray = top3fish(fishArray);
//console.log(top3fishArray);

let num1 = 1;
let num2 = 2;
function swap(num1: number, num2: number) {
  let temp = num2;
  num2 = num1;
  num1 = temp;
}
// num1, num2 의 결과를 적으시오
swap(num1, num2);
//console.log(`num1: ${num1}, num2: ${num2}`);

let array1 = [1, 2, 3];
function swapArray(myarray: number[]) {
  let temp = array1[1];
  array1[1] = array1[0];
  array1[0] = temp;
}
swapArray(array1);
console.log(array1);
