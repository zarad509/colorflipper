//ignore the comments, it helps me learn


// GET THE FRICKIN body by just the TAG NAMES and the 0 is just cause it's an entrypoint
const body = document.getElementsByTagName("body")[0] 

function setColor(name) { //create a function called setColor and it's gonna change by colors names
    
    body.style.backgroundColor = name; // define name and what it'll do. don't put name first or it'll mess up 
    // the background color will change as we type different colors in html file
    body.style.color = "white"; //changes the text color

    }



//it  works
//this changes all of the color buttons text to white after click
function setTextColor(name) { //created a function and set it by name
      const button = document.getElementById(name); // this grabs the correct button
    button.style.color = "white"; //changes the text color

}


//still working on this. what if we want to randomize the text color for the random button?
function setRandomTextColor(){
        const red = Math.round (Math.random() * 255) 
        const blue = Math.round (Math.random() * 255) 
        const green = Math.round (Math.random() * 255) 

    const color = `rgb(${red}, ${green}, ${blue})` //
    const button = document.getElementById("random"); //here we're grabbing the random button

}
    

    