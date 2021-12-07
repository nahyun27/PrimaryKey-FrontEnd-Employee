export default function getDateStringGMT9(rawDate){
  if (rawDate == null || rawDate == ""){
    console.log("rawDate: ",rawDate)
    return "뭔가 잘못됨";
  }
  return rawDate.getFullYear() + "-" + 
  (((rawDate.getMonth() + 1) > 9)? (rawDate.getMonth() + 1) :  ((rawDate.getMonth()) + 1) )+ "-" + 
  ((rawDate.getDate() > 9)? rawDate.getDate() :  ("0" + rawDate.getDate())) + " " + 
  ((rawDate.getHours() > 9)? rawDate.getHours() :  ("0" + rawDate.getHours())) + ":" + 
  ((rawDate.getMinutes() >9)? rawDate.getMinutes() :  ("0" + rawDate.getMinutes())) + ":" + 
  ((rawDate.getSeconds() >9)? rawDate.getSeconds() :  ("0" + rawDate.getSeconds()));
}
