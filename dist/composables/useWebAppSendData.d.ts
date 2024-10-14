/**
 * @deprecated
 */
export declare function useWebAppSendData<D>(data: D, options: {
    serialize?: (data: D) => string;
}): {
    error: import('vue').Ref<string, string>;
    isLoading: import('vue').Ref<boolean, boolean>;
    execute: () => void;
    executeHttp: (callbackUrl: string, options?: {
        closeAfter?: boolean;
    }) => Promise<Response | undefined>;
};
