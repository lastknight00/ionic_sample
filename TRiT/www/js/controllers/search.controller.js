angular.module('app.controllers')
.controller('searchCtrl', ['$scope', '$stateParams', 'ajaxService', '$state',
function ($scope, $stateParams, ajaxService, $state) {
  // defaul 국가
  var defaultCountry = 'kor';

  // 국가 리스트 옵션에 설정하는 method
  var SettingCountryList = function(data){
    $scope.countryList = data.countryInfoList;
    //var countryList = $scope.countryList.convertToMap("countryInfo.code");

    // default option : South Korea
    //$scope.itemSelectedCountry=countryList[defaultCountry];
    //$scope.imgUrl=countryList[defaultCountry].picture[0].url;

    // default country 선택 후 change event 강제 호출 ---> TODO
    //$scope.changeCountry(countryList[defaultCountry]);
  };

  // 국가 리스트 불러오기 (서버)
  /*
  ajaxService.get({url:'/api/selectCountryInfo',
                  data:{IATA:false, picture:true},
                  callback:function(response){
                      SettingCountryList(response);
                  }
                });
  */

  // 국가 리스트 선택하면 도시 리스트 불러오기 (서버)
  $scope.changeCountry = function(itemSelectedCountry){
    $scope.imgUrl = itemSelectedCountry.picture[0].url;

    ajaxService.get({url:'/api/selectcountryinfo',
                    data:{IATA:true, country: itemSelectedCountry.countryInfo.code, picture:true},
                    callback:function(response){
                        //$scope.cityList = response[0].IATAInfo;
                        var responseCityData = response[0].IATAInfo;
                        $scope.cityList = responseCityData;
                        $scope.itemSelectedCity = responseCityData[0];
                    }
                  });
  };

  $scope.itemSelectedDate=new Date();
  // 출발 일자도 데이터 바인딩
  $scope.changeDate = function(itemSelectedDate){
    console.log(itemSelectedDate);
  }

  // 검색 요청 (데이터를 다음 화면으로 전달)
  $scope.clickSearch = function(){
    var reqData = {
      "reqCountry": $scope.itemSelectedCity,
      "reqCity":$scope.itemSelectedCity,
      "reqDate":$scope.itemSelectedDate
    }

    $state.go('partnerList',{param:reqData});
  }

  // **TEST용 -> 서버 연결 시 삭제
  //SettingCountryList(testData_countrylist);

  ajaxService.get({url:'/api/selectcountryinfo',
                  data:{IATA:false, picture:true},
                  callback:function(response){
                      //$scope.cityList = response[0].IATAInfo;
                      SettingCountryList(response);
                  }
                });

}]);
