import{m as D}from"./meta-GyzeNtZ1.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-DrjqnKLG.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-B-FBt8Sx.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./area.args-CMRTFbmo.js";import"./cartesian-C7nMcwZE.js";const Z={...D,title:"Charts/Area/Fill"},i=[40,82,91,74,120,95],r={args:{data:i,areaFill:"gradient"}},a={args:{data:i,areaFill:"transparent"}},e={args:{data:i,areaFill:"solid"}},t={args:{data:i,areaFill:"gradient",areaOpacity:.3}},s={args:{data:i,areaFill:"gradient",areaOpacity:1}};var o,p,n,c,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    data,
    areaFill: "gradient"
  }
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source},description:{story:"Default fill: gradient from series color (with areaOpacity) to transparent.",...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};var d,m,g,u,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data,
    areaFill: 'transparent'
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:'areaFill="transparent" — flat fill with areaOpacity applied.',...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.description}}};var F,O,f,S,h;e.parameters={...e.parameters,docs:{...(F=e.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    areaFill: 'solid'
  }
}`,...(f=(O=e.parameters)==null?void 0:O.docs)==null?void 0:f.source},description:{story:'areaFill="solid" — fully opaque fill (ignores areaOpacity).',...(h=(S=e.parameters)==null?void 0:S.docs)==null?void 0:h.description}}};var w,_,x,G,L;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data,
    areaFill: 'gradient',
    areaOpacity: 0.3
  }
}`,...(x=(_=t.parameters)==null?void 0:_.docs)==null?void 0:x.source},description:{story:"areaOpacity={0.3} — lighter fill (gradient).",...(L=(G=t.parameters)==null?void 0:G.docs)==null?void 0:L.description}}};var T,b,q,A,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data,
    areaFill: 'gradient',
    areaOpacity: 1
  }
}`,...(q=(b=s.parameters)==null?void 0:b.docs)==null?void 0:q.source},description:{story:"areaOpacity={1} — full opacity (gradient still fades to transparent at bottom).",...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};const $=["Gradient","Transparent","Solid","LowOpacity","FullOpacity"];export{s as FullOpacity,r as Gradient,t as LowOpacity,e as Solid,a as Transparent,$ as __namedExportsOrder,Z as default};
