import{m as X}from"./meta-CbEVRGfl.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./dataSample-LQN_tCZn.js";import"./createSeriesDataSimply-DaXRNxVR.js";import"./install-j5bgd6PW.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";import"./install-fh8zqSy2.js";import"./points-CXtM_P6B.js";const Dt={...X,title:"Charts/Candlestick",tags:["autodocs"]};function Y(i,s,c=42,d){const m=[];let M=i,u=c;const p=()=>(u=u*1103515245+12345&2147483647,u%1e3/1e3-.5),l=t=>Math.round(t*100)/100,R=d-i;for(let t=0;t<28;t++){const h=M;let a;{const N=(t+1)/28,Q=i+R*N,U=s*(p()*4+p()*2.5);a=Math.max(.01,Q+U),t===27&&(a=d)}M=a;const j=Math.abs(s*(p()*3+.8)),q=Math.abs(s*(p()*3+.8)),z=Math.min(h,a)-j,B=Math.max(h,a)+q,G=l(h),I=l(a),J=Math.max(.01,l(z)),K=l(B);m.push([G,I,J,K])}return m}const Z=Array.from({length:28},(i,s)=>{const c=540+s*15,d=Math.floor(c/60),m=c%60;return`${String(d).padStart(2,"0")}:${String(m).padStart(2,"0")}`}),g=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],x=[[20,34,10,38],[40,35,30,50],[31,38,33,44],[38,15,5,42],[25,32,28,35],[30,25,20,40],[35,45,30,50]],P=Y(104,.35,42,107.6),r={args:{data:x,xAxisData:g,volumeData:[20,40,31,38,25,30,35]}},o={args:{data:x,xAxisData:g,ma5:[25,35,32,28,30,32,38],ma10:[28,32,30,26,28,30,35],ma20:[30,30,28,25,27,29,32],showLegend:!0}},e={args:{data:x,xAxisData:g,showHighlighter:!1}},n={args:{data:P,xAxisData:Z}};var D,f,k,w,A;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    xAxisData,
    volumeData: [20, 40, 31, 38, 25, 30, 35]
  }
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source},description:{story:"Candlestick with volume bars below.",...(A=(w=r.parameters)==null?void 0:w.docs)==null?void 0:A.description}}};var S,H,v,C,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    xAxisData,
    ma5: [25, 35, 32, 28, 30, 32, 38],
    ma10: [28, 32, 30, 26, 28, 30, 35],
    ma20: [30, 30, 28, 25, 27, 29, 32],
    showLegend: true
  }
}`,...(v=(H=o.parameters)==null?void 0:H.docs)==null?void 0:v.source},description:{story:"Candlestick with moving averages (MA5, MA10, MA20).",...(b=(C=o.parameters)==null?void 0:C.docs)==null?void 0:b.description}}};var W,_,y,L,T;e.parameters={...e.parameters,docs:{...(W=e.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    xAxisData,
    showHighlighter: false
  }
}`,...(y=(_=e.parameters)==null?void 0:_.docs)==null?void 0:y.source},description:{story:"Candlestick with highlighter disabled.",...(T=(L=e.parameters)==null?void 0:L.docs)==null?void 0:T.description}}};var V,$,E,F,O;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    data: stockMarketHoursData,
    xAxisData: xAxisMarketHours
  }
}`,...(E=($=n.parameters)==null?void 0:$.docs)==null?void 0:E.source},description:{story:"Stock price 9 AM–4 PM with one 10-min candle per slot (42 candles).",...(O=(F=n.parameters)==null?void 0:F.docs)==null?void 0:O.description}}};const ft=["WithVolume","WithMovingAverage","ShowHighlighter","Default"];export{n as Default,e as ShowHighlighter,o as WithMovingAverage,r as WithVolume,ft as __namedExportsOrder,Dt as default};
