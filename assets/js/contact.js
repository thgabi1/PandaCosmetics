$(function(){
    $('#reservation-checkbox').on('change', function(){           
        if($(this).is(':checked')){
            $('#date-time-picker').attr('disabled', false);
            $('#kezeles-tipus').attr('disabled', false);
            $('.btn-foglalas').attr('disabled', false);
            $('.sendmessage-btn').attr('disabled', true);
        } else {
            $('#date-time-picker').attr('disabled', true);
            $('#kezeles-tipus').attr('disabled', true);
            $('.btn-foglalas').attr('disabled', true);
            $('.sendmessage-btn').attr('disabled', false);
        }
    });
 });