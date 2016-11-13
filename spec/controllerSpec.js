(function () {
    window.addEventListener("load", function () {
        var ListViewDouble = function (listModel) {
            this.listModel = listModel;
            this.render = function () { this.renderCalled = true; };
            this.renderCalled = false;
        };
        var NoteViewDouble = function (noteModel) {
            this.noteModel = noteModel;
            this.render = function () { this.renderCalled = true; };
            this.renderCalled = false;
        };
        var listModel;
        var controller;
        beforeEach(function () {
            listModel = new ListModel();
            listModel.newNote("Stuff to do");
            controller = new Controller(listModel, ListViewDouble, NoteViewDouble);
        });

        it("displays a list in the browser from the Controller", function () {
            controller.showList();

            expect(controller.renderedView.constructor).toEqual(ListViewDouble);
            expect(controller.renderedView.listModel).toEqual(listModel);
            expect(controller.renderedView.renderCalled).toBeTrue();
        });
        it("displays a note in the browser from the Controller", function () {
            controller.showNote();

            expect(controller.renderedView.constructor).toEqual(NoteViewDouble);
            expect(controller.renderedView.noteModel).toEqual(listModel.notes[0]);
        });
        it("adds new note to the list model from the Controller", function () {
            controller.createNote("My second note");

            expect(controller.listModel.notes.length).toEqual(2);
            expect(controller.listModel.notes[1].constructor).toEqual(NoteModel);
            expect(controller.listModel.notes[1].fullText()).toEqual("My second note");
        });
    });
})();