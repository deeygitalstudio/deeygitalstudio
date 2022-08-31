const myPassword = document.querySelector('#password');
const eyeIcon = document.querySelector('#eye');

eyeIcon.addEventListener('click', () => {
  if(eyeIcon.classList.contains('fa-eye')) {
      myPassword.setAttribute('type', 'text');
      eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
     // eyeIcon.classList.remove('fa-eye');
      //eyeIcon.classList.add('fa-eye-slash');
    
  } else { 
    myPassword.setAttribute('type', 'password');
    eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
  }

})