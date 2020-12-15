function initMap() {
    var locations = [
        ['St.John', 45.014620, -93.323114, 4],
        ['Valley Medical', 44.963555, -93.238112, 5],
        ['Penny George Institute', 44.952636, -93.260224, 3],
        ['Whittier Clinic', 44.952981, -93.277917, 2]
      ];
    
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(44.989411, -93.273472),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    
      var infowindow = new google.maps.InfoWindow();
      var marker, i;
    
      for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
        });
    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
}
