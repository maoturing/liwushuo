
$(document).ready(function(){
	var mark = "no";          // 点赞标志
  var summary;              // 评论内容
  var ifpass = "false";     // 评论是否通过
  var id_num = 3;           // id号

//点赞函数
$("#add").unbind('click').bind('click',function(){
	var num;
	$("#ha").removeAttr("href");
	if(mark=="no"){
	num = $("#num").text()-0+1;
	$("#num").text(num);
	mark="yes";
	$("#add").attr("src","mark/心2.png");
  }else{
  num = $("#num").text()-0-1;
	$("#num").text(num);
	mark="no";
  $("#add").attr("src","mark/心.png");
  }
})




// 二维码动作
$(".ddcode").mouseover(function(){
  $(".over").attr("src","pic/float2.png");
});
$(".ddcode").mouseout(function(){
  $(".over").attr("src","pic/float1.png");
});
$(".ddcode").focus(function(){
	$(".over")
});

// 评论框处理
$("textarea").focus(function(){
  $("textarea").val("");
  $("textarea").css("color","black");
  ifpass = "true";
});
$("textarea").unbind('blur').bind('blur',function(){
	summary = $("textarea").val();
  $("textarea").val("想说点什么?");
  $("textarea").css("color","gray");
});


// 提交反应
$(".submit_bt").unbind('click').bind('click',function(){
  id_num = id_num + 1;
  if(summary == "" || ifpass == "false" ){alert("你似乎。。。什么都没说呢。。。");
  }else{
	var str1 = "<li><div class='each_summary'><div class='pic_and_name'>"
             +"<img src='pic/ex.jpg' class='show_pic2'></div><div class='chara_info'>"
             +"<p>游客</p><p id='p2'>" + id_num +"楼 8月6日 17:41</p><div class='marrk'>"
             +"<img src='mark/点赞 (1).png' class='show_pic3'><a>0</a></div></div>"
             +"<div class='summary_text'><p>" + summary + "</p></div></div></li>" ;
  //alert(str1);
  $("#summary ul").append(str1);
  summary = "";
  }
});
// 评论点赞
$(".marrk").unbind('click').bind('click',function(){
	$(this).children(".show_pic3").attr("src","mark/点赞.png");
	$(this).children("a").text($(this).text()-0+1);
});

});

