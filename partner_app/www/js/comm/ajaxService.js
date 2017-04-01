angular.module('app.services')
.factory('ajaxService', ['$localstorage', '$sessionstorage', function($localstorage, $sessionstorage, $window) {
  //var CONTEXT_URL = 'https://4dnru0sthe.execute-api.us-east-1.amazonaws.com/empty';
  var CONTEXT_URL = 'http://malddong.iptime.org:9999';
  var test=11;
  var preProcessResponse = function(response) {
    $localstorage.set('tokenId',response.tokenId);
    return response;
  }
  var preProcessRequest = function(request) {
    //request.setRequestHeader('content-type', 'application/json');
    //request.setRequestHeader('lang_code', $localstorage.get('lang_code'));
    //request.setRequestHeader('tokenId', $localstorage.get('tokenId'));
  }
  return {
    post: function(params) {
      $.ajax({
          url : CONTEXT_URL + params.url,
          method:'POST',
          dataType:"json",
          data : params.data,
          success:function (data) {
            preProcessResponse(data);
            params.callback(data.resultData.data);
          }, beforeSend: preProcessRequest,
          error: function(model, response) {
              console.error(response.responseText);
          }
      });
    },
    get: function(params) {
      $.ajax({
          url : CONTEXT_URL + params.url,
          cache : false,
          method:'GET',
          dataType:"json",
          data : params.data,
          success:function (data) {
            preProcessResponse(data);
            params.callback(data.resultData.data);
          }, beforeSend: preProcessRequest,
          error: function(model, response) {
              console.error(response.responseText);
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
