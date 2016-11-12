(function () {
    window.addEventListener("load", function () {

        it("should have text on Note", function () {
            var note = new Note("Stuff");
            expect(note.text).toEqual("Stuff");
        });
        it("should return full text of the Note", function () {
            var note = new Note("Stuff that needs doing");
            expect(note.fullText()).toEqual("Stuff that needs doing");
        });
        it("should return a truncated version of the note text if length is greater than 20 characters", function () {
            var note = new Note("Lots of stuff that needs doing");
            expect(note.truncateText()).toEqual("Lots of stuff that n&hellip;")
        });
        it("should not truncate note text that is 20 characters or fewer", function () {
            var note = new Note("Stuff");
            expect(note.truncateText()).toEqual("Stuff");
        });

    });
})();
