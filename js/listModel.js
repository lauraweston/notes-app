(function (exports) {
    var List = function () {
        this.notes = [];
    };

    List.prototype.newNote = function (text) {
        this.notes.push(new Note(text));
    }

    List.prototype.allNotes = function () {
        return this.notes;
    }

    exports.List = List;
})(this);