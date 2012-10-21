goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__331347 = {};
var G__331348__331349 = cljs.core.seq.call(null,m);
while(true){
if(G__331348__331349)
{var vec__331350__331351 = cljs.core.first.call(null,G__331348__331349);
var k__331352 = cljs.core.nth.call(null,vec__331350__331351,0,null);
var v__331353 = cljs.core.nth.call(null,vec__331350__331351,1,null);
(out__331347[cljs.core.name.call(null,k__331352)] = v__331353);
{
var G__331354 = cljs.core.next.call(null,G__331348__331349);
G__331348__331349 = G__331354;
continue;
}
} else
{}
break;
}
return out__331347;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__331356 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__331356);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__331357){
var v = cljs.core.first(arglist__331357);
var text = cljs.core.rest(arglist__331357);
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
{return cljs.core.reduce.call(null,(function (m,p__331363){
var vec__331364__331365 = p__331363;
var k__331366 = cljs.core.nth.call(null,vec__331364__331365,0,null);
var v__331367 = cljs.core.nth.call(null,vec__331364__331365,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__331366),clj__GT_js.call(null,v__331367));
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
