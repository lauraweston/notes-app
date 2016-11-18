(function () {
    window.addEventListener("load", function () {
        it('calls showList callback when it does not have a hash', function () {
            var showListCallbackCalled = false;
            var testCallback = function () {
                showListCallbackCalled = true;
            };

            var listener = new HashChangeListener(testCallback);
            listener.hashChanged("");

            expect(showListCallbackCalled).toBeTrue();
        });

        it('calls showNoteCallback when URL hash changes to #notes/1', function () {
            var showNoteCallbackCalled = false;
            var receivedNoteId;
            var testCallback = function (noteId) {
                showNoteCallbackCalled = true;
                receivedNoteId = noteId;
            };

            var listener = new HashChangeListener(function () { }, testCallback);
            listener.hashChanged("#notes/1");

            expect(showNoteCallbackCalled).toBeTrue();
            expect(receivedNoteId).toEqual(1);
        });
    });
})();