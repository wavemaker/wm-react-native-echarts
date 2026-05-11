import{m as cs}from"./meta-2S4oTlPh.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-MOBmXkGr.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-j5bgd6PW.js";import"./dataSample-LQN_tCZn.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";const ws={...cs,title:"Charts/Bar/X-Axis"},s=[40,82,91,74,120,95],a={args:{data:s}},r={args:{data:s,showXAxis:!1}},e={args:{data:s,showXAxisTicks:!1}},o={args:{data:s,showXAxisSplitLines:!1}},t={args:{data:s,boundaryGap:!1}},i={args:{data:s,xAxisTickLabelFormatter:m=>({0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun"})[String(m)]??String(m)}},n={args:{data:s,xAxisLabel:"Count"}},c={args:{data:s,minX:30,maxX:130}},p={args:{data:s,minX:0,maxX:120,intervalX:20}},d={args:{data:s,minX:25}};var l,u,x,g,X;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source},description:{story:"X-axis shows data indices (0, 1, 2, ...).",...(X=(g=a.parameters)==null?void 0:g.docs)==null?void 0:X.description}}};var b,A,f,S,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(f=(A=r.parameters)==null?void 0:A.docs)==null?void 0:f.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.description}}};var y,L,k,v,F;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(k=(L=e.parameters)==null?void 0:L.docs)==null?void 0:k.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(F=(v=e.parameters)==null?void 0:v.docs)==null?void 0:F.description}}};var w,M,T,N,G;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(T=(M=o.parameters)==null?void 0:M.docs)==null?void 0:T.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(G=(N=o.parameters)==null?void 0:N.docs)==null?void 0:G.description}}};var J,_,B,C,z;t.parameters={...t.parameters,docs:{...(J=t.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: false
  }
}`,...(B=(_=t.parameters)==null?void 0:_.docs)==null?void 0:B.source},description:{story:"boundaryGap: false — bars extend to axis edges.",...(z=(C=t.parameters)==null?void 0:C.docs)==null?void 0:z.description}}};var D,H,I,V,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data,
    xAxisTickLabelFormatter: value => {
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
}`,...(I=(H=i.parameters)==null?void 0:H.docs)==null?void 0:I.source},description:{story:"xAxisTickLabelFormatter: format X-axis tick labels (e.g. month names).",...(E=(V=i.parameters)==null?void 0:V.docs)==null?void 0:E.description}}};var O,R,j,q,K;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'Count'
  }
}`,...(j=(R=n.parameters)==null?void 0:R.docs)==null?void 0:j.source},description:{story:"xAxisLabel — X-axis label (horizontal bar: value axis).",...(K=(q=n.parameters)==null?void 0:q.docs)==null?void 0:K.description}}};var P,Q,U,W,Y;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data,
    minX: 30,
    maxX: 130
  }
}`,...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"minX and maxX — fixed value scale along X (bar length) with non-zero min.",...(Y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:Y.description}}};var Z,$,ss,as,rs;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    data,
    minX: 0,
    maxX: 120,
    intervalX: 20
  }
}`,...(ss=($=p.parameters)==null?void 0:$.docs)==null?void 0:ss.source},description:{story:"minX, maxX, and intervalX — explicit value scale and tick step along X.",...(rs=(as=p.parameters)==null?void 0:as.docs)==null?void 0:rs.description}}};var es,os,ts,is,ns;d.parameters={...d.parameters,docs:{...(es=d.parameters)==null?void 0:es.docs,source:{originalSource:`{
  args: {
    data,
    minX: 25
  }
}`,...(ts=(os=d.parameters)==null?void 0:os.docs)==null?void 0:ts.source},description:{story:"minX — value floor along X; maximum and tick step still automatic.",...(ns=(is=d.parameters)==null?void 0:is.docs)==null?void 0:ns.description}}};const Ms=["Default","HideAxis","NoTicks","NoSplitLines","NoBoundaryGap","LabelFormatter","XAxisLabel","FixedMinMax","FixedInterval","ValueAxisFloor"];export{a as Default,p as FixedInterval,c as FixedMinMax,r as HideAxis,i as LabelFormatter,t as NoBoundaryGap,o as NoSplitLines,e as NoTicks,d as ValueAxisFloor,n as XAxisLabel,Ms as __namedExportsOrder,ws as default};
