(function (exports) {
    var Controller = function (listModel, ListView) {
        this.listModel = listModel;
        this.ListView = ListView
        
    };

    Controller.prototype.showList = function () {
        this.renderView(this.ListView, this.listModel);
    };

    Controller.prototype.renderView = function(View, model) {
        this.renderedView = new View(model);
        this.renderedView.render();
    }

    exports.Controller = Controller;
})(this);