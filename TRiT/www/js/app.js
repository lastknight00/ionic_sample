// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services'])

.config(function($ionicConfigProvider, $sceDelegateProvider, $httpProvider){

  $httpProvider.interceptors.push(function($q, $rootScope, $injector) {
      return {
        request: function(request) {
          //$ionicLoading.show({content: "Loading...", showBackdrop: true, maxWidth: 200, showDelay: 100});
          //console.log('request',request)
          return request || $q.when(request);
        },
        response: function(response) {
          //$ionicLoading.hide();
          //console.log('response',response);
          return response || $q.when(response);
        }
      };
    });
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

.run(function($ionicPlatform, $localstorage) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    $localstorage.set('lang_code', 'EN');
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

angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.routes', []).config(
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/page1')
  });
