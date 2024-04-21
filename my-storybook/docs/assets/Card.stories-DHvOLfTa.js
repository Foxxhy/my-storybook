import{j as k}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const f=({type:n="default",color:h="success",radius:r="8",shadow:t=void 0,children:g})=>{const w=`f-card${n==="default"?"":`-${n}`}-${h||""}`,y=r&&r!=="unset"?` f-radius-${r}`:"",I=t&&t!=="unset"?` f-shadow-${t}`:"";return k.jsx("div",{className:w+y+I,children:g||"Lorem Ipsum Factum"})};f.__docgenInfo={description:`- Typography
@param props: ITypography
@returns - JSX`,methods:[],displayName:"Card",props:{type:{required:!1,tsType:{name:"union",raw:"'default' | 'dot' | 'shadow'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'dot'"},{name:"literal",value:"'shadow'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'danger' | 'dark' | 'gray' | 'light'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'light'"}]},description:"",defaultValue:{value:"'success'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'2' | '4' | '6' | '8' | '10' | '12' | '14' | '16' | '18' | '20' | '22' | '24' | '26' | '28' | '30' | '32' | '34' | '36' | '38' | '40' | '42' | '44' | '46' | '48' | '50' | 'unset'",elements:[{name:"literal",value:"'2'"},{name:"literal",value:"'4'"},{name:"literal",value:"'6'"},{name:"literal",value:"'8'"},{name:"literal",value:"'10'"},{name:"literal",value:"'12'"},{name:"literal",value:"'14'"},{name:"literal",value:"'16'"},{name:"literal",value:"'18'"},{name:"literal",value:"'20'"},{name:"literal",value:"'22'"},{name:"literal",value:"'24'"},{name:"literal",value:"'26'"},{name:"literal",value:"'28'"},{name:"literal",value:"'30'"},{name:"literal",value:"'32'"},{name:"literal",value:"'34'"},{name:"literal",value:"'36'"},{name:"literal",value:"'38'"},{name:"literal",value:"'40'"},{name:"literal",value:"'42'"},{name:"literal",value:"'44'"},{name:"literal",value:"'46'"},{name:"literal",value:"'48'"},{name:"literal",value:"'50'"},{name:"literal",value:"'unset'"}]},description:"",defaultValue:{value:"'8'",computed:!1}},shadow:{required:!1,tsType:{name:"union",raw:"'s' | 'm' | 'l' | 'unset'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'unset'"}]},description:"",defaultValue:{value:"undefined",computed:!0}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const T={title:"Atoms/Card",component:f,tags:["autodocs"]},e={args:{type:"default",color:"dark",radius:"8",shadow:void 0,children:"Lorem Ipsum Factum ..."}},a={args:{type:"dot",color:"dark",radius:"8",shadow:void 0,children:"Lorem Ipsum Factum ..."}},l={args:{type:"shadow",color:"dark",radius:"8",shadow:void 0,children:"Lorem Ipsum Factum ..."}};var s,u,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'default',
    color: 'dark',
    radius: '8',
    shadow: undefined,
    children: 'Lorem Ipsum Factum ...'
  }
}`,...(o=(u=e.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var d,i,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'dot',
    color: 'dark',
    radius: '8',
    shadow: undefined,
    children: 'Lorem Ipsum Factum ...'
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,v;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'shadow',
    color: 'dark',
    radius: '8',
    shadow: undefined,
    children: 'Lorem Ipsum Factum ...'
  }
}`,...(v=(p=l.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const R=["Default","Dot","Shadow"];export{e as Default,a as Dot,l as Shadow,R as __namedExportsOrder,T as default};
