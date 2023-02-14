switch(site){
  case "구글":
    url="www.google.com";
    console.log("구글로 이동");
  break;
  case "네이버":
    url="www.naver.com";
    console.log("네이버로 이동");
  break;
  case "다음":
    url="www.daum.net";
    console.log("다음으로 이동");
  break;
  case "네이트":
    url="www.nate.com";
    console.log("네이트로 이동");
  break;
  default:
    console.log('보기 중에 없는 사이트');
  
}if(url){
  window.location.href="http://"+url;
}

//window.location.replace("https://www.w3schools.blog");
//window.location.href = "https://www.w3schools.blog";