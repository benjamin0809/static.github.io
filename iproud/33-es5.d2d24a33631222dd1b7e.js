(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{SgWT:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),r=u("pMnS"),i=u("oBZk"),b=u("ZZ/e"),o=u("Ip0R"),s=u("A7o+"),a=u("gIcY"),c=u("mrSG"),h=u("hAUF"),f=u("VvKu"),d=u("yHx4"),m=(u("o0su"),u("Q1LM"),u("riPR")),p=function(l){function n(n,u,e,t,r,i){var b=l.call(this,h.b.MyPage,e)||this;return b.navCtrl=n,b.session=e,b.eventsService=t,b.userProvider=r,b.configProvider=i,b.ExtendFields=[],null!=b.session.user&&(b.currentUser=b.session.user,b.currentUser.isEmployee?(b.currentUser&&b.currentUser.employeeInfo&&(b.ExtendFields=b.currentUser.employeeInfo.extendFields),b.formView=!1):b.formView=!0),b.form=u.group({staffNumber:["",a.p.required],idCard:["",a.p.required]}),b.form.valueChanges.subscribe((function(l){b.isReadyToSave=b.form.valid})),b}return c.d(n,l),n.prototype.bindEmployee=function(){var l=this;this.userProvider.BindEmployee({employeeNo:this.form.value.staffNumber,idCardNo:this.form.value.idCard}).subscribe((function(n){l.userProvider.getUserInfo().subscribe((function(){l.currentUser=l.session.user,l.currentUser&&l.currentUser.employeeInfo&&(l.ExtendFields=l.currentUser.employeeInfo.extendFields),l.formView=!1,setTimeout((function(){l.eventsService.emit(f.s.PermissionChanged)}),1e3)})),n.result&&n.result.inCompanyDate&&l.configProvider.AfterNewEmployeeBind(n.result.inCompanyDate,n.result.siteCode).subscribe()}))},n.prototype.done=function(){this.form.valid&&this.navCtrl.back()},n.prototype.unbindEmployee=function(){var l=this;this.userProvider.UnbindEmployee().subscribe((function(n){l.userProvider.getUserInfo(!0).subscribe((function(){l.navCtrl.back(),setTimeout((function(){l.eventsService.emit(f.s.PermissionChanged)}),1e3)}))}))},n}(u("mGGX").e),E=u("ZwiA"),v=u("GAO8"),k=e.rb({encapsulation:0,styles:[["ion-back-button[_ngcontent-%COMP%]{--color:#999}ion-label[_ngcontent-%COMP%]{white-space:normal!important}h2[_ngcontent-%COMP%]{min-width:40px}.label-inner-note[_ngcontent-%COMP%], ion-note[_ngcontent-%COMP%]{font-size:17px;color:var(--note-color)}"]],data:{}});function C(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,6,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(1,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,4,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(3,0,null,null,1,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(4,null,["",""])),(l()(),e.tb(5,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(6,null,["",""]))],null,(function(l,n){l(n,4,0,n.parent.context.$implicit.Name||n.parent.context.$implicit.name),l(n,6,0,n.parent.context.$implicit.Value||n.parent.context.$implicit.value)}))}function g(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,6,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(1,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),e.Lb(3,null,["",""])),(l()(),e.tb(4,0,null,0,2,"ion-note",[["slot","end"]],null,null,null,i.Jb,i.F)),e.sb(5,49152,null,0,b.ab,[e.h,e.k,e.z],null,null),(l()(),e.Lb(6,0,[""," "]))],null,(function(l,n){l(n,3,0,n.parent.context.$implicit.Name||n.parent.context.$implicit.name),l(n,6,0,n.parent.context.$implicit.Value||n.parent.context.$implicit.value)}))}function L(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,5,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(1,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.ib(16777216,null,0,1,null,C)),e.sb(3,16384,null,0,o.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,0,1,null,g)),e.sb(5,16384,null,0,o.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,3,0,!(n.context.$implicit.IsLongField||n.context.$implicit.isLongField)),l(n,5,0,n.context.$implicit.IsLongField||n.context.$implicit.isLongField)}),null)}function y(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,240,"div",[],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,234,"ion-list",[],null,null,null,i.Ib,i.D)),e.sb(2,49152,null,0,b.Q,[e.h,e.k,e.z],null,null),(l()(),e.tb(3,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(4,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(5,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(6,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(7,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(8,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(9,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(11,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(12,null,["",""])),(l()(),e.tb(13,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(14,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(15,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(16,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(17,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(18,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(19,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(21,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(22,null,["",""])),(l()(),e.tb(23,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(24,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(25,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(26,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(27,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(28,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(29,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(31,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(32,null,["",""])),(l()(),e.tb(33,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(34,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(35,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(36,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(37,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(38,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(39,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(41,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(42,null,["",""])),(l()(),e.tb(43,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(44,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(45,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(46,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(47,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(48,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(49,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(51,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(52,null,["",""])),(l()(),e.tb(53,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(54,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(55,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(56,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(57,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(58,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(59,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(61,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(62,null,["",""])),(l()(),e.tb(63,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(64,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(65,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(66,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(67,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(68,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(69,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(71,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(72,null,["",""])),(l()(),e.tb(73,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(74,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(75,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(76,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(77,0,null,0,2,"h2",[],null,null,null,null,null)),(l()(),e.Lb(78,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(80,0,null,0,2,"ion-note",[],null,null,null,i.Jb,i.F)),e.sb(81,49152,null,0,b.ab,[e.h,e.k,e.z],null,null),(l()(),e.Lb(82,0,["",""])),(l()(),e.tb(83,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(84,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(85,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(86,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(87,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(88,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(89,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(91,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(92,null,["",""])),(l()(),e.tb(93,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(94,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(95,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(96,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(97,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(98,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(99,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(101,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(102,null,["",""])),(l()(),e.tb(103,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(104,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(105,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(106,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(107,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(108,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(109,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(111,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(112,null,["",""])),(l()(),e.tb(113,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(114,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(115,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(116,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(117,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(118,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(119,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(121,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(122,null,["",""])),(l()(),e.tb(123,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(124,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(125,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(126,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(127,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(128,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(129,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(131,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(132,null,["",""])),(l()(),e.tb(133,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(134,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(135,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(136,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(137,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(138,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(139,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(141,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(142,null,["",""])),(l()(),e.tb(143,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(144,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(145,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(146,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(147,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(148,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(149,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(151,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(152,null,["",""])),(l()(),e.tb(153,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(154,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(155,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(156,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(157,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(158,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(159,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(161,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(162,null,["",""])),(l()(),e.tb(163,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(164,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(165,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(166,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(167,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(168,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(169,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(171,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(172,null,["",""])),(l()(),e.tb(173,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(174,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(175,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(176,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(177,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(178,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(179,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(181,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(182,null,["",""])),(l()(),e.tb(183,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(184,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(185,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(186,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(187,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(188,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(189,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(191,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(192,null,["",""])),(l()(),e.tb(193,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(194,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(195,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(196,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(197,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(198,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(199,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(201,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(202,null,["",""])),(l()(),e.tb(203,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(204,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(205,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(206,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(207,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(208,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(209,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(211,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(212,null,["",""])),(l()(),e.tb(213,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(214,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(215,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(216,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(217,0,null,0,5,"div",[["class","label-inner"]],null,null,null,null,null)),(l()(),e.tb(218,0,null,null,2,"h2",[["class","label-inner-content"]],null,null,null,null,null)),(l()(),e.Lb(219,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(221,0,null,null,1,"span",[["class","label-inner-note"]],null,null,null,null,null)),(l()(),e.Lb(222,null,["",""])),(l()(),e.tb(223,0,null,0,2,"div",[["class","extends-field"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,L)),e.sb(225,278528,null,0,o.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(226,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(227,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(228,0,null,0,7,"ion-label",[],null,null,null,i.Gb,i.C)),e.sb(229,49152,null,0,b.P,[e.h,e.k,e.z],null,null),(l()(),e.tb(230,0,null,0,2,"h2",[],null,null,null,null,null)),(l()(),e.Lb(231,null,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(233,0,null,0,2,"ion-note",[["slot","end"]],null,null,null,i.Jb,i.F)),e.sb(234,49152,null,0,b.ab,[e.h,e.k,e.z],null,null),(l()(),e.Lb(235,0,[""," "])),(l()(),e.tb(236,0,null,null,4,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.tb(237,0,null,null,3,"ion-button",[["color","danger"],["expand","block"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.unbindEmployee()&&e),e}),i.ib,i.e)),e.sb(238,49152,null,0,b.m,[e.h,e.k,e.z],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(l()(),e.Lb(239,0,[" "," "])),e.Gb(131072,s.j,[s.k,e.h])],(function(l,n){l(n,225,0,n.component.ExtendFields),l(n,238,0,"danger","block","round")}),(function(l,n){var u=n.component;l(n,9,0,e.Mb(n,9,0,e.Fb(n,10).transform("EMPLOYEE_STAFF_NUMBER"))),l(n,12,0,u.currentUser.employeeInfo.staffNumber),l(n,19,0,e.Mb(n,19,0,e.Fb(n,20).transform("EMPLOYEE_REAL_NAME"))),l(n,22,0,u.currentUser.employeeInfo.employeeName),l(n,29,0,e.Mb(n,29,0,e.Fb(n,30).transform("EMPLOYEE_NATIONAL_ID"))),l(n,32,0,u.currentUser.employeeInfo.nationalId),l(n,39,0,e.Mb(n,39,0,e.Fb(n,40).transform("EMPLOYEE_GRADE"))),l(n,42,0,u.currentUser.employeeInfo.grade),l(n,49,0,e.Mb(n,49,0,e.Fb(n,50).transform("EMPLOYEE_POSITION"))),l(n,52,0,u.currentUser.employeeInfo.position),l(n,59,0,e.Mb(n,59,0,e.Fb(n,60).transform("EMPLOYEE_SITE"))),l(n,62,0,u.currentUser.employeeInfo.site),l(n,69,0,e.Mb(n,69,0,e.Fb(n,70).transform("EMPLOYEE_BU"))),l(n,72,0,u.currentUser.employeeInfo.bu),l(n,78,0,e.Mb(n,78,0,e.Fb(n,79).transform("EMPLOYEE_DEPARTMENT"))),l(n,82,0,u.currentUser.employeeInfo.deptName),l(n,89,0,e.Mb(n,89,0,e.Fb(n,90).transform("EMPLOYEE_DEPARTMENT_CODE"))),l(n,92,0,u.currentUser.employeeInfo.deptCode),l(n,99,0,e.Mb(n,99,0,e.Fb(n,100).transform("EMPLOYEE_COST_CODE"))),l(n,102,0,u.currentUser.employeeInfo.priceCode),l(n,109,0,e.Mb(n,109,0,e.Fb(n,110).transform("EMPLOYEE_POSITIONSERIES"))),l(n,112,0,u.currentUser.employeeInfo.positionSeries),l(n,119,0,e.Mb(n,119,0,e.Fb(n,120).transform("EMPLOYEE_COMMITTEE"))),l(n,122,0,u.currentUser.employeeInfo.committee),l(n,129,0,e.Mb(n,129,0,e.Fb(n,130).transform("EMPLOYEE_WORKPOSTNAME"))),l(n,132,0,u.currentUser.employeeInfo.workPostName),l(n,139,0,e.Mb(n,139,0,e.Fb(n,140).transform("EMPLOYEE_ISDIRECT"))),l(n,142,0,u.currentUser.employeeInfo.isDirect),l(n,149,0,e.Mb(n,149,0,e.Fb(n,150).transform("EMPLOYEE_INCOMPANYDATE"))),l(n,152,0,u.currentUser.employeeInfo.inCompanyDate),l(n,159,0,e.Mb(n,159,0,e.Fb(n,160).transform("EMPLOYEE_WORKLONG"))),l(n,162,0,u.currentUser.employeeInfo.workLong),l(n,169,0,e.Mb(n,169,0,e.Fb(n,170).transform("EMPLOYEE_OUTYEAR"))),l(n,172,0,u.currentUser.employeeInfo.outYear),l(n,179,0,e.Mb(n,179,0,e.Fb(n,180).transform("EMPLOYEE_MAXEDUCATION"))),l(n,182,0,u.currentUser.employeeInfo.maxEducation),l(n,189,0,e.Mb(n,189,0,e.Fb(n,190).transform("EMPLOYEE_SPECIALTY"))),l(n,192,0,u.currentUser.employeeInfo.specialty),l(n,199,0,e.Mb(n,199,0,e.Fb(n,200).transform("EMPLOYEE_URGENTMANANDTEL"))),l(n,202,0,u.currentUser.employeeInfo.urgentManAndTel),l(n,209,0,e.Mb(n,209,0,e.Fb(n,210).transform("EMPLOYEE_DIRECTOR"))),l(n,212,0,u.currentUser.employeeInfo.director),l(n,219,0,e.Mb(n,219,0,e.Fb(n,220).transform("EMPLOYEE_DORM"))),l(n,222,0,u.currentUser.employeeInfo.dorm),l(n,231,0,e.Mb(n,231,0,e.Fb(n,232).transform("EMPLOYEE_REMARK"))),l(n,235,0,u.currentUser.employeeInfo.remark),l(n,239,0,e.Mb(n,239,0,e.Fb(n,240).transform("EMPLOYEE_IDENTITY_UNBIND")))}))}function I(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,36,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Fb(l,2).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Fb(l,2).onReset()&&t),t}),null,null)),e.sb(1,16384,null,0,a.t,[],null,null),e.sb(2,540672,null,0,a.g,[[8,null],[8,null]],{form:[0,"form"]},null),e.Ib(2048,null,a.b,null,[a.g]),e.sb(4,16384,null,0,a.l,[[4,a.b]],null,null),(l()(),e.tb(5,0,null,null,4,"div",[["class","ion-text-center ion-margin"],["color","medium"]],null,null,null,null,null)),(l()(),e.tb(6,0,null,null,3,"ion-note",[],null,null,null,i.Jb,i.F)),e.sb(7,49152,null,0,b.ab,[e.h,e.k,e.z],null,null),(l()(),e.Lb(8,0,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(10,0,null,null,21,"ion-list",[],null,null,null,i.Ib,i.D)),e.sb(11,49152,null,0,b.Q,[e.h,e.k,e.z],null,null),(l()(),e.tb(12,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(13,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(14,0,null,0,7,"ion-input",[["formControlName","staffNumber"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,17)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,17)._handleInputEvent(u.target)&&t),t}),i.Bb,i.x)),e.sb(15,49152,null,0,b.I,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),e.Gb(131072,s.j,[s.k,e.h]),e.sb(17,16384,null,0,b.Rb,[e.k],null,null),e.Ib(1024,null,a.i,(function(l){return[l]}),[b.Rb]),e.sb(19,671744,null,0,a.f,[[3,a.b],[8,null],[8,null],[6,a.i],[2,a.s]],{name:[0,"name"]},null),e.Ib(2048,null,a.j,null,[a.f]),e.sb(21,16384,null,0,a.k,[[4,a.j]],null,null),(l()(),e.tb(22,0,null,0,9,"ion-item",[],null,null,null,i.Fb,i.y)),e.sb(23,49152,null,0,b.J,[e.h,e.k,e.z],null,null),(l()(),e.tb(24,0,null,0,7,"ion-input",[["formControlName","idCard"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Fb(l,27)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Fb(l,27)._handleInputEvent(u.target)&&t),t}),i.Bb,i.x)),e.sb(25,49152,null,0,b.I,[e.h,e.k,e.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),e.Gb(131072,s.j,[s.k,e.h]),e.sb(27,16384,null,0,b.Rb,[e.k],null,null),e.Ib(1024,null,a.i,(function(l){return[l]}),[b.Rb]),e.sb(29,671744,null,0,a.f,[[3,a.b],[8,null],[8,null],[6,a.i],[2,a.s]],{name:[0,"name"]},null),e.Ib(2048,null,a.j,null,[a.f]),e.sb(31,16384,null,0,a.k,[[4,a.j]],null,null),(l()(),e.tb(32,0,null,null,4,"div",[["class","ion-padding"]],null,null,null,null,null)),(l()(),e.tb(33,0,null,null,3,"ion-button",[["expand","block"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.bindEmployee()&&e),e}),i.ib,i.e)),e.sb(34,49152,null,0,b.m,[e.h,e.k,e.z],{expand:[0,"expand"],shape:[1,"shape"]},null),(l()(),e.Lb(35,0,[" "," "])),e.Gb(131072,s.j,[s.k,e.h])],(function(l,n){l(n,2,0,n.component.form),l(n,15,0,e.xb(1,"",e.Mb(n,15,0,e.Fb(n,16).transform("EMPLOYEE_STAFF_NUMBER")),""),"text"),l(n,19,0,"staffNumber"),l(n,25,0,e.xb(1,"",e.Mb(n,25,0,e.Fb(n,26).transform("EMPLOYEE_NATIONAL_ID")),""),"text"),l(n,29,0,"idCard"),l(n,34,0,"block","round")}),(function(l,n){l(n,0,0,e.Fb(n,4).ngClassUntouched,e.Fb(n,4).ngClassTouched,e.Fb(n,4).ngClassPristine,e.Fb(n,4).ngClassDirty,e.Fb(n,4).ngClassValid,e.Fb(n,4).ngClassInvalid,e.Fb(n,4).ngClassPending),l(n,8,0,e.Mb(n,8,0,e.Fb(n,9).transform("EMPLOYEE_NOT_BIND_YET"))),l(n,14,0,e.Fb(n,21).ngClassUntouched,e.Fb(n,21).ngClassTouched,e.Fb(n,21).ngClassPristine,e.Fb(n,21).ngClassDirty,e.Fb(n,21).ngClassValid,e.Fb(n,21).ngClassInvalid,e.Fb(n,21).ngClassPending),l(n,24,0,e.Fb(n,31).ngClassUntouched,e.Fb(n,31).ngClassTouched,e.Fb(n,31).ngClassPristine,e.Fb(n,31).ngClassDirty,e.Fb(n,31).ngClassValid,e.Fb(n,31).ngClassInvalid,e.Fb(n,31).ngClassPending),l(n,35,0,e.Mb(n,35,0,e.Fb(n,36).transform("EMPLOYEE_IDENTITY_BIND")))}))}function F(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,12,"ion-header",[],null,null,null,i.wb,i.s)),e.sb(1,49152,null,0,b.D,[e.h,e.k,e.z],null,null),(l()(),e.tb(2,0,null,0,10,"ion-toolbar",[],null,null,null,i.hc,i.db)),e.sb(3,49152,null,0,b.Eb,[e.h,e.k,e.z],null,null),(l()(),e.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.jb,i.f)),e.sb(5,49152,null,0,b.n,[e.h,e.k,e.z],null,null),(l()(),e.tb(6,0,null,0,2,"ion-back-button",[["text",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Fb(l,8).onClick(u)&&t),t}),i.gb,i.c)),e.sb(7,49152,null,0,b.i,[e.h,e.k,e.z],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),e.sb(8,16384,null,0,b.j,[[2,b.kb],b.Lb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.tb(9,0,null,0,3,"ion-title",[],null,null,null,i.fc,i.bb)),e.sb(10,49152,null,0,b.Cb,[e.h,e.k,e.z],null,null),(l()(),e.Lb(11,0,["",""])),e.Gb(131072,s.j,[s.k,e.h]),(l()(),e.tb(13,0,null,null,5,"ion-content",[],null,null,null,i.rb,i.n)),e.sb(14,49152,null,0,b.w,[e.h,e.k,e.z],null,null),(l()(),e.ib(16777216,null,0,1,null,y)),e.sb(16,16384,null,0,o.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,0,1,null,I)),e.sb(18,16384,null,0,o.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,u.defaultUrl,""),l(n,8,0,u.defaultUrl),l(n,16,0,!u.formView),l(n,18,0,u.formView)}),(function(l,n){l(n,11,0,e.Mb(n,11,0,e.Fb(n,12).transform("EMPLOYEE_IDENTITY_TITLE")))}))}function P(l){return e.Nb(0,[(l()(),e.tb(0,0,null,null,1,"page-employee-identity",[],null,null,null,F,k)),e.sb(1,49152,null,0,p,[b.Lb,a.d,E.a,m.a,v.a,d.a],null,null)],null,null)}var O=e.pb("page-employee-identity",p,P,{},{},[]),M=u("ZYCi");u.d(n,"EmployeeIdentityPageModuleNgFactory",(function(){return _}));var _=e.qb(t,[],(function(l){return e.Cb([e.Db(512,e.j,e.bb,[[8,[r.a,O]],[3,e.j],e.x]),e.Db(4608,o.l,o.k,[e.u,[2,o.A]]),e.Db(4608,b.c,b.c,[e.z,e.g]),e.Db(4608,b.Kb,b.Kb,[b.c,e.j,e.q]),e.Db(4608,b.Ob,b.Ob,[b.c,e.j,e.q]),e.Db(4608,a.r,a.r,[]),e.Db(4608,a.d,a.d,[]),e.Db(4608,s.g,s.f,[]),e.Db(4608,s.c,s.e,[]),e.Db(4608,s.i,s.d,[]),e.Db(4608,s.b,s.a,[]),e.Db(4608,s.k,s.k,[s.l,s.g,s.c,s.i,s.b,s.m,s.n]),e.Db(1073742336,o.b,o.b,[]),e.Db(1073742336,b.Gb,b.Gb,[]),e.Db(1073742336,M.n,M.n,[[2,M.t],[2,M.m]]),e.Db(1073742336,s.h,s.h,[]),e.Db(1073742336,a.q,a.q,[]),e.Db(1073742336,a.h,a.h,[]),e.Db(1073742336,a.o,a.o,[]),e.Db(1073742336,t,t,[]),e.Db(1024,M.k,(function(){return[[{path:"",component:p}]]}),[]),e.Db(256,s.n,void 0,[]),e.Db(256,s.m,void 0,[])])}))},TDSW:function(l,n,u){"use strict";u.d(n,"a",(function(){return o}));var e=u("mrSG"),t=u("hAUF"),r=u("ZOGp"),i=u("YsCg"),b=u("93YN"),o=function(){function l(l,n,u,e,t,r){this.modalCtrl=l,this.authProvider=n,this.navCtrl=u,this.router=e,this.translateService=t,this.nativeService=r}return l.prototype.doSelectCountry=function(){var l=this;return new Promise((function(n,u){return e.b(l,void 0,void 0,(function(){var l;return e.e(this,(function(e){switch(e.label){case 0:return[4,this.modalCtrl.create({component:b.a,componentProps:{isNeedAll:!0}})];case 1:return(l=e.sent()).onDidDismiss().then((function(l){n(l.data)})).catch((function(l){u(l)})),[4,l.present()];case 2:return e.sent(),[2]}}))}))}))},l.prototype.SendSecurityCode=function(l){var n=this;return new Promise((function(u,t){return e.b(n,void 0,void 0,(function(){return e.e(this,(function(n){return this.authProvider.SendSecurityCode2(l).subscribe((function(l){u("")}),(function(l){u(l)})),[2]}))}))}))},l.prototype.LoginByWFAccount=function(l){var n=this;return new Promise((function(u,t){return e.b(n,void 0,void 0,(function(){var n=this;return e.e(this,(function(e){return this.authProvider.LoginByWFAccount2(l).subscribe((function(l){n.setTabsToRoot()}),(function(l){u(l)})),[2]}))}))}))},l.prototype.Login=function(l){var n=this;return new Promise((function(u,t){return e.b(n,void 0,void 0,(function(){var n=this;return e.e(this,(function(e){return this.authProvider.Login2(l).subscribe((function(l){n.setTabsToRoot()}),(function(l){u(l)})),[2]}))}))}))},l.prototype.login=function(l,n,u,t){var r=this;return new Promise((function(u,t){return e.b(r,void 0,void 0,(function(){var t=this;return e.e(this,(function(e){switch(l){case i.j.SendSecurityCodeBefore:this.authProvider.SendSecurityCode2(n).subscribe((function(l){u("")}),(function(l){u(l)}));break;case i.j.LoginByWFAccountBefore:this.authProvider.LoginByWFAccount2(n).subscribe((function(l){t.setTabsToRoot()}),(function(l){u(l)}));break;case i.j.LoginByMobileBefore:this.authProvider.Login2(n).subscribe((function(l){t.setTabsToRoot()}),(function(l){u(l)}))}return[2]}))}))}))},l.prototype.setTabsToRoot=function(){this.router.navigate([t.b.HomePage],{replaceUrl:!0})},l.prototype.verificationErrorHandle=function(l,n){return l.errcode===r.a.USER.INCORRECT_VERIFICATION_CODE?this.translateService.instant("VERIFICATION_CODE_INCORRECT")+";"+Date.now():l.errcode===r.a.USER.VERIFICATION_CODE_EXPIRED?this.translateService.instant("VERIFICATION_CODE_EXPIRED")+";"+Date.now():void this.loginError(l)},l.prototype.loginError=function(l){var n="";switch(l.errcode){case r.a.USER.INACTIVE_USER:n="ACCOUNT_LOCKED";break;case r.a.USER.USER_NOT_EXIST:n="LOGIN_ERROR_USER_NOT_EXIST";break;case r.a.USER.MOBILE_NOT_EXIST:n="LOGIN_ERROR_PHONE_NUMBER_NOT_EXIST";break;case r.a.USER.INCORRECT_ACCOUNT_AND_PASSWORD:case r.a.USER.INCORRECT_PASSWORD:n="LOGIN_ERROR_INCORRECT_PASSWORD";break;default:n="LOGIN_ERROR"}this.nativeService.alert(l.errcode+","+this.translateService.instant(n))},l}()},mGGX:function(l,n,u){"use strict";var e=u("mrSG"),t=u("TDSW"),r=(u("wqKC"),u("93YN"),function(){function l(l,n){this.session=l,this.nativeService=n}return l.prototype.ionViewWillEnter=function(){this.session.isDarkMode||this.nativeService.setStyleLightContent()},l.prototype.ionViewWillLeave=function(){this.nativeService.statusBarStyle(this.session.isDarkMode)},l}());u.d(n,"i",(function(){return b})),u.d(n,"a",(function(){return o})),u.d(n,"e",(function(){return s})),u.d(n,"b",(function(){return a})),u.d(n,"f",(function(){return h})),u.d(n,"h",(function(){return f})),u.d(n,"g",(function(){return d})),u.d(n,"c",(function(){return m})),u.d(n,"d",(function(){return p}));var i=function(l){var n={},u=l.getCurrentNavigation().extras;return u&&u.state&&(n=u.state),n},b=function(l,n){var u=l||n.previousUrl;return n&&(u=n.previousUrl),u},o=function(){function l(l){this.events=l}return l.prototype.scrollWidth=function(l,n){return{width:l||window.screen.availWidth-5+"px",height:(n||44)+"px"}},l.prototype.completeRefresh=function(l){l&&l.target.complete()},l.prototype.completedoInfinite=function(l){l&&l.target.complete()},l}(),s=function(){return function(l,n){this.paramUrl=l,this.session=n,this.defaultUrl="",this.defaultUrl=b(l,this.session)}}(),a=function(){return function(l){this.router=l,this.params=i(l)}}(),c=function(l){function n(n,u){var e=l.call(this,u)||this;return e.router=n,e.events=u,e.params=i(n),e}return e.d(n,l),n}(o),h=function(l){function n(n,u,e){var t=l.call(this,u)||this;return t.paramUrl=n,t.events=u,t.session=e,t.defaultUrl="",t.defaultUrl=b(n,e),t}return e.d(n,l),n}(o),f=function(l){function n(n,u,e){var t=l.call(this,u,e)||this;return t.router=n,t.paramUrl=u,t.session=e,t.defaultUrl="",t.params=i(n),t}return e.d(n,l),n}(s),d=function(l){function n(n,u,e,t){var r=l.call(this,n,e)||this;return r.router=n,r.paramUrl=u,r.events=e,r.session=t,r.defaultUrl="",r.defaultUrl=b(u,r.session),r}return e.d(n,l),n}(c),m=function(l){function n(n,u,e,t){var r=l.call(this,n,u,e)||this;return r.router=n,r.session=u,r.nativeService=e,r.paramUrl=t,r.defaultUrl=b(t,u),r}return e.d(n,l),n}(function(l){function n(n,u,e){var t=l.call(this,u,e)||this;return t.router=n,t.session=u,t.nativeService=e,t.params=i(n),t}return e.d(n,l),n}(r)),p=function(l){function n(n,u,e,t,r,o,s,a){var c=l.call(this,n,u,e,t,r,o)||this;return c.router=n,c.modalCtrl=u,c.authProvider=e,c.navCtrl=t,c.translateService=r,c.nativeService=o,c.paramUrl=s,c.session=a,c.params=i(n),c.defaultUrl=b(s,a),c}return e.d(n,l),n}(function(l){function n(n,u,e,t,r,b){var o=l.call(this,u,e,t,n,r,b)||this;return o.router=n,o.modalCtrl=u,o.authProvider=e,o.navCtrl=t,o.translateService=r,o.nativeService=b,o.params=i(n),o}return e.d(n,l),n}(t.a))}}]);