import{m as as}from"./meta-Wes3cbXa.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./use-scatter-item-tooltip-pODPcTwS.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./common-WjgByzXx.js";import"./install-B-FBt8Sx.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./cartesian-C7nMcwZE.js";const bs={...as,title:"Charts/Scatter/Y-Axis"},s=[[10,5],[0,8],[6,10],[2,12],[8,9]],r={args:{data:s}},a={args:{data:s,showYAxis:!1}},e={args:{data:s,showYAxisTicks:!1}},o={args:{data:s,showYAxisSplitLines:!1}},i={args:{data:s,yAxisTickLabelFormatter:rs=>`y=${rs}`}},t={args:{data:s,yAxisLabel:"Y value"}},n={args:{data:s,minY:4,maxY:16}},c={args:{data:s,minY:0,maxY:15,intervalY:5}},p={args:{data:s,minY:4}};var m,d,l,x,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source},description:{story:"Default: Y-axis shown (value axis from data).",...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.description}}};var Y,g,A,y,f;a.parameters={...a.parameters,docs:{...(Y=a.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    data,
    showYAxis: false
  }
}`,...(A=(g=a.parameters)==null?void 0:g.docs)==null?void 0:A.source},description:{story:"showYAxis: false — Y-axis and its labels hidden.",...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var h,b,L,S,k;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisTicks: false
  }
}`,...(L=(b=e.parameters)==null?void 0:b.docs)==null?void 0:L.source},description:{story:"showYAxisTicks: false — Y-axis visible but tick marks hidden.",...(k=(S=e.parameters)==null?void 0:S.docs)==null?void 0:k.description}}};var v,w,F,T,M;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisSplitLines: false
  }
}`,...(F=(w=o.parameters)==null?void 0:w.docs)==null?void 0:F.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(M=(T=o.parameters)==null?void 0:T.docs)==null?void 0:M.description}}};var N,_,D,z,H;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data,
    yAxisTickLabelFormatter: value => \`y=\${value}\`
  }
}`,...(D=(_=i.parameters)==null?void 0:_.docs)==null?void 0:D.source},description:{story:"yAxisTickLabelFormatter: format Y-axis (value) tick labels.",...(H=(z=i.parameters)==null?void 0:z.docs)==null?void 0:H.description}}};var I,V,$,C,E;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data,
    yAxisLabel: 'Y value'
  }
}`,...($=(V=t.parameters)==null?void 0:V.docs)==null?void 0:$.source},description:{story:"yAxisLabel — Y-axis label displayed along the axis.",...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var O,j,q,B,G;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data,
    minY: 4,
    maxY: 16
  }
}`,...(q=(j=n.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:"minY and maxY — fixed Y range with non-zero floor (series Y is about 5–12).",...(G=(B=n.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};var J,K,P,Q,R;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data,
    minY: 0,
    maxY: 15,
    intervalY: 5
  }
}`,...(P=(K=c.parameters)==null?void 0:K.docs)==null?void 0:P.source},description:{story:"minY, maxY, and intervalY — explicit tick step on Y.",...(R=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:R.description}}};var U,W,X,Z,ss;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    data,
    minY: 4
  }
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:"minY — Y-axis floor only.",...(ss=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:ss.description}}};const Ls=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel","FixedMinMax","FixedInterval","ValueAxisFloor"];export{r as Default,c as FixedInterval,n as FixedMinMax,a as HideAxis,i as LabelFormatter,o as NoSplitLines,e as NoTicks,p as ValueAxisFloor,t as YAxisLabel,Ls as __namedExportsOrder,bs as default};
