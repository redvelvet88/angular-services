angular.module('myApp').controller('MainCtrl', function($scope, dataService) {
  $scope.avengerArray = dataService.getData();


}); //end MainCtrl
