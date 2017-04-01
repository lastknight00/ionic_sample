angular.module('app.routes')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('timeList', {
    url: '/page2',
    templateUrl: 'templates/timeList.html',
    controller: 'timeListCtrl'
  })
});
