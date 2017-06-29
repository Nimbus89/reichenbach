var WELCOME_MESSAGE = "Welcome back, detective".split("")

var welcome_timeout = 200;
var blink_count = 0;

var terminal = $("#console").terminal(function(command){

}, {
  greetings: '',
  enabled: false
});

var timeoutsSoFar = 0;

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function timeoutThenMessage(message, timeout){
  setTimeout(function(){
    terminal.echo("> " + message);
  }, timeoutsSoFar + timeout);

  timeoutsSoFar += timeout;
}

function goToEndState(){
  terminal.destroy();
  $("#console").remove();
  $("#map").removeClass("invisible");
  $("#overlay").addClass("invisible");
  localStorage["skip"] = "true";
}

function startMainScriptTimeouts(){
  timeoutThenMessage("Is... is that you?", 2000);
  timeoutThenMessage("It must be you. You've solved all the tests so far.", 4000);
  timeoutThenMessage("This message will self-destruct, so pay attention.", 4000);
  timeoutThenMessage("You have probably guessed that we have a case for you.", 4000);
  timeoutThenMessage("Assistant detectives have already been arranged.", 4000);
  timeoutThenMessage("Go to the following location on the pre-arranged date.", 4000);
  timeoutThenMessage("Our agents will pick you up, 11AM sharp.", 2000);
  timeoutThenMessage("I'll see you on the day, detective.", 2000);

  setTimeout(function(){
    goToEndState();
  }, timeoutsSoFar + 5000);
}

function blinkCursor(){
  $("#cursor").toggleClass("invisible");
  if(blink_count++ === 6){
    startMainScriptTimeouts();
  }
}

function newtWelcomeCharacter() {
  setTimeout(function(){
    if(WELCOME_MESSAGE.length){
      var char = WELCOME_MESSAGE.shift();
      $("#message").text($("#message").text() + char);
    } else {
      $("#overlay").addClass("fade");
      welcome_timeout = 600;
      blinkCursor();
    }
    newtWelcomeCharacter();
  }, welcome_timeout);
}

if(localStorage["skip"] === "true" && getUrlVars()["noskip"] !== "true"){
  goToEndState();
} else {
  newtWelcomeCharacter();
}
