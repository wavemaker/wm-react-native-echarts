import{m as u,C as y}from"./meta-ZX5Z0jBm.js";import{r as S,R as t}from"./iframe-D855FiCl.js";import{V as g,T as o,s as T}from"./install-BebJlzH2.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./dataSample-YMfQ_6XR.js";import"./createSeriesDataSimply-BSDWH4oQ.js";import"./install-9dos4XC1.js";import"./labelHelper-CzHPQigS.js";import"./sectorHelper-DjU9oWJ9.js";import"./install-BiL3BzV2.js";import"./points-Douv9Vrc.js";import"./cartesian-C25Uk8mH.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const J={...u,title:"Charts/Candlestick/Interaction"},r=T.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),x=[[100,102,98,103],[102,101,99,104],[101,105,100,106],[105,103,102,106],[103,107,102,108]],e={render:m=>{const[n,p]=S.useState(null);return t.createElement(g,null,t.createElement(o,{style:r.hint},"Tap a candlestick to trigger onSelect."),t.createElement(y,{...m,onSelect:d=>p(d)}),t.createElement(o,{style:r.payload,selectable:!0},n==null?"No selection yet.":JSON.stringify(n,null,2)))},args:{data:x,xAxisData:["M","T","W","T","F"]}};var a,s,l,i,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return <View>
        <Text style={styles.hint}>Tap a candlestick to trigger onSelect.</Text>
        <CandlestickChart {...args} onSelect={e => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>;
  },
  args: {
    data: ohlc,
    xAxisData: ['M', 'T', 'W', 'T', 'F']
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:"Tap a candle; payload includes ohlc.",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};const W=["OnSelect"];export{e as OnSelect,W as __namedExportsOrder,J as default};
