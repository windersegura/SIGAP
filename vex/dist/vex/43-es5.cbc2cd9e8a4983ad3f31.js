!function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"7lCJ":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("ofXK"),o=n("fXoL"),c=function(){var t=function t(){a(this,t)};return t.\u0275mod=o.Qb({type:t}),t.\u0275inj=o.Pb({factory:function(e){return new(e||t)},imports:[[r.c]]}),t}()},C0s9:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fXoL"),o=function(){var t=function t(){a(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Nb({type:t,selectors:[["","vexPageLayoutContent",""],["vex-page-layout-content"]],hostAttrs:[1,"vex-page-layout-content"]}),t}()},J0XA:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("ofXK"),o=n("tyNb"),c=n("NFeN"),i=n("YUcS"),u=n("VX/1"),l=n("fXoL"),b=function(){var t=function t(){a(this,t)};return t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(e){return new(e||t)},imports:[[r.c,o.i,c.b,i.a,u.b]]}),t}()},Ks5e:function(t,n,r){"use strict";r.r(n),r.d(n,"PageLayoutCardLargeHeaderModule",(function(){return Y}));var o,c,i,u=r("ofXK"),l=r("tyNb"),b=r("fXoL"),s=r("ZuBe"),p=r("uwSD"),d=r("XiUz"),g=r("a3ZD"),f=r("Z998"),v=r("C0s9"),y=r("M4W6"),m=function(){return["Page Layouts","Card","Large Header"]},h=[{path:"",component:(o=function(){function t(){a(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}(),o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=b.Mb({type:o,selectors:[["vex-page-layout-card-large-header"]],decls:11,vars:2,consts:[["mode","card"],["fxLayout","column","fxLayoutAlign","center start"],["vexContainer",""],[1,"title","m-0"],[3,"crumbs"],[1,"card","p-6"],[1,"m-0","title","mb-6"]],template:function(t,e){1&t&&(b.Yb(0,"vex-page-layout",0),b.Yb(1,"vex-page-layout-header",1),b.Yb(2,"div",2),b.Yb(3,"h2",3),b.Rc(4,"Card - Large Header"),b.Xb(),b.Tb(5,"vex-breadcrumbs",4),b.Xb(),b.Xb(),b.Yb(6,"vex-page-layout-content",2),b.Yb(7,"div",5),b.Yb(8,"h2",6),b.Rc(9,"Blog Post"),b.Xb(),b.Tb(10,"vex-page-layout-demo"),b.Xb(),b.Xb(),b.Xb()),2&t&&(b.Gb(5),b.rc("crumbs",b.uc(1,m)))},directives:[s.a,p.a,d.d,d.c,g.a,f.a,v.a,y.a],styles:[""]}),o)}],x=((c=function t(){a(this,t)}).\u0275mod=b.Qb({type:c}),c.\u0275inj=b.Pb({factory:function(t){return new(t||c)},imports:[[l.i.forChild(h)],l.i]}),c),X=r("7lCJ"),w=r("J0XA"),k=r("3Y8x"),L=r("YUcS"),C=r("68Yx"),Y=((i=function t(){a(this,t)}).\u0275mod=b.Qb({type:i}),i.\u0275inj=b.Pb({factory:function(t){return new(t||i)},imports:[[u.c,x,X.a,w.a,k.a,L.a,C.a]]}),i)},Z998:function(t,n,r){"use strict";r.d(n,"a",(function(){return h}));var o,c=r("CwgZ"),i=r.n(c),u=r("zK3P"),l=r("fXoL"),b=["*"],s=((o=function(){function t(){a(this,t)}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=l.Mb({type:o,selectors:[["vex-breadcrumb"]],hostAttrs:[1,"vex-breadcrumb","body-2","text-hint","leading-none","hover:text-primary","no-underline","trans-ease-out","ltr:mr-2","rtl:ml-2"],ngContentSelectors:b,decls:1,vars:0,template:function(t,e){1&t&&(l.qc(),l.pc(0))},encapsulation:2}),o),p=r("tyNb"),d=r("VX/1"),g=r("ofXK"),f=function(){return[]};function v(t,e){if(1&t&&(l.Wb(0),l.Tb(1,"div",4),l.Yb(2,"vex-breadcrumb"),l.Yb(3,"a",1),l.Rc(4),l.Xb(),l.Xb(),l.Vb()),2&t){var a=e.$implicit;l.Gb(3),l.rc("routerLink",l.uc(2,f)),l.Gb(1),l.Sc(a)}}var y,m=function(){return["/"]},h=((y=function(){function t(){a(this,t),this.crumbs=[],this.trackByValue=u.c,this.icHome=i.a}return e(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||y)},y.\u0275cmp=l.Mb({type:y,selectors:[["vex-breadcrumbs"]],inputs:{crumbs:"crumbs"},decls:5,vars:5,consts:[[1,"flex","items-center"],[3,"routerLink"],["inline","true","size","20px",3,"icon"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"w-1","h-1","bg-gray","rounded-full","ltr:mr-2","rtl:ml-2"]],template:function(t,e){1&t&&(l.Yb(0,"div",0),l.Yb(1,"vex-breadcrumb"),l.Yb(2,"a",1),l.Tb(3,"ic-icon",2),l.Xb(),l.Xb(),l.Pc(4,v,5,3,"ng-container",3),l.Xb()),2&t&&(l.Gb(2),l.rc("routerLink",l.uc(4,m)),l.Gb(1),l.rc("icon",e.icHome),l.Gb(1),l.rc("ngForOf",e.crumbs)("ngForTrackBy",e.trackByValue))},directives:[s,p.h,d.a,g.n],encapsulation:2}),y)},ZuBe:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var o=r("fXoL"),c=["*"],i=function(){var t=function(){function t(){a(this,t),this.mode="simple"}return e(t,[{key:"isCard",get:function(){return"card"===this.mode}},{key:"isSimple",get:function(){return"simple"===this.mode}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Mb({type:t,selectors:[["vex-page-layout"]],hostAttrs:[1,"vex-page-layout"],hostVars:4,hostBindings:function(t,e){2&t&&o.Kb("vex-page-layout-card",e.isCard)("vex-page-layout-simple",e.isSimple)},inputs:{mode:"mode"},ngContentSelectors:c,decls:1,vars:0,template:function(t,e){1&t&&(o.qc(),o.pc(0))},styles:[".vex-page-layout{display:block}.vex-page-layout-simple .vex-page-layout-content{padding-bottom:var(--padding-gutter);padding-top:var(--padding-gutter)}.vex-page-layout-card{padding-bottom:var(--padding)}.vex-page-layout-card .vex-page-layout-header{margin-bottom:calc(var(--page-layout-toolbar-height) * -1);padding-bottom:var(--page-layout-toolbar-height)}.vex-page-layout-card .vex-page-layout-content>*>.mat-tab-group .mat-tab-label,.vex-page-layout-card .vex-page-layout-content>.mat-tab-group .mat-tab-label{height:var(--page-layout-toolbar-height)}.vex-page-layout-card .vex-page-layout-content>*>.mat-tab-group .mat-tab-label.mat-tab-label-active,.vex-page-layout-card .vex-page-layout-content>.mat-tab-group .mat-tab-label.mat-tab-label-active{opacity:1}.vex-page-layout-header{align-items:center;background-color:rgb(var(--color-primary));color:rgb(var(--color-primary-contrast));box-sizing:content-box!important;display:flex;flex-direction:row;height:calc(var(--page-layout-header-height) - var(--page-layout-toolbar-height));padding-left:var(--padding);padding-right:var(--padding);place-content:center flex-start}.vex-page-layout-header .vex-breadcrumb{color:rgb(var(--color-primary-contrast));opacity:.5}.vex-page-layout-header .vex-breadcrumb:hover{color:rgb(var(--color-primary-contrast));opacity:1}.vex-page-layout-content{box-sizing:border-box;display:block;padding-left:var(--padding-gutter);padding-right:var(--padding-gutter)}"],encapsulation:2}),t}()}}])}();