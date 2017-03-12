angular.module('app.controllers')
.controller('partnerDetailCtrl', ['$scope', '$stateParams','$state',
function ($scope, $stateParams, $state) {
    // 가방 개수 수정
    $scope.bagCnt = 1;
    $scope.changeBagCnt= function(offset){
      if($scope.bagCnt>1||offset==1){
        $scope.bagCnt+=offset;
      }
    }

    // 기본 시간 Setting
    $scope.itemSelectedDepTime=new Date(99, 5, 24, 0, 0, 0, 0);
    $scope.itemSelectedArrTime=new Date(99, 5, 24, 0, 0, 0, 0);

    // partnerListCtrl 에서 넘어온 데이터로 서버 요청 (place 정보)
    var recvData = $state.params.param;

    // 데이터 바인딩
    // 1. 가방개수, 출발장소,시간/도착장소,시간/선택한옵션

    // Bag, From, To 데이터 모두 입력 시 가격 계산

    // Book 버튼 클릭 이벤트 (선택한 데이터 reservationCtrl로 전달)
    $scope.clickBook = function(){
      // 다 입력되었는 지 검사

      var reqData = {
        "reqBagCnt":$scope.bagCnt,
        "reqDepPlace":$scope.itemSelectedDepPlace,
        "reqDepTime":$scope.itemSelectedDepTime,
        "reqArrPlace":$scope.itemSelectedArrPlace,
        "reqArrTime":$scope.itemSelectedArrTime,
        "reqPrice":$scope.price
      }

      $state.go('paymentDetails',{param:reqData});
    }
}]);
