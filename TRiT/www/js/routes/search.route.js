angular.module('app.routes')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('search', {
    url: '/page2',
    templateUrl: 'templates/search.html',
    controller: 'searchCtrl'
  })
});
