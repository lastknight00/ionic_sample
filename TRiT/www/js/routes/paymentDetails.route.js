angular.module('app.routes')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('paymentDetails', {
    url: '/page6',
    templateUrl: 'templates/paymentDetails.html',
    controller: 'paymentDetailsCtrl'
  })
});
