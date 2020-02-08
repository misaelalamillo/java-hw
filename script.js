// Assignment Code
var generateBtn = document.querySelector("#generate");
  function generatePassword() {
    //Created a funtion to make the password generator button work and made variables defining
    //length, letters, numbers, speacial characters, and what the password will equal
    var length = parseInt(prompt("Choose a number length between between 8 and 128"));
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "123456789";
    var specialChar = "!@#$%^&*()_+";
    var password = '';
    var typeCount = 0;
    //this if is going to assure if the user is using the correct length for the password 
    if (length >=8 && length <=128){
      var numCount = 0;
    //created prompts to ask the user what they would like in their password such as numbers=yesNum, letters=yesLett, and characters=yescha
      var yesNum = prompt("Would you like number in your password? y for yes");
    //the ifs below are asking if the user says y=yes it will go ahead and include the number, letters and special characters the user is asking for 
    if (yesNum == "y"){//1
      numCount += 1;
    }

    var yesLett = prompt("Would you like letters in your password? y for yes");

    if(yesLett == "y"){//2
      numCount +=1;
    }
    var yescha = prompt("Would you like special characters? y for yes");

    if (yescha == "y"){//3
      numCount += 1;
    }
    //the if(numCount !=0) is stating if the user decides to not choose any of the requirements stated it will remain at zero which is being stated at the beginning function
    if(numCount !=0){
    //here we are creating a string that will show the size of the length divided by the different outcomes being chosen and they will be done randomly
    //this applies for numbers, letters, and special characters 
      if (numCount == "y"){
        for (i=0;i<(length/numCount); i++)
        password +=numbers.charAt(Math.floor(Math.random()*numbers.legth));
    }

    if (yesLett == "y"){
      for (i=0;i<(length/numCount); i++)
      password +=letters.charAt(Math.floor(Math.random()*letters.length));

    }

    if (yescha == "y"){
      for (i=0;i<(length/numCount); i++)
      password +=specialChar.charAt(Math.floor(Math.random()*specialChar.length));

       }
    }
    //we are stating that if the user does not meet any of the requiements being asked for it will not generate a password and will be alerted with the message below
    else{
      alert("You need to select minimum one letter, number or special character")
    }


  }
  //this else is if the user does not input a number between 8 and 128 it will not even prompt him to the next question and will require the user to use a number given 
  else{
    alert("Must enter length between 8 and 128")
  }
  return password;

  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

