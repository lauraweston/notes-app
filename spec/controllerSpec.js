(function () {
    window.addEventListener("load", function () {
        it("displays a list in the browser from the Controller", function () {
            var listModel = new ListModel();
            listModel.newNote("My first note");
            var controller = new Controller(listModel);

            controller.showList();

            var listElement = document.getElementById("list");
            expect(listElement.innerHTML).toEqual("<li>My first note</li>");
        });
        it("displays a list of multiple notes in the browser from the Controller", function () {
            var listModel = new ListModel();
            listModel.newNote("My first note");
            listModel.newNote("My second note");
            listModel.newNote("My third note");
            var controller = new Controller(listModel);

            controller.showList();

            var listElement = document.getElementById("list");
            expect(listElement.childElementCount).toEqual(3);
            expect(listElement.children[0].outerHTML).toEqual("<li>My first note</li>");
            expect(listElement.children[1].outerHTML).toEqual("<li>My second note</li>");
            expect(listElement.children[2].outerHTML).toEqual("<li>My third note</li>");
        });
        it("instantiates a new Controller and displays an empty list", function () {
            var listModel = new ListModel();
            var controller = new Controller(listModel);
            
            controller.showList();

            var listElement = document.getElementById("list");
            expect(listElement.childElementCount).toEqual(0);
        });
    });
})();