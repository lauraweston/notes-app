(function () {
    window.addEventListener("load", function () {
        var listModel;
        var listElement;

        beforeEach(function () {
            listElement = document.getElementById("list");
            listElement.innerHTML = "";
            listModel = new ListModel();
        });

        it("should display a given list with one note in the browser", function () {
            listModel.newNote("My first note");
            var listView = new ListView(listModel);
            listView.render();

            expect(listElement.innerHTML).toEqual("<li>My first note</li>");
        });

        it("should display a given list with multiple notes in the browser", function () {
            listModel.newNote("My first note");
            listModel.newNote("My second note");
            listModel.newNote("My third note");
            var listView = new ListView(listModel);
            listView.render();

            expect(listElement.childElementCount).toEqual(3);
            expect(listElement.children[0].outerHTML).toEqual("<li>My first note</li>");
            expect(listElement.children[1].outerHTML).toEqual("<li>My second note</li>");
            expect(listElement.children[2].outerHTML).toEqual("<li>My third note</li>");
        });

        it("should not display a given empty list in the browser", function () {
            var listView = new ListView(listModel);
            listView.render();

            expect(listElement.childElementCount).toEqual(0);
        });

        it("should display a text input and submit button on the page", function () {
            expect(document.getElementById("create_note_btn").value).toEqual("Create note");
            expect(document.getElementById("new_note_text").placeholder).toEqual("New note\u2026");
        });

        it("should allow the user to create a new note", function () {
            var listView = new ListView(listModel);
            listView.render();
            var newNote;
            var callbackFunction = function (newNoteData) {
                newNote = newNoteData;
            };
            listView.registerNewNoteCallback(callbackFunction);

            document.getElementById("new_note_text").value = 'New note';
            document.getElementById("create_note_btn").click();

            expect(newNote.noteText).toEqual('New note');
        });
    });
})();