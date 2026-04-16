import{m as _}from"./meta-UM1JHaG3.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./common-BBO5jU0Y.js";import"./install-DfB1csNh.js";import"./install-DO9VZV3L.js";import"./LegendVisualProvider-CgY2uWFN.js";import"./sectorHelper-DjU9oWJ9.js";import"./createSeriesDataSimply-BSDWH4oQ.js";const z={..._,title:"Charts/Pie/Label"},o=[{name:"Desktop",value:275},{name:"Mobile",value:200},{name:"Tablet",value:187},{name:"Other",value:90}],e={args:{data:o,showLabel:!0,labelPosition:"outside",showLabelLine:!0}},s={args:{data:o,showLabel:!0,labelPosition:"inside",showLabelLine:!1}},a={args:{data:o,radius:["50%","75%"],showLabel:!0,labelPosition:"center",showLabelLine:!1}},r={args:{data:o,showLabel:!1}};var t,i,n,l,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    data,
    showLabel: true,
    labelPosition: 'outside',
    showLabelLine: true
  }
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source},description:{story:"Labels outside with label lines (default).",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};var d,p,m,u,b;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data,
    showLabel: true,
    labelPosition: 'inside',
    showLabelLine: false
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"Labels inside slices.",...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.description}}};var L,h,w,g,f;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data,
    radius: ['50%', '75%'],
    showLabel: true,
    labelPosition: 'center',
    showLabelLine: false
  }
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source},description:{story:"Labels in center (for donut).",...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var P,v,y,O,S;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data,
    showLabel: false
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"No labels.",...(S=(O=r.parameters)==null?void 0:O.docs)==null?void 0:S.description}}};const A=["Outside","Inside","Center","NoLabels"];export{a as Center,s as Inside,r as NoLabels,e as Outside,A as __namedExportsOrder,z as default};
