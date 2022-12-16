"use strict";
exports.__esModule = true;
var QueueSymmetry_1 = require("./QueueSymmetry");
var StackSymmetry_1 = require("./StackSymmetry");
var queue = new QueueSymmetry_1.QueueSymmetry();
var stack = new StackSymmetry_1.StackSymmetry();
var arr = "abccbadd";
function check() {
    for (var i = 0; i < arr.length; i++) {
        queue.enqueue(arr[i]);
        stack.push(arr[i]);
    }
    console.log(queue.dequeue());
    console.log(stack.pop());
    while (!stack.isEmpty()) {
        if (queue.dequeue() !== stack.pop()) {
            return false;
        }
    }
    return true;
}
console.log(check());
