
// PROPRIEDADES DE OBJETOS
// lista de todo o conteúdo de texto padrão dos elementos HTML
const TEXT = {
    title: ['Stante', 'Books'],
    navCategorias: 'Categorias',
    navEscrever: 'Escrever',
    navEstante: 'Estante',
    navExplorar: 'Explorar',
    placeholder: 'O que deseja ler hoje ?'
        
}

// Cria um seletor id ou class para incorporar no html
const attr= (selector, name) => {
    let selectorString = " ";
    if (selector != "" && name != "") {
        selectorString = ` ${selector}="${name}" `;
    }
    return selectorString
}

// Lista de elementos svg
const SVG = {
    lupa: (s = String(), n = String()) => {
        return `<svg${attr(n, s)}xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path
                    d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" />
            </svg>  `;
    },
    chevron: (s = String(), n = String()) => {
        
        return `<svg${attr(s, n)}xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z" />
            </svg>
        `
    },

    solid_triangle: (s = String(), n = String()) => {
    return `<svg${attr(s, n)}xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-360 280-559h400L480-360Z"/></svg>`;
    },

    more_categories: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"/><path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"/><path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/><path d="M14,7h3v3a1,1,0,0,0,2,0V7h3a1,1,0,0,0,0-2H19V2a1,1,0,0,0-2,0V5H14a1,1,0,0,0,0,2Z"/></svg>`;
    },

    write_books: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/><path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/></svg>`;
    },

    library: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.786,19.492L16.713,1.836c-.624-1.529-2.376-2.269-3.911-1.645l-.925,.378c-.249,.102-.472,.244-.68,.402-.548-.594-1.326-.972-2.196-.972H3C1.346,0,0,1.346,0,3V21c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3V8.895l5.304,13.242c.625,1.543,2.417,2.26,3.909,1.641l.926-.378c1.505-.574,2.286-2.434,1.647-3.907ZM13.574,7.446l2.778-1.132,4.171,10.412-2.778,1.132L13.574,7.446Zm-.942-5.025l.925-.378c.496-.206,1.097,.031,1.302,.543l.75,1.871-2.777,1.132-.747-1.866c-.208-.51,.038-1.095,.549-1.303ZM2,7h3v10H2V7Zm5,0h3v10h-3V7Zm3-4v2h-3V2h2c.551,0,1,.448,1,1ZM3,2h2v3H2V3c0-.552,.449-1,1-1Zm-1,19v-2h3v3H3c-.551,0-1-.448-1-1Zm7,1h-2v-3h3v2c0,.552-.449,1-1,1Zm12.929-.991c-.104,.247-.297,.438-.544,.539h0l-.926,.378c-.511,.206-1.095-.037-1.3-.54l-.669-1.671,2.778-1.132,.665,1.661c.102,.247,.101,.52-.003,.766Z"/></svg>
`;
    },

    explore: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0A12.013,12.013,0,0,0,0,12c-.126,9.573,11.159,15.429,18.9,9.817a1,1,0,1,0-1.152-1.634C11.3,24.856,1.9,19.978,2,12,2.549-1.266,21.453-1.263,22,12v2a2,2,0,0,1-4,0V12C17.748,4.071,6.251,4.072,6,12a6.017,6.017,0,0,0,10.52,3.933A4,4,0,0,0,24,14V12A12.013,12.013,0,0,0,12,0Zm0,16a4,4,0,0,1,0-8A4,4,0,0,1,12,16Z"/></svg>
`;
    },

    less_categories: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"/><path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"/><path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/><path d="M14,7h8a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2Z"/></svg>
`;
    },

    hamburguer_menu: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
<svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512">
<g>
	<path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
	<path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z"/>
	<path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z"/>
</g>
`;
    }
    
};

// Contem links de páginas
const LINKS = {
    Escrever: '',
    Estante: '#',
    Explorar: '#',
    ToCategoryPage: 'youtube.com'

}

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



//--------------------------------------------------------------------------------------------------------------------------------------------
// FUNÇÕES
//

// ELEMENTO DO HEADER
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

        <!-- MENU DE NAVEGAÇÃO -->
        <button class="hamburger-menu-button">${SVG.hamburguer_menu()}</button>
        <nav class="nav-container">
            <!--Abrirá um menu dropdawn ao passar o cursor sobre este button-->
            <button class="categories-button categories-button-hover">
                <!-- Espaço apara inserir o menu drop dawn das categorias-->
                <div class="menu-dropdawn-capsule menu-hover-mode"></div>
                <span class="inner-text">${TEXT.navCategorias}</span>
                ${SVG.chevron('class', 'svg-icon-chevron')}
            </button>

            <a href=${LINKS.Escrever}>${TEXT.navEscrever}</a>
            <a href=${LINKS.Estante}>${TEXT.navEstante}</a>
            <a href=${LINKS.Explorar}>${TEXT.navExplorar}</a>
        </nav>

        <div class="search-books-container">
            <input type="text" placeholder='${TEXT.placeholder}' name='search-books'>
            <button class="search-button">
              ${SVG.lupa()}
            </button>
        </div>

        <!-- PERFIL DO USUÁRIO -->
        <!-- Os estados e style de user logado e user não logado são controlado pelo id-->
        <div class="user-menu-container" id="user-log-on">

            <button class="open-user-menu-button">
                <img class="user-picture-profile" src="${PATH.teste}" alt="Foto de Perfil do Usuário">
                <div class="hint-box hint-box-fade">Perfil</div>
            </button>

            <div class="login-register-buttons-container">
                <button class="login-button">Login</button>
                <button class="register-button">Inscrever-se</button>
            </div>

            <!-- Espaço para inserir o menu drop dawn do perfil do usuário-->
            <div class="user-menu-capsule"></div>
            
        </div>
    `;

    // Insere os elementos criados em suas respectivas cápsulas
    capsule.appendChild(enveloper);
    enveloper.innerHTML = stringElements
    insert_categoriesMenu(capsule, '.menu-dropdawn-capsule')
    insert_userMenu(capsule, '.user-menu-capsule')

    //EVENTOS DA TELA
    window.addEventListener('resize', mediaSize)
    window.addEventListener('load', mediaSize)

    // ANIMAÇÃO de EVENTOS
    // Mantem a cor de fundo do ícone de lupa quando o input estiver com foco
    document.querySelector('.search-books-container>input').addEventListener('focus', (event) => {
        const elem = event.target.nextElementSibling.children[0]
        elem.style.fill = 'orangered'
    })
    document.querySelector(".search-books-container>input").addEventListener("focusout", (event) => {
            const elem = event.target.nextElementSibling.children[0];
        elem.style.fill = "white";
        elem.style.transitionDuration = '.5s'
    });

    // Evento de click no botão do perfil do usuário
    let toggleUserMenuButton = false
    capsule.querySelector('.open-user-menu-button').addEventListener('click', () => {
        const userMenuCapsule = capsule.querySelector(".user-menu-capsule")
        capsule.querySelector('.hint-box').classList.toggle('hint-box-fade')

        if (!toggleUserMenuButton) {
            userMenuCapsule.style.display = 'block'
            
        } else {
            userMenuCapsule.style.display = "none";
        }

        toggleUserMenuButton = !toggleUserMenuButton
        // Fecha a aba de categorias, se estiver aberta, quando o botão de perfil for clicado
        if (capsule.querySelector('.menu-dropdawn-capsule').classList.contains('show-menu-click-mode')) {
            capsule.querySelector('.menu-dropdawn-capsule').classList.remove('show-menu-click-mode')
            capsule.querySelector(".menu-dropdawn-capsule").classList.add("hide-menu-click-mode");
            capsule.querySelector(".categories-button > .inner-text").innerHTML = SVG.more_categories();
        }
        
    })

    // Evento de click no botão de categorias para mídias em tablets
    const categoriesButton = capsule.querySelector('.categories-button')
    categoriesButton.addEventListener('click', (evt) => {
        console.log(evt.target)
        
        if (categoriesButton.classList.contains('categories-button-click')) {
            const menuDropdawnCapsule = capsule.querySelector('.menu-dropdawn-capsule')
            menuDropdawnCapsule.classList.toggle('show-menu-click-mode')
            menuDropdawnCapsule.classList.toggle("hide-menu-click-mode");

            // Esconde a aba do perfil do usuário, se estiver aberta, ao clicar no botão das categorias
            if (document.querySelector('.user-menu-capsule').checkVisibility()) {
                toggleUserMenuButton = false
                document.querySelector('.user-menu-capsule').style.display = 'none'
            }
            

            if (menuDropdawnCapsule.classList.contains('show-menu-click-mode')) {
                capsule.querySelector(".categories-button > .inner-text").innerHTML = SVG.less_categories();
                capsule.querySelector('.inner-text > svg').style.fill = 'var(--cor-laranjado)'
            } else if (menuDropdawnCapsule.classList.contains('hide-menu-click-mode')) {
                capsule.querySelector(".categories-button > .inner-text").innerHTML = SVG.more_categories()
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


//----------------------------------------------------------------------------------------------------------------------------------

// WINDOW RESIZE EVENTS
function mediaSize(event) {
    const windowSize = {
        width: event.currentTarget.innerWidth,
        height: event.currentTarget.innerHeight
    }

    // Pegando todos os elemntos <a> da <nav>
    const navElements_A = document.querySelector('.nav-container')
    const catInnerTxt = document.querySelector('.categories-button > .inner-text')
    const categoriesButton = document.querySelector('.categories-button')
    const menuDropdawnCapsule = document.querySelector('.menu-dropdawn-capsule')

    if (windowSize.width <= 1024 && windowSize.width >= 700) {
        menuDropdawnCapsule.classList.add('hide-menu-click-mode')
        menuDropdawnCapsule.classList.remove('show-menu-click-mode')
        menuDropdawnCapsule.classList.remove('menu-hover-mode')

        catInnerTxt.innerHTML = SVG.more_categories()
        categoriesButton.classList.remove('categories-button-hover')
        categoriesButton.classList.add('categories-button-click')

        navElements_A.children[1].innerHTML = SVG.write_books()
        navElements_A.children[2].innerHTML = SVG.library()
        navElements_A.children[3].innerHTML = SVG.explore()

    } else if (windowSize.width >= 1024) {
        menuDropdawnCapsule.classList.remove('show-menu-click-mode')
        menuDropdawnCapsule.classList.remove("hide-menu-click-mode");
        menuDropdawnCapsule.classList.add('menu-hover-mode')
        catInnerTxt.innerHTML = TEXT.navCategorias
        categoriesButton.classList.add("categories-button-hover");
        categoriesButton.classList.remove("categories-button-click");
        navElements_A.children[1].innerHTML = TEXT.navEscrever;
        navElements_A.children[2].innerHTML = TEXT.navEstante;
        navElements_A.children[3].innerHTML = TEXT.navExplorar;
    }
    

}


// Exportação dos módulos
export default Header

