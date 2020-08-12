module.exports = function yearsAgo(year){
    console.log(year)
      var d = new Date ();
      
      return d.getFullYear() - year;
    }