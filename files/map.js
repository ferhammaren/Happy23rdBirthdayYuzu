
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initMap() {
    var satelliteMap;
    satelliteMap = new google.maps.Map(document.getElementById('satelliteMap'), {
        center: { lat: 38.317238, lng: 140.892181 },
        zoom: 17,
        mapTypeId: 'hybrid'
    });

    google.maps.event.addListener(satelliteMap, 'click', function (event) {
        addMarker(event.latLng, satelliteMap);
    });
}

function addMarker(location, map) {
    var image = {
        url: 'images/POOH.png',
        size: new google.maps.Size(68, 78),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(34, 39)
    };
    var shape = {
        coords: [35, 2, 67, 28, 28, 76, 7, 31, 31, 35],
        type: 'poly'
    };
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: image,
        shape: shape
    });
}

