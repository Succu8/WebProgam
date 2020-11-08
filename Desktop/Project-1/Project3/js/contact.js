  var comments = [];
  document.addEventListener('DOMContentLoaded', function(){
        
        if (localStorage.getItem('comments') != null){
          comments = JSON.parse(localStorage.getItem('comments'));
        
      for(let i = 0; i < comments.length; i++)
        document.getElementById('tableUser').innerHTML +=
        "<tr>" + "<td class = 'nin'>" + "<i class = 'fas fa-user-ninja'>" + "</i>" + "</td>" +
        "<td>" + comments[i].firstName + "</td>" + 
        "<td>" + comments[i].lastName + "</td>" + 
        "<td>" + comments[i].comment + "</td>" ; 
    }
  })
