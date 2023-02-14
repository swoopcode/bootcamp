// let intNum=10;
// console.log(typeof intNum);
// let intNum1=10.99;
// console.log(intNum1);

// let str='string';
// console.log(typeof str);
// let str1="string";
// console.log(str1);
// let str2="string'string'string";
// console.log(str2);

// let a=10===10
// typeof a
// console.log(a);
// let b=undefined
// console.log(b);
// let c=null
// console.log(c);

// let arrayMember = ["t=0", "u=1", "o=2"]
// console.log(arrayMember[0]);
// console.log(arrayMember[1]);
// console.log(arrayMember[2]);

// //객체 리터럴 방식으로 str 객체 생성
// let str3 = {
//   name:'X',
//   age:20,
//   gender:"male"
// }
// console.log(typeof str3);
// console.log(str3.gender);
// console.dir(str3['name'])

// str.gender="female";
// console.log(str3.gender);

// str.major="unemployed"
// console.log(str3.major);

// function mFuction(x, y) {
//  console.log(x*y); 
// }

// function mFuction(x, y) {
//   return x*y; 
//  }
//  mFuction(10,4);

//  let result = function mFuction(x, y) {
//   return x*y; 
//  }
//  console.log(result());

const person={
  firstName:"철수",
  lastName:"안",
  age:60,
  fullName:function () {
    return this.lastName + " " + this.firstName
    }
}
const result="나이는 " + person.age + "이며 이름은 " + person.fullName() + "입니다.";
console.log(result);

//car 라는 객체를 만들고
// | 회사명: 포르쉐 자동차명:718 승차인원:1명
// | 메소드 자동차가 출발합니다. 함수로 만들어서
// |
// | 출력문=> 포르쉐의 718 모델 자동차가 출발합니다.
