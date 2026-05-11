import{m as R}from"./meta-CEPI5cI_.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-D69Pifby.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-fh8zqSy2.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./dataSample-LQN_tCZn.js";import"./area.args-DizI-4Mn.js";const Y={...R,title:"Charts/Area/Legend"},s=[{name:"North America retail",data:[40,52,61,54,60,58]},{name:"Europe online channel",data:[20,42,51,44,50,48]},{name:"Asia Pacific B2B",data:[30,32,41,64,45,50]},{name:"Latin America partners",data:[15,28,35,40,38,42]}],T=[{name:"Series A",data:[40,52,61,54,60,58]},{name:"Series B",data:[20,42,51,44,50,48]}],e={args:{data:T,showLegend:!1}},r={args:{data:s,legendPosition:"bottom"}},a={args:{data:s,legendPosition:"top"}},t={args:{data:s,legendPosition:"left"}},o={args:{data:s,legendPosition:"right"}};var n,i,d,p,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    data: twoSeries,
    showLegend: false
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source},description:{story:"Named series with the legend hidden (`showLegend={false}`).",...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.description}}};var m,g,l,L,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'bottom'
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source},description:{story:"Legend at bottom, horizontal and wrapped when needed.",...(h=(L=r.parameters)==null?void 0:L.docs)==null?void 0:h.description}}};var u,S,w,f,P;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'top'
  }
}`,...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"Legend above the chart.",...(P=(f=a.parameters)==null?void 0:f.docs)==null?void 0:P.description}}};var y,A,B,b,_;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'left'
  }
}`,...(B=(A=t.parameters)==null?void 0:A.docs)==null?void 0:B.source},description:{story:"Legend on the left (vertical).",...(_=(b=t.parameters)==null?void 0:b.docs)==null?void 0:_.description}}};var v,x,E,H,N;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data: wrapLegendSeries,
    legendPosition: 'right'
  }
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source},description:{story:"Legend on the right (vertical).",...(N=(H=o.parameters)==null?void 0:H.docs)==null?void 0:N.description}}};const Z=["HideLegend","LegendBottom","LegendTop","LegendLeft","LegendRight"];export{e as HideLegend,r as LegendBottom,t as LegendLeft,o as LegendRight,a as LegendTop,Z as __namedExportsOrder,Y as default};
