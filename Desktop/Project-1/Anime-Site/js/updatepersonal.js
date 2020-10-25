  var users = [];
  actualUser = {};

  document.addEventListener('DOMContentLoaded', function(){
  	var num = localStorage.getItem('upd');
  	users = JSON.parse(localStorage.getItem("allUser"));

  	document.getElementById('password').value = users[num].password;
  	document.getElementById('password1').value = users[num].password;
    document.getElementById('userFirstName').value = users[num].firstName;
    document.getElementById('userLastName').value = users[num].lastName;
    document.getElementById('email').value = users[num].email;
    document.getElementById('phoneNumber').value = users[num].phoneNumber;

  	document.getElementById('updateButton').addEventListener('click', funcUpdateUser);
  })

  function funcUpdateUser(event){
  	event.preventDefault();

  	var numb = localStorage.getItem('upd');
    var isRight = true;
    var text = "";
  
	var fname = document.getElementById('userFirstName').value;
	var checkChar = /[^A-Za-z]/g;
	if (checkChar.test(fname)){  
    	isRight = false;
    	text += "Name must contain only letters" + "\n";
    }
	if(fname.length > 20){
    	document.getElementById('userFirstName').value = fname.slice(0,20);
    	text += "Maximum number of letters allowed in a name: 20" + "\n";
   		isRight = false;
	}
	if(fname.length == 0){
		text += "Name has not been entered" + "\n";
   		isRight = false;
	}

	var lname = document.getElementById('userLastName').value;
	if (checkChar.test(lname)) {
    	isRight = false;
    	text += "Surname must contain only letters" + "\n";
	}
	if(lname.length > 20){
	    document.getElementById('userLastName').value = lname.slice(0,20);
	    text += "Maximum number of letters allowed in a surname: 20" + "\n";
	    isRight = false;
	}
	if(lname.length == 0){
		text += "Surname has not been entered" + "\n";
   		isRight = false;
	}

	var phonenum = document.getElementById('phoneNumber').value;
	if(phonenum == ""){
		text += "Phone number has not been entered" + "\n";
	    isRight = false;
	}
	else{
	var phoneDigit = /\d/g;
	var phoneLetter = /[A-Za-z]/g;
	if (phoneLetter.test(phonenum)){
 		isRight = false;
 		text += "Phone number mustn't contain letters" + "\n";
	}
	else{
	var pnumber = "";
	var phone = phonenum.match(phoneDigit);
	for (let j = 0; j < phone.length; j++)
		pnumber += phone[j];
	if (pnumber.length != 11){
 		isRight = false;
 		text += "Phone number must contain 11 digits" + "\n";
	}
 	if (pnumber[0] != '8') {
 		if(pnumber[0] != '7'){
 			isRight = false;
 			text += "Incorrect phone number (it must start from '8' or '+7')" + "\n";
 		}
 		}}}

	var pass = document.getElementById('password').value;
	var pass1 = document.getElementById('password1').value;
	var checkDigit = /[\d]/g;
	var checkBigLet = /[A-Z]/g;
	var checkLitLet = /[a-z]/g;
	if (!checkDigit.test(pass) || !checkBigLet.test(pass) || !checkLitLet.test(pass)){
    	isRight = false;
    	text += "Password must contain at least 1 uppercase, lowercase and digit " + "\n";
    }
    if (pass != pass1){
    	isRight = false;
    	text += "Passwords aren't the same" + "\n";
    }
    if (pass.length > 20 || pass.length < 6){
    	isRight = false;
    	text += "Password must be longer than 6 characters, but not more than 20" + "\n";
    }

	var emailUser = document.getElementById('email').value;
	var index = emailUser.indexOf('@');
	var checkEmail = "";
	if (index == -1){
	   isRight = false;
	   text += "Email must contain @" + "\n";
	}
	else {
		checkEmail = emailUser.slice(index + 1, emailUser.length);
		if(checkEmail != "gmail.com"){
			if(checkEmail != "mail.ru"){
				if(checkEmail != "yandex.ru"){
					if(checkEmail != "yahoo.com"){
						isRight = false;
						text += "Incorrect email" + "\n";
					}
				}
			}
		}
	}
	for(let k = 0; k < users.length; k++){
	  if(k == numb)
	  	continue;
  	  if(users[k].email == emailUser){
       	 isRight = false;
       	 text += "This email was already taken" + "\n";
  	  }
	}
    

	if(isRight){
	users[numb].firstName = fname;
	users[numb].lastName = lname;
	users[numb].phoneNumber = pnumber;
	users[numb].password = pass;
	users[numb].email = emailUser;

	actualUser.firstName = fname;
	actualUser.lastName = lname;
	actualUser.phoneNumber = pnumber;
	actualUser.password = pass;
	actualUser.email = emailUser;
	var actual_user_string = JSON.stringify(actualUser);
	localStorage.setItem("actUser", actual_user_string);

	var users_string = JSON.stringify(users);
	localStorage.setItem("allUser", users_string);
	location.reload(true);
	}
	else 
		alert(text);
  }