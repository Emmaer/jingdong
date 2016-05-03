function getClass(classname,obj){
	obj=obj||document;
	//获取参数
	//判断如果取到的类名不是undefined，那么返回。。。。
	if(document.getElementsByClassName!=undefined){
		return obj.getElementsByClassName(classname);
	}
//如果是undefined，那么说明没有这个属性，我们就要自己创建一个数组，用标签取出我们要研究
//对象元素中所有的元素，并一一比较类名，如果和我们需要的一样就直接放到我们自己创建的数组里面
	else{
		var arr=[];
		var all=obj.getElementsByTagName("*");
		for (var i=0;i<all.length;i++){
			if(check(all[i].className,classname)){
				arr.push(all[i])}
		}return arr;
	}
}


function check(oldclass,newclass){
	var arr=oldclass.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]=newclass){
			return true;
		}
	}return false;
}










//innerText 和textContet兼容问题的处理
function text(obj,val){
	/*获取值：判断用innerText能否获取到值，即判断有没有innerText这个属性
如果有就直接返回，没有就返回textContent.
添加值：用哪种属性能获取就用哪种添加。*/
	// //判断是否是未定义（是否有这个属性）
	/*if(val==undefined){
		if(obj){
			return obj.innerText
		}else{
			return obj.textContet
		}
	}else{
		if(obj.innerText){
			obj.innerText=val;
		}
		else{
			obj.textContet=val;
		}
	}
	*/
	 if(val==undefined){
		   	   if(obj.innerText==undefined){
			return obj.textContent;
		}
		   else{return obj.innerText;

		}
		   }
		   else{
		   	 if(obj.innerText==undefined){
		   	 	obj.textContent=val

		   	 }else{
		   	 	obj.innerText=val;
		   	 }

		   }
}





// 获取行内样式和外部样式(对象，[属性])==>此处属性值是一个字符串。
function getStyle(obj,attr){
	if(obj.currentStyle){
		// alert("1"),IE6-8可以实现
return obj.currentStyle[attr];
//attr是一个变量，此处需要的是一个属性，用[attr]转换成了字符串，表示
	}else{
		// alert("2")，FF chrome可以实现
		return getComputedStyle(obj,null)[attr];
	}
}

//
function $(selector,content){
	content=content||document
	if(typeof selector=="string"){
				if(selector.charAt(0)=="#"){
					// console.log(selector)
					return document.getElementById(selector.substr(1));
				}
				if(selector.charAt(0)=="."){
					return getClass(selector.substr(1),content)[0];
				}
				if(/^[a-zA-Z][A-Za-z1-6]*$/.test(selector)){
					return content.getElementsByTagName(selector)[0];
				}

	}
	if(typeof selector=="function"){
		window.onload=function(){
			selector()
		}
	}
}




//获取子节点,默认“b”为不需要文本节点
function getChilds(obj,type){
		type=type||"b";
		var newarr=[];
		var childs=obj.childNodes;
		if(type=="a"){
		for(var i=0;i<childs.length;i++){
	// console.log(i);
		if(childs[i].nodeType==1||(childs[i].nodeType==3 && trim(childs[i].nodeValue)!="")){
		newarr.push(childs[i]);
	
}
}

}
if(type=="b"){
for(var i=0;i<childs.length;i++){
	// console.log(i);
	if(childs[i].nodeType==1){
		newarr.push(childs[i]);
	}

}
}
return newarr;
									}
/*trim()函数，用来处理字符串中的空格，all是将所有的空格都替换成空字符，l将左边的空格换成空字符，
r将右边的空格换成空字符，lr将空格替换成空字符的区域是第一个空格之前的右空格和字符后面所有的空格
*/
function trim(str,type){
	type=type||"lr";
	if(type=="all"){
		return str.replace(/\s*/g,"");
	}
	if(type=="l"){
		return str.replace(/^\s*/g,"");
	}
	if(type=="r"){
		return str.replace(/\s*$/g,"");
	}
    if(type=="lr"){
    	return str.replace(/^\s*|\s*$/g,"")
    }
}





//获取下一个兄弟节点,
function getNext(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false;}
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
       next=next.nextSibling;
       if(next==null){
		return false;
	}
	}
	return next;

}



// function getFirst(obj,){



// }