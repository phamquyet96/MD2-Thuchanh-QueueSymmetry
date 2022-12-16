"use strict";
exports.__esModule = true;
exports.StackSymmetry = void 0;
var StackSymmetry = /** @class */ (function () {
    function StackSymmetry() {
        this.container = [];
    }
    StackSymmetry.prototype.getSize = function () {
        return this.container.length;
    };
    StackSymmetry.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.container.pop();
    };
    StackSymmetry.prototype.push = function (item) {
        if (this.isFull()) {
            throw new Error("Stack is full");
        }
        this.container.push(item);
    };
    StackSymmetry.prototype.isEmpty = function () {
        return this.container.length == 0;
    };
    StackSymmetry.prototype.isFull = function () {
        return this.container.length == this.size;
    };
    return StackSymmetry;
}());
exports.StackSymmetry = StackSymmetry;
