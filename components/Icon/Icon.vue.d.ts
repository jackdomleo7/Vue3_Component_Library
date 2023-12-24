import { type PropType } from './vue/dist/vue.esm-bundler.js';
import type { Icon } from '../../types';
declare const _default: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    icon: {
        type: PropType<Icon.Icon>;
        required: true;
        validator: (icon: Icon.Icon) => boolean;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    icon: {
        type: PropType<Icon.Icon>;
        required: true;
        validator: (icon: Icon.Icon) => boolean;
    };
}>>, {}, {}>;
export default _default;
