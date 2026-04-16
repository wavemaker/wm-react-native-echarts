import{m as j}from"./meta-DmV-h9HO.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-elHyl0oQ.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./install-BiL3BzV2.js";import"./dataSample-YMfQ_6XR.js";import"./cartesian-C25Uk8mH.js";const rs={...j,title:"Charts/Scatter/Y-Axis"},s=[[10,5],[0,8],[6,10],[2,12],[8,9]],r={args:{data:s}},a={args:{data:s,showYAxis:!1}},e={args:{data:s,showYAxisTicks:!1}},o={args:{data:s,showYAxisSplitLines:!1}},t={args:{data:s,yAxisTickLabelFormatter:O=>`y=${O}`}},i={args:{data:s,yAxisLabel:"Y value"}};var c,n,p,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source},description:{story:"Default: Y-axis shown (value axis from data).",...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};var l,x,u,A,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data,
    showYAxis: false
  }
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source},description:{story:"showYAxis: false — Y-axis and its labels hidden.",...(g=(A=a.parameters)==null?void 0:A.docs)==null?void 0:g.description}}};var Y,f,h,y,b;e.parameters={...e.parameters,docs:{...(Y=e.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisTicks: false
  }
}`,...(h=(f=e.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"showYAxisTicks: false — Y-axis visible but tick marks hidden.",...(b=(y=e.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var L,S,k,w,T;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisSplitLines: false
  }
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.description}}};var v,F,N,_,D;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data,
    yAxisTickLabelFormatter: value => \`y=\${value}\`
  }
}`,...(N=(F=t.parameters)==null?void 0:F.docs)==null?void 0:N.source},description:{story:"yAxisTickLabelFormatter: format Y-axis (value) tick labels.",...(D=(_=t.parameters)==null?void 0:_.docs)==null?void 0:D.description}}};var H,$,z,C,E;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data,
    yAxisLabel: 'Y value'
  }
}`,...(z=($=i.parameters)==null?void 0:$.docs)==null?void 0:z.source},description:{story:"yAxisLabel — Y-axis label displayed along the axis.",...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};const as=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel"];export{r as Default,a as HideAxis,t as LabelFormatter,o as NoSplitLines,e as NoTicks,i as YAxisLabel,as as __namedExportsOrder,rs as default};
