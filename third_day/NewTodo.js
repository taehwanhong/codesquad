/**
 * Created by davidhong on 15/03/2017.
 */

var tasklist = [];
var lists = '';

function TaskDetail(name, date) {
    this.name = name;
    this.date = date;
}

TaskDetail.prototype.addTask = function () {
    return this.name + '-' + this.date;
};

TaskDetail.prototype.mergeTask = function () {
    return this.addTask()
};

TaskDetail.prototype.dropTask = function () {
    var remove = tasklist.slice(-1,2);
    return remove
};


tasklist.push(new TaskDetail('ccc', 'dddd'));
tasklist.push(new TaskDetail('aaa', 'acc'));
tasklist.push(new TaskDetail('aaa2', 'acc2'));
for (var i in tasklist) {
     lists += tasklist[i].mergeTask() + '\n';
 }
 alert(lists);
for (var j in tasklist) {
    lists += tasklist[j].dropTask() + '\n';
}
alert(lists);
