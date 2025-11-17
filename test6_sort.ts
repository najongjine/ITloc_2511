/* 정렬 */
let nums = [1, 3, 5, 5, 3, 2, 45, 67, 6, 4543, 4, 34, 55, 65, 53, 34, 23];

/* +-* % / ...
if()
for()
&& > < ||
 */
for (let i = 0; i < nums.length; i++) {
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] > nums[k + 1]) {
      let temp = nums[k];
      nums[k] = nums[k + 1];
      nums[k + 1] = temp;
    }
  }
}

console.log(`nums: `, nums);
