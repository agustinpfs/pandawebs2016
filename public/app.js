

function moveTechno() {
$( ".technoh2" ).toggleClass('status1, status2')
}
function moveServices() {
$( ".servicesh2" ).toggleClass('status1--services, status2--services')
}
	
$( ".servicesh2" ).on( "click", moveServices )
$( ".technoh2" ).on( "click", moveTechno )