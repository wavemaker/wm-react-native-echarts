import{m as q}from"./meta-DUxyrNYG.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./use-scatter-item-tooltip-DO9_ZKBe.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./common-fSim-PaJ.js";const Z={...q,title:"Charts/Bubble/Legend"},n=[[10,20,30],[15,25,15],[20,15,45],[25,30,25],[30,22,35]],N=[[12,18,25],[18,22,35],[22,28,20],[28,14,40],[32,26,30]],o=[{name:"Campaign A impressions",data:n},{name:"Campaign B engagement",data:N},{name:"Campaign C reach",data:n.map(([O,j,k])=>[O+2,j+1,k])}],v=[{name:"Series A",data:n},{name:"Series B",data:N}],e={args:{data:v,showLegend:!1}},t={args:{data:o,legendPosition:"bottom"}},r={args:{data:o,legendPosition:"top"}},s={args:{data:o,legendPosition:"left"}},a={args:{data:o,legendPosition:"right"}};var i,d,m,p,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source},description:{story:"Legend on the left.",...(x=(_=s.parameters)==null?void 0:_.docs)==null?void 0:x.description}}};var A,H,R,T,E;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: multiSeries,
    legendPosition: 'right'
  }
}`,...(R=(H=a.parameters)==null?void 0:H.docs)==null?void 0:R.source},description:{story:"Legend on the right.",...(E=(T=a.parameters)==null?void 0:T.docs)==null?void 0:E.description}}};const $=["HideLegend","LegendBottom","LegendTop","LegendLeft","LegendRight"];export{e as HideLegend,t as LegendBottom,s as LegendLeft,a as LegendRight,r as LegendTop,$ as __namedExportsOrder,Z as default};
