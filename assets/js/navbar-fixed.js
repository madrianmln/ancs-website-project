var elementPosition = $('#buyNowNavbarAncs').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('#buyNowNavbarAncs').css('position','sticky').css('top','0');
        } else {
            $('#buyNowNavbarAncs').css('position','static');
        }    
});