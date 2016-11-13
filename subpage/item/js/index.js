$("document").ready(function(){
	//悬停块背景变化以及二级菜单显示
	$(".nav .index").mouseover(function(){
		$(".nav .nav-list .index").css("background-color","#E32F2F");
	});
	$(".nav .index").mouseout(function(){
		$(".nav .nav-list .index").css("background-color","#f84e4e");
	});
	$(".nav .pitem").mouseover(function(){
		$(".nav .totopnav .pitem").css("display","block");
		$(".nav .nav-list .pitem").css("background-color","#E32F2F");
	});
	$(".nav .pitem").mouseout(function(){
		$(".nav .totopnav .pitem").css("display","none");
		$(".nav .nav-list .pitem").css("background-color","#f84e4e");
	});
	$(".nav .event").mouseover(function(){
		$(".nav .totopnav .event").css("display","block");
		$(".nav .nav-list .event").css("background-color","#E32F2F");
	});
	$(".nav .event").mouseout(function(){
		$(".nav .totopnav .event").css("display","none");
		$(".nav .nav-list .event").css("background-color","#f84e4e");
	});
	$(".nav .cover").mouseover(function(){
		$(".nav .totopnav .cover").css("display","block");
		$(".nav .nav-list .cover").css("background-color","#E32F2F");
	});
	$(".nav .cover").mouseout(function(){
		$(".nav .totopnav .cover").css("display","none");
		$(".nav .nav-list .cover").css("background-color","#f84e4e");
	});
	$(".nav .phone").mouseover(function(){
		$(".nav .nav-list .phone").css("background-color","#E32F2F");
	});
	$(".nav .phone").mouseout(function(){
		$(".nav .nav-list .phone").css("background-color","#f84e4e");
	}); 
	//悬停文本变红效果
	$(".nav .totopnav .active ul li .pitem-1 font").mouseover(function(){
		$(".totopnav .active ul li .pitem-1 font").css("color","red");
	});
	$(".nav .totopnav .active ul li .pitem-1 font").mouseout(function(){
		$(".totopnav .active ul li .pitem-1 font").css("color","#8e8e93");
	});
	$(".nav .totopnav .active ul li .pitem-2 font").mouseover(function(){
		$(".totopnav .active ul li .pitem-2 font").css("color","red");
	});
	$(".nav .totopnav .active ul li .pitem-2 font").mouseout(function(){
		$(".totopnav .active ul li .pitem-2 font").css("color","#8e8e93");
	});
	$(".nav .totopnav .active ul li .pitem-3 font").mouseover(function(){
		$(".totopnav .active ul li .pitem-3 font").css("color","red");
	});
	$(".nav .totopnav .active ul li .pitem-3 font").mouseout(function(){
		$(".totopnav .active ul li .pitem-3 font").css("color","#8e8e93");
	});
	$(".nav .totopnav .active ul li .pitem-4 font").mouseover(function(){
		$(".totopnav .active ul li .pitem-4 font").css("color","red");
	});
	$(".nav .totopnav .active ul li .pitem-4 font").mouseout(function(){
		$(".totopnav .active ul li .pitem-4 font").css("color","#8e8e93");
	});
	$(".nav .totopnav .active ul li .event-1 font").mouseover(function(){
		$(".totopnav .active ul li .event-1 font").css("color","red");
	});
	$(".nav .totopnav .active ul li .event-1 font").mouseout(function(){
		$(".totopnav .active ul li .event-1 font").css("color","#8e8e93");
	});
	$(".nav .totopnav .active ul li .event-2 font").mouseover(function(){
		$(".totopnav .active ul li .event-2 font").css("color","red");
	});
	$(".nav .totopnav .active ul li .event-2 font").mouseout(function(){
		$(".totopnav .active ul li .event-2 font").css("color","#8e8e93");
	});
	$(".nav .totopnav .active ul li .event-3 font").mouseover(function(){
		$(".totopnav .active ul li .event-3 font").css("color","red");
	});
	$(".nav .totopnav .active ul li .event-3 font").mouseout(function(){
		$(".totopnav .active ul li .event-3 font").css("color","#8e8e93");
	});
	$(".nav .totopnav .active ul li .event-4 font").mouseover(function(){
		$(".totopnav .active ul li .event-4 font").css("color","red");
	});
	$(".nav .totopnav .active ul li .event-4 font").mouseout(function(){
		$(".totopnav .active ul li .event-4 font").css("color","#8e8e93");
	});
	$(".nav .totopnav .active ul li .cover-1 font").mouseover(function(){
		$(".totopnav .active ul li .cover-1 font").css("color","red");
	});
	$(".nav .totopnav .active ul li .cover-1 font").mouseout(function(){
		$(".totopnav .active ul li .cover-1 font").css("color","#8e8e93");
	});
	$(".nav .totopnav .active ul li .cover-2 font").mouseover(function(){
		$(".totopnav .active ul li .cover-2 font").css("color","red");
	});
	$(".nav .totopnav .active ul li .cover-2 font").mouseout(function(){
		$(".totopnav .active ul li .cover-2 font").css("color","#8e8e93");
	});
	$(".nav .totopnav .active ul li .cover-3 font").mouseover(function(){
		$(".totopnav .active ul li .cover-3 font").css("color","red");
	});
	$(".nav .totopnav .active ul li .cover-3 font").mouseout(function(){
		$(".totopnav .active ul li .cover-3 font").css("color","#8e8e93");
	});
	$(".nav .totopnav .active ul li .cover-4 font").mouseover(function(){
		$(".totopnav .active ul li .cover-4 font").css("color","red");
	});
	$(".nav .totopnav .active ul li .cover-4 font").mouseout(function(){
		$(".totopnav .active ul li .cover-4 font").css("color","#8e8e93");
	});
	//点击 导航栏筛选，图片隐藏 
	$(".nav .totopnav .active ul li").click(function(){
		$(".content .banner").hide();
		$(".content .chose").show();
	});
	
	//点击筛选列表选项相应列表变红，其他变黑
	$(".content .chose .pitem li a").click(function(){
		$(".content .chose .pitem li a").css("color","#8e8e93");
		$(this).css("color","red");
	});
	$(".content .chose .event li a").click(function(){
		$(".content .chose .event li a").css("color","#8e8e93");
		$(this).css("color","red");
	});
	$(".content .chose .cover li a").click(function(){
		$(".content .chose .cover li a").css("color","#8e8e93");
		$(this).css("color","red");
	});
});