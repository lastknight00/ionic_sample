angular.module('app.controllers')
.controller('partnerDetailCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    $scope.bagCnt = 1;

    $scope.changeBagCnt= function(offset){
        $scope.bagCnt+=offset;
    }
}]);
