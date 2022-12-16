export interface IStack {
    push(item);
    pop();
    isFull():boolean;
    isEmpty():boolean;
}
