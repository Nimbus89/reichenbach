function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
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

  _.each($(input_selectors), function(input, index){
    var text = $(input).val();
    $($(output_selectors)[index]).val(hex2a(text));
  });
});
