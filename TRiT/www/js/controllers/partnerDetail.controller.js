angular.module('app.controllers')
.controller('partnerDetailCtrl', ['$scope', '$stateParams','$state','ajaxService',
function ($scope, $stateParams, $state, ajaxService) {
    // alert message
    var alertInputAllInfo = "모든 정보를 입력해주세요";

    // partnerListCtrl 에서 넘어온 데이터로 서버 요청 (option 정보)
    var recvData = $state.params.param;
    $scope.data = $state.params.param;
    var loadOptions = function(data) {
        ajaxService.get({
          url:'/api/selectpartnerinfo',
          data:{
            partnerId : data.partnerId
          },
          callback:function(response){
            $scope.options = response.detail;
          }
        });
    };
    loadOptions(recvData);

    // 가방 개수 수정
    $scope.bagCnt = 1;
    $scope.changeBagCnt= function(offset){
      if($scope.bagCnt>1||offset==1){
        $scope.bagCnt+=offset;
      }
      $scope.price = (recvData.bagBasicPrice)*$scope.bagCnt;
    }

    // 기본 시간 Setting
    //TODO : default 시간 수정
    $scope.itemSelectedDepTime=new Date(99, 5, 24, 0, 0, 0, 0);
    $scope.itemSelectedArrTime=new Date(99, 5, 24, 0, 0, 0, 0);

    // 데이터 바인딩
    // 1. 가방개수, 출발장소,시간/도착장소,시간/선택한옵션
    // -> html에서 ng-model로 완료

    // 기본 가격
    $scope.price = recvData.bagBasicPrice;

    // 추가 옵션 선택 시 가격 계산


    // Book 버튼 클릭 이벤트 (선택한 데이터 reservationCtrl로 전달)
    $scope.clickBook = function(){
      // TODO : 다 입력되었는 지 검사
      console.log($scope.itemSelectedDepPlace);
      if($scope.itemSelectedDepPlace==undefined || $scope.itemSelectedArrPlace==undefined){
        window.alert(alertInputAllInfo);
        //return;
      }

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
