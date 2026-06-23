import{h as K,H as R,m as N}from"./meta-DcRnfA1u.js";import{R as r}from"./iframe-DQBbESXd.js";import{V as _,T as m,s as W}from"./install-D_wEXfzl.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./common-WjgByzXx.js";import"./install-Bq1Dc6dC.js";import"./Axis-CD6BD_BD.js";import"./install-CaCb0Y84.js";import"./CoordinateSystem-C8P-Cleg.js";import"./createSeriesData-VE2uRjI9.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const Z={...N,title:"Charts/Heatmap/Tooltip",component:R},z=W.create({hint:{fontSize:13,color:"rgba(0,0,0,0.55)",marginBottom:8}}),e={...K},t={render:i=>r.createElement(_,null,r.createElement(m,{style:z.hint},"Default tooltip preset is card."),r.createElement(R,{...i})),args:{...e}},a={args:{...e,tooltip:"card"}},o={args:{...e,tooltip:"compact"}},s={args:{...e,tooltip:"kpi"}},n={args:{...e,tooltip:"striped"}},p={args:{...e,tooltip:"compact",renderTooltip:({xLabel:i,yLabel:O,value:B})=>r.createElement(_,{style:{padding:10,borderRadius:8,backgroundColor:"#fef3c7"}},r.createElement(m,{style:{fontWeight:"700"}},O),r.createElement(m,null,i,": ",String(B)))}},c={args:{...e,tooltip:"none"}};var l,d,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <HeatmapChart {...args} />
    </View>,
  args: {
    ...baseArgs
  }
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,b,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    tooltip: 'card'
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,S,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    tooltip: 'compact'
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var x,y,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    tooltip: 'kpi'
  }
}`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var A,E,V;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    tooltip: 'striped'
  }
}`,...(V=(E=n.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var w,H,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    tooltip: 'compact',
    renderTooltip: ({
      xLabel,
      yLabel,
      value
    }: HeatmapItemTooltipParams) => <View style={{
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#fef3c7'
    }}>
        <Text style={{
        fontWeight: '700'
      }}>{yLabel}</Text>
        <Text>
          {xLabel}: {String(value)}
        </Text>
      </View>
  }
}`,...(k=(H=p.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};var v,D,L;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    tooltip: 'none'
  }
}`,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const $=["Default","Card","Compact","Kpi","Striped","CustomOverride","None"];export{a as Card,o as Compact,p as CustomOverride,t as Default,s as Kpi,c as None,n as Striped,$ as __namedExportsOrder,Z as default};
