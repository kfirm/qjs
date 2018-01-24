# qulee

JavaScript library implementation of a queue with extra power

# Usage

Using qjs is very simple. Just add the script tag with the relevant reference for qjs.js or qjs.min.js file.

I first found it useful to implement a situation where I wanted http calls (promises) to get executed in a synchronized fashion.



# Api

qjs.enqueue(item) - add an item to the queue.
qjs.dequeue() - extract an item from the queue.
qjs.clear() - clears the queue
qjs.size() - return queue size
qjs.current() - return the current/last dequeued object
qjs.archive() - archives the current/last dequeued object
qjs.lock() - locks the queue from enqueuing new objects
qjs.unlock() - un-locks the queue from enqueuing new objects
qjs.last() - returns the last object in the queue
qjs.createNamedQueue(name)  - creates a new queue by name - for example you can
                              create a new queue named 'myQueue' and call it by 
                              qjs['myQueue'];
qjs.setAllowDuplicate(isAllowed) - set if to allowed to queue the same object more than once. default is false                              




# Event

qjs.onQueue(callback) - Add a call back to be executed on queue event
qjs.onDequeue(callback) - Add a call back to be executed on dequeue event
qjs.onDuplicate(callback) - Add a call back to be executed on queueing a duplicated event
qjs.onLock(callback) - Add a call back to be executed when trying to queue an object when the queue is locked