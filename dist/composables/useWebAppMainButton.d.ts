import { OnEventOptions } from '../types';

export declare function useWebAppMainButton(): {
    mainButtonText: import('vue').WritableComputedRef<string, string>;
    mainButtonColor: import('vue').WritableComputedRef<string, string>;
    mainButtonTextColor: import('vue').WritableComputedRef<string, string>;
    isMainButtonVisible: import('vue').WritableComputedRef<boolean, boolean>;
    isMainButtonActive: import('vue').WritableComputedRef<boolean, boolean>;
    isMainButtonProgressVisible: import('vue').WritableComputedRef<boolean, boolean>;
    setMainButtonText: (text: string) => void;
    onMainButtonClicked: (eventHandler: MainButtonClickedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
    showMainButton: () => void;
    hideMainButton: () => void;
    enableMainButton: () => void;
    disableMainButton: () => void;
    showMainButtonProgress: (leaveActive?: boolean | undefined) => void;
    hideMainButtonProgress: () => void;
    setMainButtonParams: (params: MainButtonParams) => void;
};
