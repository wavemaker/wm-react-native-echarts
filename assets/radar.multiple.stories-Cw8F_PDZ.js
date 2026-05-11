import{m as S}from"./meta-fj1QTGcU.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./legend-position-CLb_FM1L.js";import"./createSeriesDataSimply-DaXRNxVR.js";const C={...S,title:"Charts/Radar/Multiple"},l=[{name:"Sales",max:100},{name:"Marketing",max:100},{name:"Development",max:100},{name:"Support",max:100},{name:"Admin",max:100}],u=[{name:"Series A",value:[80,60,75,55,70]},{name:"Series B",value:[50,70,65,80,60]},{name:"Series C",value:[70,50,85,45,75]}],g=["#F2A65A","#6F8F72","#132440"],e={args:{indicators:l,data:u,colors:g}},r={args:{indicators:l,data:u,showLegend:!0,colors:g}};var t,a,s,o,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    indicators,
    data: multipleSeries,
    colors
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source},description:{story:"Multiple series without legend.",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.description}}};var n,m,p,c,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    indicators,
    data: multipleSeries,
    showLegend: true,
    colors
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"Multiple series with legend.",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};const W=["Default","WithLegend"];export{e as Default,r as WithLegend,W as __namedExportsOrder,C as default};
