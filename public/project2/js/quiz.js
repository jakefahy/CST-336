/* global $ */


$(document).ready(function() {
    
    let index = 0;
    let name;
    let q;
    let q1;
    let q2;
    let q3;
    let q4;
    let q5;
    let q6;
    let q7;
    
    let questionArray = ["Would you burn down an entire city just to prove a point?", 
    "Do you think of war as a game?", 
    "Do you always repay those you are in debted to?", 
    "Would you ride horses your entire life?", 
    "Do you like the cold?", 
    "Do you like to be out on the water?", 
    "Do you like bridges?", 
    "Are you very prideful?"];
    
    function updateScreen(index) {
        $("#questionArea").html(questionArray[index]);
    }
    
    $("#startButton").on("click", function(){
        name = $("#name").val();
        $("#name").hide();
       updateScreen(index);
       $("#startButton").hide();
       $("#yesButton").show();
       $("#noButton").show();
       $("#imgArea").hide();
    });
    
    $("#yesButton").on("click",function(){
        if(index == 7) {
            record(1);
            results();
        } else {
           record(1); 
        }
    });
    $("#noButton").on("click",function(){
        if(index == 7) {
            record(0);
            results();
        } else {
           record(0); 
        }
    });

    
    function record(num) {
        if(num == 1) {
            if(index == 0) {
                q = "yes";
            }
            else if(index == 1) {
                q1 = "yes";
            }
            else if(index == 2) {
                q2 = "yes";
            }
            else if(index == 3) {
                q3 = "yes";
            }
            else if(index == 4) {
                q4 = "yes";
            }
            else if(index == 5) {
                q5 = "yes";
            }
            else if(index == 6) {
                q6 = "yes";
            }
            else if(index == 7) {
                q7 = "yes";
            }
        }else if(num == 0) {
            if(index == 0) {
                q = "no";
            }
            else if(index == 1) {
                q1 = "no";
            }
            else if(index == 2) {
                q2 = "no";
            }
            else if(index == 3) {
                q3 = "no";
            }
            else if(index == 4) {
                q4 = "no";
            }
            else if(index == 5) {
                q5 = "no";
            }
            else if(index == 6) {
                q6 = "no";
            }
            else if(index == 7) {
                q7 = "no";
            }
        }
        index++;
        updateScreen(index);
        console.log(index);
    }
    
    function results() {
        let house;
        let quote;
        $("#imgArea").show();
        if(q == "yes") { // targaryen
            house = " you are House Targaryen";
            quote = "Fire and Blood";
            $("#imgArea").html("<img src = 'img/targa.jpg' alt='dragon'>");
        } else if(q == "no" && q4 == "yes" && q7 == "yes") { // stark
            house = " you are House Stark";
            quote = "Winter is Coming";
            $("#imgArea").html("<img src = 'img/stark.jpg' alt='wolf'>");
        } else if(q == "yes" && q1 == "yes", q2 == "yes" && q7 == "yes") { // lannister
            house = " you are House Lannister";
            quote = "A Lannister always pays his debts";
            $("#imgArea").html("<img src = 'img/lannister.png' alt='lion'>");
        } else if(q3 == "yes") { // dothraki
            house = " you are apart of the Dothraki Horde";
            quote = "M’ATHCHOMAROON!";
            $("#imgArea").html("<img src = 'img/doth.jpg' alt='guys'>");
        } else if(q6 == "yes") { // frey
            house = " you are House Frey";
            quote = "We Stand Together";
            $("#imgArea").html("<img src = 'img/frey.png' alt='bridge'>");
        } else if(q4 == "yes" && q5 == "yes") { //greyjoy
            house = " you are House Greyjoy";
            quote = "We Do Not Sow";
            $("#imgArea").html("<img src = 'img/greyjoy.png' alt='squid'>");
        } else if(q7 == "yes" && q == "no" && q1 == "no" && q2 == "no" && q3 == "no" && q4 == "no" && q5 == "no" && q6 == "no") { //mormont
            house = " you are House Mormont";
            quote = "Here We Stand";
            $("#imgArea").html("<img src = 'img/bear.png' alt='bear'>");
        } else {
            house = " you are just a common person";
            quote = "Pretty Boring";
            $("#imgArea").html("<img src = 'img/people.jpg' alt='people'>");
        }
        
        
        $("#yesButton").hide();
        $("#noButton").hide();
        $("#questionArea").hide();
        $("#resultsArea").show();
        $("#resultsArea").html(name + house);
        $("#quoteArea").html(quote);
        
    }
    
  
    
    
});