function getDateStringGMT9(rawDate){
  return rawDate.getFullYear() + "-" + (rawDate.getMonth() + 1) + "-" + rawDate.getDate() + " " + rawDate.getHours() + ":" + rawDate.getMinutes() + ":" + rawDate.getSeconds()
}

export default getDateStringGMT9