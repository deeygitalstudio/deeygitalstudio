import { animate, createSpring, onScroll, utils} from 'https://cdn.jsdelivr.net/npm/animejs/+esm';



animate('.status', {
    scale: [
      { to: 1.25, ease: 'inOut(3)', duration: 200 },
      { to: 1, ease: createSpring({ stiffness: 300 }) }
    ],
    loop: true,
    loopDelay: 250,
  });

//   animate('.square1', {
//     x: '35rem',
//     rotate: '1turn',
//     duration: 2000,
//     alternate: true,
//     loop: true,
//     ease: 'inOutQuad',
//     autoplay: onScroll({
//       container: '.scroll-container'
//     })
//   });
//   animate('.square2', {
//     x: '-35rem',
//     rotate: '1turn',
//     duration: 2000,
//     alternate: true,
//     loop: true,
//     ease: 'inOutQuad',
//     autoplay: onScroll({
//       container: '.scroll-container'
//     })
//   });


const mediaQuery = window.matchMedia('(max-width: 500px)');

function handleAnimation() {
  if (mediaQuery.matches) {
    // Mobile animation
    animate('.square1', {
        x: '23rem',
        rotate: '1turn',
        duration: 2000,
        alternate: true,
        loop: true,
        ease: 'inOutQuad',
        autoplay: onScroll({
          container: '.scroll-container'
        })
      });
      animate('.square2', {
        x: '-23rem',
        rotate: '1turn',
        duration: 2000,
        alternate: true,
        loop: true,
        ease: 'inOutQuad',
        autoplay: onScroll({
          container: '.scroll-container'
        })
      });
  } else {
    // Desktop animation
     animate('.square2', {
            x: '-35rem',
            rotate: '1turn',
            duration: 2000,
            alternate: true,
            loop: true,
            ease: 'inOutQuad',
            autoplay: onScroll({
              container: '.scroll-container'
            })
          });

          animate('.square1', {
            x: '35rem',
            rotate: '1turn',
            duration: 2000,
            alternate: true,
            loop: true,
            ease: 'inOutQuad',
            autoplay: onScroll({
              container: '.scroll-container'
            })
          });
  }
}

// Initial setup
handleAnimation();

// Update on resize
mediaQuery.addListener(handleAnimation);



  const squares = utils.$('.icons');
const [ $none, $replace, $blend ] = squares;

// Animate each square with a different composition mode
squares.forEach($square => {
  // 'none', 'replace', 'blend'
  const mode = $square.classList[1];
  animate($square, {
    scale: [.5, 1],
    alternate: true,
    loop: true,
    duration: 450,
    composition: mode,
  });
});

animate('.si', {
    // Property keyframes
    y: [
      { to: '-2rem', ease: 'outExpo', duration: 600 },
      { to: 0, ease: 'outBounce', duration: 1800, delay: 100 }
    ],
    // Property specific parameters
    rotate: {
      from: '-1turn',
      delay: 0
    },
    delay: (_, i) => i * 50, // Function based value
    ease: 'inOutCirc',
    loopDelay: 2000,
    loop: true
  });



function downloadFile() {
    // Create a temporary element
    var link = document.createElement('a');
    link.href = './image/ifedayo Akinbohun  Resume.docx';  // Replace with the actual file URL
    link.download = 'Akinbohun ifedayo.pdf';   // Replace with the desired file name

    // Append the element to the body
    document.body.appendChild(link);

    // Trigger the click event on the element
    link.click();

    // Remove the element from the body
    document.body.removeChild(link);
  }

  document.getElementById('btn').addEventListener('click', () => downloadFile())


  document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const projectCards = document.querySelectorAll('.project-card');
    const chevronIcon = showMoreBtn.querySelector('i'); // Get the icon element
    let isExpanded = false;
    console.log(chevronIcon)
  
    showMoreBtn.addEventListener('click', function() {
      isExpanded = !isExpanded;
      
      // Toggle project visibility (skip first 4)
      projectCards.forEach((card, index) => {
        if (index >= 3) {
          card.classList.toggle('hiddens');
        }
      });
      
      // Update button text
      showMoreBtn.textContent = isExpanded ? 'View Less Projects'  : 'View More Projects';
      
      // Toggle chevron direction and animation
      if (isExpanded) {
        chevronIcon.classList.remove('fa-chevron-down', 'animate-bounce-slow');
        chevronIcon.classList.add('fa-chevron-up', 'animate-pulse');
      } else {
        chevronIcon.classList.remove('fa-chevron-up', 'animate-pulse');
        chevronIcon.classList.add('fa-chevron-down', 'animate-bounce-slow');
      }
    });
  });


// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
        
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('block');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const themeToggle2 = document.getElementById('theme-toggle2');
const darkModeIcon = document.getElementById('dark-mode-icon');
const darkModeIcon2 = document.getElementById('dark-mode-icon2');
const html = document.documentElement;

// Check for saved theme preference or respect OS setting
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    html.classList.add('dark');
    darkModeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkModeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        darkModeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

themeToggle2.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkModeIcon2.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        darkModeIcon2.classList.replace('fa-sun', 'fa-moon');
    }
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Initialize
revealOnScroll();

// Active nav link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Preloader animation
// window.addEventListener('load', () => {
//     const preloader = document.querySelector('.preloader');
//     setTimeout(() => {
//         preloader.style.opacity = '0';
//         preloader.style.visibility = 'hidden';
//     }, 500);
// });

// Animate skill bars
const animateSkillBars = () => {
    const skillProgress = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('data-width');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    skillProgress.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        bar.setAttribute('data-width', width);
        observer.observe(bar);
    });
};

animateSkillBars();
