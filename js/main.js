
$(document).ready(function() {
	console.log('hi, my source is pretty minimal. thanks for looking =)');
	
	$('#work').masonry({
		    // options
    itemSelector : '.item',
    columnWidth : 304,
    isAnimated: true    ,
    isFitWidth: true
	});
			
	$('.item').click(function() {
	  $(this).css({
		  height: '26em',
	  });	
	
	  $('#work').masonry('reload');
	
	
	  $(this).children('.cover').animate({
		  top: '3em'
	  }, 200);
		
	  $(this).children('.desc').animate({
		  top: '16em'
	  }, 200);
		
	});
	
	$('h1').hover(
	  function () {
      $('#pinky').text("(I pinky swear!)");
    },
    function () {
      $('#pinky').text("(I swear!)");
    }
	  
	);
	
	$('#intro p').hover(
	  function () {
      $(this).css({opacity: 1});
      $('#message').css({opacity: 0.2, display: 'block'});
    },
    function () {
      $(this).css({opacity: 0.5});
      $('#message').css({opacity: 0, display: 'block'});
    }
	  
	);
	
	
	
	// $('#intro').click(function() {
	//     $(this).animate({
	//       height: '40em'
	//     }, 200);
	//   });
  // Handler for .ready() called.
});