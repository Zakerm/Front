const btn = document.querySelector('button');
const menu = document.querySelector('ul');

btn.addEventListener('click', () =>{
    if(btn.textContent === 'menu'){
        setMenu('open', 'close');
    }else{
        setMenu('close', 'menu');
    }

});

function setMenu(menuAction, btnAction){
    menu.style.animationName = menuAction;
    btn.textContent = btnAction;
}