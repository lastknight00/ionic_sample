angular.module('app.routes')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('detail', {
    url: '/page4',
    templateUrl: 'templates/detail.html',
    controller: 'detailCtrl',
    params : {param : null},
  })
});
