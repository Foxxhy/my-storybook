import{j as y}from"./jsx-runtime-DQ32znRX.js";import{R as b}from"./index-DH5ua8nC.js";import{o as f,m as k}from"./toggle-C9TZgnQb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T=f({tagName:"f-toggle",elementClass:k,react:b}),d=i=>{const{type:p,checked:m,disabled:g,change:u}=i,h={theme:p,checked:m,disabled:g,change:u};return y.jsx(T,{...h})};d.__docgenInfo={description:`- Typography
@param props: ITypography
@returns - JSX`,methods:[],displayName:"Toggle",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary'| 'dark'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'dark'"}]},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},change:{required:!0,tsType:{name:"unknown"},description:""}}};let e=!1;const w={title:"Components/Toggle",component:d,tags:["autodocs"],args:{type:"success",checked:e,disabled:!1,change:()=>{e=!e,alert("onChange")}}},a={args:{type:"success",checked:e,disabled:!1,change:()=>{e=!e,alert("onChange")}}},n={args:{type:"success",checked:e,disabled:!0,change:()=>{e=!e,alert("onChange")}}};var r,s,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    type: 'success',
    checked,
    disabled: false,
    change: () => {
      checked = !checked;
      alert('onChange');
    }
  }
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var o,c,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'success',
    checked,
    disabled: true,
    change: () => {
      checked = !checked;
      alert('onChange');
    }
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const E=["Enable","Disable"];export{n as Disable,a as Enable,E as __namedExportsOrder,w as default};
