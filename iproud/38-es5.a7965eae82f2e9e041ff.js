(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{TDSW:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("mrSG"),l=e("hAUF"),i=e("ZOGp"),u=e("YsCg"),o=e("93YN"),a=function(){function n(n,t,e,r,l,i){this.modalCtrl=n,this.authProvider=t,this.navCtrl=e,this.router=r,this.translateService=l,this.nativeService=i}return n.prototype.doSelectCountry=function(){var n=this;return new Promise((function(t,e){return r.b(n,void 0,void 0,(function(){var n;return r.e(this,(function(r){switch(r.label){case 0:return[4,this.modalCtrl.create({component:o.a,componentProps:{isNeedAll:!0}})];case 1:return(n=r.sent()).onDidDismiss().then((function(n){t(n.data)})).catch((function(n){e(n)})),[4,n.present()];case 2:return r.sent(),[2]}}))}))}))},n.prototype.SendSecurityCode=function(n){var t=this;return new Promise((function(e,l){return r.b(t,void 0,void 0,(function(){return r.e(this,(function(t){return this.authProvider.SendSecurityCode2(n).subscribe((function(n){e("")}),(function(n){e(n)})),[2]}))}))}))},n.prototype.LoginByWFAccount=function(n){var t=this;return new Promise((function(e,l){return r.b(t,void 0,void 0,(function(){var t=this;return r.e(this,(function(r){return this.authProvider.LoginByWFAccount2(n).subscribe((function(n){t.setTabsToRoot()}),(function(n){e(n)})),[2]}))}))}))},n.prototype.Login=function(n){var t=this;return new Promise((function(e,l){return r.b(t,void 0,void 0,(function(){var t=this;return r.e(this,(function(r){return this.authProvider.Login2(n).subscribe((function(n){t.setTabsToRoot()}),(function(n){e(n)})),[2]}))}))}))},n.prototype.login=function(n,t,e,l){var i=this;return new Promise((function(e,l){return r.b(i,void 0,void 0,(function(){var l=this;return r.e(this,(function(r){switch(n){case u.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(t).subscribe((function(n){e("")}),(function(n){e(n)}));break;case u.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(t).subscribe((function(n){l.setTabsToRoot()}),(function(n){e(n)}));break;case u.j.LoginByMobileBefore:this.authProvider.Login2(t).subscribe((function(n){l.setTabsToRoot()}),(function(n){e(n)}))}return[2]}))}))}))},n.prototype.setTabsToRoot=function(){this.router.navigate([l.b.HomePage],{replaceUrl:!0})},n.prototype.verificationErrorHandle=function(n,t){return n.errcode===i.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():n.errcode===i.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(n)},n.prototype.loginError=function(n){var t="";switch(n.errcode){case i.a.USER.INACTIVE_USER:t="ACCOUNT_LOCKED";break;case i.a.USER.USER_NOT_EXIST:t="LOGIN_ERROR_USER_NOT_EXIST";break;case i.a.USER.MOBILE_NOT_EXIST:t="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case i.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case i.a.USER.INCORRECT_PASSWORD:t="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:t="LOGIN_ERROR"}this.nativeService.alert(n.errcode+","+this.translateService.instant(t))},n}()},dTSc:function(n,t,e){"use strict";e.r(t);var r=e("CcnG"),l=function(){return function(){}}(),i=e("pMnS"),u=e("A7o+"),o=e("gIcY"),a=e("oBZk"),s=e("ZZ/e"),c=e("Ip0R"),b=e("mrSG"),d=e("mGGX"),f=e("VGsI"),h=(e("o0su"),e("Q1LM"),e("hAUF")),v=function(n){function t(t,e,r,l,i,u,a){var s=n.call(this,a,h.a.MyInfoPage,e)||this;return s.navCtrl=t,s.session=e,s.userProvider=r,s.nativeService=l,s.translateService=i,s.formBuilder=u,s.router=a,s.isLengthInvalid=!1,null!=s.session.user&&(s.currentUser=s.session.user),s.form=u.group({nickname:[s.params.nickName||"",o.p.required]}),s.form.valueChanges.subscribe((function(n){f.a.getByteLen(n.nickname)<=50?(s.isReadyToSave=s.form.valid,s.isLengthInvalid=!1):(s.isReadyToSave=!1,s.isLengthInvalid=!0)})),s}return b.d(t,n),t.prototype.submit=function(){var n=this;this.form.valid&&(null!=this.form.value.nickname||void 0!==this.form.value.nickname?this.userProvider.setNickname({nickname:this.form.value.nickname}).subscribe((function(t){n.userProvider.getUserInfo().subscribe((function(){n.navCtrl.back()}))})):this.nativeService.alert(this.translateService.instant("MY_NICKNAME_VERIFY")))},t}(d.h),p=e("ZwiA"),g=e("GAO8"),m=e("6m4Z"),C=e("ZYCi"),S=r.rb({encapsulation:0,styles:[["ion-back-button[_ngcontent-%COMP%]{--color:#999}.error-container[_ngcontent-%COMP%]{height:40px;padding:10px}.error-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%]{color:red;-webkit-animation:.5s linear nicknameerror;animation:.5s linear nicknameerror}@-webkit-keyframes nicknameerror{0%{padding:0 20px}100%,20%,60%{padding:0}40%{padding:0 15px}80%{padding:0 10px}}@keyframes nicknameerror{0%{padding:0 20px}100%,20%,60%{padding:0}40%{padding:0 15px}80%{padding:0 10px}}"]],data:{}});function k(n){return r.Nb(0,[(n()(),r.tb(0,0,null,null,2,"div",[["class","error"]],null,null,null,null,null)),(n()(),r.Lb(1,null,["",""])),r.Gb(131072,u.j,[u.k,r.h])],null,(function(n,t){n(t,1,0,r.Mb(t,1,0,r.Fb(t,2).transform("MY_NICKNAME_EXCEED")))}))}function I(n){return r.Nb(0,[(n()(),r.tb(0,0,null,null,24,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,t,e){var l=!0,i=n.component;return"submit"===t&&(l=!1!==r.Fb(n,2).onSubmit(e)&&l),"reset"===t&&(l=!1!==r.Fb(n,2).onReset()&&l),"ngSubmit"===t&&(l=!1!==i.submit()&&l),l}),null,null)),r.sb(1,16384,null,0,o.t,[],null,null),r.sb(2,540672,null,0,o.g,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),r.Ib(2048,null,o.b,null,[o.g]),r.sb(4,16384,null,0,o.l,[[4,o.b]],null,null),(n()(),r.tb(5,0,null,null,14,"ion-list",[],null,null,null,a.Ib,a.D)),r.sb(6,49152,null,0,s.Q,[r.h,r.k,r.z],null,null),(n()(),r.tb(7,0,null,0,9,"ion-item",[],null,null,null,a.Fb,a.y)),r.sb(8,49152,null,0,s.J,[r.h,r.k,r.z],null,null),(n()(),r.tb(9,0,null,0,7,"ion-input",[["formControlName","nickname"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,t,e){var l=!0;return"ionBlur"===t&&(l=!1!==r.Fb(n,12)._handleBlurEvent(e.target)&&l),"ionChange"===t&&(l=!1!==r.Fb(n,12)._handleInputEvent(e.target)&&l),l}),a.Bb,a.x)),r.sb(10,49152,null,0,s.I,[r.h,r.k,r.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),r.Gb(131072,u.j,[u.k,r.h]),r.sb(12,16384,null,0,s.Rb,[r.k],null,null),r.Ib(1024,null,o.i,(function(n){return[n]}),[s.Rb]),r.sb(14,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.i],[2,o.s]],{name:[0,"name"]},null),r.Ib(2048,null,o.j,null,[o.f]),r.sb(16,16384,null,0,o.k,[[4,o.j]],null,null),(n()(),r.tb(17,0,null,0,2,"div",[["class","error-container"],["error",""]],null,null,null,null,null)),(n()(),r.ib(16777216,null,null,1,null,k)),r.sb(19,16384,null,0,c.j,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(n()(),r.tb(20,0,null,null,4,"div",[["class","ion-padding"]],null,null,null,null,null)),(n()(),r.tb(21,0,null,null,3,"ion-button",[["color","primary"],["expand","block"],["shape","round"],["slot","start"],["type","submit"]],null,null,null,a.ib,a.e)),r.sb(22,49152,null,0,s.m,[r.h,r.k,r.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],shape:[3,"shape"],type:[4,"type"]},null),(n()(),r.Lb(23,0,[" "," "])),r.Gb(131072,u.j,[u.k,r.h])],(function(n,t){var e=t.component;n(t,2,0,e.form),n(t,10,0,r.xb(1,"",r.Mb(t,10,0,r.Fb(t,11).transform("MY_UPDATA_NICKNAME")),""),"text"),n(t,14,0,"nickname"),n(t,19,0,e.isLengthInvalid),n(t,22,0,"primary",!e.isReadyToSave,"block","round","submit")}),(function(n,t){n(t,0,0,r.Fb(t,4).ngClassUntouched,r.Fb(t,4).ngClassTouched,r.Fb(t,4).ngClassPristine,r.Fb(t,4).ngClassDirty,r.Fb(t,4).ngClassValid,r.Fb(t,4).ngClassInvalid,r.Fb(t,4).ngClassPending),n(t,9,0,r.Fb(t,16).ngClassUntouched,r.Fb(t,16).ngClassTouched,r.Fb(t,16).ngClassPristine,r.Fb(t,16).ngClassDirty,r.Fb(t,16).ngClassValid,r.Fb(t,16).ngClassInvalid,r.Fb(t,16).ngClassPending),n(t,23,0,r.Mb(t,23,0,r.Fb(t,24).transform("CHANGE_PASSWORD_SUBMIT")))}))}function E(n){return r.Nb(0,[(n()(),r.tb(0,0,null,null,12,"ion-header",[],null,null,null,a.wb,a.s)),r.sb(1,49152,null,0,s.D,[r.h,r.k,r.z],null,null),(n()(),r.tb(2,0,null,0,10,"ion-toolbar",[],null,null,null,a.hc,a.db)),r.sb(3,49152,null,0,s.Eb,[r.h,r.k,r.z],null,null),(n()(),r.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.jb,a.f)),r.sb(5,49152,null,0,s.n,[r.h,r.k,r.z],null,null),(n()(),r.tb(6,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==r.Fb(n,8).onClick(e)&&l),l}),a.gb,a.c)),r.sb(7,49152,null,0,s.i,[r.h,r.k,r.z],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),r.sb(8,16384,null,0,s.j,[[2,s.kb],s.Lb],{defaultHref:[0,"defaultHref"]},null),(n()(),r.tb(9,0,null,0,3,"ion-title",[],null,null,null,a.fc,a.bb)),r.sb(10,49152,null,0,s.Cb,[r.h,r.k,r.z],null,null),(n()(),r.Lb(11,0,["",""])),r.Gb(131072,u.j,[u.k,r.h]),(n()(),r.tb(13,0,null,null,3,"ion-content",[],null,null,null,a.rb,a.n)),r.sb(14,49152,null,0,s.w,[r.h,r.k,r.z],null,null),(n()(),r.ib(16777216,null,0,1,null,I)),r.sb(16,16384,null,0,c.j,[r.O,r.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,7,0,e.defaultUrl,""),n(t,8,0,e.defaultUrl),n(t,16,0,e.form)}),(function(n,t){n(t,11,0,r.Mb(t,11,0,r.Fb(t,12).transform("MY_SET_NICKNAME")))}))}function R(n){return r.Nb(0,[(n()(),r.tb(0,0,null,null,1,"page-updata-NickNamePage",[],null,null,null,E,S)),r.sb(1,49152,null,0,v,[s.Lb,p.a,g.a,m.a,u.k,o.d,C.m],null,null)],null,null)}var N=r.pb("page-updata-NickNamePage",v,R,{},{},[]);e.d(t,"UpdateNickNamePageModuleNgFactory",(function(){return D}));var D=r.qb(l,[],(function(n){return r.Cb([r.Db(512,r.j,r.bb,[[8,[i.a,N]],[3,r.j],r.x]),r.Db(4608,c.l,c.k,[r.u,[2,c.A]]),r.Db(4608,s.c,s.c,[r.z,r.g]),r.Db(4608,s.Kb,s.Kb,[s.c,r.j,r.q]),r.Db(4608,s.Ob,s.Ob,[s.c,r.j,r.q]),r.Db(4608,o.r,o.r,[]),r.Db(4608,o.d,o.d,[]),r.Db(4608,u.g,u.f,[]),r.Db(4608,u.c,u.e,[]),r.Db(4608,u.i,u.d,[]),r.Db(4608,u.b,u.a,[]),r.Db(4608,u.k,u.k,[u.l,u.g,u.c,u.i,u.b,u.m,u.n]),r.Db(1073742336,c.b,c.b,[]),r.Db(1073742336,s.Gb,s.Gb,[]),r.Db(1073742336,C.n,C.n,[[2,C.t],[2,C.m]]),r.Db(1073742336,u.h,u.h,[]),r.Db(1073742336,o.q,o.q,[]),r.Db(1073742336,o.h,o.h,[]),r.Db(1073742336,o.o,o.o,[]),r.Db(1073742336,l,l,[]),r.Db(1024,C.k,(function(){return[[{path:"",component:v}]]}),[]),r.Db(256,u.n,void 0,[]),r.Db(256,u.m,void 0,[])])}))},mGGX:function(n,t,e){"use strict";var r=e("mrSG"),l=e("TDSW"),i=(e("wqKC"),e("93YN"),function(){function n(n,t){this.session=n,this.nativeService=t}return n.prototype.ionViewWillEnter=function(){this.session.isDarkMode||this.nativeService.setStyleLightContent()},n.prototype.ionViewWillLeave=function(){this.nativeService.statusBarStyle(this.session.isDarkMode)},n}());e.d(t,"i",(function(){return o})),e.d(t,"a",(function(){return a})),e.d(t,"e",(function(){return s})),e.d(t,"b",(function(){return c})),e.d(t,"f",(function(){return d})),e.d(t,"h",(function(){return f})),e.d(t,"g",(function(){return h})),e.d(t,"c",(function(){return v})),e.d(t,"d",(function(){return p}));var u=function(n){var t={},e=n.getCurrentNavigation().extras;return e&&e.state&&(t=e.state),t},o=function(n,t){var e=n||t.previousUrl;return t&&(e=t.previousUrl),e},a=function(){function n(n){this.events=n}return n.prototype.scrollWidth=function(n,t){return{width:n||window.screen.availWidth-5+"px",height:(t||44)+"px"}},n.prototype.completeRefresh=function(n){n&&n.target.complete()},n.prototype.completedoInfinite=function(n){n&&n.target.complete()},n}(),s=function(){return function(n,t){this.paramUrl=n,this.session=t,this.defaultUrl="",this.defaultUrl=o(n,this.session)}}(),c=function(){return function(n){this.router=n,this.params=u(n)}}(),b=function(n){function t(t,e){var r=n.call(this,e)||this;return r.router=t,r.events=e,r.params=u(t),r}return r.d(t,n),t}(a),d=function(n){function t(t,e,r){var l=n.call(this,e)||this;return l.paramUrl=t,l.events=e,l.session=r,l.defaultUrl="",l.defaultUrl=o(t,r),l}return r.d(t,n),t}(a),f=function(n){function t(t,e,r){var l=n.call(this,e,r)||this;return l.router=t,l.paramUrl=e,l.session=r,l.defaultUrl="",l.params=u(t),l}return r.d(t,n),t}(s),h=function(n){function t(t,e,r,l){var i=n.call(this,t,r)||this;return i.router=t,i.paramUrl=e,i.events=r,i.session=l,i.defaultUrl="",i.defaultUrl=o(e,i.session),i}return r.d(t,n),t}(b),v=function(n){function t(t,e,r,l){var i=n.call(this,t,e,r)||this;return i.router=t,i.session=e,i.nativeService=r,i.paramUrl=l,i.defaultUrl=o(l,e),i}return r.d(t,n),t}(function(n){function t(t,e,r){var l=n.call(this,e,r)||this;return l.router=t,l.session=e,l.nativeService=r,l.params=u(t),l}return r.d(t,n),t}(i)),p=function(n){function t(t,e,r,l,i,a,s,c){var b=n.call(this,t,e,r,l,i,a)||this;return b.router=t,b.modalCtrl=e,b.authProvider=r,b.navCtrl=l,b.translateService=i,b.nativeService=a,b.paramUrl=s,b.session=c,b.params=u(t),b.defaultUrl=o(s,c),b}return r.d(t,n),t}(function(n){function t(t,e,r,l,i,o){var a=n.call(this,e,r,l,t,i,o)||this;return a.router=t,a.modalCtrl=e,a.authProvider=r,a.navCtrl=l,a.translateService=i,a.nativeService=o,a.params=u(t),a}return r.d(t,n),t}(l.a))}}]);