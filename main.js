jQuery(document).ready(function($){
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
          return false;
        }else{
          return true;
        }
      }
const myform = $('#myform');

myform.submit(function(event){
    event.preventDefault();
    const validation = $('#validation');
    const firstname = $('#firstname').val();
    const lastname = $('#lastname').val();
    const email = $('#exampleInputEmail1').val();
    const pass = $('#exampleInputPassword1').val();
    if(!firstname || firstname == ''){
        $('#firstname').parent().find('#validation').html('<span class="error">please enter first name.</span>');
        return;
    }else{
        $('#firstname').parent().find('#validation').html('');
    }

    if(!lastname || lastname == ''){
        $('#lastname').parent().find('#validation').html('<span class="error">please enter last name.</span>');
        return;
    }else{
        $('#lastname').parent().find('#validation').html('');
    }

    if(!email || email == ''){
        $('#exampleInputEmail1').parent().find('#validation').html('<span class="error">please enter email.</span>');
        return;
    }else{
        $('#exampleInputEmail1').parent().find('#validation').html('');
    }

    if(!pass || pass == ''){
        $('#exampleInputPassword1').parent().find('#validation').html('<span class="error">please enter password.</span>');
        return;
    }else{
        $('#exampleInputPassword1').parent().find('#validation').html('');
    }

    if(!IsEmail(email)){
        $('#exampleInputEmail1').parent().find('#validation').html('<span class="error">please enter a valid email.</span>');
        return;
    }else{
        $('#exampleInputEmail1').parent().find('#validation').html('');
        
    }
    console.log(pass.length);
    if(pass.length <= 3   ||  pass.length >= 9){
        $('#exampleInputPassword1').parent().find('#validation').html('<span class="error">password have to at least 4 charecter and not more than 8 charecter.</span>');
        return;
       
    }else{
        $('#exampleInputPassword1').parent().find('#validation').html('');
    }

$('#submited').html('<span class="success">Form submitted successfully.</span>');

  });

});
