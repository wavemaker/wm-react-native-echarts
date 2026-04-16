import{m as O}from"./meta-DDnx52Ay.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-CwF2pesq.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-9dos4XC1.js";import"./dataSample-YMfQ_6XR.js";import"./labelHelper-CzHPQigS.js";import"./sectorHelper-DjU9oWJ9.js";import"./cartesian-C25Uk8mH.js";const es={...O,title:"Charts/Bar/Y-Axis"},s=[40,82,91,74,90,88],r={args:{data:s}},e={args:{data:s,showYAxis:!1}},a={args:{data:s,showYAxisTicks:!1}},o={args:{data:s,showYAxisSplitLines:!1}},t={args:{data:s,yAxisTickLabelFormatter:K=>{const n=Number(K);return n>=1e3?`${(n/1e3).toFixed(1)}k`:String(n)}}},i={args:{data:s,yAxisLabel:"Category"}};var c,p,d,m,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:"Y-axis scale computed from the dataset.",...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.description}}};var x,u,g,A,b;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data,
    showYAxis: false
  }
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:"showYAxis: false — Y-axis and its labels hidden.",...(b=(A=e.parameters)==null?void 0:A.docs)==null?void 0:b.description}}};var h,Y,f,y,L;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisTicks: false
  }
}`,...(f=(Y=a.parameters)==null?void 0:Y.docs)==null?void 0:f.source},description:{story:"showYAxisTicks: false — Y-axis visible but tick marks hidden.",...(L=(y=a.parameters)==null?void 0:y.docs)==null?void 0:L.description}}};var k,S,w,T,F;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisSplitLines: false
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.description}}};var N,_,v,C,z;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data,
    yAxisTickLabelFormatter: value => {
      const n = Number(value);
      return n >= 1000 ? \`\${(n / 1000).toFixed(1)}k\` : String(n);
    }
  }
}`,...(v=(_=t.parameters)==null?void 0:_.docs)==null?void 0:v.source},description:{story:"yAxisTickLabelFormatter: format Y-axis tick labels (e.g. add K for thousands).",...(z=(C=t.parameters)==null?void 0:C.docs)==null?void 0:z.description}}};var D,H,$,B,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data,
    yAxisLabel: 'Category'
  }
}`,...($=(H=i.parameters)==null?void 0:H.docs)==null?void 0:$.source},description:{story:"yAxisLabel — Y-axis label (horizontal bar: category axis).",...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.description}}};const as=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel"];export{r as Default,e as HideAxis,t as LabelFormatter,o as NoSplitLines,a as NoTicks,i as YAxisLabel,as as __namedExportsOrder,es as default};
