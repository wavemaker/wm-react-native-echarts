import{m as P,B as n}from"./meta-DUxyrNYG.js";import{R as e}from"./iframe-7fGkfOWr.js";import{V as s,T as r,s as R}from"./install-NEgcrzy7.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./use-scatter-item-tooltip-DO9_ZKBe.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./common-fSim-PaJ.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const X={...P,title:"Charts/Bubble/Tooltip"},z=[[2,12,20],[5,18,35],[8,9,15],[11,22,40],[14,16,28]],a=R.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8}}),o={width:"100%",height:300,data:z,showLegend:!1},i={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"Default tooltip preset is card (includes size when present)."),e.createElement(n,{...t})),args:{...o}},l={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"Compact preset."),e.createElement(n,{...t})),args:{...o,tooltip:"compact"}},p={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"KPI preset."),e.createElement(n,{...t})),args:{...o,tooltip:"kpi"}},c={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"Striped preset."),e.createElement(n,{...t})),args:{...o,tooltip:"striped"}},m={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"renderTooltip wins over the compact preset."),e.createElement(n,{...t})),args:{...o,tooltip:"compact",renderTooltip:({seriesName:t,x:D,y:K})=>e.createElement(s,{style:{padding:10,borderRadius:8,backgroundColor:"#e0e7ff"}},e.createElement(r,{style:{fontWeight:"700"}},t),e.createElement(r,null,D,", ",K))}},d={render:t=>e.createElement(s,null,e.createElement(r,{style:a.hint},"None: tooltip overlay hidden."),e.createElement(n,{...t})),args:{...o,tooltip:"none"}};var g,u,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Default tooltip preset is card (includes size when present).</Text>
      <BubbleChart {...args} />
    </View>,
  args: {
    ...baseArgs
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,y,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <BubbleChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact'
  }
}`,...(T=(y=l.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var E,w,x;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <BubbleChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'kpi'
  }
}`,...(x=(w=p.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var f,C,V;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <BubbleChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'striped'
  }
}`,...(V=(C=c.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var S,B,A;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>renderTooltip wins over the compact preset.</Text>
      <BubbleChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'compact',
    renderTooltip: ({
      seriesName,
      x,
      y
    }: ScatterItemTooltipParams) => <View style={{
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#e0e7ff'
    }}>
        <Text style={{
        fontWeight: '700'
      }}>{seriesName}</Text>
        <Text>
          {x}, {y}
        </Text>
      </View>
  }
}`,...(A=(B=m.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var v,N,k;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <BubbleChart {...args} />
    </View>,
  args: {
    ...baseArgs,
    tooltip: 'none'
  }
}`,...(k=(N=d.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const Y=["Default","Compact","Kpi","Striped","CustomOverride","None"];export{l as Compact,m as CustomOverride,i as Default,p as Kpi,d as None,c as Striped,Y as __namedExportsOrder,X as default};
