import{m as _}from"./meta-DEDHqH0H.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-CpjC6Ee1.js";import"./legend-position-CLb_FM1L.js";import"./sectorHelper-BbU6gYt3.js";import"./createSeriesDataSimply-DaXRNxVR.js";const A={..._,title:"Charts/Pie/Label"},o=[{name:"Desktop",value:275},{name:"Mobile",value:200},{name:"Tablet",value:187},{name:"Other",value:90}],e={args:{data:o,showLabel:!0,labelPosition:"outside",showLabelLine:!0}},s={args:{data:o,showLabel:!0,labelPosition:"inside",showLabelLine:!1}},a={args:{data:o,radius:["50%","75%"],showLabel:!0,labelPosition:"center",showLabelLine:!1}},r={args:{data:o,showLabel:!1}};var t,i,n,l,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"No labels.",...(S=(O=r.parameters)==null?void 0:O.docs)==null?void 0:S.description}}};const B=["Outside","Inside","Center","NoLabels"];export{a as Center,s as Inside,r as NoLabels,e as Outside,B as __namedExportsOrder,A as default};
