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
{var temp__3971__auto____39357 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____39357))
{var cm__39358 = temp__3971__auto____39357;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__39358),cljs.core.str("]")].join('');
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
var $__delegate = function (sel,p__39359){
var vec__39363__39364 = p__39359;
var context__39365 = cljs.core.nth.call(null,vec__39363__39364,0,null);
if(cljs.core.not.call(null,context__39365))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__39365);
}
};
var $ = function (sel,var_args){
var p__39359 = null;
if (goog.isDef(var_args)) {
  p__39359 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__39359);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__39366){
var sel = cljs.core.first(arglist__39366);
var p__39359 = cljs.core.rest(arglist__39366);
return $__delegate(sel, p__39359);
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
var or__3824__auto____39367 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____39367))
{return or__3824__auto____39367;
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
var G__39368 = null;
var G__39368__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__39368__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__39368 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__39368__2.call(this,_,k);
case 3:
return G__39368__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__39368;
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
var attr__delegate = function ($elem,a,p__39369){
var vec__39374__39375 = p__39369;
var v__39376 = cljs.core.nth.call(null,vec__39374__39375,0,null);
var a__39377 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__39376))
{return $elem.attr(a__39377);
} else
{return $elem.attr(a__39377,v__39376);
}
};
var attr = function ($elem,a,var_args){
var p__39369 = null;
if (goog.isDef(var_args)) {
  p__39369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__39369);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__39378){
var $elem = cljs.core.first(arglist__39378);
var a = cljs.core.first(cljs.core.next(arglist__39378));
var p__39369 = cljs.core.rest(cljs.core.next(arglist__39378));
return attr__delegate($elem, a, p__39369);
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
var data__delegate = function ($elem,k,p__39379){
var vec__39384__39385 = p__39379;
var v__39386 = cljs.core.nth.call(null,vec__39384__39385,0,null);
var k__39387 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__39386))
{return $elem.data(k__39387);
} else
{return $elem.data(k__39387,v__39386);
}
};
var data = function ($elem,k,var_args){
var p__39379 = null;
if (goog.isDef(var_args)) {
  p__39379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__39379);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__39388){
var $elem = cljs.core.first(arglist__39388);
var k = cljs.core.first(cljs.core.next(arglist__39388));
var p__39379 = cljs.core.rest(cljs.core.next(arglist__39388));
return data__delegate($elem, k, p__39379);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__39390 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__39390);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__39392 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__39392);
});
jayq.core.toggle_class = (function toggle_class($elem,cl){
var cl__39394 = cljs.core.name.call(null,cl);
return $elem.toggleClass(cl__39394);
});
jayq.core.has_class = (function has_class($elem,cl){
var cl__39396 = cljs.core.name.call(null,cl);
return $elem.hasClass(cl__39396);
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
var hide__delegate = function ($elem,p__39397){
var vec__39402__39403 = p__39397;
var speed__39404 = cljs.core.nth.call(null,vec__39402__39403,0,null);
var on_finish__39405 = cljs.core.nth.call(null,vec__39402__39403,1,null);
return $elem.hide(speed__39404,on_finish__39405);
};
var hide = function ($elem,var_args){
var p__39397 = null;
if (goog.isDef(var_args)) {
  p__39397 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__39397);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__39406){
var $elem = cljs.core.first(arglist__39406);
var p__39397 = cljs.core.rest(arglist__39406);
return hide__delegate($elem, p__39397);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__39407){
var vec__39412__39413 = p__39407;
var speed__39414 = cljs.core.nth.call(null,vec__39412__39413,0,null);
var on_finish__39415 = cljs.core.nth.call(null,vec__39412__39413,1,null);
return $elem.show(speed__39414,on_finish__39415);
};
var show = function ($elem,var_args){
var p__39407 = null;
if (goog.isDef(var_args)) {
  p__39407 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__39407);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__39416){
var $elem = cljs.core.first(arglist__39416);
var p__39407 = cljs.core.rest(arglist__39416);
return show__delegate($elem, p__39407);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__39417){
var vec__39422__39423 = p__39417;
var speed__39424 = cljs.core.nth.call(null,vec__39422__39423,0,null);
var on_finish__39425 = cljs.core.nth.call(null,vec__39422__39423,1,null);
return $elem.toggle(speed__39424,on_finish__39425);
};
var toggle = function ($elem,var_args){
var p__39417 = null;
if (goog.isDef(var_args)) {
  p__39417 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__39417);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__39426){
var $elem = cljs.core.first(arglist__39426);
var p__39417 = cljs.core.rest(arglist__39426);
return toggle__delegate($elem, p__39417);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__39427){
var vec__39432__39433 = p__39427;
var speed__39434 = cljs.core.nth.call(null,vec__39432__39433,0,null);
var on_finish__39435 = cljs.core.nth.call(null,vec__39432__39433,1,null);
return $elem.fadeOut(speed__39434,on_finish__39435);
};
var fade_out = function ($elem,var_args){
var p__39427 = null;
if (goog.isDef(var_args)) {
  p__39427 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__39427);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__39436){
var $elem = cljs.core.first(arglist__39436);
var p__39427 = cljs.core.rest(arglist__39436);
return fade_out__delegate($elem, p__39427);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__39437){
var vec__39442__39443 = p__39437;
var speed__39444 = cljs.core.nth.call(null,vec__39442__39443,0,null);
var on_finish__39445 = cljs.core.nth.call(null,vec__39442__39443,1,null);
return $elem.fadeIn(speed__39444,on_finish__39445);
};
var fade_in = function ($elem,var_args){
var p__39437 = null;
if (goog.isDef(var_args)) {
  p__39437 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__39437);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__39446){
var $elem = cljs.core.first(arglist__39446);
var p__39437 = cljs.core.rest(arglist__39446);
return fade_in__delegate($elem, p__39437);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__39447){
var vec__39452__39453 = p__39447;
var speed__39454 = cljs.core.nth.call(null,vec__39452__39453,0,null);
var on_finish__39455 = cljs.core.nth.call(null,vec__39452__39453,1,null);
return $elem.slideUp(speed__39454,on_finish__39455);
};
var slide_up = function ($elem,var_args){
var p__39447 = null;
if (goog.isDef(var_args)) {
  p__39447 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__39447);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__39456){
var $elem = cljs.core.first(arglist__39456);
var p__39447 = cljs.core.rest(arglist__39456);
return slide_up__delegate($elem, p__39447);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__39457){
var vec__39462__39463 = p__39457;
var speed__39464 = cljs.core.nth.call(null,vec__39462__39463,0,null);
var on_finish__39465 = cljs.core.nth.call(null,vec__39462__39463,1,null);
return $elem.slideDown(speed__39464,on_finish__39465);
};
var slide_down = function ($elem,var_args){
var p__39457 = null;
if (goog.isDef(var_args)) {
  p__39457 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__39457);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__39466){
var $elem = cljs.core.first(arglist__39466);
var p__39457 = cljs.core.rest(arglist__39466);
return slide_down__delegate($elem, p__39457);
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
var closest__delegate = function ($elem,selector,p__39467){
var vec__39471__39472 = p__39467;
var context__39473 = cljs.core.nth.call(null,vec__39471__39472,0,null);
return $elem.closest(selector,context__39473);
};
var closest = function ($elem,selector,var_args){
var p__39467 = null;
if (goog.isDef(var_args)) {
  p__39467 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return closest__delegate.call(this, $elem, selector, p__39467);
};
closest.cljs$lang$maxFixedArity = 2;
closest.cljs$lang$applyTo = (function (arglist__39474){
var $elem = cljs.core.first(arglist__39474);
var selector = cljs.core.first(cljs.core.next(arglist__39474));
var p__39467 = cljs.core.rest(cljs.core.next(arglist__39474));
return closest__delegate($elem, selector, p__39467);
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
var val__delegate = function ($elem,p__39475){
var vec__39479__39480 = p__39475;
var v__39481 = cljs.core.nth.call(null,vec__39479__39480,0,null);
if(cljs.core.truth_(v__39481))
{return $elem.val(v__39481);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__39475 = null;
if (goog.isDef(var_args)) {
  p__39475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__39475);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__39482){
var $elem = cljs.core.first(arglist__39482);
var p__39475 = cljs.core.rest(arglist__39482);
return val__delegate($elem, p__39475);
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
jayq.core.xhr = (function xhr(p__39483,content,callback){
var vec__39489__39490 = p__39483;
var method__39491 = cljs.core.nth.call(null,vec__39489__39490,0,null);
var uri__39492 = cljs.core.nth.call(null,vec__39489__39490,1,null);
var params__39493 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__39491)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__39492,params__39493);
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
var unbind__delegate = function ($elem,ev,p__39494){
var vec__39498__39499 = p__39494;
var func__39500 = cljs.core.nth.call(null,vec__39498__39499,0,null);
return $elem.unbind(cljs.core.name.call(null,ev),func__39500);
};
var unbind = function ($elem,ev,var_args){
var p__39494 = null;
if (goog.isDef(var_args)) {
  p__39494 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unbind__delegate.call(this, $elem, ev, p__39494);
};
unbind.cljs$lang$maxFixedArity = 2;
unbind.cljs$lang$applyTo = (function (arglist__39501){
var $elem = cljs.core.first(arglist__39501);
var ev = cljs.core.first(cljs.core.next(arglist__39501));
var p__39494 = cljs.core.rest(cljs.core.next(arglist__39501));
return unbind__delegate($elem, ev, p__39494);
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
var on__delegate = function ($elem,events,p__39502){
var vec__39508__39509 = p__39502;
var sel__39510 = cljs.core.nth.call(null,vec__39508__39509,0,null);
var data__39511 = cljs.core.nth.call(null,vec__39508__39509,1,null);
var handler__39512 = cljs.core.nth.call(null,vec__39508__39509,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__39510),data__39511,handler__39512);
};
var on = function ($elem,events,var_args){
var p__39502 = null;
if (goog.isDef(var_args)) {
  p__39502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__39502);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__39513){
var $elem = cljs.core.first(arglist__39513);
var events = cljs.core.first(cljs.core.next(arglist__39513));
var p__39502 = cljs.core.rest(cljs.core.next(arglist__39513));
return on__delegate($elem, events, p__39502);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__39514){
var vec__39520__39521 = p__39514;
var sel__39522 = cljs.core.nth.call(null,vec__39520__39521,0,null);
var data__39523 = cljs.core.nth.call(null,vec__39520__39521,1,null);
var handler__39524 = cljs.core.nth.call(null,vec__39520__39521,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__39522),data__39523,handler__39524);
};
var one = function ($elem,events,var_args){
var p__39514 = null;
if (goog.isDef(var_args)) {
  p__39514 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__39514);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__39525){
var $elem = cljs.core.first(arglist__39525);
var events = cljs.core.first(cljs.core.next(arglist__39525));
var p__39514 = cljs.core.rest(cljs.core.next(arglist__39525));
return one__delegate($elem, events, p__39514);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__39526){
var vec__39531__39532 = p__39526;
var sel__39533 = cljs.core.nth.call(null,vec__39531__39532,0,null);
var handler__39534 = cljs.core.nth.call(null,vec__39531__39532,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__39533),handler__39534);
};
var off = function ($elem,events,var_args){
var p__39526 = null;
if (goog.isDef(var_args)) {
  p__39526 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__39526);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__39535){
var $elem = cljs.core.first(arglist__39535);
var events = cljs.core.first(cljs.core.next(arglist__39535));
var p__39526 = cljs.core.rest(cljs.core.next(arglist__39535));
return off__delegate($elem, events, p__39526);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
