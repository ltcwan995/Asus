$(function(){
//	setInterval(function(){
//		
//		$(".bg4 img").timer=setTimeout(function(){
//			$(".bg4 img").fadeOut(200);
//		},0)
//		clearTimeout($(".bg4 img").timer);
//		
//		$(".bg3 img").timer=setTimeout(function(){
//			$(".bg3 img").fadeOut(200);
//		},200)
//		clearTimeout($(".bg3 img").timer);
//		
//		$(".bg2 img").timer=setTimeout(function(){
//			$(".bg2 img").fadeOut(200);
//		},400)
//		clearTimeout($(".bg2 img").timer);
//		
//		$(".bg1 img").timer=setTimeout(function(){
//			$(".bg1 img").fadeOut(200);
//		},600)
//		clearTimeout($(".bg1 img").timer);
//		$("bg img").timer=setTimeout(function(){
//			$(".bg img").fadeIn(0);
//		},800)
//		clearTimeout($(".bg img").timer);
//	},800)
	
	function a(){
        $(".bg4 img").animate({"opacity":0},500);
    }
    function b(){
        $(".bg3 img").animate({"opacity":0},500);
    }
    function c(){
        $(".bg2 img").animate({"opacity":0},500);
    }
    function d(){
        $(".bg1 img").animate({"opacity":0},500);
    }
    function f(){
       $(".bg img").animate({"opacity":1},0);
    }
    var i=1;
    clearInterval($(".bg").timer);
    $(".bg").timer=setInterval(function(){
    	clearTimeout($(".bg4 img").timer);
    	$(".bg4 img").timer=setTimeout(a,500);
    	clearTimeout($(".bg3 img").timer);
    	$(".bg3 img").timer=setTimeout(b,1000);
    	clearTimeout($(".bg2 img").timer);
    	$(".bg2 img").timer=setTimeout(c,1500);
    	clearTimeout($(".bg1 img").timer);
    	$(".bg1 img").timer=setTimeout(d,2000);
    	clearTimeout($(".bg img").timer);
    	$(".bg img").timer=setTimeout(f,2000);
    	i++;
    	if(i>10){
    		i=0;
    	}
    },i*2000)
    
    $(".loading1 img").width(1)
    $(".loading2 img").width(1)
    $(".SSD .fg2").fadeOut(0)
    $(".SSD .fg3").fadeOut(0)
    $(window).on("scroll",function(e){
    	var scroll=$("body").scrollTop()
    	var top=$(".main5").offset().top
    	if(scroll>=top-300&&scroll<top+300){
    		$(".loading1 img").animate({"height":8},0)
    		$(".loading2 img").animate({"height":8},0)
    		$(".loading1 img").animate({"width":"100%"},500,function(){
    			$(".SSD .fg2").fadeIn(200)
    		})
    		$(".loading2 img").animate({"width":"100%"},1300,function(){
    			$(".SSD .fg3").fadeIn(200)
    		})
    	}
    })
    
    clearInterval($(".ICE .beijing2").timer);
    $(".ICE .beijing2").timer=setInterval(function(){
    	$(".ICE .beijing2").fadeOut(200);
    },200)
    clearInterval($(".ICE .beijing2").timer);
    $(".ICE .beijing2").timer=setInterval(function(){
    	$(".ICE .beijing2").fadeIn(200);
    },400)
})
