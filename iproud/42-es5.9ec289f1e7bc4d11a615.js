(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{TDSW:function(n,l,t){"use strict";t.d(l,"a",(function(){return s}));var u=t("mrSG"),r=t("hAUF"),e=t("ZOGp"),o=t("YsCg"),i=t("93YN"),s=function(){function n(n,l,t,u,r,e){this.modalCtrl=n,this.authProvider=l,this.navCtrl=t,this.router=u,this.translateService=r,this.nativeService=e}return n.prototype.doSelectCountry=function(){var n=this;return new Promise((function(l,t){return u.b(n,void 0,void 0,(function(){var n;return u.e(this,(function(u){switch(u.label){case 0:return[4,this.modalCtrl.create({component:i.a,componentProps:{isNeedAll:!0}})];case 1:return(n=u.sent()).onDidDismiss().then((function(n){l(n.data)})).catch((function(n){t(n)})),[4,n.present()];case 2:return u.sent(),[2]}}))}))}))},n.prototype.SendSecurityCode=function(n){var l=this;return new Promise((function(t,r){return u.b(l,void 0,void 0,(function(){return u.e(this,(function(l){return this.authProvider.SendSecurityCode2(n).subscribe((function(n){t("")}),(function(n){t(n)})),[2]}))}))}))},n.prototype.LoginByWFAccount=function(n){var l=this;return new Promise((function(t,r){return u.b(l,void 0,void 0,(function(){var l=this;return u.e(this,(function(u){return this.authProvider.LoginByWFAccount2(n).subscribe((function(n){l.setTabsToRoot()}),(function(n){t(n)})),[2]}))}))}))},n.prototype.Login=function(n){var l=this;return new Promise((function(t,r){return u.b(l,void 0,void 0,(function(){var l=this;return u.e(this,(function(u){return this.authProvider.Login2(n).subscribe((function(n){l.setTabsToRoot()}),(function(n){t(n)})),[2]}))}))}))},n.prototype.login=function(n,l,t,r){var e=this;return new Promise((function(t,r){return u.b(e,void 0,void 0,(function(){var r=this;return u.e(this,(function(u){switch(n){case o.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(l).subscribe((function(n){t("")}),(function(n){t(n)}));break;case o.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(l).subscribe((function(n){r.setTabsToRoot()}),(function(n){t(n)}));break;case o.j.LoginByMobileBefore:this.authProvider.Login2(l).subscribe((function(n){r.setTabsToRoot()}),(function(n){t(n)}))}return[2]}))}))}))},n.prototype.setTabsToRoot=function(){this.router.navigate([r.b.HomePage],{replaceUrl:!0})},n.prototype.verificationErrorHandle=function(n,l){return n.errcode===e.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():n.errcode===e.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(n)},n.prototype.loginError=function(n){var l="";switch(n.errcode){case e.a.USER.INACTIVE_USER:l="ACCOUNT_LOCKED";break;case e.a.USER.USER_NOT_EXIST:l="LOGIN_ERROR_USER_NOT_EXIST";break;case e.a.USER.MOBILE_NOT_EXIST:l="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case e.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case e.a.USER.INCORRECT_PASSWORD:l="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:l="LOGIN_ERROR"}this.nativeService.alert(n.errcode+","+this.translateService.instant(l))},n}()},i8CX:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),r=function(){return function(){}}(),e=t("pMnS"),o=t("oBZk"),i=t("ZZ/e"),s=t("A7o+"),a=t("mrSG"),c=t("hAUF"),b=t("mGGX"),h=t("ZwiA"),d=t("sj5I"),p=t("aEp1"),f=function(n){function l(l,t,u,r,e,o){var i=n.call(this,o,c.a.IdlRecruitmentListPage,e)||this;return i.navCtrl=l,i.iDLRecruitingProvider=t,i.translateService=u,i.widgetProvider=r,i.session=e,i.router=o,i.postItem={},i.iDLRecruitingProvider.PostDetail(i.params.id).subscribe((function(n){0===n.errcode&&(i.postItem=n.result,i.postItem.applyUrl?i.postItem.applyUrl+=i.session.userId:i.postItem.applyUrl="http://fishnet.fih-foxconn.com/Job/JobApply?ChannelCode=C01&jobId=1&LanguageCode=zh-TW&AccountId="+i.session.userId)})),i}return a.d(l,n),l.prototype.applyPost=function(){var n={url:this.postItem.applyUrl,title:this.translateService.instant("HOME_ENGINEER_RECRUITMENT"),description:"",imageUrl:"",appId:"",options:{}};this.widgetProvider.openWebpage(n,this.router)},l}(b.h),v=t("ZYCi"),m=u.rb({encapsulation:0,styles:[[".post-info[_ngcontent-%COMP%]{font-size:14px;line-height:2;color:#343434}.post-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:pre-wrap;word-wrap:break-word}.post-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-right:5px;font-weight:700}.card-ios[_ngcontent-%COMP%]{width:100%;background:0 0;box-shadow:0;margin:0}h2[_ngcontent-%COMP%]{color:var(--text-primary-color)}"]],data:{}});function I(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,12,"ion-header",[],null,null,null,o.wb,o.s)),u.sb(1,49152,null,0,i.D,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,10,"ion-toolbar",[],null,null,null,o.hc,o.db)),u.sb(3,49152,null,0,i.Eb,[u.h,u.k,u.z],null,null),(n()(),u.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.jb,o.f)),u.sb(5,49152,null,0,i.n,[u.h,u.k,u.z],null,null),(n()(),u.tb(6,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],(function(n,l,t){var r=!0;return"click"===l&&(r=!1!==u.Fb(n,8).onClick(t)&&r),r}),o.gb,o.c)),u.sb(7,49152,null,0,i.i,[u.h,u.k,u.z],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),u.sb(8,16384,null,0,i.j,[[2,i.kb],i.Lb],{defaultHref:[0,"defaultHref"]},null),(n()(),u.tb(9,0,null,0,3,"ion-title",[],null,null,null,o.fc,o.bb)),u.sb(10,49152,null,0,i.Cb,[u.h,u.k,u.z],null,null),(n()(),u.Lb(11,0,["",""])),u.Gb(131072,s.j,[s.k,u.h]),(n()(),u.tb(13,0,null,null,66,"ion-content",[],null,null,null,o.rb,o.n)),u.sb(14,49152,null,0,i.w,[u.h,u.k,u.z],null,null),(n()(),u.tb(15,0,null,0,38,"ion-card",[],null,null,null,o.nb,o.g)),u.sb(16,49152,null,0,i.o,[u.h,u.k,u.z],null,null),(n()(),u.tb(17,0,null,0,3,"ion-card-header",[],null,null,null,o.lb,o.i)),u.sb(18,49152,null,0,i.q,[u.h,u.k,u.z],null,null),(n()(),u.tb(19,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),u.Lb(20,null,["",""])),(n()(),u.tb(21,0,null,0,32,"ion-card-content",[],null,null,null,o.kb,o.h)),u.sb(22,49152,null,0,i.p,[u.h,u.k,u.z],null,null),(n()(),u.tb(23,0,null,0,30,"div",[["class","post-info"]],null,null,null,null,null)),(n()(),u.tb(24,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),u.tb(25,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.Lb(26,null,["",":"])),u.Gb(131072,s.j,[s.k,u.h]),(n()(),u.Lb(28,null,["",""])),(n()(),u.tb(29,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),u.tb(30,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.Lb(31,null,["",":"])),u.Gb(131072,s.j,[s.k,u.h]),(n()(),u.Lb(33,null,["",""])),(n()(),u.tb(34,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),u.tb(35,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.Lb(36,null,["",":"])),u.Gb(131072,s.j,[s.k,u.h]),(n()(),u.Lb(38,null,["",""])),(n()(),u.tb(39,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),u.tb(40,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.Lb(41,null,["",":"])),u.Gb(131072,s.j,[s.k,u.h]),(n()(),u.Lb(43,null,[""," - ",""])),(n()(),u.tb(44,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),u.tb(45,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.Lb(46,null,["",":"])),u.Gb(131072,s.j,[s.k,u.h]),(n()(),u.Lb(48,null,["",""])),(n()(),u.tb(49,0,null,null,4,"p",[],null,null,null,null,null)),(n()(),u.tb(50,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),u.Lb(51,null,["",":"])),u.Gb(131072,s.j,[s.k,u.h]),(n()(),u.Lb(53,null,["",""])),(n()(),u.tb(54,0,null,0,0,"div",[["class","divider"]],null,null,null,null,null)),(n()(),u.tb(55,0,null,0,11,"ion-card",[],null,null,null,o.nb,o.g)),u.sb(56,49152,null,0,i.o,[u.h,u.k,u.z],null,null),(n()(),u.tb(57,0,null,0,4,"ion-card-header",[],null,null,null,o.lb,o.i)),u.sb(58,49152,null,0,i.q,[u.h,u.k,u.z],null,null),(n()(),u.tb(59,0,null,0,2,"h2",[],null,null,null,null,null)),(n()(),u.Lb(60,null,["",""])),u.Gb(131072,s.j,[s.k,u.h]),(n()(),u.tb(62,0,null,0,4,"ion-card-content",[],null,null,null,o.kb,o.h)),u.sb(63,49152,null,0,i.p,[u.h,u.k,u.z],null,null),(n()(),u.tb(64,0,null,0,2,"div",[["class","post-info"]],null,null,null,null,null)),(n()(),u.tb(65,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Lb(66,null,[""," "])),(n()(),u.tb(67,0,null,0,0,"div",[["class","divider"]],null,null,null,null,null)),(n()(),u.tb(68,0,null,0,11,"ion-card",[],null,null,null,o.nb,o.g)),u.sb(69,49152,null,0,i.o,[u.h,u.k,u.z],null,null),(n()(),u.tb(70,0,null,0,4,"ion-card-header",[],null,null,null,o.lb,o.i)),u.sb(71,49152,null,0,i.q,[u.h,u.k,u.z],null,null),(n()(),u.tb(72,0,null,0,2,"h2",[],null,null,null,null,null)),(n()(),u.Lb(73,null,["",""])),u.Gb(131072,s.j,[s.k,u.h]),(n()(),u.tb(75,0,null,0,4,"ion-card-content",[],null,null,null,o.kb,o.h)),u.sb(76,49152,null,0,i.p,[u.h,u.k,u.z],null,null),(n()(),u.tb(77,0,null,0,2,"div",[["class","post-info"]],null,null,null,null,null)),(n()(),u.tb(78,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.Lb(79,null,[""," "])),(n()(),u.tb(80,0,null,null,7,"ion-footer",[],null,null,null,o.ub,o.q)),u.sb(81,49152,null,0,i.B,[u.h,u.k,u.z],null,null),(n()(),u.tb(82,0,null,0,5,"ion-toolbar",[],null,null,null,o.hc,o.db)),u.sb(83,49152,null,0,i.Eb,[u.h,u.k,u.z],null,null),(n()(),u.tb(84,0,null,0,3,"ion-button",[["expand","block"],["shape","round"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.applyPost()&&u),u}),o.ib,o.e)),u.sb(85,49152,null,0,i.m,[u.h,u.k,u.z],{expand:[0,"expand"],shape:[1,"shape"]},null),(n()(),u.Lb(86,0,["",""])),u.Gb(131072,s.j,[s.k,u.h])],(function(n,l){var t=l.component;n(l,7,0,t.defaultUrl,""),n(l,8,0,t.defaultUrl),n(l,85,0,"block","round")}),(function(n,l){var t=l.component;n(l,11,0,u.Mb(l,11,0,u.Fb(l,12).transform("POST_DETAILS"))),n(l,20,0,t.postItem.postName),n(l,26,0,u.Mb(l,26,0,u.Fb(l,27).transform("RECRUITMENT_IDL_WORKPLACE"))),n(l,28,0,t.postItem.workplace),n(l,31,0,u.Mb(l,31,0,u.Fb(l,32).transform("RECRUITMENT_IDL_DEPARTMENT"))),n(l,33,0,t.postItem.department),n(l,36,0,u.Mb(l,36,0,u.Fb(l,37).transform("RECRUITMENT_IDL_QUANTITY"))),n(l,38,0,t.postItem.requestQty),n(l,41,0,u.Mb(l,41,0,u.Fb(l,42).transform("RECRUITMENT_IDL_SALARY_RANGE"))),n(l,43,0,t.postItem.salaryFrom,t.postItem.salaryTo),n(l,46,0,u.Mb(l,46,0,u.Fb(l,47).transform("RECRUITMENT_IDL_PUBLISHTIME"))),n(l,48,0,t.postItem.dateFrom),n(l,51,0,u.Mb(l,51,0,u.Fb(l,52).transform("RECRUITMENT_IDL_ENDTIME"))),n(l,53,0,t.postItem.dateTo),n(l,60,0,u.Mb(l,60,0,u.Fb(l,61).transform("RECRUITMENT_IDL_WORK_DUTY"))),n(l,66,0,t.postItem.dutyRequirement),n(l,73,0,u.Mb(l,73,0,u.Fb(l,74).transform("RECRUITMENT_IDL_QUALIFICATIONS"))),n(l,79,0,t.postItem.skillRequirement),n(l,86,0,u.Mb(l,86,0,u.Fb(l,87).transform("RECRUITMENT_APPLY")))}))}function R(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,1,"page-idl-recruitment",[],null,null,null,I,m)),u.sb(1,49152,null,0,f,[i.Lb,p.a,s.k,d.a,h.a,v.m],null,null)],null,null)}var E=u.pb("page-idl-recruitment",f,R,{},{},[]),C=t("gIcY"),T=t("Ip0R");t.d(l,"IdlRecruitmentPageModuleNgFactory",(function(){return k}));var k=u.qb(r,[],(function(n){return u.Cb([u.Db(512,u.j,u.bb,[[8,[e.a,E]],[3,u.j],u.x]),u.Db(4608,C.r,C.r,[]),u.Db(4608,T.l,T.k,[u.u,[2,T.A]]),u.Db(4608,i.c,i.c,[u.z,u.g]),u.Db(4608,i.Kb,i.Kb,[i.c,u.j,u.q]),u.Db(4608,i.Ob,i.Ob,[i.c,u.j,u.q]),u.Db(4608,s.g,s.f,[]),u.Db(4608,s.c,s.e,[]),u.Db(4608,s.i,s.d,[]),u.Db(4608,s.b,s.a,[]),u.Db(4608,s.k,s.k,[s.l,s.g,s.c,s.i,s.b,s.m,s.n]),u.Db(1073742336,v.n,v.n,[[2,v.t],[2,v.m]]),u.Db(1073742336,s.h,s.h,[]),u.Db(1073742336,C.q,C.q,[]),u.Db(1073742336,C.h,C.h,[]),u.Db(1073742336,T.b,T.b,[]),u.Db(1073742336,i.Gb,i.Gb,[]),u.Db(1073742336,r,r,[]),u.Db(1024,v.k,(function(){return[[{path:"",component:f}]]}),[]),u.Db(256,s.n,void 0,[]),u.Db(256,s.m,void 0,[])])}))},mGGX:function(n,l,t){"use strict";var u=t("mrSG"),r=t("TDSW"),e=(t("wqKC"),t("93YN"),function(){function n(n,l){this.session=n,this.nativeService=l}return n.prototype.ionViewWillEnter=function(){this.session.isDarkMode||this.nativeService.setStyleLightContent()},n.prototype.ionViewWillLeave=function(){this.nativeService.statusBarStyle(this.session.isDarkMode)},n}());t.d(l,"i",(function(){return i})),t.d(l,"a",(function(){return s})),t.d(l,"e",(function(){return a})),t.d(l,"b",(function(){return c})),t.d(l,"f",(function(){return h})),t.d(l,"h",(function(){return d})),t.d(l,"g",(function(){return p})),t.d(l,"c",(function(){return f})),t.d(l,"d",(function(){return v}));var o=function(n){var l={},t=n.getCurrentNavigation().extras;return t&&t.state&&(l=t.state),l},i=function(n,l){var t=n||l.previousUrl;return l&&(t=l.previousUrl),t},s=function(){function n(n){this.events=n}return n.prototype.scrollWidth=function(n,l){return{width:n||window.screen.availWidth-5+"px",height:(l||44)+"px"}},n.prototype.completeRefresh=function(n){n&&n.target.complete()},n.prototype.completedoInfinite=function(n){n&&n.target.complete()},n}(),a=function(){return function(n,l){this.paramUrl=n,this.session=l,this.defaultUrl="",this.defaultUrl=i(n,this.session)}}(),c=function(){return function(n){this.router=n,this.params=o(n)}}(),b=function(n){function l(l,t){var u=n.call(this,t)||this;return u.router=l,u.events=t,u.params=o(l),u}return u.d(l,n),l}(s),h=function(n){function l(l,t,u){var r=n.call(this,t)||this;return r.paramUrl=l,r.events=t,r.session=u,r.defaultUrl="",r.defaultUrl=i(l,u),r}return u.d(l,n),l}(s),d=function(n){function l(l,t,u){var r=n.call(this,t,u)||this;return r.router=l,r.paramUrl=t,r.session=u,r.defaultUrl="",r.params=o(l),r}return u.d(l,n),l}(a),p=function(n){function l(l,t,u,r){var e=n.call(this,l,u)||this;return e.router=l,e.paramUrl=t,e.events=u,e.session=r,e.defaultUrl="",e.defaultUrl=i(t,e.session),e}return u.d(l,n),l}(b),f=function(n){function l(l,t,u,r){var e=n.call(this,l,t,u)||this;return e.router=l,e.session=t,e.nativeService=u,e.paramUrl=r,e.defaultUrl=i(r,t),e}return u.d(l,n),l}(function(n){function l(l,t,u){var r=n.call(this,t,u)||this;return r.router=l,r.session=t,r.nativeService=u,r.params=o(l),r}return u.d(l,n),l}(e)),v=function(n){function l(l,t,u,r,e,s,a,c){var b=n.call(this,l,t,u,r,e,s)||this;return b.router=l,b.modalCtrl=t,b.authProvider=u,b.navCtrl=r,b.translateService=e,b.nativeService=s,b.paramUrl=a,b.session=c,b.params=o(l),b.defaultUrl=i(a,c),b}return u.d(l,n),l}(function(n){function l(l,t,u,r,e,i){var s=n.call(this,t,u,r,l,e,i)||this;return s.router=l,s.modalCtrl=t,s.authProvider=u,s.navCtrl=r,s.translateService=e,s.nativeService=i,s.params=o(l),s}return u.d(l,n),l}(r.a))}}]);