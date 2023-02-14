let x = 13;
let fiveMaskEnvelops = Math.floor(x / 5);
let remainingMasks = x % 5;
let threeMaskEnvelops = 0;

for (let i = 0; i < fiveMaskEnvelops; i++) {
  x -= 5;
}

if (x > 0) {
  threeMaskEnvelops = Math.ceil(x / 3);
}

console.log(fiveMaskEnvelops + threeMaskEnvelops); 