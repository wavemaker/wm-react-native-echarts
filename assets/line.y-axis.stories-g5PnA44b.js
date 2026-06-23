import{m as as}from"./meta-CmcNvKTP.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-DrjqnKLG.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-B-FBt8Sx.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./cartesian-C7nMcwZE.js";const Ls={...as,title:"Charts/Line/Y-Axis"},s=[40,82,91,74,90,88],r={args:{data:s}},a={args:{data:s,showYAxis:!1}},e={args:{data:s,showYAxisTicks:!1}},o={args:{data:s,showYAxisSplitLines:!1}},i={args:{data:s,yAxisTickLabelFormatter:rs=>`${rs} pts`}},t={args:{data:s,yAxisLabel:"Amount"}},n={args:{data:s,minY:30,maxY:120}},c={args:{data:s,minY:0,maxY:100,intervalY:10}},m={args:{data:s,minY:20}};var p,d,l,x,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source},description:{story:"Y-axis scale computed from the dataset.",...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.description}}};var Y,g,A,h,y;a.parameters={...a.parameters,docs:{...(Y=a.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    data,
    showYAxis: false
  }
}`,...(A=(g=a.parameters)==null?void 0:g.docs)==null?void 0:A.source},description:{story:"showYAxis: false — Y-axis and its labels hidden.",...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var b,f,L,S,k;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisTicks: false
  }
}`,...(L=(f=e.parameters)==null?void 0:f.docs)==null?void 0:L.source},description:{story:"showYAxisTicks: false — Y-axis visible but tick marks hidden.",...(k=(S=e.parameters)==null?void 0:S.docs)==null?void 0:k.description}}};var v,F,w,T,M;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisSplitLines: false
  }
}`,...(w=(F=o.parameters)==null?void 0:F.docs)==null?void 0:w.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(M=(T=o.parameters)==null?void 0:T.docs)==null?void 0:M.description}}};var N,_,z,D,H;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data,
    yAxisTickLabelFormatter: value => \`\${value} pts\`
  }
}`,...(z=(_=i.parameters)==null?void 0:_.docs)==null?void 0:z.source},description:{story:"yAxisTickLabelFormatter: format Y-axis tick labels (e.g. add units).",...(H=(D=i.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};var I,V,$,C,E;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data,
    yAxisLabel: 'Amount'
  }
}`,...($=(V=t.parameters)==null?void 0:V.docs)==null?void 0:$.source},description:{story:"yAxisLabel — Y-axis label displayed along the axis.",...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var O,j,q,B,G;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data,
    minY: 30,
    maxY: 120
  }
}`,...(q=(j=n.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:"minY and maxY — fixed value-axis bounds (non-zero min, headroom above the series).",...(G=(B=n.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};var J,K,P,Q,R;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data,
    minY: 0,
    maxY: 100,
    intervalY: 10
  }
}`,...(P=(K=c.parameters)==null?void 0:K.docs)==null?void 0:P.source},description:{story:"minY, maxY, and intervalY — explicit range and tick step.",...(R=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:R.description}}};var U,W,X,Z,ss;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    data,
    minY: 20
  }
}`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:"minY — value-axis floor; maximum and tick step still chosen automatically.",...(ss=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ss.description}}};const Ss=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel","FixedMinMax","FixedInterval","ValueAxisFloor"];export{r as Default,c as FixedInterval,n as FixedMinMax,a as HideAxis,i as LabelFormatter,o as NoSplitLines,e as NoTicks,m as ValueAxisFloor,t as YAxisLabel,Ss as __namedExportsOrder,Ls as default};
