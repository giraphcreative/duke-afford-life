

$(function(){
	
	var recalculate_total = function(){
			var total = parseFloat( typeof( $(".result.credit").html() )!=="undefined" ? $(".result.credit").html().replace("$","").replace(",","") : 0 )+
				parseFloat( typeof( $(".result.loan-auto").html() )!=="undefined" ? $(".result.loan-auto").html().replace("$","").replace(",","") : 0 )+
				parseFloat( typeof( $(".result.loan-personal").html() )!=="undefined" ? $(".result.loan-personal").html().replace("$","").replace(",","") : 0 );
			if ( total>0 ) {
				$(".result.total").html(""+total.toFixed(2));
			}
		};

	$(".calculator.credit").accrue({
		mode: "compare",
		response_output_div: ".result.credit",
		response_compare:"Payment: $%loan_2_payment_amount%/mo<br>Savings: $%savings%",
		error_text:"Enter loan info to see payment and savings.",
		callback: function( elem, data ){
			if ( data!==0 ) {
				recalculate_total();
			}
		}
	});

	$(".calculator.loan-auto").accrue({
		mode: "compare",
		response_output_div: ".result.auto",
		response_compare:"Payment: $%loan_2_payment_amount%/mo<br>Savings: $%savings%",
		error_text:"Enter loan info to see payment and savings.",
		callback: function( elem, data ){
			if ( data!==0 ) {
				recalculate_total();
			}
		}
	});

	$(".calculator.loan-personal").accrue({
		mode: "compare",
		response_output_div: ".result.personal",
		response_compare:"Payment: $%loan_2_payment_amount%/mo<br>Savings: $%savings%",
		error_text:"Enter loan info to see payment and savings.",
		callback: function( elem, data ){
			if ( data!==0 ) {
				recalculate_total();
			}
		}
	});

	$(".numbers-only").keyup(function(){
		var fixed=$(this).val().replace(/[^0-9.]/g,"");
		$(this).val( fixed );
	});

	$(".calculate").click(function(){
		$(".tool").slideUp( 'slow' );
		$(".results").slideDown( 'slow' );
		$('html,body').animate({
			scrollTop: $( "header img" ).height()
        }, 800);
	});

	$(".go-back").click(function(){
		$(".tool").slideDown( 'slow' );
		$(".results").slideUp( 'slow' );
	});

});

