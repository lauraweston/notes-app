(function () {
    window.addEventListener("load", function () {

        it('should have text on Note', function () {
            var note = new Note("Stuff");
            expect(note.text).toEqual("Stuff");
        });
        it('should return full text of the Note', function () {
            var note = new Note("Stuff that needs doing");
            expect(note.fullText()).toEqual("Stuff that needs doing");
        });

    });
})();
