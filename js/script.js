

//$('#myModal').on('shown.bs.modal', function () {
//  $('#myInput').trigger('focus')
//})

if(!localStorage["alertdisplayed"]) {
    alert("Don't forget to sign up for our E-Newsletter at the bottom of the page to keep up on all the latest happenings at LYG!")
    localStorage["alertdisplayed"] = true;
}

function myFunction() {
    alert("Thanks for subscribing!");
}