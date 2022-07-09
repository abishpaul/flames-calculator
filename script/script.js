$(document).ready(function(){
    $('#reset').hide();
    $('button').on("click",function(ev){
    ev.preventDefault();  
      var inputOne = $('.yourName').val();
      var inputTwo = $('.loverName').val();
      var flames = ['Friends','Love','Affair','Marriage','Enemy','Sister'];
      if(inputOne!="" && inputTwo!="")
        {
         
         var lengthInput = inputOne.length+inputTwo.length; 
         //alert(lengthInput);
          while(flames.length != 1)
        {
          flames = flames.splice(lengthInput%6,1);
        }
          change();
          $('span').html("Result:   "+flames);
        }
      else{
        alert("Fill out both the fields");
      }
      function change()
      {
        $('input').hide();
        $('#submit').hide();
        $('#reset').show();
        $('span').show();
      }
      function reset()
      {
        $('input').show();
        $('#submit').show();
        $('span').hide();
        $('#reset').hide();
      }
      $('#reset').on("click",reset);
    });
    
    
    
  });



  