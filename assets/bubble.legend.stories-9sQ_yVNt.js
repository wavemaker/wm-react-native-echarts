import{m as q}from"./meta-DG4qFFie.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./use-scatter-item-tooltip-pODPcTwS.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./common-WjgByzXx.js";import"./cartesian-C7nMcwZE.js";const $={...q,title:"Charts/Bubble/Legend"},n=[[10,20,30],[15,25,15],[20,15,45],[25,30,25],[30,22,35]],N=[[12,18,25],[18,22,35],[22,28,20],[28,14,40],[32,26,30]],a=[{name:"Campaign A impressions",data:n},{name:"Campaign B engagement",data:N},{name:"Campaign C reach",data:n.map(([O,j,k])=>[O+2,j+1,k])}],v=[{name:"Series A",data:n},{name:"Series B",data:N}],e={args:{data:v,showLegend:!1}},t={args:{data:a,legendPosition:"bottom"}},r={args:{data:a,legendPosition:"top"}},s={args:{data:a,legendPosition:"left"}},o={args:{data:a,legendPosition:"right"}};var i,d,m,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: twoSeries,
    showLegend: false
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"Named series with the legend hidden (`showLegend={false}`).",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.description}}};var g,l,u,L,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: multiSeries,
    legendPosition: 'bottom'
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"Legend at bottom (default).",...(h=(L=t.parameters)==null?void 0:L.docs)==null?void 0:h.description}}};var S,f,b,P,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: multiSeries,
    legendPosition: 'top'
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:"Legend at top.",...(w=(P=r.parameters)==null?void 0:P.docs)==null?void 0:w.description}}};var y,B,C,_,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: multiSeries,
    legendPosition: 'left'
  }
}`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source},description:{story:"Legend on the left.",...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.description}}};var A,H,R,T,E;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: multiSeries,
    legendPosition: 'right'
  }
}`,...(R=(H=o.parameters)==null?void 0:H.docs)==null?void 0:R.source},description:{story:"Legend on the right.",...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.description}}};const ee=["HideLegend","LegendBottom","LegendTop","LegendLeft","LegendRight"];export{e as HideLegend,t as LegendBottom,s as LegendLeft,o as LegendRight,r as LegendTop,ee as __namedExportsOrder,$ as default};
