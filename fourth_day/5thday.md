function a (oFn) {
    ele.on("click", () =>{
    //
    result = "ddddd";
    Fire("afterClick", result);
    }
}

aaa = {
    ddd : function(){}
}

a({"afterClick" : aaa.bbb});




﻿

function model() {}
function view() {}
​
function controller(model, view) {
    this.model = model;
    this.view = view;
}
​
controller.prototype.initdata = function() {
    //ajaxcall
    var json = "sddsf";
    this.model.addNews(json);
    this.view.showContent(json);
}
​
​
var mymodel = new model();
var myview = new view();
var ctl = new controller(mymodel, myview);
​
​
​