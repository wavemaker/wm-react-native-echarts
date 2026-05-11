import{m as u,R as g}from"./meta-CQvTccS3.js";import{r as S,R as t}from"./iframe-7fGkfOWr.js";import{V as y,T as r,s as f}from"./install-NEgcrzy7.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-CpjC6Ee1.js";import"./legend-position-CLb_FM1L.js";import"./sectorHelper-BbU6gYt3.js";import"./createSeriesDataSimply-DaXRNxVR.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const F={...u,title:"Charts/Radial/Interaction"},l=f.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),h=[{label:"Chrome",value:92},{label:"Firefox",value:78},{label:"Safari",value:65},{label:"Brave",value:52},{label:"Edge",value:38}],e={render:m=>{const[a,p]=S.useState(null);return t.createElement(y,null,t.createElement(r,{style:l.hint},"Tap a colored ring segment to trigger onSelect."),t.createElement(g,{...m,onSelect:d=>p(d)}),t.createElement(r,{style:l.payload,selectable:!0},a==null?"No selection yet.":JSON.stringify(a,null,2)))},args:{data:h,showLegend:!0}};var n,o,s,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<RadialChartSelectEvent | null>(null);
    return <View>
        <Text style={styles.hint}>Tap a colored ring segment to trigger onSelect.</Text>
        <RadialChart {...args} onSelect={e => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>;
  },
  args: {
    data: defaultData,
    showLegend: true
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source},description:{story:"Tap a ring’s filled segment.",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};const z=["OnSelect"];export{e as OnSelect,z as __namedExportsOrder,F as default};
