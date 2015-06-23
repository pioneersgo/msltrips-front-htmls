	/* --------------------------------------------------------------------- */
/* 6. Superfish Menu
/* --------------------------------------------------------------------- */
/*Superfish DropDown */
(function($){ //create closure so we can safely use $ as alias for jQuery

$(document).ready(function(){

	var exampleOptions = {
		delay:       450,                            // one second delay on mouseout
		animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
		speed:       'fast',                          // faster animation speed
		autoArrows:  false                            // disable generation of arrow mark-up
	}
	// initialise plugin
	var example = $('#mainMenu').superfish(exampleOptions);
	
	// buttons to demonstrate Superfish's public methods
	$('.destroy').on('click', function(){
	  example.superfish('destroy');
	});
	
	$('.init').on('click', function(){
	  example.superfish(exampleOptions);
	});
	
	$('.open').on('click', function(){
	  example.children('li:first').superfish('show');
	});
	
	$('.close').on('click', function(){
	  example.children('li:first').superfish('hide');
	});
	});

})(jQuery);
$(document).ready(function(e) {
    /* --------------------------------------------------------------------- */
	/* 1. Heightest Desc Wrap
	/* --------------------------------------------------------------------- */
	
	var titleMaxHeight = -1;
	
	/* Select Desc */
	$('.best-tour-packages .list .title').each(function() {
		titleMaxHeight = titleMaxHeight > $(this).outerHeight() ? titleMaxHeight : $(this).outerHeight();
	});
	
	$('.best-tour-packages .list .title').each(function() {
		$(this).css("min-height",titleMaxHeight);
	});	
	
	
	/* --------------------------------------------------------------------- */
	/* 2. Social Drawer
	/* --------------------------------------------------------------------- */
	
	/* Open Drawer */
	
	$(window).resize(function(){
		$(".contact-drawer").removeAttr("style");
	});
	
	$(".contact-drawer-tab").addClass("drawer-open-desktop");
	
	$(".contact-drawer-tab").on("click", function(){
		
		if($(".drawer-open-desktop").length==0){
			$(".contact-drawer").animate({right: '-39px'});
			$(".contact-drawer-tab").addClass("drawer-open-desktop");
		}else{
			$(".contact-drawer").animate({right: '0'});
			$(".contact-drawer-tab").removeClass("drawer-open-desktop");
		}
	});
	
	
	/* --------------------------------------------------------------------- */
	/* 3. Back to top
	/* --------------------------------------------------------------------- */

	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	
	/* --------------------------------------------------------------------- */
	/* 4. Stricy Menu
	/* --------------------------------------------------------------------- */
	
	var scrolled = false;
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('header').addClass("sticky");
		}else{
			$('header').removeClass("sticky");
		}
	});
	
	
	$(window).scroll( function(){  
		if (96 < $(window).scrollTop() && !scrolled) {
			$('header').animate({ top: '0px' });
			scrolled = true;
		}
		if (96 > $(window).scrollTop() && scrolled) {
			$('header').animate({top: '-100px'});
			scrolled = false;     
		}
	});
	
	
	/* --------------------------------------------------------------------- */
	/* 5. Stricy Menu
	/* --------------------------------------------------------------------- */
	
	$(".search-item .image").slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
	});
	
	

	
	
	/* --------------------------------------------------------------------- */
	/* 6. Gallery Setup
	/* --------------------------------------------------------------------- */
	var options = {
	$AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
	$AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
	$AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
	$PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

	$ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
	$SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
	$MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
	//$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
	//$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
	$SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
	$DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
	$ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
	$UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
	$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
	$DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

	$ArrowNavigatorOptions: {
		$Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
		$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
		$AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
		$Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
	},

	$ThumbnailNavigatorOptions: {
		$Class: $JssorThumbnailNavigator$,              //[Required] Class to create thumbnail navigator instance
		$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always

		$ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
		$AutoCenter: 3,                                 //[Optional] Auto center thumbnail items in the thumbnail navigator container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 3
		$Lanes: 1,                                      //[Optional] Specify lanes to arrange thumbnails, default value is 1
		$SpacingX: 3,                                   //[Optional] Horizontal space between each thumbnail in pixel, default value is 0
		$SpacingY: 3,                                   //[Optional] Vertical space between each thumbnail in pixel, default value is 0
		$DisplayPieces: 9,                              //[Optional] Number of pieces to display, default value is 1
		$ParkingPosition: 260,                          //[Optional] The offset position to park thumbnail
		$Orientation: 1,                                //[Optional] Orientation to arrange thumbnails, 1 horizental, 2 vertical, default value is 1
		$DisableDrag: false                            //[Optional] Disable drag or not, default value is false
	}
};

	var jssor_slider2 = new $JssorSlider$("slider2_container", options);
	//responsive code begin
	//you can remove responsive code if you don't want the slider scales while window resizes
	function ScaleSlider() {
		var parentWidth = jssor_slider2.$Elmt.parentNode.clientWidth;
		if (parentWidth)
			jssor_slider2.$ScaleWidth(Math.min(parentWidth, 689));
		else
			window.setTimeout(ScaleSlider, 30);
	}
	ScaleSlider();
	
	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
	
});


