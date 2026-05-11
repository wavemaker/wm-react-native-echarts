import{m as I}from"./meta-2S4oTlPh.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-MOBmXkGr.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./axis-tooltip-presets-_sGM-lSD.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./common-fSim-PaJ.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./install-j5bgd6PW.js";import"./dataSample-LQN_tCZn.js";import"./labelHelper-C-GbgMxG.js";import"./sectorHelper-BbU6gYt3.js";const X={...I,title:"Charts/Bar/Colors"},i=[40,82,91,74,120,95],r=["#F2A65A","#6F8F72","#132440"],e={args:{data:i}},o={args:{data:i,colors:r}},s={args:{data:[{name:"Series A",data:[40,82,91,74,90,88]},{name:"Series B",data:[20,62,71,54,70,68]},{name:"Series C",data:[30,42,51,64,50,58]}],colors:r,showLegend:!0}},a={args:{data:i,theme:{series:[{color:r[0]}],axis:{x:{tickLabelColor:r[2],lineColor:r[1]},y:{tickLabelColor:r[2],lineColor:r[1]}}}}},t={args:{data:i,activeIndex:2,activeColor:"#FDDA0D"}};var n,c,l,m,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"Default theme colors (single series).",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var d,u,C,g,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data,
    colors
  }
}`,...(C=(u=o.parameters)==null?void 0:u.docs)==null?void 0:C.source},description:{story:"Custom series color via colors prop.",...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var v,S,x,A,D;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'Series A',
      data: [40, 82, 91, 74, 90, 88]
    }, {
      name: 'Series B',
      data: [20, 62, 71, 54, 70, 68]
    }, {
      name: 'Series C',
      data: [30, 42, 51, 64, 50, 58]
    }],
    colors,
    showLegend: true
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source},description:{story:"Multiple custom colors for multiple series.",...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var b,y,f,L,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    data,
    theme: {
      series: [{
        color: colors[0]
      }],
      axis: {
        x: {
          tickLabelColor: colors[2],
          lineColor: colors[1]
        },
        y: {
          tickLabelColor: colors[2],
          lineColor: colors[1]
        }
      }
    } as Partial<ChartTheme>
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"Theme override: axis label and line colors.",...(F=(L=a.parameters)==null?void 0:L.docs)==null?void 0:F.description}}};var k,T,_,w,B;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data,
    activeIndex: 2,
    activeColor: '#FDDA0D'
  }
}`,...(_=(T=t.parameters)==null?void 0:T.docs)==null?void 0:_.source},description:{story:"Active bar color: highlight one bar with activeIndex and custom activeColor.",...(B=(w=t.parameters)==null?void 0:w.docs)==null?void 0:B.description}}};const Y=["Default","CustomColor","MultipleSeriesColors","ThemeOverride","ActiveColor"];export{t as ActiveColor,o as CustomColor,e as Default,s as MultipleSeriesColors,a as ThemeOverride,Y as __namedExportsOrder,X as default};
