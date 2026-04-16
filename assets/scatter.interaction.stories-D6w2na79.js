import{m as u,S as y}from"./meta-DmV-h9HO.js";import{r as d,R as t}from"./iframe-D855FiCl.js";import{V as g,T as s,s as h}from"./install-BebJlzH2.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-elHyl0oQ.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./install-BiL3BzV2.js";import"./dataSample-YMfQ_6XR.js";import"./cartesian-C25Uk8mH.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const v={...u,title:"Charts/Scatter/Interaction"},o=h.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),f=[[2,3],[4,6],[12,22],[14,26],[16,30]],e={render:m=>{const[r,p]=d.useState(null);return t.createElement(g,null,t.createElement(s,{style:o.hint},"Tap a point in the scatter series."),t.createElement(y,{...m,onSelect:S=>p(S)}),t.createElement(s,{style:o.payload,selectable:!0},r==null?"No selection yet.":JSON.stringify(r,null,2)))},args:{data:f,symbol:"circle"}};var n,a,i,l,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source},description:{story:"Tap a scatter point.",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};const B=["OnSelect"];export{e as OnSelect,B as __namedExportsOrder,v as default};
