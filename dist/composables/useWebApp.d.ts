import { OnEventOptions, OnEventWithOptions } from '../types';

declare const featureSupportVersion: {
    ClosingConfirmation: string;
    CloudStorage: string;
    RequestWriteAccess: string;
    RequestContact: string;
    SettingsButton: string;
    BiometricManager: string;
    DisableVerticalSwipes: string;
};
export declare function useWebApp(): {
    initData: string;
    initDataUnsafe: WebAppInitData;
    version: string;
    platform: string;
    isVersionAtLeast: (version: string) => boolean;
    onEvent: OnEventWithOptions<OnEventOptions>;
    sendData: (data: string) => void;
    ready: () => void;
    close: () => void;
    isReady: Readonly<import('vue').Ref<boolean, boolean>>;
    isPlatform: (name: (string & Record<never, never>) | "unknown" | "android" | "android_x" | "ios" | "macos" | "tdesktop" | "weba" | "webk" | "unigram") => boolean;
    isPlatformUnknown: boolean;
    isFeatureSupported: (name: keyof typeof featureSupportVersion) => boolean;
    /**
     * @deprecated
     */
    canSendData: boolean;
};
export {};
