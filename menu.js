let btnMenu = document.getElementById('btn-abrir-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')
let cont = document.getElementById('botao-contato')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

cont.addEventListener('click',() =>{
    event.preventDefault(); // Previne a navegação padrão, se necessário
    let section = document.getElementById('contato');
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    } else {
        console.error('Seção "contato" não encontrada.');
    }
}) 
    