# qulee

JavaScript library implementation of a queue with extra power  

# Installation 

Simply reference qulee.js or qulee.min.js on your html page

```
<script src="qulee.min.js"></script>
```

Using it on node.js:

```
npm install qulee --save
```

# Usage

Using qulee is very simple. Just add the script tag with the relevant reference for qulee.js or qulee.min.js file.  

I first found it useful to implement a situation where I wanted http calls (promises) to get executed in a synchronized fashion.  

# Api

**qulee.enqueue(item)** - add an item to the queue.  
**qulee.dequeue()** - extract an item from the queue.  
**qulee.clear()** - clears the queue  
**qulee.size()** - return queue size  
**qulee.current()** - return the current/last dequeued object  
**qulee.archive()** - archives the current/last dequeued object  
**qulee.lock()** - locks the queue from enqueuing new objects  
**qulee.unlock()** - un-locks the queue from enqueuing new objects  
**qulee.last()** - returns the last object in the queue  
**qulee.createNamedQueue(name)**  - creates a new queue by name - for example you can
                              create a new queue named 'myQueue' and call it by 
                              qulee['myQueue'];  
**qulee.setAllowDuplicate(isAllowed)** - set if to allowed to queue the same object more than once. default is false
**qulee.executeOnQueue(callback,doDequeue)** - execute the call back on each of the object in the queue (callback(obj)). If **doDequeue**  
is set to true, each object will be removed from queue (default is false)                                  




# Event

**qulee.onQueue(callback)** - Add a call back to be executed on queue event    
**qulee.onDequeue(callback)** - Add a call back to be executed on dequeue event    
**qulee.onDuplicate(callback)** - Add a call back to be executed on queueing a duplicated event    
**qulee.onLock(callback)** - Add a call back to be executed when trying to queue an object when the queue is locked    