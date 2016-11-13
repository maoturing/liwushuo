$("document").ready(function(){
	$(".head-right .bt-login a").click(function(){
		 $(".login-page").show();
	});
	$(".login-page #login-form-wrap .input-button").click(function(){
		$(".login-page").hide();
	});
	$(".login-input-text").focus(function(){
		$(this).val("");
		$(this).css("color","black");
		});
	$(".login-input-text").blur(function(){
		$(this).css("color","#888888");
		if($(this).attr("name")=="password"){
			$(this).val("enter password?");
		}else{
			$(this).val("enter username?");
			}
		});
	
});