import{R as g,r as b}from"./iframe-7fGkfOWr.js";import{s as ee,T as Y,w as oe,u as le,c as ae,a as se,b as ue,i as de,V as G,S as ce}from"./install-NEgcrzy7.js";import{T as pe,a as me,b as fe,c as he,C as ge,d as _}from"./use-axis-tooltip-Cl80mEW_.js";import{i as ye,e as J,p as Q}from"./echarts-legend-layout-Do6GLXQv.js";import{i as be,c as te}from"./common-fSim-PaJ.js";import{i as Ce}from"./install-CpjC6Ee1.js";import{l as xe}from"./legend-position-CLb_FM1L.js";function Z(t){if(!Array.isArray(t)||t.length===0)return!1;const e=t[0];return"data"in e&&Array.isArray(e.data)&&"radius"in e&&Array.isArray(e.radius)}ee.create({ring:{fontSize:11,fontWeight:"600",marginBottom:4,textTransform:"uppercase"},title:{fontWeight:"600",fontSize:13,flex:1},line:{fontSize:12,marginTop:2},swatch:{width:8,height:8,borderRadius:4,marginRight:6},swatchPlaceholder:{width:8,height:8,marginRight:6}});function ke(t){const{name:e,value:r,percent:o,color:n,ringName:i}=t;return g.createElement(he,{eyebrow:i!=null&&i!==""?i:void 0,header:{swatchColor:n,title:e,marginBottom:6}},g.createElement(Y,{style:{fontSize:14,fontWeight:"700",color:"#0f172a"}},r," ",g.createElement(Y,{style:{fontWeight:"500",color:"#64748b"}},"(",o.toFixed(1),"%)")))}function ve(t){const{name:e,value:r,percent:o}=t;return g.createElement(fe,{emphasis:e,detail:`${r} (${o.toFixed(1)}%)`,wrap:!0})}function we(t){const{name:e,value:r,percent:o,color:n}=t;return g.createElement(me,{accentColor:n??"#3b82f6",minWidth:140,overline:e,metric:String(r),caption:`${o.toFixed(1)}% of total`})}function We(t){const{name:e,value:r,percent:o,color:n}=t;return g.createElement(pe,{headerSwatch:{color:n??"#64748b",title:e},rows:[{key:"value",leftLabel:"value",right:String(r)},{key:"share",leftLabel:"share",right:`${o.toFixed(1)}%`}]})}function Se(t){switch(t){case"card":return e=>ke(e);case"compact":return e=>ve(e);case"kpi":return e=>we(e);case"striped":return e=>We(e)}throw new Error(`Unknown tooltip preset: ${String(t)}`)}function qe(t,e){if(typeof(e==null?void 0:e.dataIndexInside)=="number"&&!Number.isNaN(e.dataIndexInside))return e.dataIndexInside;if(typeof(e==null?void 0:e.dataIndex)=="number"&&!Number.isNaN(e.dataIndex)){const r=typeof(t==null?void 0:t.indexOfRawIndex)=="function"?t.indexOfRawIndex(e.dataIndex):e.dataIndex;if(typeof r=="number"&&!Number.isNaN(r))return r}return null}function Te(t,e){var c;const r=(c=t.getItemLayout)==null?void 0:c.call(t,e);if(!r||!Number.isFinite(r.cx)||!Number.isFinite(r.cy))return null;const o=Number(r.cx),n=Number(r.cy),i=Number(r.r),s=Number(r.r0??0),l=Number(r.startAngle),a=Number(r.endAngle);if(!Number.isFinite(l)||!Number.isFinite(a))return null;const C=(l+a)/2,u=(s+i)/2;return{x:o+Math.cos(C)*u,y:n+Math.sin(C)*u}}function Ne(t,e,r,o,n){const i=e==null?void 0:e.x,s=e==null?void 0:e.y;return typeof i=="number"&&typeof s=="number"&&!Number.isNaN(i)&&!Number.isNaN(s)?{x:i,y:s}:Te(o,n)}function re(t,e){var n,i;try{const s=typeof t.mapDimension=="function"?t.mapDimension("value"):null;if(s!=null){const l=t.get(s,e),a=Number(l);if(Number.isFinite(a))return a}}catch{}const r=(n=t.get)==null?void 0:n.call(t,0,e),o=Number(r);if(Number.isFinite(o))return o;try{const s=Number((i=t.get)==null?void 0:i.call(t,"value",e));if(Number.isFinite(s))return s}catch{}return NaN}function Pe(t){const e=typeof t.count=="function"?t.count():0;let r=0;for(let o=0;o<e;o++){const n=re(t,o);Number.isFinite(n)&&(r+=n)}return r}function Re(t,e,r,o){var D,F,B,V,z,p,y,f,d,S;if(!t||!e||Array.isArray(e.dataByCoordSys)&&e.dataByCoordSys.length>0)return null;const n=e.seriesIndex;if(typeof n!="number"||n<0)return null;const i=(B=(D=t.getModel)==null?void 0:(F=D.call(t)).getSeriesByIndex)==null?void 0:B.call(F,n),s=(i==null?void 0:i.subType)??((V=i==null?void 0:i.get)==null?void 0:V.call(i,"type"));if(!i||s!=="pie")return null;const l=(z=i.getData)==null?void 0:z.call(i);if(!l)return null;const a=qe(l,e);if(a==null||a<0)return null;const C=Ne(t,e,i,l,a);if(!C)return null;const u=r.normalizedSeries[n],c=(p=u==null?void 0:u.data)==null?void 0:p[a];if(!c)return null;const q=String(((y=l.getName)==null?void 0:y.call(l,a))??c.name??""),W=re(l,a),m=Number.isFinite(W)?W:Number(c.value),x=Pe(l),I=x>0?m/x*100:0;let k;try{const v=(f=l.getItemVisual)==null?void 0:f.call(l,a,"style"),E=v==null?void 0:v.fill;typeof E=="string"&&E!==""&&(k=E)}catch{}if(k==null){const v=Math.max(o.length,1);k=(d=o[a%v])==null?void 0:d.color}const L=(S=i.get)==null?void 0:S.call(i,"name"),T=typeof L=="string"&&L!==""?L:(u==null?void 0:u.name)!=null&&u.name!==""?String(u.name):void 0;return{pointerX:C.x,pointerY:C.y,seriesIndex:n,dataIndex:a,name:q,value:m,percent:I,...typeof k=="string"?{color:k}:{},...T!=null?{ringName:T}:{}}}function Ie(t){const{active:e,renderTooltip:r,contextRef:o,themeSeriesRef:n,width:i,height:s}=t,[l,a]=b.useState(null);b.useEffect(()=>{e||a(null)},[e]);const C=b.useCallback(c=>{if(!e)return()=>{};const q=m=>{var k;const x=o.current;if(!((k=x==null?void 0:x.normalizedSeries)!=null&&k.length)){a(null);return}const I=Re(c,m,x,n.current??[]);a(I)},W=()=>a(null);return c.on("showTip",q),c.on("hideTip",W),()=>{c.off("showTip",q),c.off("hideTip",W)}},[e,o,n]),u=b.useCallback(()=>!e||l==null?null:g.createElement(ge,{width:i,height:s,pointerX:l.pointerX,pointerY:l.pointerY},r(l)),[e,r,l,i,s]);return{attachPieItemTooltipListeners:C,renderPieTooltipOverlay:u}}le([be,ye,ae,Ce]);const ie=({data:t,width:e=220,height:r=350,radius:o="75%",showLegend:n=!0,legendPosition:i="bottom",showLabel:s=!0,labelPosition:l="outside",showLabelLine:a=!0,showHighlighter:C=!0,tooltip:u="card",renderTooltip:c,onSelect:q,...W})=>{const{theme:m}=ue(W.theme,W.colors),x=b.useRef(null),I=b.useRef(q);I.current=q;const k=b.useRef({normalizedSeries:[]}),L=b.useRef(m.series);L.current=m.series;const T=c!=null||u!=="none",D=b.useMemo(()=>c??(u==="none"?()=>null:Se(u)),[c,u]),{attachPieItemTooltipListeners:F,renderPieTooltipOverlay:B}=Ie({active:T,renderTooltip:D,contextRef:k,themeSeriesRef:L,width:e,height:r}),V=b.useMemo(()=>!Array.isArray(t)||t.length===0?[]:Z(t)?t.map(f=>({name:f.name,data:f.data.map(d=>({name:d.name,value:d.value}))})):[{data:t.map(y=>({name:y.name,value:y.value}))}],[t]);k.current={normalizedSeries:V};const z=b.useMemo(()=>{if(!Array.isArray(t)||t.length===0)return{series:[]};const p=m.series.map(h=>h.color),y={color:m.legend.textColor,fontSize:m.legend.fontSize},f=(h,N,A,O)=>{const P=h.reduce((R,w)=>R+w.value,0),U=s?{show:!0,position:l,formatter:R=>{const w=P>0?(R.value/P*100).toFixed(1):"0";return`${R.name}
${w}%`},...y}:{show:!1};return{type:"pie",name:A,radius:(Array.isArray(N),N),...O?{center:O}:{},data:h,label:U,labelLine:{show:s&&(l==="outside"?a:!1),lineStyle:{color:m.legend.textColor}},emphasis:C?{focus:"none",scale:!0,scaleSize:5,itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.2)"}}:{disabled:!0}}};if(Z(t)){const h=t,N=Q(i,n);let A=0;const O=h.map(w=>{const $=w.data.map(j=>{var M;return{name:j.name,value:j.value,itemStyle:(M=j.itemStyle)!=null&&M.color?{color:j.itemStyle.color}:{color:p[A++%p.length]}}});return f($,w.radius,w.name,N)}),P=n?Array.from(new Set(h.flatMap(w=>w.data.map($=>$.name)))):void 0,R={tooltip:T?{trigger:"item",..._()}:{show:!1},series:O};return P!=null&&P.length&&(R.legend={data:P,...J(i),textStyle:y,backgroundColor:m.legend.backgroundColor}),R}const S=t.map((h,N)=>{var A;return{name:h.name,value:h.value,itemStyle:(A=h.itemStyle)!=null&&A.color?{color:h.itemStyle.color}:{color:p[N%p.length]}}}),v=Q(i,n),E=f(S,o,void 0,v),ne=T?{trigger:"item",..._()}:{show:!1},H=n?{data:S.map(h=>h.name),...J(i),textStyle:y,backgroundColor:m.legend.backgroundColor}:void 0,K={tooltip:ne,series:[E]};return H&&(K.legend=H),K},[t,o,n,i,s,l,a,C,T,m]);return b.useEffect(()=>{let p,y=()=>{};if(x.current)try{p=de(x.current,"light",{width:e,height:r}),p.setOption(z),y=F(p);const f=d=>{const S=I.current;if(typeof S!="function"||d.componentType!=="series"||d.seriesType!=="pie"||typeof d.dataIndex!="number"||d.dataIndex<0||d.name==null)return;const v={seriesIndex:d.seriesIndex??0,dataIndex:d.dataIndex,name:String(d.name),value:Number(d.value??0),seriesName:d.seriesName,percent:d.percent};S(v)};p.on("click",f)}catch(f){console.warn("Pie chart initialization error:",f)}return()=>{if(y(),p)try{p.dispose()}catch(f){console.warn("Pie chart disposal error:",f)}}},[z,e,r,F]),g.createElement(G,{style:{width:e,height:r,position:"relative"}},g.createElement(ce,{ref:x,useRNGH:!0}),B())},Le=oe(se(ie),"data"),Ae=Object.assign(Le,{displayName:"PieChart"});ie.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{width:{required:!1,tsType:{name:"number"},description:`Width of the chart in pixels.
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
@default true`,defaultValue:{value:"true",computed:!1}},legendPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Legend position. Top and bottom use a horizontal legend that wraps; left and right use a vertical legend.
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show slice labels (name/value on the chart).
@default true`,defaultValue:{value:"true",computed:!1}},labelPosition:{required:!1,tsType:{name:"union",raw:"'outside' | 'inside' | 'center'",elements:[{name:"literal",value:"'outside'"},{name:"literal",value:"'inside'"},{name:"literal",value:"'center'"}]},description:`Label position: 'outside' | 'inside' | 'center'.
@default 'outside'`,defaultValue:{value:"'outside'",computed:!1}},showLabelLine:{required:!1,tsType:{name:"boolean"},description:`Whether to show label lines (connectors from slice to label).
@default true when labelPosition is 'outside'`,defaultValue:{value:"true",computed:!1}},showHighlighter:{required:!1,tsType:{name:"boolean"},description:`Whether to emphasize (scale/highlight) the hovered slice.
@default true`,defaultValue:{value:"true",computed:!1}},tooltip:{required:!1,tsType:{name:"union",raw:"ChartTooltipPreset | 'none'",elements:[{name:"union",raw:"'card' | 'compact' | 'kpi' | 'striped'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'kpi'"},{name:"literal",value:"'striped'"}]},{name:"literal",value:"'none'"}]},description:"Built-in item tooltip preset when `renderTooltip` is omitted. Use `none` to hide the overlay.\nWhen `renderTooltip` is set, it replaces the preset body. Overlay hidden only when `tooltip` is `none` and `renderTooltip` is omitted.\n@default 'card'",defaultValue:{value:"'card'",computed:!1}},renderTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: PieItemTooltipParams) => ReactNode",signature:{arguments:[{type:{name:"PieItemTooltipParams"},name:"params"}],return:{name:"ReactNode"}}},description:`Overrides the default React Native **item** tooltip body for pie slices (see {@link PieItemTooltipParams}).
Takes precedence over {@link tooltip}.`},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: PieChartSelectEvent) => void",signature:{arguments:[{type:{name:"PieChartSelectEvent"},name:"event"}],return:{name:"void"}}},description:"Called when the user selects (taps/clicks) a slice."}}};const Fe={data:{...te.data,description:"Single pie: [{ name, value }, ...]. Concentric: [{ name?, radius: [inner, outer], data: [{ name, value }, ...] }, ...]."},radius:{control:"text",description:'Radius of the pie. Number, string (e.g. "60%"), or [inner, outer] for donut. Default: "75%"'},showLegend:{control:"boolean",description:"Whether to show the legend for slices. Default: true"},...xe,showLabel:{control:"boolean",description:"Whether to show slice labels on the chart. Default: true"},labelPosition:{control:"select",options:["outside","inside","center"],description:"Label position: outside, inside, or center. Default: outside"},showLabelLine:{control:"boolean",description:"Whether to show label lines (connectors). Default: true when labels outside"},showHighlighter:{control:"boolean",description:"Whether to emphasize the hovered slice. Default: true"},tooltip:{control:"select",options:["card","compact","kpi","striped","none"],description:"Built-in item tooltip preset when renderTooltip is omitted. Default: 'card'. Use 'none' to hide."},renderTooltip:{control:!1,description:"Custom React Native tooltip body for pie slices."},onSelect:{control:!1,description:"Called when the user taps/clicks a slice. Receives seriesIndex, dataIndex, name, value, optional seriesName, percent."}},ze={...te,...Fe},X=ee.create({container:{padding:20,borderRadius:8},sourceContainer:{marginTop:16,padding:12,backgroundColor:"rgba(0,0,0,0.04)",borderRadius:6,borderWidth:1,borderColor:"rgba(0,0,0,0.08)"},sourceLabel:{fontSize:11,fontWeight:"600",marginBottom:6,color:"rgba(0,0,0,0.5)",textTransform:"uppercase",letterSpacing:.5},sourceCode:{fontFamily:"ui-monospace, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),Ye={title:"Charts/Pie/Type",component:Ae,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...ze},decorators:[(t,e)=>{var r;return g.createElement(G,{style:X.container},g.createElement(t,null),((r=e.parameters)==null?void 0:r.source)!=null&&g.createElement(G,{style:X.sourceContainer},g.createElement(Y,{style:X.sourceLabel},"React Native"),g.createElement(Y,{style:X.sourceCode},String(e.parameters.source))))}]};export{Ae as P,Ye as m};
