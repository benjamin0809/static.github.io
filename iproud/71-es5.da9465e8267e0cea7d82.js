(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{AJGH:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=function(){return function(){}}(),o=t("pMnS"),i=t("oBZk"),b=t("ZZ/e"),r=t("A7o+"),a=t("gIcY"),s=t("mrSG"),g=t("hAUF"),c=t("VvKu"),h=(t("o0su"),t("Q1LM"),t("geQG")),d=t("riPR"),m=function(n){function l(l,t,e,u,o){var i=n.call(this,l,e,o)||this;return i.navController=l,i.userProvider=t,i.eventsService=e,i.session=u,i.router=o,i.session.setting?i.getSetting():i.init().then((function(){i.getSetting()})),i}return s.d(l,n),l.prototype.openMyAgent=function(){this.router.navigate([g.a.WorkflowSettingAgentlistPage])},l.prototype.getSetting=function(){this.ReceiveMsgFromWF=this.session.setting["RECEIVEMSGFROMWF".toUpperCase()],this.ShowMobileTaskOnly=this.session.setting["SHOWMOBILETASKONLY".toUpperCase()]},l.prototype.init=function(){return s.b(this,void 0,void 0,(function(){var n=this;return s.e(this,(function(l){return this.userProvider.getPrivateSetting().subscribe((function(l){for(var t={},e=0,u=l.result;e<u.length;e++){var o=u[e];t[o.name.toUpperCase()]=o.value}n.session.setting=t})),[2]}))}))},l.prototype.changeSetting=function(n){var l=this;clearTimeout(this.timer),this.timer=setTimeout((function(){var t={};"message"===n?t={name:"ReceiveMsgFromWF",value:l.ReceiveMsgFromWF.toString()}:"mobile"===n&&(t={name:"ShowMobileTaskOnly",value:l.ShowMobileTaskOnly.toString()},l.session.setting["SHOWMOBILETASKONLY".toUpperCase()]=l.ShowMobileTaskOnly,l.eventsService.emit(c.u.SetShowMobileTask)),l.userProvider.privateSetting([t]).subscribe((function(n){}))}),1500)},l}(h.a),p=t("GAO8"),k=t("ZwiA"),C=t("ZYCi"),v=e.rb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{position:relative;text-align:center;margin-bottom:50%}.back-button[_ngcontent-%COMP%]{--color:#999!important}.card-title[_ngcontent-%COMP%]{font-size:40px;color:--text-primary-color}.card-subtitle[_ngcontent-%COMP%]{margin-bottom:50px}ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:10px auto;width:96px;border-radius:10px}ion-label[_ngcontent-%COMP%]{word-break:normal}.agent-container[_ngcontent-%COMP%]   .label-ios[_ngcontent-%COMP%]{margin:0}.agent-container[_ngcontent-%COMP%]   .agent[_ngcontent-%COMP%]{padding-left:0}"]],data:{}});function M(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,15,"ion-header",[["no-shadow",""]],null,null,null,i.wb,i.s)),e.sb(1,49152,null,0,b.D,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,13,"ion-toolbar",[["class","page-navbar"],["hideBackButton","true"]],null,null,null,i.hc,i.db)),e.sb(3,49152,null,0,b.Eb,[e.h,e.k,e.z],null,null),(n()(),e.tb(4,0,null,0,7,"ion-buttons",[["slot","start"]],null,null,null,i.jb,i.f)),e.sb(5,49152,null,0,b.n,[e.h,e.k,e.z],null,null),(n()(),e.tb(6,0,null,0,5,"ion-button",[["class","back-button"],["icon-only",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goBack()&&e),e}),i.ib,i.e)),e.sb(7,49152,null,0,b.m,[e.h,e.k,e.z],null,null),(n()(),e.tb(8,0,null,0,1,"ion-icon",[["ios","ios-arrow-back"],["md","md-arrow-back"]],null,null,null,i.xb,i.t)),e.sb(9,49152,null,0,b.E,[e.h,e.k,e.z],{ios:[0,"ios"],md:[1,"md"]},null),(n()(),e.Lb(10,0,[" "," "])),e.Gb(131072,r.j,[r.k,e.h]),(n()(),e.tb(12,0,null,0,3,"ion-title",[],null,null,null,i.fc,i.bb)),e.sb(13,49152,null,0,b.Cb,[e.h,e.k,e.z],null,null),(n()(),e.Lb(14,0,["",""])),e.Gb(131072,r.j,[r.k,e.h]),(n()(),e.tb(16,0,null,null,33,"ion-content",[],null,null,null,i.rb,i.n)),e.sb(17,49152,null,0,b.w,[e.h,e.k,e.z],null,null),(n()(),e.tb(18,0,null,0,31,"ion-list",[],null,null,null,i.Ib,i.D)),e.sb(19,49152,null,0,b.Q,[e.h,e.k,e.z],null,null),(n()(),e.tb(20,0,null,0,12,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(21,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(n()(),e.tb(22,0,null,0,3,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(23,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(n()(),e.Lb(24,0,["",""])),e.Gb(131072,r.j,[r.k,e.h]),(n()(),e.tb(26,0,null,0,6,"ion-toggle",[["color","primary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Fb(n,28)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Fb(n,28)._handleIonChange(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.ReceiveMsgFromWF=t)&&u),"ionChange"===l&&(u=!1!==o.changeSetting("message")&&u),u}),i.gc,i.cb)),e.sb(27,49152,null,0,b.Db,[e.h,e.k,e.z],{color:[0,"color"]},null),e.sb(28,16384,null,0,b.d,[e.k],null,null),e.Ib(1024,null,a.i,(function(n){return[n]}),[b.d]),e.sb(30,671744,null,0,a.n,[[8,null],[8,null],[8,null],[6,a.i]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,a.j,null,[a.n]),e.sb(32,16384,null,0,a.k,[[4,a.j]],null,null),(n()(),e.tb(33,0,null,0,12,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(34,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(n()(),e.tb(35,0,null,0,3,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(36,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(n()(),e.Lb(37,0,["",""])),e.Gb(131072,r.j,[r.k,e.h]),(n()(),e.tb(39,0,null,0,6,"ion-toggle",[["color","primary"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==e.Fb(n,41)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Fb(n,41)._handleIonChange(t.target)&&u),"ngModelChange"===l&&(u=!1!==(o.ShowMobileTaskOnly=t)&&u),"ionChange"===l&&(u=!1!==o.changeSetting("mobile")&&u),u}),i.gc,i.cb)),e.sb(40,49152,null,0,b.Db,[e.h,e.k,e.z],{color:[0,"color"]},null),e.sb(41,16384,null,0,b.d,[e.k],null,null),e.Ib(1024,null,a.i,(function(n){return[n]}),[b.d]),e.sb(43,671744,null,0,a.n,[[8,null],[8,null],[8,null],[6,a.i]],{model:[0,"model"]},{update:"ngModelChange"}),e.Ib(2048,null,a.j,null,[a.n]),e.sb(45,16384,null,0,a.k,[[4,a.j]],null,null),(n()(),e.tb(46,0,null,0,3,"ion-item",[["class","agent"],["detail",""],["no-lines",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openMyAgent()&&e),e}),i.Fb,i.y)),e.sb(47,49152,null,0,b.J,[e.h,e.k,e.z],{detail:[0,"detail"]},null),(n()(),e.Lb(48,0,[" "," "])),e.Gb(131072,r.j,[r.k,e.h])],(function(n,l){var t=l.component;n(l,9,0,"ios-arrow-back","md-arrow-back"),n(l,27,0,"primary"),n(l,30,0,t.ReceiveMsgFromWF),n(l,40,0,"primary"),n(l,43,0,t.ShowMobileTaskOnly),n(l,47,0,"")}),(function(n,l){n(l,10,0,e.Mb(l,10,0,e.Fb(l,11).transform("HOME_TITLE"))),n(l,14,0,e.Mb(l,14,0,e.Fb(l,15).transform("WORKFLOW_SETTING_TITLE"))),n(l,24,0,e.Mb(l,24,0,e.Fb(l,25).transform("WORKFLOW_SETTING_MESSAGE"))),n(l,26,0,e.Fb(l,32).ngClassUntouched,e.Fb(l,32).ngClassTouched,e.Fb(l,32).ngClassPristine,e.Fb(l,32).ngClassDirty,e.Fb(l,32).ngClassValid,e.Fb(l,32).ngClassInvalid,e.Fb(l,32).ngClassPending),n(l,37,0,e.Mb(l,37,0,e.Fb(l,38).transform("WORKFLOW_SETTING_TASK"))),n(l,39,0,e.Fb(l,45).ngClassUntouched,e.Fb(l,45).ngClassTouched,e.Fb(l,45).ngClassPristine,e.Fb(l,45).ngClassDirty,e.Fb(l,45).ngClassValid,e.Fb(l,45).ngClassInvalid,e.Fb(l,45).ngClassPending),n(l,48,0,e.Mb(l,48,0,e.Fb(l,49).transform("WORKFLOW_SETTING_MYAGENT")))}))}function f(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,1,"page-workflow-setting",[],null,null,null,M,v)),e.sb(1,49152,null,0,m,[b.Lb,p.a,d.a,k.a,C.m],null,null)],null,null)}var F=e.pb("page-workflow-setting",m,f,{},{},[]),O=t("Ip0R"),S=t("j1ZV");t.d(l,"WorkflowSettingPageModuleNgFactory",(function(){return D}));var D=e.qb(u,[],(function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[o.a,F]],[3,e.j],e.x]),e.Db(4608,O.l,O.k,[e.u,[2,O.A]]),e.Db(4608,b.c,b.c,[e.z,e.g]),e.Db(4608,b.Kb,b.Kb,[b.c,e.j,e.q]),e.Db(4608,b.Ob,b.Ob,[b.c,e.j,e.q]),e.Db(4608,a.r,a.r,[]),e.Db(4608,a.d,a.d,[]),e.Db(4608,r.g,r.f,[]),e.Db(4608,r.c,r.e,[]),e.Db(4608,r.i,r.d,[]),e.Db(4608,r.b,r.a,[]),e.Db(4608,r.k,r.k,[r.l,r.g,r.c,r.i,r.b,r.m,r.n]),e.Db(5120,e.d,(function(n,l,t){return[b.Ub(n,l,t)]}),[b.Tb,O.c,e.z]),e.Db(1073742336,C.n,C.n,[[2,C.t],[2,C.m]]),e.Db(1073742336,r.h,r.h,[]),e.Db(1073742336,O.b,O.b,[]),e.Db(1073742336,b.Gb,b.Gb,[]),e.Db(1073742336,a.q,a.q,[]),e.Db(1073742336,a.h,a.h,[]),e.Db(1073742336,a.o,a.o,[]),e.Db(1073742336,S.a,S.a,[]),e.Db(1073742336,u,u,[]),e.Db(256,r.n,void 0,[]),e.Db(256,r.m,void 0,[]),e.Db(256,b.Tb,void 0,[]),e.Db(1024,C.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);