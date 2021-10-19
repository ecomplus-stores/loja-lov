// Add your custom JavaScript for storefront pages here.
// Inserir no custom-js/pages.js
function changeCartButtonTitle(title) {
    const $cartButton = document.querySelector("#cart-button");
    $cartButton.title = title;
}

window.onload = () => {
    changeCartButtonTitle('Abrir Sacola');
}
