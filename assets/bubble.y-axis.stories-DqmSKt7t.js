import{m as as}from"./meta-DUxyrNYG.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./use-scatter-item-tooltip-DO9_ZKBe.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./common-fSim-PaJ.js";const bs={...as,title:"Charts/Bubble/Y-Axis"},s=[[10,20,30],[15,25,15],[20,15,45],[25,30,25],[30,22,35]],r={args:{data:s}},a={args:{data:s,showYAxis:!1}},e={args:{data:s,showYAxisTicks:!1}},o={args:{data:s,showYAxisSplitLines:!1}},i={args:{data:s,yAxisTickLabelFormatter:rs=>`y=${rs}`}},t={args:{data:s,yAxisLabel:"Y"}},n={args:{data:s,minY:12,maxY:40}},c={args:{data:s,minY:10,maxY:35,intervalY:5}},d={args:{data:s,minY:12}};var p,m,l,x,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source},description:{story:"Default: Y-axis shown (value axis from data).",...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.description}}};var Y,g,b,A,y;a.parameters={...a.parameters,docs:{...(Y=a.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    data,
    showYAxis: false
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source},description:{story:"showYAxis: false — Y-axis and its labels hidden.",...(y=(A=a.parameters)==null?void 0:A.docs)==null?void 0:y.description}}};var f,h,L,S,k;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisTicks: false
  }
}`,...(L=(h=e.parameters)==null?void 0:h.docs)==null?void 0:L.source},description:{story:"showYAxisTicks: false — Y-axis visible but tick marks hidden.",...(k=(S=e.parameters)==null?void 0:S.docs)==null?void 0:k.description}}};var w,F,v,T,M;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisSplitLines: false
  }
}`,...(v=(F=o.parameters)==null?void 0:F.docs)==null?void 0:v.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(M=(T=o.parameters)==null?void 0:T.docs)==null?void 0:M.description}}};var N,_,D,z,H;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data,
    yAxisTickLabelFormatter: value => \`y=\${value}\`
  }
}`,...(D=(_=i.parameters)==null?void 0:_.docs)==null?void 0:D.source},description:{story:"yAxisTickLabelFormatter: format Y-axis (value) tick labels.",...(H=(z=i.parameters)==null?void 0:z.docs)==null?void 0:H.description}}};var I,V,$,B,C;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data,
    yAxisLabel: 'Y'
  }
}`,...($=(V=t.parameters)==null?void 0:V.docs)==null?void 0:$.source},description:{story:"yAxisLabel — Y-axis label displayed along the axis.",...(C=(B=t.parameters)==null?void 0:B.docs)==null?void 0:C.description}}};var E,O,j,q,G;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data,
    minY: 12,
    maxY: 40
  }
}`,...(j=(O=n.parameters)==null?void 0:O.docs)==null?void 0:j.source},description:{story:"minY and maxY — fixed Y range with non-zero floor (bubble Y is about 15–30).",...(G=(q=n.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var J,K,P,Q,R;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data,
    minY: 10,
    maxY: 35,
    intervalY: 5
  }
}`,...(P=(K=c.parameters)==null?void 0:K.docs)==null?void 0:P.source},description:{story:"minY, maxY, and intervalY — explicit tick step on Y.",...(R=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:R.description}}};var U,W,X,Z,ss;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    data,
    minY: 12
  }
}`,...(X=(W=d.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:"minY — Y-axis floor only.",...(ss=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:ss.description}}};const As=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel","FixedMinMax","FixedInterval","ValueAxisFloor"];export{r as Default,c as FixedInterval,n as FixedMinMax,a as HideAxis,i as LabelFormatter,o as NoSplitLines,e as NoTicks,d as ValueAxisFloor,t as YAxisLabel,As as __namedExportsOrder,bs as default};
