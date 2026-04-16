import{w as ne,u as ae,a as oe,b as le,i as se,S as ue,c as de}from"./install-BebJlzH2.js";import{r as c,R as me}from"./iframe-D855FiCl.js";import{g as pe}from"./axis-bL-QyYCv.js";import{i as ce}from"./common-BBO5jU0Y.js";import{i as fe}from"./install-CXma37mE.js";import{i as he}from"./install-DfB1csNh.js";import{i as ge}from"./install-BiL3BzV2.js";ae([ce,fe,he,de,ge]);const te=({data:f,width:Y=220,height:F=350,type:W="default",step:I,boundaryGap:O=!1,stack:b,stackNormalize:h=!1,symbol:v,symbolSize:B,areaOpacity:D=.6,areaFill:S="gradient",showXAxis:L=!0,showXAxisTicks:E=!0,showYAxis:T=!0,showYAxisTicks:M=!0,showXAxisSplitLines:P=!0,showYAxisSplitLines:N=!0,grid:A,showLegend:$=!1,showHighlighter:R=!0,xAxisTickLabelFormatter:j,yAxisTickLabelFormatter:V,xAxisTicks:x,xAxisLabel:q,yAxisLabel:w,onSelect:_,...H})=>{const{theme:e}=le(H.theme,H.colors),z=c.useRef(null),J=c.useRef(_);J.current=_;const U=c.useRef({displaySeries:[],xAxisData:[]}),K=W==="smooth",G=W==="step"?I??"start":I??!1,s=c.useMemo(()=>{let r=[];if(!Array.isArray(f)||f.length===0)return r;const a=f[0];return typeof a=="number"?r=[{name:"Series 1",data:f.map((t,l)=>[String(l),t])}]:Array.isArray(a)&&a.length===2?r=[{name:"Series 1",data:f}]:r=JSON.parse(JSON.stringify(f)).filter(t=>t.data&&t.data.length>0).map((t,l)=>(typeof t.data[0]=="number"&&(t.data=t.data.map((o,i)=>[String(i),o])),{name:t.name||"Series "+(l+1),data:[...t.data]})),r},[f]),Q=c.useMemo(()=>s.some(r=>"name"in r&&r.name),[s]),g=c.useMemo(()=>{var a,t;if(!h||s.length<=1)return s;const r=((t=(a=s[0])==null?void 0:a.data)==null?void 0:t.length)??0;return r===0?s:s.map(l=>{const d=l.data,o=new Array(r).fill(0);s.forEach((m,n)=>{("data"in m?m.data:[]).forEach((C,p)=>{p<r&&(o[p]+=C)})});const i=d.map((m,n)=>{const u=o[n]||1;return u>0?m[1]/u*100:0});return"name"in l&&l.name?{name:l.name,data:i}:{data:i}})},[s,h]),X=c.useMemo(()=>{const r=s.map(a=>a.data.map(t=>t[0])).flat();return x!=null&&x.length>0?x:pe(r).map(String)},[s,x]);U.current={displaySeries:g,xAxisData:X};const Z=c.useMemo(()=>{const r=R?{trigger:"axis",axisPointer:{type:"line",snap:!0,lineStyle:{type:"solid",width:1,color:e.series[0].color??"#999"}}}:null,a={type:"category",data:X,...q!=null&&q!==""&&{name:q,nameLocation:"middle",nameGap:25,nameTextStyle:{color:e.axis.x.tickLabelColor}},axisLabel:{show:L||j!=null,color:e.axis.x.tickLabelColor,formatter:j??void 0},axisLine:L?{show:!0,lineStyle:{color:e.axis.x.lineColor,width:e.axis.x.lineWidth}}:{show:!1},axisTick:{show:E,lineStyle:{color:e.axis.x.tickColor,width:e.axis.x.tickWidth}},splitLine:{show:P,lineStyle:{color:e.axis.x.splitLineColor,width:e.axis.x.splitLineWidth}}};a.boundaryGap=O;const t={type:"value",...h&&g.length>1&&{min:0,max:100},...w!=null&&w!==""&&{name:w,nameLocation:"middle",nameGap:40,nameTextStyle:{color:e.axis.y.tickLabelColor}},axisLabel:{show:T||V!=null,color:e.axis.y.tickLabelColor,formatter:V??(h&&g.length>1?i=>`${i}%`:void 0)},axisLine:T?{show:!0,lineStyle:{color:e.axis.y.lineColor,width:e.axis.y.lineWidth}}:{show:!1},axisTick:{show:M,lineStyle:{color:e.axis.y.tickColor,width:e.axis.y.tickWidth}},splitLine:{show:N,lineStyle:{color:e.axis.y.splitLineColor,width:e.axis.y.splitLineWidth}}},l=$&&Q?{data:s.filter(i=>"name"in i&&i.name).map(i=>i.name),textStyle:{color:e.legend.textColor,fontSize:e.legend.fontSize},backgroundColor:e.legend.backgroundColor}:void 0,d=g.map((i,m)=>{var re;const n=e.series[m%e.series.length].color,u=((re=e.series[m])==null?void 0:re.lineWidth)??e.series[0].lineWidth??2,C=Math.round(D*255).toString(16).padStart(2,"0"),p=n+C,k=n+"00",ee=n+"ff",ie=S==="gradient"?{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:p},{offset:1,color:k}]}}:S==="transparent"?{color:p}:{color:ee},y={data:"data"in i?i.data:[],type:"line",symbol:!v||v==="none"?void 0:v,symbolSize:B||8,areaStyle:ie,itemStyle:{color:n},lineStyle:{color:n,width:u},emphasis:R?{focus:"self",scale:!0,symbol:"circle",symbolSize:8,itemStyle:{color:n,borderColor:"#FFFFFF",borderWidth:2}}:{focus:"none",scale:!1,symbolSize:0}};return"name"in i&&i.name&&(y.name=i.name),G!==!1?y.step=G:y.smooth=K,b!==void 0&&b!==!1?y.stack=typeof b=="string"?b:"total":h&&g.length>1&&(y.stack="total"),y}),o={tooltip:r,xAxis:a,yAxis:t,series:d};return l&&(o.legend=l),A&&(o.grid=A),o},[e,s,X,g,W,K,G,O,b,h,v,B,D,S,L,T,E,M,P,N,A,$,Q,R,j,V,x,q,w]);return c.useEffect(()=>{let r;if(z.current)try{r=se(z.current,"light",{width:Y,height:F}),r.setOption(Z);const a=t=>{const l=J.current;if(typeof l!="function"||t.componentType!=="series")return;const d=t.seriesIndex,o=t.dataIndex;if(typeof d!="number"||typeof o!="number"||o<0)return;const{displaySeries:i,xAxisData:m}=U.current,n=i[d];if(!(n!=null&&n.data)||!Array.isArray(n.data))return;const u=n.data[o];if(u===void 0)return;const C=n.name!=null&&n.name!==""?String(n.name):`Series ${d+1}`;let p,k;if(typeof u=="number")p=m[o]??o,k=u;else if(Array.isArray(u)&&u.length>=2)p=u[0],k=Number(u[1]);else return;l({seriesIndex:d,dataIndex:o,seriesName:C,x:p,y:k})};r.on("click",a)}catch(a){console.warn("Chart initialization error:",a)}return()=>{if(r)try{r.dispose()}catch(a){console.warn("Chart disposal error:",a)}}},[Z,Y,F]),me.createElement(ue,{ref:z,useRNGH:!0})},ye=ne(oe(te)),We=Object.assign(ye,{displayName:"AreaChart"});te.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{width:{required:!1,tsType:{name:"number"},description:`Width of the chart in pixels.
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
@default true`,defaultValue:{value:"true",computed:!1}},xAxisTickLabelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number, index?: number) => string",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Formatter for X-axis tick labels. (value, index?) => string"},yAxisTickLabelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number, index?: number) => string",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Formatter for Y-axis tick labels. (value, index?) => string"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: CartesianChartSelectEvent) => void",signature:{arguments:[{type:{name:"CartesianChartSelectEvent"},name:"event"}],return:{name:"void"}}},description:"Called when the user selects (taps/clicks) a data point on a series (when supported)."},data:{required:!0,tsType:{name:"union",raw:`| number[]
| [string | number, number][]
| Array<{ name?: string; data: number[] }>
| Array<{ name?: string; data: [string | number, number][] }>`,elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"Array",elements:[{name:"tuple",raw:"[string | number, number]",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},{name:"number"}]}],raw:"[string | number, number][]"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name?: string; data: number[] }",signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"data",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}}]}}],raw:"Array<{ name?: string; data: number[] }>"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name?: string; data: [string | number, number][] }",signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"data",value:{name:"Array",elements:[{name:"tuple",raw:"[string | number, number]",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},{name:"number"}]}],raw:"[string | number, number][]",required:!0}}]}}],raw:"Array<{ name?: string; data: [string | number, number][] }>"}]},description:"Chart data. Single series (number[]), multiple unnamed (number[][]), or multiple named series."},type:{required:!1,tsType:{name:"union",raw:"'default' | 'smooth' | 'step'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'smooth'"},{name:"literal",value:"'step'"}]},description:`Curve type: 'default' (linear), 'smooth' (Bezier), or 'step'.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"'start' | 'middle' | 'end' | false",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'end'"},{name:"literal",value:"false"}]},description:`Step mode when type="step". 'start' | 'middle' | 'end'.`},stack:{required:!1,tsType:{name:"union",raw:"string | false",elements:[{name:"string"},{name:"literal",value:"false"}]},description:"Stack ID for stacking multiple series. Use false to disable."},stackNormalize:{required:!1,tsType:{name:"boolean"},description:`When true with stack, show stacked values as percentages (0–100%).
@default false`,defaultValue:{value:"false",computed:!1}},symbol:{required:!1,tsType:{name:"union",raw:"'none' | 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | string",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'rect'"},{name:"literal",value:"'roundRect'"},{name:"literal",value:"'triangle'"},{name:"literal",value:"'diamond'"},{name:"literal",value:"'pin'"},{name:"literal",value:"'arrow'"},{name:"string"}]},description:`Symbol type for data points. Set to 'none' to hide.
@default 'none'`},symbolSize:{required:!1,tsType:{name:"union",raw:"number | number[] | ((value: unknown) => number | number[])",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"unknown"}]},description:"Size of the symbol. Number, [width, height], or function."},areaOpacity:{required:!1,tsType:{name:"number"},description:`Opacity of the filled area (0-1).
@default 0.6`,defaultValue:{value:"0.6",computed:!1}},areaFill:{required:!1,tsType:{name:"union",raw:"'gradient' | 'transparent' | 'solid'",elements:[{name:"literal",value:"'gradient'"},{name:"literal",value:"'transparent'"},{name:"literal",value:"'solid'"}]},description:`Fill style for the area under the line: 'gradient' | 'transparent' | 'solid'.
@default 'gradient'`,defaultValue:{value:"'gradient'",computed:!1}}}};export{We as A};
