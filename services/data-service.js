(function (){
    angular.module('app')
    // .service('DataService', function(){
    //    var toDoList = ['grocery shop', 'get laundry', 'get gas', 'mop'];
    //    this.saveTodos = function(data){
    //        toDoList=data;
    //    };

    //    this.getTodos=function(data){
    //        return todos;
    //    }
    // })  

    .factory('DataFactory', function(){
        var todos= ['grocery shop', 'get laundry', 'get gas', 'mop'];

        return{
            setData: function(data){
                todos=data;

            },

            getData: function(){
                return todos;
            }
        }
 
        });

})();