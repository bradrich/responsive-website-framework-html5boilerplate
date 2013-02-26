// Our global state
var map;
var markers = [];
var infoWindow;
var latlng;
var bounds;
var searchedLocation;
var stopLatLngArray = [];
var stopContentArray = [];
var stopMarkerArray = [];
var stopDistanceArray = [];
var sideInfo;
var routeOrigin;
var routeDestination;
var closestStopGoing;
var closestStopComing;
//var directionDisplay;
//var directionsService;
var routeCoordinates = [];
var poly;
var gRouteCategory;
var gRouteName;
var gRouteFullFare;
var gRouteTransferFee;
var gRouteHalfFare;
var gRouteFareInfo;

function OnLoad(){
	// Create Route Stops Array
	createRouteStopsArray();

	// Create Google Map
	createGoogleMap(34.193128, -79.770763);

	// Initialize infoWindow from global variable
	infoWindow = new google.maps.InfoWindow();

	// Create all route stop markers
	setMarkers(RouteStops);
}

function createRouteStopsArray(){
	RouteStops = [
		["HillSouth", "318 West Palmetto Street<br />Florence, SC 29501", 34.193128, -79.770763]
	];
}

function createGoogleMap(Latitude, Longitude){
	latlng = new google.maps.LatLng(Latitude, Longitude);
	bounds = new google.maps.LatLngBounds(latlng);
	var settings = {
		zoom: 14,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			position: google.maps.ControlPosition.TOP_RIGHT
		},
		navigationControl: true,
		navigationControlOptions: {
        	style: google.maps.NavigationControlStyle.ZOOM_PAN,
        	position: google.maps.ControlPosition.TOP_LEFT
    	},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	// Initialize Google Map from global variable and using above settings
	map = new google.maps.Map(document.getElementById("map"), settings);
}

function setMarkers(RouteStops){
	var stopMarkerShadow = new google.maps.MarkerImage('img/HSGoogleIconShadow.png',new google.maps.Size(51,56),new google.maps.Point(0,0),new google.maps.Point(15,50));
	
	// Cycle through all route stops
	for (var i = 0; i < RouteStops.length; i++) {
		var stopLocation = RouteStops[i];
		
		// Set image
		var stopMarkerImage;
		stopMarkerImage = new google.maps.MarkerImage('img/HSGoogleIcon.png',
			new google.maps.Size(51,56),
			new google.maps.Point(0,0),
			new google.maps.Point(15,50)
		);
		
		// Set Lat and Long
		var stopLatLng = new google.maps.LatLng(stopLocation[2], stopLocation[3]);
		stopLatLngArray.push(stopLatLng);
		
		// Widen screen to fit
		bounds.extend(stopLatLng);
		//map.fitBounds(bounds);
		
		// Set infoWindow Content
		var stopContent;
		stopContent = '<div class="info-window">'+
			'<p class="maptitle"><img src="img/HSGoogleIcon.png" alt="' + stopLocation[0] + '" width="51" height="56" align="right" style="padding: 3px 0px 0px 10px;" />' + stopLocation[0] + '</h3>'+
			'<p class="mapcontent">' + stopLocation[1] +
			'<br />phone: (843) 393-8600</p>' + 
			'</div>';

		stopContentArray.push(stopContent);
		
		// Set Marker
		var stopZIndex = i + 1;
		var stopMarker = new google.maps.Marker({
			map: map,
			position: stopLatLng,
			icon: stopMarkerImage,
			shadow: stopMarkerShadow,
			title: stopLocation[0],
			zIndex: stopZIndex
		});
		stopMarkerArray.push(stopMarker);
		
		// Marker Listener
		google.maps.event.addListener(stopMarkerArray[i], 'click', function() { 
			setInfoWindow(this);
		});
	}
}

function setInfoWindow(mark){
	for (var m = 0; m < stopMarkerArray.length; ++m) {
		if (stopMarkerArray[m] == mark) {
			infoWindow.setContent(stopContentArray[m]);
			infoWindow.open(map, stopMarkerArray[m]);
			stopMarkerArray[m].setZIndex(RouteStops.length);
			return;
		}
	}
}

function activateMarker(number){
	infoWindow.setContent(stopContentArray[number]);
	infoWindow.open(map, stopMarkerArray[number]);
	stopMarkerArray[number].setZIndex(RouteStops.length + 1);
}