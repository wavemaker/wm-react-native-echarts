import{A as o}from"./area-chart-DrjqnKLG.js";import{R as e}from"./iframe-DQBbESXd.js";import{m as J}from"./meta-GyzeNtZ1.js";import{V as s,T as r,s as Q}from"./install-D_wEXfzl.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./axis-tooltip-presets-CGVD2u9r.js";import"./axis-B8VaOuT_.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-B-FBt8Sx.js";import"./createSeriesData-VE2uRjI9.js";import"./points-CpfmDJP4.js";import"./dataSample-C3ms-4cx.js";import"./CoordinateSystem-C8P-Cleg.js";import"./preload-helper-DkhvmF2b.js";import"./area.args-CMRTFbmo.js";import"./cartesian-C7nMcwZE.js";import"./jsx-runtime-BjG_zV1W.js";const xe={...J,title:"Charts/Area/Tooltip"},Y=[186,305,237,73,209,214],Z=[{name:"Revenue",data:Y},{name:"Cost",data:[120,200,150,90,180,160]}],a=Q.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8}}),n={width:"100%",height:300,data:Z,showLegend:!0,type:"smooth",symbol:"circle"},i={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"Default tooltip preset is card (omit renderTooltip)."),e.createElement(o,{...t})),args:{...n}},p={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"Explicit tooltip preset: card (same as default)."),e.createElement(o,{...t})),args:{...n,tooltip:"card"}},c={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"Compact preset."),e.createElement(o,{...t})),args:{...n,tooltip:"compact"}},l={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"KPI preset."),e.createElement(o,{...t})),args:{...n,tooltip:"kpi"}},d={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"Striped preset."),e.createElement(o,{...t})),args:{...n,tooltip:"striped"}},m={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"renderTooltip is set: orange custom body wins over the compact preset."),e.createElement(o,{...t})),args:{...n,tooltip:"compact",renderTooltip:({axisValue:t})=>e.createElement(s,{style:{padding:12,borderRadius:8,backgroundColor:"#ffedd5",borderWidth:2,borderColor:"#ea580c"}},e.createElement(r,{style:{fontWeight:"700",color:"#9a3412"}},"Custom"),e.createElement(r,{style:{marginTop:4,color:"#431407"}},String(t)))}},g={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"None: tooltip overlay hidden."),e.createElement(o,{...t})),args:{...n,tooltip:"none"}};var u,y,h,T,E;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Default tooltip preset is card (omit renderTooltip).</Text>
      <AreaChart {...args} />
    </View>,
  args: {
    ...baseArgs
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:"Default built-in axis tooltip (`tooltip` defaults to `card`).",...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.description}}};var x,C,A,b,f;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Explicit tooltip preset: card (same as default).</Text>
      <AreaChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'card'
  }
}`,...(A=(C=p.parameters)==null?void 0:C.docs)==null?void 0:A.source},description:{story:"Explicit card preset (same as default).",...(f=(b=p.parameters)==null?void 0:b.docs)==null?void 0:f.description}}};var w,V,S,v,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <AreaChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact'
  }
}`,...(S=(V=c.parameters)==null?void 0:V.docs)==null?void 0:S.source},description:{story:"Compact inline preset.",...(D=(v=c.parameters)==null?void 0:v.docs)==null?void 0:D.description}}};var P,_,I,K,N;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <AreaChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'kpi'
  }
}`,...(I=(_=l.parameters)==null?void 0:_.docs)==null?void 0:I.source},description:{story:"KPI-style preset.",...(N=(K=l.parameters)==null?void 0:K.docs)==null?void 0:N.description}}};var R,k,L,W,M;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <AreaChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'striped'
  }
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source},description:{story:"Striped table preset.",...(M=(W=d.parameters)==null?void 0:W.docs)==null?void 0:M.description}}};var O,z,B,U,X;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>
        renderTooltip is set: orange custom body wins over the compact preset.
      </Text>
      <AreaChart {...args} />
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
}`,...(B=(z=m.parameters)==null?void 0:z.docs)==null?void 0:B.source},description:{story:"Custom `renderTooltip` overrides the `tooltip` preset body.",...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.description}}};var j,q,F,G,H;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <AreaChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'none'
  }
}`,...(F=(q=g.parameters)==null?void 0:q.docs)==null?void 0:F.source},description:{story:"No tooltip overlay.",...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};const Ce=["Default","Card","Compact","Kpi","Striped","CustomOverride","None"];export{p as Card,c as Compact,m as CustomOverride,i as Default,l as Kpi,g as None,d as Striped,Ce as __namedExportsOrder,xe as default};
