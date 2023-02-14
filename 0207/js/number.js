/*
Math.abs(n); 절대값을 반환
Math.max(1,3,4,5,6,7); 가장 큰 값
Math.min(); 가장 작은 값
Math.pow(숫자, 제곱값); 숫자의 거듭제곱 값을 반환
Math.sqrt(n) 숫자 제곱근
Math.PI 원주율
Math.random() 0과 1사이의 난수
Math.round(n) 소수점 첫째 자리에서 빈올림한 정수
Math.ceil 올림 정수
Math.floor 버림 정수
*/
//1. 
const n1=Math.max(10, 5, 8, 30);
console.log(n1);
//2.
const n2=Math.min(10, 5, 8, 30);
console.log(n2);

const num=2.13215;
//3. 반올림
console.log(Math.round(num));
//4. 소수 첫째자리 버림
console.log(Math.floor(num));
//5. 소수 첫째자리 올림
console.log(Math.ceil(num));
//6. 0-1사이 난수
console.log(Math.random());
//7.원주울 상수
console.log(Math.PI);
//8. 0부터 30사이의 난수
console.log(Math.random()*30);

let user = prompt('가위, 바위, 보 중 하나를 내세요.');
const computer=["가위", "바위", "보"];
let usr;

switch (user){
  case '가위':
    usr=0;
  case '바위':
    usr=1;
  case '보':
    usr=2;
}

console.log(weAre[Math.floor(Math.random()*3)]);

