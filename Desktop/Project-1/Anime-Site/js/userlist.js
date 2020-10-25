var users = [];

document.addEventListener('DOMContentLoaded', function () {
	users = JSON.parse(localStorage.getItem('allUser'));

	for (let i = 0; i < users.length; i++)
		document.getElementById('customers').innerHTML +=
			"<tr class = 'tableRow'>" + "<td class = 'select'>" + "<input type = 'checkbox' class = 'ch'>" + "</td>" +
			"<td>" + users[i].firstName + "</td>" +
			"<td>" + users[i].lastName + "</td>" +
			"<td class = 'el'>" + users[i].email + "</td>" +
			"<td>" + users[i].phoneNumber + "</td>" + "</tr>";

	for (let j = 0; j < users.length; j++) {
		if (users[j].isBanned == true)
			document.getElementsByClassName('el')[j].style.color = "red";
		else
			document.getElementsByClassName('el')[j].style.color = "green";
	}

	if(localStorage.getItem('keyWord') != null){
		document.getElementById('search').value = localStorage.getItem('keyWord');
		funcSearch();
	}

	document.getElementById('deleteUser').addEventListener('click', funcDel);
	document.getElementById('disableUser').addEventListener('click', funcDisableUser);
	document.getElementById('enableUser').addEventListener('click', funcEnableUser);
	document.getElementById('updateUser').addEventListener('click', funcUpdateUser);
	document.getElementById('searchBtn').addEventListener('click', funcSearch);
})

function funcDel() {

	let ch = document.getElementsByClassName('ch');
	let amount = users.length - 1;

	for (let k = amount; k >= 0; k--)
		if (ch[k].checked == true) {
			users.splice(k, 1);
			let string_users = JSON.stringify(users);
			localStorage.setItem("allUser", string_users);
		}
	location.reload(true);
}

function funcDisableUser() {

	let ch = document.getElementsByClassName('ch');

	for (let i = 0; i < users.length; i++)
		if (ch[i].checked == true) {
			users[i].isBanned = true;
			let string_users = JSON.stringify(users);
			localStorage.setItem("allUser", string_users);
		}
	location.reload(true);
}

function funcEnableUser() {

	let ch = document.getElementsByClassName('ch');

	for (let i = 0; i < users.length; i++)
		if (ch[i].checked == true) {
			users[i].isBanned = false;
			let string_users = JSON.stringify(users);
			localStorage.setItem("allUser", string_users);
		}
	location.reload(true);
}

function funcUpdateUser() {

	let ch = document.getElementsByClassName('ch');
	let counter = 0;
	let needed;

	for (let i = 0; i < users.length; i++)
		if (ch[i].checked == true) {
			counter++;
			needed = i;
		}
	if (counter > 1)
		alert("Please, select only one user ");
	else if (counter == 1) {

		localStorage.setItem("change", needed);
		document.location.href = "../pages/update.html";
	}
 }

 function funcSearch(){

	let word = document.getElementById('search').value;
    $('.tableRow').css('display', 'none');
 	let counter = 0;
 	for (let i = 0; i < users.length; i++){
 		let lowerCaseToCheck = users[i].firstName.toLowerCase();
 		let lowerCaseToCheck1 = users[i].lastName.toLowerCase();
 		let fullName = lowerCaseToCheck + " " + lowerCaseToCheck1 + "                ";
 		let fullName1 = lowerCaseToCheck1 + " " + lowerCaseToCheck + "                 ";
 		let fullName2 = lowerCaseToCheck + lowerCaseToCheck1 + "                 ";
 		let fullName3 = lowerCaseToCheck1 + lowerCaseToCheck + "               ";

 		let wordLowerCase = word.toLowerCase();
 		if (lowerCaseToCheck.indexOf(wordLowerCase) != -1 || lowerCaseToCheck1.indexOf(wordLowerCase) != -1 
 			|| fullName.indexOf(wordLowerCase) != -1 || fullName1.indexOf(wordLowerCase) != -1
 			|| fullName2.indexOf(wordLowerCase) != -1 || fullName3.indexOf(wordLowerCase) != -1){
 			counter++;
 			document.getElementsByClassName('tableRow')[i].style.display = "table-row";
 		}
 	}
 	for (let j = 0; j < users.length; j++) {
		if (users[j].isBanned == true)
			document.getElementsByClassName('el')[j].style.color = "red";
		else
			document.getElementsByClassName('el')[j].style.color = "green";
	}
	localStorage.setItem('keyWord', word);
 }