goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__31951 = {};
var G__31952__31953 = cljs.core.seq.call(null,m);
while(true){
if(G__31952__31953)
{var vec__31954__31955 = cljs.core.first.call(null,G__31952__31953);
var k__31956 = cljs.core.nth.call(null,vec__31954__31955,0,null);
var v__31957 = cljs.core.nth.call(null,vec__31954__31955,1,null);
(out__31951[cljs.core.name.call(null,k__31956)] = v__31957);
{
var G__31958 = cljs.core.next.call(null,G__31952__31953);
G__31952__31953 = G__31958;
continue;
}
} else
{}
break;
}
return out__31951;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__31960 = ((cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);
return console.log(vs__31960);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31961){
var v = cljs.core.first(arglist__31961);
var text = cljs.core.rest(arglist__31961);
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
{return cljs.core.reduce.call(null,(function (m,p__31967){
var vec__31968__31969 = p__31967;
var k__31970 = cljs.core.nth.call(null,vec__31968__31969,0,null);
var v__31971 = cljs.core.nth.call(null,vec__31968__31969,1,null);
return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__31970),clj__GT_js.call(null,v__31971));
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
