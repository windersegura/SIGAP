!function(){function t(e,i,n){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=o(t)););return t}(t,e);if(n){var r=Object.getOwnPropertyDescriptor(n,e);return r.get?r.get.call(i):r.value}})(e,i,n||e)}function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=o(t);if(e){var a=o(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return r(this,i)}}function r(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,i){return e&&l(t.prototype,e),i&&l(t,i),t}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3dd+":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("ofXK"),r=i("YUcS"),o=i("zkoq"),a=i("wZkO"),s=i("l6p3"),l=i("fXoL"),c=function(){var t=function t(){u(this,t)};return t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(e){return new(e||t)},imports:[[n.c,r.a,o.b,a.e,s.a]]}),t}()},x8Nx:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var n=i("fXoL"),r=i("XiUz"),o=i("zkoq"),a=i("ofXK"),s=i("wZkO"),l=i("B1UH");function h(t,e){if(1&t&&(n.Yb(0,"mat-grid-tile",11),n.Rc(1),n.Xb()),2&t){var i=e.$implicit;n.Mc("background",i.color),n.rc("colspan",i.cols)("rowspan",i.rows),n.Gb(1),n.Tc(" ",i.text," ")}}var d=function(){var t=function(){function t(){u(this,t),this.tiles=[{text:"One",cols:3,rows:1,color:"lightblue"},{text:"Two",cols:1,rows:2,color:"lightgreen"},{text:"Three",cols:1,rows:1,color:"lightpink"},{text:"Four",cols:2,rows:1,color:"#DDBDF1"}],this.gridListHTML='<mat-grid-list cols="4" rowHeight="100px">\n  <mat-grid-tile *ngFor="let tile of tiles" [colspan]="tile.cols" [rowspan]="tile.rows"\n                  [style.background]="tile.color">\n      {{tile.text}}\n  </mat-grid-tile>\n</mat-grid-list>'}return c(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Mb({type:t,selectors:[["vex-components-overview-grid-list"]],decls:20,vars:2,consts:[["fxLayout","column","fxLayout.gt-sm","row",1,"card"],[1,"p-6"],["cols","4","fxFlex","","rowHeight","100px",1,"w-64","max-w-full"],[3,"colspan","rowspan","background",4,"ngFor","ngForOf"],["fxFlex","",1,"border-l"],[1,"title","mt-0","mb-4"],[1,"body-2","text-secondary","m-0"],[1,"vex-tabs"],["label","DESCRIPTION"],["label","SOURCE CODE"],[3,"vexHighlight"],[3,"colspan","rowspan"]],template:function(t,e){1&t&&(n.Yb(0,"div",0),n.Yb(1,"div",1),n.Yb(2,"mat-grid-list",2),n.Pc(3,h,2,5,"mat-grid-tile",3),n.Xb(),n.Xb(),n.Yb(4,"div",4),n.Yb(5,"div",1),n.Yb(6,"h2",5),n.Rc(7,"Grid List"),n.Xb(),n.Yb(8,"h4",6),n.Rc(9,"<mat-grid-list>"),n.Xb(),n.Xb(),n.Yb(10,"mat-tab-group",7),n.Yb(11,"mat-tab",8),n.Yb(12,"p",1),n.Rc(13," A grid list consists of a repeated pattern of cells arrayed in a vertical and horizontal layout. "),n.Tb(14,"br"),n.Tb(15,"br"),n.Rc(16,"Grid lists are best used on similar data types. They help improve the visual comprehension of the content they contain. "),n.Xb(),n.Xb(),n.Yb(17,"mat-tab",9),n.Yb(18,"pre"),n.Tb(19,"code",10),n.Xb(),n.Xb(),n.Xb(),n.Xb(),n.Xb()),2&t&&(n.Gb(3),n.rc("ngForOf",e.tiles),n.Gb(16),n.rc("vexHighlight",e.gridListHTML))},directives:[r.d,o.a,r.b,a.n,s.b,s.a,l.a,o.c],styles:["[_nghost-%COMP%]{display:block}"]}),t}()},zkoq:function(i,r,s){"use strict";s.d(r,"a",(function(){return H})),s.d(r,"b",(function(){return R})),s.d(r,"c",(function(){return m}));var l=s("fXoL"),h=s("FKr1"),d=s("8LU1"),f=s("cH1L"),g=["*"],p=new l.s("MAT_GRID_LIST"),m=function(){var t=function(){function t(e,i){u(this,t),this._element=e,this._gridList=i,this._rowspan=1,this._colspan=1}return c(t,[{key:"_setStyle",value:function(t,e){this._element.nativeElement.style[t]=e}},{key:"rowspan",get:function(){return this._rowspan},set:function(t){this._rowspan=Math.round(Object(d.f)(t))}},{key:"colspan",get:function(){return this._colspan},set:function(t){this._colspan=Math.round(Object(d.f)(t))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Sb(l.l),l.Sb(p,8))},t.\u0275cmp=l.Mb({type:t,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(t,e){2&t&&l.Hb("rowspan",e.rowspan)("colspan",e.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:g,decls:2,vars:0,consts:[[1,"mat-figure"]],template:function(t,e){1&t&&(l.qc(),l.Yb(0,"figure",0),l.pc(1),l.Xb())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],encapsulation:2,changeDetection:0}),t}(),y=function(){function t(){u(this,t),this.columnIndex=0,this.rowIndex=0}return c(t,[{key:"update",value:function(t,e){var i=this;this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map((function(t){return i._trackTile(t)}))}},{key:"_trackTile",value:function(t){var e=this._findMatchingGap(t.colspan);return this._markTilePosition(e,t),this.columnIndex=e+t.colspan,new b(this.rowIndex,e)}},{key:"_findMatchingGap",value:function(t){if(t>this.tracker.length)throw Error("mat-grid-list: tile with colspan ".concat(t,' is wider than grid with cols="').concat(this.tracker.length,'".'));var e=-1,i=-1;do{this.columnIndex+t>this.tracker.length?(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e)):-1!=(e=this.tracker.indexOf(0,this.columnIndex))?(i=this._findGapEndIndex(e),this.columnIndex=e+1):(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e))}while(i-e<t||0==i);return Math.max(e,0)}},{key:"_nextRow",value:function(){this.columnIndex=0,this.rowIndex++;for(var t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)}},{key:"_findGapEndIndex",value:function(t){for(var e=t+1;e<this.tracker.length;e++)if(0!=this.tracker[e])return e;return this.tracker.length}},{key:"_markTilePosition",value:function(t,e){for(var i=0;i<e.colspan;i++)this.tracker[t+i]=e.rowspan}},{key:"rowCount",get:function(){return this.rowIndex+1}},{key:"rowspan",get:function(){var t=Math.max.apply(Math,a(this.tracker));return t>1?this.rowCount+t-1:this.rowCount}}]),t}(),b=function t(e,i){u(this,t),this.row=e,this.col=i},w=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,v=function(){function t(){u(this,t),this._rows=0,this._rowspan=0}return c(t,[{key:"init",value:function(t,e,i,n){this._gutterSize=T(t),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=i,this._direction=n}},{key:"getBaseTileSize",value:function(t,e){return"(".concat(t,"% - (").concat(this._gutterSize," * ").concat(e,"))")}},{key:"getTilePosition",value:function(t,e){return 0===e?"0":S("(".concat(t," + ").concat(this._gutterSize,") * ").concat(e))}},{key:"getTileSize",value:function(t,e){return"(".concat(t," * ").concat(e,") + (").concat(e-1," * ").concat(this._gutterSize,")")}},{key:"setStyle",value:function(t,e,i){var n=100/this._cols,r=(this._cols-1)/this._cols;this.setColStyles(t,i,n,r),this.setRowStyles(t,e,n,r)}},{key:"setColStyles",value:function(t,e,i,n){var r=this.getBaseTileSize(i,n);t._setStyle("rtl"===this._direction?"right":"left",this.getTilePosition(r,e)),t._setStyle("width",S(this.getTileSize(r,t.colspan)))}},{key:"getGutterSpan",value:function(){return"".concat(this._gutterSize," * (").concat(this._rowspan," - 1)")}},{key:"getTileSpan",value:function(t){return"".concat(this._rowspan," * ").concat(this.getTileSize(t,1))}},{key:"getComputedHeight",value:function(){return null}}]),t}(),_=function(i){e(a,i);var r=n(a);function a(t){var e;return u(this,a),(e=r.call(this)).fixedRowHeight=t,e}return c(a,[{key:"init",value:function(e,i,n,r){if(t(o(a.prototype),"init",this).call(this,e,i,n,r),this.fixedRowHeight=T(this.fixedRowHeight),!w.test(this.fixedRowHeight))throw Error('Invalid value "'.concat(this.fixedRowHeight,'" set as rowHeight.'))}},{key:"setRowStyles",value:function(t,e){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),t._setStyle("height",S(this.getTileSize(this.fixedRowHeight,t.rowspan)))}},{key:"getComputedHeight",value:function(){return["height",S("".concat(this.getTileSpan(this.fixedRowHeight)," + ").concat(this.getGutterSpan()))]}},{key:"reset",value:function(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach((function(t){t._setStyle("top",null),t._setStyle("height",null)}))}}]),a}(v),x=function(t){e(r,t);var i=n(r);function r(t){var e;return u(this,r),(e=i.call(this))._parseRatio(t),e}return c(r,[{key:"setRowStyles",value:function(t,e,i,n){this.baseTileHeight=this.getBaseTileSize(i/this.rowHeightRatio,n),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),t._setStyle("paddingTop",S(this.getTileSize(this.baseTileHeight,t.rowspan)))}},{key:"getComputedHeight",value:function(){return["paddingBottom",S("".concat(this.getTileSpan(this.baseTileHeight)," + ").concat(this.getGutterSpan()))]}},{key:"reset",value:function(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach((function(t){t._setStyle("marginTop",null),t._setStyle("paddingTop",null)}))}},{key:"_parseRatio",value:function(t){var e=t.split(":");if(2!==e.length)throw Error('mat-grid-list: invalid ratio given for row-height: "'.concat(t,'"'));this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])}}]),r}(v),k=function(t){e(r,t);var i=n(r);function r(){return u(this,r),i.apply(this,arguments)}return c(r,[{key:"setRowStyles",value:function(t,e){var i=this.getBaseTileSize(100/this._rowspan,(this._rows-1)/this._rows);t._setStyle("top",this.getTilePosition(i,e)),t._setStyle("height",S(this.getTileSize(i,t.rowspan)))}},{key:"reset",value:function(t){t._tiles&&t._tiles.forEach((function(t){t._setStyle("top",null),t._setStyle("height",null)}))}}]),r}(v);function S(t){return"calc(".concat(t,")")}function T(t){return t.match(/([A-Za-z%]+)$/)?t:t+"px"}var H=function(){var t=function(){function t(e,i){u(this,t),this._element=e,this._dir=i,this._gutter="1px"}return c(t,[{key:"ngOnInit",value:function(){this._checkCols(),this._checkRowHeight()}},{key:"ngAfterContentChecked",value:function(){this._layoutTiles()}},{key:"_checkCols",value:function(){if(!this.cols)throw Error('mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">')}},{key:"_checkRowHeight",value:function(){this._rowHeight||this._setTileStyler("1:1")}},{key:"_setTileStyler",value:function(t){this._tileStyler&&this._tileStyler.reset(this),this._tileStyler="fit"===t?new k:t&&t.indexOf(":")>-1?new x(t):new _(t)}},{key:"_layoutTiles",value:function(){var t=this;this._tileCoordinator||(this._tileCoordinator=new y);var e=this._tileCoordinator,i=this._tiles.filter((function(e){return!e._gridList||e._gridList===t})),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,e,this.cols,n),i.forEach((function(i,n){var r=e.positions[n];t._tileStyler.setStyle(i,r.row,r.col)})),this._setListStyle(this._tileStyler.getComputedHeight())}},{key:"_setListStyle",value:function(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}},{key:"cols",get:function(){return this._cols},set:function(t){this._cols=Math.max(1,Math.round(Object(d.f)(t)))}},{key:"gutterSize",get:function(){return this._gutter},set:function(t){this._gutter=""+(null==t?"":t)}},{key:"rowHeight",get:function(){return this._rowHeight},set:function(t){var e=""+(null==t?"":t);e!==this._rowHeight&&(this._rowHeight=e,this._setTileStyler(this._rowHeight))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Sb(l.l),l.Sb(f.b,8))},t.\u0275cmp=l.Mb({type:t,selectors:[["mat-grid-list"]],contentQueries:function(t,e,i){var n;1&t&&l.Lb(i,m,!0),2&t&&l.Dc(n=l.hc())&&(e._tiles=n)},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(t,e){2&t&&l.Hb("cols",e.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[l.Fb([{provide:p,useExisting:t}])],ngContentSelectors:g,decls:2,vars:0,template:function(t,e){1&t&&(l.qc(),l.Yb(0,"div"),l.pc(1),l.Xb())},styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],encapsulation:2,changeDetection:0}),t}(),R=function(){var t=function t(){u(this,t)};return t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(e){return new(e||t)},imports:[[h.l,h.j],h.l,h.j]}),t}()}}])}();