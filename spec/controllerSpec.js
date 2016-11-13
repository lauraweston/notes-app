(function () {
    window.addEventListener("load", function () {
        var createViewDoubleConstructor = function (viewName) {
            return function (model) {
                this.model = model;
                this.render = function () { this.renderCalled = true; };
                this.renderCalled = false;
                this.viewName = viewName;
            };
        }
        var listModel;
        var controller;
        
        beforeEach(function () {
            listModel = new ListModel();
            listModel.newNote("Stuff to do");

            var ListViewDouble = createViewDoubleConstructor('ListView');
            var NoteViewDouble = createViewDoubleConstructor('NoteView');

            controller = new Controller(listModel, ListViewDouble, NoteViewDouble);
        });

        it("displays a list in the browser from the Controller", function () {
            controller.showList();

            expect(controller.renderedView.viewName).toEqual('ListView');
            expect(controller.renderedView.model).toEqual(listModel);
            expect(controller.renderedView.renderCalled).toBeTrue();
        });
        it("displays a note in the browser from the Controller", function () {
            controller.showNote();

            expect(controller.renderedView.viewName).toEqual('NoteView');
            expect(controller.renderedView.model).toEqual(listModel.notes[0]);
        });
        it("adds new note to the list model from the Controller", function () {
            controller.createNote("My second note");

            expect(controller.listModel.notes.length).toEqual(2);
            expect(controller.listModel.notes[1].constructor).toEqual(NoteModel);
            expect(controller.listModel.notes[1].fullText()).toEqual("My second note");
        });
    });
})();