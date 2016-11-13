// 实现鼠标悬浮到箭头图标上时换上另一张图片
		
$(document).ready(function(){

	brandPicTurn();
	qrcode();
});
function brandPicTurn(){
	$(".arrow-on").hide();
	$(".groupbar-1").hover(
		function(){
			$(this).children(".arrow").hide();
			$(this).children(".arrow-on").show();
		}
		, function(){
			$(this).children(".arrow-on").hide();
			$(this).children(".arrow").show();
		}
	);
}


// 鼠标悬浮到二维码上时显示二维码图片
function qrcode(){
	$(".qr-code").hide();
	$(".groupbar-2").hover(
		function(){

			$(".qr-code").show();
		}
		, function(){
			$(".qr-code").hide();

		}
	);
}