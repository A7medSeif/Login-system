var emailInput2 = document.getElementById('emailInput2')
var passwordInput2 = document.getElementById('passwordInput2')


var name;




if(  localStorage.getItem("accounts") != null  ){
    accounts = JSON.parse(localStorage.getItem("accounts"))
}


console.log(accounts);





function emailMatch(){
    for(i=0 ; i<accounts.length ; i++){
        if(accounts[i].email == emailInput2.value){
            name= accounts[i].name
            sessionStorage.setItem("names" , JSON.stringify(name))
            return true
            
        }
    }

}


function passwordMatch(){
    for(i=0 ; i<accounts.length ; i++){
        if(accounts[i].password == passwordInput2.value){
            return true
        }
    }

}


function signIn(){

    if(emailMatch()==true && passwordMatch()==true){
        window.location.assign("welcome.html")
        greeting(i)
    }
    else{
        document.getElementById('failed').innerHTML =`<span class="text-danger">All inputs is required</span>`
    }


    clearForm()
}



function clearForm(){

    emailInput2.value=""
    passwordInput2.value=""


    document.getElementById('emailInput2').classList.remove("is-valid")
    document.getElementById('passwordInput2').classList.remove("is-valid")

}

