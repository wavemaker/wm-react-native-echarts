import{m as j}from"./meta-7LYq0ILR.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-sCUu3WLk.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-BiL3BzV2.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./dataSample-YMfQ_6XR.js";import"./cartesian-C25Uk8mH.js";const rs={...j,title:"Charts/Line/Y-Axis"},s=[40,82,91,74,90,88],r={args:{data:s}},e={args:{data:s,showYAxis:!1}},a={args:{data:s,showYAxisTicks:!1}},o={args:{data:s,showYAxisSplitLines:!1}},t={args:{data:s,yAxisTickLabelFormatter:O=>`${O} pts`}},i={args:{data:s,yAxisLabel:"Amount"}};var c,n,p,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source},description:{story:"Y-axis scale computed from the dataset.",...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};var l,x,u,A,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data,
    showYAxis: false
  }
}`,...(u=(x=e.parameters)==null?void 0:x.docs)==null?void 0:u.source},description:{story:"showYAxis: false — Y-axis and its labels hidden.",...(g=(A=e.parameters)==null?void 0:A.docs)==null?void 0:g.description}}};var Y,h,L,b,f;a.parameters={...a.parameters,docs:{...(Y=a.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisTicks: false
  }
}`,...(L=(h=a.parameters)==null?void 0:h.docs)==null?void 0:L.source},description:{story:"showYAxisTicks: false — Y-axis visible but tick marks hidden.",...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var y,k,S,w,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisSplitLines: false
  }
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.description}}};var F,N,_,v,D;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    yAxisTickLabelFormatter: value => \`\${value} pts\`
  }
}`,...(_=(N=t.parameters)==null?void 0:N.docs)==null?void 0:_.source},description:{story:"yAxisTickLabelFormatter: format Y-axis tick labels (e.g. add units).",...(D=(v=t.parameters)==null?void 0:v.docs)==null?void 0:D.description}}};var H,$,z,C,E;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data,
    yAxisLabel: 'Amount'
  }
}`,...(z=($=i.parameters)==null?void 0:$.docs)==null?void 0:z.source},description:{story:"yAxisLabel — Y-axis label displayed along the axis.",...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};const es=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel"];export{r as Default,e as HideAxis,t as LabelFormatter,o as NoSplitLines,a as NoTicks,i as YAxisLabel,es as __namedExportsOrder,rs as default};
