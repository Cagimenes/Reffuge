$(document).ready(function(){

    $( '.click' ).on( "click" , function(e) {

        $( this ).parent().find( '.infos').toggle();
        if( $(this).parent().find( 'i' ).hasClass( 'fa-solid fa-chevron-down' ) ) {
            $( this ).parent().find( 'i' ).attr( 'class' , 'fa-solid fa-chevron-up' );
        } else {
            $( this ).parent().find( 'i' ).attr( 'class' , 'fa-solid fa-chevron-down' );
        }
        
    });
});