$(function(){
//	导航切换
	$(".product .dropdown-menu .info").hide();
	$(".product .dropdown-menu .info").eq(0).show();
	$(".product .dropdown-menu .pic").hide();
	$(".product .dropdown-menu .pic").eq(0).show();
	$(".product .dropdown-menu>li a").on("mouseenter",function(){
		var index=$(this).parent().index();
		$(".product .dropdown-menu .info").hide();
		$(".product .dropdown-menu .info").eq(index).show();
		$(".product .dropdown-menu .pic").hide();
		$(".product .dropdown-menu .pic").eq(index).show();
	})
	$(".business .dropdown-menu .info").hide();
	$(".business .dropdown-menu .info").eq(0).show();
	$(".business .dropdown-menu>li a").on("mouseenter",function(){
		var index=$(this).parent().index();
		$(".business .dropdown-menu .info").hide();
		$(".business .dropdown-menu .info").eq(index).show();
	})
	//返回顶部
    $(window).scroll( function() { 
        if($(window).scrollTop()>150){
            $(".bTop").show();
        }
        else{
            $(".bTop").hide();
        }
    } );
    $(".bTop").on("click",function(){
        $('html,body').animate({scrollTop:0},400,"swing");
    }) 
    
    $(window).on("resize",function(){
    	if($("body").width()<768){
    		$(".footer ul").hide();
    		$(".footer h4").each(function(index,item){
    			$(item).on("click",function(){
					$(".footer ul").hide();
					$(".footer").find("ul").eq(index).show()
    			})
    		})
    	}
    	else{
    		$(".footer ul").show();
    		$(".footer h4").each(function(index,item){
    			$(item).on("click",function(){
    				$(".footer ul").show();
    			})
    		})
    	}
    }).trigger("resize");
    
//  块级切换
	$(".title ul li").eq(0).css("border-top","2px solid #000");
	$(".title ul li").on("click",function(){
		var index=$(this).index();
		$(".title ul li").eq(index).css("border-top","2px solid #000").siblings().css("border-top","2px solid transparent");
		$(".main>div").eq(index).show().siblings().hide();
		$(".main>div").eq(3).show();
	})
	
//	导航栏下拉菜单定时影藏
//	$(".nav .dropdown-menu").on("mouseleave",function(){
//		console.log($(".nav .dropdown-menu"))
//		var index=$(this).index();
//		console.log(index)
//		setTimeout(function(){
//			$(".nav .dropdown").eq(index).removeClass("open")
//		},1000)
//	})
	$(".nav .dropdown-menu").each(function(index,item){
		$(item).on("mouseleave",function(){
			item.timer=setTimeout(function(){
				$(".nav .dropdown").eq(index).removeClass("open")
			},1000)
			$(item).on("mouseenter",function(){
				clearTimeout(item.timer);
			})
		})
	})
})
