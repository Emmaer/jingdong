window.onload=function(){
//今日推荐
var changeboxs=document.querySelector(".change-boxs");
var lbb=document.querySelectorAll(".l-b-b");
var lbrlb=document.querySelector(".l-b-r-lb");
var lbrrb=document.querySelector(".l-b-r-rb");
var cib=document.querySelectorAll(".change-img-box");
for(var i=0;i<cib.length;i++){
	cib[i].onmouseover=function(){
	for(var i=0;i<lbb.length;i++){
		lbb[i].style.display="block";
	}
}
}

for(var i=0;i<cib.length;i++){
	cib[i].onmouseout=function(){
	for(var i=0;i<lbb.length;i++){
		lbb[i].style.display="none";
	}
}
}
lbrlb.onmouseover=function(){
	for(var i=0;i<lbb.length;i++){
		lbb[i].style.display="block";
	}
}
lbrlb.onmouseout=function(){
	for(var i=0;i<lbb.length;i++){
		lbb[i].style.display="none";
	}
}
lbrrb.onmouseover=function(){
	for(var i=0;i<lbb.length;i++){
		lbb[i].style.display="block";
	}
}
lbrrb.onmouseout=function(){
	for(var i=0;i<lbb.length;i++){
		lbb[i].style.display="none";
	}
}
var num=1;
function changeGoL(f){
	if(f=="l"){
		num++
		if(num==5){
			animate(changeboxs,{left:-1003*num},1000,Tween.Linear,function(){
				changeboxs.style.left=-1003+"px";
			});





			num=1;

		}else
		{
			animate(changeboxs,{left:-1003*num},1000,Tween.Linear);

		}

	}
	else if(f=="r"){
		num--
		if(num==0){
			animate(changeboxs,{left:-1003*num},1000,Tween.Linear,function(){
				changeboxs.style.left=-4012+"px";
			});





			num=4;

		}else
		{
			animate(changeboxs,{left:-1003*num},1000,Tween.Linear);

		}
	}
}

lbrlb.onclick=function(){
	changeGoL("l")
}
lbrrb.onclick=function(){
	changeGoL("r")
}
//猜你喜欢
var gc=document.querySelector(".getchange");//一个a
var likecontentb=document.querySelectorAll(".like-content-b");//4个div集合
var x=0;
gc.onclick=function(){
	x++;
	if(x==likecontentb.length){
		x=0
	}
	for(var i=0;i<likecontentb.length;i++){
		likecontentb[i].style.display="none";
	}
	likecontentb[x].style.display="block"
}
var mlimg=document.querySelectorAll(".mlimg");
for(var i=0;i<mlimg.length;i++){
	mlimg[i].index=i;
	mlimg[i].onmouseover=function(){
		for(var j=0;j<mlimg.length;j++){
			mlimg[j].style.marginLeft=0;
		}
    mlimg[this.index].style.marginLeft=-10+"px";
	} 
	mlimg[i].onmouseout=function(){
		
    mlimg[this.index].style.marginLeft=0+"px";
	} 
}



//楼层选项卡

function changecard(changenum){
var onefloor=getClass('onefloor')[changenum];

var changem=getClass('change-m',onefloor);
var changer=getClass('change-r',onefloor);
var changeli=getClass('changeli',onefloor);
var moreactivea=getClass('moreactivea',onefloor);
for(var b=0;b<changeli.length;b++){
	changeli[b].index=b;
	changeli[b].onmouseover=function(){
		for(var i=0;i<changeli.length;i++){
			changem[i].style.display="none";
			changer[i].style.display="none";
			changeli[i].classList.remove("moreactiveli");
			
		}
		for(var j=0;j<moreactivea.length;j++){
			moreactivea[j].style.borderRight="1px solid #ccc"
		}
		changem[this.index].style.display="block";
		changer[this.index].style.display="block"
		changeli[this.index].classList.add("moreactiveli")
		moreactivea[this.index].style.borderRight="0";
		moreactivea[this.index-1].style.borderRight="0";
	}
}
}
changecard(0);
changecard(1);
changecard(2);
changecard(3);
changecard(4);
changecard(5);

/*

changecard(6);
changecard(7);
changecard(8);
changecard(9);
changecard(10);
*/
function changecardtwo(cards){
var twofloor=getClass('twofloor')[cards];
var changetwoli=getClass('changetwoli',twofloor);
var tchangecards=getClass('tchangecards',twofloor);
var twomoreactivea=getClass('twomoreactivea',twofloor);
for(var b=0;b<changetwoli.length;b++){
	changetwoli[b].index=b;
	changetwoli[b].onmouseover=function(){
		for(var i=0;i<changetwoli.length;i++){
			tchangecards[i].style.display="none";
			changetwoli[i].classList.remove("moreactiveli");
			
		}
		for(var j=0;j<twomoreactivea.length;j++){
			twomoreactivea[j].style.borderRight="1px solid #ccc"
		}
			tchangecards[this.index].style.display="block";
		changetwoli[this.index].classList.add("moreactiveli")
		twomoreactivea[this.index].style.borderRight="0";
		twomoreactivea[this.index-1].style.borderRight="0"
	}
}
}
changecardtwo(0);
changecardtwo(1);
changecardtwo(2)
changecardtwo(3)


//1楼层中的轮播
function onefloorchange(lunbonum){
var onefloorchange=getClass("onefloor-content-bottom-m-m")[lunbonum]
var onefloorimgbox=getClass("onefloor-content-bottom-m-m-imgbox",onefloorchange)[0];
var numbers=1;
var onefloorimgs=getClass('onefloor-content-bottom-m-m-img',onefloorchange);
var onefloorbtn=getClass("onefloor-content-bottom-m-m-btn",onefloorchange);
function changeGo(){
	numbers++;
	if(numbers==5){
			animate(onefloorimgbox,{left:-439*numbers},500,Tween.Linear,function(){
				onefloorimgbox.style.left=-439+"px";
			});
         numbers=1;
         }else
		{
			animate(onefloorimgbox,{left:-439*numbers},500,Tween.Linear);
}
		for(var q=0;q<onefloorbtn.length;q++){
		onefloorbtn[q].style.background="#3e3e3e";
			}
	onefloorbtn[numbers-1].style.background="#b61B1F"		
}

var onefloors=setInterval(changeGo,1500);
for(var b=0;b<onefloorbtn.length;b++){
	onefloorbtn[b].index=b;
	onefloorbtn[b].onmouseover=function(){
   clearInterval(onefloors);
    animate(onefloorimgbox,{left:-439*(this.index+1)},500,Tween.Linear);
  		for(var q=0;q<onefloorbtn.length;q++){
		onefloorbtn[q].style.background="#3e3e3e";
			}
	 onefloorbtn[this.index].style.background="#b61B1F"	;
	  
     
	}
		onefloorbtn[b].onmouseout=function(){

			onefloors=setInterval(changeGo,1500);
			numbers=this.index+1
		}
}
for(var k=0;k<onefloorimgs.length;k++){
	onefloorimgs[k].index=k;
	onefloorimgs[k].onmouseover=function(){
		clearInterval(onefloors);
	}
	onefloorimgs[k].onmouseout=function(){
		onefloors=setInterval(changeGo,1500);
	}
}
}
onefloorchange(0)
onefloorchange(1)
onefloorchange(2)
onefloorchange(3)
onefloorchange(4)
onefloorchange(5)
//二层中的轮播 
function twofloorchange(lunbonum){
var twofloorchange=getClass("twofloor-content-bottom-m")[lunbonum]
var twofloorimgbox=getClass("twofloor-content-bottom-m-m-imgbox",twofloorchange)[0];
var numbers=1;
var twofloorimgs=getClass('twofloor-content-bottom-m-m-img',twofloorchange);
var twofloorbtn=getClass("twofloor-content-bottom-m-m-btn",twofloorchange);
function changeGo2(){
	numbers++;
	if(numbers==5){
			animate(twofloorimgbox,{left:-339*numbers},500,Tween.Linear,function(){
				twofloorimgbox.style.left=-339+"px";
			});
         numbers=1;
         }else
		{
			animate(twofloorimgbox,{left:-339*numbers},500,Tween.Linear);
}
		for(var q=0;q<twofloorbtn.length;q++){
		twofloorbtn[q].style.background="#3e3e3e";
			}
	twofloorbtn[numbers-1].style.background="#b61B1F"		
}

var twofloors=setInterval(changeGo2,1500);
for(var b=0;b<twofloorbtn.length;b++){
	twofloorbtn[b].index=b;
	twofloorbtn[b].onmouseover=function(){
   clearInterval(twofloors);
    animate(twofloorimgbox,{left:-339*(this.index+1)},500,Tween.Linear);
  		for(var q=0;q<twofloorbtn.length;q++){
		twofloorbtn[q].style.background="#3e3e3e";
			}
	 twofloorbtn[this.index].style.background="#b61B1F"	;
	  
     
	}
		twofloorbtn[b].onmouseout=function(){

			twofloors=setInterval(changeGo2,1500);
			numbers=this.index+1
		}
}
for(var k=0;k<twofloorimgs.length;k++){
	twofloorimgs[k].index=k;
	twofloorimgs[k].onmouseover=function(){
		clearInterval(twofloors);
	}
	twofloorimgs[k].onmouseout=function(){
		twofloors=setInterval(changeGo2,1500);
	}
}
}
twofloorchange(0)
twofloorchange(1)
twofloorchange(2)
twofloorchange(3)

//右侧fixed
var rightfixed=document.querySelector('.right-fixed');
var lh=document.documentElement.clientHeight;
var rightb=document.querySelector('.right-b');

rightb.style.height=lh+"px";
rightfixed.style.height=lh+"px";

//返回顶部
var gotop=getClass('gotop')[0];
var doc=document.body?document.body:document.documentElement;
gotop.onclick=function(){
animate(doc,{scrollTop:0},1000)
}
//左侧
/*var leftfixedbox=document.querySelector('.leftfixedboxss');
	window.onscroll=function(){
		var scrollT=document.body.scrollTop||document.documentElement.scrollTop;

		leftfixedbox.style.top=(scrollT+175)+"px";
	}*/
//按需加载
var leftfixedboxs=document.querySelector('.leftfixedboxss');
var loadbox=$(".loadbox");
var ch=document.documentElement.clientHeight;
window.onscroll=function(){
var scrollT=getScrollT();
  leftfixedboxs.style.top=(scrollT+175)+"px";
for(var i=0;i<loadbox.length;i++){
	if(loadbox[i].offsetTop<(ch+scrollT)){
		var img=$("img",loadbox[i]);
		for(var j=0;j<img.length;j++){
			img[j].src=img[j].getAttribute("asrc");
		}
	}
}

}
window.onscroll();

//换一批
var getchangea=getClass("getchange")[0];
var lti2=getClass("l-t-i2")[0];
getchangea.onmouseover=function(){
lti2.setAttribute("asrc","images/2016-03-16_114406.png");
window.onscroll();
}
getchangea.onmouseout=function(){
lti2.setAttribute("asrc","images/2016-03-16_114353.png");
window.onscroll();
}


}