import{m as es}from"./meta-2S4oTlPh.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-MOBmXkGr.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-j5bgd6PW.js";import"./dataSample-LQN_tCZn.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";const fs={...es,title:"Charts/Bar/Y-Axis"},s=[40,82,91,74,90,88],r={args:{data:s}},a={args:{data:s,showYAxis:!1}},e={args:{data:s,showYAxisTicks:!1}},o={args:{data:s,showYAxisSplitLines:!1}},t={args:{data:s,yAxisTickLabelFormatter:as=>{const d=Number(as);return d>=1e3?`${(d/1e3).toFixed(1)}k`:String(d)}}},i={args:{data:s,yAxisLabel:"Category"}},n={args:{data:s,minX:30,maxX:120}},c={args:{data:s,minX:0,maxX:100,intervalX:10}},m={args:{data:s,minX:20}};var p,l,x,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(x=(l=r.parameters)==null?void 0:l.docs)==null?void 0:x.source},description:{story:"Y-axis scale computed from the dataset.",...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var A,b,h,X,y;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data,
    showYAxis: false
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"showYAxis: false — Y-axis and its labels hidden.",...(y=(X=a.parameters)==null?void 0:X.docs)==null?void 0:y.description}}};var f,Y,S,k,L;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisTicks: false
  }
}`,...(S=(Y=e.parameters)==null?void 0:Y.docs)==null?void 0:S.source},description:{story:"showYAxisTicks: false — Y-axis visible but tick marks hidden.",...(L=(k=e.parameters)==null?void 0:k.docs)==null?void 0:L.description}}};var F,v,w,T,N;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisSplitLines: false
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(N=(T=o.parameters)==null?void 0:T.docs)==null?void 0:N.description}}};var z,M,_,C,D;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    data,
    yAxisTickLabelFormatter: value => {
      const n = Number(value);
      return n >= 1000 ? \`\${(n / 1000).toFixed(1)}k\` : String(n);
    }
  }
}`,...(_=(M=t.parameters)==null?void 0:M.docs)==null?void 0:_.source},description:{story:"yAxisTickLabelFormatter: format Y-axis tick labels (e.g. add K for thousands).",...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};var H,I,V,$,B;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data,
    yAxisLabel: 'Category'
  }
}`,...(V=(I=i.parameters)==null?void 0:I.docs)==null?void 0:V.source},description:{story:"yAxisLabel — Y-axis label (horizontal bar: category axis).",...(B=($=i.parameters)==null?void 0:$.docs)==null?void 0:B.description}}};var E,K,O,j,q;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data,
    minX: 30,
    maxX: 120
  }
}`,...(O=(K=n.parameters)==null?void 0:K.docs)==null?void 0:O.source},description:{story:"minX and maxX — fixed bounds on the **value** axis (horizontal bar: bar length along X; non-zero min).",...(q=(j=n.parameters)==null?void 0:j.docs)==null?void 0:q.description}}};var G,J,P,Q,R;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data,
    minX: 0,
    maxX: 100,
    intervalX: 10
  }
}`,...(P=(J=c.parameters)==null?void 0:J.docs)==null?void 0:P.source},description:{story:"minX, maxX, and intervalX — explicit value scale and tick step along X.",...(R=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:R.description}}};var U,W,Z,ss,rs;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    data,
    minX: 20
  }
}`,...(Z=(W=m.parameters)==null?void 0:W.docs)==null?void 0:Z.source},description:{story:"minX — value-axis floor along X; maximum and tick step still chosen automatically.",...(rs=(ss=m.parameters)==null?void 0:ss.docs)==null?void 0:rs.description}}};const Ys=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel","FixedMinMax","FixedInterval","ValueAxisFloor"];export{r as Default,c as FixedInterval,n as FixedMinMax,a as HideAxis,t as LabelFormatter,o as NoSplitLines,e as NoTicks,m as ValueAxisFloor,i as YAxisLabel,Ys as __namedExportsOrder,fs as default};
