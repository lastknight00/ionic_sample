angular.module('app.controllers')

.controller('detailListCtrl', ['$scope', '$stateParams', 'ajaxService',
function ($scope, $stateParams, ajaxService) {
  var searchParam = {
    pageSize : 10,
    pageNum : 0
  };
  $scope.noMoreItemsAvailable = false;
  $scope.jobList = [];

  $scope.loadMore = function() {
    searchParam.pageNum++;
    ajaxService.get({
      url : '/api/selectjoblist',
      data : searchParam,
      callback:function(data){
        data.joblist.forEach(function(value) {
          value.label = (value.mode == 'a') ? "Pick up" : "Delevery";
          $scope.jobList.push(value);
        });
        //$scope.jobList = $scope.jobList.concat(data.joblist);
        $scope.$apply();
        $scope.$broadcast('scroll.infiniteScrollComplete');
        $scope.noMoreItemsAvailable = searchParam.pageNum * searchParam.pageSize >= data.count;
      }
    });
  };

  $scope.title = $stateParams.param.label;
}])
