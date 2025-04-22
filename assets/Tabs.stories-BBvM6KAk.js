import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ne}from"./index-D4lIrffr.js";const K=({tabs:o,defaultActiveTab:G,variant:s="default",size:g="md",orientation:t="horizontal",fullWidth:J=!1,onChange:x,className:Q=""})=>{const[l,X]=ne.useState(G||(o.length>0?o[0].id:"")),Y=a=>{X(a),x&&x(a)},Z=`
    ${t==="horizontal"?"flex flex-col":"flex flex-row"}
    ${Q}
  `,ee=`
    ${t==="horizontal"?"flex flex-row":"flex flex-col"}
    ${s==="bordered"?"border border-neutral-200 dark:border-neutral-700 rounded-md overflow-hidden":""}
    ${s==="underlined"?"border-b border-neutral-200 dark:border-neutral-700":""}
  `,ae=a=>{const r=l===a.id,re=`
      flex items-center
      ${g==="sm"?"px-3 py-1.5 text-sm":g==="lg"?"px-6 py-3 text-base":"px-4 py-2 text-sm"}
      ${J&&t==="horizontal"?"flex-1 justify-center":""}
      ${a.disabled?"opacity-50 cursor-not-allowed":"cursor-pointer"}
      transition-colors duration-200
      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50
    `;let i="";return s==="default"?i=`
        ${r?"bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-300":"text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"}
        ${t==="horizontal"?"border-b-2":"border-l-2"}
        ${r?"border-primary-500":"border-transparent"}
      `:s==="bordered"?i=`
        ${r?"bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-300":"text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"}
        ${t==="horizontal"&&!r?"border-r border-neutral-200 dark:border-neutral-700":""}
        ${t==="vertical"&&!r?"border-b border-neutral-200 dark:border-neutral-700":""}
      `:s==="pills"?i=`
        rounded-md
        ${r?"bg-primary-500 text-white":"text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"}
        ${t==="horizontal"?"mr-2":"mb-2"}
      `:s==="underlined"&&(i=`
        ${r?"text-primary-700 dark:text-primary-300":"text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"}
        ${t==="horizontal"?"border-b-2":"border-l-2"}
        ${r?"border-primary-500":"border-transparent"}
      `),`${re} ${i}`},te=`
    p-4
    ${s==="bordered"?"border border-t-0 border-neutral-200 dark:border-neutral-700 rounded-b-md":""}
    ${t==="vertical"?"flex-1":""}
  `;return e.jsxs("div",{className:Z,role:"tablist","aria-orientation":t,children:[e.jsx("div",{className:ee,children:o.map(a=>e.jsxs("button",{id:`tab-${a.id}`,role:"tab","aria-selected":l===a.id,"aria-controls":`tabpanel-${a.id}`,className:ae(a),onClick:()=>!a.disabled&&Y(a.id),disabled:a.disabled,tabIndex:l===a.id?0:-1,children:[a.icon&&e.jsx("span",{className:"mr-2",children:a.icon}),a.label]},a.id))}),e.jsx("div",{className:te,children:o.map(a=>e.jsx("div",{id:`tabpanel-${a.id}`,role:"tabpanel","aria-labelledby":`tab-${a.id}`,hidden:l!==a.id,tabIndex:0,children:l===a.id&&a.content},a.id))})]})};K.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"The tabs to render"},defaultActiveTab:{required:!1,tsType:{name:"string"},description:"The ID of the initially active tab"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'pills' | 'underlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'pills'"},{name:"literal",value:"'underlined'"}]},description:"The variant of the tabs",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"The size of the tabs",defaultValue:{value:"'md'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"The orientation of the tabs",defaultValue:{value:"'horizontal'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether to stretch tabs to fill the container width",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:"Callback when a tab is changed"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}}}};const oe={title:"Navigation/Tabs",component:K,parameters:{layout:"centered",docs:{description:{component:`
# Tabs

The Tabs component is used to organize and allow navigation between groups of content that are related and at the same level of hierarchy.

## Features

- Multiple visual variants: default, bordered, pills, underlined
- Horizontal and vertical orientations
- Different sizes
- Support for icons
- Disabled state
- Keyboard navigation

## Accessibility

- Uses proper ARIA roles (tablist, tab, tabpanel)
- Supports keyboard navigation
- Maintains focus management
- Proper labeling with aria-labelledby and aria-controls

## Usage Guidelines

- Use tabs to organize content into logical sections
- Keep tab labels short and descriptive
- Ensure content within each tab is related to its label
- Avoid using too many tabs in a single component
- Consider using icons with labels for better recognition
`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","bordered","pills","underlined"],description:"The visual style of the tabs"},size:{control:"select",options:["sm","md","lg"],description:"The size of the tabs"},orientation:{control:"radio",options:["horizontal","vertical"],description:"The orientation of the tabs"},fullWidth:{control:"boolean",description:"Whether to stretch tabs to fill the container width"},tabs:{control:"object",description:"The tabs to render"},defaultActiveTab:{control:"text",description:"The ID of the initially active tab"}}},n=[{id:"tab1",label:"Overview",content:e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsx("h3",{children:"Overview"}),e.jsx("p",{children:"A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications."}),e.jsx("p",{children:"It serves as a single source of truth for an organization's design language, providing consistency across products."})]})},{id:"tab2",label:"Features",content:e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsx("h3",{children:"Features"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Consistent UI components"}),e.jsx("li",{children:"Responsive design"}),e.jsx("li",{children:"Accessibility built-in"}),e.jsx("li",{children:"Theme support"}),e.jsx("li",{children:"Comprehensive documentation"})]})]})},{id:"tab3",label:"Usage",content:e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsx("h3",{children:"Usage"}),e.jsx("p",{children:"Import components from the design system and use them in your application:"}),e.jsx("pre",{children:e.jsx("code",{children:`import { Button, Card } from 'design-system';

function MyComponent() {
  return (
    <Card>
      <h2>Hello World</h2>
      <Button variant="primary">Click Me</Button>
    </Card>
  );
}`})})]})},{id:"tab4",label:"Disabled Tab",content:e.jsx("p",{children:"This content should not be visible because the tab is disabled."}),disabled:!0}],se=[{id:"tab1",label:"Dashboard",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:e.jsx("path",{d:"M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"})}),content:e.jsx("p",{children:"Dashboard content"})},{id:"tab2",label:"Analytics",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:e.jsx("path",{d:"M7.5 14.5v-9a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5zm6 0V8a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v6.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zM1 14.5v-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"})}),content:e.jsx("p",{children:"Analytics content"})},{id:"tab3",label:"Settings",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:e.jsx("path",{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"})}),content:e.jsx("p",{children:"Settings content"})}],d={args:{tabs:n,variant:"default",size:"md",orientation:"horizontal",fullWidth:!1}},c={args:{tabs:n,variant:"bordered",size:"md",orientation:"horizontal",fullWidth:!1}},u={args:{tabs:n,variant:"pills",size:"md",orientation:"horizontal",fullWidth:!1}},m={args:{tabs:n,variant:"underlined",size:"md",orientation:"horizontal",fullWidth:!1}},h={args:{tabs:n,variant:"default",size:"md",orientation:"vertical",fullWidth:!1}},p={args:{tabs:n,variant:"default",size:"md",orientation:"horizontal",fullWidth:!0}},b={args:{tabs:n,variant:"default",size:"sm",orientation:"horizontal",fullWidth:!1}},f={args:{tabs:n,variant:"default",size:"lg",orientation:"horizontal",fullWidth:!1}},v={args:{tabs:se,variant:"default",size:"md",orientation:"horizontal",fullWidth:!1}};var z,y,T;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    variant: 'default',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: false
  }
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var w,j,W;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    variant: 'bordered',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: false
  }
}`,...(W=(j=c.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var $,k,C;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    variant: 'pills',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: false
  }
}`,...(C=(k=u.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var S,A,I;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    variant: 'underlined',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: false
  }
}`,...(I=(A=m.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var N,M,V;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    variant: 'default',
    size: 'md',
    orientation: 'vertical',
    fullWidth: false
  }
}`,...(V=(M=h.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var D,q,B;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    variant: 'default',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: true
  }
}`,...(B=(q=p.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var U,F,E;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    variant: 'default',
    size: 'sm',
    orientation: 'horizontal',
    fullWidth: false
  }
}`,...(E=(F=b.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var _,L,O;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    variant: 'default',
    size: 'lg',
    orientation: 'horizontal',
    fullWidth: false
  }
}`,...(O=(L=f.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var P,R,H;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    tabs: tabsWithIcons,
    variant: 'default',
    size: 'md',
    orientation: 'horizontal',
    fullWidth: false
  }
}`,...(H=(R=v.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const de=["Default","Bordered","Pills","Underlined","Vertical","FullWidth","Small","Large","WithIcons"];export{c as Bordered,d as Default,p as FullWidth,f as Large,u as Pills,b as Small,m as Underlined,h as Vertical,v as WithIcons,de as __namedExportsOrder,oe as default};
