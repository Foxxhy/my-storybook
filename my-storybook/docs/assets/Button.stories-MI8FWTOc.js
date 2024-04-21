import{j as B}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i=({type:c="success",weight:l=void 0,outline:f=!1,full:d=!1,hover:m=!1,focus:p=!1,children:v})=>{const h=`f-button${f?"-outline":""}-${c||"success"}`,g=l&&l!=="unset"?` f-weight-${l}`:"",y=m?" f-effect-hover":"",w=p?" f-effect-focus":"",b=d?" f-width-full":"";return B.jsx("button",{className:h+g+b+y+w,children:v||"Lorem Ipsum Factum"})};i.__docgenInfo={description:`- Typography
@param props: ITypography
@returns - JSX`,methods:[],displayName:"Button",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'danger' | 'dark' | 'gray' | 'light'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'light'"}]},description:"",defaultValue:{value:"'success'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'thin' | '100' | '200' | '300' | '400' | '500 ' | 'normal' | '600' | 'bold' | '700' | '800' | 'bolder' | '900' | 'unset'",elements:[{name:"literal",value:"'thin'"},{name:"literal",value:"'100'"},{name:"literal",value:"'200'"},{name:"literal",value:"'300'"},{name:"literal",value:"'400'"},{name:"literal",value:"'500 '"},{name:"literal",value:"'normal'"},{name:"literal",value:"'600'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'700'"},{name:"literal",value:"'800'"},{name:"literal",value:"'bolder'"},{name:"literal",value:"'900'"},{name:"literal",value:"'unset'"}]},description:"",defaultValue:{value:"undefined",computed:!0}},outline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},full:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const x={title:"Atoms/Button",component:i,tags:["autodocs"],args:{type:"success",weight:void 0,outline:!1,full:!1,children:"My Button"}},e={args:{type:"success",weight:void 0,outline:!1,full:!1,focus:!1,hover:!1,children:"My Button"}},a={args:{type:"success",weight:void 0,outline:!0,full:!1,focus:!1,hover:!1,children:"My Button"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'success',
    weight: undefined,
    outline: false,
    full: false,
    focus: false,
    hover: false,
    children: 'My Button'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var r,u,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    type: 'success',
    weight: undefined,
    outline: true,
    full: false,
    focus: false,
    hover: false,
    children: 'My Button'
  }
}`,...(o=(u=a.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};const M=["Default","Outline"];export{e as Default,a as Outline,M as __namedExportsOrder,x as default};
