import{A as y}from"./area-chart-sCUu3WLk.js";import{r as S,R as t}from"./iframe-D855FiCl.js";import{m as h}from"./meta-DffN3gIn.js";import{V as u,T as n,s as g}from"./install-BebJlzH2.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-BiL3BzV2.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./dataSample-YMfQ_6XR.js";import"./preload-helper-DkhvmF2b.js";import"./area.args-BM6SB80j.js";import"./cartesian-C25Uk8mH.js";import"./jsx-runtime-BjG_zV1W.js";const L={...h,title:"Charts/Area/Interaction"},a=g.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[r,p]=S.useState(null);return t.createElement(u,null,t.createElement(n,{style:a.hint},"Tap a data point on the chart to trigger onSelect."),t.createElement(y,{...m,onSelect:d=>p(d)}),t.createElement(n,{style:a.payload,selectable:!0},r==null?"No selection yet.":JSON.stringify(r,null,2)))},args:{data:[{name:"Series A",data:[186,305,237,73,209,214]},{name:"Series B",data:[120,200,150,90,180,160]}],type:"smooth",symbol:"circle",showLegend:!0,areaFill:"gradient"}};var o,s,i,l,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return <View>
        <Text style={styles.hint}>
          Tap a data point on the chart to trigger onSelect.
        </Text>
        <AreaChart {...args} onSelect={e => setSelection(e)} />
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
    type: 'smooth',
    symbol: 'circle',
    showLegend: true,
    areaFill: 'gradient'
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:"Tap a point on the series; the last selection payload is shown below the chart.",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};const M=["OnSelect"];export{e as OnSelect,M as __namedExportsOrder,L as default};
