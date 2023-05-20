function validate(){
    var username = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

    checkname(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordconfirm(password,cpassword)
}

function checkname(username){
    if(username.length > 7){
        document.getElementById('name').classList.add('success')
        document.getElementById('name').classList.replace('error', 'success')
        document.getElementById('invalid name').innerHTML = ''
    }else{
        document.getElementById('name').classList.add('error')
        document.getElementById('invalid name').innerHTML = 'character should be greater than 8'
    }
}

function checkemail(email){
    if(email.length > 7 && email.includes('@gmail.com')){
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error', 'success')
        document.getElementById('invalid email').innerHTML = ''
    }else{
        document.getElementById('email').classList.add('error')
        document.getElementById('invalid email').innerHTML = 'Enter Valid Email '
    }
}


function checkpassword(password){
    if(password.length > 7 && password.includes('@') ){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error', 'success')
        document.getElementById('invalid password').innerHTML = ''
    }else{
        document.getElementById('password').classList.add('error')
        document.getElementById('invalid password').innerHTML = 'Enter Valid password '
    }
}

function checkpasswordconfirm(password,cpassword){
    if(password === cpassword && password !='' ){
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error', 'success')
        document.getElementById('invalid cpassword').innerHTML = ''
    }else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('invalid cpassword').innerHTML = 'password do not match'
    }
}





