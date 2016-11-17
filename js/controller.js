(function (exports) {
    var Controller = function (rootElement, listModel, ListView, NoteView) {
        this.rootElement = rootElement;
        this.listModel = listModel;
        this.ListView = ListView;
        this.NoteView = NoteView;
    };

    Controller.prototype.showList = function () {
        var self = this;
        this.renderView(this.ListView, this.listModel);
        this.renderedView.registerNewNoteCallback(function (newNoteData) {
            self.createNote(newNoteData.noteText);
        });
    };

    Controller.prototype.showNote = function () {
        this.renderView(this.NoteView, this.listModel.notes[0]);
    };

    Controller.prototype.renderView = function (View, model) {
        this.renderedView = new View(model);
        this.renderedView.render(this.rootElement);
    };

    Controller.prototype.createNote = function (text) {
        this.listModel.newNote(text);
        this.showList();
    };

    exports.Controller = Controller;
})(this);