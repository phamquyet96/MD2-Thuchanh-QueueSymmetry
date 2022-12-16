import {IQueue} from "./IQueue";

export class QueueSymmetry implements IQueue {
    size: number;
    storage: string[] = [];

    constructor() {
    }

    getSize() {
        return this.storage.length;
    }

    dequeue():any {
        if(this.isEmpty()){
            throw new Error("Queue is empty")
        }
        return this.storage.shift();
    }

    enqueue(item){
        if (this.isFull()){
            throw new Error("Queue is full")
        }
        this.storage.push(item);
    }
    isEmpty():boolean {
        return this.storage.length == 0
    }
    isFull(): boolean {
        return this.storage.length == this.size
    }
}