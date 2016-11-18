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

    ListModel.prototype.findNoteById = function(id) {
        return this.notes.find(function(note) {
            return note.id === id;
        });
    }

    exports.ListModel = ListModel;
})(this);