(function () {
    window.addEventListener("load", function () {
        it("should be an empty list when initialized", function () {
            var listModel = new ListModel();
            expect(listModel.allNotes().length).toEqual(0);
        });

        it("should create a new note in the list", function () {
            var listModel = new ListModel();
            listModel.newNote("First note");
            expect(listModel.allNotes().length).toEqual(1);           
            expect(listModel.allNotes()[0].id).toEqual(1);
            expect(listModel.allNotes()[0].fullText()).toEqual("First note");
        });

        it("should increment id when adding a new note", function() {
            var listModel = new ListModel();
            listModel.newNote("note");
            listModel.newNote("note");
            listModel.newNote("note");

            expect(listModel.allNotes()[0].id).toEqual(1);
            expect(listModel.allNotes()[1].id).toEqual(2);
            expect(listModel.allNotes()[2].id).toEqual(3);
        });
    });
})();