// INCORPORA OS STYLES.CSS DOS MÓDULOS AO ARQUIVO HTML AUTOMÁTICAMENTE
// SELECIONA QUAIS ESTILOS SERÃO UTILIZADOS COM BASE NO TÍTULO DA PAGINA

const STYLES = ['../Modules/Css/Header.css', '../Modules/Css/Header_widescreen.css']
const documentHead = document.querySelector("head");
const documentTitle = document.querySelector('title')

STYLES.forEach((path, index) => {
    let matchIndex
    let styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");

    // Selecionando quais estilos incorporar
    switch (documentTitle.id) {
        case 'index':
            matchIndex = [0, 1]
            break
    }

    if (index == matchIndex[index]) {
        styleLink.setAttribute("href", path)
        documentHead.appendChild(styleLink)
 }
})
