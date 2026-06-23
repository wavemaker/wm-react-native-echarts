import{m as b}from"./meta-DCwOsjf7.js";import"./iframe-DQBbESXd.js";import"./preload-helper-DkhvmF2b.js";import"./install-D_wEXfzl.js";import"./jsx-runtime-BjG_zV1W.js";import"./use-axis-tooltip-I7UAJfpW.js";import"./echarts-legend-layout-B14L7phv.js";import"./common-WjgByzXx.js";import"./install-JQrd69Od.js";import"./legend-position-CLb_FM1L.js";import"./sectorHelper-e2TAJmFq.js";import"./createSeriesDataSimply-BM5eq_8k.js";const P={...b,title:"Charts/Pie/Concentric"},L=[{name:"Q1–Q2",radius:["0%","35%"],data:[{name:"Desktop",value:275},{name:"Mobile",value:200},{name:"Tablet",value:187},{name:"Other",value:90}]},{name:"Q3–Q4",radius:["45%","60%"],data:[{name:"Desktop",value:320},{name:"Mobile",value:250},{name:"Tablet",value:200},{name:"Other",value:130}]}],e={args:{data:L,showLegend:!0}},a={args:{data:[{name:"H1",radius:["0%","28%"],data:[{name:"A",value:100},{name:"B",value:80},{name:"C",value:60}]},{name:"H2",radius:["35%","55%"],data:[{name:"A",value:120},{name:"B",value:90},{name:"C",value:70}]},{name:"H3",radius:["62%","75%"],data:[{name:"A",value:140},{name:"B",value:100},{name:"C",value:80}]}],showLegend:!0}},n={args:{data:L,showLegend:!0,labelPosition:"inside",showLabelLine:!1}};var r,s,t,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    data: concentricData,
    showLegend: true
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source},description:{story:"Two concentric rings: inner Q1–Q2, outer Q3–Q4.",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.description}}};var m,c,d,u,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    data: [{
      name: 'H1',
      radius: ['0%', '28%'],
      data: [{
        name: 'A',
        value: 100
      }, {
        name: 'B',
        value: 80
      }, {
        name: 'C',
        value: 60
      }]
    }, {
      name: 'H2',
      radius: ['35%', '55%'],
      data: [{
        name: 'A',
        value: 120
      }, {
        name: 'B',
        value: 90
      }, {
        name: 'C',
        value: 70
      }]
    }, {
      name: 'H3',
      radius: ['62%', '75%'],
      data: [{
        name: 'A',
        value: 140
      }, {
        name: 'B',
        value: 100
      }, {
        name: 'C',
        value: 80
      }]
    }],
    showLegend: true
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:"Three concentric rings.",...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.description}}};var p,v,g,h,w;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data: concentricData,
    showLegend: true,
    labelPosition: 'inside',
    showLabelLine: false
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source},description:{story:"Concentric with labels inside.",...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.description}}};const S=["TwoRings","ThreeRings","LabelsInside"];export{n as LabelsInside,a as ThreeRings,e as TwoRings,S as __namedExportsOrder,P as default};
