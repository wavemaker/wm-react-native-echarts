import{m as as}from"./meta-COZUIp89.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-MOBmXkGr.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-j5bgd6PW.js";import"./dataSample-LQN_tCZn.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";const ys={...as,title:"Charts/Column/Y-Axis"},s=[40,82,91,74,90,88],r={args:{data:s}},e={args:{data:s,showYAxis:!1}},a={args:{data:s,showYAxisTicks:!1}},o={args:{data:s,showYAxisSplitLines:!1}},t={args:{data:s,yAxisTickLabelFormatter:es=>{const d=Number(es);return d>=1e3?`${(d/1e3).toFixed(1)}k`:String(d)}}},i={args:{data:s,yAxisLabel:"Value"}},n={args:{data:s,minY:30,maxY:120}},c={args:{data:s,minY:0,maxY:100,intervalY:10}},m={args:{data:s,minY:20}};var p,l,u,x,Y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"Y-axis scale computed from the dataset.",...(Y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:Y.description}}};var g,A,b,h,f;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data,
    showYAxis: false
  }
}`,...(b=(A=e.parameters)==null?void 0:A.docs)==null?void 0:b.source},description:{story:"showYAxis: false — Y-axis and its labels hidden.",...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};var y,S,k,L,F;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisTicks: false
  }
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:"showYAxisTicks: false — Y-axis visible but tick marks hidden.",...(F=(L=a.parameters)==null?void 0:L.docs)==null?void 0:F.description}}};var v,w,T,N,M;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisSplitLines: false
  }
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(M=(N=o.parameters)==null?void 0:N.docs)==null?void 0:M.description}}};var V,_,z,C,D;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    data,
    yAxisTickLabelFormatter: value => {
      const n = Number(value);
      return n >= 1000 ? \`\${(n / 1000).toFixed(1)}k\` : String(n);
    }
  }
}`,...(z=(_=t.parameters)==null?void 0:_.docs)==null?void 0:z.source},description:{story:"yAxisTickLabelFormatter: format Y-axis tick labels (e.g. add K for thousands).",...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};var H,I,$,E,K;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data,
    yAxisLabel: 'Value'
  }
}`,...($=(I=i.parameters)==null?void 0:I.docs)==null?void 0:$.source},description:{story:"yAxisLabel — Y-axis label displayed along the axis.",...(K=(E=i.parameters)==null?void 0:E.docs)==null?void 0:K.description}}};var O,j,q,B,G;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data,
    minY: 30,
    maxY: 120
  }
}`,...(q=(j=n.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:"minY and maxY — fixed value-axis bounds (non-zero min, headroom above the bars).",...(G=(B=n.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};var J,P,Q,R,U;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data,
    minY: 0,
    maxY: 100,
    intervalY: 10
  }
}`,...(Q=(P=c.parameters)==null?void 0:P.docs)==null?void 0:Q.source},description:{story:"minY, maxY, and intervalY — explicit range and tick step.",...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};var W,X,Z,ss,rs;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data,
    minY: 20
  }
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"minY — value-axis floor; maximum and tick step still chosen automatically.",...(rs=(ss=m.parameters)==null?void 0:ss.docs)==null?void 0:rs.description}}};const Ss=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel","FixedMinMax","FixedInterval","ValueAxisFloor"];export{r as Default,c as FixedInterval,n as FixedMinMax,e as HideAxis,t as LabelFormatter,o as NoSplitLines,a as NoTicks,m as ValueAxisFloor,i as YAxisLabel,Ss as __namedExportsOrder,ys as default};
