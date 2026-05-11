import{m as z}from"./meta-CEPI5cI_.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-D69Pifby.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-fh8zqSy2.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./dataSample-LQN_tCZn.js";import"./area.args-DizI-4Mn.js";const H={...z,title:"Charts/Area/Stack"},a=[{name:"Series A",data:[40,82,91,74,90,88]},{name:"Series B",data:[20,62,71,54,70,68]},{name:"Series C",data:[30,42,51,64,50,58]}],s=["#F2A65A","#6F8F72","#132440"],e={args:{data:a,showLegend:!0,colors:s}},t={args:{data:a,stack:"total",showLegend:!0,colors:s}},r={args:{data:a,stack:"total",stackNormalize:!0,showLegend:!0,areaFill:"solid",colors:s}};var o,i,c,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source},description:{story:'Stacked and normalized: stack="total" with stackNormalize={true}. Shows percentages (0–100%).',...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.description}}};const I=["Default","Stacked","StackNormalized"];export{e as Default,r as StackNormalized,t as Stacked,I as __namedExportsOrder,H as default};
