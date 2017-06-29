function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function pageExists(spinner, url){
  setTimeout(function(){
    $spinner.loadingSpinner("success");
    setTimeout(function(){
      window.location.href = url;
    }, 2000);
  }, 4000);
}

function pageNotExists(spinner){
  setTimeout(function(){
    $spinner.loadingSpinner("failure");
  }, 4000);
}

var input_selectors = ".inputs input";
var output_selectors = ".outputs input";
var selectors = [input_selectors, output_selectors];

_.each(selectors, function(selector){
  _.each($(selector), function(input, index){
    var width = 10;
    var margin = 20/9;
    $(input).css({
      left: (margin*(index+1) + width * index) + "%",
      right: (margin*(index+1) + width * (index + 1)) + "%",
    });
  });
});

$("button").on("click", function(){

$(".outputs").removeClass("invisible");

  var allOutput = _.map($(input_selectors), function(input, index){
    var text = $(input).val();
    var letter = hex2a(text);
    $($(output_selectors)[index]).val(letter);
    return letter;
  }).join("");

  var url = allOutput.toLowerCase() + ".php";

  var $spinner = $("div#spinner").loadingSpinner({size:200});

  $.ajax(
  {
      type: "get",
      url: url,
      cache: false,
      statusCode: {
        404: function () {
            pageNotExists($spinner);
        },
        200: function () {
            pageExists($spinner, url);
        }
       },
      async: true
  });


});
