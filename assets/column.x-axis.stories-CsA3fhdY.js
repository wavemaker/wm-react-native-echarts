import{m as Z}from"./meta-DQP0OanO.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-CwF2pesq.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-9dos4XC1.js";import"./dataSample-YMfQ_6XR.js";import"./labelHelper-CzHPQigS.js";import"./sectorHelper-DjU9oWJ9.js";import"./cartesian-C25Uk8mH.js";const gs={...Z,title:"Charts/Column/X-Axis"},s=[40,82,91,74,120,95],a={args:{data:s}},e={args:{data:s,showXAxis:!1}},t={args:{data:s,showXAxisTicks:!1}},o={args:{data:s,showXAxisSplitLines:!1}},i={args:{data:s,boundaryGap:!1}},n={args:{data:s,xAxisTicks:[0,1,2,3,4,5,6,7,8,9],xAxisTickLabelFormatter:r=>{const d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],Y=Number(r);return d[Y]??String(r)}}},c={args:{data:s,xAxisTickLabelFormatter:r=>({0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun"})[String(r)]??String(r)}},p={args:{data:s,xAxisLabel:"Month"}};var m,l,u,x,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"X-axis shows data indices (0, 1, 2, ...).",...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.description}}};var b,A,k,S,f;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(k=(A=e.parameters)==null?void 0:A.docs)==null?void 0:k.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(f=(S=e.parameters)==null?void 0:S.docs)==null?void 0:f.description}}};var h,y,L,X,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(L=(y=t.parameters)==null?void 0:y.docs)==null?void 0:L.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(T=(X=t.parameters)==null?void 0:X.docs)==null?void 0:T.description}}};var F,w,J,M,N;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(J=(w=o.parameters)==null?void 0:w.docs)==null?void 0:J.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(N=(M=o.parameters)==null?void 0:M.docs)==null?void 0:N.description}}};var v,G,C,_,O;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: false
  }
}`,...(C=(G=i.parameters)==null?void 0:G.docs)==null?void 0:C.source},description:{story:"boundaryGap: false — columns extend to axis edges.",...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};var B,D,H,E,R;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    xAxisTickLabelFormatter: value => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
      const i = Number(value);
      return labels[i] ?? String(value);
    }
  }
}`,...(H=(D=n.parameters)==null?void 0:D.docs)==null?void 0:H.source},description:{story:"xAxisTicks: numeric tick values; labels from xAxisTickLabelFormatter (6 data, 10 ticks).",...(R=(E=n.parameters)==null?void 0:E.docs)==null?void 0:R.description}}};var j,q,z,I,K;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTickLabelFormatter: value => {
      const labels: Record<string, string> = {
        '0': 'Jan',
        '1': 'Feb',
        '2': 'Mar',
        '3': 'Apr',
        '4': 'May',
        '5': 'Jun'
      };
      return labels[String(value)] ?? String(value);
    }
  }
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"xAxisTickLabelFormatter: format X-axis tick labels (e.g. month names).",...(K=(I=c.parameters)==null?void 0:I.docs)==null?void 0:K.description}}};var P,Q,U,V,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'Month'
  }
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};const bs=["Default","HideAxis","NoTicks","NoSplitLines","NoBoundaryGap","CustomTicks","LabelFormatter","XAxisLabel"];export{n as CustomTicks,a as Default,e as HideAxis,c as LabelFormatter,i as NoBoundaryGap,o as NoSplitLines,t as NoTicks,p as XAxisLabel,bs as __namedExportsOrder,gs as default};
