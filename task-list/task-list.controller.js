(function(){
    angular.module('app')
        .controller('taskController', function(){
            var $ctrl = this;
            

            $ctrl.delete=function(index){
                $ctrl.toDoList.splice(index,1);
            }
        
        });
})();