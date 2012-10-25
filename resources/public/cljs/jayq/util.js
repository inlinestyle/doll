goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__560496 = {};
var G__560497__560498 = cljs.core.seq.call(null,m);
while(true){
if(G__560497__560498)
{var vec__560499__560500 = cljs.core.first.call(null,G__560497__560498);
var k__560501 = cljs.core.nth.call(null,vec__560499__560500,0,null);
var v__560502 = cljs.core.nth.call(null,vec__560499__560500,1,null);
(out__560496[cljs.core.name.call(null,k__560501)] = v__560502);
{
var G__560503 = cljs.core.next.call(null,G__560497__560498);
G__560497__560498 = G__560503;
continue;
}
} else
{}
break;
}
return out__560496;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__560505 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__560505);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__560506){
var v = cljs.core.first(arglist__560506);
var text = cljs.core.rest(arglist__560506);
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
{return cljs.core.reduce.call(null,(function (m,p__560512){
var vec__560513__560514 = p__560512;
var k__560515 = cljs.core.nth.call(null,vec__560513__560514,0,null);
var v__560516 = cljs.core.nth.call(null,vec__560513__560514,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__560515),clj__GT_js.call(null,v__560516));
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
