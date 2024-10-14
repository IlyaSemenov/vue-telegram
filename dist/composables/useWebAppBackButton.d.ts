import { OnEventOptions } from '../types';

export declare function useWebAppBackButton(): {
    isBackButtonVisible: import('vue').WritableComputedRef<boolean, boolean>;
    onBackButtonClicked: (eventHandler: BackButtonClickedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
    showBackButton: () => void;
    hideBackButton: () => void;
};
