


for(let i=0;i<6;i++){
    
    document.getElementById('about').children[0].children[0].children[i].children[0].onclick = function(e){
        document.querySelectorAll('.toggle-btn').forEach(item=>{
            item.classList.remove('active');
            item.classList.remove('btn-active');
        })
        e.target.classList.add('active');
        for(let i=0;i<6;i++){
            document.getElementById('tab-wrapper').children[i].classList.remove('active')
        }
        document.getElementById('tab-wrapper').children[i].classList.add('active');
    }

}




console.log(document.documentElement)





