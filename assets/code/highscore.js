//Function to clear high scores 
var ListofScores = document.querySelector(".ListofScores")
var clearBtn = document.getElementById("clear");  

clearBtn.addEventListener("click",function(){ 
    localStorage.clear();
}) 

// var lastScore = { 
//     Infvaro: 'Amalec', 
//     timeR: "30"
// }

var lastScore = []; 

//Loading other scores 

var loadScore = function(){ 
    var lastname = localStorage.getItem("name").replace(/['"]+/g,"");
    var lastScore = localStorage.getItem("score");
     console.log(lastScore)
    if(!lastScore){ 
        return false; 
    
    } 

    // for (var i =0; i <lastScore.length; i++){ 
    //     var lastScore = lastScore[i]; 
    //     var listItemEl = document.createElement("li"); 
    //     listItemEl.textContent = lastScore; 
    //     ListofScores.appendChild(listItemEl);
    // }  
    var addName = document.createElement("div"); 
    addName.innerHTML = `${lastname}: ${lastScore}`
     ListofScores.appendChild(addName);
    //lastScore.push(lastScore)
}; 

loadScore();