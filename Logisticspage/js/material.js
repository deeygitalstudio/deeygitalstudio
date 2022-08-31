AOS.init();


  $(document).ready(function(){
   $('.sidenav-trigger').click(function(){
    $('.sidenav').sidenav({
      inDuration: 2000,
      outDuration: 2000, 
    });
   })

   $('.close-sidenav-trigger').click(function(){
        $('.sidenav').sidenav('close');  
   })

 });




  
    $(document).ready(function(){
      $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [ 
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          //
        ],
        

      });

      
    });
	