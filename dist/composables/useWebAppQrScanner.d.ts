import { OnEventOptions } from '../types';

export declare function useWebAppQrScanner(): {
    showScanQrPopup: (params: ScanQrPopupParams, callback?: (data: string) => void) => void;
    closeScanQrPopup: () => void;
    onQrTextReceived: (eventHandler: QrTextReceivedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
    onScanQrPopupClosed: (eventHandler: ScanQrPopupClosedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
};
