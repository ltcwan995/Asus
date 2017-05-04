$(function(){
	 // 透明度轮播图
    var liS=$(".slideImg li");
    var num=0;
	//第一张图片的层级设为1，其它图片透明度为0
    liS.eq(0).css("z-index",1).siblings().css("opacity",0);
    //添加小圆点
    for(var i=0;i<liS.length;i++){
        $("<span></span>").appendTo(".circle");
    }
    var spanS=$(".circle span")
    $(".circle").css("marginLeft","-65px");
    light();
    //点击小圆点 轮播图透明度和层级改变
    spanS.on("click",function(){
        var index=$(this).index();
        if(num!=index){
            liS.eq(index).css({"opacity":0,"z-index":1})
            liS.eq(num).css("z-index",0)
            liS.eq(num).animate({"opacity":0}, 500);
            liS.eq(index).animate({"opacity":1}, 500)
        }
        num=index;
        light();
    })
    function light(){
    	spanS.eq(num).css("background","#428bca").siblings().css("background","#ccc");
    	spanS.eq(num).animate({"width":30},300).siblings().animate({"width":10},300);
    }
    var isMove = false;
    var startX = 0;
    var moveX = 0;
    var distanceX=0;
    liS.on("touchstart", function (e) {
        startX = e.originalEvent.touches[0].clientX;
    }).on("touchmove", function (e) {
        moveX = e.originalEvent.touches[0].clientX;
        isMove = true;
    }).on("touchend", function (e) {
        distanceX = moveX - startX;
        if(Math.abs(distanceX)>50&&isMove){
            if(distanceX<0){
                //下一张
                liS.eq(num).css("z-index",0)
                liS.eq(num).animate({"opacity":0}, 500);
                num++;
                if(num>liS.length-1){
                	num=0;
                }
                liS.eq(num).animate({"opacity":1}, 500)    
            }else if(distanceX>0){
                //上一张
                liS.eq(num).css("z-index",0)
                liS.eq(num).animate({"opacity":0}, 500);
                num--;
                if(num<0){
                	num=liS.length-1;
                }
                liS.eq(num).animate({"opacity":1}, 500)
            }
            light();
        }
    })
    
//  大ul显示影藏
    $(".choice>li>a").on("click",function(){
    	if($(this).parent().children("ul").css("display")=="none"){
    		$(this).parent().children("ul").show();
    		$(this).css("background","url(img/GC/close_round.png)")
    	}
    	else{
    		$(this).parent().children("ul").hide();
    		$(this).css("background","url(img/GC/open_round.png)")
    	}
    })
//  小ul显示影藏
    $(".GraphicsCores .open").on("click",function(){
    	if($(this).parent().children("ul").css("display")=="none"){
    		$(this).parent().children("ul").show();
    		$(this).parent().find(".open").css("background","url(img/GC/close_round_min.png) no-repeat")
    	}
    	else{
    		$(this).parent().children("ul").hide();
    		$(this).parent().find(".open").css("background","url(img/GC/open_round_min.png) no-repeat")
    	}
    })
    $(".GraphicsCores>li>a").on("click",function(){
    	if($(this).parent().children("ul").css("display")=="none"){
    		$(this).parent().children("ul").show();
    		$(this).parent().find(".open").css("background","url(img/GC/close_round_min.png) no-repeat")
    	}
		if($(this).siblings("input").prop("checked")==false){
    		$(this).siblings("input").prop("checked",true);
    	}else{
    		$(this).siblings("input").prop("checked",false);
    	}
    	if($(this).siblings("input").prop("checked")==true){
    		$(this).parent().find("li input").prop("checked",true);
    	}else{
    		$(this).parent().find("li input").prop("checked",false);
    	}
    })
//	全选/反选
    $(".GraphicsCores>li>input").on("click",function(){
    	if($(this).prop("checked")==true){
    		$(this).parent().find("li input").prop("checked",true);
    	}else{
    		$(this).parent().find("li input").prop("checked",false);
    	}
    })
    
    $(".GraphicsCores>li>ul>li>input").on("click",function(){
    	var count=0;
    	var length=$(this).parent().parent().find("input").length;
    	$(this).parent().parent().find("input").each(function(index,item){
    		if($(item).prop("checked")==true){
    			count++;
    		}	
    	})
    	if(count==length){
			$(this).parent().parent().parent().children("input").prop("checked",true)
    	}
    	else{
    		$(this).parent().parent().parent().children("input").prop("checked",false);
    	}
    })
//  重置筛选
    $(".rest").on("click",function(){
    	$(".choice input").prop("checked",false);
    })
})
