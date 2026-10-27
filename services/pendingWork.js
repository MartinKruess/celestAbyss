// Track work independently of HTTP connections: a disconnected client does not
// cancel a database write that has already started.
export function createWorkTracker() {
  const pending = new Set();
  return {
    run(work) {
      const operation = Promise.resolve().then(work);
      pending.add(operation);
      operation.then(() => pending.delete(operation), () => pending.delete(operation));
      return operation;
    },
    async drain() {
      while (pending.size) await Promise.allSettled([...pending]);
    },
    get size() { return pending.size; },
  };
}
export const pendingWork = createWorkTracker();
export const trackAsync = handler => function (...args) { return pendingWork.run(() => handler.apply(this, args)); };
export const trackService = service => Object.fromEntries(Object.entries(service).map(([name, handler]) => [name, trackAsync(handler)]));
