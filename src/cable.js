import ActionCable from 'actioncable';

class Cable {
  consumer = ActionCable.createConsumer('ws://localhost:3001/cable');

  constructor() {
    this.unsubscribeOfMessages = this.unsubscribeOfChannel.bind(this, 'messages');
    this.unsubscribeOfRooms = this.unsubscribeOfChannel.bind(this, 'rooms');
    this.unsubscribeOfRoom = this.unsubscribeOfChannel.bind(this, 'room');
  }

  subscribeToMessages(callback) {
    this.messages = this.consumer.subscriptions.create({
      channel: 'MessagesChannel',
    }, {
      received: callback,
    });
  }

  sendMessage(data) {
    this.messages.send(data);
  }

  subscribeToRooms(callback) {
    this.rooms = this.consumer.subscriptions.create({
      channel: 'RoomsChannel',
    }, {
      received: callback,
    });
  }

  visitRoom(data) {
    this.rooms.perform('visit', data);
  }

  subscribeToRoom(callback, data) {
    this.room = this.consumer.subscriptions.create({
      channel: 'RoomChannel',
      ...data,
    }, {
      received: callback,
    });
  }

  unsubscribeOfChannel(channel) {
    this[channel].unsubscribe();
  }
}

const cable = new Cable();
window.cable = cable;

export default cable;
