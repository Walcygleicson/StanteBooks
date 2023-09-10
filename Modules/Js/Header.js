import { SVG, getWindowMedias, USER, AUX} from "./aux_tools.js";

// PROPRIEDADES DE OBJETOS
// lista de todo o conteúdo de texto padrão dos elementos HTML
const TEXT = {
    title: ['Stante', 'Books'],
    navCategorias: 'Categorias',
    navEscrever: 'Escrever',
    navEstante: 'Estante',
    navExplorar: 'Explorar',
    placeholder: 'O que deseja ler hoje ?',
    mesgBox: 'Mensagens',
    trocarUser: 'Trocar Usuário',
    sendFeedback: 'Enviar Feedback',
    config: 'Configurações',
    help_suport: 'Ajuda e Suporte',
    sair: 'Sair'
        
}


// Contem links de páginas
const LINKS = {
    Escrever: "https://youtube.com",
    Estante: "https://youtube.com",
    Explorar: "#",
    ToCategoryPage: "youtube.com",
};

// Lista de caminhos de arquivos
const PATH = {
    default_profile_icon: 'Assets/Images/user.svg',
    teste: 'Assets/Images/274308964_115295657744251_6457623182383817067_n.jpg'
}

// Lista de categorias
const CATEGORIES = [
    'Fantasia', 'Suspense', 'Terror', 'Ficção Científica', 'Drama', 'Mistério', 'Aventura',
    'Terror Psicológico', 'Thriller', 'Ação', 'Horror Cósmico', 'Romance',
    'Comédia', 'Não Ficção', 'Fanfics', 'Poesia', 'Hot', 'Policial'
]



let toggleUserMenuButton = false;


//--------------------------------------------------------------------------------------------------------------------------------------------
// FUNÇÕES
//

// ELEMENTO DO HEADER
/**
 * @description Cria um *header* de site.
 * @param {Element} capsule O elemento HTML pai que servirá de cápsula para receber o *header*
 */
function Header(capsule) {

    // Cria um elemento que irá envelopar todo o restante dos elementos HTML
    const enveloper = document.createElement('div')
    enveloper.setAttribute('id', 'header-elements-enveloper')
   
    let stringElements = `
    <div class="title-logo-container">
        <img class="site-logo" src="#" alt="logo">
        <h1 class="site-title">
            <span>${TEXT.title[0]}</span>
            <span>${TEXT.title[1]}</span>
        </h1>
    </div>

        <!-- MODO MOBILE - BOTÃO DO MENU DE NAVEGAÇÃO -->
        <button class="hamburger-menu-button">${SVG.hamburguer_menu()}</button>

        <!--NAV-->
        <nav class="nav-container">
            <!-- Modo mobile - Capsula para inserir logo do usário e/ou botões de login e registro-->
            <div class="user-infos-capsule"></div>

            <!--Abre um menu dropdawn com hover-->
            <button class="categories-button categories-button-hover navigation-itens">
                <!-- Capsula para inserir o menu dropdawn das categorias-->
                <div class="menu-dropdawn-capsule"></div>

                <div class="icon-container">${SVG.categories('class', 'nav-menu-icon')}</div>
                <span class="inner-text">${TEXT.navCategorias}</span>
                ${SVG.chevron('class', 'svg-icon-chevron')}
            </button>

            <a class="navigation-itens" href=${LINKS.Escrever}>
                ${SVG.write_books('class', 'nav-menu-icon')} <span class="inner-text">${TEXT.navEscrever}</span>
            </a>

            <a class="navigation-itens" href=${LINKS.Estante}>
                ${SVG.library('class', 'nav-menu-icon')} <span class="inner-text">${TEXT.navEstante}</span>
            </a>

            <a class="navigation-itens" href=${LINKS.Explorar}>
                ${SVG.explore('class', 'nav-menu-icon')}  <span class="inner-text">${TEXT.navExplorar}</span>
            </a>

            <!-- Modo Mobile - Capsula para inserir as configurações gerais do perfil, se o usuário estiver logado-->
            <div class="profile-settings-capsule"></div>
        </nav>

        <!--SEARCHER-->
        <div class="search-books-container">
            <input type="text" placeholder='${TEXT.placeholder}' name='search-books'>
            <button class="search-button">
              ${SVG.lupa()}
            </button>
        </div>

        <!-- PERFIL DO USUÁRIO -->
        <!-- Os estados e style de user logado e user não logado são controlado pelo id-->
        <div class="user-menu-container" id="user-log-off">

            <button class="open-user-menu-button">
                <img class="user-picture-profile" src="${PATH.teste}" alt="Foto de Perfil do Usuário">
                <div class="hint-box hint-box-fade">Perfil</div>
            </button>

            <div class="login-register-buttons-container">
                <button class="login-button">Login</button>
                <button class="register-button">Inscrever-se</button>
            </div>

            <!-- Capsula para inserir o menu drop dawn do perfil do usuário-->
            <div class="user-menu-capsule"></div>
            
        </div>
    `;

    // Insere os elementos criados em suas respectivas cápsulas
    capsule.appendChild(enveloper);
    enveloper.innerHTML = stringElements
    insert_categoriesMenu(capsule, '.menu-dropdawn-capsule')
    insert_userMenu(capsule, '.user-menu-capsule')

    //EVENTOS DE LOAD E RESIZE DA JANELA
    window.addEventListener('resize', actualizeScreen)
    window.addEventListener('load', actualizeScreen)

    // ANIMAÇÃO de EVENTOS
    // Mantem a cor de fundo do ícone de lupa quando o input estiver com foco
    document.querySelector('.search-books-container > input').addEventListener('focus', (event) => {
        const elem = event.target.nextElementSibling.children[0]
        elem.style.fill = 'orangered'
    })
    document.querySelector(".search-books-container > input").addEventListener("focusout", (event) => {
        const elem = event.target.nextElementSibling.children[0];
        elem.style.fill = "white";
        elem.style.transitionDuration = '.5s'
    });

    // Evento de click no botão do perfil do usuário
    capsule.querySelector('.open-user-menu-button').addEventListener('click', () => {
        const userMenuCapsule = capsule.querySelector(".user-menu-capsule")
        capsule.querySelector('.hint-box').classList.toggle('hint-box-fade')

        if (!userMenuCapsule.checkVisibility()) {
            userMenuCapsule.style.display = 'block'
            
        } else {
            userMenuCapsule.style.display = "none";
        }

        // No modo tablet, fecha a aba de categorias, se estiver aberta, quando o botão de perfil for clicado
        if (capsule.querySelector('.menu-dropdawn-capsule').classList.contains('show-menu-click-mode')) {
            capsule.querySelector('.menu-dropdawn-capsule').classList.remove('show-menu-click-mode')
            capsule.querySelector(".menu-dropdawn-capsule").classList.add("hide-menu-click-mode");
            capsule.querySelector(".categories-button > .icon-container").innerHTML = SVG.more_categories('class', 'nav-menu-icon');
        }
        
    })

    // Evento de click no botão de categorias
    capsule.querySelector('.categories-button').addEventListener('click', onClickCategoriesButton)

    // Evento de click no menu hamburger para midias mobile
    const hamburgerButton = capsule.querySelector('.hamburger-menu-button')
    const navBar = capsule.querySelector('.nav-container')
    hamburgerButton.addEventListener('click', () => {
        const loginRegisterContainer = document.querySelector('.user-menu-container')

        // Esconde a aba de login/ registro ao abrir a barra de navegação lateral se o usuário não estiver logado
        if (!USER.login()) {
            const x = loginRegisterContainer.classList.contains('log-container-slide-dawn')
            const y = navBar.classList.contains('mobile-nav-closed')
            if (x && y) {

                AUX.replaceClassName(loginRegisterContainer, 'log-container-slide-dawn', 'log-container-slide-up')

            } else {
                AUX.replaceClassName(loginRegisterContainer, 'log-container-slide-up','log-container-slide-dawn')
            }
        }

        navBar.classList.toggle('mobile-nav-closed')
        navBar.classList.toggle('mobile-nav-opened')

        if (navBar.classList.contains('mobile-nav-closed')) {
            hamburgerButton.innerHTML = SVG.hamburguer_menu()
        } else if (navBar.classList.contains('mobile-nav-opened')) {
            hamburgerButton.innerHTML = SVG.close_all()
        }
    })

    // Evento de Scroll
    window.addEventListener('scroll', (evt) => {
        const loginRegisterContainer = document.querySelector('.user-menu-container')
        const scrollPosition = evt.currentTarget.scrollY
        if (navBar.classList.contains('mobile-nav-closed')) {
            if (scrollPosition > 5) {
                AUX.replaceClassName(loginRegisterContainer, 'log-container-slide-dawn','log-container-slide-up')
                console.log('esconder')
            } else {
                AUX.replaceClassName(loginRegisterContainer, 'log-container-slide-up', 'log-container-slide-dawn')
                console.log('mostrar')
            }
        }
        
    })
    
}


//--------------------------------------------------------------------------------------------------------------------------------
// MENU DROP DAWN DA CATEGORIAS
function insert_categoriesMenu(rootCapsule, innerCapsuleQuery) {
    // rootCapsule recebe o elemento capsula pai que envolve toda a Header
    // innerCpasuleQuery recece uma string contendo o query selector do elemento desejado que esteja dentro do rootCapsule
    const capsule = rootCapsule.querySelector(innerCapsuleQuery)
    // Cria um elemento que serve de envelope para os elemntos filhos
    const enveloper = document.createElement('div')
    enveloper.setAttribute('id', 'category-dropdawn-elements-enveloper')
    
    
    // Arvore de elementos strings
    const stringElements = `
        ${SVG.solid_triangle("class", "svg-icon-solid-triangle")}

        <ul class="category-list-container">
        </ul>
    `;

    // Capsula recebe o enveloper e este recebe o conteúdo de stringElements. Assim:
    // div.enveloper >> stringElements
    capsule.appendChild(enveloper)
    enveloper.innerHTML = stringElements
    

    // Percorre a lista de categorias
    for (let i=0; i < CATEGORIES.length; i++) {
        //console.log(CATEGORIES[i])

        // ID individual baseado no seu conteudo de texto tratado
        const id = CATEGORIES[i].replace(' ', '-').replace(/ã/g, 'a').replace(/í/g, 'i').replace(/é/g, 'e').replace(/ç/g, 'c').replace(/ó/g, 'o').toLowerCase()
    
        // A cada item na lista, cria um elemento <li> e preenche com um elemento <a>
        const elem_li = document.createElement('li')
        const elem_a = `<a id="${id}" href=${LINKS.ToCategoryPage}><div class="category-name">${CATEGORIES[i]}</div></a>`

        // Cada elemento <li> criado recebe o conteudo de elem_a, e o elemento .category-list-container recebe cada elemento <li>
        // div.enveloper >> stringElements >> ul.category-list-container >>... elem_li >> elem_a...
        elem_li.innerHTML = elem_a
        enveloper.querySelector('.category-list-container').appendChild(elem_li)
        
    }

}

//----------------------------------------------------------------------------------------------------------
// MENU RÁPIDO DO PERFIL DO USUÁRIO E BOTÕES DE LOGIN E REGISTRO

function insert_userMenu(rootCapsule, innerCapsuleQuery) {
    // Recebe os elementos envelopados
    const capsule = rootCapsule.querySelector(innerCapsuleQuery)
    // Cria o elemento pai que envelopa todos os outros elementos
    const enveloper = document.createElement('div')
    enveloper.setAttribute('id', 'user-menu-elements-enveloper')
    capsule.appendChild(enveloper)
    // Arvore de elementos
    const stringElements = `
        <div class="user-profile-settings">
        ${SVG.solid_triangle()}
        
            <div class="user-profile-infos">
                <a href="#" class="user-page-link">
                    <div>
                        <img class="user-picture-profile" src="${PATH.teste}" alt="Foto de Perfil do Usuário">

                        <span class="user-profile-name">Walcygleicson Mesquita de Oliveira</span>
                    </div> 
                </a>
                <span class="user-nick-name">@user_nick</span>
                
                <div class="profile-generic-settings">
                    <a class="message-box-page-link" href="#"><span>Caixa de Entrada</span></a>
                    <button class="change-user-button">Trocar Usuário</button>
                </div>
            </div>

            <div class="profile-settings-menu">
                <a class="feedback-page-link" href="#"><span> Enviar Feedback </span></a>
                <a href="#" class="settings-page-link"><span> Configurações </span></a>
                <a href="#" class="help-suport-page-link"><span> Ajuda e Suporte </span></a>
                <button class="log-off-button">Sair</button>
            </div>
            
        </div>

    `;

    enveloper.innerHTML = stringElements

}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ----- FUNÇÕES DE EVENTOS -----//



// Função de eventos de Resize e/ou Load da janela
function actualizeScreen() {
    const navContainer = document.querySelector('.nav-container')
    const categoriesButton = document.querySelector('.categories-button')
    const menuDropdawnCapsule = document.querySelector('.menu-dropdawn-capsule')
    const nav_userInfosCapsule = document.querySelector('.nav-container > .user-infos-capsule')
    const nav_profileSettCapsule = document.querySelector('.nav-container > .profile-settings-capsule')
    const loginRegisterButtons = document.querySelector('.user-menu-container > .login-register-buttons-container')

    //DESKTOPS
     if (getWindowMedias('desktop')) {
        categoriesButton.classList.add("categories-button-hover");
    } else {
        categoriesButton.classList.remove("categories-button-hover");
    }

    //TABLETS
    if (getWindowMedias('tablet')) {
        categoriesButton.querySelector('.icon-container').innerHTML = SVG.more_categories('class', 'nav-menu-icon')
        menuDropdawnCapsule.classList.add('hide-menu-click-mode')
        menuDropdawnCapsule.classList.remove('show-menu-click-mode')
        categoriesButton.classList.add('categories-button-click')

    } else {
        menuDropdawnCapsule.classList.remove('show-menu-click-mode')
        menuDropdawnCapsule.classList.remove("hide-menu-click-mode");
        categoriesButton.classList.remove('categories-button-click')
    }
    
    //MOBILES
    if (getWindowMedias('mobile')) {
        document.querySelector('.hamburger-menu-button').innerHTML = SVG.hamburguer_menu()
        navContainer.classList.add('mobile-nav-closed')
        navContainer.classList.remove('mobile-nav-opened')
        loginRegisterButtons.parentNode.classList.add('log-container-slide-dawn')

        if (USER.login()) {
            nav_profileSettCapsule.classList.add('user-on')
            nav_userInfosCapsule.classList.add('user-on')
        } else {
            nav_profileSettCapsule.classList.add('user-off')
            nav_userInfosCapsule.classList.add('user-off')
        }
        

        // Adiciona um clone dos elementos de usuário às cápsulas, se elas estiverem vazias
        if (!nav_userInfosCapsule.hasChildNodes()) {
            const userPic = document.querySelector('.user-profile-infos > a.user-page-link')
            const profileSett = document.querySelector('.user-profile-infos > .profile-generic-settings')
            nav_userInfosCapsule.appendChild(userPic.cloneNode(true))
            nav_userInfosCapsule.appendChild(loginRegisterButtons.cloneNode(true))

            
            const clone_profileSett = profileSett.cloneNode(true)
            const svgList = [SVG.envelope, SVG.two_users]
            const textList = [TEXT.mesgBox, TEXT.trocarUser]

            // Percorre os elementos e insere um classe, texto e icone svg
            for (let i=0; i < clone_profileSett.children.length; i++) {
                clone_profileSett.children[i].classList.add('navigation-itens')
                clone_profileSett.children[i].innerHTML = `
                    ${svgList[i]('class', 'nav-menu-icon')}
                    <span class="inner-text"> ${textList[i]} </span>`
            }
            nav_userInfosCapsule.appendChild(clone_profileSett)
        }

        if (!nav_profileSettCapsule.hasChildNodes()) {
            const profileSettMenu = document.querySelector('.user-profile-settings > .profile-settings-menu')
            const clone_profileSettMenu = profileSettMenu.cloneNode(true)
            const svgList = [SVG.comment_baloon, SVG.settings, SVG.help]
            const textList = [TEXT.sendFeedback, TEXT.config, TEXT.help_suport]

            for (let i=0; i < clone_profileSettMenu.children.length - 1; i++) {
                clone_profileSettMenu.children[i].classList.add('navigation-itens')
                clone_profileSettMenu.children[i].innerHTML = `
                    ${svgList[i]('class', 'nav-menu-icon')}
                    <span class="inner-text"> ${textList[i]} </span>`
            }
            nav_profileSettCapsule.appendChild(clone_profileSettMenu)
         
        }

 
    } else {
        navContainer.classList.remove('mobile-nav-closed')
        navContainer.classList.remove('mobile-nav-opened')
    }
    

}

// Função de eventos de click no botão de categorias
function onClickCategoriesButton() {
    const userMenuCapsule = document.querySelector(".user-menu-capsule")
    const menuDropdawnCapsule = document.querySelector(".menu-dropdawn-capsule");
    const categoriesButton = document.querySelector('.categories-button')

    if (getWindowMedias('tablet')) {
        if (categoriesButton.classList.contains("categories-button-click")) {
            menuDropdawnCapsule.classList.toggle("show-menu-click-mode");
            menuDropdawnCapsule.classList.toggle("hide-menu-click-mode");

            // Esconde a aba do perfil do usuário, se estiver aberta, ao clicar no botão das categorias
            if (userMenuCapsule.checkVisibility()) {
                toggleUserMenuButton = false;
                userMenuCapsule.style.display = "none";
            }

            // Faz a troca do ícone de categorias para + e - a cada click
            if (menuDropdawnCapsule.classList.contains("show-menu-click-mode")) {
                categoriesButton.querySelector(".icon-container").innerHTML = SVG.less_categories("class", "nav-menu-icon");
                categoriesButton.querySelector(".icon-container > svg").style.fill = "var(--cor-laranjado)";

            } else if (menuDropdawnCapsule.classList.contains("hide-menu-click-mode")) {
                categoriesButton.querySelector(".icon-container").innerHTML = SVG.more_categories("class", "nav-menu-icon");
            }
        }
    }
}


// Exportação dos módulos
export default Header

