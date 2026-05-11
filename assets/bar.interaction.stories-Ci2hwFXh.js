import{m as S,B as u}from"./meta-2S4oTlPh.js";import{r as g,R as t}from"./iframe-7fGkfOWr.js";import{V as y,T as n,s as h}from"./install-NEgcrzy7.js";import"./column-chart-MOBmXkGr.js";import"./cartesian-CLDRzb7E.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-j5bgd6PW.js";import"./dataSample-LQN_tCZn.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const L={...S,title:"Charts/Bar/Interaction"},a=h.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[r,p]=g.useState(null);return t.createElement(y,null,t.createElement(n,{style:a.hint},"Tap a bar to trigger onSelect."),t.createElement(u,{...m,onSelect:d=>p(d)}),t.createElement(n,{style:a.payload,selectable:!0},r==null?"No selection yet.":JSON.stringify(r,null,2)))},args:{data:[{name:"Series A",data:[186,305,237,73,209,214]},{name:"Series B",data:[120,200,150,90,180,160]}],showLegend:!0,width:280}};var o,s,i,l,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:"Tap a bar; the last selection is shown below the chart.",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};const M=["OnSelect"];export{e as OnSelect,M as __namedExportsOrder,L as default};
