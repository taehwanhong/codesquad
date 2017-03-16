function sum(a,b) {
    return a+b;
}

function divide(a,b) {
    return a/b;
}

function calculate(method, prev) {
    return function(next) {
        debugger;
        return method(prev, next);
    }
}

var currySum = calculate(sum, 100);
var curryDivision = calculate(divide, 100);

currySum(20);
curryDivision(20);



var healthObj = {
    name : "RUN",
    lastTime : "PM10:12",
    showHealth : function() {
        console.log("오늘은 " + this.lastTime + "까지" + this.name + "했네 ");
    }
}
healthObj.showHealth();