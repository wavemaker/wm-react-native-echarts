import{m as T}from"./meta-CbEVRGfl.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./dataSample-LQN_tCZn.js";import"./createSeriesDataSimply-DaXRNxVR.js";import"./install-j5bgd6PW.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";import"./install-fh8zqSy2.js";import"./points-CXtM_P6B.js";const B={...T,title:"Charts/Candlestick/Colors"},s=["Mon","Tue","Wed","Thu","Fri"],t=[[20,34,10,38],[40,35,30,50],[31,38,33,44],[38,15,5,42],[25,32,28,35]],r={args:{data:t,xAxisData:s}},o={args:{data:t,xAxisData:s,positiveColor:"#0066cc",negativeColor:"#cc3300"}},a={tickLabelColor:"#9c27b0",lineColor:"#ff9800"},e={args:{data:t,xAxisData:s,theme:{axis:{x:a,y:a}}}};var i,c,n,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData
  }
}`,...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source},description:{story:"Default colors (green up, red down).",...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var d,l,u,x,C;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    positiveColor: '#0066cc',
    negativeColor: '#cc3300'
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"Custom positive/negative candle colors.",...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.description}}};var g,h,v,f,D;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    theme: {
      axis: {
        x: axisColors,
        y: axisColors
      }
    } as Partial<ChartTheme>
  }
}`,...(v=(h=e.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"Theme override for axis colors.",...(D=(f=e.parameters)==null?void 0:f.docs)==null?void 0:D.description}}};const G=["Default","CustomColors","ThemeOverride"];export{o as CustomColors,r as Default,e as ThemeOverride,G as __namedExportsOrder,B as default};
