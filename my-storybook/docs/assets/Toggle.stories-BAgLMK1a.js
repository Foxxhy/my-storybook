import{j as f}from"./jsx-runtime-DQ32znRX.js";import{R as y}from"./index-DH5ua8nC.js";import{o as b,m as k}from"./toggle-C9TZgnQb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const T=b({tagName:"f-toggle",elementClass:k,react:y}),i=d=>{const{type:p,checked:g,disabled:m,change:u}=d,h={theme:p,checked:g,disabled:m,change:u};return f.jsx(T,{...h})};i.__docgenInfo={description:"### Web component\n- The Toggle component is used in forms.\nThe Toggle component accepts the following props:\n\n\n- `type` : Specifies the checked color\n- `checked` : Specifies the check state of Toggle\n- `disaled` : Specifies if the Toggle is enable\n- `change` : Specifies the function call with onChange",methods:[],displayName:"Toggle",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary'| 'dark'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'dark'"}]},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},change:{required:!0,tsType:{name:"unknown"},description:""}}};let e=!1;const x={title:"Molecules/Toggle",component:i,tags:["autodocs"],args:{type:"success",checked:e,disabled:!1,change:()=>{e=!e,alert("onChange")}}},a={args:{type:"success",checked:e,disabled:!1,change:()=>{e=!e,alert("onChange")}}},n={args:{type:"success",checked:e,disabled:!0,change:()=>{e=!e,alert("onChange")}}};var s,r,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'success',
    checked,
    disabled: false,
    change: () => {
      checked = !checked;
      alert('onChange');
    }
  }
}`,...(c=(r=a.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var o,t,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'success',
    checked,
    disabled: true,
    change: () => {
      checked = !checked;
      alert('onChange');
    }
  }
}`,...(l=(t=n.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const q=["Enable","Disable"];export{n as Disable,a as Enable,q as __namedExportsOrder,x as default};
