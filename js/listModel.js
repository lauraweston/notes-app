(function (exports) {
    var ListModel = function () {
        this.notes = [];
    };

    ListModel.prototype.newNote = function (text) {
        this.notes.push(new NoteModel(text));
    }

    ListModel.prototype.allNotes = function () {
        return this.notes;
    }

    exports.ListModel = ListModel;
})(this);