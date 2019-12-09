$(document).ready(function(){
  //toggle at design,development and product mgmt
  $(".toggle1").click(function(){
    $(".image1").toggle();
    $(".design").toggle();
  });
  $(".toggle2").click(function(){
    $(".image2").toggle();
    $(".development").toggle();
  });
  $(".toggle3").click(function(){
    $(".image3").toggle();
    $(".product_mgmt").toggle();
  });

  //display white box on hover
  $(".project").hover(function(){
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'1'});
  });

  $(".button").click(function(event){    
    
    var name = document.getElementById('mce-NAME').value;
    var email = document.getElementById('mce-EMAIL').value;
    var message = document.getElementById('mce-MESSAGE').value;
    if(name == ""){
      alert("Please fill the name field");
      name.focus();
      return false;
    }
    if(email == ""){
      alert("Please fill the email field");
      email.focus();
      return false;
    }
    if(message == ""){
      alert("Please fill the message field");
      message.focus();
      return false;
    }
    alert(name +", we have received your message. Thank you for contacting us.");
  });
  $(".refresh").click(function(event){
    $('form').each(function(){
      this.reset();
    });
  });
});


