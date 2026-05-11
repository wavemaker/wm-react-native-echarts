import{m as w}from"./meta-fj1QTGcU.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./legend-position-CLb_FM1L.js";import"./createSeriesDataSimply-DaXRNxVR.js";const G={...w,title:"Charts/Radar/Colors"},t=[{name:"A",max:100},{name:"B",max:100},{name:"C",max:100},{name:"D",max:100}],n=[40,82,91,74],a=["#F2A65A","#6F8F72","#132440"],r={args:{indicators:t,data:n}},e={args:{indicators:t,data:n,colors:a}},o={args:{indicators:t,data:[{name:"Series A",value:[40,82,91,74]},{name:"Series B",value:[20,62,71,54]},{name:"Series C",value:[60,42,51,94]}],colors:a,showLegend:!0}},s={args:{indicators:t,data:n,theme:{series:[{color:a[0]}],axis:{r:{tickLabelColor:a[2],lineColor:a[1]}}}}};var i,c,m,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    indicators,
    data
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"Default theme colors (single series).",...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var p,u,g,C,h;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    indicators,
    data,
    colors: colors
  }
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:"Custom series color.",...(h=(C=e.parameters)==null?void 0:C.docs)==null?void 0:h.description}}};var S,v,x,f,A;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:"Multiple series with custom colors and legend.",...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.description}}};var y,D,L,T,_;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(L=(D=s.parameters)==null?void 0:D.docs)==null?void 0:L.source},description:{story:"Theme override: axis and legend.",...(_=(T=s.parameters)==null?void 0:T.docs)==null?void 0:_.description}}};const H=["Default","CustomColor","MultipleSeriesColors","ThemeOverride"];export{e as CustomColor,r as Default,o as MultipleSeriesColors,s as ThemeOverride,H as __namedExportsOrder,G as default};
