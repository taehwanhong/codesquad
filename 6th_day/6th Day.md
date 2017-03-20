# 6th Day

## newcast code review.
 
- Observe pattern.

 View와 model의 목표는 정의하기 어려움
 -  View는 자신의 변화에 집중
 -  Model은 데이터의 getter setter로 끝
 -  view에 직접적 접근은 자제

 -Controller는 View 와 model을 존재하게 하기위해 만들어짐
  view model의 변화에 따라 할일을 등록

  키쌍을 맞춰주는 느낌.
  view에 변화가 있을때 model변화가 있을거라 가정하면....
  각각의 변화에 맞춰서 서로에게 등록해주는거임
  일반적인 call back의 원리와 같음



 - Dispatcher
   보관하고있다가 실행만 해주고 attach/ notify 이런것만 해줌
   등록발행을 하고 register. emit 등

   사건이나 이런걸 발생시켜주는거임

   observe pattern이랑 뭐 비슷함
   원리는 콜백함수.


   오늘의 참고
   옵저버 패턴
   http://hmmim.tistory.com/2

   콜백 함수
   http://blog.jui.io/?p=19
   http://yubylab.tistory.com/entry/자바스크립트의-콜백함수-이해하기


// Today's Objectives : 크롱님 코드 벤치마크
// const 선언자는??

var ns = {};
// namespace 선언


ns.util = {
    sendAjax : function (url, fn) {
    //sendAJAX는 url이랑 fn받아서 fn에 넘겨줌
        const oReq = new XMLHttpRequest();

        oReq.addEventListener("load", function(){
           var jsonObj = JSON.parse(oReq.responseText);
           fn(jsonObj);
           //fn함수는 뭐지?
        });
        oReq.open("GET", url)
        oReq.send();
    },
    getChildOrder : function (elChild) {
        //elChild는 뭐지??
        const elParent = elChild.parentNode;
        // elchild에 parentNode가 있어야하나봄.
        let nIndex = Array.prototype.indexOf.call(elParent.children, elchild);
        // nIndex에서 Parent에 해당하는 elchild 찾아서가져오는듯
        return nIndex;
    },
    //$변수는?
    //선택자에 해당하는 querySelector 반납
    $ : function(selector){
        return document.querySelector(selector);
    }
}

ns.dispatcher = {
    //register는 fnlist받아놓음
    //fnlist는 뭐지
    register : function(fnlist){
        this.fnlist = fnlist;
    },
    //o와 data 받아서....?
    emit : function (o, data){
        this.fnlist[o.type].apply(null, data);
    }
}

ns.model = {

}

//View에 해당하는 name space는 별도로 분리함
ns.view = {}

//header view 시작
ns.view.header = {

}

//list view시작
ns.view.list = {

}

//list contents 시작
ns.view.contents = {

}

//Controller 시작
ns.controller = {

}

//service init
document.addEventListener("DOMContentLoaded", function() {
    //Object.assign(object.create는 뭐지??
    // 모델 시작
    const model = Object.assign(Object.create(ns.model), {});
    // header view시작
    const headerView = Object.assign(Object.create(ns.view.header), {});
    // list view시작
    const listView = Object.assign(Object.create(ns.view.list), {
        //어 이건 뭐지??
        listParent : ns.unit.$(".mainArea nav ul"),
    });
    //contents view시작
    const contentView = Object.assign(Object.create(ns.view.contents),{
        base : ns.util.$(".content")
    });
    //controller시작
    const controller = Object.assign(Object.create(ns.controller),{
        model : model,
        headerView : headerView,
        listView : listView,
        contentView : contentView
    });


    //start logics
    //읭 여긴 뭐지.. 각 View마다 init해주는건가
    headerView.init();
    listView.init();
    contentView.init();
    //controller는 왜 join이지?
    controller.join();
});


//DOM이 모두 로딩 되면 시작.

document.addEventListener("DOMContentLoaded", function(){
    //util에 sendAjax만들어 놓은거 실행시킴
    //
    ns.util.sendAjax("./data/newslist.json", function(result){
        ns.dispatcher.emit({
            "type" : "initView"
        }, [result]);
    })
});