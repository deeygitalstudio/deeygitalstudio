AOS.init();



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


