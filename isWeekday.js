module.exports = function (day){
    var dayUppercase = day.toUpperCase();
    return !dayUppercase.startsWith("S");
  }