import type { Components, Tokens } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import('./vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The element to use.
     * @default "<button>"
     */
    tag?: Components.Button.Tag | undefined;
    /**
     * The button type. _Ignored if not `<button>`._
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
     * @default "button"
     */
    type?: Components.Button.Type | undefined;
    /**
     * _Ignored if `<button>`._
     */
    href?: string | undefined;
    size?: Tokens.FontSizeValue | undefined;
    round?: boolean | undefined;
    status?: Components.Button.Status | undefined;
    outline?: boolean | undefined;
    icon?: Components.Button.Icon | undefined;
    disabled?: boolean | undefined;
}>, {
    tag: string;
    type: string;
    href: undefined;
    size: string;
    status: undefined;
    icon: undefined;
}>, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The element to use.
     * @default "<button>"
     */
    tag?: Components.Button.Tag | undefined;
    /**
     * The button type. _Ignored if not `<button>`._
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
     * @default "button"
     */
    type?: Components.Button.Type | undefined;
    /**
     * _Ignored if `<button>`._
     */
    href?: string | undefined;
    size?: Tokens.FontSizeValue | undefined;
    round?: boolean | undefined;
    status?: Components.Button.Status | undefined;
    outline?: boolean | undefined;
    icon?: Components.Button.Icon | undefined;
    disabled?: boolean | undefined;
}>, {
    tag: string;
    type: string;
    href: undefined;
    size: string;
    status: undefined;
    icon: undefined;
}>>>, {
    icon: Components.Button.Icon;
    type: Components.Button.Type;
    size: Tokens.FontSizeValue;
    tag: Components.Button.Tag;
    href: string;
    status: Components.Button.Status;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('./vue/dist/vue.esm-bundler.js').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
