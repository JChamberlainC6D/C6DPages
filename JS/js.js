$(function(){
    $('#header').load('header.html');
  });

$(function(){
   $('#footer').load('footer.html');
 });


 function showMenu() {
  var x = document.getElementById("mobile-menu");
  if (x.style.display !== 'block') {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  }
