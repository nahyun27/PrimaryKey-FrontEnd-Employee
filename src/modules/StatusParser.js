
export default function getStatus (rawStatus){
  var resultString = ""
  switch (rawStatus) {
    case '1' :
      resultString = "대기중"; 
      break;

    case '2' :
      resultString = "승인됨"; 
      break;

    case '3' :
      resultString = "거절됨"; 
      break;

    default :
      resultString = "뭔가 잘못됨";
  }
  return resultString;
}