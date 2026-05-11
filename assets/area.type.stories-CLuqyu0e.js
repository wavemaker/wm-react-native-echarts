import{m as T}from"./meta-CEPI5cI_.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-D69Pifby.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-fh8zqSy2.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./dataSample-LQN_tCZn.js";import"./area.args-DizI-4Mn.js";const W={...T,title:"Charts/Area/Type"},b=[186,305,237,73,209,214],o=[40,82,91,74,120,95],s={args:{data:b}},t={args:{data:o,type:"smooth"}},e={args:{data:o,type:"step",step:"start"}},r={args:{data:o,type:"step",step:"middle"}},a={args:{data:o,type:"step",step:"end"}};var p,n,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data: defaultData
  }
}`,...(d=(n=s.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,c,m,u,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: curveData,
    type: 'smooth'
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:'Area chart with smooth curve interpolation (type="smooth").',...(l=(u=t.parameters)==null?void 0:u.docs)==null?void 0:l.description}}};var S,g,y,h,D;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(M=a.parameters)==null?void 0:M.docs)==null?void 0:w.source},description:{story:"Step interpolation, mode end: step ends at the data point.",...(O=(C=a.parameters)==null?void 0:C.docs)==null?void 0:O.description}}};const X=["Default","Smooth","StepStart","StepMiddle","StepEnd"];export{s as Default,t as Smooth,a as StepEnd,r as StepMiddle,e as StepStart,X as __namedExportsOrder,W as default};
