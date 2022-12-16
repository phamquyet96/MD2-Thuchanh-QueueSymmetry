export interface IQueue{
    dequeue();
    enqueue(item);
    isFull():boolean;
    isEmpty():boolean;
}