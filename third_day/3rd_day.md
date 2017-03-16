# DOM조작은 최소화하는게 좋음

AJAX결과를 저장.

미미한 차이지만 조금 빠름

AJAX성능 개선은...

# SCOPE

## 들어도 잘 모르는게 정상이다ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ

var name = 'play ground';
function home(){
	var homeName = 'my';
    console.log(name);
    console.log(homeName);
	debugger;
}
home();
---------

var name = 'play ground';
function home(){
	var homeName = 'my';
	function printName(){
	    var nickName = 'taehwan honm';
	}
	printName();
    console.log(name);
    console.log(homeName);
    console.log(nickName);
	debugger;
}
home();
-----


var name = 'play ground';
function home(){
	var homeName = 'my';
	function printName(){
	    var nickName = 'taehwan honm';
	    console.log(name);
        console.log(homeName);
        console.log(nickName);

	}
	printName();
    debugger;
}
home();


var name = 'pg';
function home() {
    var homeName = 'myhouse';
    for(var i = 0; i<1000 ; i++){}
    console.log(i);
}

-------
# 변수 hoisting
var name = 'pg';
function home() {
    var homeName = 'myhouse';
	console.log(i);
    for(var i = 0; i<1000 ; i++){console.log(i);}
    console.log(i);
}

위의 코드는 아래와 같다
var name = 'pg';
function home() {
    var homeName = 'myhouse';
	console.log(i);
    for(var i = 0; i<1000 ; i++){console.log(i);}
    console.log(i);
}
var name = 'pg';
function home() {
    var homeName = 'myhouse';
    var i;
	console.log(i);
    for(var i = 0; i<1000 ; i++){console.log(i);}
    console.log(i);
}


#이번엔 let을 써보자. ES 6에 있는거임ㅋ
###let은 {}()단위의 scope를 만들수 있음

var name = 'pg';
function home(){
    var homeName = 'mh';
    for (let i = 0; i<1000; i++){debugger;}
    console.log(i);
}

#ES6에서는 const라는것도 있다
const로 선언된 변수는 재정의 할수 없음

function home() {
    const homeName = 'mh';
    homeName = 'yh';
}
home()


주의할점은 const라고 수정안되는건 아님ㅋ
const를 사용해도 배열과 오브젝트 값 변경은 가능

funtion home(){
    const list = ['j','i','k'];
    list.push('t');
    return list;
}
home()


a = [];

(function(){
    for(let i = 0; i<10; i++){
        let a = [];
        a.push(i);

    }
a.push(3333);
console.log(a);
})()



---
(function(){
  var list = document.querySelectorAll('li');
  var show = document.querySelector('.show');

  for (var i = 0; i<list.lenght; i++){
    list[i].addEventListener('click', function(){
      show.innerText = i + 1 + 'select';
      debugger;
    })
  }
})();


## HOMEWORK
closure, todolist기능 만들기