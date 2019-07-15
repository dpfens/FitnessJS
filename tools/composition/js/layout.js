(function() {
    var dialog = new mdc.dialog.MDCDialog(document.querySelector('#new-person-dialog')),
    visualTabBars = new mdc.tabs.MDCTabBar(document.querySelector('#visualization-tabs')),
    visualPanels = document.querySelector('.tab-panels');
    // new person dialog box
    document.querySelector('#primary-action-button').addEventListener('click', function (evt) {
        dialog.lastFocusedTarget = evt.target;
        dialog.show();
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

    visualTabBars.listen('MDCTabBar:change', function (t) {
        var dynamicTabBar = t.detail,
        nthChildIndex = visualTabBars.activeTabIndex;
        updatePanel(nthChildIndex);
        app.updateURL();
    });
})();
