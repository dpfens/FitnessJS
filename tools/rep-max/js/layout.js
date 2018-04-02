(function() {
    var dialog = new mdc.dialog.MDCDialog(document.querySelector('#new-performance-dialog')),
    shareMenuEl = document.querySelector('#share-menu'),
    shareMenu = new mdc.menu.MDCMenu(shareMenuEl),
    shareMenuToggleButton = document.querySelector('#share-menu-button');
    shareMenuToggleButton.addEventListener('click', function() {
        shareMenu.open = !shareMenu.open;
    });

    // new person dialog box
    document.querySelector('#primary-action-button').addEventListener('click', function (evt) {
        dialog.lastFocusedTarget = evt.target;
        dialog.show();
    });
})();
