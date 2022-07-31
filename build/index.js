var hello = function () { return "hi"; };
var Block = /** @class */ (function () {
    function Block(data) {
        this.data = data;
    }
    Block.prototype.hello = function () {
        return "hi";
    };
    return Block;
}());
