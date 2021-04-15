function validation(){
    var username = document.getElementById('name').Value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var passwoed = document.getElementById('psw').value;
    var cpasswoed = document.getElementById('cpsw').value;

    var namecheck = /^[A-Za-z]{2,40}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,80}@{1}[A-Za-z0-9]{2,30}[.]{1}[A-Za-z.]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwoedcheck = /^(?=.*[0-9])(?=[.@#$%^&*])[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    if (namecheck.test(username)){
        document.getElementsById('errorname').innerHTML= "";
    }
    else{
        document.getElementById('errorname').innerHTML = "**Invalid Name";
        return false;
    }
}