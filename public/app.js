

function moveTechno() {
$( ".technoh2" ).toggleClass('status1, status2')
$( ".Layout-techno_content" ).fadeIn( 1000 )
}
function moveServices() {
$( ".servicesh2" ).toggleClass('status1--services, status2--services')
$( ".Layout-services_content" ).fadeIn( 1000 )

}
function moveContact() {
$( ".contacth2" ).toggleClass('status1--contact, status2--contact')
	setTimeout(function(){
		$( ".Layout-h1" ).addClass('status2--logo')
		$( ".contacth2" ).addClass('status3--contact')
		setTimeout(function(){
			$( ".Contact" ).slideDown( 500 )
			$( ".icon-logo1" ).fadeIn( 1000 )
		}, 1000)

	}, 500)
}


	
$( ".servicesh2" ).on( "click", moveServices )
$( ".technoh2" ).on( "click", moveTechno )
$( ".contacth2" ).on( "click", moveContact )