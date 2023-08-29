
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
    }
};

// Contem links de páginas
const LINKS = {
    Escrever: '#',
    Estante: '#',
    Explorar: '#',
    ToCategoryPage: '###'

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
        <nav class="nav-container">
            <!--Abrirá um menu dropdawn ao passar o cursor sobre este button-->
            <button class="category-button-hover">
                <!-- Espaço apara inserir o menu drop dawn das categorias-->
                <div class="menu-dropdawn-capsule"></div>
                <span>${TEXT.navCategorias}</span>
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
        capsule.querySelector('.hint-box').classList.toggle('hint-box-fade')
        if (!toggleUserMenuButton) {
            capsule.querySelector('.user-menu-capsule').style.display = 'block'
            
        } else {
            capsule.querySelector(".user-menu-capsule").style.display = "none";
        }

        toggleUserMenuButton = !toggleUserMenuButton
        
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


// Exportação dos módulos
export default Header

