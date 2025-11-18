interface FishType {
  id: number;
  name?: string;
  weight?: number;
}

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
let fish3: FishType = {
  id: 3,
  name: "잉어",
  weight: 20,
};
let fish4: FishType = {
  id: 4,
  name: "매기",
  weight: 25,
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
function top3fish(fishArray: FishType[]) {}
