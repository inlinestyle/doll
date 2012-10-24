goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.string_QMARK_.call(null,sel))
{return sel;
} else
{if(cljs.core.fn_QMARK_.call(null,sel))
{var temp__3971__auto____31974 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____31974))
{var cm__31975 = temp__3971__auto____31974;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__31975),cljs.core.str("]")].join('');
} else
{return sel;
}
} else
{if(cljs.core.keyword_QMARK_.call(null,sel))
{return cljs.core.name.call(null,sel);
} else
{if("\uFDD0'else")
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__31976){
var vec__31980__31981 = p__31976;
var context__31982 = cljs.core.nth.call(null,vec__31980__31981,0,null);
if(cljs.core.not.call(null,context__31982))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__31982);
}
};
var $ = function (sel,var_args){
var p__31976 = null;
if (goog.isDef(var_args)) {
  p__31976 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__31976);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__31983){
var sel = cljs.core.first(arglist__31983);
var p__31976 = cljs.core.rest(arglist__31983);
return $__delegate(sel, p__31976);
});
$.cljs$lang$arity$variadic = $__delegate;
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
return cljs.core.ci_reduce.call(null,this$,f);
});
jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,this$,f,start);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var or__3824__auto____31984 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____31984))
{return or__3824__auto____31984;
} else
{return null;
}
});
jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{if((void 0 === not_found))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
if((cljs.core.count.call(null,this$) > 1))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__31985 = null;
var G__31985__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__31985__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__31985 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__31985__2.call(this,_,k);
case 3:
return G__31985__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31985;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.keyword_QMARK_.call(null,opts))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__31986){
var vec__31991__31992 = p__31986;
var v__31993 = cljs.core.nth.call(null,vec__31991__31992,0,null);
var a__31994 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__31993))
{return $elem.attr(a__31994);
} else
{return $elem.attr(a__31994,v__31993);
}
};
var attr = function ($elem,a,var_args){
var p__31986 = null;
if (goog.isDef(var_args)) {
  p__31986 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__31986);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__31995){
var $elem = cljs.core.first(arglist__31995);
var a = cljs.core.first(cljs.core.next(arglist__31995));
var p__31986 = cljs.core.rest(cljs.core.next(arglist__31995));
return attr__delegate($elem, a, p__31986);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
jayq.core.remove_attr = (function remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__31996){
var vec__32001__32002 = p__31996;
var v__32003 = cljs.core.nth.call(null,vec__32001__32002,0,null);
var k__32004 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__32003))
{return $elem.data(k__32004);
} else
{return $elem.data(k__32004,v__32003);
}
};
var data = function ($elem,k,var_args){
var p__31996 = null;
if (goog.isDef(var_args)) {
  p__31996 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__31996);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__32005){
var $elem = cljs.core.first(arglist__32005);
var k = cljs.core.first(cljs.core.next(arglist__32005));
var p__31996 = cljs.core.rest(cljs.core.next(arglist__32005));
return data__delegate($elem, k, p__31996);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__32007 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__32007);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__32009 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__32009);
});
jayq.core.toggle_class = (function toggle_class($elem,cl){
var cl__32011 = cljs.core.name.call(null,cl);
return $elem.toggleClass(cl__32011);
});
jayq.core.has_class = (function has_class($elem,cl){
var cl__32013 = cljs.core.name.call(null,cl);
return $elem.hasClass(cl__32013);
});
jayq.core.after = (function after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__32014){
var vec__32019__32020 = p__32014;
var speed__32021 = cljs.core.nth.call(null,vec__32019__32020,0,null);
var on_finish__32022 = cljs.core.nth.call(null,vec__32019__32020,1,null);
return $elem.hide(speed__32021,on_finish__32022);
};
var hide = function ($elem,var_args){
var p__32014 = null;
if (goog.isDef(var_args)) {
  p__32014 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__32014);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__32023){
var $elem = cljs.core.first(arglist__32023);
var p__32014 = cljs.core.rest(arglist__32023);
return hide__delegate($elem, p__32014);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__32024){
var vec__32029__32030 = p__32024;
var speed__32031 = cljs.core.nth.call(null,vec__32029__32030,0,null);
var on_finish__32032 = cljs.core.nth.call(null,vec__32029__32030,1,null);
return $elem.show(speed__32031,on_finish__32032);
};
var show = function ($elem,var_args){
var p__32024 = null;
if (goog.isDef(var_args)) {
  p__32024 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__32024);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__32033){
var $elem = cljs.core.first(arglist__32033);
var p__32024 = cljs.core.rest(arglist__32033);
return show__delegate($elem, p__32024);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__32034){
var vec__32039__32040 = p__32034;
var speed__32041 = cljs.core.nth.call(null,vec__32039__32040,0,null);
var on_finish__32042 = cljs.core.nth.call(null,vec__32039__32040,1,null);
return $elem.toggle(speed__32041,on_finish__32042);
};
var toggle = function ($elem,var_args){
var p__32034 = null;
if (goog.isDef(var_args)) {
  p__32034 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__32034);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__32043){
var $elem = cljs.core.first(arglist__32043);
var p__32034 = cljs.core.rest(arglist__32043);
return toggle__delegate($elem, p__32034);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__32044){
var vec__32049__32050 = p__32044;
var speed__32051 = cljs.core.nth.call(null,vec__32049__32050,0,null);
var on_finish__32052 = cljs.core.nth.call(null,vec__32049__32050,1,null);
return $elem.fadeOut(speed__32051,on_finish__32052);
};
var fade_out = function ($elem,var_args){
var p__32044 = null;
if (goog.isDef(var_args)) {
  p__32044 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__32044);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__32053){
var $elem = cljs.core.first(arglist__32053);
var p__32044 = cljs.core.rest(arglist__32053);
return fade_out__delegate($elem, p__32044);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__32054){
var vec__32059__32060 = p__32054;
var speed__32061 = cljs.core.nth.call(null,vec__32059__32060,0,null);
var on_finish__32062 = cljs.core.nth.call(null,vec__32059__32060,1,null);
return $elem.fadeIn(speed__32061,on_finish__32062);
};
var fade_in = function ($elem,var_args){
var p__32054 = null;
if (goog.isDef(var_args)) {
  p__32054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__32054);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__32063){
var $elem = cljs.core.first(arglist__32063);
var p__32054 = cljs.core.rest(arglist__32063);
return fade_in__delegate($elem, p__32054);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__32064){
var vec__32069__32070 = p__32064;
var speed__32071 = cljs.core.nth.call(null,vec__32069__32070,0,null);
var on_finish__32072 = cljs.core.nth.call(null,vec__32069__32070,1,null);
return $elem.slideUp(speed__32071,on_finish__32072);
};
var slide_up = function ($elem,var_args){
var p__32064 = null;
if (goog.isDef(var_args)) {
  p__32064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__32064);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__32073){
var $elem = cljs.core.first(arglist__32073);
var p__32064 = cljs.core.rest(arglist__32073);
return slide_up__delegate($elem, p__32064);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__32074){
var vec__32079__32080 = p__32074;
var speed__32081 = cljs.core.nth.call(null,vec__32079__32080,0,null);
var on_finish__32082 = cljs.core.nth.call(null,vec__32079__32080,1,null);
return $elem.slideDown(speed__32081,on_finish__32082);
};
var slide_down = function ($elem,var_args){
var p__32074 = null;
if (goog.isDef(var_args)) {
  p__32074 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__32074);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__32083){
var $elem = cljs.core.first(arglist__32083);
var p__32074 = cljs.core.rest(arglist__32083);
return slide_down__delegate($elem, p__32074);
});
slide_down.cljs$lang$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
/**
* @param {...*} var_args
*/
jayq.core.closest = (function() { 
var closest__delegate = function ($elem,selector,p__32084){
var vec__32088__32089 = p__32084;
var context__32090 = cljs.core.nth.call(null,vec__32088__32089,0,null);
return $elem.closest(selector,context__32090);
};
var closest = function ($elem,selector,var_args){
var p__32084 = null;
if (goog.isDef(var_args)) {
  p__32084 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return closest__delegate.call(this, $elem, selector, p__32084);
};
closest.cljs$lang$maxFixedArity = 2;
closest.cljs$lang$applyTo = (function (arglist__32091){
var $elem = cljs.core.first(arglist__32091);
var selector = cljs.core.first(cljs.core.next(arglist__32091));
var p__32084 = cljs.core.rest(cljs.core.next(arglist__32091));
return closest__delegate($elem, selector, p__32084);
});
closest.cljs$lang$arity$variadic = closest__delegate;
return closest;
})()
;
jayq.core.clone = (function clone($elem){
return $elem.clone();
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__32092){
var vec__32096__32097 = p__32092;
var v__32098 = cljs.core.nth.call(null,vec__32096__32097,0,null);
if(cljs.core.truth_(v__32098))
{return $elem.val(v__32098);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__32092 = null;
if (goog.isDef(var_args)) {
  p__32092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__32092);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__32099){
var $elem = cljs.core.first(arglist__32099);
var p__32092 = cljs.core.rest(arglist__32099);
return val__delegate($elem, p__32092);
});
val.cljs$lang$arity$variadic = val__delegate;
return val;
})()
;
jayq.core.serialize = (function serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__32100,content,callback){
var vec__32106__32107 = p__32100;
var method__32108 = cljs.core.nth.call(null,vec__32106__32107,0,null);
var uri__32109 = cljs.core.nth.call(null,vec__32106__32107,1,null);
var params__32110 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__32108)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__32109,params__32110);
});
jayq.core.ajax = (function() {
var ajax = null;
var ajax__1 = (function (settings){
return jQuery.ajax(jayq.util.clj__GT_js.call(null,settings));
});
var ajax__2 = (function (url,settings){
return jQuery.ajax(url,jayq.util.clj__GT_js.call(null,settings));
});
ajax = function(url,settings){
switch(arguments.length){
case 1:
return ajax__1.call(this,url);
case 2:
return ajax__2.call(this,url,settings);
}
throw('Invalid arity: ' + arguments.length);
};
ajax.cljs$lang$arity$1 = ajax__1;
ajax.cljs$lang$arity$2 = ajax__2;
return ajax;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
/**
* @param {...*} var_args
*/
jayq.core.unbind = (function() { 
var unbind__delegate = function ($elem,ev,p__32111){
var vec__32115__32116 = p__32111;
var func__32117 = cljs.core.nth.call(null,vec__32115__32116,0,null);
return $elem.unbind(cljs.core.name.call(null,ev),func__32117);
};
var unbind = function ($elem,ev,var_args){
var p__32111 = null;
if (goog.isDef(var_args)) {
  p__32111 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unbind__delegate.call(this, $elem, ev, p__32111);
};
unbind.cljs$lang$maxFixedArity = 2;
unbind.cljs$lang$applyTo = (function (arglist__32118){
var $elem = cljs.core.first(arglist__32118);
var ev = cljs.core.first(cljs.core.next(arglist__32118));
var p__32111 = cljs.core.rest(cljs.core.next(arglist__32118));
return unbind__delegate($elem, ev, p__32111);
});
unbind.cljs$lang$arity$variadic = unbind__delegate;
return unbind;
})()
;
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.keyword_QMARK_.call(null,e))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.map_QMARK_.call(null,e))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.coll_QMARK_.call(null,e))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Unknown event type: "),cljs.core.str(e)].join('')));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__32119){
var vec__32125__32126 = p__32119;
var sel__32127 = cljs.core.nth.call(null,vec__32125__32126,0,null);
var data__32128 = cljs.core.nth.call(null,vec__32125__32126,1,null);
var handler__32129 = cljs.core.nth.call(null,vec__32125__32126,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__32127),data__32128,handler__32129);
};
var on = function ($elem,events,var_args){
var p__32119 = null;
if (goog.isDef(var_args)) {
  p__32119 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__32119);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__32130){
var $elem = cljs.core.first(arglist__32130);
var events = cljs.core.first(cljs.core.next(arglist__32130));
var p__32119 = cljs.core.rest(cljs.core.next(arglist__32130));
return on__delegate($elem, events, p__32119);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__32131){
var vec__32137__32138 = p__32131;
var sel__32139 = cljs.core.nth.call(null,vec__32137__32138,0,null);
var data__32140 = cljs.core.nth.call(null,vec__32137__32138,1,null);
var handler__32141 = cljs.core.nth.call(null,vec__32137__32138,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__32139),data__32140,handler__32141);
};
var one = function ($elem,events,var_args){
var p__32131 = null;
if (goog.isDef(var_args)) {
  p__32131 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__32131);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__32142){
var $elem = cljs.core.first(arglist__32142);
var events = cljs.core.first(cljs.core.next(arglist__32142));
var p__32131 = cljs.core.rest(cljs.core.next(arglist__32142));
return one__delegate($elem, events, p__32131);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__32143){
var vec__32148__32149 = p__32143;
var sel__32150 = cljs.core.nth.call(null,vec__32148__32149,0,null);
var handler__32151 = cljs.core.nth.call(null,vec__32148__32149,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__32150),handler__32151);
};
var off = function ($elem,events,var_args){
var p__32143 = null;
if (goog.isDef(var_args)) {
  p__32143 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__32143);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__32152){
var $elem = cljs.core.first(arglist__32152);
var events = cljs.core.first(cljs.core.next(arglist__32152));
var p__32143 = cljs.core.rest(cljs.core.next(arglist__32152));
return off__delegate($elem, events, p__32143);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
