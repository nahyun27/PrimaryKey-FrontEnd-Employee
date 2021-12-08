export default function getDept (rawType){
  var resultString = ""
  switch (rawType) {
    case 1 :
      resultString = "기획집행부"; 
      break;

    case 2 :
      resultString = "총무부"; 
      break;

    case 3 :
      resultString = "마케팅부"; 
      break;

    case 4 :
      resultString = "시설관리부";  
      break;

    case 5 :
      resultString = "인사 담당"; 
      break;

    default :
      resultString = "뭔가 잘못됨";
  }
  return resultString;
}


