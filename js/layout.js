if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/FitnessJS/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// Material Design drawer
var drawerEl = document.querySelector('.mdc-temporary-drawer'),
MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer,
drawer = new mdc.drawer.MDCTemporaryDrawer(drawerEl);
document.querySelector('.global-menu-button').addEventListener('click', function() {
  drawer.open = !drawer.open;
});
