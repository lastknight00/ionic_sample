angular.module('app.controllers')
.controller('timeListCtrl', ['$scope', '$stateParams', 'ajaxService',
function ($scope, $stateParams, ajaxService) {
  $scope.today = Date.now();
  ajaxService.get({
    url : '/api/selectjobcount',
    callback : function(data) {
      $scope.totalCount = data.totalCount;
      $scope.timeList = [];
      data.joblist.forEach(function(value) {
        var startLabel = value.startHour < 12 ? (value.startHour == 0 ? 12 : value.startHour) + "am" : (value.startHour == 12 ? 12 : (value.startHour - 12)) + "pm";
        var endLabel = value.endHour < 12 ? (value.endHour == 0 ? 12 : value.endHour) + "am" : (value.endHour == 12 ? 12 : (value.endHour - 12)) + "pm";
        value.label = startLabel + " ~ " + endLabel;
        $scope.timeList.push(value);
      });
    }
  });
}])
