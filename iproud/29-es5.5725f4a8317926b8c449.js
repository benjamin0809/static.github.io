(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{FkNo:function(n,t,e){"use strict";e.r(t);var r=e("CcnG"),i=function(){return function(){}}(),o=e("pMnS"),l=e("oBZk"),u=e("ZZ/e"),a=e("A7o+"),s=e("mrSG"),c=e("ZwiA"),b=e("bl9C"),h=e("6m4Z"),f=e("xshe"),d=(e("Q1LM"),e("VGsI")),p=e("riPR"),v=e("VvKu"),g=e("hAUF"),m=function(n){function t(t,e,r,i,o,l,u,a,s){var c=n.call(this,g.b.HomePage,s)||this;return c.navCtrl=t,c.qrScanner=e,c.alertCtrl=r,c.widgetProvider=i,c.translateService=o,c.nativeService=l,c.eventsService=u,c.router=a,c.session=s,c.light=!1,c.frontCamera=!1,c}return s.d(t,n),t.prototype.ionViewWillEnter=function(){var n=this;this.eventsService.emit(v.b.ChangeTabsDisplay,!0),this.qrScanner.prepare().then((function(t){if(t.authorized){var e=n.qrScanner.scan().subscribe((function(t){n.qrScanner.hide(),e.unsubscribe(),n.eventsService.emit(v.b.ChangeTabsDisplay,!1),n.navCtrl.back();var r={url:t,title:"",description:"",imageUrl:"",appId:"",options:{canShare:!0}};t&&(t=t.trim(),d.a.isUrl(t)||-1!==t.indexOf(b.e.toLowerCase()+"AppPageId")||(r.url=b.C+"?result="+encodeURIComponent(t))),n.widgetProvider.openWebpage(r,n.router)}));n.qrScanner.show()}else n.showOpenSettingAlert()})).catch((function(t){n.showOpenSettingAlert(),console.error("Error is",t)}))},t.prototype.ionViewDidEnter=function(){this.showCamera()},t.prototype.showOpenSettingAlert=function(){return s.b(this,void 0,void 0,(function(){var n=this;return s.e(this,(function(t){switch(t.label){case 0:return this.nativeService.isMobile()?[4,this.alertCtrl.create({header:this.translateService.instant("SCANNER_SETTING_REQUEST"),message:this.translateService.instant("SCANNER_SETTING_OPENSETTING"),buttons:[{text:this.translateService.instant("APP_COMMON_CANCEL"),handler:function(){}},{text:this.translateService.instant("APP_COMMON_CONFIRM"),handler:function(){n.qrScanner.openSettings()}}]})]:[3,3];case 1:return[4,t.sent().present()];case 2:t.sent(),t.label=3;case 3:return[2]}}))}))},t.prototype.toggleLight=function(){this.light?this.qrScanner.disableLight():this.qrScanner.enableLight(),this.light=!this.light},t.prototype.toggleCamera=function(){this.frontCamera?this.qrScanner.useBackCamera():this.qrScanner.useFrontCamera(),this.frontCamera=!this.frontCamera},t.prototype.showCamera=function(){window.document.querySelector("ion-app").classList.add("cameraView")},t.prototype.hideCamera=function(){window.document.querySelector("ion-app").classList.remove("cameraView"),this.qrScanner.disableLight(),this.qrScanner.hide().then((function(n){})),this.qrScanner.destroy().then((function(n){}))},t.prototype.ionViewWillLeave=function(){this.hideCamera(),this.eventsService.emit(v.b.ChangeTabsDisplay,!1)},t}(e("mGGX").e),C=e("sj5I"),S=e("ZYCi"),O=r.rb({encapsulation:0,styles:[[".qrscanner[_ngcontent-%COMP%]{background:0 0}.qrscanner-area[_ngcontent-%COMP%]{width:100%;height:86%;background-size:contain}ion-content[_ngcontent-%COMP%]{--background:none transparent!important}.through-line[_ngcontent-%COMP%]{left:25%;width:50%;height:1px;border-radius:5px;background:var(--ion-color-primary);position:absolute;-webkit-animation:3s linear infinite scanner-bar;animation:3s linear infinite scanner-bar}@-webkit-keyframes scanner-bar{0%{top:30%}25%{top:35%}50%{top:40%}75%{top:45%}100%{top:50%}}@keyframes scanner-bar{0%{top:30%}25%{top:35%}50%{top:40%}75%{top:45%}100%{top:50%}}.button-bottom[_ngcontent-%COMP%]{width:128px;position:absolute;left:50%;bottom:80px;margin-left:-64px}.button-bottom[_ngcontent-%COMP%]   .icon-camera[_ngcontent-%COMP%]{float:left}ion-footer[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--background:transparent!important;--border:0!important;padding:0;background:0 0!important}.footer-ios[_ngcontent-%COMP%], .footer-md[_ngcontent-%COMP%]{box-shadow:none}.footer-ios[_ngcontent-%COMP%]   .toolbar-background-ios[_ngcontent-%COMP%], .footer-md[_ngcontent-%COMP%]   .toolbar-background-ios[_ngcontent-%COMP%]{border:0;background:0 0}.footer-ios[_ngcontent-%COMP%]:before, .footer-md[_ngcontent-%COMP%]:before{display:none}"]],data:{}});function E(n){return r.Nb(0,[(n()(),r.tb(0,0,null,null,12,"ion-header",[["no-border",""],["transparent",""]],null,null,null,l.wb,l.s)),r.sb(1,49152,null,0,u.D,[r.h,r.k,r.z],null,null),(n()(),r.tb(2,0,null,0,10,"ion-toolbar",[["transparent",""]],null,null,null,l.hc,l.db)),r.sb(3,49152,null,0,u.Eb,[r.h,r.k,r.z],null,null),(n()(),r.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,l.jb,l.f)),r.sb(5,49152,null,0,u.n,[r.h,r.k,r.z],null,null),(n()(),r.tb(6,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],(function(n,t,e){var i=!0;return"click"===t&&(i=!1!==r.Fb(n,8).onClick(e)&&i),i}),l.gb,l.c)),r.sb(7,49152,null,0,u.i,[r.h,r.k,r.z],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),r.sb(8,16384,null,0,u.j,[[2,u.kb],u.Lb],{defaultHref:[0,"defaultHref"]},null),(n()(),r.tb(9,0,null,0,3,"ion-title",[],null,null,null,l.fc,l.bb)),r.sb(10,49152,null,0,u.Cb,[r.h,r.k,r.z],null,null),(n()(),r.Lb(11,0,["",""])),r.Gb(131072,a.j,[a.k,r.h]),(n()(),r.tb(13,0,null,null,3,"ion-content",[],null,null,null,l.rb,l.n)),r.sb(14,49152,null,0,u.w,[r.h,r.k,r.z],null,null),(n()(),r.tb(15,0,null,0,0,"div",[["class","qrscanner-area"]],null,null,null,null,null)),(n()(),r.tb(16,0,null,0,0,"div",[["class","through-line"]],null,null,null,null,null)),(n()(),r.tb(17,0,null,null,23,"ion-footer",[],null,null,null,l.ub,l.q)),r.sb(18,49152,null,0,u.B,[r.h,r.k,r.z],null,null),(n()(),r.tb(19,0,null,0,21,"ion-toolbar",[],null,null,null,l.hc,l.db)),r.sb(20,49152,null,0,u.Eb,[r.h,r.k,r.z],null,null),(n()(),r.tb(21,0,null,0,19,"ion-grid",[],null,null,null,l.vb,l.r)),r.sb(22,49152,null,0,u.C,[r.h,r.k,r.z],null,null),(n()(),r.tb(23,0,null,0,17,"ion-row",[],null,null,null,l.Pb,l.L)),r.sb(24,49152,null,0,u.lb,[r.h,r.k,r.z],null,null),(n()(),r.tb(25,0,null,0,1,"ion-col",[["size","3"]],null,null,null,l.qb,l.m)),r.sb(26,49152,null,0,u.v,[r.h,r.k,r.z],{size:[0,"size"]},null),(n()(),r.tb(27,0,null,0,5,"ion-col",[["class","ion-text-left"],["size","3"]],null,null,null,l.qb,l.m)),r.sb(28,49152,null,0,u.v,[r.h,r.k,r.z],{size:[0,"size"]},null),(n()(),r.tb(29,0,null,0,3,"ion-fab-button",[["class","ion-text-left"],["margin-right",""],["translucent","true"]],null,[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==n.component.toggleLight()&&r),r}),l.tb,l.p)),r.sb(30,49152,null,0,u.z,[r.h,r.k,r.z],{translucent:[0,"translucent"]},null),(n()(),r.tb(31,0,null,0,1,"ion-icon",[["name","flash"]],null,null,null,l.xb,l.t)),r.sb(32,49152,null,0,u.E,[r.h,r.k,r.z],{name:[0,"name"]},null),(n()(),r.tb(33,0,null,0,5,"ion-col",[["class","ion-text-right"],["size","3"]],null,null,null,l.qb,l.m)),r.sb(34,49152,null,0,u.v,[r.h,r.k,r.z],{size:[0,"size"]},null),(n()(),r.tb(35,0,null,0,3,"ion-fab-button",[["class","ion-float-right"],["margin-left",""],["translucent","true"]],null,[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==n.component.toggleCamera()&&r),r}),l.tb,l.p)),r.sb(36,49152,null,0,u.z,[r.h,r.k,r.z],{translucent:[0,"translucent"]},null),(n()(),r.tb(37,0,null,0,1,"ion-icon",[["name","reverse-camera"]],null,null,null,l.xb,l.t)),r.sb(38,49152,null,0,u.E,[r.h,r.k,r.z],{name:[0,"name"]},null),(n()(),r.tb(39,0,null,0,1,"ion-col",[["size","3"]],null,null,null,l.qb,l.m)),r.sb(40,49152,null,0,u.v,[r.h,r.k,r.z],{size:[0,"size"]},null)],(function(n,t){var e=t.component;n(t,7,0,e.defaultUrl,""),n(t,8,0,e.defaultUrl),n(t,26,0,"3"),n(t,28,0,"3"),n(t,30,0,"true"),n(t,32,0,"flash"),n(t,34,0,"3"),n(t,36,0,"true"),n(t,38,0,"reverse-camera"),n(t,40,0,"3")}),(function(n,t){n(t,11,0,r.Mb(t,11,0,r.Fb(t,12).transform("QR_CODE")))}))}function k(n){return r.Nb(0,[(n()(),r.tb(0,0,null,null,1,"page-scan",[],null,null,null,E,O)),r.sb(1,49152,null,0,m,[u.Lb,f.a,u.b,C.a,a.k,h.a,p.a,S.m,c.a],null,null)],null,null)}var _=r.pb("page-scan",m,k,{},{},[]),R=e("gIcY"),P=e("Ip0R");e.d(t,"ScanPageModuleNgFactory",(function(){return w}));var w=r.qb(i,[],(function(n){return r.Cb([r.Db(512,r.j,r.bb,[[8,[o.a,_]],[3,r.j],r.x]),r.Db(4608,R.r,R.r,[]),r.Db(4608,P.l,P.k,[r.u,[2,P.A]]),r.Db(4608,u.c,u.c,[r.z,r.g]),r.Db(4608,u.Kb,u.Kb,[u.c,r.j,r.q]),r.Db(4608,u.Ob,u.Ob,[u.c,r.j,r.q]),r.Db(4608,a.g,a.f,[]),r.Db(4608,a.c,a.e,[]),r.Db(4608,a.i,a.d,[]),r.Db(4608,a.b,a.a,[]),r.Db(4608,a.k,a.k,[a.l,a.g,a.c,a.i,a.b,a.m,a.n]),r.Db(1073742336,S.n,S.n,[[2,S.t],[2,S.m]]),r.Db(1073742336,R.q,R.q,[]),r.Db(1073742336,R.h,R.h,[]),r.Db(1073742336,P.b,P.b,[]),r.Db(1073742336,u.Gb,u.Gb,[]),r.Db(1073742336,a.h,a.h,[]),r.Db(1073742336,i,i,[]),r.Db(1024,S.k,(function(){return[[{path:"",component:m}]]}),[]),r.Db(256,a.n,void 0,[]),r.Db(256,a.m,void 0,[])])}))},TDSW:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("mrSG"),i=e("hAUF"),o=e("ZOGp"),l=e("YsCg"),u=e("93YN"),a=function(){function n(n,t,e,r,i,o){this.modalCtrl=n,this.authProvider=t,this.navCtrl=e,this.router=r,this.translateService=i,this.nativeService=o}return n.prototype.doSelectCountry=function(){var n=this;return new Promise((function(t,e){return r.b(n,void 0,void 0,(function(){var n;return r.e(this,(function(r){switch(r.label){case 0:return[4,this.modalCtrl.create({component:u.a,componentProps:{isNeedAll:!0}})];case 1:return(n=r.sent()).onDidDismiss().then((function(n){t(n.data)})).catch((function(n){e(n)})),[4,n.present()];case 2:return r.sent(),[2]}}))}))}))},n.prototype.SendSecurityCode=function(n){var t=this;return new Promise((function(e,i){return r.b(t,void 0,void 0,(function(){return r.e(this,(function(t){return this.authProvider.SendSecurityCode2(n).subscribe((function(n){e("")}),(function(n){e(n)})),[2]}))}))}))},n.prototype.LoginByWFAccount=function(n){var t=this;return new Promise((function(e,i){return r.b(t,void 0,void 0,(function(){var t=this;return r.e(this,(function(r){return this.authProvider.LoginByWFAccount2(n).subscribe((function(n){t.setTabsToRoot()}),(function(n){e(n)})),[2]}))}))}))},n.prototype.Login=function(n){var t=this;return new Promise((function(e,i){return r.b(t,void 0,void 0,(function(){var t=this;return r.e(this,(function(r){return this.authProvider.Login2(n).subscribe((function(n){t.setTabsToRoot()}),(function(n){e(n)})),[2]}))}))}))},n.prototype.login=function(n,t,e,i){var o=this;return new Promise((function(e,i){return r.b(o,void 0,void 0,(function(){var i=this;return r.e(this,(function(r){switch(n){case l.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(t).subscribe((function(n){e("")}),(function(n){e(n)}));break;case l.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(t).subscribe((function(n){i.setTabsToRoot()}),(function(n){e(n)}));break;case l.j.LoginByMobileBefore:this.authProvider.Login2(t).subscribe((function(n){i.setTabsToRoot()}),(function(n){e(n)}))}return[2]}))}))}))},n.prototype.setTabsToRoot=function(){this.router.navigate([i.b.HomePage],{replaceUrl:!0})},n.prototype.verificationErrorHandle=function(n,t){return n.errcode===o.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():n.errcode===o.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(n)},n.prototype.loginError=function(n){var t="";switch(n.errcode){case o.a.USER.INACTIVE_USER:t="ACCOUNT_LOCKED";break;case o.a.USER.USER_NOT_EXIST:t="LOGIN_ERROR_USER_NOT_EXIST";break;case o.a.USER.MOBILE_NOT_EXIST:t="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case o.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case o.a.USER.INCORRECT_PASSWORD:t="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:t="LOGIN_ERROR"}this.nativeService.alert(n.errcode+","+this.translateService.instant(t))},n}()},mGGX:function(n,t,e){"use strict";var r=e("mrSG"),i=e("TDSW"),o=(e("wqKC"),e("93YN"),function(){function n(n,t){this.session=n,this.nativeService=t}return n.prototype.ionViewWillEnter=function(){this.session.isDarkMode||this.nativeService.setStyleLightContent()},n.prototype.ionViewWillLeave=function(){this.nativeService.statusBarStyle(this.session.isDarkMode)},n}());e.d(t,"i",(function(){return u})),e.d(t,"a",(function(){return a})),e.d(t,"e",(function(){return s})),e.d(t,"b",(function(){return c})),e.d(t,"f",(function(){return h})),e.d(t,"h",(function(){return f})),e.d(t,"g",(function(){return d})),e.d(t,"c",(function(){return p})),e.d(t,"d",(function(){return v}));var l=function(n){var t={},e=n.getCurrentNavigation().extras;return e&&e.state&&(t=e.state),t},u=function(n,t){var e=n||t.previousUrl;return t&&(e=t.previousUrl),e},a=function(){function n(n){this.events=n}return n.prototype.scrollWidth=function(n,t){return{width:n||window.screen.availWidth-5+"px",height:(t||44)+"px"}},n.prototype.completeRefresh=function(n){n&&n.target.complete()},n.prototype.completedoInfinite=function(n){n&&n.target.complete()},n}(),s=function(){return function(n,t){this.paramUrl=n,this.session=t,this.defaultUrl="",this.defaultUrl=u(n,this.session)}}(),c=function(){return function(n){this.router=n,this.params=l(n)}}(),b=function(n){function t(t,e){var r=n.call(this,e)||this;return r.router=t,r.events=e,r.params=l(t),r}return r.d(t,n),t}(a),h=function(n){function t(t,e,r){var i=n.call(this,e)||this;return i.paramUrl=t,i.events=e,i.session=r,i.defaultUrl="",i.defaultUrl=u(t,r),i}return r.d(t,n),t}(a),f=function(n){function t(t,e,r){var i=n.call(this,e,r)||this;return i.router=t,i.paramUrl=e,i.session=r,i.defaultUrl="",i.params=l(t),i}return r.d(t,n),t}(s),d=function(n){function t(t,e,r,i){var o=n.call(this,t,r)||this;return o.router=t,o.paramUrl=e,o.events=r,o.session=i,o.defaultUrl="",o.defaultUrl=u(e,o.session),o}return r.d(t,n),t}(b),p=function(n){function t(t,e,r,i){var o=n.call(this,t,e,r)||this;return o.router=t,o.session=e,o.nativeService=r,o.paramUrl=i,o.defaultUrl=u(i,e),o}return r.d(t,n),t}(function(n){function t(t,e,r){var i=n.call(this,e,r)||this;return i.router=t,i.session=e,i.nativeService=r,i.params=l(t),i}return r.d(t,n),t}(o)),v=function(n){function t(t,e,r,i,o,a,s,c){var b=n.call(this,t,e,r,i,o,a)||this;return b.router=t,b.modalCtrl=e,b.authProvider=r,b.navCtrl=i,b.translateService=o,b.nativeService=a,b.paramUrl=s,b.session=c,b.params=l(t),b.defaultUrl=u(s,c),b}return r.d(t,n),t}(function(n){function t(t,e,r,i,o,u){var a=n.call(this,e,r,i,t,o,u)||this;return a.router=t,a.modalCtrl=e,a.authProvider=r,a.navCtrl=i,a.translateService=o,a.nativeService=u,a.params=l(t),a}return r.d(t,n),t}(i.a))}}]);