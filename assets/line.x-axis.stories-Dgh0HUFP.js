import{m as Y}from"./meta-7LYq0ILR.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-sCUu3WLk.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-BiL3BzV2.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./dataSample-YMfQ_6XR.js";import"./cartesian-C25Uk8mH.js";const gs={...Y,title:"Charts/Line/X-Axis"},s=[40,82,91,74,120,95],r={args:{data:s}},a={args:{data:s,showXAxis:!1}},e={args:{data:s,showXAxisTicks:!1}},t={args:{data:s,showXAxisSplitLines:!1}},o={args:{data:s,boundaryGap:!0}},i={args:{data:s,xAxisTicks:[0,1,2,3,4,5,6,7,8,9],xAxisTickLabelFormatter:p=>{const V=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],W=Number(p);return V[W]??String(p)}}},n={args:{data:s,xAxisTickLabelFormatter:p=>`${String(p).slice(0,1)}.0`}},c={args:{data:s,xAxisLabel:"Month"}};var d,m,l,u,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source},description:{story:"X-axis shows data indices (0, 1, 2, ...).",...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};var g,A,b,k,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(b=(A=a.parameters)==null?void 0:A.docs)==null?void 0:b.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(h=(k=a.parameters)==null?void 0:k.docs)==null?void 0:h.description}}};var L,S,X,f,y;e.parameters={...e.parameters,docs:{...(L=e.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(X=(S=e.parameters)==null?void 0:S.docs)==null?void 0:X.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var T,w,F,v,J;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(F=(w=t.parameters)==null?void 0:w.docs)==null?void 0:F.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(J=(v=t.parameters)==null?void 0:v.docs)==null?void 0:J.description}}};var M,N,G,_,C;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: true
  }
}`,...(G=(N=o.parameters)==null?void 0:N.docs)==null?void 0:G.source},description:{story:"boundaryGap: true — gaps at the start and end of the axis.",...(C=(_=o.parameters)==null?void 0:_.docs)==null?void 0:C.description}}};var O,B,D,H,$;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    xAxisTickLabelFormatter: value => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
      const i = Number(value);
      return labels[i] ?? String(value);
    }
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:"xAxisTicks: numeric tick values; labels from xAxisTickLabelFormatter (6 data, 10 ticks).",...($=(H=i.parameters)==null?void 0:H.docs)==null?void 0:$.description}}};var E,j,q,z,I;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTickLabelFormatter: value => \`\${String(value).slice(0, 1)}.0\`
  }
}`,...(q=(j=n.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:"xAxisTickLabelFormatter: format X-axis tick labels.",...(I=(z=n.parameters)==null?void 0:z.docs)==null?void 0:I.description}}};var K,P,Q,R,U;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'Month'
  }
}`,...(Q=(P=c.parameters)==null?void 0:P.docs)==null?void 0:Q.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};const As=["Default","HideAxis","NoTicks","NoSplitLines","BoundaryGap","CustomTicks","LabelFormatter","XAxisLabel"];export{o as BoundaryGap,i as CustomTicks,r as Default,a as HideAxis,n as LabelFormatter,t as NoSplitLines,e as NoTicks,c as XAxisLabel,As as __namedExportsOrder,gs as default};
