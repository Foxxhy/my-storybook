import{j as e}from"./jsx-runtime-DQ32znRX.js";import{r as i}from"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const c=d=>{const{background:a}=d,[o,t]=i.useState(!1),m=a!=="unset"?`f-cover-${a}`:"";return e.jsxs("div",{style:{height:"600px"},children:[e.jsx("button",{className:"f-button-outline-info",onClick:()=>t(!0),children:"Open modal"}),e.jsx("aside",{className:o?"f-modal-show":"f-modal-hide",children:e.jsxs("section",{className:"f-flex f-flex-column f-justify-between f-height-full",children:[e.jsx("p",{className:"f-secondary-text f-gap-16",children:"Lorem Ipsum Factum"}),e.jsx("button",{className:"f-button-danger",onClick:()=>t(!1),children:"fermer"})]})}),e.jsx("div",{className:o?m:""})]})};c.__docgenInfo={description:`### CSS composable
- The Modal component is an amalgam of multiples class CSS

- The classes f-modal-show and f-modal-hide are the core of the composable.
It's possible to customize the composable with any classes CSS

- \`background\` : Specifies the effect in background when modal is open`,methods:[],displayName:"Modal",props:{background:{required:!1,tsType:{name:"union",raw:"'shadow' | 'vague' | 'unset'",elements:[{name:"literal",value:"'shadow'"},{name:"literal",value:"'vague'"},{name:"literal",value:"'unset'"}]},description:""}}};const h={title:"Molecules/Modal",component:c,tags:["autodocs"]},s={args:{background:"shadow"}};var n,l,r;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    background: 'shadow'
  }
}`,...(r=(l=s.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const g=["Custom"];export{s as Custom,g as __namedExportsOrder,h as default};
