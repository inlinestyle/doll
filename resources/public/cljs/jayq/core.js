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
{var temp__3971__auto____331370 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____331370))
{var cm__331371 = temp__3971__auto____331370;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__331371),cljs.core.str("]")].join('');
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
var $__delegate = function (sel,p__331372){
var vec__331376__331377 = p__331372;
var context__331378 = cljs.core.nth.call(null,vec__331376__331377,0,null);
if(cljs.core.not.call(null,context__331378))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__331378);
}
};
var $ = function (sel,var_args){
var p__331372 = null;
if (goog.isDef(var_args)) {
  p__331372 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__331372);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__331379){
var sel = cljs.core.first(arglist__331379);
var p__331372 = cljs.core.rest(arglist__331379);
return $__delegate(sel, p__331372);
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
var or__3824__auto____331380 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____331380))
{return or__3824__auto____331380;
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
var G__331381 = null;
var G__331381__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__331381__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__331381 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__331381__2.call(this,_,k);
case 3:
return G__331381__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__331381;
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
var attr__delegate = function ($elem,a,p__331382){
var vec__331387__331388 = p__331382;
var v__331389 = cljs.core.nth.call(null,vec__331387__331388,0,null);
var a__331390 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__331389))
{return $elem.attr(a__331390);
} else
{return $elem.attr(a__331390,v__331389);
}
};
var attr = function ($elem,a,var_args){
var p__331382 = null;
if (goog.isDef(var_args)) {
  p__331382 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__331382);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__331391){
var $elem = cljs.core.first(arglist__331391);
var a = cljs.core.first(cljs.core.next(arglist__331391));
var p__331382 = cljs.core.rest(cljs.core.next(arglist__331391));
return attr__delegate($elem, a, p__331382);
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
var data__delegate = function ($elem,k,p__331392){
var vec__331397__331398 = p__331392;
var v__331399 = cljs.core.nth.call(null,vec__331397__331398,0,null);
var k__331400 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__331399))
{return $elem.data(k__331400);
} else
{return $elem.data(k__331400,v__331399);
}
};
var data = function ($elem,k,var_args){
var p__331392 = null;
if (goog.isDef(var_args)) {
  p__331392 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__331392);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__331401){
var $elem = cljs.core.first(arglist__331401);
var k = cljs.core.first(cljs.core.next(arglist__331401));
var p__331392 = cljs.core.rest(cljs.core.next(arglist__331401));
return data__delegate($elem, k, p__331392);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__331403 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__331403);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__331405 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__331405);
});
jayq.core.toggle_class = (function toggle_class($elem,cl){
var cl__331407 = cljs.core.name.call(null,cl);
return $elem.toggleClass(cl__331407);
});
jayq.core.has_class = (function has_class($elem,cl){
var cl__331409 = cljs.core.name.call(null,cl);
return $elem.hasClass(cl__331409);
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
var hide__delegate = function ($elem,p__331410){
var vec__331415__331416 = p__331410;
var speed__331417 = cljs.core.nth.call(null,vec__331415__331416,0,null);
var on_finish__331418 = cljs.core.nth.call(null,vec__331415__331416,1,null);
return $elem.hide(speed__331417,on_finish__331418);
};
var hide = function ($elem,var_args){
var p__331410 = null;
if (goog.isDef(var_args)) {
  p__331410 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__331410);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__331419){
var $elem = cljs.core.first(arglist__331419);
var p__331410 = cljs.core.rest(arglist__331419);
return hide__delegate($elem, p__331410);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__331420){
var vec__331425__331426 = p__331420;
var speed__331427 = cljs.core.nth.call(null,vec__331425__331426,0,null);
var on_finish__331428 = cljs.core.nth.call(null,vec__331425__331426,1,null);
return $elem.show(speed__331427,on_finish__331428);
};
var show = function ($elem,var_args){
var p__331420 = null;
if (goog.isDef(var_args)) {
  p__331420 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__331420);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__331429){
var $elem = cljs.core.first(arglist__331429);
var p__331420 = cljs.core.rest(arglist__331429);
return show__delegate($elem, p__331420);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__331430){
var vec__331435__331436 = p__331430;
var speed__331437 = cljs.core.nth.call(null,vec__331435__331436,0,null);
var on_finish__331438 = cljs.core.nth.call(null,vec__331435__331436,1,null);
return $elem.toggle(speed__331437,on_finish__331438);
};
var toggle = function ($elem,var_args){
var p__331430 = null;
if (goog.isDef(var_args)) {
  p__331430 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__331430);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__331439){
var $elem = cljs.core.first(arglist__331439);
var p__331430 = cljs.core.rest(arglist__331439);
return toggle__delegate($elem, p__331430);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__331440){
var vec__331445__331446 = p__331440;
var speed__331447 = cljs.core.nth.call(null,vec__331445__331446,0,null);
var on_finish__331448 = cljs.core.nth.call(null,vec__331445__331446,1,null);
return $elem.fadeOut(speed__331447,on_finish__331448);
};
var fade_out = function ($elem,var_args){
var p__331440 = null;
if (goog.isDef(var_args)) {
  p__331440 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__331440);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__331449){
var $elem = cljs.core.first(arglist__331449);
var p__331440 = cljs.core.rest(arglist__331449);
return fade_out__delegate($elem, p__331440);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__331450){
var vec__331455__331456 = p__331450;
var speed__331457 = cljs.core.nth.call(null,vec__331455__331456,0,null);
var on_finish__331458 = cljs.core.nth.call(null,vec__331455__331456,1,null);
return $elem.fadeIn(speed__331457,on_finish__331458);
};
var fade_in = function ($elem,var_args){
var p__331450 = null;
if (goog.isDef(var_args)) {
  p__331450 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__331450);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__331459){
var $elem = cljs.core.first(arglist__331459);
var p__331450 = cljs.core.rest(arglist__331459);
return fade_in__delegate($elem, p__331450);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__331460){
var vec__331465__331466 = p__331460;
var speed__331467 = cljs.core.nth.call(null,vec__331465__331466,0,null);
var on_finish__331468 = cljs.core.nth.call(null,vec__331465__331466,1,null);
return $elem.slideUp(speed__331467,on_finish__331468);
};
var slide_up = function ($elem,var_args){
var p__331460 = null;
if (goog.isDef(var_args)) {
  p__331460 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__331460);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__331469){
var $elem = cljs.core.first(arglist__331469);
var p__331460 = cljs.core.rest(arglist__331469);
return slide_up__delegate($elem, p__331460);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__331470){
var vec__331475__331476 = p__331470;
var speed__331477 = cljs.core.nth.call(null,vec__331475__331476,0,null);
var on_finish__331478 = cljs.core.nth.call(null,vec__331475__331476,1,null);
return $elem.slideDown(speed__331477,on_finish__331478);
};
var slide_down = function ($elem,var_args){
var p__331470 = null;
if (goog.isDef(var_args)) {
  p__331470 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__331470);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__331479){
var $elem = cljs.core.first(arglist__331479);
var p__331470 = cljs.core.rest(arglist__331479);
return slide_down__delegate($elem, p__331470);
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
var closest__delegate = function ($elem,selector,p__331480){
var vec__331484__331485 = p__331480;
var context__331486 = cljs.core.nth.call(null,vec__331484__331485,0,null);
return $elem.closest(selector,context__331486);
};
var closest = function ($elem,selector,var_args){
var p__331480 = null;
if (goog.isDef(var_args)) {
  p__331480 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return closest__delegate.call(this, $elem, selector, p__331480);
};
closest.cljs$lang$maxFixedArity = 2;
closest.cljs$lang$applyTo = (function (arglist__331487){
var $elem = cljs.core.first(arglist__331487);
var selector = cljs.core.first(cljs.core.next(arglist__331487));
var p__331480 = cljs.core.rest(cljs.core.next(arglist__331487));
return closest__delegate($elem, selector, p__331480);
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
var val__delegate = function ($elem,p__331488){
var vec__331492__331493 = p__331488;
var v__331494 = cljs.core.nth.call(null,vec__331492__331493,0,null);
if(cljs.core.truth_(v__331494))
{return $elem.val(v__331494);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__331488 = null;
if (goog.isDef(var_args)) {
  p__331488 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__331488);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__331495){
var $elem = cljs.core.first(arglist__331495);
var p__331488 = cljs.core.rest(arglist__331495);
return val__delegate($elem, p__331488);
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
jayq.core.xhr = (function xhr(p__331496,content,callback){
var vec__331502__331503 = p__331496;
var method__331504 = cljs.core.nth.call(null,vec__331502__331503,0,null);
var uri__331505 = cljs.core.nth.call(null,vec__331502__331503,1,null);
var params__331506 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__331504)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__331505,params__331506);
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
var unbind__delegate = function ($elem,ev,p__331507){
var vec__331511__331512 = p__331507;
var func__331513 = cljs.core.nth.call(null,vec__331511__331512,0,null);
return $elem.unbind(cljs.core.name.call(null,ev),func__331513);
};
var unbind = function ($elem,ev,var_args){
var p__331507 = null;
if (goog.isDef(var_args)) {
  p__331507 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unbind__delegate.call(this, $elem, ev, p__331507);
};
unbind.cljs$lang$maxFixedArity = 2;
unbind.cljs$lang$applyTo = (function (arglist__331514){
var $elem = cljs.core.first(arglist__331514);
var ev = cljs.core.first(cljs.core.next(arglist__331514));
var p__331507 = cljs.core.rest(cljs.core.next(arglist__331514));
return unbind__delegate($elem, ev, p__331507);
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
var on__delegate = function ($elem,events,p__331515){
var vec__331521__331522 = p__331515;
var sel__331523 = cljs.core.nth.call(null,vec__331521__331522,0,null);
var data__331524 = cljs.core.nth.call(null,vec__331521__331522,1,null);
var handler__331525 = cljs.core.nth.call(null,vec__331521__331522,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__331523),data__331524,handler__331525);
};
var on = function ($elem,events,var_args){
var p__331515 = null;
if (goog.isDef(var_args)) {
  p__331515 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__331515);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__331526){
var $elem = cljs.core.first(arglist__331526);
var events = cljs.core.first(cljs.core.next(arglist__331526));
var p__331515 = cljs.core.rest(cljs.core.next(arglist__331526));
return on__delegate($elem, events, p__331515);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__331527){
var vec__331533__331534 = p__331527;
var sel__331535 = cljs.core.nth.call(null,vec__331533__331534,0,null);
var data__331536 = cljs.core.nth.call(null,vec__331533__331534,1,null);
var handler__331537 = cljs.core.nth.call(null,vec__331533__331534,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__331535),data__331536,handler__331537);
};
var one = function ($elem,events,var_args){
var p__331527 = null;
if (goog.isDef(var_args)) {
  p__331527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__331527);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__331538){
var $elem = cljs.core.first(arglist__331538);
var events = cljs.core.first(cljs.core.next(arglist__331538));
var p__331527 = cljs.core.rest(cljs.core.next(arglist__331538));
return one__delegate($elem, events, p__331527);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__331539){
var vec__331544__331545 = p__331539;
var sel__331546 = cljs.core.nth.call(null,vec__331544__331545,0,null);
var handler__331547 = cljs.core.nth.call(null,vec__331544__331545,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__331546),handler__331547);
};
var off = function ($elem,events,var_args){
var p__331539 = null;
if (goog.isDef(var_args)) {
  p__331539 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__331539);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__331548){
var $elem = cljs.core.first(arglist__331548);
var events = cljs.core.first(cljs.core.next(arglist__331548));
var p__331539 = cljs.core.rest(cljs.core.next(arglist__331548));
return off__delegate($elem, events, p__331539);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
