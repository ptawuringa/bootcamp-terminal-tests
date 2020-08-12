module.exports = function (registration){
    var regn = registration.split(',');
    console.log(regn);
    var regnumm = [];
    
    for (var i=0;i<regn.length;i++){
        var regnum = regn[i].trim();
          
        if (regnum.startsWith('CJ')){
           
            regnumm.push(regnum);
          console.log(regnumm.length)
        }
     
    };
    return regnumm.length;
    }