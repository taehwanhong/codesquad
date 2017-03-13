function classFinder (findclass){
var div = document.querySelectorAll(findclass);
var count =0;
for (var i = 0; i < div.length; i++) {
   if (div[i].className.includes('_') || div[i].className.includes('-')) {
    count++;
    div[i].className = ''
  }
}
return count;
}

classFinder('div')
