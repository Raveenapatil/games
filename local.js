$(document).ready(function(){
  
    $(".bubble").click(function(){
      $(".question_card").show();
      $(".question").append("Are you a animal?");
      $(".options_answer").append(`  <input type='radio' id='radio_1' name='type' value='1' />no<br>
      <input type='radio' id='radio_2' name='type' value='2' />YES
      <input type='radio' id='radio_3' name='type' value='3' /> `);

         
    });
    $("#radio_1, #radio_2", "#radio_3").change(function () {
        if ($("#radio_1").is(":checked")) {
            $('.congrats').show();
        }
        else if ($("#radio_2").is(":checked")) {
            $('#div2').show();
        }
        else 
            $('#div3').show();
    });     
    // $(".question_card").click(function(){
    //     $(".question_card").hide();
    //   });
  });

  var answer = $('input[name="answers"]:checked').val();
       

  var correctAnswer = quiz[i].correctAnswer;

    if (answer == correctAnswer) {
      // score++;
            $(".question_card").hide();

  }
  $('span').click(function(){
    
  if (!$('input[name="answers"]').is(':checked')) {
    alert("please make a choice");
    return undefined; //stops executing the rest of the code
}
});

var answer = $('input[name="answers"]:checked').val();
var correctAnswer = quiz[i].correctAnswer;
if (answer === correctAnswer) {
  alert('nice work');
}















$('input[name="answers"]').on("click", function () {
    var answers = $('input[name = "answers"]:checked').val();
    // alert(answers);
    var correctAnswer = quiz[i].correctAnswer;
    // alert(correctAnswer);

    var p= $(this).find(p);23

    if (answers == correctAnswer) {
      $('.congrats').text('hi');
    }
    else {
      $('.congrats').text('hello');
      p.css({"color":"red"});
    }



   



  });



  $('span').on("click", function () {

    if (!$('input[name="answers"]').is(':checked')) {
      alert("please make a choice");
      return undefined; //stops executing the rest of the code
    }
    else {
      $(':radio').each(function () {
        $(this).removeAttr('checked');
        $('input[type="radio"]').prop('checked', false);
      })
      $(".question_card").hide();
      $('.congrats').hide();
    }
  });
  

  $('input[type=radio][name=answers]').on('change', function() {
    switch ($(this).val()) {
      case 'radio_0':
        alert("Allot Thai Gayo Bhai");
        break;
      case 'radio_1':
        alert("Transfer Thai Gayo");
        break;
    }
  });


$('span').click(function () {
  if (!$('input[name="answers"]').is(':checked')) {
    alert("please make a choice");
    return undefined; //stops executing the rest of the code

  }
});

 
$('p[class="correctAnswer"][value=' + i + ']').text(quiz[i].answers[correctAnswer]);
if (answer == quiz[i].correctAnswer)  {
  score++;
} else {
  $('tr[class="row"][name=' + i + ']').css('background', '#FE2E64');
}

   
$("#radio0, #radio1", "#radio2","radio3").change(function () {
  if ($("#radio0").is(":checked")) {
      $('.congrats').show();
  }
  else if ($("#radio_2").is(":checked")) {
      $('#div2').show();
  }
  else 
      $('#div3').show();
});     