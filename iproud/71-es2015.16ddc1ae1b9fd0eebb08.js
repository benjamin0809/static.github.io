(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{AJGH:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class u{}var o=t("pMnS"),i=t("oBZk"),b=t("ZZ/e"),r=t("TSSN"),a=t("s7LF"),s=t("mrSG"),g=t("hAUF"),c=t("VvKu"),h=(t("o0su"),t("Q1LM"),t("geQG")),d=t("riPR");class m extends h.a{constructor(n,l,t,e,u){super(n,t,u),this.navController=n,this.userProvider=l,this.eventsService=t,this.session=e,this.router=u,this.session.setting?this.getSetting():this.init().then(()=>{this.getSetting()})}openMyAgent(){this.router.navigate([g.a.WorkflowSettingAgentlistPage])}getSetting(){this.ReceiveMsgFromWF=this.session.setting["RECEIVEMSGFROMWF".toUpperCase()],this.ShowMobileTaskOnly=this.session.setting["SHOWMOBILETASKONLY".toUpperCase()]}init(){return s.b(this,void 0,void 0,(function*(){this.userProvider.getPrivateSetting().subscribe(n=>{const l={};for(const t of n.result)l[t.name.toUpperCase()]=t.value;this.session.setting=l})}))}changeSetting(n){clearTimeout(this.timer),this.timer=setTimeout(()=>{let l={};"message"===n?l={name:"ReceiveMsgFromWF",value:this.ReceiveMsgFromWF.toString()}:"mobile"===n&&(l={name:"ShowMobileTaskOnly",value:this.ShowMobileTaskOnly.toString()},this.session.setting["SHOWMOBILETASKONLY".toUpperCase()]=this.ShowMobileTaskOnly,this.eventsService.emit(c.u.SetShowMobileTask)),this.userProvider.privateSetting([l]).subscribe(n=>{})},1500)}}var k=t("GAO8"),p=t("ZwiA"),C=t("iInd"),v=e.pb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{position:relative;text-align:center;margin-bottom:50%}.back-button[_ngcontent-%COMP%]{--color:#999!important}.card-title[_ngcontent-%COMP%]{font-size:40px;color:--text-primary-color}.card-subtitle[_ngcontent-%COMP%]{margin-bottom:50px}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:10px auto;width:96px;border-radius:10px}ion-label[_ngcontent-%COMP%]{word-break:normal}.agent-container[_ngcontent-%COMP%]   .label-ios[_ngcontent-%COMP%]{margin:0}.agent-container[_ngcontent-%COMP%]   .agent[_ngcontent-%COMP%]{padding-left:0}"]],data:{}});function M(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,15,"ion-header",[["no-shadow",""]],null,null,null,i.wb,i.s)),e.qb(1,49152,null,0,b.D,[e.h,e.k,e.x],null,null),(n()(),e.rb(2,0,null,0,13,"ion-toolbar",[["class","page-navbar"],["hideBackButton","true"]],null,null,null,i.hc,i.db)),e.qb(3,49152,null,0,b.Eb,[e.h,e.k,e.x],null,null),(n()(),e.rb(4,0,null,0,7,"ion-buttons",[["slot","start"]],null,null,null,i.jb,i.f)),e.qb(5,49152,null,0,b.n,[e.h,e.k,e.x],null,null),(n()(),e.rb(6,0,null,0,5,"ion-button",[["class","back-button"],["icon-only",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goBack()&&e),e}),i.ib,i.e)),e.qb(7,49152,null,0,b.m,[e.h,e.k,e.x],null,null),(n()(),e.rb(8,0,null,0,1,"ion-icon",[["ios","ios-arrow-back"],["md","md-arrow-back"]],null,null,null,i.xb,i.t)),e.qb(9,49152,null,0,b.E,[e.h,e.k,e.x],{ios:[0,"ios"],md:[1,"md"]},null),(n()(),e.Jb(10,0,[" "," "])),e.Eb(131072,r.j,[r.k,e.h]),(n()(),e.rb(12,0,null,0,3,"ion-title",[],null,null,null,i.fc,i.bb)),e.qb(13,49152,null,0,b.Cb,[e.h,e.k,e.x],null,null),(n()(),e.Jb(14,0,["",""])),e.Eb(131072,r.j,[r.k,e.h]),(n()(),e.rb(16,0,null,null,33,"ion-content",[],null,null,null,i.rb,i.n)),e.qb(17,49152,null,0,b.w,[e.h,e.k,e.x],null,null),(n()(),e.rb(18,0,null,0,31,"ion-list",[],null,null,null,i.Ib,i.D)),e.qb(19,49152,null,0,b.Q,[e.h,e.k,e.x],null,null),(n()(),e.rb(20,0,null,0,12,"ion-item",[],null,null,null,i.Fb,i.y)),e.qb(21,49152,null,0,b.J,[e.h,e.k,e.x],null,null),(n()(),e.rb(22,0,null,0,3,"ion-label",[],null,null,null,i.Gb,i.C)),e.qb(23,49152,null,0,b.P,[e.h,e.k,e.x],null,null),(n()(),e.Jb(24,0,["",""])),e.Eb(131072,r.j,[r.k,e.h]),(n()(),e.rb(26,0,null,0,6,"ion-toggle",[["color","primary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Db(n,28)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Db(n,28)._handleIonChange(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.ReceiveMsgFromWF=t)&&u),"ionChange"===l&&(u=!1!==o.changeSetting("message")&&u),u}),i.gc,i.cb)),e.qb(27,49152,null,0,b.Db,[e.h,e.k,e.x],{color:[0,"color"]},null),e.qb(28,16384,null,0,b.d,[e.k],null,null),e.Gb(1024,null,a.i,(function(n){return[n]}),[b.d]),e.qb(30,671744,null,0,a.n,[[8,null],[8,null],[8,null],[6,a.i]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,a.j,null,[a.n]),e.qb(32,16384,null,0,a.k,[[4,a.j]],null,null),(n()(),e.rb(33,0,null,0,12,"ion-item",[],null,null,null,i.Fb,i.y)),e.qb(34,49152,null,0,b.J,[e.h,e.k,e.x],null,null),(n()(),e.rb(35,0,null,0,3,"ion-label",[],null,null,null,i.Gb,i.C)),e.qb(36,49152,null,0,b.P,[e.h,e.k,e.x],null,null),(n()(),e.Jb(37,0,["",""])),e.Eb(131072,r.j,[r.k,e.h]),(n()(),e.rb(39,0,null,0,6,"ion-toggle",[["color","primary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Db(n,41)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Db(n,41)._handleIonChange(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.ShowMobileTaskOnly=t)&&u),"ionChange"===l&&(u=!1!==o.changeSetting("mobile")&&u),u}),i.gc,i.cb)),e.qb(40,49152,null,0,b.Db,[e.h,e.k,e.x],{color:[0,"color"]},null),e.qb(41,16384,null,0,b.d,[e.k],null,null),e.Gb(1024,null,a.i,(function(n){return[n]}),[b.d]),e.qb(43,671744,null,0,a.n,[[8,null],[8,null],[8,null],[6,a.i]],{model:[0,"model"]},{update:"ngModelChange"}),e.Gb(2048,null,a.j,null,[a.n]),e.qb(45,16384,null,0,a.k,[[4,a.j]],null,null),(n()(),e.rb(46,0,null,0,3,"ion-item",[["class","agent"],["detail",""],["no-lines",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openMyAgent()&&e),e}),i.Fb,i.y)),e.qb(47,49152,null,0,b.J,[e.h,e.k,e.x],{detail:[0,"detail"]},null),(n()(),e.Jb(48,0,[" "," "])),e.Eb(131072,r.j,[r.k,e.h])],(function(n,l){var t=l.component;n(l,9,0,"ios-arrow-back","md-arrow-back"),n(l,27,0,"primary"),n(l,30,0,t.ReceiveMsgFromWF),n(l,40,0,"primary"),n(l,43,0,t.ShowMobileTaskOnly),n(l,47,0,"")}),(function(n,l){n(l,10,0,e.Kb(l,10,0,e.Db(l,11).transform("HOME_TITLE"))),n(l,14,0,e.Kb(l,14,0,e.Db(l,15).transform("WORKFLOW_SETTING_TITLE"))),n(l,24,0,e.Kb(l,24,0,e.Db(l,25).transform("WORKFLOW_SETTING_MESSAGE"))),n(l,26,0,e.Db(l,32).ngClassUntouched,e.Db(l,32).ngClassTouched,e.Db(l,32).ngClassPristine,e.Db(l,32).ngClassDirty,e.Db(l,32).ngClassValid,e.Db(l,32).ngClassInvalid,e.Db(l,32).ngClassPending),n(l,37,0,e.Kb(l,37,0,e.Db(l,38).transform("WORKFLOW_SETTING_TASK"))),n(l,39,0,e.Db(l,45).ngClassUntouched,e.Db(l,45).ngClassTouched,e.Db(l,45).ngClassPristine,e.Db(l,45).ngClassDirty,e.Db(l,45).ngClassValid,e.Db(l,45).ngClassInvalid,e.Db(l,45).ngClassPending),n(l,48,0,e.Kb(l,48,0,e.Db(l,49).transform("WORKFLOW_SETTING_MYAGENT")))}))}function S(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"page-workflow-setting",[],null,null,null,M,v)),e.qb(1,49152,null,0,m,[b.Lb,k.a,d.a,p.a,C.m],null,null)],null,null)}var B=e.nb("page-workflow-setting",m,S,{},{},[]),O=t("SVse"),f=t("j1ZV");t.d(l,"WorkflowSettingPageModuleNgFactory",(function(){return T}));var T=e.ob(u,[],(function(n){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[o.a,B]],[3,e.j],e.v]),e.Bb(4608,O.l,O.k,[e.s,[2,O.A]]),e.Bb(4608,b.c,b.c,[e.x,e.g]),e.Bb(4608,b.Kb,b.Kb,[b.c,e.j,e.p]),e.Bb(4608,b.Ob,b.Ob,[b.c,e.j,e.p]),e.Bb(4608,a.r,a.r,[]),e.Bb(4608,a.d,a.d,[]),e.Bb(4608,r.g,r.f,[]),e.Bb(4608,r.c,r.e,[]),e.Bb(4608,r.i,r.d,[]),e.Bb(4608,r.b,r.a,[]),e.Bb(4608,r.k,r.k,[r.l,r.g,r.c,r.i,r.b,r.m,r.n]),e.Bb(5120,e.d,(function(n,l,t){return[b.Ub(n,l,t)]}),[b.Tb,O.c,e.x]),e.Bb(1073742336,C.n,C.n,[[2,C.t],[2,C.m]]),e.Bb(1073742336,r.h,r.h,[]),e.Bb(1073742336,O.b,O.b,[]),e.Bb(1073742336,b.Gb,b.Gb,[]),e.Bb(1073742336,a.q,a.q,[]),e.Bb(1073742336,a.h,a.h,[]),e.Bb(1073742336,a.o,a.o,[]),e.Bb(1073742336,f.a,f.a,[]),e.Bb(1073742336,u,u,[]),e.Bb(256,r.n,void 0,[]),e.Bb(256,r.m,void 0,[]),e.Bb(256,b.Tb,void 0,[]),e.Bb(1024,C.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);