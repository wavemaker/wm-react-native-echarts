import{m as d,G as g,w as y,a as S}from"./meta-dLesob-y.js";import{r as h,R as e}from"./iframe-D855FiCl.js";import{V as f,T as a,s as v}from"./install-BebJlzH2.js";import"./common-BBO5jU0Y.js";import"./createSeriesDataSimply-BSDWH4oQ.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const O={...d,title:"Charts/Geo/Interaction"},o=v.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),x=[{name:"United States",value:500},{name:"China",value:600},{name:"Japan",value:300},{name:"Germany",value:250}],t={render:m=>{const[n,p]=h.useState(null);return e.createElement(g.Provider,{value:y},e.createElement(f,null,e.createElement(a,{style:o.hint},"Tap a region on the map to trigger onSelect."),e.createElement(S,{...m,onSelect:u=>p(u)}),e.createElement(a,{style:o.payload,selectable:!0},n==null?"No selection yet.":JSON.stringify(n,null,2))))},args:{data:x,width:400,height:280}};var r,s,l,i,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<GeoChartSelectEvent | null>(null);
    return <GeoMapJsonContext.Provider value={worldJson as never}>
        <View>
          <Text style={styles.hint}>Tap a region on the map to trigger onSelect.</Text>
          <GeoChart {...args} onSelect={e => setSelection(e)} />
          <Text style={styles.payload} selectable>
            {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
          </Text>
        </View>
      </GeoMapJsonContext.Provider>;
  },
  args: {
    data: defaultData,
    width: 400,
    height: 280
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:"Tap a country/region on the map.",...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};const b=["OnSelect"];export{t as OnSelect,b as __namedExportsOrder,O as default};
