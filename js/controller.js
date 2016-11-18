(function (exports) {
    var Controller = function (rootElement, listModel, ListView, NoteView) {
        this.rootElement = rootElement;
        this.listModel = listModel;
        this.ListView = ListView;
        this.NoteView = NoteView;

        var self = this;
        window.addEventListener('hashchange', function(e) {
            var hashLocation = e.newURL.indexOf("#");
            if (hashLocation === -1) {
                self.showList();
                return;
            }
            
            var hash = e.newURL.slice(hashLocation);
            if (hash.startsWith('#notes')) {
                var noteId = parseInt(hash.slice(hash.indexOf('/') + 1));
                self.showNote(noteId);
            }
        });
    };

    Controller.prototype.showList = function () {
        var self = this;
        this.renderView(this.ListView, this.listModel);
        this.renderedView.registerNewNoteCallback(function (newNoteData) {
            self.createNote(newNoteData.noteText);
        });
    };

    Controller.prototype.showNote = function (id) {
        var note = this.listModel.findNoteById(id);
        this.renderView(this.NoteView, note);
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