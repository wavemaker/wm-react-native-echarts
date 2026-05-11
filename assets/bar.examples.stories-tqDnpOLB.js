import{m as W}from"./meta-2S4oTlPh.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-MOBmXkGr.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-j5bgd6PW.js";import"./dataSample-LQN_tCZn.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";const be={...W,title:"Examples/Bar"},r={args:{data:[200,350,500,300,450,600],xAxisTickLabelFormatter:e=>{const s=["Jan","Feb","Mar","Apr","May","Jun"],a=Number(e);return s[a]??String(e)},minY:0,maxY:600,intervalY:100,xAxisLabel:"Month",yAxisLabel:"Value",showXAxisSplitLines:!1,showYAxisSplitLines:!0,showYAxisTicks:!1}},i={args:{data:[200,350,500,300,450,600],showXAxisSplitLines:!1,showYAxisSplitLines:!1,showYAxis:!1,showXAxis:!1,showYAxisTicks:!1}},n={args:{data:[190,300,240,70,210,210],xAxisTickLabelFormatter:e=>{const s=["Jan","Feb","Mar","Apr","May","Jun"],a=Number(e);return s[a]??String(e)},minX:0,maxX:350,intervalX:50,showXAxisSplitLines:!1,showXAxisTicks:!1,showYAxisSplitLines:!0,showYAxisTicks:!1}},t={args:{data:[{name:"Series A",data:[200,350,500,300,450,600]},{name:"Series B",data:[100,250,600,280,350,500]},{name:"Series C",data:[150,400,200,250,400,550]}],showXAxisSplitLines:!1,showYAxisSplitLines:!1,showLegend:!0}},o={args:{data:[{name:"United States",data:[21,23.3,25.5,26.9,27.9]},{name:"China",data:[15.4,17.7,18,17.9,18.5]},{name:"Japan",data:[4.9,4.9,4.9,4.2,4.2]},{name:"Germany",data:[3.8,4.1,4.3,4.1,4.3]},{name:"India",data:[3.2,3.4,3.7,3.7,4.1]}],xAxisTickLabelFormatter:e=>{const s=["2020","2021","2022","2023","2024"],a=Number(e);return s[a]??String(e)},showXAxisSplitLines:!1,showYAxisSplitLines:!0,xAxisLabel:"Year",yAxisLabel:"GDP (Trillions USD)",minY:0,maxY:30,intervalY:5,showLegend:!0}},Z=["Chrome","Safari","Firefox","Edge","Other"],l={args:{data:[72,28,92,82,32],xAxisTickLabelFormatter:e=>{const s=Number(e);return Z[s]??String(e)},activeIndex:2,activeColor:"#FDDA0D",showXAxisSplitLines:!1,showYAxisSplitLines:!0,showYAxisTicks:!1}},c={args:{data:[["January",100],["February",150],["March",120],["April",40],["May",110],["June",120]],barInsideLabelFormatter:(e,s,a)=>a??"",barOutsideLabelFormatter:e=>String(e),cornerRadius:[4,4,4,4],showXAxis:!1,showYAxis:!1,showXAxisSplitLines:!1,showYAxisSplitLines:!1,showXAxisTicks:!1,showYAxisTicks:!1}},$=["#f97316","#eab308","#22c55e","#06b6d4","#8b5cf6"],m={args:{data:[50,100,180,220,300],xAxisTickLabelFormatter:e=>{const s=["Other","Edge","Safari","Firefox","Chrome"],a=Number(e);return s[a]??String(e)},itemStyle:(e,s)=>({color:$[s]??void 0}),showXAxis:!1,showYAxis:!1,showXAxisSplitLines:!1,showYAxisSplitLines:!1,showXAxisTicks:!0,cornerRadius:[4,4,4,4]}};var d,x,p,u,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: [200, 350, 500, 300, 450, 600],
    xAxisTickLabelFormatter: value => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    minY: 0,
    maxY: 600,
    intervalY: 100,
    xAxisLabel: 'Month',
    yAxisLabel: 'Value',
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false
  }
}`,...(p=(x=r.parameters)==null?void 0:x.docs)==null?void 0:p.source},description:{story:`Bar chart with axes labels matching axes-area.png.
Features: Y-axis 0-600, X-axis months (Jan-Jun), grid lines, axis labels.`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};var A,b,w,g,f;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    data: [200, 350, 500, 300, 450, 600],
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
    showYAxis: false,
    showXAxis: false,
    showYAxisTicks: false
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source},description:{story:`Bar chart without axes, matching default-area.png.
Features: no axes, no grid lines.`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var S,L,Y,v,X;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: [190, 300, 240, 70, 210, 210],
    xAxisTickLabelFormatter: value => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    minX: 0,
    maxX: 350,
    intervalX: 50,
    showXAxisSplitLines: false,
    showXAxisTicks: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false
  }
}`,...(Y=(L=n.parameters)==null?void 0:L.docs)==null?void 0:Y.source},description:{story:`Horizontal bar chart matching horizontal-bar.png.
Features: bars extend left to right, months (Jan–Jun) on Y-axis, value axis 0–350 with vertical grid, light blue bars.`,...(X=(v=n.parameters)==null?void 0:v.docs)==null?void 0:X.description}}};var F,y,k,T,B;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'Series A',
      data: [200, 350, 500, 300, 450, 600]
    }, {
      name: 'Series B',
      data: [100, 250, 600, 280, 350, 500]
    }, {
      name: 'Series C',
      data: [150, 400, 200, 250, 400, 550]
    }],
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
    showLegend: true
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source},description:{story:"Bar chart with multiple series.",...(B=(T=t.parameters)==null?void 0:T.docs)==null?void 0:B.description}}};var J,M,C,D,N;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'United States',
      data: [21.0, 23.3, 25.5, 26.9, 27.9]
    }, {
      name: 'China',
      data: [15.4, 17.7, 18.0, 17.9, 18.5]
    }, {
      name: 'Japan',
      data: [4.9, 4.9, 4.9, 4.2, 4.2]
    }, {
      name: 'Germany',
      data: [3.8, 4.1, 4.3, 4.1, 4.3]
    }, {
      name: 'India',
      data: [3.2, 3.4, 3.7, 3.7, 4.1]
    }],
    xAxisTickLabelFormatter: value => {
      const years = ['2020', '2021', '2022', '2023', '2024'];
      const i = Number(value);
      return years[i] ?? String(value);
    },
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    xAxisLabel: 'Year',
    yAxisLabel: 'GDP (Trillions USD)',
    minY: 0,
    maxY: 30,
    intervalY: 5,
    showLegend: true
  }
}`,...(C=(M=o.parameters)==null?void 0:M.docs)==null?void 0:C.source},description:{story:`Bar chart showing GDP of top economies over the last decade (2014-2024).
Features: shows GDP growth trends.`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.description}}};var _,G,z,O,I;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    data: [72, 28, 92, 82, 32],
    xAxisTickLabelFormatter: value => {
      const i = Number(value);
      return browserLabels[i] ?? String(value);
    },
    activeIndex: 2,
    activeColor: '#FDDA0D',
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false
  }
}`,...(z=(G=l.parameters)==null?void 0:G.docs)==null?void 0:z.source},description:{story:`Bar chart with one bar highlighted (active), matching active-bar.png.
Features: single series, light blue bars, Firefox (index 2) active with darker blue and dashed outline, horizontal grid.`,...(I=(O=l.parameters)==null?void 0:O.docs)==null?void 0:I.description}}};var P,E,H,R,U;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    data: [['January', 100], ['February', 150], ['March', 120], ['April', 40], ['May', 110], ['June', 120]] as [string, number][],
    barInsideLabelFormatter: (_value, _index, category) => category ?? '',
    barOutsideLabelFormatter: value => String(value),
    cornerRadius: [4, 4, 4, 4],
    showXAxis: false,
    showYAxis: false,
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
    showXAxisTicks: false,
    showYAxisTicks: false
  }
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source},description:{story:"Horizontal bar chart with custom labels: month name inside each bar (white), value to the right, matching custom-label-bar.png.",...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.description}}};var V,j,q,K,Q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    data: [50, 100, 180, 220, 300],
    xAxisTickLabelFormatter: value => {
      const labels = ['Other', 'Edge', 'Safari', 'Firefox', 'Chrome'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    itemStyle: (_value, index) => ({
      color: mixedBarColors[index] ?? undefined
    }),
    showXAxis: false,
    showYAxis: false,
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
    showXAxisTicks: true,
    cornerRadius: [4, 4, 4, 4]
  }
}`,...(q=(j=m.parameters)==null?void 0:j.docs)==null?void 0:q.source},description:{story:`Horizontal bar chart with a different shade of blue per bar, matching mixed-bar.png.
Features: Chrome (top, longest) to Other (bottom, shortest), light-to-dark blue gradient, no axes or grid, rounded bar ends.`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};const we=["AxesBar","DefaultBar","HorizontalBar","MultipleSeries","GDPContribution","ActiveBar","CustomLabelBar","MixedBar"];export{l as ActiveBar,r as AxesBar,c as CustomLabelBar,i as DefaultBar,o as GDPContribution,n as HorizontalBar,m as MixedBar,t as MultipleSeries,we as __namedExportsOrder,be as default};
