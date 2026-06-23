import{m as ms}from"./meta-Dy4yOjkn.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-Bw0oTUdV.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-B8VaOuT_.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-VB-o03U1.js";import"./dataSample-C3ms-4cx.js";import"./createSeriesData-VE2uRjI9.js";import"./CoordinateSystem-C8P-Cleg.js";import"./sectorHelper-e2TAJmFq.js";import"./cartesian-C7nMcwZE.js";const Ts={...ms,title:"Charts/Bar/X-Axis"},s=[40,82,91,74,120,95],r={args:{data:s}},a={args:{data:s,showXAxis:!1}},e={args:{data:s,showXAxisTicks:!1}},o={args:{data:s,showXAxisSplitLines:!1}},t={args:{data:s,boundaryGap:!1}},i={args:{data:s,xAxisTickLabelFormatter:cs=>{const d=Number(cs);return d>0?d+"k $":"0$"}}},n={args:{data:s,xAxisLabel:"Count"}},c={args:{data:s,minX:30,maxX:130}},m={args:{data:s,minX:0,maxX:120,intervalX:20}},p={args:{data:s,minX:25}};var l,u,x,X,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source},description:{story:"X-axis shows data indices (0, 1, 2, ...).",...(g=(X=r.parameters)==null?void 0:X.docs)==null?void 0:g.description}}};var b,A,f,h,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(f=(A=a.parameters)==null?void 0:A.docs)==null?void 0:f.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.description}}};var y,L,S,v,w;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(S=(L=e.parameters)==null?void 0:L.docs)==null?void 0:S.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(w=(v=e.parameters)==null?void 0:v.docs)==null?void 0:w.description}}};var F,N,T,G,M;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(T=(N=o.parameters)==null?void 0:N.docs)==null?void 0:T.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(M=(G=o.parameters)==null?void 0:G.docs)==null?void 0:M.description}}};var _,$,B,C,z;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: false
  }
}`,...(B=($=t.parameters)==null?void 0:$.docs)==null?void 0:B.source},description:{story:"boundaryGap: false — bars extend to axis edges.",...(z=(C=t.parameters)==null?void 0:C.docs)==null?void 0:z.description}}};var D,H,I,V,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTickLabelFormatter: value => {
      const n = Number(value);
      return n > 0 ? n + 'k $' : '0$';
    }
  }
}`,...(I=(H=i.parameters)==null?void 0:H.docs)==null?void 0:I.source},description:{story:"xAxisTickLabelFormatter: format X-axis tick labels (e.g. month names).",...(E=(V=i.parameters)==null?void 0:V.docs)==null?void 0:E.description}}};var O,j,q,J,K;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'Count'
  }
}`,...(q=(j=n.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:"xAxisLabel — X-axis label (horizontal bar: value axis).",...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var P,Q,R,U,W;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data,
    minX: 30,
    maxX: 130
  }
}`,...(R=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:R.source},description:{story:"minX and maxX — fixed value scale along X (bar length) with non-zero min.",...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.description}}};var Y,Z,ss,rs,as;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    data,
    minX: 0,
    maxX: 120,
    intervalX: 20
  }
}`,...(ss=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ss.source},description:{story:"minX, maxX, and intervalX — explicit value scale and tick step along X.",...(as=(rs=m.parameters)==null?void 0:rs.docs)==null?void 0:as.description}}};var es,os,ts,is,ns;p.parameters={...p.parameters,docs:{...(es=p.parameters)==null?void 0:es.docs,source:{originalSource:`{
  args: {
    data,
    minX: 25
  }
}`,...(ts=(os=p.parameters)==null?void 0:os.docs)==null?void 0:ts.source},description:{story:"minX — value floor along X; maximum and tick step still automatic.",...(ns=(is=p.parameters)==null?void 0:is.docs)==null?void 0:ns.description}}};const Gs=["Default","HideAxis","NoTicks","NoSplitLines","NoBoundaryGap","LabelFormatter","XAxisLabel","FixedMinMax","FixedInterval","ValueAxisFloor"];export{r as Default,m as FixedInterval,c as FixedMinMax,a as HideAxis,i as LabelFormatter,t as NoBoundaryGap,o as NoSplitLines,e as NoTicks,p as ValueAxisFloor,n as XAxisLabel,Gs as __namedExportsOrder,Ts as default};
