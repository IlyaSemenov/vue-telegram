import { OnEventOptions } from '../types';

export declare function useWebAppBiometricManager(): {
    isBiometricInited: Readonly<import('vue').Ref<boolean, boolean>>;
    isBiometricAvailable: Readonly<import('vue').Ref<boolean, boolean>>;
    biometricType: Readonly<import('vue').Ref<"finger" | "face" | "unkown", "finger" | "face" | "unkown">>;
    isBiometricAccessRequested: Readonly<import('vue').Ref<boolean, boolean>>;
    isBiometricAccessGranted: Readonly<import('vue').Ref<boolean, boolean>>;
    isBiometricTokenSaved: Readonly<import('vue').Ref<boolean, boolean>>;
    biometricDeviceId: Readonly<import('vue').Ref<string, string>>;
    initBiometric: (callback?: () => void) => BiometricManager;
    requestBiometricAccess: (params: BiometricRequestAccessParams, callback?: BiometricRequestAccessCallback) => BiometricManager;
    authenticateBiometric: (params: BiometricAuthenticateParams, callback?: BiometricAuthenticateCallback) => BiometricManager;
    updateBiometricToken: (token: string, callback?: BiometricUpdateBiometricTokenCallback) => BiometricManager;
    openBiometricSettings: () => BiometricManager;
    onBiometricManagerUpdated: (eventHandler: () => void, options?: OnEventOptions) => {
        off: () => void;
    };
    onBiometricAuthRequested: (eventHandler: BiometricAuthRequestedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
    onBiometricTokenUpdated: (eventHandler: BiometricTokenUpdatedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
};
