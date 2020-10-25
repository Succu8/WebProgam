  var users = [];
  var actual_user_string;
  var actualUser = {};
  var users_string;
  var usComm = [];
 
  document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem("actUser") != null && localStorage.getItem("actUser") != 'null'){
        document.getElementById('div1').setAttribute("style", "display:none");
        document.getElementById('div2').setAttribute("style", "display:visible");
    
    actualUser = JSON.parse(localStorage.getItem("actUser"));
    document.getElementById('login').innerText = actualUser.firstName;
 }
  else {
    document.getElementById('div1').setAttribute("style", "display:visible");
    document.getElementById('div2').setAttribute("style", "display:none");
  } 

  if (localStorage.getItem('allUser') != null)
     users = JSON.parse(localStorage.getItem('allUser'));

  else {
        users = [
  {
    firstName: "admin",
    lastName: "admin",
    phoneNumber: "87771234678",
    password: "admin2020",
    email: "admin",
    isBanned: false
  }];
     users_string = JSON.stringify(users);
     localStorage.setItem("allUser", users_string);
  }
  // div 1 ---------------------------------------------------------------------------------------------------------------------
  $('#dv1').click(function(){
        document.location.href = "../Project3/pages/items/n1.html";
  });
  $('#dv1').mouseover(function(){
       $(this).css('cursor', 'pointer');
  });

  // div 2 ---------------------------------------------------------------------------------------------------------------------
  $('#dv2').click(function(){
        document.location.href = "../Project3/pages/items/n2.html";
  });
  $('#dv2').mouseover(function(){
        $(this).css('cursor', 'pointer');
  });

  // div 3 ---------------------------------------------------------------------------------------------------------------------
  $('#dv3').click(function(){
        document.location.href = "../Project3/pages/items/n3.html";
  });
  $('#dv3').mouseover(function(){
        $(this).css('cursor', 'pointer');
  });

  // div 4 ---------------------------------------------------------------------------------------------------------------------
  $('#dv4').click(function(){
        document.location.href = "../Project3/pages/items/n4.html";
  });
  $('#dv4').mouseover(function(){
        $(this).css('cursor', 'pointer');
  });

  // div 5 ---------------------------------------------------------------------------------------------------------------------
  $('#dv5').click(function(){
        document.location.href = "../Project3/pages/items/n6.html";
  });
  $('#dv5').mouseover(function(){
        $(this).css('cursor', 'pointer');
  });

  // div 6 ---------------------------------------------------------------------------------------------------------------------
  $('#dv6').click(function(){
        document.location.href = "../Project3/pages/items/n5.html";
  });
  $('#dv6').mouseover(function(){
        $(this).css('cursor', 'pointer');
  });

  // div 7 ---------------------------------------------------------------------------------------------------------------------
  $('#dv7').click(function(){
        document.location.href = "../Project3/pages/items/n7.html";
  });
  $('#dv7').mouseover(function(){
        $(this).css('cursor', 'pointer');
  });

  // div 8 ---------------------------------------------------------------------------------------------------------------------
  $('#dv8').click(function(){
        document.location.href = "../Project3/pages/items/n8.html";
  });
  $('#dv8').mouseover(function(){
       $(this).css('cursor', 'pointer');
  });

  // div 9 ---------------------------------------------------------------------------------------------------------------------
  $('#dv9').click(function(){
        document.location.href = "../Project3/pages/items/n9.html";
  });
  $('#dv9').mouseover(function(){
        $(this).css('cursor', 'pointer');
  });

  // div 10 ---------------------------------------------------------------------------------------------------------------------
  $('#dv10').click(function(){
        document.location.href = "../Project3/pages/items/n10.html";
  });
  $('#dv10').mouseover(function(){
       $(this).css('cursor', 'pointer');
  });

  // div 11 ---------------------------------------------------------------------------------------------------------------------
  $('#dv11').click(function(){
        document.location.href = "../Project3/pages/items/n11.html";
  });
  $('#dv11').mouseover(function(){
        $(this).css('cursor', 'pointer');
  });

  // div 12 ---------------------------------------------------------------------------------------------------------------------
  $('#dv12').click(function(){
        document.location.href = "../Project3/pages/items/n12.html";
  });
   $('#dv12').mouseover(function(){
        $(this).css('cursor', 'pointer');
  });

  // div 13 ---------------------------------------------------------------------------------------------------------------------
  $('#dv13').click(function(){
        document.location.href = "../Project3/pages/items/n13.html";
  });
  $('#dv13').mouseover(function(){
        $(this).css('cursor', 'pointer');
  });

  // div 14 ---------------------------------------------------------------------------------------------------------------------
  $('#dv14').click(function(){
        document.location.href = "../Project3/pages/items/n14.html";
  });
  $('#dv14').mouseover(function(){
        $(this).css('cursor', 'pointer');
  });

  // div 15 ---------------------------------------------------------------------------------------------------------------------
  $('#dv15').click(function(){
        document.location.href = "../Project3/pages/items/n15.html";
  });
  $('#dv15').mouseover(function(){
        $(this).css('cursor', 'pointer');
  });
  
  $('#latest').css('cursor', 'pointer');
  $('.updatess').css('cursor', 'pointer');
  $('.updatess').click(function(){
     $([document.documentElement, document.body]).animate({
        scrollTop: $("#bbb").offset().top
    }, 800);
  });

  document.getElementById('logbutton').addEventListener('click', funcLog);
  document.getElementById('logout').addEventListener('click', funcDisLog);
  document.getElementById('enterComment').addEventListener('click', funcEnterComment);
  document.getElementById('latest').addEventListener('click', funcUpdateUser);
  });

  function funcLog(event){
  event.preventDefault();
  var counter = 0;
  var checkName = document.getElementById('emaillogin').value;
    var checkPass = document.getElementById('passwordlogin').value; 
    if (checkName == users[0].email && checkPass == users[0].password){
       document.location.href = "../Project3/pages/adminpage.html";
    }
    else{
     for (let i = 0; i < users.length; i++){
        if (users[i].email == checkName){
            if(users[i].password == checkPass){
                if(users[i].isBanned != true){
                    actualUser.firstName = users[i].firstName;
                    actualUser.lastName = users[i].lastName;
                    actualUser.phoneNumber = users[i].phoneNumber;
                    actualUser.password = users[i].password;
                    actualUser.email = users[i].email;
                    actual_user_string = JSON.stringify(actualUser);
                    localStorage.setItem("actUser", actual_user_string);
      
                    location.reload(true);     
            }
            else
                document.location.href = "../Project3/pages/dis.html";
            }
            else 
               alert("Wrong password");
       }
       else 
       	counter++;  
     }
     	if(counter == users.length){
     		if( confirm('Account with this email is not registered.' + "\n" + "Do you want to create an account?") ){
     			localStorage.setItem('newAcc', checkName);
				document.location.href = "../Project3/pages/registration.html";
     		}
     	}
   }}

  function funcDisLog(){
    localStorage.setItem('actUser', null);
    location.reload(true); 
  }
  
  function funcEnterComment(){
    if(localStorage.getItem('comments') != null){
        usComm = JSON.parse(localStorage.getItem('comments'));
    }
    
    var suggestUser = document.getElementById('suggestUser').value;
    var userComment = {};
    if (suggestUser){
        let name = actualUser.firstName;
        let lastname = actualUser.lastName;
        let comment = suggestUser;

        userComment.firstName = name;
        userComment.lastName = lastname;
        userComment.comment = comment;
        usComm.push(userComment);

        let string_comm = JSON.stringify(usComm);
        localStorage.setItem("comments", string_comm);

        location.reload(true);
    }
  }

  function funcUpdateUser(){
    var number;
    for (let i = 0; i < users.length; i++)
      if(users[i].email == actualUser.email)
        number = i;

      localStorage.setItem('upd', number);

      document.location.href = "../Project3/pages/updatepersonal.html";
  }
