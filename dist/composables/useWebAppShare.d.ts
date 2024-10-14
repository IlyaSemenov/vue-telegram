interface StoryWidgetLink {
    url: string;
    name?: string;
}
interface StoryShareParams {
    text?: string;
    widgetLink?: StoryWidgetLink;
}
declare function shareToStory(mediaUrl: string, params?: StoryShareParams): void;
export declare function useWebAppShare(): {
    shareToStory: typeof shareToStory;
};
export {};
