var today = new Date();
//var hourNow = today.getHours();
var hourNow = prompt('What time is it?')
var greeting;

if (hourNow > 18) {
    greeting = 'Go to bed';
} else if (hourNow > 12) {
    greeting = 'Get a job';
} else if (hourNow > 0) {
    greeting = 'It sure is Morning';
} else {
    greeting = 'Wow you suck at following directions. Insert a real time next time.';
}

document.write('<h3>' + greeting + '</h3>');

$("button").click(function() {
    $(".button").toggleClass("buttonLeft");
});