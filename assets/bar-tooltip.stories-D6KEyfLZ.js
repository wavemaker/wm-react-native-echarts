import{m as K,B as s}from"./meta-Dy4yOjkn.js";import{R as e}from"./iframe-DQBbESXd.js";import{V as a,T as t,s as L}from"./install-D_wEXfzl.js";import"./column-chart-Bw0oTUdV.js";import"./axis-B8VaOuT_.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-VB-o03U1.js";import"./dataSample-C3ms-4cx.js";import"./createSeriesData-VE2uRjI9.js";import"./CoordinateSystem-C8P-Cleg.js";import"./sectorHelper-e2TAJmFq.js";import"./cartesian-C7nMcwZE.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const se={...K,title:"Charts/Bar/Tooltip"},N=[186,305,237,73,209,214],W=[{name:"Revenue",data:N},{name:"Cost",data:[120,200,150,90,180,160]}],n=L.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8}}),o={width:"100%",height:300,data:W,showLegend:!0},i={render:r=>e.createElement(a,null,e.createElement(t,{style:n.hint},"Default tooltip preset is card."),e.createElement(s,{...r})),args:{...o}},l={render:r=>e.createElement(a,null,e.createElement(t,{style:n.hint},"Explicit card preset."),e.createElement(s,{...r})),args:{...o,tooltip:"card"}},c={render:r=>e.createElement(a,null,e.createElement(t,{style:n.hint},"Compact preset."),e.createElement(s,{...r})),args:{...o,tooltip:"compact"}},p={render:r=>e.createElement(a,null,e.createElement(t,{style:n.hint},"KPI preset."),e.createElement(s,{...r})),args:{...o,tooltip:"kpi"}},m={render:r=>e.createElement(a,null,e.createElement(t,{style:n.hint},"Striped preset."),e.createElement(s,{...r})),args:{...o,tooltip:"striped"}},d={render:r=>e.createElement(a,null,e.createElement(t,{style:n.hint},"renderTooltip wins over the compact preset."),e.createElement(s,{...r})),args:{...o,tooltip:"compact",renderTooltip:({axisValue:r})=>e.createElement(a,{style:{padding:12,borderRadius:8,backgroundColor:"#ffedd5",borderWidth:2,borderColor:"#ea580c"}},e.createElement(t,{style:{fontWeight:"700",color:"#9a3412"}},"Custom"),e.createElement(t,{style:{marginTop:4,color:"#431407"}},String(r)))}},g={render:r=>e.createElement(a,null,e.createElement(t,{style:n.hint},"None: tooltip overlay hidden."),e.createElement(s,{...r})),args:{...o,tooltip:"none"}};var u,h,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <BarChart {...args} />
    </View>,
  args: {
    ...baseArgs
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,E,x;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Explicit card preset.</Text>
      <BarChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'card'
  }
}`,...(x=(E=l.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var C,w,V;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <BarChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact'
  }
}`,...(V=(w=c.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var b,S,f;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <BarChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'kpi'
  }
}`,...(f=(S=p.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var A,B,v;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <BarChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'striped'
  }
}`,...(v=(B=m.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var _,D,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>renderTooltip wins over the compact preset.</Text>
      <BarChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact',
    renderTooltip: ({
      axisValue
    }: AxisTooltipParams) => <View style={{
      padding: 12,
      borderRadius: 8,
      backgroundColor: '#ffedd5',
      borderWidth: 2,
      borderColor: '#ea580c'
    }}>
        <Text style={{
        fontWeight: '700',
        color: '#9a3412'
      }}>Custom</Text>
        <Text style={{
        marginTop: 4,
        color: '#431407'
      }}>{String(axisValue)}</Text>
      </View>
  }
}`,...(P=(D=d.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var R,k,I;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <BarChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'none'
  }
}`,...(I=(k=g.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const ne=["Default","Card","Compact","Kpi","Striped","CustomOverride","None"];export{l as Card,c as Compact,d as CustomOverride,i as Default,p as Kpi,g as None,m as Striped,ne as __namedExportsOrder,se as default};
