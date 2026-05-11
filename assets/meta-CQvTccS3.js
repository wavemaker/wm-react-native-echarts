import{R as h,r as v}from"./iframe-7fGkfOWr.js";import{_ as ne,a5 as P,aG as Ce,r as ke,at as ee,bw as te,bx as re,z as ie,by as ve,b7 as we,R as Se,b9 as Re,s as oe,b as ae,T as O,w as Te,u as We,c as qe,a as Le,i as Ie,V as _,S as Ne}from"./install-NEgcrzy7.js";import{T as Ee,a as Ae,b as ze,c as Fe,C as Pe,d as Oe}from"./use-axis-tooltip-Cl80mEW_.js";import{i as Be,e as Ve}from"./echarts-legend-layout-Do6GLXQv.js";import{i as De,c as $e}from"./common-fSim-PaJ.js";import{i as je}from"./install-CpjC6Ee1.js";import{l as Ge}from"./legend-position-CLb_FM1L.js";var Xe=function(r){ne(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.type=e.type,t.layoutMode={type:"box",ignoreSize:!0},t}return e.type="title",e.defaultOption={z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:"center",top:P.size.m,backgroundColor:P.color.transparent,borderColor:P.color.primary,borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bold",color:P.color.primary},subtextStyle:{fontSize:12,color:P.color.quaternary}},e}(Ce),_e=function(r){ne(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.type=e.type,t}return e.prototype.render=function(t,o,a){if(this.group.removeAll(),!!t.get("show")){var i=this.group,u=t.getModel("textStyle"),l=t.getModel("subtextStyle"),n=t.get("textAlign"),s=ke(t.get("textBaseline"),t.get("textVerticalAlign")),d=new ee({style:te(u,{text:t.get("text"),fill:u.getTextColor()},{disableBox:!0}),z2:10}),c=d.getBoundingRect(),C=t.get("subtext"),y=new ee({style:te(l,{text:C,fill:l.getTextColor(),y:c.height+t.get("itemGap"),verticalAlign:"top"},{disableBox:!0}),z2:10}),b=t.get("link"),p=t.get("sublink"),g=t.get("triggerEvent",!0);d.silent=!b&&!g,y.silent=!p&&!g,b&&d.on("click",function(){re(b,"_"+t.get("target"))}),p&&y.on("click",function(){re(p,"_"+t.get("subtarget"))}),ie(d).eventData=ie(y).eventData=g?{componentType:"title",componentIndex:t.componentIndex}:null,i.add(d),C&&i.add(y);var m=i.getBoundingRect(),S=t.getBoxLayoutParams();S.width=m.width,S.height=m.height;var W=ve(t,a),f=we(S,W.refContainer,t.get("padding"));n||(n=t.get("left")||t.get("right"),n==="middle"&&(n="center"),n==="right"?f.x+=f.width:n==="center"&&(f.x+=f.width/2)),s||(s=t.get("top")||t.get("bottom"),s==="center"&&(s="middle"),s==="bottom"?f.y+=f.height:s==="middle"&&(f.y+=f.height/2),s=s||"top"),i.x=f.x,i.y=f.y,i.markRedraw();var R={align:n,verticalAlign:s};d.setStyle(R),y.setStyle(R),m=i.getBoundingRect();var x=f.margin,T=t.getItemStyle(["color","opacity"]);T.fill=t.get("backgroundColor");var D=new Se({shape:{x:m.x-x[3],y:m.y-x[0],width:m.width+x[1]+x[3],height:m.height+x[0]+x[2],r:t.get("borderRadius")},style:T,subPixelOptimize:!0,silent:!0});i.add(D)}},e.type="title",e}(Re);function Ye(r){r.registerComponentModel(Xe),r.registerComponentView(_e)}oe.create({title:{fontWeight:"600",fontSize:13,flex:1},line:{fontSize:12,marginTop:2},swatch:{width:8,height:8,borderRadius:4,marginRight:6},swatchPlaceholder:{width:8,height:8,marginRight:6}});function He(r){const{ringLabel:e,value:t,color:o}=r;return h.createElement(Fe,{header:{swatchColor:o,title:e,marginBottom:6}},h.createElement(O,{style:{fontSize:22,fontWeight:"800",color:"#0f172a"}},t.toFixed(0),"%"),h.createElement(O,{style:{fontSize:12,color:"#64748b",marginTop:4}},"filled vs 100%"))}function Ue(r){const{ringLabel:e,value:t}=r;return h.createElement(ze,{emphasis:e,detail:`${t.toFixed(0)}% fill`,wrap:!0})}function Ke(r){const{theme:e}=ae(),{ringLabel:t,value:o,color:a}=r;return h.createElement(Ae,{accentColor:a??"#3b82f6",minWidth:140,overline:t,metric:h.createElement(O,{style:{fontSize:32,fontWeight:"800",color:e.tooltip.valueColor,marginTop:4}},o.toFixed(0),"%"),caption:"of ring capacity"})}function Ze(r){const{ringLabel:e,value:t,color:o}=r,a=Math.max(0,100-t);return h.createElement(Ee,{headerSwatch:{color:o??"#64748b",title:e},rows:[{key:"filled",leftLabel:"filled",right:`${t.toFixed(0)}%`},{key:"remaining",leftLabel:"remaining",right:`${a.toFixed(0)}%`}]})}function Je(r){switch(r){case"card":return e=>He(e);case"compact":return e=>Ue(e);case"kpi":return e=>h.createElement(Ke,{...e});case"striped":return e=>Ze(e)}throw new Error(`Unknown tooltip preset: ${String(r)}`)}function Qe(r,e){if(typeof(e==null?void 0:e.dataIndexInside)=="number"&&!Number.isNaN(e.dataIndexInside))return e.dataIndexInside;if(typeof(e==null?void 0:e.dataIndex)=="number"&&!Number.isNaN(e.dataIndex)){const t=typeof(r==null?void 0:r.indexOfRawIndex)=="function"?r.indexOfRawIndex(e.dataIndex):e.dataIndex;if(typeof t=="number"&&!Number.isNaN(t))return t}return null}function Me(r,e){var c;const t=(c=r.getItemLayout)==null?void 0:c.call(r,e);if(!t||!Number.isFinite(t.cx)||!Number.isFinite(t.cy))return null;const o=Number(t.cx),a=Number(t.cy),i=Number(t.r),u=Number(t.r0??0),l=Number(t.startAngle),n=Number(t.endAngle);if(!Number.isFinite(l)||!Number.isFinite(n))return null;const s=(l+n)/2,d=(u+i)/2;return{x:o+Math.cos(s)*d,y:a+Math.sin(s)*d}}function et(r,e,t){const o=e==null?void 0:e.x,a=e==null?void 0:e.y;return typeof o=="number"&&typeof a=="number"&&!Number.isNaN(o)&&!Number.isNaN(a)?{x:o,y:a}:Me(t,0)}function tt(r,e){var a,i;try{const u=typeof r.mapDimension=="function"?r.mapDimension("value"):null;if(u!=null){const l=r.get(u,e),n=Number(l);if(Number.isFinite(n))return n}}catch{}const t=(a=r.get)==null?void 0:a.call(r,0,e),o=Number(t);if(Number.isFinite(o))return o;try{const u=Number((i=r.get)==null?void 0:i.call(r,"value",e));if(Number.isFinite(u))return u}catch{}return NaN}function rt(r,e,t,o){var p,g,m,S,W,f,R;if(!r||!e||Array.isArray(e.dataByCoordSys)&&e.dataByCoordSys.length>0)return null;const a=typeof e.seriesIndex=="number"?e.seriesIndex:0;if(a<0||a>=t.normalizedSeries.length)return null;const i=(m=(p=r.getModel)==null?void 0:(g=p.call(r)).getSeriesByIndex)==null?void 0:m.call(g,a),u=(i==null?void 0:i.subType)??((S=i==null?void 0:i.get)==null?void 0:S.call(i,"type"));if(!i||u!=="pie")return null;const l=(W=i.getData)==null?void 0:W.call(i);if(!l)return null;const n=Qe(l,e);if(n==null||n!==0)return null;const s=et(r,e,l);if(!s)return null;const d=t.normalizedSeries[a];if(!d)return null;const c=tt(l,0),C=Number.isFinite(c)?c:Number(d.value);if(!Number.isFinite(C))return null;const y=d.label!=null&&d.label!==""?String(d.label):`Ring ${a+1}`;let b;try{const x=(f=l.getItemVisual)==null?void 0:f.call(l,0,"style"),T=x==null?void 0:x.fill;typeof T=="string"&&T!==""&&(b=T)}catch{}if(b==null){const x=Math.max(o.length,1);b=(R=o[a%x])==null?void 0:R.color}return{pointerX:s.x,pointerY:s.y,seriesIndex:a,dataIndex:0,ringLabel:y,value:C,...typeof b=="string"?{color:b}:{}}}function it(r){const{active:e,renderTooltip:t,contextRef:o,themeSeriesRef:a,width:i,height:u}=r,[l,n]=v.useState(null);v.useEffect(()=>{e||n(null)},[e]);const s=v.useCallback(c=>{if(!e)return()=>{};const C=b=>{var m;const p=o.current;if(!((m=p==null?void 0:p.normalizedSeries)!=null&&m.length)){n(null);return}const g=rt(c,b,p,a.current??[]);n(g)},y=()=>n(null);return c.on("showTip",C),c.on("hideTip",y),()=>{c.off("showTip",C),c.off("hideTip",y)}},[e,o,a]),d=v.useCallback(()=>!e||l==null?null:h.createElement(Pe,{width:i,height:u,pointerX:l.pointerX,pointerY:l.pointerY},t(l)),[e,t,l,i,u]);return{attachRadialItemTooltipListeners:s,renderRadialTooltipOverlay:d}}We([De,Ye,Be,qe,je]);const G=22,X=26,nt=["#1e3a8a","#1e40af","#2563eb","#3b82f6","#60a5fa","#93c5fd","#bfdbfe"],le=({data:r,width:e=220,height:t=350,innerRadius:o="20%",backgroundColor:a="#e8e8e899",centerText:i,centerSubtext:u,showLegend:l=!0,legendPosition:n="bottom",startAngle:s=0,clockwise:d=!1,ringGap:c="4%",tooltip:C="card",renderTooltip:y,onSelect:b,...p})=>{const{theme:g}=ae(p.theme,p.colors),m=v.useRef(null),S=v.useRef(b);S.current=b;const W=v.useRef({normalizedSeries:[]}),f=v.useRef(g.series);f.current=g.series;const R=y!=null||C!=="none",x=v.useMemo(()=>y??(C==="none"?()=>null:Je(C)),[y,C]),{attachRadialItemTooltipListeners:T,renderRadialTooltipOverlay:D}=it({active:R,renderTooltip:x,contextRef:W,themeSeriesRef:f,width:e,height:t}),q=v.useMemo(()=>!Array.isArray(r)||r.length===0?[]:r.map(k=>({label:k.label,value:Math.min(100,Math.max(0,Number(k.value)))})),[r]);W.current={normalizedSeries:q};const Y=v.useMemo(()=>{var Z,J,Q;if(q.length===0)return{series:[]};const k=p.colors&&p.colors.length>0?p.colors:g.series.map(w=>w.color),A=k.length>=q.length?k:nt.slice(0,q.length),L=typeof o=="number"?o:typeof o=="string"&&o.endsWith("%")?parseFloat(o):20,I=typeof c=="number"?c:typeof c=="string"&&c.endsWith("%")?parseFloat(c):0,E=q.length,N=(E-1)*I,z=100-L-N,B=E>0?z/E:0,H=l&&(n==="top"||n==="bottom"),U=l&&(n==="left"||n==="right"),se=H?(100-G)/100:1,ue=U?(100-X)/100:1,K=Math.min(se,ue),de=H?n==="bottom"?(100-G)/2:100-(100-G)/2:50,ce=U?n==="left"?100-(100-X)/2:(100-X)/2:50,pe=q.map((w,F)=>{const j=w.value,fe=100-j,M=L+F*(B+I),ge=M+B,he=A[F%A.length],ye=w.label??`Ring ${F+1}`,be=M*K,xe=ge*K;return{type:"pie",radius:[`${be}%`,`${xe}%`],center:[`${ce}%`,`${de}%`],startAngle:s,clockwise:d,data:[{name:`${ye} (${j}%)`,value:j,itemStyle:{color:he}},{name:"",value:fe,itemStyle:{color:a},label:{show:!1},labelLine:{show:!1}}],label:{show:!1},labelLine:{show:!1},emphasis:{focus:"none",scale:!1,itemStyle:{shadowBlur:8,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.2)"}}}}),me=q.map((w,F)=>`${w.label??`Ring ${F+1}`} (${w.value}%)`),$={tooltip:R?{trigger:"item",...Oe()}:{show:!1},series:pe};if(l&&($.legend={show:!0,data:me,...Ve(n),textStyle:{color:((Z=g.legend)==null?void 0:Z.textColor)??"#333333",fontSize:((J=g.legend)==null?void 0:J.fontSize)??11}}),i!=null&&i!==""||u!=null&&u!==""){const w=((Q=g.legend)==null?void 0:Q.textColor)??"#333333";$.title={text:i??"",subtext:u??"",left:"center",top:"middle",textStyle:{fontSize:16,color:w,fontWeight:"bold"},subtextStyle:{fontSize:12,color:w},itemGap:4,z:100}}return $},[q,g,o,a,i,u,l,n,s,d,c,p.colors,R]);return v.useEffect(()=>{let k,A=()=>{};if(m.current)try{k=Ie(m.current,"light",{width:e,height:t}),k.setOption(Y),A=T(k);const L=I=>{const E=S.current;if(typeof E!="function"||I.componentType!=="series"||I.seriesType!=="pie"||I.dataIndex!==0)return;const N=I.seriesIndex;if(typeof N!="number"||N<0)return;const z=W.current.normalizedSeries[N];if(!z)return;const B={seriesIndex:N,dataIndex:0,label:z.label??`Ring ${N+1}`,value:z.value};E(B)};k.on("click",L)}catch(L){console.warn("Radial chart initialization error:",L)}return()=>{if(A(),k)try{k.dispose()}catch(L){console.warn("Radial chart disposal error:",L)}}},[Y,e,t,T]),h.createElement(_,{style:{width:e,height:t,position:"relative"}},h.createElement(Ne,{ref:m,useRNGH:!0}),D())},ot=Te(Le(le)),at=Object.assign(ot,{displayName:"RadialChart"});le.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{width:{required:!1,tsType:{name:"number"},description:`Width of the chart in pixels.
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
When provided, these colors will be used for the series in order.`},data:{required:!0,tsType:{name:"Array",elements:[{name:"RadialDataItem"}],raw:"RadialDataItem[]"},description:"Chart data: one item per concentric ring. value = fill percentage (0–100)."},innerRadius:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Inner radius of the chart (center hole), e.g. '20%' or 40.
@default '20%'`,defaultValue:{value:"'20%'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:`Color for the unfilled portion of each ring.
@default '#e8e8e899'`,defaultValue:{value:"'#e8e8e899'",computed:!1}},centerText:{required:!1,tsType:{name:"string"},description:"Optional center text (e.g. main value or title)."},centerSubtext:{required:!1,tsType:{name:"string"},description:"Optional center subtext shown below center text (e.g. label or unit)."},startAngle:{required:!1,tsType:{name:"number"},description:`Start angle of the fill (and animation), in degrees. 0 = right (3 o'clock), 90 = top (12 o'clock).
@default 0`,defaultValue:{value:"0",computed:!1}},clockwise:{required:!1,tsType:{name:"boolean"},description:`Direction of the fill and animation. true = clockwise, false = counter-clockwise (anti-clockwise).
@default false`,defaultValue:{value:"false",computed:!1}},ringGap:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Gap between concentric rings, as percentage of chart radius (e.g. '4%') or number.
@default '4%'`,defaultValue:{value:"'4%'",computed:!1}},showLegend:{required:!1,tsType:{name:"boolean"},description:`Whether to show the legend (ring labels).
@default true`,defaultValue:{value:"true",computed:!1}},legendPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:`Position of the legend.
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},tooltip:{required:!1,tsType:{name:"union",raw:"ChartTooltipPreset | 'none'",elements:[{name:"union",raw:"'card' | 'compact' | 'kpi' | 'striped'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'kpi'"},{name:"literal",value:"'striped'"}]},{name:"literal",value:"'none'"}]},description:"Built-in item tooltip preset when `renderTooltip` is omitted. Use `none` to hide the overlay.\n@default 'card'",defaultValue:{value:"'card'",computed:!1}},renderTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: RadialItemTooltipParams) => ReactNode",signature:{arguments:[{type:{name:"RadialItemTooltipParams"},name:"params"}],return:{name:"ReactNode"}}},description:`Overrides the default React Native item tooltip body (see {@link RadialItemTooltipParams}).
Takes precedence over {@link tooltip}.`},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: RadialChartSelectEvent) => void",signature:{arguments:[{type:{name:"RadialChartSelectEvent"},name:"event"}],return:{name:"void"}}},description:"Called when the user selects (taps/clicks) a ring’s value segment."}}};const lt={data:{control:"object",description:"One item per concentric ring. value = fill percentage (0–100). Example: [{ value: 90 }, { value: 80 }, { value: 50 }, { value: 40 }, { value: 25 }]"},innerRadius:{control:"text",description:'Inner radius of the chart (center hole), e.g. "20%".'},backgroundColor:{control:"color",description:"Color for the unfilled portion of each ring."},centerText:{control:"text",description:"Optional center text (e.g. main value or title)."},centerSubtext:{control:"text",description:"Optional center subtext below center text (e.g. label or unit)."},startAngle:{control:{type:"number",min:0,max:360,step:15},description:"Start angle of the fill (degrees). 0 = right, 90 = top."},clockwise:{control:"boolean",description:"Direction of the fill and animation: true = clockwise, false = counter-clockwise."},ringGap:{control:"text",description:'Gap between concentric rings (e.g. "2%" or number).'},showLegend:{control:"boolean",description:"Whether to show the legend (ring labels). Default: true"},...Ge,tooltip:{control:"select",options:["card","compact","kpi","striped","none"],description:"Built-in item tooltip preset when renderTooltip is omitted. Default: 'card'. Use 'none' to hide."},renderTooltip:{control:!1,description:"Custom React Native tooltip body for the hovered ring fill."},onSelect:{control:!1,description:"Called when the user taps/clicks a ring’s filled segment. Receives seriesIndex, dataIndex, label, value."}},st={...$e,...lt},V=oe.create({container:{padding:20,borderRadius:8},sourceContainer:{marginTop:16,padding:12,backgroundColor:"rgba(0,0,0,0.04)",borderRadius:6,borderWidth:1,borderColor:"rgba(0,0,0,0.08)"},sourceLabel:{fontSize:11,fontWeight:"600",marginBottom:6,color:"rgba(0,0,0,0.5)",textTransform:"uppercase",letterSpacing:.5},sourceCode:{fontFamily:"ui-monospace, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),yt={title:"Charts/Radial",component:at,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...st},decorators:[(r,e)=>{var t;return h.createElement(_,{style:V.container},h.createElement(r,null),((t=e.parameters)==null?void 0:t.source)!=null&&h.createElement(_,{style:V.sourceContainer},h.createElement(O,{style:V.sourceLabel},"React Native"),h.createElement(O,{style:V.sourceCode},String(e.parameters.source))))}]};export{at as R,yt as m};
