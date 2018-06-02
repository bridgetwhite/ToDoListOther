(function(){
    angular.module('app')
        .controller('formController', function(){
            var $ctrl = this;
            $ctrl.toDoList =['grocery shop', 'get laundry','get gas', 'mop'];
            

            $ctrl.add= function(){
                if($ctrl.newItem){
                $ctrl.toDoList.push($ctrl.newItem);
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