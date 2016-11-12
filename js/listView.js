var ListView = function (list) {
    this.list = list;
};

ListView.prototype.displayList = function () {
    var items = this.createListItems();
    this.appendItemsToList(items);
};

ListView.prototype.createListItems = function () {
    var items = [];
    this.list.allNotes().forEach(function (note) {
        var item = document.createElement("li");
        item.innerText = note.truncateText();
        items.push(item);
    });
    return items;
};

ListView.prototype.appendItemsToList = function (items) {
    var l = document.getElementById("list");
    items.forEach(function (item) {
        l.appendChild(item);
    });
};
