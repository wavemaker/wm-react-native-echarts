import{C as s}from"./column-chart-MOBmXkGr.js";import{R as e}from"./iframe-7fGkfOWr.js";import{m as W}from"./meta-COZUIp89.js";import{V as o,T as r,s as M}from"./install-NEgcrzy7.js";import"./cartesian-CLDRzb7E.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-j5bgd6PW.js";import"./dataSample-LQN_tCZn.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const se={...W,title:"Charts/Column/Tooltip"},O=[186,305,237,73,209,214],z=[{name:"Revenue",data:O},{name:"Cost",data:[120,200,150,90,180,160]}],a=M.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8}}),n={width:"100%",height:300,data:z,showLegend:!0,horizontal:!1},i={render:t=>e.createElement(o,null,e.createElement(r,{style:a.hint},"Default tooltip preset is card (omit renderTooltip)."),e.createElement(s,{...t})),args:{...n}},l={render:t=>e.createElement(o,null,e.createElement(r,{style:a.hint},"Explicit card preset (same as default)."),e.createElement(s,{...t})),args:{...n,tooltip:"card"}},c={render:t=>e.createElement(o,null,e.createElement(r,{style:a.hint},"Compact preset."),e.createElement(s,{...t})),args:{...n,tooltip:"compact"}},p={render:t=>e.createElement(o,null,e.createElement(r,{style:a.hint},"KPI preset."),e.createElement(s,{...t})),args:{...n,tooltip:"kpi"}},m={render:t=>e.createElement(o,null,e.createElement(r,{style:a.hint},"Striped preset."),e.createElement(s,{...t})),args:{...n,tooltip:"striped"}},d={render:t=>e.createElement(o,null,e.createElement(r,{style:a.hint},"renderTooltip wins over the compact preset."),e.createElement(s,{...t})),args:{...n,tooltip:"compact",renderTooltip:({axisValue:t})=>e.createElement(o,{style:{padding:12,borderRadius:8,backgroundColor:"#ffedd5",borderWidth:2,borderColor:"#ea580c"}},e.createElement(r,{style:{fontWeight:"700",color:"#9a3412"}},"Custom"),e.createElement(r,{style:{marginTop:4,color:"#431407"}},String(t)))}},u={render:t=>e.createElement(o,null,e.createElement(r,{style:a.hint},"None: tooltip overlay hidden."),e.createElement(s,{...t})),args:{...n,tooltip:"none"}};var g,h,C,T,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Default tooltip preset is card (omit renderTooltip).</Text>
      <ColumnChart {...args} />
    </View>,
  args: {
    ...baseArgs
  }
}`,...(C=(h=i.parameters)==null?void 0:h.docs)==null?void 0:C.source},description:{story:"Default built-in axis tooltip (tooltip defaults to card).",...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.description}}};var E,x,f;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Explicit card preset (same as default).</Text>
      <ColumnChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'card'
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var w,V,b;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <ColumnChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact'
  }
}`,...(b=(V=c.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var S,A,v;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <ColumnChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'kpi'
  }
}`,...(v=(A=p.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var D,_,P;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <ColumnChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'striped'
  }
}`,...(P=(_=m.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var R,k,I;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>renderTooltip wins over the compact preset.</Text>
      <ColumnChart {...args} />
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
}`,...(I=(k=d.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var K,L,N;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <ColumnChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'none'
  }
}`,...(N=(L=u.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const ae=["Default","Card","Compact","Kpi","Striped","CustomOverride","None"];export{l as Card,c as Compact,d as CustomOverride,i as Default,p as Kpi,u as None,m as Striped,ae as __namedExportsOrder,se as default};
