
export default function getType (rawType){
  var resultString = ""
  switch (rawType) {
    case '1' :
      resultString = "연차"; 
      break;

    case '2' :
      resultString = "반차"; 
      break;

    case '3' :
      resultString = "연차"; 
      break;

    case '4' :
      resultString = "월차";  
      break;

    case '5' :
      resultString = "여름 정기휴가"; 
      break;

    default :
      resultString = "겨울 정기휴가";
  }
  return resultString;
}