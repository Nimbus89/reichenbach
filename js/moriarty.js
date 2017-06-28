var terminal = $("#console").terminal(function(command){

}, {
  greetings: '',
});

var timeoutsSoFar = 0;

function timeoutThenMessage(message, timeout){
  setTimeout(function(){
    terminal.echo("> " + message);
  }, timeoutsSoFar + timeout);

  timeoutsSoFar += timeout;
}

timeoutThenMessage("Is... is that you?", 2000);
timeoutThenMessage("It must be you. You've solved all the tests so far.", 4000);
timeoutThenMessage("You have probably guessed that we have a case for you.", 4000);
timeoutThenMessage("Assistant detectives have already been aranged.", 4000);
timeoutThenMessage("Go to the following location on the pre-arranged date.", 4000);
timeoutThenMessage("Our agents will pick you up.", 2000);
timeoutThenMessage("I'll see you on the day, detective.", 2000);

setTimeout(function(){
  $("#map").removeClass("invisible");
}, timeoutsSoFar + 2000);
