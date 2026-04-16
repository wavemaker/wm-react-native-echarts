import{m as T}from"./meta-CJUv6gyd.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-elHyl0oQ.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./cartesian-C25Uk8mH.js";const H={...T,title:"Charts/Bubble/Colors"},t=[[10,20,30],[15,25,15],[20,15,45],[25,30,25],[30,22,35]],r=["#F2A65A","#6F8F72","#132440"],e={args:{data:t}},o={args:{data:t,colors:r}},s={args:{data:[{name:"Series A",data:[[10,20,30],[15,25,15],[20,15,45]]},{name:"Series B",data:[[12,18,25],[18,22,35],[22,28,20]]},{name:"Series C",data:[[14,24,28],[20,16,38],[26,30,22]]}],colors:r,showLegend:!0}},a={args:{data:t,theme:{series:[{color:r[0]}],axis:{x:{tickLabelColor:r[2],lineColor:r[1]},y:{tickLabelColor:r[2],lineColor:r[1]}}}}};var n,i,c,l,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    data
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"Default theme colors (single series).",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var p,d,u,C,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data,
    colors
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:"Custom series color via colors prop.",...(g=(C=o.parameters)==null?void 0:C.docs)==null?void 0:g.description}}};var S,h,b,x,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'Series A',
      data: [[10, 20, 30], [15, 25, 15], [20, 15, 45]]
    }, {
      name: 'Series B',
      data: [[12, 18, 25], [18, 22, 35], [22, 28, 20]]
    }, {
      name: 'Series C',
      data: [[14, 24, 28], [20, 16, 38], [26, 30, 22]]
    }],
    colors,
    showLegend: true
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source},description:{story:"Multiple custom colors for multiple series.",...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var y,L,k,v,A;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(k=(L=a.parameters)==null?void 0:L.docs)==null?void 0:k.source},description:{story:"Theme override: axis label and line colors.",...(A=(v=a.parameters)==null?void 0:v.docs)==null?void 0:A.description}}};const I=["Default","CustomColor","MultipleSeriesColors","ThemeOverride"];export{o as CustomColor,e as Default,s as MultipleSeriesColors,a as ThemeOverride,I as __namedExportsOrder,H as default};
