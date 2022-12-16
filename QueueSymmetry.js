"use strict";
exports.__esModule = true;
exports.QueueSymmetry = void 0;
var QueueSymmetry = /** @class */ (function () {
    function QueueSymmetry() {
        this.storage = [];
    }
    QueueSymmetry.prototype.getSize = function () {
        return this.storage.length;
    };
    QueueSymmetry.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.storage.shift();
    };
    QueueSymmetry.prototype.enqueue = function (item) {
        if (this.isFull()) {
            throw new Error("Queue is full");
        }
        this.storage.push(item);
    };
    QueueSymmetry.prototype.isEmpty = function () {
        return this.storage.length == 0;
    };
    QueueSymmetry.prototype.isFull = function () {
        return this.storage.length == this.size;
    };
    return QueueSymmetry;
}());
exports.QueueSymmetry = QueueSymmetry;
