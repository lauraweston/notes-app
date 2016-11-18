(function (exports) {

    var createNote = function (noteModel) {
        var note = document.createElement("p");
        note.innerHTML = noteModel.fullText();
        return note;
    }

    var NoteView = function (noteModel) {
        this.model = noteModel;
    };

    NoteView.prototype.render = function (rootElement) {
        rootElement.innerHTML = "";
        
        var noteElement = createNote(this.model);
        rootElement.appendChild(noteElement);
    };

    exports.NoteView = NoteView;
})(this);