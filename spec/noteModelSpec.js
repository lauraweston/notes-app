(function () {
    window.addEventListener("load", function () {

        it("should have text on Note", function () {
            var noteModel = new NoteModel("Stuff");
            expect(noteModel.text).toEqual("Stuff");
        });
        it("should return full text of the Note", function () {
            var noteModel = new NoteModel("Stuff that needs doing");
            expect(noteModel.fullText()).toEqual("Stuff that needs doing");
        });
        it("should return a truncated version of the note text if length is greater than 20 characters", function () {
            var noteModel = new NoteModel("Lots of stuff that needs doing");
            expect(noteModel.truncateText()).toEqual("Lots of stuff that n&hellip;")
        });
        it("should not truncate note text that is 20 characters or fewer", function () {
            var noteModel = new NoteModel("Stuff");
            expect(noteModel.truncateText()).toEqual("Stuff");
        });

    });
})();
