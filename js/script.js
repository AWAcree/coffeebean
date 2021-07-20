let map;

function initMap(){
    // Map options
    var options = {
      zoom:8,
      center:{lat:38.240850, lng:-85.720530}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

  var marker = new google.maps.Marker({
      position:{lat:38.240850, lng:-85.720530},
      map:map
  });
 
      }