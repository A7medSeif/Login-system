var name2;
if(  sessionStorage.getItem("names")!= null  ){
    name2 = JSON.parse(sessionStorage.getItem("names"))
}

document.getElementById('greet').innerHTML = `Welcome ${name2}` ;


function logOut(){
    window.location.assign("index.html")
}



