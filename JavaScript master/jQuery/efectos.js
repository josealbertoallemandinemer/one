'use strict'

$(document).ready(function(){

    console.log("estamos listos!");
});

jQuery(document).ready(function(){


$("#caja").hide();

$("#mostrar").click(function(){

    $(this).hide();
    $("#ocultar").show();

    $("#caja").show('fast');

    // $("#caja").fadeIn('slow');
    // $("#caja").fadeTo('slow',0.8);
    // $("#caja").slideDown('slow');
});

$("#ocultar").click(function(){

    $(this).hide();
    $("#mostrar").show();

    // $("#caja").hide('fast');

    // console.log("cartel oculto");

    $("#caja").hide('fast', function(){
        console.log("cartel oculto");
    });

    // $("#caja").fadeOut('slow');
    // $("#caja").fadeTo('slow',0.2);
    // $("#caja").slideUp('slow');
});




$("#todoenuno").click(function(){

$("#caja").toggle('fast');
// $("#caja").slideToggle('fast');

});


$("#animame").click(function(){

      $("#caja").animate({
        
                          marginLeft:'500px',
                          fontSize: '40px',
                          height: '110px',


                                        
                                     
                                     },'slow')

                                     .animate({

                                        borderRadius:'900px',
                                        marginTop: '80px' 

                                     }, 'slow')

                                     .animate({

                                        borderRadius:'0px',
                                        marginLeft: '0px' 

                                     }, 'slow')
                                     .animate({

                                        borderRadius:'100px',
                                        marginTop: '0px' 

                                     }, 'slow')

                                     .animate({
        
                                        marginLeft:'500px',
                                        fontSize: '40px',
                                        height: '110px',
              
              
                                                      
                                                   
                                                   },'slow');


});















});