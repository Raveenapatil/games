var quiz = [
  {
    question: "q0.What is the capital of Turkey?",
    answers: ["Istanbul", "Ankara", "Izmir", "Trabzon"],
    correctAnswer: 1
  },
  {
    question: "q1.What is the capital of Turkey?",
    answers: ["Istanbul", "Ankara", "Izmir", "Trabzon"],
    correctAnswer: 1
  }, {
    question: "q2.When was Turkey established?",
    answers: [1923, 1928, 1933, 1934],
    correctAnswer: 0
  }, {
    question: "q3.What is the population of Turkey?",
    answers: ["90 million", "75 million", "100 million", "80 million"],
    correctAnswer: 1
  }, {
    question: "q4.What is the population of Turkey's biggest city, Istanbul?",
    answers: ["18 million", "16 million", "14 million", "7 million"],
    correctAnswer: 2
  }, {
    question: "q5.What is defined in physics as 'a nuclear reaction in which nuclei combine to form more massive nuclei'?",
    answers: ['fission', 'fusion', 'farking', 'fracking', 'freaking'],
    correctAnswer: 1
  }, {
    question: "q6.What is the capital of Australia?",
    answers: ["Melbourne", "Sydney", "Canberra", "Queensland", "Christchurch"],
    correctAnswer: 2
  }, {
    question: "q7.Who is the prime minister of the U.K.?",
    answers: ['Tony Blair', 'David Cameron', 'Nicolas Sarkozy', 'Gordon Brown', 'Sir John Major'],
    correctAnswer: 1
  }, {
    question: "q8.What is the first perfect number?",
    answers: [38, 6, 0, 256, 28],
    correctAnswer: 1
  }, {
    question: "q9.What colors are on the flag of Norway?",
    answers: ["red and blue", "red and white", "red, white, and silver", "red, white, and blue", "blue and gold"],
    correctAnswer: 3
  }, {
    question: "q10.When did the Soviet Union collapse?",
    answers: ["14 February 1989", "1 January 1988", "31 October 1993", "26 April 1986", "26 December 1991"],
    correctAnswer: 4
  }, {
    question: "q11.What is the currency of Switzerland?",
    answers: ["franc", "Euro", "rupee", "won", "dollar"],
    correctAnswer: 0
  }, {
    question: "q12.What is the square root of 256?",
    answers: [24, 25, 30, 26, 22],
    correctAnswer: 0
  }, {
    question: "q13.What are the three main types of rocks?",
    answers: ['igneous, volcanic, quartz', 'sedimentary, igneous, metamorphic', 'feldspar, metamorphic, sedimentary', 'gargantuan, feldspar, quartz', 'None of the above'],
    correctAnswer: 1
  }, {
    question: "q14.What movie did Leonardo DiCaprio win a BAFTA Film Award for?",
    answers: ['Inception', "What's Eating Gilbert Grape", 'The Revenant', 'The Wolf of Wall Street', 'He never got one.'],
    correctAnswer: 2
  }, {
    question: "q15.What movie did Leonardo DiCaprio win a BAFTA Film Award for?",
    answers: ['Inception', "What's Eating Gilbert Grape", 'The Revenant', 'The Wolf of Wall Street', 'He never got one.'],
    correctAnswer: 2
  }, {
    question: "q16.What movie did Leonardo DiCaprio win a BAFTA Film Award for?",
    answers: ['Inception', "What's Eating Gilbert Grape", 'The Revenant', 'The Wolf of Wall Street', 'He never got one.'],
    correctAnswer: 2
  }, {
    question: "q17.What movie did Leonardo DiCaprio win a BAFTA Film Award for?",
    answers: ['Inception', "What's Eating Gilbert Grape", 'The Revenant', 'The Wolf of Wall Street', 'He never got one.'],
    correctAnswer: 2
  }, {
    question: "q18.What movie did Leonardo DiCaprio win a BAFTA Film Award for?",
    answers: ['Inception', "What's Eating Gilbert Grape", 'The Revenant', 'The Wolf of Wall Street', 'He never got one.'],
    correctAnswer: 2
  }, {
    question: "q19.What movie did Leonardo DiCaprio win a BAFTA Film Award for?",
    answers: ['Inception', "What's Eating Gilbert Grape", 'The Revenant', 'The Wolf of Wall Street', 'He never got one.'],
    correctAnswer: 2
  }, {
    question: "q20.What movie did Leonardo DiCaprio win a BAFTA Film Award for?",
    answers: ['Inception', "What's Eating Gilbert Grape", 'The Revenant', 'The Wolf of Wall Street', 'He never got one.'],
    correctAnswer: 2
  }, {
    question: "q21.What movie did Leonardo DiCaprio win a BAFTA Film Award for?",
    answers: ['Inception', "What's Eating Gilbert Grape", 'The Revenant', 'The Wolf of Wall Street', 'He never got one.'],
    correctAnswer: 2

  }

]



$(document).ready(function () {
  $('.bubble').click(function () {
    document.getElementById("overlay").style.display = "block";
    $('.error').hide();
    $(this).css({ "background": "transparent", "border": "2px solid #81d4fa", "pointer-events": "none" }).find("p").css({ "opacity": "1" });
    var audio = document.getElementById("audio");
    audio.play();


    $(".question_card").show();
    var i = $(this).attr("id");
    console.log(i);



    $('.question').text(quiz[i].question);
    $('#radio0').text(quiz[i].answers[0]);
    $('#radio1').text(quiz[i].answers[1]);
    $('#radio2').text(quiz[i].answers[2]);
    $('#radio3').text(quiz[i].answers[3]);
    

    $(".choices").on('click', function() {
      $('.congrats').show();
      $('.choices').css({"pointer-events":"none","opacity":"0.8"});
      var answers = $('input[name = "answers"]:checked').val();
      // alert(answers);
  
     
      var correctAnswer = quiz[i].correctAnswer;
      if (answers == correctAnswer) {
        $('.congrats').text('Right Answer😁👍').css({ "color": "green" });
        $('.error').hide();
      }
      else {
        $('.congrats').text('Wrong Answer☹️').css({ "color": "red" });
        $('.error').hide();
      }
    });

    $('span').on("click", function () {
      if (!$('input[name="answers"]').is(':checked')) {
        $('.error').show();
        $('.error').text("please make a choice");
        return undefined; //stops executing the rest of the code
      }
      $('.choices').css({"pointer-events":"all","opacity":"1"});
      $(".question_card").hide();
      $(".choices").prop("checked", false);
      $('.congrats').hide();
      document.getElementById("overlay").style.display = "none";

      

   
    });


  });

  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

});