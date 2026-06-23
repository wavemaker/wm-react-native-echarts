import{m as sr}from"./meta-Dy4yOjkn.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-Bw0oTUdV.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-B8VaOuT_.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-VB-o03U1.js";import"./dataSample-C3ms-4cx.js";import"./createSeriesData-VE2uRjI9.js";import"./CoordinateSystem-C8P-Cleg.js";import"./sectorHelper-e2TAJmFq.js";import"./cartesian-C7nMcwZE.js";const Lr={...sr,title:"Charts/Bar/Y-Axis"},r=[40,82,91,74,90,88],a={args:{data:r}},s={args:{data:r,showYAxis:!1}},e={args:{data:r,showYAxisTicks:!1}},t={args:{data:r,showYAxisSplitLines:!1}},o={args:{data:r,yAxisTickLabelFormatter:d=>({0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun"})[String(d)]??String(d)}},i={args:{data:r,yAxisLabel:"Category"}},n={args:{data:[40,82,91,74,120,95],minY:1,maxY:4}},c={args:{data:[40,82,91,74,120,95],minY:0,maxY:5,intervalY:2}},m={args:{data:[40,82,91,74,120,95],minY:1}};var p,l,x,g,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(x=(l=a.parameters)==null?void 0:l.docs)==null?void 0:x.source},description:{story:"Y-axis scale computed from the dataset.",...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.description}}};var Y,y,b,A,h;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    data,
    showYAxis: false
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source},description:{story:"showYAxis: false — Y-axis and its labels hidden.",...(h=(A=s.parameters)==null?void 0:A.docs)==null?void 0:h.description}}};var f,S,L,F,k;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisTicks: false
  }
}`,...(L=(S=e.parameters)==null?void 0:S.docs)==null?void 0:L.source},description:{story:"showYAxisTicks: false — Y-axis visible but tick marks hidden.",...(k=(F=e.parameters)==null?void 0:F.docs)==null?void 0:k.description}}};var w,v,M,T,C;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data,
    showYAxisSplitLines: false
  }
}`,...(M=(v=t.parameters)==null?void 0:v.docs)==null?void 0:M.source},description:{story:"showYAxisSplitLines: false — horizontal grid lines hidden.",...(C=(T=t.parameters)==null?void 0:T.docs)==null?void 0:C.description}}};var J,N,_,z,D;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data,
    yAxisTickLabelFormatter: value => {
      const labels: Record<string, string> = {
        '0': 'Jan',
        '1': 'Feb',
        '2': 'Mar',
        '3': 'Apr',
        '4': 'May',
        '5': 'Jun'
      };
      return labels[String(value)] ?? String(value);
    }
  }
}`,...(_=(N=o.parameters)==null?void 0:N.docs)==null?void 0:_.source},description:{story:"yAxisTickLabelFormatter: format Y-axis tick labels (e.g. add K for thousands).",...(D=(z=o.parameters)==null?void 0:z.docs)==null?void 0:D.description}}};var H,I,B,E,K;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    data,
    yAxisLabel: 'Category'
  }
}`,...(B=(I=i.parameters)==null?void 0:I.docs)==null?void 0:B.source},description:{story:"yAxisLabel — Y-axis label (horizontal bar: category axis).",...(K=(E=i.parameters)==null?void 0:E.docs)==null?void 0:K.description}}};var O,R,j,q,G;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data: [40, 82, 91, 74, 120, 95],
    minY: 1,
    maxY: 4
  }
}`,...(j=(R=n.parameters)==null?void 0:R.docs)==null?void 0:j.source},description:{story:"minY and maxY — fixed category extent (horizontal bar: category index along Y).",...(G=(q=n.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var P,Q,U,V,W;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data: [40, 82, 91, 74, 120, 95],
    minY: 0,
    maxY: 5,
    intervalY: 2
  }
}`,...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"minY, maxY, and intervalY — category axis with explicit tick interval along Y.",...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var X,Z,$,rr,ar;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    data: [40, 82, 91, 74, 120, 95],
    minY: 1
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"minY — category-axis floor along Y; maximum and step still automatic.",...(ar=(rr=m.parameters)==null?void 0:rr.docs)==null?void 0:ar.description}}};const Fr=["Default","HideAxis","NoTicks","NoSplitLines","LabelFormatter","YAxisLabel","FixedMinMax","FixedInterval","CategoryFloor"];export{m as CategoryFloor,a as Default,c as FixedInterval,n as FixedMinMax,s as HideAxis,o as LabelFormatter,t as NoSplitLines,e as NoTicks,i as YAxisLabel,Fr as __namedExportsOrder,Lr as default};
