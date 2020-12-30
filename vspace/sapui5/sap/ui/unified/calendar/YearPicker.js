/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Control','sap/ui/Device','sap/ui/core/delegate/ItemNavigation','sap/ui/unified/calendar/CalendarUtils','sap/ui/unified/calendar/CalendarDate','sap/ui/core/date/UniversalDate','sap/ui/unified/library','sap/ui/core/format/DateFormat','sap/ui/core/library',"./YearPickerRenderer","sap/ui/events/KeyCodes","sap/ui/thirdparty/jquery"],function(C,D,I,a,b,U,l,c,d,Y,K,q){"use strict";var e=d.CalendarType;var f=C.extend("sap.ui.unified.calendar.YearPicker",{metadata:{library:"sap.ui.unified",properties:{year:{type:"int",group:"Data",defaultValue:2000},years:{type:"int",group:"Appearance",defaultValue:20},columns:{type:"int",group:"Appearance",defaultValue:4},date:{type:"object",group:"Data"},primaryCalendarType:{type:"sap.ui.core.CalendarType",group:"Appearance"}},events:{select:{},pageChange:{}}}});f.prototype.init=function(){var s=sap.ui.getCore().getConfiguration().getCalendarType();this.setProperty("primaryCalendarType",s);this._oYearFormat=c.getDateInstance({format:"y",calendarType:s});this._oFormatYyyymmdd=c.getInstance({pattern:"yyyyMMdd",calendarType:e.Gregorian});this._oMinDate=a._minDate(this.getPrimaryCalendarType());this._oMaxDate=a._maxDate(this.getPrimaryCalendarType());};f.prototype.onAfterRendering=function(){_.call(this);};f.prototype.setYear=function(y){this.setProperty("year",y,true);y=this.getProperty("year");var o=new b(y,0,1,this.getPrimaryCalendarType());this.setDate(o.toLocalJSDate());return this;};f.prototype.setDate=function(o){var i,y,m,F;o&&a._checkJSDateObject(o);y=o.getFullYear();a._checkYearInValidRange(y);i=b.fromLocalJSDate(o,this.getPrimaryCalendarType());i.setMonth(0,1);this.setProperty("date",o,true);this.setProperty("year",i.getYear(),true);this._oDate=i;if(this.getDomRef()){m=this.getYears();F=new b(this._oDate,this.getPrimaryCalendarType());F.setYear(F.getYear()-Math.floor(m/2));this._updateYears(F,Math.floor(m/2));}return this;};f.prototype._getDate=function(){if(!this._oDate){var y=this.getYear();this._oDate=new b(y,0,1,this.getPrimaryCalendarType());}return this._oDate;};f.prototype.setPrimaryCalendarType=function(s){this.setProperty("primaryCalendarType",s);this._oYearFormat=c.getDateInstance({format:"y",calendarType:s});if(this._oDate){this._oDate=new b(this._oDate,s);this._oDate.setMonth(0,1);}this._oMinDate=new b(this._oMinDate,s);this._oMaxDate=new b(this._oMaxDate,s);return this;};f.prototype.nextPage=function(){this._updatePage(true,this._oItemNavigation.getFocusedIndex());return this;};f.prototype.previousPage=function(){this._updatePage(false,this._oItemNavigation.getFocusedIndex());return this;};f.prototype.onsapspace=function(E){E.preventDefault();};f.prototype.onsapselect=function(E){var i=this._oItemNavigation.getFocusedIndex();var s=this._selectYear(i);if(s){this.fireSelect();}};f.prototype.onmousedown=function(E){this._oMousedownPosition={clientX:E.clientX,clientY:E.clientY};};f.prototype.onmouseup=function(E){if(this._bMousedownChange){this._bMousedownChange=false;this.fireSelect();}else if(D.support.touch&&this._isValueInThreshold(this._oMousedownPosition.clientX,E.clientX,10)&&this._isValueInThreshold(this._oMousedownPosition.clientY,E.clientY,10)){var i=this._oItemNavigation.getFocusedIndex();this._selectYear(i);this.fireSelect();}};f.prototype.getFirstRenderedDate=function(){var F;if(this.getDomRef()){var i=this._oItemNavigation.getItemDomRefs();F=this._oFormatYyyymmdd.parse(q(i[0]).attr("data-sap-year-start"));}return F;};f.prototype._isValueInThreshold=function(r,v,t){var L=r-t,u=r+t;return v>=L&&v<=u;};f.prototype._checkFirstDate=function(o){var y=this.getYears(),m=new b(this._oMaxDate,this.getPrimaryCalendarType());m.setYear(m.getYear()-y+1);if(o.isAfter(m)&&o.getYear()!=m.getYear()){o=new b(m,this.getPrimaryCalendarType());o.setMonth(0,1);}else if(o.isBefore(this._oMinDate)&&o.getYear()!=this._oMinDate.getYear()){o=new b(this._oMinDate,this.getPrimaryCalendarType());o.setMonth(0,1);}return o;};f.prototype._checkDateEnabled=function(o){var E=true;if((o.isAfter(this._oMaxDate)&&o.getYear()!=this._oMaxDate.getYear())||(o.isBefore(this._oMinDate)&&o.getYear()!=this._oMinDate.getYear())){E=false;}return E;};f.prototype._updatePage=function(F,s,i){var m=this._oItemNavigation.getItemDomRefs();var o=b.fromLocalJSDate(this._oFormatYyyymmdd.parse(q(m[0]).attr("data-sap-year-start")),this.getPrimaryCalendarType());var y=this.getYears();if(F){var M=new b(this._oMaxDate,this.getPrimaryCalendarType());M.setYear(M.getYear()-y+1);if(o.isBefore(M)){o.setYear(o.getYear()+y);if(o.isAfter(M)){s=s+(o.getYear()-M.getYear());if(s>y-1){s=y-1;}o=this._oMaxDate;this._oDate.setMonth(0,1);}}else{return;}}else{if(o.isAfter(this._oMinDate)){o.setYear(o.getYear()-y);if(o.isBefore(this._oMinDate)){s=s-(this._oMinDate.getYear()-o.getYear());if(s<0){s=0;}o=new b(this._oMinDate,this.getPrimaryCalendarType());}}else{return;}}this._updateYears(o,s);if(i){this.firePageChange();}};f.prototype._updateYears=function(F,s){var m=this._oFormatYyyymmdd.format(this._getDate().toUTCJSDate(),true);var E=false;var o=this._checkFirstDate(F);var S;if(!o.isSame(F)){S=new b(F,this.getPrimaryCalendarType());S.setYear(S.getYear()+s);F=o;E=true;}var n=this._oItemNavigation.getItemDomRefs();var p=new b(F,this.getPrimaryCalendarType());for(var i=0;i<n.length;i++){var y=this._oFormatYyyymmdd.format(p.toUTCJSDate(),true);var $=q(n[i]);$.attr("id",this.getId()+"-y"+y);$.text(this._oYearFormat.format(U.getInstance(p.toUTCJSDate(),p.getCalendarType()),true));$.attr("data-sap-year-start",y);if($.hasClass("sapUiCalItemSel")&&y!=m){$.removeClass("sapUiCalItemSel");$.attr("aria-selected","false");}else if(!$.hasClass("sapUiCalItemSel")&&y==m){$.addClass("sapUiCalItemSel");$.attr("aria-selected","true");}var r=true;if(E){r=this._checkDateEnabled(p);if(p.isSame(S)){s=i;}}if(r){$.removeClass("sapUiCalItemDsbl");$.removeAttr("aria-disabled");}else{$.addClass("sapUiCalItemDsbl");$.attr("aria-disabled",true);}p.setYear(p.getYear()+1);}this._oItemNavigation.focusItem(s);};f.prototype.ontouchstart=function(E){if(!D.system.desktop&&E.target.classList.contains("sapUiCalItem")){E.target.classList.add("sapUiCalItemSel");}};f.prototype._selectYear=function(m){var n=this._oItemNavigation.getItemDomRefs(),$=q(n[m]),y,o,s;if($.hasClass("sapUiCalItemDsbl")){return false;}y=$.attr("data-sap-year-start");o=b.fromLocalJSDate(this._oFormatYyyymmdd.parse(y),this.getPrimaryCalendarType());s=this.getId()+"-y"+y;for(var i=0;i<n.length;i++){$=q(n[i]);if($.attr("id")==s){$.addClass("sapUiCalItemSel");$.attr("aria-selected","true");}else{$.removeClass("sapUiCalItemSel");$.attr("aria-selected","false");}}this.setProperty("date",o.toLocalJSDate(),true);this.setProperty("year",o.getYear(),true);return true;};function _(){var y=this.getYears();var i=this._getDate().getYear();var m=this._oMinDate.getYear();var M=this._oMaxDate.getYear();var r=this.getDomRef();var n=this.$().find(".sapUiCalItem");var o=Math.floor(y/2);if(i>M-Math.floor(y/2)){o=o+i-M+Math.floor(y/2);}else if(i<=m+Math.floor(y/2)){o=i-m;}if(!this._oItemNavigation){this._oItemNavigation=new I();this._oItemNavigation.attachEvent(I.Events.AfterFocus,g,this);this._oItemNavigation.attachEvent(I.Events.FocusAgain,h,this);this._oItemNavigation.attachEvent(I.Events.BorderReached,k,this);this.addDelegate(this._oItemNavigation);this._oItemNavigation.setHomeEndColumnMode(true,true);this._oItemNavigation.setDisabledModifiers({sapnext:["alt"],sapprevious:["alt"],saphome:["alt"],sapend:["alt"]});}this._oItemNavigation.setRootDomRef(r);this._oItemNavigation.setItemDomRefs(n);this._oItemNavigation.setCycling(false);this._oItemNavigation.setColumns(this.getColumns(),true);this._oItemNavigation.setFocusedIndex(o);this._oItemNavigation.setPageSize(n.length);}function g(o){var i=o.getParameter("index");var E=o.getParameter("event");if(!E){return;}if(E.type=="mousedown"){j.call(this,E,i);}}function h(o){var i=o.getParameter("index");var E=o.getParameter("event");if(!E){return;}if(E.type=="mousedown"){j.call(this,E,i);}}function j(E,i){if(E.button||D.support.touch){return;}var s=this._selectYear(i);if(s){this._bMousedownChange=true;}E.preventDefault();E.setMark("cancelAutoClose");}function k(o){var E=o.getParameter("event");if(E.type){var y=this.getYears();var i=this.getColumns();if(i==0){i=y;}switch(E.type){case"sapnext":case"sapnextmodifiers":if(E.keyCode==K.ARROW_DOWN&&i<y){this._updatePage(true,this._oItemNavigation.getFocusedIndex()-y+i,true);}else{this._updatePage(true,0,true);}break;case"sapprevious":case"sappreviousmodifiers":if(E.keyCode==K.ARROW_UP&&i<y){this._updatePage(false,y-i+this._oItemNavigation.getFocusedIndex(),true);}else{this._updatePage(false,y-1,true);}break;case"sappagedown":this._updatePage(true,this._oItemNavigation.getFocusedIndex(),true);break;case"sappageup":this._updatePage(false,this._oItemNavigation.getFocusedIndex(),true);break;default:break;}}}return f;});