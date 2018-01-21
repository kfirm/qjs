(function (global) {

    "use strict";

    function Queue() {

        var queue = [];
        var archived = [];
        var current = null;

        var lock = false;
        var archive = false;
        var allowDuplicates = false;

        var events = {
            onQueue: [],
            onDequeue: [],
            onArchive: [],
            onDuplicate: [],
            onLock: []
        };

        function fireEvent(eventArray,param) {
            eventArray.forEach(function (callback) {
                callback(param);
            })
        }


        this.enqueue = function (item) {

            if (lock){

                fireEvent(events.onLock,item);

            } else if (!allowDuplicates && queue.indexOf(item) > -1) {

                fireEvent(events.onDuplicate,item);

            } else {

                queue.push(item);

                fireEvent(events.onQueue,item);
            }

            return this;
        };

        this.dequeue = function () {

            current = queue.shift();

            fireEvent(events.onDequeue,current);

            if (archive) {
                this.archive();
            }

            return current;
        };

        this.clear = function () {
            queue = [];
        };

        this.current = function () {
            return current;
        };

        this.archive = function () {
            if (current) {
                archived.push(current);
                fireEvent(events.onArchive,current);
            }
        };

        this.lock = function () {
            lock = true;
        };

        this.unlock = function () {
            lock = false;
        };

        this.size = function (namedQueue) {

            if (namedQueue){
                return this[namedQueue].size();
            } else {
                return queue.length;
            }
        };

        this.last = function () {
            if (queue.length) {
                return queue[queue.length - 1];
            } else {
                return this.current();
            }
        };

        this.initNamedQueue = function (namedQueue) {
            this[namedQueue] = new Queue();
        };

        // Queue Events:
        this.onQueue = function (callback) {
            events.onQueue.push(callback);
        };

        this.onDequeue = function (callback) {
            events.onDequeue.push(callback);
        }

    }

    global.qjs = new Queue();

})(window || global);