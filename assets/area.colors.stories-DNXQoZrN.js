import{m as B}from"./meta-CEPI5cI_.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-D69Pifby.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-fh8zqSy2.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./dataSample-LQN_tCZn.js";import"./area.args-DizI-4Mn.js";const Q={...B,title:"Charts/Area/Colors"},t=[40,82,91,74,120,95],r=["#F2A65A","#6F8F72","#132440"],e={args:{data:t}},o={args:{data:t,colors:r}},s={args:{data:[{name:"Series A",data:[40,82,91,74,90,88]},{name:"Series B",data:[20,62,71,54,70,68]},{name:"Series C",data:[60,42,51,94,50,48]}],colors:r,showLegend:!0}},a={args:{data:t,theme:{series:[{color:r[0]}],axis:{x:{tickLabelColor:r[2],lineColor:r[1]},y:{tickLabelColor:r[2],lineColor:r[1]}}}}};var i,n,c,l,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source},description:{story:"Default theme colors (single series).",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var p,d,u,C,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data,
    colors: colors
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:"Custom series color: colors={['#FF6B6B']}.",...(g=(C=o.parameters)==null?void 0:C.docs)==null?void 0:g.description}}};var h,S,f,x,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'Series A',
      data: [40, 82, 91, 74, 90, 88]
    }, {
      name: 'Series B',
      data: [20, 62, 71, 54, 70, 68]
    }, {
      name: 'Series C',
      data: [60, 42, 51, 94, 50, 48]
    }],
    colors: colors,
    showLegend: true
  }
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source},description:{story:"Multiple custom colors for multiple series. Colors cycle if more series than colors.",...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var L,b,A,F,k;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    data,
    theme: {
      series: [{
        color: colors[0]
      }],
      axis: {
        x: {
          tickLabelColor: colors[2],
          lineColor: colors[1]
        },
        y: {
          tickLabelColor: colors[2],
          lineColor: colors[1]
        }
      }
    } as Partial<ChartTheme>
  }
}`,...(A=(b=a.parameters)==null?void 0:b.docs)==null?void 0:A.source},description:{story:"Theme override: axis label and line colors.",...(k=(F=a.parameters)==null?void 0:F.docs)==null?void 0:k.description}}};const R=["Default","CustomColor","MultipleSeriesColors","ThemeOverride"];export{o as CustomColor,e as Default,s as MultipleSeriesColors,a as ThemeOverride,R as __namedExportsOrder,Q as default};
