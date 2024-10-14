/**
 * Create a composable that returns a lazily initialized store.
 */
export declare function defineStore<T>(initialValue: () => T): () => T;
