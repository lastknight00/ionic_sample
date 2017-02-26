angular.module('app.controllers')
.controller('mainCtrl', ['$scope', '$stateParams', 'DatasService', '$localstorage', '$sessionstorage', 'ajaxService',
function ($scope, $stateParams,DatasService, $localstorage, $sessionstorage, ajaxService) {
    $localstorage.set('a','ab');
    $localstorage.set('b','bc');
    $localstorage.set('c','cd');
    $localstorage.set('d','de');

    $sessionstorage.set('a','ab');
    $sessionstorage.set('b','bc');
    $sessionstorage.set('c','cd');
    $sessionstorage.set('d','de');
}])
