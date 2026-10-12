import { EventEmitter } from 'node:events';

// One listener per chat server, not per connection. Multi-instance deployment
// will require distributing these events through a shared broker.
export const sessionEvents = new EventEmitter();
