angular.module('app.controllers')
.controller('searchCtrl', ['$scope', '$stateParams', 'ajaxService',
function ($scope, $stateParams, ajaxService) {
  // 국가 리스트 불러오기 (서버)
  /*
  ajaxService.get({url:'/api/selectCountryInfo',
                  data:{IATA:false, picture:true},
                  callback:function(response){
                      SettingCountryList(response);
                  }
                });
                */

  // **TEST DATA**
  var testData_countrylist =  [
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
               "name" : "South Korea",
               "code" :  "kor"
           }
        ,"picture" : [
               { "url":"http://cfile24.uf.tistory.com/original/1410BD344EF1FEAD292FC3",
                 "contents" :"XXXXXXXXXXXXXXXXx", "format":"bmp", "wsize":"300", "hsize":"300"},
        ]
    }
  ];

  // 국가 리스트 옵션에 설정하는 method
  var SettingCountryList = function(data){
    $scope.countryList = data;
    var countryList = COMM_UTIL.convertArrayToMap($scope.countryList, "countryInfo.code");

    // default option : South Korea
    $scope.itemSelectedCountry=countryList['kor'];
    $scope.imgUrl=countryList['kor'].picture[0].url;
  };

  // **TEST용 -> 서버 연결 시 삭제
  SettingCountryList(testData_countrylist);

  // 국가 리스트 선택하면 도시 리스트 불러오기 (서버)
  $scope.changeCountry = function(itemSelectedCountry){
    console.log(itemSelectedCountry.countryInfo);
    $scope.imgUrl = itemSelectedCountry.picture[0].url;
    ajaxService.get({url:'/api/selectCountryInfo',
                    data:{IATA:true, country: itemSelectedCountry.countryInfo.code, picture:true},
                    callback:function(response){
                        $scope.cityList = response;
                    }
                  });
  };

  $scope.itemSelectedDate=new Date();
  // 출발 일자도 데이터 바인딩
  $scope.changeDate = function(itemSelectedDate){
    console.log(itemSelectedDate);
  }

  // 검색 요청 (데이터를 다음 화면으로 전달)

}]);
