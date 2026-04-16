import{r as q,R as W}from"./iframe-D855FiCl.js";import{_ as K,a3 as T,a8 as ce,r as pe,a9 as F,aa as P,ab as H,z as U,ac as ge,ad as he,R as me,ae as fe,w as ye,u as be,c as xe,a as Ce,b as ke,i as ve,S as qe,V as Z,T as J,s as We}from"./install-BebJlzH2.js";import{i as we,c as Se}from"./common-BBO5jU0Y.js";import{i as Re}from"./install-DfB1csNh.js";import{i as Te}from"./install-DO9VZV3L.js";var Le=function(i){K(n,i);function n(){var e=i!==null&&i.apply(this,arguments)||this;return e.type=n.type,e.layoutMode={type:"box",ignoreSize:!0},e}return n.type="title",n.defaultOption={z:6,show:!0,text:"",target:"blank",subtext:"",subtarget:"blank",left:"center",top:T.size.m,backgroundColor:T.color.transparent,borderColor:T.color.primary,borderWidth:0,padding:5,itemGap:10,textStyle:{fontSize:18,fontWeight:"bold",color:T.color.primary},subtextStyle:{fontSize:12,color:T.color.quaternary}},n}(ce),Ee=function(i){K(n,i);function n(){var e=i!==null&&i.apply(this,arguments)||this;return e.type=n.type,e}return n.prototype.render=function(e,b,L){if(this.group.removeAll(),!!e.get("show")){var l=this.group,x=e.getModel("textStyle"),C=e.getModel("subtextStyle"),r=e.get("textAlign"),s=pe(e.get("textBaseline"),e.get("textVerticalAlign")),h=new F({style:P(x,{text:e.get("text"),fill:x.getTextColor()},{disableBox:!0}),z2:10}),f=h.getBoundingRect(),w=e.get("subtext"),u=new F({style:P(C,{text:w,fill:C.getTextColor(),y:f.height+e.get("itemGap"),verticalAlign:"top"},{disableBox:!0}),z2:10}),m=e.get("link"),k=e.get("sublink"),v=e.get("triggerEvent",!0);h.silent=!m&&!v,u.silent=!k&&!v,m&&h.on("click",function(){H(m,"_"+e.get("target"))}),k&&u.on("click",function(){H(k,"_"+e.get("subtarget"))}),U(h).eventData=U(u).eventData=v?{componentType:"title",componentIndex:e.componentIndex}:null,l.add(h),w&&l.add(u);var g=l.getBoundingRect(),d=e.getBoxLayoutParams();d.width=g.width,d.height=g.height;var E=ge(e,L),t=he(d,E.refContainer,e.get("padding"));r||(r=e.get("left")||e.get("right"),r==="middle"&&(r="center"),r==="right"?t.x+=t.width:r==="center"&&(t.x+=t.width/2)),s||(s=e.get("top")||e.get("bottom"),s==="center"&&(s="middle"),s==="bottom"?t.y+=t.height:s==="middle"&&(t.y+=t.height/2),s=s||"top"),l.x=t.x,l.y=t.y,l.markRedraw();var c={align:r,verticalAlign:s};h.setStyle(c),u.setStyle(c),g=l.getBoundingRect();var a=t.margin,y=e.getItemStyle(["color","opacity"]);y.fill=e.get("backgroundColor");var p=new me({shape:{x:g.x-a[3],y:g.y-a[0],width:g.width+a[1]+a[3],height:g.height+a[0]+a[2],r:e.get("borderRadius")},style:y,subPixelOptimize:!0,silent:!0});l.add(p)}},n.type="title",n}(fe);function Ae(i){i.registerComponentModel(Le),i.registerComponentView(Ee)}be([we,Ae,Re,xe,Te]);const O=22,B=26,ze=["#1e3a8a","#1e40af","#2563eb","#3b82f6","#60a5fa","#93c5fd","#bfdbfe"],Q=({data:i,width:n=220,height:e=350,innerRadius:b="20%",backgroundColor:L="#e8e8e899",centerText:l,centerSubtext:x,showLegend:C=!0,legendPosition:r="bottom",startAngle:s=0,clockwise:h=!1,ringGap:f="4%",onSelect:w,...u})=>{const{theme:m}=ke(u.theme,u.colors),k=q.useRef(null),v=q.useRef(w);v.current=w;const g=q.useRef([]),d=q.useMemo(()=>!Array.isArray(i)||i.length===0?[]:i.map(t=>({label:t.label,value:Math.min(100,Math.max(0,Number(t.value)))})),[i]);g.current=d;const E=q.useMemo(()=>{var _,X,N;if(d.length===0)return{series:[]};const t=u.colors&&u.colors.length>0?u.colors:m.series.map(o=>o.color),c=t.length>=d.length?t:ze.slice(0,d.length),a=typeof b=="number"?b:typeof b=="string"&&b.endsWith("%")?parseFloat(b):20,y=typeof f=="number"?f:typeof f=="string"&&f.endsWith("%")?parseFloat(f):0,p=d.length,S=(p-1)*y,z=100-a-S,D=p>0?z/p:0,j=C&&(r==="top"||r==="bottom"),$=C&&(r==="left"||r==="right"),M=j?(100-O)/100:1,ee=$?(100-B)/100:1,G=Math.min(M,ee),te=j?r==="bottom"?(100-O)/2:100-(100-O)/2:50,re=$?r==="left"?100-(100-B)/2:(100-B)/2:50,ie=d.map((o,R)=>{const V=o.value,oe=100-V,Y=a+R*(D+y),ae=Y+D,le=c[R%c.length],se=o.label??`Ring ${R+1}`,ue=Y*G,de=ae*G;return{type:"pie",radius:[`${ue}%`,`${de}%`],center:[`${re}%`,`${te}%`],startAngle:s,clockwise:h,data:[{name:`${se} (${V}%)`,value:V,itemStyle:{color:le}},{name:"",value:oe,itemStyle:{color:L},label:{show:!1},labelLine:{show:!1}}],label:{show:!1},labelLine:{show:!1},emphasis:{scale:!1,itemStyle:{shadowBlur:8,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.2)"}}}}),ne=d.map((o,R)=>`${o.label??`Ring ${R+1}`} (${o.value}%)`),I={tooltip:{trigger:"item",formatter:o=>o.name?o.name:""},series:ie};if(C){const o=r==="left"||r==="right";I.legend={show:!0,data:ne,orient:o?"vertical":"horizontal",...r==="top"&&{top:8},...r==="bottom"&&{bottom:8},...r==="left"&&{left:8},...r==="right"&&{right:8},textStyle:{color:((_=m.legend)==null?void 0:_.textColor)??"#333333",fontSize:((X=m.legend)==null?void 0:X.fontSize)??11}}}if(l!=null&&l!==""||x!=null&&x!==""){const o=((N=m.legend)==null?void 0:N.textColor)??"#333333";I.title={text:l??"",subtext:x??"",left:"center",top:"middle",textStyle:{fontSize:16,color:o,fontWeight:"bold"},subtextStyle:{fontSize:12,color:o},itemGap:4,z:100}}return I},[d,m,b,L,l,x,C,r,s,h,f,u.colors]);return q.useEffect(()=>{let t;if(k.current)try{t=ve(k.current,"light",{width:n,height:e}),t.setOption(E);const c=a=>{const y=v.current;if(typeof y!="function"||a.componentType!=="series"||a.seriesType!=="pie"||a.dataIndex!==0)return;const p=a.seriesIndex;if(typeof p!="number"||p<0)return;const S=g.current[p];if(!S)return;const z={seriesIndex:p,dataIndex:0,label:S.label??`Ring ${p+1}`,value:S.value};y(z)};t.on("click",c)}catch(c){console.warn("Radial chart initialization error:",c)}return()=>{if(t)try{t.dispose()}catch(c){console.warn("Radial chart disposal error:",c)}}},[E,n,e]),W.createElement(qe,{ref:k,useRNGH:!0})},Ie=ye(Ce(Q)),Ve=Object.assign(Ie,{displayName:"RadialChart"});Q.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{width:{required:!1,tsType:{name:"number"},description:`Width of the chart in pixels.
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
@default true`,defaultValue:{value:"true",computed:!1}},legendPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:`Position of the legend.
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: RadialChartSelectEvent) => void",signature:{arguments:[{type:{name:"RadialChartSelectEvent"},name:"event"}],return:{name:"void"}}},description:"Called when the user selects (taps/clicks) a ring’s value segment."}}};const Oe={data:{control:"object",description:"One item per concentric ring. value = fill percentage (0–100). Example: [{ value: 90 }, { value: 80 }, { value: 50 }, { value: 40 }, { value: 25 }]"},innerRadius:{control:"text",description:'Inner radius of the chart (center hole), e.g. "20%".'},backgroundColor:{control:"color",description:"Color for the unfilled portion of each ring."},centerText:{control:"text",description:"Optional center text (e.g. main value or title)."},centerSubtext:{control:"text",description:"Optional center subtext below center text (e.g. label or unit)."},startAngle:{control:{type:"number",min:0,max:360,step:15},description:"Start angle of the fill (degrees). 0 = right, 90 = top."},clockwise:{control:"boolean",description:"Direction of the fill and animation: true = clockwise, false = counter-clockwise."},ringGap:{control:"text",description:'Gap between concentric rings (e.g. "2%" or number).'},showLegend:{control:"boolean",description:"Whether to show the legend (ring labels). Default: true"},legendPosition:{control:"select",options:["left","right","top","bottom"],description:"Legend position. Default: bottom"},onSelect:{control:!1,description:"Called when the user taps/clicks a ring’s filled segment. Receives seriesIndex, dataIndex, label, value."}},Be={...Se,...Oe},A=We.create({container:{padding:20,borderRadius:8},sourceContainer:{marginTop:16,padding:12,backgroundColor:"rgba(0,0,0,0.04)",borderRadius:6,borderWidth:1,borderColor:"rgba(0,0,0,0.08)"},sourceLabel:{fontSize:11,fontWeight:"600",marginBottom:6,color:"rgba(0,0,0,0.5)",textTransform:"uppercase",letterSpacing:.5},sourceCode:{fontFamily:"ui-monospace, monospace",fontSize:12,color:"rgba(0,0,0,0.85)"}}),Xe={title:"Charts/Radial",component:Ve,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{...Be},decorators:[(i,n)=>{var e;return W.createElement(Z,{style:A.container},W.createElement(i,null),((e=n.parameters)==null?void 0:e.source)!=null&&W.createElement(Z,{style:A.sourceContainer},W.createElement(J,{style:A.sourceLabel},"React Native"),W.createElement(J,{style:A.sourceCode},String(n.parameters.source))))}]};export{Ve as R,Xe as m};
