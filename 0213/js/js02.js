function myFunc(a, b) {
    console.log("a+b의 값은 " + a+b +"입니다."); //(a+b) 로 바꾸면 숫자로 인식
}
myFunc(10,11);

function myFunc2(a, b) {
    return a+b;
}
const result=myFunc2(10, 3);
console.log(result);

// return으로는 단 한개의 값만 내보낼 수 있다.
// function sub(a, b){
//     let c=a+b;
//     let d=a*b;
//     let e=a%b;
//     return c;
//     return d; //한개만 가능하니 여러개 넣으면 안됨
//     return e;

//     return[c, d, e] //배열로 가능
// }
const arrSubject=["국어","수학", "독일어", "문학", "컴퓨터"];
// 배열 만큼 프롬프트 창을 띄워 값을 받는 함수를 만들어 그 값의 평균을 구하라.
