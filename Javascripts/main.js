$(document).ready(function(){
	//alert("Busy");
	$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
	}
	$(['../images/Thumbs/christmas1blue4.jpg','../images/Thumbs/dessert7blue4.jpg','../images/Thumbs/bikeblue4.jpg']).preload();
	//accordion

	$("#accordion").fadeIn("slow");
	$( "#accordion" ).accordion({
		event: "click",
        active: false,
        collapsible: true,
        heightStyle: "content",
    });

	//adipoli
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





