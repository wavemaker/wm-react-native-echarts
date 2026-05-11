import{m as cr}from"./meta-DpN4dPva.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./use-scatter-item-tooltip-DO9_ZKBe.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./common-fSim-PaJ.js";import"./install-fh8zqSy2.js";import"./dataSample-LQN_tCZn.js";const kr={...cr,title:"Charts/Scatter/X-Axis"},r=[[10,5],[0,8],[6,10],[2,12],[8,9]],a={args:{data:r}},s={args:{data:r,showXAxis:!1}},e={args:{data:r,showXAxisTicks:!1}},o={args:{data:r,showXAxisSplitLines:!1}},t={args:{data:r,xAxisTickLabelFormatter:nr=>`x=${nr}`}},i={args:{data:r,boundaryGap:!0}},n={args:{data:r,xAxisLabel:"X value"}},c={args:{data:r,minX:1,maxX:8}},d={args:{data:r,minX:0,maxX:10,intervalX:2}},p={args:{data:r,minX:2}};var m,l,x,u,X;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(x=(l=a.parameters)==null?void 0:l.docs)==null?void 0:x.source},description:{story:"Default: X-axis shown (value axis from data).",...(X=(u=a.parameters)==null?void 0:u.docs)==null?void 0:X.description}}};var g,y,A,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(A=(y=s.parameters)==null?void 0:y.docs)==null?void 0:A.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var h,S,L,v,k;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(L=(S=e.parameters)==null?void 0:S.docs)==null?void 0:L.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(k=(v=e.parameters)==null?void 0:v.docs)==null?void 0:k.description}}};var F,w,T,G,M;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(M=(G=o.parameters)==null?void 0:G.docs)==null?void 0:M.description}}};var N,_,C,D,B;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTickLabelFormatter: value => \`x=\${value}\`
  }
}`,...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.source},description:{story:"xAxisTickLabelFormatter: format X-axis (value) tick labels.",...(B=(D=t.parameters)==null?void 0:D.docs)==null?void 0:B.description}}};var H,I,$,z,E;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: true
  }
}`,...($=(I=i.parameters)==null?void 0:I.docs)==null?void 0:$.source},description:{story:"boundaryGap: true — gaps at the start and end of the axis.",...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.description}}};var O,j,q,J,K;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'X value'
  }
}`,...(q=(j=n.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var P,Q,R,U,V;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data,
    minX: 1,
    maxX: 8
  }
}`,...(R=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:R.source},description:{story:"minX and maxX — fixed X-axis extent (category index; non-zero min).",...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};var W,Y,Z,rr,ar;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data,
    minX: 0,
    maxX: 10,
    intervalX: 2
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"minX, maxX, and intervalX — explicit tick interval on category X.",...(ar=(rr=d.parameters)==null?void 0:rr.docs)==null?void 0:ar.description}}};var sr,er,or,tr,ir;p.parameters={...p.parameters,docs:{...(sr=p.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    data,
    minX: 2
  }
}`,...(or=(er=p.parameters)==null?void 0:er.docs)==null?void 0:or.source},description:{story:"minX — X-axis floor (category index).",...(ir=(tr=p.parameters)==null?void 0:tr.docs)==null?void 0:ir.description}}};const Fr=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","BoundaryGap","XAxisLabel","FixedMinMax","FixedInterval","CategoryFloor"];export{i as BoundaryGap,p as CategoryFloor,a as Default,d as FixedInterval,c as FixedMinMax,s as HideAxis,t as LabelFormatter,o as NoSplitLines,e as NoTicks,n as XAxisLabel,Fr as __namedExportsOrder,kr as default};
