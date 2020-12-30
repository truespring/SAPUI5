/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Control','sap/ui/Device','sap/ui/core/LocaleData','sap/ui/core/delegate/ItemNavigation','sap/ui/unified/library','sap/ui/core/Locale',"./MonthPickerRenderer","sap/ui/thirdparty/jquery"],function(C,D,L,I,l,a,M,q){"use strict";var c=C.extend("sap.ui.unified.calendar.MonthPicker",{metadata:{library:"sap.ui.unified",properties:{month:{type:"int",group:"Data",defaultValue:0},months:{type:"int",group:"Appearance",defaultValue:12},columns:{type:"int",group:"Appearance",defaultValue:3},primaryCalendarType:{type:"sap.ui.core.CalendarType",group:"Appearance"}},events:{select:{},pageChange:{}}}});c.prototype.init=function(){var s=sap.ui.getCore().getConfiguration().getCalendarType();this.setProperty("primaryCalendarType",s);this._iMinMonth=0;this._iMaxMonth=11;};c.prototype.onAfterRendering=function(){_.call(this);j.call(this);};c.prototype.setMonth=function(m){this.setProperty("month",m,true);m=this.getProperty("month");if(m<0||m>11){throw new Error("Property month must be between 0 and 11; "+this);}if(this.getDomRef()){if(this.getMonths()<12){var s=this.getStartMonth();if(m>=s&&m<=s+this.getMonths()-1){h.call(this,m,true);this._oItemNavigation.focusItem(m-s);}else{k.call(this,m);}}else{h.call(this,m,true);this._oItemNavigation.focusItem(m);}}return this;};c.prototype._getLocale=function(){var p=this.getParent();if(p&&p._getLocale){return p._getLocale();}else if(!this._sLocale){this._sLocale=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale().toString();}return this._sLocale;};c.prototype._getLocaleData=function(){var p=this.getParent();if(p&&p._getLocaleData){return p._getLocaleData();}else if(!this._oLocaleData){var s=this._getLocale();var o=new a(s);this._oLocaleData=L.getInstance(o);}return this._oLocaleData;};c.prototype.onsapspace=function(E){E.preventDefault();};c.prototype.onsapselect=function(E){var i=this._oItemNavigation.getFocusedIndex();var m=i+this.getStartMonth();if(m>=this._iMinMonth&&m<=this._iMaxMonth){h.call(this,m);this.fireSelect();}};c.prototype.onmousedown=function(E){this._oMousedownPosition={clientX:E.clientX,clientY:E.clientY};};c.prototype.onmouseup=function(E){if(this._bMousedownChange){this._bMousedownChange=false;this.fireSelect();}else if(D.support.touch&&this._isValueInThreshold(this._oMousedownPosition.clientX,E.clientX,10)&&this._isValueInThreshold(this._oMousedownPosition.clientY,E.clientY,10)){var i=this._oItemNavigation.getFocusedIndex();var m=i+this.getStartMonth();h.call(this,m);this.fireSelect();}};c.prototype.onThemeChanged=function(){if(this._bNoThemeChange){return;}if(!this.getDomRef()){return;}this._bNamesLengthChecked=undefined;var m=this._oItemNavigation.getItemDomRefs();this._bLongMonth=false;var o=this._getLocaleData();var b=o.getMonthsStandAlone("wide",this.getPrimaryCalendarType());for(var i=0;i<m.length;i++){var $=q(m[i]);$.text(b[i]);}j.call(this);};c.prototype.nextPage=function(){var s=this.getStartMonth();var i=this._oItemNavigation.getFocusedIndex();var m=i+s;var b=this.getMonths();m=m+b;if(m>11){m=11;}k.call(this,m);return this;};c.prototype.previousPage=function(){var s=this.getStartMonth();var i=this._oItemNavigation.getFocusedIndex();var m=i+s;var b=this.getMonths();m=m-b;if(m<0){m=0;}k.call(this,m);return this;};c.prototype.setMinMax=function(m,b){if(m==this._iMinMonth&&b==this._iMaxMonth){return this;}m=parseInt(m);if(isNaN(m)||m<0||m>11){m=0;}b=parseInt(b);if(isNaN(b)||b<0||b>11){b=11;}if(m<=b){this._iMinMonth=m;this._iMaxMonth=b;}else{this._iMaxMonth=m;this._iMinMonth=b;}if(this.getDomRef()){var n=this._oItemNavigation.getItemDomRefs();var o=this.getId().length+2;for(var i=0;i<n.length;i++){var $=q(n[i]);var p=parseInt($.attr("id").slice(o));if(p<this._iMinMonth||p>this._iMaxMonth){$.addClass("sapUiCalItemDsbl");$.attr("aria-disabled",true);}else{$.removeClass("sapUiCalItemDsbl");$.removeAttr("aria-disabled");}}}return this;};c.prototype.getStartMonth=function(){if(this.getMonths()<12){var F=this._oItemNavigation.getItemDomRefs()[0];return parseInt(F.id.slice(this.getId().length+2));}else{return 0;}};c.prototype._isValueInThreshold=function(r,v,t){var i=r-t,u=r+t;return v>=i&&v<=u;};c.prototype.ontouchstart=function(E){if(!D.system.desktop&&E.target.classList.contains("sapUiCalItem")){E.target.classList.add("sapUiCalItemSel");}};function _(){var r=this.getDomRef();var b=this.$().find(".sapUiCalItem");var i=this.getColumns();var m=this.getMonths();var n=true;if(m<12){n=false;}if(!this._oItemNavigation){this._oItemNavigation=new I();this._oItemNavigation.attachEvent(I.Events.AfterFocus,d,this);this._oItemNavigation.attachEvent(I.Events.FocusAgain,e,this);this._oItemNavigation.attachEvent(I.Events.BorderReached,g,this);this.addDelegate(this._oItemNavigation);this._oItemNavigation.setHomeEndColumnMode(true,true);this._oItemNavigation.setDisabledModifiers({sapnext:["alt"],sapprevious:["alt"],saphome:["alt"],sapend:["alt"]});}this._oItemNavigation.setRootDomRef(r);this._oItemNavigation.setItemDomRefs(b);this._oItemNavigation.setCycling(n);this._oItemNavigation.setColumns(i,true);var o=this.getMonth()-this.getStartMonth();this._oItemNavigation.setFocusedIndex(o);this._oItemNavigation.setPageSize(b.length);}function d(o){var i=o.getParameter("index");var E=o.getParameter("event");if(!E){return;}if(E.type=="mousedown"){f.call(this,E,i);}}function e(o){var i=o.getParameter("index");var E=o.getParameter("event");if(!E){return;}if(E.type=="mousedown"){f.call(this,E,i);}}function f(E,i){if(E.button||D.support.touch){return;}var m=i+this.getStartMonth();if(m>=this._iMinMonth&&m<=this._iMaxMonth){h.call(this,m);this._bMousedownChange=true;}E.preventDefault();E.setMark("cancelAutoClose");}function g(o){var E=o.getParameter("event");if(E.type){var s=this.getStartMonth();var i=this._oItemNavigation.getFocusedIndex();var m=i+s;var b=this.getMonths();switch(E.type){case"sapnext":case"sapnextmodifiers":if(m<11){m++;k.call(this,m,true);}break;case"sapprevious":case"sappreviousmodifiers":if(m>0){m--;k.call(this,m,true);}break;case"sappagedown":if(m<12-b){m=m+b;k.call(this,m,true);}else if(b===12){this.firePageChange({offset:1});}break;case"sappageup":if(m>b){m=m-b;k.call(this,m,true);}else if(b===12){this.firePageChange({offset:-1});}break;default:break;}}}function h(m,n){var b=this._oItemNavigation.getItemDomRefs();var $;var s=this.getId()+"-m"+m;for(var i=0;i<b.length;i++){$=q(b[i]);if($.attr("id")==s){$.addClass("sapUiCalItemSel");$.attr("aria-selected","true");}else{$.removeClass("sapUiCalItemSel");$.attr("aria-selected","false");}}if(!n){this.setProperty("month",m,true);}}function j(){if(!this._bNamesLengthChecked){var i=0;var m=this._oItemNavigation.getItemDomRefs();var t=false;var n=this.getMonths();var B=Math.ceil(12/n);var o=n-1;for(var b=0;b<B;b++){if(n<12){k.call(this,o);o=o+n;if(o>11){o=11;}}for(i=0;i<m.length;i++){var p=m[i];if(Math.abs(p.clientWidth-p.scrollWidth)>1){t=true;break;}}if(t){break;}}if(n<12){o=this.getMonth();k.call(this,o);}if(t){this._bLongMonth=false;var r=this._getLocaleData();var s=this.getPrimaryCalendarType();var u=r.getMonthsStandAlone("abbreviated",s);var v=r.getMonthsStandAlone("wide",s);for(i=0;i<m.length;i++){var $=q(m[i]);$.text(u[i]);$.attr("aria-label",v[i]);}}else{this._bLongMonth=true;}this._bNamesLengthChecked=true;}}function k(m,F){var b=this._oItemNavigation.getItemDomRefs();if(b.length>11){return;}var n=b.length;var s=Math.floor(m/n)*n;if(s+n>12){s=12-n;}var o=this._getLocaleData();var p=[];var r=[];var t=this.getPrimaryCalendarType();if(this._bLongMonth||!this._bNamesLengthChecked){p=o.getMonthsStandAlone("wide",t);}else{p=o.getMonthsStandAlone("abbreviated",t);r=o.getMonthsStandAlone("wide",t);}var S=this.getMonth();for(var i=0;i<b.length;i++){var u=i+s;var $=q(b[i]);$.text(p[i+s]);$.attr("id",this.getId()+"-m"+(i+s));if(!this._bLongMonth){$.attr("aria-label",r[i+s]);}if(u==S){$.addClass("sapUiCalItemSel");$.attr("aria-selected","true");}else{$.removeClass("sapUiCalItemSel");$.attr("aria-selected","false");}if(u<this._iMinMonth||u>this._iMaxMonth){$.addClass("sapUiCalItemDsbl");$.attr("aria-disabled",true);}else{$.removeClass("sapUiCalItemDsbl");$.removeAttr("aria-disabled");}}this._oItemNavigation.focusItem(m-s);if(F){this.firePageChange();}}return c;});