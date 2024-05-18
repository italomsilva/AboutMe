const MenuBurguer = document.querySelector('.menu-burguer');
const ListaMenu = document.querySelector('.menu-lista');

MenuBurguer.addEventListener('click', () =>{
    MenuBurguer.classList.toggle('ativo');
    ListaMenu.classList.toggle('ativo');
})
