import{m as B}from"./meta-DQP0OanO.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-CwF2pesq.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-9dos4XC1.js";import"./dataSample-YMfQ_6XR.js";import"./labelHelper-CzHPQigS.js";import"./sectorHelper-DjU9oWJ9.js";import"./cartesian-C25Uk8mH.js";const te={...B,title:"Examples/Column"},r={args:{data:[200,500,450,100,250,300],xAxisTickLabelFormatter:e=>{const s=["Jan","Feb","Mar","Apr","May","Jun"],a=Number(e);return s[a]??String(e)},showYAxis:!1,showXAxisSplitLines:!1,showYAxisSplitLines:!0,showYAxisTicks:!1}},i={args:{data:[186,305,237,73,209,214],xAxisTickLabelFormatter:e=>{const s=["Jan","Feb","Mar","Apr","May","Jun"],a=Number(e);return s[a]??String(e)},showYAxis:!1,barOutsideLabelFormatter:e=>String(e),showXAxisSplitLines:!1,showYAxisSplitLines:!0,showYAxisTicks:!1}},t={args:{data:[{name:"Baby Boomers",data:[200,350,500,300,450,600]},{name:"Gen X",data:[100,250,600,280,350,500]}],showYAxis:!1,showXAxis:!1,xAxisTickLabelFormatter:e=>{const s=["Jan","Feb","Mar","Apr","May","Jun"],a=Number(e);return s[a]??String(e)},cornerRadius:[4,4,4,4],showXAxisSplitLines:!1,showYAxisSplitLines:!1}},_=["Chrome","Safari","Firefox","Edge","Other"],n={args:{data:[72,28,92,82,32],xAxisTickLabelFormatter:e=>{const s=Number(e);return _[s]??String(e)},activeIndex:2,activeColor:"#FDDA0D",showXAxisSplitLines:!1,showYAxisSplitLines:!0,showYAxisTicks:!1,showYAxis:!1}},E=["Apr 1","Apr 8","Apr 15","Apr 22","Apr 29","May 6","May 13","May 20","May 27","Jun 3","Jun 10"],o={args:{data:[85,120,95,140,110,160,130,175,150,125,90],xAxisTickLabelFormatter:e=>{const s=Number(e);return E[s]??String(e)},cornerRadius:0,showYAxis:!1,showXAxisSplitLines:!1,showYAxisSplitLines:!0,showYAxisTicks:!1,showHighlighter:!0}},G=["January","February","March","April","May","June"],l={args:{data:[120,200,-80,150,-50,180],itemStyle:e=>({color:e>=0?"#4F7942":"#F54927"}),colors:["#4F7942"],xAxisTickLabelFormatter:()=>"",yAxisTickLabelFormatter:e=>e==0?"0":"",barOutsideLabelFormatter:(e,s)=>G[s]??String(e),barOutsideLabelPosition:(e,s)=>e<0?"start":"end",cornerRadius:[4,4,4,4],showXAxis:!0,showXAxisTicks:!1,showYAxis:!1,showXAxisSplitLines:!1,showYAxisSplitLines:!0,showYAxisTicks:!1}};var c,u,m,p,x;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data: [200, 500, 450, 100, 250, 300],
    xAxisTickLabelFormatter: value => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    showYAxis: false,
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:`Default column chart matching default-bar.png.
Features: vertical bars, Jan–Jun x-axis labels, horizontal grid, no y-axis labels, light blue bars.`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.description}}};var d,h,b,A,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: [186, 305, 237, 73, 209, 214],
    xAxisTickLabelFormatter: value => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    showYAxis: false,
    barOutsideLabelFormatter: value => String(value),
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false
  }
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:`Column chart with value labels on top of each bar, matching label-bar.png.
Features: six light blue columns, numerical label above each (186, 305, 237, 73, 209, 214), Jan–Jun x-axis, horizontal grid.`,...(g=(A=i.parameters)==null?void 0:A.docs)==null?void 0:g.description}}};var w,L,S,f,v;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'Baby Boomers',
      data: [200, 350, 500, 300, 450, 600]
    }, {
      name: 'Gen X',
      data: [100, 250, 600, 280, 350, 500]
    }],
    showYAxis: false,
    showXAxis: false,
    xAxisTickLabelFormatter: value => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    cornerRadius: [4, 4, 4, 4],
    showXAxisSplitLines: false,
    showYAxisSplitLines: false
  }
}`,...(S=(L=t.parameters)==null?void 0:L.docs)==null?void 0:S.source},description:{story:"Column chart with multiple series.",...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};var F,Y,k,y,T;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
    showYAxisTicks: false,
    showYAxis: false
  }
}`,...(k=(Y=n.parameters)==null?void 0:Y.docs)==null?void 0:k.source},description:{story:`Column chart with one bar highlighted (active), matching active-bar.png.
Features: single series, light blue bars, Firefox (index 2) active with darker blue and dashed outline, horizontal grid.`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.description}}};var J,M,X,C,N;o.parameters={...o.parameters,docs:{...(J=o.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    data: [85, 120, 95, 140, 110, 160, 130, 175, 150, 125, 90],
    xAxisTickLabelFormatter: value => {
      const i = Number(value);
      return interactiveDateLabels[i] ?? String(value);
    },
    cornerRadius: 0,
    showYAxis: false,
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false,
    showHighlighter: true
  }
}`,...(X=(M=o.parameters)==null?void 0:M.docs)==null?void 0:X.source},description:{story:`Interactive column chart matching interactive-bar.png.
Features: 11 vertical blue bars, date labels on x-axis (Apr–Jun), horizontal grid, tooltip/highlighter on interaction.`,...(N=(C=o.parameters)==null?void 0:C.docs)==null?void 0:N.description}}};var D,O,z,R,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: [120, 200, -80, 150, -50, 180],
    itemStyle: value => ({
      color: value >= 0 ? '#4F7942' : '#F54927'
    }),
    colors: ['#4F7942'],
    xAxisTickLabelFormatter: () => '',
    yAxisTickLabelFormatter: value => value == 0 ? '0' : '',
    barOutsideLabelFormatter: (value, index) => monthLabels[index] ?? String(value),
    barOutsideLabelPosition: (value, index) => value < 0 ? 'start' : 'end',
    cornerRadius: [4, 4, 4, 4],
    showXAxis: true,
    showXAxisTicks: false,
    showYAxis: false,
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false
  }
}`,...(z=(O=l.parameters)==null?void 0:O.docs)==null?void 0:z.source},description:{story:`Column chart with positive and negative values matching negative-bar.png.
Features: zero baseline, bars up (positive) and down (negative), light blue for positive and darker blue for negative, Jan–Jun labels, horizontal grid.`,...(I=(R=l.parameters)==null?void 0:R.docs)==null?void 0:I.description}}};const ne=["StandardColumn","LabelColumn","MultipleSeries","ActiveColumn","InteractiveColumn","NegativeColumn"];export{n as ActiveColumn,o as InteractiveColumn,i as LabelColumn,t as MultipleSeries,l as NegativeColumn,r as StandardColumn,ne as __namedExportsOrder,te as default};
