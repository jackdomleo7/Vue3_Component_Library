import { Components, Tokens } from '../../types';
type __VLS_Props = {
    /**
     * The element to use.
     * @default "<button>"
     */
    tag?: Components.Button.Tag;
    /**
     * The button type. _Ignored if not `<button>`._
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type
     * @default "button"
     */
    type?: Components.Button.Type;
    /**
     * _Ignored if `<button>`._
     */
    href?: string;
    size?: Tokens.FontSizeValue;
    round?: boolean;
    status?: Components.Button.Status;
    outline?: boolean;
    icon?: Components.Button.Icon;
    disabled?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    icon: Components.Button.Icon;
    type: Components.Button.Type;
    size: Tokens.FontSizeValue;
    tag: Components.Button.Tag;
    href: string;
    status: Components.Button.Status;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
