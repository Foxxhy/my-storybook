import{j as w}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const p=c=>{const{type:d,weight:t,style:r,transform:l,children:y}=c,v=d!=="label"?"f-text":"f-text-label",f=t&&t!=="unset"?` f-weight-${t}`:"",h=r&&r!=="unset"?` f-style-${r}`:"",g=l&&l!=="unset"?` f-transform-${l}`:"";return w.jsx("p",{className:v+f+h+g,children:y||"Lorem Ipsum Factum"})};p.__docgenInfo={description:`Atom - Typography
@param props: ITypography
@returns - JSX`,methods:[],displayName:"Typography",props:{type:{required:!1,tsType:{name:"union",raw:"'text' | 'label' | 'unset'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'label'"},{name:"literal",value:"'unset'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'thin' | '100' | '200' | '300' | '400' | '500 ' | 'normal' | '600' | 'bold' | '700' | '800' | 'bolder' | '900' | 'unset'",elements:[{name:"literal",value:"'thin'"},{name:"literal",value:"'100'"},{name:"literal",value:"'200'"},{name:"literal",value:"'300'"},{name:"literal",value:"'400'"},{name:"literal",value:"'500 '"},{name:"literal",value:"'normal'"},{name:"literal",value:"'600'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'700'"},{name:"literal",value:"'800'"},{name:"literal",value:"'bolder'"},{name:"literal",value:"'900'"},{name:"literal",value:"'unset'"}]},description:""},style:{required:!1,tsType:{name:"union",raw:"'underline' | 'italic' | 'through' | 'unset'",elements:[{name:"literal",value:"'underline'"},{name:"literal",value:"'italic'"},{name:"literal",value:"'through'"},{name:"literal",value:"'unset'"}]},description:""},transform:{required:!1,tsType:{name:"union",raw:"'capitalize' | 'uppercase' | 'lowercase' | 'unset'",elements:[{name:"literal",value:"'capitalize'"},{name:"literal",value:"'uppercase'"},{name:"literal",value:"'lowercase'"},{name:"literal",value:"'unset'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S={title:"Atoms/Typography",component:p,tags:["autodocs"],argTypes:{type:["text","label"]}},e={args:{type:"text",weight:void 0,style:void 0,transform:void 0,children:"Lorem ipsum factum"}},a={args:{type:"label",weight:void 0,style:void 0,transform:void 0,children:"Lorem ipsum factum"}};var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: 'text',
    weight: undefined,
    style: undefined,
    transform: undefined,
    children: 'Lorem ipsum factum'
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var o,m,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'label',
    weight: undefined,
    style: undefined,
    transform: undefined,
    children: 'Lorem ipsum factum'
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const q=["Primary","Secondary"];export{e as Primary,a as Secondary,q as __namedExportsOrder,S as default};
