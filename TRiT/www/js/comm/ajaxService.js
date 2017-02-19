angular.module('app.services')
.factory('ajaxService', [function($window) {
  var CONTEXT_URL = 'http://127.0.0.1:8080';
  var TEST_URL = 'http://192.168.43.197:8080';
  return {
    post: function(params) {
      $.ajax({
          url : TEST_URL + params.url,
          //url: CONTEXT_URL + params.url,
          method:'POST',
          dataType:"json",
          data : JSON.stringify(params.data),
          success:function (data) {
              console.log("The server returned " + data.length + " changes that occurred after " + modifiedSince);
              params.callback(data);
          },
          error: function(model, response) {
              console.log(response.responseText);
          }
      });
    },
    get: function(params) {
      $.ajax({
          url : TEST_URL + params.url,
          //url: CONTEXT_URL + params.url,
          method:'GET',
          dataType:"json",
          data : JSON.stringify(params.data),
          success:function (data) {
              console.log("The server returned " + data.length + " changes that occurred after " + modifiedSince);
              params.callback(data);
          },
          error: function(model, response) {
              console.log(response.responseText);
          }
      });
    },
    update: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    delete: function(key) {
      if($window.localStorage[key] != undefined){
        return JSON.parse( $window.localStorage[key] || false );
      }
      return false;
    }
  }
}]);
