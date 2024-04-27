import{j as w}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const c=d=>{const{type:p,weight:t,style:n,transform:l,children:f}=d,h=p!=="label"?"f-text":"f-text-label",y=t&&t!=="unset"?` f-weight-${t}`:"",v=n&&n!=="unset"?` f-style-${n}`:"",g=l&&l!=="unset"?` f-transform-${l}`:"";return w.jsx("p",{className:h+y+v+g,children:f||"Lorem Ipsum Factum"})};c.__docgenInfo={description:"### CSS component\n- The Link component is used to urls actions.\nThe Link component accepts the following props:\n\n\n- `font` : Specifies the font-family\n- `weight` : Specifies the font-weight\n- `style` : Specifies if the Link should be styled\n- `transform` : Specifies if the content is formated\n- `children`: The content to be displayed inside the Link.",methods:[],displayName:"Typography",props:{type:{required:!1,tsType:{name:"union",raw:"'text' | 'label' | 'unset'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'label'"},{name:"literal",value:"'unset'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'thin' | '100' | '200' | '300' | '400' | '500 ' | 'normal' | '600' | 'bold' | '700' | '800' | 'bolder' | '900' | 'unset'",elements:[{name:"literal",value:"'thin'"},{name:"literal",value:"'100'"},{name:"literal",value:"'200'"},{name:"literal",value:"'300'"},{name:"literal",value:"'400'"},{name:"literal",value:"'500 '"},{name:"literal",value:"'normal'"},{name:"literal",value:"'600'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'700'"},{name:"literal",value:"'800'"},{name:"literal",value:"'bolder'"},{name:"literal",value:"'900'"},{name:"literal",value:"'unset'"}]},description:""},style:{required:!1,tsType:{name:"union",raw:"'underline' | 'italic' | 'through' | 'unset'",elements:[{name:"literal",value:"'underline'"},{name:"literal",value:"'italic'"},{name:"literal",value:"'through'"},{name:"literal",value:"'unset'"}]},description:""},transform:{required:!1,tsType:{name:"union",raw:"'capitalize' | 'uppercase' | 'lowercase' | 'unset'",elements:[{name:"literal",value:"'capitalize'"},{name:"literal",value:"'uppercase'"},{name:"literal",value:"'lowercase'"},{name:"literal",value:"'unset'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S={title:"Atoms/Typography",component:c,tags:["autodocs"],argTypes:{type:["text","label"]}},e={args:{type:"text",weight:void 0,style:void 0,transform:void 0,children:"Lorem ipsum factum"}},a={args:{type:"label",weight:void 0,style:void 0,transform:void 0,children:"Lorem ipsum factum"}};var r,i,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    type: 'text',
    weight: undefined,
    style: undefined,
    transform: undefined,
    children: 'Lorem ipsum factum'
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var o,m,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'label',
    weight: undefined,
    style: undefined,
    transform: undefined,
    children: 'Lorem ipsum factum'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const L=["Primary","Secondary"];export{e as Primary,a as Secondary,L as __namedExportsOrder,S as default};
