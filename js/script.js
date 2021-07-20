
function initMap(){
    var options = {
        zoom: 8,
        center: {lat:38.240850, lng:-85.720530}
    }
    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
        position:{lat:38.240850, lng:-85.720530},
        map:map,
        
    
    });
    var infoWindow = new google.maps.InfoWindow({
        content: '<h1>The Coffee Bean</h1>'
    });
    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
}

