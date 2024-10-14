import { OnEventOptions } from '../types';

export declare function useWebAppSettingsButton(): {
    isSettingsButtonVisible: import('vue').WritableComputedRef<boolean, boolean>;
    onSettingsButtonClicked: (eventHandler: SettingsButtonClickedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
    showSettingsButton: () => void;
    hideSettingsButton: () => void;
};
