$(document).ready(function(){
	//alert("Busy");
    $('.row1').adipoli({
		'startEffect' : 'normal',
		'hoverEffect' : 'popout'
	});
	overlay = $("#overlay");
	img = $("#myimg");
	overlay.width(img.css("width"));
	overlay.height(img.css("height"));
	overlay.css("top", img.offset().top + "px");
	overlay.css("left", img.offset().left + "px");
	});

$(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    });
});




