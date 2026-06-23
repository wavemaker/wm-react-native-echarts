import{m as cr}from"./meta-CmcNvKTP.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-DrjqnKLG.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-B-FBt8Sx.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./cartesian-C7nMcwZE.js";const Tr={...cr,title:"Charts/Line/X-Axis"},r=[40,82,91,74,120,95],s={args:{data:r}},a={args:{data:r,showXAxis:!1}},e={args:{data:r,showXAxisTicks:!1}},o={args:{data:r,showXAxisSplitLines:!1}},t={args:{data:r,boundaryGap:!0}},i={args:{data:r,xAxisTickLabelFormatter:nr=>`${String(nr).slice(0,1)}.0`}},n={args:{data:r,xAxisLabel:"Month"}},c={args:{data:r,minX:1,maxX:4}},d={args:{data:r,minX:0,maxX:5,intervalX:2}},p={args:{data:r,minX:1}};var m,l,x,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(x=(l=s.parameters)==null?void 0:l.docs)==null?void 0:x.source},description:{story:"X-axis shows data indices (0, 1, 2, ...).",...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var X,y,A,h,b;a.parameters={...a.parameters,docs:{...(X=a.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(A=(y=a.parameters)==null?void 0:y.docs)==null?void 0:A.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.description}}};var f,S,L,w,k;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(L=(S=e.parameters)==null?void 0:S.docs)==null?void 0:L.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(k=(w=e.parameters)==null?void 0:w.docs)==null?void 0:k.description}}};var F,v,T,M,G;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(G=(M=o.parameters)==null?void 0:M.docs)==null?void 0:G.description}}};var N,_,C,B,D;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: true
  }
}`,...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.source},description:{story:"boundaryGap: true — gaps at the start and end of the axis.",...(D=(B=t.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var H,I,$,E,O;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTickLabelFormatter: value => \`\${String(value).slice(0, 1)}.0\`
  }
}`,...($=(I=i.parameters)==null?void 0:I.docs)==null?void 0:$.source},description:{story:"xAxisTickLabelFormatter: format X-axis tick labels.",...(O=(E=i.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};var j,q,z,J,K;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'Month'
  }
}`,...(z=(q=n.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var P,Q,R,U,V;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data,
    minX: 1,
    maxX: 4
  }
}`,...(R=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:R.source},description:{story:"minX and maxX — fixed X-axis extent (category index; six points → narrow window).",...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.description}}};var W,Y,Z,rr,sr;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data,
    minX: 0,
    maxX: 5,
    intervalX: 2
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"minX, maxX, and intervalX — category axis with explicit tick interval.",...(sr=(rr=d.parameters)==null?void 0:rr.docs)==null?void 0:sr.description}}};var ar,er,or,tr,ir;p.parameters={...p.parameters,docs:{...(ar=p.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    data,
    minX: 1
  }
}`,...(or=(er=p.parameters)==null?void 0:er.docs)==null?void 0:or.source},description:{story:"minX — X-axis floor (category index); maximum and step still automatic.",...(ir=(tr=p.parameters)==null?void 0:tr.docs)==null?void 0:ir.description}}};const Mr=["Default","HideAxis","NoTicks","NoSplitLines","BoundaryGap","LabelFormatter","XAxisLabel","FixedMinMax","FixedInterval","CategoryFloor"];export{t as BoundaryGap,p as CategoryFloor,s as Default,d as FixedInterval,c as FixedMinMax,a as HideAxis,i as LabelFormatter,o as NoSplitLines,e as NoTicks,n as XAxisLabel,Mr as __namedExportsOrder,Tr as default};
