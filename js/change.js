$("document").ready(function(){
	//获取图片
	var img=$(".content .index-image img");
	//设置时间初始值
	var time=null;
	//设置显示图片初始值
	var now=-1;
	//获取图片宽度
	var width=$(".content img").width();
	//获取图片高度
	var height=$(".content img").height();
	//设置ul宽度
	$(".content .change ul").width(27*img.length);
	//添加li个数
	for(i=0;i<img.length;i++){
		$(".content .change ul").append($("<li></li>"));
	};
	var li=$(".content .change ul li");
	img.first().addClass("now");
	li.first().addClass("white");
	//li的鼠标悬浮变色，显示相应图片，并停止滚动
	img.mouseover(function(){
		clearTimeout(time);
	});
	img.mouseout(function(){
		time=setInterval(function(){changebanner()},3000)
	});
	
	li.mouseover(function(){
		clearTimeout(time);
		now=$(this).index()-1;
		img.eq(now).siblings().stop(true,false);
		changebanner();
	});
	
	//自动切换函数
	function changebanner(){
		clearInterval(time);
		now+=1;
		if(now>img.length-1){
			now=0;
		};
		li.eq(now).addClass("white").siblings().removeClass("white");
		img.eq(now).addClass("now").fadeTo("slow",1).siblings().removeClass("now").fadeTo("slow",0);
		time=setTimeout(function(){changebanner();},3000);
		return now;
	}
	changebanner();
	//翻页
	$(".content .banner .btn .pre").click(function(){
		clearTimeout(time);
		if(now==-1){
			now=img.length-1;
		};
		now-=2;
		img.eq(now).siblings().stop(true,false);
		changebanner();
	});
	$(".content .banner .btn .next").click(function(){
		clearTimeout(time);
		img.eq(now).siblings().stop(true,false);
		changebanner();
	});
});
