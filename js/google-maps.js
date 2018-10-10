var tharathai = new google.maps.LatLng(50.939260,6.8422843);

function initialize()
{
    var mapProp = {
        center: tharathai,
        zoom: 17,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker=new google.maps.Marker({
        position: tharathai,
    });
    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: "<b>Thara Thai</b><br />Bahnstr. 153<br />50858 K&ouml;ln"
    });
    infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function ()
{
    $(".top-title").fadeIn(1000);

    $(".second-title").fadeIn(3000);

    setTimeout(function()
    {
        $('#top hr').addClass('grow');
    }, 1000);
});

$(function()
{

    // Initialize the gallery
    $('.thumbs a').touchTouch();

});