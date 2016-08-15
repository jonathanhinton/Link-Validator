var app = angular.module('linkValidator', ['ngAnimate', 'ngAria', 'ngRoute', 'ngMaterial']);

app.controller('linkCtrl',
  [
    '$http',
    '$q',
    function($http, $q){

      var myUrl = "";

      this.printURL = function(){
        myUrl = this.SearchURL;
        console.log("this is what you typed", myUrl);
      };

  }]);