(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8FJ2":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r("ofXK"),s=r("wZkO"),n=r("YUcS"),o=r("Xa2L"),i=r("l6p3"),m=r("fXoL");let d=(()=>{class e{}return e.\u0275mod=m.Qb({type:e}),e.\u0275inj=m.Pb({factory:function(t){return new(t||e)},imports:[[a.c,s.e,n.a,o.b,i.a]]}),e})()},DxvK:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var a=r("fXoL"),s=r("XiUz"),n=r("Xa2L"),o=r("wZkO"),i=r("B1UH");let m=(()=>{class e{constructor(){this.progressSpinnerHTML='<mat-progress-spinner mode="determinate" [value]="40"></mat-progress-spinner>\n<mat-progress-spinner mode="indeterminate" color="accent"></mat-progress-spinner>'}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Mb({type:e,selectors:[["vex-components-overview-progress-spinner"]],decls:25,vars:2,consts:[["fxLayout","column","fxLayout.gt-sm","row",1,"card"],[1,"p-6"],[1,"title","mt-0","mb-4"],["fxLayout","column","fxLayoutAlign","start center","fxLayoutGap","24px"],["mode","determinate",3,"value"],["color","accent","mode","indeterminate"],["fxFlex","",1,"border-l"],[1,"body-2","text-secondary","m-0"],[1,"vex-tabs"],["label","DESCRIPTION"],["label","SOURCE CODE"],[3,"vexHighlight"]],template:function(e,t){1&e&&(a.Yb(0,"div",0),a.Yb(1,"div",1),a.Yb(2,"h2",2),a.Rc(3,"Preview"),a.Xb(),a.Yb(4,"div",3),a.Tb(5,"mat-progress-spinner",4),a.Tb(6,"mat-progress-spinner",5),a.Xb(),a.Xb(),a.Yb(7,"div",6),a.Yb(8,"div",1),a.Yb(9,"h2",2),a.Rc(10,"Progress Spinner"),a.Xb(),a.Yb(11,"h4",7),a.Rc(12,"<mat-progress-spinner>"),a.Xb(),a.Xb(),a.Yb(13,"mat-tab-group",8),a.Yb(14,"mat-tab",9),a.Yb(15,"p",1),a.Rc(16," A single visual indicator should be used to represent each type of operation. For example, a refresh operation should display either a refresh bar or an activity circle, but not both. "),a.Tb(17,"br"),a.Tb(18,"br"),a.Rc(19,"Determinate indicators display how long an operation will take. "),a.Tb(20,"br"),a.Rc(21,"Indeterminate indicators visualize an unspecified wait time. "),a.Xb(),a.Xb(),a.Yb(22,"mat-tab",10),a.Yb(23,"pre"),a.Tb(24,"code",11),a.Xb(),a.Xb(),a.Xb(),a.Xb(),a.Xb()),2&e&&(a.Gb(5),a.rc("value",80),a.Gb(19),a.rc("vexHighlight",t.progressSpinnerHTML))},directives:[s.d,s.c,s.e,n.a,s.b,o.b,o.a,i.a],styles:[""]}),e})()},Xa2L:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return g}));var a=r("fXoL"),s=r("ofXK"),n=r("FKr1"),o=r("8LU1"),i=r("nLfN"),m=r("R1ws");function d(e,t){if(1&e&&(a.jc(),a.Tb(0,"circle",3)),2&e){const e=a.kc();a.Mc("animation-name","mat-progress-spinner-stroke-rotate-"+e.diameter)("stroke-dashoffset",e._strokeDashOffset,"px")("stroke-dasharray",e._strokeCircumference,"px")("stroke-width",e._circleStrokeWidth,"%"),a.Hb("r",e._circleRadius)}}function c(e,t){if(1&e&&(a.jc(),a.Tb(0,"circle",3)),2&e){const e=a.kc();a.Mc("stroke-dashoffset",e._strokeDashOffset,"px")("stroke-dasharray",e._strokeCircumference,"px")("stroke-width",e._circleStrokeWidth,"%"),a.Hb("r",e._circleRadius)}}class f{constructor(e){this._elementRef=e}}const p=Object(n.x)(f,"primary"),h=new a.s("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});let l=(()=>{class e extends p{constructor(t,r,a,s,n){super(t),this._elementRef=t,this._document=a,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const o=e._diameters;o.has(a.head)||o.set(a.head,new Set([100])),this._fallbackAnimation=r.EDGE||r.TRIDENT,this._noopAnimations="NoopAnimations"===s&&!!n&&!n._forceAnimations,n&&(n.diameter&&(this.diameter=n.diameter),n.strokeWidth&&(this.strokeWidth=n.strokeWidth))}get diameter(){return this._diameter}set diameter(e){this._diameter=Object(o.f)(e),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(e){this._strokeWidth=Object(o.f)(e)}get value(){return"determinate"===this.mode?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,Object(o.f)(e)))}ngOnInit(){const e=this._elementRef.nativeElement;this._styleRoot=Object(i.c)(e)||this._document.head,this._attachStyleNode(),e.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}get _circleRadius(){return(this.diameter-10)/2}get _viewBox(){const e=2*this._circleRadius+this.strokeWidth;return`0 0 ${e} ${e}`}get _strokeCircumference(){return 2*Math.PI*this._circleRadius}get _strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._strokeCircumference:null}get _circleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const t=this._styleRoot,r=this._diameter,a=e._diameters;let s=a.get(t);if(!s||!s.has(r)){const e=this._document.createElement("style");e.setAttribute("mat-spinner-animation",r+""),e.textContent=this._getAnimationText(),t.appendChild(e),s||(s=new Set,a.set(t,s)),s.add(r)}}_getAnimationText(){return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*this._strokeCircumference).replace(/END_VALUE/g,""+.2*this._strokeCircumference).replace(/DIAMETER/g,""+this.diameter)}}return e.\u0275fac=function(t){return new(t||e)(a.Sb(a.l),a.Sb(i.a),a.Sb(s.d,8),a.Sb(m.a,8),a.Sb(h))},e.\u0275cmp=a.Mb({type:e,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(e,t){2&e&&(a.Hb("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),a.Mc("width",t.diameter,"px")("height",t.diameter,"px"),a.Kb("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[a.Db],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,t){1&e&&(a.jc(),a.Yb(0,"svg",0),a.Pc(1,d,1,9,"circle",1),a.Pc(2,c,1,7,"circle",2),a.Xb()),2&e&&(a.Mc("width",t.diameter,"px")("height",t.diameter,"px"),a.rc("ngSwitch","indeterminate"===t.mode),a.Hb("viewBox",t._viewBox),a.Gb(1),a.rc("ngSwitchCase",!0),a.Gb(1),a.rc("ngSwitchCase",!1))},directives:[s.q,s.r],styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],encapsulation:2,changeDetection:0}),e._diameters=new WeakMap,e})(),g=(()=>{class e{}return e.\u0275mod=a.Qb({type:e}),e.\u0275inj=a.Pb({factory:function(t){return new(t||e)},imports:[[n.j,s.c],n.j]}),e})()}}]);