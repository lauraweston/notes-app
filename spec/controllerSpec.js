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

        var HashChangeListenerDouble = function(showListCallback, showNoteCallback) {
            this.triggerShowListCallback = function() {
                showListCallback();
            }

            this.triggerShowNoteCallback = function(id) {
                showNoteCallback(id);
            }
        };

        var listModel;
        var controller;

        beforeEach(function () {
            listModel = new ListModel();
            listModel.newNote("Stuff to do");

            var dummyRootElement = {};
            controller = new Controller(dummyRootElement, listModel, ListViewDouble, NoteViewDouble, HashChangeListenerDouble);
        });

        it("displays a list in the browser from the Controller", function () {
            controller.showList();

            expect(controller.renderedView.constructor).toEqual(ListViewDouble);
            expect(controller.renderedView.model).toEqual(listModel);
            expect(controller.renderedView.renderCalled).toBeTrue();
        });
        it("displays a note in the browser from the Controller", function () {
            controller.showNote(1);

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
        it("shows an updated list after a note has been created", function() {
            controller.showList();
            var firstRenderedView = controller.renderedView;

            controller.renderedView.triggerNewNoteCallback({ noteText: "I am a new note" });

            expect(controller.renderedView.constructor).toEqual(ListViewDouble);
            expect(controller.renderedView.model).toEqual(listModel);
            expect(controller.renderedView.model.notes.length).toEqual(2);
            expect(controller.renderedView.renderCalled).toBeTrue();
            expect(controller.renderedView === firstRenderedView).toBeFalse();
        });

        it("should show list when the hash change callback is called", function() {

            controller.hashChangeListener.triggerShowListCallback();

            expect(controller.renderedView.constructor).toEqual(ListViewDouble);
        });

        it("should show note when the hash change show note callback is called", function() {

            listModel.newNote('Note 2');

            controller.hashChangeListener.triggerShowNoteCallback(2);

            expect(controller.renderedView.constructor).toEqual(NoteViewDouble);
            expect(controller.renderedView.model.id).toEqual(2);
        });
    });
})();