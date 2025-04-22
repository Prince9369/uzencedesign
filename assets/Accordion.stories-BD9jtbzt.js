import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as U}from"./index-D4lIrffr.js";const C=({id:s,title:f,children:h,disabled:i=!1,isExpanded:r,onToggle:g,expandIcon:l="+",collapseIcon:b="-",variant:a="default",size:t="md"})=>{const v=`
    flex justify-between items-center w-full 
    ${i?"opacity-50 cursor-not-allowed":"cursor-pointer"}
    ${a==="bordered"?"border-b border-neutral-200 dark:border-neutral-700":""}
    ${a==="ghost"?"hover:bg-neutral-100 dark:hover:bg-neutral-800":"hover:bg-neutral-50 dark:hover:bg-neutral-900"}
    ${t==="sm"?"py-2 px-3 text-sm":t==="lg"?"py-4 px-5 text-lg":"py-3 px-4"}
    transition-colors duration-200
  `,_=`
    ${r?"max-h-screen opacity-100":"max-h-0 opacity-0 overflow-hidden"}
    transition-all duration-300 ease-in-out
    ${t==="sm"?"px-3 pb-2":t==="lg"?"px-5 pb-4":"px-4 pb-3"}
  `;return e.jsxs("div",{className:`
      ${a==="bordered"?"border border-neutral-200 dark:border-neutral-700 rounded-md mb-2":"mb-1"}
      ${a==="default"?"bg-white dark:bg-neutral-800 shadow-sm rounded-md":""}
      overflow-hidden
    `,children:[e.jsxs("button",{id:`accordion-header-${s}`,"aria-expanded":r,"aria-controls":`accordion-panel-${s}`,className:v,onClick:i?void 0:g,disabled:i,children:[e.jsx("span",{children:f}),e.jsx("span",{className:"text-neutral-500 dark:text-neutral-400 ml-2",children:r?b:l})]}),e.jsx("div",{id:`accordion-panel-${s}`,role:"region","aria-labelledby":`accordion-header-${s}`,className:_,hidden:!r,children:h})]})},W=({items:s,allowMultiple:f=!1,variant:h="default",size:i="md",className:r=""})=>{const[g,l]=U.useState(s.filter(a=>a.defaultExpanded).map(a=>a.id)),b=a=>{l(f?t=>t.includes(a)?t.filter(v=>v!==a):[...t,a]:t=>t.includes(a)?[]:[a])};return e.jsx("div",{className:`accordion ${r}`,children:s.map(a=>e.jsx(C,{...a,isExpanded:g.includes(a.id),onToggle:()=>b(a.id),variant:h,size:i},a.id))})};C.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the accordion item"},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The title or header of the accordion item"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be displayed when the accordion is expanded"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the accordion item is disabled",defaultValue:{value:"false",computed:!1}},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"Whether the accordion item is expanded by default"},expandIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon to display in the header when collapsed",defaultValue:{value:"'+'",computed:!1}},collapseIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon to display in the header when expanded",defaultValue:{value:"'-'",computed:!1}},isExpanded:{required:!0,tsType:{name:"boolean"},description:""},onToggle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'ghost'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};W.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItemProps"}],raw:"AccordionItemProps[]"},description:"The accordion items to render"},allowMultiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple items can be expanded at once",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'ghost'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'ghost'"}]},description:"The variant of the accordion",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"The size of the accordion",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}}}};const O={title:"Data Display/Accordion",component:W,parameters:{layout:"centered",docs:{description:{component:`
# Accordion

The Accordion component is used to display collapsible content panels for presenting information in a limited amount of space.

## Features

- Support for single or multiple expanded items
- Customizable appearance with different variants and sizes
- Keyboard navigation and ARIA roles for accessibility
- Support for custom expand/collapse icons
- Disabled state

## Accessibility

- Uses appropriate ARIA attributes (aria-expanded, aria-controls, aria-labelledby)
- Supports keyboard navigation
- Maintains focus management

## Usage Guidelines

- Use accordions to organize related information into manageable sections
- Keep headers short and descriptive
- Ensure content within each panel is related to its header
- Consider using other components for very small amounts of content
`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","bordered","ghost"],description:"The visual style of the accordion"},size:{control:"select",options:["sm","md","lg"],description:"The size of the accordion"},allowMultiple:{control:"boolean",description:"Whether multiple items can be expanded at once"},items:{control:"object",description:"The accordion items to render"}}},n=[{id:"1",title:"What is a design system?",children:e.jsxs("div",{className:"prose dark:prose-invert",children:[e.jsx("p",{children:"A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications."}),e.jsx("p",{children:"It serves as a single source of truth for an organization's design language, providing consistency across products."})]})},{id:"2",title:"Why use a design system?",children:e.jsxs("div",{className:"prose dark:prose-invert",children:[e.jsx("p",{children:"Design systems help teams:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Build products faster with pre-built, reusable components"}),e.jsx("li",{children:"Maintain consistency across different products and platforms"}),e.jsx("li",{children:"Scale design processes efficiently"}),e.jsx("li",{children:"Improve collaboration between designers and developers"})]})]}),defaultExpanded:!0},{id:"3",title:"How to implement a design system?",children:e.jsxs("div",{className:"prose dark:prose-invert",children:[e.jsx("p",{children:"Implementing a design system typically involves:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Auditing existing design patterns"}),e.jsx("li",{children:"Defining design principles and guidelines"}),e.jsx("li",{children:"Creating reusable components"}),e.jsx("li",{children:"Documenting usage and best practices"}),e.jsx("li",{children:"Establishing governance processes"})]})]})},{id:"4",title:"This item is disabled",children:e.jsx("p",{children:"You cannot expand this item because it is disabled."}),disabled:!0}],o={args:{items:n,variant:"default",size:"md",allowMultiple:!1}},d={args:{items:n,variant:"bordered",size:"md",allowMultiple:!1}},c={args:{items:n,variant:"ghost",size:"md",allowMultiple:!1}},u={args:{items:n,variant:"default",size:"sm",allowMultiple:!1}},p={args:{items:n,variant:"default",size:"lg",allowMultiple:!1}},m={args:{items:n,variant:"default",size:"md",allowMultiple:!0}};var x,y,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'default',
    size: 'md',
    allowMultiple: false
  }
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var j,T,I;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'bordered',
    size: 'md',
    allowMultiple: false
  }
}`,...(I=(T=d.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var A,N,R;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'ghost',
    size: 'md',
    allowMultiple: false
  }
}`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var z,M,q;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'default',
    size: 'sm',
    allowMultiple: false
  }
}`,...(q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var S,$,k;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'default',
    size: 'lg',
    allowMultiple: false
  }
}`,...(k=($=p.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var V,D,E;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: 'default',
    size: 'md',
    allowMultiple: true
  }
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const K=["Default","Bordered","Ghost","Small","Large","AllowMultiple"];export{m as AllowMultiple,d as Bordered,o as Default,c as Ghost,p as Large,u as Small,K as __namedExportsOrder,O as default};
