(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"28jk":function(t,i,e){"use strict";e.r(i),e.d(i,"RegisterModule",(function(){return C}));var n=e("ofXK"),c=e("tyNb"),o=e("uQ9D"),r=e.n(o),b=e("k1zR"),a=e.n(b),s=e("3Pt+"),u=e("y3Ys"),l=e("fXoL"),f=e("XiUz"),m=e("kmnG"),p=e("qFsG"),d=e("bTqV"),y=e("Qu3c"),g=e("bSwM"),h=e("NFeN"),Y=e("VX/1");function X(t,i){if(1&t&&l.Tb(0,"mat-icon",22),2&t){const t=l.kc();l.rc("icIcon",t.icVisibility)}}function v(t,i){if(1&t&&l.Tb(0,"mat-icon",22),2&t){const t=l.kc();l.rc("icIcon",t.icVisibilityOff)}}function w(t,i){if(1&t&&l.Tb(0,"mat-icon",22),2&t){const t=l.kc();l.rc("icIcon",t.icVisibility)}}function x(t,i){if(1&t&&l.Tb(0,"mat-icon",22),2&t){const t=l.kc();l.rc("icIcon",t.icVisibilityOff)}}const k=function(){return["/login"]},I=[{path:"",component:(()=>{class t{constructor(t,i,e){this.router=t,this.fb=i,this.cd=e,this.inputType="password",this.visible=!1,this.icVisibility=r.a,this.icVisibilityOff=a.a}ngOnInit(){this.form=this.fb.group({name:["",s.u.required],email:["",s.u.required],password:["",s.u.required],passwordConfirm:["",s.u.required]})}send(){this.router.navigate(["/"])}toggleVisibility(){this.visible?(this.inputType="password",this.visible=!1,this.cd.markForCheck()):(this.inputType="text",this.visible=!0,this.cd.markForCheck())}}return t.\u0275fac=function(i){return new(i||t)(l.Sb(c.f),l.Sb(s.d),l.Sb(l.h))},t.\u0275cmp=l.Mb({type:t,selectors:[["vex-register"]],decls:50,vars:10,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"w-full","h-full","bg-pattern"],[1,"card","overflow-hidden","w-full","max-w-xs"],["fxLayout","column","fxLayoutAlign","center center",1,"p-6","pb-0"],[1,"fill-current","text-center"],["src","assets/img/demo/logo.svg",1,"w-16"],[1,"text-center","mt-4"],[1,"title","m-0"],[1,"body-2","text-secondary","m-0"],["fxLayout","column","fxLayoutGap","16px",1,"p-6",3,"formGroup"],["fxFlex","auto","fxLayout","column"],["fxFlex","grow"],["formControlName","name","matInput","","required",""],["formControlName","email","matInput","","required",""],["formControlName","password","matInput","","required","",3,"type"],["mat-icon-button","","matSuffix","","matTooltip","Toggle Visibility","type","button",3,"click"],[3,"icIcon",4,"ngIf"],["formControlName","passwordConfirm","matInput","","required","",3,"type"],["fxLayout","row","fxLayoutAlign","center center"],[1,"caption"],["color","primary","mat-raised-button","","type","button",3,"click"],[1,"text-secondary","text-center"],[3,"routerLink"],[3,"icIcon"]],template:function(t,i){1&t&&(l.Yb(0,"div",0),l.Yb(1,"div",1),l.Yb(2,"div",2),l.Yb(3,"div",3),l.Tb(4,"img",4),l.Xb(),l.Xb(),l.Yb(5,"div",5),l.Yb(6,"h2",6),l.Rc(7,"Register for an account"),l.Xb(),l.Yb(8,"h4",7),l.Rc(9,"Simply fill out the form below"),l.Xb(),l.Xb(),l.Yb(10,"div",8),l.Yb(11,"div",9),l.Yb(12,"mat-form-field",10),l.Yb(13,"mat-label"),l.Rc(14,"Name"),l.Xb(),l.Tb(15,"input",11),l.Xb(),l.Yb(16,"mat-form-field",10),l.Yb(17,"mat-label"),l.Rc(18,"E-Mail"),l.Xb(),l.Tb(19,"input",12),l.Xb(),l.Yb(20,"mat-form-field",10),l.Yb(21,"mat-label"),l.Rc(22,"Password"),l.Xb(),l.Tb(23,"input",13),l.Yb(24,"button",14),l.gc("click",(function(){return i.toggleVisibility()})),l.Pc(25,X,1,1,"mat-icon",15),l.Pc(26,v,1,1,"mat-icon",15),l.Xb(),l.Yb(27,"mat-hint"),l.Rc(28,"Click the eye to toggle visibility"),l.Xb(),l.Xb(),l.Yb(29,"mat-form-field",10),l.Yb(30,"mat-label"),l.Rc(31,"Password (Confirm)"),l.Xb(),l.Tb(32,"input",16),l.Yb(33,"button",14),l.gc("click",(function(){return i.toggleVisibility()})),l.Pc(34,w,1,1,"mat-icon",15),l.Pc(35,x,1,1,"mat-icon",15),l.Xb(),l.Yb(36,"mat-hint"),l.Rc(37,"Please repeat your password from above"),l.Xb(),l.Xb(),l.Xb(),l.Yb(38,"div",17),l.Yb(39,"mat-checkbox",18),l.Rc(40,"I accept the "),l.Yb(41,"a"),l.Rc(42,"terms and conditions."),l.Xb(),l.Xb(),l.Xb(),l.Yb(43,"button",19),l.gc("click",(function(){return i.send()})),l.Rc(44," CREATE ACCOUNT "),l.Xb(),l.Yb(45,"p",20),l.Rc(46," Already have an account?"),l.Tb(47,"br"),l.Yb(48,"a",21),l.Rc(49,"Sign in here"),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Xb()),2&t&&(l.Gb(1),l.rc("@fadeInUp",void 0),l.Gb(9),l.rc("formGroup",i.form),l.Gb(13),l.rc("type",i.inputType),l.Gb(2),l.rc("ngIf",i.visible),l.Gb(1),l.rc("ngIf",!i.visible),l.Gb(6),l.rc("type",i.inputType),l.Gb(2),l.rc("ngIf",i.visible),l.Gb(1),l.rc("ngIf",!i.visible),l.Gb(13),l.rc("routerLink",l.uc(9,k)))},directives:[f.d,f.c,f.e,s.o,s.i,f.b,m.d,m.h,s.c,p.b,s.n,s.g,s.t,d.b,m.j,y.a,n.o,m.g,g.a,c.h,h.a,Y.a],styles:[""],data:{animation:[u.a]}}),t})()}];let T=(()=>{class t{}return t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(i){return new(i||t)},imports:[[c.i.forChild(I)],c.i]}),t})();var R=e("YUcS");let C=(()=>{class t{}return t.\u0275mod=l.Qb({type:t}),t.\u0275inj=l.Pb({factory:function(i){return new(i||t)},imports:[[n.c,T,R.a,s.s,p.c,h.b,d.c,y.b,g.b,Y.b]]}),t})()},y3Ys:function(t,i,e){"use strict";e.d(i,"a",(function(){return c}));var n=e("R0Ic");const c=Object(n.o)("fadeInUp",[Object(n.n)(":enter",[Object(n.m)({transform:"translateY(20px)",opacity:0}),Object(n.e)("400ms cubic-bezier(0.35, 0, 0.25, 1)",Object(n.m)({transform:"translateY(0)",opacity:1}))])])}}]);