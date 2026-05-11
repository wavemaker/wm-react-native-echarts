import{m as _,R as s}from"./meta-fj1QTGcU.js";import{R as e}from"./iframe-7fGkfOWr.js";import{V as a,T as r,s as P}from"./install-NEgcrzy7.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./legend-position-CLb_FM1L.js";import"./createSeriesDataSimply-DaXRNxVR.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const Y={..._,title:"Charts/Radar/Tooltip"},z=[{name:"Sales",max:100},{name:"Marketing",max:100},{name:"Development",max:100},{name:"Support",max:100},{name:"Admin",max:100}],B=[{name:"Team A",value:[82,58,76,52,68]},{name:"Team B",value:[64,72,61,78,55]}],n=P.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8}}),o={width:"100%",height:340,indicators:z,data:B,showLegend:!0,symbol:"circle",symbolSize:6},i={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"Default tooltip preset is card."),e.createElement(s,{...t})),args:{...o}},l={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"Explicit card preset."),e.createElement(s,{...t})),args:{...o,tooltip:"card"}},c={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"Compact preset."),e.createElement(s,{...t})),args:{...o,tooltip:"compact"}},m={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"KPI preset."),e.createElement(s,{...t})),args:{...o,tooltip:"kpi"}},p={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"Striped preset."),e.createElement(s,{...t})),args:{...o,tooltip:"striped"}},d={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"renderTooltip wins over the compact preset."),e.createElement(s,{...t})),args:{...o,tooltip:"compact",renderTooltip:({seriesName:t})=>e.createElement(a,{style:{padding:10,borderRadius:8,backgroundColor:"#cffafe"}},e.createElement(r,{style:{fontWeight:"700"}},"Custom"),e.createElement(r,null,t))}},g={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"None: tooltip overlay hidden."),e.createElement(s,{...t})),args:{...o,tooltip:"none"}};var u,h,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <RadarChart {...args} />
    </View>,
  args: {
    ...baseArgs
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,E,x;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Explicit card preset.</Text>
      <RadarChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'card'
  }
}`,...(x=(E=l.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var C,w,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <RadarChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact'
  }
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var V,f,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <RadarChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'kpi'
  }
}`,...(R=(f=m.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var b,A,v;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <RadarChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'striped'
  }
}`,...(v=(A=p.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var I,N,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>renderTooltip wins over the compact preset.</Text>
      <RadarChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact',
    renderTooltip: ({
      seriesName
    }: RadarItemTooltipParams) => <View style={{
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#cffafe'
    }}>
        <Text style={{
        fontWeight: '700'
      }}>Custom</Text>
        <Text>{seriesName}</Text>
      </View>
  }
}`,...(D=(N=d.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var k,K,O;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <RadarChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'none'
  }
}`,...(O=(K=g.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};const Z=["Default","Card","Compact","Kpi","Striped","CustomOverride","None"];export{l as Card,c as Compact,d as CustomOverride,i as Default,m as Kpi,g as None,p as Striped,Z as __namedExportsOrder,Y as default};
