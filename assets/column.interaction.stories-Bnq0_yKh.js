import{C as d}from"./column-chart-Bw0oTUdV.js";import{r as S,R as t}from"./iframe-DQBbESXd.js";import{m as g}from"./meta-Cg36X7qY.js";import{V as y,T as o,s as h}from"./install-D_wEXfzl.js";import"./axis-B8VaOuT_.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-VB-o03U1.js";import"./dataSample-C3ms-4cx.js";import"./createSeriesData-VE2uRjI9.js";import"./CoordinateSystem-C8P-Cleg.js";import"./sectorHelper-e2TAJmFq.js";import"./preload-helper-DkhvmF2b.js";import"./cartesian-C7nMcwZE.js";import"./jsx-runtime-BjG_zV1W.js";const v={...g,title:"Charts/Column/Interaction"},r=h.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[n,p]=S.useState(null);return t.createElement(y,null,t.createElement(o,{style:r.hint},"Tap a column to trigger onSelect."),t.createElement(d,{...m,onSelect:u=>p(u)}),t.createElement(o,{style:r.payload,selectable:!0},n==null?"No selection yet.":JSON.stringify(n,null,2)))},args:{data:[{name:"Series A",data:[186,305,237,73,209,214]},{name:"Series B",data:[120,200,150,90,180,160]}],showLegend:!0}};var a,s,l,i,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:"Tap a column; the last selection is shown below the chart.",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};const I=["OnSelect"];export{e as OnSelect,I as __namedExportsOrder,v as default};
