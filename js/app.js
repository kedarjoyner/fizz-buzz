
//Creates a return function for the number the user inputs to avoid messy global variables

function getUserInput(){
  return document.getElementById("user-number").value;
}

//Form validation to ensure user has inputed a number value. Convert string value to integer

document.getElementById("submit-button").onclick =   
    function () {
    console.log("hello!");
      var userInput = parseInt(getUserInput());
      if (userInput === null || userInput === "") { //check if input is empty
        alert("Please provide a number!");
        return false;
      }
      else if (isNaN(userInput)) { //check if input is a string value
        alert("Please use the number keys.");
        return true;
      }
      else { //return user number value into fizzbuzz loop
        var node = document.createElement("li");
        var textnode = document.createTextNode(userInput);
        node.appendChild(textnode);
        //document.getElementById("results").appendChild(node);
        
        var listItems = "";

        for (i = 1; i <= userInput; i++) {

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

        listItems += "</ul>";
        
        document.getElementById("results").innerHTML=listItems;
            
        }
      }
    }
