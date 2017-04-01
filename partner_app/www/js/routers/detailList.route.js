angular.module('app.routes')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('detailList', {
    url: '/page3',
    templateUrl: 'templates/detailList.html',
    controller: 'detailListCtrl',
    params: {param: null},
  })
});
