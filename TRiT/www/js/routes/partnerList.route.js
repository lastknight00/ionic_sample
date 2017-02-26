angular.module('app.routes')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('partnerList', {
    url: '/page3',
    templateUrl: 'templates/partnerList.html',
    controller: 'partnerListCtrl',
    params : {
      param : null
    }
  })
});
