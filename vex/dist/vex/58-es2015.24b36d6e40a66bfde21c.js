(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"29B6":function(t,e){e.__esModule=!0,e.default={body:'<path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" fill="currentColor"/>',width:24,height:24}},"74KL":function(t,e){e.__esModule=!0,e.default={body:'<path opacity=".3" d="M16 9H8v10h8V9zm-.47 7.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14l-2.13-2.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12z" fill="currentColor"/><path d="M14.12 10.47L12 12.59l-2.13-2.12l-1.41 1.41L10.59 14l-2.12 2.12l1.41 1.41L12 15.41l2.12 2.12l1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" fill="currentColor"/>',width:24,height:24}},zqxL:function(t,e,n){"use strict";n.r(e),n.d(e,"ContactsTableModule",(function(){return Mt}));var c=n("ofXK"),i=n("tyNb"),a=n("rbx1"),o=n.n(a),r=n("sF+I"),l=n.n(r),s=n("bE8U"),b=n.n(s),u=n("mu09"),p=n("yriF"),m=n("tCj2"),d=n("3Pt+"),f=n("Kj3r"),g=n("UOrl"),h=n("T0B5"),y=n("cS8l"),x=n.n(y),C=n("fXoL"),v=n("0IaG"),w=n("a3ZD"),S=n("bTqV"),k=n("NFeN"),X=n("VX/1"),Y=n("XhcP"),G=n("29B6"),I=n.n(G),D=n("2/We"),P=n.n(D),T=n("ll2Q"),z=n.n(T),$=n("+q50"),M=n.n($),R=n("XiUz"),F=n("FKr1"),L=n("znSr");function A(t,e){if(1&t){const t=C.Zb();C.Yb(0,"a",8),C.gc("click",(function(){C.Gc(t);const e=C.kc().$implicit;return C.kc().setFilter(e.id)})),C.Tb(1,"ic-icon",9),C.Yb(2,"span"),C.Rc(3),C.Xb(),C.Xb()}if(2&t){const t=C.kc().$implicit,e=C.kc();C.Kb("bg-hover",e.isActive(t.id))("text-primary",e.isActive(t.id)),C.rc("@fadeInRight",void 0),C.Gb(1),C.rc("icon",t.icon)("ngClass",null==t.classes?null:t.classes.icon),C.Gb(2),C.Sc(t.label)}}function O(t,e){if(1&t&&(C.Yb(0,"h3",10),C.Rc(1),C.Xb()),2&t){const t=C.kc().$implicit;C.rc("@fadeInRight",void 0),C.Gb(1),C.Sc(t.label)}}function V(t,e){if(1&t&&(C.Wb(0),C.Pc(1,A,4,8,"a",6),C.Pc(2,O,2,2,"h3",7),C.Vb()),2&t){const t=e.$implicit;C.Gb(1),C.rc("ngIf","link"===t.type),C.Gb(1),C.rc("ngIf","subheading"===t.type)}}let N=(()=>{class t{constructor(){this.items=[{type:"link",id:"all",icon:I.a,label:"All Contacts"},{type:"link",id:"frequently",icon:P.a,label:"Frequently contacted"},{type:"link",id:"starred",icon:b.a,label:"Starred"},{type:"subheading",label:"Labels"},{type:"link",id:"family",icon:z.a,label:"Family",classes:{icon:"text-primary"}},{type:"link",id:"friends",icon:z.a,label:"Friends",classes:{icon:"text-green"}},{type:"link",id:"colleagues",icon:z.a,label:"Colleagues",classes:{icon:"text-amber"}},{type:"link",id:"business",icon:z.a,label:"Business",classes:{icon:"text-gray"}}],this.filterChange=new C.o,this.openAddNew=new C.o,this.activeCategory="all",this.icPersonAdd=M.a}ngOnInit(){}setFilter(t){return this.activeCategory=t,"starred"===t?this.filterChange.emit(m.a.filter(t=>t.starred)):"all"===t?this.filterChange.emit(m.a):"frequently"===t||"family"===t||"friends"===t||"colleagues"===t||"business"===t?this.filterChange.emit([]):void 0}isActive(t){return this.activeCategory===t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Mb({type:t,selectors:[["vex-contacts-table-menu"]],inputs:{items:"items"},outputs:{filterChange:"filterChange",openAddNew:"openAddNew"},decls:8,vars:3,consts:[[1,"max-w-xxxs","w-full"],["fxLayout","row","fxLayoutAlign","start center",1,"h-14","mb-6","flex","bg-primary","px-gutter","sm:px-0"],["mat-raised-button","","type","button",1,"flex-auto",3,"click"],["inline","true","size","18px",1,"ltr:mr-3","rtl:ml-3",3,"icon"],[1,"px-gutter","sm:px-0"],[4,"ngFor","ngForOf"],["class","list-item mt-2 no-underline flex items-center","matRipple","",3,"bg-hover","text-primary","click",4,"ngIf"],["class","caption text-secondary uppercase font-medium mb-0 mt-6",4,"ngIf"],["matRipple","",1,"list-item","mt-2","no-underline","flex","items-center",3,"click"],["size","24px",1,"ltr:mr-3","rtl:ml-3",3,"icon","ngClass"],[1,"caption","text-secondary","uppercase","font-medium","mb-0","mt-6"]],template:function(t,e){1&t&&(C.Yb(0,"div",0),C.Yb(1,"div",1),C.Yb(2,"button",2),C.gc("click",(function(){return e.openAddNew.emit()})),C.Tb(3,"ic-icon",3),C.Yb(4,"span"),C.Rc(5,"ADD CONTACT"),C.Xb(),C.Xb(),C.Xb(),C.Yb(6,"div",4),C.Pc(7,V,3,2,"ng-container",5),C.Xb(),C.Xb()),2&t&&(C.rc("@stagger",void 0),C.Gb(3),C.rc("icon",e.icPersonAdd),C.Gb(4),C.rc("ngForOf",e.items))},directives:[R.d,R.c,S.b,X.a,c.n,c.o,F.s,c.l,L.a],encapsulation:2,data:{animation:[p.a,g.b]}}),t})();var H=n("+0xr"),E=n("M9IT"),W=n("Dh3D"),j=n("PNSm"),q=n.n(j),B=n("+Chm"),K=n.n(B),U=n("pN9m"),Z=n.n(U),Q=n("74KL"),_=n.n(Q),J=n("kmnG"),tt=n("y3Ys"),et=n("U0RW"),nt=n("A+98"),ct=n("STbY"),it=n("bSwM");function at(t,e){if(1&t&&(C.Yb(0,"th",16),C.Rc(1),C.Xb()),2&t){const t=C.kc(2).$implicit;C.Gb(1),C.Tc(" ",t.label,"")}}function ot(t,e){if(1&t&&(C.Yb(0,"td",17),C.Rc(1),C.Xb()),2&t){const t=e.$implicit,n=C.kc(2).$implicit;C.rc("ngClass",n.cssClasses),C.Gb(1),C.Sc(t[n.property])}}function rt(t,e){if(1&t&&(C.Wb(0,13),C.Pc(1,at,2,1,"th",14),C.Pc(2,ot,2,2,"td",15),C.Vb()),2&t){const t=C.kc().$implicit;C.rc("matColumnDef",t.property)}}function lt(t,e){if(1&t&&(C.Yb(0,"th",16),C.Rc(1),C.Xb()),2&t){const t=C.kc(2).$implicit;C.Gb(1),C.Tc(" ",t.label,"")}}function st(t,e){if(1&t){const t=C.Zb();C.Yb(0,"td",17),C.Yb(1,"mat-checkbox",18),C.gc("click",(function(e){return C.Gc(t),e.stopPropagation()})),C.Xb(),C.Xb()}if(2&t){const t=e.$implicit,n=C.kc(2).$implicit;C.rc("ngClass",n.cssClasses),C.Gb(1),C.rc("checked",t[n.property])}}function bt(t,e){if(1&t&&(C.Wb(0,13),C.Pc(1,lt,2,1,"th",14),C.Pc(2,st,2,2,"td",15),C.Vb()),2&t){const t=C.kc().$implicit;C.rc("matColumnDef",t.property)}}function ut(t,e){if(1&t&&(C.Yb(0,"th",16),C.Rc(1),C.Xb()),2&t){const t=C.kc(2).$implicit;C.Gb(1),C.Tc(" ",t.label,"")}}function pt(t,e){if(1&t&&(C.Yb(0,"td",17),C.Tb(1,"img",19),C.Xb()),2&t){const t=e.$implicit,n=C.kc(2).$implicit;C.rc("ngClass",n.cssClasses),C.Gb(1),C.rc("src",t[n.property],C.Ic)}}function mt(t,e){if(1&t&&(C.Wb(0,13),C.Pc(1,ut,2,1,"th",14),C.Pc(2,pt,2,2,"td",15),C.Vb()),2&t){const t=C.kc().$implicit;C.rc("matColumnDef",t.property)}}function dt(t,e){if(1&t&&(C.Yb(0,"th",16),C.Rc(1),C.Xb()),2&t){const t=C.kc(3).$implicit;C.Gb(1),C.Tc(" ",t.label,"")}}function ft(t,e){if(1&t&&C.Tb(0,"mat-icon",26),2&t){const t=C.kc(5);C.rc("icIcon",t.icStar)}}function gt(t,e){if(1&t&&C.Tb(0,"mat-icon",11),2&t){const t=C.kc(5);C.rc("icIcon",t.icStarBorder)}}function ht(t,e){if(1&t){const t=C.Zb();C.Yb(0,"td",22),C.Yb(1,"button",23),C.gc("click",(function(n){C.Gc(t);const c=e.$implicit;return C.kc(4).emitToggleStar(n,c.id)})),C.Pc(2,ft,1,1,"mat-icon",24),C.Pc(3,gt,1,1,"mat-icon",25),C.Xb(),C.Xb()}if(2&t){const t=e.$implicit,n=C.kc(3).$implicit;C.rc("ngClass",n.cssClasses),C.Gb(2),C.rc("ngIf",t[n.property]),C.Gb(1),C.rc("ngIf",!t[n.property])}}function yt(t,e){1&t&&(C.Wb(0),C.Pc(1,dt,2,1,"th",14),C.Pc(2,ht,4,3,"td",21),C.Vb())}function xt(t,e){if(1&t&&(C.Yb(0,"th",16),C.Rc(1),C.Xb()),2&t){const t=C.kc(3).$implicit;C.Gb(1),C.Tc(" ",t.label,"")}}function Ct(t,e){if(1&t){const t=C.Zb();C.Yb(0,"td",22),C.Yb(1,"button",27),C.gc("click",(function(e){return C.Gc(t),e.stopPropagation()})),C.Tb(2,"mat-icon",11),C.Xb(),C.Xb()}if(2&t){const t=C.kc(3).$implicit,e=C.kc(),n=C.Ec(9);C.rc("ngClass",t.cssClasses),C.Gb(1),C.rc("matMenuTriggerFor",n),C.Gb(1),C.rc("icIcon",e.icMoreVert)}}function vt(t,e){1&t&&(C.Wb(0),C.Pc(1,xt,2,1,"th",14),C.Pc(2,Ct,3,3,"td",21),C.Vb())}function wt(t,e){if(1&t&&(C.Wb(0,13),C.Pc(1,yt,3,0,"ng-container",20),C.Pc(2,vt,3,0,"ng-container",20),C.Vb()),2&t){const t=C.kc().$implicit;C.rc("matColumnDef",t.property),C.Gb(1),C.rc("ngIf","starred"===t.property),C.Gb(1),C.rc("ngIf","menu"===t.property)}}function St(t,e){if(1&t&&(C.Wb(0),C.Pc(1,rt,3,1,"ng-container",12),C.Pc(2,bt,3,1,"ng-container",12),C.Pc(3,mt,3,1,"ng-container",12),C.Pc(4,wt,3,3,"ng-container",12),C.Vb()),2&t){const t=e.$implicit;C.Gb(1),C.rc("ngIf","text"===t.type),C.Gb(1),C.rc("ngIf","checkbox"===t.type),C.Gb(1),C.rc("ngIf","image"===t.type),C.Gb(1),C.rc("ngIf","button"===t.type)}}function kt(t,e){1&t&&C.Tb(0,"tr",28)}function Xt(t,e){if(1&t){const t=C.Zb();C.Yb(0,"tr",29),C.gc("click",(function(){C.Gc(t);const n=e.$implicit;return C.kc().openContact.emit(n.id)})),C.Xb()}2&t&&C.rc("@fadeInUp",void 0)}function Yt(t,e){1&t&&(C.Yb(0,"div",30),C.Tb(1,"img",31),C.Yb(2,"h2",32),C.Rc(3,"No contacts matching your filters"),C.Xb(),C.Xb()),2&t&&C.rc("@scaleFadeIn",void 0)}let Gt=(()=>{class t{constructor(){this.pageSize=20,this.pageSizeOptions=[10,20,50],this.toggleStar=new C.o,this.openContact=new C.o,this.dataSource=new H.k,this.icMoreVert=K.a,this.icStar=b.a,this.icStarBorder=q.a,this.icDeleteForever=_.a,this.icEdit=Z.a}ngOnInit(){}ngOnChanges(t){t.columns&&(this.visibleColumns=this.columns.map(t=>t.property)),t.data&&(this.dataSource.data=this.data),t.searchStr&&(this.dataSource.filter=(this.searchStr||"").trim().toLowerCase())}emitToggleStar(t,e){t.stopPropagation(),this.toggleStar.emit(e)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Mb({type:t,selectors:[["vex-contacts-data-table"]],viewQuery:function(t,e){var n;1&t&&(C.Lc(E.a,!0),C.Lc(W.a,!0)),2&t&&(C.Dc(n=C.hc())&&(e.paginator=n.first),C.Dc(n=C.hc())&&(e.sort=n.first))},inputs:{data:"data",columns:"columns",pageSize:"pageSize",pageSizeOptions:"pageSizeOptions",searchStr:"searchStr"},outputs:{toggleStar:"toggleStar",openContact:"openContact"},features:[C.Fb([{provide:J.b,useValue:{appearance:"standard"}}]),C.Eb],decls:18,vars:12,consts:[[1,"h-full","relative"],["fxLayout","column","fxLayoutAlign","space-between"],["fxFlex","auto","mat-table","","matSort","",1,"w-full",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["class","hover:bg-hover cursor-pointer","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["fxFlex","auto","fxLayout","column","fxLayoutAlign","center center",4,"ngIf"],["fxFlex","none",1,"sticky","bottom-0","left-0","right-0","border-t",3,"fxHide","pageSize","pageSizeOptions"],["xPosition","before","yPosition","below"],["contactMenu","matMenu"],["mat-menu-item",""],[3,"icIcon"],[3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",3,"ngClass"],[3,"checked","click"],[1,"avatar","h-9","w-9","align-middle","my-2",3,"src"],[4,"ngIf"],["class","w-10","mat-cell","",3,"ngClass",4,"matCellDef"],["mat-cell","",1,"w-10",3,"ngClass"],["mat-icon-button","","type","button",3,"click"],["class","text-amber",3,"icIcon",4,"ngIf"],[3,"icIcon",4,"ngIf"],[1,"text-amber",3,"icIcon"],["mat-icon-button","","type","button",3,"matMenuTriggerFor","click"],["mat-header-row",""],["mat-row","",1,"hover:bg-hover","cursor-pointer",3,"click"],["fxFlex","auto","fxLayout","column","fxLayoutAlign","center center"],["src","assets/img/illustrations/idea.svg",1,"m-12","h-64"],[1,"headline","m-0","text-center"]],template:function(t,e){1&t&&(C.Yb(0,"vex-scrollbar",0),C.Yb(1,"div",1),C.Yb(2,"table",2),C.Pc(3,St,5,4,"ng-container",3),C.Pc(4,kt,1,0,"tr",4),C.Pc(5,Xt,1,1,"tr",5),C.Xb(),C.Pc(6,Yt,4,1,"div",6),C.Tb(7,"mat-paginator",7),C.Xb(),C.Xb(),C.Yb(8,"mat-menu",8,9),C.Yb(10,"button",10),C.Tb(11,"mat-icon",11),C.Yb(12,"span"),C.Rc(13,"Edit Contact"),C.Xb(),C.Xb(),C.Yb(14,"button",10),C.Tb(15,"mat-icon",11),C.Yb(16,"span"),C.Rc(17,"Delete Contact"),C.Xb(),C.Xb(),C.Xb()),2&t&&(C.Gb(2),C.rc("@stagger",e.dataSource.filteredData)("dataSource",e.dataSource),C.Gb(1),C.rc("ngForOf",e.columns),C.Gb(1),C.rc("matHeaderRowDef",e.visibleColumns)("matHeaderRowDefSticky",!0),C.Gb(1),C.rc("matRowDefColumns",e.visibleColumns),C.Gb(1),C.rc("ngIf",0===e.dataSource.filteredData.length),C.Gb(1),C.rc("fxHide",0===e.dataSource.filteredData.length)("pageSize",e.pageSize)("pageSizeOptions",e.pageSizeOptions),C.Gb(4),C.rc("icIcon",e.icEdit),C.Gb(4),C.rc("icIcon",e.icDeleteForever))},directives:[nt.a,R.d,R.c,H.j,R.b,W.a,c.n,H.g,H.i,c.o,E.a,L.b,ct.e,ct.b,k.a,X.a,H.c,H.e,H.b,H.d,W.b,H.a,c.l,L.a,it.a,S.b,ct.d,H.f,H.h],styles:[""],data:{animation:[g.a,tt.a,et.a]}}),t})();const It=[{path:"",component:(()=>{class t{constructor(t){this.dialog=t,this.searchCtrl=new d.e,this.searchStr$=this.searchCtrl.valueChanges.pipe(Object(f.a)(10)),this.menuOpen=!1,this.activeCategory="all",this.tableData=m.a,this.tableColumns=[{label:"",property:"selected",type:"checkbox",cssClasses:["w-6"]},{label:"",property:"imageSrc",type:"image",cssClasses:["min-w-9"]},{label:"NAME",property:"name",type:"text",cssClasses:["font-medium"]},{label:"EMAIL",property:"email",type:"text",cssClasses:["text-secondary"]},{label:"PHONE",property:"phone",type:"text",cssClasses:["text-secondary"]},{label:"",property:"starred",type:"button",cssClasses:["text-secondary","w-10"]},{label:"",property:"menu",type:"button",cssClasses:["text-secondary","w-10"]}],this.icStar=b.a,this.icSearch=l.a,this.icContacts=o.a,this.icMenu=x.a}ngOnInit(){}openContact(t){this.dialog.open(h.a,{data:t||null,width:"600px"})}toggleStar(t){const e=this.tableData.find(e=>e.id===t);e&&(e.starred=!e.starred)}setData(t){this.tableData=t,this.menuOpen=!1}openMenu(){this.menuOpen=!0}}return t.\u0275fac=function(e){return new(e||t)(C.Sb(v.b))},t.\u0275cmp=C.Mb({type:t,selectors:[["vex-contacts-table"]],decls:21,vars:13,consts:[[1,"w-full","h-full","flex","flex-col"],[1,"px-gutter","pt-6","pb-20","bg-primary","flex-none"],["vexContainer","",1,"flex","items-center"],["mat-icon-button","","type","button",1,"sm:hidden","text-primary-contrast",3,"click"],[3,"icIcon"],[1,"headline","text-primary-contrast","m-0","flex","items-center","w-full","max-w-xxxs","mr-6"],[1,"hidden","sm:block",3,"icon"],[1,"ml-4","block"],[1,"hidden","sm:flex","items-center","bg-card","rounded-full","overflow-hidden","relative","ltr:pl-5","rtl:pr-5","h-12","max-w-md","w-full","shadow-8","mx-auto"],["size","24px",1,"text-secondary","flex-none",3,"icon"],["placeholder","Search Contacts...","type","text",1,"border-0","h-12","outline-none","ltr:pl-4","rtl:pr-4","placeholder:text-secondary","bg-card","flex-auto",3,"formControl"],["vexContainer","",1,"-mt-14","pt-0","overflow-hidden","flex"],[1,"bg-transparent","flex-auto","flex"],["mode","over",3,"opened","openedChange"],[1,"sm:hidden",3,"filterChange","openAddNew"],[1,"p-gutter","pt-0","flex-auto","flex","items-start"],[1,"hidden","sm:block","mr-6",3,"filterChange","openAddNew"],[1,"card","h-full","overflow-hidden","flex-auto"],[3,"columns","data","searchStr","openContact","toggleStar"]],template:function(t,e){1&t&&(C.Yb(0,"div",0),C.Yb(1,"div",1),C.Yb(2,"div",2),C.Yb(3,"button",3),C.gc("click",(function(){return e.openMenu()})),C.Tb(4,"mat-icon",4),C.Xb(),C.Yb(5,"h2",5),C.Tb(6,"ic-icon",6),C.Yb(7,"span",7),C.Rc(8,"Contacts"),C.Xb(),C.Xb(),C.Yb(9,"div",8),C.Tb(10,"ic-icon",9),C.Tb(11,"input",10),C.Xb(),C.Xb(),C.Xb(),C.Yb(12,"div",11),C.Yb(13,"mat-drawer-container",12),C.Yb(14,"mat-drawer",13),C.gc("openedChange",(function(t){return e.menuOpen=t})),C.Yb(15,"vex-contacts-table-menu",14),C.gc("filterChange",(function(t){return e.setData(t)}))("openAddNew",(function(){return e.openContact()})),C.Xb(),C.Xb(),C.Yb(16,"mat-drawer-content",15),C.Yb(17,"vex-contacts-table-menu",16),C.gc("filterChange",(function(t){return e.setData(t)}))("openAddNew",(function(){return e.openContact()})),C.Xb(),C.Yb(18,"div",17),C.Yb(19,"vex-contacts-data-table",18),C.gc("openContact",(function(t){return e.openContact(t)}))("toggleStar",(function(t){return e.toggleStar(t)})),C.lc(20,"async"),C.Xb(),C.Xb(),C.Xb(),C.Xb(),C.Xb(),C.Xb()),2&t&&(C.Gb(3),C.rc("@scaleIn",void 0),C.Gb(1),C.rc("icIcon",e.icMenu),C.Gb(2),C.rc("@scaleIn",void 0)("icon",e.icContacts),C.Gb(1),C.rc("@fadeInRight",void 0),C.Gb(3),C.rc("icon",e.icSearch),C.Gb(1),C.rc("formControl",e.searchCtrl),C.Gb(3),C.rc("opened",e.menuOpen),C.Gb(5),C.rc("columns",e.tableColumns)("data",e.tableData)("searchStr",C.mc(20,11,e.searchStr$)))},directives:[w.a,S.b,k.a,X.a,d.c,d.n,d.f,Y.b,Y.a,N,Y.c,Gt],pipes:[c.b],encapsulation:2,data:{animation:[g.b,u.a,p.a]}}),t})(),data:{scrollDisabled:!0,toolbarShadowEnabled:!0}}];let Dt=(()=>{class t{}return t.\u0275mod=C.Qb({type:t}),t.\u0275inj=C.Pb({factory:function(e){return new(e||t)},imports:[[i.i.forChild(It)],i.i]}),t})();var Pt=n("YUcS"),Tt=n("XVi8"),zt=n("D27t"),$t=n("68Yx");let Mt=(()=>{class t{}return t.\u0275mod=C.Qb({type:t}),t.\u0275inj=C.Pb({factory:function(e){return new(e||t)},imports:[[c.c,Dt,Pt.a,X.b,S.c,H.l,E.b,W.c,it.b,k.b,ct.c,F.t,v.f,Tt.a,zt.a,d.s,$t.a,Y.g]]}),t})()}}]);