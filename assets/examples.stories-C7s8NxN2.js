import{R as e}from"./iframe-7fGkfOWr.js";import{V as l,T as p,s as K,h as j,C as h,D as F}from"./install-NEgcrzy7.js";import{A as z}from"./area-chart-D69Pifby.js";import{a as G}from"./area.args-DizI-4Mn.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-fh8zqSy2.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./dataSample-LQN_tCZn.js";const n=K.create({container:{padding:20,borderRadius:8},sourceContainer:{marginTop:16,padding:12,backgroundColor:"rgba(0,0,0,0.04)",borderRadius:6,borderWidth:1,borderColor:"rgba(0,0,0,0.08)"},sourceLabel:{fontSize:11,fontWeight:"600",marginBottom:6,color:"rgba(0,0,0,0.5)",textTransform:"uppercase",letterSpacing:.5},sourceCode:{fontFamily:"ui-monospace, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),I={title:"Theming/Examples",component:z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...G},decorators:[(m,c)=>{var d;return e.createElement(l,{style:n.container},e.createElement(m,null),((d=c.parameters)==null?void 0:d.source)!=null&&e.createElement(l,{style:n.sourceContainer},e.createElement(p,{style:n.sourceLabel},"React Native"),e.createElement(p,{style:n.sourceCode},String(c.parameters.source))))}]},me={...I,title:"Theming/Examples"},i=[186,305,237,73,209,214],r={args:{data:i}},a={args:{data:i,colors:["#f97316","#14b8a6"]}},t={args:{data:i,theme:{axis:{x:{tickLabelColor:"#0f172a",lineColor:"#64748b"},y:{tickLabelColor:"#0f172a",lineColor:"#64748b"}},series:[{color:"#6366f1",lineWidth:3}]}}},o={render:m=>e.createElement(l,{style:{padding:16,backgroundColor:"#111"}},e.createElement(h,{theme:F},e.createElement(h,{theme:{axis:{x:{lineColor:"red"},y:{lineColor:"yellow"}}}},e.createElement(z,{...m})))),args:{data:i}},s={args:{data:[{name:"A",data:[30,55,40,50,45,38]},{name:"B",data:[45,40,60,48,52,55]}],showLegend:!0,theme:j({series:[{color:"#db2777",lineWidth:2},{color:"#0891b2",lineWidth:2}]})}};var u,g,C,b,T;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    data: sampleData
  }
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source},description:{story:"Built-in **LIGHT_THEME** when no `ChartThemeProvider` wraps the chart (same defaults the library ships with).",...(T=(b=r.parameters)==null?void 0:b.docs)==null?void 0:T.description}}};var y,f,x,E,P;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    colors: ['#f97316', '#14b8a6']
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:"**`colors={string[]}`** overrides the series palette for this chart only (values cycle per series).",...(P=(E=a.parameters)==null?void 0:E.docs)==null?void 0:P.description}}};var v,w,D,L,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    theme: {
      axis: {
        x: {
          tickLabelColor: '#0f172a',
          lineColor: '#64748b'
        },
        y: {
          tickLabelColor: '#0f172a',
          lineColor: '#64748b'
        }
      },
      series: [{
        color: '#6366f1',
        lineWidth: 3
      }]
    } as Partial<ChartTheme>
  }
}`,...(D=(w=t.parameters)==null?void 0:w.docs)==null?void 0:D.source},description:{story:"**`theme={partial}`** merges axis, tooltip, series, etc. for this instance over context or defaults.",...(S=(L=t.parameters)==null?void 0:L.docs)==null?void 0:S.description}}};var A,W,k,R,_;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <View style={{
    padding: 16,
    backgroundColor: '#111'
  }}>
      <ChartThemeProvider theme={DARK_THEME}>
        <ChartThemeProvider theme={{
        axis: {
          x: {
            lineColor: 'red'
          },
          y: {
            lineColor: 'yellow'
          }
        }
      } as Partial<ChartTheme>}>
          <AreaChart {...args} />
        </ChartThemeProvider>
      </ChartThemeProvider>
    </View>,
  args: {
    data: sampleData
  }
}`,...(k=(W=o.parameters)==null?void 0:W.docs)==null?void 0:k.source},description:{story:"Nested **`ChartThemeProvider`**s merge: inner partials override the outer theme.",...(_=(R=o.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var B,H,N,V,M;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'A',
      data: [30, 55, 40, 50, 45, 38]
    }, {
      name: 'B',
      data: [45, 40, 60, 48, 52, 55]
    }],
    showLegend: true,
    theme: extendChartTheme({
      series: [{
        color: '#db2777',
        lineWidth: 2
      }, {
        color: '#0891b2',
        lineWidth: 2
      }]
    })
  }
}`,...(N=(H=s.parameters)==null?void 0:H.docs)==null?void 0:N.source},description:{story:"**`extendChartTheme(...partials)`** builds a full theme object; pass it via **`theme`** on the chart.",...(M=(V=s.parameters)==null?void 0:V.docs)==null?void 0:M.description}}};const le=["Default","PerChartColors","PerChartTheme","NestedProviders","ExtendedThemeProp"];export{r as Default,s as ExtendedThemeProp,o as NestedProviders,a as PerChartColors,t as PerChartTheme,le as __namedExportsOrder,me as default};
