

$(function(){

	$(".calculator.credit").accrue({
		response_output_div: ".result.credit",
		response_basic:"<p><strong>Your payment:<br> $%payment_amount%/mo</strong></p>",
		error_text:"<span>Enter balance info to calculate your payment.</span>",
		callback: function( elem, data ){
			console.log( data );
			if ( data != 0 ) {
				$('.result.credit').addClass( 'calculated' );
			} else {
				$('.result.credit').removeClass( 'calculated' );
			}
		}
	});

	$(".calculator.loan-auto").accrue({
		response_output_div: ".result.auto",
		response_basic:"<p><strong>Your payment:<br> $%payment_amount%/mo</strong></p>",
		error_text:"<span>Enter loan info to calculate your payment.</span>",
		callback: function( elem, data ){
			if ( data != 0 ) {
				$('.result.auto').addClass( 'calculated' );
			} else {
				$('.result.auto').removeClass( 'calculated' );
			}
		}
	});

	$(".calculator.loan-personal").accrue({
		response_output_div: ".result.personal",
		response_basic:"<p><strong>Your payment:<br> $%payment_amount%/mo</strong></p>",
		error_text:"<span>Enter loan info to see calculate your payment.</span>",
		callback: function( elem, data ){
			if ( data != 0 ) {
				$('.result.personal').addClass( 'calculated' );
			} else {
				$('.result.personal').removeClass( 'calculated' );
			}
		}
	});

	$(".numbers-only").keyup(function(){
		var fixed=$(this).val().replace(/[^0-9.]/g,"");
		$(this).val( fixed );
	});

	$(".go-back").click(function(){
		$(".tool").slideDown( 'slow' );
		$(".results").slideUp( 'slow' );
	});

});

