import{m as T}from"./meta-fj1QTGcU.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./legend-position-CLb_FM1L.js";import"./createSeriesDataSimply-DaXRNxVR.js";const U={...T,title:"Charts/Radar/Legend"},a=[{name:"Sales",max:100},{name:"Marketing",max:100},{name:"Development",max:100},{name:"Support",max:100},{name:"Admin",max:100}],i=[{name:"North region",value:[80,60,75,55,70]},{name:"South region",value:[50,70,65,80,60]},{name:"East region",value:[70,50,85,45,75]}],n=["#F2A65A","#6F8F72","#132440"],k=[{name:"North region",value:[80,60,75,55,70]},{name:"South region",value:[50,70,65,80,60]}],e={args:{indicators:a,data:k,colors:n,showLegend:!1}},o={args:{indicators:a,data:i,colors:n,legendPosition:"bottom"}},r={args:{indicators:a,data:i,colors:n,legendPosition:"top"}},t={args:{indicators:a,data:i,colors:n,legendPosition:"left"}},s={args:{indicators:a,data:i,colors:n,legendPosition:"right"}};var d,m,c,p,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    indicators,
    data: twoSeries,
    colors,
    showLegend: false
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source},description:{story:"Named series with the legend hidden (`showLegend={false}`).",...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.description}}};var l,u,L,h,S;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    indicators,
    data: multiSeries,
    colors,
    legendPosition: 'bottom'
  }
}`,...(L=(u=o.parameters)==null?void 0:u.docs)==null?void 0:L.source},description:{story:"Legend at bottom (default).",...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.description}}};var f,P,x,v,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    indicators,
    data: multiSeries,
    colors,
    legendPosition: 'top'
  }
}`,...(x=(P=r.parameters)==null?void 0:P.docs)==null?void 0:x.source},description:{story:"Legend at top.",...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var y,_,b,A,F;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    indicators,
    data: multiSeries,
    colors,
    legendPosition: 'left'
  }
}`,...(b=(_=t.parameters)==null?void 0:_.docs)==null?void 0:b.source},description:{story:"Legend on the left.",...(F=(A=t.parameters)==null?void 0:A.docs)==null?void 0:F.description}}};var N,R,B,E,H;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    indicators,
    data: multiSeries,
    colors,
    legendPosition: 'right'
  }
}`,...(B=(R=s.parameters)==null?void 0:R.docs)==null?void 0:B.source},description:{story:"Legend on the right.",...(H=(E=s.parameters)==null?void 0:E.docs)==null?void 0:H.description}}};const V=["HideLegend","LegendBottom","LegendTop","LegendLeft","LegendRight"];export{e as HideLegend,o as LegendBottom,t as LegendLeft,s as LegendRight,r as LegendTop,V as __namedExportsOrder,U as default};
