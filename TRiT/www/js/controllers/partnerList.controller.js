angular.module('app.controllers')
.controller('partnerListCtrl', ['$scope', '$stateParams', '$state', 'ajaxService',
function ($scope, $stateParams, $state, ajaxService) {
  var searchParam = {
    pageSize : 4,
    pageNum : 1,
    orderBy : 'bagBasicPrice',
    asc : false,
    IATA : ''
  };
  $scope.noMoreItemsAvailable = true;

  $scope.loadMore = function() {
    console.log($scope.noMoreItemsAvailable)
    searchParam.pageNum++;
    ajaxService.get({
      url : '/api/selectpartnerlist',
      data : searchParam,
      callback:function(response){
        $scope.datas = $scope.datas.concat(response);
        $scope.$apply();
        $scope.$broadcast('scroll.infiniteScrollComplete');
        console.log(searchParam.pageNum * searchParam.pageSize)
        console.log(response.partnerListCnt)
      }
    });
  };
    // 화살표 클릭 이벤트
  $scope.toggleOption = function($event,data) {
    var target = $($event.target).closest('form').next();

    if(!target.attr('isLoaded')) {
      ajaxService.get({
        url:'/api/selectpartnerinfo',
        data:{
          partnerId : data.partnerId
        },
        callback:function(response){
          data.options = response.detail;
          $scope.$apply();
          $scope.noMoreItemsAvailable = searchParam.pageNum * searchParam.pageSize >= response.partnerListCnt;
        }
      });
      target.attr('isLoaded', true);
      target.toggle();
    } else {
      target.toggle();
    }
  };

  $scope.searchPartnerList = function(orderBy, asc) {
    searchParam.orderBy = orderBy;
    searchParam.asc = asc;
    searchParam.pageNum = 1;

    ajaxService.get({
      url : '/api/selectpartnerlist',
      data : searchParam,
      callback:function(response){
        $scope.datas = response.partnerList;
        $scope.$apply();
        $scope.noMoreItemsAvailable = searchParam.pageNum * searchParam.pageSize >= response.partnerListCnt;

        console.log(searchParam.pageNum * searchParam.pageSize);
        console.log(response);
      }
    });
  }
  // SearchCtrl 에서 넘어온 데이터로 서버 검색 요청 (서버)
  //searchParam.IATA = $state.params.param.reqCity.IATA;
  $scope.searchPartnerList('bagBasicPrice', false);
  // 정렬 버튼 이벤트 (Sorting)
  // 파트너 체크박스 클릭 이벤트 (선택한 데이터 partnerDetailCtrl로 전달)
}]);
