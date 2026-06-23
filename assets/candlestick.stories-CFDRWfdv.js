import{m as I}from"./meta-VeYvYczT.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./dataSample-C3ms-4cx.js";import"./createSeriesDataSimply-BM5eq_8k.js";import"./install-VB-o03U1.js";import"./createSeriesData-VE2uRjI9.js";import"./CoordinateSystem-C8P-Cleg.js";import"./sectorHelper-e2TAJmFq.js";import"./install-B-FBt8Sx.js";import"./points-CpfmDJP4.js";import"./cartesian-C7nMcwZE.js";const gt={...I,title:"Charts/Candlestick",tags:["autodocs"]};function J(n,o,i=42,c){const m=[];let g=n,u=i;const p=()=>(u=u*1103515245+12345&2147483647,u%1e3/1e3-.5),d=t=>Math.round(t*100)/100,T=c-n;for(let t=0;t<28;t++){const l=g;let a;{const z=(t+1)/28,B=n+T*z,G=o*(p()*4+p()*2.5);a=Math.max(.01,B+G),t===27&&(a=c)}g=a;const V=Math.abs(o*(p()*3+.8)),$=Math.abs(o*(p()*3+.8)),E=Math.min(l,a)-V,F=Math.max(l,a)+$,O=d(l),R=d(a),j=Math.max(.01,d(E)),q=d(F);m.push([O,R,j,q])}return m}const K=Array.from({length:28},(n,o)=>{const i=540+o*15,c=Math.floor(i/60),m=i%60;return`${String(c).padStart(2,"0")}:${String(m).padStart(2,"0")}`}),L=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],y=[[20,34,10,38],[40,35,30,50],[31,38,33,44],[38,15,5,42],[25,32,28,35],[30,25,20,40],[35,45,30,50]],N=J(104,.35,42,107.6),r={args:{data:y,xAxisData:L,volumeData:[20,40,31,38,25,30,35]}},s={args:{data:y,xAxisData:L,ma5:[25,35,32,28,30,32,38],ma10:[28,32,30,26,28,30,35],ma20:[30,30,28,25,27,29,32],showLegend:!0}},e={args:{data:N,xAxisData:K}};var h,M,x,k,A;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    xAxisData,
    volumeData: [20, 40, 31, 38, 25, 30, 35]
  }
}`,...(x=(M=r.parameters)==null?void 0:M.docs)==null?void 0:x.source},description:{story:"Candlestick with volume bars below.",...(A=(k=r.parameters)==null?void 0:k.docs)==null?void 0:A.description}}};var D,f,w,S,v;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    xAxisData,
    ma5: [25, 35, 32, 28, 30, 32, 38],
    ma10: [28, 32, 30, 26, 28, 30, 35],
    ma20: [30, 30, 28, 25, 27, 29, 32],
    showLegend: true
  }
}`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source},description:{story:"Candlestick with moving averages (MA5, MA10, MA20).",...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.description}}};var C,H,W,b,_;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    data: stockMarketHoursData,
    xAxisData: xAxisMarketHours
  }
}`,...(W=(H=e.parameters)==null?void 0:H.docs)==null?void 0:W.source},description:{story:"Stock price 9 AM–4 PM with one 10-min candle per slot (42 candles).",...(_=(b=e.parameters)==null?void 0:b.docs)==null?void 0:_.description}}};const ht=["WithVolume","WithMovingAverage","Default"];export{e as Default,s as WithMovingAverage,r as WithVolume,ht as __namedExportsOrder,gt as default};
