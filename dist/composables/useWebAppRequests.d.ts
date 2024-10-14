import { OnEventOptions } from '../types';

export declare function useWebAppRequests(): {
    requestContact: (callback?: (success: boolean, response: RequestContactResponse) => void) => void;
    onContactRequested: (eventHandler: ContactRequestedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
    requestWriteAccess: (callback?: (success: boolean) => void) => void;
    onWriteAccessRequested: (eventHandler: WriteAccessRequestedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
};
