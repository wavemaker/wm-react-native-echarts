import{m as O}from"./meta-ZX5Z0jBm.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./dataSample-YMfQ_6XR.js";import"./createSeriesDataSimply-BSDWH4oQ.js";import"./install-9dos4XC1.js";import"./labelHelper-CzHPQigS.js";import"./sectorHelper-DjU9oWJ9.js";import"./install-BiL3BzV2.js";import"./points-Douv9Vrc.js";import"./cartesian-C25Uk8mH.js";const es={...O,title:"Charts/Candlestick/Y-Axis"},s=["Mon","Tue","Wed","Thu","Fri"],r=[[20,34,10,38],[40,35,30,50],[31,38,33,44],[38,15,5,42],[25,32,28,35]],a={args:{data:r,xAxisData:s}},e={args:{data:r,xAxisData:s,showYAxis:!1}},i={args:{data:r,xAxisData:s,showYAxisTicks:!1}},o={args:{data:r,xAxisData:s,showYAxisSplitLines:!1}},t={args:{data:r,xAxisData:s,yAxisTickLabelFormatter:M=>`$${Number(M).toFixed(0)}`}},c={args:{data:r,xAxisData:s,yAxisLabel:"Price ($)"}};var n,p,d,m,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:"Y-axis scale from data (price).",...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.description}}};var x,u,A,g,f;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    showYAxis: false
  }
}`,...(A=(u=e.parameters)==null?void 0:u.docs)==null?void 0:A.source},description:{story:"showYAxis: false — Y-axis and labels hidden.",...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var h,Y,b,L,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    showYAxisTicks: false
  }
}`,...(b=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:b.source},description:{story:"showYAxisTicks: false — Y-axis visible, tick marks hidden.",...(y=(L=i.parameters)==null?void 0:L.docs)==null?void 0:y.description}}};var k,S,T,w,D;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    showYAxisSplitLines: false
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.description}}};var F,N,$,_,v;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    yAxisTickLabelFormatter: value => \`$\${Number(value).toFixed(0)}\`
  }
}`,...($=(N=t.parameters)==null?void 0:N.docs)==null?void 0:$.source},description:{story:"yAxisTickLabelFormatter — e.g. add prefix/suffix.",...(v=(_=t.parameters)==null?void 0:_.docs)==null?void 0:v.description}}};var C,H,P,z,E;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    yAxisLabel: 'Price ($)'
  }
}`,...(P=(H=c.parameters)==null?void 0:H.docs)==null?void 0:P.source},description:{story:"yAxisLabel — Y-axis label displayed along the axis.",...(E=(z=c.parameters)==null?void 0:z.docs)==null?void 0:E.description}}};const is=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel"];export{a as Default,e as HideAxis,t as LabelFormatter,o as NoSplitLines,i as NoTicks,c as YAxisLabel,is as __namedExportsOrder,es as default};
