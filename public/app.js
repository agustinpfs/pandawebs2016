

function moveTechno() {
$( ".technoh2" ).toggleClass('status1, status2')
}
function moveServices() {
$( ".servicesh2" ).toggleClass('status1--services, status2--services')
}
function moveContact() {
$( ".contacth2" ).toggleClass('status1--contact, status2--contact')
	setTimeout(function(){
		$( ".Layout-h1" ).addClass('status2--logo')
		$( ".contacth2" ).addClass('status3--contact')

	}, 500);
}


	
$( ".servicesh2" ).on( "click", moveServices )
$( ".technoh2" ).on( "click", moveTechno )
$( ".contacth2" ).on( "click", moveContact )