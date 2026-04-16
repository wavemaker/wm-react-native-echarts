import{m as D}from"./meta-DffN3gIn.js";import"./iframe-D855FiCl.js";import"./preload-helper-DkhvmF2b.js";import"./area-chart-sCUu3WLk.js";import"./install-BebJlzH2.js";import"./jsx-runtime-BjG_zV1W.js";import"./axis-bL-QyYCv.js";import"./common-BBO5jU0Y.js";import"./install-CXma37mE.js";import"./Axis-sxIZ3k0b.js";import"./install-DfB1csNh.js";import"./install-BiL3BzV2.js";import"./labelHelper-CzHPQigS.js";import"./points-Douv9Vrc.js";import"./dataSample-YMfQ_6XR.js";import"./area.args-BM6SB80j.js";import"./cartesian-C25Uk8mH.js";const W={...D,title:"Charts/Area/Fill"},i=[40,82,91,74,120,95],a={args:{data:i,areaFill:"gradient"}},r={args:{data:i,areaFill:"transparent"}},e={args:{data:i,areaFill:"solid"}},t={args:{data:i,areaFill:"gradient",areaOpacity:.3}},s={args:{data:i,areaFill:"gradient",areaOpacity:1}};var o,p,n,c,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    data,
    areaFill: "gradient"
  }
}`,...(n=(p=a.parameters)==null?void 0:p.docs)==null?void 0:n.source},description:{story:"Default fill: gradient from series color (with areaOpacity) to transparent.",...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};var d,m,g,u,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data,
    areaFill: 'transparent'
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:'areaFill="transparent" — flat fill with areaOpacity applied.',...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.description}}};var F,O,f,S,h;e.parameters={...e.parameters,docs:{...(F=e.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data,
    areaFill: 'solid'
  }
}`,...(f=(O=e.parameters)==null?void 0:O.docs)==null?void 0:f.source},description:{story:'areaFill="solid" — fully opaque fill (ignores areaOpacity).',...(h=(S=e.parameters)==null?void 0:S.docs)==null?void 0:h.description}}};var w,_,x,G,L;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data,
    areaFill: 'gradient',
    areaOpacity: 0.3
  }
}`,...(x=(_=t.parameters)==null?void 0:_.docs)==null?void 0:x.source},description:{story:"areaOpacity={0.3} — lighter fill (gradient).",...(L=(G=t.parameters)==null?void 0:G.docs)==null?void 0:L.description}}};var T,b,q,A,C;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data,
    areaFill: 'gradient',
    areaOpacity: 1
  }
}`,...(q=(b=s.parameters)==null?void 0:b.docs)==null?void 0:q.source},description:{story:"areaOpacity={1} — full opacity (gradient still fades to transparent at bottom).",...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};const X=["Gradient","Transparent","Solid","LowOpacity","FullOpacity"];export{s as FullOpacity,a as Gradient,t as LowOpacity,e as Solid,r as Transparent,X as __namedExportsOrder,W as default};
