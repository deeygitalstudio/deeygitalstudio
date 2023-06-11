const blackbtn = document.querySelector('.blacks')
const redbtn = document.querySelector('.reds')
const bluebtn = document.querySelector('.blues')
const blackbike = document.querySelector('.img1')
const redbike = document.querySelector('.img2')
const bluebike = document.querySelector('.img3')


redbtn.addEventListener('click', () => {
    blackbike.style.display = 'none'
    bluebike.style.display = 'none'
    redbike.style.display = 'block'

  
    
  
})

blackbtn.addEventListener('click', () => {
    blackbike.style.display = 'block'
    bluebike.style.display = 'none'
    redbike.style.display = 'none'
    
  
  


})



bluebtn.addEventListener('click', () => {
    blackbike.style.display = 'none'
    bluebike.style.display = 'block'
    redbike.style.display = 'none'
    
    

})



anime({
    targets: '.img1',
    translateY: 20,
    duration: 3000,
    loop: true,
    easing: 'easeInOutQuad',
    direction: 'alternate',
  
  });

  anime({
    targets: '.img3',
    translateY: 20,
    duration: 3000,
    loop: true,
    easing: 'easeInOutQuad',
    direction: 'alternate',
  
  });


  anime({
    targets: '.img2',
    translateY: 20,
    duration: 3000,
    loop: true,
    easing: 'easeInOutQuad',
    direction: 'alternate',
  
  });