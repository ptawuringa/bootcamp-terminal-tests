module.exports = function(listItem){
    var ab= 20
    var quantity=[]
    for(var i=0;i<listItem.length;i++){ 
    var items =listItem[i];
      if(items.qty>ab){
        quantity.push(items);
      }
      
     // console.log(items)
    }
  return quantity
     
    
  };
    function findItemsOver(listItem,y){
    var list=[]
    for(i=0;i<listItem.length;i++){
      var torch = listItem[i];
      if(torch.qty>y){
      list.push(torch);
      }
    }
      return list
    }