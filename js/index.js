$(function(){
/*header*/
$('.header-content-lione').mouseover(function(){
	$(this).css({background:'#fff',borderRight:'1px solid #ddd',borderLeft:'1px solid #ddd'})
	$(".address").show();
	/*$('.x').css({transform:'rotateZ(360deg)'}) */
})
$('.header-content-lione').mouseout(function(){
	$(".address").hide();
	$(this).css({background:'#f1f1f1',borderRight:'1px solid #f1f1f1',borderLeft:'1px solid #f1f1f1'})
})
$('.address li:not(".b-j")').mouseover(function(){
	$(this).css({background:'#F4F4F4',color:'#C81623'})
})
$('.address li:not(".b-j")').mouseout(function(){
	$(this).css({background:'#FFF',color:'#666'})
})
$('.xiala').each(function(i){
	$('.xiala').eq(i).mouseover(function(){
		$(this).css({background:'#fff',borderRight:'1px solid #ddd',borderLeft:'1px solid #ddd'})
		$('.changes').eq(i).css({display:'block'})
		$('.x').eq(i+1).css({transform:'rotateZ(180deg)'})
	})
	$('.xiala').eq(i).mouseout(function(){
		$(this).css({background:'#f1f1f1',borderRight:'1px solid #f1f1f1',borderLeft:'1px solid #f1f1f1'})
		$('.changes').eq(i).css({display:'none'})
		$('.x').eq(i+1).css({transform:'rotateZ(0)'})
	})
})
$('.xiala').last().css({paddingLeft:4})
/*search*/
$(":input").focus(function(){
	if($(":text").val()=="疯狂动物城"){
		$(":text").val("");

	}
})
$(":input").blur(function(){
	if($(":input").val()==""){
		$(":text").val("疯狂动物城");
	}
})
$('.se-r').hover(function(){
	$('.se-r-hide').css({display:'block'});


},function(){
	$('.se-r-hide').css({display:'none'})
	$(this).css({boxShadow:'none'})
})
/*banner*/
var num=0;
function move(){
	num++;
	if(num==6){
		num=0;
	}
$('.b-b-c-m-imgs img').fadeOut();	
$('.b-b-c-m-imgs img').eq(num).fadeIn();
$('.b-b-c-m-radius').css({background:'#3e3e3e'})	
$('.b-b-c-m-radius').eq(num).css({background:'#B61B1F'})	
}
var t=setInterval(move,1000)
$('.b-b-c-m-imgs img').hover(function(){
$('.b-b-c-m-buttons-r').css({display:'block'})
$('.b-b-c-m-buttons-l').css({display:'block'})
clearInterval(t)
},function(){
$('.b-b-c-m-buttons-r').css({display:'none'})
$('.b-b-c-m-buttons-l').css({display:'none'})
t=setInterval(move,1000)
})
$('.b-b-c-m-radius').hover(function(){
var index=$(this).index();
$('.b-b-c-m-radius').css({background:'#3e3e3e'})
$(this).css({background:'#B61B1F'})
$('.b-b-c-m-imgs img').fadeOut();	
$('.b-b-c-m-imgs img').eq(index).fadeIn();
num=index
clearInterval(t)
},function(){
t=setInterval(move,1000)
})
$('.b-b-c-m-buttons-l').mouseover(function(){

$('.b-b-c-m-buttons-r').css({display:'block'})
$('.b-b-c-m-buttons-l').css({display:'block'})	
clearInterval(t)
})
$('.b-b-c-m-buttons-r').mouseover(function(){
$('.b-b-c-m-buttons-r').css({display:'block'})
$('.b-b-c-m-buttons-l').css({display:'block'})	
clearInterval(t)
})
$('.b-b-c-m-buttons-l').mouseout(function(){
$('.b-b-c-m-buttons-r').css({display:'none'})
$('.b-b-c-m-buttons-l').css({display:'none'})	
t=setInterval(move,1000)
})
$('.b-b-c-m-buttons-r').mouseout(function(){
$('.b-b-c-m-buttons-r').css({display:'none'})
$('.b-b-c-m-buttons-l').css({display:'none'})
t=setInterval(move,1000)	
})
$('.b-b-c-m-buttons-r').click(function(){
	num++;
	if(num==6){
		num=0;
	}
$('.b-b-c-m-imgs img').fadeOut();	
$('.b-b-c-m-imgs img').eq(num).fadeIn();
$('.b-b-c-m-radius').css({background:'#3e3e3e'})
$('.b-b-c-m-radius').eq(num).css({background:'#B61B1F'})
})
$('.b-b-c-m-buttons-l').click(function(){
	num--;
	if(num==-1){
		num=5;
	}
$('.b-b-c-m-imgs img').fadeOut();	
$('.b-b-c-m-imgs img').eq(num).fadeIn();
$('.b-b-c-m-radius').css({background:'#3e3e3e'})
$('.b-b-c-m-radius').eq(num).css({background:'#B61B1F'})
})
//右侧


$('.change-fix').each(function(i){

$('.change-fix').eq(i).hover(function(){
	$('.hidden-word').eq(i).css({display:'block'});
$('.hidden-word').eq(i).animate({marginLeft:-60},200);
$('.images-par').eq(i).css({background:'#c81623'})
},function(){
$('.hidden-word').eq(i).css({display:'none'});
$('.hidden-word').eq(i).animate({marginLeft:0},200);
$('.images-par').eq(i).css({background:'#7A6E6E'})
})



})
//天天低价
$('img',$('.dijia-leftboxs2')).hover(function(){
$(this).animate({marginLeft:-5})
},
	function(){
$(this).animate({marginLeft:0})
	})
//楼层
/*leftfixeddivs
activefloor*/
/*	*/


/*	,function(){
		
	})*/

	/*	*/
/*
       	
    */
$('.leftfixeddivs').each(function(i){
	 var index=$(this).index();
	  $('.leftfixeddivs').eq(i).hover(function(){
	  	$('.hid-numb').eq(index).css({display:'block'});
	  	$('.hid-descri').eq(index).css({display:'block'})
	  },function(){
        $('.hid-numb').eq(index).css({display:'none'});
	  	$('.hid-descri').eq(index).css({display:'none'})
	  })
	  $('.leftfixeddivs').eq(i).click(function(){
	
    $("html,body").animate({scrollTop:$('.activefloor').eq(i).offset().top},1000);
   

	})

		
	
})
$(window).scroll(function(){
	var scrollT=$(window).scrollTop()
	if($(window).scrollTop()>1400&&$(window).scrollTop()<8000){
	$('.leftfixedboxss').css({display:'block'})
}else{
	$('.leftfixedboxss').css({display:'none'})
}
       $(".activefloor").each(function(i){
       	 if(scrollT>$(".activefloor").eq(i).offset().top-200){
       	 	 $(".numb").css({display:'block',color:'#625351'});
       	 	 $(".descri").css({display:'none'});

       	  $(".descri").eq(i).css({display:"block",color:'#C81623'});
       	 
       	    $(".floorst").eq(i).css({zIndex:999999});
       	    $('.floors').eq(i).css({color:'#CCCCCC'});
             $(".numb").eq(i).css({display:'none'});
       	   $(".floorst").eq(i).animate({top:-36},800,function(){
       	   	
       	   });
                    }
       })

           


         })


//dijia
//dijia

var dijialength=$('.dijia-content-rcb')

function dijia(){
   
    var first=$('.dijia-content-rcb').eq(0);
    var last=$('.dijia-content-rcb').eq(5);
	$('.rcbpar').animate({top:-140},500,function(){
      first.insertAfter(last);
      $('.rcbpar').css({top:0});
	});
   
}
var di=setInterval(dijia,1000)
//banner-hidden

$('.b-b-c-l-c').each(function(i){

$('.b-b-c-l-c').eq(i).hover(function(){
	var index=$(this).index();
$('.b-b-c-l-c').eq(index).css({background:'#F7F7F7',borderLeft:'1px solid #B61D1D'});
$('.b-b-a',$('.b-b-c-l-c').eq(index)).css({color:'#B61D1D'});
$('.banner-hidden').eq(index).css({display:'block'});
},
function(){

$('.banner-hidden').css({display:'none'})
$('.b-b-c-l-c').css({background:'#C81623',borderLeft:'none'});
$('.b-b-a',$('.b-b-c-l-c')).css({color:'#fff'});

})

})

//red circle
function gocircle(){
	$('.i').css({display:'block'});
	$('.i').animate({right:0},700,function(){
		$(this).animate({display:'none'},1800,function(){
			$(this).css({right:846,display:'none'})
		})
	});
	$('.circle').css({display:'block'});
	$('.circle').animate({right:-4},700,function(){
		$(this).animate({display:'none'},1800,function(){
			$(this).css({right:846,display:'none'})
		})
	});
}
var gocir=setInterval(gocircle,4000);

})