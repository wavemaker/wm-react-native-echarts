import{m as Y}from"./meta-DmV-h9HO.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-elHyl0oQ.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./install-BiL3BzV2.js";import"./dataSample-YMfQ_6XR.js";import"./cartesian-C25Uk8mH.js";const gs={...Y,title:"Charts/Scatter/X-Axis"},s=[[10,5],[0,8],[6,10],[2,12],[8,9]],r={args:{data:s}},a={args:{data:s,showXAxis:!1}},e={args:{data:s,showXAxisTicks:!1}},t={args:{data:s,showXAxisSplitLines:!1}},o={args:{data:s,xAxisTicks:[0,1,2,3,4,5,6,7],xAxisTickLabelFormatter:p=>{const V=["A","B","C","D","E","F","G","H"],W=Number(p);return V[W]??String(p)}}},i={args:{data:s,xAxisTickLabelFormatter:p=>`x=${p}`}},c={args:{data:s,boundaryGap:!0}},n={args:{data:s,xAxisLabel:"X value"}};var d,m,l,u,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source},description:{story:"Default: X-axis shown (value axis from data).",...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};var g,A,b,k,X;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(b=(A=a.parameters)==null?void 0:A.docs)==null?void 0:b.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(X=(k=a.parameters)==null?void 0:k.docs)==null?void 0:X.description}}};var f,L,h,S,T;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(h=(L=e.parameters)==null?void 0:L.docs)==null?void 0:h.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(T=(S=e.parameters)==null?void 0:S.docs)==null?void 0:T.description}}};var y,v,w,F,G;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(G=(F=t.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};var N,C,D,B,H;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTicks: [0, 1, 2, 3, 4, 5, 6, 7],
    xAxisTickLabelFormatter: value => {
      const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      const i = Number(value);
      return labels[i] ?? String(value);
    }
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:"xAxisTicks: numeric tick values; labels from xAxisTickLabelFormatter (5 data, 8 ticks).",...(H=(B=o.parameters)==null?void 0:B.docs)==null?void 0:H.description}}};var _,E,$,O,j;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTickLabelFormatter: value => \`x=\${value}\`
  }
}`,...($=(E=i.parameters)==null?void 0:E.docs)==null?void 0:$.source},description:{story:"xAxisTickLabelFormatter: format X-axis (value) tick labels.",...(j=(O=i.parameters)==null?void 0:O.docs)==null?void 0:j.description}}};var q,z,I,J,K;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: true
  }
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source},description:{story:"boundaryGap: true — gaps at the start and end of the axis.",...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var M,P,Q,R,U;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'X value'
  }
}`,...(Q=(P=n.parameters)==null?void 0:P.docs)==null?void 0:Q.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(U=(R=n.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};const As=["Default","HideAxis","NoTicks","NoSplitLines","CustomTicks","LabelFormatter","BoundaryGap","XAxisLabel"];export{c as BoundaryGap,o as CustomTicks,r as Default,a as HideAxis,i as LabelFormatter,t as NoSplitLines,e as NoTicks,n as XAxisLabel,As as __namedExportsOrder,gs as default};
