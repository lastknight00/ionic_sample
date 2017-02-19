angular.module('app.controllers')
.controller('searchCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
  // 이미지 기본 (서버)
  $scope.imgUrl = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTY-Ljgq9XgU7uXKCI6Ax1YlWIRR3RAX_xihoOMPLyl_Ldu7xIKZg"

  // 국가 리스트 불러오기 (서버)
  ajaxService.get({url:'/api/selectCountryInfo',
                  data:''});
  // 국가 리스트 선택하면 도시 리스트 불러오기 (서버)

  // 출발 일자도 데이터 바인딩

  // 검색 요청 (데이터를 다음 화면으로 전달)

}]);
