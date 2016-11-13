

(function () {
    window.addEventListener("load", function () {

        var noteElement;

        beforeEach(function () {
            noteElement = document.getElementById("note");
            noteElement.innerHTML = "";
        });

        it("shows full text of a single note on a single page", function () {
            var noteModel = new NoteModel("Stuff to do: thing 1, thing 2, thing 3, thing 4");
            var noteView = new NoteView(noteModel);

            noteView.displayNote();

            expect(noteElement.children.length).toEqual(1);
            expect(noteElement.innerHTML).toEqual("<p>Stuff to do: thing 1, thing 2, thing 3, thing 4</p>");
        });
        it("should have an empty #note element on initialising noteView", function () {
            expect(noteElement.children.length).toEqual(0);
        });
    });
})();