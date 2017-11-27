
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var labelIndex = 0;
        
        function initMap(){
                  var satelliteMap;
            satelliteMap=new google.maps.Map(document.getElementById('satelliteMap'),{
                center:{lat:38.317238,lng:140.892181},
                zoom:17,
                mapTypeId:'hybrid'
            });
        google.maps.event.addListener(satelliteMap,'click',function(event){
            addMarker(event.latLng,satelliteMap);
        });
        }

        function addMarker(location,map){
            var marker=new google.maps.Marker({
                position:location, label: labels[labelIndex++ % labels.length],map: map
            });
        }