(function () {
    window.addEventListener("load", function () {
        it("should display a given list in the browser", function () {
            var list = new List();
            list.newNote("My first note")
            var view = new ListView(list);
            view.displayList();
            var displayList = document.getElementById("list");
            expect(displayList.innerText).toInclude("My first note");
        });
    });
})();