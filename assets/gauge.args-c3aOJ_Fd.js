var cr=Object.defineProperty;var hr=(t,e,r)=>e in t?cr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var te=(t,e,r)=>hr(t,typeof e!="symbol"?e+"":e,r);import{dc as Me,dd as pr,de as ft,df as pe,dg as gr,_ as X,al as fr,bg as mr,j as Oe,t as J,b6 as V,c8 as de,h as yr,at as be,bw as xe,k as mt,ab as le,dh as yt,K as vt,Z as vr,e as br,ap as bt,P as xt,G as Et,X as Qe,aC as xr,di as Er,ar as Cr,n as Sr,l as kr,ai as Rr,a5 as re,ah as Ar,dj as Tr,dk as _r,dl as Pr,dm as Ct,dn as wr,cR as Lr,cT as Nr,cA as Dr,cm as We,cU as Or,aG as jt,q as $t,bz as Wr,dp as qr,bh as Mr,bO as St,bS as kt,bL as Ir,by as Gr,d as Vr,m as zt,b2 as Hr,c7 as tt,cp as oe,a3 as ae,$ as Br,bc as jr,ce as $r,Q as zr,ck as Ft,co as Fr,c6 as Yr,cn as Xr,bD as Ur,a0 as Kr,u as Ie,bd as Zr,x as Qr,b9 as Jr,w as Ge,c as rt,a as Ve,b as He,i as Ce,S as Se,s as it,dq as ei,V as he}from"./install-D_wEXfzl.js";import{g as ti,r as B,R as N}from"./iframe-DQBbESXd.js";import{d as Yt}from"./axis-B8VaOuT_.js";import{S as Rt,i as ri}from"./install-VB-o03U1.js";import{c as ii}from"./createSeriesDataSimply-BM5eq_8k.js";import{A as ni,a as fe,b as At}from"./Axis-CD6BD_BD.js";function oi(t,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),n=2;n<r;n++)i[n-2]=arguments[n];if(!t){var o;if(e===void 0)o=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=0;o=new Error(e.replace(/%s/g,function(){return String(i[s++])})),o.name="Invariant Violation"}throw o.framesToPop=1,o}}var ai=oi;const Tt=ti(ai);var se={window:{fontScale:1,height:0,scale:1,width:0},screen:{fontScale:1,height:0,scale:1,width:0}},ne={},_t=Me;function Xt(){if(Me){var t=window,e,r;if(t.visualViewport){var i=t.visualViewport;e=Math.round(i.height*i.scale),r=Math.round(i.width*i.scale)}else{var n=t.document.documentElement;e=n.clientHeight,r=n.clientWidth}se.window={fontScale:1,height:e,scale:t.devicePixelRatio||1,width:r},se.screen={fontScale:1,height:t.screen.height,scale:t.devicePixelRatio||1,width:t.screen.width}}}function Pt(){Xt(),Array.isArray(ne.change)&&ne.change.forEach(t=>t(se))}class ce{static get(e){return _t&&(_t=!1,Xt()),Tt(se[e],"No dimension set for key "+e),se[e]}static set(e){e&&(Me?Tt(!1,"Dimensions cannot be set in the browser"):(e.screen!=null&&(se.screen=e.screen),e.window!=null&&(se.window=e.window)))}static addEventListener(e,r){return ne[e]=ne[e]||[],ne[e].push(r),{remove:()=>{this.removeEventListener(e,r)}}}static removeEventListener(e,r){Array.isArray(ne[e])&&(ne[e]=ne[e].filter(i=>i!==r))}}Me&&(window.visualViewport?window.visualViewport.addEventListener("resize",Pt,!1):window.addEventListener("resize",Pt,!1));class Ee{static get(){return ce.get("window").scale}static getFontScale(){return ce.get("window").fontScale||Ee.get()}static getPixelSizeForLayoutSize(e){return Math.round(e*Ee.get())}static roundToNearestPixel(e){var r=Ee.get();return Math.round(e*r)/r}}var Ut=function(e,r){var i=this;if(i.instancePool.length){var n=i.instancePool.pop();return i.call(n,e,r),n}else return new i(e,r)},li=function(e){var r=this;e.destructor(),r.instancePool.length<r.poolSize&&r.instancePool.push(e)},si=10,ui=Ut,di=function(e,r){var i=e;return i.instancePool=[],i.getPooled=r||ui,i.poolSize||(i.poolSize=si),i.release=li,i},Be={addPoolingTo:di,twoArgumentPooler:Ut},ci=Be.twoArgumentPooler;function ge(t,e){this.width=t,this.height=e}ge.prototype.destructor=function(){this.width=null,this.height=null};ge.getPooledFromElement=function(t){return ge.getPooled(t.offsetWidth,t.offsetHeight)};Be.addPoolingTo(ge,ci);var hi=Be.twoArgumentPooler;function qe(t,e){this.left=t,this.top=e}qe.prototype.destructor=function(){this.left=null,this.top=null};Be.addPoolingTo(qe,hi);var wt=t=>{var e=t.touches,r=t.changedTouches,i=e&&e.length>0,n=r&&r.length>0;return!i&&n?r[0]:i?e[0]:t},y={NOT_RESPONDER:"NOT_RESPONDER",RESPONDER_INACTIVE_PRESS_IN:"RESPONDER_INACTIVE_PRESS_IN",RESPONDER_INACTIVE_PRESS_OUT:"RESPONDER_INACTIVE_PRESS_OUT",RESPONDER_ACTIVE_PRESS_IN:"RESPONDER_ACTIVE_PRESS_IN",RESPONDER_ACTIVE_PRESS_OUT:"RESPONDER_ACTIVE_PRESS_OUT",RESPONDER_ACTIVE_LONG_PRESS_IN:"RESPONDER_ACTIVE_LONG_PRESS_IN",RESPONDER_ACTIVE_LONG_PRESS_OUT:"RESPONDER_ACTIVE_LONG_PRESS_OUT",ERROR:"ERROR"},nt={NOT_RESPONDER:!1,RESPONDER_INACTIVE_PRESS_IN:!1,RESPONDER_INACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_PRESS_IN:!1,RESPONDER_ACTIVE_PRESS_OUT:!1,RESPONDER_ACTIVE_LONG_PRESS_IN:!1,RESPONDER_ACTIVE_LONG_PRESS_OUT:!1,ERROR:!1},Lt=pe(pe({},nt),{},{RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0}),Nt=pe(pe({},nt),{},{RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),Dt=pe(pe({},nt),{},{RESPONDER_ACTIVE_LONG_PRESS_IN:!0}),U={DELAY:"DELAY",RESPONDER_GRANT:"RESPONDER_GRANT",RESPONDER_RELEASE:"RESPONDER_RELEASE",RESPONDER_TERMINATED:"RESPONDER_TERMINATED",ENTER_PRESS_RECT:"ENTER_PRESS_RECT",LEAVE_PRESS_RECT:"LEAVE_PRESS_RECT",LONG_PRESS_DETECTED:"LONG_PRESS_DETECTED"},Ot={NOT_RESPONDER:{DELAY:y.ERROR,RESPONDER_GRANT:y.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:y.ERROR,RESPONDER_TERMINATED:y.ERROR,ENTER_PRESS_RECT:y.ERROR,LEAVE_PRESS_RECT:y.ERROR,LONG_PRESS_DETECTED:y.ERROR},RESPONDER_INACTIVE_PRESS_IN:{DELAY:y.RESPONDER_ACTIVE_PRESS_IN,RESPONDER_GRANT:y.ERROR,RESPONDER_RELEASE:y.NOT_RESPONDER,RESPONDER_TERMINATED:y.NOT_RESPONDER,ENTER_PRESS_RECT:y.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:y.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:y.ERROR},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:y.RESPONDER_ACTIVE_PRESS_OUT,RESPONDER_GRANT:y.ERROR,RESPONDER_RELEASE:y.NOT_RESPONDER,RESPONDER_TERMINATED:y.NOT_RESPONDER,ENTER_PRESS_RECT:y.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:y.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:y.ERROR},RESPONDER_ACTIVE_PRESS_IN:{DELAY:y.ERROR,RESPONDER_GRANT:y.ERROR,RESPONDER_RELEASE:y.NOT_RESPONDER,RESPONDER_TERMINATED:y.NOT_RESPONDER,ENTER_PRESS_RECT:y.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:y.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:y.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:y.ERROR,RESPONDER_GRANT:y.ERROR,RESPONDER_RELEASE:y.NOT_RESPONDER,RESPONDER_TERMINATED:y.NOT_RESPONDER,ENTER_PRESS_RECT:y.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:y.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:y.ERROR},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:y.ERROR,RESPONDER_GRANT:y.ERROR,RESPONDER_RELEASE:y.NOT_RESPONDER,RESPONDER_TERMINATED:y.NOT_RESPONDER,ENTER_PRESS_RECT:y.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:y.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:y.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:y.ERROR,RESPONDER_GRANT:y.ERROR,RESPONDER_RELEASE:y.NOT_RESPONDER,RESPONDER_TERMINATED:y.NOT_RESPONDER,ENTER_PRESS_RECT:y.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:y.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:y.ERROR},error:{DELAY:y.NOT_RESPONDER,RESPONDER_GRANT:y.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:y.NOT_RESPONDER,RESPONDER_TERMINATED:y.NOT_RESPONDER,ENTER_PRESS_RECT:y.NOT_RESPONDER,LEAVE_PRESS_RECT:y.NOT_RESPONDER,LONG_PRESS_DETECTED:y.NOT_RESPONDER}},Je=130,_e=20,pi=500,Wt=pi-Je,gi=10,ke={componentDidMount:function(){var e=this.getTouchableNode&&this.getTouchableNode();e&&e.addEventListener&&(this._touchableBlurListener=r=>{this._isTouchableKeyboardActive&&(this.state.touchable.touchState&&this.state.touchable.touchState!==y.NOT_RESPONDER&&this.touchableHandleResponderTerminate({nativeEvent:r}),this._isTouchableKeyboardActive=!1)},e.addEventListener("blur",this._touchableBlurListener))},componentWillUnmount:function(){var e=this.getTouchableNode&&this.getTouchableNode();e&&e.addEventListener&&e.removeEventListener("blur",this._touchableBlurListener),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressInLocation=null,this.state.touchable.responderID=null},touchableGetInitialState:function(){return{touchable:{touchState:void 0,responderID:null}}},touchableHandleResponderTerminationRequest:function(){return!this.props.rejectResponderTermination},touchableHandleStartShouldSetResponder:function(){return!this.props.disabled},touchableLongPressCancelsPress:function(){return!0},touchableHandleResponderGrant:function(e){var r=e.currentTarget;e.persist(),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null,this.state.touchable.touchState=y.NOT_RESPONDER,this.state.touchable.responderID=r,this._receiveSignal(U.RESPONDER_GRANT,e);var i=this.touchableGetHighlightDelayMS!==void 0?Math.max(this.touchableGetHighlightDelayMS(),0):Je;i=isNaN(i)?Je:i,i!==0?this.touchableDelayTimeout=setTimeout(this._handleDelay.bind(this,e),i):this._handleDelay(e);var n=this.touchableGetLongPressDelayMS!==void 0?Math.max(this.touchableGetLongPressDelayMS(),10):Wt;n=isNaN(n)?Wt:n,this.longPressDelayTimeout=setTimeout(this._handleLongDelay.bind(this,e),n+i)},touchableHandleResponderRelease:function(e){this.pressInLocation=null,this._receiveSignal(U.RESPONDER_RELEASE,e)},touchableHandleResponderTerminate:function(e){this.pressInLocation=null,this._receiveSignal(U.RESPONDER_TERMINATED,e)},touchableHandleResponderMove:function(e){if(this.state.touchable.positionOnActivate){var r=this.state.touchable.positionOnActivate,i=this.state.touchable.dimensionsOnActivate,n=this.touchableGetPressRectOffset?this.touchableGetPressRectOffset():{left:_e,right:_e,top:_e,bottom:_e},o=n.left,s=n.top,c=n.right,u=n.bottom,l=this.touchableGetHitSlop?this.touchableGetHitSlop():null;l&&(o+=l.left||0,s+=l.top||0,c+=l.right||0,u+=l.bottom||0);var a=wt(e.nativeEvent),d=a&&a.pageX,h=a&&a.pageY;if(this.pressInLocation){var m=this._getDistanceBetweenPoints(d,h,this.pressInLocation.pageX,this.pressInLocation.pageY);m>gi&&this._cancelLongPressDelayTimeout()}var p=d>r.left-o&&h>r.top-s&&d<r.left+i.width+c&&h<r.top+i.height+u;if(p){var f=this.state.touchable.touchState;this._receiveSignal(U.ENTER_PRESS_RECT,e);var g=this.state.touchable.touchState;g===y.RESPONDER_INACTIVE_PRESS_IN&&f!==y.RESPONDER_INACTIVE_PRESS_IN&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(U.LEAVE_PRESS_RECT,e)}},touchableHandleFocus:function(e){this.props.onFocus&&this.props.onFocus(e)},touchableHandleBlur:function(e){this.props.onBlur&&this.props.onBlur(e)},_remeasureMetricsOnActivation:function(){var e=this.state.touchable.responderID;e!=null&&ft.measure(e,this._handleQueryLayout)},_handleQueryLayout:function(e,r,i,n,o,s){!e&&!r&&!i&&!n&&!o&&!s||(this.state.touchable.positionOnActivate&&qe.release(this.state.touchable.positionOnActivate),this.state.touchable.dimensionsOnActivate&&ge.release(this.state.touchable.dimensionsOnActivate),this.state.touchable.positionOnActivate=qe.getPooled(o,s),this.state.touchable.dimensionsOnActivate=ge.getPooled(i,n))},_handleDelay:function(e){this.touchableDelayTimeout=null,this._receiveSignal(U.DELAY,e)},_handleLongDelay:function(e){this.longPressDelayTimeout=null;var r=this.state.touchable.touchState;r!==y.RESPONDER_ACTIVE_PRESS_IN&&r!==y.RESPONDER_ACTIVE_LONG_PRESS_IN?console.error("Attempted to transition from state `"+r+"` to `"+y.RESPONDER_ACTIVE_LONG_PRESS_IN+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(U.LONG_PRESS_DETECTED,e)},_receiveSignal:function(e,r){var i=this.state.touchable.responderID,n=this.state.touchable.touchState,o=Ot[n]&&Ot[n][e];if(!(!i&&e===U.RESPONDER_RELEASE)){if(!o)throw new Error("Unrecognized signal `"+e+"` or state `"+n+"` for Touchable responder `"+i+"`");if(o===y.ERROR)throw new Error("Touchable cannot transition from `"+n+"` to `"+e+"` for responder `"+i+"`");n!==o&&(this._performSideEffectsForTransition(n,o,e,r),this.state.touchable.touchState=o)}},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null},_isHighlight:function(e){return e===y.RESPONDER_ACTIVE_PRESS_IN||e===y.RESPONDER_ACTIVE_LONG_PRESS_IN},_savePressInLocation:function(e){var r=wt(e.nativeEvent),i=r&&r.pageX,n=r&&r.pageY,o=r&&r.locationX,s=r&&r.locationY;this.pressInLocation={pageX:i,pageY:n,locationX:o,locationY:s}},_getDistanceBetweenPoints:function(e,r,i,n){var o=e-i,s=r-n;return Math.sqrt(o*o+s*s)},_performSideEffectsForTransition:function(e,r,i,n){var o=this._isHighlight(e),s=this._isHighlight(r),c=i===U.RESPONDER_TERMINATED||i===U.RESPONDER_RELEASE;c&&this._cancelLongPressDelayTimeout();var u=e===y.NOT_RESPONDER&&r===y.RESPONDER_INACTIVE_PRESS_IN,l=!Lt[e]&&Lt[r];if((u||l)&&this._remeasureMetricsOnActivation(),Nt[e]&&i===U.LONG_PRESS_DETECTED&&this.touchableHandleLongPress&&this.touchableHandleLongPress(n),s&&!o?this._startHighlight(n):!s&&o&&this._endHighlight(n),Nt[e]&&i===U.RESPONDER_RELEASE){var a=!!this.props.onLongPress,d=Dt[e]&&(!a||!this.touchableLongPressCancelsPress()),h=!Dt[e]||d;h&&this.touchableHandlePress&&(!s&&!o&&(this._startHighlight(n),this._endHighlight(n)),this.touchableHandlePress(n))}this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null},_playTouchSound:function(){ft.playTouchSound()},_startHighlight:function(e){this._savePressInLocation(e),this.touchableHandleActivePressIn&&this.touchableHandleActivePressIn(e)},_endHighlight:function(e){this.touchableHandleActivePressOut&&(this.touchableGetPressOutDelayMS&&this.touchableGetPressOutDelayMS()?this.pressOutDelayTimeout=setTimeout(()=>{this.touchableHandleActivePressOut(e)},this.touchableGetPressOutDelayMS()):this.touchableHandleActivePressOut(e))},touchableHandleKeyEvent:function(e){var r=e.type,i=e.key;(i==="Enter"||i===" ")&&(r==="keydown"?this._isTouchableKeyboardActive||(!this.state.touchable.touchState||this.state.touchable.touchState===y.NOT_RESPONDER)&&(this.touchableHandleResponderGrant(e),this._isTouchableKeyboardActive=!0):r==="keyup"&&this._isTouchableKeyboardActive&&this.state.touchable.touchState&&this.state.touchable.touchState!==y.NOT_RESPONDER&&(this.touchableHandleResponderRelease(e),this._isTouchableKeyboardActive=!1),e.stopPropagation(),i==="Enter"&&pr.propsToAriaRole(this.props)==="link"||e.preventDefault())},withoutDefaultFocusAndBlur:{}};ke.touchableHandleFocus;ke.touchableHandleBlur;var fi=gr(ke,["touchableHandleFocus","touchableHandleBlur"]);ke.withoutDefaultFocusAndBlur=fi;var mi={Mixin:ke};function yi(){var t=B.useState(()=>ce.get("window")),e=t[0],r=t[1];return B.useEffect(()=>{function i(n){var o=n.window;o!=null&&r(o)}return ce.addEventListener("change",i),r(ce.get("window")),()=>{ce.removeEventListener("change",i)}},[]),e}var vi=function(){function t(){this.angle=0,this.width=10,this.r=10,this.x=0,this.y=0}return t}(),bi=function(t){X(e,t);function e(r){var i=t.call(this,r)||this;return i.type="pointer",i}return e.prototype.getDefaultShape=function(){return new vi},e.prototype.buildPath=function(r,i){var n=Math.cos,o=Math.sin,s=i.r,c=i.width,u=i.angle,l=i.x-n(u)*c*(c>=s/3?1:2),a=i.y-o(u)*c*(c>=s/3?1:2);u=i.angle-Math.PI/2,r.moveTo(l,a),r.lineTo(i.x+n(u)*c,i.y+o(u)*c),r.lineTo(i.x+n(i.angle)*s,i.y+o(i.angle)*s),r.lineTo(i.x-n(u)*c,i.y-o(u)*c),r.lineTo(l,a)},e}(fr);function xi(t,e){var r=t.get("center"),i=e.getWidth(),n=e.getHeight(),o=Math.min(i,n),s=V(r[0],e.getWidth()),c=V(r[1],e.getHeight()),u=V(t.get("radius"),o/2);return{cx:s,cy:c,r:u}}function Pe(t,e){var r=t==null?"":t+"";return e&&(Sr(e)?r=e.replace("{value}",r):kr(e)&&(r=e(t))),r}var Ei=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r}return e.prototype.render=function(r,i,n){this.group.removeAll();var o=r.get(["axisLine","lineStyle","color"]),s=xi(r,n);this._renderMain(r,i,n,o,s),this._data=r.getData()},e.prototype.dispose=function(){},e.prototype._renderMain=function(r,i,n,o,s){var c=this.group,u=r.get("clockwise"),l=-r.get("startAngle")/180*Math.PI,a=-r.get("endAngle")/180*Math.PI,d=r.getModel("axisLine"),h=d.get("roundCap"),m=h?Rt:Oe,p=d.get("show"),f=d.getModel("lineStyle"),g=f.get("width"),v=[l,a];mr(v,!u),l=v[0],a=v[1];for(var x=a-l,A=l,k=[],R=0;p&&R<o.length;R++){var w=Math.min(Math.max(o[R][0],0),1);a=l+x*w;var W=new m({shape:{startAngle:A,endAngle:a,cx:s.cx,cy:s.cy,clockwise:u,r0:s.r-g,r:s.r},silent:!0});W.setStyle({fill:o[R][1]}),W.setStyle(f.getLineStyle(["color","width"])),k.push(W),A=a}k.reverse(),J(k,function(D){return c.add(D)});var I=function(D){if(D<=0)return o[0][1];var b;for(b=0;b<o.length;b++)if(o[b][0]>=D&&(b===0?0:o[b-1][0])<D)return o[b][1];return o[b-1][1]};this._renderTicks(r,i,n,I,s,l,a,u,g),this._renderTitleAndDetail(r,i,n,I,s),this._renderAnchor(r,s),this._renderPointer(r,i,n,I,s,l,a,u,g)},e.prototype._renderTicks=function(r,i,n,o,s,c,u,l,a){for(var d=this.group,h=s.cx,m=s.cy,p=s.r,f=+r.get("min"),g=+r.get("max"),v=r.getModel("splitLine"),x=r.getModel("axisTick"),A=r.getModel("axisLabel"),k=r.get("splitNumber"),R=x.get("splitNumber"),w=V(v.get("length"),p),W=V(x.get("length"),p),I=c,D=(u-c)/k,b=D/R,C=v.getModel("lineStyle").getLineStyle(),q=x.getModel("lineStyle").getLineStyle(),E=v.get("distance"),T,_,S=0;S<=k;S++){if(T=Math.cos(I),_=Math.sin(I),v.get("show")){var P=E?E+a:a,O=new de({shape:{x1:T*(p-P)+h,y1:_*(p-P)+m,x2:T*(p-w-P)+h,y2:_*(p-w-P)+m},style:C,silent:!0});C.stroke==="auto"&&O.setStyle({stroke:o(S/k)}),d.add(O)}if(A.get("show")){var P=A.get("distance")+E,H=Pe(yr(S/k*(g-f)+f),A.get("formatter")),z=o(S/k),Y=T*(p-w-P)+h,K=_*(p-w-P)+m,F=A.get("rotate"),ee=0;F==="radial"?(ee=-I+2*Math.PI,ee>Math.PI/2&&(ee+=Math.PI)):F==="tangential"?ee=-I-Math.PI/2:Rr(F)&&(ee=F*Math.PI/180),ee===0?d.add(new be({style:xe(A,{text:H,x:Y,y:K,verticalAlign:_<-.8?"top":_>.8?"bottom":"middle",align:T<-.4?"left":T>.4?"right":"center"},{inheritColor:z}),silent:!0})):d.add(new be({style:xe(A,{text:H,x:Y,y:K,verticalAlign:"middle",align:"center"},{inheritColor:z}),silent:!0,originX:Y,originY:K,rotation:ee}))}if(x.get("show")&&S!==k){var P=x.get("distance");P=P?P+a:a;for(var ie=0;ie<=R;ie++){T=Math.cos(I),_=Math.sin(I);var Re=new de({shape:{x1:T*(p-P)+h,y1:_*(p-P)+m,x2:T*(p-W-P)+h,y2:_*(p-W-P)+m},silent:!0,style:q});q.stroke==="auto"&&Re.setStyle({stroke:o((S+ie/R)/k)}),d.add(Re),I+=b}I-=b}else I+=D}},e.prototype._renderPointer=function(r,i,n,o,s,c,u,l,a){var d=this.group,h=this._data,m=this._progressEls,p=[],f=r.get(["pointer","show"]),g=r.getModel("progress"),v=g.get("show"),x=r.getData(),A=x.mapDimension("value"),k=+r.get("min"),R=+r.get("max"),w=[k,R],W=[c,u];function I(b,C){var q=x.getItemModel(b),E=q.getModel("pointer"),T=V(E.get("width"),s.r),_=V(E.get("length"),s.r),S=r.get(["pointer","icon"]),P=E.get("offsetCenter"),O=V(P[0],s.r),H=V(P[1],s.r),z=E.get("keepAspect"),Y;return S?Y=Et(S,O-T/2,H-_,T,_,null,z):Y=new bi({shape:{angle:-Math.PI/2,width:T,r:_,x:O,y:H}}),Y.rotation=-(C+Math.PI/2),Y.x=s.cx,Y.y=s.cy,Y}function D(b,C){var q=g.get("roundCap"),E=q?Rt:Oe,T=g.get("overlap"),_=T?g.get("width"):a/x.count(),S=T?s.r-_:s.r-(b+1)*_,P=T?s.r:s.r-b*_,O=new E({shape:{startAngle:c,endAngle:C,cx:s.cx,cy:s.cy,clockwise:l,r0:S,r:P}});return T&&(O.z2=le(x.get(A,b),[k,R],[100,0],!0)),O}(v||f)&&(x.diff(h).add(function(b){var C=x.get(A,b);if(f){var q=I(b,c);mt(q,{rotation:-((isNaN(+C)?W[0]:le(C,w,W,!0))+Math.PI/2)},r),d.add(q),x.setItemGraphicEl(b,q)}if(v){var E=D(b,c),T=g.get("clip");mt(E,{shape:{endAngle:le(C,w,W,T)}},r),d.add(E),yt(r.seriesIndex,x.dataType,b,E),p[b]=E}}).update(function(b,C){var q=x.get(A,b);if(f){var E=h.getItemGraphicEl(C),T=E?E.rotation:c,_=I(b,T);_.rotation=T,vt(_,{rotation:-((isNaN(+q)?W[0]:le(q,w,W,!0))+Math.PI/2)},r),d.add(_),x.setItemGraphicEl(b,_)}if(v){var S=m[C],P=S?S.shape.endAngle:c,O=D(b,P),H=g.get("clip");vt(O,{shape:{endAngle:le(q,w,W,H)}},r),d.add(O),yt(r.seriesIndex,x.dataType,b,O),p[b]=O}}).execute(),x.each(function(b){var C=x.getItemModel(b),q=C.getModel("emphasis"),E=q.get("focus"),T=q.get("blurScope"),_=q.get("disabled");if(f){var S=x.getItemGraphicEl(b),P=x.getItemVisual(b,"style"),O=P.fill;if(S instanceof vr){var H=S.style;S.useStyle(br({image:H.image,x:H.x,y:H.y,width:H.width,height:H.height},P))}else S.useStyle(P),S.type!=="pointer"&&S.setColor(O);S.setStyle(C.getModel(["pointer","itemStyle"]).getItemStyle()),S.style.fill==="auto"&&S.setStyle("fill",o(le(x.get(A,b),w,[0,1],!0))),S.z2EmphasisLift=0,bt(S,C),xt(S,E,T,_)}if(v){var z=p[b];z.useStyle(x.getItemVisual(b,"style")),z.setStyle(C.getModel(["progress","itemStyle"]).getItemStyle()),z.z2EmphasisLift=0,bt(z,C),xt(z,E,T,_)}}),this._progressEls=p)},e.prototype._renderAnchor=function(r,i){var n=r.getModel("anchor"),o=n.get("show");if(o){var s=n.get("size"),c=n.get("icon"),u=n.get("offsetCenter"),l=n.get("keepAspect"),a=Et(c,i.cx-s/2+V(u[0],i.r),i.cy-s/2+V(u[1],i.r),s,s,null,l);a.z2=n.get("showAbove")?1:0,a.setStyle(n.getModel("itemStyle").getItemStyle()),this.group.add(a)}},e.prototype._renderTitleAndDetail=function(r,i,n,o,s){var c=this,u=r.getData(),l=u.mapDimension("value"),a=+r.get("min"),d=+r.get("max"),h=new Qe,m=[],p=[],f=r.isAnimationEnabled(),g=r.get(["pointer","showAbove"]);u.diff(this._data).add(function(v){m[v]=new be({silent:!0}),p[v]=new be({silent:!0})}).update(function(v,x){m[v]=c._titleEls[x],p[v]=c._detailEls[x]}).execute(),u.each(function(v){var x=u.getItemModel(v),A=u.get(l,v),k=new Qe,R=o(le(A,[a,d],[0,1],!0)),w=x.getModel("title");if(w.get("show")){var W=w.get("offsetCenter"),I=s.cx+V(W[0],s.r),D=s.cy+V(W[1],s.r),b=m[v];b.attr({z2:g?0:2,style:xe(w,{x:I,y:D,text:u.getName(v),align:"center",verticalAlign:"middle"},{inheritColor:R})}),k.add(b)}var C=x.getModel("detail");if(C.get("show")){var q=C.get("offsetCenter"),E=s.cx+V(q[0],s.r),T=s.cy+V(q[1],s.r),_=V(C.get("width"),s.r),S=V(C.get("height"),s.r),P=r.get(["progress","show"])?u.getItemVisual(v,"style").fill:R,b=p[v],O=C.get("formatter");b.attr({z2:g?0:2,style:xe(C,{x:E,y:T,text:Pe(A,O),width:isNaN(_)?null:_,height:isNaN(S)?null:S,align:"center",verticalAlign:"middle"},{inheritColor:P})}),xr(b,{normal:C},A,function(z){return Pe(z,O)}),f&&Er(b,v,u,r,{getFormattedLabel:function(z,Y,K,F,ee,ie){return Pe(ie?ie.interpolatedValue:A,O)}}),k.add(b)}h.add(k)}),this.group.add(h),this._titleEls=m,this._detailEls=p},e.type="gauge",e}(Cr),Ci=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r.visualStyleAccessPath="itemStyle",r}return e.prototype.getInitialData=function(r,i){return ii(this,["value"])},e.type="series.gauge",e.defaultOption={z:2,colorBy:"data",center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,roundCap:!1,lineStyle:{color:[[1,re.color.neutral10]],width:10}},progress:{show:!1,overlap:!0,width:10,roundCap:!1,clip:!0},splitLine:{show:!0,length:10,distance:10,lineStyle:{color:re.color.axisTick,width:3,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:6,distance:10,lineStyle:{color:re.color.axisTickMinor,width:1,type:"solid"}},axisLabel:{show:!0,distance:15,color:re.color.axisLabel,fontSize:12,rotate:0},pointer:{icon:null,offsetCenter:[0,0],show:!0,showAbove:!0,length:"60%",width:6,keepAspect:!1},anchor:{show:!1,showAbove:!1,size:6,icon:"circle",offsetCenter:[0,0],keepAspect:!1,itemStyle:{color:re.color.neutral00,borderWidth:0,borderColor:re.color.theme[0]}},title:{show:!0,offsetCenter:[0,"20%"],color:re.color.secondary,fontSize:16,valueAnimation:!1},detail:{show:!0,backgroundColor:re.color.transparent,borderWidth:0,borderColor:re.color.neutral40,width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:re.color.primary,fontSize:30,fontWeight:"bold",lineHeight:30,valueAnimation:!1}},e}(Ar);function ot(t){t.registerChartView(Ei),t.registerSeriesModel(Ci)}var Si=function(t){X(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.makeElOption=function(r,i,n,o,s){var c=n.axis;c.dim==="angle"&&(this.animationThreshold=Math.PI/18);var u=c.polar,l=u.getOtherAxis(c),a=l.getExtent(),d=c.dataToCoord(i),h=o.get("type");if(h&&h!=="none"){var m=Tr(o),p=Ri[h](c,u,d,a);p.style=m,r.graphicKey=p.type,r.pointer=p}var f=o.get(["label","margin"]),g=ki(i,n,o,u,f);_r(r,n,o,s,g)},e}(Pr);function ki(t,e,r,i,n){var o=e.axis,s=o.dataToCoord(t),c=i.getAngleAxis().getExtent()[0];c=c/180*Math.PI;var u=i.getRadiusAxis().getExtent(),l,a,d;if(o.dim==="radius"){var h=Or();Lr(h,h,c),Nr(h,h,[i.cx,i.cy]),l=Dr([s,-n],h);var m=e.getModel("axisLabel").get("rotate")||0,p=We.innerTextLayout(c,m*Math.PI/180,-1);a=p.textAlign,d=p.textVerticalAlign}else{var f=u[1];l=i.coordToPoint([f+n,s]);var g=i.cx,v=i.cy;a=Math.abs(l[0]-g)/f<.3?"center":l[0]>g?"left":"right",d=Math.abs(l[1]-v)/f<.3?"middle":l[1]>v?"top":"bottom"}return{position:l,align:a,verticalAlign:d}}var Ri={line:function(t,e,r,i){return t.dim==="angle"?{type:"Line",shape:wr(e.coordToPoint([i[0],r]),e.coordToPoint([i[1],r]))}:{type:"Circle",shape:{cx:e.cx,cy:e.cy,r}}},shadow:function(t,e,r,i){var n=Math.max(1,t.getBandWidth()),o=Math.PI/180;return t.dim==="angle"?{type:"Sector",shape:Ct(e.cx,e.cy,i[0],i[1],(-r-n/2)*o,(-r+n/2)*o)}:{type:"Sector",shape:Ct(e.cx,e.cy,r-n/2,r+n/2,0,Math.PI*2)}}},Ai=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r}return e.prototype.findAxisModel=function(r){var i,n=this.ecModel;return n.eachComponent(r,function(o){o.getCoordSysModel()===this&&(i=o)},this),i},e.type="polar",e.dependencies=["radiusAxis","angleAxis"],e.defaultOption={z:0,center:["50%","50%"],radius:"80%"},e}(jt),at=function(t){X(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getCoordSysModel=function(){return this.getReferringComponents("polar",$t).models[0]},e.type="polarAxis",e}(jt);Wr(at,ni);var Ti=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r}return e.type="angleAxis",e}(at),_i=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r}return e.type="radiusAxis",e}(at),lt=function(t){X(e,t);function e(r,i){return t.call(this,"radius",r,i)||this}return e.prototype.pointToData=function(r,i){return this.polar.pointToData(r,i)[this.dim==="radius"?0:1]},e}(fe);lt.prototype.dataToRadius=fe.prototype.dataToCoord;lt.prototype.radiusToData=fe.prototype.coordToData;var Pi=Mr(),st=function(t){X(e,t);function e(r,i){return t.call(this,"angle",r,i||[0,360])||this}return e.prototype.pointToData=function(r,i){return this.polar.pointToData(r,i)[this.dim==="radius"?0:1]},e.prototype.calculateCategoryInterval=function(){var r=this,i=r.getLabelModel(),n=r.scale,o=n.getExtent(),s=n.count();if(o[1]-o[0]<1)return 0;var c=o[0],u=r.dataToCoord(c+1)-r.dataToCoord(c),l=Math.abs(u),a=qr(c==null?"":c+"",i.getFont(),"center","top"),d=Math.max(a.height,7),h=d/l;isNaN(h)&&(h=1/0);var m=Math.max(0,Math.floor(h)),p=Pi(r.model),f=p.lastAutoInterval,g=p.lastTickCount;return f!=null&&g!=null&&Math.abs(f-m)<=1&&Math.abs(g-s)<=1&&f>m?m=f:(p.lastTickCount=s,p.lastAutoInterval=m),m},e}(fe);st.prototype.dataToAngle=fe.prototype.dataToCoord;st.prototype.angleToData=fe.prototype.coordToData;var Kt=["radius","angle"],wi=function(){function t(e){this.dimensions=Kt,this.type="polar",this.cx=0,this.cy=0,this._radiusAxis=new lt,this._angleAxis=new st,this.axisPointerEnabled=!0,this.name=e||"",this._radiusAxis.polar=this._angleAxis.polar=this}return t.prototype.containPoint=function(e){var r=this.pointToCoord(e);return this._radiusAxis.contain(r[0])&&this._angleAxis.contain(r[1])},t.prototype.containData=function(e){return this._radiusAxis.containData(e[0])&&this._angleAxis.containData(e[1])},t.prototype.getAxis=function(e){var r="_"+e+"Axis";return this[r]},t.prototype.getAxes=function(){return[this._radiusAxis,this._angleAxis]},t.prototype.getAxesByScale=function(e){var r=[],i=this._angleAxis,n=this._radiusAxis;return i.scale.type===e&&r.push(i),n.scale.type===e&&r.push(n),r},t.prototype.getAngleAxis=function(){return this._angleAxis},t.prototype.getRadiusAxis=function(){return this._radiusAxis},t.prototype.getOtherAxis=function(e){var r=this._angleAxis;return e===r?this._radiusAxis:r},t.prototype.getBaseAxis=function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAngleAxis()},t.prototype.getTooltipAxes=function(e){var r=e!=null&&e!=="auto"?this.getAxis(e):this.getBaseAxis();return{baseAxes:[r],otherAxes:[this.getOtherAxis(r)]}},t.prototype.dataToPoint=function(e,r,i){return this.coordToPoint([this._radiusAxis.dataToRadius(e[0],r),this._angleAxis.dataToAngle(e[1],r)],i)},t.prototype.pointToData=function(e,r,i){i=i||[];var n=this.pointToCoord(e);return i[0]=this._radiusAxis.radiusToData(n[0],r),i[1]=this._angleAxis.angleToData(n[1],r),i},t.prototype.pointToCoord=function(e){var r=e[0]-this.cx,i=e[1]-this.cy,n=this.getAngleAxis(),o=n.getExtent(),s=Math.min(o[0],o[1]),c=Math.max(o[0],o[1]);n.inverse?s=c-360:c=s+360;var u=Math.sqrt(r*r+i*i);r/=u,i/=u;for(var l=Math.atan2(-i,r)/Math.PI*180,a=l<s?1:-1;l<s||l>c;)l+=a*360;return[u,l]},t.prototype.coordToPoint=function(e,r){r=r||[];var i=e[0],n=e[1]/180*Math.PI;return r[0]=Math.cos(n)*i+this.cx,r[1]=-Math.sin(n)*i+this.cy,r},t.prototype.getArea=function(){var e=this.getAngleAxis(),r=this.getRadiusAxis(),i=r.getExtent().slice();i[0]>i[1]&&i.reverse();var n=e.getExtent(),o=Math.PI/180,s=1e-4;return{cx:this.cx,cy:this.cy,r0:i[0],r:i[1],startAngle:-n[0]*o,endAngle:-n[1]*o,clockwise:e.inverse,contain:function(c,u){var l=c-this.cx,a=u-this.cy,d=l*l+a*a,h=this.r,m=this.r0;return h!==m&&d-s<=h*h&&d+s>=m*m},x:this.cx-i[1],y:this.cy-i[1],width:i[1]*2,height:i[1]*2}},t.prototype.convertToPixel=function(e,r,i){var n=qt(r);return n===this?this.dataToPoint(i):null},t.prototype.convertFromPixel=function(e,r,i){var n=qt(r);return n===this?this.pointToData(i):null},t}();function qt(t){var e=t.seriesModel,r=t.polarModel;return r&&r.coordinateSystem||e&&e.coordinateSystem}function Li(t,e,r){var i=e.get("center"),n=Gr(e,r).refContainer;t.cx=V(i[0],n.width)+n.x,t.cy=V(i[1],n.height)+n.y;var o=t.getRadiusAxis(),s=Math.min(n.width,n.height)/2,c=e.get("radius");c==null?c=[0,"100%"]:Vr(c)||(c=[0,c]);var u=[V(c[0],s),V(c[1],s)];o.inverse?o.setExtent(u[1],u[0]):o.setExtent(u[0],u[1])}function Ni(t,e){var r=this,i=r.getAngleAxis(),n=r.getRadiusAxis();if(i.scale.setExtent(1/0,-1/0),n.scale.setExtent(1/0,-1/0),t.eachSeries(function(c){if(c.coordinateSystem===r){var u=c.getData();J(St(u,"radius"),function(l){n.scale.unionExtentFromData(u,l)}),J(St(u,"angle"),function(l){i.scale.unionExtentFromData(u,l)})}}),kt(i.scale,i.model),kt(n.scale,n.model),i.type==="category"&&!i.onBand){var o=i.getExtent(),s=360/i.scale.count();i.inverse?o[1]+=s:o[1]-=s,i.setExtent(o[0],o[1])}}function Di(t){return t.mainType==="angleAxis"}function Mt(t,e){var r;if(t.type=e.get("type"),t.scale=Ir(e),t.onBand=e.get("boundaryGap")&&t.type==="category",t.inverse=e.get("inverse"),Di(e)){t.inverse=t.inverse!==e.get("clockwise");var i=e.get("startAngle"),n=(r=e.get("endAngle"))!==null&&r!==void 0?r:i+(t.inverse?-360:360);t.setExtent(i,n)}e.axis=t,t.model=e}var Oi={dimensions:Kt,create:function(t,e){var r=[];return t.eachComponent("polar",function(i,n){var o=new wi(n+"");o.update=Ni;var s=o.getRadiusAxis(),c=o.getAngleAxis(),u=i.findAxisModel("radiusAxis"),l=i.findAxisModel("angleAxis");Mt(s,u),Mt(c,l),Li(o,i,e),r.push(o),i.coordinateSystem=o,o.model=i}),t.eachSeries(function(i){if(i.get("coordinateSystem")==="polar"){var n=i.getReferringComponents("polar",$t).models[0];i.coordinateSystem=n.coordinateSystem}}),r}},Wi=["axisLine","axisLabel","axisTick","minorTick","splitLine","minorSplitLine","splitArea"];function we(t,e,r){e[1]>e[0]&&(e=e.slice().reverse());var i=t.coordToPoint([e[0],r]),n=t.coordToPoint([e[1],r]);return{x1:i[0],y1:i[1],x2:n[0],y2:n[1]}}function Le(t){var e=t.getRadiusAxis();return e.inverse?0:1}function It(t){var e=t[0],r=t[t.length-1];e&&r&&Math.abs(Math.abs(e.coord-r.coord)-360)<1e-4&&t.pop()}var qi=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r.axisPointerClass="PolarAxisPointer",r}return e.prototype.render=function(r,i){if(this.group.removeAll(),!!r.get("show")){var n=r.axis,o=n.polar,s=o.getRadiusAxis().getExtent(),c=n.getTicksCoords({breakTicks:"none"}),u=n.getMinorTicksCoords(),l=zt(n.getViewLabels(),function(a){a=Hr(a);var d=n.scale,h=d.type==="ordinal"?d.getRawOrdinalNumber(a.tickValue):a.tickValue;return a.coord=n.dataToCoord(h),a});It(l),It(c),J(Wi,function(a){r.get([a,"show"])&&(!n.scale.isBlank()||a==="axisLine")&&Mi[a](this.group,r,o,c,u,s,l)},this)}},e.type="angleAxis",e}(tt),Mi={axisLine:function(t,e,r,i,n,o){var s=e.getModel(["axisLine","lineStyle"]),c=r.getAngleAxis(),u=Math.PI/180,l=c.getExtent(),a=Le(r),d=a?0:1,h,m=Math.abs(l[1]-l[0])===360?"Circle":"Arc";o[d]===0?h=new Ft[m]({shape:{cx:r.cx,cy:r.cy,r:o[a],startAngle:-l[0]*u,endAngle:-l[1]*u,clockwise:c.inverse},style:s.getLineStyle(),z2:1,silent:!0}):h=new Fr({shape:{cx:r.cx,cy:r.cy,r:o[a],r0:o[d]},style:s.getLineStyle(),z2:1,silent:!0}),h.style.fill=null,t.add(h)},axisTick:function(t,e,r,i,n,o){var s=e.getModel("axisTick"),c=(s.get("inside")?-1:1)*s.get("length"),u=o[Le(r)],l=zt(i,function(a){return new de({shape:we(r,[u,u+c],a.coord)})});t.add(oe(l,{style:ae(s.getModel("lineStyle").getLineStyle(),{stroke:e.get(["axisLine","lineStyle","color"])})}))},minorTick:function(t,e,r,i,n,o){if(n.length){for(var s=e.getModel("axisTick"),c=e.getModel("minorTick"),u=(s.get("inside")?-1:1)*c.get("length"),l=o[Le(r)],a=[],d=0;d<n.length;d++)for(var h=0;h<n[d].length;h++)a.push(new de({shape:we(r,[l,l+u],n[d][h].coord)}));t.add(oe(a,{style:ae(c.getModel("lineStyle").getLineStyle(),ae(s.getLineStyle(),{stroke:e.get(["axisLine","lineStyle","color"])}))}))}},axisLabel:function(t,e,r,i,n,o,s){var c=e.getCategories(!0),u=e.getModel("axisLabel"),l=u.get("margin"),a=e.get("triggerEvent");J(s,function(d,h){var m=u,p=d.tickValue,f=o[Le(r)],g=r.coordToPoint([f+l,d.coord]),v=r.cx,x=r.cy,A=Math.abs(g[0]-v)/f<.3?"center":g[0]>v?"left":"right",k=Math.abs(g[1]-x)/f<.3?"middle":g[1]>x?"top":"bottom";if(c&&c[p]){var R=c[p];Br(R)&&R.textStyle&&(m=new jr(R.textStyle,u,u.ecModel))}var w=new be({silent:We.isLabelSilent(e),style:xe(m,{x:g[0],y:g[1],fill:m.getTextColor()||e.get(["axisLine","lineStyle","color"]),text:d.formattedLabel,align:A,verticalAlign:k})});if(t.add(w),$r({el:w,componentModel:e,itemName:d.formattedLabel,formatterParamsExtra:{isTruncated:function(){return w.isTruncated},value:d.rawLabel,tickIndex:h}}),a){var W=We.makeAxisEventDataBase(e);W.targetType="axisLabel",W.value=d.rawLabel,zr(w).eventData=W}},this)},splitLine:function(t,e,r,i,n,o){var s=e.getModel("splitLine"),c=s.getModel("lineStyle"),u=c.get("color"),l=0;u=u instanceof Array?u:[u];for(var a=[],d=0;d<i.length;d++){var h=l++%u.length;a[h]=a[h]||[],a[h].push(new de({shape:we(r,o,i[d].coord)}))}for(var d=0;d<a.length;d++)t.add(oe(a[d],{style:ae({stroke:u[d%u.length]},c.getLineStyle()),silent:!0,z:e.get("z")}))},minorSplitLine:function(t,e,r,i,n,o){if(n.length){for(var s=e.getModel("minorSplitLine"),c=s.getModel("lineStyle"),u=[],l=0;l<n.length;l++)for(var a=0;a<n[l].length;a++)u.push(new de({shape:we(r,o,n[l][a].coord)}));t.add(oe(u,{style:c.getLineStyle(),silent:!0,z:e.get("z")}))}},splitArea:function(t,e,r,i,n,o){if(i.length){var s=e.getModel("splitArea"),c=s.getModel("areaStyle"),u=c.get("color"),l=0;u=u instanceof Array?u:[u];for(var a=[],d=Math.PI/180,h=-i[0].coord*d,m=Math.min(o[0],o[1]),p=Math.max(o[0],o[1]),f=e.get("clockwise"),g=1,v=i.length;g<=v;g++){var x=g===v?i[0].coord:i[g].coord,A=l++%u.length;a[A]=a[A]||[],a[A].push(new Oe({shape:{cx:r.cx,cy:r.cy,r0:m,r:p,startAngle:h,endAngle:-x*d,clockwise:f},silent:!0})),h=-x*d}for(var g=0;g<a.length;g++)t.add(oe(a[g],{style:ae({fill:u[g%u.length]},c.getAreaStyle()),silent:!0}))}}},Ii=["splitLine","splitArea","minorSplitLine"],Gi=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r.axisPointerClass="PolarAxisPointer",r}return e.prototype.render=function(r,i,n){if(this.group.removeAll(),!!r.get("show")){var o=this._axisGroup,s=this._axisGroup=new Qe;this.group.add(s);var c=r.axis,u=c.polar,l=u.getAngleAxis(),a=c.getTicksCoords(),d=c.getMinorTicksCoords(),h=l.getExtent()[0],m=c.getExtent(),p=Hi(u,r,h),f=new We(r,n,p);f.build(),s.add(f.group),Yr(o,s,r),J(Ii,function(g){r.get([g,"show"])&&!c.scale.isBlank()&&Vi[g](this.group,r,u,h,m,a,d)},this)}},e.type="radiusAxis",e}(tt),Vi={splitLine:function(t,e,r,i,n,o){var s=e.getModel("splitLine"),c=s.getModel("lineStyle"),u=c.get("color"),l=0,a=r.getAngleAxis(),d=Math.PI/180,h=a.getExtent(),m=Math.abs(h[1]-h[0])===360?"Circle":"Arc";u=u instanceof Array?u:[u];for(var p=[],f=0;f<o.length;f++){var g=l++%u.length;p[g]=p[g]||[],p[g].push(new Ft[m]({shape:{cx:r.cx,cy:r.cy,r:Math.max(o[f].coord,0),startAngle:-h[0]*d,endAngle:-h[1]*d,clockwise:a.inverse}}))}for(var f=0;f<p.length;f++)t.add(oe(p[f],{style:ae({stroke:u[f%u.length],fill:null},c.getLineStyle()),silent:!0}))},minorSplitLine:function(t,e,r,i,n,o,s){if(s.length){for(var c=e.getModel("minorSplitLine"),u=c.getModel("lineStyle"),l=[],a=0;a<s.length;a++)for(var d=0;d<s[a].length;d++)l.push(new Xr({shape:{cx:r.cx,cy:r.cy,r:s[a][d].coord}}));t.add(oe(l,{style:ae({fill:null},u.getLineStyle()),silent:!0}))}},splitArea:function(t,e,r,i,n,o){if(o.length){var s=e.getModel("splitArea"),c=s.getModel("areaStyle"),u=c.get("color"),l=0;u=u instanceof Array?u:[u];for(var a=[],d=o[0].coord,h=1;h<o.length;h++){var m=l++%u.length;a[m]=a[m]||[],a[m].push(new Oe({shape:{cx:r.cx,cy:r.cy,r0:d,r:o[h].coord,startAngle:0,endAngle:Math.PI*2},silent:!0})),d=o[h].coord}for(var h=0;h<a.length;h++)t.add(oe(a[h],{style:ae({fill:u[h%u.length]},c.getAreaStyle()),silent:!0}))}}};function Hi(t,e,r){return{position:[t.cx,t.cy],rotation:r/180*Math.PI,labelDirection:-1,tickDirection:-1,nameDirection:1,labelRotate:e.getModel("axisLabel").get("rotate"),z2:1}}function Zt(t){return t.get("stack")||"__ec_stack_"+t.seriesIndex}function Qt(t,e){return e.dim+t.model.componentIndex}function Bi(t,e,r){var i={},n=ji(Ur(e.getSeriesByType(t),function(o){return!e.isSeriesFiltered(o)&&o.coordinateSystem&&o.coordinateSystem.type==="polar"}));e.eachSeriesByType(t,function(o){if(o.coordinateSystem.type==="polar"){var s=o.getData(),c=o.coordinateSystem,u=c.getBaseAxis(),l=Qt(c,u),a=Zt(o),d=n[l][a],h=d.offset,m=d.width,p=c.getOtherAxis(u),f=o.coordinateSystem.cx,g=o.coordinateSystem.cy,v=o.get("barMinHeight")||0,x=o.get("barMinAngle")||0;i[a]=i[a]||[];for(var A=s.mapDimension(p.dim),k=s.mapDimension(u.dim),R=Kr(s,A),w=u.dim!=="radius"||!o.get("roundCap",!0),W=p.model,I=W.get("startValue"),D=p.dataToCoord(I||0),b=0,C=s.count();b<C;b++){var q=s.get(A,b),E=s.get(k,b),T=q>=0?"p":"n",_=D;R&&(i[a][E]||(i[a][E]={p:D,n:D}),_=i[a][E][T]);var S=void 0,P=void 0,O=void 0,H=void 0;if(p.dim==="radius"){var z=p.dataToCoord(q)-D,Y=u.dataToCoord(E);Math.abs(z)<v&&(z=(z<0?-1:1)*v),S=_,P=_+z,O=Y-h,H=O-m,R&&(i[a][E][T]=P)}else{var K=p.dataToCoord(q,w)-D,F=u.dataToCoord(E);Math.abs(K)<x&&(K=(K<0?-1:1)*x),S=F+h,P=S+m,O=_,H=_+K,R&&(i[a][E][T]=H)}s.setItemLayout(b,{cx:f,cy:g,r0:S,r:P,startAngle:-O*Math.PI/180,endAngle:-H*Math.PI/180,clockwise:O>=H})}}})}function ji(t){var e={};J(t,function(i,n){var o=i.getData(),s=i.coordinateSystem,c=s.getBaseAxis(),u=Qt(s,c),l=c.getExtent(),a=c.type==="category"?c.getBandWidth():Math.abs(l[1]-l[0])/o.count(),d=e[u]||{bandWidth:a,remainedWidth:a,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},h=d.stacks;e[u]=d;var m=Zt(i);h[m]||d.autoWidthCount++,h[m]=h[m]||{width:0,maxWidth:0};var p=V(i.get("barWidth"),a),f=V(i.get("barMaxWidth"),a),g=i.get("barGap"),v=i.get("barCategoryGap");p&&!h[m].width&&(p=Math.min(d.remainedWidth,p),h[m].width=p,d.remainedWidth-=p),f&&(h[m].maxWidth=f),g!=null&&(d.gap=g),v!=null&&(d.categoryGap=v)});var r={};return J(e,function(i,n){r[n]={};var o=i.stacks,s=i.bandWidth,c=V(i.categoryGap,s),u=V(i.gap,1),l=i.remainedWidth,a=i.autoWidthCount,d=(l-c)/(a+(a-1)*u);d=Math.max(d,0),J(o,function(f,g){var v=f.maxWidth;v&&v<d&&(v=Math.min(v,l),f.width&&(v=Math.min(v,f.width)),l-=v,f.width=v,a--)}),d=(l-c)/(a+(a-1)*u),d=Math.max(d,0);var h=0,m;J(o,function(f,g){f.width||(f.width=d),m=f,h+=f.width*(1+u)}),m&&(h-=m.width*u);var p=-h/2;J(o,function(f,g){r[n][g]=r[n][g]||{offset:p,width:f.width},p+=f.width*(1+u)})}),r}var $i={startAngle:90,clockwise:!0,splitNumber:12,axisLabel:{rotate:0}},zi={splitNumber:5},Fi=function(t){X(e,t);function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r}return e.type="polar",e}(Jr);function Yi(t){Ie(Zr),tt.registerAxisPointerClass("PolarAxisPointer",Si),t.registerCoordinateSystem("polar",Oi),t.registerComponentModel(Ai),t.registerComponentView(Fi),At(t,"angle",Ti,$i),At(t,"radius",_i,zi),t.registerComponentView(qi),t.registerComponentView(Gi),t.registerLayout(Qr(Bi,"bar"))}Ie([rt,ot]);const Jt=({value:t,min:e=0,max:r=100,width:i=220,height:n=240,title:o="Metric",detailText:s="30%",axisBgColor:c,axisWidth:u=50,tickColor:l,...a})=>{const{theme:d}=He(a.theme,a.colors),h=B.useRef(null),m=B.useMemo(()=>{const p=c??d.axis.r.tickColor,f=d.series[0].color,g=d.axis.r.lineColor,v=l??d.axis.r.tickLabelColor,x=l??d.axis.r.tickLabelColor;return{series:[{type:"gauge",center:["50%","65%"],radius:"90%",startAngle:170,endAngle:10,min:e,max:r,axisLine:{lineStyle:{width:u,color:[[t/r,f],[1,p]]}},pointer:{length:"70%",width:8,icon:"path://M-2,0 L0,-51 L 2,0 A1, 1 0 0 1 -2, 0 Z",itemStyle:{color:g}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},title:{offsetCenter:[0,"85%"],fontSize:13,fontWeight:"600",color:v},detail:{offsetCenter:[0,"115%"],fontSize:11,color:x},data:[{value:t,name:o,detail:{formatter:s}}]}]}},[d,t,e,r,o,s,c,u,l]);return B.useEffect(()=>{let p;if(h.current)try{p=Ce(h.current,"light",{width:i,height:n}),p.setOption(m)}catch(f){console.warn("Chart initialization error:",f)}return()=>{if(p)try{p.dispose()}catch(f){console.warn("Chart disposal error:",f)}}},[m,i,n]),N.createElement(Se,{ref:h})},Dn=Object.assign(Ge(Ve(Jt),"value"),{displayName:"SimpleGauge"});Jt.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{value:{required:!0,tsType:{name:"number"},description:"Current value to display on the gauge."},min:{required:!1,tsType:{name:"number"},description:`Minimum value of the gauge scale.
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
@default '30%'`,defaultValue:{value:"'30%'",computed:!1}}}};const Xi=t=>t.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),et=t=>{if(t&&t.nodeType===1&&typeof t.getBoundingClientRect=="function")return t.getBoundingClientRect();throw new Error("Can not get boundingClientRect of "+t||"undefined")},Ui=(t,e)=>{const r=t==null?void 0:t.parentNode;r&&setTimeout(()=>{const i=et(r),{height:n,left:o,top:s,width:c}=et(t),u=o-i.left,l=s-i.top;e(u,l,c,n,o,s)},0)};function Ki(){const t=this.state.touchable.responderID;t!==null&&Ui(t,this._handleQueryLayout)}function Zi(t){return t.replace("<svg",~t.indexOf("xmlns")?"<svg":'<svg xmlns="http://www.w3.org/2000/svg"').replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}const Qi=new Set(["stdDeviation","edgeMode","kernelMatrix","kernelUnitLength","preserveAlpha","baseFrequency","targetX","targetY","numOctaves","stitchTiles","filterUnits","primitiveUnits","pathLength","gradientUnits","gradientTransform","spreadMethod","markerHeight","markerUnits","markerWidth","viewBox","refX","refY","maskContentUnits","maskUnits","patternContentUnits","patternTransform","patternUnits","textLength","lengthAdjust","startOffset","clipPathUnits"]),Ji=t=>Qi.has(t)?t:Xi(t);function er(t){return!!(t.onPress||t.onPressIn||t.onPressOut||t.onLongPress)}function en(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function ut(t,e,r,i){this.message=t,this.expected=e,this.found=r,this.location=i,this.name="SyntaxError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,ut)}en(ut,Error);ut.buildMessage=function(t,e){var r={literal:function(l){return'"'+n(l.text)+'"'},class:function(l){var a="",d;for(d=0;d<l.parts.length;d++)a+=l.parts[d]instanceof Array?o(l.parts[d][0])+"-"+o(l.parts[d][1]):o(l.parts[d]);return"["+(l.inverted?"^":"")+a+"]"},any:function(l){return"any character"},end:function(l){return"end of input"},other:function(l){return l.description}};function i(l){return l.charCodeAt(0).toString(16).toUpperCase()}function n(l){return l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(a){return"\\x0"+i(a)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(a){return"\\x"+i(a)})}function o(l){return l.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(a){return"\\x0"+i(a)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(a){return"\\x"+i(a)})}function s(l){return r[l.type](l)}function c(l){var a=new Array(l.length),d,h;for(d=0;d<l.length;d++)a[d]=s(l[d]);if(a.sort(),a.length>0){for(d=1,h=1;d<a.length;d++)a[d-1]!==a[d]&&(a[h]=a[d],h++);a.length=h}switch(a.length){case 1:return a[0];case 2:return a[0]+" or "+a[1];default:return a.slice(0,-1).join(", ")+", or "+a[a.length-1]}}function u(l){return l?'"'+n(l)+'"':"end of input"}return"Expected "+c(t)+" but "+u(e)+" found."};function tn(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function je(t,e,r,i){var n=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(n,je.prototype),n.expected=e,n.found=r,n.location=i,n.name="SyntaxError",n}tn(je,Error);function Fe(t,e,r){return r=r||" ",t.length>e?t:(e-=t.length,r+=r.repeat(e),t+r.slice(0,e))}je.prototype.format=function(t){var e="Error: "+this.message;if(this.location){var r=null,i;for(i=0;i<t.length;i++)if(t[i].source===this.location.source){r=t[i].text.split(/\r\n|\n|\r/g);break}var n=this.location.start,o=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(n):n,s=this.location.source+":"+o.line+":"+o.column;if(r){var c=this.location.end,u=Fe("",o.line.toString().length," "),l=r[n.line-1],a=n.line===c.line?c.column:l.length+1,d=a-n.column||1;e+=`
 --> `+s+`
`+u+` |
`+o.line+" | "+l+`
`+u+" | "+Fe("",n.column-1," ")+Fe("",d,"^")}else e+=`
 at `+s}return e};je.buildMessage=function(t,e){var r={literal:function(l){return'"'+n(l.text)+'"'},class:function(l){var a=l.parts.map(function(d){return Array.isArray(d)?o(d[0])+"-"+o(d[1]):o(d)});return"["+(l.inverted?"^":"")+a.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(l){return l.description}};function i(l){return l.charCodeAt(0).toString(16).toUpperCase()}function n(l){return l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(a){return"\\x0"+i(a)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(a){return"\\x"+i(a)})}function o(l){return l.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(a){return"\\x0"+i(a)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(a){return"\\x"+i(a)})}function s(l){return r[l.type](l)}function c(l){var a=l.map(s),d,h;if(a.sort(),a.length>0){for(d=1,h=1;d<a.length;d++)a[d-1]!==a[d]&&(a[h]=a[d],h++);a.length=h}switch(a.length){case 1:return a[0];case 2:return a[0]+" or "+a[1];default:return a.slice(0,-1).join(", ")+", or "+a[a.length-1]}}function u(l){return l?'"'+n(l)+'"':"end of input"}return"Expected "+c(t)+" but "+u(e)+" found."};const Ye=t=>{if(t.endsWith("rad"))return parseFloat(t)*(180/Math.PI);if(t.endsWith("deg"))return parseFloat(t)};function rn(t){return t?t.map(e=>{const[r,i]=Object.entries(e)[0];switch(r){case"translateX":return`translate(${i}, 0)`;case"translateY":return`translate(0, ${i})`;case"rotate":return`rotate(${Ye(i)})`;case"scale":return`scale(${i})`;case"scaleX":return`scale(${i}, 1)`;case"scaleY":return`scale(1, ${i})`;case"skewX":return`skewX(${Ye(i)})`;case"skewY":return`skewY(${Ye(i)})`;case"matrix":return`matrix(${i.join(", ")})`;default:return""}}).join(" "):""}function Xe(t,e){const r=[];if(e&&r.push(...nn(e)),Array.isArray(t))if(typeof t[0]=="number")r.push(`matrix(${t.join(" ")})`);else{const i=rn(t).split(" ");r.push(...i)}else typeof t=="string"&&r.push(t);return r.length?r.join(" "):void 0}function nn(t){const e=[];return t.translate!=null&&e.push(`translate(${t.translate})`),(t.translateX!=null||t.translateY!=null)&&e.push(`translate(${t.translateX||0}, ${t.translateY||0})`),t.scale!=null&&e.push(`scale(${t.scale})`),(t.scaleX!=null||t.scaleY!=null)&&e.push(`scale(${t.scaleX||1}, ${t.scaleY||1})`),t.rotation!=null&&e.push(`rotate(${t.rotation})`),t.skewX!=null&&e.push(`skewX(${t.skewX})`),t.skewY!=null&&e.push(`skewY(${t.skewY})`),e}function on(t,e){return t?it?[t,e]:t[Symbol.iterator]?Object.assign({},...t,e):Object.assign({},t,e):e}const an=[];function ln(t){return an[t-1]}var sn={getAssetByID:ln};const un=/^(data:image\/svg\+xml;utf8,)(.*)/;function dn(t){let e={};if(typeof t=="number"){const i=sn.getAssetByID(t);if(i==null)throw new Error(`Image: asset with ID "${t}" could not be found. Please check the image source or packager.`);if(e={width:i.width,height:i.height,scale:i.scales[0]},i.scales.length>1){const o=Ee.get();e.scale=i.scales.reduce((s,c)=>Math.abs(c-o)<Math.abs(s-o)?c:s)}const n=e.scale!==1?`@${e.scale}x`:"";e.uri=i?`${i.httpServerLocation}/${i.name}${n}.${i.type}`:""}else typeof t=="string"?e.uri=t:t&&!Array.isArray(t)&&typeof t.uri=="string"&&(e.uri=t.uri);if(e.uri){var r;const i=(r=e)===null||r===void 0||(r=r.uri)===null||r===void 0?void 0:r.match(un);if(i){const[,n,o]=i,s=encodeURIComponent(o);return e.uri=`${n}${s}`,e}}return e}const Gt=(t,e=t.props)=>{const{transform:r,origin:i,originX:n,originY:o,fontFamily:s,fontSize:c,fontWeight:u,fontStyle:l,style:a,forwardedRef:d,gradientTransform:h,patternTransform:m,onPress:p,...f}=e,g={...er(e)?{onStartShouldSetResponder:t.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:t.touchableHandleResponderTerminationRequest,onResponderGrant:t.touchableHandleResponderGrant,onResponderMove:t.touchableHandleResponderMove,onResponderRelease:t.touchableHandleResponderRelease,onResponderTerminate:t.touchableHandleResponderTerminate}:null,...f};i!=null?g["transform-origin"]=i.toString().replace(","," "):(n!=null||o!=null)&&(g["transform-origin"]=`${n||0} ${o||0}`);const v=Xe(r,e);v&&(g.transform=v);const x=Xe(h);x&&(g.gradientTransform=x);const A=Xe(m);A&&(g.patternTransform=A),g.ref=w=>{t.elementRef.current=w,typeof d=="function"?d(w):d&&(d.current=w)};const k={};if(s!=null&&(k.fontFamily=s),c!=null&&(k.fontSize=c),u!=null&&(k.fontWeight=u),l!=null&&(k.fontStyle=l),g.style=on(a,k),p!==null&&(g.onClick=e.onPress),e.href!==null&&e.href!==void 0){var R;g.href=(R=dn(e.href))===null||R===void 0?void 0:R.uri}return g};function Vt(t){const e=t>>16&255,r=t>>8&255,i=t&255,o=((t>>24&255)/255).toFixed(2);return`rgba(${e},${r},${i},${o})`}const cn={top:20,left:20,right:20,bottom:30},{Mixin:tr}=mi,{touchableHandleStartShouldSetResponder:hn,touchableHandleResponderTerminationRequest:pn,touchableHandleResponderGrant:gn,touchableHandleResponderMove:fn,touchableHandleResponderRelease:mn,touchableHandleResponderTerminate:yn,touchableGetInitialState:vn}=tr,rr={...tr,touchableHandleStartShouldSetResponder(t){const{onStartShouldSetResponder:e}=this.props;return e?e(t):hn.call(this,t)},touchableHandleResponderTerminationRequest(t){const{onResponderTerminationRequest:e}=this.props;return e?e(t):pn.call(this,t)},touchableHandleResponderGrant(t){const{onResponderGrant:e}=this.props;return e?e(t):gn.call(this,t)},touchableHandleResponderMove(t){const{onResponderMove:e}=this.props;return e?e(t):fn.call(this,t)},touchableHandleResponderRelease(t){const{onResponderRelease:e}=this.props;return e?e(t):mn.call(this,t)},touchableHandleResponderTerminate(t){const{onResponderTerminate:e}=this.props;return e?e(t):yn.call(this,t)},touchableHandlePress(t){const{onPress:e}=this.props;e&&e(t)},touchableHandleActivePressIn(t){const{onPressIn:e}=this.props;e&&e(t)},touchableHandleActivePressOut(t){const{onPressOut:e}=this.props;e&&e(t)},touchableHandleLongPress(t){const{onLongPress:e}=this.props;e&&e(t)},touchableGetPressRectOffset(){const{pressRetentionOffset:t}=this.props;return t||cn},touchableGetHitSlop(){const{hitSlop:t}=this.props;return t},touchableGetHighlightDelayMS(){const{delayPressIn:t}=this.props;return t||0},touchableGetLongPressDelayMS(){const{delayLongPress:t}=this.props;return t===0?0:t||500},touchableGetPressOutDelayMS(){const{delayPressOut:t}=this.props;return t||0}},dt=Object.keys(rr),bn=dt.map(t=>rr[t]),xn=dt.length,En=t=>{for(let e=0;e<xn;e++){const r=dt[e],i=bn[e];typeof i=="function"?t[r]=i.bind(t):t[r]=i}t.state=vn()};class ue extends N.Component{constructor(r){super(r);te(this,"elementRef",N.createRef());te(this,"lastMergedProps",{});er(r)&&En(this),this._remeasureMetricsOnActivation=Ki.bind(this)}prepareProps(r){return r}setNativeProps(r){const i=Object.assign({},this.props,this.lastMergedProps,r.style);this.lastMergedProps=i;const n=Gt(this,this.prepareProps(i)),o=this.elementRef.current;if(o)for(const s of Object.keys(n)){const c=n[s];switch(s){case"ref":case"children":break;case"style":for(const u of[].concat(n.style??[]))Object.assign(o.style,u);break;case"fill":if(c&&typeof c=="object"){const u=c;o.setAttribute("fill",Vt(u.payload))}break;case"stroke":if(c&&typeof c=="object"){const u=c;o.setAttribute("stroke",Vt(u.payload))}break;default:o.setAttribute(Ji(s),c);break}}}render(){if(!this.tag)throw new Error("When extending `WebShape` you need to overwrite either `tag` or `render`!");return this.lastMergedProps={},ei(this.tag,Gt(this,this.prepareProps(this.props)))}}class Cn extends ue{constructor(){super(...arguments);te(this,"tag","defs")}}class Ue extends ue{constructor(){super(...arguments);te(this,"tag","g")}prepareProps(r){const{x:i,y:n,...o}=r;return(i||n)&&!o.translate&&(o.translate=`${i||0}, ${n||0}`),o}}class Ht extends ue{constructor(){super(...arguments);te(this,"tag","linearGradient")}}class Ne extends ue{constructor(){super(...arguments);te(this,"tag","path")}}class De extends ue{constructor(){super(...arguments);te(this,"tag","stop")}}class Sn extends ue{constructor(){super(...arguments);te(this,"tag","svg")}toDataURL(r,i={}){const n=this.elementRef.current;if(n===null)return;const o=et(n),s=Number(i.width)||o.width,c=Number(i.height)||o.height,u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("viewBox",`0 0 ${o.width} ${o.height}`),u.setAttribute("width",String(s)),u.setAttribute("height",String(c)),u.appendChild(n.cloneNode(!0));const l=new window.Image;l.onload=()=>{const a=document.createElement("canvas");a.width=s,a.height=c;const d=a.getContext("2d");d==null||d.drawImage(l,0,0),r(a.toDataURL().replace("data:image/png;base64,",""))},l.src=`data:image/svg+xml;utf8,${Zi(new window.XMLSerializer().serializeToString(u))}`}}class Ke extends ue{constructor(){super(...arguments);te(this,"tag","text")}}console.error.bind(console);const kn=({value:t,min:e=0,max:r=100,showInnerArc:i=!1,width:n,height:o,animationDuration:s=1e3,colors:c,axisBgColor:u,axisWidth:l,tickColor:a})=>{const{theme:d}=He(void 0,c),h=d.series.map(L=>L.color),m=a??u??d.axis.r.tickColor,p=d.axis.r.tickLabelColor,f=d.axis.r.lineColor,g=u??d.grid.r.lineColor,v=yi(),[x,A]=B.useState(t),k=B.useRef(t),R=B.useRef(void 0),w=B.useRef(void 0);B.useEffect(()=>{const L=k.current,G=t,M=new Date().getTime();w.current=M;const j=()=>{const Z=new Date().getTime()-M,Q=Math.min(Z/s,1),ze=(ve=>1-Math.pow(1-ve,3))(Q),Te=L+(G-L)*ze;k.current=Te,A(Te),Q<1&&(R.current=requestAnimationFrame(j))};return R.current&&cancelAnimationFrame(R.current),R.current=requestAnimationFrame(j),()=>{R.current&&cancelAnimationFrame(R.current)}},[t,s]);const{majorTickPositions:W,minorStep:I}=B.useMemo(()=>{const L=Math.max(r-e,1),G=Yt(e,r),M=G.length>=2?G[1]-G[0]:Math.max(L/5,1),j=Math.max(1,Math.round(M/10));return{majorTickPositions:G,minorStep:j}},[e,r]),D=o??v.height*.9,C=Math.min(n??D,D),q=12,E=C/2,T=(C-q)/2-20,_=l??3,S=-135,P=135,O=P-S,H=Math.max(r-e,1),K=(x-e)/H*100/100*O,F=(L,G,M,j)=>{const $=(j-90)*Math.PI/180;return{x:L+M*Math.cos($),y:G+M*Math.sin($)}},ee=(L,G,M,j,$)=>{const Z=F(L,G,M,$),Q=F(L,G,M,j);return`M ${Z.x} ${Z.y} A ${M} ${M} 0 1 0 ${Q.x} ${Q.y}`},ie=(L,G,M)=>{const j=Te=>{const ve=Te.replace("#","");return{r:parseInt(ve.substring(0,2),16),g:parseInt(ve.substring(2,4),16),b:parseInt(ve.substring(4,6),16)}},$=j(L),Z=j(G),Q=Math.round($.r+M*(Z.r-$.r)),ye=Math.round($.g+M*(Z.g-$.g)),ze=Math.round($.b+M*(Z.b-$.b));return`rgb(${Q}, ${ye}, ${ze})`},Re=L=>{if(h.length===0)return"#FF6B6B";if(h.length===1)return h[0];const G=L*(h.length-1),M=Math.floor(G),j=Math.min(M+1,h.length-1),$=G-M;return ie(h[M],h[j],$)},Ae=50,ht=[],ar=Math.round(K/O*Ae),pt=20;for(let L=0;L<=Ae;L++){const G=S+L/Ae*O,M=L<=ar,j=pt,$=F(E,E,T+10,G),Z=F(E,E,T+10-j,G);let Q;if(M){const ye=L/Ae;Q=Re(ye)}else Q=m;ht.push(N.createElement(Ne,{key:L,d:`M ${$.x} ${$.y} L ${Z.x} ${Z.y}`,stroke:Q,strokeWidth:_,strokeLinecap:"round"}))}const gt=[],$e=[],lr=T-40,sr=4,ur=2,me=T-pt-4,dr=new Set(W);for(const L of W){const G=S+(L-e)/H*O,M=F(E,E,lr,G);gt.push(N.createElement(Ke,{key:`label-${L}`,x:M.x,y:M.y,textAnchor:"middle",fontSize:"12",fill:p},L));const j=F(E,E,me,G),$=F(E,E,me-sr,G);$e.push(N.createElement(Ne,{key:`inner-tick-${L}`,d:`M ${j.x} ${j.y} L ${$.x} ${$.y}`,stroke:f,strokeWidth:2,strokeLinecap:"round"}))}for(let L=e;L<=r;L+=I){if(dr.has(L))continue;const G=S+(L-e)/H*O,M=F(E,E,me,G),j=F(E,E,me-ur,G);$e.push(N.createElement(Ne,{key:`inner-minor-tick-${L}`,d:`M ${M.x} ${M.y} L ${j.x} ${j.y}`,stroke:m,strokeWidth:1,strokeLinecap:"round"}))}return N.createElement(Sn,{width:C,height:C,viewBox:`0 0 ${C} ${C}`},N.createElement(Cn,null,N.createElement(Ht,{id:"gaugeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},N.createElement(De,{offset:"0%",stopColor:h[0],stopOpacity:"1"}),N.createElement(De,{offset:"100%",stopColor:h[h.length-1],stopOpacity:"1"})),N.createElement(Ht,{id:"outerArcGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},N.createElement(De,{offset:"0%",stopColor:h[0],stopOpacity:"0.8"}),N.createElement(De,{offset:"100%",stopColor:h[h.length-1],stopOpacity:"0.8"}))),N.createElement(Ue,null,ht),i&&N.createElement(Ne,{d:ee(E,E,me,S,P),fill:"none",stroke:g,strokeWidth:1,opacity:.5}),N.createElement(Ue,null,$e),N.createElement(Ue,null,gt),N.createElement(Ke,{x:E,y:E+10,textAnchor:"middle",fontSize:"56",fontWeight:"bold",fill:d.axis.r.tickLabelColor},Math.round(x)),N.createElement(Ke,{x:E,y:E+30,textAnchor:"middle",fontSize:"14",fill:p},"Value"))},ir=({value:t=46,min:e=0,max:r=100,width:i,height:n,axisBgColor:o,axisWidth:s,tickColor:c,showInnerArc:u,animationDuration:l,...a})=>N.createElement(kn,{value:t,min:e,max:r,width:i,height:n,colors:a.colors,axisBgColor:o,axisWidth:s,tickColor:c,showInnerArc:u,animationDuration:l}),On=Object.assign(Ge(Ve(ir),"value"),{displayName:"DigitalGauge"});ir.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{value:{required:!1,tsType:{name:"number"},description:"Current value to display on the gauge.",defaultValue:{value:"46",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`Minimum value of the gauge scale.
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`Maximum value of the gauge scale.
@default 100`,defaultValue:{value:"100",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"Width of the chart in pixels."},height:{required:!1,tsType:{name:"number"},description:"Height of the chart in pixels."},theme:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
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
@default 1000`}}};Ie([rt,ot]);const nr=({value:t=85,min:e=0,max:r=100,width:i=400,height:n=250,axisColors:o,axisColorLengths:s,axisBgColor:c="transparent",axisWidth:u=30,tickColor:l,...a})=>{const{theme:d}=He(a.theme,a.colors),h=B.useRef(null),m=B.useRef(null),p=B.useMemo(()=>({series:[{type:"gauge",center:["50%","50%"],radius:"90%",startAngle:200,endAngle:-20,min:e,max:r,splitNumber:6,axisLine:{lineStyle:{width:50,color:[[1,c]]}},pointer:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1},data:[{value:r}]}]}),[r,e,c,u]),f=B.useMemo(()=>{const g=d.axis.r.lineColor||"#1e3a8a",v="#ffffff",x=l||d.axis.r.tickColor||d.grid.r.lineColor||"#666666",A=d.axis.r.tickLabelColor||"#666666";d.axis.r.tickColor;let k;o&&o.length>0?k=o:k=[d.series[0].color,d.series.length>1?d.series[1].color:d.series[0].color];let R;if(s&&s.length>0)R=s;else{const b=(r-e)/k.length;R=k.map((C,q)=>e+(q+1)*b)}const w=Math.min(k.length,R.length),W=R.slice(0,w).map(b=>Math.min(b,r)),I=k.slice(0,w),D=W.map((b,C)=>[b/r,I[C]]);return D.length>0&&D[D.length-1][0]<1&&(D[D.length-1][0]=1),{backgroundColor:"transparent",series:[{type:"gauge",center:["50%","50%"],radius:"90%",startAngle:200,endAngle:-20,min:e,max:r,splitNumber:(r-e)/10,axisLine:{lineStyle:{width:u,color:D}},pointer:{itemStyle:{color:g},length:"70%",width:4,icon:"path://M-2,0 L0,-50 L2,0 A1,1 0 0,1 -2,0 Z"},axisTick:{distance:0,length:0,splitNumber:20,lineStyle:{color:x,width:1}},splitLine:{distance:0,length:10,lineStyle:{color:x,width:1.5},show:function(b){return b%20===0}},axisLabel:{show:!0,distance:u,color:A,fontSize:12,fontWeight:"bold",formatter:function(b){return b%20===0?b.toString():""}},anchor:{show:!0,showAbove:!0,size:14,itemStyle:{color:v,borderColor:g,borderWidth:2,shadowBlur:4,shadowColor:"rgba(0, 0, 0, 0.2)"}},detail:{show:!1},data:[{value:t}]}]}},[d,t,e,r,o,s,u,l]);return B.useEffect(()=>{let g;if(h.current)try{g=Ce(h.current,"light",{width:i,height:n}),g.setOption(f)}catch(v){console.warn("Chart initialization error:",v)}return()=>{if(g)try{g.dispose()}catch(v){console.warn("Chart disposal error:",v)}}},[f,i,n]),B.useEffect(()=>{let g;return m.current&&(g=Ce(m.current,"light",{width:i,height:n})),g.setOption(p),()=>{g&&g.dispose()}},[p,i,n]),N.createElement(he,{style:[Bt.container,{width:i,height:n}]},N.createElement(he,{style:Bt.chartContainer},N.createElement(Se,{ref:m}),N.createElement(he,{style:{position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%"}},N.createElement(Se,{ref:h}))))},Bt=it.create({container:{position:"relative",justifyContent:"center",alignItems:"center"},chartContainer:{position:"absolute",top:0,left:0,right:0,bottom:0,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"}}),Wn=Object.assign(Ge(Ve(nr),"value"),{displayName:"SpeedometerGauge"});nr.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{value:{required:!1,tsType:{name:"number"},description:"Current value to display on the gauge.",defaultValue:{value:"85",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`Minimum value of the gauge scale.
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
If not provided, segments are divided evenly based on max value.`}}};Ie([rt,ot,ri,Yi]);const or=({value:t,min:e=0,max:r=100,width:i=220,height:n=240,axisBgColor:o,axisWidth:s,tickColor:c,...u})=>{const{theme:l}=He(u.theme,u.colors),a=B.useRef(null),d=B.useRef(null),h=B.useMemo(()=>{const p=Math.min(i,n),f=p*.3,g=p*.48,v=o??l.axis.r.tickColor,x=l.series[0].color;return{polar:{center:["50%","50%"],radius:[f,g]},angleAxis:{min:e,max:r,startAngle:225,endAngle:-45,clockwise:!0,show:!1},radiusAxis:{type:"category",data:["Data"],show:!1},series:[{type:"bar",data:[r-e],coordinateSystem:"polar",name:"Background",tooltip:{show:!1},itemStyle:{color:v,borderRadius:[50,50]},animation:!1,barWidth:"50%",emphasis:{disabled:!0}},{type:"bar",data:[Math.max(t-e,0)],coordinateSystem:"polar",name:"Value",itemStyle:{color:x,borderRadius:[50,50]},barWidth:"50%",barGap:"-100%",emphasis:{disabled:!0}}]}},[l,t,e,r,i,n,o]),m=B.useMemo(()=>{const f=Math.min(i,n)*.32,g=o??l.axis.r.tickColor,v=l.axis.r.lineColor,x=c??l.axis.r.tickColor,A=c??l.axis.r.tickColor,k=l.axis.r.tickLabelColor,R=l.axis.r.lineColor,w=c??l.axis.r.tickColor,W=l.axis.r.tickLabelColor,I=l.axis.r.tickLabelColor,D=Yt(e,r),b=Math.max(D.length-1,1);return{series:[{type:"gauge",center:["50%","50%"],radius:f,startAngle:225,endAngle:-45,min:e,max:r,splitNumber:b,axisLine:{show:!1,distance:1,length:8,lineStyle:{width:s??1,color:[[1,g]]}},pointer:{length:"80%",width:8,icon:"path://M-4,0 L-2,-50 A1, 1 0 0 1 2, -50 L4,0 A1, 1 0 0 1 -4, 0 Z",itemStyle:{color:v}},axisTick:{distance:1,length:4,splitNumber:16,lineStyle:{color:x,width:.5}},splitLine:{distance:1,length:8,lineStyle:{color:A,width:1}},axisLabel:{show:!0,distance:16,fontSize:12,color:k,formatter:C=>String(Math.round(C))},anchor:{show:!0,showAbove:!0,size:8,itemStyle:{color:R,borderColor:w,borderWidth:3,shadowBlur:3,shadowColor:"rgba(0,0,0,0.15)"}},detail:{valueAnimation:!0,formatter:C=>`{value|${Math.round(C)}}{unit|/${r}}`,offsetCenter:[0,"70%"],rich:{value:{fontSize:40,fontWeight:"bold",color:W},unit:{verticalAlign:"bottom",fontSize:16,color:I,fontWeight:"normal"}}},data:[{value:t}]}],style:{backgroundColor:"transparent"}}},[l,t,e,r,i,n,o,s,c]);return B.useEffect(()=>{let p;if(d.current)try{p=Ce(d.current,"light",{width:i,height:n}),p.setOption(h)}catch(f){console.warn("Radial chart initialization error:",f)}return()=>{if(p)try{p.dispose()}catch(f){console.warn("Radial chart disposal error:",f)}}},[h,i,n]),B.useEffect(()=>{let p;if(a.current)try{p=Ce(a.current,"light",{width:i,height:n}),p.setOption(m)}catch(f){console.warn("Gauge chart initialization error:",f)}return()=>{if(p)try{p.dispose()}catch(f){console.warn("Gauge chart disposal error:",f)}}},[m,i,n]),N.createElement(he,{style:[Ze.container,{width:i,height:n}]},N.createElement(he,{style:Ze.radialChart},N.createElement(Se,{ref:d})),N.createElement(he,{style:Ze.gaugeChart},N.createElement(Se,{ref:a})))},Ze=it.create({container:{position:"relative",justifyContent:"center",alignItems:"center"},radialChart:{position:"absolute",top:0,left:0,right:0,bottom:0,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"},gaugeChart:{position:"absolute",top:0,left:0,right:0,bottom:0,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"}}),qn=Object.assign(Ge(Ve(or),"value"),{displayName:"RadialGauge"});or.__docgenInfo={description:"",methods:[],displayName:"ChartComponent",props:{value:{required:!0,tsType:{name:"number"},description:"Current value to display on the gauge."},min:{required:!1,tsType:{name:"number"},description:`Minimum value of the gauge scale.
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
@default theme.itemStyles.map(item => item.color)`},axisBgColor:{required:!1,tsType:{name:"string"},description:"Background color for the axis/track."},axisWidth:{required:!1,tsType:{name:"number"},description:"Width of the axis line in pixels."},tickColor:{required:!1,tsType:{name:"string"},description:"Color for tick marks and split lines."}}};const ct={value:{control:"number",description:"Current value to display on the gauge."},min:{control:"number",description:"Minimum value of the gauge scale. Default: 0"},max:{control:"number",description:"Maximum value of the gauge scale. Default: 100"},width:{control:"number",description:"Width of the chart in pixels."},height:{control:"number",description:"Height of the chart in pixels."},theme:{control:"object",description:"Partial theme override for customizing chart appearance."},colors:{control:"object",description:"Colors for the chart. Overrides theme colors."},axisBgColor:{control:"color",description:"Background color for the axis/track."},axisWidth:{control:"number",description:"Width of the axis line in pixels."},tickColor:{control:"color",description:"Color for tick marks and split lines."}},Mn={value:50,min:0,max:100,width:320,height:320},In={...ct,axisColors:{control:"object",description:"Array of colors for axis segments. Example: ['#e74c3c', '#3498db', '#2ecc71']"},axisColorLengths:{control:"object",description:"Endpoint values for each color segment. Length should match axisColors."},axisBgColor:{control:"color",description:"Background color for the axis line. Default: transparent"},axisWidth:{control:"number",description:"Width of the axis line in pixels. Default: 30"},tickColor:{control:"color",description:"Color for tick marks and split lines."}},Gn={...ct,showInnerArc:{control:"boolean",description:"Whether to show the inner arc. Default: false"},animationDuration:{control:"number",description:"Animation duration in milliseconds. Default: 1000"}},Vn={...ct,title:{control:"text",description:"Title text displayed on the gauge. Default: 'Metric'"},detailText:{control:"text",description:"Detail text showing the value. Default: '30%'"}};export{On as D,qn as R,Dn as S,Wn as a,Mn as c,Gn as d,ct as g,Vn as l,In as s};
