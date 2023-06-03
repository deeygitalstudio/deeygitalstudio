const btnEl = document.getElementById('btn')
const bodyEl = document.getElementById('body')
const inputEl = document.getElementById('input')
const ListEl = document.getElementById('list-cont')
const lightEl = document.querySelector('.light')
const bosEl = document.querySelector('.bos')
const darkEl = document.querySelector('.darkt')
const checkEl = document.querySelector('.darks')
const clearCEl = document.querySelector('.clearC')
const activeBtn = document.querySelector('.Active')
const completeBtn = document.querySelector('.complete')

function addTask(){
    if(inputEl.value === ''){
        alert('Please write something')
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputEl.value;
        ListEl.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputEl.value = '';
    saveData();
};

ListEl.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
     
        saveData()
    }
 

    
}, false);

checkEl.addEventListener('click', () => {
    let tasks = ListEl.getElementsByTagName('li');
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.classList.contains('checked')) {
            task.style.display = 'none';
            saveData()
        } else {
            task.style.display = 'block';
            saveData()
        }
    }
});

completeBtn.addEventListener('click', () => {
    let tasks = ListEl.getElementsByTagName('li');
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.classList.contains('checked')) {
            task.style.display = 'block';
            saveData()
        } else {
            task.style.display = 'none';
            saveData()
        }
    }
});
 
activeBtn.addEventListener('click', () => {
    activeBtn.classList.add('active');
    let tasks = ListEl.getElementsByTagName('li');
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].style.display = 'block';
      saveData()
    }
  });

clearCEl.addEventListener('click', () => {
    let checkedItems = ListEl.getElementsByClassName('checked');
    for (let i = checkedItems.length - 1; i >= 0; i--) {
        checkedItems[i].remove();
        saveData()
    }
    saveData();
});




darkEl.addEventListener('click', () => {
    bodyEl.style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
    ListEl.style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
    darkEl.style.display = 'none';
    lightEl.style.display = 'block';
    ListEl.style.backgroundColor = 'hsl(235, 24%, 19%)';
    inputEl.style.color = '#fff';
    bodyEl.style.backgroundColor = ' hsl(235, 21%, 11%)';
    bodyEl.style.color = '#fff';
    checkEl.style.color = '#fff'
    
});

lightEl.addEventListener('click', () => {
    bodyEl.style.backgroundImage = "url('./images/bg-desktop-light.jpg')";
    ListEl.style.backgroundImage = "url('./images/bg-desktop-light.jpg')";
    ListEl.style.backgroundPosition = 'bottom'
    darkEl.style.display = 'block';
    lightEl.style.display = 'none';
    ListEl.style.backgroundColor = '#fafafa';
    inputEl.style.backgroundColor = '#fafafa';
    bosEl.style.backgroundColor = '#fafafa';
    bodyEl.style.backgroundColor = '#fff'
    checkEl.style.color = '#212121'
    
});

// // Function to toggle the dark mode
// function toggleDarkMode() {
//     bodyEl.classList.toggle('dark-mode');
   
// }

// // Function to save the dark mode preference to localStorage
// function saveDarkModePreference(isDarkMode) {
//     localStorage.setItem('darkModePreference', isDarkMode);
// }


// function loadDarkModePreference() {
//     const darkModePreference = localStorage.getItem('darkModePreference');
//     if (darkModePreference === 'true') {
//         bodyEl.classList.add('dark-mode');
//         darkEl.style.display = 'none';
//         lightEl.style.display = 'block';
//     }
// }


// darkEl.addEventListener('click', () => {
//     toggleDarkMode();
//     saveDarkModePreference(true);
//     darkEl.style.display = 'none';
//     lightEl.style.display = 'block';
// });

// lightEl.addEventListener('click', () => {
//     toggleDarkMode();
//     saveDarkModePreference(false);
//     darkEl.style.display = 'block';
//     lightEl.style.display = 'none';
// });




// function saveData(){
//     localStorage.setItem('data', ListEl.innerHTML);
// }

// function showList(){
//     ListEl.innerHTML = localStorage.getItem('data')
// }
// loadDarkModePreference();

showList();







btnEl.addEventListener('click', addTask)
