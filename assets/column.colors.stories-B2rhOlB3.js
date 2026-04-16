import{m as M}from"./meta-DQP0OanO.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./column-chart-CwF2pesq.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-9dos4XC1.js";import"./dataSample-YMfQ_6XR.js";import"./labelHelper-CzHPQigS.js";import"./sectorHelper-DjU9oWJ9.js";import"./cartesian-C25Uk8mH.js";const W={...M,title:"Charts/Column/Colors"},n=[40,82,91,74,120,95],r=["#F2A65A","#6F8F72","#132440"],e={args:{data:n}},o={args:{data:n,colors:r}},s={args:{data:[{name:"Series A",data:[40,82,91,74,90,88]},{name:"Series B",data:[20,62,71,54,70,68]},{name:"Series C",data:[30,42,51,64,50,58]}],colors:r,showLegend:!0}},a={args:{data:n,theme:{series:[{color:r[0]}],axis:{x:{tickLabelColor:r[2],lineColor:r[1]},y:{tickLabelColor:r[2],lineColor:r[1]}}}}},t={args:{data:n,activeIndex:2,activeColor:"#FDDA0D"}};var i,c,l,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source},description:{story:"Theme override: axis label and line colors.",...(F=(L=a.parameters)==null?void 0:L.docs)==null?void 0:F.description}}};var k,T,_,w,I;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data,
    activeIndex: 2,
    activeColor: '#FDDA0D'
  }
}`,...(_=(T=t.parameters)==null?void 0:T.docs)==null?void 0:_.source},description:{story:"Active bar color: highlight one bar with activeIndex and custom activeColor.",...(I=(w=t.parameters)==null?void 0:w.docs)==null?void 0:I.description}}};const X=["Default","CustomColor","MultipleSeriesColors","ThemeOverride","ActiveColor"];export{t as ActiveColor,o as CustomColor,e as Default,s as MultipleSeriesColors,a as ThemeOverride,X as __namedExportsOrder,W as default};
