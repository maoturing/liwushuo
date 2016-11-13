$("document").ready(function(){
	var top=$(".nav").offset().top;
	$(window).scroll(function () {
	  if ($(window).scrollTop() >= top) {
		$(".nav").attr("style", "position:fixed;margin-top:0px;margin-left:0px;z-index:10;");
		$(".nav .nav-list li form #search-input-1").show();
	  } else {
		 $(".nav").removeAttr("style");
		 $(".nav .nav-list li form #search-input-1").hide();
	  }
	}).trigger("scroll");
});