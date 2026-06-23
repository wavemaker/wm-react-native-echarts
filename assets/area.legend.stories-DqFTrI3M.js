import{m as R}from"./meta-GyzeNtZ1.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-DrjqnKLG.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-B-FBt8Sx.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./area.args-CMRTFbmo.js";import"./cartesian-C7nMcwZE.js";const $={...R,title:"Charts/Area/Legend"},s=[{name:"North America retail",data:[40,52,61,54,60,58]},{name:"Europe online channel",data:[20,42,51,44,50,48]},{name:"Asia Pacific B2B",data:[30,32,41,64,45,50]},{name:"Latin America partners",data:[15,28,35,40,38,42]}],T=[{name:"Series A",data:[40,52,61,54,60,58]},{name:"Series B",data:[20,42,51,44,50,48]}],e={args:{data:T,showLegend:!1}},r={args:{data:s,legendPosition:"bottom"}},t={args:{data:s,legendPosition:"top"}},a={args:{data:s,legendPosition:"left"}},o={args:{data:s,legendPosition:"right"}};var n,i,d,p,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    data: twoSeries,
    showLegend: false
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source},description:{story:"Named series with the legend hidden (`showLegend={false}`).",...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var c,g,l,L,h;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'bottom'
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source},description:{story:"Legend at bottom, horizontal and wrapped when needed.",...(h=(L=r.parameters)==null?void 0:L.docs)==null?void 0:h.description}}};var u,S,w,f,P;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'top'
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Legend above the chart.",...(P=(f=t.parameters)==null?void 0:f.docs)==null?void 0:P.description}}};var y,A,B,b,_;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'left'
  }
}`,...(B=(A=a.parameters)==null?void 0:A.docs)==null?void 0:B.source},description:{story:"Legend on the left (vertical).",...(_=(b=a.parameters)==null?void 0:b.docs)==null?void 0:_.description}}};var v,x,E,H,N;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'right'
  }
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source},description:{story:"Legend on the right (vertical).",...(N=(H=o.parameters)==null?void 0:H.docs)==null?void 0:N.description}}};const ee=["HideLegend","LegendBottom","LegendTop","LegendLeft","LegendRight"];export{e as HideLegend,r as LegendBottom,a as LegendLeft,o as LegendRight,t as LegendTop,ee as __namedExportsOrder,$ as default};
