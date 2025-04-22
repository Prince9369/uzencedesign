import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./index-D4lIrffr.js";const C=({label:x,icon:c,href:n,active:r,disabled:s,onClick:u,children:t,variant:m="default",isSubmenuOpen:i,toggleSubmenu:p})=>{const h=`
    flex items-center px-4 py-2 text-sm font-medium
    transition-colors duration-200
    ${s?"opacity-50 cursor-not-allowed":"cursor-pointer"}
  `;let o="";m==="default"?o=`
      ${r?"text-primary-700 dark:text-primary-300":"text-neutral-700 dark:text-neutral-300"}
      ${!s&&!r?"hover:text-primary-600 dark:hover:text-primary-400":""}
    `:m==="bordered"?o=`
      ${r?"border-b-2 border-primary-500 text-primary-700 dark:text-primary-300":"border-b-2 border-transparent text-neutral-700 dark:text-neutral-300"}
      ${!s&&!r?"hover:border-primary-300 hover:text-primary-600 dark:hover:text-primary-400":""}
    `:m==="filled"&&(o=`
      ${r?"bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200":"text-neutral-700 dark:text-neutral-300"}
      ${!s&&!r?"hover:bg-neutral-100 dark:hover:bg-neutral-800":""}
      rounded-md
    `);const a=l=>{if(s){l.preventDefault();return}t&&t.length>0?(l.preventDefault(),p==null||p()):u&&u(l)},v=e.jsxs(e.Fragment,{children:[c&&e.jsx("span",{className:"mr-2",children:c}),e.jsx("span",{children:x}),t&&t.length>0&&e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:`w-4 h-4 ml-1 transition-transform duration-200 ${i?"transform rotate-180":""}`,children:e.jsx("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"})})]});return e.jsxs("div",{className:"relative",children:[n&&!s&&!(t!=null&&t.length)?e.jsx("a",{href:n,className:`${h} ${o}`,onClick:u,"aria-current":r?"page":void 0,children:v}):e.jsx("button",{className:`${h} ${o}`,onClick:a,disabled:s,"aria-current":r?"page":void 0,"aria-expanded":t&&t.length>0?i:void 0,children:v}),t&&t.length>0&&i&&e.jsx("div",{className:"absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-black ring-opacity-5 z-10",children:e.jsx("div",{className:"py-1",role:"menu","aria-orientation":"vertical",children:t.map(l=>e.jsx(C,{...l,variant:"default"},l.id))})})]})},G=({brand:x,items:c,rightContent:n,variant:r="default",sticky:s=!1,className:u=""})=>{const[t,m]=T.useState(!1),[i,p]=T.useState(null),h=a=>{p(v=>v===a?null:a)},o=`
    bg-white dark:bg-neutral-900
    ${r==="bordered"?"border-b border-neutral-200 dark:border-neutral-700":""}
    ${s?"sticky top-0 z-50":""}
    ${u}
  `;return e.jsxs("nav",{className:o,children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[x&&e.jsx("div",{className:"flex-shrink-0 flex items-center",children:x}),e.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:space-x-2",children:c.map(a=>e.jsx(C,{...a,variant:r,isSubmenuOpen:i===a.id,toggleSubmenu:()=>h(a.id)},a.id))})]}),n&&e.jsx("div",{className:"hidden sm:flex sm:items-center",children:n}),e.jsx("div",{className:"flex items-center sm:hidden",children:e.jsxs("button",{type:"button",className:"inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500","aria-expanded":t,onClick:()=>m(!t),children:[e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx("svg",{className:`${t?"hidden":"block"} h-6 w-6`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})}),e.jsx("svg",{className:`${t?"block":"hidden"} h-6 w-6`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})]})})]})}),e.jsxs("div",{className:`${t?"block":"hidden"} sm:hidden`,children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:c.map(a=>e.jsx("div",{className:"px-3",children:e.jsx(C,{...a,variant:"filled",isSubmenuOpen:i===a.id,toggleSubmenu:()=>h(a.id)})},a.id))}),n&&e.jsx("div",{className:"pt-4 pb-3 border-t border-neutral-200 dark:border-neutral-700",children:e.jsx("div",{className:"px-3",children:n})})]})]})};C.__docgenInfo={description:"",methods:[],displayName:"TopNavItem",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'filled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'filled'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},isSubmenuOpen:{required:!1,tsType:{name:"boolean"},description:""},toggleSubmenu:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};G.__docgenInfo={description:"",methods:[],displayName:"TopNav",props:{brand:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The brand/logo component"},items:{required:!0,tsType:{name:"Array",elements:[{name:"TopNavItem"}],raw:"TopNavItem[]"},description:"The navigation items"},rightContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional content to display on the right side"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'filled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'filled'"}]},description:"The variant of the navigation",defaultValue:{value:"'default'",computed:!1}},sticky:{required:!1,tsType:{name:"boolean"},description:"Whether the navigation is sticky",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}}}};const P={title:"Navigation/TopNav",component:G,parameters:{layout:"fullscreen",docs:{description:{component:`
# Top Navigation Bar

The TopNav component provides a responsive navigation header that includes support for branding, navigation links, and other content.

## Features

- Responsive design with mobile menu
- Support for dropdown submenus
- Multiple visual variants
- Support for active and disabled states
- Customizable right-side content
- Sticky option

## Accessibility

- Uses appropriate ARIA attributes (aria-current, aria-expanded)
- Supports keyboard navigation
- Mobile menu toggle has proper labeling

## Usage Guidelines

- Use for primary navigation across an application
- Keep navigation items concise and clear
- Limit the number of top-level items to avoid overcrowding
- Consider using icons with labels for better recognition
- Use the active state to indicate the current page
`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","bordered","filled"],description:"The visual style of the navigation"},sticky:{control:"boolean",description:"Whether the navigation sticks to the top of the viewport"},items:{control:"object",description:"The navigation items"},brand:{control:"object",description:"The brand/logo component"},rightContent:{control:"object",description:"Optional content to display on the right side"}}},d=[{id:"home",label:"Home",href:"#",active:!0},{id:"features",label:"Features",href:"#"},{id:"pricing",label:"Pricing",href:"#"},{id:"resources",label:"Resources",children:[{id:"documentation",label:"Documentation",href:"#"},{id:"tutorials",label:"Tutorials",href:"#"},{id:"blog",label:"Blog",href:"#"}]},{id:"about",label:"About",href:"#"},{id:"contact",label:"Contact",href:"#",disabled:!0}],f=()=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("svg",{className:"h-8 w-8 text-primary-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),e.jsx("span",{className:"ml-2 text-xl font-bold text-neutral-900 dark:text-white",children:"UZENCE"})]}),g=()=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("button",{className:"text-sm text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400",children:"Sign In"}),e.jsx("button",{className:"px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",children:"Sign Up"})]}),b={args:{brand:e.jsx(f,{}),items:d,rightContent:e.jsx(g,{}),variant:"default",sticky:!1}},y={args:{brand:e.jsx(f,{}),items:d,rightContent:e.jsx(g,{}),variant:"bordered",sticky:!1}},j={args:{brand:e.jsx(f,{}),items:d,rightContent:e.jsx(g,{}),variant:"filled",sticky:!1}},k={args:{brand:e.jsx(f,{}),items:d,rightContent:e.jsx(g,{}),variant:"default",sticky:!0}},N={args:{brand:e.jsx(f,{}),items:d,variant:"default",sticky:!1}},w={args:{items:d,rightContent:e.jsx(g,{}),variant:"default",sticky:!1}};var R,S,$;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    brand: <Logo />,
    items: defaultItems,
    rightContent: <RightContent />,
    variant: 'default',
    sticky: false
  }
}`,...($=(S=b.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var I,L,M;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    brand: <Logo />,
    items: defaultItems,
    rightContent: <RightContent />,
    variant: 'bordered',
    sticky: false
  }
}`,...(M=(L=y.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var B,q,O;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    brand: <Logo />,
    items: defaultItems,
    rightContent: <RightContent />,
    variant: 'filled',
    sticky: false
  }
}`,...(O=(q=j.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var W,A,U;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    brand: <Logo />,
    items: defaultItems,
    rightContent: <RightContent />,
    variant: 'default',
    sticky: true
  }
}`,...(U=(A=k.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var _,z,D;N.parameters={...N.parameters,docs:{...(_=N.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    brand: <Logo />,
    items: defaultItems,
    variant: 'default',
    sticky: false
  }
}`,...(D=(z=N.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var E,F,V;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    rightContent: <RightContent />,
    variant: 'default',
    sticky: false
  }
}`,...(V=(F=w.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const Z=["Default","Bordered","Filled","Sticky","WithoutRightContent","WithoutBrand"];export{y as Bordered,b as Default,j as Filled,k as Sticky,w as WithoutBrand,N as WithoutRightContent,Z as __namedExportsOrder,P as default};
