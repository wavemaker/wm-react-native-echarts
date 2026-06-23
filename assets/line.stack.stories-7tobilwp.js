import{m as f}from"./meta-CmcNvKTP.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-DrjqnKLG.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-B-FBt8Sx.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./cartesian-C7nMcwZE.js";const I={...f,title:"Charts/Line/Stack"},a=[{name:"Series A",data:[40,82,91,74,90,88]},{name:"Series B",data:[20,62,71,54,70,68]},{name:"Series C",data:[30,42,51,64,50,58]}],s=["#F2A65A","#6F8F72","#132440"],t={args:{data:a,showLegend:!0,colors:s}},e={args:{data:a,stack:"total",showLegend:!0,colors:s}},r={args:{data:a,stack:"total",stackNormalize:!0,showLegend:!0,colors:s}};var o,i,c,n,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source},description:{story:'Multiple series stacked: stack="total". Lines stack on top of each other.',...(k=(u=e.parameters)==null?void 0:u.docs)==null?void 0:k.description}}};var g,S,h,w,L;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: multipleSeries,
    stack: 'total',
    stackNormalize: true,
    showLegend: true,
    colors
  }
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source},description:{story:'Stacked and normalized: stack="total" with stackNormalize={true}. Shows percentages (0–100%).',...(L=(w=r.parameters)==null?void 0:w.docs)==null?void 0:L.description}}};const J=["Default","Stacked","StackNormalized"];export{t as Default,r as StackNormalized,e as Stacked,J as __namedExportsOrder,I as default};
