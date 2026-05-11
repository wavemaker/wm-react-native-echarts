import{m as T}from"./meta-DpN4dPva.js";import"./iframe-7fGkfOWr.js";import"./preload-helper-DkhvmF2b.js";import"./install-NEgcrzy7.js";import"./jsx-runtime-BjG_zV1W.js";import"./cartesian-CLDRzb7E.js";import"./echarts-legend-layout-Do6GLXQv.js";import"./use-axis-tooltip-Cl80mEW_.js";import"./use-scatter-item-tooltip-DO9_ZKBe.js";import"./labelHelper-C-GbgMxG.js";import"./points-CXtM_P6B.js";import"./install-Bnl78vYZ.js";import"./Axis-0FyMA-GH.js";import"./common-fSim-PaJ.js";import"./install-fh8zqSy2.js";import"./dataSample-LQN_tCZn.js";const K={...T,title:"Charts/Scatter/Colors"},t=[[10,5],[0,8],[6,10],[2,12],[8,9],[12,6]],r=["#F2A65A","#6F8F72","#132440"],e={args:{data:t}},o={args:{data:t,colors:r}},s={args:{data:[{name:"Series A",data:[[10,5],[0,8],[6,10],[2,12]]},{name:"Series B",data:[[5,10],[8,0],[10,6],[12,2]]},{name:"Series C",data:[[6,12],[4,4],[8,8],[14,2]]}],colors:r,showLegend:!0}},a={args:{data:t,theme:{series:[{color:r[0]}],axis:{x:{tickLabelColor:r[2],lineColor:r[1]},y:{tickLabelColor:r[2],lineColor:r[1]}}}}};var n,i,c,l,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"Default theme colors (single series).",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var p,d,u,C,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data,
    colors
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:"Custom series color via colors prop.",...(g=(C=o.parameters)==null?void 0:C.docs)==null?void 0:g.description}}};var S,h,x,f,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'Series A',
      data: [[10, 5], [0, 8], [6, 10], [2, 12]]
    }, {
      name: 'Series B',
      data: [[5, 10], [8, 0], [10, 6], [12, 2]]
    }, {
      name: 'Series C',
      data: [[6, 12], [4, 4], [8, 8], [14, 2]]
    }],
    colors,
    showLegend: true
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Multiple custom colors for multiple series.",...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};var L,b,k,v,A;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source},description:{story:"Theme override: axis label and line colors.",...(A=(v=a.parameters)==null?void 0:v.docs)==null?void 0:A.description}}};const N=["Default","CustomColor","MultipleSeriesColors","ThemeOverride"];export{o as CustomColor,e as Default,s as MultipleSeriesColors,a as ThemeOverride,N as __namedExportsOrder,K as default};
