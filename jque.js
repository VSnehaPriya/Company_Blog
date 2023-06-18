$(document).ready(function() {
  $('#submit').click(function() {
      var valid = true;
      var name=$('#name').val();
      var nameregx=/^[A-Za-z]{3,}$/;
      if($('#name').val()==='') {
          $('#name-error').text("Please enter your name.");
          valid = false;
      } else if(!nameregx.test(name)){
          $('#name-error').text("Name should contain only alphabets and minimum of 3 letters"); 
      }else{
          $('#name-error').text(""); 
      }
      
      var email = $('#email').val();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === '') {
          $('#email-error').text("Please enter your email address.");
          valid = false;
      } else if(!emailRegex.test(email)) {
          $('#email-error').text("Please check your email format must contain @ and ."); 
      }else{
          $('#email-error').text(""); 
      }

      var message = $('#message').val();
      if (message.length <20) {
          $('#message-error').text("Please enter more than 20 characters");
          valid = false;
      } else {
         $('#message-error').text("");  
      } 
      if (valid) {
     
          $('#name').val(''); 
          $('#email').val('');
          $('#message').val('');
          $('#name-error').text(""); 
      }
  });
});