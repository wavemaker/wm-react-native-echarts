import{m as u,S as y}from"./meta-Wes3cbXa.js";import{r as d,R as t}from"./iframe-DQBbESXd.js";import{V as g,T as o,s as h}from"./install-D_wEXfzl.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./use-scatter-item-tooltip-pODPcTwS.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./common-WjgByzXx.js";import"./install-B-FBt8Sx.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./cartesian-C7nMcwZE.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const I={...u,title:"Charts/Scatter/Interaction"},s=h.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),f=[[2,3],[4,6],[12,22],[14,26],[16,30]],e={render:m=>{const[r,p]=d.useState(null);return t.createElement(g,null,t.createElement(o,{style:s.hint},"Tap a point in the scatter series."),t.createElement(y,{...m,onSelect:S=>p(S)}),t.createElement(o,{style:s.payload,selectable:!0},r==null?"No selection yet.":JSON.stringify(r,null,2)))},args:{data:f,symbol:"circle"}};var n,a,i,l,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return <View>
        <Text style={styles.hint}>Tap a point in the scatter series.</Text>
        <ScatterChart {...args} onSelect={e => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>;
  },
  args: {
    data: samplePoints,
    symbol: 'circle'
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source},description:{story:"Tap a scatter point.",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};const j=["OnSelect"];export{e as OnSelect,j as __namedExportsOrder,I as default};
