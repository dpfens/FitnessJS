(function() {
    var dialog = new mdc.dialog.MDCDialog(document.querySelector('#new-performance-dialog'));
    // new person dialog box
    document.querySelector('#primary-action-button').addEventListener('click', function (evt) {
        dialog.lastFocusedTarget = evt.target;
        dialog.show();
    });
})();
