import{m as b}from"./meta-DCwOsjf7.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-JQrd69Od.js";import"./legend-position-CLb_FM1L.js";import"./sectorHelper-e2TAJmFq.js";import"./createSeriesDataSimply-BM5eq_8k.js";const P={...b,title:"Charts/Pie/Colors"},s=[{name:"Desktop",value:275},{name:"Mobile",value:200},{name:"Tablet",value:187},{name:"Other",value:90}],S=["#F2A65A","#6F8F72","#132440","#7B68EE"],e={args:{data:s}},r={args:{data:s,colors:S}},o={args:{data:s,showLegend:!0,theme:{series:S.map(T=>({color:T})),legend:{textColor:"#132440",fontSize:14,backgroundColor:"#f0f0f0"}}}};var t,a,n,c,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source},description:{story:"Default theme colors.",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var i,p,d,l,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data,
    colors
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source},description:{story:"Custom series colors via colors prop.",...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.description}}};var g,f,h,C,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data,
    showLegend: true,
    theme: {
      series: colors.map(c => ({
        color: c
      })),
      legend: {
        textColor: '#132440',
        fontSize: 14,
        backgroundColor: '#f0f0f0'
      }
    } as Partial<ChartTheme>
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source},description:{story:"Theme override for legend and tooltip.",...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.description}}};const B=["Default","CustomColors","ThemeOverride"];export{r as CustomColors,e as Default,o as ThemeOverride,B as __namedExportsOrder,P as default};
