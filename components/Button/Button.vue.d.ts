import type { Components } from '../../types';
declare const _default: __VLS_WithTemplateSlots<import('./vue/dist/vue.esm-bundler.js').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The button type. _Is omitted if `href` has been provided._
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
     * @default "button"
     */
    type?: "button" | "submit" | "reset" | undefined;
    /**
     * Provide a URL to use `<a :href="href">` instead of a `<button>`.
     */
    href?: string | undefined;
    status?: Components.Button.Status | undefined;
    outline?: boolean | undefined;
    icon?: Components.Button.Icon | undefined;
    disabled?: boolean | undefined;
}>, {
    type: string;
    href: undefined;
    status: undefined;
    outline: boolean;
    icon: undefined;
    disabled: boolean;
}>, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /**
     * The button type. _Is omitted if `href` has been provided._
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
     * @default "button"
     */
    type?: "button" | "submit" | "reset" | undefined;
    /**
     * Provide a URL to use `<a :href="href">` instead of a `<button>`.
     */
    href?: string | undefined;
    status?: Components.Button.Status | undefined;
    outline?: boolean | undefined;
    icon?: Components.Button.Icon | undefined;
    disabled?: boolean | undefined;
}>, {
    type: string;
    href: undefined;
    status: undefined;
    outline: boolean;
    icon: undefined;
    disabled: boolean;
}>>>, {
    icon: Components.Button.Icon;
    type: "button" | "submit" | "reset";
    href: string;
    status: Components.Button.Status;
    outline: boolean;
    disabled: boolean;
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
