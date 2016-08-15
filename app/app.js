var app = angular.module('linkValidator', ['ngAnimate', 'ngAria', 'ngRoute', 'ngMaterial']);

app.controller('linkCtrl',
  [
    '$http',
    '$q',
    function($http, $q){

      var myUrl = "";

      this.printURL = function(){

        //assign myUrl variable the value of what was typed into the input
        myUrl = this.SearchURL;
        console.log("this is what you typed", myUrl);

        //make xhr via Angular's $http.get using myUrl as url
        $http.get(myUrl).then(function(response){
          console.log("response", response);
        });


      };

  }]);