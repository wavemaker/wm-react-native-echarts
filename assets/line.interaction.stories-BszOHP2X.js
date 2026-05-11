import{m as u,L as y}from"./meta-CJ21G4Ce.js";import{r as S,R as t}from"./iframe-7fGkfOWr.js";import{V as h,T as o,s as g}from"./install-NEgcrzy7.js";import"./area-chart-D69Pifby.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-fh8zqSy2.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./dataSample-LQN_tCZn.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const J={...u,title:"Charts/Line/Interaction"},r=g.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[n,p]=S.useState(null);return t.createElement(h,null,t.createElement(o,{style:r.hint},"Tap a data point on the line."),t.createElement(y,{...m,onSelect:d=>p(d)}),t.createElement(o,{style:r.payload,selectable:!0},n==null?"No selection yet.":JSON.stringify(n,null,2)))},args:{data:[{name:"Series A",data:[186,305,237,73,209,214]},{name:"Series B",data:[120,200,150,90,180,160]}],type:"smooth",symbol:"circle",showLegend:!0}};var a,s,i,l,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source},description:{story:"Tap a point on the line series; LineChart uses AreaChart under the hood.",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.description}}};const M=["OnSelect"];export{e as OnSelect,M as __namedExportsOrder,J as default};
