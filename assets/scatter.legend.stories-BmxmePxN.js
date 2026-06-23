import{m as k}from"./meta-Wes3cbXa.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./use-scatter-item-tooltip-pODPcTwS.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./common-WjgByzXx.js";import"./install-B-FBt8Sx.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./cartesian-C7nMcwZE.js";const te={...k,title:"Charts/Scatter/Legend"},n=[[2,3],[4,6],[12,22],[14,26],[16,30],[6,11],[8,15],[10,19],[18,35]],C=[[0,-6],[2,1],[4,2],[6,6],[8,11],[10,15],[12,19],[14,23],[16,27]],a=[{name:"North America cohort",data:n},{name:"Europe control group",data:C},{name:"Asia Pacific sample",data:n.map(([O,j])=>[O+1,j-2])}],q=[{name:"Series A",data:n},{name:"Series B",data:C}],e={args:{data:q,showLegend:!1}},t={args:{data:a,legendPosition:"bottom"}},r={args:{data:a,legendPosition:"top"}},o={args:{data:a,legendPosition:"left"}},s={args:{data:a,legendPosition:"right"}};var i,d,m,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: twoSeries,
    showLegend: false
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"Named series with the legend hidden (`showLegend={false}`).",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.description}}};var g,l,u,L,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: multiSeries,
    legendPosition: 'bottom'
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"Legend at bottom (default).",...(h=(L=t.parameters)==null?void 0:L.docs)==null?void 0:h.description}}};var S,f,P,w,y;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: multiSeries,
    legendPosition: 'top'
  }
}`,...(P=(f=r.parameters)==null?void 0:f.docs)==null?void 0:P.source},description:{story:"Legend at top.",...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};var A,B,_,b,x;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: multiSeries,
    legendPosition: 'left'
  }
}`,...(_=(B=o.parameters)==null?void 0:B.docs)==null?void 0:_.source},description:{story:"Legend on the left.",...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var E,H,N,R,T;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data: multiSeries,
    legendPosition: 'right'
  }
}`,...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.source},description:{story:"Legend on the right.",...(T=(R=s.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};const re=["HideLegend","LegendBottom","LegendTop","LegendLeft","LegendRight"];export{e as HideLegend,t as LegendBottom,o as LegendLeft,s as LegendRight,r as LegendTop,re as __namedExportsOrder,te as default};
