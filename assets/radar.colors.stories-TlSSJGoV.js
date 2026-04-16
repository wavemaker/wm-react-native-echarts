import{m as w}from"./meta-D88ILwuX.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./LegendVisualProvider-CgY2uWFN.js";import"./createSeriesDataSimply-BSDWH4oQ.js";const z={...w,title:"Charts/Radar/Colors"},t=[{name:"A",max:100},{name:"B",max:100},{name:"C",max:100},{name:"D",max:100}],n=[40,82,91,74],a=["#F2A65A","#6F8F72","#132440"],e={args:{indicators:t,data:n}},r={args:{indicators:t,data:n,colors:a}},s={args:{indicators:t,data:[{name:"Series A",value:[40,82,91,74]},{name:"Series B",value:[20,62,71,54]},{name:"Series C",value:[60,42,51,94]}],colors:a,showLegend:!0}},o={args:{indicators:t,data:n,theme:{series:[{color:a[0]}],axis:{r:{tickLabelColor:a[2],lineColor:a[1]}}}}};var i,c,m,l,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    indicators,
    data
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"Default theme colors (single series).",...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var p,u,g,C,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    indicators,
    data,
    colors: colors
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:"Custom series color.",...(h=(C=r.parameters)==null?void 0:C.docs)==null?void 0:h.description}}};var S,v,x,f,A;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    indicators,
    data: [{
      name: 'Series A',
      value: [40, 82, 91, 74]
    }, {
      name: 'Series B',
      value: [20, 62, 71, 54]
    }, {
      name: 'Series C',
      value: [60, 42, 51, 94]
    }],
    colors: colors,
    showLegend: true
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:"Multiple series with custom colors and legend.",...(A=(f=s.parameters)==null?void 0:f.docs)==null?void 0:A.description}}};var y,D,L,T,_;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    indicators,
    data,
    theme: {
      series: [{
        color: colors[0]
      }],
      axis: {
        r: {
          tickLabelColor: colors[2],
          lineColor: colors[1]
        }
      }
    } as Partial<ChartTheme>
  }
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source},description:{story:"Theme override: axis and legend.",...(_=(T=o.parameters)==null?void 0:T.docs)==null?void 0:_.description}}};const G=["Default","CustomColor","MultipleSeriesColors","ThemeOverride"];export{r as CustomColor,e as Default,s as MultipleSeriesColors,o as ThemeOverride,G as __namedExportsOrder,z as default};
