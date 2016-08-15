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

//create an empty array to hold the <a> tags that I parse from the document retrieved
        this.links = [];

//create function to handle an error from the xhr
        function handleError(response){
          if (!angular.isObject(response.data) || !response.data.message)
          {
            return ( $q.reject("an unknown error occured"));
          } else {
            return ($q.reject(response.data.message));
          }
        }

        function handleSuccess(response){
          console.log("response", response);
        }

        //make xhr via Angular's $http.get using myUrl as url...and here is where my trouble begins.  I have been unsuccessful in getting responses from most sites due to Access-Control-Allow-Origin header and Single Origin Policy.  I have been looking for a CORS workaround but have been spinning my wheels thus far.
        $http.get(myUrl).then(handleSuccess, handleError);


      };

  }]);