//let str=new String("hello javascript");
// let str="hello javascript";
// 1. charAt(index); -index 번호에 해당하는 문자를 반화
// ex) str="web he she"; str.charAt(2); => b를 반환
// 2. indexOf("찾은 문자"); -찾은 문자의 인덱스를 반환, -1
//    lastIndexOf("찾은 문자");
// ex) str="그는 정말 개쉬키 였습니다.";
// str.indexOf("개쉬키"); -        -6번 반환, <-> -1을 반환
// 3. match("찾을 문자"); - 찾은 문자를 반환 <-> null
// 4. replace("바꿀 문자", "새로운 문자")
// 5. search("찾을 문자"); - 인덱스 번호를 반환
// 6. slice(a,b); - a개의 문자를 자르고 b번째 이후를 자른 후 남은 문자를 반환
// ex) let str="hel/lo j/avascript"; str.slice(3, 7); lo j 만 반환
// 7. substring(a,b); -a인덱스부터 b인덱스 이전 구간 반환, lo j 만 반환, slice 와 같음
// console.log(str.substring(3,7)); //lo j
// console.log(str.substring(3,-3)); //hel
// 8. substr(a,문자개수); -a인덱스부터 지정된 문자 개수 만큼 반환
// console.log(str.substr(3,2)); //lo
// 9. split("문자"); - 지정한 문자를 기준으로 문자 데이터를 나누너 배열에 저장
// 10. (덜 중요) toLowerCase() -윈도우에서 개발 => 리눅스 서비스(대소문 구분하기 때문)
// 11. (덜 중요) toUpperCase()
// 12. length - 문자열 길이
// 13. concat('새로운 문지') -문자열 결합
// 14. charCodeAt(index) -문자열 해당 인덱스의 아스키코드 값을 반환
// 15. fromCharCode(아스키코드 값 -해당 문자를 반환
// 16. trim() -문지 앞 뒤 공백을 제거
const str="Hello Thank you good luck to you";

// 1. 인덱스 16에 저장된 문자를 출력하세요
// let result=str.charAt(16);
// console.log(result); //g
// 2. 문자열 왼쪽부터 제일 먼저 발견되는 you의 인덱스 값을 출력하세요.
// let result=str.indexOf("you");
// console.log(result); //12
// 3. 문자열 인덱스 16이후에 첫 번째로 발견되는 you의 인덱스 값을 출력하세요.
// let result=str.indexOf("you",16);
// console.log(result);  //29
// 4. 문자열 오른쪽부터 왼쪽방향으로 제일 먼저 발견되는 you 인덱스 값.
// let result=str.lastIndexOf("you");
// console.log(result); //29
// 5. 왼쪽부터 첫 번째 발견되는 luck를 찾아 반환
// let result=str.match("luck");
// console.log(result); //  'luck',
//                           index: 21,
//                           input: 'Hello Thank you good luck to you',
//                           groups: undefined
// 6. search로 you를 찾아 인덱스 값 반환
// let result=str.search("you");
// console.log(result); //12
// 7. 문자인덱스 21부터 4글짜를 반환
// let result=str.substr("21, 4");
// console.log(result); 
// 8. 문자 인덱스 6부터 12 이전까지 반환
// console.log(str.substring("6,12"));
// 9. 왼쪽부터 제일 먼저 발견된 you를 me로 바꾸시오.
// let result=str.replace("you", "me");
// console.log(str.replace("you", "me")); //Hello Thank me good luck to you
let t=str.split(" "); //문자열을 공백 기준으로 나누어 t라는 배열로 만듬
let tt= Array(); //공백 배열을 하나 만듬
console.log(t);
for(let i=0; i < t.length; i++){   //t배열의 크기만큼 루프를 돌리면서 you를 me로 바꿈
  tt[i]=t[i].replace("you","me"); //바꾼 변수를 배열 tt에 저장
}
console.log(t.join(" ")); //배열 tt를 공백 기준으로 합침