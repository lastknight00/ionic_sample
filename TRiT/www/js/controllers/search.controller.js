angular.module('app.controllers')
.controller('searchCtrl', ['$scope', '$stateParams', 'ajaxService',
function ($scope, $stateParams, ajaxService) {
  // 이미지 기본 (서버)
  $scope.imgUrl = "http://cfile24.uf.tistory.com/original/1410BD344EF1FEAD292FC3";
  // 국가 리스트 불러오기 (서버)
  /*
  ajaxService.get({url:'/api/selectCountryInfo',
                  data:{IATA:false, picture:true},
                  callback:function(response){
                      $scope.countryList = response;
                      //$scope.imgUrl = response.data;
                  }
                });
                */
// **TEST DATA**
  $scope.countryList =  [
    {
        "countryInfo" : {
             "name" : "Japan",
             "code" :  "JPN"
         }
      ,"picture" : [
             { "url":"http://cfile8.uf.tistory.com/image/255DC34B54C700871C698E",
               "contents" :"XXXXXXXXXXXXXXXXx", "format":"bmp", "wsize":"300", "hsize":"300"},
      ]
    }
    ,{
        "countryInfo" : {
             "name" : "South korea",
             "code" :  "kor"
         }
      ,"picture" : [
             { "url":"http://cfile24.uf.tistory.com/original/1410BD344EF1FEAD292FC3",
               "contents" :"XXXXXXXXXXXXXXXXx", "format":"bmp", "wsize":"300", "hsize":"300"},
      ]
  }
];
$scope.itemSelectedCountry="";
//setInterval(function(){console.log($scope.itemSelectedCountry)},1000);
  // 국가 리스트 선택하면 도시 리스트 불러오기 (서버)
  $scope.changeCountry = function(){
    console.log($scope.itemSelectedCountry);
    ajaxService.get({url:'/api/selectCountryInfo',
                    data:{IATA:true, country: $scope.itemSelectedCountry, picture:true},
                    callback:function(response){
                        $scope.cityList = response;
                    }
                  });
  };

  // 출발 일자도 데이터 바인딩

  // 검색 요청 (데이터를 다음 화면으로 전달)

}]);
