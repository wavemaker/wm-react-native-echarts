import{m as as}from"./meta-GyzeNtZ1.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-DrjqnKLG.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-B-FBt8Sx.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./area.args-CMRTFbmo.js";import"./cartesian-C7nMcwZE.js";const Ls={...as,title:"Charts/Area/Y-Axis"},s=[40,82,91,74,90,88],r={args:{data:s}},e={args:{data:s,showYAxis:!1}},a={args:{data:s,showYAxisTicks:!1}},o={args:{data:s,showYAxisSplitLines:!1}},t={args:{data:s,yAxisTickLabelFormatter:es=>{const d=Number(es);return d>=1e3?`${(d/1e3).toFixed(1)}k`:String(d)}}},i={args:{data:s,yAxisLabel:"Revenue ($)"}},n={args:{data:s,minY:30,maxY:120}},c={args:{data:s,minY:0,maxY:100,intervalY:10}},m={args:{data:s,minY:20}};var p,l,x,u,Y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(x=(l=r.parameters)==null?void 0:l.docs)==null?void 0:x.source},description:{story:"Y-axis scale computed from the dataset.",...(Y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:Y.description}}};var g,A,h,b,f;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data,
    showYAxis: false
  }
}`,...(h=(A=e.parameters)==null?void 0:A.docs)==null?void 0:h.source},description:{story:"showYAxis: false — Y-axis and its labels hidden.",...(f=(b=e.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var y,S,k,L,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisTicks: false
  }
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:"showYAxisTicks: false — Y-axis visible but tick marks hidden.",...(v=(L=a.parameters)==null?void 0:L.docs)==null?void 0:v.description}}};var F,w,T,N,M;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisSplitLines: false
  }
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(M=(N=o.parameters)==null?void 0:N.docs)==null?void 0:M.description}}};var _,$,z,D,H;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    data,
    yAxisTickLabelFormatter: value => {
      const n = Number(value);
      return n >= 1000 ? \`\${(n / 1000).toFixed(1)}k\` : String(n);
    }
  }
}`,...(z=($=t.parameters)==null?void 0:$.docs)==null?void 0:z.source},description:{story:"yAxisTickLabelFormatter: format Y-axis tick labels (e.g. add K for thousands).",...(H=(D=t.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};var I,R,V,C,E;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data,
    yAxisLabel: 'Revenue ($)'
  }
}`,...(V=(R=i.parameters)==null?void 0:R.docs)==null?void 0:V.source},description:{story:"yAxisLabel — Y-axis label displayed along the axis.",...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var K,O,j,q,B;n.parameters={...n.parameters,docs:{...(K=n.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    data,
    minY: 30,
    maxY: 120
  }
}`,...(j=(O=n.parameters)==null?void 0:O.docs)==null?void 0:j.source},description:{story:"minY and maxY — fixed value-axis bounds (non-zero min, headroom above the series).",...(B=(q=n.parameters)==null?void 0:q.docs)==null?void 0:B.description}}};var G,J,P,Q,U;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    data,
    minY: 0,
    maxY: 100,
    intervalY: 10
  }
}`,...(P=(J=c.parameters)==null?void 0:J.docs)==null?void 0:P.source},description:{story:"minY, maxY, and intervalY — explicit range and tick step.",...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.description}}};var W,X,Z,ss,rs;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    data,
    minY: 20
  }
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"minY — value-axis floor; maximum and tick step still chosen automatically.",...(rs=(ss=m.parameters)==null?void 0:ss.docs)==null?void 0:rs.description}}};const vs=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel","FixedMinMax","FixedInterval","ValueAxisFloor"];export{r as Default,c as FixedInterval,n as FixedMinMax,e as HideAxis,t as LabelFormatter,o as NoSplitLines,a as NoTicks,m as ValueAxisFloor,i as YAxisLabel,vs as __namedExportsOrder,Ls as default};
