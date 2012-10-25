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
{var temp__3971__auto____560519 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____560519))
{var cm__560520 = temp__3971__auto____560519;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__560520),cljs.core.str("]")].join('');
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
var $__delegate = function (sel,p__560521){
var vec__560525__560526 = p__560521;
var context__560527 = cljs.core.nth.call(null,vec__560525__560526,0,null);
if(cljs.core.not.call(null,context__560527))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__560527);
}
};
var $ = function (sel,var_args){
var p__560521 = null;
if (goog.isDef(var_args)) {
  p__560521 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__560521);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__560528){
var sel = cljs.core.first(arglist__560528);
var p__560521 = cljs.core.rest(arglist__560528);
return $__delegate(sel, p__560521);
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
var or__3824__auto____560529 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____560529))
{return or__3824__auto____560529;
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
var G__560530 = null;
var G__560530__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__560530__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__560530 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__560530__2.call(this,_,k);
case 3:
return G__560530__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__560530;
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
var attr__delegate = function ($elem,a,p__560531){
var vec__560536__560537 = p__560531;
var v__560538 = cljs.core.nth.call(null,vec__560536__560537,0,null);
var a__560539 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__560538))
{return $elem.attr(a__560539);
} else
{return $elem.attr(a__560539,v__560538);
}
};
var attr = function ($elem,a,var_args){
var p__560531 = null;
if (goog.isDef(var_args)) {
  p__560531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__560531);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__560540){
var $elem = cljs.core.first(arglist__560540);
var a = cljs.core.first(cljs.core.next(arglist__560540));
var p__560531 = cljs.core.rest(cljs.core.next(arglist__560540));
return attr__delegate($elem, a, p__560531);
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
var data__delegate = function ($elem,k,p__560541){
var vec__560546__560547 = p__560541;
var v__560548 = cljs.core.nth.call(null,vec__560546__560547,0,null);
var k__560549 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__560548))
{return $elem.data(k__560549);
} else
{return $elem.data(k__560549,v__560548);
}
};
var data = function ($elem,k,var_args){
var p__560541 = null;
if (goog.isDef(var_args)) {
  p__560541 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__560541);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__560550){
var $elem = cljs.core.first(arglist__560550);
var k = cljs.core.first(cljs.core.next(arglist__560550));
var p__560541 = cljs.core.rest(cljs.core.next(arglist__560550));
return data__delegate($elem, k, p__560541);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__560552 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__560552);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__560554 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__560554);
});
jayq.core.toggle_class = (function toggle_class($elem,cl){
var cl__560556 = cljs.core.name.call(null,cl);
return $elem.toggleClass(cl__560556);
});
jayq.core.has_class = (function has_class($elem,cl){
var cl__560558 = cljs.core.name.call(null,cl);
return $elem.hasClass(cl__560558);
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
var hide__delegate = function ($elem,p__560559){
var vec__560564__560565 = p__560559;
var speed__560566 = cljs.core.nth.call(null,vec__560564__560565,0,null);
var on_finish__560567 = cljs.core.nth.call(null,vec__560564__560565,1,null);
return $elem.hide(speed__560566,on_finish__560567);
};
var hide = function ($elem,var_args){
var p__560559 = null;
if (goog.isDef(var_args)) {
  p__560559 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__560559);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__560568){
var $elem = cljs.core.first(arglist__560568);
var p__560559 = cljs.core.rest(arglist__560568);
return hide__delegate($elem, p__560559);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__560569){
var vec__560574__560575 = p__560569;
var speed__560576 = cljs.core.nth.call(null,vec__560574__560575,0,null);
var on_finish__560577 = cljs.core.nth.call(null,vec__560574__560575,1,null);
return $elem.show(speed__560576,on_finish__560577);
};
var show = function ($elem,var_args){
var p__560569 = null;
if (goog.isDef(var_args)) {
  p__560569 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__560569);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__560578){
var $elem = cljs.core.first(arglist__560578);
var p__560569 = cljs.core.rest(arglist__560578);
return show__delegate($elem, p__560569);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__560579){
var vec__560584__560585 = p__560579;
var speed__560586 = cljs.core.nth.call(null,vec__560584__560585,0,null);
var on_finish__560587 = cljs.core.nth.call(null,vec__560584__560585,1,null);
return $elem.toggle(speed__560586,on_finish__560587);
};
var toggle = function ($elem,var_args){
var p__560579 = null;
if (goog.isDef(var_args)) {
  p__560579 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__560579);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__560588){
var $elem = cljs.core.first(arglist__560588);
var p__560579 = cljs.core.rest(arglist__560588);
return toggle__delegate($elem, p__560579);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__560589){
var vec__560594__560595 = p__560589;
var speed__560596 = cljs.core.nth.call(null,vec__560594__560595,0,null);
var on_finish__560597 = cljs.core.nth.call(null,vec__560594__560595,1,null);
return $elem.fadeOut(speed__560596,on_finish__560597);
};
var fade_out = function ($elem,var_args){
var p__560589 = null;
if (goog.isDef(var_args)) {
  p__560589 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__560589);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__560598){
var $elem = cljs.core.first(arglist__560598);
var p__560589 = cljs.core.rest(arglist__560598);
return fade_out__delegate($elem, p__560589);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__560599){
var vec__560604__560605 = p__560599;
var speed__560606 = cljs.core.nth.call(null,vec__560604__560605,0,null);
var on_finish__560607 = cljs.core.nth.call(null,vec__560604__560605,1,null);
return $elem.fadeIn(speed__560606,on_finish__560607);
};
var fade_in = function ($elem,var_args){
var p__560599 = null;
if (goog.isDef(var_args)) {
  p__560599 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__560599);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__560608){
var $elem = cljs.core.first(arglist__560608);
var p__560599 = cljs.core.rest(arglist__560608);
return fade_in__delegate($elem, p__560599);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__560609){
var vec__560614__560615 = p__560609;
var speed__560616 = cljs.core.nth.call(null,vec__560614__560615,0,null);
var on_finish__560617 = cljs.core.nth.call(null,vec__560614__560615,1,null);
return $elem.slideUp(speed__560616,on_finish__560617);
};
var slide_up = function ($elem,var_args){
var p__560609 = null;
if (goog.isDef(var_args)) {
  p__560609 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__560609);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__560618){
var $elem = cljs.core.first(arglist__560618);
var p__560609 = cljs.core.rest(arglist__560618);
return slide_up__delegate($elem, p__560609);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__560619){
var vec__560624__560625 = p__560619;
var speed__560626 = cljs.core.nth.call(null,vec__560624__560625,0,null);
var on_finish__560627 = cljs.core.nth.call(null,vec__560624__560625,1,null);
return $elem.slideDown(speed__560626,on_finish__560627);
};
var slide_down = function ($elem,var_args){
var p__560619 = null;
if (goog.isDef(var_args)) {
  p__560619 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__560619);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__560628){
var $elem = cljs.core.first(arglist__560628);
var p__560619 = cljs.core.rest(arglist__560628);
return slide_down__delegate($elem, p__560619);
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
var closest__delegate = function ($elem,selector,p__560629){
var vec__560633__560634 = p__560629;
var context__560635 = cljs.core.nth.call(null,vec__560633__560634,0,null);
return $elem.closest(selector,context__560635);
};
var closest = function ($elem,selector,var_args){
var p__560629 = null;
if (goog.isDef(var_args)) {
  p__560629 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return closest__delegate.call(this, $elem, selector, p__560629);
};
closest.cljs$lang$maxFixedArity = 2;
closest.cljs$lang$applyTo = (function (arglist__560636){
var $elem = cljs.core.first(arglist__560636);
var selector = cljs.core.first(cljs.core.next(arglist__560636));
var p__560629 = cljs.core.rest(cljs.core.next(arglist__560636));
return closest__delegate($elem, selector, p__560629);
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
var val__delegate = function ($elem,p__560637){
var vec__560641__560642 = p__560637;
var v__560643 = cljs.core.nth.call(null,vec__560641__560642,0,null);
if(cljs.core.truth_(v__560643))
{return $elem.val(v__560643);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__560637 = null;
if (goog.isDef(var_args)) {
  p__560637 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__560637);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__560644){
var $elem = cljs.core.first(arglist__560644);
var p__560637 = cljs.core.rest(arglist__560644);
return val__delegate($elem, p__560637);
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
jayq.core.xhr = (function xhr(p__560645,content,callback){
var vec__560651__560652 = p__560645;
var method__560653 = cljs.core.nth.call(null,vec__560651__560652,0,null);
var uri__560654 = cljs.core.nth.call(null,vec__560651__560652,1,null);
var params__560655 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__560653)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__560654,params__560655);
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
var unbind__delegate = function ($elem,ev,p__560656){
var vec__560660__560661 = p__560656;
var func__560662 = cljs.core.nth.call(null,vec__560660__560661,0,null);
return $elem.unbind(cljs.core.name.call(null,ev),func__560662);
};
var unbind = function ($elem,ev,var_args){
var p__560656 = null;
if (goog.isDef(var_args)) {
  p__560656 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unbind__delegate.call(this, $elem, ev, p__560656);
};
unbind.cljs$lang$maxFixedArity = 2;
unbind.cljs$lang$applyTo = (function (arglist__560663){
var $elem = cljs.core.first(arglist__560663);
var ev = cljs.core.first(cljs.core.next(arglist__560663));
var p__560656 = cljs.core.rest(cljs.core.next(arglist__560663));
return unbind__delegate($elem, ev, p__560656);
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
var on__delegate = function ($elem,events,p__560664){
var vec__560670__560671 = p__560664;
var sel__560672 = cljs.core.nth.call(null,vec__560670__560671,0,null);
var data__560673 = cljs.core.nth.call(null,vec__560670__560671,1,null);
var handler__560674 = cljs.core.nth.call(null,vec__560670__560671,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__560672),data__560673,handler__560674);
};
var on = function ($elem,events,var_args){
var p__560664 = null;
if (goog.isDef(var_args)) {
  p__560664 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__560664);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__560675){
var $elem = cljs.core.first(arglist__560675);
var events = cljs.core.first(cljs.core.next(arglist__560675));
var p__560664 = cljs.core.rest(cljs.core.next(arglist__560675));
return on__delegate($elem, events, p__560664);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__560676){
var vec__560682__560683 = p__560676;
var sel__560684 = cljs.core.nth.call(null,vec__560682__560683,0,null);
var data__560685 = cljs.core.nth.call(null,vec__560682__560683,1,null);
var handler__560686 = cljs.core.nth.call(null,vec__560682__560683,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__560684),data__560685,handler__560686);
};
var one = function ($elem,events,var_args){
var p__560676 = null;
if (goog.isDef(var_args)) {
  p__560676 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__560676);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__560687){
var $elem = cljs.core.first(arglist__560687);
var events = cljs.core.first(cljs.core.next(arglist__560687));
var p__560676 = cljs.core.rest(cljs.core.next(arglist__560687));
return one__delegate($elem, events, p__560676);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__560688){
var vec__560693__560694 = p__560688;
var sel__560695 = cljs.core.nth.call(null,vec__560693__560694,0,null);
var handler__560696 = cljs.core.nth.call(null,vec__560693__560694,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__560695),handler__560696);
};
var off = function ($elem,events,var_args){
var p__560688 = null;
if (goog.isDef(var_args)) {
  p__560688 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__560688);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__560697){
var $elem = cljs.core.first(arglist__560697);
var events = cljs.core.first(cljs.core.next(arglist__560697));
var p__560688 = cljs.core.rest(cljs.core.next(arglist__560697));
return off__delegate($elem, events, p__560688);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
