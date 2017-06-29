// This is the jQuery UI widget. The configurable bits and initialization are at the bottom of this file.
(function ($) {
	$.widget("eee.loadingSpinner", {

		options: {
			size: 200
		},

		_create: function () {
			el = this.element;
			var size = this.options.size;

			$.loader = function (element) {
			    var dfd = $.Deferred();
			    var spinner = $("#spinner-template").html();
			    dfd.resolve(spinner, element);
			    return dfd;
			}

			$.loader(el).done(function (spinner, element) {
			    element.html(spinner);
			    element.find(".spinner-container").css("width", size + "px");
			    element.find(".spinner-container").css("height", size + "px");
			});
		},

		success: function () {
			el = this.element;
			el.find(".check").attr("class", "check check-complete success");
			el.find(".path").attr("class", "path path-complete success");
		},

		failure: function () {
			el = this.element;
			el.find(".cross").attr("class", "cross cross-complete danger");
			el.find(".path").attr("class", "path path-complete danger");
		},

		reset: function () {
			el.find(".path").attr("class", "path");
			el.find(".spinner").attr("class", "spinner");
			el.find(".check").attr("class", "check");
			el.find(".cross").attr("class", "cross");
		},

		_setOption: function (key, value) {
			if (key === "size") {
				value = this._constrain(value);
			}
			this._super(key, value);
		},
		_setOptions: function (options) {
			this._super(options);
		},

		_constrain: function (size) {
			if (size > 400) {
				size = 400;
			}
			if (size < 0) {
				size = 0;
			}
			return size;
		}
	});
}(jQuery));

// $(document).ready(function(){
// 	// Initialize the spinner.
// 	// Change the "size" parameter to resize the spinner.
//   var $spinner = $("div#spin").loadingSpinner({size:400});
// 	setTimeout(function(){
// 		// You can set this to "failure" to see a red X instead of the checkmark
// 		$spinner.loadingSpinner("failure");
// 	}, 2700)
// });
