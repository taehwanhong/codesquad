var healthObj = { showHealth : function () {
    console.log("오늘" + this.lastTime + '까지' + this.name + "함");
    }
}

function Health(name, lastTime) {
    this.name = name;
    this.lastTime = lastTime;
}

Health.prototype = healthObj;

/**
 * Created by davidhong on 15/03/2017.
 */

var healthObj = {
    showHealth : function () {
        console.log("오늘은 " + this.lastTime +"까지 " + this.name + " 햇네유");
    }
}

var myHealth = Object.create(healthObj);

myHealth.name = "달리기";
myHealth.lastTime = "23:20";

myHealth.showHealth();



var healthObj = {
    showHealth : function () {
        console.log("오늘은 " + this.lastTime +"까지 " + this.name + " 햇네유");
    }
}

var myHealth = Object.assign(Object.create(healthObj),{
    name : "달리기",
    lastTime : "2102"
});

myHealth.showHealth();

--------------

var healthObj = { showHealth : function() {
    console.log("aaa " + this.lastTime + "aaaa" + this.name + " aaaa");
} }
var myHealth = { name : "ddd",
    lastTime : "23:10" }

    Object.setPrototypeOf(myHealth, healthObj);
    console.log(myHealth);


