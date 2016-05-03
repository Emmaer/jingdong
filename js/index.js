window.onload=function(){
//    //今日推荐轮播动画
   var jGBox=$(".jGBox")[0];
   var jrtjt=$(".jrtjt");
   var jBox=$(".jBox")[0];

   // console.log(jGBox)
   var width1=parseInt(getStyle(jrtjt[0],"width"))
   // console.log(width1)
   var shu=0

   function lunbo(){
 shu++;
 if(shu>=4){
   shu=0;
 }
  animate(jGBox,{left:-width1*shu},500)}
   var z=setInterval(lunbo,3000)
   // 鼠标放上去停止
jBox.onmouseover=function(){
   clearInterval(z);
}
jBox.onmouseout=function(){
   z=setInterval(lunbo,3000);

}


// //今日推荐中的左右箭头和图片匹配
  var zyjtl=$(".zyjtl")[0];

  var zyjtr=$(".zyjtr")[0];
   zyjtr.onclick=function(){
      lunbo()
   }
   zyjtl.onclick=function(){
      shu--;
      if(shu<0){
         shu=jrtjt.length-1
      }
      setInterval(function(){
animate(jGBox,{left:-width1*shu},500)
  },3000)
   }
	//banner里面的轮播
var bannerBox=getClass("bannerBox")[0];
var imgs=bannerBox.getElementsByTagName("a");
var quan=bannerBox.getElementsByTagName("span");
// console.log(quan);
// console.dir(imgs);
var index=0;
var t=setInterval(move,2000);
function move(){
	imgs[index].style.zIndex=0;
	for(var a=0;a<imgs.length;a++){
			quan[a].className="";}
            
			index++; 
			if(index>=imgs.length){
			 index=0;
			}
	 // console.dir(index); if(index>5){     index=0; }
	  quan[index].className="hot";
      imgs[index].style.zIndex=10;



}
// //鼠标上去停止
bannerBox.onmouseover=function(){
	clearInterval(t);
}
bannerBox.onmouseout=function(){
	t=setInterval(move,2000);

}
//banner右箭头
var bJ=getClass("bannerJiantou")[0];
var bJLeft=getClass("left")[0];
// console.log(bJLeft);
var bJRight=getClass("right")[0];
// console.log(bJRight);
bJRight.onclick=function(){
	move()
}
//banner左箭头
bJLeft.onclick=function(){
	index--;
	for(var i=0;i<imgs.length;i++){
		imgs[i].style.zIndex=0;
			quan[i].className="";
}

if(index<0){
      index=imgs.length-1;
	}
	quan[index].className="hot";
 imgs[index].style.zIndex=10;



}
//banner按钮和图片对应

for(var n=0;n<quan.length;n++){
	quan[n].biao=n;
quan[n].onmouseover=function(){
	for(var l=0;l<imgs.length;l++){
		imgs[l].style.zIndex=0;
		quan[l].className="";
//清空
	} 
	quan[this.biao].className="hot"
	imgs[this.biao].style.zIndex=10;
}

}

// 1f的选项卡

	var as=getClass('you')[0].getElementsByTagName("a");
 // console.log(as);

	var asBox=getClass("mc_right")
	// console.log(asBox);

 for(var i=0;i<as.length;i++){
 	as[i].m=i;
 	as[i].onmouseover=function(){
 		// console.log(as[i])
 		for(var j=0;j<as.length;j++){
         asBox[j].style.zIndex="";
 		}
 		asBox[this.m].style.zIndex=1000;
 	}

}


// 品质生活里面的动画

var xfxB1=getClass("xfxB1")[0];
// alert(xfxB1)
	
	var b=xfxB1.getElementsByTagName("img")[0]
	
	// alert(img)
	
	b.onmouseover=function(){
		animate(b,{left:-10},100)
	}

	b.onmouseout=function(){
		animate(b,{left:0},100)
	}
//1f中的轮播
// var gun1=getClass("mc-rightdBox")[0];

// var img=gun1.getElementsByTagName("img")
// // console.log(gun1)
//  var w=parseInt(getStyle(img[0],"width"));
 
//    var h=parseInt(getStyle(img[0],"height"));
  
//    var num=0
//    setInterval(function(){
//    	   num++;
//    	  if(num>=4){
//    	   	num=0;
//    	   }
//    	// console.log(index)
//    		animate(gun1,{left:-num*w},500)
//    },3000);

// 2楼的选项卡
   var f2Box=getClass("f2Boxa");
   // console.log(f2Box);
   var ass=getClass('you')[1].getElementsByTagName("a");
  // console.dir(ass);
  for(var i=0;i<ass.length;i++){
 	ass[i].m=i;
 	ass[i].onmouseover=function(){
 		// console.log(ass[i])
 		for(var j=0;j<ass.length;j++){
         f2Box[j].style.zIndex="";
 		}
 		f2Box[this.m].style.zIndex=1000;
 	}
}
// 2楼1层中的轮播









// var img2Box=getClass("f2-left3-2")[0];
// var img2=getClass("f2-left3-3");
// //每一个图片

//  var w2=parseInt(getStyle(img2[0],"width"));
 
//    var h2=parseInt(getStyle(img2[0],"height"));
  
//    var num2=0
//    setInterval(function(){
//    	   num2++;
//    	  if(num2>=4){
//    	   	num2=0;
//    	   }

//    		animate(img2Box,{left:-num2*w2},500)
//    },3000);
//2f一层中按钮和图片对应
// var quan2=getClass("quan2")[0].getElementsByTagName("div");

// for(var n=0;n<quan2.length;n++){
// 	quan[n].biao2=n;
// quan[n].onmouseover=function(){
// 	for(var l=0;l<img2.length;l++){
// 		img2[l].style.zIndex=0;
// 		quan[l].className="";
// //清空
// 	} 
// 	quan2[this.biao2].className="hot"
// 	imgs[this.biao2].style.zIndex=10;
// }

// }

// 3楼选项卡
 var f3Box=getClass("f3-right");
 var f4Box=getClass("f4-right");
 var f5Box=getClass("f5-right");
 var a5=getClass("you")[4].getElementsByTagName("a");
 var a4=getClass("you")[3].getElementsByTagName("a");
 // console.log(a4)
 //   console.log(f4Box);
   var a3=getClass('you')[2].getElementsByTagName("a");
  // alert(a3.length);
  for(var i=0;i<a3.length;i++){
 	a3[i].m=i;
 	a3[i].onmouseover=function(){
 		// console.log(a3[i])
 		for(var j=0;j<a3.length;j++){
         f3Box[j].style.zIndex="";
 		}
 		f3Box[this.m].style.zIndex=1000;
 	}
}

//4楼选项卡
for(var i=0;i<a4.length;i++){
   a4[i].m=i;

   a4[i].onmouseover=function(){

      for(var j=0;j<a4.length;j++){
         f4Box[j].style.zIndex="";

        console.log(f4Box);
      f4Box[this.m].style.zIndex=1000;}
   }
}
//5楼选项卡
for(var i=0;i<a5.length;i++){
   a5[i].m=i;

   a5[i].onmouseover=function(){

      for(var j=0;j<a5.length;j++){
         f5Box[j].style.zIndex="";

        console.log(f5Box);
      f5Box[this.m].style.zIndex=1000;}
   }
}


// 3楼1层中的轮播
var img4Box=getClass("rightM")[0];
// alert(img4Box)
var img4=getClass("rightBB3");
// console.log(img4)
var img3Box=getClass("rightB2")[0];
var img3=getClass("rightB3");
//alert(img4.length)
//4楼1层轮播
 var w4=parseInt(getStyle(img4[0],"width"));

   var h4=parseInt(getStyle(img4[0],"height"));
   // alert(w4);
// alert(h4);
  
   var num4=0
   setInterval(function(){
         num4++;
        if(num4>=4){
            num4=0;
         }
console.log(num4);
         animate(img4Box,{left:-num4*w4},500)},3000);


//3楼一层轮播
 var w3=parseInt(getStyle(img3[0],"width"));
 
   var h3=parseInt(getStyle(img3[0],"height"));
  
   var num3=0
   setInterval(function(){
   	   num3++;
   	  if(num3>=4){
   	   	num3=0;
   	   }
// console.log(num3);
   		animate(img3Box,{left:-num3*w3},500)
   },3000)



//5楼一层轮播
var img5Box=getClass("right5A")[0];
// alert(img5Box)
var img5=getClass("rightB5");
 var w5=parseInt(getStyle(img5[0],"width"));
 
   var h5=parseInt(getStyle(img5[0],"height"));
  
   var num5=0
   setInterval(function(){
         num5++;
        if(num5>=4){
            num5=0;
         }
// console.log(num3);
         animate(img5Box,{left:-num5*w5},500)
   },3000)

//6楼选项卡

var f6Box=getClass("f6-right");
   // console.log(f6Box);
   var a6=getClass('you')[5].getElementsByTagName("a");
  // console.dir(a6);
  for(var i=0;i<a6.length;i++){
  a6[i].m=i;
  a6[i].onmouseover=function(){
    // console.log(ass[i])
    for(var j=0;j<a6.length;j++){
         f6Box[j].style.zIndex="";
    }
    f6Box[this.m].style.zIndex=1000;
  }
}
// 6lou轮播
var f6right2=$(".f6-right2")
// console.log(f6right2)
var f6right2BB=$(".f6-right2BB")[0];
var f6right2Box=$(".f6-right2Box");
// console.log(f6right2Box);
f6right2Box[0].style.left=-339+"px";
var y=setInterval(yidong,1500)
var next=0;
var now=0;
function yidong(){
  next++;
  if(next>3){
    next=0;
  }
f6right2Box[next].style.left=0+"px";
animate(f6right2Box[now],{left:-678},300)
animate(f6right2Box[next],{left:-339},300)
now=next;
}
var lbtn=(".l-btn")[0]
var rbtn=$(".r-btn")[0]
var rlbtn=$(".rl-btn")[0]
// console.log(rlbtn)
for(var i=0;i<5;i++){
  f6right2[i].onmouseover=function(){
    clearInterval(y);
    rlbtn.style.display='block';
  }
  f6right2[i].onmouseout=function(){
    y=setInterval(yidong,1500)
    rlbtn.style.display='';
  }}
  // 侧栏控制轮播图
  rbtn.onclick=function(){
    yidong();
  }
  lbtn.onclick=function(){
    if(!flag){return;}
    flag=false;
    next1--;
    if(next<0){
      next=4
    } 
    // for(var j=0;j<5;j++){
    //   main6dian[j].style.backgroundColor='';
    // }
    // main6dian[now].style.backgroundColor='red';
    f6right2Box[next].style.left=-678+'px';
    animate(f6right2Box[now],{left:0},300);
    animate(f6right2Box[next],{left:-339},300,function(){
      flag=true;
    });
    now=next;
   }

//7lou轮播
var f7right2BB=$(".f7-right2BB")[0];
var f7right2Box=$(".f7-right2Box");
f7right2Box[0].style.left=-339+"px";
setInterval(yidong2,1500)
var next2=0;
var now2=0;
function yidong2(){
  next2++;
  if(next2>3){
    next2=0;
  }
f7right2Box[next2].style.left=0+"px";
animate(f7right2Box[now2],{left:-678},300)
animate(f7right2Box[next2],{left:-339},300)
now2=next2;
}
//7楼选项卡
var f7Box=getClass("f7-right");
// console.log(f7Box)
   var a7=getClass('you')[6].getElementsByTagName("a");
   // console.log(a7)
function xuanxiangka(a,b){
  for(var i=0;i<b.length;i++){
    a[i].index=i;
    a[i].onmouseover=function(){
      for(var j=0;j<b.length;j++){
        b[j].style.zIndex=0;
      }
   b[this.index].style.zIndex=1000 }
  }
}
xuanxiangka(a7,f7Box)
//8楼选项卡
var f8Box=getClass("f8-right");

   var a8=getClass('you')[7].getElementsByTagName("a");
xuanxiangka(a8,f8Box)
//8楼轮播

var f8right2BB=$(".f8-right2BB")[0];
var f8right2Box=$(".f8-right2Box");
f8right2Box[0].style.left=-339+"px";
setInterval(yidong3,1500)
var next3=0;
var now3=0;
function yidong3(){
  next3++;
  if(next3>3){
    next3=0;
  }
f8right2Box[next3].style.left=0+"px";
animate(f8right2Box[now3],{left:-678},300)
animate(f8right2Box[next3],{left:-339},300)
now3=next3;
}






//9楼选项卡
var f9Box=getClass("f9-right");

   var a9=getClass('you')[8].getElementsByTagName("a");
xuanxiangka(a9,f9Box)
//9lou轮播
var f9right2BB=$(".f9-right2BB")[0];
var f9right2Box=$(".f9-right2Box");
f8right2Box[0].style.left=-339+"px";
setInterval(yidong4,1500)
var next4=0;
var now4=0;
function yidong4(){
  next4++;
  if(next4>3){
    next4=0;
  }
f9right2Box[next4].style.left=0+"px";
animate(f9right2Box[now4],{left:-678},300)
animate(f9right2Box[next4],{left:-339},300)
now4=next4;
}




//11楼轮播

var f11left2=$(".f11-left2-1")[0];
var imgs11=$("img",f11left2);


  
  // var innerB=$('.inner')[0];
  var imgswsa=parseInt(getStyle(imgs11[0],'width'));
  var btn11L=$('.btn11L')[0];
  var btn11R=$('.btn11R')[0];

  var btn110=$(".btn110")[0]
  var dian11=$('div',$('.f11dian')[0]);
  var now11=0;
  var next11=0;
  var flag11=true;
  imgs11[0].style.left=0;
  var ts=setInterval(mov11,1000);
  function mov11(){
    if(!flag11==true){return;}
    flag11=false;
    next11++;
    if(next11>imgs11.length-1){
      next11=0;
    }
    dian11[now11].className='';
    dian11[next11].className='hot11';
    imgs11[next11].style.left=imgswsa+'px';
    animate(imgs11[now11],{left:-imgswsa},300);
    animate(imgs11[next11],{left:0},300,function(){
      flag11=true;
    });
    now11=next11;
  }
  f11left2.onmouseover=function(){
    clearInterval(ts);
    // btn110.style.display="block"

  }
  f11left2.onmouseout=function(){
    ts=setInterval(mov11,1000);
    btn110.style.display=""
  }
  btn11R.onclick=function(){
    mov11();
  }
  btn11L.onclick=function(){
    if(!flag11==true){return;}
    flag11=false;
    next11--;
    if(next11<0){
      next11=imgs11.length-1;
    }
    dian11[now11].className='';
    dian11[next11].className='hot11';
    imgs11[next11].style.left=-imgswsa+'px';
    animate(imgs11[now11],{left:imgswsa},300);
    animate(imgs11[next11],{left:0},300,function(){
      flag11=true;
    });
    now11=next11;
  }
  for(var i=0;i<dian11.length;i++){
    dian11[i].index=i;
    dian11[i].onclick=function(){
      if(this.index==now11||!flag11){return}{
        flag11=false;
      }
      if(this.index>now11){
        imgs11[this.index].style.left=imgswsa+'px';
        animate(imgs11[now11],{left:-imgswsa},300);
      }else if(this.index<now11){
        imgs11[this.index].style.left=-imgswsa+'px';
        animate(imgs11[now11],{left:imgswsa},300);
      }
      dian11[now11].className='';
      dian11[this.index].className='hot11';
      animate(imgs11[this.index],{left:0},300,function(){
        flag11=true;
      });

      now11=next11=this.index;
    }
  }


















//天天低价的动画

var f12Boxa=getClass("f12Box-1")[0];
 // alert(f12Boxa)
  
  var f12BoxImg=f12Boxa.getElementsByTagName("img")[0]

  
 f12BoxImg.onmouseover=function(){
    animate(f12BoxImg,{marginLeft:10},100)
  }

  f12BoxImg.onmouseout=function(){
   
    animate(f12BoxImg,{marginLeft:20},100)
  }

//小动画包装
var f12Boxb=$(".f12Box-2a")
for(var i=0;i<f12Boxb.length;i++){

  var p=$("img",f12Boxb[i])[0];

smallM(p)}


console.log(f12Boxb)

  function smallM(p){
    
    p.onmouseover=function(){
    animate(p,{marginLeft:-5},100)
  }

  p.onmouseout=function(){
    animate(p,{marginLeft:5},100)
  }
 
  }
//楼层跳转1428, 753, 1472, 2191, 2910,3487, 4064, 4641, 5218, 5795, 6372]
var title=$(".f2-title")
console.log(title.length)
var loua=$(".loua")
console.log(loua.length)
var lou1=$(".lou1")
var lou2=$(".lou2")

    var newarr=[1420, 2174, 2895, 3610,4329, 4910, 5473, 6060, 6632,7210,7800];
    // for(var i=0;i<title.length;i++) {
    //   // alert(i);
    //   newarr.push(title[i].offsetTop);
    //   console.log(newarr);
    // }
  
    for(var j=0;j<newarr.length;j++){
      loua[j].index=j;
      // alert(j)
      loua[j].onclick=function(){
        // alert(2222)
        animate(document.body,{scrollTop:newarr[this.index]},200)
        // ||animate(document.documentElement,{scrollTop:newarr[this.index]},200)
      }
      
    }
    window.onscroll=function(){
      var doc=document.body.scrollTop?document.body:document.documentElement;
      for(var i=0;i<newarr.length;i++){
 
    if(doc.scrollTop>=newarr[i]){
     for (var j=0;j<newarr.length;j++){
      lou2[j].style.display="none";
      lou1[j].style.display="block"
        
     }
     lou2[i].style.display="block";
     lou2[i].style.backgroundColor=" #C81623";
     lou2[i].style.color=" #fff";
      lou1[i].style.display="none"
}
    }
  
   

 }  
// gouwuche
var down=$(".down");
var up=$(".up")
    for(var i=0;i<up.length;i++){
   mov(up[i],down[i]);     
  }
  function mov(up,down){
    up.onmouseover=function(){
    animate(down,{right:30},300);
  }
  up.onmouseout=function(){
    setTimeout(function(){
      animate(down,{right:-90},300);
     },500)
  }
  down.onmouseover=function(){
    up.onmouseout='null';
    animate(down,{right:30},300);
  }
  down.onmouseout=function(){
    animate(down,{right:-90},300);     
  }
  }
//返回顶部
var fanhui=$(".fanhui")[0];
fanhui.onclick=function(){       
        animate(document.body,{scrollTop:0},200)
}


// 下拉

var xialaa=$(".xialaa");
var xialab=$(".xialab");
for(var i=0;i<xialaa.length;i++){
  xiala(i);
}
function xiala(i){
xialaa[i].onmouseover=function(){
  xialab[i].style.display="block"
  xialaa[i].style.cssText="border:1px solid #AFAFAF;border-bottom:1px solid #fff;"
}
var t;
xialaa[i].onmouseout=function(){
  t=setTimeout(function(){
  xialab[i].style.display="" 
   xialaa[i].style.cssText="border-color:#f1f1f1;" 
  },100)

}
xialab[i].onmouseover=function(){
  clearTimeout(t)
  xialab[i].style.display="block"
}
xialab[i].onmouseout=function(){
  
  xialab[i].style.display=""
   xialaa[i].style.cssText="border-color:#f1f1f1;"   
 
}





}


var bannerLeft1=$(".bannerLeft1")[0]
var xialaaa=$(".xialaaa",bannerLeft1);
console.log(xialaaa)
var xialabb=$(".xialabb");
for(var i=0;i<xialaaa.length;i++){
  xialaba(i);
}
function xialaba(i){
xialaaa[i].onmouseover=function(){
  xialabb[i].style.display="block"
  // xialaaa[i].style.cssText="border:1px solid #AFAFAF;border-bottom:1px solid #fff;"
}
var t;
xialaaa[i].onmouseout=function(){
  t=setTimeout(function(){
  xialabb[i].style.display="" 
   xialaaa[i].style.cssText="border-color:#f1f1f1;" 
  },100)

}
xialabb[i].onmouseover=function(){
  clearTimeout(t)
  xialabb[i].style.display="block"
}
xialabb[i].onmouseout=function(){
  
  xialabb[i].style.display=""
   // xialaaa[i].style.cssText="border-color:#f1f1f1;"   
 
}


}
//按需加载
var boxx=$('.boxx');
  // alert(boxx.length)
  var docH=document.documentElement.clientHeight;
  var imgaass=$('img');

  // console.log(imgaass)
  // console.log(boxx)
  var newarrss=[];
  for(var i=0;i<boxx.length;i++){
    newarrss.push(boxx[i].offsetTop);   
  }

  console.log(newarrss)
  window.onscroll=function(){
  var doc=document.body.scrollTop?document.body:document.documentElement;
  
    for(var i=0;i<boxx.length;i++){
      if(doc.scrollTop+docH>=newarrss[i]){
       for(var k=0;k<imgaass.length;k++){
      imgaass[k].src=imgaass[k].getAttribute('asrc');
      
    }
    }
    }   
  }
    window.onscroll();
}












