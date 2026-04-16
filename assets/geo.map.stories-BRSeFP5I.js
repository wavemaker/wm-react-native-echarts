import{U as u,m as d}from"./meta-dLesob-y.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./common-BBO5jU0Y.js";import"./createSeriesDataSimply-BSDWH4oQ.js";const c=[{name:"Alabama",republican:9,democrat:0},{name:"Alaska",republican:3,democrat:0},{name:"Arizona",republican:0,democrat:11},{name:"Arkansas",republican:6,democrat:0},{name:"California",republican:0,democrat:54},{name:"Colorado",republican:0,democrat:10},{name:"Connecticut",republican:0,democrat:7},{name:"Delaware",republican:0,democrat:3},{name:"District of Columbia",republican:0,democrat:3},{name:"Florida",republican:30,democrat:0},{name:"Georgia",republican:0,democrat:16},{name:"Hawaii",republican:0,democrat:4},{name:"Idaho",republican:4,democrat:0},{name:"Illinois",republican:0,democrat:19},{name:"Indiana",republican:11,democrat:0},{name:"Iowa",republican:6,democrat:0},{name:"Kansas",republican:6,democrat:0},{name:"Kentucky",republican:8,democrat:0},{name:"Louisiana",republican:8,democrat:0},{name:"Maine",republican:1,democrat:3},{name:"Maryland",republican:0,democrat:10},{name:"Massachusetts",republican:0,democrat:11},{name:"Michigan",republican:0,democrat:15},{name:"Minnesota",republican:0,democrat:10},{name:"Mississippi",republican:6,democrat:0},{name:"Missouri",republican:10,democrat:0},{name:"Montana",republican:4,democrat:0},{name:"Nebraska",republican:4,democrat:1},{name:"Nevada",republican:0,democrat:6},{name:"New Hampshire",republican:0,democrat:4},{name:"New Jersey",republican:0,democrat:14},{name:"New Mexico",republican:0,democrat:5},{name:"New York",republican:0,democrat:28},{name:"North Carolina",republican:16,democrat:0},{name:"North Dakota",republican:3,democrat:0},{name:"Ohio",republican:17,democrat:0},{name:"Oklahoma",republican:7,democrat:0},{name:"Oregon",republican:0,democrat:8},{name:"Pennsylvania",republican:0,democrat:19},{name:"Rhode Island",republican:0,democrat:4},{name:"South Carolina",republican:9,democrat:0},{name:"South Dakota",republican:3,democrat:0},{name:"Tennessee",republican:11,democrat:0},{name:"Texas",republican:40,democrat:0},{name:"Utah",republican:6,democrat:0},{name:"Vermont",republican:0,democrat:3},{name:"Virginia",republican:0,democrat:13},{name:"Washington",republican:0,democrat:12},{name:"West Virginia",republican:5,democrat:0},{name:"Wisconsin",republican:0,democrat:10},{name:"Wyoming",republican:3,democrat:0},{name:"Puerto Rico",republican:0,democrat:0}],l="#93c5fd",p="#fca5a5",b=c.map(a=>({name:a.name,value:a.republican,itemStyle:{areaColor:a.republican===0?l:p}})),f={...d,title:"Charts/Geo/Map",component:u},e={args:{data:b,width:500,height:350,visualMapMin:0,visualMapMax:54,visualMapMode:"piecewise",piecewisePieces:[{min:0,max:.5,label:"Democrat",color:l},{min:.5,max:55,label:"Republican",color:p}],showLegend:!0,showHighlighter:!0,tooltipFormatter:a=>{const n=c.find(s=>s.name===a.name);return n?`${a.name}
Republican: ${n.republican} EV | Democrat: ${n.democrat} EV`:a.name}}};var r,i,t,m,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    data: presidentialChartData,
    width: 500,
    height: 350,
    visualMapMin: 0,
    visualMapMax: 54,
    visualMapMode: 'piecewise',
    piecewisePieces: [{
      min: 0,
      max: 0.5,
      label: 'Democrat',
      color: LIGHT_BLUE
    }, {
      min: 0.5,
      max: 55,
      label: 'Republican',
      color: LIGHT_RED
    }],
    showLegend: true,
    showHighlighter: true,
    tooltipFormatter: (params: {
      name: string;
    }) => {
      const row = presidentialResultsByState.find((s: {
        name: string;
      }) => s.name === params.name) as {
        name: string;
        republican: number;
        democrat: number;
      } | undefined;
      if (!row) return params.name;
      return \`\${params.name}\\nRepublican: \${row.republican} EV | Democrat: \${row.democrat} EV\`;
    }
  }
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source},description:{story:"Last presidential election: electoral votes by state. Light blue = Democrat, light red = Republican. Legend on right (no overlay).",...(o=(m=e.parameters)==null?void 0:m.docs)==null?void 0:o.description}}};const v=["PresidentialResults"];export{e as PresidentialResults,v as __namedExportsOrder,f as default};
