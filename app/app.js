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


      };

  }]);