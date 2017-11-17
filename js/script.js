// Alert diplayed first time visiting page //
if(!localStorage["alertdisplayed"]) {
//Check localStorage to what is currently held there
    alert("Don't forget to sign up for our E-Newsletter at the bottom of the page to keep up on all the latest happenings at LYG!")
//Alert text
    localStorage["alertdisplayed"] = true;
//Check to see if the alert has been displayed before
}

// Alert confirming email subscription in Modal //
function myFunction() {
//Anonymous function
    alert("Thanks for subscribing!");
//Display when user subscribes
}