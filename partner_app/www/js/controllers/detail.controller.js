angular.module('app.controllers')

.controller('detailCtrl', ['$scope', '$stateParams', 'ajaxService',
function ($scope, $stateParams, ajaxService) {
  console.log($stateParams)
  $scope.label = $stateParams.param.label;
  $scope.time = $stateParams.param.time;
  $scope.location = $stateParams.param.location;

  ajaxService.post({
    url : '/api/selectjobinfo',
    param : {
      id : 1
    },
    callback : function(data) {
      $scope.sex = data.sex;
      $scope.name = data.name;
      $scope.phone = data.phone;
    }
  });
}])
