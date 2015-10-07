// IIFE

// (function ()) { 

/*var modify = function() {

  var parent = $(event.currentTarget.parent);
  parent.addClass('grow');
  parent.siblings().removeClass('grow');  

        console.log(this);

  };
            


$('div').on('click', 'a', modify); 



// }());*/

$(."section").click(function () {


$(".section").removeClass("grow");

$(this).addClass("grow");

});

$('div').on('click', 'a', modify); 

