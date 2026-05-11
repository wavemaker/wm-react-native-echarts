import{m as cs}from"./meta-DUxyrNYG.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./use-scatter-item-tooltip-DO9_ZKBe.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./common-fSim-PaJ.js";const Ss={...cs,title:"Charts/Bubble/X-Axis"},s=[[10,20,30],[15,25,15],[20,15,45],[25,30,25],[30,22,35]],a={args:{data:s}},r={args:{data:s,showXAxis:!1}},e={args:{data:s,showXAxisTicks:!1}},o={args:{data:s,showXAxisSplitLines:!1}},t={args:{data:s,xAxisTickLabelFormatter:ns=>`x=${ns}`}},i={args:{data:s,boundaryGap:!0}},n={args:{data:s,xAxisLabel:"X"}},c={args:{data:s,minX:8,maxX:35}},d={args:{data:s,minX:0,maxX:35,intervalX:5}},p={args:{data:s,minX:12}};var m,l,u,x,X;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"Default: X-axis shown (value axis from data).",...(X=(x=a.parameters)==null?void 0:x.docs)==null?void 0:X.description}}};var g,b,A,f,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(A=(b=r.parameters)==null?void 0:b.docs)==null?void 0:A.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};var y,L,S,v,k;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(S=(L=e.parameters)==null?void 0:L.docs)==null?void 0:S.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(k=(v=e.parameters)==null?void 0:v.docs)==null?void 0:k.description}}};var F,w,T,G,M;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(M=(G=o.parameters)==null?void 0:G.docs)==null?void 0:M.description}}};var N,_,B,D,H;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTickLabelFormatter: value => \`x=\${value}\`
  }
}`,...(B=(_=t.parameters)==null?void 0:_.docs)==null?void 0:B.source},description:{story:"xAxisTickLabelFormatter: format X-axis (value) tick labels.",...(H=(D=t.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};var I,V,$,z,C;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: true
  }
}`,...($=(V=i.parameters)==null?void 0:V.docs)==null?void 0:$.source},description:{story:"boundaryGap: true — gaps at the start and end of the axis.",...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.description}}};var E,O,j,q,J;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'X'
  }
}`,...(j=(O=n.parameters)==null?void 0:O.docs)==null?void 0:j.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(J=(q=n.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var K,P,Q,R,U;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    data,
    minX: 8,
    maxX: 35
  }
}`,...(Q=(P=c.parameters)==null?void 0:P.docs)==null?void 0:Q.source},description:{story:"minX and maxX — fixed numeric X scale (non-zero min; bubble X ≈ 10–30).",...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};var W,Y,Z,ss,as;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data,
    minX: 0,
    maxX: 35,
    intervalX: 5
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"minX, maxX, and intervalX — explicit value scale and tick step on X.",...(as=(ss=d.parameters)==null?void 0:ss.docs)==null?void 0:as.description}}};var rs,es,os,ts,is;p.parameters={...p.parameters,docs:{...(rs=p.parameters)==null?void 0:rs.docs,source:{originalSource:`{
  args: {
    data,
    minX: 12
  }
}`,...(os=(es=p.parameters)==null?void 0:es.docs)==null?void 0:os.source},description:{story:"minX — value floor on X; maximum and step still automatic.",...(is=(ts=p.parameters)==null?void 0:ts.docs)==null?void 0:is.description}}};const vs=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","BoundaryGap","XAxisLabel","FixedMinMax","FixedInterval","ValueAxisFloor"];export{i as BoundaryGap,a as Default,d as FixedInterval,c as FixedMinMax,r as HideAxis,t as LabelFormatter,o as NoSplitLines,e as NoTicks,p as ValueAxisFloor,n as XAxisLabel,vs as __namedExportsOrder,Ss as default};
