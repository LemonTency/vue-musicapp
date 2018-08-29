export function addClass(el,className) {
  if(hasClass(el,className)){
  	return 
  }
  let newClass = el.className.split('');
  newClass.push(className);
  el.className = newClass.join('');
}

// 如果元素没有那个class,就把这个class添加进去，先变成数组，再变成字符串

export function hasClass(el,className){
	let reg = new RegExp('(^|\\s)'+className+'(\\s|$)');
	return reg.test(el.className)
}
//原来是正则表达式写错了，真尴尬

// 判断是不是已经有了这个class