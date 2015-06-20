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
	/* 5. Nice Scroll 
	/* --------------------------------------------------------------------- */
	
	$("html").niceScroll();
	
	
 
});