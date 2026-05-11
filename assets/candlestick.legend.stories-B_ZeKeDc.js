import{m as H}from"./meta-CbEVRGfl.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./dataSample-LQN_tCZn.js";import"./createSeriesDataSimply-DaXRNxVR.js";import"./install-j5bgd6PW.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";import"./install-fh8zqSy2.js";import"./points-CXtM_P6B.js";const Y={...H,title:"Charts/Candlestick/Legend"},C=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],D=[[20,34,10,38],[40,35,30,50],[31,38,33,44],[38,15,5,42],[25,32,28,35],[30,25,20,40],[35,45,30,50]],a={data:D,xAxisData:C,ma5:[25,35,32,28,30,32,38],ma10:[28,32,30,26,28,30,35],ma20:[30,30,28,25,27,29,32]},e={args:{data:D,xAxisData:C,ma5:[25,35,32,28,30,32,38],showLegend:!1}},r={args:{...a,legendPosition:"bottom"}},o={args:{...a,legendPosition:"top"}},t={args:{...a,legendPosition:"left"}},s={args:{...a,legendPosition:"right"}};var n,i,d,m,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    ma5: [25, 35, 32, 28, 30, 32, 38],
    showLegend: false
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source},description:{story:"MA5 line without the moving-average legend (`showLegend={false}`).",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var c,g,l,u,L;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...maArgs,
    legendPosition: 'bottom'
  }
}`,...(l=(g=r.parameters)==null?void 0:g.docs)==null?void 0:l.source},description:{story:"Moving-average legend at bottom (explicit).",...(L=(u=r.parameters)==null?void 0:u.docs)==null?void 0:L.description}}};var h,f,A,P,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...maArgs,
    legendPosition: 'top'
  }
}`,...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.source},description:{story:"Legend at top.",...(x=(P=o.parameters)==null?void 0:P.docs)==null?void 0:x.description}}};var S,y,v,w,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...maArgs,
    legendPosition: 'left'
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source},description:{story:"Legend on the left.",...(T=(w=t.parameters)==null?void 0:w.docs)==null?void 0:T.description}}};var _,b,M,k,B;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...maArgs,
    legendPosition: 'right'
  }
}`,...(M=(b=s.parameters)==null?void 0:b.docs)==null?void 0:M.source},description:{story:"Legend on the right.",...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.description}}};const Z=["HideLegend","LegendBottom","LegendTop","LegendLeft","LegendRight"];export{e as HideLegend,r as LegendBottom,t as LegendLeft,s as LegendRight,o as LegendTop,Z as __namedExportsOrder,Y as default};
