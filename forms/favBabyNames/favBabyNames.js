
favBabyNames.onshow=function(){
    drpNames.clear()   
    for (i = 0; i < chosenNames.length; i++) 
        drpNames.addItem(chosenNames[i])
}

drpNames.onclick=function(s){
  if (typeof(s) == "object")   
      return                    
    else {
        drpNames.value = s
        lblFavNameMessage.value = `Your favorite baby name is ${s} `
        imgBaby.show()
    }

}
