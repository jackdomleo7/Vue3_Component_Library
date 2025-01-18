import{j as e,M as i,T as c}from"./index-CFAg9CPW.js";import{useMDXComponents as l}from"./index-DcZYmEVV.js";import"./iframe-Czv9Drgh.js";import"./index-Cu4lwwaE.js";import"./index-BnQ49SPI.js";import"./index-ogSvIofg.js";function r(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Setup/Tokens"}),`
`,e.jsx(c,{children:"Tokens"}),`
`,e.jsxs(n.p,{children:["Tokens are globally accessible properties (represented as ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",rel:"nofollow",children:"CSS Custom Properties"}),") that define the design system. This design system, by default, is shipped with tokens that are designed to be simplistic, minimalistic, and customisable. The default colours are specifically chosen to be accessible across light and dark themes."]}),`
`,e.jsxs(n.p,{children:["All tokens are prefixed with ",e.jsx(n.code,{children:"--j-"}),": e.g. ",e.jsx(n.code,{children:"error"})," will be represented as ",e.jsx(n.code,{children:"--j-error"}),"."]}),`
`,e.jsx(n.h2,{id:"default-tokens-light-theme",children:"Default Tokens (light theme)"}),`
`,e.jsx(n.p,{children:'These are also referenced in the "Docs" section.'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"accent"}),": ",e.jsx("code",{style:{color:"var(--j-accent)"},children:"#80d"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"info"}),": ",e.jsx("code",{style:{color:"var(--j-info)"},children:"#2680eb"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"error"}),": ",e.jsx("code",{style:{color:"var(--j-error)"},children:"#e34850"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"warning"}),": ",e.jsx("code",{style:{color:"var(--j-warning)"},children:"#e68619"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"success"}),": ",e.jsx("code",{style:{color:"var(--j-success)"},children:"#2d9d78"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bg"}),": ",e.jsx(n.code,{children:"#fff"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bg1"}),": ",e.jsx(n.code,{children:"#f5f5f5"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bg2"}),": ",e.jsx(n.code,{children:"#eaeaea"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"primary"}),": ",e.jsx(n.code,{children:"#252525"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"secondary"}),": ",e.jsx(n.code,{children:"#2f2f2f"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tertiary"}),": ",e.jsx(n.code,{children:"#323232"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"link"}),": ",e.jsx("code",{style:{color:"var(--j-link)"},children:"#2680eb"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text-xs"}),": ",e.jsx("span",{style:{fontSize:"0.75rem"},children:"0.75rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text-sm"}),": ",e.jsx("span",{style:{fontSize:"0.875rem"},children:"0.875rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text-md"}),": ",e.jsx("span",{style:{fontSize:"1rem"},children:"1rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text-lg"}),": ",e.jsx("span",{style:{fontSize:"1.125rem"},children:"1.125rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text-xl"}),": ",e.jsx("span",{style:{fontSize:"1.25rem"},children:"1.25rem"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text-xxl"}),": ",e.jsx("span",{style:{fontSize:"1.5rem"},children:"1.5rem"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"customisation",children:"Customisation"}),`
`,e.jsxs(n.p,{children:["You can easily customise tokens by defining a new SCSS ",e.jsx(n.code,{children:"$tokens"})," map when importing the global SCSS."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@use '~@jackdomleo7/vue3-library/src/styles/main.scss' as * with (
  $tokens: (
    'default': (
      'accent': #fff,
      'info': #fff,
      'error': #fff,
      'warning': #fff,
      'success': #fff,
      'bg': #fff,
      'bg1': #fff,
      'bg2': #fff,
      'primary': #fff,
      'secondary': #fff,
      'tertiary': #fff,
      'link': #fff,
      'text-xs': 1rem,
      'text-sm': 1rem. 'text-md': 1rem,
      'text-lg': 1rem,
      'text-xl': 1rem,
      'text-xxl': 1rem
    )
  )
);
`})}),`
`,e.jsx(n.h3,{id:"theming",children:"Theming"}),`
`,e.jsxs(n.p,{children:["You can also define your own themes by providing multiple SCSS maps inside the ",e.jsx(n.code,{children:"$tokens"})," map. Each theme name will always be prefixed by ",e.jsx(n.code,{children:".theme--"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@use '~@jackdomleo7/vue3-library/src/styles/main.scss' as * with (
  $tokens: (
    'default': (
      ...
    ),
    'dark': (
      ...
    ),
    'dusk': (
      ...
    )
  )
);
`})}),`
`,e.jsx(n.p,{children:"The above will generate the following CSS:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  ...
}

.theme--dark {
  ...
}

.theme--dusk {
  ...
}
`})}),`
`,e.jsxs(n.p,{children:["You can then add the ",e.jsx(n.code,{children:".theme--dark"})," class to the ",e.jsx(n.code,{children:"<body>"})," element to overwrite the default tokens with the 'dark' theme tokens."]}),`
`,e.jsxs(n.p,{children:["NOTE: 'default' will always create CSS custom properties on the ",e.jsx(n.code,{children:":root"})," element. If you do not want this, you can replace with anything else. E.g."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`@use '~@jackdomleo7/vue3-library/src/styles/main.scss' as * with (
  $tokens: (
    'light': (
      ...
    ),
    'dark': (
      ...
    )
  )
);
`})}),`
`,e.jsxs(n.p,{children:["The above will generate the following CSS (by not defining 'default', you remove any CSS overwrites with the custom properties but also means you must ensure a class is always applied to the ",e.jsx(n.code,{children:"<body>"})," element):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.theme--light {
  ...
}

.theme--dark {
  ...
}
`})})]})}function j(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
