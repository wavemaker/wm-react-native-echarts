import{m as B}from"./meta-GyzeNtZ1.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-DrjqnKLG.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-B-FBt8Sx.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./area.args-CMRTFbmo.js";import"./cartesian-C7nMcwZE.js";const U={...B,title:"Charts/Area/Colors"},t=[40,82,91,74,120,95],r=["#F2A65A","#6F8F72","#132440"],o={args:{data:t}},e={args:{data:t,colors:r}},s={args:{data:[{name:"Series A",data:[40,82,91,74,90,88]},{name:"Series B",data:[20,62,71,54,70,68]},{name:"Series C",data:[60,42,51,94,50,48]}],colors:r,showLegend:!0}},a={args:{data:t,theme:{series:[{color:r[0]}],axis:{x:{tickLabelColor:r[2],lineColor:r[1]},y:{tickLabelColor:r[2],lineColor:r[1]}}}}};var i,n,c,l,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source},description:{story:"Default theme colors (single series).",...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var p,d,u,C,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data,
    colors: colors
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:"Custom series color: colors={['#FF6B6B']}.",...(g=(C=e.parameters)==null?void 0:C.docs)==null?void 0:g.description}}};var h,S,f,x,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(A=(b=a.parameters)==null?void 0:b.docs)==null?void 0:A.source},description:{story:"Theme override: axis label and line colors.",...(k=(F=a.parameters)==null?void 0:F.docs)==null?void 0:k.description}}};const V=["Default","CustomColor","MultipleSeriesColors","ThemeOverride"];export{e as CustomColor,o as Default,s as MultipleSeriesColors,a as ThemeOverride,V as __namedExportsOrder,U as default};
