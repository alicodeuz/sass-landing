document.onkeydown = function(e){
    if(e.code == 'Enter'){
        document.getElementById('img-modal').classList.add('show');
    } else if(e.code == 'Escape'){
        document.getElementById('img-modal').classList.remove('show');
    }
    // alert(e.code);
    
}


let list_of_columns = document.getElementById('tab-exhibition').children[0];




list_of_columns.children[0].onclick = function(){
}

let num = 0;

for(let i=0;i<list_of_columns.children.length;i++){
    list_of_columns.children[i].children[0].children[0].onclick = function(){
        // console.log(list_of_columns.children,i+1)
        switch(i+1){
            case 1:
                num = 11;
                break;
            case 2:
                num = 10;
                break;
            case 3:
                num = 8;
                break;
            case 4:
                num = 7;
                break;
            case 5:
                num = 6;
                break;
            case 6:
                num = 4;
                break;
        }
        document.querySelector('div.img-modal .modal-img').style.backgroundImage = `url(https://wp.quomodosoft.com/growth/wp-content/uploads/elementor/thumbs/post-${num}-oz7w353m5jlxgw3wdwoxy7lmjaq4uaq96w1gnunbmo.jpg)`;
        document.getElementById('img-modal').classList.add('show');
        document.getElementById('img-modal').onmousedown = function(e){
            e.target.classList.remove('show');
        }
        document.querySelector('div.img-modal .img-modal__header i.img-modal__header-shareToggle .dropdown-menu').children[3].href = `https://wp.quomodosoft.com/growth/wp-content/uploads/elementor/thumbs/post-${num}-oz7w353m5jlxgw3wdwoxy7lmjaq4uaq96w1gnunbmo.jpg`;
    }
}

document.querySelector('.img-modal__header .img-modal__header-closeToggle').onclick = function(){
    document.getElementById('img-modal').classList.remove('show');
    document.querySelector('div.img-modal .img-modal__header .img-modal__header-shareToggle').classList.remove('share-show');
    document.querySelector('div.img-modal .black-background').classList.remove('show-black-background');
}

document.querySelector('div.img-modal .black-background').onclick = function(e){
    e.target.classList.remove('show-black-background');
}

document.querySelector('div.img-modal .img-modal__header .img-modal__header-shareToggle').onclick = function(e){
    if(e.target.classList.contains('share-show')){
        e.target.classList.remove('share-show');
        document.querySelector('div.img-modal .black-background').classList.remove('show-black-background');
        document.querySelector('div.img-modal .img-modal__header').children[3].style.zIndex = '0';
        document.querySelector('div.img-modal .img-modal__header').children[2].style.zIndex = '0';
    } else{
        e.target.classList.add('share-show');
        document.querySelector('div.img-modal .black-background').classList.add('show-black-background');
        document.querySelector('div.img-modal .img-modal__header').children[2].style.zIndex = '1';
        document.querySelector('div.img-modal .img-modal__header').children[3].style.zIndex = '1';
    }
}
// setInterval(function(){
//     console.log(document.querySelector('div.img-modal .img-modal__header .img-modal__header-shareToggle').classList.contains('share-show'));
// },2000)

document.querySelector('div.img-modal .black-background').onclick = function(e){
    document.querySelector('div.img-modal .img-modal__header .img-modal__header-shareToggle').classList.remove('share-show');
    e.target.classList.remove('show-black-background');
}


document.querySelector('div.img-modal .modal-img').ondblclick = function(e){
    let width = e.target.offsetWidth;
    let height = e.target.offsetHeight;

    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    let bgPosY = mouseY / height * 100; 
    let bgPosX = mouseX / width * 100; 

    if(height / 2 > mouseY){
        bgPosY = mouseY / height * 50;    
    } else{
        bgPosY = mouseY / height * 150;    
    }
    
    if(width / 2 > mouseX){
        bgPosX = mouseX / width * 150;    
    } else{
        bgPosX = mouseX / width * 50;    
    }

    

    // console.log(bgPosX,bgPosY);

    if(e.target.classList.contains('transformScale')){
        e.target.classList.remove('transformScale');

    } else{
        e.target.classList.add('transformScale');
        e.target.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
    }
    
}




document.querySelector('.img-modal .img-modal__header').style.zIndex = '1';


document.querySelector('div.img-modal .img-modal__header .img-modal__header-plusToggle').onclick = function(){
    if(document.querySelector('div.img-modal .modal-img').classList.contains('transformScale')){
        document.querySelector('div.img-modal .modal-img').classList.remove('transformScale');
    } else{
        document.querySelector('.img-modal .img-modal__header').style.backgroundColor = 'rgba(0,0,0,0.4)';
        document.querySelector('div.img-modal .modal-img').classList.add('transformScale');
    }
}

document.querySelector('div.img-modal .img-modal__header .img-modal__header-fullScreenToggle').onclick = function(e){
    // document.documentElement.requestFullscreen();
    document.querySelector('div.img-modal').style.backgroundColor = 'rgba(0,0,0,1)';
    e.target.setAttribute('class','fas fa-compress');
    document.documentElement.requestFullscreen();
    document.querySelector('div.img-modal .img-modal__header .fa-compress').onclick = function(e){
        e.target.setAttribute('class','fas fa-expand');
        document.exitFullscreen();
        document.querySelector('div.img-modal').style.backgroundColor = 'rgba(0,0,0,0.8)';
    }
}


console.log(document.fullscreen);



// setInterval(function(){
//     document.onfullscreenchange = function(){
//         alert('change screen');
//     }
// })

// setInterval(function(){
//     console.log(document.fullscreenEnabled);
// },4000)
























































































