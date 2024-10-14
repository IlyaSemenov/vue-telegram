import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    title: {
        type: StringConstructor;
    };
    message: {
        type: StringConstructor;
        required: true;
    };
    buttons: {
        type: PropType<PopupButton[]>;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (buttonId: string) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: StringConstructor;
    };
    message: {
        type: StringConstructor;
        required: true;
    };
    buttons: {
        type: PropType<PopupButton[]>;
    };
}>> & Readonly<{
    onClose?: ((buttonId: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
