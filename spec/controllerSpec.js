(function () {
    window.addEventListener("load", function () {
        var ListViewDouble = function (listModel) {
            this.listModel = listModel;
            this.render = function () { this.renderCalled = true; };
            this.renderCalled = false;
        };

        it("displays a list in the browser from the Controller", function () {
            var listModel = new ListModel();
            var controller = new Controller(listModel, ListViewDouble);
            controller.showList();

            expect(controller.renderedView.constructor).toEqual(ListViewDouble);
            expect(controller.renderedView.listModel).toEqual(listModel);
            expect(controller.renderedView.renderCalled).toBeTrue();
        });
    });
})();