import{m as R,S as s}from"./meta-Wes3cbXa.js";import"./use-scatter-item-tooltip-pODPcTwS.js";import{R as e}from"./iframe-DQBbESXd.js";import"./use-axis-tooltip-I7UAJfpW.js";import{V as a,T as r,s as W}from"./install-D_wEXfzl.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-B-FBt8Sx.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./cartesian-C7nMcwZE.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const se={...R,title:"Charts/Scatter/Tooltip"},u=[[2,12],[5,18],[8,9],[11,22],[14,16],[17,11]],M=[{name:"Group A",data:u},{name:"Group B",data:u.map(([t,O])=>[t+1,O-3])}],o=W.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8}}),n={width:"100%",height:300,data:M,showLegend:!0},c={render:t=>e.createElement(a,null,e.createElement(r,{style:o.hint},"Default tooltip preset is card."),e.createElement(s,{...t})),args:{...n}},i={render:t=>e.createElement(a,null,e.createElement(r,{style:o.hint},"Explicit card preset."),e.createElement(s,{...t})),args:{...n,tooltip:"card"}},l={render:t=>e.createElement(a,null,e.createElement(r,{style:o.hint},"Compact preset."),e.createElement(s,{...t})),args:{...n,tooltip:"compact"}},p={render:t=>e.createElement(a,null,e.createElement(r,{style:o.hint},"KPI preset."),e.createElement(s,{...t})),args:{...n,tooltip:"kpi"}},m={render:t=>e.createElement(a,null,e.createElement(r,{style:o.hint},"Striped preset."),e.createElement(s,{...t})),args:{...n,tooltip:"striped"}},d={render:t=>e.createElement(a,null,e.createElement(r,{style:o.hint},"renderTooltip wins over the compact preset."),e.createElement(s,{...t})),args:{...n,tooltip:"compact",renderTooltip:({seriesName:t})=>e.createElement(a,{style:{padding:12,borderRadius:8,backgroundColor:"#dcfce7",borderWidth:2,borderColor:"#16a34a"}},e.createElement(r,{style:{fontWeight:"700",color:"#14532d"}},"Custom"),e.createElement(r,{style:{marginTop:4,color:"#14532d"}},t))}},g={render:t=>e.createElement(a,null,e.createElement(r,{style:o.hint},"None: tooltip overlay hidden."),e.createElement(s,{...t})),args:{...n,tooltip:"none"}};var h,y,T;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <ScatterChart {...args} />
    </View>,
  args: {
    ...baseArgs
  }
}`,...(T=(y=c.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var E,S,x;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Explicit card preset.</Text>
      <ScatterChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'card'
  }
}`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var C,w,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <ScatterChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact'
  }
}`,...(V=(w=l.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var b,f,A;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <ScatterChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'kpi'
  }
}`,...(A=(f=p.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var N,v,P;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <ScatterChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'striped'
  }
}`,...(P=(v=m.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var I,_,k;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>renderTooltip wins over the compact preset.</Text>
      <ScatterChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact',
    renderTooltip: ({
      seriesName
    }: ScatterItemTooltipParams) => <View style={{
      padding: 12,
      borderRadius: 8,
      backgroundColor: '#dcfce7',
      borderWidth: 2,
      borderColor: '#16a34a'
    }}>
        <Text style={{
        fontWeight: '700',
        color: '#14532d'
      }}>Custom</Text>
        <Text style={{
        marginTop: 4,
        color: '#14532d'
      }}>{seriesName}</Text>
      </View>
  }
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var D,K,L;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <ScatterChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'none'
  }
}`,...(L=(K=g.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const oe=["Default","Card","Compact","Kpi","Striped","CustomOverride","None"];export{i as Card,l as Compact,d as CustomOverride,c as Default,p as Kpi,g as None,m as Striped,oe as __namedExportsOrder,se as default};
