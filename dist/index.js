"use strict";var t=require("react"),e=function(){return e=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},e.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var n=t.memo((function(n){var o=n.progress,r=void 0===o?null:o,a=n.total,c=void 0===a?100:a,i=n.isPercentage,l=void 0===i||i,s=n.strokeWidth,d=void 0===s?4:s,u=n.ballStrokeWidth,f=void 0===u?12:u,v=n.transitionDuration,p=void 0===v?.5:v,h=n.transitionTimingFunction,m=void 0===h?"ease":h,y=n.background,x=void 0===y?"#eef2f5":y,g=n.hideBall,E=void 0!==g&&g,k=n.hideValue,S=void 0!==k&&k,b=n.gradient,W=void 0===b?[{stop:0,color:"#309E3A"},{stop:1,color:"#309E3A"}]:b,A=n.subtitle,M=n.style,w=n.className,B=n.suffix,z=void 0===B?"%":B,O=n.centerBackground,C=void 0===O?"transparent":O,P=n.fontWeight,T=void 0===P?"bold":P,U=n.fontSize,j=void 0===U?"24px":U,F=n.inverted,G=void 0!==F&&F,I=n.textColor,N=void 0===I?"#309E3A":I,V=100,q=V-Math.max(d,f)/2,D=t.useState((function(){return Math.random().toString()}))[0],H=G?-90:90,J=null!==r?r:0,K=J/c*350,L=function(t){var e=(t-90)*Math.PI/180;return{x:V+q*Math.cos(e),y:V+q*Math.sin(e)}},Q=L(H),R=L(H+(G?-K:K)),X=K>180?1:0,Y="\n    M ".concat(Q.x," ").concat(Q.y,"\n    A ").concat(q," ").concat(q," 0 ").concat(X," ").concat(G?0:1," ").concat(R.x," ").concat(R.y,"\n  "),Z="";return Z=l?"".concat(J).concat(z):null===r?"? de ".concat(c):"".concat(r," de ").concat(c),t.createElement("div",{className:w,style:e({fontFamily:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',fontWeight:"bold",fontSize:"16px",width:"200px"},M)},t.createElement("svg",{viewBox:"0 0 ".concat(200," ").concat(200),style:{display:"block",width:"100%"}},t.createElement("defs",null,t.createElement("linearGradient",{id:"gradient-".concat(D),gradientUnits:"userSpaceOnUse",x1:G?"1":"0",y1:"0",x2:G?"0":"1",y2:"0"},W.map((function(e){var n=e.stop,o=e.color;return t.createElement("stop",{key:n,offset:"".concat(100*n,"%"),stopColor:o})})))),t.createElement("circle",{cx:V,cy:V,r:q,stroke:x,strokeWidth:d,fill:"none"}),t.createElement("circle",{cx:V,cy:V,r:q,fill:C}),t.createElement("path",{d:Y,stroke:"url(#gradient-".concat(D,")"),strokeWidth:d,fill:"none",style:{transition:"stroke-dasharray ".concat(p,"s ").concat(m)},"data-testid":"progress-arc"}),!E&&t.createElement("circle",{cx:R.x,cy:R.y,r:f/2,fill:"white",stroke:"url(#gradient-".concat(D,")"),strokeWidth:f}),!S&&t.createElement("text",{x:"50%",y:"50%",textAnchor:"middle",dominantBaseline:"central",style:{fontSize:j,fontWeight:T},fill:N,"data-testid":"progress-ball"},Z),A&&t.createElement("text",{x:"50%",y:"60%",textAnchor:"middle",dominantBaseline:"central",fontSize:"16",fill:N},A)))}));exports.CircularTracker=n;
//# sourceMappingURL=index.js.map
