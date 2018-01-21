# qjs
JavaScript library implementation of a queue with extra power

# Usage

Using qjs is very simple. Just add the script tag with the relevant reference for qjs.js or qjs.min.js file.

I first found it useful to implement a situation where I wanted http calls (promises) to get executed in a synchronized fashion.


# Api

qjs.enqueue(item) - add an item to the queue.
qjs.dequeue() - extract an item from the queue.
qjs.clear() - clear the queue
qjs.size() - return queue size


# Event

qjs.onQueue(callback) - Add a call back to be executed on queue event