import{r as y,R as p}from"./iframe-D855FiCl.js";import{w as Y,u as O,c as $,a as F,b as H,i as M,S as _,V as E,T as N,s as J}from"./install-BebJlzH2.js";import{i as K,c as V}from"./common-BBO5jU0Y.js";import{i as Q}from"./install-DfB1csNh.js";import{i as U}from"./install-DO9VZV3L.js";function Z(n){if(!Array.isArray(n)||n.length===0)return!1;const o=n[0];return"data"in o&&Array.isArray(o.data)&&"radius"in o&&Array.isArray(o.radius)}O([K,Q,$,U]);const B=({data:n,width:o=220,height:m=350,radius:w="75%",showLegend:C=!1,showLabel:k=!0,labelPosition:x="outside",showLabelLine:S=!0,showHighlighter:L=!0,tooltipFormatter:h,onSelect:T,...R})=>{const{theme:e}=H(R.theme,R.colors),v=y.useRef(null),A=y.useRef(T);A.current=T;const P=y.useMemo(()=>{if(!Array.isArray(n)||n.length===0)return{series:[]};const a=e.series.map(r=>r.color),l={color:e.legend.textColor,fontSize:e.legend.fontSize},t=(r,s,c)=>{const d=r.reduce((u,i)=>u+i.value,0),I=k?{show:!0,position:x,formatter:u=>{const i=d>0?(u.value/d*100).toFixed(1):"0";return`${u.name}
${i}%`},...l}:{show:!1};return{type:"pie",name:c,radius:(Array.isArray(s),s),data:r,label:I,labelLine:{show:k&&(x==="outside"?S:!1),lineStyle:{color:e.legend.textColor}},emphasis:L?{scale:!0,scaleSize:5,itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.2)"}}:{disabled:!0}}};if(Z(n)){const r=n;let s=0;const c=r.map(i=>{const q=i.data.map(g=>{var j;return{name:g.name,value:g.value,itemStyle:(j=g.itemStyle)!=null&&j.color?{color:g.itemStyle.color}:{color:a[s++%a.length]}}});return t(q,i.radius,i.name)}),d=C?Array.from(new Set(r.flatMap(i=>i.data.map(q=>q.name)))):void 0,u={tooltip:{trigger:"item",backgroundColor:e.tooltip.backgroundColor,borderColor:e.tooltip.borderColor,borderWidth:e.tooltip.borderWidth,borderRadius:e.tooltip.borderRadius,padding:e.tooltip.padding,textStyle:{color:e.tooltip.valueColor},formatter:h?i=>h({name:i.name,value:i.value,percent:i.percent}):void 0},series:c};return d!=null&&d.length&&(u.legend={orient:"horizontal",left:"center",bottom:0,data:d,textStyle:l,backgroundColor:e.legend.backgroundColor}),u}const f=n.map((r,s)=>{var c;return{name:r.name,value:r.value,itemStyle:(c=r.itemStyle)!=null&&c.color?{color:r.itemStyle.color}:{color:a[s%a.length]}}}),G=t(f,w),X={trigger:"item",backgroundColor:e.tooltip.backgroundColor,borderColor:e.tooltip.borderColor,borderWidth:e.tooltip.borderWidth,borderRadius:e.tooltip.borderRadius,padding:e.tooltip.padding,textStyle:{color:e.tooltip.valueColor},formatter:h?r=>h({name:r.name,value:r.value,percent:r.percent}):void 0},z=C?{orient:"horizontal",left:"center",bottom:0,data:f.map(r=>r.name),textStyle:l,backgroundColor:e.legend.backgroundColor}:void 0,D={tooltip:X,series:[G]};return z&&(D.legend=z),D},[n,w,C,k,x,S,L,h,e]);return y.useEffect(()=>{let a;if(v.current)try{a=M(v.current,"light",{width:o,height:m}),a.setOption(P);const l=t=>{const W=A.current;if(typeof W!="function"||t.componentType!=="series"||t.seriesType!=="pie"||typeof t.dataIndex!="number"||t.dataIndex<0||t.name==null)return;const f={seriesIndex:t.seriesIndex??0,dataIndex:t.dataIndex,name:String(t.name),value:Number(t.value??0),seriesName:t.seriesName,percent:t.percent};W(f)};a.on("click",l)}catch(l){console.warn("Pie chart initialization error:",l)}return()=>{if(a)try{a.dispose()}catch(l){console.warn("Pie chart disposal error:",l)}}},[P,o,m]),p.createElement(_,{ref:v,useRNGH:!0})},ee=Y(F(B),"data"),re=Object.assign(ee,{displayName:"PieChart"});B.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{width:{required:!1,tsType:{name:"number"},description:`Width of the chart in pixels.
@default 220`,defaultValue:{value:"220",computed:!1}},height:{required:!1,tsType:{name:"number"},description:`Height of the chart in pixels.
@default 350`,defaultValue:{value:"350",computed:!1}},theme:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  /** Configuration for chart axes (x, y, and radial) */
  axis: {
    /** X-axis styling configuration */
    x: AxisStyle;
    /** Y-axis styling configuration */
    y: AxisStyle;
    /** Radial axis styling configuration (for radar/polar charts) */
    r: AxisStyle;
  };
  /** Configuration for grid lines */
  grid: {
    /** X-axis grid line styling */
    x: GridLineStyle;
    /** Y-axis grid line styling */
    y: GridLineStyle;
    /** Radial grid line styling (for radar/polar charts) */
    r: GridLineStyle;
  };
  legend: LegendStyle;
  /** Configuration for tooltip appearance */
  tooltip: TooltipStyle;
  /** Array of series styles that cycle through for multiple data series */
  series: Series[];
}`,signature:{properties:[{key:"axis",value:{name:"signature",type:"object",raw:`{
  /** X-axis styling configuration */
  x: AxisStyle;
  /** Y-axis styling configuration */
  y: AxisStyle;
  /** Radial axis styling configuration (for radar/polar charts) */
  r: AxisStyle;
}`,signature:{properties:[{key:"x",value:{name:"signature",type:"object",raw:`{
  /** Color of the main axis line */
  lineColor: string;
  /** Width of the main axis line in pixels */
  lineWidth: number;
  /** Color of the axis label text */
  labelColor: string;
  /** Color of the tick marks */
  tickColor: string;
  /** Width of the tick marks in pixels */
  tickWidth: number;
  /** Color of the tick mark labels */
  tickLabelColor: string;
  /** Color of the split lines (grid lines parallel to axis) */
  splitLineColor: string;
  /** Width of the split lines in pixels */
  splitLineWidth: number;
}`,signature:{properties:[{key:"lineColor",value:{name:"string",required:!0},description:"Color of the main axis line"},{key:"lineWidth",value:{name:"number",required:!0},description:"Width of the main axis line in pixels"},{key:"labelColor",value:{name:"string",required:!0},description:"Color of the axis label text"},{key:"tickColor",value:{name:"string",required:!0},description:"Color of the tick marks"},{key:"tickWidth",value:{name:"number",required:!0},description:"Width of the tick marks in pixels"},{key:"tickLabelColor",value:{name:"string",required:!0},description:"Color of the tick mark labels"},{key:"splitLineColor",value:{name:"string",required:!0},description:"Color of the split lines (grid lines parallel to axis)"},{key:"splitLineWidth",value:{name:"number",required:!0},description:"Width of the split lines in pixels"}]},required:!0},description:"X-axis styling configuration"},{key:"y",value:{name:"signature",type:"object",raw:`{
  /** Color of the main axis line */
  lineColor: string;
  /** Width of the main axis line in pixels */
  lineWidth: number;
  /** Color of the axis label text */
  labelColor: string;
  /** Color of the tick marks */
  tickColor: string;
  /** Width of the tick marks in pixels */
  tickWidth: number;
  /** Color of the tick mark labels */
  tickLabelColor: string;
  /** Color of the split lines (grid lines parallel to axis) */
  splitLineColor: string;
  /** Width of the split lines in pixels */
  splitLineWidth: number;
}`,signature:{properties:[{key:"lineColor",value:{name:"string",required:!0},description:"Color of the main axis line"},{key:"lineWidth",value:{name:"number",required:!0},description:"Width of the main axis line in pixels"},{key:"labelColor",value:{name:"string",required:!0},description:"Color of the axis label text"},{key:"tickColor",value:{name:"string",required:!0},description:"Color of the tick marks"},{key:"tickWidth",value:{name:"number",required:!0},description:"Width of the tick marks in pixels"},{key:"tickLabelColor",value:{name:"string",required:!0},description:"Color of the tick mark labels"},{key:"splitLineColor",value:{name:"string",required:!0},description:"Color of the split lines (grid lines parallel to axis)"},{key:"splitLineWidth",value:{name:"number",required:!0},description:"Width of the split lines in pixels"}]},required:!0},description:"Y-axis styling configuration"},{key:"r",value:{name:"signature",type:"object",raw:`{
  /** Color of the main axis line */
  lineColor: string;
  /** Width of the main axis line in pixels */
  lineWidth: number;
  /** Color of the axis label text */
  labelColor: string;
  /** Color of the tick marks */
  tickColor: string;
  /** Width of the tick marks in pixels */
  tickWidth: number;
  /** Color of the tick mark labels */
  tickLabelColor: string;
  /** Color of the split lines (grid lines parallel to axis) */
  splitLineColor: string;
  /** Width of the split lines in pixels */
  splitLineWidth: number;
}`,signature:{properties:[{key:"lineColor",value:{name:"string",required:!0},description:"Color of the main axis line"},{key:"lineWidth",value:{name:"number",required:!0},description:"Width of the main axis line in pixels"},{key:"labelColor",value:{name:"string",required:!0},description:"Color of the axis label text"},{key:"tickColor",value:{name:"string",required:!0},description:"Color of the tick marks"},{key:"tickWidth",value:{name:"number",required:!0},description:"Width of the tick marks in pixels"},{key:"tickLabelColor",value:{name:"string",required:!0},description:"Color of the tick mark labels"},{key:"splitLineColor",value:{name:"string",required:!0},description:"Color of the split lines (grid lines parallel to axis)"},{key:"splitLineWidth",value:{name:"number",required:!0},description:"Width of the split lines in pixels"}]},required:!0},description:"Radial axis styling configuration (for radar/polar charts)"}]},required:!0},description:"Configuration for chart axes (x, y, and radial)"},{key:"grid",value:{name:"signature",type:"object",raw:`{
  /** X-axis grid line styling */
  x: GridLineStyle;
  /** Y-axis grid line styling */
  y: GridLineStyle;
  /** Radial grid line styling (for radar/polar charts) */
  r: GridLineStyle;
}`,signature:{properties:[{key:"x",value:{name:"signature",type:"object",raw:`{
  /** Color of the grid lines */
  lineColor: string;
  /** Width of the grid lines in pixels */
  lineWidth: number;
}`,signature:{properties:[{key:"lineColor",value:{name:"string",required:!0},description:"Color of the grid lines"},{key:"lineWidth",value:{name:"number",required:!0},description:"Width of the grid lines in pixels"}]},required:!0},description:"X-axis grid line styling"},{key:"y",value:{name:"signature",type:"object",raw:`{
  /** Color of the grid lines */
  lineColor: string;
  /** Width of the grid lines in pixels */
  lineWidth: number;
}`,signature:{properties:[{key:"lineColor",value:{name:"string",required:!0},description:"Color of the grid lines"},{key:"lineWidth",value:{name:"number",required:!0},description:"Width of the grid lines in pixels"}]},required:!0},description:"Y-axis grid line styling"},{key:"r",value:{name:"signature",type:"object",raw:`{
  /** Color of the grid lines */
  lineColor: string;
  /** Width of the grid lines in pixels */
  lineWidth: number;
}`,signature:{properties:[{key:"lineColor",value:{name:"string",required:!0},description:"Color of the grid lines"},{key:"lineWidth",value:{name:"number",required:!0},description:"Width of the grid lines in pixels"}]},required:!0},description:"Radial grid line styling (for radar/polar charts)"}]},required:!0},description:"Configuration for grid lines"},{key:"legend",value:{name:"signature",type:"object",raw:`{
  /** Color of the legend text */
  textColor: string;
  /** Font size of the legend text in pixels */
  fontSize: number;
  /** Color of the legend background */
  backgroundColor: string;
}`,signature:{properties:[{key:"textColor",value:{name:"string",required:!0},description:"Color of the legend text"},{key:"fontSize",value:{name:"number",required:!0},description:"Font size of the legend text in pixels"},{key:"backgroundColor",value:{name:"string",required:!0},description:"Color of the legend background"}]},required:!0}},{key:"tooltip",value:{name:"signature",type:"object",raw:`{
  /** Background color of the tooltip */
  backgroundColor: string;
  /** Color of the label text in the tooltip */
  labelColor: string;
  /** Color of the value text in the tooltip */
  valueColor: string;
  /** Color of the tooltip border */
  borderColor: string;
  /** Width of the tooltip border in pixels */
  borderWidth: number;
  /** Border radius of the tooltip corners in pixels */
  borderRadius: number;
  /** Internal padding of the tooltip in pixels */
  padding: number;
}`,signature:{properties:[{key:"backgroundColor",value:{name:"string",required:!0},description:"Background color of the tooltip"},{key:"labelColor",value:{name:"string",required:!0},description:"Color of the label text in the tooltip"},{key:"valueColor",value:{name:"string",required:!0},description:"Color of the value text in the tooltip"},{key:"borderColor",value:{name:"string",required:!0},description:"Color of the tooltip border"},{key:"borderWidth",value:{name:"number",required:!0},description:"Width of the tooltip border in pixels"},{key:"borderRadius",value:{name:"number",required:!0},description:"Border radius of the tooltip corners in pixels"},{key:"padding",value:{name:"number",required:!0},description:"Internal padding of the tooltip in pixels"}]},required:!0},description:"Configuration for tooltip appearance"},{key:"series",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  /** Primary color for the data series */
  color: string;
  /** Width of lines for line/area charts in pixels */
  lineWidth?: number;
  /** Border radius for each corner [top-left, top-right, bottom-right, bottom-left] */
  borderRadius?: number[];
  /** Color of the border around chart items */
  borderColor?: string;
  /** Width of the border around chart items in pixels */
  borderWidth?: number;
  /** Style of the border: 'solid', 'dashed', or 'dotted' */
  borderType?: 'solid' | 'dashed' | 'dotted';
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0},description:"Primary color for the data series"},{key:"lineWidth",value:{name:"number",required:!1},description:"Width of lines for line/area charts in pixels"},{key:"borderRadius",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1},description:"Border radius for each corner [top-left, top-right, bottom-right, bottom-left]"},{key:"borderColor",value:{name:"string",required:!1},description:"Color of the border around chart items"},{key:"borderWidth",value:{name:"number",required:!1},description:"Width of the border around chart items in pixels"},{key:"borderType",value:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}],required:!1},description:"Style of the border: 'solid', 'dashed', or 'dotted'"}]}}],raw:"Series[]",required:!0},description:"Array of series styles that cycle through for multiple data series"}]}}],raw:"Partial<ChartTheme>"},description:`Partial theme override for customizing chart appearance.
Merged with the default theme from ChartThemeContext.`},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Colors for the chart series. Overrides theme colors.
When provided, these colors will be used for the series in order.`},data:{required:!0,tsType:{name:"union",raw:"PieDataItem[] | PieRingData[]",elements:[{name:"Array",elements:[{name:"PieDataItem"}],raw:"PieDataItem[]"},{name:"Array",elements:[{name:"PieRingData"}],raw:"PieRingData[]"}]},description:"Chart data: single pie (array of { name, value }) or concentric (array of { name?, radius, data })."},radius:{required:!1,tsType:{name:"union",raw:"number | string | (number | string)[]",elements:[{name:"number"},{name:"string"},{name:"Array",elements:[{name:"unknown"}],raw:"(number | string)[]"}]},description:`Radius of the pie. Number (e.g. 100), string (e.g. '60%'), or [inner, outer] for donut.
@default '75%'`,defaultValue:{value:"'75%'",computed:!1}},showLegend:{required:!1,tsType:{name:"boolean"},description:`Whether to show the legend for slices.
@default false`,defaultValue:{value:"false",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show slice labels (name/value on the chart).
@default true`,defaultValue:{value:"true",computed:!1}},labelPosition:{required:!1,tsType:{name:"union",raw:"'outside' | 'inside' | 'center'",elements:[{name:"literal",value:"'outside'"},{name:"literal",value:"'inside'"},{name:"literal",value:"'center'"}]},description:`Label position: 'outside' | 'inside' | 'center'.
@default 'outside'`,defaultValue:{value:"'outside'",computed:!1}},showLabelLine:{required:!1,tsType:{name:"boolean"},description:`Whether to show label lines (connectors from slice to label).
@default true when labelPosition is 'outside'`,defaultValue:{value:"true",computed:!1}},showHighlighter:{required:!1,tsType:{name:"boolean"},description:`Whether to emphasize (scale/highlight) the hovered slice.
@default true`,defaultValue:{value:"true",computed:!1}},tooltipFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: { name: string; value: number; percent?: number }) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ name: string; value: number; percent?: number }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"value",value:{name:"number",required:!0}},{key:"percent",value:{name:"number",required:!1}}]}},name:"params"}],return:{name:"string"}}},description:"Formatter for tooltip. (params) => string. Params include name, value, percent."},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PieChartSelectEvent) => void",signature:{arguments:[{type:{name:"PieChartSelectEvent"},name:"event"}],return:{name:"void"}}},description:"Called when the user selects (taps/clicks) a slice."}}};const te={data:{...V.data,description:"Single pie: [{ name, value }, ...]. Concentric: [{ name?, radius: [inner, outer], data: [{ name, value }, ...] }, ...]."},radius:{control:"text",description:'Radius of the pie. Number, string (e.g. "60%"), or [inner, outer] for donut. Default: "75%"'},showLegend:{control:"boolean",description:"Whether to show the legend for slices. Default: false"},showLabel:{control:"boolean",description:"Whether to show slice labels on the chart. Default: true"},labelPosition:{control:"select",options:["outside","inside","center"],description:"Label position: outside, inside, or center. Default: outside"},showLabelLine:{control:"boolean",description:"Whether to show label lines (connectors). Default: true when labels outside"},showHighlighter:{control:"boolean",description:"Whether to emphasize the hovered slice. Default: true"},tooltipFormatter:{control:!1,description:"Custom formatter for tooltip. (params) => string"},onSelect:{control:!1,description:"Called when the user taps/clicks a slice. Receives seriesIndex, dataIndex, name, value, optional seriesName, percent."}},ie={...V,...te},b=J.create({container:{padding:20,borderRadius:8},sourceContainer:{marginTop:16,padding:12,backgroundColor:"rgba(0,0,0,0.04)",borderRadius:6,borderWidth:1,borderColor:"rgba(0,0,0,0.08)"},sourceLabel:{fontSize:11,fontWeight:"600",marginBottom:6,color:"rgba(0,0,0,0.5)",textTransform:"uppercase",letterSpacing:.5},sourceCode:{fontFamily:"ui-monospace, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),de={title:"Charts/Pie/Type",component:re,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...ie},decorators:[(n,o)=>{var m;return p.createElement(E,{style:b.container},p.createElement(n,null),((m=o.parameters)==null?void 0:m.source)!=null&&p.createElement(E,{style:b.sourceContainer},p.createElement(N,{style:b.sourceLabel},"React Native"),p.createElement(N,{style:b.sourceCode},String(o.parameters.source))))}]};export{re as P,de as m};
