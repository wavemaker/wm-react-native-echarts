import{m as R}from"./meta-COZUIp89.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-MOBmXkGr.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-j5bgd6PW.js";import"./dataSample-LQN_tCZn.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";const X={...R,title:"Charts/Column/Legend"},s=[{name:"North America retail",data:[40,52,61,54,60,58]},{name:"Europe online channel",data:[20,42,51,44,50,48]},{name:"Asia Pacific B2B",data:[30,32,41,64,45,50]},{name:"Latin America partners",data:[15,28,35,40,38,42]}],T=[{name:"Series A",data:[40,52,61,54,60,58]},{name:"Series B",data:[20,42,51,44,50,48]}],e={args:{data:T,showLegend:!1}},r={args:{data:s,legendPosition:"bottom"}},t={args:{data:s,legendPosition:"top"}},a={args:{data:s,legendPosition:"left"}},o={args:{data:s,legendPosition:"right"}};var n,i,d,p,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:"Legend at top.",...(P=(w=t.parameters)==null?void 0:w.docs)==null?void 0:P.description}}};var y,B,A,_,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'left'
  }
}`,...(A=(B=a.parameters)==null?void 0:B.docs)==null?void 0:A.source},description:{story:"Legend on the left.",...(b=(_=a.parameters)==null?void 0:_.docs)==null?void 0:b.description}}};var x,C,E,H,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'right'
  }
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source},description:{story:"Legend on the right.",...(N=(H=o.parameters)==null?void 0:H.docs)==null?void 0:N.description}}};const Y=["HideLegend","LegendBottom","LegendTop","LegendLeft","LegendRight"];export{e as HideLegend,r as LegendBottom,a as LegendLeft,o as LegendRight,t as LegendTop,Y as __namedExportsOrder,X as default};
