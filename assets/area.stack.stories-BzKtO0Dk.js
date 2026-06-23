import{m as z}from"./meta-GyzeNtZ1.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-DrjqnKLG.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-B-FBt8Sx.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./area.args-CMRTFbmo.js";import"./cartesian-C7nMcwZE.js";const J={...z,title:"Charts/Area/Stack"},a=[{name:"Series A",data:[40,82,91,74,90,88]},{name:"Series B",data:[20,62,71,54,70,68]},{name:"Series C",data:[30,42,51,64,50,58]}],o=["#F2A65A","#6F8F72","#132440"],e={args:{data:a,showLegend:!0,colors:o}},t={args:{data:a,stack:"total",showLegend:!0,colors:o}},r={args:{data:a,stack:"total",stackNormalize:!0,showLegend:!0,areaFill:"solid",colors:o}};var s,i,c,n,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    data: multipleSeries,
    showLegend: true,
    colors: colors
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"Multiple series without stacking (default).",...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.description}}};var p,d,l,u,k;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data: multipleSeries,
    stack: 'total',
    showLegend: true,
    colors: colors
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source},description:{story:'Multiple series stacked: stack="total". Areas stack on top of each other.',...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.description}}};var g,S,h,w,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: multipleSeries,
    stack: 'total',
    stackNormalize: true,
    showLegend: true,
    areaFill: 'solid',
    colors: colors
  }
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source},description:{story:'Stacked and normalized: stack="total" with stackNormalize={true}. Shows percentages (0–100%).',...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.description}}};const K=["Default","Stacked","StackNormalized"];export{e as Default,r as StackNormalized,t as Stacked,K as __namedExportsOrder,J as default};
