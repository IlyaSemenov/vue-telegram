import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    url: {
        type: StringConstructor;
        required: true;
    };
    comment: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<"large" | "medium">;
        default: null;
    };
    noLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    url: {
        type: StringConstructor;
        required: true;
    };
    comment: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<"large" | "medium">;
        default: null;
    };
    noLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    size: "large" | "medium";
    comment: string;
    noLabel: boolean;
    tag: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
