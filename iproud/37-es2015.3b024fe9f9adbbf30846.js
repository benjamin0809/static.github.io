(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{TDSW:function(n,l,t){"use strict";t.d(l,"a",(function(){return o}));var e=t("mrSG"),r=t("hAUF"),i=t("ZOGp"),s=t("YsCg"),u=t("93YN");class o{constructor(n,l,t,e,r,i){this.modalCtrl=n,this.authProvider=l,this.navCtrl=t,this.router=e,this.translateService=r,this.nativeService=i}doSelectCountry(){return new Promise((n,l)=>e.b(this,void 0,void 0,(function*(){const t=yield this.modalCtrl.create({component:u.a,componentProps:{isNeedAll:!0}});t.onDidDismiss().then(l=>{n(l.data)}).catch(n=>{l(n)}),yield t.present()})))}SendSecurityCode(n){return new Promise((l,t)=>e.b(this,void 0,void 0,(function*(){this.authProvider.SendSecurityCode2(n).subscribe(n=>{l("")},n=>{l(n)})})))}LoginByWFAccount(n){return new Promise((l,t)=>e.b(this,void 0,void 0,(function*(){this.authProvider.LoginByWFAccount2(n).subscribe(n=>{this.setTabsToRoot()},n=>{l(n)})})))}Login(n){return new Promise((l,t)=>e.b(this,void 0,void 0,(function*(){this.authProvider.Login2(n).subscribe(n=>{this.setTabsToRoot()},n=>{l(n)})})))}login(n,l,t,r){return new Promise((t,r)=>e.b(this,void 0,void 0,(function*(){switch(n){case s.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(l).subscribe(n=>{t("")},n=>{t(n)});break;case s.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(l).subscribe(n=>{this.setTabsToRoot()},n=>{t(n)});break;case s.j.LoginByMobileBefore:this.authProvider.Login2(l).subscribe(n=>{this.setTabsToRoot()},n=>{t(n)})}})))}setTabsToRoot(){this.router.navigate([r.b.HomePage],{replaceUrl:!0})}verificationErrorHandle(n,l){return n.errcode===i.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():n.errcode===i.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(n)}loginError(n){let l="";switch(n.errcode){case i.a.USER.INACTIVE_USER:l="ACCOUNT_LOCKED";break;case i.a.USER.USER_NOT_EXIST:l="LOGIN_ERROR_USER_NOT_EXIST";break;case i.a.USER.MOBILE_NOT_EXIST:l="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case i.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case i.a.USER.INCORRECT_PASSWORD:l="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:l="LOGIN_ERROR"}this.nativeService.alert(n.errcode+","+this.translateService.instant(l))}}},mGGX:function(n,l,t){"use strict";var e=t("TDSW");t("mrSG"),t("wqKC"),t("93YN");class r{constructor(n,l){this.session=n,this.nativeService=l}ionViewWillEnter(){this.session.isDarkMode||this.nativeService.setStyleLightContent()}ionViewWillLeave(){this.nativeService.statusBarStyle(this.session.isDarkMode)}}t.d(l,"i",(function(){return s})),t.d(l,"a",(function(){return u})),t.d(l,"e",(function(){return o})),t.d(l,"b",(function(){return a})),t.d(l,"f",(function(){return b})),t.d(l,"h",(function(){return h})),t.d(l,"g",(function(){return d})),t.d(l,"c",(function(){return f})),t.d(l,"d",(function(){return v}));const i=n=>{let l={};const t=n.getCurrentNavigation().extras;return t&&t.state&&(l=t.state),l},s=(n,l)=>{let t=n||l.previousUrl;return l&&(t=l.previousUrl),t};class u{constructor(n){this.events=n}scrollWidth(n,l){return{width:n||window.screen.availWidth-5+"px",height:(l||44)+"px"}}completeRefresh(n){n&&n.target.complete()}completedoInfinite(n){n&&n.target.complete()}}class o{constructor(n,l){this.paramUrl=n,this.session=l,this.defaultUrl="",this.defaultUrl=s(n,this.session)}}class a{constructor(n){this.router=n,this.params=i(n)}}class c extends u{constructor(n,l){super(l),this.router=n,this.events=l,this.params=i(n)}}class b extends u{constructor(n,l,t){super(l),this.paramUrl=n,this.events=l,this.session=t,this.defaultUrl="",this.defaultUrl=s(n,t)}}class h extends o{constructor(n,l,t){super(l,t),this.router=n,this.paramUrl=l,this.session=t,this.defaultUrl="",this.params=i(n)}}class d extends c{constructor(n,l,t,e){super(n,t),this.router=n,this.paramUrl=l,this.events=t,this.session=e,this.defaultUrl="",this.defaultUrl=s(l,this.session)}}class p extends r{constructor(n,l,t){super(l,t),this.router=n,this.session=l,this.nativeService=t,this.params=i(n)}}class f extends p{constructor(n,l,t,e){super(n,l,t),this.router=n,this.session=l,this.nativeService=t,this.paramUrl=e,this.defaultUrl=s(e,l)}}class m extends e.a{constructor(n,l,t,e,r,s){super(l,t,e,n,r,s),this.router=n,this.modalCtrl=l,this.authProvider=t,this.navCtrl=e,this.translateService=r,this.nativeService=s,this.params=i(n)}}class v extends m{constructor(n,l,t,e,r,u,o,a){super(n,l,t,e,r,u),this.router=n,this.modalCtrl=l,this.authProvider=t,this.navCtrl=e,this.translateService=r,this.nativeService=u,this.paramUrl=o,this.session=a,this.params=i(n),this.defaultUrl=s(o,a)}}},zB5F:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class r{}var i=t("pMnS"),s=t("oBZk"),u=t("ZZ/e"),o=t("TSSN"),a=t("SVse"),c=t("mrSG"),b=t("VvKu"),h=t("IfSK"),d=t("Pn9U"),p=(t("Q1LM"),t("o0su"),t("riPR")),f=t("hAUF"),m=t("mGGX");class v extends m.e{constructor(n,l,t,e,r,i,s,u,o,a,c,h){super(f.b.MyPage,i),this.navCtrl=n,this.modalCtrl=l,this.actionSheetCtrl=t,this.nativeService=e,this.userProvider=r,this.session=i,this.translateService=s,this.eventsService=u,this.camera=o,this.preload=a,this.router=c,this.cdf=h,this.fromLibraryText="From Photo Library",this.fromCameraText="Take Photo",this.cancelText="Cancel",this.str="Fih123456",null!=this.session.user&&(this.currentUser=this.session.user,this.currentUser.scanCode="assets/img/code.png"),this.translateService.get(["MY_INFO_FROM_LIBRARY","MY_INFO_FROM_CAMERA","MY_INFO_CANCEL"]).subscribe(n=>{this.fromLibraryText=n.MY_INFO_FROM_LIBRARY,this.fromCameraText=n.MY_INFO_FROM_CAMERA,this.cancelText=n.MY_INFO_CANCEL}),u.on(b.s.InfoChanged,n=>{this.currentUser=this.session.user,this.cdf.destroyed||this.cdf.detectChanges()})}processWebImage(n){const l=n.target.files;for(const t of l){const n=new FileReader;n.onload=n=>{this.getPictureSuccess(n.target.result)},n.readAsDataURL(t)}}uploadAvatar(){return c.b(this,void 0,void 0,(function*(){const n=yield this.actionSheetCtrl.create({buttons:[{text:this.translateService.instant("MY_INFO_VIEW_FULL_AVATAR"),handler:()=>{this.preload.previewImage({pictures:[{pictureUrl:this.currentUser.pictureUrl}]})}},{text:this.fromLibraryText,handler:()=>{this.nativeService.isMobile()?this.nativeService.getPictureByPhotoLibrary({destinationType:0}).subscribe(n=>{this.getPictureSuccess(n)}):this.fileInput.nativeElement.click()}},{text:this.cancelText,role:"cancel"}]});yield n.present()}))}getPictureSuccess(n){this.userProvider.uploadAvatar(n)}openNick(){this.router.navigate([f.a.updataNickNamePage],{state:this.currentUser})}openPhone(){this.router.navigate([f.a.updataPhonePage])}openSignature(){this.router.navigate(["UpdateSignaturePage"])}openScancode(){this.router.navigate(["MycodePage"])}goBindEmployee(){this.router.navigate([f.a.EmployeeIdentityPage])}goChangePassword(){this.router.navigate([f.a.ChangePasswordPage])}goSetPassword(){this.router.navigate([f.a.SetPasswordPage])}}var g=t("6m4Z"),S=t("GAO8"),k=t("ZwiA"),E=t("iInd"),_=e.pb({encapsulation:0,styles:[["ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%!important;overflow:hidden;width:64px!important;height:64px!important}.note-ios[_ngcontent-%COMP%]{max-width:60%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}ion-back-button[_ngcontent-%COMP%]{--color:#999}.info-badge[_ngcontent-%COMP%]{--background:transparent;color:var(--text-secondary-color)}ion-avatar[_ngcontent-%COMP%]{--border-radius:50%!important;width:100%!important;height:100%!important;max-width:64px!important;max-height:64px!important}"]],data:{}});function C(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,3,"ion-button",[["color","primary"],["expand","block"],["shape","round"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goBindEmployee()&&e),e}),s.ib,s.e)),e.qb(1,49152,null,0,u.m,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(n()(),e.Jb(2,0,[" "," "])),e.Eb(131072,o.j,[o.k,e.h])],(function(n,l){n(l,1,0,"primary","block","round")}),(function(n,l){n(l,2,0,e.Kb(l,2,0,e.Db(l,3).transform("MY_INFO_BIND_EMPLOYEE")))}))}function I(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,3,"ion-button",[["color","medium"],["expand","block"],["shape","round"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goSetPassword()&&e),e}),s.ib,s.e)),e.qb(1,49152,null,0,u.m,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(n()(),e.Jb(2,0,[" "," "])),e.Eb(131072,o.j,[o.k,e.h])],(function(n,l){n(l,1,0,"medium","block","round")}),(function(n,l){n(l,2,0,e.Kb(l,2,0,e.Db(l,3).transform("MY_INFO_SET_PASSWORD")))}))}function x(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,3,"ion-button",[["color","primary"],["expand","block"],["shape","round"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goBindEmployee()&&e),e}),s.ib,s.e)),e.qb(1,49152,null,0,u.m,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(n()(),e.Jb(2,0,[" "," "])),e.Eb(131072,o.j,[o.k,e.h])],(function(n,l){n(l,1,0,"primary","block","round")}),(function(n,l){n(l,2,0,e.Kb(l,2,0,e.Db(l,3).transform("MY_INFO_SHOW_EMPLOYEE")))}))}function O(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,3,"ion-button",[["color","medium"],["expand","block"],["shape","round"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goChangePassword()&&e),e}),s.ib,s.e)),e.qb(1,49152,null,0,u.m,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(n()(),e.Jb(2,0,[" "," "])),e.Eb(131072,o.j,[o.k,e.h])],(function(n,l){n(l,1,0,"medium","block","round")}),(function(n,l){n(l,2,0,e.Kb(l,2,0,e.Db(l,3).transform("MY_INFO_CHANGE_PASSWORD")))}))}function P(n){return e.Lb(0,[e.Hb(671088640,1,{fileInput:0}),(n()(),e.rb(1,0,null,null,12,"ion-header",[],null,null,null,s.wb,s.s)),e.qb(2,49152,null,0,u.D,[e.h,e.k,e.x],null,null),(n()(),e.rb(3,0,null,0,10,"ion-toolbar",[],null,null,null,s.hc,s.db)),e.qb(4,49152,null,0,u.Eb,[e.h,e.k,e.x],null,null),(n()(),e.rb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.jb,s.f)),e.qb(6,49152,null,0,u.n,[e.h,e.k,e.x],null,null),(n()(),e.rb(7,0,null,0,2,"ion-back-button",[["color","#999"],["text",""]],null,[[null,"click"]],(function(n,l,t){var r=!0;return"click"===l&&(r=!1!==e.Db(n,9).onClick(t)&&r),r}),s.gb,s.c)),e.qb(8,49152,null,0,u.i,[e.h,e.k,e.x],{color:[0,"color"],defaultHref:[1,"defaultHref"],text:[2,"text"]},null),e.qb(9,16384,null,0,u.j,[[2,u.kb],u.Lb],{defaultHref:[0,"defaultHref"]},null),(n()(),e.rb(10,0,null,0,3,"ion-title",[],null,null,null,s.fc,s.bb)),e.qb(11,49152,null,0,u.Cb,[e.h,e.k,e.x],null,null),(n()(),e.Jb(12,0,["",""])),e.Eb(131072,o.j,[o.k,e.h]),(n()(),e.rb(14,0,null,null,46,"ion-content",[],null,null,null,s.rb,s.n)),e.qb(15,49152,null,0,u.w,[e.h,e.k,e.x],null,null),(n()(),e.rb(16,0,null,0,35,"ion-list",[["class","item-list"]],null,null,null,s.Ib,s.D)),e.qb(17,49152,null,0,u.Q,[e.h,e.k,e.x],null,null),(n()(),e.rb(18,0,[[1,0],["fileInput",1]],0,0,"input",[["name","files[]"],["style","visibility: hidden; height: 0px;position: absolute;"],["type","file"]],null,[[null,"change"]],(function(n,l,t){var e=!0;return"change"===l&&(e=!1!==n.component.processWebImage(t)&&e),e}),null,null)),(n()(),e.rb(19,0,null,0,8,"ion-item",[["button","true"],["class","ion-align-items-center"],["detail",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.uploadAvatar()&&e),e}),s.Fb,s.y)),e.qb(20,49152,null,0,u.J,[e.h,e.k,e.x],{button:[0,"button"],detail:[1,"detail"]},null),(n()(),e.rb(21,0,null,0,2,"ion-avatar",[["slot","end"]],null,null,null,s.fb,s.b)),e.qb(22,49152,null,0,u.h,[e.h,e.k,e.x],null,null),(n()(),e.rb(23,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),e.rb(24,0,null,0,3,"ion-label",[],null,null,null,s.Gb,s.C)),e.qb(25,49152,null,0,u.P,[e.h,e.k,e.x],null,null),(n()(),e.Jb(26,0,[" "," "])),e.Eb(131072,o.j,[o.k,e.h]),(n()(),e.rb(28,0,null,0,11,"ion-item",[["button","true"],["class","ion-align-items-center"],["detail",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openNick()&&e),e}),s.Fb,s.y)),e.qb(29,49152,null,0,u.J,[e.h,e.k,e.x],{button:[0,"button"],detail:[1,"detail"]},null),(n()(),e.rb(30,0,null,0,9,"ion-label",[],null,null,null,s.Gb,s.C)),e.qb(31,49152,null,0,u.P,[e.h,e.k,e.x],null,null),(n()(),e.rb(32,0,null,0,7,"div",[["class","label-inner"]],null,null,null,null,null)),(n()(),e.rb(33,0,null,null,2,"span",[["class","label-inner-content"]],null,null,null,null,null)),(n()(),e.Jb(34,null,[" "," "])),e.Eb(131072,o.j,[o.k,e.h]),(n()(),e.rb(36,0,null,null,3,"span",[["class","label-inner-note"]],null,null,null,null,null)),(n()(),e.rb(37,0,null,null,2,"ion-badge",[["class","info-badge"]],null,null,null,s.hb,s.d)),e.qb(38,49152,null,0,u.l,[e.h,e.k,e.x],null,null),(n()(),e.Jb(39,0,["",""])),(n()(),e.rb(40,0,null,0,11,"ion-item",[["button","true"],["class","ion-align-items-center"],["detail",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.openPhone()&&e),e}),s.Fb,s.y)),e.qb(41,49152,null,0,u.J,[e.h,e.k,e.x],{button:[0,"button"],detail:[1,"detail"]},null),(n()(),e.rb(42,0,null,0,9,"ion-label",[],null,null,null,s.Gb,s.C)),e.qb(43,49152,null,0,u.P,[e.h,e.k,e.x],null,null),(n()(),e.rb(44,0,null,0,7,"div",[["class","label-inner"]],null,null,null,null,null)),(n()(),e.rb(45,0,null,null,2,"span",[["class","label-inner-content"]],null,null,null,null,null)),(n()(),e.Jb(46,null,[" "," "])),e.Eb(131072,o.j,[o.k,e.h]),(n()(),e.rb(48,0,null,null,3,"span",[["class","label-inner-note"]],null,null,null,null,null)),(n()(),e.rb(49,0,null,null,2,"ion-badge",[["class","info-badge"]],null,null,null,s.hb,s.d)),e.qb(50,49152,null,0,u.l,[e.h,e.k,e.x],null,null),(n()(),e.Jb(51,0,["",""])),(n()(),e.rb(52,0,null,0,8,"div",[["class","ion-padding"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,C)),e.qb(54,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,I)),e.qb(56,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,x)),e.qb(58,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,O)),e.qb(60,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,8,0,"#999",t.defaultUrl,""),n(l,9,0,t.defaultUrl),n(l,20,0,"true",""),n(l,29,0,"true",""),n(l,41,0,"true",""),n(l,54,0,!t.currentUser.isEmployee),n(l,56,0,!t.currentUser.hasPassword),n(l,58,0,t.currentUser.isEmployee),n(l,60,0,t.currentUser.hasPassword)}),(function(n,l){var t=l.component;n(l,12,0,e.Kb(l,12,0,e.Db(l,13).transform("MY_INFO_TITLE"))),n(l,23,0,t.currentUser.pictureUrl),n(l,26,0,e.Kb(l,26,0,e.Db(l,27).transform("MY_INFO_AVATAR"))),n(l,34,0,e.Kb(l,34,0,e.Db(l,35).transform("MY_INFO_NICKNAME"))),n(l,39,0,t.currentUser.nickName),n(l,46,0,e.Kb(l,46,0,e.Db(l,47).transform("MY_INFO_USERNAME"))),n(l,51,0,t.currentUser.userName)}))}function R(n){return e.Lb(0,[(n()(),e.rb(0,0,null,null,1,"page-my-info",[],null,null,null,P,_)),e.qb(1,49152,null,0,v,[u.Lb,u.Kb,u.a,g.a,S.a,k.a,o.k,p.a,d.a,h.a,E.m,e.h],null,null)],null,null)}var N=e.nb("page-my-info",v,R,{},{},[]),U=t("s7LF"),T=t("j1ZV");t.d(l,"MyInfoPageModuleNgFactory",(function(){return y}));var y=e.ob(r,[],(function(n){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[i.a,N]],[3,e.j],e.v]),e.Bb(4608,U.r,U.r,[]),e.Bb(4608,a.l,a.k,[e.s,[2,a.A]]),e.Bb(4608,u.c,u.c,[e.x,e.g]),e.Bb(4608,u.Kb,u.Kb,[u.c,e.j,e.p]),e.Bb(4608,u.Ob,u.Ob,[u.c,e.j,e.p]),e.Bb(4608,U.d,U.d,[]),e.Bb(4608,o.g,o.f,[]),e.Bb(4608,o.c,o.e,[]),e.Bb(4608,o.i,o.d,[]),e.Bb(4608,o.b,o.a,[]),e.Bb(4608,o.k,o.k,[o.l,o.g,o.c,o.i,o.b,o.m,o.n]),e.Bb(5120,e.d,(function(n,l,t){return[u.Ub(n,l,t)]}),[u.Tb,a.c,e.x]),e.Bb(1073742336,E.n,E.n,[[2,E.t],[2,E.m]]),e.Bb(1073742336,o.h,o.h,[]),e.Bb(1073742336,U.q,U.q,[]),e.Bb(1073742336,U.h,U.h,[]),e.Bb(1073742336,a.b,a.b,[]),e.Bb(1073742336,u.Gb,u.Gb,[]),e.Bb(1073742336,U.o,U.o,[]),e.Bb(1073742336,T.a,T.a,[]),e.Bb(1073742336,r,r,[]),e.Bb(256,o.n,void 0,[]),e.Bb(256,o.m,void 0,[]),e.Bb(256,u.Tb,void 0,[]),e.Bb(1024,E.k,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);