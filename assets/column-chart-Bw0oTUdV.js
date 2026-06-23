import{w as ut,u as dt,c as mt,a as ct,b as pt,i as ft,V as ht,S as gt}from"./install-D_wEXfzl.js";import{r as p,R as $e}from"./iframe-DQBbESXd.js";import{v as yt,x as bt,c as Ue,g as xt}from"./axis-B8VaOuT_.js";import{u as vt}from"./use-axis-tooltip-I7UAJfpW.js";import{c as Ct}from"./axis-tooltip-presets-CGVD2u9r.js";import{i as kt,e as wt,m as qt}from"./echarts-legend-layout-B14L7phv.js";import{i as Wt}from"./common-WjgByzXx.js";import{i as St}from"./install-Bq1Dc6dC.js";import{i as Tt}from"./install-VB-o03U1.js";dt([Wt,St,kt,mt,Tt]);const At=[4,4,0,0];function Lt(b){return typeof b=="number"?b:Array.isArray(b)?b.join(","):"4,4,0,0"}const He=({data:b,width:M=220,height:B=350,boundaryGap:xe=!0,cornerRadius:s=At,horizontal:r=!1,stack:S,stackNormalize:T=!1,activeIndex:V,activeColor:ve,barInsideLabelPosition:A="start",barInsideLabelFormatter:L,barOutsideLabelPosition:q="start",barOutsideLabelFormatter:R,itemStyle:j,showXAxis:Z=!0,showXAxisTicks:K=!0,showYAxis:Q=!0,showYAxisTicks:z=!0,showXAxisSplitLines:ee=!0,showYAxisSplitLines:te=!0,grid:Ce,showLegend:re=!0,legendPosition:ne="bottom",showHighlighter:ke=!1,tooltip:E="card",xAxisTickLabelFormatter:ie,yAxisTickLabelFormatter:ae,xAxisLabel:oe,yAxisLabel:se,minX:O,maxX:P,intervalX:N,minY:Y,maxY:F,intervalY:_,onSelect:we,renderTooltip:$,...qe})=>{const{theme:f}=pt(qe.theme,qe.colors),le=p.useRef(null),We=p.useRef(we);We.current=we;const ue=p.useRef({displaySeries:[],categoryAxisData:[],labelOverlayDuplicate:!1,categoryAxisIsY:!1}),Se=p.useRef(f.series);Se.current=f.series;const Te=$!=null||E!=="none",Je=p.useMemo(()=>$??(E==="none"?()=>null:Ct(E)),[$,E]),{attachAxisTooltipListeners:Ae,renderAxisTooltipOverlay:Ze}=vt({active:Te,renderTooltip:Je,contextRef:ue,themeSeriesRef:Se,width:M,height:B}),x=p.useMemo(()=>{let e=[];if(!Array.isArray(b)||b.length===0)return e;const g=b[0];return typeof g=="number"?e=[{name:"Series 1",data:b.map((t,a)=>[String(a),t])}]:Array.isArray(g)&&g.length===2?e=[{name:"Series 1",data:b}]:e=JSON.parse(JSON.stringify(b)).filter(t=>t.data&&t.data.length>0).map((t,a)=>(typeof t.data[0]=="number"&&(t.data=t.data.map((m,o)=>[String(o),m])),{name:t.name||"Series "+(a+1),data:[...t.data]})),e},[b]),de=p.useMemo(()=>x.some(e=>"name"in e&&e.name),[x]),d=p.useMemo(()=>{var g,t;if(!T||x.length<=1)return x;const e=((t=(g=x[0])==null?void 0:g.data)==null?void 0:t.length)??0;return e===0?x:x.map(a=>{const v=a.data,m=new Array(e).fill(0);x.forEach(c=>{("data"in c?c.data:[]).forEach((l,y)=>{y<e&&(m[y]+=typeof l=="number"?l:l[1])})});const o=v.map((c,C)=>{const l=typeof c=="number"?c:c[1],y=m[C]||1;return y>0?l/y*100:0});return{name:a.name,data:v.map((c,C)=>[c[0],o[C]])}})},[x,T]),Le=p.useMemo(()=>yt({minY:Y,maxY:F,intervalY:_}),[Y,F,_]),Re=p.useMemo(()=>bt({minX:O,maxX:P,intervalX:N}),[O,P,N]),h=p.useMemo(()=>r?Ue({minX:Y,maxX:F,intervalX:_}):Ue({minX:O,maxX:P,intervalX:N}),[r,O,P,N,Y,F,_]),Ke=L!=null,Qe=R!=null,ze=d.length===1,et=Ke&&Qe&&ze,me=p.useMemo(()=>{var t;const e=(((t=d[0])==null?void 0:t.data)??[]).map(a=>String(a[0])),g=d.flatMap(a=>a.data.map(v=>v[1]));return e.length>0?e:xt(g).map(String)},[d]);ue.current={displaySeries:d,categoryAxisData:me,labelOverlayDuplicate:et,categoryAxisIsY:r};const Ie=p.useMemo(()=>{var Ee,Oe;const e=(((Ee=d[0])==null?void 0:Ee.data)??[]).map(i=>String(i[0])),g=me,t=r?Q:Z,a=r?z:K,v=r?te:ee,m=r?ae:ie,o=r?f.axis.y:f.axis.x,c=r?se:oe,C=r?Z:Q,l=r?K:z,y=r?ee:te,U=r?ie:ae,k=r?f.axis.x:f.axis.y,X=r?oe:se,ce={type:"category",data:g,boundaryGap:xe,...(h==null?void 0:h.min)!==void 0&&{min:h.min},...(h==null?void 0:h.max)!==void 0&&{max:h.max},...c!=null&&c!==""&&{name:c,nameLocation:"middle",nameGap:25,nameTextStyle:{color:o.tickLabelColor}},axisLabel:{show:t||m!=null,color:o.tickLabelColor,formatter:m??void 0,...(h==null?void 0:h.axisLabelInterval)!==void 0?{interval:h.axisLabelInterval}:{}},axisLine:t?{show:!0,lineStyle:{color:o.lineColor,width:o.lineWidth}}:{show:!1},axisTick:{show:t&&a,lineStyle:{color:o.tickColor,width:o.tickWidth}},splitLine:{show:v,lineStyle:{color:o.splitLineColor,width:o.splitLineWidth}}},Ve={type:"value",...T&&d.length>1?{min:0,max:100}:r?Re??{}:Le??{},...X!=null&&X!==""&&{name:X,nameLocation:"middle",nameGap:40,nameTextStyle:{color:k.tickLabelColor}},axisLabel:{show:C||U!=null,color:k.tickLabelColor,formatter:U??(T&&d.length>1?i=>`${i}%`:void 0)},axisLine:C?{show:!0,lineStyle:{color:k.lineColor,width:k.lineWidth}}:{show:!1},axisTick:{show:C&&l,lineStyle:{color:k.tickColor,width:k.tickWidth}},splitLine:{show:y,lineStyle:{color:k.splitLineColor,width:k.splitLineWidth}}},tt=r?Ve:ce,rt=r?ce:Ve,je=re&&de?{data:x.filter(i=>"name"in i&&i.name).map(i=>i.name),...wt(ne),textStyle:{color:f.legend.textColor,fontSize:f.legend.fontSize},backgroundColor:f.legend.backgroundColor}:void 0,nt=Array.isArray(s)&&s[0]===4&&s[1]===4&&s[2]===0&&s[3]===0,it=r?nt?[0,4,4,0]:Array.isArray(s)?s:[0,s,s,0]:Array.isArray(s)?s:[s,s,s,s],at=S!==void 0&&S!==!1||T&&d.length>1,pe=L!=null,Xe=R!=null,fe=d.length===1,De=r?{start:"insideLeft",middle:"inside",end:"insideRight"}:{start:"insideLeft",middle:"inside",end:"insideRight"},Ge=r?{start:"right",end:"left"}:{start:"top",end:"bottom"},ot=(i,W,u)=>{const D=typeof A=="function"?A(i,W,u):A;return De[D]??"insideLeft"},Me=(i,W,u)=>{const D=typeof q=="function"?q(i,W,u):q;return Ge[D]??(r?"right":"top")},st=typeof A=="function"?void 0:De[A]??"insideLeft",Be=typeof q=="function"?void 0:Ge[q]??(r?"right":"top"),H=d.map((i,W)=>{const u=f.series[W%f.series.length].color,D=W===d.length-1,ye=at&&!D?[0,0,0,0]:it,Pe=d.length===1,Ne=Pe&&V!=null&&V>=0&&V<i.data.length,Ye=ve??u,Fe=Pe&&j!=null,_e={color:u,borderRadius:ye},lt=Ne?i.data.map((n,J)=>{const I=n[1];if(J===V)return{value:I,itemStyle:{color:Ye,borderColor:Ye,borderWidth:2,borderType:"dashed",borderRadius:ye}};const be=j?j(I,J):{};return{value:I,itemStyle:{..._e,...be}}}):Fe?i.data.map((n,J)=>{const I=n[1],be=j(I,J);return{value:I,itemStyle:{..._e,...be}}}):i.data.map(n=>n[1]),w={};pe&&fe&&L?(w.show=!0,w.position=typeof A=="function"?n=>ot(n.value,n.dataIndex,e[n.dataIndex]):st,w.color="#fff",w.formatter=n=>L(n.value,n.dataIndex,e[n.dataIndex])):Xe&&fe&&R&&!(pe&&L)&&(w.show=!0,w.position=typeof q=="function"?n=>Me(n.value,n.dataIndex,e[n.dataIndex]):Be,w.formatter=n=>R(n.value,n.dataIndex,e[n.dataIndex]));const G={type:"bar",data:lt,itemStyle:Ne||Fe?void 0:{color:u,borderRadius:ye},emphasis:ke?{focus:"self",itemStyle:{color:u,borderColor:"#fff",borderWidth:1}}:{focus:"none"}};return Object.keys(w).length>0&&(G.label=w),i.name&&(G.name=i.name),S!==void 0&&S!==!1?G.stack=typeof S=="string"?S:"total":T&&d.length>1&&(G.stack="total"),G});if(pe&&Xe&&fe&&H.length>0){const W={type:"bar",data:H[0].data,barGap:"-100%",itemStyle:{color:"transparent",borderColor:"transparent"},label:{show:!0,position:typeof q=="function"?u=>Me(u.value,u.dataIndex,e[u.dataIndex]):Be,color:((Oe=f.axis.x)==null?void 0:Oe.tickLabelColor)??"#333",formatter:u=>R(u.value,u.dataIndex,e[u.dataIndex])},emphasis:{focus:"none"},tooltip:{show:!1}};H.push(W)}const he={xAxis:tt,yAxis:rt,series:H,axisPointer:{show:!0,type:"line",snap:!0,lineStyle:{type:"solid",width:1,color:"#00000000",show:!1},label:{show:!1}}};je&&(he.legend=je);const ge=qt(Ce,ne,re,de);return ge!==void 0&&Object.keys(ge).length>0&&(he.grid=ge),he},[f,x,d,xe,Lt(s),r,S,T,V,ve,A,L,q,R,j,Z,K,Q,z,ee,te,Ce,re,ne,de,ke,Te,ie,ae,oe,se,me,Le,h,Re]);return p.useEffect(()=>{let e,g=()=>{};if(le.current)try{e=ft(le.current,"light",{width:M,height:B}),e.setOption(Ie),g=Ae(e);const t=a=>{const v=We.current;if(typeof v!="function"||a.componentType!=="series"||a.seriesType!=="bar")return;let m=a.seriesIndex;const o=a.dataIndex;if(typeof m!="number"||typeof o!="number"||o<0)return;const{displaySeries:c,labelOverlayDuplicate:C}=ue.current;C&&m===1&&(m=0);const l=c[m];if(!(l!=null&&l.data)||!Array.isArray(l.data))return;const y=l.data[o];if(y===void 0)return;const U=l.name!=null&&l.name!==""?String(l.name):`Series ${m+1}`;if(!Array.isArray(y)||y.length<2)return;const k=y[0],X=Number(y[1]);v({seriesIndex:m,dataIndex:o,seriesName:U,x:k,y:X})};e.on("click",t)}catch(t){console.warn("Chart initialization error:",t)}return()=>{if(g(),e)try{e.dispose()}catch(t){console.warn("Chart disposal error:",t)}}},[Ie,M,B,Ae]),$e.createElement(ht,{style:{width:M,height:B,position:"relative"}},$e.createElement(gt,{ref:le,useRNGH:!0}),Ze())},Rt=ut(ct(He)),Nt=Object.assign(Rt,{displayName:"ColumnChart"});He.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{width:{required:!1,tsType:{name:"number"},description:`Width of the chart in pixels.
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
Returned object is merged over the base itemStyle (e.g. color, borderColor, borderRadius).`}}};export{Nt as C};
