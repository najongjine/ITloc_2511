/* 
1~20 까지에서, 소수를 primes 배열에 저장하고
출력해 보세요
2 % 2 == 0,  2 % 3 = 2
 */
let num = 20;
let primes: number[] = [];
for (let i = 0; i <= num; i++) {
  for (let j = 0; j < i; j++) {
    if (i % j != 0) {
      primes.push(i);
    }
  }
}
