!function(){function e(t,r){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,r)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,a=n(e);if(t){var i=n(this).constructor;o=Reflect.construct(a,arguments,i)}else o=a.apply(this,arguments);return r(this,o)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8FJ2":function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r("ofXK"),o=r("wZkO"),a=r("YUcS"),s=r("Xa2L"),c=r("l6p3"),f=r("fXoL"),m=function(){var e=function e(){i(this,e)};return e.\u0275mod=f.Qb({type:e}),e.\u0275inj=f.Pb({factory:function(t){return new(t||e)},imports:[[n.c,o.e,a.a,s.b,c.a]]}),e}()},DxvK:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r("fXoL"),o=r("XiUz"),s=r("Xa2L"),c=r("wZkO"),f=r("B1UH"),m=function(){var e=function(){function e(){i(this,e),this.progressSpinnerHTML='<mat-progress-spinner mode="determinate" [value]="40"></mat-progress-spinner>\n<mat-progress-spinner mode="indeterminate" color="accent"></mat-progress-spinner>'}return a(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Mb({type:e,selectors:[["vex-components-overview-progress-spinner"]],decls:25,vars:2,consts:[["fxLayout","column","fxLayout.gt-sm","row",1,"card"],[1,"p-6"],[1,"title","mt-0","mb-4"],["fxLayout","column","fxLayoutAlign","start center","fxLayoutGap","24px"],["mode","determinate",3,"value"],["color","accent","mode","indeterminate"],["fxFlex","",1,"border-l"],[1,"body-2","text-secondary","m-0"],[1,"vex-tabs"],["label","DESCRIPTION"],["label","SOURCE CODE"],[3,"vexHighlight"]],template:function(e,t){1&e&&(n.Yb(0,"div",0),n.Yb(1,"div",1),n.Yb(2,"h2",2),n.Rc(3,"Preview"),n.Xb(),n.Yb(4,"div",3),n.Tb(5,"mat-progress-spinner",4),n.Tb(6,"mat-progress-spinner",5),n.Xb(),n.Xb(),n.Yb(7,"div",6),n.Yb(8,"div",1),n.Yb(9,"h2",2),n.Rc(10,"Progress Spinner"),n.Xb(),n.Yb(11,"h4",7),n.Rc(12,"<mat-progress-spinner>"),n.Xb(),n.Xb(),n.Yb(13,"mat-tab-group",8),n.Yb(14,"mat-tab",9),n.Yb(15,"p",1),n.Rc(16," A single visual indicator should be used to represent each type of operation. For example, a refresh operation should display either a refresh bar or an activity circle, but not both. "),n.Tb(17,"br"),n.Tb(18,"br"),n.Rc(19,"Determinate indicators display how long an operation will take. "),n.Tb(20,"br"),n.Rc(21,"Indeterminate indicators visualize an unspecified wait time. "),n.Xb(),n.Xb(),n.Yb(22,"mat-tab",10),n.Yb(23,"pre"),n.Tb(24,"code",11),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb()),2&e&&(n.Gb(5),n.rc("value",80),n.Gb(19),n.rc("vexHighlight",t.progressSpinnerHTML))},directives:[o.d,o.c,o.e,s.a,o.b,c.b,c.a,f.a],styles:[""]}),e}()},Xa2L:function(r,n,o){"use strict";o.d(n,"a",(function(){return b})),o.d(n,"b",(function(){return k}));var s=o("fXoL"),c=o("ofXK"),f=o("FKr1"),m=o("8LU1"),d=o("nLfN"),p=o("R1ws");function u(e,t){if(1&e&&(s.jc(),s.Tb(0,"circle",3)),2&e){var r=s.kc();s.Mc("animation-name","mat-progress-spinner-stroke-rotate-"+r.diameter)("stroke-dashoffset",r._strokeDashOffset,"px")("stroke-dasharray",r._strokeCircumference,"px")("stroke-width",r._circleStrokeWidth,"%"),s.Hb("r",r._circleRadius)}}function l(e,t){if(1&e&&(s.jc(),s.Tb(0,"circle",3)),2&e){var r=s.kc();s.Mc("stroke-dashoffset",r._strokeDashOffset,"px")("stroke-dasharray",r._strokeCircumference,"px")("stroke-width",r._circleStrokeWidth,"%"),s.Hb("r",r._circleRadius)}}var h=Object(f.x)((function e(t){i(this,e),this._elementRef=t}),"primary"),g=new s.s("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}}),b=function(){var r=function(r){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&e(t,r)}(o,r);var n=t(o);function o(e,t,r,a,s){var c;i(this,o),(c=n.call(this,e))._elementRef=e,c._document=r,c._diameter=100,c._value=0,c._fallbackAnimation=!1,c.mode="determinate";var f=o._diameters;return f.has(r.head)||f.set(r.head,new Set([100])),c._fallbackAnimation=t.EDGE||t.TRIDENT,c._noopAnimations="NoopAnimations"===a&&!!s&&!s._forceAnimations,s&&(s.diameter&&(c.diameter=s.diameter),s.strokeWidth&&(c.strokeWidth=s.strokeWidth)),c}return a(o,[{key:"ngOnInit",value:function(){var e=this._elementRef.nativeElement;this._styleRoot=Object(d.c)(e)||this._document.head,this._attachStyleNode(),e.classList.add("mat-progress-spinner-indeterminate".concat(this._fallbackAnimation?"-fallback":"","-animation"))}},{key:"_attachStyleNode",value:function(){var e=this._styleRoot,t=this._diameter,r=o._diameters,n=r.get(e);if(!n||!n.has(t)){var a=this._document.createElement("style");a.setAttribute("mat-spinner-animation",t+""),a.textContent=this._getAnimationText(),e.appendChild(a),n||(n=new Set,r.set(e,n)),n.add(t)}}},{key:"_getAnimationText",value:function(){return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*this._strokeCircumference).replace(/END_VALUE/g,""+.2*this._strokeCircumference).replace(/DIAMETER/g,""+this.diameter)}},{key:"diameter",get:function(){return this._diameter},set:function(e){this._diameter=Object(m.f)(e),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}},{key:"strokeWidth",get:function(){return this._strokeWidth||this.diameter/10},set:function(e){this._strokeWidth=Object(m.f)(e)}},{key:"value",get:function(){return"determinate"===this.mode?this._value:0},set:function(e){this._value=Math.max(0,Math.min(100,Object(m.f)(e)))}},{key:"_circleRadius",get:function(){return(this.diameter-10)/2}},{key:"_viewBox",get:function(){var e=2*this._circleRadius+this.strokeWidth;return"0 0 ".concat(e," ").concat(e)}},{key:"_strokeCircumference",get:function(){return 2*Math.PI*this._circleRadius}},{key:"_strokeDashOffset",get:function(){return"determinate"===this.mode?this._strokeCircumference*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._strokeCircumference:null}},{key:"_circleStrokeWidth",get:function(){return this.strokeWidth/this.diameter*100}}]),o}(h);return r.\u0275fac=function(e){return new(e||r)(s.Sb(s.l),s.Sb(d.a),s.Sb(c.d,8),s.Sb(p.a,8),s.Sb(g))},r.\u0275cmp=s.Mb({type:r,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(e,t){2&e&&(s.Hb("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),s.Mc("width",t.diameter,"px")("height",t.diameter,"px"),s.Kb("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[s.Db],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,t){1&e&&(s.jc(),s.Yb(0,"svg",0),s.Pc(1,u,1,9,"circle",1),s.Pc(2,l,1,7,"circle",2),s.Xb()),2&e&&(s.Mc("width",t.diameter,"px")("height",t.diameter,"px"),s.rc("ngSwitch","indeterminate"===t.mode),s.Hb("viewBox",t._viewBox),s.Gb(1),s.rc("ngSwitchCase",!0),s.Gb(1),s.rc("ngSwitchCase",!1))},directives:[c.q,c.r],styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n"],encapsulation:2,changeDetection:0}),r._diameters=new WeakMap,r}(),k=function(){var e=function e(){i(this,e)};return e.\u0275mod=s.Qb({type:e}),e.\u0275inj=s.Pb({factory:function(t){return new(t||e)},imports:[[f.j,c.c],f.j]}),e}()}}])}();