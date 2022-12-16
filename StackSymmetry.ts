import {IStack} from "./Symmetry";

export class StackSymmetry implements IStack{
    size:number
    container:string[]=[];
    constructor() {
    }

    getSize() {
        return this.container.length;
    }
    pop():any {
        if(this.isEmpty()){
            throw new Error("Stack is empty")
        }
        return this.container.pop()
    }

    push(item) {
        if(this.isFull()){
            throw new Error("Stack is full")
        }
        this.container.push(item);
    }
    isEmpty():boolean {
        return this.container.length == 0
    }
    isFull(): boolean {
        return this.container.length == this.size
    }
}