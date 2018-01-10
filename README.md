# qjs
JavaScript librery implementation of a queue with extra power

# Usage

Using qjs is very simple. Just add the script tag with the relevant reference for qjs.js or qjs.min.js file.


# Api

qjs.enqueue(item) - add an item to the queue.
qjs.dequeue() - extract an item from the queue.
qjs.clear() - clear the queue
qjs.size() - return queue size


# Event

qjs.onQueue(callback) - Add a call back to be executed on queue event