goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__451741 = {};
var G__451742__451743 = cljs.core.seq.call(null,m);
while(true){
if(G__451742__451743)
{var vec__451744__451745 = cljs.core.first.call(null,G__451742__451743);
var k__451746 = cljs.core.nth.call(null,vec__451744__451745,0,null);
var v__451747 = cljs.core.nth.call(null,vec__451744__451745,1,null);
(out__451741[cljs.core.name.call(null,k__451746)] = v__451747);
{
var G__451748 = cljs.core.next.call(null,G__451742__451743);
G__451742__451743 = G__451748;
continue;
}
} else
{}
break;
}
return out__451741;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__451750 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__451750);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__451751){
var v = cljs.core.first(arglist__451751);
var text = cljs.core.rest(arglist__451751);
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
{return cljs.core.reduce.call(null,(function (m,p__451757){
var vec__451758__451759 = p__451757;
var k__451760 = cljs.core.nth.call(null,vec__451758__451759,0,null);
var v__451761 = cljs.core.nth.call(null,vec__451758__451759,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__451760),clj__GT_js.call(null,v__451761));
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
