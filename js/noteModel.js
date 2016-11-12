var Note = function (text) {
    this.text = text;
}

Note.prototype.fullText = function () {
    return this.text;
}

Note.prototype.truncateText = function () {
    return this.text.length > 20 ? 
        this.text.slice(0, 20) + "&hellip;" : this.text;
}
