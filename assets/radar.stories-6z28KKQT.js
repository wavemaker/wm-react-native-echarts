import{m as D}from"./meta-D88ILwuX.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./LegendVisualProvider-CgY2uWFN.js";import"./createSeriesDataSimply-BSDWH4oQ.js";const E={...D,title:"Charts/Radar",tags:["autodocs"]},t=[{name:"Sales",max:100},{name:"Marketing",max:100},{name:"Development",max:100},{name:"Support",max:100},{name:"Admin",max:100}],x=[80,60,75,55,70],a={args:{indicators:t,data:x}},r={args:{indicators:t,data:[{name:"Series A",value:[80,60,75,55,70]}],showLegend:!0}},e={args:{indicators:t,data:x,showHighlighter:!1}};var s,o,i,n,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    indicators: defaultIndicators,
    data: defaultData
  }
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source},description:{story:"Default radar chart.",...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.description}}};var c,m,p,l,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    indicators: defaultIndicators,
    data: [{
      name: 'Series A',
      value: [80, 60, 75, 55, 70]
    }],
    showLegend: true
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"Radar with legend (multiple named series).",...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.description}}};var g,h,f,S,w;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    indicators: defaultIndicators,
    data: defaultData,
    showHighlighter: false
  }
}`,...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:"Radar with highlighter disabled.",...(w=(S=e.parameters)==null?void 0:S.docs)==null?void 0:w.description}}};const M=["Default","ShowLegend","ShowHighlighter"];export{a as Default,e as ShowHighlighter,r as ShowLegend,M as __namedExportsOrder,E as default};
