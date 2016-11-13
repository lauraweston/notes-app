(function (exports) {
    var Controller = function (listModel, ListView, NoteView) {
        this.listModel = listModel;
        this.ListView = ListView;
        this.NoteView = NoteView;
        
    };

    Controller.prototype.showList = function () {
        this.renderView(this.ListView, this.listModel);
    };

    Controller.prototype.showNote = function () {
        this.renderView(this.NoteView, this.listModel.notes[0]);
    };

    Controller.prototype.renderView = function(View, model) {
        this.renderedView = new View(model);
        this.renderedView.render();
    };

    Controller.prototype.createNote = function (text) {
        this.listModel.newNote(text);
    };

    exports.Controller = Controller;
})(this);