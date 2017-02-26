angular.module('app.controllers')
.controller('partnerListCtrl', ['$scope', '$stateParams', '$state', 'ajaxService',
function ($scope, $stateParams, $state, ajaxService) {
    // 화살표 밑 옵션 리스트 숨기기
    $(document).ready(function(){
        $(".option_list").parent().hide();
    });

    // 화살표 클릭 이벤트
    $scope.toggleOption = function($event) {
        var target = $($event.target).closest('form').next();
      if(target.css('display')=='none') {
        target.show();
      } else {
        target.hide();
      }
    };

    // SearchCtrl 에서 넘어온 데이터로 서버 검색 요청 (서버)
    var reqData = $state.params.param;
    console.log(reqData);
    ajaxService.get({url:'/api/selectPartnerList',
                    data:{},
                    callback:function(response){
                        $scope.datas = response;
                        console.log(response)
                    }
                  });



    // 정렬 버튼 이벤트 (Sorting)
    // 파트너 체크박스 클릭 이벤트 (선택한 데이터 partnerDetailCtrl로 전달)
}]);
