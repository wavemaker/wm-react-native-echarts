import{h as u,m as S,H as y}from"./meta-DcRnfA1u.js";import{r as d,R as t}from"./iframe-DQBbESXd.js";import{V as h,T as a,s as f}from"./install-D_wEXfzl.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-CaCb0Y84.js";import"./CoordinateSystem-C8P-Cleg.js";import"./createSeriesData-VE2uRjI9.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const R={...S,title:"Charts/Heatmap/Interaction"},o=f.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[r,p]=d.useState(null);return t.createElement(h,null,t.createElement(a,{style:o.hint},"Tap a cell to trigger onSelect."),t.createElement(y,{...m,onSelect:g=>p(g)}),t.createElement(a,{style:o.payload,selectable:!0},r==null?"No selection yet.":JSON.stringify(r,null,2)))},args:{...u}};var n,s,l,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<HeatmapChartSelectEvent | null>(null);
    return <View>
        <Text style={styles.hint}>Tap a cell to trigger onSelect.</Text>
        <HeatmapChart {...args} onSelect={e => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>;
  },
  args: {
    ...heatmapBaseArgs
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:"Tap a cell to trigger onSelect.",...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.description}}};const z=["OnSelect"];export{e as OnSelect,z as __namedExportsOrder,R as default};
