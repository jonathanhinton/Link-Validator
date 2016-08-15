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

//create function to handle an error from the xhr
        function handleError(response){
          if (!angular.isObject(response.data) || !response.data.message)
          {
            return ( $q.reject("an unknown error occured"));
          } else {
            return ($q.reject(response.data.message));
          }
        }

//create function to handle the data from a successful response
        function handleSuccess(response){
          // shorthand for the data coming from the response
          var doc = response.data;

          //regex was the second thing that came to mind for parsing the document to pull the <a> tags out. I attempted doc.getElementsByTagName('a') first but to no avail. I found this regex on stack overflow. So powerful, I would love to read more about regex.
          var regex = /<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)<\/a>/g;
          var aTags = doc.match(regex);
          var linkDiv = angular.element('.linkResult');
          for (i = 0; i < aTags.length; i++){
            linkDiv.append(aTags[i] + "<br/>");
          }
          console.log("the a tags", aTags);
        }

//make xhr via Angular's $http.get using myUrl as url...and here is where my trouble begins.  I have been unsuccessful in getting responses from most sites due to Access-Control-Allow-Origin header and Single Origin Policy.  I have been looking for a CORS workaround but have been spinning my wheels thus far.
        $http.get(myUrl).then(handleSuccess, handleError);


      };

  }]);