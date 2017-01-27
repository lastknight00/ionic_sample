angular.module('app.routes')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('reservation', {
    url: '/page5',
    templateUrl: 'templates/reservation.html',
    controller: 'reservationCtrl'
  })
});
