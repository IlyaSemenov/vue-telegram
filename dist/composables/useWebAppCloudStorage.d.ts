declare function setStorageItem(key: string, value: string): Promise<true | null>;
declare function getStorageItem(key: string): Promise<string | null>;
declare function getStorageItems(keys: string[]): Promise<Record<string, string>>;
declare function removeStorageItem(key: string): Promise<true | null>;
declare function removeStorageItems(keys: string[]): Promise<true | null>;
declare function getStorageKeys(): Promise<string[]>;
export declare function useWebAppCloudStorage(): {
    setStorageItem: typeof setStorageItem;
    getStorageItem: typeof getStorageItem;
    getStorageItems: typeof getStorageItems;
    removeStorageItem: typeof removeStorageItem;
    removeStorageItems: typeof removeStorageItems;
    getStorageKeys: typeof getStorageKeys;
};
export {};
