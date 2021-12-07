
export default function getType (rawType){
  var resultString = ""
  switch (rawType) {
    case '1' :
      resultString = "휴가 요청"; 
      break;

    case '2' :
      resultString = "병가 요청"; 
      break;

    case '3' :
      resultString = "조퇴 요청"; 
      break;

    case '4' :
      resultString = "상담 요청";  
      break;

    case '5' :
      resultString = "퇴근 요청"; 
      break;

    default :
      resultString = "뭔가 잘못됨";
  }
  return resultString;
}