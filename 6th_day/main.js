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
        oReq.open("GET", url);
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
    //$ 변수명 선언 가능함ㅋ
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
    newsList : [],
    currentNewsOrder : 0,
    getAllNewsList : function(){
        return this.newsList;
    },
    getCurrentNewsOrder : function () {
        return this.currentNewsOrder;
    },
    changeCurrentNews : function (order) {
        this.currentNewsOrder = order;
        ns.dispatcher.emit({
            "type": "changeCurrentPanel",
            },
            [order, this.newsList[order]]);
    },
    saveAllNewsList : function (newsList) {
        this.newsList = newsList;
        ns.dispatcher.emit({
            "type" : "changeNewsList"
        },[newsList]);
    },
    removeCurrentNewsData : function () {
        //splice는 뭐지
        this.newsList.splice(this.currentNewsOrder, 1);
        ns.dispatcher.emit({
            "type" : "changeNewsList"
            },[newsList]);
    }
};

//View에 해당하는 name space는 별도로 분리함
ns.view = {};

//header view 시작
ns.view.header = {
    init: function(){
        this.registerEvents();
    },

    registerEvents : function () {
        function _btnClickHandler(direction) {
            ns.dispatcher.emit({
                "type": "afterMoveButton"
            },[direction]);
        }

        //여기 통째로 모르겠네
        // arrow function ES6참고
        ns.util.$(".left").addEventListener('click', () => {
            _btnClickHandler.call(this, "left")
        });
        ns.util.$(".right").addEventListener("click", ()=>{
            _btnClickHandler.call(this, "right")
        });
    }
};

//list view시작
ns.view.list = {
    init : function () {
        this.selectList();
    },
    renderView : function(result){
        const sHTML = result.reduce(function(prev, next){
            return prev + "<li>" + next.title + "</li>"
        },"");
        this.listParent.innerHTML = sHTML;
        this.setHighLightTitle(0);
    },
    setHighLightTitle : function (order) {
        const elSeletedNode = this.listParent.querySelector(".selectedList");
        if(elSeletedNode) elSeletedNode.className = "";

        const curNode = this.listParent.querySelector("ln:nth-child("+ ++order +")");
        curNode.className = "selectedList";
    },
    selectList : function () {
        ns.util.$(".mainArea ul").addEventListener("click", function(evt{

        }))
    }

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