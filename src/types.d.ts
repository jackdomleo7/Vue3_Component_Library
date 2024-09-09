export namespace Components {
  export namespace Button {
    export type Tag = 'button' | 'a' | 'router-link';
    export type Status = 'accent' | 'info' | 'error' | 'warning' | 'success';
    export type Type = 'button' | 'submit' | 'reset';

    export interface Icon extends Icon.Icon {
      position: 'before-text' | 'after-text' | 'icon-only';
    }
  }

  export namespace Icon {
    export interface Icon {
      src: string;
      /**
       * Provide a label to make the icon informative to assistive technologies. _Omit this property for a decorative icon._
       */
      label?: string;
    }
  }
}
