import{m as cr}from"./meta-CEPI5cI_.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-D69Pifby.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-fh8zqSy2.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./dataSample-LQN_tCZn.js";import"./area.args-DizI-4Mn.js";const vr={...cr,title:"Charts/Area/X-Axis"},r=[40,82,91,74,120,95],a={args:{data:r}},e={args:{data:r,showXAxis:!1}},s={args:{data:r,showXAxisTicks:!1}},t={args:{data:r,showXAxisSplitLines:!1}},o={args:{data:r,boundaryGap:!0}},i={args:{data:[40,82,91,74,120,95],xAxisTickLabelFormatter:m=>{switch(Number(m)){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";default:return String(m)}}}},n={args:{data:r,xAxisLabel:"Month"}},c={args:{data:r,minX:1,maxX:4}},d={args:{data:r,minX:0,maxX:5,intervalX:2}},p={args:{data:r,minX:1}};var u,l,x,g,X;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(x=(l=a.parameters)==null?void 0:l.docs)==null?void 0:x.source},description:{story:"X-axis shows data indices (0, 1, 2, ...).",...(X=(g=a.parameters)==null?void 0:g.docs)==null?void 0:X.description}}};var b,A,y,h,f;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(y=(A=e.parameters)==null?void 0:A.docs)==null?void 0:y.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};var S,w,L,F,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(L=(w=s.parameters)==null?void 0:w.docs)==null?void 0:L.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(k=(F=s.parameters)==null?void 0:F.docs)==null?void 0:k.description}}};var v,M,T,N,G;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(T=(M=t.parameters)==null?void 0:M.docs)==null?void 0:T.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(G=(N=t.parameters)==null?void 0:N.docs)==null?void 0:G.description}}};var J,_,C,B,D;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: true
  }
}`,...(C=(_=o.parameters)==null?void 0:_.docs)==null?void 0:C.source},description:{story:"boundaryGap: true — gaps at the start and end of the axis.",...(D=(B=o.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var H,I,E,O,j;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(E=(I=i.parameters)==null?void 0:I.docs)==null?void 0:E.source},description:{story:"xAxisTickLabelFormatter: format X-axis tick labels (e.g. abbreviate or add suffix).",...(j=(O=i.parameters)==null?void 0:O.docs)==null?void 0:j.description}}};var q,z,K,P,Q;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'Month'
  }
}`,...(K=(z=n.parameters)==null?void 0:z.docs)==null?void 0:K.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(Q=(P=n.parameters)==null?void 0:P.docs)==null?void 0:Q.description}}};var R,U,V,W,Y;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    data,
    minX: 1,
    maxX: 4
  }
}`,...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:"minX and maxX — fixed X-axis extent (category index; six points → narrow window).",...(Y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:Y.description}}};var Z,$,rr,ar,er;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    data,
    minX: 0,
    maxX: 5,
    intervalX: 2
  }
}`,...(rr=($=d.parameters)==null?void 0:$.docs)==null?void 0:rr.source},description:{story:"minX, maxX, and intervalX — category axis with explicit tick interval.",...(er=(ar=d.parameters)==null?void 0:ar.docs)==null?void 0:er.description}}};var sr,tr,or,ir,nr;p.parameters={...p.parameters,docs:{...(sr=p.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  args: {
    data,
    minX: 1
  }
}`,...(or=(tr=p.parameters)==null?void 0:tr.docs)==null?void 0:or.source},description:{story:"minX — X-axis floor (category index); maximum and step still automatic.",...(nr=(ir=p.parameters)==null?void 0:ir.docs)==null?void 0:nr.description}}};const Mr=["Default","HideAxis","NoTicks","NoSplitLines","BoundaryGap","LabelFormatter","XAxisLabel","FixedMinMax","FixedInterval","CategoryFloor"];export{o as BoundaryGap,p as CategoryFloor,a as Default,d as FixedInterval,c as FixedMinMax,e as HideAxis,i as LabelFormatter,t as NoSplitLines,s as NoTicks,n as XAxisLabel,Mr as __namedExportsOrder,vr as default};
