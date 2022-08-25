AOS.init();

$(document).ready(function() {
    var timeToDisplay = 5000;

    var slideshow = $('.bgimg1');
    var urls = [
        
       './images/children-5445470.jpg',
       './images/boy-3812669.jpg',
       './images/africa-1089242.jpg',
       './images/kids-4111770.jpg',
    ];

    var index = 0;
    var transition = function() {
        var url = urls[index];
        
        slideshow.css('background-image',  'url(' + url + ')');
        slideshow.css('background-repeat', 'no-repeat');
        slideshow.css('background-position', 'center');
        slideshow.css('background-size', 'cover');
        slideshow.css('background-image');
      
       

        index = index + 1;
        if (index > urls.length - 1) {
            index = 0;
        }
    };
    
    var run = function() {
        transition();
        slideshow.fadeIn('slow', function() {
            setTimeout(function() {
                slideshow.fadeOut('slow', run);
            }, timeToDisplay);
        });
    }
        
    run();

    
});

$(document).ready(function(){
    ('.bgimg1').css('background-image', 'url(' + window.location.href + ')');

})



var mysidebar = document.getElementById('mySidebar');

function w3_open(){
    if(!mysidebar.style.display === 'block') {
        mysidebar.style.display = 'none';
    }else{
        mysidebar.style.display = 'block';
        
    }
}

function w3_close(){
    mysidebar.style.display = 'none';
}


