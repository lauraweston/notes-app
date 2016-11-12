(function (exports) {
    var NoteModel = function (text) {
        this.text = text;
    }

    NoteModel.prototype.fullText = function () {
        return this.text;
    }

    NoteModel.prototype.truncateText = function () {
        return this.text.length > 20 ?
            this.text.slice(0, 20) + "&hellip;" : this.text;
    }
    
    exports.NoteModel = NoteModel;
})(this);

