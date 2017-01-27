angular.module('app.routes')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('partnerDetail', {
    url: '/partnerDetail',
    templateUrl: 'templates/partnerDetail.html',
    controller: 'partnerDetailCtrl'
  })
});
