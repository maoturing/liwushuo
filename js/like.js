// 实现点赞功能

$(document).ready(function(){
	var flag = "no";          // 点赞标志

$("#like0").unbind('click').bind('click',function(){
	var num;
	if(flag=="no"){
	num = $("#num0").text()-0+1;
	$("#num0").text(num);
	flag="yes";
	$("#like0").attr("src","img/like-on.png");
  }else{
  num = $("#num0").text()-0-1;
	$("#num0").text(num);
	flag="no";
  $("#like0").attr("src","img/like.png");
  }
})
});



$(document).ready(function(){
	var flag = "no";          // 点赞标志

$("#like1").unbind('click').bind('click',function(){
	var num;
	if(flag=="no"){
	num = $("#num1").text()-0+1;
	$("#num1").text(num);
	flag="yes";
	$("#like1").attr("src","img/like-on.png");
  }else{
  num = $("#num1").text()-0-1;
	$("#num1").text(num);
	flag="no";
  $("#like1").attr("src","img/like.png");
  }
})
});


$(document).ready(function(){
	var flag = "no";          // 点赞标志

$("#like2").unbind('click').bind('click',function(){
	var num;
	if(flag=="no"){
	num = $("#num2").text()-0+1;
	$("#num2").text(num);
	flag="yes";
	$("#like2").attr("src","img/like-on.png");
  }else{
  num = $("#num2").text()-0-1;
	$("#num2").text(num);
	flag="no";
  $("#like2").attr("src","img/like.png");
  }
})
});

$(document).ready(function(){
	var flag = "no";          // 点赞标志

$("#like3").unbind('click').bind('click',function(){
	var num;
	if(flag=="no"){
	num = $("#num3").text()-0+1;
	$("#num3").text(num);
	flag="yes";
	$("#like3").attr("src","img/like-on.png");
  }else{
  num = $("#num3").text()-0-1;
	$("#num3").text(num);
	flag="no";
  $("#like3").attr("src","img/like.png");
  }
})
});


$(document).ready(function(){
	var flag = "no";          // 点赞标志

$("#like4").unbind('click').bind('click',function(){
	var num;
	if(flag=="no"){
	num = $("#num4").text()-0+1;
	$("#num4").text(num);
	flag="yes";
	$("#like4").attr("src","img/like-on.png");
  }else{
  num = $("#num4").text()-0-1;
	$("#num4").text(num);
	flag="no";
  $("#like4").attr("src","img/like.png");
  }
})
});


$(document).ready(function(){
	var flag = "no";          // 点赞标志

$("#like5").unbind('click').bind('click',function(){
	var num;
	if(flag=="no"){
	num = $("#num5").text()-0+1;
	$("#num5").text(num);
	flag="yes";
	$("#like5").attr("src","img/like-on.png");
  }else{
  num = $("#num5").text()-0-1;
	$("#num5").text(num);
	flag="no";
  $("#like5").attr("src","img/like.png");
  }
})
});


$(document).ready(function(){
	var flag = "no";          // 点赞标志

$("#like6").unbind('click').bind('click',function(){
	var num;
	if(flag=="no"){
	num = $("#num6").text()-0+1;
	$("#num6").text(num);
	flag="yes";
	$("#like6").attr("src","img/like-on.png");
  }else{
  num = $("#num6").text()-0-1;
	$("#num6").text(num);
	flag="no";
  $("#like6").attr("src","img/like.png");
  }
})
});


// $(document).ready(function(){
	// //隐藏实心桃心
	// $(".small-icon img:eq(1)").hide();
	
	// //获取点赞数
	// var j=$(".small-icon font:eq(0)").text();
	// var likecount= parseInt(j);

	// //为空心桃心添加点击函数
	// $(".small-icon img:eq(0)").click(function(){
		// $(".small-icon img:eq(0)").hide();
		// $(".small-icon img:eq(1)").show();
		// likecount++;
		// // alert(likecount);
		// $(".small-icon font:eq(0)").text(likecount);
	
	// }
	// // , function(){
		// // $(".small-icon img:eq(1)").hide();
		// // $(".small-icon img:eq(0)").show();
		// // likecount--;
		// // // alert(likecount);
		// // $(".small-icon font:eq(0)").text(likecount);
	// // }
	
	
	// );
// });


	// $(".groupbar-1").hover(
		// function(){
			// $(this).children(".arrow").hide();
			// $(this).children(".arrow-on").show();
		// }
		// , function(){
			// $(this).children(".arrow-on").hide();
			// $(this).children(".arrow").show();
		// }
	// );