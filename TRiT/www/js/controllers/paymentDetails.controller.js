angular.module('app.controllers')
.controller('paymentDetailCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    $scope.bagCnt = 1;

    $scope.changeBagCnt= function(offset){
        $scope.bagCnt+=offset;
    }
}]);
