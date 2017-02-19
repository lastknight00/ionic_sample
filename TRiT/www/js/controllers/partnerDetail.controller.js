angular.module('app.controllers')
.controller('partnerDetailCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
    $scope.bagCnt = 3;
    $scope.changeBagCnt= function(offset){
        $scope.bagCnt+=offset;
    }

    // partnerListCtrl 에서 넘어온 데이터로 서버 요청 (place 정보)
    // 데이터 바인딩
    // Bag, From, To 데이터 모두 입력 시 가격 계산
    // Book 버튼 클릭 이벤트 (선택한 데이터 reservationCtrl로 전달 )
}]);
