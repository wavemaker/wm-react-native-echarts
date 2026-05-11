import{m as M}from"./meta-CEPI5cI_.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-D69Pifby.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-fh8zqSy2.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./dataSample-LQN_tCZn.js";import"./area.args-DizI-4Mn.js";const Q={...M,title:"Examples/Area"},a={args:{data:[200,350,500,300,450,600],xAxisTickLabelFormatter:e=>{const i=["Jan","Feb","Mar","Apr","May","Jun"],o=Number(e);return i[o]??String(e)},type:"smooth",minY:0,maxY:600,intervalY:100,xAxisLabel:"Month",yAxisLabel:"Value",showXAxisSplitLines:!1,showYAxisSplitLines:!0,symbol:"circle",showYAxisTicks:!1,areaFill:"transparent"}},s={args:{data:[200,350,500,300,450,600],type:"smooth",showXAxisSplitLines:!1,showYAxisSplitLines:!1,showYAxis:!1,xAxisTickLabelFormatter:(e,i)=>{const o=["Jan","Feb","Mar","Apr","May","Jun"],J=Number(e);return o[J]??String(e)},symbol:"circle",showYAxisTicks:!1,areaFill:"transparent"}},X=["Jan","Feb","Mar","Apr","May","Jun"],k=e=>{const i=Number(e);return X[i]??String(e)},r={args:{data:[{name:"Series 1",data:[150,280,400,250,380,500]},{name:"Series 2",data:[200,350,500,300,450,600]}],type:"smooth",areaFill:"gradient",xAxisTickLabelFormatter:k,showXAxisSplitLines:!1,showYAxisSplitLines:!0,showYAxis:!1}},t={args:{data:[{name:"Series 1",data:[150,280,400,250,380,500]},{name:"Series 2",data:[200,350,500,300,450,600]}],type:"smooth",areaFill:"gradient",symbol:"circle",xAxisTickLabelFormatter:k,showXAxisSplitLines:!1,showYAxisSplitLines:!0,showYAxis:!1}};var n,l,m,c,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    symbol: "circle",
    showYAxisTicks: false,
    areaFill: "transparent"
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source},description:{story:`Area chart with axes labels matching axes-area.png.
Features: smooth curve, Y-axis 0–600 (explicit min/max/interval), X-axis months (Jan–Jun), grid lines, axis labels.`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.description}}};var x,d,h,A,u;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    data: [200, 350, 500, 300, 450, 600],
    type: 'smooth',
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
    showYAxis: false,
    xAxisTickLabelFormatter: (value, index) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    symbol: "circle",
    showYAxisTicks: false,
    areaFill: "transparent"
  }
}`,...(h=(d=s.parameters)==null?void 0:d.docs)==null?void 0:h.source},description:{story:`Area chart without axes, matching default-area.png.
Features: smooth curve, no axes, no grid lines.`,...(u=(A=s.parameters)==null?void 0:A.docs)==null?void 0:u.description}}};var b,g,w,S,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'Series 1',
      data: [150, 280, 400, 250, 380, 500]
    }, {
      name: 'Series 2',
      data: [200, 350, 500, 300, 450, 600]
    }],
    type: 'smooth',
    areaFill: 'gradient',
    xAxisTickLabelFormatter: gradientXFormatter,
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxis: false
  }
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source},description:{story:`Two-series area chart with gradient fills, matching gradient-area.png.
Features: smooth curves, two layered blue series, gradient area fill, monthly x-axis, horizontal grid.`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.description}}};var L,F,f,Y,T;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'Series 1',
      data: [150, 280, 400, 250, 380, 500]
    }, {
      name: 'Series 2',
      data: [200, 350, 500, 300, 450, 600]
    }],
    type: 'smooth',
    areaFill: 'gradient',
    symbol: 'circle',
    xAxisTickLabelFormatter: gradientXFormatter,
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxis: false
  }
}`,...(f=(F=t.parameters)==null?void 0:F.docs)==null?void 0:f.source},description:{story:`Two-series area chart with circular data point markers, matching icons-area.png.
Features: smooth curves, two blue series, gradient fill, circle symbols at each point, monthly x-axis, horizontal grid.`,...(T=(Y=t.parameters)==null?void 0:Y.docs)==null?void 0:T.description}}};const R=["AxesArea","AreaWithoutAxes","GradientArea","IconsArea"];export{s as AreaWithoutAxes,a as AxesArea,r as GradientArea,t as IconsArea,R as __namedExportsOrder,Q as default};
