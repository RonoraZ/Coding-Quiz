//Declaration of variables for the quiz  

var header = document.getElementById("Header");  
var intro = document.getElementById("intro");  
var Quiz = document.getElementById("Quiz");  
var Q = document.getElementById("Q");  
var Select = document.getElementById("Select");  
var option1 = document.getElementById("option1");  
var option2 = document.getElementById("option2");  
var option3 = document.getElementById("option3");  
var option4= document.getElementById("option4");  
var lastScore = document.getElementById("lastScore");  
var lastMessage = document.getElementById("lastMessage");  
var header = document.getElementById("Header");  
var Results = document.getElementById("Results");    
var UserInfo = document.getElementById("UserInfo");

// variables to keep track of quiz state
var currentQIndex = 0;
var time = questions.length * 15;
var timerId;

//Page 

intro.style.display="block"; 
Quiz.style.display = "none"; 
lastScore.style.display = "none"; 

//Creating a variable to start the quiz 

var btnS = document.getElementById("btnS"); 

console.log(btnS);

//Implementing listener in order to get the start button to work 

btnS.addEventListener("click", beginGame);

//Creating function for time 

var timeR = 75
var initialScore = 0 
var Timer = document.getElementById("Timer"); 

Timer.textContent = "Time:" + initialScore + "s";  

//Implementing a function to begin game 

function beginGame(){ 
     Quiz.style.display = "block"; 
     Q.style.display = "block"; 
     header.style.display ="block"; 
     intro.style.display ="none"; 
    lastScore.style.display ="none"; 
    
    
 //Implementing time penaltys  
 var timeInterval = setInterval(function(){ 
    Timer.textContent = "Time:" + timeR + "s"; 
    timeR -=1; 

    if(timeR === 0||questions.length === Qindex+1){ 
        outcomeRender(); 
        clearInterval(timeInterval); 
        Timer.textContent = "Time:" + timeR + "s"; 
    }
 },1000);
    
     showQuiz(); 
    //console.log(renderQ);

}; 


//Presenting questions 


var finalQindex = questions.length -1; 
var  Qindex = 0;  

function showQuiz(){ 
    nextQuestion();
}

function nextQuestion(){ 
    var q = questions[Qindex]; 
    Q.innerHTML= q.Q;
   option1.innerHTML = q.option1;
   option2.innerHTML = q.option2; 
   option3.innerHTML = q.option3; 
  option4.innerHTML= q.option4; 

    // console.log(option1);
}; 

//Checking answers of Quiz 

function checkA(answers) {  
    //console.log(questions[Qindex].correct);
    if(questions[Qindex].correct == answers){ 
        output.textContent = "Right"
    } else{ 
        output.textContent = "Wrong!" 
        timeR -=20;
    } 

    Qindex++; 
    showQuiz();

};  

console.log(correct);

//Implementing display of score of quiz  

function outcomeRender(){ 
    Quiz.style.display="none"; 
    intro.style.display = "none"; 
    lastScore.style.display = "block";  
  
    if(timeR === 0 || questions.length-1){ 
        Results.textContent = "Final Score"+ timeR + ".";
    }
}; 

//Saving score and name  

UserInfo.addEventListener("click", function(){ 
    var Info = document.getElementById("Info").nodeValue; 
    console.log(Info);
    localStorage.setItem("name",JSON.stringify(Info)); 
    localStorage.setItem("timeR",JSON.stringify(timeR));  
    location.href='highScore.html'
    loadScore();
})

function test(){ 
    var Info = document.getElementById("Info").value; 
    console.log(Info);
    localStorage.setItem("name",JSON.stringify(Info)); 
    localStorage.setItem("score",JSON.stringify(timeR));  
    location.href='highScore.html'
    loadScore(); 
}