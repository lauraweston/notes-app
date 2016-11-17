(function (exports) {
    var ListModel = function () {
        this.notes = [];
        this.nextNodeId = 1;
    };

    ListModel.prototype.newNote = function (text) {
        this.notes.push(new NoteModel(text, this.nextNodeId++));
    }

    ListModel.prototype.allNotes = function () {
        return this.notes;
    }

    exports.ListModel = ListModel;
})(this);