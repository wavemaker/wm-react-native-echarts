import{m as b,B as y}from"./meta-CJUv6gyd.js";import{r as S,R as t}from"./iframe-D855FiCl.js";import{V as d,T as n,s as g}from"./install-BebJlzH2.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-elHyl0oQ.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./cartesian-C25Uk8mH.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const R={...b,title:"Charts/Bubble/Interaction"},o=g.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),e={render:m=>{const[r,p]=S.useState(null);return t.createElement(d,null,t.createElement(n,{style:o.hint},"Tap a bubble to trigger onSelect."),t.createElement(y,{...m,onSelect:u=>p(u)}),t.createElement(n,{style:o.payload,selectable:!0},r==null?"No selection yet.":JSON.stringify(r,null,2)))},args:{data:[[2,3,18],[8,12,40],[14,18,28],[20,24,55],[26,30,35]],symbol:"circle"}};var s,l,a,i,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source},description:{story:"Tap a bubble; `z` is the size dimension when present.",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};const F=["OnSelect"];export{e as OnSelect,F as __namedExportsOrder,R as default};
