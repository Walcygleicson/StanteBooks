// LISTA DE ELEMENTOS SVG
/**
 * @description Objeto literal contendo propriedades que criam elementos de ícones editáveis svg/xml.
 * * Cada propriedade interno recebe 2 parametros opicionais:
 * @param {string} s - Define uma class ou id para o elemento criado.
 * @param {string} n - Define um nome de class ou id para o elemento criado.
 * @obs Só se pode definar uma vez uma class ou id a cada elemento criado. Se nenhum argumento for passado, o elemento não receberá class ou id.
 */
const SVG = {
    lupa: (s = String(), n = String()) => {
        return `<svg${attr(n, s)}xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z" />
            </svg>  `;
    },
    chevron: (s = String(), n = String()) => {
        return `<svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z" />
            </svg>
        `
    },

    solid_triangle: (s = String(), n = String()) => {
        return `<svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                <path d="M480-360 280-559h400L480-360Z"/>
            </svg>`;
    },

    more_categories: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
            <svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                <path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"/><path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"/>
                <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/>
                <path d="M14,7h3v3a1,1,0,0,0,2,0V7h3a1,1,0,0,0,0-2H19V2a1,1,0,0,0-2,0V5H14a1,1,0,0,0,0,2Z"/>
            </svg>`;
    },

    write_books: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
            <svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/>
                <path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/>
            </svg>`;
    },

    library: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
            <svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                <path d="M23.786,19.492L16.713,1.836c-.624-1.529-2.376-2.269-3.911-1.645l-.925,.378c-.249,.102-.472,.244-.68,.402-.548-.594-1.326-.972-2.196-.972H3C1.346,0,0,1.346,0,3V21c0,1.654,1.346,3,3,3h6c1.654,0,3-1.346,3-3V8.895l5.304,13.242c.625,1.543,2.417,2.26,3.909,1.641l.926-.378c1.505-.574,2.286-2.434,1.647-3.907ZM13.574,7.446l2.778-1.132,4.171,10.412-2.778,1.132L13.574,7.446Zm-.942-5.025l.925-.378c.496-.206,1.097,.031,1.302,.543l.75,1.871-2.777,1.132-.747-1.866c-.208-.51,.038-1.095,.549-1.303ZM2,7h3v10H2V7Zm5,0h3v10h-3V7Zm3-4v2h-3V2h2c.551,0,1,.448,1,1ZM3,2h2v3H2V3c0-.552,.449-1,1-1Zm-1,19v-2h3v3H3c-.551,0-1-.448-1-1Zm7,1h-2v-3h3v2c0,.552-.449,1-1,1Zm12.929-.991c-.104,.247-.297,.438-.544,.539h0l-.926,.378c-.511,.206-1.095-.037-1.3-.54l-.669-1.671,2.778-1.132,.665,1.661c.102,.247,.101,.52-.003,.766Z"/>
            </svg>`;
    },

    explore: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
            <svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                <path d="M12,0A12.013,12.013,0,0,0,0,12c-.126,9.573,11.159,15.429,18.9,9.817a1,1,0,1,0-1.152-1.634C11.3,24.856,1.9,19.978,2,12,2.549-1.266,21.453-1.263,22,12v2a2,2,0,0,1-4,0V12C17.748,4.071,6.251,4.072,6,12a6.017,6.017,0,0,0,10.52,3.933A4,4,0,0,0,24,14V12A12.013,12.013,0,0,0,12,0Zm0,16a4,4,0,0,1,0-8A4,4,0,0,1,12,16Z"/>
            </svg>`;
    },

    less_categories: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
            <svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"/>
                <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"/>
                <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/>
                <path d="M14,7h8a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2Z"/>
            </svg>`;
    },

    hamburguer_menu: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
            <svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512">
                <g>
                    <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
                    <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z"/>
                    <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z"/>
                </g>
            </svg>`;
    },

    categories: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
            <svg${attr(s, n)}xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"/>
                <path d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/>
                <path d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"/>
                <path d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"/>
            </svg>`;  
    },

    close_all: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
            <svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" style="enable-background:new 0 0 512.021 512.021;" xml:space="preserve" width="512" height="512">
                <g>
                    <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
                </g>
            </svg>`;
    },

    envelope: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
            <svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"/>
            </svg>`
    },

    two_users: (s = String(), n = String()) => {
        return `<svg${attr(s,n)}id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                <path d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm7.5 17v-.5a7.5 7.5 0 0 0 -15 0v.5a1 1 0 0 0 2 0v-.5a5.5 5.5 0 0 1 11 0v.5a1 1 0 0 0 2 0zm9-5a7 7 0 0 0 -11.667-5.217 1 1 0 1 0 1.334 1.49 5 5 0 0 1 8.333 3.727 1 1 0 0 0 2 0zm-6.5-9a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5z"/>
            </svg>`
    },

    comment_baloon: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
            <svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                <path d="M20,0H4A4,4,0,0,0,0,4V16a4,4,0,0,0,4,4H6.9l4.451,3.763a1,1,0,0,0,1.292,0L17.1,20H20a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,16a2,2,0,0,1-2,2H17.1a2,2,0,0,0-1.291.473L12,21.69,8.193,18.473h0A2,2,0,0,0,6.9,18H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20a2,2,0,0,1,2,2Z"/>
                <path d="M7,7h5a1,1,0,0,0,0-2H7A1,1,0,0,0,7,7Z"/>
                <path d="M17,9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"/>
                <path d="M17,13H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"/>
            </svg>`
    },

    settings: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
            <svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>
                <path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"/>
            </svg>`
    },
    help: (s = String(), n = String()) => {
        return `<?xml version="1.0" encoding="UTF-8"?>
            <svg${attr(s,n)}xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512">
                <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/>
                <path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z"/>
                <rect x="11" y="17" width="2" height="2" rx="1"/>
            </svg>`
    }
};

// Função auxiliar da const SVG. Cria um seletor id ou class para incorporar no script do svg. Se nenhum arg for declarado nenhum id ou class é criada
const attr = (selector, name) => {
    let selectorString = " ";
    if (selector != "" && name != "") {
        selectorString = ` ${selector}="${name}" `;
    }
    return selectorString
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FERRAMENTAS DE TELA E MÍDIAS

// Break points padrões de tela pra cada midia
/**
 * @description Objeto literal de propriedades contendo valores de Break Points da janela em pixels.
 * * Editável apenas na fonte
 */
const BREAK_POINTS = {
    desktop: 1024,
    tablet: 701,
    mobile: 700
}


 /**
* @description Obtém e analisa o tamanho da janela do usuário em pixels
* @param {string} vector - Recebe 7 argumentos **String** opicionais:
* *   *"media"* (Padrão) | *"desktop"* | *"tablet"* |*"width"* | *"height"* | *"size"*
* --------
*>* **"desktop"** | **"tablet"** | **"mobile"** > > Retorna **true** se o tipo de mídia da janela, determinada por BREAK_POINTS, for igual.
*>* **"media"** > > Retorna uma **string** contendo o tipo de mídia da janela, determinada por BREAK_POINTS.
*>* **"width"** | **"height"** > > Retorna um número **int** com a largura ou altura da janela em pixels.
*>* **"size"** > > Retorna um **array** de 2 vetores contendo a largura e altura da janela em pixels.
* * Se nenhum argumento for passado, o argumento padrão será 'desktop' e retornará um **boolean**.
*/
function getWindowMedias(vector='media') {
    const width = window.innerWidth
    const height = window.innerHeight
    let media = String()
    if (width >= BREAK_POINTS.desktop) {
        media = 'desktop'
    } else if (width <= BREAK_POINTS.desktop && width >= BREAK_POINTS.tablet) { 
        media = 'tablet'
    } else if (width <= BREAK_POINTS.mobile) {
        media = 'mobile'
    }
    
    const args = ['desktop', 'tablet', 'mobile', 'media', 'width', 'height', 'size']
    if (args.includes(vector)) {
        if (vector == media) {
            return true
        } else if (vector == 'width') {
            return width
        } else if (vector == 'height') {
            return height
        } else if (vector == 'size') {
            return[width, height]
        } else if (vector == 'media') {
            return media
        } else {
            return false
        }
    } else {
        console.error(`Erro de argumento! O argumento '${vector}' passado não se refere a nada. A função retorna undefined!`)
   }

}


let USER = {
    login: () => {
        const logCheck = document.querySelector('.header-capsule .user-menu-container')
        if (logCheck.id == 'user-log-on') {
            return true
        } else if (logCheck.id == 'user-log-off') {
            return false
        }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EXPORTS
export {SVG, BREAK_POINTS, getWindowMedias, USER}