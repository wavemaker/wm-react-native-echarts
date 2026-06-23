import{m as u,C as y}from"./meta-VeYvYczT.js";import{r as S,R as t}from"./iframe-DQBbESXd.js";import{V as g,T as n,s as T}from"./install-D_wEXfzl.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./dataSample-C3ms-4cx.js";import"./createSeriesDataSimply-BM5eq_8k.js";import"./install-VB-o03U1.js";import"./createSeriesData-VE2uRjI9.js";import"./CoordinateSystem-C8P-Cleg.js";import"./sectorHelper-e2TAJmFq.js";import"./install-B-FBt8Sx.js";import"./points-CpfmDJP4.js";import"./cartesian-C7nMcwZE.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const v={...u,title:"Charts/Candlestick/Interaction"},r=T.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8},payload:{fontFamily:"ui-monospace, SFMono-Regular, Menlo, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),x=[[100,102,98,103],[102,101,99,104],[101,105,100,106],[105,103,102,106],[103,107,102,108]],e={render:m=>{const[o,p]=S.useState(null);return t.createElement(g,null,t.createElement(n,{style:r.hint},"Tap a candlestick to trigger onSelect."),t.createElement(y,{...m,onSelect:d=>p(d)}),t.createElement(n,{style:r.payload,selectable:!0},o==null?"No selection yet.":JSON.stringify(o,null,2)))},args:{data:x,xAxisData:["M","T","W","T","F"]}};var a,s,l,i,c;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source},description:{story:"Tap a candle; payload includes ohlc.",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};const B=["OnSelect"];export{e as OnSelect,B as __namedExportsOrder,v as default};
