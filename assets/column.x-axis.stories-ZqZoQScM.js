import{m as cr}from"./meta-Cg36X7qY.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-Bw0oTUdV.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-B8VaOuT_.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-VB-o03U1.js";import"./dataSample-C3ms-4cx.js";import"./createSeriesData-VE2uRjI9.js";import"./CoordinateSystem-C8P-Cleg.js";import"./sectorHelper-e2TAJmFq.js";import"./cartesian-C7nMcwZE.js";const Tr={...cr,title:"Charts/Column/X-Axis"},r=[40,82,91,74,120,95],s={args:{data:r}},a={args:{data:r,showXAxis:!1}},e={args:{data:r,showXAxisTicks:!1}},o={args:{data:r,showXAxisSplitLines:!1}},t={args:{data:r,boundaryGap:!1}},i={args:{data:r,xAxisTickLabelFormatter:m=>({0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun"})[String(m)]??String(m)}},n={args:{data:r,xAxisLabel:"Month"}},c={args:{data:r,minX:1,maxX:4}},d={args:{data:r,minX:0,maxX:5,intervalX:2}},p={args:{data:r,minX:1}};var l,x,u,g,X;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source},description:{story:"X-axis shows data indices (0, 1, 2, ...).",...(X=(g=s.parameters)==null?void 0:g.docs)==null?void 0:X.description}}};var b,y,A,f,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:"minX and maxX — fixed X-axis extent (category index; six points → narrow window).",...(Y=(W=c.parameters)==null?void 0:W.docs)==null?void 0:Y.description}}};var Z,$,rr,sr,ar;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    data,
    minX: 0,
    maxX: 5,
    intervalX: 2
  }
}`,...(rr=($=d.parameters)==null?void 0:$.docs)==null?void 0:rr.source},description:{story:"minX, maxX, and intervalX — category axis with explicit tick interval.",...(ar=(sr=d.parameters)==null?void 0:sr.docs)==null?void 0:ar.description}}};var er,or,tr,ir,nr;p.parameters={...p.parameters,docs:{...(er=p.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    data,
    minX: 1
  }
}`,...(tr=(or=p.parameters)==null?void 0:or.docs)==null?void 0:tr.source},description:{story:"minX — X-axis floor (category index); maximum and step still automatic.",...(nr=(ir=p.parameters)==null?void 0:ir.docs)==null?void 0:nr.description}}};const Nr=["Default","HideAxis","NoTicks","NoSplitLines","NoBoundaryGap","LabelFormatter","XAxisLabel","FixedMinMax","FixedInterval","CategoryFloor"];export{p as CategoryFloor,s as Default,d as FixedInterval,c as FixedMinMax,a as HideAxis,i as LabelFormatter,t as NoBoundaryGap,o as NoSplitLines,e as NoTicks,n as XAxisLabel,Nr as __namedExportsOrder,Tr as default};
