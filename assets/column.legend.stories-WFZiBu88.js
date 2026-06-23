import{m as R}from"./meta-Cg36X7qY.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-Bw0oTUdV.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-B8VaOuT_.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-VB-o03U1.js";import"./dataSample-C3ms-4cx.js";import"./createSeriesData-VE2uRjI9.js";import"./CoordinateSystem-C8P-Cleg.js";import"./sectorHelper-e2TAJmFq.js";import"./cartesian-C7nMcwZE.js";const Z={...R,title:"Charts/Column/Legend"},s=[{name:"North America retail",data:[40,52,61,54,60,58]},{name:"Europe online channel",data:[20,42,51,44,50,48]},{name:"Asia Pacific B2B",data:[30,32,41,64,45,50]},{name:"Latin America partners",data:[15,28,35,40,38,42]}],T=[{name:"Series A",data:[40,52,61,54,60,58]},{name:"Series B",data:[20,42,51,44,50,48]}],e={args:{data:T,showLegend:!1}},r={args:{data:s,legendPosition:"bottom"}},t={args:{data:s,legendPosition:"top"}},o={args:{data:s,legendPosition:"left"}},a={args:{data:s,legendPosition:"right"}};var n,i,d,p,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    data: twoSeries,
    showLegend: false
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source},description:{story:"Named series with the legend hidden (`showLegend={false}`).",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var c,g,l,L,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'bottom'
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source},description:{story:"Legend at bottom (default).",...(u=(L=r.parameters)==null?void 0:L.docs)==null?void 0:u.description}}};var h,S,f,w,P;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'top'
  }
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:"Legend at top.",...(P=(w=t.parameters)==null?void 0:w.docs)==null?void 0:P.description}}};var y,B,A,_,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'left'
  }
}`,...(A=(B=o.parameters)==null?void 0:B.docs)==null?void 0:A.source},description:{story:"Legend on the left.",...(b=(_=o.parameters)==null?void 0:_.docs)==null?void 0:b.description}}};var x,C,E,H,N;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'right'
  }
}`,...(E=(C=a.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:"Legend on the right.",...(N=(H=a.parameters)==null?void 0:H.docs)==null?void 0:N.description}}};const $=["HideLegend","LegendBottom","LegendTop","LegendLeft","LegendRight"];export{e as HideLegend,r as LegendBottom,o as LegendLeft,a as LegendRight,t as LegendTop,$ as __namedExportsOrder,Z as default};
