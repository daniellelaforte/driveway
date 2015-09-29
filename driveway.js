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

   				

  				// document.getElementById('submit').addEventListener('click', function() {
    		// 	geocodeAddress(geocoder, map);
  				// 	});

   				
    		
		}


		

var drivewayControllerFunc = function ($scope) {
					
$scope.Submit = function () {


var geocoder = new google.maps.Geocoder();
				function geocodeAddress(geocoder, resultsMap) {
  				// var address = document.getElementById('address').value;
  				var address = $scope.address;
  				geocoder.geocode({'address': address}, function(results, status) {
    			if (status === google.maps.GeocoderStatus.OK) {
      				resultsMap.setCenter(results[0].geometry.location);
      				var marker = new google.maps.Marker({
        				map: resultsMap,
        				position: results[0].geometry.location


      				})


		google.maps.event.addListener(marker, 'click', function(event) {
       		 				marker.setMap(null);
    						});
    						
    						google.maps.event.addListener(marker, 'mouseover', function(event) {
       		 				console.log(marker.title)
    						});
    			} else {
      				alert('Geocode was not successful for the following reason: ' + status);
    					}
  				});



		}
			
        geocodeAddress(geocoder, map);


// google.maps.event.addListener(map, 'click', function(event) {
        	   
//         	       		 	var marker = new google.maps.Marker({
//     		    				position: event.latLng,
//        		 					map: map,
//        		 					title: location.toString(),
//    							});


}



}






//Registering the controller: mainController
angular.module('driveway').controller('drivewayController',['$scope', drivewayControllerFunc])