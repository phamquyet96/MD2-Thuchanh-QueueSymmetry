import {QueueSymmetry} from "./QueueSymmetry";
import {StackSymmetry} from "./StackSymmetry";

let queue=new QueueSymmetry();
let stack=new StackSymmetry();

let arr="abccbadd";
function check() {
    for (let i = 0; i < arr.length; i++) {
        queue.enqueue(arr[i]);
        stack.push(arr[i]);
    }
    console.log(queue.dequeue())
    console.log(stack.pop())
    while (!stack.isEmpty()) {
        if (queue.dequeue() !== stack.pop()) {
            return false
        }
    }
    return true;
}

console.log(check())