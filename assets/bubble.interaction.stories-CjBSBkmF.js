import{m as b,B as y}from"./meta-DUxyrNYG.js";import{r as S,R as t}from"./iframe-7fGkfOWr.js";import{V as d,T as n,s as g}from"./install-NEgcrzy7.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./use-scatter-item-tooltip-DO9_ZKBe.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./common-fSim-PaJ.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const F={...b,title:"Charts/Bubble/Interaction"},o=g.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[r,p]=S.useState(null);return t.createElement(d,null,t.createElement(n,{style:o.hint},"Tap a bubble to trigger onSelect."),t.createElement(y,{...m,onSelect:u=>p(u)}),t.createElement(n,{style:o.payload,selectable:!0},r==null?"No selection yet.":JSON.stringify(r,null,2)))},args:{data:[[2,3,18],[8,12,40],[14,18,28],[20,24,55],[26,30,35]],symbol:"circle"}};var s,l,a,i,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return <View>
        <Text style={styles.hint}>Tap a bubble to trigger onSelect.</Text>
        <BubbleChart {...args} onSelect={e => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>;
  },
  args: {
    data: [[2, 3, 18], [8, 12, 40], [14, 18, 28], [20, 24, 55], [26, 30, 35]],
    symbol: 'circle'
  }
}`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source},description:{story:"Tap a bubble; `z` is the size dimension when present.",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};const J=["OnSelect"];export{e as OnSelect,J as __namedExportsOrder,F as default};
