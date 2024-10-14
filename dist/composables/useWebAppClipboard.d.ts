import { OnEventOptions } from '../types';

export declare function useWebAppClipboard(): {
    readTextFromClipboard: (callback?: (data: string | null) => void) => void;
    onClipboardTextReceived: (eventHandler: ClipboardTextReceivedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
};
