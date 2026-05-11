import{U as b,m as h}from"./meta-Blwr_v7z.js";import{R as e}from"./iframe-7fGkfOWr.js";import"./use-axis-tooltip-Cl80mEW_.js";import{V as g,s as f,T as r}from"./install-NEgcrzy7.js";import"./common-fSim-PaJ.js";import"./createSeriesDataSimply-DaXRNxVR.js";import"./preload-helper-DkhvmF2b.js";import"./jsx-runtime-BjG_zV1W.js";const d=[{name:"Alabama",republican:9,democrat:0},{name:"Alaska",republican:3,democrat:0},{name:"Arizona",republican:0,democrat:11},{name:"Arkansas",republican:6,democrat:0},{name:"California",republican:0,democrat:54},{name:"Colorado",republican:0,democrat:10},{name:"Connecticut",republican:0,democrat:7},{name:"Delaware",republican:0,democrat:3},{name:"District of Columbia",republican:0,democrat:3},{name:"Florida",republican:30,democrat:0},{name:"Georgia",republican:0,democrat:16},{name:"Hawaii",republican:0,democrat:4},{name:"Idaho",republican:4,democrat:0},{name:"Illinois",republican:0,democrat:19},{name:"Indiana",republican:11,democrat:0},{name:"Iowa",republican:6,democrat:0},{name:"Kansas",republican:6,democrat:0},{name:"Kentucky",republican:8,democrat:0},{name:"Louisiana",republican:8,democrat:0},{name:"Maine",republican:1,democrat:3},{name:"Maryland",republican:0,democrat:10},{name:"Massachusetts",republican:0,democrat:11},{name:"Michigan",republican:0,democrat:15},{name:"Minnesota",republican:0,democrat:10},{name:"Mississippi",republican:6,democrat:0},{name:"Missouri",republican:10,democrat:0},{name:"Montana",republican:4,democrat:0},{name:"Nebraska",republican:4,democrat:1},{name:"Nevada",republican:0,democrat:6},{name:"New Hampshire",republican:0,democrat:4},{name:"New Jersey",republican:0,democrat:14},{name:"New Mexico",republican:0,democrat:5},{name:"New York",republican:0,democrat:28},{name:"North Carolina",republican:16,democrat:0},{name:"North Dakota",republican:3,democrat:0},{name:"Ohio",republican:17,democrat:0},{name:"Oklahoma",republican:7,democrat:0},{name:"Oregon",republican:0,democrat:8},{name:"Pennsylvania",republican:0,democrat:19},{name:"Rhode Island",republican:0,democrat:4},{name:"South Carolina",republican:9,democrat:0},{name:"South Dakota",republican:3,democrat:0},{name:"Tennessee",republican:11,democrat:0},{name:"Texas",republican:40,democrat:0},{name:"Utah",republican:6,democrat:0},{name:"Vermont",republican:0,democrat:3},{name:"Virginia",republican:0,democrat:13},{name:"Washington",republican:0,democrat:12},{name:"West Virginia",republican:5,democrat:0},{name:"Wisconsin",republican:0,democrat:10},{name:"Wyoming",republican:3,democrat:0},{name:"Puerto Rico",republican:0,democrat:0}],s="#93c5fd",p="#fca5a5",w=d.map(a=>({name:a.name,value:a.republican,itemStyle:{areaColor:a.republican===0?s:p}})),D={...h,title:"Charts/Geo/Map",component:b},n={args:{data:w,width:500,height:350,visualMapMin:0,visualMapMax:54,visualMapMode:"piecewise",piecewisePieces:[{min:0,max:.5,label:"Democrat",color:s},{min:.5,max:55,label:"Republican",color:p}],showLegend:!0,showHighlighter:!0,renderTooltip:({name:a})=>{const t=d.find(u=>u.name===a);return e.createElement(g,{style:{paddingHorizontal:12,paddingVertical:10,borderRadius:10,backgroundColor:"#fff",borderWidth:f.hairlineWidth,borderColor:"rgba(0,0,0,0.12)",minWidth:160}},e.createElement(r,{style:{fontSize:13,fontWeight:"700",color:"#0f172a",marginBottom:6}},a),t!=null?e.createElement(e.Fragment,null,e.createElement(r,{style:{fontSize:12,color:"#334155"}},"Republican: ",t.republican," EV"),e.createElement(r,{style:{fontSize:12,color:"#334155",marginTop:2}},"Democrat: ",t.democrat," EV")):e.createElement(r,{style:{fontSize:12,color:"#64748b"}},"No detail row"))}}};var o,i,c,m,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
    renderTooltip: ({
      name
    }: GeoItemTooltipParams) => {
      const row = presidentialResultsByState.find((s: {
        name: string;
      }) => s.name === name) as {
        name: string;
        republican: number;
        democrat: number;
      } | undefined;
      return <View style={{
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(0,0,0,0.12)',
        minWidth: 160
      }}>
          <Text style={{
          fontSize: 13,
          fontWeight: '700',
          color: '#0f172a',
          marginBottom: 6
        }}>{name}</Text>
          {row != null ? <>
              <Text style={{
            fontSize: 12,
            color: '#334155'
          }}>Republican: {row.republican} EV</Text>
              <Text style={{
            fontSize: 12,
            color: '#334155',
            marginTop: 2
          }}>Democrat: {row.democrat} EV</Text>
            </> : <Text style={{
          fontSize: 12,
          color: '#64748b'
        }}>No detail row</Text>}
        </View>;
    }
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"Last presidential election: electoral votes by state. Light blue = Democrat, light red = Republican. Legend on right (no overlay).",...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.description}}};const V=["PresidentialResults"];export{n as PresidentialResults,V as __namedExportsOrder,D as default};
