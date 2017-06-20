(function() {
    var dialog = new mdc.dialog.MDCDialog(document.querySelector('#new-performance-dialog')),
    shareMenuEl = document.querySelector('#share-menu'),
    shareMenu = new mdc.menu.MDCSimpleMenu(shareMenuEl),
    shareMenuToggleButton = document.querySelector('#share-menu-button'),
    textInputElements = document.querySelectorAll('.mdc-textfield'),
    textInputFields = [];
    shareMenuToggleButton.addEventListener('click', function() {
        shareMenu.open = !shareMenu.open;
    });

    // initialize text fields
    for(var i=0;i<textInputElements.length;i++) {
        textInputFields.push( new mdc.textfield.MDCTextfield(textInputElements[i]) );
    }

    // new person dialog box
    document.querySelector('#primary-action-button').addEventListener('click', function (evt) {
        dialog.lastFocusedTarget = evt.target;
        dialog.show();
    });
})();
