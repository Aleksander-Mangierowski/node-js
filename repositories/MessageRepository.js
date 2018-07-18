const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Message = require("../models/message");

function MessageRepository() {
    Repository.prototype.constructor.call(this);
    this.model = Message;
}

// MessageRepository.prototype = new Repository();
MessageRepository.prototype = Object.create(Repository.prototype);
MessageRepository.prototype.constructor = MessageRepository;
MessageRepository.prototype.getByIdAllSendersAndReseivers = getByIdAllSendersAndReseivers;


function getByIdAllSendersAndReseivers(id, callback) {
    var model = this.model;
    model.find(
        {$or: [{senderId: id}, {receiverId: id}]},
        {_id: 0, senderId: 1, receiverId: 1}
    )
    .exec(callback);
}

module.exports = new MessageRepository();
