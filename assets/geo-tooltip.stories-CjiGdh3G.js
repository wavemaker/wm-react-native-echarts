import{W as n,m as O}from"./meta-Blwr_v7z.js";import{R as e}from"./iframe-7fGkfOWr.js";import"./use-axis-tooltip-Cl80mEW_.js";import{V as a,T as r,s as P}from"./install-NEgcrzy7.js";import"./common-fSim-PaJ.js";import"./createSeriesDataSimply-DaXRNxVR.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const F={...O,title:"Charts/Geo/Tooltip",component:n},_=[{name:"United States",value:331},{name:"China",value:1439},{name:"India",value:1380},{name:"Brazil",value:213},{name:"Russia",value:146}],s=P.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8}}),o={width:"100%",height:320,data:_,showLegend:!0},l={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"Default tooltip preset is card."),e.createElement(n,{...t})),args:{...o}},i={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"Explicit card preset."),e.createElement(n,{...t})),args:{...o,tooltip:"card"}},c={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"Compact preset."),e.createElement(n,{...t})),args:{...o,tooltip:"compact"}},p={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"KPI preset."),e.createElement(n,{...t})),args:{...o,tooltip:"kpi"}},m={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"Striped preset."),e.createElement(n,{...t})),args:{...o,tooltip:"striped"}},d={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"renderTooltip wins over the compact preset."),e.createElement(n,{...t})),args:{...o,tooltip:"compact",renderTooltip:({name:t})=>e.createElement(a,{style:{padding:10,borderRadius:8,backgroundColor:"#fef3c7"}},e.createElement(r,{style:{fontWeight:"700"}},"Region"),e.createElement(r,null,t))}},g={render:t=>e.createElement(a,null,e.createElement(r,{style:s.hint},"None: tooltip overlay hidden."),e.createElement(n,{...t})),args:{...o,tooltip:"none"}};var u,h,y;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <WorldChart {...args} />
    </View>,
  args: {
    ...baseArgs
  }
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var E,T,x;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Explicit card preset.</Text>
      <WorldChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'card'
  }
}`,...(x=(T=i.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var w,C,V;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <WorldChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact'
  }
}`,...(V=(C=c.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var f,S,b;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <WorldChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'kpi'
  }
}`,...(b=(S=p.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var W,v,A;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <WorldChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'striped'
  }
}`,...(A=(v=m.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var R,D,k;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>renderTooltip wins over the compact preset.</Text>
      <WorldChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact',
    renderTooltip: ({
      name
    }: GeoItemTooltipParams) => <View style={{
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#fef3c7'
    }}>
        <Text style={{
        fontWeight: '700'
      }}>Region</Text>
        <Text>{name}</Text>
      </View>
  }
}`,...(k=(D=d.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var I,K,N;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <WorldChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'none'
  }
}`,...(N=(K=g.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};const H=["Default","Card","Compact","Kpi","Striped","CustomOverride","None"];export{i as Card,c as Compact,d as CustomOverride,l as Default,p as Kpi,g as None,m as Striped,H as __namedExportsOrder,F as default};
