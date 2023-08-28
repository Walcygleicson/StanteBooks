const getDocumentHead = document.querySelector("head");
console.log(getDocumentHead);
const style_general = document.createElement("link");
style_general.setAttribute("rel", "stylesheet");
style_general.setAttribute("href", './Components/Modules/header.css');
getDocumentHead.appendChild(style_general);
