import{w as ve,u as ke,a as Ce,b as we,i as qe,V as We,S as Se,c as Te}from"./install-NEgcrzy7.js";import{u as Ae}from"./use-axis-tooltip-Cl80mEW_.js";import{c as Le}from"./axis-tooltip-presets-_sGM-lSD.js";import{r as u,R as ge}from"./iframe-7fGkfOWr.js";import{v as Re,x as Xe,g as Ve}from"./cartesian-CLDRzb7E.js";import{e as je,m as ze,i as Fe}from"./echarts-legend-layout-Do6GLXQv.js";import{i as Ye}from"./common-fSim-PaJ.js";import{i as Ge}from"./install-Bnl78vYZ.js";import{i as Oe}from"./install-fh8zqSy2.js";ke([Ye,Ge,Fe,Te,Oe]);const ye=({data:h,width:C=220,height:w=350,type:X="default",step:D,boundaryGap:E=!1,stack:x,stackNormalize:g=!1,symbol:q,symbolSize:I,areaOpacity:N=.6,areaFill:V="gradient",showXAxis:W=!0,showXAxisTicks:$=!0,showYAxis:S=!0,showYAxisTicks:H=!0,showXAxisSplitLines:_=!0,showYAxisSplitLines:J=!0,grid:U,showLegend:j=!0,legendPosition:z="bottom",showHighlighter:K=!0,tooltip:T="card",xAxisTickLabelFormatter:F,yAxisTickLabelFormatter:Y,xAxisLabel:A,yAxisLabel:L,minX:Q,maxX:Z,intervalX:ee,minY:te,maxY:re,intervalY:ie,onSelect:ne,renderTooltip:R,...ae})=>{const{theme:e}=we(ae.theme,ae.colors),G=u.useRef(null),oe=u.useRef(ne);oe.current=ne;const O=u.useRef({displaySeries:[],categoryAxisData:[]}),le=u.useRef(e.series);le.current=e.series;const se=R!=null||T!=="none",be=u.useMemo(()=>R??(T==="none"?()=>null:Le(T)),[R,T]),{attachAxisTooltipListeners:ue,renderAxisTooltipOverlay:xe}=Ae({active:se,renderTooltip:be,contextRef:O,themeSeriesRef:le,width:C,height:w}),de=X==="smooth",B=X==="step"?D??"start":D??!1,o=u.useMemo(()=>{let i=[];if(!Array.isArray(h)||h.length===0)return i;const l=h[0];return typeof l=="number"?i=[{name:"Series 1",data:h.map((t,n)=>[String(n),t])}]:Array.isArray(l)&&l.length===2?i=[{name:"Series 1",data:h}]:i=JSON.parse(JSON.stringify(h)).filter(t=>t.data&&t.data.length>0).map((t,n)=>(typeof t.data[0]=="number"&&(t.data=t.data.map((s,r)=>[String(r),s])),{name:t.name||"Series "+(n+1),data:[...t.data]})),i},[h]),P=u.useMemo(()=>o.some(i=>"name"in i&&i.name),[o]),y=u.useMemo(()=>{var l,t;if(!g||o.length<=1)return o;const i=((t=(l=o[0])==null?void 0:l.data)==null?void 0:t.length)??0;return i===0?o:o.map(n=>{const p=n.data,s=new Array(i).fill(0);o.forEach((c,d)=>{("data"in c?c.data:[]).forEach((m,f)=>{f<i&&(s[f]+=m)})});const r=p.map((c,d)=>{const a=s[d]||1;return a>0?c[1]/a*100:0});return"name"in n&&n.name?{name:n.name,data:r}:{data:r}})},[o,g]),me=u.useMemo(()=>Re({minY:te,maxY:re,intervalY:ie}),[te,re,ie]),pe=u.useMemo(()=>Xe({minX:Q,maxX:Z,intervalX:ee}),[Q,Z,ee]),M=u.useMemo(()=>{const i=o.map(l=>l.data.map(t=>t[0])).flat();return Ve(i).map(String)},[o]);O.current={displaySeries:y,categoryAxisData:M};const ce=u.useMemo(()=>{const i={type:"category",data:M,...A!=null&&A!==""&&{name:A,nameLocation:"middle",nameGap:25,nameTextStyle:{color:e.axis.x.tickLabelColor}},axisLabel:{show:W||F!=null,color:e.axis.x.tickLabelColor,formatter:F??void 0},axisLine:W?{show:!0,lineStyle:{color:e.axis.x.lineColor,width:e.axis.x.lineWidth}}:{show:!1},axisTick:{show:W&&$,lineStyle:{color:e.axis.x.tickColor,width:e.axis.x.tickWidth}},splitLine:{show:_,lineStyle:{color:e.axis.x.splitLineColor,width:e.axis.x.splitLineWidth}},boundaryGap:E,...pe??{}},l={type:"value",...g&&y.length>1?{min:0,max:100}:me??{},...L!=null&&L!==""&&{name:L,nameLocation:"middle",nameGap:40,nameTextStyle:{color:e.axis.y.tickLabelColor}},axisLabel:{show:S||Y!=null,color:e.axis.y.tickLabelColor,formatter:Y??(g&&y.length>1?r=>`${r}%`:void 0)},axisLine:S?{show:!0,lineStyle:{color:e.axis.y.lineColor,width:e.axis.y.lineWidth}}:{show:!1},axisTick:{show:S&&H,lineStyle:{color:e.axis.y.tickColor,width:e.axis.y.tickWidth}},splitLine:{show:J,lineStyle:{color:e.axis.y.splitLineColor,width:e.axis.y.splitLineWidth}}},t=j&&P?{data:o.filter(r=>"name"in r&&r.name).map(r=>r.name),...je(z),textStyle:{color:e.legend.textColor,fontSize:e.legend.fontSize},backgroundColor:e.legend.backgroundColor}:void 0,n=y.map((r,c)=>{var fe;const d=e.series[c%e.series.length].color,a=((fe=e.series[c])==null?void 0:fe.lineWidth)??e.series[0].lineWidth??2,m=Math.round(N*255).toString(16).padStart(2,"0"),f=d+m,v=d+"00",k=d+"ff",he=V==="gradient"?{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:f},{offset:1,color:v}]}}:V==="transparent"?{color:f}:{color:k},b={data:"data"in r?r.data:[],type:"line",symbol:!q||q==="none"?void 0:q,symbolSize:I||8,areaStyle:he,itemStyle:{color:d},lineStyle:{color:d,width:a},emphasis:K?{focus:"self",scale:!0,symbol:"circle",symbolSize:8,itemStyle:{color:d,borderColor:"#FFFFFF",borderWidth:2}}:{focus:"none",scale:!1,symbolSize:0}};return"name"in r&&r.name&&(b.name=r.name),B!==!1?b.step=B:b.smooth=de,x!==void 0&&x!==!1?b.stack=typeof x=="string"?x:"total":g&&y.length>1&&(b.stack="total"),b}),p={xAxis:i,yAxis:l,series:n,axisPointer:{show:!0,type:"line",snap:!0,lineStyle:{type:"solid",width:1,color:"#00000000",show:!1},label:{show:!1}}};t&&(p.legend=t);const s=ze(U,z,j,P);return s!==void 0&&Object.keys(s).length>0&&(p.grid=s),p},[e,o,M,y,X,de,B,E,x,g,q,I,N,V,W,S,$,H,_,J,U,j,z,P,K,se,F,Y,A,L,me,pe]);return u.useEffect(()=>{let i,l=()=>{};if(G.current)try{i=qe(G.current,"light",{width:C,height:w}),i.setOption(ce),l=ue(i);const t=n=>{const p=oe.current;if(typeof p!="function"||n.componentType!=="series")return;const s=n.seriesIndex,r=n.dataIndex;if(typeof s!="number"||typeof r!="number"||r<0)return;const{displaySeries:c,categoryAxisData:d}=O.current,a=c[s];if(!(a!=null&&a.data)||!Array.isArray(a.data))return;const m=a.data[r];if(m===void 0)return;const f=a.name!=null&&a.name!==""?String(a.name):`Series ${s+1}`;let v,k;if(typeof m=="number")v=d[r]??r,k=m;else if(Array.isArray(m)&&m.length>=2)v=m[0],k=Number(m[1]);else return;p({seriesIndex:s,dataIndex:r,seriesName:f,x:v,y:k})};i.on("click",t)}catch(t){console.warn("Chart initialization error:",t)}return()=>{if(l(),i)try{i.dispose()}catch(t){console.warn("Chart disposal error:",t)}}},[ce,C,w,ue]),ge.createElement(We,{style:{width:C,height:w,position:"relative"}},ge.createElement(Se,{ref:G,useRNGH:!0}),xe())},Be=ve(Ce(ye)),Je=Object.assign(Be,{displayName:"AreaChart"});ye.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{width:{required:!1,tsType:{name:"number"},description:`Width of the chart in pixels.
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
@default false (area/line/scatter); true (bar)`,defaultValue:{value:"false",computed:!1}},minX:{required:!1,tsType:{name:"number"},description:"X-axis minimum when set. Applies to the chart’s **X** axis (category or value, depending on the chart).\nFor horizontal column/bar, the **value** (bar length) scale is on **X** — use `minX` / `maxX` / `intervalX` for that scale.\nWhen omitted, the minimum is derived from the data or chosen automatically."},maxX:{required:!1,tsType:{name:"number"},description:"X-axis maximum when set. See {@link minX} for layout notes. When omitted, the maximum is derived from the data or chosen automatically."},intervalX:{required:!1,tsType:{name:"number"},description:"X-axis tick interval when set. See {@link minX} for layout notes. When omitted, the tick step is chosen automatically."},minY:{required:!1,tsType:{name:"number"},description:`Y-axis (value scale) minimum when set. Applies to the chart’s **Y** axis.
When omitted, the minimum is derived from the data or chosen automatically.`},maxY:{required:!1,tsType:{name:"number"},description:"Y-axis (value scale) maximum when set. When omitted, the maximum is derived from the data or chosen automatically."},intervalY:{required:!1,tsType:{name:"number"},description:"Y-axis (value scale) tick interval when set. When omitted, the tick step is chosen automatically."},showXAxis:{required:!1,tsType:{name:"boolean"},description:`Whether to show the X-axis line and labels.
@default true`,defaultValue:{value:"true",computed:!1}},showXAxisTicks:{required:!1,tsType:{name:"boolean"},description:`Whether to show X-axis tick marks. Only applies when {@link showXAxis} is true.
@default true`,defaultValue:{value:"true",computed:!1}},showYAxis:{required:!1,tsType:{name:"boolean"},description:`Whether to show the Y-axis line and labels.
@default true`,defaultValue:{value:"true",computed:!1}},showYAxisTicks:{required:!1,tsType:{name:"boolean"},description:`Whether to show Y-axis tick marks. Only applies when {@link showYAxis} is true.
@default true`,defaultValue:{value:"true",computed:!1}},showXAxisSplitLines:{required:!1,tsType:{name:"boolean"},description:`Whether to show vertical grid lines (X-axis split lines).
@default true`,defaultValue:{value:"true",computed:!1}},showYAxisSplitLines:{required:!1,tsType:{name:"boolean"},description:`Whether to show horizontal grid lines (Y-axis split lines).
@default true`,defaultValue:{value:"true",computed:!1}},xAxisLabel:{required:!1,tsType:{name:"string"},description:`Label text for the X-axis (displayed along the axis).
@default undefined`},yAxisLabel:{required:!1,tsType:{name:"string"},description:`Label text for the Y-axis (displayed along the axis).
@default undefined`},grid:{required:!1,tsType:{name:"CartesianGrid"},description:"Grid positioning configuration."},showLegend:{required:!1,tsType:{name:"boolean"},description:`Whether to display a legend for named series.
@default true`,defaultValue:{value:"true",computed:!1}},legendPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Legend position. Top and bottom use a horizontal legend that wraps; left and right use a vertical legend.
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},showHighlighter:{required:!1,tsType:{name:"boolean"},description:"Whether **emphasis** (hover highlight) is applied while the axis pointer / tooltip is near the series.\nColumn and bar charts default this to `false`; area defaults to `true`.",defaultValue:{value:"true",computed:!1}},tooltip:{required:!1,tsType:{name:"union",raw:"ChartTooltipPreset | 'none'",elements:[{name:"union",raw:"'card' | 'compact' | 'kpi' | 'striped'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'kpi'"},{name:"literal",value:"'striped'"}]},{name:"literal",value:"'none'"}]},description:"Built-in axis tooltip preset when `renderTooltip` is omitted (area, line, column, bar). Use `none` to hide the overlay.\nWhen `renderTooltip` is set, it replaces the preset body. The overlay is hidden only when `tooltip` is `none` and `renderTooltip` is omitted.\nScatter and bubble use the same prop for **item** tooltips.\n@default 'card'",defaultValue:{value:"'card'",computed:!1}},xAxisTickLabelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number, index?: number) => string",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Formatter for X-axis tick labels. (value, index?) => string"},yAxisTickLabelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number, index?: number) => string",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Formatter for Y-axis tick labels. (value, index?) => string"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: CartesianChartSelectEvent) => void",signature:{arguments:[{type:{name:"CartesianChartSelectEvent"},name:"event"}],return:{name:"void"}}},description:"Called when the user selects (taps/clicks) a data point on a series (when supported)."},renderTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: AxisTooltipParams) => ReactNode",signature:{arguments:[{type:{name:"AxisTooltipParams"},name:"params"}],return:{name:"ReactNode"}}},description:"Overrides the default React Native axis tooltip body for charts that use the axis tooltip overlay (area, line, column, bar).\nScatter and bubble charts use item tooltip `renderTooltip` on their own props instead.\nTakes precedence over {@link tooltip}."},data:{required:!0,tsType:{name:"union",raw:`| number[]
| [string | number, number][]
| Array<{ name?: string; data: number[] }>
| Array<{ name?: string; data: [string | number, number][] }>`,elements:[{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"Array",elements:[{name:"tuple",raw:"[string | number, number]",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},{name:"number"}]}],raw:"[string | number, number][]"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name?: string; data: number[] }",signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"data",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!0}}]}}],raw:"Array<{ name?: string; data: number[] }>"},{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name?: string; data: [string | number, number][] }",signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"data",value:{name:"Array",elements:[{name:"tuple",raw:"[string | number, number]",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},{name:"number"}]}],raw:"[string | number, number][]",required:!0}}]}}],raw:"Array<{ name?: string; data: [string | number, number][] }>"}]},description:"Chart data. Single series (number[]), multiple unnamed (number[][]), or multiple named series."},type:{required:!1,tsType:{name:"union",raw:"'default' | 'smooth' | 'step'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'smooth'"},{name:"literal",value:"'step'"}]},description:`Curve type: 'default' (linear), 'smooth' (Bezier), or 'step'.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"'start' | 'middle' | 'end' | false",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'end'"},{name:"literal",value:"false"}]},description:`Step mode when type="step". 'start' | 'middle' | 'end'.`},stack:{required:!1,tsType:{name:"union",raw:"string | false",elements:[{name:"string"},{name:"literal",value:"false"}]},description:"Stack ID for stacking multiple series. Use false to disable."},stackNormalize:{required:!1,tsType:{name:"boolean"},description:`When true with stack, show stacked values as percentages (0–100%).
@default false`,defaultValue:{value:"false",computed:!1}},symbol:{required:!1,tsType:{name:"union",raw:"'none' | 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | string",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'rect'"},{name:"literal",value:"'roundRect'"},{name:"literal",value:"'triangle'"},{name:"literal",value:"'diamond'"},{name:"literal",value:"'pin'"},{name:"literal",value:"'arrow'"},{name:"string"}]},description:`Symbol type for data points. Set to 'none' to hide.
@default 'none'`},symbolSize:{required:!1,tsType:{name:"union",raw:"number | number[] | ((value: unknown) => number | number[])",elements:[{name:"number"},{name:"Array",elements:[{name:"number"}],raw:"number[]"},{name:"unknown"}]},description:"Size of the symbol. Number, [width, height], or function."},areaOpacity:{required:!1,tsType:{name:"number"},description:`Opacity of the filled area (0-1).
@default 0.6`,defaultValue:{value:"0.6",computed:!1}},areaFill:{required:!1,tsType:{name:"union",raw:"'gradient' | 'transparent' | 'solid'",elements:[{name:"literal",value:"'gradient'"},{name:"literal",value:"'transparent'"},{name:"literal",value:"'solid'"}]},description:`Fill style for the area under the line: 'gradient' | 'transparent' | 'solid'.
@default 'gradient'`,defaultValue:{value:"'gradient'",computed:!1}}}};export{Je as A};
