"use strict";
exports.__esModule = true;
exports.PointInAnotherFile = void 0;
var PointInAnotherFile = /** @class */ (function () {
    function PointInAnotherFile(x, y) {
        this.x = x;
        this.y = y;
    }
    PointInAnotherFile.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return PointInAnotherFile;
}());
exports.PointInAnotherFile = PointInAnotherFile;
