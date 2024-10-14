import { OnEventOptions } from '../types';

export declare function useWebAppTheme(): {
    colorScheme: Readonly<import('vue').Ref<"dark" | "light", "dark" | "light">>;
    themeParams: Readonly<import('vue').Ref<{
        readonly bg_color?: string;
        readonly text_color?: string;
        readonly hint_color?: string;
        readonly link_color?: string;
        readonly button_color?: string;
        readonly button_text_color?: string;
        readonly secondary_bg_color?: string;
        readonly header_bg_color?: string;
        readonly bottom_bar_bg_color?: string;
        readonly accent_text_color?: string;
        readonly section_bg_color?: string;
        readonly section_header_text_color?: `#${string}`;
        readonly section_separator_color?: string;
        readonly subtitle_text_color?: string;
        readonly destructive_text_color?: string;
    }, {
        readonly bg_color?: string;
        readonly text_color?: string;
        readonly hint_color?: string;
        readonly link_color?: string;
        readonly button_color?: string;
        readonly button_text_color?: string;
        readonly secondary_bg_color?: string;
        readonly header_bg_color?: string;
        readonly bottom_bar_bg_color?: string;
        readonly accent_text_color?: string;
        readonly section_bg_color?: string;
        readonly section_header_text_color?: `#${string}`;
        readonly section_separator_color?: string;
        readonly subtitle_text_color?: string;
        readonly destructive_text_color?: string;
    }>>;
    headerColor: import('vue').WritableComputedRef<string, string>;
    backgroundColor: import('vue').WritableComputedRef<string, string>;
    setHeaderColor: (color: "bg_color" | "secondary_bg_color" | (string & {})) => void;
    setBackgroundColor: (color: "bg_color" | "secondary_bg_color" | "bottom_bar_bg_color" | (string & {})) => void;
    onThemeChanged: (eventHandler: () => void, options?: OnEventOptions) => {
        off: () => void;
    };
};
