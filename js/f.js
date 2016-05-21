function getText(obj,val){
  if(val==undefined){//获取
    if(obj.innerText){//IE8
      return obj.innerText;
    }else{//W3C
      return obj.textContent;
    }
  }else{
    if(obj.textContent=="undefined"){//IE8,当浏览器有innerText这个属性时，或者当对象的内容为空字符串时，都可以给这个对象设置文本
      obj.innerText=val;
    }else{//W3C
      obj.textContent=val;
    }
  }
}


function getStyle(obj,attr){//调用时 alert(getStyle(box,"width"))
if(obj.currentStyle){
  return obj.currentStyle[attr]//.attr ;
}
else{
  return  getComputedStyle(obj,null)[attr]//.attr;
}




}




/*
function getText(obj,val){
  if(val=="undefined"){
    if(obj.innerText){
      return obj.innerText;
    }else{
      return obj.textContent;
    }
  }else{
    if(obj.textContent=="undefined"){
      obj.innerText=val
    }else{
      obj.textContent=val;
    }
  }
}



function getStyle(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }
  else{
    return getComputedStyle(obj,null)[attr]
  }
}*/