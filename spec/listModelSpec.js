(function () {
    window.addEventListener("load", function () {
        it("should be an empty list when initialized", function () {
            var listModel = new ListModel();
            expect(listModel.allNotes().length).toEqual(0);
        });
        it("should store new notes in the list", function () {
            var listModel = new ListModel();
            listModel.newNote("First note");
            expect(listModel.allNotes().length).toEqual(1);
        });
        it("should create a new note in the list", function () {
            var listModel = new ListModel();
            listModel.newNote("First note");
            expect(listModel.allNotes()[0].fullText()).toEqual("First note");
        });
    });
})();