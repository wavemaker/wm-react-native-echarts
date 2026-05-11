import{m as ds}from"./meta-CbEVRGfl.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./dataSample-LQN_tCZn.js";import"./createSeriesDataSimply-DaXRNxVR.js";import"./install-j5bgd6PW.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";import"./install-fh8zqSy2.js";import"./points-CXtM_P6B.js";const Fs={...ds,title:"Charts/Candlestick/X-Axis"},s=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],a=[[20,34,10,38],[40,35,30,50],[31,38,33,44],[38,15,5,42],[25,32,28,35],[30,25,20,40],[35,45,30,50]],r={args:{data:a,xAxisData:s}},e={args:{data:a,xAxisData:s,showXAxis:!1}},o={args:{data:a,xAxisData:s,showXAxisTicks:!1}},i={args:{data:a,xAxisData:s,showXAxisSplitLines:!1}},t={args:{data:a,xAxisData:s,boundaryGap:!1}},n={args:{data:a,xAxisData:s,xAxisTickLabelFormatter:cs=>String(cs).slice(0,2)}},c={args:{data:a,xAxisData:s,xAxisLabel:"Day"}},d={args:{data:a,xAxisData:s,minX:1,maxX:3}},p={args:{data:a,xAxisData:s,minX:0,maxX:4,intervalX:1}},m={args:{data:a,xAxisData:s,minX:1}};var x,l,u,g,X;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"X-axis shows category labels.",...(X=(g=r.parameters)==null?void 0:g.docs)==null?void 0:X.description}}};var A,y,f,b,S;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    showXAxis: false
  }
}`,...(f=(y=e.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"showXAxis: false — X-axis and labels hidden.",...(S=(b=e.parameters)==null?void 0:b.docs)==null?void 0:S.description}}};var h,D,L,w,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    showXAxisTicks: false
  }
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source},description:{story:"showXAxisTicks: false — X-axis visible, tick marks hidden.",...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var F,v,T,N,G;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    showXAxisSplitLines: false
  }
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(G=(N=i.parameters)==null?void 0:N.docs)==null?void 0:G.description}}};var M,C,_,B,H;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    boundaryGap: false
  }
}`,...(_=(C=t.parameters)==null?void 0:C.docs)==null?void 0:_.source},description:{story:"boundaryGap: false — no gap at axis ends.",...(H=(B=t.parameters)==null?void 0:B.docs)==null?void 0:H.description}}};var I,E,O,W,j;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    xAxisTickLabelFormatter: value => String(value).slice(0, 2)
  }
}`,...(O=(E=n.parameters)==null?void 0:E.docs)==null?void 0:O.source},description:{story:"xAxisTickLabelFormatter — custom label format.",...(j=(W=n.parameters)==null?void 0:W.docs)==null?void 0:j.description}}};var q,z,J,K,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    xAxisLabel: 'Day'
  }
}`,...(J=(z=c.parameters)==null?void 0:z.docs)==null?void 0:J.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(P=(K=c.parameters)==null?void 0:K.docs)==null?void 0:P.description}}};var Q,R,U,V,Y;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    minX: 1,
    maxX: 3
  }
}`,...(U=(R=d.parameters)==null?void 0:R.docs)==null?void 0:U.source},description:{story:"minX and maxX — fixed category window (five sessions → indices 1–3).",...(Y=(V=d.parameters)==null?void 0:V.docs)==null?void 0:Y.description}}};var Z,$,ss,as,rs;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    minX: 0,
    maxX: 4,
    intervalX: 1
  }
}`,...(ss=($=p.parameters)==null?void 0:$.docs)==null?void 0:ss.source},description:{story:"minX, maxX, and intervalX — category axis with explicit label interval.",...(rs=(as=p.parameters)==null?void 0:as.docs)==null?void 0:rs.description}}};var es,os,is,ts,ns;m.parameters={...m.parameters,docs:{...(es=m.parameters)==null?void 0:es.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    minX: 1
  }
}`,...(is=(os=m.parameters)==null?void 0:os.docs)==null?void 0:is.source},description:{story:"minX — category axis floor (index).",...(ns=(ts=m.parameters)==null?void 0:ts.docs)==null?void 0:ns.description}}};const vs=["Default","HideAxis","NoTicks","NoSplitLines","NoBoundaryGap","LabelFormatter","XAxisLabel","FixedMinMax","FixedInterval","CategoryFloor"];export{m as CategoryFloor,r as Default,p as FixedInterval,d as FixedMinMax,e as HideAxis,n as LabelFormatter,t as NoBoundaryGap,i as NoSplitLines,o as NoTicks,c as XAxisLabel,vs as __namedExportsOrder,Fs as default};
