// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])

.config(function($ionicConfigProvider, $sceDelegateProvider){


  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

  Array.prototype.convertToMap = function(key) {
    var retval = [];
    var keys = key.split(".");
    this.forEach(function(value) {
      var cur = value;
      for(var index = 0; index < keys.length; index++) {
        cur = cur[keys[index]];
      }
      retval[cur] = value;
    });
    return retval;
  }
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });

      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});
angular.module('app.directives', []);
angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.routes', []).config(
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/page2');
  });

  angular.module('app.services')
  .factory('ajaxService', ['$localstorage', '$sessionstorage', function($localstorage, $sessionstorage, $window) {
    //var CONTEXT_URL = 'https://4dnru0sthe.execute-api.us-east-1.amazonaws.com/empty';
    var CONTEXT_URL = 'http://127.0.0.1:9999';
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
