class QueueManager {
  constructor(queues, socket) {
    this.queues = {};
    this.queueRunning = {};
    queues.forEach((queueName) => {
      this.queues[queueName] = [];
      this.queueRunning[queueName] = false;
    });

    this.socket = socket;
  }

  append(queueName, f, ...args) {
    this.queues[queueName].push(this.wrap(f, args));
    this.next(queueName);
  }

  wrap(f, args) {
    return () => {
      const printErr = (err) => {
        // eslint-disable-next-line no-console
        console.error(err);

        this.socket.emit('ERROR', {
          message: err.message,
          stack: err.stack,
        });
      };

      try {
        return f(...args).catch(printErr);
      } catch (err) {
        return printErr(err);
      }
    };
  }

  async run(queueName) {
    this.queueRunning[queueName] = true;
    const result = await (this.queues[queueName][0]());
    this.socket.emit(queueName, result);
    this.queues[queueName].shift();
    this.queueRunning[queueName] = false;
    this.next(queueName);
  }

  next(queueName) {
    if (!this.queueRunning[queueName] && this.queues[queueName][0]) this.run(queueName);
  }
}

module.exports = QueueManager;
