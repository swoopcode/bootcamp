/*
| 조건문 if (n < 10){}else{}
| 선택문 switch(n){case 10:break;}
| 반복문 while(조건식){

}
*/
let text="";
let i=1;
while(i<=10){
  i++;
  console.log(i);
  text += i;
}document.getElementById("demo").innerHTML = text;