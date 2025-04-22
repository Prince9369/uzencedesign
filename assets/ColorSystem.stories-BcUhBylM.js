import{j as r}from"./jsx-runtime-D_zvdyIk.js";const Y=(e,a)=>a?`var(--color-${e}-${a})`:`var(--color-${e}-500)`,Z=e=>`var(--color-surface-${e})`,ee=e=>`var(--color-background-${e})`,re=e=>e.includes("50")||e.includes("100")||e.includes("200")||e.includes("light")?"var(--color-neutral-900)":"var(--color-neutral-50)",t=({category:e,shade:a="500",label:s,showHex:o=!1})=>{const l=Y(e,a),c=re(`${e}-${a}`),X=()=>`#${e.charAt(0)}${a}`;return r.jsxs("div",{className:"w-full h-20 rounded-md flex flex-col justify-between p-3",style:{backgroundColor:l,color:c},children:[r.jsx("div",{className:"text-sm font-medium",children:s||`${e}-${a}`}),o&&r.jsx("div",{className:"text-xs opacity-80",children:X()})]})},K=({type:e,label:a,showHex:s=!1})=>{const o=Z(e),l=e==="light"?"var(--color-neutral-900)":"var(--color-neutral-50)",c=()=>e==="light"?"#FFFFFF":"#121212";return r.jsxs("div",{className:"w-full h-20 rounded-md flex flex-col justify-between p-3",style:{backgroundColor:o,color:l},children:[r.jsx("div",{className:"text-sm font-medium",children:a||`Surface ${e}`}),s&&r.jsx("div",{className:"text-xs opacity-80",children:c()})]})},M=({type:e,label:a,showHex:s=!1})=>{const o=ee(e),l=e==="light"?"var(--color-neutral-900)":"var(--color-neutral-50)",c=()=>e==="light"?"#F8FAFC":"#0F172A";return r.jsxs("div",{className:"w-full h-20 rounded-md flex flex-col justify-between p-3",style:{backgroundColor:o,color:l},children:[r.jsx("div",{className:"text-sm font-medium",children:a||`Background ${e}`}),s&&r.jsx("div",{className:"text-xs opacity-80",children:c()})]})},n=({category:e,showHex:a=!1})=>{const s=["50","100","200","300","400","500","600","700","800","900","950"];return r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"text-lg font-semibold capitalize",children:e}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2",children:s.map(o=>r.jsx(t,{category:e,shade:o,showHex:a},`${e}-${o}`))})]})},y=({showHex:e=!1})=>{const a=["success","info","warning","error"],s=["50","100","500","700","900"];return r.jsxs("div",{className:"space-y-4",children:[r.jsx("h3",{className:"text-lg font-semibold",children:"Semantic Colors"}),a.map(o=>r.jsxs("div",{className:"space-y-2",children:[r.jsx("h4",{className:"text-md font-medium capitalize",children:o}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2",children:s.map(l=>r.jsx(t,{category:o,shade:l,showHex:e},`${o}-${l}`))})]},o))]})},w=({showHex:e=!1})=>{const a=["light","dark"];return r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"text-lg font-semibold",children:"Surfaces"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:a.map(s=>r.jsx(K,{type:s,showHex:e},`surface-${s}`))})]})},v=({showHex:e=!1})=>{const a=["light","dark"];return r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"text-lg font-semibold",children:"Backgrounds"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2",children:a.map(s=>r.jsx(M,{type:s,showHex:e},`background-${s}`))})]})},Q=({showHex:e=!1})=>{const a=["primary","secondary","tertiary","neutral"];return r.jsxs("div",{className:"space-y-8 p-4",children:[a.map(s=>r.jsx(n,{category:s,showHex:e},s)),r.jsx(y,{showHex:e}),r.jsx(w,{showHex:e}),r.jsx(v,{showHex:e})]})};t.__docgenInfo={description:"",methods:[],displayName:"ColorSwatch",props:{category:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:""},shade:{required:!1,tsType:{name:"union",raw:"'50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950'",elements:[{name:"literal",value:"'50'"},{name:"literal",value:"'100'"},{name:"literal",value:"'200'"},{name:"literal",value:"'300'"},{name:"literal",value:"'400'"},{name:"literal",value:"'500'"},{name:"literal",value:"'600'"},{name:"literal",value:"'700'"},{name:"literal",value:"'800'"},{name:"literal",value:"'900'"},{name:"literal",value:"'950'"}]},description:"",defaultValue:{value:"'500'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showHex:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};K.__docgenInfo={description:"",methods:[],displayName:"SurfaceSwatch",props:{type:{required:!0,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},showHex:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};M.__docgenInfo={description:"",methods:[],displayName:"BackgroundSwatch",props:{type:{required:!0,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},showHex:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};n.__docgenInfo={description:"",methods:[],displayName:"ColorPalette",props:{category:{required:!0,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:""},showHex:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};y.__docgenInfo={description:"",methods:[],displayName:"SemanticColorPalette",props:{showHex:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};w.__docgenInfo={description:"",methods:[],displayName:"SurfacePalette",props:{showHex:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};v.__docgenInfo={description:"",methods:[],displayName:"BackgroundPalette",props:{showHex:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};Q.__docgenInfo={description:"",methods:[],displayName:"ColorSystem",props:{showHex:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const se={title:"Design System/Color System",component:Q,parameters:{layout:"fullscreen",docs:{description:{component:`
# Color System

The color system is a token-based system supporting B2B enterprise UI needs. It includes:

- Primary, Secondary, Tertiary Colors
- Neutral Colors (greys, whites, backgrounds, borders)
- Semantic Colors: Success, Info, Warning, Error
- Surface & Background Layers
- Light & Dark Theme Support

## Usage

Colors are available as CSS variables and can be used in your components:

\`\`\`css
.my-component {
  color: var(--color-primary-500);
  background-color: var(--color-surface-light);
}
\`\`\`

## Accessibility

All colors in this system are designed to meet WCAG 2.1 AA contrast requirements when used as recommended.

## Naming Convention

Colors follow a consistent naming pattern:
- \`--color-[category]-[shade]\` for main and semantic colors
- \`--color-[type]-[variant]\` for surfaces and backgrounds

## Best Practices

- Use semantic colors for status indicators
- Use neutral colors for text and borders
- Use surface colors for component backgrounds
- Use background colors for page backgrounds
- Ensure sufficient contrast between text and background
`}}},tags:["autodocs"],argTypes:{showHex:{control:"boolean"}}},i={args:{showHex:!0}},d={render:e=>r.jsx(n,{category:"primary",showHex:e.showHex}),args:{showHex:!0}},u={render:e=>r.jsx(n,{category:"secondary",showHex:e.showHex}),args:{showHex:!0}},m={render:e=>r.jsx(n,{category:"tertiary",showHex:e.showHex}),args:{showHex:!0}},p={render:e=>r.jsx(n,{category:"neutral",showHex:e.showHex}),args:{showHex:!0}},g={render:e=>r.jsx(y,{showHex:e.showHex}),args:{showHex:!0}},x={render:e=>r.jsx(w,{showHex:e.showHex}),args:{showHex:!0}},h={render:e=>r.jsx(v,{showHex:e.showHex}),args:{showHex:!0}},f={render:()=>r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[r.jsx(t,{category:"primary",shade:"500",label:"Primary (Default)",showHex:!0}),r.jsx(t,{category:"success",shade:"500",label:"Success",showHex:!0}),r.jsx(t,{category:"error",shade:"500",label:"Error",showHex:!0})]})};var H,C,S;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    showHex: true
  }
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var j,b,N;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <ColorPalette category="primary" showHex={args.showHex} />,
  args: {
    showHex: true
  }
}`,...(N=(b=d.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var k,T,P;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <ColorPalette category="secondary" showHex={args.showHex} />,
  args: {
    showHex: true
  }
}`,...(P=(T=u.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var $,_,q;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <ColorPalette category="tertiary" showHex={args.showHex} />,
  args: {
    showHex: true
  }
}`,...(q=(_=m.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var V,B,I;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <ColorPalette category="neutral" showHex={args.showHex} />,
  args: {
    showHex: true
  }
}`,...(I=(B=p.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var A,F,E;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <SemanticColorPalette showHex={args.showHex} />,
  args: {
    showHex: true
  }
}`,...(E=(F=g.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var D,U,z;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <SurfacePalette showHex={args.showHex} />,
  args: {
    showHex: true
  }
}`,...(z=(U=x.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var L,W,G;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <BackgroundPalette showHex={args.showHex} />,
  args: {
    showHex: true
  }
}`,...(G=(W=h.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var O,R,J;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4">\r
      <ColorSwatch category="primary" shade="500" label="Primary (Default)" showHex />\r
      <ColorSwatch category="success" shade="500" label="Success" showHex />\r
      <ColorSwatch category="error" shade="500" label="Error" showHex />\r
    </div>
}`,...(J=(R=f.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};const oe=["AllColors","PrimaryColors","SecondaryColors","TertiaryColors","NeutralColors","SemanticColors","Surfaces","Backgrounds","SingleColorExample"];export{i as AllColors,h as Backgrounds,p as NeutralColors,d as PrimaryColors,u as SecondaryColors,g as SemanticColors,f as SingleColorExample,x as Surfaces,m as TertiaryColors,oe as __namedExportsOrder,se as default};
