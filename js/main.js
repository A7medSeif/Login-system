var nameInput = document.getElementById('nameInput')
var emailInput = document.getElementById('emailInput')
var passwordInput = document.getElementById('passwordInput')






var accounts = []












function signUp(){


if(nameVlaidation()==true  &&   emailVlaidation()==true   &&  passwordVlaidation()==true){
    if(emailMatch1()==true){
        
        document.getElementById('success').innerHTML = `<span class="text-danger" >Email already exists</span>`
    }
    else{
            var account = {
                name : nameInput.value,
                email : emailInput.value,
                password : passwordInput.value,
            }
        
        
            accounts.push(account)
        
            localStorage.setItem("accounts" , JSON.stringify(accounts))
        
            clearForm()
            success()
            
        }
    }
else{
    document.getElementById('success').innerHTML = `<span class="text-danger" >all inputs are required</span>`
    }
}





function emailMatch1(){
    for(i=0 ; i<accounts.length ; i++){
        if(accounts[i].email == emailInput.value){
            return true
        }
    }
}



function clearForm(){
    nameInput.value=""
    emailInput.value=""
    passwordInput.value=""

    document.getElementById('nameInput').classList.remove("is-valid")
    document.getElementById('emailInput').classList.remove("is-valid")
    document.getElementById('passwordInput').classList.remove("is-valid")

}

function success(){
    document.getElementById('success').innerHTML = `<span class="text-success" >Success</span>`
}

function nameVlaidation(){
    var regexName = /^[a-z]{3,12}$/

    var name = nameInput.value

    if(regexName.test(name)==true){
        document.getElementById('nameInput').classList.remove("is-invalid")
        document.getElementById('nameInput').classList.add("is-valid")
        return true
    }

    else{
        document.getElementById('nameInput').classList.add("is-invalid")
        document.getElementById('nameInput').classList.remove("is-valid")
        return false
    }
}

function emailVlaidation(){
    var regexEmail = /^[\w]{4,20}@[a-z]{2,8}.com$/

    var email = emailInput.value

    if(regexEmail.test(email)==true){
        document.getElementById('emailInput').classList.remove("is-invalid")
        document.getElementById('emailInput').classList.add("is-valid")
        return true

    }

    else{
        document.getElementById('emailInput').classList.add("is-invalid")
        document.getElementById('emailInput').classList.remove("is-valid")
        return false
    }
}

function passwordVlaidation(){
    var regexPassword = /^[\w]{6,12}$/

    var password = passwordInput.value

    if(regexPassword.test(password)==true){
        document.getElementById('passwordInput').classList.remove("is-invalid")
        document.getElementById('passwordInput').classList.add("is-valid")
        return true

    }   

    else{
        document.getElementById('passwordInput').classList.add("is-invalid")
        document.getElementById('passwordInput').classList.remove("is-valid")
        return false
    }
}















