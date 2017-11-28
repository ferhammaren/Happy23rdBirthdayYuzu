var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var marker;
var infoWindow;
var messageWindow;

function initMap() {
    var satelliteMap;
    var iceRinkSendai= { lat: 38.317238, lng: 140.892181 }
    satelliteMap = new google.maps.Map(document.getElementById('satelliteMap'), {
        center:iceRinkSendai,
        zoom: 17,
        mapTypeId: 'hybrid'
    });

    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('satelliteInfo')
    });
    // messageWindow=new google.maps.infoWindow({
    //     content:document.getElementById('message')
    // });

    google.maps.event.addListener(satelliteMap, 'click', function (event) {
        // addMarker(event.latLng, satelliteMap);
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
         marker = new google.maps.Marker({
            position: event.latLng,
            map: satelliteMap,
            icon: image,
            shape: shape
        });

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(satelliteMap, marker);
        });

    });
    // google.maps.event.addListener(satelliteMap, 'click', function (event) {
    //     addMarker(event.latLng, satelliteMap);
    // });
}

function saveData(){
    var name = escape(document.getElementById('satelliteName').value);
    var address = escape(document.getElementById('message').value);
    var type = document.getElementById('markerType').value;
    var latlng = marker.getPosition();
    var url = 'http://localhost/Happy23rdBirthdayYuzu/files/phpsqlinfo_addrow.php?name=' + name + '&address=' + address +
              '&type=' + type + '&lat=' + latlng.lat() + '&lng=' + latlng.lng();

    downloadUrl(url, function(data, responseCode) {

      if (responseCode == 200 && data.length <= 1) {
        infoWindow.close();
     //   messagewindow.open(map, marker);
      }else{
          alert("nope "+data);
      }
    });
}
    
    function downloadUrl(url, callback) {
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest;

        request.onreadystatechange = function() {
          if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request.responseText, request.status);
          }
        };

        request.open('GET', url, true);
        request.send(null);
      }

      function doNothing () {
      }





function changeMarkerType(name) {
    switch (name) {
        case "pooh":
            var image = {
                url: 'images/POOH.png',
                size: new google.maps.Size(68, 78),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(8, 69)
            };
            var shape = {
                coords: [35, 2, 67, 28, 28, 76, 7, 31, 31, 35],
                type: 'poly'
            };
            break;
        case "sadPooh":
            var image = {
                url: 'images/sadPooh.png',
                size: new google.maps.Size(68, 78),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(8, 69)
            };
            var shape = {
                coords: [35, 2, 67, 28, 28, 76, 7, 31, 31, 35],
                type: 'poly'
            };
            break;
        case "angryPooh":
            var image = {
                url: 'images/angryPooh.png',
                size: new google.maps.Size(68, 78),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(8, 69)
            };
            var shape = {
                coords: [35, 2, 67, 28, 28, 76, 7, 31, 31, 35],
                type: 'poly'
            };
            break;
        case "pBow":
            var image = {
                url: 'images/pBow.png',
                size: new google.maps.Size(40, 30),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(7, 29)
            };
            var shape = {
                coords: [1, 14, 30, 1, 39, 15, 8, 28, 1, 14],
                type: 'poly'
            };
            break;
        case "satellite":
            var image = {
                url: 'images/satellite.png',
                size: new google.maps.Size(60, 66),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(15, 62)
            };
            var shape = {
                coords: [44, 5, 58, 51, 14, 63, 6, 13, 1, 44, 5],
                type: 'poly'
            };
            break;

    }
}

function getMarkerType(name) {
    switch (name) {
        case "pooh":
            var image = {
                url: 'images/POOH.png',
                size: new google.maps.Size(68, 78),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(8, 69)
            };
            var shape = {
                coords: [35, 2, 67, 28, 28, 76, 7, 31, 31, 35],
                type: 'poly'
            };
            break;
        case "sadPooh":
            var image = {
                url: 'images/sadPooh.png',
                size: new google.maps.Size(68, 78),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(8, 69)
            };
            var shape = {
                coords: [35, 2, 67, 28, 28, 76, 7, 31, 31, 35],
                type: 'poly'
            };
            break;
        case "angryPooh":
            var image = {
                url: 'images/angryPooh.png',
                size: new google.maps.Size(68, 78),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(8, 69)
            };
            var shape = {
                coords: [35, 2, 67, 28, 28, 76, 7, 31, 31, 35],
                type: 'poly'
            };
            break;
        case "pBow":
            var image = {
                url: 'images/pBow.png',
                size: new google.maps.Size(40, 30),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(7, 29)
            };
            var shape = {
                coords: [1, 14, 30, 1, 39, 15, 8, 28, 1, 14],
                type: 'poly'
            };
            break;
        case "satellite":
            var image = {
                url: 'images/satellite.png',
                size: new google.maps.Size(60, 66),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(15, 62)
            };
            var shape = {
                coords: [44, 5, 58, 51, 14, 63, 6, 13, 1, 44, 5],
                type: 'poly'
            };
            break;

    }
}


// function addMarker(location, map) {
//     // var image = {
//     //     url: 'images/POOH.png',
//     //     size: new google.maps.Size(68, 78),
//     //     origin: new google.maps.Point(0, 0),
//     //     anchor: new google.maps.Point(34, 39)
//     // };
//     // var shape = {
//     //     coords: [35, 2, 67, 28, 28, 76, 7, 31, 31, 35],
//     //     type: 'poly'
//     // };
//     var marker = new google.maps.Marker({
//         position: location,
//         map: map,
//         icon: image,
//         shape: shape
//     });
<<<<<<< HEAD
// }
=======
// }
>>>>>>> af709efb034009e7883cfe01fbabb98d11309a11
