// Add your custom JavaScript for checkout here.
// Inserir no custom-js/checkout.js
function changeCartPageTitle(title) {
    const router = window.storefrontApp && window.storefrontApp.router 
    const currentRoute = router.currentRoute;
    if(currentRoute.name == 'cart') {
        document.title = title;
    }
};
window.onload = () => {
    changeCartPageTitle('Minha Sacola');
}
