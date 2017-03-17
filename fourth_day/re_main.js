/* Created by davidhong on 16/03/2017. */
// Main


}

main();

// Model

    function NewsModel(title, imgurl, newslist, NewsTemplate) {
        this._title = title;
        this._imgurl = imgurl;
        this._newslist = newslist;
        this._showingNews = NewsTemplate;
    }

    NewsModel.prototype = {
        getList: function () {
            Console.log("aaa");
        },
        addList: function () {
            Console.log("addlist");
        },
        removeList: function () {
            Console.log("rmlist");
        },
        getSelectedList: function () {
            Console.log("selectedlist");
        }

    };

// Controller

    function NewsListController() {
        this._newsModelList = [];//요 배열에 뉴스 입력.
    }

    NewsListController.prototype = {
        //init data 불러오기, NewsListController의 _newsModelList에 때려넣기
        initData: function () {
            var oReq = new XMLHttpRequest();
            var that = this; // this, that은 NewsListController 자신
            oReq.open("GET", "data/newslist.json"); //newslist.json 열기
            oReq.send(); //send.(TBK)
            oReq.addEventListener("load", function () {
                var result = JSON.parse(oReq.responseText);
                for (i = 0; i < result.length; i++) {
                    // this 는 NewsListController가 아니라 XMLHttpRequest 일 것
                    //console.log(this);
                    //console.log(that);
                    that._newsModelList.push(new NewsModel(result[i].title, result[i].imgurl, result[i].newslist));
                }
            });
        },
        createView: function () {

            var queryHtmlTemplate = document.querySelector("#viewContents");
            debugger;
            console.log(queryHtmlTemplate);
            var htmlTemplate = queryHtmlTemplate.innerHTML;
            var adoptTemplate = htmlTemplate.replace("{{title}}", n._newsModelList[1]._title)
                .replace("{{imgurl}}", n._newsModelList[1]._imgurl)
                .replace("{{newsList}}", n._newsModelList[1]._newslist);
            var m = new NewsModel(n._newsModelList[1]._title, n._newsModelList[1]._imgurl, n._newsModelList[1]._newslist, adoptTemplate);
            console.log(m);
        }
    };

function NewsListView() {
    this._newsViewList = [];
}

NewsListView.prototype = {
    adoptHtml: function () {
        var baseElement = document.querySelector(".content");
        console.log(baseElement);
        baseElement.innerHTML = n.createView();
    }
};