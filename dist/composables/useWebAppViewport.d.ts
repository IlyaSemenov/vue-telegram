import { OnEventOptions } from '../types';

export declare function useWebAppViewport(): {
    isExpanded: Readonly<import('vue').Ref<boolean, boolean>>;
    viewportHeight: Readonly<import('vue').Ref<number, number>>;
    viewportStableHeight: Readonly<import('vue').Ref<number, number>>;
    expand: () => void;
    onViewportChanged: (eventHandler: ViewportChangedCallback, options?: OnEventOptions) => {
        off: () => void;
    };
    isVerticalSwipesEnabled: import('vue').WritableComputedRef<boolean, boolean>;
    enableVerticalSwipes: () => void;
    disableVerticalSwipes: () => void;
};
