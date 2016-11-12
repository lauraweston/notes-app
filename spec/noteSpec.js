(function () {
    window.addEventListener("load", function () {

        it('should have text on Note', function () {
            var note = new Note("Stuff");
            expect(note.text).toEqual("Stuff");
        });
        
    });
})();
