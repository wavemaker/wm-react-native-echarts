import{m as B,P as n}from"./meta-DEDHqH0H.js";import{R as e}from"./iframe-7fGkfOWr.js";import{V as a,T as r,s as z}from"./install-NEgcrzy7.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-CpjC6Ee1.js";import"./legend-position-CLb_FM1L.js";import"./sectorHelper-BbU6gYt3.js";import"./createSeriesDataSimply-DaXRNxVR.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const te={...B,title:"Charts/Pie/Tooltip"},M=[{name:"Product A",value:320},{name:"Product B",value:240},{name:"Product C",value:180},{name:"Other",value:90}],j=[{name:"Inner",radius:["0%","38%"],data:[{name:"North",value:120},{name:"South",value:95},{name:"East",value:88}]},{name:"Outer",radius:["48%","72%"],data:[{name:"North",value:200},{name:"South",value:160},{name:"East",value:140}]}],s=z.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8}}),o={width:"100%",height:320,data:M,showLegend:!0},i={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"Default tooltip preset is card."),e.createElement(n,{...t})),args:{...o}},c={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"Concentric rings: card preset shows ring name when applicable."),e.createElement(n,{...t})),args:{width:"100%",height:340,data:j,showLegend:!0}},l={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"Explicit card preset."),e.createElement(n,{...t})),args:{...o,tooltip:"card"}},p={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"Compact preset."),e.createElement(n,{...t})),args:{...o,tooltip:"compact"}},m={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"KPI preset."),e.createElement(n,{...t})),args:{...o,tooltip:"kpi"}},d={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"Striped preset."),e.createElement(n,{...t})),args:{...o,tooltip:"striped"}},g={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"renderTooltip wins over the compact preset."),e.createElement(n,{...t})),args:{...o,tooltip:"compact",renderTooltip:({name:t})=>e.createElement(a,{style:{padding:12,borderRadius:8,backgroundColor:"#fce7f3",borderWidth:2,borderColor:"#db2777"}},e.createElement(r,{style:{fontWeight:"700",color:"#831843"}},"Custom slice"),e.createElement(r,{style:{marginTop:4,color:"#831843"}},t))}},u={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"None: tooltip overlay hidden."),e.createElement(n,{...t})),args:{...o,tooltip:"none"}};var h,C,E;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <PieChart {...args} />
    </View>,
  args: {
    ...baseArgs
  }
}`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var y,T,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Concentric rings: card preset shows ring name when applicable.</Text>
      <PieChart {...args} />
    </View>,
  args: {
    width: '100%',
    height: 340,
    data: CONCENTRIC,
    showLegend: true
  } as any
}`,...(w=(T=c.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var x,b,V;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Explicit card preset.</Text>
      <PieChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'card'
  }
}`,...(V=(b=l.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var P,S,v;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <PieChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact'
  }
}`,...(v=(S=p.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var f,A,N;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <PieChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'kpi'
  }
}`,...(N=(A=m.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var I,O,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <PieChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'striped'
  }
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var L,k,D;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>renderTooltip wins over the compact preset.</Text>
      <PieChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact',
    renderTooltip: ({
      name
    }: PieItemTooltipParams) => <View style={{
      padding: 12,
      borderRadius: 8,
      backgroundColor: '#fce7f3',
      borderWidth: 2,
      borderColor: '#db2777'
    }}>
        <Text style={{
        fontWeight: '700',
        color: '#831843'
      }}>Custom slice</Text>
        <Text style={{
        marginTop: 4,
        color: '#831843'
      }}>{name}</Text>
      </View>
  }
}`,...(D=(k=g.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var K,W,_;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <PieChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'none'
  }
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const re=["Default","Concentric","Card","Compact","Kpi","Striped","CustomOverride","None"];export{l as Card,p as Compact,c as Concentric,g as CustomOverride,i as Default,m as Kpi,u as None,d as Striped,re as __namedExportsOrder,te as default};
