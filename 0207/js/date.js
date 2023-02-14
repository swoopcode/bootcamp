// const dt = new Date();
// //날짜 관련 메서드
// const nYear=dt.getFullYear();//getYear
// const nMonth=dt.getMonth()+1; //배열 [0,1,2,~11]
// const nDate=dt.getDate();
// console.log(nYear);
// const nHour=dt.getHours();
//분 getMinutes();
//초 getSeconds();
//밀리초(1/000초) getMilliseconds();
//요일
// const nDay=dt.getDay();
// const nDay=dt.getDay();
// console.log(nDay);
// const myDay =["일","월","화","수","목","금","토"];

// let nnDay;
// switch(nDay){
//   case 0:
//       nnDay="일";
//       break;
//   case 1:
//       nnDay="월";
//       break;
//   case 2:
//       nnDay="화";
//       break;
//   case 3:
//       nnDay="수";
//       break;
//   case 4:
//       nnDay="목";
//       break;
//   case 5:
//       nnDay="금";
//       break;
//   case 6:
//       nnDay="토";
//       break;
                    
// }

// if(nDay == 0){

//     nnDay = "일요일";

// }else if(nDay == 1){

//     nnDay = "월요일";
//   }
// else if(nDay == 1){

//     nnDay = "화요일";
//   }
// else if(nDay == 1){

//     nnDay = "수요일";
//   }
// else if(nDay == 1){

//     nnDay = "목요일";
//   }
// else if(nDay == 1){

//     nnDay = "금요일";
//   }
//배열 [0,1,2,3,4,5,6] 일 월 화 수 목 금 토
//2023년 2월 7일 화요일 00시
// console.log(nYear+"년 "+nMonth+"월 "+nDate+"일 "+myDay(nDay)+nHour+"시");
//`${변수명} 문자열 ${변수명}`;
// const nowDate= `오늘은 ${nYear}년 ${nMonth}월 ${nDate}일 ${myDay[nDay]}요일 ${nHour}시`;
// console.log(nowDate);




//생일 요일 구하는
// const birthDay = new Date(1977,10,24); 
// const theMonth = birthDay.getMonth();
// const theDay = birthDay.getDay();
// console.log(`${myDay[theDay]}요일`);

// const olp = new Date(1988,9,17);
// const dateDiff=dt.getTime()-olp.getTime();
// const result=Math.ceil(dateDiff/(1000*60*60*24));
// console.log(result);
// /*
// 1초=1000;
// 1분=1000*60;
// 1시간=1000*60*60*60;
// 1일=1000*60*60*24
// */


// const toDay=new Date();
// const nowYear=toDay.getFullYear();
// const theDate=new Date(nowYear, 11, 31);

// const diffDate=theDate.getTime()-toDay.getTime();//올해 마지막 날에서 오늘을 뺀 값
// const res=Math.ceil(diffDate/(1000*60*60*24))
// console.log(res+"일");
// console.log(`${res}일`);
//NaN -> Not A Number ->

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

// const d = new Date();
// console.log(d); //웹엔 다르게 나옴 Tue Feb 07 2023 12:01:10 GMT+0900 (한국 표준시)


// const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// //7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
// const d = new Date(99, 11, 24); //1999년 12월 24일....1998은 98

// const d = new Date(0); //Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시) 제로 시간
//현재 시간
const dt = new Date();
console.log(dt);
console.log(dt.toString()); //읽을 수 있는 방식으로 전환
//
const nTime=dt.getTime(); //제로 시간으로부터 시간을 숫자로
console.log(nTime);


const d = new Date("03/25/2015"); //  mm/dd/yyyy