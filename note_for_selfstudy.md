# Javascript for web-browser

1. HTML : 정보
2. CSS : Design
3. JS : 웹브라우저 html 제어


- 우리는 크롬 웹 브라우져 의 개발자 도구를 사용할것임
-
---
# Object Model
1. 오브젝트 모델이란?
 - 브라우저의 여러 구성요소들을 객체로 만들어서 제공하는것.
 - 자바스크립트를 브라우져를 제어하기위해 객체를 만드는것이 객체화
 - JS-core/BOM/DOM
 - ![https://s3.ap-northeast-2.amazonaws.com/opentutorials-user-file/module/904/2229.png]
 - DOM 은 <body>, <img> 등 Document object를 가르키는 Model임
 - BOM 은 윈도우 객체의 프로퍼티. 이 프로퍼티는 윈도우의 프로퍼티지만
 - JS-core 는 BW를 제어, GAS를 제어, node.js등 서버측 자바스크립트를 제어
 - DOM BOM 이것들은 브라우져 라는 호스트에서만 가능함.
 - JS array fuction 등....

## BOM
Browser Object Model. 웹페이지의 내용을 제외한 브라우저의 각종 요소들을 객체화시킨 것이다. 전역객체 Window의 프로퍼티에 속한 객체들이 이에 속한다. (opentutorials. ref)

## DOM
Document Object Model. 웹페이지의 내용을 제어한다. window의 프로퍼티인 document 프로퍼터에 할당된 Document 객체가 이러한 작업을 담당한다. (opentutorials. ref)

### DOM Tree
- 브라우져는 Html을 계층을 갖춘 tree로 인식함.
- span tag가 element node
- text node
- DOM은 눈에 보이지 않지만 이런 태그 구조로 이뤄짐.
- JS로 H1 tag contents을 바꾼다거나 할때. 쓰임.
- 화면을 쉽게 표현하기 위한 구조기도 함.
-

### DOM에 접근하는방법
- Selector라는 문법을 써야함.
- google에서 Selector검색. CSS selector
- 이거의 탄생은 CSS에서 시작 그래서 CSS문법을 따름.  
- [CSS selector 참고](https://www.w3schools.com/cssref/css_selectors.asp)
- 위 link를 존나 참고할것.
- TEST해보고싶으면 jsbin.com 에서 하면 됌
- var ele = document.querySelector()

**html code 에서 querySelector 사용**
'''
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <ul>
  <li class ="first">a</li>
  <li class ="second">b</li>
  <li>c</li>
  <li>d</li>
  <li>e</li>
  </ul>
</body>
</html>
'''
'''
- var ele = document.querySelector('.second');
- '.second 에서 .은 class를 의미함.'
- console.log(ele);
'''

p.first-child
p.nextelementsibling()


### DOM node type
node.element_node
node.text_node
'.nodeType을 이용할것.'


### JS RegEX
정규표현식은. 정해진 표현에 맞게 입력된것인지 점검하는것임.


'''
var email = apple@apple.com
var result = /\w+@\w+/.test(email);
'''

**// 사이에 표현식을 넣음
\w 는 문자 \w+ 는 1개 글자 이상의 문자를 의미.
'var result = /\w+@\w+.\w+/.test(email);'
요런것도 되것지?

CSS 속성 값이 있다.

패턴을 찾아서 바꾸는것도 쉽게 가능
'''
var transform = "translate3d(10px, 20px, 30px)"
var result =transform.replace(/translate3d\((\d+)px.+/, "$1");
result

'''

### Event의 정의
 - 마우스 클릭, 오버, 이런거에서 반응하는걸 이벤트라고함.
