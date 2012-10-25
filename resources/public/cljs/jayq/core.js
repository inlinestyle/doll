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
{var temp__3971__auto____451764 = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto____451764))
{var cm__451765 = temp__3971__auto____451764;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm__451765),cljs.core.str("]")].join('');
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
var $__delegate = function (sel,p__451766){
var vec__451770__451771 = p__451766;
var context__451772 = cljs.core.nth.call(null,vec__451770__451771,0,null);
if(cljs.core.not.call(null,context__451772))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context__451772);
}
};
var $ = function (sel,var_args){
var p__451766 = null;
if (goog.isDef(var_args)) {
  p__451766 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__451766);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__451773){
var sel = cljs.core.first(arglist__451773);
var p__451766 = cljs.core.rest(arglist__451773);
return $__delegate(sel, p__451766);
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
var or__3824__auto____451774 = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto____451774))
{return or__3824__auto____451774;
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
var G__451775 = null;
var G__451775__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__451775__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__451775 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__451775__2.call(this,_,k);
case 3:
return G__451775__3.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__451775;
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
var attr__delegate = function ($elem,a,p__451776){
var vec__451781__451782 = p__451776;
var v__451783 = cljs.core.nth.call(null,vec__451781__451782,0,null);
var a__451784 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v__451783))
{return $elem.attr(a__451784);
} else
{return $elem.attr(a__451784,v__451783);
}
};
var attr = function ($elem,a,var_args){
var p__451776 = null;
if (goog.isDef(var_args)) {
  p__451776 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__451776);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__451785){
var $elem = cljs.core.first(arglist__451785);
var a = cljs.core.first(cljs.core.next(arglist__451785));
var p__451776 = cljs.core.rest(cljs.core.next(arglist__451785));
return attr__delegate($elem, a, p__451776);
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
var data__delegate = function ($elem,k,p__451786){
var vec__451791__451792 = p__451786;
var v__451793 = cljs.core.nth.call(null,vec__451791__451792,0,null);
var k__451794 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v__451793))
{return $elem.data(k__451794);
} else
{return $elem.data(k__451794,v__451793);
}
};
var data = function ($elem,k,var_args){
var p__451786 = null;
if (goog.isDef(var_args)) {
  p__451786 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__451786);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__451795){
var $elem = cljs.core.first(arglist__451795);
var k = cljs.core.first(cljs.core.next(arglist__451795));
var p__451786 = cljs.core.rest(cljs.core.next(arglist__451795));
return data__delegate($elem, k, p__451786);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.position = (function position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),"\uFDD0'keywordize-keys",true);
});
jayq.core.add_class = (function add_class($elem,cl){
var cl__451797 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__451797);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__451799 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__451799);
});
jayq.core.toggle_class = (function toggle_class($elem,cl){
var cl__451801 = cljs.core.name.call(null,cl);
return $elem.toggleClass(cl__451801);
});
jayq.core.has_class = (function has_class($elem,cl){
var cl__451803 = cljs.core.name.call(null,cl);
return $elem.hasClass(cl__451803);
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
var hide__delegate = function ($elem,p__451804){
var vec__451809__451810 = p__451804;
var speed__451811 = cljs.core.nth.call(null,vec__451809__451810,0,null);
var on_finish__451812 = cljs.core.nth.call(null,vec__451809__451810,1,null);
return $elem.hide(speed__451811,on_finish__451812);
};
var hide = function ($elem,var_args){
var p__451804 = null;
if (goog.isDef(var_args)) {
  p__451804 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__451804);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__451813){
var $elem = cljs.core.first(arglist__451813);
var p__451804 = cljs.core.rest(arglist__451813);
return hide__delegate($elem, p__451804);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__451814){
var vec__451819__451820 = p__451814;
var speed__451821 = cljs.core.nth.call(null,vec__451819__451820,0,null);
var on_finish__451822 = cljs.core.nth.call(null,vec__451819__451820,1,null);
return $elem.show(speed__451821,on_finish__451822);
};
var show = function ($elem,var_args){
var p__451814 = null;
if (goog.isDef(var_args)) {
  p__451814 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__451814);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__451823){
var $elem = cljs.core.first(arglist__451823);
var p__451814 = cljs.core.rest(arglist__451823);
return show__delegate($elem, p__451814);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__451824){
var vec__451829__451830 = p__451824;
var speed__451831 = cljs.core.nth.call(null,vec__451829__451830,0,null);
var on_finish__451832 = cljs.core.nth.call(null,vec__451829__451830,1,null);
return $elem.toggle(speed__451831,on_finish__451832);
};
var toggle = function ($elem,var_args){
var p__451824 = null;
if (goog.isDef(var_args)) {
  p__451824 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__451824);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__451833){
var $elem = cljs.core.first(arglist__451833);
var p__451824 = cljs.core.rest(arglist__451833);
return toggle__delegate($elem, p__451824);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__451834){
var vec__451839__451840 = p__451834;
var speed__451841 = cljs.core.nth.call(null,vec__451839__451840,0,null);
var on_finish__451842 = cljs.core.nth.call(null,vec__451839__451840,1,null);
return $elem.fadeOut(speed__451841,on_finish__451842);
};
var fade_out = function ($elem,var_args){
var p__451834 = null;
if (goog.isDef(var_args)) {
  p__451834 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__451834);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__451843){
var $elem = cljs.core.first(arglist__451843);
var p__451834 = cljs.core.rest(arglist__451843);
return fade_out__delegate($elem, p__451834);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__451844){
var vec__451849__451850 = p__451844;
var speed__451851 = cljs.core.nth.call(null,vec__451849__451850,0,null);
var on_finish__451852 = cljs.core.nth.call(null,vec__451849__451850,1,null);
return $elem.fadeIn(speed__451851,on_finish__451852);
};
var fade_in = function ($elem,var_args){
var p__451844 = null;
if (goog.isDef(var_args)) {
  p__451844 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__451844);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__451853){
var $elem = cljs.core.first(arglist__451853);
var p__451844 = cljs.core.rest(arglist__451853);
return fade_in__delegate($elem, p__451844);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__451854){
var vec__451859__451860 = p__451854;
var speed__451861 = cljs.core.nth.call(null,vec__451859__451860,0,null);
var on_finish__451862 = cljs.core.nth.call(null,vec__451859__451860,1,null);
return $elem.slideUp(speed__451861,on_finish__451862);
};
var slide_up = function ($elem,var_args){
var p__451854 = null;
if (goog.isDef(var_args)) {
  p__451854 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__451854);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__451863){
var $elem = cljs.core.first(arglist__451863);
var p__451854 = cljs.core.rest(arglist__451863);
return slide_up__delegate($elem, p__451854);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__451864){
var vec__451869__451870 = p__451864;
var speed__451871 = cljs.core.nth.call(null,vec__451869__451870,0,null);
var on_finish__451872 = cljs.core.nth.call(null,vec__451869__451870,1,null);
return $elem.slideDown(speed__451871,on_finish__451872);
};
var slide_down = function ($elem,var_args){
var p__451864 = null;
if (goog.isDef(var_args)) {
  p__451864 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__451864);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__451873){
var $elem = cljs.core.first(arglist__451873);
var p__451864 = cljs.core.rest(arglist__451873);
return slide_down__delegate($elem, p__451864);
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
var closest__delegate = function ($elem,selector,p__451874){
var vec__451878__451879 = p__451874;
var context__451880 = cljs.core.nth.call(null,vec__451878__451879,0,null);
return $elem.closest(selector,context__451880);
};
var closest = function ($elem,selector,var_args){
var p__451874 = null;
if (goog.isDef(var_args)) {
  p__451874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return closest__delegate.call(this, $elem, selector, p__451874);
};
closest.cljs$lang$maxFixedArity = 2;
closest.cljs$lang$applyTo = (function (arglist__451881){
var $elem = cljs.core.first(arglist__451881);
var selector = cljs.core.first(cljs.core.next(arglist__451881));
var p__451874 = cljs.core.rest(cljs.core.next(arglist__451881));
return closest__delegate($elem, selector, p__451874);
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
var val__delegate = function ($elem,p__451882){
var vec__451886__451887 = p__451882;
var v__451888 = cljs.core.nth.call(null,vec__451886__451887,0,null);
if(cljs.core.truth_(v__451888))
{return $elem.val(v__451888);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__451882 = null;
if (goog.isDef(var_args)) {
  p__451882 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__451882);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__451889){
var $elem = cljs.core.first(arglist__451889);
var p__451882 = cljs.core.rest(arglist__451889);
return val__delegate($elem, p__451882);
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
jayq.core.xhr = (function xhr(p__451890,content,callback){
var vec__451896__451897 = p__451890;
var method__451898 = cljs.core.nth.call(null,vec__451896__451897,0,null);
var uri__451899 = cljs.core.nth.call(null,vec__451896__451897,1,null);
var params__451900 = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__451898)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri__451899,params__451900);
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
var unbind__delegate = function ($elem,ev,p__451901){
var vec__451905__451906 = p__451901;
var func__451907 = cljs.core.nth.call(null,vec__451905__451906,0,null);
return $elem.unbind(cljs.core.name.call(null,ev),func__451907);
};
var unbind = function ($elem,ev,var_args){
var p__451901 = null;
if (goog.isDef(var_args)) {
  p__451901 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unbind__delegate.call(this, $elem, ev, p__451901);
};
unbind.cljs$lang$maxFixedArity = 2;
unbind.cljs$lang$applyTo = (function (arglist__451908){
var $elem = cljs.core.first(arglist__451908);
var ev = cljs.core.first(cljs.core.next(arglist__451908));
var p__451901 = cljs.core.rest(cljs.core.next(arglist__451908));
return unbind__delegate($elem, ev, p__451901);
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
var on__delegate = function ($elem,events,p__451909){
var vec__451915__451916 = p__451909;
var sel__451917 = cljs.core.nth.call(null,vec__451915__451916,0,null);
var data__451918 = cljs.core.nth.call(null,vec__451915__451916,1,null);
var handler__451919 = cljs.core.nth.call(null,vec__451915__451916,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__451917),data__451918,handler__451919);
};
var on = function ($elem,events,var_args){
var p__451909 = null;
if (goog.isDef(var_args)) {
  p__451909 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__451909);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__451920){
var $elem = cljs.core.first(arglist__451920);
var events = cljs.core.first(cljs.core.next(arglist__451920));
var p__451909 = cljs.core.rest(cljs.core.next(arglist__451920));
return on__delegate($elem, events, p__451909);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__451921){
var vec__451927__451928 = p__451921;
var sel__451929 = cljs.core.nth.call(null,vec__451927__451928,0,null);
var data__451930 = cljs.core.nth.call(null,vec__451927__451928,1,null);
var handler__451931 = cljs.core.nth.call(null,vec__451927__451928,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__451929),data__451930,handler__451931);
};
var one = function ($elem,events,var_args){
var p__451921 = null;
if (goog.isDef(var_args)) {
  p__451921 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__451921);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__451932){
var $elem = cljs.core.first(arglist__451932);
var events = cljs.core.first(cljs.core.next(arglist__451932));
var p__451921 = cljs.core.rest(cljs.core.next(arglist__451932));
return one__delegate($elem, events, p__451921);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__451933){
var vec__451938__451939 = p__451933;
var sel__451940 = cljs.core.nth.call(null,vec__451938__451939,0,null);
var handler__451941 = cljs.core.nth.call(null,vec__451938__451939,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel__451940),handler__451941);
};
var off = function ($elem,events,var_args){
var p__451933 = null;
if (goog.isDef(var_args)) {
  p__451933 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__451933);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__451942){
var $elem = cljs.core.first(arglist__451942);
var events = cljs.core.first(cljs.core.next(arglist__451942));
var p__451933 = cljs.core.rest(cljs.core.next(arglist__451942));
return off__delegate($elem, events, p__451933);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
jayq.core.prevent = (function prevent(e){
return e.preventDefault();
});
