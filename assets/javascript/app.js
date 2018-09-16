    
var timer = 30;
var intervalId;


function decrement() {
  timer--;
  $("#show-number").html("<h2>Time Remaining: "+timer+" Seconds</h2>");
  //console.log(timer);
  if (timer === 0) {
    stop();
  }
}

function start() {
  //alert("START")
  intervalId = setInterval(decrement, 1000);
}

function stop() {
  //alert("STOP")
  clearInterval(intervalId);
}

$("#start").on("click", function(){
    $("#start").remove();
    start();
    postQuestions();
});
  
  // Question object
  var questionArray= [
    {
        question:"What color are Ronald McDonald's shoe laces?", 
        option1: "yellow", 
        option2: "red", 
        option3: "black", 
        option4: "green", 
        answer: 1},
    {
        question:"Is 'Gangham Style a type of ?",
        option1: "haircut", 
        option2: "Taco", 
        option3: "Song", 
        option4: "dance", 
        answer: 3}, 
    {   question:"In which country were the first Olympic Games held?",
        option1: "Greece", 
        option2: "Rome", 
        option3: "Spain", 
        option4: "England", 
        answer: 1},
    {
        question:"What kind of paper was the American Declaration of Independent written on?",
        option1: "Hemp",
        option2: "wood Pulp",
        option3: "index paper",
        option4: "Vellum Bristol Papers",
        answer: 1},
    {
        question: "What is the name of the island on which the statue of liberty stands?",
        option1: "Sumatra Island",
        option2: "Aleutian Island",
        option3: "Falkland Island",
        option4: "Ellis Island",
        answer: 4},
    {    
        question: "What is another name for an 'Alsatian Dog'?",
        option1: "German Shepherd",
        option2: "Rottweiler",   
        option3: "Dobermann",   
        option4: "Labrador Retriever",
        answer: 1
    },
    {
        question: "What stadium is named after a ketchup company?",
        option1: "Panathenaic Stadium",
        option2: "Heinz Field",   
        option3: "Maracana Stadium",   
        option4: "Warsaw National Stadium",
        answer: 2

    },
    {
        question: "Which dinosaur name means 'King' of the tyrant ?",
        option1: "Stegosaurus",
        option2: "Triceratops",   
        option3: "Tyrannosaurus Rex",   
        option4: "Apatosaurus",
        answer: 3
    },
    {
        question: "The Walt Disney Company owns which American TV network ?",
        option1: "ABC",
        option2: "FOX",   
        option3: "NBC",   
        option4: "CNN",
        answer: 1
    },
    {
        question: "Who plays the voice of Scrooge in 2009's Disney's A Christmas Carol ?",
        option1: "Tom Hanks",
        option2: "Denzel Washington",   
        option3: "Johnny Depp",   
        option4: "Jimmy Carrey",
        answer: 4
    },   

];

var hit_number = 0;
var miss_number = 0;

function postQuestions(){
// Populate all of the questions
for (var i=0; i<questionArray.length; i++)
{
  var radio1 = $("<input>").attr("type", "radio");  
  var radio2 = $("<input>").attr("type", "radio");
  var radio3 = $("<input>").attr("type", "radio");
  var radio4 = $("<input>").attr("type", "radio")

  // Create and append the title of question
  title = $("<div>").text(questionArray[i].question);
  $(".container").append(title);
  // Create and append the radio buttons
  if (questionArray[i].answer===1)
    radio1.attr("name", i).attr("value", "1");
  else
    radio1.attr("name", i).attr("value", "0");  

  $(".container").append(radio1, questionArray[i].option1);
  
  if (questionArray[i].answer===2)
    radio2.attr("name", i).attr("value", "1");
  else
    radio2.attr("name", i).attr("value", "0");
  $(".container").append(radio2, questionArray[i].option2);

  if(questionArray[i].answer===3)
    radio3.attr("name", i).attr("value", "1");
  else
    radio3.attr("name", i).attr("value", "0");

  $(".container").append(radio3, questionArray[i].option3);

  if(questionArray[i].answer===4)
    radio4.attr("name", i).attr("value", "1");
  else
   radio4.attr("name", i).attr("value", "0");

  $(".container").append(radio4, questionArray[i].option4);  

} 



  // Tally score when button is pressed
$("button").click(function() {
  for (var i = 0; i < questionArray.length; i++) 
  {

    // Check value of radio buttons by name
    var value = parseInt($("input[name=" + i + "]:checked").attr("value"));

    // Console log the results
    if (value) 
    {
      console.log("Question:", i, "is correct!");
      hit_number+=1;
    } 
    else 
    {
      console.log("Question:", i, "is wrong");
      miss_number+=1;
    }  
 }

  console.log("hit "+hit_number);
  console.log("miss "+miss_number);
  
  $(".container").html("");
  $(".container").append("<p>Correct Answer: "+hit_number+"</p>");
  $(".container").append("<p>Missed Answer: "+miss_number+"</p>");
  $("button").remove();

});
}  
