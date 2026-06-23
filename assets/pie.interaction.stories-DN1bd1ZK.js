import{m as d,P as S}from"./meta-DCwOsjf7.js";import{r as g,R as t}from"./iframe-DQBbESXd.js";import{V as y,T as a,s as f}from"./install-D_wEXfzl.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-JQrd69Od.js";import"./legend-position-CLb_FM1L.js";import"./sectorHelper-e2TAJmFq.js";import"./createSeriesDataSimply-BM5eq_8k.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const V={...d,title:"Charts/Pie/Interaction"},r=f.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[n,p]=g.useState(null);return t.createElement(y,null,t.createElement(a,{style:r.hint},"Tap a slice to trigger onSelect."),t.createElement(S,{...m,onSelect:u=>p(u)}),t.createElement(a,{style:r.payload,selectable:!0},n==null?"No selection yet.":JSON.stringify(n,null,2)))},args:{data:[{name:"Chrome",value:335},{name:"Firefox",value:310},{name:"Safari",value:234},{name:"Edge",value:135}],showLegend:!0}};var o,s,l,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<PieChartSelectEvent | null>(null);
    return <View>
        <Text style={styles.hint}>Tap a slice to trigger onSelect.</Text>
        <PieChart {...args} onSelect={e => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>;
  },
  args: {
    data: [{
      name: 'Chrome',
      value: 335
    }, {
      name: 'Firefox',
      value: 310
    }, {
      name: 'Safari',
      value: 234
    }, {
      name: 'Edge',
      value: 135
    }],
    showLegend: true
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:"Tap a slice.",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};const _=["OnSelect"];export{e as OnSelect,_ as __namedExportsOrder,V as default};
