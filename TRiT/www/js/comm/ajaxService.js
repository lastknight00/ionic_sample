angular.module('app.services')
.factory('ajaxService', [function($window) {
  var CONTEXT_URL = 'http://127.0.0.1';

  return {
    post: function(params) {
      $.ajax({
          url: CONTEXT_URL,

          dataType:"json",
          success:function (data) {
              log("The server returned " + data.length + " changes that occurred after " + modifiedSince);
              callback(data);
          },
          error: function(model, response) {
              console.log(response.responseText);
          }
      });
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || false;
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
