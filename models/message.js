const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = Schema({
    senderId: { type: Schema.Types.ObjectId, ref: "User" },
    receiverId: { type: Schema.Types.ObjectId, ref: "User" },
    body: String
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
