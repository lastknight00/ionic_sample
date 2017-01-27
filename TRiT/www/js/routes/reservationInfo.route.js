angular.module('app.routes')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('reservationInfo', {
    url: '/page7',
    templateUrl: 'templates/reservationInfo.html',
    controller: 'reservationInfoCtrl'
  })
});
