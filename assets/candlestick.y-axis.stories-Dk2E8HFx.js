import{m as es}from"./meta-CbEVRGfl.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./dataSample-LQN_tCZn.js";import"./createSeriesDataSimply-DaXRNxVR.js";import"./install-j5bgd6PW.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";import"./install-fh8zqSy2.js";import"./points-CXtM_P6B.js";const bs={...es,title:"Charts/Candlestick/Y-Axis"},s=["Mon","Tue","Wed","Thu","Fri"],a=[[20,34,10,38],[40,35,30,50],[31,38,33,44],[38,15,5,42],[25,32,28,35]],r={args:{data:a,xAxisData:s}},e={args:{data:a,xAxisData:s,showYAxis:!1}},i={args:{data:a,xAxisData:s,showYAxisTicks:!1}},o={args:{data:a,xAxisData:s,showYAxisSplitLines:!1}},t={args:{data:a,xAxisData:s,yAxisTickLabelFormatter:rs=>`$${Number(rs).toFixed(0)}`}},n={args:{data:a,xAxisData:s,yAxisLabel:"Price ($)"}},c={args:{data:a,xAxisData:s,minY:5,maxY:60}},d={args:{data:a,xAxisData:s,minY:0,maxY:55,intervalY:5}},p={args:{data:a,xAxisData:s,minY:5}};var m,x,l,u,Y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData
  }
}`,...(l=(x=r.parameters)==null?void 0:x.docs)==null?void 0:l.source},description:{story:"Y-axis scale from data (price).",...(Y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:Y.description}}};var A,g,f,h,y;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    showYAxis: false
  }
}`,...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:"showYAxis: false — Y-axis and labels hidden.",...(y=(h=e.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var b,L,F,S,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    showYAxisTicks: false
  }
}`,...(F=(L=i.parameters)==null?void 0:L.docs)==null?void 0:F.source},description:{story:"showYAxisTicks: false — Y-axis visible, tick marks hidden.",...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.description}}};var w,D,T,v,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    showYAxisSplitLines: false
  }
}`,...(T=(D=o.parameters)==null?void 0:D.docs)==null?void 0:T.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.description}}};var $,M,_,z,C;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    yAxisTickLabelFormatter: value => \`$\${Number(value).toFixed(0)}\`
  }
}`,...(_=(M=t.parameters)==null?void 0:M.docs)==null?void 0:_.source},description:{story:"yAxisTickLabelFormatter — e.g. add prefix/suffix.",...(C=(z=t.parameters)==null?void 0:z.docs)==null?void 0:C.description}}};var H,I,P,V,E;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    yAxisLabel: 'Price ($)'
  }
}`,...(P=(I=n.parameters)==null?void 0:I.docs)==null?void 0:P.source},description:{story:"yAxisLabel — Y-axis label displayed along the axis.",...(E=(V=n.parameters)==null?void 0:V.docs)==null?void 0:E.description}}};var O,W,j,q,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    minY: 5,
    maxY: 60
  }
}`,...(j=(W=c.parameters)==null?void 0:W.docs)==null?void 0:j.source},description:{story:"minY and maxY — fixed price axis with non-zero floor and padding below lows / above highs.",...(B=(q=c.parameters)==null?void 0:q.docs)==null?void 0:B.description}}};var G,J,K,Q,R;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    minY: 0,
    maxY: 55,
    intervalY: 5
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"minY, maxY, and intervalY — explicit price scale and tick step.",...(R=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:R.description}}};var U,X,Z,ss,as;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    minY: 5
  }
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"minY — price axis floor only (maximum still from data).",...(as=(ss=p.parameters)==null?void 0:ss.docs)==null?void 0:as.description}}};const Ls=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel","FixedMinMax","FixedInterval","ValueAxisFloor"];export{r as Default,d as FixedInterval,c as FixedMinMax,e as HideAxis,t as LabelFormatter,o as NoSplitLines,i as NoTicks,p as ValueAxisFloor,n as YAxisLabel,Ls as __namedExportsOrder,bs as default};
