import{w as Ke,u as Qe,c as ze,a as et,b as tt,i as rt,V as nt,S as it}from"./install-NEgcrzy7.js";import{r as p,R as Me}from"./iframe-7fGkfOWr.js";import{v as at,x as ot,g as st}from"./cartesian-CLDRzb7E.js";import{u as lt}from"./use-axis-tooltip-Cl80mEW_.js";import{c as ut}from"./axis-tooltip-presets-_sGM-lSD.js";import{i as dt,e as mt,m as ct}from"./echarts-legend-layout-Do6GLXQv.js";import{i as pt}from"./common-fSim-PaJ.js";import{i as ft}from"./install-Bnl78vYZ.js";import{i as ht}from"./install-j5bgd6PW.js";Qe([pt,ft,dt,ze,ht]);const gt=[4,4,0,0];function yt(f){return typeof f=="number"?f:Array.isArray(f)?f.join(","):"4,4,0,0"}const Oe=({data:f,width:D=220,height:G=350,boundaryGap:le=!0,cornerRadius:o=gt,horizontal:a=!1,stack:q,stackNormalize:W=!1,activeIndex:V,activeColor:ue,barInsideLabelPosition:S="start",barInsideLabelFormatter:L,barOutsideLabelPosition:k="start",barOutsideLabelFormatter:R,itemStyle:X,showXAxis:E=!0,showXAxisTicks:de=!0,showYAxis:M=!0,showYAxisTicks:me=!0,showXAxisSplitLines:ce=!0,showYAxisSplitLines:pe=!0,grid:fe,showLegend:U=!0,legendPosition:H="bottom",showHighlighter:he=!1,tooltip:O="card",xAxisTickLabelFormatter:J,yAxisTickLabelFormatter:Z,xAxisLabel:T,yAxisLabel:A,minX:ge,maxX:ye,intervalX:be,minY:xe,maxY:ve,intervalY:Ce,onSelect:ke,renderTooltip:P,...we})=>{const{theme:t}=tt(we.theme,we.colors),K=p.useRef(null),qe=p.useRef(ke);qe.current=ke;const Q=p.useRef({displaySeries:[],categoryAxisData:[],labelOverlayDuplicate:!1,categoryAxisIsY:!1}),We=p.useRef(t.series);We.current=t.series;const Se=P!=null||O!=="none",Pe=p.useMemo(()=>P??(O==="none"?()=>null:ut(O)),[P,O]),{attachAxisTooltipListeners:Te,renderAxisTooltipOverlay:Ne}=lt({active:Se,renderTooltip:Pe,contextRef:Q,themeSeriesRef:We,width:D,height:G}),y=p.useMemo(()=>{let e=[];if(!Array.isArray(f)||f.length===0)return e;const h=f[0];return typeof h=="number"?e=[{name:"Series 1",data:f.map((r,s)=>[String(s),r])}]:Array.isArray(h)&&h.length===2?e=[{name:"Series 1",data:f}]:e=JSON.parse(JSON.stringify(f)).filter(r=>r.data&&r.data.length>0).map((r,s)=>(typeof r.data[0]=="number"&&(r.data=r.data.map((m,b)=>[String(b),m])),{name:r.name||"Series "+(s+1),data:[...r.data]})),e},[f]),z=p.useMemo(()=>y.some(e=>"name"in e&&e.name),[y]),d=p.useMemo(()=>{var h,r;if(!W||y.length<=1)return y;const e=((r=(h=y[0])==null?void 0:h.data)==null?void 0:r.length)??0;return e===0?y:y.map(s=>{const x=s.data,m=new Array(e).fill(0);y.forEach(g=>{("data"in g?g.data:[]).forEach((l,c)=>{c<e&&(m[c]+=typeof l=="number"?l:l[1])})});const b=x.map((g,v)=>{const l=typeof g=="number"?g:g[1],c=m[v]||1;return c>0?l/c*100:0});return{name:s.name,data:x.map((g,v)=>[g[0],b[v]])}})},[y,W]),ee=p.useMemo(()=>at({minY:xe,maxY:ve,intervalY:Ce}),[xe,ve,Ce]),te=p.useMemo(()=>ot({minX:ge,maxX:ye,intervalX:be}),[ge,ye,be]),_e=L!=null,$e=R!=null,Fe=d.length===1,Ue=_e&&$e&&Fe,re=p.useMemo(()=>{var r;const e=(((r=d[0])==null?void 0:r.data)??[]).map(s=>String(s[0])),h=d.flatMap(s=>s.data.map(x=>x[1]));return e.length>0?e:st(h).map(String)},[d]);Q.current={displaySeries:d,categoryAxisData:re,labelOverlayDuplicate:Ue,categoryAxisIsY:a};const Ae=p.useMemo(()=>{var Xe,je;const e=(((Xe=d[0])==null?void 0:Xe.data)??[]).map(i=>String(i[0])),r={type:"category",data:re,boundaryGap:le,...a?{}:te??{},...(a?A:T)!=null&&(a?A:T)!==""&&{name:a?A:T,nameLocation:"middle",nameGap:25,nameTextStyle:{color:a?t.axis.y.tickLabelColor:t.axis.x.tickLabelColor}},axisLabel:{show:E||J!=null,color:t.axis.x.tickLabelColor,formatter:J??void 0},axisLine:E?{show:!0,lineStyle:{color:t.axis.x.lineColor,width:t.axis.x.lineWidth}}:{show:!1},axisTick:{show:E&&de,lineStyle:{color:t.axis.x.tickColor,width:t.axis.x.tickWidth}},splitLine:{show:ce,lineStyle:{color:t.axis.x.splitLineColor,width:t.axis.x.splitLineWidth}}},m={type:"value",...W&&d.length>1?{min:0,max:100}:a?{...ee??{},...te??{}}:ee??{},...(a?T:A)!=null&&(a?T:A)!==""&&{name:a?T:A,nameLocation:"middle",nameGap:40,nameTextStyle:{color:a?t.axis.x.tickLabelColor:t.axis.y.tickLabelColor}},axisLabel:{show:M||Z!=null,color:t.axis.y.tickLabelColor,formatter:Z??(W&&d.length>1?i=>`${i}%`:void 0)},axisLine:M?{show:!0,lineStyle:{color:t.axis.y.lineColor,width:t.axis.y.lineWidth}}:{show:!1},axisTick:{show:M&&me,lineStyle:{color:t.axis.y.tickColor,width:t.axis.y.tickWidth}},splitLine:{show:pe,lineStyle:{color:t.axis.y.splitLineColor,width:t.axis.y.splitLineWidth}}},b=a?m:r,g=a?r:m,v=U&&z?{data:y.filter(i=>"name"in i&&i.name).map(i=>i.name),...mt(H),textStyle:{color:t.legend.textColor,fontSize:t.legend.fontSize},backgroundColor:t.legend.backgroundColor}:void 0,l=Array.isArray(o)&&o[0]===4&&o[1]===4&&o[2]===0&&o[3]===0,c=a?l?[0,4,4,0]:Array.isArray(o)?o:[0,o,o,0]:Array.isArray(o)?o:[o,o,o,o],ne=q!==void 0&&q!==!1||W&&d.length>1,j=L!=null,N=R!=null,_=d.length===1,Le=a?{start:"insideLeft",middle:"inside",end:"insideRight"}:{start:"insideLeft",middle:"inside",end:"insideRight"},Re=a?{start:"right",end:"left"}:{start:"top",end:"bottom"},He=(i,w,u)=>{const B=typeof S=="function"?S(i,w,u):S;return Le[B]??"insideLeft"},Ie=(i,w,u)=>{const B=typeof k=="function"?k(i,w,u):k;return Re[B]??(a?"right":"top")},Je=typeof S=="function"?void 0:Le[S]??"insideLeft",Ve=typeof k=="function"?void 0:Re[k]??(a?"right":"top"),$=d.map((i,w)=>{const u=t.series[w%t.series.length].color,B=w===d.length-1,oe=ne&&!B?[0,0,0,0]:c,Be=d.length===1,Ye=Be&&V!=null&&V>=0&&V<i.data.length,De=ue??u,Ge=Be&&X!=null,Ee={color:u,borderRadius:oe},Ze=Ye?i.data.map((n,F)=>{const I=n[1];if(F===V)return{value:I,itemStyle:{color:De,borderColor:De,borderWidth:2,borderType:"dashed",borderRadius:oe}};const se=X?X(I,F):{};return{value:I,itemStyle:{...Ee,...se}}}):Ge?i.data.map((n,F)=>{const I=n[1],se=X(I,F);return{value:I,itemStyle:{...Ee,...se}}}):i.data.map(n=>n[1]),C={};j&&_&&L?(C.show=!0,C.position=typeof S=="function"?n=>He(n.value,n.dataIndex,e[n.dataIndex]):Je,C.color="#fff",C.formatter=n=>L(n.value,n.dataIndex,e[n.dataIndex])):N&&_&&R&&!(j&&L)&&(C.show=!0,C.position=typeof k=="function"?n=>Ie(n.value,n.dataIndex,e[n.dataIndex]):Ve,C.formatter=n=>R(n.value,n.dataIndex,e[n.dataIndex]));const Y={type:"bar",data:Ze,itemStyle:Ye||Ge?void 0:{color:u,borderRadius:oe},emphasis:he?{focus:"self",itemStyle:{color:u,borderColor:"#fff",borderWidth:1}}:{focus:"none"}};return Object.keys(C).length>0&&(Y.label=C),i.name&&(Y.name=i.name),q!==void 0&&q!==!1?Y.stack=typeof q=="string"?q:"total":W&&d.length>1&&(Y.stack="total"),Y});if(j&&N&&_&&$.length>0){const w={type:"bar",data:$[0].data,barGap:"-100%",itemStyle:{color:"transparent",borderColor:"transparent"},label:{show:!0,position:typeof k=="function"?u=>Ie(u.value,u.dataIndex,e[u.dataIndex]):Ve,color:((je=t.axis.x)==null?void 0:je.tickLabelColor)??"#333",formatter:u=>R(u.value,u.dataIndex,e[u.dataIndex])},emphasis:{focus:"none"},tooltip:{show:!1}};$.push(w)}const ie={xAxis:b,yAxis:g,series:$,axisPointer:{show:!0,type:"line",snap:!0,lineStyle:{type:"solid",width:1,color:"#00000000",show:!1},label:{show:!1}}};v&&(ie.legend=v);const ae=ct(fe,H,U,z);return ae!==void 0&&Object.keys(ae).length>0&&(ie.grid=ae),ie},[t,y,d,le,yt(o),a,q,W,V,ue,S,L,k,R,X,E,de,M,me,ce,pe,fe,U,H,z,he,Se,J,Z,T,A,re,ee,te]);return p.useEffect(()=>{let e,h=()=>{};if(K.current)try{e=rt(K.current,"light",{width:D,height:G}),e.setOption(Ae),h=Te(e);const r=s=>{const x=qe.current;if(typeof x!="function"||s.componentType!=="series"||s.seriesType!=="bar")return;let m=s.seriesIndex;const b=s.dataIndex;if(typeof m!="number"||typeof b!="number"||b<0)return;const{displaySeries:g,labelOverlayDuplicate:v}=Q.current;v&&m===1&&(m=0);const l=g[m];if(!(l!=null&&l.data)||!Array.isArray(l.data))return;const c=l.data[b];if(c===void 0)return;const ne=l.name!=null&&l.name!==""?String(l.name):`Series ${m+1}`;if(!Array.isArray(c)||c.length<2)return;const j=c[0],N=Number(c[1]);x({seriesIndex:m,dataIndex:b,seriesName:ne,x:j,y:N})};e.on("click",r)}catch(r){console.warn("Chart initialization error:",r)}return()=>{if(h(),e)try{e.dispose()}catch(r){console.warn("Chart disposal error:",r)}}},[Ae,D,G,Te]),Me.createElement(nt,{style:{width:D,height:G,position:"relative"}},Me.createElement(it,{ref:K,useRNGH:!0}),Ne())},bt=Ke(et(Oe)),At=Object.assign(bt,{displayName:"ColumnChart"});Oe.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{width:{required:!1,tsType:{name:"number"},description:`Width of the chart in pixels.
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
@default false (area/line/scatter); true (bar)`,defaultValue:{value:"true",computed:!1}},minX:{required:!1,tsType:{name:"number"},description:"X-axis minimum when set. Applies to the chart’s **X** axis (category or value, depending on the chart).\nFor horizontal column/bar, the **value** (bar length) scale is on **X** — use `minX` / `maxX` / `intervalX` for that scale.\nWhen omitted, the minimum is derived from the data or chosen automatically."},maxX:{required:!1,tsType:{name:"number"},description:"X-axis maximum when set. See {@link minX} for layout notes. When omitted, the maximum is derived from the data or chosen automatically."},intervalX:{required:!1,tsType:{name:"number"},description:"X-axis tick interval when set. See {@link minX} for layout notes. When omitted, the tick step is chosen automatically."},minY:{required:!1,tsType:{name:"number"},description:`Y-axis (value scale) minimum when set. Applies to the chart’s **Y** axis.
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
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},showHighlighter:{required:!1,tsType:{name:"boolean"},description:"Whether **emphasis** (hover highlight) is applied while the axis pointer / tooltip is near the series.\nColumn and bar charts default this to `false`; area defaults to `true`.",defaultValue:{value:"false",computed:!1}},tooltip:{required:!1,tsType:{name:"union",raw:"ChartTooltipPreset | 'none'",elements:[{name:"union",raw:"'card' | 'compact' | 'kpi' | 'striped'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'kpi'"},{name:"literal",value:"'striped'"}]},{name:"literal",value:"'none'"}]},description:"Built-in axis tooltip preset when `renderTooltip` is omitted (area, line, column, bar). Use `none` to hide the overlay.\nWhen `renderTooltip` is set, it replaces the preset body. The overlay is hidden only when `tooltip` is `none` and `renderTooltip` is omitted.\nScatter and bubble use the same prop for **item** tooltips.\n@default 'card'",defaultValue:{value:"'card'",computed:!1}},xAxisTickLabelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number, index?: number) => string",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Formatter for X-axis tick labels. (value, index?) => string"},yAxisTickLabelFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number, index?: number) => string",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:"Formatter for Y-axis tick labels. (value, index?) => string"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: CartesianChartSelectEvent) => void",signature:{arguments:[{type:{name:"CartesianChartSelectEvent"},name:"event"}],return:{name:"void"}}},description:"Called when the user selects (taps/clicks) a data point on a series (when supported)."},renderTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: AxisTooltipParams) => ReactNode",signature:{arguments:[{type:{name:"AxisTooltipParams"},name:"params"}],return:{name:"ReactNode"}}},description:"Overrides the default React Native axis tooltip body for charts that use the axis tooltip overlay (area, line, column, bar).\nScatter and bubble charts use item tooltip `renderTooltip` on their own props instead.\nTakes precedence over {@link tooltip}."},data:{required:!0,tsType:{name:"union",raw:`| number[]
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
Returned object is merged over the base itemStyle (e.g. color, borderColor, borderRadius).`}}};export{At as C};
