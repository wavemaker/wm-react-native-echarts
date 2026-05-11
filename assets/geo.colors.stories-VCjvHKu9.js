import{m as S}from"./meta-Blwr_v7z.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./common-fSim-PaJ.js";import"./createSeriesDataSimply-DaXRNxVR.js";const A={...S,title:"Charts/Geo/Colors"},s=[{name:"United States",value:500},{name:"China",value:600},{name:"Japan",value:300},{name:"Germany",value:250},{name:"India",value:400},{name:"Brazil",value:220}],y=["#F2A65A","#6F8F72"],e={args:{data:s}},r={args:{data:s,colors:y}},o={args:{data:s,theme:{series:[{color:"#3b82f6"},{color:"#93c5fd"}],legend:{textColor:"#1e293b",fontSize:12}}}};var a,t,n,c,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source},description:{story:"Default theme colors for visual map.",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var i,l,d,p,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data,
    colors: customColors
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source},description:{story:"Custom colors for the color scale (visual map).",...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.description}}};var f,g,C,h,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    data,
    theme: {
      series: [{
        color: '#3b82f6'
      }, {
        color: '#93c5fd'
      }],
      legend: {
        textColor: '#1e293b',
        fontSize: 12
      }
    } as Partial<ChartTheme>
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source},description:{story:"Theme override for series/legend styling.",...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.description}}};const G=["Default","CustomColors","ThemeOverride"];export{r as CustomColors,e as Default,o as ThemeOverride,G as __namedExportsOrder,A as default};
