angular.module('app.controllers')
.controller('partnerDetailCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    $scope.bagCnt = 3;
console.log($stateParams)
console.log('aaa')
    $scope.changeBagCnt= function(offset){
        $scope.bagCnt+=offset;
    }
}]);
