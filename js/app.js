
//Creates a return function for the number the user inputs to avoid messy global variables

function getUserInput(){
  return document.getElementById("user-number").value;
}

//Form validation to ensure user has inputed a number value. Convert string value to integer

document.getElementById("submit-button").onclick =   
    function () {
    console.log("hello!");
      var userInput = getUserInput();
      if (userInput === null || userInput === "") { //check if input is empty
        alert("Please provide a number!");
        return false;
      }
      else if (isNaN(userInput)) { //check if input is a string value
        alert("Please use the number keys.");
        return true;
      }
      else { //return user number value
        //("You entered the number " + parseInt(userInput) +"."); //convert input to integer
        var node = document.createElement("li");
        var textnode = document.createTextNode(userInput);
        node.appendChild(textnode);
        document.getElementById("results").appendChild(node);
         // end of if statements
      }
    }


/*var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"*/

//Place users input into the loop and append to div#results


function displayResults() {
  var userNum = getUserInput();
  for (i = 1; i <= userNum; i++) {
      listItems += "<ul>";

      if (i % 3 === 0 && i % 5 === 0) {
        
        listItems += "Fizz-Buzz!";
      }
      else if (i % 3 === 0) {
        
        listItems += "fizz";
      }
      else if (i % 5 === 0) {
        listItems += "buzz";
      }
      else {
      	listItems += i; 
      }

      listItems += "</ul>"
  }
}
var results = document.getElementById("results");
results.innerHTML += listItems;

var listItems = "";


