let query = ""
let req = {}
let results = []
let netID = "sys74530"
let pw = "Annie011800!"

employeeDropdown.onshow=function(){
    drpEmployeeState.clear()   
    query = "SELECT state FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user="+netID+ "&pass="+pw+"&database="+netID+"&query="+query)
    
    if (req.status == 200) { 
        results = JSON.parse(req.responseText)  
        let message = ""
        for (i = 0; i < results.length; i++)
            drpEmployeeState.addItem(results[i])
        }
    }

drpEmployeeState.onclick=function(){
        drpEmployeeState.value = drpEmployeeState.selection
        query = "SELECT name FROM customer WHERE state= '"+ drpEmployeeState.selection + "'"
        req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user="+netID+ "&pass="+pw+"&database="+netID+"&query="+query)
    
    if (req.status == 200) { 
        results = JSON.parse(req.responseText)  
        let message = ""
        for (i = 0; i < results.length; i++) {
            txtaEmployeeOutput.value = results
            }
        }
} 