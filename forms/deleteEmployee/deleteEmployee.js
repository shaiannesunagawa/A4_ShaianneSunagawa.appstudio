btnShowEmployee.onclick=function(){
    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user="+netID+ "&pass="+pw+"&database="+netID+"&query="+query)
    if (req.status == 200) { 
        results = JSON.parse(req.responseText)  
        for (i = 0; i < results.length; i++)
            selEmployee.addItem(results[i])
        }
}


selEmployee.onchange=function(){
    let employeeDel = selEmployee.text
    let found = ''
    for (i = 0; i < results.length; i++) {
        if (employeeDel == results[i]){
            found = true
            break 
        }
    }
    if (found == false) 
       lblMessage.value = "That customer is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = '" + employeeDel + "'"    
      console.log(query)
       req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user="+netID+ "&pass="+pw+"&database="+netID+"&query="+query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    
                lblMessage.value = `You have successfully deleted the pet named ${employeeDel}`
            else
                lblMessage.value = `There was a problem deleting ${employeeDel} from the database.`
      else
        lblMessage.value = `Error: ${req.status}`
    } 
}

btnRefresh.onclick=function(){
    selEmployee.clear()
    query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user="+netID+ "&pass="+pw+"&database="+netID+"&query="+query)
    if (req.status == 200) { 
        results = JSON.parse(req.responseText)  
        for (i = 0; i < results.length; i++)
            selEmployee.addItem(results[i])
        }
}
