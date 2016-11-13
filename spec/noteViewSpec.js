(function () {
    window.addEventListener("load", function () {
        it("shows a note on a single page", function () {
            var noteModel = new NoteModel("My first note");
            var noteView = new NoteView(noteModel);

            noteView.displayNote();

            var noteElement = document.getElementById("note");
            expect(noteElement.innerHTML).toEqual("<p>My first note</p>");
        });

    });
})();