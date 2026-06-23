import{A as y}from"./area-chart-DrjqnKLG.js";import{r as S,R as t}from"./iframe-DQBbESXd.js";import{m as h}from"./meta-GyzeNtZ1.js";import{V as u,T as n,s as g}from"./install-D_wEXfzl.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-B-FBt8Sx.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./preload-helper-DkhvmF2b.js";import"./area.args-CMRTFbmo.js";import"./cartesian-C7nMcwZE.js";import"./jsx-runtime-BjG_zV1W.js";const I={...h,title:"Charts/Area/Interaction"},a=g.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[r,p]=S.useState(null);return t.createElement(u,null,t.createElement(n,{style:a.hint},"Tap a data point on the chart to trigger onSelect."),t.createElement(y,{...m,onSelect:d=>p(d)}),t.createElement(n,{style:a.payload,selectable:!0},r==null?"No selection yet.":JSON.stringify(r,null,2)))},args:{data:[{name:"Series A",data:[186,305,237,73,209,214]},{name:"Series B",data:[120,200,150,90,180,160]}],type:"smooth",symbol:"circle",showLegend:!0,areaFill:"gradient"}};var o,s,i,l,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return <View>
        <Text style={styles.hint}>
          Tap a data point on the chart to trigger onSelect.
        </Text>
        <AreaChart {...args} onSelect={e => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>;
  },
  args: {
    data: [{
      name: 'Series A',
      data: [186, 305, 237, 73, 209, 214]
    }, {
      name: 'Series B',
      data: [120, 200, 150, 90, 180, 160]
    }],
    type: 'smooth',
    symbol: 'circle',
    showLegend: true,
    areaFill: 'gradient'
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:"Tap a point on the series; the last selection payload is shown below the chart.",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};const j=["OnSelect"];export{e as OnSelect,j as __namedExportsOrder,I as default};
