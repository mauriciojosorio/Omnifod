$(document).ready(function() {

$('#js-section-features').waypoint(function(direction) {
	if (direction == "down") {
		$('nav').addClass('stick');
	}  else {
			$('nav').removeClass('stick');
	}
});



// 	var waypoints = $('#handler-first').waypoint(function(direction) {
//   notify(this.element.id + ' hit 25% from top of window')
// }, {
//   offset: '25%'
// })

});
