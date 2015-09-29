//Setting an Angular module: 
angular.module ('driveway',[])

	
		var map;
		function initMap() {
    			var CO = new google.maps.LatLng(40.018005,-105.278430);
    			var mapOptions = {
        			zoom: 13,
        			center: CO,
    			}
   				 map = new google.maps.Map(document.getElementById('map'),mapOptions);
    			google.maps.event.addListener(map, 'click', function(event) {
        	   
        	        var marker = new google.maps.Marker({
    		    		position: event.latLng,
       		 			map: map,
       		 			title: location.toString(),
   					});
    				google.maps.event.addListener(marker, 'click', function(event) {
       		 			marker.setMap(null);
    				});
    				google.maps.event.addListener(marker, 'mouseover', function(event) {
       		 			console.log(marker.title)
    				});
   				});
		}
		
//Defining the Controller function: mainControllerFunc
var drivewayControllerFunc = function ($scope) {











	// $scope.positionArray = []
	// $scope.xPosition = 0
	// $scope.yPosition = 0

	// $scope.mapClick = function (event) {
	// 	var goldLocation = {
	// 		xposition: $scope.xPosition = (event.pageX - 24),
	// 		yposition: $scope.yPosition = (event.pageY - 24),
	// 		comments: prompt('Comments: '),
	// 		commentVisibility: false,
	// 	} 
	// 	$scope.positionArray.push(goldLocation)
	// 	console.log($scope.positionArray)
	// }

	// $scope.removeMarker = function (index) {
	// 	$scope.positionArray.splice(index,1)

	// }

	// $scope.showComment = function (index) {
	// 	$scope.positionArray[index].commentVisibility = !$scope.positionArray[index].commentVisibility
	// }

}






//Registering the controller: mainController
angular.module('driveway').controller('drivewayController',['$scope', drivewayControllerFunc])