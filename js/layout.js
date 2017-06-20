// Material Design drawer
var drawerEl = document.querySelector('.mdc-temporary-drawer'),
MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer,
drawer = new mdc.drawer.MDCTemporaryDrawer(drawerEl);
document.querySelector('.global-menu-button').addEventListener('click', function() {
  drawer.open = !drawer.open;
});
