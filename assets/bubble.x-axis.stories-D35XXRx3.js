import{m as K}from"./meta-CJUv6gyd.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-elHyl0oQ.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./cartesian-C25Uk8mH.js";const os={...K,title:"Charts/Bubble/X-Axis"},s=[[10,20,30],[15,25,15],[20,15,45],[25,30,25],[30,22,35]],a={args:{data:s}},r={args:{data:s,showXAxis:!1}},e={args:{data:s,showXAxisTicks:!1}},o={args:{data:s,showXAxisSplitLines:!1}},t={args:{data:s,xAxisTickLabelFormatter:J=>`x=${J}`}},i={args:{data:s,boundaryGap:!0}},n={args:{data:s,xAxisLabel:"X"}};var c,p,d,m,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:"Default: X-axis shown (value axis from data).",...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.description}}};var u,x,g,b,A;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(A=(b=r.parameters)==null?void 0:b.docs)==null?void 0:A.description}}};var X,f,h,L,y;e.parameters={...e.parameters,docs:{...(X=e.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(h=(f=e.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(y=(L=e.parameters)==null?void 0:L.docs)==null?void 0:y.description}}};var S,k,w,T,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(v=(T=o.parameters)==null?void 0:T.docs)==null?void 0:v.description}}};var F,G,N,_,B;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTickLabelFormatter: value => \`x=\${value}\`
  }
}`,...(N=(G=t.parameters)==null?void 0:G.docs)==null?void 0:N.source},description:{story:"xAxisTickLabelFormatter: format X-axis (value) tick labels.",...(B=(_=t.parameters)==null?void 0:_.docs)==null?void 0:B.description}}};var D,H,$,C,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: true
  }
}`,...($=(H=i.parameters)==null?void 0:H.docs)==null?void 0:$.source},description:{story:"boundaryGap: true — gaps at the start and end of the axis.",...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var O,j,q,z,I;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'X'
  }
}`,...(q=(j=n.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(I=(z=n.parameters)==null?void 0:z.docs)==null?void 0:I.description}}};const ts=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","BoundaryGap","XAxisLabel"];export{i as BoundaryGap,a as Default,r as HideAxis,t as LabelFormatter,o as NoSplitLines,e as NoTicks,n as XAxisLabel,ts as __namedExportsOrder,os as default};
