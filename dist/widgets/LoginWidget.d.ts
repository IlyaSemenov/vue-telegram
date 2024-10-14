import { PropType } from 'vue';
import { LoginWidgetUser } from '../types';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    botUsername: {
        type: StringConstructor;
        required: true;
    };
    redirectUrl: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<"large" | "medium" | "small">;
        default: null;
    };
    cornerRadius: {
        type: StringConstructor;
        default: null;
    };
    userPhoto: {
        type: BooleanConstructor;
        default: null;
    };
    requestWrite: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    auth: (user: LoginWidgetUser) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    botUsername: {
        type: StringConstructor;
        required: true;
    };
    redirectUrl: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<"large" | "medium" | "small">;
        default: null;
    };
    cornerRadius: {
        type: StringConstructor;
        default: null;
    };
    userPhoto: {
        type: BooleanConstructor;
        default: null;
    };
    requestWrite: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onAuth?: ((user: LoginWidgetUser) => any) | undefined;
}>, {
    size: "large" | "medium" | "small";
    tag: string;
    redirectUrl: string;
    cornerRadius: string;
    userPhoto: boolean;
    requestWrite: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
