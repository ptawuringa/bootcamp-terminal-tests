module.exports = function(salesData){
  var depMap = {};
  for(var i=0; i<salesData.length; i++){
    var dep = salesData[i].department;
    if(depMap[dep] === undefined){
      depMap[dep] = 0
       }
    depMap[dep] += salesData[i].sales
}

  var depStr = "";
  var departSales = 0
for( depart in depMap){
if(depMap[depart] > departSales){
  departSales = depMap[depart]; 
   depStr = depart;
  
   }
  
}
  return depStr;
}
  