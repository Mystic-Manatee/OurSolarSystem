var amtQuestions = 10; //the number of questions in the quiz 
function quiz(){
    var answers = []; //storage for the correct answers
    percentAnswers = 0;
    //loops through each question and checks if the radio button that is checked is correct
    for (var i = 1; i < amtQuestions + 1; i++){
        var x = document.getElementsByName('question'+i);
        for (var j = 0; j < x.length; j++){
          var radio = x[j];
          //console.log(radio);
          if (radio.value == "correct" && radio.checked){
            answers.push("question "+i+" is correct");
            percentAnswers++;
            break;}
          else if (radio.value == "wrong" && radio.checked){
            answers.push("question "+i+" is incorrect");
      }
    }
  }
  showAnswers(answers, percentAnswers);
}

//loop picks up all the correct answers and writes them into a string to replace the quiz with its results, the quiz is then replaced.
function showAnswers(x, y){
    var result = "";
    for (var i = 0; i < amtQuestions; i++){
         var j = i+1;
            if(x[i] == "question "+j+" is correct"){
               result = result + '<div class="alert alert-success" role="alert">Question '+j+' is correct.</div></br>';
            }
            else{
                result = result + sortWrongAnswers(j); //sends the question that is wrong so a switch to get the right message.
            }
    }
    //checks if the user scored more than 60%
    if (y >= 6) {
       $("div.results").replaceWith('<h1>Congratulations! You passed the test! to go back to the home page click <a href="home.html">here</a></h1>')
    }
    else{
        $("div.results").replaceWith('<h1>Unfortunately you did not pass the test. Click <a href="quiz.html">here</a> to try the quiz again. Each of your incorrect answers has hints that will help you revise to complete the quiz next time.</h1>')
    }
    $("div.replaced-content").replaceWith(result);
}

//takes a number from showAnswers that is the question number the loop is up to and match it to a case, giving a personalised response 
function sortWrongAnswers(wrongAnswer){
    result = "";
    switch (wrongAnswer){
        case 1:
            result = '<div class="alert alert-danger" role="alert">Unfortunately question '+ wrongAnswer +' is wrong, click <a href="sun.html" class="alert-link">here</a> to review the relevant content or try the quiz again.</div></br>';
            break;
        case 2:
            result = '<div class="alert alert-danger" role="alert">Unfortunately question '+ wrongAnswer +' is wrong, click <a href="mars.html" class="alert-link">here</a> to review the relevant content or try the quiz again.</div></br>';
            break;
        case 3:
            result = '<div class="alert alert-danger" role="alert">Unfortunately question '+ wrongAnswer +' is wrong, click <a href="neptune.html" class="alert-link">here</a> to review the relevant content or try the quiz again.</div></br>';
            break;
        case 4:
            result = '<div class="alert alert-danger" role="alert">Unfortunately question '+ wrongAnswer +' is wrong, click <a href="jupiter.html" class="alert-link">here</a> to review the relevant content or try the quiz again.</div></br>';
            break;
        case 5:
            result = '<div class="alert alert-danger" role="alert">Unfortunately question '+ wrongAnswer +' is wrong, click <a href="pluto.html" class="alert-link">here</a> to review the relevant content or try the quiz again.</div></br>';
            break;
        case 6:
            result = '<div class="alert alert-danger" role="alert">Unfortunately question '+ wrongAnswer +' is wrong, click <a href="jupiter.html" class="alert-link">here</a> to review the relevant content or try the quiz again.</div></br>';
            break;
        case 7:
            result = '<div class="alert alert-danger" role="alert">Unfortunately question '+ wrongAnswer +' is wrong, click <a href="planets.html" class="alert-link">here</a> to review the relevant content or try the quiz again.</div></br>';
            break;
        case 8:
            result = '<div class="alert alert-danger" role="alert">Unfortunately question '+ wrongAnswer +' is wrong, click <a href="earth.html" class="alert-link">here</a> to review the relevant content or try the quiz again.</div></br>';
            break;
        case 9:
            result = '<div class="alert alert-danger" role="alert">Unfortunately question '+ wrongAnswer +' is wrong, click <a href="kbo.html" class="alert-link">here</a> to review the relevant content or try the quiz again.</div></br>';
            break;
        case 10:
            result = '<div class="alert alert-danger" role="alert">Unfortunately question '+ wrongAnswer +' is wrong, click <a href="planets.html" class="alert-link">here</a> to review the relevant content or try the quiz again.</div></br>';
            break;
    }
    return result;
}