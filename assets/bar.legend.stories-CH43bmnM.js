import{m as T}from"./meta-Dy4yOjkn.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-Bw0oTUdV.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-B8VaOuT_.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-VB-o03U1.js";import"./dataSample-C3ms-4cx.js";import"./createSeriesData-VE2uRjI9.js";import"./CoordinateSystem-C8P-Cleg.js";import"./sectorHelper-e2TAJmFq.js";import"./cartesian-C7nMcwZE.js";const Z={...T,title:"Charts/Bar/Legend"},s=[{name:"North America retail",data:[40,52,61,54,60,58]},{name:"Europe online channel",data:[20,42,51,44,50,48]},{name:"Asia Pacific B2B",data:[30,32,41,64,45,50]},{name:"Latin America partners",data:[15,28,35,40,38,42]}],C=[{name:"Series A",data:[40,52,61,54,60,58]},{name:"Series B",data:[20,42,51,44,50,48]}],e={args:{data:C,showLegend:!1}},r={args:{data:s,legendPosition:"bottom"}},t={args:{data:s,legendPosition:"top"}},a={args:{data:s,legendPosition:"left"}},o={args:{data:s,legendPosition:"right"}};var n,i,d,p,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:"Legend at top.",...(P=(w=t.parameters)==null?void 0:w.docs)==null?void 0:P.description}}};var B,y,b,A,_;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'left'
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:"Legend on the left.",...(_=(A=a.parameters)==null?void 0:A.docs)==null?void 0:_.description}}};var x,E,H,N,R;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'right'
  }
}`,...(H=(E=o.parameters)==null?void 0:E.docs)==null?void 0:H.source},description:{story:"Legend on the right.",...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.description}}};const $=["HideLegend","LegendBottom","LegendTop","LegendLeft","LegendRight"];export{e as HideLegend,r as LegendBottom,a as LegendLeft,o as LegendRight,t as LegendTop,$ as __namedExportsOrder,Z as default};
