function getClass(classname,obj){
	obj=obj||document;
	
	if(document.getElementsByClassName!=undefined){
		return obj.getElementsByClassName(classname);
	}else{
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











function text(obj){
	if(value==undefined){
		if(obj){
			return obj.innerText
		}else{
			return obj.textContet
		}
	}
}


// 获取行内样式和外部样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		// alert("1")
return obj.currentStyle[attr];
	}else{
		// alert("2")
		return getComputedStyle(obj,null)[attr];
	}
}