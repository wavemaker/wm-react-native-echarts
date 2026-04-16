import{m as u,L as y}from"./meta-7LYq0ILR.js";import{r as S,R as t}from"./iframe-D855FiCl.js";import{V as h,T as o,s as g}from"./install-BebJlzH2.js";import"./area-chart-sCUu3WLk.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-BiL3BzV2.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./dataSample-YMfQ_6XR.js";import"./cartesian-C25Uk8mH.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const F={...u,title:"Charts/Line/Interaction"},r=g.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[n,p]=S.useState(null);return t.createElement(h,null,t.createElement(o,{style:r.hint},"Tap a data point on the line."),t.createElement(y,{...m,onSelect:d=>p(d)}),t.createElement(o,{style:r.payload,selectable:!0},n==null?"No selection yet.":JSON.stringify(n,null,2)))},args:{data:[{name:"Series A",data:[186,305,237,73,209,214]},{name:"Series B",data:[120,200,150,90,180,160]}],type:"smooth",symbol:"circle",showLegend:!0}};var a,s,i,l,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return <View>
        <Text style={styles.hint}>Tap a data point on the line.</Text>
        <LineChart {...args} onSelect={e => setSelection(e)} />
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
    showLegend: true
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:"Tap a point on the line series; LineChart uses AreaChart under the hood.",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};const J=["OnSelect"];export{e as OnSelect,J as __namedExportsOrder,F as default};
