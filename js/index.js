(function () {
    var inTestMode = window.location.href.includes("test");
    if (inTestMode) {
        console.log('Exiting index.js as in test mode');
        return;
    }

    var rootElement = document.getElementById("root");
    var listModel = new ListModel();
    var controller = new Controller(rootElement, listModel, ListView, NoteView);
    // todo: pick this up from hash on initial load
    controller.showList();
})();