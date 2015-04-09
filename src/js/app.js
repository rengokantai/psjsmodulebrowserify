/**
 * Created by Hernan Y.Ke on 4/9/15.
 */
var $ =require('jquery');
var tasks =require('./tasks');


function _addTask(){
    tasks.add();
}


function _deleteAllTasks(){
    tasks.clear();
}

function _saveChanges(){
    tasks.save();
}


function _cancelChanges(){
    tasks.cancel();
}


function _deleteTask(clickEvent){
    tasks.remove(clickEvent);
}


function _registerEventHandler(){
    $("#mew-task-button").on("click",_addTask);
    $("#delete-all-button").on("click",_deleteAllTasks);
    $("#save-button").on("click",_saveChanges);
    $("#cancel-button").on("click",_cancelChanges);
    $("#task-list").on("click",".delete-button",_deleteTask);


}


_registerEventHandler();
tasks.render();