import{r as p,R as b}from"./iframe-D855FiCl.js";import{w as ne,u as ae,c as oe,a as le,b as se,i as ue,S as de,V as ee,T as re,s as me}from"./install-BebJlzH2.js";import{g as ce}from"./axis-bL-QyYCv.js";import{i as pe,c as he}from"./common-BBO5jU0Y.js";import{i as fe}from"./install-CXma37mE.js";import{i as ge}from"./install-DfB1csNh.js";import{i as ye}from"./install-elHyl0oQ.js";import{i as be}from"./install-BiL3BzV2.js";import{c as xe}from"./cartesian-C25Uk8mH.js";ae([pe,fe,ge,oe,ye,be]);function Ce(n){const o=n.length;if(o===0)return{slope:0,intercept:0};let a=0,l=0,x=0,h=0;for(const[s,k]of n)a+=s,l+=k,x+=s*k,h+=s*s;const C=o*h-a*a,f=C===0?0:(o*x-a*l)/C,W=(l-f*a)/o;return{slope:f,intercept:W}}const te=({data:n,width:o=220,height:a=350,symbol:l="circle",symbolSize:x=8,showXAxis:h=!0,showXAxisTicks:C=!0,showYAxis:f=!0,showYAxisTicks:W=!0,showXAxisSplitLines:s=!0,showYAxisSplitLines:k=!0,boundaryGap:N=!1,grid:X,showLegend:F=!1,showHighlighter:Y=!0,showRegressionLine:M=!1,xAxisTickLabelFormatter:w,yAxisTickLabelFormatter:S,xAxisTicks:T,xAxisLabel:L,yAxisLabel:R,onSelect:B,...D})=>{const{theme:e}=se(D.theme,D.colors),E=p.useRef(null),I=p.useRef(B);I.current=B;const P=p.useRef({normalizedSeries:[]}),u=p.useMemo(()=>{if(!Array.isArray(n)||n.length===0)return[];const r=n[0];return Array.isArray(r)&&r.length>=2&&typeof r[0]=="number"?[{data:n}]:typeof r=="object"&&r!==null&&"data"in r?n:[]},[n]),O=p.useMemo(()=>u.some(r=>"name"in r&&r.name),[u]);P.current={normalizedSeries:u};const $=p.useMemo(()=>{var c;const r=u.map(t=>t.data.map(q=>q[0])).flat(),d=T!=null&&T.length>0?T:ce(r).map(String),g=Y?{trigger:"item",axisPointer:{type:"cross",lineStyle:{type:"line",width:1,color:((c=e.series[0])==null?void 0:c.color)??"#999"}}}:{trigger:"item"},A={type:"category",boundaryGap:N,data:d,...L!=null&&L!==""&&{name:L,nameLocation:"middle",nameGap:25,nameTextStyle:{color:e.axis.x.tickLabelColor}},axisLabel:{show:h||w!=null,color:e.axis.x.tickLabelColor,...w&&{formatter:w}},axisLine:h?{show:!0,lineStyle:{color:e.axis.x.lineColor,width:e.axis.x.lineWidth}}:{show:!1},axisTick:{show:C,lineStyle:{color:e.axis.x.tickColor,width:e.axis.x.tickWidth}},splitLine:{show:s,lineStyle:{color:e.axis.x.splitLineColor,width:e.axis.x.splitLineWidth}}},y={type:"value",...R!=null&&R!==""&&{name:R,nameLocation:"middle",nameGap:40,nameTextStyle:{color:e.axis.y.tickLabelColor}},axisLabel:{show:f||S!=null,color:e.axis.y.tickLabelColor,...S&&{formatter:S}},axisLine:f?{show:!0,lineStyle:{color:e.axis.y.lineColor,width:e.axis.y.lineWidth}}:{show:!1},axisTick:{show:W,lineStyle:{color:e.axis.y.tickColor,width:e.axis.y.tickWidth}},splitLine:{show:k,lineStyle:{color:e.axis.y.splitLineColor,width:e.axis.y.splitLineWidth}}},m=F&&O?{data:u.filter(t=>"name"in t&&t.name).map(t=>t.name),textStyle:{color:e.legend.textColor,fontSize:e.legend.fontSize},backgroundColor:e.legend.backgroundColor}:void 0,v=[];u.forEach((t,q)=>{const G=e.series[q%e.series.length].color,z="data"in t?t.data:[],j="name"in t&&t.name?t.name:void 0,_={type:"scatter",data:z,symbol:l==="none"?"circle":l,symbolSize:l==="none"?8:x,itemStyle:{color:G},emphasis:Y?{focus:"self",scale:!0,symbol:"circle",symbolSize:8,itemStyle:{color:G,borderColor:"#FFFFFF",borderWidth:2}}:{focus:"none",scale:!1,symbolSize:0}};if(j&&(_.name=j),v.push(_),M&&z.length>=2){const{slope:H,intercept:J}=Ce(z),K=z.map(ie=>ie[0]),Q=Math.min(...K),U=Math.max(...K),Z={type:"line",data:[[Q,H*Q+J],[U,H*U+J]],symbol:"none",lineStyle:{color:G,width:2,type:"solid"},showSymbol:!1};j&&(Z.name=j),v.push(Z)}});const i={tooltip:g,xAxis:A,yAxis:y,series:v};return m&&(i.legend=m),X&&(i.grid=X),i},[e,u,l,x,h,C,f,W,s,k,N,X,F,O,Y,M,w,S,T,L,R]);return p.useEffect(()=>{let r;if(E.current)try{r=ue(E.current,"light",{width:o,height:a}),r.setOption($);const d=g=>{const A=I.current;if(typeof A!="function"||g.componentType!=="series"||g.seriesType!=="scatter")return;const y=g.seriesIndex,m=g.dataIndex;if(typeof y!="number"||typeof m!="number"||m<0)return;const{normalizedSeries:v}=P.current,i=v[y];if(!(i!=null&&i.data)||!Array.isArray(i.data))return;const c=i.data[m];if(!c||c.length<2)return;const t=i.name!=null&&i.name!==""?String(i.name):`Series ${y+1}`,q={seriesIndex:y,dataIndex:m,seriesName:t,x:c[0],y:Number(c[1])};A(q)};r.on("click",d)}catch(d){console.warn("Chart initialization error:",d)}return()=>{if(r)try{r.dispose()}catch(d){console.warn("Chart disposal error:",d)}}},[$,o,a]),b.createElement(de,{ref:E,useRNGH:!0})},ke=ne(le(te)),ve=Object.assign(ke,{displayName:"ScatterChart"});te.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{width:{required:!1,tsType:{name:"number"},description:`Width of the chart in pixels.
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
When provided, these colors will be used for the series in order.`},boundaryGap:{required:!1,tsType:{name:"boolean"},description:`Whether to leave gaps at the start and end of the axis.
@default false (area/line/scatter); true (bar)`,defaultValue:{value:"false",computed:!1}},xAxisTicks:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:`Custom X-axis tick values (numbers only). When provided, used as the x-axis data; labels are
generated using xAxisTickLabelFormatter. Otherwise each chart derives x-axis from data.
@default undefined`},yAxisTicks:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:`Custom Y-axis tick positions (for value axis).
@default undefined`},showXAxis:{required:!1,tsType:{name:"boolean"},description:`Whether to show the X-axis line and labels.
@default true`,defaultValue:{value:"true",computed:!1}},showXAxisTicks:{required:!1,tsType:{name:"boolean"},description:`Whether to show X-axis tick marks.
@default true`,defaultValue:{value:"true",computed:!1}},showYAxis:{required:!1,tsType:{name:"boolean"},description:`Whether to show the Y-axis line and labels.
@default true`,defaultValue:{value:"true",computed:!1}},showYAxisTicks:{required:!1,tsType:{name:"boolean"},description:`Whether to show Y-axis tick marks.
@default true`,defaultValue:{value:"true",computed:!1}},showXAxisSplitLines:{required:!1,tsType:{name:"boolean"},description:`Whether to show vertical grid lines (X-axis split lines).
@default true`,defaultValue:{value:"true",computed:!1}},showYAxisSplitLines:{required:!1,tsType:{name:"boolean"},description:`Whether to show horizontal grid lines (Y-axis split lines).
@default true`,defaultValue:{value:"true",computed:!1}},xAxisLabel:{required:!1,tsType:{name:"string"},description:`Label text for the X-axis (displayed along the axis).
@default undefined`},yAxisLabel:{required:!1,tsType:{name:"string"},description:`Label text for the Y-axis (displayed along the axis).
@default undefined`},grid:{required:!1,tsType:{name:"CartesianGrid"},description:"Grid positioning configuration."},showLegend:{required:!1,tsType:{name:"boolean"},description:`Whether to display a legend for named series.
@default false`,defaultValue:{value:"false",computed:!1}},showHighlighter:{required:!1,tsType:{name:"boolean"},description:`Whether to show the highlighter (emphasis) when interacting with the chart.
@default true`,defaultValue:{value:"true",computed:!1}},xAxisTickLabelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number, index?: number) => string",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Formatter for X-axis tick labels. (value, index?) => string"},yAxisTickLabelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number, index?: number) => string",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Formatter for Y-axis tick labels. (value, index?) => string"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: CartesianChartSelectEvent) => void",signature:{arguments:[{type:{name:"CartesianChartSelectEvent"},name:"event"}],return:{name:"void"}}},description:"Called when the user selects (taps/clicks) a data point on a series (when supported)."},data:{required:!0,tsType:{name:"union",raw:`| number[][]
| Array<{ name: string; data: number[][] }>`,elements:[{name:"Array",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"}],raw:"number[][]"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; data: number[][] }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"data",value:{name:"Array",elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"}],raw:"number[][]",required:!0}}]}}],raw:"Array<{ name: string; data: number[][] }>"}]},description:"Scatter data: array of [x, y] pairs per series."},symbol:{required:!1,tsType:{name:"union",raw:"'none' | 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | string",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'rect'"},{name:"literal",value:"'roundRect'"},{name:"literal",value:"'triangle'"},{name:"literal",value:"'diamond'"},{name:"literal",value:"'pin'"},{name:"literal",value:"'arrow'"},{name:"string"}]},description:`Symbol shape for points.
@default 'circle'`,defaultValue:{value:"'circle'",computed:!1}},symbolSize:{required:!1,tsType:{name:"union",raw:"number | number[] | ((value: unknown) => number | number[])",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"unknown"}]},description:`Symbol size. Number, [width, height], or function.
@default 8`,defaultValue:{value:"8",computed:!1}},showRegressionLine:{required:!1,tsType:{name:"boolean"},description:`When true, draws a linear regression line per scatter series.
@default false`,defaultValue:{value:"false",computed:!1}}}};const qe={data:{control:"object",description:"Scatter data: array of [x, y] pairs, or multiple series with { name, data: number[][] }."},symbol:{control:"select",options:["none","circle","rect","roundRect","triangle","diamond","pin","arrow"],description:"Symbol type for data points. Default: circle"},symbolSize:{control:"number",description:"Size of the symbol. Can be a number, array [width, height], or function. Default: 8"},showRegressionLine:{control:"boolean",description:"When true, draws a linear regression line per scatter series. Default: false"}},We={...he,...xe,...qe},V=me.create({container:{padding:20,borderRadius:8},sourceContainer:{marginTop:16,padding:12,backgroundColor:"rgba(0,0,0,0.04)",borderRadius:6,borderWidth:1,borderColor:"rgba(0,0,0,0.08)"},sourceLabel:{fontSize:11,fontWeight:"600",marginBottom:6,color:"rgba(0,0,0,0.5)",textTransform:"uppercase",letterSpacing:.5},sourceCode:{fontFamily:"ui-monospace, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),Ye={title:"Charts/Scatter/Symbol",component:ve,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...We},decorators:[(n,o)=>{var a;return b.createElement(ee,{style:V.container},b.createElement(n,null),((a=o.parameters)==null?void 0:a.source)!=null&&b.createElement(ee,{style:V.sourceContainer},b.createElement(re,{style:V.sourceLabel},"React Native"),b.createElement(re,{style:V.sourceCode},String(o.parameters.source))))}]};export{ve as S,Ye as m};
