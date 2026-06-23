import{m as u,R as y}from"./meta-CuN1RdFA.js";import{r as S,R as t}from"./iframe-DQBbESXd.js";import{V as g,T as r,s as x}from"./install-D_wEXfzl.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./legend-position-CLb_FM1L.js";import"./createSeriesDataSimply-BM5eq_8k.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const I={...u,title:"Charts/Radar/Interaction"},n=x.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),f=[{name:"Sales",max:100},{name:"Marketing",max:100},{name:"Development",max:100},{name:"Support",max:100},{name:"Admin",max:100}],e={render:m=>{const[a,p]=S.useState(null);return t.createElement(g,null,t.createElement(r,{style:n.hint},"Tap the radar area to trigger onSelect."),t.createElement(y,{...m,onSelect:d=>p(d)}),t.createElement(r,{style:n.payload,selectable:!0},a==null?"No selection yet.":JSON.stringify(a,null,2)))},args:{indicators:f,data:[80,60,75,55,70],symbol:"circle",symbolSize:8}};var o,s,l,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<RadarChartSelectEvent | null>(null);
    return <View>
        <Text style={styles.hint}>Tap the radar area to trigger onSelect.</Text>
        <RadarChart {...args} onSelect={e => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>;
  },
  args: {
    indicators: defaultIndicators,
    data: [80, 60, 75, 55, 70],
    symbol: 'circle',
    symbolSize: 8
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:"Tap the radar polygon.",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};const M=["OnSelect"];export{e as OnSelect,M as __namedExportsOrder,I as default};
