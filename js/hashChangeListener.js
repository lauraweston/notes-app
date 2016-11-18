(function (exports) {
    var HashChangeListener = function (showListCallback, showNoteCallback) {
        var self = this;
        this.showListCallback = showListCallback;
        this.showNoteCallback = showNoteCallback;
        window.addEventListener('hashchange', function (e) {
            self.hashChanged(e.newURL);
        });
    };

    HashChangeListener.prototype.hashChanged = function(newUrl) {
        var self = this;
        var hashLocation = newUrl.indexOf("#");
        if (typeof self.showListCallback === "function" && hashLocation === -1) {
            self.showListCallback();
            return;
        }

        var hash = newUrl.slice(hashLocation);
        if (typeof self.showNoteCallback === "function" && hash.startsWith('#notes')) {
            var noteId = parseInt(hash.slice(hash.indexOf('/') + 1));
            self.showNoteCallback(noteId);
        }
    }

    exports.HashChangeListener = HashChangeListener;
})(this);
