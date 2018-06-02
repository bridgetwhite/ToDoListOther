(function(){
    angular.module('app')
        .controller('formController', function(DataFactory){
            var $ctrl = this;
            $ctrl.toDoList = DataFactory.getData();
           
            

            $ctrl.add= function(){
                if($ctrl.newItem){
                $ctrl.toDoList.push($ctrl.newItem);
                DataFactory.setData($ctrl.toDoList);
                }

                $ctrl.newItem = '';
                
            }

            

            $ctrl.onKeyDown = function(event){
                
                if(event.key === 'Enter'){
                    $ctrl.add();
                }
            }

          
        
        });
})();