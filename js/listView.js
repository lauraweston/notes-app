(function (exports) {

    var createListItems = function (listModel) {
        return listModel.allNotes().map(function (note) {
            var item = document.createElement("li");
            item.innerHTML = note.truncateText();
            return item;
        });
    };

    var appendItemsToList = function (items) {
        var list = document.getElementById("list");
        items.forEach(function (item) {
            list.appendChild(item);
        });
    };

    var ListView = function (listModel) {
        this.listModel = listModel;
    };

    ListView.prototype.displayList = function () {
        var items = createListItems(this.listModel);
        appendItemsToList(items);
    };

    exports.ListView = ListView;
})(this);
