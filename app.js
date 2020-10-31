//Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 45.166230, lng: -77.494310};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

var nav = document.getElementById('nav');
var menu = document.getElementById('hmenu');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e) {
  nav.classList.toggle('hide-mobile');
  e.preventDefault();
});

exit.addEventListener('click', function(e) {
  nav.classList.add('hide-mobile');
  e.preventDefault();
});



