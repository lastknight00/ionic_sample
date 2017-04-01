angular.module('app.services')

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || false;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      if($window.localStorage[key] != undefined){
        return JSON.parse( $window.localStorage[key] || false );
      }
      return false;
    },
    remove: function(key){
      $window.localStorage.removeItem(key);
    },
    clear: function(){
      $window.localStorage.clear();
    }
  }
}])
.factory('$sessionstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.sessionStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.sessionStorage[key] || false;
    },
    setObject: function(key, value) {
      $window.sessionStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      if($window.sessionStorage[key] != undefined){
        return JSON.parse( $window.sessionStorage[key] || false );
      }
      return false;
    },
    remove: function(key){
      $window.sessionStorage.removeItem(key);
    },
    clear: function(){
      $window.sessionStorage.clear();
    }
  }
}]);
