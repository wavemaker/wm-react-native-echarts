import{m as z}from"./meta-DQP0OanO.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-CwF2pesq.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-9dos4XC1.js";import"./dataSample-YMfQ_6XR.js";import"./labelHelper-CzHPQigS.js";import"./sectorHelper-DjU9oWJ9.js";import"./cartesian-C25Uk8mH.js";const v={...z,title:"Charts/Column/Stack"},a=[{name:"Series A",data:[40,82,91,74,90,88]},{name:"Series B",data:[20,62,71,54,70,68]},{name:"Series C",data:[30,42,51,64,50,58]}],s=["#F2A65A","#6F8F72","#132440"],t={args:{data:a,showLegend:!0,colors:s}},e={args:{data:a,stack:"total",showLegend:!0,colors:s}},r={args:{data:a,stack:"total",stackNormalize:!0,showLegend:!0,colors:s}};var o,c,i,n,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    data: multipleSeries,
    showLegend: true,
    colors
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source},description:{story:"Multiple series without stacking (default).",...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.description}}};var p,d,l,u,k;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data: multipleSeries,
    stack: 'total',
    showLegend: true,
    colors
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source},description:{story:'Multiple series stacked: stack="total". Columns stack on top of each other.',...(k=(u=e.parameters)==null?void 0:u.docs)==null?void 0:k.description}}};var g,S,h,w,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: multipleSeries,
    stack: 'total',
    stackNormalize: true,
    showLegend: true,
    colors
  }
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source},description:{story:'Stacked and normalized: stack="total" with stackNormalize={true}. Shows percentages (0–100%).',...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.description}}};const G=["Default","Stacked","StackNormalized"];export{t as Default,r as StackNormalized,e as Stacked,G as __namedExportsOrder,v as default};
