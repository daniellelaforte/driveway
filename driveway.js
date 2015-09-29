//Setting an Angular module: goldRushApp
angular.module ('goldRushApp',[])

//Defining the Controller function: mainControllerFunc
var mainControllerFunc = function ($scope) {
	$scope.positionArray = []
	$scope.xPosition = 0
	$scope.yPosition = 0

	$scope.mapClick = function (event) {
		var goldLocation = {
			xposition: $scope.xPosition = (event.pageX - 24),
			yposition: $scope.yPosition = (event.pageY - 24),
			comments: prompt('Comments: '),
			commentVisibility: false,
		} 
		$scope.positionArray.push(goldLocation)
		console.log($scope.positionArray)
	}

	$scope.removeMarker = function (index) {
		$scope.positionArray.splice(index,1)

	}

	$scope.showComment = function (index) {
		$scope.positionArray[index].commentVisibility = !$scope.positionArray[index].commentVisibility
	}

}

//Registering the controller: mainController
angular.module('goldRushApp').controller('mainController',['$scope',mainControllerFunc])