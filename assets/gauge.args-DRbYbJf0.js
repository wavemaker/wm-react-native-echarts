var or=Object.defineProperty;var ar=(t,e,r)=>e in t?or(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var te=(t,e,r)=>ar(t,typeof e!="symbol"?e+"":e,r);import{cp as qe,cq as lr,cr as ht,cs as pe,ct as sr,_ as X,al as ur,bg as cr,L as De,Q,b6 as G,c7 as ce,K as dr,at as xe,bw as Ee,q as pt,ab as le,cu as gt,n as ft,Z as hr,e as pr,ap as mt,y as yt,j as vt,G as Ze,aC as gr,cv as fr,ar as mr,N as yr,M as vr,ai as br,a5 as re,ah as xr,cw as Er,cx as Cr,cy as Sr,cz as bt,cA as kr,cB as Rr,cC as Ar,cD as Tr,cl as Oe,cE as _r,aG as Vt,P as Ht,bz as Pr,cF as wr,bh as Lr,bM as xt,bQ as Et,bJ as Nr,by as Dr,d as Or,m as Bt,b2 as Wr,c6 as et,co as oe,a3 as ae,F as qr,bc as Ir,cd as Mr,z as Gr,cj as jt,cn as Vr,c5 as Hr,cm as Br,bB as jr,H as $r,u as Ie,bd as Fr,W as zr,b9 as Yr,w as Me,c as tt,a as Ge,b as Ve,i as Se,S as ke,s as rt,cG as Xr,V as he}from"./install-NEgcrzy7.js";import{g as Ur,r as V,R as D}from"./iframe-7fGkfOWr.js";import{S as Ct,i as Kr}from"./install-j5bgd6PW.js";import{c as Zr}from"./createSeriesDataSimply-DaXRNxVR.js";import{A as Qr,a as fe,b as St}from"./Axis-0FyMA-GH.js";function Jr(t,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];if(!t){var o;if(e===void 0)o=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=0;o=new Error(e.replace(/%s/g,function(){return String(i[s++])})),o.name="Invariant Violation"}throw o.framesToPop=1,o}}var ei=Jr;const kt=Ur(ei);var se={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},ne={},Rt=qe;function $t(){if(qe){var t=window,e,r;if(t.visualViewport){var i=t.visualViewport;e=Math.round(i.height*i.scale),r=Math.round(i.width*i.scale)}else{var n=t.document.documentElement;e=n.clientHeight,r=n.clientWidth}se.window={fontScale:1,height:e,scale:t.devicePixelRatio||1,width:r},se.screen={fontScale:1,height:t.screen.height,scale:t.devicePixelRatio||1,width:t.screen.width}}}function At(){$t(),Array.isArray(ne.change)&&ne.change.forEach(t=>t(se))}class de{static get(e){return Rt&&(Rt=!1,$t()),kt(se[e],"No dimension set for key "+e),se[e]}static set(e){e&&(qe?kt(!1,"Dimensions cannot be set in the browser"):(e.screen!=null&&(se.screen=e.screen),e.window!=null&&(se.window=e.window)))}static addEventListener(e,r){return ne[e]=ne[e]||[],ne[e].push(r),{remove:()=>{this.removeEventListener(e,r)}}}static removeEventListener(e,r){Array.isArray(ne[e])&&(ne[e]=ne[e].filter(i=>i!==r))}}qe&&(window.visualViewport?window.visualViewport.addEventListener("resize",At,!1):window.addEventListener("resize",At,!1));class Ce{static get(){return de.get("window").scale}static getFontScale(){return de.get("window").fontScale||Ce.get()}static getPixelSizeForLayoutSize(e){return Math.round(e*Ce.get())}static roundToNearestPixel(e){var r=Ce.get();return Math.round(e*r)/r}}var Ft=function(e,r){var i=this;if(i.instancePool.length){var n=i.instancePool.pop();return i.call(n,e,r),n}else return new i(e,r)},ti=function(e){var r=this;e.destructor(),r.instancePool.length<r.poolSize&&r.instancePool.push(e)},ri=10,ii=Ft,ni=function(e,r){var i=e;return i.instancePool=[],i.getPooled=r||ii,i.poolSize||(i.poolSize=ri),i.release=ti,i},He={addPoolingTo:ni,twoArgumentPooler:Ft},oi=He.twoArgumentPooler;function ge(t,e){this.width=t,this.height=e}ge.prototype.destructor=function(){this.width=null,this.height=null};ge.getPooledFromElement=function(t){return ge.getPooled(t.offsetWidth,t.offsetHeight)};He.addPoolingTo(ge,oi);var ai=He.twoArgumentPooler;function We(t,e){this.left=t,this.top=e}We.prototype.destructor=function(){this.left=null,this.top=null};He.addPoolingTo(We,ai);var Tt=t=>{var e=t.touches,r=t.changedTouches,i=e&&e.length>0,n=r&&r.length>0;return!i&&n?r[0]:i?e[0]:t},v={NOT_RESPONDER:"NOT_RESPONDER",RESPONDER_INACTIVE_PRESS_IN:"RESPONDER_INACTIVE_PRESS_IN",RESPONDER_INACTIVE_PRESS_OUT:"RESPONDER_INACTIVE_PRESS_OUT",RESPONDER_ACTIVE_PRESS_IN:"RESPONDER_ACTIVE_PRESS_IN",RESPONDER_ACTIVE_PRESS_OUT:"RESPONDER_ACTIVE_PRESS_OUT",RESPONDER_ACTIVE_LONG_PRESS_IN:"RESPONDER_ACTIVE_LONG_PRESS_IN",RESPONDER_ACTIVE_LONG_PRESS_OUT:"RESPONDER_ACTIVE_LONG_PRESS_OUT",ERROR:"ERROR"},it={NOT_RESPONDER:!1,RESPONDER_INACTIVE_PRESS_IN:!1,RESPONDER_INACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_PRESS_IN:!1,RESPONDER_ACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_LONG_PRESS_IN:!1,RESPONDER_ACTIVE_LONG_PRESS_OUT:!1,ERROR:!1},_t=pe(pe({},it),{},{RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0}),Pt=pe(pe({},it),{},{RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),wt=pe(pe({},it),{},{RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),U={DELAY:"DELAY",RESPONDER_GRANT:"RESPONDER_GRANT",RESPONDER_RELEASE:"RESPONDER_RELEASE",RESPONDER_TERMINATED:"RESPONDER_TERMINATED",ENTER_PRESS_RECT:"ENTER_PRESS_RECT",LEAVE_PRESS_RECT:"LEAVE_PRESS_RECT",LONG_PRESS_DETECTED:"LONG_PRESS_DETECTED"},Lt={NOT_RESPONDER:{DELAY:v.ERROR,RESPONDER_GRANT:v.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:v.ERROR,RESPONDER_TERMINATED:v.ERROR,ENTER_PRESS_RECT:v.ERROR,LEAVE_PRESS_RECT:v.ERROR,LONG_PRESS_DETECTED:v.ERROR},RESPONDER_INACTIVE_PRESS_IN:{DELAY:v.RESPONDER_ACTIVE_PRESS_IN,RESPONDER_GRANT:v.ERROR,RESPONDER_RELEASE:v.NOT_RESPONDER,RESPONDER_TERMINATED:v.NOT_RESPONDER,ENTER_PRESS_RECT:v.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:v.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:v.ERROR},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:v.RESPONDER_ACTIVE_PRESS_OUT,RESPONDER_GRANT:v.ERROR,RESPONDER_RELEASE:v.NOT_RESPONDER,RESPONDER_TERMINATED:v.NOT_RESPONDER,ENTER_PRESS_RECT:v.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:v.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:v.ERROR},RESPONDER_ACTIVE_PRESS_IN:{DELAY:v.ERROR,RESPONDER_GRANT:v.ERROR,RESPONDER_RELEASE:v.NOT_RESPONDER,RESPONDER_TERMINATED:v.NOT_RESPONDER,ENTER_PRESS_RECT:v.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:v.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:v.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:v.ERROR,RESPONDER_GRANT:v.ERROR,RESPONDER_RELEASE:v.NOT_RESPONDER,RESPONDER_TERMINATED:v.NOT_RESPONDER,ENTER_PRESS_RECT:v.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:v.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:v.ERROR},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:v.ERROR,RESPONDER_GRANT:v.ERROR,RESPONDER_RELEASE:v.NOT_RESPONDER,RESPONDER_TERMINATED:v.NOT_RESPONDER,ENTER_PRESS_RECT:v.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:v.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:v.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:v.ERROR,RESPONDER_GRANT:v.ERROR,RESPONDER_RELEASE:v.NOT_RESPONDER,RESPONDER_TERMINATED:v.NOT_RESPONDER,ENTER_PRESS_RECT:v.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:v.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:v.ERROR},error:{DELAY:v.NOT_RESPONDER,RESPONDER_GRANT:v.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:v.NOT_RESPONDER,RESPONDER_TERMINATED:v.NOT_RESPONDER,ENTER_PRESS_RECT:v.NOT_RESPONDER,LEAVE_PRESS_RECT:v.NOT_RESPONDER,LONG_PRESS_DETECTED:v.NOT_RESPONDER}},Qe=130,Te=20,li=500,Nt=li-Qe,si=10,Re={componentDidMount:function(){var e=this.getTouchableNode&&this.getTouchableNode();e&&e.addEventListener&&(this._touchableBlurListener=r=>{this._isTouchableKeyboardActive&&(this.state.touchable.touchState&&this.state.touchable.touchState!==v.NOT_RESPONDER&&this.touchableHandleResponderTerminate({nativeEvent:r}),this._isTouchableKeyboardActive=!1)},e.addEventListener("blur",this._touchableBlurListener))},componentWillUnmount:function(){var e=this.getTouchableNode&&this.getTouchableNode();e&&e.addEventListener&&e.removeEventListener("blur",this._touchableBlurListener),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressInLocation=null,this.state.touchable.responderID=null},touchableGetInitialState:function(){return{touchable:{touchState:void 0,responderID:null}}},touchableHandleResponderTerminationRequest:function(){return!this.props.rejectResponderTermination},touchableHandleStartShouldSetResponder:function(){return!this.props.disabled},touchableLongPressCancelsPress:function(){return!0},touchableHandleResponderGrant:function(e){var r=e.currentTarget;e.persist(),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null,this.state.touchable.touchState=v.NOT_RESPONDER,this.state.touchable.responderID=r,this._receiveSignal(U.RESPONDER_GRANT,e);var i=this.touchableGetHighlightDelayMS!==void 0?Math.max(this.touchableGetHighlightDelayMS(),0):Qe;i=isNaN(i)?Qe:i,i!==0?this.touchableDelayTimeout=setTimeout(this._handleDelay.bind(this,e),i):this._handleDelay(e);var n=this.touchableGetLongPressDelayMS!==void 0?Math.max(this.touchableGetLongPressDelayMS(),10):Nt;n=isNaN(n)?Nt:n,this.longPressDelayTimeout=setTimeout(this._handleLongDelay.bind(this,e),n+i)},touchableHandleResponderRelease:function(e){this.pressInLocation=null,this._receiveSignal(U.RESPONDER_RELEASE,e)},touchableHandleResponderTerminate:function(e){this.pressInLocation=null,this._receiveSignal(U.RESPONDER_TERMINATED,e)},touchableHandleResponderMove:function(e){if(this.state.touchable.positionOnActivate){var r=this.state.touchable.positionOnActivate,i=this.state.touchable.dimensionsOnActivate,n=this.touchableGetPressRectOffset?this.touchableGetPressRectOffset():{left:Te,right:Te,top:Te,bottom:Te},o=n.left,s=n.top,d=n.right,c=n.bottom,l=this.touchableGetHitSlop?this.touchableGetHitSlop():null;l&&(o+=l.left||0,s+=l.top||0,d+=l.right||0,c+=l.bottom||0);var a=Tt(e.nativeEvent),u=a&&a.pageX,h=a&&a.pageY;if(this.pressInLocation){var y=this._getDistanceBetweenPoints(u,h,this.pressInLocation.pageX,this.pressInLocation.pageY);y>si&&this._cancelLongPressDelayTimeout()}var p=u>r.left-o&&h>r.top-s&&u<r.left+i.width+d&&h<r.top+i.height+c;if(p){var f=this.state.touchable.touchState;this._receiveSignal(U.ENTER_PRESS_RECT,e);var g=this.state.touchable.touchState;g===v.RESPONDER_INACTIVE_PRESS_IN&&f!==v.RESPONDER_INACTIVE_PRESS_IN&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(U.LEAVE_PRESS_RECT,e)}},touchableHandleFocus:function(e){this.props.onFocus&&this.props.onFocus(e)},touchableHandleBlur:function(e){this.props.onBlur&&this.props.onBlur(e)},_remeasureMetricsOnActivation:function(){var e=this.state.touchable.responderID;e!=null&&ht.measure(e,this._handleQueryLayout)},_handleQueryLayout:function(e,r,i,n,o,s){!e&&!r&&!i&&!n&&!o&&!s||(this.state.touchable.positionOnActivate&&We.release(this.state.touchable.positionOnActivate),this.state.touchable.dimensionsOnActivate&&ge.release(this.state.touchable.dimensionsOnActivate),this.state.touchable.positionOnActivate=We.getPooled(o,s),this.state.touchable.dimensionsOnActivate=ge.getPooled(i,n))},_handleDelay:function(e){this.touchableDelayTimeout=null,this._receiveSignal(U.DELAY,e)},_handleLongDelay:function(e){this.longPressDelayTimeout=null;var r=this.state.touchable.touchState;r!==v.RESPONDER_ACTIVE_PRESS_IN&&r!==v.RESPONDER_ACTIVE_LONG_PRESS_IN?console.error("Attempted to transition from state `"+r+"` to `"+v.RESPONDER_ACTIVE_LONG_PRESS_IN+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(U.LONG_PRESS_DETECTED,e)},_receiveSignal:function(e,r){var i=this.state.touchable.responderID,n=this.state.touchable.touchState,o=Lt[n]&&Lt[n][e];if(!(!i&&e===U.RESPONDER_RELEASE)){if(!o)throw new Error("Unrecognized signal `"+e+"` or state `"+n+"` for Touchable responder `"+i+"`");if(o===v.ERROR)throw new Error("Touchable cannot transition from `"+n+"` to `"+e+"` for responder `"+i+"`");n!==o&&(this._performSideEffectsForTransition(n,o,e,r),this.state.touchable.touchState=o)}},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null},_isHighlight:function(e){return e===v.RESPONDER_ACTIVE_PRESS_IN||e===v.RESPONDER_ACTIVE_LONG_PRESS_IN},_savePressInLocation:function(e){var r=Tt(e.nativeEvent),i=r&&r.pageX,n=r&&r.pageY,o=r&&r.locationX,s=r&&r.locationY;this.pressInLocation={pageX:i,pageY:n,locationX:o,locationY:s}},_getDistanceBetweenPoints:function(e,r,i,n){var o=e-i,s=r-n;return Math.sqrt(o*o+s*s)},_performSideEffectsForTransition:function(e,r,i,n){var o=this._isHighlight(e),s=this._isHighlight(r),d=i===U.RESPONDER_TERMINATED||i===U.RESPONDER_RELEASE;d&&this._cancelLongPressDelayTimeout();var c=e===v.NOT_RESPONDER&&r===v.RESPONDER_INACTIVE_PRESS_IN,l=!_t[e]&&_t[r];if((c||l)&&this._remeasureMetricsOnActivation(),Pt[e]&&i===U.LONG_PRESS_DETECTED&&this.touchableHandleLongPress&&this.touchableHandleLongPress(n),s&&!o?this._startHighlight(n):!s&&o&&this._endHighlight(n),Pt[e]&&i===U.RESPONDER_RELEASE){var a=!!this.props.onLongPress,u=wt[e]&&(!a||!this.touchableLongPressCancelsPress()),h=!wt[e]||u;h&&this.touchableHandlePress&&(!s&&!o&&(this._startHighlight(n),this._endHighlight(n)),this.touchableHandlePress(n))}this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null},_playTouchSound:function(){ht.playTouchSound()},_startHighlight:function(e){this._savePressInLocation(e),this.touchableHandleActivePressIn&&this.touchableHandleActivePressIn(e)},_endHighlight:function(e){this.touchableHandleActivePressOut&&(this.touchableGetPressOutDelayMS&&this.touchableGetPressOutDelayMS()?this.pressOutDelayTimeout=setTimeout(()=>{this.touchableHandleActivePressOut(e)},this.touchableGetPressOutDelayMS()):this.touchableHandleActivePressOut(e))},touchableHandleKeyEvent:function(e){var r=e.type,i=e.key;(i==="Enter"||i===" ")&&(r==="keydown"?this._isTouchableKeyboardActive||(!this.state.touchable.touchState||this.state.touchable.touchState===v.NOT_RESPONDER)&&(this.touchableHandleResponderGrant(e),this._isTouchableKeyboardActive=!0):r==="keyup"&&this._isTouchableKeyboardActive&&this.state.touchable.touchState&&this.state.touchable.touchState!==v.NOT_RESPONDER&&(this.touchableHandleResponderRelease(e),this._isTouchableKeyboardActive=!1),e.stopPropagation(),i==="Enter"&&lr.propsToAriaRole(this.props)==="link"||e.preventDefault())},withoutDefaultFocusAndBlur:{}};Re.touchableHandleFocus;Re.touchableHandleBlur;var ui=sr(Re,["touchableHandleFocus","touchableHandleBlur"]);Re.withoutDefaultFocusAndBlur=ui;var ci={Mixin:Re};function di(){var t=V.useState(()=>de.get("window")),e=t[0],r=t[1];return V.useEffect(()=>{function i(n){var o=n.window;o!=null&&r(o)}return de.addEventListener("change",i),r(de.get("window")),()=>{de.removeEventListener("change",i)}},[]),e}var hi=function(){function t(){this.angle=0,this.width=10,this.r=10,this.x=0,this.y=0}return t}(),pi=function(t){X(e,t);function e(r){var i=t.call(this,r)||this;return i.type="pointer",i}return e.prototype.getDefaultShape=function(){return new hi},e.prototype.buildPath=function(r,i){var n=Math.cos,o=Math.sin,s=i.r,d=i.width,c=i.angle,l=i.x-n(c)*d*(d>=s/3?1:2),a=i.y-o(c)*d*(d>=s/3?1:2);c=i.angle-Math.PI/2,r.moveTo(l,a),r.lineTo(i.x+n(c)*d,i.y+o(c)*d),r.lineTo(i.x+n(i.angle)*s,i.y+o(i.angle)*s),r.lineTo(i.x-n(c)*d,i.y-o(c)*d),r.lineTo(l,a)},e}(ur);function gi(t,e){var r=t.get("center"),i=e.getWidth(),n=e.getHeight(),o=Math.min(i,n),s=G(r[0],e.getWidth()),d=G(r[1],e.getHeight()),c=G(t.get("radius"),o/2);return{cx:s,cy:d,r:c}}function _e(t,e){var r=t==null?"":t+"";return e&&(yr(e)?r=e.replace("{value}",r):vr(e)&&(r=e(t))),r}var fi=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r}return e.prototype.render=function(r,i,n){this.group.removeAll();var o=r.get(["axisLine","lineStyle","color"]),s=gi(r,n);this._renderMain(r,i,n,o,s),this._data=r.getData()},e.prototype.dispose=function(){},e.prototype._renderMain=function(r,i,n,o,s){var d=this.group,c=r.get("clockwise"),l=-r.get("startAngle")/180*Math.PI,a=-r.get("endAngle")/180*Math.PI,u=r.getModel("axisLine"),h=u.get("roundCap"),y=h?Ct:De,p=u.get("show"),f=u.getModel("lineStyle"),g=f.get("width"),b=[l,a];cr(b,!c),l=b[0],a=b[1];for(var x=a-l,S=l,E=[],T=0;p&&T<o.length;T++){var _=Math.min(Math.max(o[T][0],0),1);a=l+x*_;var I=new y({shape:{startAngle:S,endAngle:a,cx:s.cx,cy:s.cy,clockwise:c,r0:s.r-g,r:s.r},silent:!0});I.setStyle({fill:o[T][1]}),I.setStyle(f.getLineStyle(["color","width"])),E.push(I),S=a}E.reverse(),Q(E,function(N){return d.add(N)});var O=function(N){if(N<=0)return o[0][1];var m;for(m=0;m<o.length;m++)if(o[m][0]>=N&&(m===0?0:o[m-1][0])<N)return o[m][1];return o[m-1][1]};this._renderTicks(r,i,n,O,s,l,a,c,g),this._renderTitleAndDetail(r,i,n,O,s),this._renderAnchor(r,s),this._renderPointer(r,i,n,O,s,l,a,c,g)},e.prototype._renderTicks=function(r,i,n,o,s,d,c,l,a){for(var u=this.group,h=s.cx,y=s.cy,p=s.r,f=+r.get("min"),g=+r.get("max"),b=r.getModel("splitLine"),x=r.getModel("axisTick"),S=r.getModel("axisLabel"),E=r.get("splitNumber"),T=x.get("splitNumber"),_=G(b.get("length"),p),I=G(x.get("length"),p),O=d,N=(c-d)/E,m=N/T,k=b.getModel("lineStyle").getLineStyle(),q=x.getModel("lineStyle").getLineStyle(),R=b.get("distance"),P,C,A=0;A<=E;A++){if(P=Math.cos(O),C=Math.sin(O),b.get("show")){var w=R?R+a:a,L=new ce({shape:{x1:P*(p-w)+h,y1:C*(p-w)+y,x2:P*(p-_-w)+h,y2:C*(p-_-w)+y},style:k,silent:!0});k.stroke==="auto"&&L.setStyle({stroke:o(A/E)}),u.add(L)}if(S.get("show")){var w=S.get("distance")+R,H=_e(dr(A/E*(g-f)+f),S.get("formatter")),j=o(A/E),z=P*(p-_-w)+h,Y=C*(p-_-w)+y,J=S.get("rotate"),ee=0;J==="radial"?(ee=-O+2*Math.PI,ee>Math.PI/2&&(ee+=Math.PI)):J==="tangential"?ee=-O-Math.PI/2:br(J)&&(ee=J*Math.PI/180),ee===0?u.add(new xe({style:Ee(S,{text:H,x:z,y:Y,verticalAlign:C<-.8?"top":C>.8?"bottom":"middle",align:P<-.4?"left":P>.4?"right":"center"},{inheritColor:j}),silent:!0})):u.add(new xe({style:Ee(S,{text:H,x:z,y:Y,verticalAlign:"middle",align:"center"},{inheritColor:j}),silent:!0,originX:z,originY:Y,rotation:ee}))}if(x.get("show")&&A!==E){var w=x.get("distance");w=w?w+a:a;for(var ie=0;ie<=T;ie++){P=Math.cos(O),C=Math.sin(O);var me=new ce({shape:{x1:P*(p-w)+h,y1:C*(p-w)+y,x2:P*(p-I-w)+h,y2:C*(p-I-w)+y},silent:!0,style:q});q.stroke==="auto"&&me.setStyle({stroke:o((A+ie/T)/E)}),u.add(me),O+=m}O-=m}else O+=N}},e.prototype._renderPointer=function(r,i,n,o,s,d,c,l,a){var u=this.group,h=this._data,y=this._progressEls,p=[],f=r.get(["pointer","show"]),g=r.getModel("progress"),b=g.get("show"),x=r.getData(),S=x.mapDimension("value"),E=+r.get("min"),T=+r.get("max"),_=[E,T],I=[d,c];function O(m,k){var q=x.getItemModel(m),R=q.getModel("pointer"),P=G(R.get("width"),s.r),C=G(R.get("length"),s.r),A=r.get(["pointer","icon"]),w=R.get("offsetCenter"),L=G(w[0],s.r),H=G(w[1],s.r),j=R.get("keepAspect"),z;return A?z=vt(A,L-P/2,H-C,P,C,null,j):z=new pi({shape:{angle:-Math.PI/2,width:P,r:C,x:L,y:H}}),z.rotation=-(k+Math.PI/2),z.x=s.cx,z.y=s.cy,z}function N(m,k){var q=g.get("roundCap"),R=q?Ct:De,P=g.get("overlap"),C=P?g.get("width"):a/x.count(),A=P?s.r-C:s.r-(m+1)*C,w=P?s.r:s.r-m*C,L=new R({shape:{startAngle:d,endAngle:k,cx:s.cx,cy:s.cy,clockwise:l,r0:A,r:w}});return P&&(L.z2=le(x.get(S,m),[E,T],[100,0],!0)),L}(b||f)&&(x.diff(h).add(function(m){var k=x.get(S,m);if(f){var q=O(m,d);pt(q,{rotation:-((isNaN(+k)?I[0]:le(k,_,I,!0))+Math.PI/2)},r),u.add(q),x.setItemGraphicEl(m,q)}if(b){var R=N(m,d),P=g.get("clip");pt(R,{shape:{endAngle:le(k,_,I,P)}},r),u.add(R),gt(r.seriesIndex,x.dataType,m,R),p[m]=R}}).update(function(m,k){var q=x.get(S,m);if(f){var R=h.getItemGraphicEl(k),P=R?R.rotation:d,C=O(m,P);C.rotation=P,ft(C,{rotation:-((isNaN(+q)?I[0]:le(q,_,I,!0))+Math.PI/2)},r),u.add(C),x.setItemGraphicEl(m,C)}if(b){var A=y[k],w=A?A.shape.endAngle:d,L=N(m,w),H=g.get("clip");ft(L,{shape:{endAngle:le(q,_,I,H)}},r),u.add(L),gt(r.seriesIndex,x.dataType,m,L),p[m]=L}}).execute(),x.each(function(m){var k=x.getItemModel(m),q=k.getModel("emphasis"),R=q.get("focus"),P=q.get("blurScope"),C=q.get("disabled");if(f){var A=x.getItemGraphicEl(m),w=x.getItemVisual(m,"style"),L=w.fill;if(A instanceof hr){var H=A.style;A.useStyle(pr({image:H.image,x:H.x,y:H.y,width:H.width,height:H.height},w))}else A.useStyle(w),A.type!=="pointer"&&A.setColor(L);A.setStyle(k.getModel(["pointer","itemStyle"]).getItemStyle()),A.style.fill==="auto"&&A.setStyle("fill",o(le(x.get(S,m),_,[0,1],!0))),A.z2EmphasisLift=0,mt(A,k),yt(A,R,P,C)}if(b){var j=p[m];j.useStyle(x.getItemVisual(m,"style")),j.setStyle(k.getModel(["progress","itemStyle"]).getItemStyle()),j.z2EmphasisLift=0,mt(j,k),yt(j,R,P,C)}}),this._progressEls=p)},e.prototype._renderAnchor=function(r,i){var n=r.getModel("anchor"),o=n.get("show");if(o){var s=n.get("size"),d=n.get("icon"),c=n.get("offsetCenter"),l=n.get("keepAspect"),a=vt(d,i.cx-s/2+G(c[0],i.r),i.cy-s/2+G(c[1],i.r),s,s,null,l);a.z2=n.get("showAbove")?1:0,a.setStyle(n.getModel("itemStyle").getItemStyle()),this.group.add(a)}},e.prototype._renderTitleAndDetail=function(r,i,n,o,s){var d=this,c=r.getData(),l=c.mapDimension("value"),a=+r.get("min"),u=+r.get("max"),h=new Ze,y=[],p=[],f=r.isAnimationEnabled(),g=r.get(["pointer","showAbove"]);c.diff(this._data).add(function(b){y[b]=new xe({silent:!0}),p[b]=new xe({silent:!0})}).update(function(b,x){y[b]=d._titleEls[x],p[b]=d._detailEls[x]}).execute(),c.each(function(b){var x=c.getItemModel(b),S=c.get(l,b),E=new Ze,T=o(le(S,[a,u],[0,1],!0)),_=x.getModel("title");if(_.get("show")){var I=_.get("offsetCenter"),O=s.cx+G(I[0],s.r),N=s.cy+G(I[1],s.r),m=y[b];m.attr({z2:g?0:2,style:Ee(_,{x:O,y:N,text:c.getName(b),align:"center",verticalAlign:"middle"},{inheritColor:T})}),E.add(m)}var k=x.getModel("detail");if(k.get("show")){var q=k.get("offsetCenter"),R=s.cx+G(q[0],s.r),P=s.cy+G(q[1],s.r),C=G(k.get("width"),s.r),A=G(k.get("height"),s.r),w=r.get(["progress","show"])?c.getItemVisual(b,"style").fill:T,m=p[b],L=k.get("formatter");m.attr({z2:g?0:2,style:Ee(k,{x:R,y:P,text:_e(S,L),width:isNaN(C)?null:C,height:isNaN(A)?null:A,align:"center",verticalAlign:"middle"},{inheritColor:w})}),gr(m,{normal:k},S,function(j){return _e(j,L)}),f&&fr(m,b,c,r,{getFormattedLabel:function(j,z,Y,J,ee,ie){return _e(ie?ie.interpolatedValue:S,L)}}),E.add(m)}h.add(E)}),this.group.add(h),this._titleEls=y,this._detailEls=p},e.type="gauge",e}(mr),mi=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r.visualStyleAccessPath="itemStyle",r}return e.prototype.getInitialData=function(r,i){return Zr(this,["value"])},e.type="series.gauge",e.defaultOption={z:2,colorBy:"data",center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,roundCap:!1,lineStyle:{color:[[1,re.color.neutral10]],width:10}},progress:{show:!1,overlap:!0,width:10,roundCap:!1,clip:!0},splitLine:{show:!0,length:10,distance:10,lineStyle:{color:re.color.axisTick,width:3,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:6,distance:10,lineStyle:{color:re.color.axisTickMinor,width:1,type:"solid"}},axisLabel:{show:!0,distance:15,color:re.color.axisLabel,fontSize:12,rotate:0},pointer:{icon:null,offsetCenter:[0,0],show:!0,showAbove:!0,length:"60%",width:6,keepAspect:!1},anchor:{show:!1,showAbove:!1,size:6,icon:"circle",offsetCenter:[0,0],keepAspect:!1,itemStyle:{color:re.color.neutral00,borderWidth:0,borderColor:re.color.theme[0]}},title:{show:!0,offsetCenter:[0,"20%"],color:re.color.secondary,fontSize:16,valueAnimation:!1},detail:{show:!0,backgroundColor:re.color.transparent,borderWidth:0,borderColor:re.color.neutral40,width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:re.color.primary,fontSize:30,fontWeight:"bold",lineHeight:30,valueAnimation:!1}},e}(xr);function nt(t){t.registerChartView(fi),t.registerSeriesModel(mi)}var yi=function(t){X(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.makeElOption=function(r,i,n,o,s){var d=n.axis;d.dim==="angle"&&(this.animationThreshold=Math.PI/18);var c=d.polar,l=c.getOtherAxis(d),a=l.getExtent(),u=d.dataToCoord(i),h=o.get("type");if(h&&h!=="none"){var y=Er(o),p=bi[h](d,c,u,a);p.style=y,r.graphicKey=p.type,r.pointer=p}var f=o.get(["label","margin"]),g=vi(i,n,o,c,f);Cr(r,n,o,s,g)},e}(Sr);function vi(t,e,r,i,n){var o=e.axis,s=o.dataToCoord(t),d=i.getAngleAxis().getExtent()[0];d=d/180*Math.PI;var c=i.getRadiusAxis().getExtent(),l,a,u;if(o.dim==="radius"){var h=_r();Rr(h,h,d),Ar(h,h,[i.cx,i.cy]),l=Tr([s,-n],h);var y=e.getModel("axisLabel").get("rotate")||0,p=Oe.innerTextLayout(d,y*Math.PI/180,-1);a=p.textAlign,u=p.textVerticalAlign}else{var f=c[1];l=i.coordToPoint([f+n,s]);var g=i.cx,b=i.cy;a=Math.abs(l[0]-g)/f<.3?"center":l[0]>g?"left":"right",u=Math.abs(l[1]-b)/f<.3?"middle":l[1]>b?"top":"bottom"}return{position:l,align:a,verticalAlign:u}}var bi={line:function(t,e,r,i){return t.dim==="angle"?{type:"Line",shape:kr(e.coordToPoint([i[0],r]),e.coordToPoint([i[1],r]))}:{type:"Circle",shape:{cx:e.cx,cy:e.cy,r}}},shadow:function(t,e,r,i){var n=Math.max(1,t.getBandWidth()),o=Math.PI/180;return t.dim==="angle"?{type:"Sector",shape:bt(e.cx,e.cy,i[0],i[1],(-r-n/2)*o,(-r+n/2)*o)}:{type:"Sector",shape:bt(e.cx,e.cy,r-n/2,r+n/2,0,Math.PI*2)}}},xi=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r}return e.prototype.findAxisModel=function(r){var i,n=this.ecModel;return n.eachComponent(r,function(o){o.getCoordSysModel()===this&&(i=o)},this),i},e.type="polar",e.dependencies=["radiusAxis","angleAxis"],e.defaultOption={z:0,center:["50%","50%"],radius:"80%"},e}(Vt),ot=function(t){X(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getCoordSysModel=function(){return this.getReferringComponents("polar",Ht).models[0]},e.type="polarAxis",e}(Vt);Pr(ot,Qr);var Ei=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r}return e.type="angleAxis",e}(ot),Ci=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r}return e.type="radiusAxis",e}(ot),at=function(t){X(e,t);function e(r,i){return t.call(this,"radius",r,i)||this}return e.prototype.pointToData=function(r,i){return this.polar.pointToData(r,i)[this.dim==="radius"?0:1]},e}(fe);at.prototype.dataToRadius=fe.prototype.dataToCoord;at.prototype.radiusToData=fe.prototype.coordToData;var Si=Lr(),lt=function(t){X(e,t);function e(r,i){return t.call(this,"angle",r,i||[0,360])||this}return e.prototype.pointToData=function(r,i){return this.polar.pointToData(r,i)[this.dim==="radius"?0:1]},e.prototype.calculateCategoryInterval=function(){var r=this,i=r.getLabelModel(),n=r.scale,o=n.getExtent(),s=n.count();if(o[1]-o[0]<1)return 0;var d=o[0],c=r.dataToCoord(d+1)-r.dataToCoord(d),l=Math.abs(c),a=wr(d==null?"":d+"",i.getFont(),"center","top"),u=Math.max(a.height,7),h=u/l;isNaN(h)&&(h=1/0);var y=Math.max(0,Math.floor(h)),p=Si(r.model),f=p.lastAutoInterval,g=p.lastTickCount;return f!=null&&g!=null&&Math.abs(f-y)<=1&&Math.abs(g-s)<=1&&f>y?y=f:(p.lastTickCount=s,p.lastAutoInterval=y),y},e}(fe);lt.prototype.dataToAngle=fe.prototype.dataToCoord;lt.prototype.angleToData=fe.prototype.coordToData;var zt=["radius","angle"],ki=function(){function t(e){this.dimensions=zt,this.type="polar",this.cx=0,this.cy=0,this._radiusAxis=new at,this._angleAxis=new lt,this.axisPointerEnabled=!0,this.name=e||"",this._radiusAxis.polar=this._angleAxis.polar=this}return t.prototype.containPoint=function(e){var r=this.pointToCoord(e);return this._radiusAxis.contain(r[0])&&this._angleAxis.contain(r[1])},t.prototype.containData=function(e){return this._radiusAxis.containData(e[0])&&this._angleAxis.containData(e[1])},t.prototype.getAxis=function(e){var r="_"+e+"Axis";return this[r]},t.prototype.getAxes=function(){return[this._radiusAxis,this._angleAxis]},t.prototype.getAxesByScale=function(e){var r=[],i=this._angleAxis,n=this._radiusAxis;return i.scale.type===e&&r.push(i),n.scale.type===e&&r.push(n),r},t.prototype.getAngleAxis=function(){return this._angleAxis},t.prototype.getRadiusAxis=function(){return this._radiusAxis},t.prototype.getOtherAxis=function(e){var r=this._angleAxis;return e===r?this._radiusAxis:r},t.prototype.getBaseAxis=function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAngleAxis()},t.prototype.getTooltipAxes=function(e){var r=e!=null&&e!=="auto"?this.getAxis(e):this.getBaseAxis();return{baseAxes:[r],otherAxes:[this.getOtherAxis(r)]}},t.prototype.dataToPoint=function(e,r,i){return this.coordToPoint([this._radiusAxis.dataToRadius(e[0],r),this._angleAxis.dataToAngle(e[1],r)],i)},t.prototype.pointToData=function(e,r,i){i=i||[];var n=this.pointToCoord(e);return i[0]=this._radiusAxis.radiusToData(n[0],r),i[1]=this._angleAxis.angleToData(n[1],r),i},t.prototype.pointToCoord=function(e){var r=e[0]-this.cx,i=e[1]-this.cy,n=this.getAngleAxis(),o=n.getExtent(),s=Math.min(o[0],o[1]),d=Math.max(o[0],o[1]);n.inverse?s=d-360:d=s+360;var c=Math.sqrt(r*r+i*i);r/=c,i/=c;for(var l=Math.atan2(-i,r)/Math.PI*180,a=l<s?1:-1;l<s||l>d;)l+=a*360;return[c,l]},t.prototype.coordToPoint=function(e,r){r=r||[];var i=e[0],n=e[1]/180*Math.PI;return r[0]=Math.cos(n)*i+this.cx,r[1]=-Math.sin(n)*i+this.cy,r},t.prototype.getArea=function(){var e=this.getAngleAxis(),r=this.getRadiusAxis(),i=r.getExtent().slice();i[0]>i[1]&&i.reverse();var n=e.getExtent(),o=Math.PI/180,s=1e-4;return{cx:this.cx,cy:this.cy,r0:i[0],r:i[1],startAngle:-n[0]*o,endAngle:-n[1]*o,clockwise:e.inverse,contain:function(d,c){var l=d-this.cx,a=c-this.cy,u=l*l+a*a,h=this.r,y=this.r0;return h!==y&&u-s<=h*h&&u+s>=y*y},x:this.cx-i[1],y:this.cy-i[1],width:i[1]*2,height:i[1]*2}},t.prototype.convertToPixel=function(e,r,i){var n=Dt(r);return n===this?this.dataToPoint(i):null},t.prototype.convertFromPixel=function(e,r,i){var n=Dt(r);return n===this?this.pointToData(i):null},t}();function Dt(t){var e=t.seriesModel,r=t.polarModel;return r&&r.coordinateSystem||e&&e.coordinateSystem}function Ri(t,e,r){var i=e.get("center"),n=Dr(e,r).refContainer;t.cx=G(i[0],n.width)+n.x,t.cy=G(i[1],n.height)+n.y;var o=t.getRadiusAxis(),s=Math.min(n.width,n.height)/2,d=e.get("radius");d==null?d=[0,"100%"]:Or(d)||(d=[0,d]);var c=[G(d[0],s),G(d[1],s)];o.inverse?o.setExtent(c[1],c[0]):o.setExtent(c[0],c[1])}function Ai(t,e){var r=this,i=r.getAngleAxis(),n=r.getRadiusAxis();if(i.scale.setExtent(1/0,-1/0),n.scale.setExtent(1/0,-1/0),t.eachSeries(function(d){if(d.coordinateSystem===r){var c=d.getData();Q(xt(c,"radius"),function(l){n.scale.unionExtentFromData(c,l)}),Q(xt(c,"angle"),function(l){i.scale.unionExtentFromData(c,l)})}}),Et(i.scale,i.model),Et(n.scale,n.model),i.type==="category"&&!i.onBand){var o=i.getExtent(),s=360/i.scale.count();i.inverse?o[1]+=s:o[1]-=s,i.setExtent(o[0],o[1])}}function Ti(t){return t.mainType==="angleAxis"}function Ot(t,e){var r;if(t.type=e.get("type"),t.scale=Nr(e),t.onBand=e.get("boundaryGap")&&t.type==="category",t.inverse=e.get("inverse"),Ti(e)){t.inverse=t.inverse!==e.get("clockwise");var i=e.get("startAngle"),n=(r=e.get("endAngle"))!==null&&r!==void 0?r:i+(t.inverse?-360:360);t.setExtent(i,n)}e.axis=t,t.model=e}var _i={dimensions:zt,create:function(t,e){var r=[];return t.eachComponent("polar",function(i,n){var o=new ki(n+"");o.update=Ai;var s=o.getRadiusAxis(),d=o.getAngleAxis(),c=i.findAxisModel("radiusAxis"),l=i.findAxisModel("angleAxis");Ot(s,c),Ot(d,l),Ri(o,i,e),r.push(o),i.coordinateSystem=o,o.model=i}),t.eachSeries(function(i){if(i.get("coordinateSystem")==="polar"){var n=i.getReferringComponents("polar",Ht).models[0];i.coordinateSystem=n.coordinateSystem}}),r}},Pi=["axisLine","axisLabel","axisTick","minorTick","splitLine","minorSplitLine","splitArea"];function Pe(t,e,r){e[1]>e[0]&&(e=e.slice().reverse());var i=t.coordToPoint([e[0],r]),n=t.coordToPoint([e[1],r]);return{x1:i[0],y1:i[1],x2:n[0],y2:n[1]}}function we(t){var e=t.getRadiusAxis();return e.inverse?0:1}function Wt(t){var e=t[0],r=t[t.length-1];e&&r&&Math.abs(Math.abs(e.coord-r.coord)-360)<1e-4&&t.pop()}var wi=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r.axisPointerClass="PolarAxisPointer",r}return e.prototype.render=function(r,i){if(this.group.removeAll(),!!r.get("show")){var n=r.axis,o=n.polar,s=o.getRadiusAxis().getExtent(),d=n.getTicksCoords({breakTicks:"none"}),c=n.getMinorTicksCoords(),l=Bt(n.getViewLabels(),function(a){a=Wr(a);var u=n.scale,h=u.type==="ordinal"?u.getRawOrdinalNumber(a.tickValue):a.tickValue;return a.coord=n.dataToCoord(h),a});Wt(l),Wt(d),Q(Pi,function(a){r.get([a,"show"])&&(!n.scale.isBlank()||a==="axisLine")&&Li[a](this.group,r,o,d,c,s,l)},this)}},e.type="angleAxis",e}(et),Li={axisLine:function(t,e,r,i,n,o){var s=e.getModel(["axisLine","lineStyle"]),d=r.getAngleAxis(),c=Math.PI/180,l=d.getExtent(),a=we(r),u=a?0:1,h,y=Math.abs(l[1]-l[0])===360?"Circle":"Arc";o[u]===0?h=new jt[y]({shape:{cx:r.cx,cy:r.cy,r:o[a],startAngle:-l[0]*c,endAngle:-l[1]*c,clockwise:d.inverse},style:s.getLineStyle(),z2:1,silent:!0}):h=new Vr({shape:{cx:r.cx,cy:r.cy,r:o[a],r0:o[u]},style:s.getLineStyle(),z2:1,silent:!0}),h.style.fill=null,t.add(h)},axisTick:function(t,e,r,i,n,o){var s=e.getModel("axisTick"),d=(s.get("inside")?-1:1)*s.get("length"),c=o[we(r)],l=Bt(i,function(a){return new ce({shape:Pe(r,[c,c+d],a.coord)})});t.add(oe(l,{style:ae(s.getModel("lineStyle").getLineStyle(),{stroke:e.get(["axisLine","lineStyle","color"])})}))},minorTick:function(t,e,r,i,n,o){if(n.length){for(var s=e.getModel("axisTick"),d=e.getModel("minorTick"),c=(s.get("inside")?-1:1)*d.get("length"),l=o[we(r)],a=[],u=0;u<n.length;u++)for(var h=0;h<n[u].length;h++)a.push(new ce({shape:Pe(r,[l,l+c],n[u][h].coord)}));t.add(oe(a,{style:ae(d.getModel("lineStyle").getLineStyle(),ae(s.getLineStyle(),{stroke:e.get(["axisLine","lineStyle","color"])}))}))}},axisLabel:function(t,e,r,i,n,o,s){var d=e.getCategories(!0),c=e.getModel("axisLabel"),l=c.get("margin"),a=e.get("triggerEvent");Q(s,function(u,h){var y=c,p=u.tickValue,f=o[we(r)],g=r.coordToPoint([f+l,u.coord]),b=r.cx,x=r.cy,S=Math.abs(g[0]-b)/f<.3?"center":g[0]>b?"left":"right",E=Math.abs(g[1]-x)/f<.3?"middle":g[1]>x?"top":"bottom";if(d&&d[p]){var T=d[p];qr(T)&&T.textStyle&&(y=new Ir(T.textStyle,c,c.ecModel))}var _=new xe({silent:Oe.isLabelSilent(e),style:Ee(y,{x:g[0],y:g[1],fill:y.getTextColor()||e.get(["axisLine","lineStyle","color"]),text:u.formattedLabel,align:S,verticalAlign:E})});if(t.add(_),Mr({el:_,componentModel:e,itemName:u.formattedLabel,formatterParamsExtra:{isTruncated:function(){return _.isTruncated},value:u.rawLabel,tickIndex:h}}),a){var I=Oe.makeAxisEventDataBase(e);I.targetType="axisLabel",I.value=u.rawLabel,Gr(_).eventData=I}},this)},splitLine:function(t,e,r,i,n,o){var s=e.getModel("splitLine"),d=s.getModel("lineStyle"),c=d.get("color"),l=0;c=c instanceof Array?c:[c];for(var a=[],u=0;u<i.length;u++){var h=l++%c.length;a[h]=a[h]||[],a[h].push(new ce({shape:Pe(r,o,i[u].coord)}))}for(var u=0;u<a.length;u++)t.add(oe(a[u],{style:ae({stroke:c[u%c.length]},d.getLineStyle()),silent:!0,z:e.get("z")}))},minorSplitLine:function(t,e,r,i,n,o){if(n.length){for(var s=e.getModel("minorSplitLine"),d=s.getModel("lineStyle"),c=[],l=0;l<n.length;l++)for(var a=0;a<n[l].length;a++)c.push(new ce({shape:Pe(r,o,n[l][a].coord)}));t.add(oe(c,{style:d.getLineStyle(),silent:!0,z:e.get("z")}))}},splitArea:function(t,e,r,i,n,o){if(i.length){var s=e.getModel("splitArea"),d=s.getModel("areaStyle"),c=d.get("color"),l=0;c=c instanceof Array?c:[c];for(var a=[],u=Math.PI/180,h=-i[0].coord*u,y=Math.min(o[0],o[1]),p=Math.max(o[0],o[1]),f=e.get("clockwise"),g=1,b=i.length;g<=b;g++){var x=g===b?i[0].coord:i[g].coord,S=l++%c.length;a[S]=a[S]||[],a[S].push(new De({shape:{cx:r.cx,cy:r.cy,r0:y,r:p,startAngle:h,endAngle:-x*u,clockwise:f},silent:!0})),h=-x*u}for(var g=0;g<a.length;g++)t.add(oe(a[g],{style:ae({fill:c[g%c.length]},d.getAreaStyle()),silent:!0}))}}},Ni=["splitLine","splitArea","minorSplitLine"],Di=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r.axisPointerClass="PolarAxisPointer",r}return e.prototype.render=function(r,i,n){if(this.group.removeAll(),!!r.get("show")){var o=this._axisGroup,s=this._axisGroup=new Ze;this.group.add(s);var d=r.axis,c=d.polar,l=c.getAngleAxis(),a=d.getTicksCoords(),u=d.getMinorTicksCoords(),h=l.getExtent()[0],y=d.getExtent(),p=Wi(c,r,h),f=new Oe(r,n,p);f.build(),s.add(f.group),Hr(o,s,r),Q(Ni,function(g){r.get([g,"show"])&&!d.scale.isBlank()&&Oi[g](this.group,r,c,h,y,a,u)},this)}},e.type="radiusAxis",e}(et),Oi={splitLine:function(t,e,r,i,n,o){var s=e.getModel("splitLine"),d=s.getModel("lineStyle"),c=d.get("color"),l=0,a=r.getAngleAxis(),u=Math.PI/180,h=a.getExtent(),y=Math.abs(h[1]-h[0])===360?"Circle":"Arc";c=c instanceof Array?c:[c];for(var p=[],f=0;f<o.length;f++){var g=l++%c.length;p[g]=p[g]||[],p[g].push(new jt[y]({shape:{cx:r.cx,cy:r.cy,r:Math.max(o[f].coord,0),startAngle:-h[0]*u,endAngle:-h[1]*u,clockwise:a.inverse}}))}for(var f=0;f<p.length;f++)t.add(oe(p[f],{style:ae({stroke:c[f%c.length],fill:null},d.getLineStyle()),silent:!0}))},minorSplitLine:function(t,e,r,i,n,o,s){if(s.length){for(var d=e.getModel("minorSplitLine"),c=d.getModel("lineStyle"),l=[],a=0;a<s.length;a++)for(var u=0;u<s[a].length;u++)l.push(new Br({shape:{cx:r.cx,cy:r.cy,r:s[a][u].coord}}));t.add(oe(l,{style:ae({fill:null},c.getLineStyle()),silent:!0}))}},splitArea:function(t,e,r,i,n,o){if(o.length){var s=e.getModel("splitArea"),d=s.getModel("areaStyle"),c=d.get("color"),l=0;c=c instanceof Array?c:[c];for(var a=[],u=o[0].coord,h=1;h<o.length;h++){var y=l++%c.length;a[y]=a[y]||[],a[y].push(new De({shape:{cx:r.cx,cy:r.cy,r0:u,r:o[h].coord,startAngle:0,endAngle:Math.PI*2},silent:!0})),u=o[h].coord}for(var h=0;h<a.length;h++)t.add(oe(a[h],{style:ae({fill:c[h%c.length]},d.getAreaStyle()),silent:!0}))}}};function Wi(t,e,r){return{position:[t.cx,t.cy],rotation:r/180*Math.PI,labelDirection:-1,tickDirection:-1,nameDirection:1,labelRotate:e.getModel("axisLabel").get("rotate"),z2:1}}function Yt(t){return t.get("stack")||"__ec_stack_"+t.seriesIndex}function Xt(t,e){return e.dim+t.model.componentIndex}function qi(t,e,r){var i={},n=Ii(jr(e.getSeriesByType(t),function(o){return!e.isSeriesFiltered(o)&&o.coordinateSystem&&o.coordinateSystem.type==="polar"}));e.eachSeriesByType(t,function(o){if(o.coordinateSystem.type==="polar"){var s=o.getData(),d=o.coordinateSystem,c=d.getBaseAxis(),l=Xt(d,c),a=Yt(o),u=n[l][a],h=u.offset,y=u.width,p=d.getOtherAxis(c),f=o.coordinateSystem.cx,g=o.coordinateSystem.cy,b=o.get("barMinHeight")||0,x=o.get("barMinAngle")||0;i[a]=i[a]||[];for(var S=s.mapDimension(p.dim),E=s.mapDimension(c.dim),T=$r(s,S),_=c.dim!=="radius"||!o.get("roundCap",!0),I=p.model,O=I.get("startValue"),N=p.dataToCoord(O||0),m=0,k=s.count();m<k;m++){var q=s.get(S,m),R=s.get(E,m),P=q>=0?"p":"n",C=N;T&&(i[a][R]||(i[a][R]={p:N,n:N}),C=i[a][R][P]);var A=void 0,w=void 0,L=void 0,H=void 0;if(p.dim==="radius"){var j=p.dataToCoord(q)-N,z=c.dataToCoord(R);Math.abs(j)<b&&(j=(j<0?-1:1)*b),A=C,w=C+j,L=z-h,H=L-y,T&&(i[a][R][P]=w)}else{var Y=p.dataToCoord(q,_)-N,J=c.dataToCoord(R);Math.abs(Y)<x&&(Y=(Y<0?-1:1)*x),A=J+h,w=A+y,L=C,H=C+Y,T&&(i[a][R][P]=H)}s.setItemLayout(m,{cx:f,cy:g,r0:A,r:w,startAngle:-L*Math.PI/180,endAngle:-H*Math.PI/180,clockwise:L>=H})}}})}function Ii(t){var e={};Q(t,function(i,n){var o=i.getData(),s=i.coordinateSystem,d=s.getBaseAxis(),c=Xt(s,d),l=d.getExtent(),a=d.type==="category"?d.getBandWidth():Math.abs(l[1]-l[0])/o.count(),u=e[c]||{bandWidth:a,remainedWidth:a,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},h=u.stacks;e[c]=u;var y=Yt(i);h[y]||u.autoWidthCount++,h[y]=h[y]||{width:0,maxWidth:0};var p=G(i.get("barWidth"),a),f=G(i.get("barMaxWidth"),a),g=i.get("barGap"),b=i.get("barCategoryGap");p&&!h[y].width&&(p=Math.min(u.remainedWidth,p),h[y].width=p,u.remainedWidth-=p),f&&(h[y].maxWidth=f),g!=null&&(u.gap=g),b!=null&&(u.categoryGap=b)});var r={};return Q(e,function(i,n){r[n]={};var o=i.stacks,s=i.bandWidth,d=G(i.categoryGap,s),c=G(i.gap,1),l=i.remainedWidth,a=i.autoWidthCount,u=(l-d)/(a+(a-1)*c);u=Math.max(u,0),Q(o,function(f,g){var b=f.maxWidth;b&&b<u&&(b=Math.min(b,l),f.width&&(b=Math.min(b,f.width)),l-=b,f.width=b,a--)}),u=(l-d)/(a+(a-1)*c),u=Math.max(u,0);var h=0,y;Q(o,function(f,g){f.width||(f.width=u),y=f,h+=f.width*(1+c)}),y&&(h-=y.width*c);var p=-h/2;Q(o,function(f,g){r[n][g]=r[n][g]||{offset:p,width:f.width},p+=f.width*(1+c)})}),r}var Mi={startAngle:90,clockwise:!0,splitNumber:12,axisLabel:{rotate:0}},Gi={splitNumber:5},Vi=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r}return e.type="polar",e}(Yr);function Hi(t){Ie(Fr),et.registerAxisPointerClass("PolarAxisPointer",yi),t.registerCoordinateSystem("polar",_i),t.registerComponentModel(xi),t.registerComponentView(Vi),St(t,"angle",Ei,Mi),St(t,"radius",Ci,Gi),t.registerComponentView(wi),t.registerComponentView(Di),t.registerLayout(zr(qi,"bar"))}Ie([tt,nt]);const Ut=({value:t,min:e=0,max:r=100,width:i=220,height:n=240,title:o="Metric",detailText:s="30%",axisBgColor:d,axisWidth:c=50,tickColor:l,...a})=>{const{theme:u}=Ve(a.theme,a.colors),h=V.useRef(null),y=V.useMemo(()=>{const p=d??u.axis.r.tickColor,f=u.series[0].color,g=u.axis.r.lineColor,b=l??u.axis.r.tickLabelColor,x=l??u.axis.r.tickLabelColor;return{series:[{type:"gauge",center:["50%","65%"],radius:"90%",startAngle:170,endAngle:10,min:e,max:r,axisLine:{lineStyle:{width:c,color:[[t/r,f],[1,p]]}},pointer:{length:"70%",width:8,icon:"path://M-2,0 L0,-51 L 2,0 A1, 1 0 0 1 -2, 0 Z",itemStyle:{color:g}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},title:{offsetCenter:[0,"85%"],fontSize:13,fontWeight:"600",color:b},detail:{offsetCenter:[0,"115%"],fontSize:11,color:x},data:[{value:t,name:o,detail:{formatter:s}}]}]}},[u,t,e,r,o,s,d,c,l]);return V.useEffect(()=>{let p;if(h.current)try{p=Se(h.current,"light",{width:i,height:n}),p.setOption(y)}catch(f){console.warn("Chart initialization error:",f)}return()=>{if(p)try{p.dispose()}catch(f){console.warn("Chart disposal error:",f)}}},[y,i,n]),D.createElement(ke,{ref:h})},An=Object.assign(Me(Ge(Ut),"value"),{displayName:"SimpleGauge"});Ut.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{value:{required:!0,tsType:{name:"number"},description:"Current value to display on the gauge."},min:{required:!1,tsType:{name:"number"},description:`Minimum value of the gauge scale.
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`Maximum value of the gauge scale.
@default 100`,defaultValue:{value:"100",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Width of the chart in pixels.",defaultValue:{value:"220",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the chart in pixels.",defaultValue:{value:"240",computed:!1}},theme:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0},description:"Primary color for the data series"},{key:"lineWidth",value:{name:"number",required:!1},description:"Width of lines for line/area charts in pixels"},{key:"borderRadius",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1},description:"Border radius for each corner [top-left, top-right, bottom-right, bottom-left]"},{key:"borderColor",value:{name:"string",required:!1},description:"Color of the border around chart items"},{key:"borderWidth",value:{name:"number",required:!1},description:"Width of the border around chart items in pixels"},{key:"borderType",value:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}],required:!1},description:"Style of the border: 'solid', 'dashed', or 'dotted'"}]}}],raw:"Series[]",required:!0},description:"Array of series styles that cycle through for multiple data series"}]}}],raw:"Partial<ChartTheme>"},description:"Partial theme override for customizing chart appearance."},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Colors for the chart.
@default theme.itemStyles.map(item => item.color)`},axisBgColor:{required:!1,tsType:{name:"string"},description:"Background color for the axis/track."},axisWidth:{required:!1,tsType:{name:"number"},description:"Width of the axis line in pixels.",defaultValue:{value:"50",computed:!1}},tickColor:{required:!1,tsType:{name:"string"},description:"Color for tick marks and split lines."},title:{required:!1,tsType:{name:"string"},description:`Title text displayed on the gauge.
@default 'Metric'`,defaultValue:{value:"'Metric'",computed:!1}},detailText:{required:!1,tsType:{name:"string"},description:`Detail text showing the value.
@default '30%'`,defaultValue:{value:"'30%'",computed:!1}}}};const Bi=t=>t.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),Je=t=>{if(t&&t.nodeType===1&&typeof t.getBoundingClientRect=="function")return t.getBoundingClientRect();throw new Error("Can not get boundingClientRect of "+t||"undefined")},ji=(t,e)=>{const r=t==null?void 0:t.parentNode;r&&setTimeout(()=>{const i=Je(r),{height:n,left:o,top:s,width:d}=Je(t),c=o-i.left,l=s-i.top;e(c,l,d,n,o,s)},0)};function $i(){const t=this.state.touchable.responderID;t!==null&&ji(t,this._handleQueryLayout)}function Fi(t){return t.replace("<svg",~t.indexOf("xmlns")?"<svg":'<svg xmlns="http://www.w3.org/2000/svg"').replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}const zi=new Set(["stdDeviation","edgeMode","kernelMatrix","kernelUnitLength","preserveAlpha","baseFrequency","targetX","targetY","numOctaves","stitchTiles","filterUnits","primitiveUnits","pathLength","gradientUnits","gradientTransform","spreadMethod","markerHeight","markerUnits","markerWidth","viewBox","refX","refY","maskContentUnits","maskUnits","patternContentUnits","patternTransform","patternUnits","textLength","lengthAdjust","startOffset","clipPathUnits"]),Yi=t=>zi.has(t)?t:Bi(t);function Kt(t){return!!(t.onPress||t.onPressIn||t.onPressOut||t.onLongPress)}function Xi(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function st(t,e,r,i){this.message=t,this.expected=e,this.found=r,this.location=i,this.name="SyntaxError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,st)}Xi(st,Error);st.buildMessage=function(t,e){var r={literal:function(l){return'"'+n(l.text)+'"'},class:function(l){var a="",u;for(u=0;u<l.parts.length;u++)a+=l.parts[u]instanceof Array?o(l.parts[u][0])+"-"+o(l.parts[u][1]):o(l.parts[u]);return"["+(l.inverted?"^":"")+a+"]"},any:function(l){return"any character"},end:function(l){return"end of input"},other:function(l){return l.description}};function i(l){return l.charCodeAt(0).toString(16).toUpperCase()}function n(l){return l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(a){return"\\x0"+i(a)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(a){return"\\x"+i(a)})}function o(l){return l.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(a){return"\\x0"+i(a)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(a){return"\\x"+i(a)})}function s(l){return r[l.type](l)}function d(l){var a=new Array(l.length),u,h;for(u=0;u<l.length;u++)a[u]=s(l[u]);if(a.sort(),a.length>0){for(u=1,h=1;u<a.length;u++)a[u-1]!==a[u]&&(a[h]=a[u],h++);a.length=h}switch(a.length){case 1:return a[0];case 2:return a[0]+" or "+a[1];default:return a.slice(0,-1).join(", ")+", or "+a[a.length-1]}}function c(l){return l?'"'+n(l)+'"':"end of input"}return"Expected "+d(t)+" but "+c(e)+" found."};function Ui(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function Be(t,e,r,i){var n=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(n,Be.prototype),n.expected=e,n.found=r,n.location=i,n.name="SyntaxError",n}Ui(Be,Error);function Fe(t,e,r){return r=r||" ",t.length>e?t:(e-=t.length,r+=r.repeat(e),t+r.slice(0,e))}Be.prototype.format=function(t){var e="Error: "+this.message;if(this.location){var r=null,i;for(i=0;i<t.length;i++)if(t[i].source===this.location.source){r=t[i].text.split(/\r\n|\n|\r/g);break}var n=this.location.start,o=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(n):n,s=this.location.source+":"+o.line+":"+o.column;if(r){var d=this.location.end,c=Fe("",o.line.toString().length," "),l=r[n.line-1],a=n.line===d.line?d.column:l.length+1,u=a-n.column||1;e+=`
 --> `+s+`
`+c+` |
`+o.line+" | "+l+`
`+c+" | "+Fe("",n.column-1," ")+Fe("",u,"^")}else e+=`
 at `+s}return e};Be.buildMessage=function(t,e){var r={literal:function(l){return'"'+n(l.text)+'"'},class:function(l){var a=l.parts.map(function(u){return Array.isArray(u)?o(u[0])+"-"+o(u[1]):o(u)});return"["+(l.inverted?"^":"")+a.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(l){return l.description}};function i(l){return l.charCodeAt(0).toString(16).toUpperCase()}function n(l){return l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(a){return"\\x0"+i(a)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(a){return"\\x"+i(a)})}function o(l){return l.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(a){return"\\x0"+i(a)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(a){return"\\x"+i(a)})}function s(l){return r[l.type](l)}function d(l){var a=l.map(s),u,h;if(a.sort(),a.length>0){for(u=1,h=1;u<a.length;u++)a[u-1]!==a[u]&&(a[h]=a[u],h++);a.length=h}switch(a.length){case 1:return a[0];case 2:return a[0]+" or "+a[1];default:return a.slice(0,-1).join(", ")+", or "+a[a.length-1]}}function c(l){return l?'"'+n(l)+'"':"end of input"}return"Expected "+d(t)+" but "+c(e)+" found."};const ze=t=>{if(t.endsWith("rad"))return parseFloat(t)*(180/Math.PI);if(t.endsWith("deg"))return parseFloat(t)};function Ki(t){return t?t.map(e=>{const[r,i]=Object.entries(e)[0];switch(r){case"translateX":return`translate(${i}, 0)`;case"translateY":return`translate(0, ${i})`;case"rotate":return`rotate(${ze(i)})`;case"scale":return`scale(${i})`;case"scaleX":return`scale(${i}, 1)`;case"scaleY":return`scale(1, ${i})`;case"skewX":return`skewX(${ze(i)})`;case"skewY":return`skewY(${ze(i)})`;case"matrix":return`matrix(${i.join(", ")})`;default:return""}}).join(" "):""}function Ye(t,e){const r=[];if(e&&r.push(...Zi(e)),Array.isArray(t))if(typeof t[0]=="number")r.push(`matrix(${t.join(" ")})`);else{const i=Ki(t).split(" ");r.push(...i)}else typeof t=="string"&&r.push(t);return r.length?r.join(" "):void 0}function Zi(t){const e=[];return t.translate!=null&&e.push(`translate(${t.translate})`),(t.translateX!=null||t.translateY!=null)&&e.push(`translate(${t.translateX||0}, ${t.translateY||0})`),t.scale!=null&&e.push(`scale(${t.scale})`),(t.scaleX!=null||t.scaleY!=null)&&e.push(`scale(${t.scaleX||1}, ${t.scaleY||1})`),t.rotation!=null&&e.push(`rotate(${t.rotation})`),t.skewX!=null&&e.push(`skewX(${t.skewX})`),t.skewY!=null&&e.push(`skewY(${t.skewY})`),e}function Qi(t,e){return t?rt?[t,e]:t[Symbol.iterator]?Object.assign({},...t,e):Object.assign({},t,e):e}const Ji=[];function en(t){return Ji[t-1]}var tn={getAssetByID:en};const rn=/^(data:image\/svg\+xml;utf8,)(.*)/;function nn(t){let e={};if(typeof t=="number"){const i=tn.getAssetByID(t);if(i==null)throw new Error(`Image: asset with ID "${t}" could not be found. Please check the image source or packager.`);if(e={width:i.width,height:i.height,scale:i.scales[0]},i.scales.length>1){const o=Ce.get();e.scale=i.scales.reduce((s,d)=>Math.abs(d-o)<Math.abs(s-o)?d:s)}const n=e.scale!==1?`@${e.scale}x`:"";e.uri=i?`${i.httpServerLocation}/${i.name}${n}.${i.type}`:""}else typeof t=="string"?e.uri=t:t&&!Array.isArray(t)&&typeof t.uri=="string"&&(e.uri=t.uri);if(e.uri){var r;const i=(r=e)===null||r===void 0||(r=r.uri)===null||r===void 0?void 0:r.match(rn);if(i){const[,n,o]=i,s=encodeURIComponent(o);return e.uri=`${n}${s}`,e}}return e}const qt=(t,e=t.props)=>{const{transform:r,origin:i,originX:n,originY:o,fontFamily:s,fontSize:d,fontWeight:c,fontStyle:l,style:a,forwardedRef:u,gradientTransform:h,patternTransform:y,onPress:p,...f}=e,g={...Kt(e)?{onStartShouldSetResponder:t.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:t.touchableHandleResponderTerminationRequest,onResponderGrant:t.touchableHandleResponderGrant,onResponderMove:t.touchableHandleResponderMove,onResponderRelease:t.touchableHandleResponderRelease,onResponderTerminate:t.touchableHandleResponderTerminate}:null,...f};i!=null?g["transform-origin"]=i.toString().replace(","," "):(n!=null||o!=null)&&(g["transform-origin"]=`${n||0} ${o||0}`);const b=Ye(r,e);b&&(g.transform=b);const x=Ye(h);x&&(g.gradientTransform=x);const S=Ye(y);S&&(g.patternTransform=S),g.ref=_=>{t.elementRef.current=_,typeof u=="function"?u(_):u&&(u.current=_)};const E={};if(s!=null&&(E.fontFamily=s),d!=null&&(E.fontSize=d),c!=null&&(E.fontWeight=c),l!=null&&(E.fontStyle=l),g.style=Qi(a,E),p!==null&&(g.onClick=e.onPress),e.href!==null&&e.href!==void 0){var T;g.href=(T=nn(e.href))===null||T===void 0?void 0:T.uri}return g};function It(t){const e=t>>16&255,r=t>>8&255,i=t&255,o=((t>>24&255)/255).toFixed(2);return`rgba(${e},${r},${i},${o})`}const on={top:20,left:20,right:20,bottom:30},{Mixin:Zt}=ci,{touchableHandleStartShouldSetResponder:an,touchableHandleResponderTerminationRequest:ln,touchableHandleResponderGrant:sn,touchableHandleResponderMove:un,touchableHandleResponderRelease:cn,touchableHandleResponderTerminate:dn,touchableGetInitialState:hn}=Zt,Qt={...Zt,touchableHandleStartShouldSetResponder(t){const{onStartShouldSetResponder:e}=this.props;return e?e(t):an.call(this,t)},touchableHandleResponderTerminationRequest(t){const{onResponderTerminationRequest:e}=this.props;return e?e(t):ln.call(this,t)},touchableHandleResponderGrant(t){const{onResponderGrant:e}=this.props;return e?e(t):sn.call(this,t)},touchableHandleResponderMove(t){const{onResponderMove:e}=this.props;return e?e(t):un.call(this,t)},touchableHandleResponderRelease(t){const{onResponderRelease:e}=this.props;return e?e(t):cn.call(this,t)},touchableHandleResponderTerminate(t){const{onResponderTerminate:e}=this.props;return e?e(t):dn.call(this,t)},touchableHandlePress(t){const{onPress:e}=this.props;e&&e(t)},touchableHandleActivePressIn(t){const{onPressIn:e}=this.props;e&&e(t)},touchableHandleActivePressOut(t){const{onPressOut:e}=this.props;e&&e(t)},touchableHandleLongPress(t){const{onLongPress:e}=this.props;e&&e(t)},touchableGetPressRectOffset(){const{pressRetentionOffset:t}=this.props;return t||on},touchableGetHitSlop(){const{hitSlop:t}=this.props;return t},touchableGetHighlightDelayMS(){const{delayPressIn:t}=this.props;return t||0},touchableGetLongPressDelayMS(){const{delayLongPress:t}=this.props;return t===0?0:t||500},touchableGetPressOutDelayMS(){const{delayPressOut:t}=this.props;return t||0}},ut=Object.keys(Qt),pn=ut.map(t=>Qt[t]),gn=ut.length,fn=t=>{for(let e=0;e<gn;e++){const r=ut[e],i=pn[e];typeof i=="function"?t[r]=i.bind(t):t[r]=i}t.state=hn()};class ue extends D.Component{constructor(r){super(r);te(this,"elementRef",D.createRef());te(this,"lastMergedProps",{});Kt(r)&&fn(this),this._remeasureMetricsOnActivation=$i.bind(this)}prepareProps(r){return r}setNativeProps(r){const i=Object.assign({},this.props,this.lastMergedProps,r.style);this.lastMergedProps=i;const n=qt(this,this.prepareProps(i)),o=this.elementRef.current;if(o)for(const s of Object.keys(n)){const d=n[s];switch(s){case"ref":case"children":break;case"style":for(const c of[].concat(n.style??[]))Object.assign(o.style,c);break;case"fill":if(d&&typeof d=="object"){const c=d;o.setAttribute("fill",It(c.payload))}break;case"stroke":if(d&&typeof d=="object"){const c=d;o.setAttribute("stroke",It(c.payload))}break;default:o.setAttribute(Yi(s),d);break}}}render(){if(!this.tag)throw new Error("When extending `WebShape` you need to overwrite either `tag` or `render`!");return this.lastMergedProps={},Xr(this.tag,qt(this,this.prepareProps(this.props)))}}class mn extends ue{constructor(){super(...arguments);te(this,"tag","defs")}}class Xe extends ue{constructor(){super(...arguments);te(this,"tag","g")}prepareProps(r){const{x:i,y:n,...o}=r;return(i||n)&&!o.translate&&(o.translate=`${i||0}, ${n||0}`),o}}class Mt extends ue{constructor(){super(...arguments);te(this,"tag","linearGradient")}}class Le extends ue{constructor(){super(...arguments);te(this,"tag","path")}}class Ne extends ue{constructor(){super(...arguments);te(this,"tag","stop")}}class yn extends ue{constructor(){super(...arguments);te(this,"tag","svg")}toDataURL(r,i={}){const n=this.elementRef.current;if(n===null)return;const o=Je(n),s=Number(i.width)||o.width,d=Number(i.height)||o.height,c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttribute("viewBox",`0 0 ${o.width} ${o.height}`),c.setAttribute("width",String(s)),c.setAttribute("height",String(d)),c.appendChild(n.cloneNode(!0));const l=new window.Image;l.onload=()=>{const a=document.createElement("canvas");a.width=s,a.height=d;const u=a.getContext("2d");u==null||u.drawImage(l,0,0),r(a.toDataURL().replace("data:image/png;base64,",""))},l.src=`data:image/svg+xml;utf8,${Fi(new window.XMLSerializer().serializeToString(c))}`}}class Ue extends ue{constructor(){super(...arguments);te(this,"tag","text")}}console.error.bind(console);const vn=({value:t,max:e=100,showInnerArc:r=!1,width:i,height:n,animationDuration:o=1e3,colors:s,axisBgColor:d,axisWidth:c,tickColor:l})=>{const{theme:a}=Ve(void 0,s),u=a.series.map(W=>W.color),h=l??d??a.axis.r.tickColor,y=a.axis.r.tickLabelColor,p=a.axis.r.lineColor,f=d??a.grid.r.lineColor,g=di(),[b,x]=V.useState(t),S=V.useRef(t),E=V.useRef(void 0),T=V.useRef(void 0);V.useEffect(()=>{const W=S.current,B=t,M=new Date().getTime();T.current=M;const F=()=>{const K=new Date().getTime()-M,Z=Math.min(K/o,1),$e=(be=>1-Math.pow(1-be,3))(Z),Ae=W+(B-W)*$e;S.current=Ae,x(Ae),Z<1&&(E.current=requestAnimationFrame(F))};return E.current&&cancelAnimationFrame(E.current),E.current=requestAnimationFrame(F),()=>{E.current&&cancelAnimationFrame(E.current)}},[t,o]);const _=n??g.height*.9,O=Math.min(i??_,_),N=12,m=O/2,k=(O-N)/2-20,q=c??3,R=-135,P=135,C=P-R,w=b/e*100/100*C,L=(W,B,M,F)=>{const $=(F-90)*Math.PI/180;return{x:W+M*Math.cos($),y:B+M*Math.sin($)}},H=(W,B,M,F,$)=>{const K=L(W,B,M,$),Z=L(W,B,M,F);return`M ${K.x} ${K.y} A ${M} ${M} 0 1 0 ${Z.x} ${Z.y}`},j=(W,B,M)=>{const F=Ae=>{const be=Ae.replace("#","");return{r:parseInt(be.substring(0,2),16),g:parseInt(be.substring(2,4),16),b:parseInt(be.substring(4,6),16)}},$=F(W),K=F(B),Z=Math.round($.r+M*(K.r-$.r)),ve=Math.round($.g+M*(K.g-$.g)),$e=Math.round($.b+M*(K.b-$.b));return`rgb(${Z}, ${ve}, ${$e})`},z=W=>{if(u.length===0)return"#FF6B6B";if(u.length===1)return u[0];const B=W*(u.length-1),M=Math.floor(B),F=Math.min(M+1,u.length-1),$=B-M;return j(u[M],u[F],$)},Y=50,J=[],ee=Math.round(w/C*Y),ie=20;for(let W=0;W<=Y;W++){const B=R+W/Y*C,M=W<=ee,F=ie,$=L(m,m,k+10,B),K=L(m,m,k+10-F,B);let Z;if(M){const ve=W/Y;Z=z(ve)}else Z=h;J.push(D.createElement(Le,{key:W,d:`M ${$.x} ${$.y} L ${K.x} ${K.y}`,stroke:Z,strokeWidth:q,strokeLinecap:"round"}))}const me=[],je=[],dt=[0,20,40,60,80,100],rr=k-40,ir=4,nr=2,ye=k-ie-4;for(const W of dt){const B=R+W/e*C,M=L(m,m,rr,B);me.push(D.createElement(Ue,{key:`label-${W}`,x:M.x,y:M.y,textAnchor:"middle",fontSize:"12",fill:y},W));const F=L(m,m,ye,B),$=L(m,m,ye-ir,B);je.push(D.createElement(Le,{key:`inner-tick-${W}`,d:`M ${F.x} ${F.y} L ${$.x} ${$.y}`,stroke:p,strokeWidth:2,strokeLinecap:"round"}))}for(let W=0;W<=e;W+=2){if(dt.includes(W))continue;const B=R+W/e*C,M=L(m,m,ye,B),F=L(m,m,ye-nr,B);je.push(D.createElement(Le,{key:`inner-minor-tick-${W}`,d:`M ${M.x} ${M.y} L ${F.x} ${F.y}`,stroke:h,strokeWidth:1,strokeLinecap:"round"}))}return D.createElement(yn,{width:O,height:O,viewBox:`0 0 ${O} ${O}`},D.createElement(mn,null,D.createElement(Mt,{id:"gaugeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},D.createElement(Ne,{offset:"0%",stopColor:u[0],stopOpacity:"1"}),D.createElement(Ne,{offset:"100%",stopColor:u[u.length-1],stopOpacity:"1"})),D.createElement(Mt,{id:"outerArcGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},D.createElement(Ne,{offset:"0%",stopColor:u[0],stopOpacity:"0.8"}),D.createElement(Ne,{offset:"100%",stopColor:u[u.length-1],stopOpacity:"0.8"}))),D.createElement(Xe,null,J),r&&D.createElement(Le,{d:H(m,m,ye,R,P),fill:"none",stroke:f,strokeWidth:1,opacity:.5}),D.createElement(Xe,null,je),D.createElement(Xe,null,me),D.createElement(Ue,{x:m,y:m+10,textAnchor:"middle",fontSize:"56",fontWeight:"bold",fill:a.axis.r.tickLabelColor},Math.round(b)),D.createElement(Ue,{x:m,y:m+30,textAnchor:"middle",fontSize:"14",fill:y},"Value"))},Jt=({value:t=46,min:e=0,max:r=90,width:i,height:n,axisBgColor:o,axisWidth:s,tickColor:d,showInnerArc:c,animationDuration:l,...a})=>D.createElement(vn,{value:t,max:r,width:i,height:n,colors:a.colors,axisBgColor:o,axisWidth:s,tickColor:d,showInnerArc:c,animationDuration:l}),Tn=Object.assign(Me(Ge(Jt),"value"),{displayName:"DigitalGauge"});Jt.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{value:{required:!1,tsType:{name:"number"},description:"Current value to display on the gauge.",defaultValue:{value:"46",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`Minimum value of the gauge scale.
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`Maximum value of the gauge scale.
@default 100`,defaultValue:{value:"90",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Width of the chart in pixels."},height:{required:!1,tsType:{name:"number"},description:"Height of the chart in pixels."},theme:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0},description:"Primary color for the data series"},{key:"lineWidth",value:{name:"number",required:!1},description:"Width of lines for line/area charts in pixels"},{key:"borderRadius",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1},description:"Border radius for each corner [top-left, top-right, bottom-right, bottom-left]"},{key:"borderColor",value:{name:"string",required:!1},description:"Color of the border around chart items"},{key:"borderWidth",value:{name:"number",required:!1},description:"Width of the border around chart items in pixels"},{key:"borderType",value:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}],required:!1},description:"Style of the border: 'solid', 'dashed', or 'dotted'"}]}}],raw:"Series[]",required:!0},description:"Array of series styles that cycle through for multiple data series"}]}}],raw:"Partial<ChartTheme>"},description:"Partial theme override for customizing chart appearance."},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Colors for the chart.
@default theme.itemStyles.map(item => item.color)`},axisBgColor:{required:!1,tsType:{name:"string"},description:"Background color for the axis/track."},axisWidth:{required:!1,tsType:{name:"number"},description:"Width of the axis line in pixels."},tickColor:{required:!1,tsType:{name:"string"},description:"Color for tick marks and split lines."},showInnerArc:{required:!1,tsType:{name:"boolean"},description:`Whether to show the inner arc.
@default false`},animationDuration:{required:!1,tsType:{name:"number"},description:`Animation duration in milliseconds.
@default 1000`}}};Ie([tt,nt]);const er=({value:t=85,min:e=0,max:r=100,width:i=400,height:n=250,axisColors:o,axisColorLengths:s,axisBgColor:d="transparent",axisWidth:c=30,tickColor:l,...a})=>{const{theme:u}=Ve(a.theme,a.colors),h=V.useRef(null),y=V.useRef(null),p=V.useMemo(()=>({series:[{type:"gauge",center:["50%","50%"],radius:"90%",startAngle:200,endAngle:-20,min:e,max:r,splitNumber:6,axisLine:{lineStyle:{width:50,color:[[1,d]]}},pointer:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1},data:[{value:r}]}]}),[r,e,d,c]),f=V.useMemo(()=>{const g=u.axis.r.lineColor||"#1e3a8a",b="#ffffff",x=l||u.axis.r.tickColor||u.grid.r.lineColor||"#666666",S=u.axis.r.tickLabelColor||"#666666";u.axis.r.tickColor;let E;o&&o.length>0?E=o:E=[u.series[0].color,u.series.length>1?u.series[1].color:u.series[0].color];let T;if(s&&s.length>0)T=s;else{const m=(r-e)/E.length;T=E.map((k,q)=>e+(q+1)*m)}const _=Math.min(E.length,T.length),I=T.slice(0,_).map(m=>Math.min(m,r)),O=E.slice(0,_),N=I.map((m,k)=>[m/r,O[k]]);return N.length>0&&N[N.length-1][0]<1&&(N[N.length-1][0]=1),{backgroundColor:"transparent",series:[{type:"gauge",center:["50%","50%"],radius:"90%",startAngle:200,endAngle:-20,min:e,max:r,splitNumber:(r-e)/10,axisLine:{lineStyle:{width:c,color:N}},pointer:{itemStyle:{color:g},length:"70%",width:4,icon:"path://M-2,0 L0,-50 L2,0 A1,1 0 0,1 -2,0 Z"},axisTick:{distance:0,length:0,splitNumber:20,lineStyle:{color:x,width:1}},splitLine:{distance:0,length:10,lineStyle:{color:x,width:1.5},show:function(m){return m%20===0}},axisLabel:{show:!0,distance:c,color:S,fontSize:12,fontWeight:"bold",formatter:function(m){return m%20===0?m.toString():""}},anchor:{show:!0,showAbove:!0,size:14,itemStyle:{color:b,borderColor:g,borderWidth:2,shadowBlur:4,shadowColor:"rgba(0, 0, 0, 0.2)"}},detail:{show:!1},data:[{value:t}]}]}},[u,t,e,r,o,s,c,l]);return V.useEffect(()=>{let g;if(h.current)try{g=Se(h.current,"light",{width:i,height:n}),g.setOption(f)}catch(b){console.warn("Chart initialization error:",b)}return()=>{if(g)try{g.dispose()}catch(b){console.warn("Chart disposal error:",b)}}},[f,i,n]),V.useEffect(()=>{let g;return y.current&&(g=Se(y.current,"light",{width:i,height:n})),g.setOption(p),()=>{g&&g.dispose()}},[p,i,n]),D.createElement(he,{style:[Gt.container,{width:i,height:n}]},D.createElement(he,{style:Gt.chartContainer},D.createElement(ke,{ref:y}),D.createElement(he,{style:{position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%"}},D.createElement(ke,{ref:h}))))},Gt=rt.create({container:{position:"relative",justifyContent:"center",alignItems:"center"},chartContainer:{position:"absolute",top:0,left:0,right:0,bottom:0,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"}}),_n=Object.assign(Me(Ge(er),"value"),{displayName:"SpeedometerGauge"});er.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{value:{required:!1,tsType:{name:"number"},description:"Current value to display on the gauge.",defaultValue:{value:"85",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`Minimum value of the gauge scale.
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`Maximum value of the gauge scale.
@default 100`,defaultValue:{value:"100",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Width of the chart in pixels.",defaultValue:{value:"400",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the chart in pixels.",defaultValue:{value:"250",computed:!1}},theme:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0},description:"Primary color for the data series"},{key:"lineWidth",value:{name:"number",required:!1},description:"Width of lines for line/area charts in pixels"},{key:"borderRadius",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1},description:"Border radius for each corner [top-left, top-right, bottom-right, bottom-left]"},{key:"borderColor",value:{name:"string",required:!1},description:"Color of the border around chart items"},{key:"borderWidth",value:{name:"number",required:!1},description:"Width of the border around chart items in pixels"},{key:"borderType",value:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}],required:!1},description:"Style of the border: 'solid', 'dashed', or 'dotted'"}]}}],raw:"Series[]",required:!0},description:"Array of series styles that cycle through for multiple data series"}]}}],raw:"Partial<ChartTheme>"},description:"Partial theme override for customizing chart appearance."},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Colors for the chart.
@default theme.itemStyles.map(item => item.color)`},axisBgColor:{required:!1,tsType:{name:"string"},description:"Background color for the axis/track.",defaultValue:{value:"'transparent'",computed:!1}},axisWidth:{required:!1,tsType:{name:"number"},description:"Width of the axis line in pixels.",defaultValue:{value:"30",computed:!1}},tickColor:{required:!1,tsType:{name:"string"},description:"Color for tick marks and split lines."},axisColors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Array of colors for the axis segments.
If not provided, uses theme colors.
Example: ['#e74c3c', '#3498db', '#2ecc71']`},axisColorLengths:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:`Array of endpoint values for each color segment.
The length should match axisColors length.
Each value represents the endpoint (threshold) for that color segment.
Example: [40, 80, 120] means:
  - First color: 0 to 40
  - Second color: 40 to 80
  - Third color: 80 to 120
If not provided, segments are divided evenly based on max value.`}}};Ie([tt,nt,Kr,Hi]);const tr=({value:t,min:e=0,max:r=100,width:i=220,height:n=240,axisBgColor:o,axisWidth:s,tickColor:d,...c})=>{const{theme:l}=Ve(c.theme,c.colors),a=V.useRef(null),u=V.useRef(null),h=V.useMemo(()=>{const p=Math.min(i,n),f=p*.3,g=p*.48,b=o??l.axis.r.tickColor,x=l.series[0].color;return{polar:{center:["50%","50%"],radius:[f,g]},angleAxis:{max:r,startAngle:225,endAngle:-45,clockwise:!0,show:!1},radiusAxis:{type:"category",data:["Data"],show:!1},series:[{type:"bar",data:[r],coordinateSystem:"polar",name:"Background",tooltip:{show:!1},itemStyle:{color:b,borderRadius:[50,50]},animation:!1,barWidth:"50%",emphasis:{disabled:!0}},{type:"bar",data:[t],coordinateSystem:"polar",name:"Value",itemStyle:{color:x,borderRadius:[50,50]},barWidth:"50%",barGap:"-100%",emphasis:{disabled:!0}}]}},[l,t,r,i,n,o]),y=V.useMemo(()=>{const f=Math.min(i,n)*.32,g=o??l.axis.r.tickColor,b=l.axis.r.lineColor,x=d??l.axis.r.tickColor,S=d??l.axis.r.tickColor,E=l.axis.r.tickLabelColor,T=l.axis.r.lineColor,_=d??l.axis.r.tickColor,I=l.axis.r.tickLabelColor,O=l.axis.r.tickLabelColor;return{series:[{type:"gauge",center:["50%","50%"],radius:f,startAngle:225,endAngle:-45,min:e,max:r,splitNumber:5,axisLine:{show:!1,distance:1,length:8,lineStyle:{width:s??1,color:[[1,g]]}},pointer:{length:"80%",width:8,icon:"path://M-4,0 L-2,-50 A1, 1 0 0 1 2, -50 L4,0 A1, 1 0 0 1 -4, 0 Z",itemStyle:{color:b}},axisTick:{distance:1,length:4,splitNumber:16,lineStyle:{color:x,width:.5}},splitLine:{distance:1,length:8,lineStyle:{color:S,width:1}},axisLabel:{show:!0,distance:16,fontSize:12,color:E,formatter:function(N){return N===20||N===80?N.toString():""}},anchor:{show:!0,showAbove:!0,size:8,itemStyle:{color:T,borderColor:_,borderWidth:3,shadowBlur:3,shadowColor:"rgba(0,0,0,0.15)"}},detail:{valueAnimation:!0,formatter:function(N){return"{value|"+Math.round(N)+"}{unit|/100}"},offsetCenter:[0,"70%"],rich:{value:{fontSize:40,fontWeight:"bold",color:I},unit:{verticalAlign:"bottom",fontSize:16,color:O,fontWeight:"normal"}}},data:[{value:t}]}],style:{backgroundColor:"transparent"}}},[l,t,e,r,i,n,o,s,d]);return V.useEffect(()=>{let p;if(u.current)try{p=Se(u.current,"light",{width:i,height:n}),p.setOption(h)}catch(f){console.warn("Radial chart initialization error:",f)}return()=>{if(p)try{p.dispose()}catch(f){console.warn("Radial chart disposal error:",f)}}},[h,i,n]),V.useEffect(()=>{let p;if(a.current)try{p=Se(a.current,"light",{width:i,height:n}),p.setOption(y)}catch(f){console.warn("Gauge chart initialization error:",f)}return()=>{if(p)try{p.dispose()}catch(f){console.warn("Gauge chart disposal error:",f)}}},[y,i,n]),D.createElement(he,{style:[Ke.container,{width:i,height:n}]},D.createElement(he,{style:Ke.radialChart},D.createElement(ke,{ref:u})),D.createElement(he,{style:Ke.gaugeChart},D.createElement(ke,{ref:a})))},Ke=rt.create({container:{position:"relative",justifyContent:"center",alignItems:"center"},radialChart:{position:"absolute",top:0,left:0,right:0,bottom:0,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"},gaugeChart:{position:"absolute",top:0,left:0,right:0,bottom:0,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"}}),Pn=Object.assign(Me(Ge(tr),"value"),{displayName:"RadialGauge"});tr.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{value:{required:!0,tsType:{name:"number"},description:"Current value to display on the gauge."},min:{required:!1,tsType:{name:"number"},description:`Minimum value of the gauge scale.
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`Maximum value of the gauge scale.
@default 100`,defaultValue:{value:"100",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Width of the chart in pixels.",defaultValue:{value:"220",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"Height of the chart in pixels.",defaultValue:{value:"240",computed:!1}},theme:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"color",value:{name:"string",required:!0},description:"Primary color for the data series"},{key:"lineWidth",value:{name:"number",required:!1},description:"Width of lines for line/area charts in pixels"},{key:"borderRadius",value:{name:"Array",elements:[{name:"number"}],raw:"number[]",required:!1},description:"Border radius for each corner [top-left, top-right, bottom-right, bottom-left]"},{key:"borderColor",value:{name:"string",required:!1},description:"Color of the border around chart items"},{key:"borderWidth",value:{name:"number",required:!1},description:"Width of the border around chart items in pixels"},{key:"borderType",value:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}],required:!1},description:"Style of the border: 'solid', 'dashed', or 'dotted'"}]}}],raw:"Series[]",required:!0},description:"Array of series styles that cycle through for multiple data series"}]}}],raw:"Partial<ChartTheme>"},description:"Partial theme override for customizing chart appearance."},colors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Colors for the chart.
@default theme.itemStyles.map(item => item.color)`},axisBgColor:{required:!1,tsType:{name:"string"},description:"Background color for the axis/track."},axisWidth:{required:!1,tsType:{name:"number"},description:"Width of the axis line in pixels."},tickColor:{required:!1,tsType:{name:"string"},description:"Color for tick marks and split lines."}}};const ct={value:{control:"number",description:"Current value to display on the gauge."},min:{control:"number",description:"Minimum value of the gauge scale. Default: 0"},max:{control:"number",description:"Maximum value of the gauge scale. Default: 100"},width:{control:"number",description:"Width of the chart in pixels."},height:{control:"number",description:"Height of the chart in pixels."},theme:{control:"object",description:"Partial theme override for customizing chart appearance."},colors:{control:"object",description:"Colors for the chart. Overrides theme colors."},axisBgColor:{control:"color",description:"Background color for the axis/track."},axisWidth:{control:"number",description:"Width of the axis line in pixels."},tickColor:{control:"color",description:"Color for tick marks and split lines."}},wn={value:50,min:0,max:100,width:320,height:320},Ln={...ct,axisColors:{control:"object",description:"Array of colors for axis segments. Example: ['#e74c3c', '#3498db', '#2ecc71']"},axisColorLengths:{control:"object",description:"Endpoint values for each color segment. Length should match axisColors."},axisBgColor:{control:"color",description:"Background color for the axis line. Default: transparent"},axisWidth:{control:"number",description:"Width of the axis line in pixels. Default: 30"},tickColor:{control:"color",description:"Color for tick marks and split lines."}},Nn={...ct,showInnerArc:{control:"boolean",description:"Whether to show the inner arc. Default: false"},animationDuration:{control:"number",description:"Animation duration in milliseconds. Default: 1000"}},Dn={...ct,title:{control:"text",description:"Title text displayed on the gauge. Default: 'Metric'"},detailText:{control:"text",description:"Detail text showing the value. Default: '30%'"}};export{Tn as D,Pn as R,An as S,_n as a,wn as c,Nn as d,ct as g,Dn as l,Ln as s};
