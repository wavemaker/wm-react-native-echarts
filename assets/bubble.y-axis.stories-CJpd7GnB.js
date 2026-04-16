import{m as O}from"./meta-CJUv6gyd.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-elHyl0oQ.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./cartesian-C25Uk8mH.js";const X={...O,title:"Charts/Bubble/Y-Axis"},s=[[10,20,30],[15,25,15],[20,15,45],[25,30,25],[30,22,35]],r={args:{data:s}},a={args:{data:s,showYAxis:!1}},e={args:{data:s,showYAxisTicks:!1}},o={args:{data:s,showYAxisSplitLines:!1}},i={args:{data:s,yAxisTickLabelFormatter:E=>`y=${E}`}},t={args:{data:s,yAxisLabel:"Y"}};var c,n,p,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source},description:{story:"Default: Y-axis shown (value axis from data).",...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};var l,x,u,A,b;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data,
    showYAxis: false
  }
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source},description:{story:"showYAxis: false — Y-axis and its labels hidden.",...(b=(A=a.parameters)==null?void 0:A.docs)==null?void 0:b.description}}};var g,Y,f,h,y;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisTicks: false
  }
}`,...(f=(Y=e.parameters)==null?void 0:Y.docs)==null?void 0:f.source},description:{story:"showYAxisTicks: false — Y-axis visible but tick marks hidden.",...(y=(h=e.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var L,k,S,w,T;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisSplitLines: false
  }
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.description}}};var v,F,N,_,D;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data,
    yAxisTickLabelFormatter: value => \`y=\${value}\`
  }
}`,...(N=(F=i.parameters)==null?void 0:F.docs)==null?void 0:N.source},description:{story:"yAxisTickLabelFormatter: format Y-axis (value) tick labels.",...(D=(_=i.parameters)==null?void 0:_.docs)==null?void 0:D.description}}};var H,$,z,B,C;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data,
    yAxisLabel: 'Y'
  }
}`,...(z=($=t.parameters)==null?void 0:$.docs)==null?void 0:z.source},description:{story:"yAxisLabel — Y-axis label displayed along the axis.",...(C=(B=t.parameters)==null?void 0:B.docs)==null?void 0:C.description}}};const Z=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel"];export{r as Default,a as HideAxis,i as LabelFormatter,o as NoSplitLines,e as NoTicks,t as YAxisLabel,Z as __namedExportsOrder,X as default};
