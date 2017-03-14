function classFinder (findclass){
var div = document.querySelectorAll(findclass);
var count =0;
var reg = /_|-/;//정규표현식.
for (var i = 0; i < div.length; i++) {
  if (reg.test(div[i].className)) {
    count++;
    div[i].className = ''
  //  if (div[i].className.includes('_') || div[i].className.includes('-')) {
  //   count++;
  //   div[i].className = ''
  // }
}
}
return count;
}

classFinder('div')
