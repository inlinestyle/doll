goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__39334 = {};
var G__39335__39336 = cljs.core.seq.call(null,m);
while(true){
if(G__39335__39336)
{var vec__39337__39338 = cljs.core.first.call(null,G__39335__39336);
var k__39339 = cljs.core.nth.call(null,vec__39337__39338,0,null);
var v__39340 = cljs.core.nth.call(null,vec__39337__39338,1,null);
(out__39334[cljs.core.name.call(null,k__39339)] = v__39340);
{
var G__39341 = cljs.core.next.call(null,G__39335__39336);
G__39335__39336 = G__39341;
continue;
}
} else
{}
break;
}
return out__39334;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__39343 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__39343);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__39344){
var v = cljs.core.first(arglist__39344);
var text = cljs.core.rest(arglist__39344);
return log__delegate(v, text);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
jayq.util.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce.call(null,(function (m,p__39350){
var vec__39351__39352 = p__39350;
var k__39353 = cljs.core.nth.call(null,vec__39351__39352,0,null);
var v__39354 = cljs.core.nth.call(null,vec__39351__39352,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__39353),clj__GT_js.call(null,v__39354));
}),cljs.core.ObjMap.EMPTY,x).strobj;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
