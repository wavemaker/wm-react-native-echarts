import{m as u,R as g}from"./meta-PzEC0QSx.js";import{r as S,R as t}from"./iframe-D855FiCl.js";import{V as y,T as r,s as f}from"./install-BebJlzH2.js";import"./common-BBO5jU0Y.js";import"./install-DfB1csNh.js";import"./install-DO9VZV3L.js";import"./LegendVisualProvider-CgY2uWFN.js";import"./sectorHelper-DjU9oWJ9.js";import"./createSeriesDataSimply-BSDWH4oQ.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const _={...u,title:"Charts/Radial/Interaction"},l=f.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),h=[{label:"Chrome",value:92},{label:"Firefox",value:78},{label:"Safari",value:65},{label:"Brave",value:52},{label:"Edge",value:38}],e={render:m=>{const[a,d]=S.useState(null);return t.createElement(y,null,t.createElement(r,{style:l.hint},"Tap a colored ring segment to trigger onSelect."),t.createElement(g,{...m,onSelect:p=>d(p)}),t.createElement(r,{style:l.payload,selectable:!0},a==null?"No selection yet.":JSON.stringify(a,null,2)))},args:{data:h,showLegend:!0}};var n,o,s,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source},description:{story:"Tap a ring’s filled segment.",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};const F=["OnSelect"];export{e as OnSelect,F as __namedExportsOrder,_ as default};
