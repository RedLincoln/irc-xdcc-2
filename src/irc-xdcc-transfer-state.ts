/**
 * Enum for XDCC transfer states
 * @enum
 */
export enum XdccTransferState {
	canceled = -1,
	pending = 0,
	requested = 1,
	queued = 2,
	started = 3,
	completed = 4
}