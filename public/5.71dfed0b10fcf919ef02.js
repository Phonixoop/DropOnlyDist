(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"ct+p":function(t,n,e){"use strict";e.r(n),e.d(n,"HomeModule",(function(){return v}));var o=e("ofXK"),i=e("vvyD"),c=e("JMbo"),r=e("tyNb"),s=e("fXoL"),a=e("p9sW"),g=e("lGQG"),d=e("hZfp"),h=e("dNgK");let l=(()=>{class t{constructor(t,n){this.elementRef=t,this.renderer=n,this.RotateOnClick=""}onClick(t){"theme-light"==this.RotateOnClick&&this.renderer.setStyle(this.elementRef.nativeElement,"transform","rotateZ(-60deg)"),"theme-dark"==this.RotateOnClick&&this.renderer.setStyle(this.elementRef.nativeElement,"transform","rotateZ(60deg)")}}return t.\u0275fac=function(n){return new(n||t)(s.Kb(s.l),s.Kb(s.E))},t.\u0275dir=s.Fb({type:t,selectors:[["","RotateOnClick",""]],hostBindings:function(t,n){1&t&&s.Xb("click",(function(t){return n.onClick(t)}))},inputs:{RotateOnClick:"RotateOnClick"}}),t})();var p=e("NFeN"),b=e("Xa2L");const m=function(){return["/login"]},u=function(t){return{width:t}},P=function(){return["/signup"]};function x(t,n){if(1&t&&(s.Qb(0,"div",13),s.Qb(1,"div",14),s.Qb(2,"p"),s.wc(3,"Login"),s.Pb(),s.Pb(),s.Qb(4,"div",15),s.Lb(5,"div",16),s.Pb(),s.Qb(6,"div",17),s.Qb(7,"p"),s.wc(8,"Sign up"),s.Pb(),s.Pb(),s.Pb()),2&t){const t=s.bc();s.zb(1),s.gc("routerLink",s.hc(3,m))("ngStyle",s.ic(4,u,!0===t.clickLoginLoading?"100%":"40%")),s.zb(5),s.gc("routerLink",s.hc(6,P))}}const f=function(){return["/dashboard"]};function M(t,n){1&t&&(s.Qb(0,"div",13),s.Qb(1,"div",18),s.Qb(2,"p"),s.wc(3,"Dashboard"),s.Pb(),s.Pb(),s.Pb()),2&t&&(s.zb(1),s.gc("routerLink",s.hc(1,f)))}function C(t,n){1&t&&(s.Qb(0,"div",13),s.Qb(1,"mat-icon"),s.Lb(2,"mat-spinner",19),s.Pb(),s.Pb())}const O=[{path:"",component:(()=>{class t{constructor(t,n,e,o,i,c,r){this.ui=t,this.auth=n,this.webRequest=e,this.snackBar=o,this.zone=i,this.renderer=c,this._elementRef=r,this.Themes={Dark:"theme-dark",Light:"theme-light"},this.myTheme="theme-dark",this.main=document.getElementById("main"),this.loading=document.getElementById("loading"),this.btn=document.getElementById("switch"),this.iconText="wb_sunny",this.rotateDeg="60deg",this.clickLoginLoading=!1,this.clickSignupLoading=!1,this.clickDashboardLoading=!1,this.isBtnLoading={},this.isLoggedIn=!1,this.isAuthLoading=!0}ngOnInit(){this.isAuthLoading=!0,this.auth.isLoggedInWithCookie().subscribe(t=>{this.isLoggedIn=t,this.isAuthLoading=!1}),localStorage.getItem("Theme")!=this.Themes.Dark&&localStorage.getItem("Theme")!=this.Themes.Light||(this.myTheme=localStorage.getItem("Theme")),this.setTheme(this.myTheme)}setTheme(t){document.documentElement.className=t,this.iconText=t==this.Themes.Light?"brightness_2":"wb_sunny",localStorage.setItem("Theme",this.myTheme)}toggleTheme(){this.myTheme=this.myTheme==this.Themes.Light?this.Themes.Dark:this.Themes.Light,this.setTheme(this.myTheme)}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)(s.Kb(a.a),s.Kb(g.a),s.Kb(d.a),s.Kb(h.a),s.Kb(s.z),s.Kb(s.E),s.Kb(s.l))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-home"]],decls:28,vars:5,consts:[["id","main"],[1,"menu"],["id","switch",1,"softout",3,"RotateOnClick","click"],["icon1",""],["id","icon",1,"icon"],[1,"section1"],["src","../../assets/images/push_notifications.svg",1,"pushNSvg"],[1,"section2"],[1,"container"],[1,"boxTop","softout"],["class"," boxMiddle ",4,"ngIf"],[1,"boxBottom"],[1,"footer"],[1,"boxMiddle"],[1,"btnLogin","softout",3,"routerLink","ngStyle"],[1,"or-out","softin"],[1,"or-in","softout"],[1,"btnSignUp","softin",3,"routerLink"],[1,"btnLogin","softout",3,"routerLink"],["diameter","20"]],template:function(t,n){1&t&&(s.Qb(0,"main",0),s.Qb(1,"header"),s.Qb(2,"nav",1),s.Qb(3,"div"),s.Qb(4,"i"),s.wc(5,"Docs"),s.Pb(),s.Qb(6,"i"),s.wc(7,"API"),s.Pb(),s.Pb(),s.Pb(),s.Qb(8,"div",2,3),s.Xb("click",(function(){return n.toggleTheme()})),s.Qb(10,"mat-icon",4),s.wc(11),s.Pb(),s.Pb(),s.Pb(),s.Qb(12,"section",5),s.Lb(13,"img",6),s.Pb(),s.Qb(14,"section",7),s.Qb(15,"div",8),s.Qb(16,"div",9),s.Qb(17,"p"),s.wc(18,"Drop Your Notification"),s.Pb(),s.Pb(),s.vc(19,x,9,7,"div",10),s.vc(20,M,4,2,"div",10),s.vc(21,C,3,0,"div",10),s.Qb(22,"div",11),s.Qb(23,"p"),s.wc(24,"One click to notify"),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(25,"footer"),s.Qb(26,"div",12),s.wc(27," @copyright | All rights reserved for Drop. "),s.Pb(),s.Pb(),s.Pb()),2&t&&(s.zb(8),s.gc("RotateOnClick",n.myTheme),s.zb(3),s.xc(n.iconText),s.zb(8),s.gc("ngIf",!n.isLoggedIn&&!n.isAuthLoading),s.zb(1),s.gc("ngIf",n.isLoggedIn&&!n.isAuthLoading),s.zb(1),s.gc("ngIf",n.isAuthLoading))},directives:[l,p.a,o.k,r.c,o.l,b.b],styles:['[_nghost-%COMP%]{transition:all .18s;position:absolute;display:block!important;width:100%!important;height:100%!important;z-index:1;background-color:var(--color-primary)}[_nghost-%COMP%]   main[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;display:grid;grid-template-rows:auto auto auto auto}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{width:100%;height:99%;display:flex;flex-direction:row;justify-items:flex-start;align-items:flex-end;color:var(--color-text)}[_nghost-%COMP%]   main[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{position:relative;margin:30px;place-content:center;font-size:.9rem}button[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none}header[_ngcontent-%COMP%]{width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;justify-self:center;display:flex;flex-direction:row;align-items:center;padding:0;margin:0}header[_ngcontent-%COMP%]   #switch[_ngcontent-%COMP%]{border:none;background-color:initial;width:0;height:0;padding:22px;border-radius:50%;margin:20px;color:var(--color-text);display:grid;place-content:center;cursor:pointer}header[_ngcontent-%COMP%]   #switch[_ngcontent-%COMP%]:hover{box-shadow:2px 2px 2px var(--color-bottom-shadow),-2px -2px 2px var(--color-top-shadow)}header[_ngcontent-%COMP%]   #switch[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{transform:scale(.8)}header[_ngcontent-%COMP%]   nav.menu[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-flow:row wrap;color:var(--color-text);font-size:.9rem;border-radius:10px;justify-content:flex-end}header[_ngcontent-%COMP%]   nav.menu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50%;display:flex;justify-content:center;border-radius:10px}header[_ngcontent-%COMP%]   nav.menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-style:unset;font-weight:20;padding:15px 20px;margin:0 6px;cursor:pointer;transition:all .18s}header[_ngcontent-%COMP%]   nav.menu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{opacity:.5}section.section1[_ngcontent-%COMP%]{display:flex;justify-self:center;justify-content:center;align-items:center;width:100%;height:200px}section.section1[_ngcontent-%COMP%]   .pushNSvg[_ngcontent-%COMP%]{height:100%;background-size:contain;background-repeat:no-repeat}section.section2[_ngcontent-%COMP%]{display:block;place-content:center;place-self:center;width:400px;height:200px}.container[_ngcontent-%COMP%]{padding:5px;height:206.4px;place-self:center}.boxTop[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{width:100%;display:grid}.boxTop[_ngcontent-%COMP%]{padding:2.6em;border-radius:20px;place-content:center;text-align:center}.boxTop[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:1.5rem;font-weight:700;color:var(--color-text)}.boxMiddle[_ngcontent-%COMP%]{justify-content:center;display:flex;flex-flow:row wrap;place-content:center;flex-wrap:nowrap;flex-direction:row;width:100%;margin-top:20px}.boxMiddle[_ngcontent-%COMP%]   .btnLogin[_ngcontent-%COMP%], .boxMiddle[_ngcontent-%COMP%]   .btnSignUp[_ngcontent-%COMP%]{display:grid;width:40%;height:40px;padding:0;border-radius:50px;place-content:center;cursor:pointer}.boxMiddle[_ngcontent-%COMP%]   .btnLogin[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .boxMiddle[_ngcontent-%COMP%]   .btnSignUp[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;margin:0;padding:0;font-weight:700}.boxMiddle[_ngcontent-%COMP%]   .btnLogin[_ngcontent-%COMP%]{color:var(--color-text)}.boxMiddle[_ngcontent-%COMP%]   .btnLogin[_ngcontent-%COMP%]:hover{box-shadow:2px 2px 2px var(--color-bottom-shadow),-2px -2px 2px var(--color-top-shadow)}.boxMiddle[_ngcontent-%COMP%]   .btnSignUp[_ngcontent-%COMP%]{color:var(--color-text);opacity:.75}.boxMiddle[_ngcontent-%COMP%]   .btnSignUp[_ngcontent-%COMP%]:hover{box-shadow:inset 2px 2px 2px var(--color-bottom-shadow),inset -2px -2px 2px var(--color-top-shadow)}.boxMiddle[_ngcontent-%COMP%]   .or-out[_ngcontent-%COMP%]{display:grid;margin:0 10px;border-radius:50%;width:40px;height:40px;place-content:center}.boxMiddle[_ngcontent-%COMP%]   .or-out[_ngcontent-%COMP%]   .or-in[_ngcontent-%COMP%]{position:relative;border-radius:50%;width:100%;height:100%;padding:10px;font-size:.8rem;color:var(--color-text)}.boxMiddle[_ngcontent-%COMP%]   .or-out[_ngcontent-%COMP%]   .or-in[_ngcontent-%COMP%]:before{position:absolute;top:0;left:4px;content:"or"}.boxBottom[_ngcontent-%COMP%]{padding-top:10px}.boxBottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;color:var(--color-text)}p[_ngcontent-%COMP%]{width:100%;text-align:center;padding:0;margin:0;line-height:30px}.bottom-line[_ngcontent-%COMP%]{position:absolute;height:1px;background-color:rgba(255,0,0,.747);top:99.6%;width:100%}@media only screen and (max-width:600px){section.section2[_ngcontent-%COMP%]{display:grid;place-content:center;align-self:center;width:100%;height:200px}.bottom-line[_ngcontent-%COMP%]{position:absolute;height:1px;background-color:rgba(255,0,0,.747);top:100vh;width:100%}}.mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], [_nghost-%COMP%]  .mat-progress-spinner circle{stroke:var(--color-text)}']}),t})()}];let _=(()=>{class t{constructor(){}}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(n){return new(n||t)},imports:[[o.c,r.d.forChild(O)],r.d]}),t})();var w=e("3Pt+");let v=(()=>{class t{constructor(){}}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(n){return new(n||t)},imports:[[o.c,r.d,c.a,i.a,w.n,w.f,_]]}),t})()}}]);