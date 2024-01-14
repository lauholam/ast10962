"use strict;"
/* AST10962 Lab13 Sample JS*/
$(document).ready(function() {

  var $index = 0;
  var $pics = ['bg0.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
  $(document).keydown(function() {
    var $key = event.which;
	
    //check point 3: complete the logic with if-else or switch
	
    var $imageUrl = 'images/' + $pics[$index];
    $('body').css('background-image', 'url(' + $imageUrl + ')');
  });
});
