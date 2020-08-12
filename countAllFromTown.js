module.exports = function (registrationstr,town){
    var regarry= registrationstr.split(',');
      var arylast = [];
      
      for(var i =0;i<regarry.length;i++){
        //var arylast=regarry[i].trim();
      if(regarry[i].trim().startsWith(town)){
        arylast.push(regarry);
      }
      }
      return arylast.length
    }