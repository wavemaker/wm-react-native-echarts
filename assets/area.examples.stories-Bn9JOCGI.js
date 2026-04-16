import{m as M}from"./meta-DffN3gIn.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-sCUu3WLk.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-BiL3BzV2.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./dataSample-YMfQ_6XR.js";import"./area.args-BM6SB80j.js";import"./cartesian-C25Uk8mH.js";const P={...M,title:"Examples/Area"},s={args:{data:[200,350,500,300,450,600],xAxisTickLabelFormatter:e=>{const i=["Jan","Feb","Mar","Apr","May","Jun"],o=Number(e);return i[o]??String(e)},type:"smooth",yAxisTicks:[0,100,200,300,400,500,600],xAxisLabel:"Month",yAxisLabel:"Value",showXAxisSplitLines:!1,showYAxisSplitLines:!0,symbol:"circle",showYAxisTicks:!1,areaFill:"transparent"}},a={args:{data:[200,350,500,300,450,600],type:"smooth",showXAxisSplitLines:!1,showYAxisSplitLines:!1,showYAxis:!1,xAxisTickLabelFormatter:(e,i)=>{const o=["Jan","Feb","Mar","Apr","May","Jun"],J=Number(e);return o[J]??String(e)},symbol:"circle",showYAxisTicks:!1,areaFill:"transparent"}},X=["Jan","Feb","Mar","Apr","May","Jun"],k=e=>{const i=Number(e);return X[i]??String(e)},r={args:{data:[{name:"Series 1",data:[150,280,400,250,380,500]},{name:"Series 2",data:[200,350,500,300,450,600]}],type:"smooth",areaFill:"gradient",xAxisTickLabelFormatter:k,showXAxisSplitLines:!1,showYAxisSplitLines:!0,showYAxis:!1}},t={args:{data:[{name:"Series 1",data:[150,280,400,250,380,500]},{name:"Series 2",data:[200,350,500,300,450,600]}],type:"smooth",areaFill:"gradient",symbol:"circle",xAxisTickLabelFormatter:k,showXAxisSplitLines:!1,showYAxisSplitLines:!0,showYAxis:!1}};var n,l,c,m,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
    symbol: "circle",
    showYAxisTicks: false,
    areaFill: "transparent"
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:`Area chart with axes labels matching axes-area.png.
Features: smooth curve, Y-axis 0-600, X-axis months (Jan-Jun), grid lines, axis labels.`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var x,d,h,A,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source},description:{story:`Area chart without axes, matching default-area.png.
Features: smooth curve, no axes, no grid lines.`,...(u=(A=a.parameters)==null?void 0:A.docs)==null?void 0:u.description}}};var b,g,w,S,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
Features: smooth curves, two blue series, gradient fill, circle symbols at each point, monthly x-axis, horizontal grid.`,...(T=(Y=t.parameters)==null?void 0:Y.docs)==null?void 0:T.description}}};const Q=["AxesArea","AreaWithoutAxes","GradientArea","IconsArea"];export{a as AreaWithoutAxes,s as AxesArea,r as GradientArea,t as IconsArea,Q as __namedExportsOrder,P as default};
