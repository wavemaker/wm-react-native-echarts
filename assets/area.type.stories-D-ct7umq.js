import{m as T}from"./meta-GyzeNtZ1.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-DrjqnKLG.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-B-FBt8Sx.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./area.args-CMRTFbmo.js";import"./cartesian-C7nMcwZE.js";const Y={...T,title:"Charts/Area/Type"},b=[186,305,237,73,209,214],o=[40,82,91,74,120,95],s={args:{data:b}},t={args:{data:o,type:"smooth"}},e={args:{data:o,type:"step",step:"start"}},r={args:{data:o,type:"step",step:"middle"}},a={args:{data:o,type:"step",step:"end"}};var p,n,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data: defaultData
  }
}`,...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,m,c,u,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: curveData,
    type: 'smooth'
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source},description:{story:'Area chart with smooth curve interpolation (type="smooth").',...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.description}}};var S,g,y,h,D;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: curveData,
    type: 'step',
    step: 'start'
  }
}`,...(y=(g=e.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:"Step interpolation, mode start (default): step starts at the data point.",...(D=(h=e.parameters)==null?void 0:h.docs)==null?void 0:D.description}}};var f,v,_,E,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data: curveData,
    type: 'step',
    step: 'middle'
  }
}`,...(_=(v=r.parameters)==null?void 0:v.docs)==null?void 0:_.source},description:{story:"Step interpolation, mode middle: step is centered on the data point.",...(x=(E=r.parameters)==null?void 0:E.docs)==null?void 0:x.description}}};var A,M,w,C,O;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: curveData,
    type: 'step',
    step: 'end'
  }
}`,...(w=(M=a.parameters)==null?void 0:M.docs)==null?void 0:w.source},description:{story:"Step interpolation, mode end: step ends at the data point.",...(O=(C=a.parameters)==null?void 0:C.docs)==null?void 0:O.description}}};const Z=["Default","Smooth","StepStart","StepMiddle","StepEnd"];export{s as Default,t as Smooth,a as StepEnd,r as StepMiddle,e as StepStart,Z as __namedExportsOrder,Y as default};
