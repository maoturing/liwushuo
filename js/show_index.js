$("document").ready(function(){
	//$(".header_div").slideUp(1);
	//alert($(".header_div").css("display"));
$(".groupbar").mouseenter(function(){
	      //alert($(".nav").offset().top);
		    //alert($(window).scrollTop()); 
		    //alert($(".header_div").css("display"));
		    //alert((($(".header .nav").offset().top)==90));
		  });
	
	$("#bee_pic").mouseenter(function(){
		$(".content .btn  .pre").fadeIn(3000);
		$(".content .btn  .next").fadeIn(3000);
		$(".header_div").slideDown(2000);
		$(".beenest_div").slideUp(2000);
    $(".content_div").slideDown(1500);
    $("#particles-js").fadeOut(4000);
		});
});