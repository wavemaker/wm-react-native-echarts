import{m as k}from"./meta-DpN4dPva.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./use-scatter-item-tooltip-DO9_ZKBe.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./common-fSim-PaJ.js";import"./install-fh8zqSy2.js";import"./dataSample-LQN_tCZn.js";const $={...k,title:"Charts/Scatter/Legend"},n=[[2,3],[4,6],[12,22],[14,26],[16,30],[6,11],[8,15],[10,19],[18,35]],C=[[0,-6],[2,1],[4,2],[6,6],[8,11],[10,15],[12,19],[14,23],[16,27]],a=[{name:"North America cohort",data:n},{name:"Europe control group",data:C},{name:"Asia Pacific sample",data:n.map(([O,j])=>[O+1,j-2])}],q=[{name:"Series A",data:n},{name:"Series B",data:C}],e={args:{data:q,showLegend:!1}},t={args:{data:a,legendPosition:"bottom"}},r={args:{data:a,legendPosition:"top"}},o={args:{data:a,legendPosition:"left"}},s={args:{data:a,legendPosition:"right"}};var i,d,m,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.source},description:{story:"Legend on the right.",...(T=(R=s.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};const ee=["HideLegend","LegendBottom","LegendTop","LegendLeft","LegendRight"];export{e as HideLegend,t as LegendBottom,o as LegendLeft,s as LegendRight,r as LegendTop,ee as __namedExportsOrder,$ as default};
