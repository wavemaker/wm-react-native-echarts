import{m as S,B as u}from"./meta-Dy4yOjkn.js";import{r as g,R as t}from"./iframe-DQBbESXd.js";import{V as y,T as n,s as h}from"./install-D_wEXfzl.js";import"./column-chart-Bw0oTUdV.js";import"./axis-B8VaOuT_.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-VB-o03U1.js";import"./dataSample-C3ms-4cx.js";import"./createSeriesData-VE2uRjI9.js";import"./CoordinateSystem-C8P-Cleg.js";import"./sectorHelper-e2TAJmFq.js";import"./cartesian-C7nMcwZE.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const v={...S,title:"Charts/Bar/Interaction"},a=h.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[r,p]=g.useState(null);return t.createElement(y,null,t.createElement(n,{style:a.hint},"Tap a bar to trigger onSelect."),t.createElement(u,{...m,onSelect:d=>p(d)}),t.createElement(n,{style:a.payload,selectable:!0},r==null?"No selection yet.":JSON.stringify(r,null,2)))},args:{data:[{name:"Series A",data:[186,305,237,73,209,214]},{name:"Series B",data:[120,200,150,90,180,160]}],showLegend:!0,width:280}};var o,s,i,l,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:"Tap a bar; the last selection is shown below the chart.",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};const I=["OnSelect"];export{e as OnSelect,I as __namedExportsOrder,v as default};
