import{m as Z}from"./meta-DffN3gIn.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-sCUu3WLk.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-BiL3BzV2.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./dataSample-YMfQ_6XR.js";import"./area.args-BM6SB80j.js";import"./cartesian-C25Uk8mH.js";const gr={...Z,title:"Charts/Area/X-Axis"},r=[40,82,91,74,120,95],a={args:{data:r}},e={args:{data:r,showXAxis:!1}},t={args:{data:r,showXAxisTicks:!1}},o={args:{data:r,showXAxisSplitLines:!1}},i={args:{data:r,boundaryGap:!0}},n={args:{data:[40,82,91,74,120,95],xAxisTicks:[0,1,2,3,4,5,6,7,8,9],xAxisTickLabelFormatter:s=>{const W=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],Y=Number(s);return W[Y]??String(s)}}},c={args:{data:[40,82,91,74,120,95],xAxisTickLabelFormatter:s=>{switch(Number(s)){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";default:return String(s)}}}},p={args:{data:r,xAxisLabel:"Month"}};var d,m,u,l,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"X-axis shows data indices (0, 1, 2, ...).",...(x=(l=a.parameters)==null?void 0:l.docs)==null?void 0:x.description}}};var b,g,A,h,k;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(A=(g=e.parameters)==null?void 0:g.docs)==null?void 0:A.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(k=(h=e.parameters)==null?void 0:h.docs)==null?void 0:k.description}}};var f,S,y,L,X;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(X=(L=t.parameters)==null?void 0:L.docs)==null?void 0:X.description}}};var T,w,F,J,M;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(F=(w=o.parameters)==null?void 0:w.docs)==null?void 0:F.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(M=(J=o.parameters)==null?void 0:J.docs)==null?void 0:M.description}}};var v,N,G,_,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: true
  }
}`,...(G=(N=i.parameters)==null?void 0:N.docs)==null?void 0:G.source},description:{story:"boundaryGap: true — gaps at the start and end of the axis.",...(C=(_=i.parameters)==null?void 0:_.docs)==null?void 0:C.description}}};var O,B,D,H,E;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: [40, 82, 91, 74, 120, 95],
    xAxisTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    xAxisTickLabelFormatter: value => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
      const i = Number(value);
      return labels[i] ?? String(value);
    }
  }
}`,...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:"xAxisTicks: numeric tick values; labels from xAxisTickLabelFormatter (6 data, 10 ticks).",...(E=(H=n.parameters)==null?void 0:H.docs)==null?void 0:E.description}}};var j,q,z,I,K;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data: [40, 82, 91, 74, 120, 95],
    xAxisTickLabelFormatter: value => {
      switch (Number(value)) {
        case 0:
          return 'Jan';
        case 1:
          return 'Feb';
        case 2:
          return 'Mar';
        case 3:
          return 'Apr';
        case 4:
          return 'May';
        case 5:
          return 'Jun';
        default:
          return String(value);
      }
    }
  }
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"xAxisTickLabelFormatter: format X-axis tick labels (e.g. abbreviate or add suffix).",...(K=(I=c.parameters)==null?void 0:I.docs)==null?void 0:K.description}}};var P,Q,R,U,V;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'Month'
  }
}`,...(R=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:R.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(V=(U=p.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};const Ar=["Default","HideAxis","NoTicks","NoSplitLines","BoundaryGap","CustomTicks","LabelFormatter","XAxisLabel"];export{i as BoundaryGap,n as CustomTicks,a as Default,e as HideAxis,c as LabelFormatter,o as NoSplitLines,t as NoTicks,p as XAxisLabel,Ar as __namedExportsOrder,gr as default};
