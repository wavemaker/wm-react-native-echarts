import{m as S,B as u}from"./meta-DDnx52Ay.js";import{r as g,R as t}from"./iframe-D855FiCl.js";import{V as y,T as n,s as h}from"./install-BebJlzH2.js";import"./column-chart-CwF2pesq.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-9dos4XC1.js";import"./dataSample-YMfQ_6XR.js";import"./labelHelper-CzHPQigS.js";import"./sectorHelper-DjU9oWJ9.js";import"./cartesian-C25Uk8mH.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const J={...S,title:"Charts/Bar/Interaction"},a=h.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[r,p]=g.useState(null);return t.createElement(y,null,t.createElement(n,{style:a.hint},"Tap a bar to trigger onSelect."),t.createElement(u,{...m,onSelect:d=>p(d)}),t.createElement(n,{style:a.payload,selectable:!0},r==null?"No selection yet.":JSON.stringify(r,null,2)))},args:{data:[{name:"Series A",data:[186,305,237,73,209,214]},{name:"Series B",data:[120,200,150,90,180,160]}],showLegend:!0,width:280}};var o,s,i,l,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return <View>
        <Text style={styles.hint}>Tap a bar to trigger onSelect.</Text>
        <BarChart {...args} onSelect={e => setSelection(e)} />
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
    showLegend: true,
    width: 280
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:"Tap a bar; the last selection is shown below the chart.",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};const L=["OnSelect"];export{e as OnSelect,L as __namedExportsOrder,J as default};
