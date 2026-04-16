import{m as T}from"./meta-ZX5Z0jBm.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./dataSample-YMfQ_6XR.js";import"./createSeriesDataSimply-BSDWH4oQ.js";import"./install-9dos4XC1.js";import"./labelHelper-CzHPQigS.js";import"./sectorHelper-DjU9oWJ9.js";import"./install-BiL3BzV2.js";import"./points-Douv9Vrc.js";import"./cartesian-C25Uk8mH.js";const B={...T,title:"Charts/Candlestick/Colors"},s=["Mon","Tue","Wed","Thu","Fri"],t=[[20,34,10,38],[40,35,30,50],[31,38,33,44],[38,15,5,42],[25,32,28,35]],r={args:{data:t,xAxisData:s}},o={args:{data:t,xAxisData:s,positiveColor:"#0066cc",negativeColor:"#cc3300"}},a={tickLabelColor:"#9c27b0",lineColor:"#ff9800"},e={args:{data:t,xAxisData:s,theme:{axis:{x:a,y:a}}}};var i,c,n,m,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
