(function () {
    window.addEventListener("load", function () {
        var listModel;
        var listElement;

        beforeEach(function () {
            listElement = document.getElementById("list");
            listElement.innerHTML = "";
            listModel = new ListModel();
        });

        it("should display a given list with one note in the browser", function () {
            listModel.newNote("My first note");
            var listView = new ListView(listModel);
            listView.render();

            expect(listElement.innerHTML).toEqual("<li>My first note</li>");
        });

        it("should display a given list with multiple notes in the browser", function () {
            listModel.newNote("My first note");
            listModel.newNote("My second note");
            listModel.newNote("My third note");
            var listView = new ListView(listModel);
            listView.render();

            expect(listElement.childElementCount).toEqual(3);
            expect(listElement.children[0].outerHTML).toEqual("<li>My first note</li>");
            expect(listElement.children[1].outerHTML).toEqual("<li>My second note</li>");
            expect(listElement.children[2].outerHTML).toEqual("<li>My third note</li>");
        });
        
        it("should not display a given empty list in the browser", function () {
            var listView = new ListView(listModel);
            listView.render();

            expect(listElement.childElementCount).toEqual(0);
        });
    });
})();