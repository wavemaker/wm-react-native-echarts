import{m as O}from"./meta-DffN3gIn.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-sCUu3WLk.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-BiL3BzV2.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./dataSample-YMfQ_6XR.js";import"./area.args-BM6SB80j.js";import"./cartesian-C25Uk8mH.js";const as={...O,title:"Charts/Area/Y-Axis"},s=[40,82,91,74,90,88],r={args:{data:s}},e={args:{data:s,showYAxis:!1}},a={args:{data:s,showYAxisTicks:!1}},o={args:{data:s,showYAxisSplitLines:!1}},t={args:{data:s,yAxisTickLabelFormatter:K=>{const n=Number(K);return n>=1e3?`${(n/1e3).toFixed(1)}k`:String(n)}}},i={args:{data:s,yAxisLabel:"Revenue ($)"}};var c,p,d,m,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:"Y-axis scale computed from the dataset.",...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.description}}};var u,x,g,A,b;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data,
    showYAxis: false
  }
}`,...(g=(x=e.parameters)==null?void 0:x.docs)==null?void 0:g.source},description:{story:"showYAxis: false — Y-axis and its labels hidden.",...(b=(A=e.parameters)==null?void 0:A.docs)==null?void 0:b.description}}};var h,Y,f,L,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisTicks: false
  }
}`,...(f=(Y=a.parameters)==null?void 0:Y.docs)==null?void 0:f.source},description:{story:"showYAxisTicks: false — Y-axis visible but tick marks hidden.",...(y=(L=a.parameters)==null?void 0:L.docs)==null?void 0:y.description}}};var k,S,w,T,F;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisSplitLines: false
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.description}}};var N,v,_,$,D;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data,
    yAxisTickLabelFormatter: value => {
      const n = Number(value);
      return n >= 1000 ? \`\${(n / 1000).toFixed(1)}k\` : String(n);
    }
  }
}`,...(_=(v=t.parameters)==null?void 0:v.docs)==null?void 0:_.source},description:{story:"yAxisTickLabelFormatter: format Y-axis tick labels (e.g. add K for thousands).",...(D=($=t.parameters)==null?void 0:$.docs)==null?void 0:D.description}}};var H,R,z,C,E;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data,
    yAxisLabel: 'Revenue ($)'
  }
}`,...(z=(R=i.parameters)==null?void 0:R.docs)==null?void 0:z.source},description:{story:"yAxisLabel — Y-axis label displayed along the axis.",...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};const os=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel"];export{r as Default,e as HideAxis,t as LabelFormatter,o as NoSplitLines,a as NoTicks,i as YAxisLabel,os as __namedExportsOrder,as as default};
