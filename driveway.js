//Setting an Angular module: 
angular.module ('driveway',[])

		var center1;
		var map;
		function initMap() {
    			// var CO = new google.maps.LatLng(40.018005,-105.278430);
    			var mapOptions = {
        			zoom: 14,
        			center: new google.maps.LatLng(40.018005,-105.278430),
    			}

   				map = new google.maps.Map(document.getElementById('map'),mapOptions);

  				// document.getElementById('submit').addEventListener('click', function() {
    			// 	geocodeAddress(geocoder, map);
  				// 	});	
    		function calculateCenter() {
  					center1 = map.getCenter();
				}
			google.maps.event.addDomListener(map, 'idle', function() {
  				calculateCenter();
				});
			google.maps.event.addDomListener(window, 'resize', function() {
  				map.setCenter(center1);
				});
		}		

var drivewayControllerFunc = function ($scope) {
	$scope.showmap = true;
	var clickedMarkerTitle = {};

	$scope.showAddressForm = function () {
		$scope.showaddressform = true;
		$scope.showmap = false;
	}


	$scope.Submit = function () {
		$scope.showaddressform = false;
		$scope.showmap = true;
		var parkimage = 'curbtopark.png';
		var image = 'blackcar.png';
		$scope.address = $scope.street + " " + $scope.city + " " + $scope.state + " " + $scope.zip;

		var geocoder = new google.maps.Geocoder();
				function geocodeAddress(geocoder, resultsMap) {
  				var address = $scope.address;
  				geocoder.geocode({'address': address}, function(results, status) {
    			if (status === google.maps.GeocoderStatus.OK) {
      				resultsMap.setCenter(results[0].geometry.location);
      				var marker = new google.maps.Marker({
        				map: resultsMap,
        				position: results[0].geometry.location,
        				title: $scope.street,
        				icon: image


      				})

      				var contentString = '<div id="content">'+
      					'<div id="siteNotice">'+
      					'</div>'+
      					'<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      					'<div id="bodyContent">'+
      					'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      					'sandstone rock formation in the southern part of the '+
      					'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      					'south west of the nearest large town, Alice Springs; 450&#160;km '+
      					'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      					'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      					'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      					'Aboriginal people of the area. It has many springs, waterholes, '+
      					'rock caves and ancient paintings. Uluru is listed as a World '+
      					'Heritage Site.</p>'+
      					'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      					'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      					'(last visited June 22, 2009).</p>'+
      					'</div>'+
      					'</div>';

  					var infowindow = new google.maps.InfoWindow({
    						content: contentString,
    						maxWidth: 200
  						});



				google.maps.event.addListener(marker, 'click', function(event) {
        		 		// marker.setMap(null);
        			clickedMarkerTitle = marker;
    			});	

        		document.getElementById('parkhere').addEventListener('click', function() {
    				// marker.setMap(null);
    				clickedMarkerTitle.setMap(null); 			
    			});
    						
    			google.maps.event.addListener(marker, 'mouseover', function(event) {
       		 		infowindow.open(map, marker);
    						});


    			} else {
      				alert('Geocode was not successful for the following reason: ' + status);
    					}
  				});



		}
			
        geocodeAddress(geocoder, map);


					// google.maps.event.addListener(map, 'click', function(event) {
        	   
//         	       		 	 var marker = new google.maps.Marker({
//     		    					position: event.latLng,
//        		 					map: map,
//        		 					title: location.toString(),
//    							});


}

}



//Registering the controller: mainController
angular.module('driveway').controller('drivewayController',['$scope', drivewayControllerFunc])