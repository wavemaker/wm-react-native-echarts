import{m as O,R as s}from"./meta-CQvTccS3.js";import{R as e}from"./iframe-7fGkfOWr.js";import{V as a,T as r,s as z}from"./install-NEgcrzy7.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-CpjC6Ee1.js";import"./legend-position-CLb_FM1L.js";import"./sectorHelper-BbU6gYt3.js";import"./createSeriesDataSimply-DaXRNxVR.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const ee={...O,title:"Charts/Radial/Tooltip"},F=[{label:"Chrome",value:92},{label:"Firefox",value:78},{label:"Safari",value:65},{label:"Brave",value:52},{label:"Edge",value:38}],n=z.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8}}),o={width:"100%",height:360,data:F,showLegend:!0},l={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"Default tooltip preset is card."),e.createElement(s,{...t})),args:{...o}},i={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"Explicit card preset."),e.createElement(s,{...t})),args:{...o,tooltip:"card"}},c={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"Compact preset."),e.createElement(s,{...t})),args:{...o,tooltip:"compact"}},p={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"KPI preset."),e.createElement(s,{...t})),args:{...o,tooltip:"kpi"}},d={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"Striped preset."),e.createElement(s,{...t})),args:{...o,tooltip:"striped"}},m={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"renderTooltip wins over the compact preset."),e.createElement(s,{...t})),args:{...o,tooltip:"compact",renderTooltip:({ringLabel:t})=>e.createElement(a,{style:{padding:10,borderRadius:8,backgroundColor:"#ede9fe"}},e.createElement(r,{style:{fontWeight:"700"}},"Custom ring"),e.createElement(r,null,t))}},g={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"Card preset alongside center title."),e.createElement(s,{...t})),args:{...o,centerText:"Browsers",centerSubtext:"share"}},u={render:t=>e.createElement(a,null,e.createElement(r,{style:n.hint},"None: tooltip overlay hidden."),e.createElement(s,{...t})),args:{...o,tooltip:"none"}};var h,T,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <RadialChart {...args} />
    </View>,
  args: {
    ...baseArgs
  }
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var y,E,C;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Explicit card preset.</Text>
      <RadialChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'card'
  }
}`,...(C=(E=i.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var w,b,V;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <RadialChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact'
  }
}`,...(V=(b=c.parameters)==null?void 0:b.docs)==null?void 0:V.source}}};var S,R,f;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <RadialChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'kpi'
  }
}`,...(f=(R=p.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var v,A,N;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <RadialChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'striped'
  }
}`,...(N=(A=d.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var k,B,D;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>renderTooltip wins over the compact preset.</Text>
      <RadialChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact',
    renderTooltip: ({
      ringLabel
    }: RadialItemTooltipParams) => <View style={{
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#ede9fe'
    }}>
        <Text style={{
        fontWeight: '700'
      }}>Custom ring</Text>
        <Text>{ringLabel}</Text>
      </View>
  }
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var I,K,L;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Card preset alongside center title.</Text>
      <RadialChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    centerText: 'Browsers',
    centerSubtext: 'share'
  }
}`,...(L=(K=g.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var P,W,_;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <RadialChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'none'
  }
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const te=["Default","Card","Compact","Kpi","Striped","CustomOverride","WithCenterText","None"];export{i as Card,c as Compact,m as CustomOverride,l as Default,p as Kpi,u as None,d as Striped,g as WithCenterText,te as __namedExportsOrder,ee as default};
