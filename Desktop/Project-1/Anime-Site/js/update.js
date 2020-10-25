   var users = [];

   document.addEventListener('DOMContentLoaded', function(){
	users = JSON.parse(localStorage.getItem('allUser'));
    var neededNumber = localStorage.getItem('change');
  
    document.getElementById('upuserFirstName').value = users[neededNumber].firstName;
    document.getElementById('upuserLastName').value = users[neededNumber].lastName;
    document.getElementById('upemail').value = users[neededNumber].email;
    document.getElementById('upphoneNumber').value = users[neededNumber].phoneNumber;
    
    document.getElementById('updateUs').addEventListener('click', funcUpdateExactUser);
 })

  function funcUpdateExactUser(event){
  	event.preventDefault();

    let neededNumber = localStorage.getItem('change');
    var isRight = true;
    var text = "";
  
	var fname = document.getElementById('upuserFirstName').value;
	var checkChar = /[^A-Za-z]/g;
	if (checkChar.test(fname)){  
    	isRight = false;
    	text += "Name must contain only letters" + "\n";
    }
	if(fname.length > 20){
    	document.getElementById('upuserFirstName').value = fname.slice(0,20);
    	text += "Maximum number of letters allowed in a name: 20" + "\n";
   		isRight = false;
	}
	if(fname.length == 0){
		text += "Name has not been entered" + "\n";
   		isRight = false;
	}

	var lname = document.getElementById('upuserLastName').value;
	if (checkChar.test(lname)) {
    	isRight = false;
    	text += "Surname must contain only letters" + "\n";
	}
	if(lname.length > 20){
	    document.getElementById('upuserLastName').value = lname.slice(0,20);
	    text += "Maximum number of letters allowed in a surname: 20" + "\n";
	    isRight = false;
	}
	if(lname.length == 0){
		text += "Surname has not been entered" + "\n";
   		isRight = false;
	}

	var phonenum = document.getElementById('upphoneNumber').value;
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
 		}}

	var emailUser = document.getElementById('upemail').value;
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
	  if(k == neededNumber)
	  	continue;
  	  if(users[k].email == emailUser){
        	isRight = false;
        	text += "This email was already taken" + "\n";
    	}}}
    

	if(isRight){
	users[neededNumber].firstName = fname;
	users[neededNumber].lastName = lname;
	users[neededNumber].phoneNumber = pnumber;
	users[neededNumber].email = emailUser;

	var users_string = JSON.stringify(users);
	localStorage.setItem("allUser", users_string);
	location.reload();
	}
	else 
		alert(text);
  }