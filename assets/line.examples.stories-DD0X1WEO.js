import{m as D}from"./meta-CJ21G4Ce.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-D69Pifby.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-fh8zqSy2.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./dataSample-LQN_tCZn.js";const q={...D,title:"Examples/Line"},s={args:{data:[200,350,500,300,450,600],xAxisTickLabelFormatter:e=>{const i=["Jan","Feb","Mar","Apr","May","Jun"],r=Number(e);return i[r]??String(e)},type:"smooth",minY:0,maxY:600,intervalY:100,xAxisLabel:"Month",yAxisLabel:"Value",showXAxisSplitLines:!1,showYAxisSplitLines:!0,symbol:"circle",showYAxisTicks:!1}},a={args:{data:[200,350,500,300,450,600],type:"smooth",showXAxisSplitLines:!1,showYAxisSplitLines:!1,showYAxis:!1,showXAxis:!1,symbol:"circle",showYAxisTicks:!1}},n={args:{data:[{name:"Series A",data:[200,350,500,300,450,600]},{name:"Series B",data:[100,250,600,280,350,500]},{name:"Series C",data:[150,400,200,250,400,550]}],type:"smooth",showXAxisSplitLines:!1,showYAxisSplitLines:!1,symbol:"none"}},t={args:{data:[{name:"United States",data:[17.4,18.1,18.7,19.5,20.5,21.4,21,23.3,25.5,26.9,27.9]},{name:"China",data:[10.4,11,11.2,12.2,13.1,14.3,15.4,17.7,18,17.9,18.5]},{name:"Japan",data:[4.6,4.1,4.9,4.9,4.9,4.9,4.9,4.9,4.9,4.2,4.2]},{name:"Germany",data:[3.9,3.4,3.5,3.7,3.8,3.8,3.8,4.1,4.3,4.1,4.3]},{name:"India",data:[2,2.1,2.3,2.6,2.7,2.9,3.2,3.4,3.7,3.7,4.1]}],xAxisTickLabelFormatter:e=>{const i=["2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],r=Number(e);return i[r]??String(e)},type:"smooth",showXAxisSplitLines:!1,showYAxisSplitLines:!0,symbol:"none",xAxisLabel:"Year",yAxisLabel:"GDP (Trillions USD)",minY:0,maxY:30,intervalY:5,showLegend:!0}};var o,l,m,p,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    data: [200, 350, 500, 300, 450, 600],
    xAxisTickLabelFormatter: value => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    type: 'smooth',
    minY: 0,
    maxY: 600,
    intervalY: 100,
    xAxisLabel: 'Month',
    yAxisLabel: 'Value',
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    symbol: 'circle',
    showYAxisTicks: false
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:`Line chart with axes labels matching axes-area.png.
Features: smooth curve, Y-axis 0-600, X-axis months (Jan-Jun), grid lines, axis labels.`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.description}}};var d,x,h,u,A;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: [200, 350, 500, 300, 450, 600],
    type: 'smooth',
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
    showYAxis: false,
    showXAxis: false,
    symbol: 'circle',
    showYAxisTicks: false
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source},description:{story:`Line chart without axes, matching default-area.png.
Features: smooth curve, no axes, no grid lines.`,...(A=(u=a.parameters)==null?void 0:u.docs)==null?void 0:A.description}}};var L,S,b,w,y;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    type: 'smooth',
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
    symbol: 'none'
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source},description:{story:"Line chart with multiple series.",...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};var Y,f,g,v,X;t.parameters={...t.parameters,docs:{...(Y=t.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'United States',
      data: [17.4, 18.1, 18.7, 19.5, 20.5, 21.4, 21.0, 23.3, 25.5, 26.9, 27.9]
    }, {
      name: 'China',
      data: [10.4, 11.0, 11.2, 12.2, 13.1, 14.3, 15.4, 17.7, 18.0, 17.9, 18.5]
    }, {
      name: 'Japan',
      data: [4.6, 4.1, 4.9, 4.9, 4.9, 4.9, 4.9, 4.9, 4.9, 4.2, 4.2]
    }, {
      name: 'Germany',
      data: [3.9, 3.4, 3.5, 3.7, 3.8, 3.8, 3.8, 4.1, 4.3, 4.1, 4.3]
    }, {
      name: 'India',
      data: [2.0, 2.1, 2.3, 2.6, 2.7, 2.9, 3.2, 3.4, 3.7, 3.7, 4.1]
    }],
    xAxisTickLabelFormatter: value => {
      const years = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
      const i = Number(value);
      return years[i] ?? String(value);
    },
    type: 'smooth',
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    symbol: 'none',
    xAxisLabel: 'Year',
    yAxisLabel: 'GDP (Trillions USD)',
    minY: 0,
    maxY: 30,
    intervalY: 5,
    showLegend: true
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:`Line chart showing GDP of top economies over the last decade (2014-2024).
Features: smooth curve, shows GDP growth trends.`,...(X=(v=t.parameters)==null?void 0:v.docs)==null?void 0:X.description}}};const z=["AxesLine","DefaultLine","MultipleSeries","GDPContribution"];export{s as AxesLine,a as DefaultLine,t as GDPContribution,n as MultipleSeries,z as __namedExportsOrder,q as default};
