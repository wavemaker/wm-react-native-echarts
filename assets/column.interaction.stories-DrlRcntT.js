import{C as d}from"./column-chart-CwF2pesq.js";import{r as S,R as t}from"./iframe-D855FiCl.js";import{m as g}from"./meta-DQP0OanO.js";import{V as y,T as o,s as h}from"./install-BebJlzH2.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-9dos4XC1.js";import"./dataSample-YMfQ_6XR.js";import"./labelHelper-CzHPQigS.js";import"./sectorHelper-DjU9oWJ9.js";import"./preload-helper-DkhvmF2b.js";import"./cartesian-C25Uk8mH.js";import"./jsx-runtime-BjG_zV1W.js";const J={...g,title:"Charts/Column/Interaction"},r=h.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[n,p]=S.useState(null);return t.createElement(y,null,t.createElement(o,{style:r.hint},"Tap a column to trigger onSelect."),t.createElement(d,{...m,onSelect:u=>p(u)}),t.createElement(o,{style:r.payload,selectable:!0},n==null?"No selection yet.":JSON.stringify(n,null,2)))},args:{data:[{name:"Series A",data:[186,305,237,73,209,214]},{name:"Series B",data:[120,200,150,90,180,160]}],showLegend:!0}};var a,s,l,i,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return <View>
        <Text style={styles.hint}>Tap a column to trigger onSelect.</Text>
        <ColumnChart {...args} onSelect={e => setSelection(e)} />
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
    showLegend: true
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:"Tap a column; the last selection is shown below the chart.",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};const L=["OnSelect"];export{e as OnSelect,L as __namedExportsOrder,J as default};
