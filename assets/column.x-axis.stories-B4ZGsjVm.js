import{m as cs}from"./meta-COZUIp89.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-MOBmXkGr.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-j5bgd6PW.js";import"./dataSample-LQN_tCZn.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";const vs={...cs,title:"Charts/Column/X-Axis"},s=[40,82,91,74,120,95],r={args:{data:s}},a={args:{data:s,showXAxis:!1}},e={args:{data:s,showXAxisTicks:!1}},o={args:{data:s,showXAxisSplitLines:!1}},t={args:{data:s,boundaryGap:!1}},i={args:{data:s,xAxisTickLabelFormatter:m=>({0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun"})[String(m)]??String(m)}},n={args:{data:s,xAxisLabel:"Month"}},c={args:{data:s,minX:1,maxX:4}},d={args:{data:s,minX:0,maxX:5,intervalX:2}},p={args:{data:s,minX:1}};var l,x,u,g,X;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source},description:{story:"X-axis shows data indices (0, 1, 2, ...).",...(X=(g=r.parameters)==null?void 0:g.docs)==null?void 0:X.description}}};var b,y,A,f,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data,
    showXAxis: false
  }
}`,...(A=(y=a.parameters)==null?void 0:y.docs)==null?void 0:A.source},description:{story:"showXAxis: false — X-axis and its labels hidden.",...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};var S,L,w,F,k;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisTicks: false
  }
}`,...(w=(L=e.parameters)==null?void 0:L.docs)==null?void 0:w.source},description:{story:"showXAxisTicks: false — X-axis visible but tick marks hidden.",...(k=(F=e.parameters)==null?void 0:F.docs)==null?void 0:k.description}}};var v,M,T,N,G;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data,
    showXAxisSplitLines: false
  }
}`,...(T=(M=o.parameters)==null?void 0:M.docs)==null?void 0:T.source},description:{story:"showXAxisSplitLines: false — vertical grid lines hidden.",...(G=(N=o.parameters)==null?void 0:N.docs)==null?void 0:G.description}}};var C,J,_,B,D;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    data,
    boundaryGap: false
  }
}`,...(_=(J=t.parameters)==null?void 0:J.docs)==null?void 0:_.source},description:{story:"boundaryGap: false — columns extend to axis edges.",...(D=(B=t.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var H,I,E,O,R;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(E=(I=i.parameters)==null?void 0:I.docs)==null?void 0:E.source},description:{story:"xAxisTickLabelFormatter: format X-axis tick labels (e.g. month names).",...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var j,q,z,K,P;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    data,
    xAxisLabel: 'Month'
  }
}`,...(z=(q=n.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:"xAxisLabel — X-axis label displayed along the axis.",...(P=(K=n.parameters)==null?void 0:K.docs)==null?void 0:P.description}}};var Q,U,V,W,Y;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    data,
    minX: 1,
    maxX: 4
  }
}`,...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:"minX and maxX — fixed X-axis extent (category index; six points → narrow window).",...(Y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:Y.description}}};var Z,$,ss,rs,as;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    data,
    minX: 0,
    maxX: 5,
    intervalX: 2
  }
}`,...(ss=($=d.parameters)==null?void 0:$.docs)==null?void 0:ss.source},description:{story:"minX, maxX, and intervalX — category axis with explicit tick interval.",...(as=(rs=d.parameters)==null?void 0:rs.docs)==null?void 0:as.description}}};var es,os,ts,is,ns;p.parameters={...p.parameters,docs:{...(es=p.parameters)==null?void 0:es.docs,source:{originalSource:`{
  args: {
    data,
    minX: 1
  }
}`,...(ts=(os=p.parameters)==null?void 0:os.docs)==null?void 0:ts.source},description:{story:"minX — X-axis floor (category index); maximum and step still automatic.",...(ns=(is=p.parameters)==null?void 0:is.docs)==null?void 0:ns.description}}};const Ms=["Default","HideAxis","NoTicks","NoSplitLines","NoBoundaryGap","LabelFormatter","XAxisLabel","FixedMinMax","FixedInterval","CategoryFloor"];export{p as CategoryFloor,r as Default,d as FixedInterval,c as FixedMinMax,a as HideAxis,i as LabelFormatter,t as NoBoundaryGap,o as NoSplitLines,e as NoTicks,n as XAxisLabel,Ms as __namedExportsOrder,vs as default};
