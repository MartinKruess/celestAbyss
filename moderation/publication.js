import { ModerationCaseModel } from '../models/moderationCaseSchema.js';

export function createPublicationLink(cases = ModerationCaseModel) {
  return async ({ caseID, message, session }) => {
    if (!caseID) return;
    if (!session) throw new Error('CHAT_PUBLICATION_REQUIRES_TRANSACTION');
    const result = await cases.updateOne({ _id: caseID, senderID: message.sender.accountID,
      clientMessageID: message.clientMessageID },
    { $set: { messageID: message.id, targetKey: `message:${message.id}` } }, { session });
    if (!result.matchedCount) throw new Error('CHAT_MODERATION_CASE_MISSING');
  };
}
