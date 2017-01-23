angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('main', {
    url: '/page1',
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'
  })

  .state('search', {
    url: '/page2',
    templateUrl: 'templates/search.html',
    controller: 'searchCtrl'
  })

  .state('partnerList', {
    url: '/page3',
    templateUrl: 'templates/partnerList.html',
    controller: 'partnerListCtrl'
  })

  .state('partnerDetail', {
    url: '/partnerDetail',
    templateUrl: 'templates/partnerDetail.html',
    controller: 'partnerDetailCtrl'
  })

  .state('reservation', {
    url: '/page5',
    templateUrl: 'templates/reservation.html',
    controller: 'reservationCtrl'
  })

  .state('paymentDetails', {
    url: '/page6',
    templateUrl: 'templates/paymentDetails.html',
    controller: 'paymentDetailsCtrl'
  })

  .state('reservationInfo', {
    url: '/page7',
    templateUrl: 'templates/reservationInfo.html',
    controller: 'reservationInfoCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});