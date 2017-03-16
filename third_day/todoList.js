
/**
 * Created by davidhong on 15/03/2017.
 */

function Task() {
    this.tasklist = [];
}

Task.prototype.addTask = function (task) {
    this.tasklist.push(task);

}
Task.prototype.delTask = function (task) {
    this.tasklist.push(task);

}
Task.prototype.showTask = function (task) {
    this.tasklist.push(task);

}

var task = new Task();
task.addTask("AAA");
task.showTask();
