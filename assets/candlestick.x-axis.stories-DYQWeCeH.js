import{m as $}from"./meta-ZX5Z0jBm.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./dataSample-YMfQ_6XR.js";import"./createSeriesDataSimply-BSDWH4oQ.js";import"./install-9dos4XC1.js";import"./labelHelper-CzHPQigS.js";import"./sectorHelper-DjU9oWJ9.js";import"./install-BiL3BzV2.js";import"./points-Douv9Vrc.js";import"./cartesian-C25Uk8mH.js";const bs={...$,title:"Charts/Candlestick/X-Axis"},a=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],s=[[20,34,10,38],[40,35,30,50],[31,38,33,44],[38,15,5,42],[25,32,28,35],[30,25,20,40],[35,45,30,50]],r={args:{data:s,xAxisData:a}},e={args:{data:s,xAxisData:a,showXAxis:!1}},t={args:{data:s,xAxisData:a,showXAxisTicks:!1}},o={args:{data:s,xAxisData:a,showXAxisSplitLines:!1}},i={args:{data:s,xAxisData:a,boundaryGap:!1}},n={args:{data:s,xAxisTicks:[0,1,2,3,4,5,6,7,8,9,10,11],xAxisTickLabelFormatter:d=>{const Y=["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue","Wed","Thu","Fri"],Z=Number(d);return Y[Z]??String(d)}}},c={args:{data:s,xAxisData:a,xAxisTickLabelFormatter:d=>String(d).slice(0,2)}},p={args:{data:s,xAxisData:a,xAxisLabel:"Day"}};var m,l,x,u,A;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData
  }
}`,...(x=(l=r.parameters)==null?void 0:l.docs)==null?void 0:x.source},description:{story:"X-axis shows category labels.",...(A=(u=r.parameters)==null?void 0:u.docs)==null?void 0:A.description}}};var g,b,T,S,k;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    showXAxis: false
  }
}`,...(T=(b=e.parameters)==null?void 0:b.docs)==null?void 0:T.source},description:{story:"showXAxis: false — X-axis and labels hidden.",...(k=(S=e.parameters)==null?void 0:S.docs)==null?void 0:k.description}}};var h,f,L,y,X;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    showXAxisTicks: false
  }
}`,...(L=(f=t.parameters)==null?void 0:f.docs)==null?void 0:L.source},description:{story:"showXAxisTicks: false — X-axis visible, tick marks hidden.",...(X=(y=t.parameters)==null?void 0:y.docs)==null?void 0:X.description}}};var F,D,w,N,v;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    showXAxisSplitLines: false
  }
}`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(v=(N=o.parameters)==null?void 0:N.docs)==null?void 0:v.description}}};var G,M,W,C,_;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    boundaryGap: false
  }
}`,...(W=(M=i.parameters)==null?void 0:M.docs)==null?void 0:W.source},description:{story:"boundaryGap: false — no gap at axis ends.",...(_=(C=i.parameters)==null?void 0:C.docs)==null?void 0:_.description}}};var B,H,E,O,j;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xAxisTickLabelFormatter: value => {
      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      const i = Number(value);
      return labels[i] ?? String(value);
    }
  }
}`,...(E=(H=n.parameters)==null?void 0:H.docs)==null?void 0:E.source},description:{story:"xAxisTicks: numeric tick values; labels from xAxisTickLabelFormatter (7 data, 12 ticks).",...(j=(O=n.parameters)==null?void 0:O.docs)==null?void 0:j.description}}};var q,z,I,J,K;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    xAxisTickLabelFormatter: value => String(value).slice(0, 2)
  }
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source},description:{story:"xAxisTickLabelFormatter — custom label format.",...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var P,Q,R,U,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data,
    xAxisData,
    xAxisLabel: 'Day'
  }
}`,...(R=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:R.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};const Ts=["Default","HideAxis","NoTicks","NoSplitLines","NoBoundaryGap","CustomTicks","LabelFormatter","XAxisLabel"];export{n as CustomTicks,r as Default,e as HideAxis,c as LabelFormatter,i as NoBoundaryGap,o as NoSplitLines,t as NoTicks,p as XAxisLabel,Ts as __namedExportsOrder,bs as default};
