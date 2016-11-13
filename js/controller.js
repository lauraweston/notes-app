(function (exports) {
    var Controller = function (listModel) {
        this.listModel = listModel;
        this.listView = new ListView(this.listModel);
    };

    Controller.prototype.showList = function () {
        this.listView.displayList();
    };

    exports.Controller = Controller;
})(this);