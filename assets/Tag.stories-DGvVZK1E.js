import{j as r}from"./jsx-runtime-D_zvdyIk.js";const a=({children:ae,variant:f="solid",colorScheme:y="primary",size:s="md",rounded:te=!1,disabled:t=!1,leftIcon:T,rightIcon:x,onClick:o,removable:oe=!1,onRemove:w,className:se=""})=>{const ne=`
    inline-flex items-center
    ${s==="sm"?"text-xs px-2 py-0.5":s==="lg"?"text-base px-4 py-2":"text-sm px-3 py-1"}
    ${te?"rounded-full":"rounded-md"}
    ${t?"opacity-60 cursor-not-allowed":o?"cursor-pointer":""}
    transition-colors duration-200
  `;let e="";if(f==="solid")switch(y){case"primary":e="bg-primary-500 text-white hover:bg-primary-600";break;case"secondary":e="bg-secondary-500 text-white hover:bg-secondary-600";break;case"tertiary":e="bg-tertiary-500 text-white hover:bg-tertiary-600";break;case"success":e="bg-success-500 text-white hover:bg-success-600";break;case"info":e="bg-info-500 text-white hover:bg-info-600";break;case"warning":e="bg-warning-500 text-white hover:bg-warning-600";break;case"error":e="bg-error-500 text-white hover:bg-error-600";break;case"neutral":e="bg-neutral-500 text-white hover:bg-neutral-600";break}else if(f==="outline")switch(y){case"primary":e="border border-primary-500 text-primary-700 hover:bg-primary-50";break;case"secondary":e="border border-secondary-500 text-secondary-700 hover:bg-secondary-50";break;case"tertiary":e="border border-tertiary-500 text-tertiary-700 hover:bg-tertiary-50";break;case"success":e="border border-success-500 text-success-700 hover:bg-success-50";break;case"info":e="border border-info-500 text-info-700 hover:bg-info-50";break;case"warning":e="border border-warning-500 text-warning-700 hover:bg-warning-50";break;case"error":e="border border-error-500 text-error-700 hover:bg-error-50";break;case"neutral":e="border border-neutral-500 text-neutral-700 hover:bg-neutral-50";break}else if(f==="subtle")switch(y){case"primary":e="bg-primary-100 text-primary-800 hover:bg-primary-200";break;case"secondary":e="bg-secondary-100 text-secondary-800 hover:bg-secondary-200";break;case"tertiary":e="bg-tertiary-100 text-tertiary-800 hover:bg-tertiary-200";break;case"success":e="bg-success-100 text-success-800 hover:bg-success-200";break;case"info":e="bg-info-100 text-info-800 hover:bg-info-200";break;case"warning":e="bg-warning-100 text-warning-800 hover:bg-warning-200";break;case"error":e="bg-error-100 text-error-800 hover:bg-error-200";break;case"neutral":e="bg-neutral-100 text-neutral-800 hover:bg-neutral-200";break}const ie=n=>{!t&&o&&o(n)},le=n=>{n.stopPropagation(),!t&&w&&w(n)};return r.jsxs("div",{className:`${ne} ${e} ${se}`,onClick:ie,role:o?"button":void 0,tabIndex:o&&!t?0:void 0,"aria-disabled":t,children:[T&&r.jsx("span",{className:"mr-1",children:T}),r.jsx("span",{children:ae}),x&&r.jsx("span",{className:"ml-1",children:x}),oe&&r.jsx("button",{type:"button",className:`
            ml-1.5 
            ${s==="sm"?"w-3 h-3":s==="lg"?"w-5 h-5":"w-4 h-4"}
            flex items-center justify-center
            rounded-full
            hover:bg-black/10 dark:hover:bg-white/10
            focus:outline-none focus:ring-2 focus:ring-offset-1
            ${t?"cursor-not-allowed":"cursor-pointer"}
          `,onClick:le,disabled:t,"aria-label":"Remove",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-full h-full",children:r.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]})};a.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the tag"},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline' | 'subtle'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'subtle'"}]},description:"The variant of the tag",defaultValue:{value:"'solid'",computed:!1}},colorScheme:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"The color scheme of the tag",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"The size of the tag",defaultValue:{value:"'md'",computed:!1}},rounded:{required:!1,tsType:{name:"boolean"},description:"Whether the tag is rounded",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the tag is disabled",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon to display before the content"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon to display after the content"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when the tag is clicked"},removable:{required:!1,tsType:{name:"boolean"},description:"Whether the tag is removable",defaultValue:{value:"false",computed:!1}},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when the remove button is clicked"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}}}};const de={title:"Data Display/Tag",component:a,parameters:{layout:"centered",docs:{description:{component:`
# Tag / Badge / Pill

The Tag component is used to label, categorize, or organize items using keywords that describe them.

## Features

- Multiple variants: solid, outline, and subtle
- Various color schemes
- Different sizes
- Support for icons
- Removable option
- Clickable option
- Rounded option for pill-like appearance
- Disabled state

## Accessibility

- Uses appropriate ARIA attributes
- Maintains focus management
- Provides visual feedback for interactive states

## Usage Guidelines

- Use tags to categorize content or represent attributes
- Keep tag text concise
- Use color consistently to represent meaning
- Consider using the removable option for tags that can be dismissed
- Use the clickable option for tags that navigate or filter content
`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","outline","subtle"],description:"The visual style of the tag"},colorScheme:{control:"select",options:["primary","secondary","tertiary","success","info","warning","error","neutral"],description:"The color scheme of the tag"},size:{control:"select",options:["sm","md","lg"],description:"The size of the tag"},rounded:{control:"boolean",description:"Whether the tag has fully rounded corners (pill style)"},disabled:{control:"boolean",description:"Whether the tag is disabled"},removable:{control:"boolean",description:"Whether the tag has a remove button"},children:{control:"text",description:"The content of the tag"}}},i={args:{children:"Default Tag",variant:"solid",colorScheme:"primary",size:"md"}},l={args:{children:"Outline Tag",variant:"outline",colorScheme:"primary",size:"md"}},c={args:{children:"Subtle Tag",variant:"subtle",colorScheme:"primary",size:"md"}},d={args:{children:"Rounded Tag",variant:"solid",colorScheme:"primary",size:"md",rounded:!0}},m={args:{children:"With Icon",variant:"solid",colorScheme:"primary",size:"md",leftIcon:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-4 h-4",children:r.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})})}},u={args:{children:"Removable Tag",variant:"solid",colorScheme:"primary",size:"md",removable:!0,onRemove:()=>alert("Tag removed")}},g={args:{children:"Clickable Tag",variant:"solid",colorScheme:"primary",size:"md",onClick:()=>alert("Tag clicked")}},p={args:{children:"Disabled Tag",variant:"solid",colorScheme:"primary",size:"md",disabled:!0}},h={args:{children:"Small Tag",variant:"solid",colorScheme:"primary",size:"sm"}},b={args:{children:"Large Tag",variant:"solid",colorScheme:"primary",size:"lg"}},v={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.jsx(a,{colorScheme:"primary",children:"Primary"}),r.jsx(a,{colorScheme:"secondary",children:"Secondary"}),r.jsx(a,{colorScheme:"tertiary",children:"Tertiary"}),r.jsx(a,{colorScheme:"success",children:"Success"}),r.jsx(a,{colorScheme:"info",children:"Info"}),r.jsx(a,{colorScheme:"warning",children:"Warning"}),r.jsx(a,{colorScheme:"error",children:"Error"}),r.jsx(a,{colorScheme:"neutral",children:"Neutral"})]})};var S,k,R;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Default Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md'
  }
}`,...(R=(k=i.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var z,j,N;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Outline Tag',
    variant: 'outline',
    colorScheme: 'primary',
    size: 'md'
  }
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var C,M,E;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Subtle Tag',
    variant: 'subtle',
    colorScheme: 'primary',
    size: 'md'
  }
}`,...(E=(M=c.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var L,D,q;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Rounded Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
    rounded: true
  }
}`,...(q=(D=d.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var W,I,V;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'With Icon',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
    leftIcon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">\r
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />\r
      </svg>
  }
}`,...(V=(I=m.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var $,B,O;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: 'Removable Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
    removable: true,
    onRemove: () => alert('Tag removed')
  }
}`,...(O=(B=u.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var H,P,U;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Clickable Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
    onClick: () => alert('Tag clicked')
  }
}`,...(U=(P=g.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var A,_,F;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
    disabled: true
  }
}`,...(F=(_=p.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var G,K,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Small Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'sm'
  }
}`,...(J=(K=h.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,X,Y;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: 'Large Tag',
    variant: 'solid',
    colorScheme: 'primary',
    size: 'lg'
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">\r
      <Tag colorScheme="primary">Primary</Tag>\r
      <Tag colorScheme="secondary">Secondary</Tag>\r
      <Tag colorScheme="tertiary">Tertiary</Tag>\r
      <Tag colorScheme="success">Success</Tag>\r
      <Tag colorScheme="info">Info</Tag>\r
      <Tag colorScheme="warning">Warning</Tag>\r
      <Tag colorScheme="error">Error</Tag>\r
      <Tag colorScheme="neutral">Neutral</Tag>\r
    </div>
}`,...(re=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const me=["Default","Outline","Subtle","Rounded","WithLeftIcon","Removable","Clickable","Disabled","Small","Large","ColorVariants"];export{g as Clickable,v as ColorVariants,i as Default,p as Disabled,b as Large,l as Outline,u as Removable,d as Rounded,h as Small,c as Subtle,m as WithLeftIcon,me as __namedExportsOrder,de as default};
