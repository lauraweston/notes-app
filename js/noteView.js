(function (exports) {

    var createNote = function (noteModel) {
        var note = document.createElement("p");
        note.innerHTML = noteModel.fullText();
        return note;
    }

    var NoteView = function (noteModel) {
        this.noteModel = noteModel;
    };

    NoteView.prototype.displayNote = function () {
        var note = createNote(this.noteModel);
        var noteElement = document.getElementById("note");
        noteElement.appendChild(note);
    };

    exports.NoteView = NoteView;
})(this);