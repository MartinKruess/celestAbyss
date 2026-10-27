import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  _id: String, // One outstanding ticket per account/character; issuing again replaces the old ticket.
  ticketHash: { type: String, required: true, unique: true },
  accountID: { type: String, required: true },
  sessionID: { type: String, required: true },
  characterID: { type: String, required: true },
  serverID: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});
schema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
export const PlayTicketModel = mongoose.model('playTickets', schema);
