import{m as X}from"./meta-7LYq0ILR.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-sCUu3WLk.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-BiL3BzV2.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./dataSample-YMfQ_6XR.js";import"./cartesian-C25Uk8mH.js";const j={...X,title:"Examples/Line"},e={args:{data:[200,350,500,300,450,600],xAxisTickLabelFormatter:s=>{const t=["Jan","Feb","Mar","Apr","May","Jun"],r=Number(s);return t[r]??String(s)},type:"smooth",yAxisTicks:[0,100,200,300,400,500,600],xAxisLabel:"Month",yAxisLabel:"Value",showXAxisSplitLines:!1,showYAxisSplitLines:!0,symbol:"circle",showYAxisTicks:!1}},a={args:{data:[200,350,500,300,450,600],type:"smooth",showXAxisSplitLines:!1,showYAxisSplitLines:!1,showYAxis:!1,showXAxis:!1,symbol:"circle",showYAxisTicks:!1}},n={args:{data:[{name:"Series A",data:[200,350,500,300,450,600]},{name:"Series B",data:[100,250,600,280,350,500]},{name:"Series C",data:[150,400,200,250,400,550]}],type:"smooth",showXAxisSplitLines:!1,showYAxisSplitLines:!1,symbol:"none"}},i={args:{data:[{name:"United States",data:[17.4,18.1,18.7,19.5,20.5,21.4,21,23.3,25.5,26.9,27.9]},{name:"China",data:[10.4,11,11.2,12.2,13.1,14.3,15.4,17.7,18,17.9,18.5]},{name:"Japan",data:[4.6,4.1,4.9,4.9,4.9,4.9,4.9,4.9,4.9,4.2,4.2]},{name:"Germany",data:[3.9,3.4,3.5,3.7,3.8,3.8,3.8,4.1,4.3,4.1,4.3]},{name:"India",data:[2,2.1,2.3,2.6,2.7,2.9,3.2,3.4,3.7,3.7,4.1]}],xAxisTickLabelFormatter:s=>{const t=["2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],r=Number(s);return t[r]??String(s)},type:"smooth",showXAxisSplitLines:!1,showYAxisSplitLines:!0,symbol:"none",xAxisLabel:"Year",yAxisLabel:"GDP (Trillions USD)",yAxisTicks:[0,5,10,15,20,25,30],showLegend:!0}};var o,l,m,p,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    data: [200, 350, 500, 300, 450, 600],
    xAxisTickLabelFormatter: value => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    type: 'smooth',
    yAxisTicks: [0, 100, 200, 300, 400, 500, 600],
    xAxisLabel: 'Month',
    yAxisLabel: 'Value',
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    symbol: 'circle',
    showYAxisTicks: false
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:`Line chart with axes labels matching axes-area.png.
Features: smooth curve, Y-axis 0-600, X-axis months (Jan-Jun), grid lines, axis labels.`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.description}}};var d,x,h,u,A;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
Features: smooth curve, no axes, no grid lines.`,...(A=(u=a.parameters)==null?void 0:u.docs)==null?void 0:A.description}}};var L,S,y,b,w;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(y=(S=n.parameters)==null?void 0:S.docs)==null?void 0:y.source},description:{story:"Line chart with multiple series.",...(w=(b=n.parameters)==null?void 0:b.docs)==null?void 0:w.description}}};var f,g,Y,T,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    yAxisTicks: [0, 5, 10, 15, 20, 25, 30],
    showLegend: true
  }
}`,...(Y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:Y.source},description:{story:`Line chart showing GDP of top economies over the last decade (2014-2024).
Features: smooth curve, shows GDP growth trends.`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.description}}};const q=["AxesLine","DefaultLine","MultipleSeries","GDPContribution"];export{e as AxesLine,a as DefaultLine,i as GDPContribution,n as MultipleSeries,q as __namedExportsOrder,j as default};
