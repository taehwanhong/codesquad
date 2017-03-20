//// MVC 패턴
var Model = (function () {


    var model = function () {

        return new init();
    };

    function init() {

        this.listeners = {};

        return this;
    };

    // 리스너 집합을 통해 현재 View 영역의 상태를 관리한다.
    init.prototype.addListener = function (listenerId, checked) {

        listenerId = listenerId || '';
        checked = checked || false;

        this.listeners[listenerId] = {
            'elem': document.getElementById(listenerId),
            'checked': checked
        };

        return this;
    };

    init.prototype.removeListener = function (listenerId) {

        listenerId = listenerId || '';

        delete this.listeners[listenerId];

        return this;
    };

    init.prototype.isListener = function (listenerId) {

        listenerId = listenerId || '';

        return this.listeners[listenerId];
    };

    // 현재 View 영역의 상태를 정의한다.
    init.prototype.setChecked = function (listenerId, checked) {

        listenerId = listenerId || '';
        checked = checked || false;

        this.listeners[listenerId].checked = checked;

        return this.listeners;
    };

    // 현재 View 영역의 상태를 반환한다.
    init.prototype.getChecked = function(listenerId){

        listenerId = listenerId || '';
        var elem = this.listeners[listenerId].elem;

        return elem.checked || false;
    };

    return model;

} ());

// Controller 영역은 Model 과 View 영역 사이의 매개체 역활을 하며, 이 둘 간의 코드 결합도를 현저히 낮춰준다.
// (결국 이는 패턴의 궁극적인 목적과 동일하다.)
var Control = (function () {


    var control = function (model, view) {

        return new init(model, view);
    }


    function init(model, view) {

        this.model = model;
        this.view = view;

        this.model.addListener(this.view.id, this.view.elem.checked);
        this.model.setChecked(this.view.id, this.view.elem.checked);

        return this;
    }

    // View 영역의 현재 상태를 Model 영역에 적용 시킨다.
    init.prototype.toogle = function () {

        if (this.view.elem){
            if (this.view.elem.checked) this.view.elem.checked = false;
            else this.view.elem.checked = true;


            var checkedList = this.model.setChecked(this.view.id, this.view.elem.checked);

            // View Layer의 최대 목적인 화면 랜더링
            this.view.render(checkedList);
        }

        return this;
    };

    init.prototype.isElem = function () {

        return this.model.listeners[this.view.id].elem ? true : false;
    };

    init.prototype.getChecked = function(){
        alert(this.model.getChecked(this.view.id));
    };


    return control;

} ());



var View = (function () {


    var view = function (id, checked) {

        return new init(id, checked);
    }

    function init(id, checked) {

        this.id = id;
        this.elem = document.getElementById(this.id);

        if (this.elem) this.elem.checked = checked

        return this;
    }


    // 반환받은 Model 영역의 현재 상태를 View에 랜더링 시킨다.(하지만 이전 MV 패턴과 달리 이 모든 부분을 Controller 영역이 관장한다.)
    init.prototype.render = function (checkedList) {

        for (var n in checkedList) {
            if (checkedList[n].elem){
                checkedList[n].elem.checked =  checkedList[n].checked;
            }
        }

        return this;
    };

    return view;

}());


var View1 = null;
var View2 = null;
var View3 = null;
var View4 = null;

window.onload = function () {

    // Model 객체
    var model = Model();


    // 각 View 영역들을 초기화 시킨다.
    View1 = View('checkbox1', true);
    View2 = View('checkbox2', true);
    View3 = View('checkbox3', false);
    View4 = View('checkbox4', false);


    // 각 Controller 영역들을 초기화 시킨다.(Controller 영역은 해당 Model과 View 영역을 알고 있다.)
    Control1 = Control(model, View1);
    Control2 = Control(model, View2);
    Control3 = Control(model, View3);
    Control4 = Control(model, View4);


    // 사용자 요청으로 인한 Controller 영역 호출
    document.getElementById('tcheckbox1').onclick = function () {
        Control1.toogle();
    }

    document.getElementById('tcheckbox2').onclick = function () {
        Control2.toogle();
    }

    document.getElementById('tcheckbox3').onclick = function () {
        Control3.toogle();
    }


    document.getElementById('tcheckbox4').onclick = function () {
        Control4.toogle();
    }

    // 사용자 요청에 의한 Model 영역의 상태 상태 반환
    document.getElementById('checker').onclick = function () {

        if (Control1.isElem()) Control1.getChecked();
        if (Control2.isElem()) Control2.getChecked();
        if (Control3.isElem()) Control3.getChecked();
        if (Control4.isElem()) Control4.getChecked();
    }


    // 사용자 요청에 의한 Model 및 View 영역의 초기화
    document.getElementById('reset').onclick = function () {

        // 각 View 영역들을 초기화 시킨다.
        View1 = View('checkbox1', false);
        View2 = View('checkbox2', false);
        View3 = View('checkbox3', false);
        View4 = View('checkbox4', false);

        Control1 = Control(model, View1);
        Control2 = Control(model, View2);
        Control3 = Control(model, View3);
        Control4 = Control(model, View4);
    }
}