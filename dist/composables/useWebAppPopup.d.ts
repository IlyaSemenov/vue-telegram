import { OnEventOptions } from '../types';

export declare function useWebAppPopup(): {
    showPopup: (params: PopupParams, callback?: (button_id: string) => void) => void;
    showAlert: (message: string, callback?: () => void) => void;
    showConfirm: (message: string, callback?: (ok: boolean) => void) => void;
    onPopupClosed: (eventHandler: PopupClosedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
};
