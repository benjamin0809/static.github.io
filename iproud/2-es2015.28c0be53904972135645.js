(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{CSI6:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("VGsI"),r=n("8Y7J");n("/nCp");class s{constructor(t,e,n){this.formBuilder=t,this.authProvider=e,this.sanitizer=n,this.clientId="",this.errorString="",this.emitter=new r.m,this._buildForm()}ngOnInit(){this.getIdentifyCode()}_buildForm(){this.identifyForm=this.formBuilder.group({identifyCode:[""]})}inputChange(){this.errorString="";const t=i.a.trim(this.identifyForm.controls.identifyCode.value);this.emitter.emit({identifyCode:t})}getIdentifyCode(){this.clientId&&(this.clientId=this.clientId.trim(),this.authProvider.MessageCaptcha(this.clientId).subscribe(t=>{this.identifyCodeUrl=t.result.image&&-1===t.result.image.indexOf("data:image/jpeg;base64,")?this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpeg;base64,"+t.result.image):this.sanitizer.bypassSecurityTrustResourceUrl(t.result.image)},t=>{}))}refreshVerifyCode(){this.keywordInput.setFocus(),this.getIdentifyCode()}ngOnChanges(t){t.clientId&&!t.clientId.firstChange&&t.clientId.currentValue&&(this.clientId=t.clientId.currentValue,this.errorString="",this.getIdentifyCode()),t.errorString&&!t.errorString.firstChange&&t.errorString.currentValue&&(this.errorString=t.errorString.currentValue,this.errorString&&(this.errorString=this.errorString.split(";")[0]),this.getIdentifyCode())}}},Eggt:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("mrSG"),r=n("mGGX"),s=n("o0su"),l=n("U7T7");class o extends r.d{constructor(t,e,n,i,r,s,o,u,a,c,h,d,g,b,v){super(t,e,n,i,s,o,v,u),this.router=t,this.modalCtrl=e,this.authProvider=n,this.navCtrl=i,this.toastCtrl=r,this.translateService=s,this.nativeService=o,this.session=u,this.storageService=a,this.countryProvider=c,this.eventsService=h,this.cacheProvider=d,this.userProvider=g,this.COUNTDOWN_KEY=b,this.paramUrl=v,this.account={country:"+86",mobilephone:"",verifyCode:""},this.identityCode="",this.errorString="",this.fromWechatLogin=!1,this.fromAppleLogin=!1,this.verifyButtonEnabled=!1,this.switch=!1,this.eventsService.on(l.v.CountDown+this.COUNTDOWN_KEY,()=>{this._resetTime(60)}),this.cacheProvider.getCountDown(this.COUNTDOWN_KEY)>0&&this._resetTime(this.cacheProvider.getCountDown(this.COUNTDOWN_KEY))}ngOnInit(){this.fromWechatLogin=this.params.fromWechatLogin,this.fromAppleLogin=this.params.fromAppleLogin,this.storageService.getItem(l.e.Language).then(t=>{this.language=t})}_resetTime(t){const e=this;!function n(){e.verifyButtonText=t.toString()+" "+e.translateService.instant("APP_DATETIME_SECOND"),--t>=0?(setTimeout(n,1e3),e.cacheProvider.setCountDown(e.COUNTDOWN_KEY,t)):e.validateInput.call(e)}()}validateInput(){this.account.mobilephone?this.identityCode?(0===this.cacheProvider.getCountDown(this.COUNTDOWN_KEY)&&(this.verifyButtonEnabled=!0),this.switch=6===this.account.verifyCode.length):(0===this.cacheProvider.getCountDown(this.COUNTDOWN_KEY)&&(this.verifyButtonText=this.translateService.instant("SIGNUP_VERIFYCODE_TITLE")),this.verifyButtonEnabled=!1):(this.verifyButtonText=this.translateService.instant("MY_UPDATA_PHONE"),this.switch=!1,this.verifyButtonEnabled=!1)}doSelectCountry(){const t=Object.create(null,{doSelectCountry:{get:()=>super.doSelectCountry}});return i.b(this,void 0,void 0,(function*(){t.doSelectCountry.call(this).then(t=>{this.account.country="+"+t.number,this.storageService.setItem(l.s.Country,this.account.country)})}))}sendSecurityCodeBefore(){const t=Object.create(null,{SendSecurityCode:{get:()=>super.SendSecurityCode},verificationErrorHandle:{get:()=>super.verificationErrorHandle}});return i.b(this,void 0,void 0,(function*(){this.verifyButtonEnabled=!1;const e={mobilePhone:this.account.country+" "+s.a.clearAllSpaces(this.account.mobilephone),captcha:this.identityCode};t.SendSecurityCode.call(this,e).then(e=>{e?this.errorString=t.verificationErrorHandle.call(this,e):this._resetTime(60)})}))}receiveVal(t){t&&(this.identityCode=t.identifyCode,this.validateInput())}BindWechat(){this.session.unionId&&this.fromWechatLogin&&this.userProvider.BindWechatByUnionId(this.session.unionId).subscribe(t=>{}),this.session.appleUser&&this.fromAppleLogin&&this.userProvider.BindAppleId({email:"",state:"",identityToken:"",authorizationCode:"",fullName:{},user:this.session.appleUser}).subscribe(t=>{this.session.appleUser=null})}}},TDSW:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("mrSG"),r=n("hAUF"),s=n("ZOGp"),l=n("YsCg"),o=n("93YN");class u{constructor(t,e,n,i,r,s){this.modalCtrl=t,this.authProvider=e,this.navCtrl=n,this.router=i,this.translateService=r,this.nativeService=s}doSelectCountry(){return new Promise((t,e)=>i.b(this,void 0,void 0,(function*(){const n=yield this.modalCtrl.create({component:o.a,componentProps:{isNeedAll:!0}});n.onDidDismiss().then(e=>{t(e.data)}).catch(t=>{e(t)}),yield n.present()})))}SendSecurityCode(t){return new Promise((e,n)=>i.b(this,void 0,void 0,(function*(){this.authProvider.SendSecurityCode2(t).subscribe(t=>{e("")},t=>{e(t)})})))}LoginByWFAccount(t){return new Promise((e,n)=>i.b(this,void 0,void 0,(function*(){this.authProvider.LoginByWFAccount2(t).subscribe(t=>{this.setTabsToRoot()},t=>{e(t)})})))}Login(t){return new Promise((e,n)=>i.b(this,void 0,void 0,(function*(){this.authProvider.Login2(t).subscribe(t=>{this.setTabsToRoot()},t=>{e(t)})})))}login(t,e,n,r){return new Promise((n,r)=>i.b(this,void 0,void 0,(function*(){switch(t){case l.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(e).subscribe(t=>{n("")},t=>{n(t)});break;case l.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(e).subscribe(t=>{this.setTabsToRoot()},t=>{n(t)});break;case l.j.LoginByMobileBefore:this.authProvider.Login2(e).subscribe(t=>{this.setTabsToRoot()},t=>{n(t)})}})))}setTabsToRoot(){this.router.navigate([r.b.HomePage],{replaceUrl:!0})}verificationErrorHandle(t,e){return t.errcode===s.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():t.errcode===s.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(t)}loginError(t){let e="";switch(t.errcode){case s.a.USER.INACTIVE_USER:e="ACCOUNT_LOCKED";break;case s.a.USER.USER_NOT_EXIST:e="LOGIN_ERROR_USER_NOT_EXIST";break;case s.a.USER.MOBILE_NOT_EXIST:e="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case s.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case s.a.USER.INCORRECT_PASSWORD:e="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:e="LOGIN_ERROR"}this.nativeService.alert(t.errcode+","+this.translateService.instant(e))}}},kgVa:function(t,e,n){"use strict";var i=n("8Y7J"),r=n("oBZk"),s=n("ZZ/e"),l=n("s7LF"),o=n("SVse"),u=n("TSSN");n("CSI6"),n("/nCp"),n("cUpR"),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return g}));var a=i.pb({encapsulation:0,styles:[[".img-row[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;border-bottom:var(--border-primary)}.identify-code[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content;text-align:left;padding-left:8px}.identify-code[_ngcontent-%COMP%]   .error-code[_ngcontent-%COMP%]{color:red;margin:0}.identify-code[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin:8px 0}ion-input[_ngcontent-%COMP%]{width:0;font-size:1.5rem!important;letter-spacing:1px}.verification-img[_ngcontent-%COMP%]{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-right:8px}.verification-img[_ngcontent-%COMP%]   .loading-img[_ngcontent-%COMP%]{height:40px}img[_ngcontent-%COMP%]{min-height:24px;max-width:18vw;min-width:16vw}@-webkit-keyframes show{from{height:0}to{height:46px}}@keyframes show{from{height:0}to{height:46px}}"]],data:{}});function c(t){return i.Lb(0,[(t()(),i.rb(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(t,e){t(e,0,0,e.component.identifyCodeUrl)}))}function h(t){return i.Lb(0,[(t()(),i.rb(0,0,null,null,0,"img",[["class","loading-img"],["src","assets/svg/loading.svg"]],null,null,null,null,null))],null,null)}function d(t){return i.Lb(0,[(t()(),i.rb(0,0,null,null,2,"ion-text",[["color","danger"]],null,null,null,r.cc,r.Y)),i.qb(1,49152,null,0,s.zb,[i.h,i.k,i.x],{color:[0,"color"]},null),(t()(),i.Jb(2,0,["",""]))],(function(t,e){t(e,1,0,"danger")}),(function(t,e){t(e,2,0,e.component.errorString)}))}function g(t){return i.Lb(0,[i.Hb(671088640,1,{keywordInput:0}),(t()(),i.rb(1,0,null,null,24,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(t,e,n){var r=!0;return"submit"===e&&(r=!1!==i.Db(t,3).onSubmit(n)&&r),"reset"===e&&(r=!1!==i.Db(t,3).onReset()&&r),r}),null,null)),i.qb(2,16384,null,0,l.t,[],null,null),i.qb(3,540672,null,0,l.g,[[8,null],[8,null]],{form:[0,"form"]},null),i.Gb(2048,null,l.b,null,[l.g]),i.qb(5,16384,null,0,l.l,[[4,l.b]],null,null),(t()(),i.rb(6,0,null,null,19,"ion-grid",[],null,null,null,r.vb,r.r)),i.qb(7,49152,null,0,s.C,[i.h,i.k,i.x],null,null),(t()(),i.rb(8,0,null,0,17,"div",[["class","img-row border-bottom "]],null,null,null,null,null)),(t()(),i.rb(9,0,null,null,4,"div",[["class","verification-img ion-text-left"]],null,[[null,"click"]],(function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.refreshVerifyCode()&&i),i}),null,null)),(t()(),i.gb(16777216,null,null,1,null,c)),i.qb(11,16384,null,0,o.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(t()(),i.gb(16777216,null,null,1,null,h)),i.qb(13,16384,null,0,o.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(t()(),i.rb(14,0,null,null,7,"ion-input",[["formControlName","identifyCode"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],(function(t,e,n){var r=!0,s=t.component;return"ionBlur"===e&&(r=!1!==i.Db(t,17)._handleBlurEvent(n.target)&&r),"ionChange"===e&&(r=!1!==i.Db(t,17)._handleInputEvent(n.target)&&r),"ionChange"===e&&(r=!1!==s.inputChange()&&r),r}),r.Bb,r.x)),i.qb(15,49152,[[1,4],["keyword",4]],0,s.I,[i.h,i.k,i.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),i.Eb(131072,u.j,[u.k,i.h]),i.qb(17,16384,null,0,s.Rb,[i.k],null,null),i.Gb(1024,null,l.i,(function(t){return[t]}),[s.Rb]),i.qb(19,671744,null,0,l.f,[[3,l.b],[8,null],[8,null],[6,l.i],[2,l.s]],{name:[0,"name"]},null),i.Gb(2048,null,l.j,null,[l.f]),i.qb(21,16384,null,0,l.k,[[4,l.j]],null,null),(t()(),i.rb(22,0,null,null,3,"div",[["class","identify-code "]],null,null,null,null,null)),(t()(),i.rb(23,0,null,null,2,"p",[],null,null,null,null,null)),(t()(),i.gb(16777216,null,null,1,null,d)),i.qb(25,16384,null,0,o.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null)],(function(t,e){var n=e.component;t(e,3,0,n.identifyForm),t(e,11,0,n.identifyCodeUrl),t(e,13,0,!n.identifyCodeUrl),t(e,15,0,i.vb(1,"",i.Kb(e,15,0,i.Db(e,16).transform("SIGNUP_IDENTIFY_PLACEHOLDER")),""),"text"),t(e,19,0,"identifyCode"),t(e,25,0,n.errorString)}),(function(t,e){t(e,1,0,i.Db(e,5).ngClassUntouched,i.Db(e,5).ngClassTouched,i.Db(e,5).ngClassPristine,i.Db(e,5).ngClassDirty,i.Db(e,5).ngClassValid,i.Db(e,5).ngClassInvalid,i.Db(e,5).ngClassPending),t(e,14,0,i.Db(e,21).ngClassUntouched,i.Db(e,21).ngClassTouched,i.Db(e,21).ngClassPristine,i.Db(e,21).ngClassDirty,i.Db(e,21).ngClassValid,i.Db(e,21).ngClassInvalid,i.Db(e,21).ngClassPending)}))}},mGGX:function(t,e,n){"use strict";var i=n("TDSW");n("mrSG"),n("wqKC"),n("93YN");class r{constructor(t,e){this.session=t,this.nativeService=e}ionViewWillEnter(){this.session.isDarkMode||this.nativeService.setStyleLightContent()}ionViewWillLeave(){this.nativeService.statusBarStyle(this.session.isDarkMode)}}n.d(e,"i",(function(){return l})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return a})),n.d(e,"f",(function(){return h})),n.d(e,"h",(function(){return d})),n.d(e,"g",(function(){return g})),n.d(e,"c",(function(){return v})),n.d(e,"d",(function(){return C}));const s=t=>{let e={};const n=t.getCurrentNavigation().extras;return n&&n.state&&(e=n.state),e},l=(t,e)=>{let n=t||e.previousUrl;return e&&(n=e.previousUrl),n};class o{constructor(t){this.events=t}scrollWidth(t,e){return{width:t||window.screen.availWidth-5+"px",height:(e||44)+"px"}}completeRefresh(t){t&&t.target.complete()}completedoInfinite(t){t&&t.target.complete()}}class u{constructor(t,e){this.paramUrl=t,this.session=e,this.defaultUrl="",this.defaultUrl=l(t,this.session)}}class a{constructor(t){this.router=t,this.params=s(t)}}class c extends o{constructor(t,e){super(e),this.router=t,this.events=e,this.params=s(t)}}class h extends o{constructor(t,e,n){super(e),this.paramUrl=t,this.events=e,this.session=n,this.defaultUrl="",this.defaultUrl=l(t,n)}}class d extends u{constructor(t,e,n){super(e,n),this.router=t,this.paramUrl=e,this.session=n,this.defaultUrl="",this.params=s(t)}}class g extends c{constructor(t,e,n,i){super(t,n),this.router=t,this.paramUrl=e,this.events=n,this.session=i,this.defaultUrl="",this.defaultUrl=l(e,this.session)}}class b extends r{constructor(t,e,n){super(e,n),this.router=t,this.session=e,this.nativeService=n,this.params=s(t)}}class v extends b{constructor(t,e,n,i){super(t,e,n),this.router=t,this.session=e,this.nativeService=n,this.paramUrl=i,this.defaultUrl=l(i,e)}}class f extends i.a{constructor(t,e,n,i,r,l){super(e,n,i,t,r,l),this.router=t,this.modalCtrl=e,this.authProvider=n,this.navCtrl=i,this.translateService=r,this.nativeService=l,this.params=s(t)}}class C extends f{constructor(t,e,n,i,r,o,u,a){super(t,e,n,i,r,o),this.router=t,this.modalCtrl=e,this.authProvider=n,this.navCtrl=i,this.translateService=r,this.nativeService=o,this.paramUrl=u,this.session=a,this.params=s(t),this.defaultUrl=l(u,a)}}}}]);