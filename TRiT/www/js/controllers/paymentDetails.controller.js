angular.module('app.controllers')
.controller('paymentDetailsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    $scope.bagCnt = 1;

    $scope.changeBagCnt= function(offset){
        $scope.bagCnt+=offset;
    }

    // 카드 선택 부분 삭제
    // 데이터 바인딩
    // Pay 버튼 클릭 이벤트 (성공 callback -> 선택한 데이터 ReservationInfoCtrl로 전달)
    //                     (실패 callback -> alert )
}]);
