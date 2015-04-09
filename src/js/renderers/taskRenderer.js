/**
 * Created by Hernan Y.Ke on 4/9/15.
 */
var $ =require("jquery");


var taskTemplate='<li class="task"><input class="complete" type="checkbox"/><input class="description">';


function _renderTask(task){
    var $task=$(taskTemplate);
    if(task.complete){
        $task.find(".complete").attr("checked","checked");

    }

    $task.find(".description").val(task.description);
    return $task;
}



exports.renderTasks =function(tasks){
    var elementArray = $.map(tasks,_renderTask);

    $("#task-list").empty().append(elementArray);
};


exports.renderNew =function(){
    var $taskList =$("#task-list");
    $taskList.prepend(_renderTask({}));
};