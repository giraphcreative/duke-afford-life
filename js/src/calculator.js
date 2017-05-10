

$(function(){

	$(".calculator.credit").accrue({
		mode: "compare",
		response_output_div: ".result.credit",
		response_compare:"<strong>Your Payment:<br> $%loan_1_payment_amount%/mo<br>Savings: $%savings%</strong>",
		error_text:"<span>Enter loan info to see payment and savings.</span>",
		callback: function( elem, data ){
			if ( data.loan_1 != 0 ) {
				$('.result.credit').addClass( 'calculated' );
			} else {
				$('.result.credit').removeClass( 'calculated' );
			}
		}
	});

	$(".calculator.loan-auto").accrue({
		mode: "compare",
		response_output_div: ".result.auto",
		response_compare:"<strong>Your Payment:<br> $%loan_1_payment_amount%/mo<br>Savings: $%savings%</strong>",
		error_text:"<span>Enter loan info to see payment and savings.</span>",
		callback: function( elem, data ){
			if ( data.loan_1 != 0 ) {
				$('.result.auto').addClass( 'calculated' );
			} else {
				$('.result.auto').removeClass( 'calculated' );
			}
		}
	});

	$(".calculator.loan-personal").accrue({
		mode: "compare",
		response_output_div: ".result.personal",
		response_compare:"<strong>Your Payment:<br> $%loan_1_payment_amount%/mo<br>Savings: $%savings%</strong>",
		error_text:"<span>Enter loan info to see payment and savings.</span>",
		callback: function( elem, data ){
			if ( data.loan_1 != 0 ) {
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

