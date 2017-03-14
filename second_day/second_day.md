# Template

** innerHTML
[MDN]https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
** 실제 사용법
var htmlTemplate = document.querySelector("#newsTemplate");
  : template 찾기(in script tag)
var innerhtml = htmlTemplate.innerHTML
  : innerHTML을 사용하여 HTML tag만 가져오기
var el = document.querySelector(".content");
  : 변수 el에 innerHTML을 넣을 곳 찾아오기 여기서는 class name content사용.
el.innerHTML = innerhtml;
  : 변수 el의 innerHTML을 활용하여 넣기.
  
