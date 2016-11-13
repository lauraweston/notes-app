(function () {
    window.addEventListener("load", function () {
        var ListViewDouble = function (model) {
            this.model = model;
            this.render = function () { this.renderCalled = true; };
            this.renderCalled = false;
            this.registerNewNoteCallback = function (callback) {
                this.newNoteCallback = callback;
            };
            this.triggerNewNoteCallback = function (noteData) {
                if (typeof this.newNoteCallback === "function") {
                    this.newNoteCallback(noteData);
                }
            };
        };

        var NoteViewDouble = function (model) {
            this.model = model;
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
            expect(controller.renderedView.model).toEqual(listModel);
            expect(controller.renderedView.renderCalled).toBeTrue();
        });
        it("displays a note in the browser from the Controller", function () {
            controller.showNote();

            expect(controller.renderedView.constructor).toEqual(NoteViewDouble);
            expect(controller.renderedView.model).toEqual(listModel.notes[0]);
        });
        it("adds new note to the list model from the Controller", function () {
            controller.createNote("My second note");

            expect(controller.listModel.notes.length).toEqual(2);
            expect(controller.listModel.notes[1].constructor).toEqual(NoteModel);
            expect(controller.listModel.notes[1].fullText()).toEqual("My second note");
        });
        it("creates a note when listView responds with a new note", function () {
            controller.showList();

            controller.renderedView.triggerNewNoteCallback({ noteText: "I am a new note" });

            expect(controller.listModel.notes.length).toEqual(2);
            expect(controller.listModel.notes[1].text).toEqual("I am a new note");
        });
    });
})();