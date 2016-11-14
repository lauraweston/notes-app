

(function () {
    window.addEventListener("load", function () {

        var testElement;

        beforeEach(function () {
            testElement = document.createElement("test");
            document.body.appendChild(testElement);
        });

        afterEach(function () {
            testElement.remove();
        });

        it("shows full text of a single note on a single page", function () {
            var noteModel = new NoteModel("Stuff to do: thing 1, thing 2, thing 3, thing 4");
            var noteView = new NoteView(noteModel);

            noteView.render(testElement);

            expect(testElement.children.length).toEqual(1);
            expect(testElement.innerHTML).toEqual("<p>Stuff to do: thing 1, thing 2, thing 3, thing 4</p>");
        });
    });
})();