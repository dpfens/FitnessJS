(function() {
    var addDialog = new mdc.dialog.MDCDialog(document.querySelector('#new-person-dialog')),
        shareMenuEl = document.querySelector('#share-menu'),
        shareMenu = new mdc.menu.MDCMenu(shareMenuEl),
        shareMenuToggleButton = document.querySelector('#share-menu-button'),
        visualTabBars = new mdc.tabs.MDCTabBar(document.querySelector('#visualization-tabs')),
        visualPanels = document.querySelector('.tab-panels');
    shareMenuToggleButton.addEventListener('click', function() {
        shareMenu.open = !shareMenu.open;
    });

    // new person dialog box
    document.querySelector('#primary-action-button').addEventListener('click', function(evt) {
        addDialog.lastFocusedTarget = evt.target;
        addDialog.show();
    });

    visualTabBars.layout();
    visualTabBars.preventDefaultOnClick = true;

    function updatePanel(index) {
        var activePanel = visualPanels.querySelector('.panel.active'),
            newActivePanel = visualPanels.querySelector('.panel:nth-child(' + (index + 1) + ')');
        if (activePanel) {
            activePanel.classList.remove('active');
        }
        if (newActivePanel) {
            newActivePanel.classList.add('active');
        }
    }

    visualTabBars.listen('MDCTabBar:change', function(t) {
        t.preventDefault();

        var dynamicTabBar = t.detail,
        nthChildIndex = visualTabBars.activeTabIndex;
        updatePanel(nthChildIndex);
        app.updateURL();
    });
})();
