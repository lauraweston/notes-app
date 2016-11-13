(function (exports) {

    var createNote = function (noteModel) {
        var note = document.createElement("p");
        note.innerHTML = noteModel.fullText();
        return note;
    }

    var NoteView = function (noteModel) {
        this.model = noteModel;
    };

    NoteView.prototype.render = function () {
        var note = createNote(this.model);
        var noteElement = document.getElementById("note");
        noteElement.appendChild(note);
    };

    exports.NoteView = NoteView;
})(this);