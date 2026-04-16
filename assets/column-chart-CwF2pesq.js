import{w as Ve,u as Be,c as Ge,a as Xe,b as Ye,i as De,S as Ee}from"./install-BebJlzH2.js";import{r as v,R as Me}from"./iframe-D855FiCl.js";import{g as Oe}from"./axis-bL-QyYCv.js";import{i as Pe}from"./common-BBO5jU0Y.js";import{i as $e}from"./install-CXma37mE.js";import{i as Ne}from"./install-DfB1csNh.js";import{i as Je}from"./install-9dos4XC1.js";Be([Pe,$e,Ne,Ge,Je]);const We=({data:k,width:z=220,height:ee=350,boundaryGap:te=!0,cornerRadius:a=[4,4,0,0],horizontal:o=!1,stack:w,stackNormalize:q=!1,activeIndex:j,activeColor:re,barInsideLabelPosition:W="start",barInsideLabelFormatter:L,barOutsideLabelPosition:C="start",barOutsideLabelFormatter:I,itemStyle:V,showXAxis:Y=!0,showXAxisTicks:ne=!0,showYAxis:D=!0,showYAxisTicks:ie=!0,showXAxisSplitLines:ae=!0,showYAxisSplitLines:oe=!0,grid:P,showLegend:se=!1,showHighlighter:$=!0,xAxisTickLabelFormatter:N,yAxisTickLabelFormatter:J,xAxisTicks:E,xAxisLabel:S,yAxisLabel:T,onSelect:le,...ue})=>{const{theme:t}=Ye(ue.theme,ue.colors),_=v.useRef(null),de=v.useRef(le);de.current=le;const me=v.useRef({displaySeries:[],labelOverlayDuplicate:!1}),h=v.useMemo(()=>{let e=[];if(!Array.isArray(k)||k.length===0)return e;const u=k[0];return typeof u=="number"?e=[{name:"Series 1",data:k.map((i,g)=>[String(g),i])}]:Array.isArray(u)&&u.length===2?e=[{name:"Series 1",data:k}]:e=JSON.parse(JSON.stringify(k)).filter(i=>i.data&&i.data.length>0).map((i,g)=>(typeof i.data[0]=="number"&&(i.data=i.data.map((c,A)=>[String(A),c])),{name:i.name||"Series "+(g+1),data:[...i.data]})),e},[k]),pe=v.useMemo(()=>h.some(e=>"name"in e&&e.name),[h]),d=v.useMemo(()=>{var u,i;if(!q||h.length<=1)return h;const e=((i=(u=h[0])==null?void 0:u.data)==null?void 0:i.length)??0;return e===0?h:h.map(g=>{const m=g.data,c=new Array(e).fill(0);h.forEach(f=>{("data"in f?f.data:[]).forEach((p,b)=>{b<e&&(c[b]+=typeof p=="number"?p:p[1])})});const A=m.map((f,s)=>{const p=typeof f=="number"?f:f[1],b=c[s]||1;return b>0?p/b*100:0});return{name:g.name,data:m.map((f,s)=>[f[0],A[s]])}})},[h,q]),Se=L!=null,Te=I!=null,Ae=d.length===1,Le=Se&&Te&&Ae;me.current={displaySeries:d,labelOverlayDuplicate:Le};const ce=v.useMemo(()=>{var be,xe;const e=(((be=d[0])==null?void 0:be.data)??[]).map(r=>String(r[0])),u=d.flatMap(r=>r.data.map(y=>y[1])),i=E!=null&&E.length>0?E:e.length>0?e:Oe(u).map(String),g=$?{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(0,0,0,0.08)"}}}:{trigger:"axis"},m={type:"category",data:i,boundaryGap:te,...(o?T:S)!=null&&(o?T:S)!==""&&{name:o?T:S,nameLocation:"middle",nameGap:25,nameTextStyle:{color:o?t.axis.y.tickLabelColor:t.axis.x.tickLabelColor}},axisLabel:{show:Y||N!=null,color:t.axis.x.tickLabelColor,formatter:N??void 0},axisLine:Y?{show:!0,lineStyle:{color:t.axis.x.lineColor,width:t.axis.x.lineWidth}}:{show:!1},axisTick:{show:Y&&ne,lineStyle:{color:t.axis.x.tickColor,width:t.axis.x.tickWidth}},splitLine:{show:ae,lineStyle:{color:t.axis.x.splitLineColor,width:t.axis.x.splitLineWidth}}},c={type:"value",...q&&d.length>1&&{min:0,max:100},...(o?S:T)!=null&&(o?S:T)!==""&&{name:o?S:T,nameLocation:"middle",nameGap:40,nameTextStyle:{color:o?t.axis.x.tickLabelColor:t.axis.y.tickLabelColor}},axisLabel:{show:D||J!=null,color:t.axis.y.tickLabelColor,formatter:J??(q&&d.length>1?r=>`${r}%`:void 0)},axisLine:D?{show:!0,lineStyle:{color:t.axis.y.lineColor,width:t.axis.y.lineWidth}}:{show:!1},axisTick:{show:D&&ie,lineStyle:{color:t.axis.y.tickColor,width:t.axis.y.tickWidth}},splitLine:{show:oe,lineStyle:{color:t.axis.y.splitLineColor,width:t.axis.y.splitLineWidth}}},A=o?c:m,f=o?m:c,s=se&&pe?{data:h.filter(r=>"name"in r&&r.name).map(r=>r.name),textStyle:{color:t.legend.textColor,fontSize:t.legend.fontSize},backgroundColor:t.legend.backgroundColor}:void 0,p=Array.isArray(a)&&a[0]===4&&a[1]===4&&a[2]===0&&a[3]===0,b=o?p?[0,4,4,0]:Array.isArray(a)?a:[0,a,a,0]:Array.isArray(a)?a:[a,a,a,a],H=w!==void 0&&w!==!1||q&&d.length>1,B=L!=null,Z=I!=null,K=d.length===1,fe=o?{start:"insideLeft",middle:"inside",end:"insideRight"}:{start:"insideLeft",middle:"inside",end:"insideRight"},he=o?{start:"right",end:"left"}:{start:"top",end:"bottom"},Ie=(r,y,l)=>{const G=typeof W=="function"?W(r,y,l):W;return fe[G]??"insideLeft"},ge=(r,y,l)=>{const G=typeof C=="function"?C(r,y,l):C;return he[G]??(o?"right":"top")},Re=typeof W=="function"?void 0:fe[W]??"insideLeft",ye=typeof C=="function"?void 0:he[C]??(o?"right":"top"),M=d.map((r,y)=>{const l=t.series[y%t.series.length].color,G=y===d.length-1,U=H&&!G?[0,0,0,0]:b,Ce=d.length===1,ve=Ce&&j!=null&&j>=0&&j<r.data.length,ke=re??l,we=Ce&&V!=null,qe={color:l,borderRadius:U},je=ve?r.data.map((n,O)=>{const R=n[1];if(O===j)return{value:R,itemStyle:{color:ke,borderColor:ke,borderWidth:2,borderType:"dashed",borderRadius:U}};const F=V?V(R,O):{};return{value:R,itemStyle:{...qe,...F}}}):we?r.data.map((n,O)=>{const R=n[1],F=V(R,O);return{value:R,itemStyle:{...qe,...F}}}):r.data.map(n=>n[1]),x={};B&&K&&L?(x.show=!0,x.position=typeof W=="function"?n=>Ie(n.value,n.dataIndex,e[n.dataIndex]):Re,x.color="#fff",x.formatter=n=>L(n.value,n.dataIndex,e[n.dataIndex])):Z&&K&&I&&!(B&&L)&&(x.show=!0,x.position=typeof C=="function"?n=>ge(n.value,n.dataIndex,e[n.dataIndex]):ye,x.formatter=n=>I(n.value,n.dataIndex,e[n.dataIndex]));const X={type:"bar",data:je,itemStyle:ve||we?void 0:{color:l,borderRadius:U},emphasis:$?{focus:"self",itemStyle:{color:l,borderColor:"#fff",borderWidth:1}}:{focus:"none"}};return Object.keys(x).length>0&&(X.label=x),r.name&&(X.name=r.name),w!==void 0&&w!==!1?X.stack=typeof w=="string"?w:"total":q&&d.length>1&&(X.stack="total"),X});if(B&&Z&&K&&M.length>0){const y={type:"bar",data:M[0].data,barGap:"-100%",itemStyle:{color:"transparent",borderColor:"transparent"},label:{show:!0,position:typeof C=="function"?l=>ge(l.value,l.dataIndex,e[l.dataIndex]):ye,color:((xe=t.axis.x)==null?void 0:xe.tickLabelColor)??"#333",formatter:l=>I(l.value,l.dataIndex,e[l.dataIndex])},emphasis:{focus:"none"},tooltip:{show:!1}};M.push(y)}const Q={tooltip:g,xAxis:A,yAxis:f,series:M};return s&&(Q.legend=s),P&&(Q.grid=P),Q},[t,h,d,te,a,o,w,q,j,re,W,L,C,I,V,Y,ne,D,ie,ae,oe,P,se,pe,$,N,J,E,S,T]);return v.useEffect(()=>{let e;if(_.current)try{e=De(_.current,"light",{width:z,height:ee}),e.setOption(ce);const u=i=>{const g=de.current;if(typeof g!="function"||i.componentType!=="series"||i.seriesType!=="bar")return;let m=i.seriesIndex;const c=i.dataIndex;if(typeof m!="number"||typeof c!="number"||c<0)return;const{displaySeries:A,labelOverlayDuplicate:f}=me.current;f&&m===1&&(m=0);const s=A[m];if(!(s!=null&&s.data)||!Array.isArray(s.data))return;const p=s.data[c];if(p===void 0)return;const b=s.name!=null&&s.name!==""?String(s.name):`Series ${m+1}`;if(!Array.isArray(p)||p.length<2)return;const H=p[0],B=Number(p[1]);g({seriesIndex:m,dataIndex:c,seriesName:b,x:H,y:B})};e.on("click",u)}catch(u){console.warn("Chart initialization error:",u)}return()=>{if(e)try{e.dispose()}catch(u){console.warn("Chart disposal error:",u)}}},[ce,z,ee]),Me.createElement(Ee,{ref:_,useRNGH:!0})},_e=Ve(Xe(We)),et=Object.assign(_e,{displayName:"ColumnChart"});We.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{width:{required:!1,tsType:{name:"number"},description:`Width of the chart in pixels.
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
@default false (area/line/scatter); true (bar)`,defaultValue:{value:"true",computed:!1}},xAxisTicks:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:`Custom X-axis tick values (numbers only). When provided, used as the x-axis data; labels are
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
| Array<{ name?: string; data: [string | number, number][] }>`,elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"Array",elements:[{name:"tuple",raw:"[string | number, number]",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},{name:"number"}]}],raw:"[string | number, number][]"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name?: string; data: number[] }",signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"data",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}}]}}],raw:"Array<{ name?: string; data: number[] }>"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name?: string; data: [string | number, number][] }",signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"data",value:{name:"Array",elements:[{name:"tuple",raw:"[string | number, number]",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},{name:"number"}]}],raw:"[string | number, number][]",required:!0}}]}}],raw:"Array<{ name?: string; data: [string | number, number][] }>"}]},description:"Chart data. Same shape as area: single series, with labels, or multiple named series."},cornerRadius:{required:!1,tsType:{name:"union",raw:"number | [number, number, number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"},{name:"number"}]}]},description:`Bar corner radius: number (all corners) or [topLeft, topRight, bottomRight, bottomLeft].
@default [4, 4, 0, 0]`,defaultValue:{value:"[4, 4, 0, 0]",computed:!1}},horizontal:{required:!1,tsType:{name:"boolean"},description:`When true, bars are horizontal (categories on Y-axis, values on X-axis).
Bar chart is the horizontal orientation of column chart.
@default false`,defaultValue:{value:"false",computed:!1}},stack:{required:!1,tsType:{name:"union",raw:"string | false",elements:[{name:"string"},{name:"literal",value:"false"}]},description:"Stack ID for stacking multiple series."},stackNormalize:{required:!1,tsType:{name:"boolean"},description:`When true with stack, show stacked bars as percentages (0–100%).
@default false`,defaultValue:{value:"false",computed:!1}},activeIndex:{required:!1,tsType:{name:"number"},description:`Zero-based index of the bar to highlight (active state). Only applies to single series.
The active bar uses activeColor and a dashed border.`},activeColor:{required:!1,tsType:{name:"string"},description:`Color for the active bar when activeIndex is set.
@default darker shade of series color`},barInsideLabelPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'middle' | 'end' | ((value: number, index: number, category?: string) => 'start' | 'middle' | 'end')",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'end'"},{name:"unknown"}]},description:`Position of the label inside the bar.
@default 'start'`,defaultValue:{value:"'start'",computed:!1}},barInsideLabelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number, index: number, category?: string) => string",signature:{arguments:[{type:{name:"number"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"string"},name:"category"}],return:{name:"string"}}},description:`Formatter for the label inside the bar.
@default undefined`},barOutsideLabelPosition:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | ((value: number, index: number, category?: string) => 'start' | 'end')",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"unknown"}]},description:`Position of the label outside the bar.
@default 'start'`,defaultValue:{value:"'start'",computed:!1}},barOutsideLabelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number, index: number, category?: string) => string",signature:{arguments:[{type:{name:"number"},name:"value"},{type:{name:"number"},name:"index"},{type:{name:"string"},name:"category"}],return:{name:"string"}}},description:`Formatter for the label outside the bar.
@default undefined`},itemStyle:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number, index: number) => BarItemStyle",signature:{arguments:[{type:{name:"number"},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"BarItemStyle"}}},description:`Per-bar item style override. When provided for single series, called for each bar with (value, index).
Returned object is merged over the base itemStyle (e.g. color, borderColor, borderRadius).`}}};export{et as C};
