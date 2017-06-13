/*function to set the top navigation dropdown right aligned*/
$('.top-nav-tabs .dropdown').click(function(){
    if($(document).width() > 768){
    var elementWidth = parseInt($(this).css('width'));    
    var toggleWidth = parseInt($('.dropdown-menu').css('width'));
    $('.top-nav-section .dropdown-menu').css('left',"-"+(toggleWidth-elementWidth)+"px");
    }    
});
/*function to appear the filter tab at proper position*/
$('.flight-user-details .filter-btn').click(function(){
    $('.virtualClick').click();
});

/***********function to navigate the flight slider********/

function previousFlight(){
    var currentLeft = parseInt($('.slide-container').css('left'));
    var slideWidth = parseInt($('.flight-slide').css('width'));
    
    if(isNaN(currentLeft)){
        currentLeft = 0;
        $('.slide-container').css('left','-'+slideWidth+'px')
    }
    else{
        currentLeft -= slideWidth;
        $('.slide-container').css('left',currentLeft+'px');
    }
}
function nextFlight(){
    var currentLeft = parseInt($('.slide-container').css('left'));
    var slideWidth = parseInt($('.flight-slide').css('width'));
    
    if(isNaN(currentLeft)){
        currentLeft = 0;
        $('.slide-container').css('left','-'+slideWidth+'px')
    }
    else{
        currentLeft -= slideWidth;
        $('.slide-container').css('left',currentLeft+'px');
    }
}

/*function to animate additional flight info*/
function additionalInfo(data){
    var displayClass = data.getAttribute('data-target');
    $('.extandable-view').hide(500);
    $('.'+displayClass).show(500);
}
/***********function bootstrap the airline slider********/
$(document).ready(function(){
    setTimeout(function(){
        var flightSliderWidth = parseInt($('.flight-slider').css('width'));
        var flightSliderHeight = parseInt($('.flight-slider').css('height'));
        var navBtnWidth = parseInt($('.flight-slider > .glyphicon').css('width'));        
        var finalWidth = flightSliderWidth-(2*navBtnWidth)-2;        
        var slideWrapperWidth = $('.slideWrapper').css('width',finalWidth+'px'); 
        $('.slideWrapper').css('height',flightSliderHeight+'px'); 
        var noOfslides = $('.flight-slider .flight-slide').length;
        var widthOfEachSlide = finalWidth/6;
        var slideContainerWidth = widthOfEachSlide*noOfslides;
        //alert(slideContainerWidth);
        
        $('.slide-container').css('width',slideContainerWidth+'px');
        $('.slide-container').css('height',flightSliderHeight+'px');
        
        $('.flight-slider .flight-slide').css('width',widthOfEachSlide+'px');
        $('.flight-slider .flight-slide').css({'float':'left'});
    },500);
});

