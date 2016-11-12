var ListView = function (listModel) {
    this.listModel = listModel;
};

ListView.prototype.displayList = function () {
    var items = this.createListItems();
    this.appendItemsToList(items);
};

ListView.prototype.createListItems = function () {
    return this.listModel.allNotes().map(function (note) {
        var item = document.createElement("li");
        item.innerHTML = note.truncateText();
        return item;
    });
};

ListView.prototype.appendItemsToList = function (items) {
    var list = document.getElementById("list");
    items.forEach(function (item) {
        list.appendChild(item);
    });
};
