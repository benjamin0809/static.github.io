(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{LnaK:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),i=function(){return function(){}}(),r=e("pMnS"),o=e("oBZk"),u=e("ZZ/e"),s=e("A7o+"),a=e("gIcY"),c=e("Ip0R"),b=e("mrSG"),h=e("mGGX"),g=e("yHx4"),f=e("vYBf"),d=e("sj5I"),v=e("U7T7"),p=e("TY44"),C=e("o0su"),m=(e("Q1LM"),e("riPR")),S=e("hAUF"),E=function(n){function t(t,e,l,i,r,o,u,s,a,c,b,h,g,f,d,p,C){var m=n.call(this,C,S.b.MyPage,a)||this;return m.navCtrl=t,m.settings=e,m.formBuilder=l,m.translate=i,m.storageService=r,m.userProvider=o,m.alertCtrl=u,m.eventsService=s,m.session=a,m.nativeService=c,m.cacheProvider=b,m.jpushService=h,m.widgetProvider=g,m.serverProvider=f,m.configProvider=d,m.activatedRoute=p,m.router=C,m.isThemeAvailable=!1,m.openWay=v.B.IFRAME,m.settingsReady=!1,m.isEmployee=!1,m.browserCore=!1,m.cacheSize=0,m.cacheString="",m.isAdmin=!1,m.isBeta=!1,m.languages=v.A,m.browserCoreKey="browserCore",m.openWays=[],m}return b.d(t,n),t.prototype.ngOnInit=function(){var n=this;this.isAdmin=this.params.isAdmin,this.isBeta=v.h,this.userId=this.params.userId,this.eventsService.on(v.m.ClearImage,(function(){n.cacheSize=0,n.cacheString=C.a.toCacheFormatString(n.cacheSize),console.log("this.cacheString",n.cacheString)})),this.initBrowserCore(),this.browserCoreKey=this.userId+this.browserCoreKey;for(var t=0,e=Object.keys(v.B);t<e.length;t++){var l=e[t];this.openWays.push({label:l,value:v.B[l]})}this.isThemeAvailable=this.nativeService.isIOS13(),this.form=this.formBuilder.group({}),this.settings.allSettings?(this.options=this.settings.allSettings,this.options.optionDebug=this.serverProvider.isDebug,this._buildForm(),this.settingsReady=!0):this.settings.load().then((function(){n.settingsReady=!0,n.options=n.settings.allSettings,n.options.optionDebug=n.serverProvider.isDebug,n._buildForm()})).catch((function(){n.settingsReady=!0,n.options={optionReceiveNotify:!0,optionLanguage:"en-US",optionShowFabButton:!0,optionTheme:!1,optionDebug:v.i,isCollectErrorInfo:!0},n._buildForm()})),this.storageService.getItem(v.C.DATA.CACHE_SIZE).then((function(t){t||(t=0),n.cacheSize=t,n.cacheString=C.a.toCacheFormatString(n.cacheSize)})),this.isEmployee=this.session.isEmployee},t.prototype._buildForm=function(){var n=this;this.form=this.formBuilder.group({optionDebug:[this.options.optionDebug],optionBrowser:[this.options.optionBrowser],optionShowFabButton:[this.options.optionShowFabButton],optionTheme:[this.options.optionTheme],optionReceiveNotify:[this.options.optionReceiveNotify],optionLanguage:[this.params.language||this.options.optionLanguage],isCollectErrorInfo:[this.options.isCollectErrorInfo]}),this.form.valueChanges.subscribe((function(t){n.settings.merge(n.form.value)})),this.form.controls.isCollectErrorInfo.valueChanges.subscribe((function(t){n.storageService.setItem("isCollectErrorInfo",t)})),this.form.controls.optionLanguage.valueChanges.subscribe((function(t){n.session.widget=null,n.configProvider.changeLanguage(t,!1),n.userProvider.getUserInfo()})),this.form.controls.optionShowFabButton.valueChanges.subscribe((function(t){n.eventsService.emit(v.x.Changed,t)})),this.form.controls.optionDebug.valueChanges.subscribe((function(t){var e;n.storageService.setItem("isdebug",t),e=n.translate.instant(t?"VERSION_EXCHANGE_TO_DEBUG":"VERSION_EXCHANGE_TO_RELEASE"),n.nativeService.showToast(e)})),this.form.controls.optionBrowser.valueChanges.subscribe((function(t){n.browserCore=t,n.widgetProvider.innerBrowser=t,n.storageService.setItem(n.session.userId+"openWay",n.openWay),n.storageService.setItem(n.browserCoreKey,t),n.eventsService.emit(v.x.ChangeBrowserOpenWay,t,n.openWay)})),this.form.controls.optionTheme.valueChanges.subscribe((function(t){n.session.isDarkMode=t,n.storageService.setItem(v.C.SETTING.OPTIONTHEME,t),n.eventsService.emit(v.x.ChangeTheme,t),clearTimeout(n.timer),n.timer=setTimeout((function(){n.userProvider.privateSetting([{name:"appTheme",value:C.a.getThemeName(t)}]).subscribe((function(n){}))}),3e3)}))},t.prototype.deleteCache=function(){return b.b(this,void 0,void 0,(function(){var n=this;return b.e(this,(function(t){switch(t.label){case 0:return[4,this.alertCtrl.create({header:this.translate.instant("SETTINGS_DELETE_CACHE"),message:this.translate.instant("SETTINGS_CACHE_INFO"),buttons:[{text:this.translate.instant("APP_COMMON_CANCEL"),role:"Cancel"},{text:this.translate.instant("APP_COMMON_CONFIRM"),handler:function(){n.storageService.setItem("HistorySearch",[]),n.storageService.setItem("touch-coords",""),n.storageService.setItem("isShowFabButton",""),n.cacheProvider.clearImageCache(),n.cacheSize=0,n.userProvider.clearMemberCache().subscribe((function(t){n.cacheString=C.a.toCacheFormatString(n.cacheSize),n.nativeService.alert(n.translate.instant("SETTINGS_CACHE_COMPLETE"))}),(function(n){console.error(n)}))}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}}))}))},t.prototype.changeOpenWay=function(n){this.openWay=n,this.storageService.setItem(this.session.userId+"openWay",this.openWay),this.eventsService.emit(v.x.ChangeBrowserOpenWay,this.browserCore,this.openWay)},t.prototype.initBrowserCore=function(){return b.b(this,void 0,void 0,(function(){var n,t;return b.e(this,(function(e){switch(e.label){case 0:return[4,this.storageService.getItem(this.session.userId+"openWay")];case 1:return n=e.sent(),[4,this.storageService.getItem(this.browserCoreKey)];case 2:return(t=e.sent())&&(this.browserCore=t),n&&(this.openWay=n),[2]}}))}))},t}(h.h),I=e("3cf9"),T=e("n90K"),F=e("GAO8"),y=e("ZwiA"),_=e("6m4Z"),O=e("athu"),R=e("ZYCi"),k=l.rb({encapsulation:0,styles:[[".advance-options[_ngcontent-%COMP%]{-webkit-transition:-webkit-transform .51s;transition:-webkit-transform .51s;transition:transform .51s;transition:transform .51s,-webkit-transform .51s}.advance-options-hidden[_ngcontent-%COMP%]{-webkit-transform:translateY(1500px)!important;transform:translateY(1500px)!important;display:none}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child{--inner-border-width:0;border-bottom:var(--border-primary)}"]],data:{}});function P(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,2,"ion-select-option",[],null,null,null,o.Tb,o.Q)),l.sb(1,49152,null,0,u.qb,[l.h,l.k,l.z],{value:[0,"value"]},null),(n()(),l.Lb(2,0,["",""]))],(function(n,t){n(t,1,0,l.xb(1,"",t.context.$implicit.value,""))}),(function(n,t){n(t,2,0,t.context.$implicit.name)}))}function D(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,12,"ion-item",[],null,null,null,o.Fb,o.y)),l.sb(1,49152,null,0,u.J,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,3,"ion-label",[],null,null,null,o.Gb,o.C)),l.sb(3,49152,null,0,u.P,[l.h,l.k,l.z],null,null),(n()(),l.Lb(4,0,["",""])),l.Gb(131072,s.j,[s.k,l.h]),(n()(),l.tb(6,0,null,0,6,"ion-toggle",[["formControlName","optionShowFabButton"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,t,e){var i=!0;return"ionBlur"===t&&(i=!1!==l.Fb(n,8)._handleBlurEvent(e.target)&&i),"ionChange"===t&&(i=!1!==l.Fb(n,8)._handleIonChange(e.target)&&i),i}),o.gc,o.cb)),l.sb(7,49152,null,0,u.Db,[l.h,l.k,l.z],null,null),l.sb(8,16384,null,0,u.d,[l.k],null,null),l.Ib(1024,null,a.i,(function(n){return[n]}),[u.d]),l.sb(10,671744,null,0,a.f,[[3,a.b],[8,null],[8,null],[6,a.i],[2,a.s]],{name:[0,"name"]},null),l.Ib(2048,null,a.j,null,[a.f]),l.sb(12,16384,null,0,a.k,[[4,a.j]],null,null)],(function(n,t){n(t,10,0,"optionShowFabButton")}),(function(n,t){n(t,4,0,l.Mb(t,4,0,l.Fb(t,5).transform("SETTINGS_ASSISTIVE_TOUCH"))),n(t,6,0,l.Fb(t,12).ngClassUntouched,l.Fb(t,12).ngClassTouched,l.Fb(t,12).ngClassPristine,l.Fb(t,12).ngClassDirty,l.Fb(t,12).ngClassValid,l.Fb(t,12).ngClassInvalid,l.Fb(t,12).ngClassPending)}))}function N(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,56,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,t,e){var i=!0;return"submit"===t&&(i=!1!==l.Fb(n,2).onSubmit(e)&&i),"reset"===t&&(i=!1!==l.Fb(n,2).onReset()&&i),i}),null,null)),l.sb(1,16384,null,0,a.t,[],null,null),l.sb(2,540672,null,0,a.g,[[8,null],[8,null]],{form:[0,"form"]},null),l.Ib(2048,null,a.b,null,[a.g]),l.sb(4,16384,null,0,a.l,[[4,a.b]],null,null),(n()(),l.tb(5,0,null,null,51,"ion-list",[],null,null,null,o.Ib,o.D)),l.sb(6,49152,null,0,u.Q,[l.h,l.k,l.z],null,null),(n()(),l.tb(7,0,null,0,16,"ion-item",[["lines","inset"]],null,null,null,o.Fb,o.y)),l.sb(8,49152,null,0,u.J,[l.h,l.k,l.z],{lines:[0,"lines"]},null),(n()(),l.tb(9,0,null,0,3,"ion-label",[],null,null,null,o.Gb,o.C)),l.sb(10,49152,null,0,u.P,[l.h,l.k,l.z],null,null),(n()(),l.Lb(11,0,["",""])),l.Gb(131072,s.j,[s.k,l.h]),(n()(),l.tb(13,0,null,0,10,"ion-select",[["formControlName","optionLanguage"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,t,e){var i=!0;return"ionBlur"===t&&(i=!1!==l.Fb(n,17)._handleBlurEvent(e.target)&&i),"ionChange"===t&&(i=!1!==l.Fb(n,17)._handleChangeEvent(e.target)&&i),i}),o.Ub,o.P)),l.sb(14,49152,null,0,u.pb,[l.h,l.k,l.z],{cancelText:[0,"cancelText"],okText:[1,"okText"]},null),l.Gb(131072,s.j,[s.k,l.h]),l.Gb(131072,s.j,[s.k,l.h]),l.sb(17,16384,null,0,u.Qb,[l.k],null,null),l.Ib(1024,null,a.i,(function(n){return[n]}),[u.Qb]),l.sb(19,671744,null,0,a.f,[[3,a.b],[8,null],[8,null],[6,a.i],[2,a.s]],{name:[0,"name"]},null),l.Ib(2048,null,a.j,null,[a.f]),l.sb(21,16384,null,0,a.k,[[4,a.j]],null,null),(n()(),l.ib(16777216,null,0,1,null,P)),l.sb(23,278528,null,0,c.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),(n()(),l.ib(16777216,null,0,1,null,D)),l.sb(25,16384,null,0,c.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.tb(26,0,null,0,12,"ion-item",[["lines","none"]],null,null,null,o.Fb,o.y)),l.sb(27,49152,null,0,u.J,[l.h,l.k,l.z],{lines:[0,"lines"]},null),(n()(),l.tb(28,0,null,0,3,"ion-label",[],null,null,null,o.Gb,o.C)),l.sb(29,49152,null,0,u.P,[l.h,l.k,l.z],null,null),(n()(),l.Lb(30,0,["",""])),l.Gb(131072,s.j,[s.k,l.h]),(n()(),l.tb(32,0,null,0,6,"ion-toggle",[["formControlName","optionTheme"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,t,e){var i=!0;return"ionBlur"===t&&(i=!1!==l.Fb(n,34)._handleBlurEvent(e.target)&&i),"ionChange"===t&&(i=!1!==l.Fb(n,34)._handleIonChange(e.target)&&i),i}),o.gc,o.cb)),l.sb(33,49152,null,0,u.Db,[l.h,l.k,l.z],null,null),l.sb(34,16384,null,0,u.d,[l.k],null,null),l.Ib(1024,null,a.i,(function(n){return[n]}),[u.d]),l.sb(36,671744,null,0,a.f,[[3,a.b],[8,null],[8,null],[6,a.i],[2,a.s]],{name:[0,"name"]},null),l.Ib(2048,null,a.j,null,[a.f]),l.sb(38,16384,null,0,a.k,[[4,a.j]],null,null),(n()(),l.tb(39,0,null,0,0,"div",[["class","divider"]],null,null,null,null,null)),(n()(),l.tb(40,0,null,0,12,"ion-item",[],null,null,null,o.Fb,o.y)),l.sb(41,49152,null,0,u.J,[l.h,l.k,l.z],null,null),(n()(),l.tb(42,0,null,0,3,"ion-label",[],null,null,null,o.Gb,o.C)),l.sb(43,49152,null,0,u.P,[l.h,l.k,l.z],null,null),(n()(),l.Lb(44,0,["",""])),l.Gb(131072,s.j,[s.k,l.h]),(n()(),l.tb(46,0,null,0,6,"ion-toggle",[["formControlName","isCollectErrorInfo"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,t,e){var i=!0;return"ionBlur"===t&&(i=!1!==l.Fb(n,48)._handleBlurEvent(e.target)&&i),"ionChange"===t&&(i=!1!==l.Fb(n,48)._handleIonChange(e.target)&&i),i}),o.gc,o.cb)),l.sb(47,49152,null,0,u.Db,[l.h,l.k,l.z],null,null),l.sb(48,16384,null,0,u.d,[l.k],null,null),l.Ib(1024,null,a.i,(function(n){return[n]}),[u.d]),l.sb(50,671744,null,0,a.f,[[3,a.b],[8,null],[8,null],[6,a.i],[2,a.s]],{name:[0,"name"]},null),l.Ib(2048,null,a.j,null,[a.f]),l.sb(52,16384,null,0,a.k,[[4,a.j]],null,null),(n()(),l.tb(53,0,null,0,3,"ion-item",[],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.deleteCache()&&l),l}),o.Fb,o.y)),l.sb(54,49152,null,0,u.J,[l.h,l.k,l.z],null,null),(n()(),l.Lb(55,0,[" ",""," "])),l.Gb(131072,s.j,[s.k,l.h])],(function(n,t){var e=t.component;n(t,2,0,e.form),n(t,8,0,"inset"),n(t,14,0,l.xb(1,"",l.Mb(t,14,0,l.Fb(t,15).transform("APP_COMMON_CANCEL")),""),l.xb(1,"",l.Mb(t,14,1,l.Fb(t,16).transform("APP_COMMON_CONFIRM")),"")),n(t,19,0,"optionLanguage"),n(t,23,0,e.languages),n(t,25,0,e.isEmployee),n(t,27,0,"none"),n(t,36,0,"optionTheme"),n(t,50,0,"isCollectErrorInfo")}),(function(n,t){var e=t.component;n(t,0,0,l.Fb(t,4).ngClassUntouched,l.Fb(t,4).ngClassTouched,l.Fb(t,4).ngClassPristine,l.Fb(t,4).ngClassDirty,l.Fb(t,4).ngClassValid,l.Fb(t,4).ngClassInvalid,l.Fb(t,4).ngClassPending),n(t,11,0,l.Mb(t,11,0,l.Fb(t,12).transform("SETTINGS_OPTION_LANGUAGE"))),n(t,13,0,l.Fb(t,21).ngClassUntouched,l.Fb(t,21).ngClassTouched,l.Fb(t,21).ngClassPristine,l.Fb(t,21).ngClassDirty,l.Fb(t,21).ngClassValid,l.Fb(t,21).ngClassInvalid,l.Fb(t,21).ngClassPending),n(t,30,0,l.Mb(t,30,0,l.Fb(t,31).transform("SETTINGS_DARK_THEME"))),n(t,32,0,l.Fb(t,38).ngClassUntouched,l.Fb(t,38).ngClassTouched,l.Fb(t,38).ngClassPristine,l.Fb(t,38).ngClassDirty,l.Fb(t,38).ngClassValid,l.Fb(t,38).ngClassInvalid,l.Fb(t,38).ngClassPending),n(t,44,0,l.Mb(t,44,0,l.Fb(t,45).transform("SETTINGS_SEND_ERROR_REPORT"))),n(t,46,0,l.Fb(t,52).ngClassUntouched,l.Fb(t,52).ngClassTouched,l.Fb(t,52).ngClassPristine,l.Fb(t,52).ngClassDirty,l.Fb(t,52).ngClassValid,l.Fb(t,52).ngClassInvalid,l.Fb(t,52).ngClassPending),n(t,55,0,l.Mb(t,55,0,l.Fb(t,56).transform("SETTINGS_DELETE_CACHE")),e.cacheString)}))}function w(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,12,"ion-header",[],null,null,null,o.wb,o.s)),l.sb(1,49152,null,0,u.D,[l.h,l.k,l.z],null,null),(n()(),l.tb(2,0,null,0,10,"ion-toolbar",[],null,null,null,o.hc,o.db)),l.sb(3,49152,null,0,u.Eb,[l.h,l.k,l.z],null,null),(n()(),l.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.jb,o.f)),l.sb(5,49152,null,0,u.n,[l.h,l.k,l.z],null,null),(n()(),l.tb(6,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],(function(n,t,e){var i=!0;return"click"===t&&(i=!1!==l.Fb(n,8).onClick(e)&&i),i}),o.gb,o.c)),l.sb(7,49152,null,0,u.i,[l.h,l.k,l.z],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),l.sb(8,16384,null,0,u.j,[[2,u.kb],u.Lb],{defaultHref:[0,"defaultHref"]},null),(n()(),l.tb(9,0,null,0,3,"ion-title",[],null,null,null,o.fc,o.bb)),l.sb(10,49152,null,0,u.Cb,[l.h,l.k,l.z],null,null),(n()(),l.Lb(11,0,["",""])),l.Gb(131072,s.j,[s.k,l.h]),(n()(),l.tb(13,0,null,null,3,"ion-content",[],null,null,null,o.rb,o.n)),l.sb(14,49152,null,0,u.w,[l.h,l.k,l.z],null,null),(n()(),l.ib(16777216,null,0,1,null,N)),l.sb(16,16384,null,0,c.j,[l.O,l.L],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,7,0,e.defaultUrl,""),n(t,8,0,e.defaultUrl),n(t,16,0,e.settingsReady)}),(function(n,t){n(t,11,0,l.Mb(t,11,0,l.Fb(t,12).transform("SETTINGS_TITLE")))}))}function A(n){return l.Nb(0,[(n()(),l.tb(0,0,null,null,1,"page-settings",[],null,null,null,w,k)),l.sb(1,114688,null,0,E,[u.Lb,I.a,a.d,s.k,T.a,F.a,u.b,m.a,y.a,_.a,p.a,O.a,d.a,f.a,g.a,R.a,R.m],null,null)],(function(n,t){n(t,1,0)}),null)}var B=l.pb("page-settings",E,A,{},{},[]),U=e("iTUp");e.d(t,"SettingsPageModuleNgFactory",(function(){return L}));var L=l.qb(i,[],(function(n){return l.Cb([l.Db(512,l.j,l.bb,[[8,[r.a,B]],[3,l.j],l.x]),l.Db(4608,c.l,c.k,[l.u,[2,c.A]]),l.Db(4608,u.c,u.c,[l.z,l.g]),l.Db(4608,u.Kb,u.Kb,[u.c,l.j,l.q]),l.Db(4608,u.Ob,u.Ob,[u.c,l.j,l.q]),l.Db(4608,a.r,a.r,[]),l.Db(4608,a.d,a.d,[]),l.Db(4608,s.g,s.f,[]),l.Db(4608,s.c,s.e,[]),l.Db(4608,s.i,s.d,[]),l.Db(4608,s.b,s.a,[]),l.Db(4608,s.k,s.k,[s.l,s.g,s.c,s.i,s.b,s.m,s.n]),l.Db(1073742336,c.b,c.b,[]),l.Db(1073742336,u.Gb,u.Gb,[]),l.Db(1073742336,R.n,R.n,[[2,R.t],[2,R.m]]),l.Db(1073742336,s.h,s.h,[]),l.Db(1073742336,a.q,a.q,[]),l.Db(1073742336,a.h,a.h,[]),l.Db(1073742336,a.o,a.o,[]),l.Db(1073742336,U.a,U.a,[]),l.Db(1073742336,i,i,[]),l.Db(1024,R.k,(function(){return[[{path:"",component:E}]]}),[]),l.Db(256,s.n,void 0,[]),l.Db(256,s.m,void 0,[])])}))},TDSW:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var l=e("mrSG"),i=e("hAUF"),r=e("ZOGp"),o=e("YsCg"),u=e("93YN"),s=function(){function n(n,t,e,l,i,r){this.modalCtrl=n,this.authProvider=t,this.navCtrl=e,this.router=l,this.translateService=i,this.nativeService=r}return n.prototype.doSelectCountry=function(){var n=this;return new Promise((function(t,e){return l.b(n,void 0,void 0,(function(){var n;return l.e(this,(function(l){switch(l.label){case 0:return[4,this.modalCtrl.create({component:u.a,componentProps:{isNeedAll:!0}})];case 1:return(n=l.sent()).onDidDismiss().then((function(n){t(n.data)})).catch((function(n){e(n)})),[4,n.present()];case 2:return l.sent(),[2]}}))}))}))},n.prototype.SendSecurityCode=function(n){var t=this;return new Promise((function(e,i){return l.b(t,void 0,void 0,(function(){return l.e(this,(function(t){return this.authProvider.SendSecurityCode2(n).subscribe((function(n){e("")}),(function(n){e(n)})),[2]}))}))}))},n.prototype.LoginByWFAccount=function(n){var t=this;return new Promise((function(e,i){return l.b(t,void 0,void 0,(function(){var t=this;return l.e(this,(function(l){return this.authProvider.LoginByWFAccount2(n).subscribe((function(n){t.setTabsToRoot()}),(function(n){e(n)})),[2]}))}))}))},n.prototype.Login=function(n){var t=this;return new Promise((function(e,i){return l.b(t,void 0,void 0,(function(){var t=this;return l.e(this,(function(l){return this.authProvider.Login2(n).subscribe((function(n){t.setTabsToRoot()}),(function(n){e(n)})),[2]}))}))}))},n.prototype.login=function(n,t,e,i){var r=this;return new Promise((function(e,i){return l.b(r,void 0,void 0,(function(){var i=this;return l.e(this,(function(l){switch(n){case o.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(t).subscribe((function(n){e("")}),(function(n){e(n)}));break;case o.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(t).subscribe((function(n){i.setTabsToRoot()}),(function(n){e(n)}));break;case o.j.LoginByMobileBefore:this.authProvider.Login2(t).subscribe((function(n){i.setTabsToRoot()}),(function(n){e(n)}))}return[2]}))}))}))},n.prototype.setTabsToRoot=function(){this.router.navigate([i.b.HomePage],{replaceUrl:!0})},n.prototype.verificationErrorHandle=function(n,t){return n.errcode===r.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():n.errcode===r.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(n)},n.prototype.loginError=function(n){var t="";switch(n.errcode){case r.a.USER.INACTIVE_USER:t="ACCOUNT_LOCKED";break;case r.a.USER.USER_NOT_EXIST:t="LOGIN_ERROR_USER_NOT_EXIST";break;case r.a.USER.MOBILE_NOT_EXIST:t="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case r.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case r.a.USER.INCORRECT_PASSWORD:t="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:t="LOGIN_ERROR"}this.nativeService.alert(n.errcode+","+this.translateService.instant(t))},n}()},mGGX:function(n,t,e){"use strict";var l=e("mrSG"),i=e("TDSW"),r=(e("wqKC"),e("93YN"),function(){function n(n,t){this.session=n,this.nativeService=t}return n.prototype.ionViewWillEnter=function(){this.session.isDarkMode||this.nativeService.setStyleLightContent()},n.prototype.ionViewWillLeave=function(){this.nativeService.statusBarStyle(this.session.isDarkMode)},n}());e.d(t,"i",(function(){return u})),e.d(t,"a",(function(){return s})),e.d(t,"e",(function(){return a})),e.d(t,"b",(function(){return c})),e.d(t,"f",(function(){return h})),e.d(t,"h",(function(){return g})),e.d(t,"g",(function(){return f})),e.d(t,"c",(function(){return d})),e.d(t,"d",(function(){return v}));var o=function(n){var t={},e=n.getCurrentNavigation().extras;return e&&e.state&&(t=e.state),t},u=function(n,t){var e=n||t.previousUrl;return t&&(e=t.previousUrl),e},s=function(){function n(n){this.events=n}return n.prototype.scrollWidth=function(n,t){return{width:n||window.screen.availWidth-5+"px",height:(t||44)+"px"}},n.prototype.completeRefresh=function(n){n&&n.target.complete()},n.prototype.completedoInfinite=function(n){n&&n.target.complete()},n}(),a=function(){return function(n,t){this.paramUrl=n,this.session=t,this.defaultUrl="",this.defaultUrl=u(n,this.session)}}(),c=function(){return function(n){this.router=n,this.params=o(n)}}(),b=function(n){function t(t,e){var l=n.call(this,e)||this;return l.router=t,l.events=e,l.params=o(t),l}return l.d(t,n),t}(s),h=function(n){function t(t,e,l){var i=n.call(this,e)||this;return i.paramUrl=t,i.events=e,i.session=l,i.defaultUrl="",i.defaultUrl=u(t,l),i}return l.d(t,n),t}(s),g=function(n){function t(t,e,l){var i=n.call(this,e,l)||this;return i.router=t,i.paramUrl=e,i.session=l,i.defaultUrl="",i.params=o(t),i}return l.d(t,n),t}(a),f=function(n){function t(t,e,l,i){var r=n.call(this,t,l)||this;return r.router=t,r.paramUrl=e,r.events=l,r.session=i,r.defaultUrl="",r.defaultUrl=u(e,r.session),r}return l.d(t,n),t}(b),d=function(n){function t(t,e,l,i){var r=n.call(this,t,e,l)||this;return r.router=t,r.session=e,r.nativeService=l,r.paramUrl=i,r.defaultUrl=u(i,e),r}return l.d(t,n),t}(function(n){function t(t,e,l){var i=n.call(this,e,l)||this;return i.router=t,i.session=e,i.nativeService=l,i.params=o(t),i}return l.d(t,n),t}(r)),v=function(n){function t(t,e,l,i,r,s,a,c){var b=n.call(this,t,e,l,i,r,s)||this;return b.router=t,b.modalCtrl=e,b.authProvider=l,b.navCtrl=i,b.translateService=r,b.nativeService=s,b.paramUrl=a,b.session=c,b.params=o(t),b.defaultUrl=u(a,c),b}return l.d(t,n),t}(function(n){function t(t,e,l,i,r,u){var s=n.call(this,e,l,i,t,r,u)||this;return s.router=t,s.modalCtrl=e,s.authProvider=l,s.navCtrl=i,s.translateService=r,s.nativeService=u,s.params=o(t),s}return l.d(t,n),t}(i.a))}}]);