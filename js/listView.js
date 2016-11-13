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
        this.model = listModel;
    };


    ListView.prototype.render = function () {
        var items = createListItems(this.model);
        appendItemsToList(items);

        var self = this;
        
        document.getElementById("create_note_btn").addEventListener("click", function (e) {
            e.preventDefault();
            var noteText = document.getElementById("new_note_text");
            if (typeof self.newNoteCallback === "function") {
                self.newNoteCallback({ noteText: noteText.value });
            }
        });
    };

    ListView.prototype.registerNewNoteCallback = function (callback) {
        this.newNoteCallback = callback;
    };

    exports.ListView = ListView;
})(this);
