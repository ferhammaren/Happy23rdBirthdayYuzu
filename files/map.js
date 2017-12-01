var marker;
var infoWindow;
var messageWindow;
function initMap() {
    var satelliteMap;

    var iceRinkSendai = { lat: 38.317238, lng: 140.892181 }
    satelliteMap = new google.maps.Map(document.getElementById('satelliteMap'), {
        center: iceRinkSendai,
        zoom: 17,
        mapTypeId: 'hybrid'
    });
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('satelliteInfo')
    });
    messageWindow = new google.maps.InfoWindow({
        content: document.getElementById('messageComplete')
    });

    google.maps.event.addListener(satelliteMap, 'click', function (event) {
        // addMarker(event.latLng, satelliteMap);
      var  image = {
            url: 'images/POOH.png',
            size: new google.maps.Size(68, 78),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(34, 39)
        };
      var  shape = {
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


    //load the markers ayy

    downloadUrl1('files/getMarkers.php', function (data) {
        var markerImage;
        var markerShape;
         var xml1 = data.responseXML;
         var markers = xml1.documentElement.getElementsByTagName('marker');
         Array.prototype.forEach.call(markers, function (markerElem) {
             var id = markerElem.getAttribute('id');
             var name = markerElem.getAttribute('name');
             var message = markerElem.getAttribute('message');
             var type = markerElem.getAttribute('type');
             var point = new google.maps.LatLng(
                 parseFloat(markerElem.getAttribute('lat')),
                 parseFloat(markerElem.getAttribute('lng')));
     
             //shows the message i guess
             var infowincontent = document.createElement('div');
             var strong = document.createElement('strong');
             strong.textContent = name
             infowincontent.appendChild(strong);
             infowincontent.appendChild(document.createElement('br'));
     
             var text = document.createElement('text');
             text.textContent = message;
             infowincontent.appendChild(text);

//marker images and shapes

var imageType={
    pooh: 
        image = {
            url: 'images/POOH.png',
            size: new google.maps.Size(68, 78),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(8, 69)
        }
    
    ,
    sadpooh: 
        image = {
            url: 'images/sadPooh.png',
            size: new google.maps.Size(68, 78),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(8, 69)
        }
       
    ,
    angryPooh: 
        image = {
            url: 'images/angryPooh.png',
            size: new google.maps.Size(68, 78),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(8, 69)
        }
      
    ,
    pBow: 
        image = {
            url: 'images/pBow.png',
            size: new google.maps.Size(40, 30),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(7, 29)
        }
      
    ,
    satellite: 
        image = {
            url: 'images/satellite.png',
            size: new google.maps.Size(60, 66),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(15, 62)
        }
        
        
    }


var shapeType={
    pooh:
        shape = {
            coords: [35, 2, 67, 28, 28, 76, 7, 31, 31, 35],
            type: 'poly'
        }
    ,
    sadPooh:
        shape = {
            coords: [35, 2, 67, 28, 28, 76, 7, 31, 31, 35],
            type: 'poly'
        }
    ,
    angryPooh:
        shape = {
            coords: [35, 2, 67, 28, 28, 76, 7, 31, 31, 35],
            type: 'poly'
        }
    ,
    satellite:
        shape = {
            coords: [44, 5, 58, 51, 14, 63, 6, 13, 1, 44, 5],
            type: 'poly'
    }
,
    pBow:
        shape = {
            coords: [1, 14, 30, 1, 39, 15, 8, 28, 1, 14],
            type: 'poly'
        }
    
    
}
var infoWindowLoaded;
//end marker images and shapes
         markerImage= imageType[type] || {};
         markerShape= shapeType[type] || {};
             //end marker image
             var loadedMarker = new google.maps.Marker({
             map: satelliteMap,
             position: point,
             icon:markerImage,
             shape:markerShape
             
         });
         loadedMarker.addListener('click', function () {
             infoWindowLoaded.setContent(infowincontent);
             infoWindowLoaded.open(satelliteMap, loadedMarker);
         });
     });
     });
    }
function saveData() {
    var name = escape(document.getElementById('satelliteName').value);
    var address = escape(document.getElementById('message').value);
    var type = document.getElementById('markerType').value;
    var latlng = marker.getPosition();
    var url = 'files/phpsqlinfo_addrow.php?name=' + name + '&address=' + address +
        '&type=' + type + '&lat=' + latlng.lat() + '&lng=' + latlng.lng();
    alert(address);
    downloadUrl(url, function (data, responseCode) {

        if (responseCode == 200 && data.length <= 1) {
            infoWindow.close();
            messageWindow.open(satelliteMap, marker);
        } else {
        }
    });
}

function downloadUrl(url, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request.responseText, request.status);
        }
    };
    request.open('GET', url, true);
    request.send(null);
}

function doNothing() {
}



function downloadUrl1(url, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            request.onreadystatechange = doNothing1;
            callback(request, request.status);
        }
    };

    request.open("GET", url, true);
    request.send(null);
}

function doNothing1() { }

