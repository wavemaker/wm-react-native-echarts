import{m as z}from"./meta-Cg36X7qY.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-Bw0oTUdV.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-B8VaOuT_.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-VB-o03U1.js";import"./dataSample-C3ms-4cx.js";import"./createSeriesData-VE2uRjI9.js";import"./CoordinateSystem-C8P-Cleg.js";import"./sectorHelper-e2TAJmFq.js";import"./cartesian-C7nMcwZE.js";const I={...z,title:"Charts/Column/Stack"},a=[{name:"Series A",data:[40,82,91,74,90,88]},{name:"Series B",data:[20,62,71,54,70,68]},{name:"Series C",data:[30,42,51,64,50,58]}],o=["#F2A65A","#6F8F72","#132440"],t={args:{data:a,showLegend:!0,colors:o}},e={args:{data:a,stack:"total",showLegend:!0,colors:o}},r={args:{data:a,stack:"total",stackNormalize:!0,showLegend:!0,colors:o}};var s,i,c,n,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    data: multipleSeries,
    showLegend: true,
    colors
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"Multiple series without stacking (default).",...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.description}}};var p,d,l,u,k;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source},description:{story:'Stacked and normalized: stack="total" with stackNormalize={true}. Shows percentages (0–100%).',...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.description}}};const J=["Default","Stacked","StackNormalized"];export{t as Default,r as StackNormalized,e as Stacked,J as __namedExportsOrder,I as default};
