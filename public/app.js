

function moveTechno() {
$( ".technoh2" ).toggleClass('status1, status2')
$( ".Layout-techno_content" ).fadeToggle( 400 )

}
function moveServices() {
$( ".servicesh2" ).toggleClass('status1--services, status2--services')
$( ".Layout-services_content" ).fadeToggle( 400 )
}
function moveContact() {
$( ".Layout-services_content" ).fadeOut( 200 ) 
$( ".Layout-techno_content" ).fadeOut( 200 ) 
$( ".servicesh2" ).removeClass('status2--services') 
$( ".technoh2" ).removeClass('status2') 
$( ".servicesh2" ).addClass('status1--services')
$( ".technoh2" ).addClass('status1')
$( ".contacth2" ).toggleClass('status1--contact, status2--contact')
	setTimeout(function(){
		$( ".Layout-h1" ).addClass('status2--logo')
		$( ".contacth2" ).addClass('status3--contact')
		setTimeout(function(){
			$( ".Contact" ).slideDown( 500 )
			$( ".icon-logo1" ).fadeIn( 1000 )
		}, 500)

	}, 200)
}
function removeContact(){
	$( ".contacth2" ).toggleClass('status1--contact, status2--contact')
	$( ".Layout-h1" ).removeClass('status2--logo')
	$( ".contacth2" ).removeClass('status3--contact')
	$( ".Contact" ).fadeOut(0)
	$( ".icon-logo1" ).fadeOut(0)
	
	}



	
$( ".servicesh2" ).on( "click", moveServices )
$( ".technoh2" ).on( "click", moveTechno )
$( ".contacth2" ).on( "click", moveContact )
$( ".x" ).on( "click", removeContact )