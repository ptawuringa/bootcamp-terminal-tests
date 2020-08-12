module.exports = function(listItem,y){
    var list=[]
    for(i=0;i<listItem.length;i++){
      var torch = listItem[i];
      if(torch.qty>y){
      list.push(torch);
      }
    }
      return list
    }