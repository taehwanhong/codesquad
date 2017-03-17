/**
 * Created by davidhong on 16/03/2017.
 */
// Adopt a MVC structure to original js code.

// Model
/* Model has a JSON data
 * JSON data는 Controller에서 가져올 것임. 이것을 여기서는, calledData() 객체에 담아 놓겠음
 *
 */
// View

// Controller
/* 1. JSON title만 모아서 pressList 만들어줌
 *    1.1
 * function 2.
 *
 */
// Event
// At this project, I will consider about Event handler. (specially)


// Controller Section
// 1. JSON 호출
// input data : data/newslist.json
// output data :




//data.json가져온거 Object로 NewsModel()에 넣기
//INPUT : data/newslist.json
//OUTPUT :
function NewsModel(title, imgurl, newslist) {
    this._title = title;
    this._imgurl = imgurl;
    this._newslist = newslist;
}

NewsModel.prototype = {
    pressList : function(){
        
    }
};

function NewsListController() {
    this._newsModelList = [];//요 배열에 뉴스 입력.
}

NewsListController.prototype = {

    initData : function () {
        var oReq = new XMLHttpRequest();
        var that = this; // this, that은 NewsListController 자신
        oReq.open("GET", "data/newslist.json"); //newslist.json 열기
        oReq.send(); //send.(TBK)
        oReq.addEventListener("load", function () {
            var result = JSON.parse(oReq.responseText);
            for(i=0; i<result.length; i++) {
                // this 는 NewsListController가 아니라 XMLHttpRequest 일 것
                console.log(this);
                //console.log(that);
                that._newsModelList.push(new NewsModel(result[i].title, result[i].imgurl, result[i].newslist));
            }
        });
    },

    initView: function () {
        var

    }

};

n = new NewsListController();
n.initData();
n.initView();