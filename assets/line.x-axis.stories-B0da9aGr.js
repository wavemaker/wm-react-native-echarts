import{m as cs}from"./meta-CJ21G4Ce.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-D69Pifby.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-fh8zqSy2.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./dataSample-LQN_tCZn.js";const Fs={...cs,title:"Charts/Line/X-Axis"},s=[40,82,91,74,120,95],r={args:{data:s}},a={args:{data:s,showXAxis:!1}},e={args:{data:s,showXAxisTicks:!1}},o={args:{data:s,showXAxisSplitLines:!1}},t={args:{data:s,boundaryGap:!0}},i={args:{data:s,xAxisTickLabelFormatter:ns=>`${String(ns).slice(0,1)}.0`}},n={args:{data:s,xAxisLabel:"Month"}},c={args:{data:s,minX:1,maxX:4}},d={args:{data:s,minX:0,maxX:5,intervalX:2}},p={args:{data:s,minX:1}};var m,l,x,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(x=(l=r.parameters)==null?void 0:l.docs)==null?void 0:x.source},description:{story:"X-axis shows data indices (0, 1, 2, ...).",...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var X,y,A,h,b;a.parameters={...a.parameters,docs:{...(X=a.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(A=(y=a.parameters)==null?void 0:y.docs)==null?void 0:A.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var f,S,L,w,k;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(L=(S=e.parameters)==null?void 0:S.docs)==null?void 0:L.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(k=(w=e.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var F,v,T,M,G;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(G=(M=o.parameters)==null?void 0:M.docs)==null?void 0:G.description}}};var N,_,C,B,D;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: true
  }
}`,...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.source},description:{story:"boundaryGap: true — gaps at the start and end of the axis.",...(D=(B=t.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var H,I,$,E,O;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTickLabelFormatter: value => \`\${String(value).slice(0, 1)}.0\`
  }
}`,...($=(I=i.parameters)==null?void 0:I.docs)==null?void 0:$.source},description:{story:"xAxisTickLabelFormatter: format X-axis tick labels.",...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};var j,q,z,J,K;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'Month'
  }
}`,...(z=(q=n.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var P,Q,R,U,V;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data,
    minX: 1,
    maxX: 4
  }
}`,...(R=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:R.source},description:{story:"minX and maxX — fixed X-axis extent (category index; six points → narrow window).",...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};var W,Y,Z,ss,rs;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data,
    minX: 0,
    maxX: 5,
    intervalX: 2
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"minX, maxX, and intervalX — category axis with explicit tick interval.",...(rs=(ss=d.parameters)==null?void 0:ss.docs)==null?void 0:rs.description}}};var as,es,os,ts,is;p.parameters={...p.parameters,docs:{...(as=p.parameters)==null?void 0:as.docs,source:{originalSource:`{
  args: {
    data,
    minX: 1
  }
}`,...(os=(es=p.parameters)==null?void 0:es.docs)==null?void 0:os.source},description:{story:"minX — X-axis floor (category index); maximum and step still automatic.",...(is=(ts=p.parameters)==null?void 0:ts.docs)==null?void 0:is.description}}};const vs=["Default","HideAxis","NoTicks","NoSplitLines","BoundaryGap","LabelFormatter","XAxisLabel","FixedMinMax","FixedInterval","CategoryFloor"];export{t as BoundaryGap,p as CategoryFloor,r as Default,d as FixedInterval,c as FixedMinMax,a as HideAxis,i as LabelFormatter,o as NoSplitLines,e as NoTicks,n as XAxisLabel,vs as __namedExportsOrder,Fs as default};
