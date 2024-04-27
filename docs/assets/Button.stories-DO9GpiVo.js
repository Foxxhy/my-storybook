import{j as B}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const i=({type:c="success",weight:a=void 0,outline:f=!1,full:d=!1,hover:m=!1,focus:p=!1,children:h})=>{const v=`f-button${f?"-outline":""}-${c||"success"}`,g=a&&a!=="unset"?` f-weight-${a}`:"",y=m?" f-effect-hover":"",b=p?" f-effect-focus":"",w=d?" f-width-full":"";return B.jsx("button",{className:v+g+w+y+b,children:h||"Lorem Ipsum Factum"})};i.__docgenInfo={description:"### CSS component\n- The Button component is used to start an action. It can be customized to represent different types of buttons.\nThe Button component accepts the following props:\n\n- `type`: Specifies the type of button.\n- `weight`: Specifies the weight of the button text. \n- `outline`: A boolean value indicating whether the button should have an outline. Defaults to false.\n- `full`: A boolean value indicating whether the button should expand to fill its container's width. Defaults to false.\n- `children`: The content to be displayed inside the button.\n- 'focus': Add a box-shadow effect onFocus. Default to false.\n- 'hover': Add a zoom effect onHover. Default to false.",methods:[],displayName:"Button",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'danger' | 'dark' | 'gray' | 'light'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'light'"}]},description:"",defaultValue:{value:"'success'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'thin' | '100' | '200' | '300' | '400' | '500 ' | 'normal' | '600' | 'bold' | '700' | '800' | 'bolder' | '900' | 'unset'",elements:[{name:"literal",value:"'thin'"},{name:"literal",value:"'100'"},{name:"literal",value:"'200'"},{name:"literal",value:"'300'"},{name:"literal",value:"'400'"},{name:"literal",value:"'500 '"},{name:"literal",value:"'normal'"},{name:"literal",value:"'600'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'700'"},{name:"literal",value:"'800'"},{name:"literal",value:"'bolder'"},{name:"literal",value:"'900'"},{name:"literal",value:"'unset'"}]},description:"",defaultValue:{value:"undefined",computed:!0}},outline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},full:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const D={title:"Atoms/Button",component:i,tags:["autodocs"],args:{type:"success",weight:void 0,outline:!1,full:!1,children:"My Button"}},e={args:{type:"success",weight:void 0,outline:!1,full:!1,focus:!1,hover:!1,children:"My Button"}},t={args:{type:"success",weight:void 0,outline:!0,full:!1,focus:!1,hover:!1,children:"My Button"}};var l,n,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'success',
    weight: undefined,
    outline: false,
    full: false,
    focus: false,
    hover: false,
    children: 'My Button'
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var o,u,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'success',
    weight: undefined,
    outline: true,
    full: false,
    focus: false,
    hover: false,
    children: 'My Button'
  }
}`,...(r=(u=t.parameters)==null?void 0:u.docs)==null?void 0:r.source}}};const S=["Default","Outline"];export{e as Default,t as Outline,S as __namedExportsOrder,D as default};
