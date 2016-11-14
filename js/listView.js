(function (exports) {
    var createListItems = function (listModel) {
        return listModel.allNotes().map(function (note) {
            var item = document.createElement("li");
            item.innerHTML = note.truncateText();
            return item;
        });
    };

    var appendItemsToList = function (items) {
        var list = document.createElement("ul");
        items.forEach(function (item) {
            list.appendChild(item);
        });
        return list;
    };

    var createNewNoteForm = function () {
        var form = document.createElement('form');
        form.innerHTML = `<textarea id="new_note_text" rows="3" cols="50" placeholder="New note&hellip;"></textarea><br/>
                        <input id="create_note_btn" type="submit" value="Create note" />`;
        return form;
    };

    var ListView = function (listModel) {
        this.model = listModel;
    };


    ListView.prototype.render = function (rootElement) {
        rootElement.innerHTML = "";

        var items = createListItems(this.model);
        var list = appendItemsToList(items);
        var newNoteForm = createNewNoteForm();

        rootElement.appendChild(newNoteForm);
        rootElement.appendChild(list);

        var self = this;

        rootElement.querySelectorAll("#create_note_btn")[0].addEventListener("click", function (e) {
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
