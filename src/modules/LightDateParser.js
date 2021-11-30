export default function getLightDateString(rawDate){
  if (rawDate == null || rawDate == ""){
    console.log("rawDate: ",rawDate)
    return "뭔가 잘못됨";
  }
  return ((rawDate.getHours() > 9)? rawDate.getHours() :  ("0" + rawDate.getHours())) + ":" + 
  ((rawDate.getMinutes() >9)? rawDate.getMinutes() :  ("0" + rawDate.getMinutes())) ;
}
