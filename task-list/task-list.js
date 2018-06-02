(function (){
    angular.module('app')
    .component('taskList', {
        templateUrl: 'task-list/task-list.html',
        controller: "taskController",
        bindings: {
            toDoList: '<',
            searchList: '<',
            
    
        }
    });
})();