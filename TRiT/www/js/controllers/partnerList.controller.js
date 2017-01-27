angular.module('app.controllers')
.controller('partnerListCtrl', ['$scope', '$stateParams', 'DatasService',
function ($scope, $stateParams,DatasService) {
    $(document).ready(function(){
        $(".option_list").parent().hide();
    });

    $scope.datas = DatasService.datas;
    $scope.toggleOption = function($event) {
        var target = $($event.target).closest('form').next();
      if(target.css('display')=='none') {
        target.show();
      } else {
        target.hide();
      }
    };
}]);
