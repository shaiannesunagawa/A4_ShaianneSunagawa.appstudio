var babyNamesList = ["Olivia", "Emma", "Ava", "Sophia", "Isabella", "Charlotte", "Amelia", "Mia", "Harper", "Evelyn", "Abigail", "Emily", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Aria"]
var chosenNames = []

babyNames.onshow=function(){
    for (i = 0; i < babyNamesList.length; i++) 
    selBabyNames.addItem(babyNamesList[i])
}

btnNextPage.onclick=function(){
    ChangeForm(favBabyNames)
}

btnSubmit.onclick=function(){
    if (chosenNames.length <= 4)
        chosenNames.push(selBabyNames.text)
    else if (chosenNames.length > 4)
        lblErrorMessage.value = 'You are only saving the first five to their favorites list'
        
}
