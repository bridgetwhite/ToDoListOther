(function () {
    angular.module('app', ['ngRoute'])
      .config(function($routeProvider){
        $routeProvider
        .when ('/',{
          templateUrl: 'welcome/welcome.html'
        })
        .when('/app', {
          template: '<todo-app></todo-app>'
        })
        .otherwise ({
          // redirectTo: '/'
          template: '<h1>That Page Does Not Exsit</h1>'
        });
      });

})();
