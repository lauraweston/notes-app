(function () {
    window.addEventListener("load", function () {
        it("should be an empty list when initialized", function () {
            var list = new List();
            expect(list.allNotes().length).toEqual(0);
        });
        it("should store new notes in the list", function () {
            var list = new List();
            list.newNote("First note");
            expect(list.allNotes().length).toEqual(1);
        });
        it("should create a new note in the list", function () {
            var list = new List();
            list.newNote("First note");
            expect(list.allNotes()[0].fullText()).toEqual("First note");
        });
    });
})();