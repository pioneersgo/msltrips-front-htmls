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
 
});