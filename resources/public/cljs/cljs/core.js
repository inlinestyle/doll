goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__447808 = (((x == null))?null:x);
if((p[goog.typeOf(x__447808)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__447809__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__447809 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__447809__delegate.call(this, array, i, idxs);
};
G__447809.cljs$lang$maxFixedArity = 2;
G__447809.cljs$lang$applyTo = (function (arglist__447810){
var array = cljs.core.first(arglist__447810);
var i = cljs.core.first(cljs.core.next(arglist__447810));
var idxs = cljs.core.rest(cljs.core.next(arglist__447810));
return G__447809__delegate(array, i, idxs);
});
G__447809.cljs$lang$arity$variadic = G__447809__delegate;
return G__447809;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____447895 = this$;
if(and__3822__auto____447895)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____447895;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2387__auto____447896 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447897 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447896)]);
if(or__3824__auto____447897)
{return or__3824__auto____447897;
} else
{var or__3824__auto____447898 = (cljs.core._invoke["_"]);
if(or__3824__auto____447898)
{return or__3824__auto____447898;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____447899 = this$;
if(and__3822__auto____447899)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____447899;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2387__auto____447900 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447901 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447900)]);
if(or__3824__auto____447901)
{return or__3824__auto____447901;
} else
{var or__3824__auto____447902 = (cljs.core._invoke["_"]);
if(or__3824__auto____447902)
{return or__3824__auto____447902;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____447903 = this$;
if(and__3822__auto____447903)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____447903;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2387__auto____447904 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447905 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447904)]);
if(or__3824__auto____447905)
{return or__3824__auto____447905;
} else
{var or__3824__auto____447906 = (cljs.core._invoke["_"]);
if(or__3824__auto____447906)
{return or__3824__auto____447906;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____447907 = this$;
if(and__3822__auto____447907)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____447907;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2387__auto____447908 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447909 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447908)]);
if(or__3824__auto____447909)
{return or__3824__auto____447909;
} else
{var or__3824__auto____447910 = (cljs.core._invoke["_"]);
if(or__3824__auto____447910)
{return or__3824__auto____447910;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____447911 = this$;
if(and__3822__auto____447911)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____447911;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2387__auto____447912 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447913 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447912)]);
if(or__3824__auto____447913)
{return or__3824__auto____447913;
} else
{var or__3824__auto____447914 = (cljs.core._invoke["_"]);
if(or__3824__auto____447914)
{return or__3824__auto____447914;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____447915 = this$;
if(and__3822__auto____447915)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____447915;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2387__auto____447916 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447917 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447916)]);
if(or__3824__auto____447917)
{return or__3824__auto____447917;
} else
{var or__3824__auto____447918 = (cljs.core._invoke["_"]);
if(or__3824__auto____447918)
{return or__3824__auto____447918;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____447919 = this$;
if(and__3822__auto____447919)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____447919;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2387__auto____447920 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447921 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447920)]);
if(or__3824__auto____447921)
{return or__3824__auto____447921;
} else
{var or__3824__auto____447922 = (cljs.core._invoke["_"]);
if(or__3824__auto____447922)
{return or__3824__auto____447922;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____447923 = this$;
if(and__3822__auto____447923)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____447923;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2387__auto____447924 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447925 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447924)]);
if(or__3824__auto____447925)
{return or__3824__auto____447925;
} else
{var or__3824__auto____447926 = (cljs.core._invoke["_"]);
if(or__3824__auto____447926)
{return or__3824__auto____447926;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____447927 = this$;
if(and__3822__auto____447927)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____447927;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2387__auto____447928 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447929 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447928)]);
if(or__3824__auto____447929)
{return or__3824__auto____447929;
} else
{var or__3824__auto____447930 = (cljs.core._invoke["_"]);
if(or__3824__auto____447930)
{return or__3824__auto____447930;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____447931 = this$;
if(and__3822__auto____447931)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____447931;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2387__auto____447932 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447933 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447932)]);
if(or__3824__auto____447933)
{return or__3824__auto____447933;
} else
{var or__3824__auto____447934 = (cljs.core._invoke["_"]);
if(or__3824__auto____447934)
{return or__3824__auto____447934;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____447935 = this$;
if(and__3822__auto____447935)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____447935;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2387__auto____447936 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447937 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447936)]);
if(or__3824__auto____447937)
{return or__3824__auto____447937;
} else
{var or__3824__auto____447938 = (cljs.core._invoke["_"]);
if(or__3824__auto____447938)
{return or__3824__auto____447938;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____447939 = this$;
if(and__3822__auto____447939)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____447939;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2387__auto____447940 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447941 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447940)]);
if(or__3824__auto____447941)
{return or__3824__auto____447941;
} else
{var or__3824__auto____447942 = (cljs.core._invoke["_"]);
if(or__3824__auto____447942)
{return or__3824__auto____447942;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____447943 = this$;
if(and__3822__auto____447943)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____447943;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2387__auto____447944 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447945 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447944)]);
if(or__3824__auto____447945)
{return or__3824__auto____447945;
} else
{var or__3824__auto____447946 = (cljs.core._invoke["_"]);
if(or__3824__auto____447946)
{return or__3824__auto____447946;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____447947 = this$;
if(and__3822__auto____447947)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____447947;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2387__auto____447948 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447949 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447948)]);
if(or__3824__auto____447949)
{return or__3824__auto____447949;
} else
{var or__3824__auto____447950 = (cljs.core._invoke["_"]);
if(or__3824__auto____447950)
{return or__3824__auto____447950;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____447951 = this$;
if(and__3822__auto____447951)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____447951;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2387__auto____447952 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447953 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447952)]);
if(or__3824__auto____447953)
{return or__3824__auto____447953;
} else
{var or__3824__auto____447954 = (cljs.core._invoke["_"]);
if(or__3824__auto____447954)
{return or__3824__auto____447954;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____447955 = this$;
if(and__3822__auto____447955)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____447955;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2387__auto____447956 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447957 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447956)]);
if(or__3824__auto____447957)
{return or__3824__auto____447957;
} else
{var or__3824__auto____447958 = (cljs.core._invoke["_"]);
if(or__3824__auto____447958)
{return or__3824__auto____447958;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____447959 = this$;
if(and__3822__auto____447959)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____447959;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2387__auto____447960 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447961 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447960)]);
if(or__3824__auto____447961)
{return or__3824__auto____447961;
} else
{var or__3824__auto____447962 = (cljs.core._invoke["_"]);
if(or__3824__auto____447962)
{return or__3824__auto____447962;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____447963 = this$;
if(and__3822__auto____447963)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____447963;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2387__auto____447964 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447965 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447964)]);
if(or__3824__auto____447965)
{return or__3824__auto____447965;
} else
{var or__3824__auto____447966 = (cljs.core._invoke["_"]);
if(or__3824__auto____447966)
{return or__3824__auto____447966;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____447967 = this$;
if(and__3822__auto____447967)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____447967;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2387__auto____447968 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447969 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447968)]);
if(or__3824__auto____447969)
{return or__3824__auto____447969;
} else
{var or__3824__auto____447970 = (cljs.core._invoke["_"]);
if(or__3824__auto____447970)
{return or__3824__auto____447970;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____447971 = this$;
if(and__3822__auto____447971)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____447971;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2387__auto____447972 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447973 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447972)]);
if(or__3824__auto____447973)
{return or__3824__auto____447973;
} else
{var or__3824__auto____447974 = (cljs.core._invoke["_"]);
if(or__3824__auto____447974)
{return or__3824__auto____447974;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____447975 = this$;
if(and__3822__auto____447975)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____447975;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2387__auto____447976 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____447977 = (cljs.core._invoke[goog.typeOf(x__2387__auto____447976)]);
if(or__3824__auto____447977)
{return or__3824__auto____447977;
} else
{var or__3824__auto____447978 = (cljs.core._invoke["_"]);
if(or__3824__auto____447978)
{return or__3824__auto____447978;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____447983 = coll;
if(and__3822__auto____447983)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____447983;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2387__auto____447984 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____447985 = (cljs.core._count[goog.typeOf(x__2387__auto____447984)]);
if(or__3824__auto____447985)
{return or__3824__auto____447985;
} else
{var or__3824__auto____447986 = (cljs.core._count["_"]);
if(or__3824__auto____447986)
{return or__3824__auto____447986;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____447991 = coll;
if(and__3822__auto____447991)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____447991;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2387__auto____447992 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____447993 = (cljs.core._empty[goog.typeOf(x__2387__auto____447992)]);
if(or__3824__auto____447993)
{return or__3824__auto____447993;
} else
{var or__3824__auto____447994 = (cljs.core._empty["_"]);
if(or__3824__auto____447994)
{return or__3824__auto____447994;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____447999 = coll;
if(and__3822__auto____447999)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____447999;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2387__auto____448000 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448001 = (cljs.core._conj[goog.typeOf(x__2387__auto____448000)]);
if(or__3824__auto____448001)
{return or__3824__auto____448001;
} else
{var or__3824__auto____448002 = (cljs.core._conj["_"]);
if(or__3824__auto____448002)
{return or__3824__auto____448002;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____448011 = coll;
if(and__3822__auto____448011)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____448011;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2387__auto____448012 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448013 = (cljs.core._nth[goog.typeOf(x__2387__auto____448012)]);
if(or__3824__auto____448013)
{return or__3824__auto____448013;
} else
{var or__3824__auto____448014 = (cljs.core._nth["_"]);
if(or__3824__auto____448014)
{return or__3824__auto____448014;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____448015 = coll;
if(and__3822__auto____448015)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____448015;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2387__auto____448016 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448017 = (cljs.core._nth[goog.typeOf(x__2387__auto____448016)]);
if(or__3824__auto____448017)
{return or__3824__auto____448017;
} else
{var or__3824__auto____448018 = (cljs.core._nth["_"]);
if(or__3824__auto____448018)
{return or__3824__auto____448018;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____448023 = coll;
if(and__3822__auto____448023)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____448023;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2387__auto____448024 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448025 = (cljs.core._first[goog.typeOf(x__2387__auto____448024)]);
if(or__3824__auto____448025)
{return or__3824__auto____448025;
} else
{var or__3824__auto____448026 = (cljs.core._first["_"]);
if(or__3824__auto____448026)
{return or__3824__auto____448026;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____448031 = coll;
if(and__3822__auto____448031)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____448031;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2387__auto____448032 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448033 = (cljs.core._rest[goog.typeOf(x__2387__auto____448032)]);
if(or__3824__auto____448033)
{return or__3824__auto____448033;
} else
{var or__3824__auto____448034 = (cljs.core._rest["_"]);
if(or__3824__auto____448034)
{return or__3824__auto____448034;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____448039 = coll;
if(and__3822__auto____448039)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____448039;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2387__auto____448040 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448041 = (cljs.core._next[goog.typeOf(x__2387__auto____448040)]);
if(or__3824__auto____448041)
{return or__3824__auto____448041;
} else
{var or__3824__auto____448042 = (cljs.core._next["_"]);
if(or__3824__auto____448042)
{return or__3824__auto____448042;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____448051 = o;
if(and__3822__auto____448051)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____448051;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2387__auto____448052 = (((o == null))?null:o);
return (function (){var or__3824__auto____448053 = (cljs.core._lookup[goog.typeOf(x__2387__auto____448052)]);
if(or__3824__auto____448053)
{return or__3824__auto____448053;
} else
{var or__3824__auto____448054 = (cljs.core._lookup["_"]);
if(or__3824__auto____448054)
{return or__3824__auto____448054;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____448055 = o;
if(and__3822__auto____448055)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____448055;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2387__auto____448056 = (((o == null))?null:o);
return (function (){var or__3824__auto____448057 = (cljs.core._lookup[goog.typeOf(x__2387__auto____448056)]);
if(or__3824__auto____448057)
{return or__3824__auto____448057;
} else
{var or__3824__auto____448058 = (cljs.core._lookup["_"]);
if(or__3824__auto____448058)
{return or__3824__auto____448058;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____448063 = coll;
if(and__3822__auto____448063)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____448063;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2387__auto____448064 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448065 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2387__auto____448064)]);
if(or__3824__auto____448065)
{return or__3824__auto____448065;
} else
{var or__3824__auto____448066 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____448066)
{return or__3824__auto____448066;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____448071 = coll;
if(and__3822__auto____448071)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____448071;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2387__auto____448072 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448073 = (cljs.core._assoc[goog.typeOf(x__2387__auto____448072)]);
if(or__3824__auto____448073)
{return or__3824__auto____448073;
} else
{var or__3824__auto____448074 = (cljs.core._assoc["_"]);
if(or__3824__auto____448074)
{return or__3824__auto____448074;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____448079 = coll;
if(and__3822__auto____448079)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____448079;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2387__auto____448080 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448081 = (cljs.core._dissoc[goog.typeOf(x__2387__auto____448080)]);
if(or__3824__auto____448081)
{return or__3824__auto____448081;
} else
{var or__3824__auto____448082 = (cljs.core._dissoc["_"]);
if(or__3824__auto____448082)
{return or__3824__auto____448082;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____448087 = coll;
if(and__3822__auto____448087)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____448087;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2387__auto____448088 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448089 = (cljs.core._key[goog.typeOf(x__2387__auto____448088)]);
if(or__3824__auto____448089)
{return or__3824__auto____448089;
} else
{var or__3824__auto____448090 = (cljs.core._key["_"]);
if(or__3824__auto____448090)
{return or__3824__auto____448090;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____448095 = coll;
if(and__3822__auto____448095)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____448095;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2387__auto____448096 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448097 = (cljs.core._val[goog.typeOf(x__2387__auto____448096)]);
if(or__3824__auto____448097)
{return or__3824__auto____448097;
} else
{var or__3824__auto____448098 = (cljs.core._val["_"]);
if(or__3824__auto____448098)
{return or__3824__auto____448098;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____448103 = coll;
if(and__3822__auto____448103)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____448103;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2387__auto____448104 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448105 = (cljs.core._disjoin[goog.typeOf(x__2387__auto____448104)]);
if(or__3824__auto____448105)
{return or__3824__auto____448105;
} else
{var or__3824__auto____448106 = (cljs.core._disjoin["_"]);
if(or__3824__auto____448106)
{return or__3824__auto____448106;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____448111 = coll;
if(and__3822__auto____448111)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____448111;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2387__auto____448112 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448113 = (cljs.core._peek[goog.typeOf(x__2387__auto____448112)]);
if(or__3824__auto____448113)
{return or__3824__auto____448113;
} else
{var or__3824__auto____448114 = (cljs.core._peek["_"]);
if(or__3824__auto____448114)
{return or__3824__auto____448114;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____448119 = coll;
if(and__3822__auto____448119)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____448119;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2387__auto____448120 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448121 = (cljs.core._pop[goog.typeOf(x__2387__auto____448120)]);
if(or__3824__auto____448121)
{return or__3824__auto____448121;
} else
{var or__3824__auto____448122 = (cljs.core._pop["_"]);
if(or__3824__auto____448122)
{return or__3824__auto____448122;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____448127 = coll;
if(and__3822__auto____448127)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____448127;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2387__auto____448128 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448129 = (cljs.core._assoc_n[goog.typeOf(x__2387__auto____448128)]);
if(or__3824__auto____448129)
{return or__3824__auto____448129;
} else
{var or__3824__auto____448130 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____448130)
{return or__3824__auto____448130;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____448135 = o;
if(and__3822__auto____448135)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____448135;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2387__auto____448136 = (((o == null))?null:o);
return (function (){var or__3824__auto____448137 = (cljs.core._deref[goog.typeOf(x__2387__auto____448136)]);
if(or__3824__auto____448137)
{return or__3824__auto____448137;
} else
{var or__3824__auto____448138 = (cljs.core._deref["_"]);
if(or__3824__auto____448138)
{return or__3824__auto____448138;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____448143 = o;
if(and__3822__auto____448143)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____448143;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2387__auto____448144 = (((o == null))?null:o);
return (function (){var or__3824__auto____448145 = (cljs.core._deref_with_timeout[goog.typeOf(x__2387__auto____448144)]);
if(or__3824__auto____448145)
{return or__3824__auto____448145;
} else
{var or__3824__auto____448146 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____448146)
{return or__3824__auto____448146;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____448151 = o;
if(and__3822__auto____448151)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____448151;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2387__auto____448152 = (((o == null))?null:o);
return (function (){var or__3824__auto____448153 = (cljs.core._meta[goog.typeOf(x__2387__auto____448152)]);
if(or__3824__auto____448153)
{return or__3824__auto____448153;
} else
{var or__3824__auto____448154 = (cljs.core._meta["_"]);
if(or__3824__auto____448154)
{return or__3824__auto____448154;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____448159 = o;
if(and__3822__auto____448159)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____448159;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2387__auto____448160 = (((o == null))?null:o);
return (function (){var or__3824__auto____448161 = (cljs.core._with_meta[goog.typeOf(x__2387__auto____448160)]);
if(or__3824__auto____448161)
{return or__3824__auto____448161;
} else
{var or__3824__auto____448162 = (cljs.core._with_meta["_"]);
if(or__3824__auto____448162)
{return or__3824__auto____448162;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____448171 = coll;
if(and__3822__auto____448171)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____448171;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2387__auto____448172 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448173 = (cljs.core._reduce[goog.typeOf(x__2387__auto____448172)]);
if(or__3824__auto____448173)
{return or__3824__auto____448173;
} else
{var or__3824__auto____448174 = (cljs.core._reduce["_"]);
if(or__3824__auto____448174)
{return or__3824__auto____448174;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____448175 = coll;
if(and__3822__auto____448175)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____448175;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2387__auto____448176 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448177 = (cljs.core._reduce[goog.typeOf(x__2387__auto____448176)]);
if(or__3824__auto____448177)
{return or__3824__auto____448177;
} else
{var or__3824__auto____448178 = (cljs.core._reduce["_"]);
if(or__3824__auto____448178)
{return or__3824__auto____448178;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____448183 = coll;
if(and__3822__auto____448183)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____448183;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2387__auto____448184 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448185 = (cljs.core._kv_reduce[goog.typeOf(x__2387__auto____448184)]);
if(or__3824__auto____448185)
{return or__3824__auto____448185;
} else
{var or__3824__auto____448186 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____448186)
{return or__3824__auto____448186;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____448191 = o;
if(and__3822__auto____448191)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____448191;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2387__auto____448192 = (((o == null))?null:o);
return (function (){var or__3824__auto____448193 = (cljs.core._equiv[goog.typeOf(x__2387__auto____448192)]);
if(or__3824__auto____448193)
{return or__3824__auto____448193;
} else
{var or__3824__auto____448194 = (cljs.core._equiv["_"]);
if(or__3824__auto____448194)
{return or__3824__auto____448194;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____448199 = o;
if(and__3822__auto____448199)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____448199;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2387__auto____448200 = (((o == null))?null:o);
return (function (){var or__3824__auto____448201 = (cljs.core._hash[goog.typeOf(x__2387__auto____448200)]);
if(or__3824__auto____448201)
{return or__3824__auto____448201;
} else
{var or__3824__auto____448202 = (cljs.core._hash["_"]);
if(or__3824__auto____448202)
{return or__3824__auto____448202;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____448207 = o;
if(and__3822__auto____448207)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____448207;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2387__auto____448208 = (((o == null))?null:o);
return (function (){var or__3824__auto____448209 = (cljs.core._seq[goog.typeOf(x__2387__auto____448208)]);
if(or__3824__auto____448209)
{return or__3824__auto____448209;
} else
{var or__3824__auto____448210 = (cljs.core._seq["_"]);
if(or__3824__auto____448210)
{return or__3824__auto____448210;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____448215 = coll;
if(and__3822__auto____448215)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____448215;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2387__auto____448216 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448217 = (cljs.core._rseq[goog.typeOf(x__2387__auto____448216)]);
if(or__3824__auto____448217)
{return or__3824__auto____448217;
} else
{var or__3824__auto____448218 = (cljs.core._rseq["_"]);
if(or__3824__auto____448218)
{return or__3824__auto____448218;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____448223 = coll;
if(and__3822__auto____448223)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____448223;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2387__auto____448224 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448225 = (cljs.core._sorted_seq[goog.typeOf(x__2387__auto____448224)]);
if(or__3824__auto____448225)
{return or__3824__auto____448225;
} else
{var or__3824__auto____448226 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____448226)
{return or__3824__auto____448226;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____448231 = coll;
if(and__3822__auto____448231)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____448231;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2387__auto____448232 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448233 = (cljs.core._sorted_seq_from[goog.typeOf(x__2387__auto____448232)]);
if(or__3824__auto____448233)
{return or__3824__auto____448233;
} else
{var or__3824__auto____448234 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____448234)
{return or__3824__auto____448234;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____448239 = coll;
if(and__3822__auto____448239)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____448239;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2387__auto____448240 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448241 = (cljs.core._entry_key[goog.typeOf(x__2387__auto____448240)]);
if(or__3824__auto____448241)
{return or__3824__auto____448241;
} else
{var or__3824__auto____448242 = (cljs.core._entry_key["_"]);
if(or__3824__auto____448242)
{return or__3824__auto____448242;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____448247 = coll;
if(and__3822__auto____448247)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____448247;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2387__auto____448248 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448249 = (cljs.core._comparator[goog.typeOf(x__2387__auto____448248)]);
if(or__3824__auto____448249)
{return or__3824__auto____448249;
} else
{var or__3824__auto____448250 = (cljs.core._comparator["_"]);
if(or__3824__auto____448250)
{return or__3824__auto____448250;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____448255 = o;
if(and__3822__auto____448255)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____448255;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2387__auto____448256 = (((o == null))?null:o);
return (function (){var or__3824__auto____448257 = (cljs.core._pr_seq[goog.typeOf(x__2387__auto____448256)]);
if(or__3824__auto____448257)
{return or__3824__auto____448257;
} else
{var or__3824__auto____448258 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____448258)
{return or__3824__auto____448258;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____448263 = writer;
if(and__3822__auto____448263)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____448263;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__2387__auto____448264 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____448265 = (cljs.core._write[goog.typeOf(x__2387__auto____448264)]);
if(or__3824__auto____448265)
{return or__3824__auto____448265;
} else
{var or__3824__auto____448266 = (cljs.core._write["_"]);
if(or__3824__auto____448266)
{return or__3824__auto____448266;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____448271 = writer;
if(and__3822__auto____448271)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____448271;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__2387__auto____448272 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____448273 = (cljs.core._flush[goog.typeOf(x__2387__auto____448272)]);
if(or__3824__auto____448273)
{return or__3824__auto____448273;
} else
{var or__3824__auto____448274 = (cljs.core._flush["_"]);
if(or__3824__auto____448274)
{return or__3824__auto____448274;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____448279 = o;
if(and__3822__auto____448279)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____448279;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__2387__auto____448280 = (((o == null))?null:o);
return (function (){var or__3824__auto____448281 = (cljs.core._pr_writer[goog.typeOf(x__2387__auto____448280)]);
if(or__3824__auto____448281)
{return or__3824__auto____448281;
} else
{var or__3824__auto____448282 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____448282)
{return or__3824__auto____448282;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____448287 = d;
if(and__3822__auto____448287)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____448287;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2387__auto____448288 = (((d == null))?null:d);
return (function (){var or__3824__auto____448289 = (cljs.core._realized_QMARK_[goog.typeOf(x__2387__auto____448288)]);
if(or__3824__auto____448289)
{return or__3824__auto____448289;
} else
{var or__3824__auto____448290 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____448290)
{return or__3824__auto____448290;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____448295 = this$;
if(and__3822__auto____448295)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____448295;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2387__auto____448296 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____448297 = (cljs.core._notify_watches[goog.typeOf(x__2387__auto____448296)]);
if(or__3824__auto____448297)
{return or__3824__auto____448297;
} else
{var or__3824__auto____448298 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____448298)
{return or__3824__auto____448298;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____448303 = this$;
if(and__3822__auto____448303)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____448303;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2387__auto____448304 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____448305 = (cljs.core._add_watch[goog.typeOf(x__2387__auto____448304)]);
if(or__3824__auto____448305)
{return or__3824__auto____448305;
} else
{var or__3824__auto____448306 = (cljs.core._add_watch["_"]);
if(or__3824__auto____448306)
{return or__3824__auto____448306;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____448311 = this$;
if(and__3822__auto____448311)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____448311;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2387__auto____448312 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____448313 = (cljs.core._remove_watch[goog.typeOf(x__2387__auto____448312)]);
if(or__3824__auto____448313)
{return or__3824__auto____448313;
} else
{var or__3824__auto____448314 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____448314)
{return or__3824__auto____448314;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____448319 = coll;
if(and__3822__auto____448319)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____448319;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2387__auto____448320 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448321 = (cljs.core._as_transient[goog.typeOf(x__2387__auto____448320)]);
if(or__3824__auto____448321)
{return or__3824__auto____448321;
} else
{var or__3824__auto____448322 = (cljs.core._as_transient["_"]);
if(or__3824__auto____448322)
{return or__3824__auto____448322;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____448327 = tcoll;
if(and__3822__auto____448327)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____448327;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2387__auto____448328 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____448329 = (cljs.core._conj_BANG_[goog.typeOf(x__2387__auto____448328)]);
if(or__3824__auto____448329)
{return or__3824__auto____448329;
} else
{var or__3824__auto____448330 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____448330)
{return or__3824__auto____448330;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____448335 = tcoll;
if(and__3822__auto____448335)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____448335;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2387__auto____448336 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____448337 = (cljs.core._persistent_BANG_[goog.typeOf(x__2387__auto____448336)]);
if(or__3824__auto____448337)
{return or__3824__auto____448337;
} else
{var or__3824__auto____448338 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____448338)
{return or__3824__auto____448338;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____448343 = tcoll;
if(and__3822__auto____448343)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____448343;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2387__auto____448344 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____448345 = (cljs.core._assoc_BANG_[goog.typeOf(x__2387__auto____448344)]);
if(or__3824__auto____448345)
{return or__3824__auto____448345;
} else
{var or__3824__auto____448346 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____448346)
{return or__3824__auto____448346;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____448351 = tcoll;
if(and__3822__auto____448351)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____448351;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2387__auto____448352 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____448353 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2387__auto____448352)]);
if(or__3824__auto____448353)
{return or__3824__auto____448353;
} else
{var or__3824__auto____448354 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____448354)
{return or__3824__auto____448354;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____448359 = tcoll;
if(and__3822__auto____448359)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____448359;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2387__auto____448360 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____448361 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2387__auto____448360)]);
if(or__3824__auto____448361)
{return or__3824__auto____448361;
} else
{var or__3824__auto____448362 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____448362)
{return or__3824__auto____448362;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____448367 = tcoll;
if(and__3822__auto____448367)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____448367;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2387__auto____448368 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____448369 = (cljs.core._pop_BANG_[goog.typeOf(x__2387__auto____448368)]);
if(or__3824__auto____448369)
{return or__3824__auto____448369;
} else
{var or__3824__auto____448370 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____448370)
{return or__3824__auto____448370;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____448375 = tcoll;
if(and__3822__auto____448375)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____448375;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2387__auto____448376 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____448377 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2387__auto____448376)]);
if(or__3824__auto____448377)
{return or__3824__auto____448377;
} else
{var or__3824__auto____448378 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____448378)
{return or__3824__auto____448378;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____448383 = x;
if(and__3822__auto____448383)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____448383;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2387__auto____448384 = (((x == null))?null:x);
return (function (){var or__3824__auto____448385 = (cljs.core._compare[goog.typeOf(x__2387__auto____448384)]);
if(or__3824__auto____448385)
{return or__3824__auto____448385;
} else
{var or__3824__auto____448386 = (cljs.core._compare["_"]);
if(or__3824__auto____448386)
{return or__3824__auto____448386;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____448391 = coll;
if(and__3822__auto____448391)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____448391;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2387__auto____448392 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448393 = (cljs.core._drop_first[goog.typeOf(x__2387__auto____448392)]);
if(or__3824__auto____448393)
{return or__3824__auto____448393;
} else
{var or__3824__auto____448394 = (cljs.core._drop_first["_"]);
if(or__3824__auto____448394)
{return or__3824__auto____448394;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____448399 = coll;
if(and__3822__auto____448399)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____448399;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2387__auto____448400 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448401 = (cljs.core._chunked_first[goog.typeOf(x__2387__auto____448400)]);
if(or__3824__auto____448401)
{return or__3824__auto____448401;
} else
{var or__3824__auto____448402 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____448402)
{return or__3824__auto____448402;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____448407 = coll;
if(and__3822__auto____448407)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____448407;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2387__auto____448408 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448409 = (cljs.core._chunked_rest[goog.typeOf(x__2387__auto____448408)]);
if(or__3824__auto____448409)
{return or__3824__auto____448409;
} else
{var or__3824__auto____448410 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____448410)
{return or__3824__auto____448410;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____448415 = coll;
if(and__3822__auto____448415)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____448415;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2387__auto____448416 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____448417 = (cljs.core._chunked_next[goog.typeOf(x__2387__auto____448416)]);
if(or__3824__auto____448417)
{return or__3824__auto____448417;
} else
{var or__3824__auto____448418 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____448418)
{return or__3824__auto____448418;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__448422__448423 = coll;
if(G__448422__448423)
{if((function (){var or__3824__auto____448424 = (G__448422__448423.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____448424)
{return or__3824__auto____448424;
} else
{return G__448422__448423.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__448422__448423.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__448422__448423);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__448422__448423);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__448429__448430 = coll;
if(G__448429__448430)
{if((function (){var or__3824__auto____448431 = (G__448429__448430.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____448431)
{return or__3824__auto____448431;
} else
{return G__448429__448430.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__448429__448430.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__448429__448430);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__448429__448430);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__448432 = cljs.core.seq.call(null,coll);
if((s__448432 == null))
{return null;
} else
{return cljs.core._first.call(null,s__448432);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__448437__448438 = coll;
if(G__448437__448438)
{if((function (){var or__3824__auto____448439 = (G__448437__448438.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____448439)
{return or__3824__auto____448439;
} else
{return G__448437__448438.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__448437__448438.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__448437__448438);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__448437__448438);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__448440 = cljs.core.seq.call(null,coll);
if(!((s__448440 == null)))
{return cljs.core._rest.call(null,s__448440);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__448444__448445 = coll;
if(G__448444__448445)
{if((function (){var or__3824__auto____448446 = (G__448444__448445.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____448446)
{return or__3824__auto____448446;
} else
{return G__448444__448445.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__448444__448445.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__448444__448445);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__448444__448445);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____448448 = (x === y);
if(or__3824__auto____448448)
{return or__3824__auto____448448;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__448449__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__448450 = y;
var G__448451 = cljs.core.first.call(null,more);
var G__448452 = cljs.core.next.call(null,more);
x = G__448450;
y = G__448451;
more = G__448452;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__448449 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448449__delegate.call(this, x, y, more);
};
G__448449.cljs$lang$maxFixedArity = 2;
G__448449.cljs$lang$applyTo = (function (arglist__448453){
var x = cljs.core.first(arglist__448453);
var y = cljs.core.first(cljs.core.next(arglist__448453));
var more = cljs.core.rest(cljs.core.next(arglist__448453));
return G__448449__delegate(x, y, more);
});
G__448449.cljs$lang$arity$variadic = G__448449__delegate;
return G__448449;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__448454 = null;
var G__448454__2 = (function (o,k){
return null;
});
var G__448454__3 = (function (o,k,not_found){
return not_found;
});
G__448454 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__448454__2.call(this,o,k);
case 3:
return G__448454__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__448454;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.IPrintWithWriter["null"] = true);
(cljs.core._pr_writer["null"] = (function (o,writer,_){
return cljs.core._write.call(null,writer,"nil");
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__448455 = null;
var G__448455__2 = (function (_,f){
return f.call(null);
});
var G__448455__3 = (function (_,f,start){
return start;
});
G__448455 = function(_,f,start){
switch(arguments.length){
case 2:
return G__448455__2.call(this,_,f);
case 3:
return G__448455__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__448455;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__448456 = null;
var G__448456__2 = (function (_,n){
return null;
});
var G__448456__3 = (function (_,n,not_found){
return not_found;
});
G__448456 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__448456__2.call(this,_,n);
case 3:
return G__448456__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__448456;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____448457 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____448457)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____448457;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});

goog.provide('cljs.core.Reduced');

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__448458 = this;
return this__448458.val;
});
cljs.core.Reduced;
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__448471 = cljs.core._count.call(null,cicoll);
if((cnt__448471 === 0))
{return f.call(null);
} else
{var val__448472 = cljs.core._nth.call(null,cicoll,0);
var n__448473 = 1;
while(true){
if((n__448473 < cnt__448471))
{var nval__448474 = f.call(null,val__448472,cljs.core._nth.call(null,cicoll,n__448473));
if(cljs.core.reduced_QMARK_.call(null,nval__448474))
{return cljs.core.deref.call(null,nval__448474);
} else
{{
var G__448483 = nval__448474;
var G__448484 = (n__448473 + 1);
val__448472 = G__448483;
n__448473 = G__448484;
continue;
}
}
} else
{return val__448472;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__448475 = cljs.core._count.call(null,cicoll);
var val__448476 = val;
var n__448477 = 0;
while(true){
if((n__448477 < cnt__448475))
{var nval__448478 = f.call(null,val__448476,cljs.core._nth.call(null,cicoll,n__448477));
if(cljs.core.reduced_QMARK_.call(null,nval__448478))
{return cljs.core.deref.call(null,nval__448478);
} else
{{
var G__448485 = nval__448478;
var G__448486 = (n__448477 + 1);
val__448476 = G__448485;
n__448477 = G__448486;
continue;
}
}
} else
{return val__448476;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__448479 = cljs.core._count.call(null,cicoll);
var val__448480 = val;
var n__448481 = idx;
while(true){
if((n__448481 < cnt__448479))
{var nval__448482 = f.call(null,val__448480,cljs.core._nth.call(null,cicoll,n__448481));
if(cljs.core.reduced_QMARK_.call(null,nval__448482))
{return cljs.core.deref.call(null,nval__448482);
} else
{{
var G__448487 = nval__448482;
var G__448488 = (n__448481 + 1);
val__448480 = G__448487;
n__448481 = G__448488;
continue;
}
}
} else
{return val__448480;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__448501 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__448502 = (arr[0]);
var n__448503 = 1;
while(true){
if((n__448503 < cnt__448501))
{var nval__448504 = f.call(null,val__448502,(arr[n__448503]));
if(cljs.core.reduced_QMARK_.call(null,nval__448504))
{return cljs.core.deref.call(null,nval__448504);
} else
{{
var G__448513 = nval__448504;
var G__448514 = (n__448503 + 1);
val__448502 = G__448513;
n__448503 = G__448514;
continue;
}
}
} else
{return val__448502;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__448505 = arr.length;
var val__448506 = val;
var n__448507 = 0;
while(true){
if((n__448507 < cnt__448505))
{var nval__448508 = f.call(null,val__448506,(arr[n__448507]));
if(cljs.core.reduced_QMARK_.call(null,nval__448508))
{return cljs.core.deref.call(null,nval__448508);
} else
{{
var G__448515 = nval__448508;
var G__448516 = (n__448507 + 1);
val__448506 = G__448515;
n__448507 = G__448516;
continue;
}
}
} else
{return val__448506;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__448509 = arr.length;
var val__448510 = val;
var n__448511 = idx;
while(true){
if((n__448511 < cnt__448509))
{var nval__448512 = f.call(null,val__448510,(arr[n__448511]));
if(cljs.core.reduced_QMARK_.call(null,nval__448512))
{return cljs.core.deref.call(null,nval__448512);
} else
{{
var G__448517 = nval__448512;
var G__448518 = (n__448511 + 1);
val__448510 = G__448517;
n__448511 = G__448518;
continue;
}
}
} else
{return val__448510;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__448522__448523 = x;
if(G__448522__448523)
{if((function (){var or__3824__auto____448524 = (G__448522__448523.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____448524)
{return or__3824__auto____448524;
} else
{return G__448522__448523.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__448522__448523.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__448522__448523);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__448522__448523);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__448528__448529 = x;
if(G__448528__448529)
{if((function (){var or__3824__auto____448530 = (G__448528__448529.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____448530)
{return or__3824__auto____448530;
} else
{return G__448528__448529.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__448528__448529.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__448528__448529);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__448528__448529);
}
});

goog.provide('cljs.core.IndexedSeq');

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__448531 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__448532 = this;
if(((this__448532.i + 1) < this__448532.a.length))
{return (new cljs.core.IndexedSeq(this__448532.a,(this__448532.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__448533 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__448534 = this;
var c__448535 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__448535 > 0))
{return (new cljs.core.RSeq(coll,(c__448535 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__448536 = this;
var this__448537 = this;
return cljs.core.pr_str.call(null,this__448537);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__448538 = this;
if(cljs.core.counted_QMARK_.call(null,this__448538.a))
{return cljs.core.ci_reduce.call(null,this__448538.a,f,(this__448538.a[this__448538.i]),(this__448538.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__448538.a[this__448538.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__448539 = this;
if(cljs.core.counted_QMARK_.call(null,this__448539.a))
{return cljs.core.ci_reduce.call(null,this__448539.a,f,start,this__448539.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__448540 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__448541 = this;
return (this__448541.a.length - this__448541.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__448542 = this;
return (this__448542.a[this__448542.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__448543 = this;
if(((this__448543.i + 1) < this__448543.a.length))
{return (new cljs.core.IndexedSeq(this__448543.a,(this__448543.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__448544 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__448545 = this;
var i__448546 = (n + this__448545.i);
if((i__448546 < this__448545.a.length))
{return (this__448545.a[i__448546]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__448547 = this;
var i__448548 = (n + this__448547.i);
if((i__448548 < this__448547.a.length))
{return (this__448547.a[i__448548]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__448549 = this;
return cljs.core.List.EMPTY;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__448550 = null;
var G__448550__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__448550__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__448550 = function(array,f,start){
switch(arguments.length){
case 2:
return G__448550__2.call(this,array,f);
case 3:
return G__448550__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__448550;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__448551 = null;
var G__448551__2 = (function (array,k){
return (array[k]);
});
var G__448551__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__448551 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__448551__2.call(this,array,k);
case 3:
return G__448551__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__448551;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__448552 = null;
var G__448552__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__448552__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__448552 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__448552__2.call(this,array,n);
case 3:
return G__448552__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__448552;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

goog.provide('cljs.core.RSeq');

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__448553 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__448554 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__448555 = this;
var this__448556 = this;
return cljs.core.pr_str.call(null,this__448556);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__448557 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__448558 = this;
return (this__448558.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__448559 = this;
return cljs.core._nth.call(null,this__448559.ci,this__448559.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__448560 = this;
if((this__448560.i > 0))
{return (new cljs.core.RSeq(this__448560.ci,(this__448560.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__448561 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__448562 = this;
return (new cljs.core.RSeq(this__448562.ci,this__448562.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__448563 = this;
return this__448563.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__448564 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__448564.meta);
});
cljs.core.RSeq;
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__448566 = cljs.core.next.call(null,s);
if(!((sn__448566 == null)))
{{
var G__448567 = sn__448566;
s = G__448567;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__448568__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__448569 = conj.call(null,coll,x);
var G__448570 = cljs.core.first.call(null,xs);
var G__448571 = cljs.core.next.call(null,xs);
coll = G__448569;
x = G__448570;
xs = G__448571;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__448568 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448568__delegate.call(this, coll, x, xs);
};
G__448568.cljs$lang$maxFixedArity = 2;
G__448568.cljs$lang$applyTo = (function (arglist__448572){
var coll = cljs.core.first(arglist__448572);
var x = cljs.core.first(cljs.core.next(arglist__448572));
var xs = cljs.core.rest(cljs.core.next(arglist__448572));
return G__448568__delegate(coll, x, xs);
});
G__448568.cljs$lang$arity$variadic = G__448568__delegate;
return G__448568;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__448575 = cljs.core.seq.call(null,coll);
var acc__448576 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__448575))
{return (acc__448576 + cljs.core._count.call(null,s__448575));
} else
{{
var G__448577 = cljs.core.next.call(null,s__448575);
var G__448578 = (acc__448576 + 1);
s__448575 = G__448577;
acc__448576 = G__448578;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__448579 = cljs.core.next.call(null,coll);
var G__448580 = (n - 1);
coll = G__448579;
n = G__448580;
continue;
}
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__448581 = cljs.core.next.call(null,coll);
var G__448582 = (n - 1);
var G__448583 = not_found;
coll = G__448581;
n = G__448582;
not_found = G__448583;
continue;
}
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__448590__448591 = coll;
if(G__448590__448591)
{if((function (){var or__3824__auto____448592 = (G__448590__448591.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____448592)
{return or__3824__auto____448592;
} else
{return G__448590__448591.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__448590__448591.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__448590__448591);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__448590__448591);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__448593__448594 = coll;
if(G__448593__448594)
{if((function (){var or__3824__auto____448595 = (G__448593__448594.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____448595)
{return or__3824__auto____448595;
} else
{return G__448593__448594.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__448593__448594.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__448593__448594);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__448593__448594);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__448598__delegate = function (coll,k,v,kvs){
while(true){
var ret__448597 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__448599 = ret__448597;
var G__448600 = cljs.core.first.call(null,kvs);
var G__448601 = cljs.core.second.call(null,kvs);
var G__448602 = cljs.core.nnext.call(null,kvs);
coll = G__448599;
k = G__448600;
v = G__448601;
kvs = G__448602;
continue;
}
} else
{return ret__448597;
}
break;
}
};
var G__448598 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__448598__delegate.call(this, coll, k, v, kvs);
};
G__448598.cljs$lang$maxFixedArity = 3;
G__448598.cljs$lang$applyTo = (function (arglist__448603){
var coll = cljs.core.first(arglist__448603);
var k = cljs.core.first(cljs.core.next(arglist__448603));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__448603)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__448603)));
return G__448598__delegate(coll, k, v, kvs);
});
G__448598.cljs$lang$arity$variadic = G__448598__delegate;
return G__448598;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__448606__delegate = function (coll,k,ks){
while(true){
var ret__448605 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__448607 = ret__448605;
var G__448608 = cljs.core.first.call(null,ks);
var G__448609 = cljs.core.next.call(null,ks);
coll = G__448607;
k = G__448608;
ks = G__448609;
continue;
}
} else
{return ret__448605;
}
break;
}
};
var G__448606 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448606__delegate.call(this, coll, k, ks);
};
G__448606.cljs$lang$maxFixedArity = 2;
G__448606.cljs$lang$applyTo = (function (arglist__448610){
var coll = cljs.core.first(arglist__448610);
var k = cljs.core.first(cljs.core.next(arglist__448610));
var ks = cljs.core.rest(cljs.core.next(arglist__448610));
return G__448606__delegate(coll, k, ks);
});
G__448606.cljs$lang$arity$variadic = G__448606__delegate;
return G__448606;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__448614__448615 = o;
if(G__448614__448615)
{if((function (){var or__3824__auto____448616 = (G__448614__448615.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____448616)
{return or__3824__auto____448616;
} else
{return G__448614__448615.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__448614__448615.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__448614__448615);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__448614__448615);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__448619__delegate = function (coll,k,ks){
while(true){
var ret__448618 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__448620 = ret__448618;
var G__448621 = cljs.core.first.call(null,ks);
var G__448622 = cljs.core.next.call(null,ks);
coll = G__448620;
k = G__448621;
ks = G__448622;
continue;
}
} else
{return ret__448618;
}
break;
}
};
var G__448619 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448619__delegate.call(this, coll, k, ks);
};
G__448619.cljs$lang$maxFixedArity = 2;
G__448619.cljs$lang$applyTo = (function (arglist__448623){
var coll = cljs.core.first(arglist__448623);
var k = cljs.core.first(cljs.core.next(arglist__448623));
var ks = cljs.core.rest(cljs.core.next(arglist__448623));
return G__448619__delegate(coll, k, ks);
});
G__448619.cljs$lang$arity$variadic = G__448619__delegate;
return G__448619;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__448625 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__448625);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__448625;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__448627 = (cljs.core.string_hash_cache[k]);
if(!((h__448627 == null)))
{return h__448627;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____448629 = goog.isString(o);
if(and__3822__auto____448629)
{return check_cache;
} else
{return and__3822__auto____448629;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__448633__448634 = x;
if(G__448633__448634)
{if((function (){var or__3824__auto____448635 = (G__448633__448634.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____448635)
{return or__3824__auto____448635;
} else
{return G__448633__448634.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__448633__448634.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__448633__448634);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__448633__448634);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__448639__448640 = x;
if(G__448639__448640)
{if((function (){var or__3824__auto____448641 = (G__448639__448640.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____448641)
{return or__3824__auto____448641;
} else
{return G__448639__448640.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__448639__448640.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__448639__448640);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__448639__448640);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__448645__448646 = x;
if(G__448645__448646)
{if((function (){var or__3824__auto____448647 = (G__448645__448646.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____448647)
{return or__3824__auto____448647;
} else
{return G__448645__448646.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__448645__448646.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__448645__448646);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__448645__448646);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__448651__448652 = x;
if(G__448651__448652)
{if((function (){var or__3824__auto____448653 = (G__448651__448652.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____448653)
{return or__3824__auto____448653;
} else
{return G__448651__448652.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__448651__448652.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__448651__448652);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__448651__448652);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__448657__448658 = x;
if(G__448657__448658)
{if((function (){var or__3824__auto____448659 = (G__448657__448658.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____448659)
{return or__3824__auto____448659;
} else
{return G__448657__448658.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__448657__448658.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__448657__448658);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__448657__448658);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__448663__448664 = x;
if(G__448663__448664)
{if((function (){var or__3824__auto____448665 = (G__448663__448664.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____448665)
{return or__3824__auto____448665;
} else
{return G__448663__448664.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__448663__448664.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__448663__448664);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__448663__448664);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__448669__448670 = x;
if(G__448669__448670)
{if((function (){var or__3824__auto____448671 = (G__448669__448670.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____448671)
{return or__3824__auto____448671;
} else
{return G__448669__448670.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__448669__448670.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__448669__448670);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__448669__448670);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__448675__448676 = x;
if(G__448675__448676)
{if((function (){var or__3824__auto____448677 = (G__448675__448676.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____448677)
{return or__3824__auto____448677;
} else
{return G__448675__448676.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__448675__448676.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__448675__448676);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__448675__448676);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__448678__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__448678 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__448678__delegate.call(this, keyvals);
};
G__448678.cljs$lang$maxFixedArity = 0;
G__448678.cljs$lang$applyTo = (function (arglist__448679){
var keyvals = cljs.core.seq(arglist__448679);;
return G__448678__delegate(keyvals);
});
G__448678.cljs$lang$arity$variadic = G__448678__delegate;
return G__448678;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__448681 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__448681.push(key);
}));
return keys__448681;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__448685 = i;
var j__448686 = j;
var len__448687 = len;
while(true){
if((len__448687 === 0))
{return to;
} else
{(to[j__448686] = (from[i__448685]));
{
var G__448688 = (i__448685 + 1);
var G__448689 = (j__448686 + 1);
var G__448690 = (len__448687 - 1);
i__448685 = G__448688;
j__448686 = G__448689;
len__448687 = G__448690;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__448694 = (i + (len - 1));
var j__448695 = (j + (len - 1));
var len__448696 = len;
while(true){
if((len__448696 === 0))
{return to;
} else
{(to[j__448695] = (from[i__448694]));
{
var G__448697 = (i__448694 - 1);
var G__448698 = (j__448695 - 1);
var G__448699 = (len__448696 - 1);
i__448694 = G__448697;
j__448695 = G__448698;
len__448696 = G__448699;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__448703__448704 = s;
if(G__448703__448704)
{if((function (){var or__3824__auto____448705 = (G__448703__448704.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____448705)
{return or__3824__auto____448705;
} else
{return G__448703__448704.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__448703__448704.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__448703__448704);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__448703__448704);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__448709__448710 = s;
if(G__448709__448710)
{if((function (){var or__3824__auto____448711 = (G__448709__448710.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____448711)
{return or__3824__auto____448711;
} else
{return G__448709__448710.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__448709__448710.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__448709__448710);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__448709__448710);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____448714 = goog.isString(x);
if(and__3822__auto____448714)
{return !((function (){var or__3824__auto____448715 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____448715)
{return or__3824__auto____448715;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____448714;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____448717 = goog.isString(x);
if(and__3822__auto____448717)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____448717;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____448719 = goog.isString(x);
if(and__3822__auto____448719)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____448719;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____448724 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____448724)
{return or__3824__auto____448724;
} else
{var G__448725__448726 = f;
if(G__448725__448726)
{if((function (){var or__3824__auto____448727 = (G__448725__448726.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____448727)
{return or__3824__auto____448727;
} else
{return G__448725__448726.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__448725__448726.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__448725__448726);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__448725__448726);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____448731 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____448731)
{var and__3822__auto____448732 = !(isNaN(n));
if(and__3822__auto____448732)
{var and__3822__auto____448733 = !((n === Infinity));
if(and__3822__auto____448733)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____448733;
}
} else
{return and__3822__auto____448732;
}
} else
{return and__3822__auto____448731;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((function (){var and__3822__auto____448736 = !((coll == null));
if(and__3822__auto____448736)
{var and__3822__auto____448737 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____448737)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____448737;
}
} else
{return and__3822__auto____448736;
}
})())
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__448746__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__448742 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__448743 = more;
while(true){
var x__448744 = cljs.core.first.call(null,xs__448743);
var etc__448745 = cljs.core.next.call(null,xs__448743);
if(cljs.core.truth_(xs__448743))
{if(cljs.core.contains_QMARK_.call(null,s__448742,x__448744))
{return false;
} else
{{
var G__448747 = cljs.core.conj.call(null,s__448742,x__448744);
var G__448748 = etc__448745;
s__448742 = G__448747;
xs__448743 = G__448748;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__448746 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448746__delegate.call(this, x, y, more);
};
G__448746.cljs$lang$maxFixedArity = 2;
G__448746.cljs$lang$applyTo = (function (arglist__448749){
var x = cljs.core.first(arglist__448749);
var y = cljs.core.first(cljs.core.next(arglist__448749));
var more = cljs.core.rest(cljs.core.next(arglist__448749));
return G__448746__delegate(x, y, more);
});
G__448746.cljs$lang$arity$variadic = G__448746__delegate;
return G__448746;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__448753__448754 = x;
if(G__448753__448754)
{if((function (){var or__3824__auto____448755 = (G__448753__448754.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____448755)
{return or__3824__auto____448755;
} else
{return G__448753__448754.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__448753__448754.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__448753__448754);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__448753__448754);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__448760 = cljs.core.count.call(null,xs);
var yl__448761 = cljs.core.count.call(null,ys);
if((xl__448760 < yl__448761))
{return -1;
} else
{if((xl__448760 > yl__448761))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__448760,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__448762 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____448763 = (d__448762 === 0);
if(and__3822__auto____448763)
{return ((n + 1) < len);
} else
{return and__3822__auto____448763;
}
})())
{{
var G__448764 = xs;
var G__448765 = ys;
var G__448766 = len;
var G__448767 = (n + 1);
xs = G__448764;
ys = G__448765;
len = G__448766;
n = G__448767;
continue;
}
} else
{return d__448762;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__448769 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__448769))
{return r__448769;
} else
{if(cljs.core.truth_(r__448769))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__448771 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__448771,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__448771);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____448777 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____448777)
{var s__448778 = temp__3971__auto____448777;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__448778),cljs.core.next.call(null,s__448778));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__448779 = val;
var coll__448780 = cljs.core.seq.call(null,coll);
while(true){
if(coll__448780)
{var nval__448781 = f.call(null,val__448779,cljs.core.first.call(null,coll__448780));
if(cljs.core.reduced_QMARK_.call(null,nval__448781))
{return cljs.core.deref.call(null,nval__448781);
} else
{{
var G__448782 = nval__448781;
var G__448783 = cljs.core.next.call(null,coll__448780);
val__448779 = G__448782;
coll__448780 = G__448783;
continue;
}
}
} else
{return val__448779;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__448785 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__448785);
return cljs.core.vec.call(null,a__448785);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__448792__448793 = coll;
if(G__448792__448793)
{if((function (){var or__3824__auto____448794 = (G__448792__448793.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____448794)
{return or__3824__auto____448794;
} else
{return G__448792__448793.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__448792__448793.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__448792__448793);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__448792__448793);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__448795__448796 = coll;
if(G__448795__448796)
{if((function (){var or__3824__auto____448797 = (G__448795__448796.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____448797)
{return or__3824__auto____448797;
} else
{return G__448795__448796.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__448795__448796.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__448795__448796);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__448795__448796);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__448798__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__448798 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448798__delegate.call(this, x, y, more);
};
G__448798.cljs$lang$maxFixedArity = 2;
G__448798.cljs$lang$applyTo = (function (arglist__448799){
var x = cljs.core.first(arglist__448799);
var y = cljs.core.first(cljs.core.next(arglist__448799));
var more = cljs.core.rest(cljs.core.next(arglist__448799));
return G__448798__delegate(x, y, more);
});
G__448798.cljs$lang$arity$variadic = G__448798__delegate;
return G__448798;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__448800__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__448800 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448800__delegate.call(this, x, y, more);
};
G__448800.cljs$lang$maxFixedArity = 2;
G__448800.cljs$lang$applyTo = (function (arglist__448801){
var x = cljs.core.first(arglist__448801);
var y = cljs.core.first(cljs.core.next(arglist__448801));
var more = cljs.core.rest(cljs.core.next(arglist__448801));
return G__448800__delegate(x, y, more);
});
G__448800.cljs$lang$arity$variadic = G__448800__delegate;
return G__448800;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__448802__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__448802 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448802__delegate.call(this, x, y, more);
};
G__448802.cljs$lang$maxFixedArity = 2;
G__448802.cljs$lang$applyTo = (function (arglist__448803){
var x = cljs.core.first(arglist__448803);
var y = cljs.core.first(cljs.core.next(arglist__448803));
var more = cljs.core.rest(cljs.core.next(arglist__448803));
return G__448802__delegate(x, y, more);
});
G__448802.cljs$lang$arity$variadic = G__448802__delegate;
return G__448802;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__448804__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__448804 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448804__delegate.call(this, x, y, more);
};
G__448804.cljs$lang$maxFixedArity = 2;
G__448804.cljs$lang$applyTo = (function (arglist__448805){
var x = cljs.core.first(arglist__448805);
var y = cljs.core.first(cljs.core.next(arglist__448805));
var more = cljs.core.rest(cljs.core.next(arglist__448805));
return G__448804__delegate(x, y, more);
});
G__448804.cljs$lang$arity$variadic = G__448804__delegate;
return G__448804;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__448806__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__448807 = y;
var G__448808 = cljs.core.first.call(null,more);
var G__448809 = cljs.core.next.call(null,more);
x = G__448807;
y = G__448808;
more = G__448809;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__448806 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448806__delegate.call(this, x, y, more);
};
G__448806.cljs$lang$maxFixedArity = 2;
G__448806.cljs$lang$applyTo = (function (arglist__448810){
var x = cljs.core.first(arglist__448810);
var y = cljs.core.first(cljs.core.next(arglist__448810));
var more = cljs.core.rest(cljs.core.next(arglist__448810));
return G__448806__delegate(x, y, more);
});
G__448806.cljs$lang$arity$variadic = G__448806__delegate;
return G__448806;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__448811__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__448812 = y;
var G__448813 = cljs.core.first.call(null,more);
var G__448814 = cljs.core.next.call(null,more);
x = G__448812;
y = G__448813;
more = G__448814;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__448811 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448811__delegate.call(this, x, y, more);
};
G__448811.cljs$lang$maxFixedArity = 2;
G__448811.cljs$lang$applyTo = (function (arglist__448815){
var x = cljs.core.first(arglist__448815);
var y = cljs.core.first(cljs.core.next(arglist__448815));
var more = cljs.core.rest(cljs.core.next(arglist__448815));
return G__448811__delegate(x, y, more);
});
G__448811.cljs$lang$arity$variadic = G__448811__delegate;
return G__448811;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__448816__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__448817 = y;
var G__448818 = cljs.core.first.call(null,more);
var G__448819 = cljs.core.next.call(null,more);
x = G__448817;
y = G__448818;
more = G__448819;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__448816 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448816__delegate.call(this, x, y, more);
};
G__448816.cljs$lang$maxFixedArity = 2;
G__448816.cljs$lang$applyTo = (function (arglist__448820){
var x = cljs.core.first(arglist__448820);
var y = cljs.core.first(cljs.core.next(arglist__448820));
var more = cljs.core.rest(cljs.core.next(arglist__448820));
return G__448816__delegate(x, y, more);
});
G__448816.cljs$lang$arity$variadic = G__448816__delegate;
return G__448816;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__448821__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__448822 = y;
var G__448823 = cljs.core.first.call(null,more);
var G__448824 = cljs.core.next.call(null,more);
x = G__448822;
y = G__448823;
more = G__448824;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__448821 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448821__delegate.call(this, x, y, more);
};
G__448821.cljs$lang$maxFixedArity = 2;
G__448821.cljs$lang$applyTo = (function (arglist__448825){
var x = cljs.core.first(arglist__448825);
var y = cljs.core.first(cljs.core.next(arglist__448825));
var more = cljs.core.rest(cljs.core.next(arglist__448825));
return G__448821__delegate(x, y, more);
});
G__448821.cljs$lang$arity$variadic = G__448821__delegate;
return G__448821;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__448826__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__448826 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448826__delegate.call(this, x, y, more);
};
G__448826.cljs$lang$maxFixedArity = 2;
G__448826.cljs$lang$applyTo = (function (arglist__448827){
var x = cljs.core.first(arglist__448827);
var y = cljs.core.first(cljs.core.next(arglist__448827));
var more = cljs.core.rest(cljs.core.next(arglist__448827));
return G__448826__delegate(x, y, more);
});
G__448826.cljs$lang$arity$variadic = G__448826__delegate;
return G__448826;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__448828__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__448828 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448828__delegate.call(this, x, y, more);
};
G__448828.cljs$lang$maxFixedArity = 2;
G__448828.cljs$lang$applyTo = (function (arglist__448829){
var x = cljs.core.first(arglist__448829);
var y = cljs.core.first(cljs.core.next(arglist__448829));
var more = cljs.core.rest(cljs.core.next(arglist__448829));
return G__448828__delegate(x, y, more);
});
G__448828.cljs$lang$arity$variadic = G__448828__delegate;
return G__448828;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__448831 = (n % d);
return cljs.core.fix.call(null,((n - rem__448831) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__448833 = cljs.core.quot.call(null,n,d);
return (n - (d * q__448833));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__448836 = (v - ((v >> 1) & 1431655765));
var v__448837 = ((v__448836 & 858993459) + ((v__448836 >> 2) & 858993459));
return ((((v__448837 + (v__448837 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__448838__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__448839 = y;
var G__448840 = cljs.core.first.call(null,more);
var G__448841 = cljs.core.next.call(null,more);
x = G__448839;
y = G__448840;
more = G__448841;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__448838 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__448838__delegate.call(this, x, y, more);
};
G__448838.cljs$lang$maxFixedArity = 2;
G__448838.cljs$lang$applyTo = (function (arglist__448842){
var x = cljs.core.first(arglist__448842);
var y = cljs.core.first(cljs.core.next(arglist__448842));
var more = cljs.core.rest(cljs.core.next(arglist__448842));
return G__448838__delegate(x, y, more);
});
G__448838.cljs$lang$arity$variadic = G__448838__delegate;
return G__448838;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__448846 = n;
var xs__448847 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____448848 = xs__448847;
if(and__3822__auto____448848)
{return (n__448846 > 0);
} else
{return and__3822__auto____448848;
}
})()))
{{
var G__448849 = (n__448846 - 1);
var G__448850 = cljs.core.next.call(null,xs__448847);
n__448846 = G__448849;
xs__448847 = G__448850;
continue;
}
} else
{return xs__448847;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__448851__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__448852 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__448853 = cljs.core.next.call(null,more);
sb = G__448852;
more = G__448853;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__448851 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__448851__delegate.call(this, x, ys);
};
G__448851.cljs$lang$maxFixedArity = 1;
G__448851.cljs$lang$applyTo = (function (arglist__448854){
var x = cljs.core.first(arglist__448854);
var ys = cljs.core.rest(arglist__448854);
return G__448851__delegate(x, ys);
});
G__448851.cljs$lang$arity$variadic = G__448851__delegate;
return G__448851;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__448855__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__448856 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__448857 = cljs.core.next.call(null,more);
sb = G__448856;
more = G__448857;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__448855 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__448855__delegate.call(this, x, ys);
};
G__448855.cljs$lang$maxFixedArity = 1;
G__448855.cljs$lang$applyTo = (function (arglist__448858){
var x = cljs.core.first(arglist__448858);
var ys = cljs.core.rest(arglist__448858);
return G__448855__delegate(x, ys);
});
G__448855.cljs$lang$arity$variadic = G__448855__delegate;
return G__448855;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
var args__448862 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____448861 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____448861)
{return or__3824__auto____448861;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__448862);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__448863){
var fmt = cljs.core.first(arglist__448863);
var args = cljs.core.rest(arglist__448863);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
} else
{return null;
}
}
}
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__448866 = cljs.core.seq.call(null,x);
var ys__448867 = cljs.core.seq.call(null,y);
while(true){
if((xs__448866 == null))
{return (ys__448867 == null);
} else
{if((ys__448867 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__448866),cljs.core.first.call(null,ys__448867)))
{{
var G__448868 = cljs.core.next.call(null,xs__448866);
var G__448869 = cljs.core.next.call(null,ys__448867);
xs__448866 = G__448868;
ys__448867 = G__448869;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__448870_SHARP_,p2__448871_SHARP_){
return cljs.core.hash_combine.call(null,p1__448870_SHARP_,cljs.core.hash.call(null,p2__448871_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__448875 = 0;
var s__448876 = cljs.core.seq.call(null,m);
while(true){
if(s__448876)
{var e__448877 = cljs.core.first.call(null,s__448876);
{
var G__448878 = ((h__448875 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__448877)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__448877)))) % 4503599627370496);
var G__448879 = cljs.core.next.call(null,s__448876);
h__448875 = G__448878;
s__448876 = G__448879;
continue;
}
} else
{return h__448875;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__448883 = 0;
var s__448884 = cljs.core.seq.call(null,s);
while(true){
if(s__448884)
{var e__448885 = cljs.core.first.call(null,s__448884);
{
var G__448886 = ((h__448883 + cljs.core.hash.call(null,e__448885)) % 4503599627370496);
var G__448887 = cljs.core.next.call(null,s__448884);
h__448883 = G__448886;
s__448884 = G__448887;
continue;
}
} else
{return h__448883;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__448895__448896 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__448895__448896)
{var vec__448897__448898 = cljs.core.first.call(null,G__448895__448896);
var key_name__448899 = cljs.core.nth.call(null,vec__448897__448898,0,null);
var f__448900 = cljs.core.nth.call(null,vec__448897__448898,1,null);
var str_name__448901 = cljs.core.name.call(null,key_name__448899);
(obj[str_name__448901] = f__448900);
{
var G__448902 = cljs.core.next.call(null,G__448895__448896);
G__448895__448896 = G__448902;
continue;
}
} else
{}
break;
}
return obj;
});

goog.provide('cljs.core.List');

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__448903 = this;
var h__2203__auto____448904 = this__448903.__hash;
if(!((h__2203__auto____448904 == null)))
{return h__2203__auto____448904;
} else
{var h__2203__auto____448905 = cljs.core.hash_coll.call(null,coll);
this__448903.__hash = h__2203__auto____448905;
return h__2203__auto____448905;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__448906 = this;
if((this__448906.count === 1))
{return null;
} else
{return this__448906.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__448907 = this;
return (new cljs.core.List(this__448907.meta,o,coll,(this__448907.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__448908 = this;
var this__448909 = this;
return cljs.core.pr_str.call(null,this__448909);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__448910 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__448911 = this;
return this__448911.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__448912 = this;
return this__448912.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__448913 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__448914 = this;
return this__448914.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__448915 = this;
if((this__448915.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__448915.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__448916 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__448917 = this;
return (new cljs.core.List(meta,this__448917.first,this__448917.rest,this__448917.count,this__448917.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__448918 = this;
return this__448918.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__448919 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

goog.provide('cljs.core.EmptyList');

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__448920 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__448921 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__448922 = this;
return (new cljs.core.List(this__448922.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__448923 = this;
var this__448924 = this;
return cljs.core.pr_str.call(null,this__448924);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__448925 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__448926 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__448927 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__448928 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__448929 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__448930 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__448931 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__448932 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__448933 = this;
return this__448933.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__448934 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__448938__448939 = coll;
if(G__448938__448939)
{if((function (){var or__3824__auto____448940 = (G__448938__448939.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____448940)
{return or__3824__auto____448940;
} else
{return G__448938__448939.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__448938__448939.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__448938__448939);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__448938__448939);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__448941__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__448941 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__448941__delegate.call(this, x, y, z, items);
};
G__448941.cljs$lang$maxFixedArity = 3;
G__448941.cljs$lang$applyTo = (function (arglist__448942){
var x = cljs.core.first(arglist__448942);
var y = cljs.core.first(cljs.core.next(arglist__448942));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__448942)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__448942)));
return G__448941__delegate(x, y, z, items);
});
G__448941.cljs$lang$arity$variadic = G__448941__delegate;
return G__448941;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

goog.provide('cljs.core.Cons');

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__448943 = this;
var h__2203__auto____448944 = this__448943.__hash;
if(!((h__2203__auto____448944 == null)))
{return h__2203__auto____448944;
} else
{var h__2203__auto____448945 = cljs.core.hash_coll.call(null,coll);
this__448943.__hash = h__2203__auto____448945;
return h__2203__auto____448945;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__448946 = this;
if((this__448946.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__448946.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__448947 = this;
return (new cljs.core.Cons(null,o,coll,this__448947.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__448948 = this;
var this__448949 = this;
return cljs.core.pr_str.call(null,this__448949);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__448950 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__448951 = this;
return this__448951.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__448952 = this;
if((this__448952.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__448952.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__448953 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__448954 = this;
return (new cljs.core.Cons(meta,this__448954.first,this__448954.rest,this__448954.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__448955 = this;
return this__448955.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__448956 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__448956.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____448961 = (coll == null);
if(or__3824__auto____448961)
{return or__3824__auto____448961;
} else
{var G__448962__448963 = coll;
if(G__448962__448963)
{if((function (){var or__3824__auto____448964 = (G__448962__448963.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____448964)
{return or__3824__auto____448964;
} else
{return G__448962__448963.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__448962__448963.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__448962__448963);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__448962__448963);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__448968__448969 = x;
if(G__448968__448969)
{if((function (){var or__3824__auto____448970 = (G__448968__448969.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____448970)
{return or__3824__auto____448970;
} else
{return G__448968__448969.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__448968__448969.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__448968__448969);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__448968__448969);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__448971 = null;
var G__448971__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__448971__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__448971 = function(string,f,start){
switch(arguments.length){
case 2:
return G__448971__2.call(this,string,f);
case 3:
return G__448971__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__448971;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__448972 = null;
var G__448972__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__448972__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__448972 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__448972__2.call(this,string,k);
case 3:
return G__448972__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__448972;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__448973 = null;
var G__448973__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__448973__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__448973 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__448973__2.call(this,string,n);
case 3:
return G__448973__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__448973;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

goog.provide('cljs.core.Keyword');

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__448985 = null;
var G__448985__2 = (function (this_sym448976,coll){
var this__448978 = this;
var this_sym448976__448979 = this;
var ___448980 = this_sym448976__448979;
if((coll == null))
{return null;
} else
{var strobj__448981 = coll.strobj;
if((strobj__448981 == null))
{return cljs.core._lookup.call(null,coll,this__448978.k,null);
} else
{return (strobj__448981[this__448978.k]);
}
}
});
var G__448985__3 = (function (this_sym448977,coll,not_found){
var this__448978 = this;
var this_sym448977__448982 = this;
var ___448983 = this_sym448977__448982;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__448978.k,not_found);
}
});
G__448985 = function(this_sym448977,coll,not_found){
switch(arguments.length){
case 2:
return G__448985__2.call(this,this_sym448977,coll);
case 3:
return G__448985__3.call(this,this_sym448977,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__448985;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym448974,args448975){
var this__448984 = this;
return this_sym448974.call.apply(this_sym448974,[this_sym448974].concat(args448975.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__448994 = null;
var G__448994__2 = (function (this_sym448988,coll){
var this_sym448988__448990 = this;
var this__448991 = this_sym448988__448990;
return cljs.core._lookup.call(null,coll,this__448991.toString(),null);
});
var G__448994__3 = (function (this_sym448989,coll,not_found){
var this_sym448989__448992 = this;
var this__448993 = this_sym448989__448992;
return cljs.core._lookup.call(null,coll,this__448993.toString(),not_found);
});
G__448994 = function(this_sym448989,coll,not_found){
switch(arguments.length){
case 2:
return G__448994__2.call(this,this_sym448989,coll);
case 3:
return G__448994__3.call(this,this_sym448989,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__448994;
})()
;
String.prototype.apply = (function (this_sym448986,args448987){
return this_sym448986.call.apply(this_sym448986,[this_sym448986].concat(args448987.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__448996 = lazy_seq.x;
if(lazy_seq.realized)
{return x__448996;
} else
{lazy_seq.x = x__448996.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

goog.provide('cljs.core.LazySeq');

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__448997 = this;
var h__2203__auto____448998 = this__448997.__hash;
if(!((h__2203__auto____448998 == null)))
{return h__2203__auto____448998;
} else
{var h__2203__auto____448999 = cljs.core.hash_coll.call(null,coll);
this__448997.__hash = h__2203__auto____448999;
return h__2203__auto____448999;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__449000 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__449001 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__449002 = this;
var this__449003 = this;
return cljs.core.pr_str.call(null,this__449003);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__449004 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__449005 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__449006 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__449007 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__449008 = this;
return (new cljs.core.LazySeq(meta,this__449008.realized,this__449008.x,this__449008.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__449009 = this;
return this__449009.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__449010 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__449010.meta);
});
cljs.core.LazySeq;

goog.provide('cljs.core.ChunkBuffer');

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__449011 = this;
return this__449011.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__449012 = this;
var ___449013 = this;
(this__449012.buf[this__449012.end] = o);
return this__449012.end = (this__449012.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__449014 = this;
var ___449015 = this;
var ret__449016 = (new cljs.core.ArrayChunk(this__449014.buf,0,this__449014.end));
this__449014.buf = null;
return ret__449016;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

goog.provide('cljs.core.ArrayChunk');

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__449017 = this;
return cljs.core.array_reduce.call(null,this__449017.arr,f,(this__449017.arr[this__449017.off]),(this__449017.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__449018 = this;
return cljs.core.array_reduce.call(null,this__449018.arr,f,start,this__449018.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__449019 = this;
if((this__449019.off === this__449019.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__449019.arr,(this__449019.off + 1),this__449019.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__449020 = this;
return (this__449020.arr[(this__449020.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__449021 = this;
if((function (){var and__3822__auto____449022 = (i >= 0);
if(and__3822__auto____449022)
{return (i < (this__449021.end - this__449021.off));
} else
{return and__3822__auto____449022;
}
})())
{return (this__449021.arr[(this__449021.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__449023 = this;
return (this__449023.end - this__449023.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

goog.provide('cljs.core.ChunkedCons');

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850604;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__449024 = this;
var h__2203__auto____449025 = this__449024.__hash;
if(!((h__2203__auto____449025 == null)))
{return h__2203__auto____449025;
} else
{var h__2203__auto____449026 = cljs.core.hash_coll.call(null,coll);
this__449024.__hash = h__2203__auto____449026;
return h__2203__auto____449026;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__449027 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__449028 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__449029 = this;
return cljs.core._nth.call(null,this__449029.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__449030 = this;
if((cljs.core._count.call(null,this__449030.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__449030.chunk),this__449030.more,this__449030.meta,null));
} else
{if((this__449030.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__449030.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__449031 = this;
if((this__449031.more == null))
{return null;
} else
{return this__449031.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__449032 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__449033 = this;
return (new cljs.core.ChunkedCons(this__449033.chunk,this__449033.more,m,this__449033.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__449034 = this;
return this__449034.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__449035 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__449035.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__449036 = this;
return this__449036.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__449037 = this;
if((this__449037.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__449037.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__449041__449042 = s;
if(G__449041__449042)
{if((function (){var or__3824__auto____449043 = (G__449041__449042.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____449043)
{return or__3824__auto____449043;
} else
{return G__449041__449042.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__449041__449042.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__449041__449042);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__449041__449042);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__449046 = [];
var s__449047 = s;
while(true){
if(cljs.core.seq.call(null,s__449047))
{ary__449046.push(cljs.core.first.call(null,s__449047));
{
var G__449048 = cljs.core.next.call(null,s__449047);
s__449047 = G__449048;
continue;
}
} else
{return ary__449046;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__449052 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__449053 = 0;
var xs__449054 = cljs.core.seq.call(null,coll);
while(true){
if(xs__449054)
{(ret__449052[i__449053] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__449054)));
{
var G__449055 = (i__449053 + 1);
var G__449056 = cljs.core.next.call(null,xs__449054);
i__449053 = G__449055;
xs__449054 = G__449056;
continue;
}
} else
{}
break;
}
return ret__449052;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__449064 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__449065 = cljs.core.seq.call(null,init_val_or_seq);
var i__449066 = 0;
var s__449067 = s__449065;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____449068 = s__449067;
if(and__3822__auto____449068)
{return (i__449066 < size);
} else
{return and__3822__auto____449068;
}
})()))
{(a__449064[i__449066] = cljs.core.first.call(null,s__449067));
{
var G__449071 = (i__449066 + 1);
var G__449072 = cljs.core.next.call(null,s__449067);
i__449066 = G__449071;
s__449067 = G__449072;
continue;
}
} else
{return a__449064;
}
break;
}
} else
{var n__2549__auto____449069 = size;
var i__449070 = 0;
while(true){
if((i__449070 < n__2549__auto____449069))
{(a__449064[i__449070] = init_val_or_seq);
{
var G__449073 = (i__449070 + 1);
i__449070 = G__449073;
continue;
}
} else
{}
break;
}
return a__449064;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__449081 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__449082 = cljs.core.seq.call(null,init_val_or_seq);
var i__449083 = 0;
var s__449084 = s__449082;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____449085 = s__449084;
if(and__3822__auto____449085)
{return (i__449083 < size);
} else
{return and__3822__auto____449085;
}
})()))
{(a__449081[i__449083] = cljs.core.first.call(null,s__449084));
{
var G__449088 = (i__449083 + 1);
var G__449089 = cljs.core.next.call(null,s__449084);
i__449083 = G__449088;
s__449084 = G__449089;
continue;
}
} else
{return a__449081;
}
break;
}
} else
{var n__2549__auto____449086 = size;
var i__449087 = 0;
while(true){
if((i__449087 < n__2549__auto____449086))
{(a__449081[i__449087] = init_val_or_seq);
{
var G__449090 = (i__449087 + 1);
i__449087 = G__449090;
continue;
}
} else
{}
break;
}
return a__449081;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__449098 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__449099 = cljs.core.seq.call(null,init_val_or_seq);
var i__449100 = 0;
var s__449101 = s__449099;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____449102 = s__449101;
if(and__3822__auto____449102)
{return (i__449100 < size);
} else
{return and__3822__auto____449102;
}
})()))
{(a__449098[i__449100] = cljs.core.first.call(null,s__449101));
{
var G__449105 = (i__449100 + 1);
var G__449106 = cljs.core.next.call(null,s__449101);
i__449100 = G__449105;
s__449101 = G__449106;
continue;
}
} else
{return a__449098;
}
break;
}
} else
{var n__2549__auto____449103 = size;
var i__449104 = 0;
while(true){
if((i__449104 < n__2549__auto____449103))
{(a__449098[i__449104] = init_val_or_seq);
{
var G__449107 = (i__449104 + 1);
i__449104 = G__449107;
continue;
}
} else
{}
break;
}
return a__449098;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__449112 = s;
var i__449113 = n;
var sum__449114 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____449115 = (i__449113 > 0);
if(and__3822__auto____449115)
{return cljs.core.seq.call(null,s__449112);
} else
{return and__3822__auto____449115;
}
})()))
{{
var G__449116 = cljs.core.next.call(null,s__449112);
var G__449117 = (i__449113 - 1);
var G__449118 = (sum__449114 + 1);
s__449112 = G__449116;
i__449113 = G__449117;
sum__449114 = G__449118;
continue;
}
} else
{return sum__449114;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__449123 = cljs.core.seq.call(null,x);
if(s__449123)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__449123))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__449123),concat.call(null,cljs.core.chunk_rest.call(null,s__449123),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__449123),concat.call(null,cljs.core.rest.call(null,s__449123),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__449127__delegate = function (x,y,zs){
var cat__449126 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__449125 = cljs.core.seq.call(null,xys);
if(xys__449125)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__449125))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__449125),cat.call(null,cljs.core.chunk_rest.call(null,xys__449125),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__449125),cat.call(null,cljs.core.rest.call(null,xys__449125),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__449126.call(null,concat.call(null,x,y),zs);
};
var G__449127 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__449127__delegate.call(this, x, y, zs);
};
G__449127.cljs$lang$maxFixedArity = 2;
G__449127.cljs$lang$applyTo = (function (arglist__449128){
var x = cljs.core.first(arglist__449128);
var y = cljs.core.first(cljs.core.next(arglist__449128));
var zs = cljs.core.rest(cljs.core.next(arglist__449128));
return G__449127__delegate(x, y, zs);
});
G__449127.cljs$lang$arity$variadic = G__449127__delegate;
return G__449127;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__449129__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__449129 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__449129__delegate.call(this, a, b, c, d, more);
};
G__449129.cljs$lang$maxFixedArity = 4;
G__449129.cljs$lang$applyTo = (function (arglist__449130){
var a = cljs.core.first(arglist__449130);
var b = cljs.core.first(cljs.core.next(arglist__449130));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449130)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__449130))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__449130))));
return G__449129__delegate(a, b, c, d, more);
});
G__449129.cljs$lang$arity$variadic = G__449129__delegate;
return G__449129;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__449172 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__449173 = cljs.core._first.call(null,args__449172);
var args__449174 = cljs.core._rest.call(null,args__449172);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__449173);
} else
{return f.call(null,a__449173);
}
} else
{var b__449175 = cljs.core._first.call(null,args__449174);
var args__449176 = cljs.core._rest.call(null,args__449174);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__449173,b__449175);
} else
{return f.call(null,a__449173,b__449175);
}
} else
{var c__449177 = cljs.core._first.call(null,args__449176);
var args__449178 = cljs.core._rest.call(null,args__449176);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__449173,b__449175,c__449177);
} else
{return f.call(null,a__449173,b__449175,c__449177);
}
} else
{var d__449179 = cljs.core._first.call(null,args__449178);
var args__449180 = cljs.core._rest.call(null,args__449178);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__449173,b__449175,c__449177,d__449179);
} else
{return f.call(null,a__449173,b__449175,c__449177,d__449179);
}
} else
{var e__449181 = cljs.core._first.call(null,args__449180);
var args__449182 = cljs.core._rest.call(null,args__449180);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__449173,b__449175,c__449177,d__449179,e__449181);
} else
{return f.call(null,a__449173,b__449175,c__449177,d__449179,e__449181);
}
} else
{var f__449183 = cljs.core._first.call(null,args__449182);
var args__449184 = cljs.core._rest.call(null,args__449182);
if((argc === 6))
{if(f__449183.cljs$lang$arity$6)
{return f__449183.cljs$lang$arity$6(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183);
}
} else
{var g__449185 = cljs.core._first.call(null,args__449184);
var args__449186 = cljs.core._rest.call(null,args__449184);
if((argc === 7))
{if(f__449183.cljs$lang$arity$7)
{return f__449183.cljs$lang$arity$7(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185);
}
} else
{var h__449187 = cljs.core._first.call(null,args__449186);
var args__449188 = cljs.core._rest.call(null,args__449186);
if((argc === 8))
{if(f__449183.cljs$lang$arity$8)
{return f__449183.cljs$lang$arity$8(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187);
}
} else
{var i__449189 = cljs.core._first.call(null,args__449188);
var args__449190 = cljs.core._rest.call(null,args__449188);
if((argc === 9))
{if(f__449183.cljs$lang$arity$9)
{return f__449183.cljs$lang$arity$9(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189);
}
} else
{var j__449191 = cljs.core._first.call(null,args__449190);
var args__449192 = cljs.core._rest.call(null,args__449190);
if((argc === 10))
{if(f__449183.cljs$lang$arity$10)
{return f__449183.cljs$lang$arity$10(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191);
}
} else
{var k__449193 = cljs.core._first.call(null,args__449192);
var args__449194 = cljs.core._rest.call(null,args__449192);
if((argc === 11))
{if(f__449183.cljs$lang$arity$11)
{return f__449183.cljs$lang$arity$11(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193);
}
} else
{var l__449195 = cljs.core._first.call(null,args__449194);
var args__449196 = cljs.core._rest.call(null,args__449194);
if((argc === 12))
{if(f__449183.cljs$lang$arity$12)
{return f__449183.cljs$lang$arity$12(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195);
}
} else
{var m__449197 = cljs.core._first.call(null,args__449196);
var args__449198 = cljs.core._rest.call(null,args__449196);
if((argc === 13))
{if(f__449183.cljs$lang$arity$13)
{return f__449183.cljs$lang$arity$13(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197);
}
} else
{var n__449199 = cljs.core._first.call(null,args__449198);
var args__449200 = cljs.core._rest.call(null,args__449198);
if((argc === 14))
{if(f__449183.cljs$lang$arity$14)
{return f__449183.cljs$lang$arity$14(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199);
}
} else
{var o__449201 = cljs.core._first.call(null,args__449200);
var args__449202 = cljs.core._rest.call(null,args__449200);
if((argc === 15))
{if(f__449183.cljs$lang$arity$15)
{return f__449183.cljs$lang$arity$15(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199,o__449201);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199,o__449201);
}
} else
{var p__449203 = cljs.core._first.call(null,args__449202);
var args__449204 = cljs.core._rest.call(null,args__449202);
if((argc === 16))
{if(f__449183.cljs$lang$arity$16)
{return f__449183.cljs$lang$arity$16(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199,o__449201,p__449203);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199,o__449201,p__449203);
}
} else
{var q__449205 = cljs.core._first.call(null,args__449204);
var args__449206 = cljs.core._rest.call(null,args__449204);
if((argc === 17))
{if(f__449183.cljs$lang$arity$17)
{return f__449183.cljs$lang$arity$17(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199,o__449201,p__449203,q__449205);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199,o__449201,p__449203,q__449205);
}
} else
{var r__449207 = cljs.core._first.call(null,args__449206);
var args__449208 = cljs.core._rest.call(null,args__449206);
if((argc === 18))
{if(f__449183.cljs$lang$arity$18)
{return f__449183.cljs$lang$arity$18(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199,o__449201,p__449203,q__449205,r__449207);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199,o__449201,p__449203,q__449205,r__449207);
}
} else
{var s__449209 = cljs.core._first.call(null,args__449208);
var args__449210 = cljs.core._rest.call(null,args__449208);
if((argc === 19))
{if(f__449183.cljs$lang$arity$19)
{return f__449183.cljs$lang$arity$19(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199,o__449201,p__449203,q__449205,r__449207,s__449209);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199,o__449201,p__449203,q__449205,r__449207,s__449209);
}
} else
{var t__449211 = cljs.core._first.call(null,args__449210);
var args__449212 = cljs.core._rest.call(null,args__449210);
if((argc === 20))
{if(f__449183.cljs$lang$arity$20)
{return f__449183.cljs$lang$arity$20(a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199,o__449201,p__449203,q__449205,r__449207,s__449209,t__449211);
} else
{return f__449183.call(null,a__449173,b__449175,c__449177,d__449179,e__449181,f__449183,g__449185,h__449187,i__449189,j__449191,k__449193,l__449195,m__449197,n__449199,o__449201,p__449203,q__449205,r__449207,s__449209,t__449211);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__449227 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__449228 = cljs.core.bounded_count.call(null,args,(fixed_arity__449227 + 1));
if((bc__449228 <= fixed_arity__449227))
{return cljs.core.apply_to.call(null,f,bc__449228,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__449229 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__449230 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__449231 = cljs.core.bounded_count.call(null,arglist__449229,(fixed_arity__449230 + 1));
if((bc__449231 <= fixed_arity__449230))
{return cljs.core.apply_to.call(null,f,bc__449231,arglist__449229);
} else
{return f.cljs$lang$applyTo(arglist__449229);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__449229));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__449232 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__449233 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__449234 = cljs.core.bounded_count.call(null,arglist__449232,(fixed_arity__449233 + 1));
if((bc__449234 <= fixed_arity__449233))
{return cljs.core.apply_to.call(null,f,bc__449234,arglist__449232);
} else
{return f.cljs$lang$applyTo(arglist__449232);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__449232));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__449235 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__449236 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__449237 = cljs.core.bounded_count.call(null,arglist__449235,(fixed_arity__449236 + 1));
if((bc__449237 <= fixed_arity__449236))
{return cljs.core.apply_to.call(null,f,bc__449237,arglist__449235);
} else
{return f.cljs$lang$applyTo(arglist__449235);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__449235));
}
});
var apply__6 = (function() { 
var G__449241__delegate = function (f,a,b,c,d,args){
var arglist__449238 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__449239 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__449240 = cljs.core.bounded_count.call(null,arglist__449238,(fixed_arity__449239 + 1));
if((bc__449240 <= fixed_arity__449239))
{return cljs.core.apply_to.call(null,f,bc__449240,arglist__449238);
} else
{return f.cljs$lang$applyTo(arglist__449238);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__449238));
}
};
var G__449241 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__449241__delegate.call(this, f, a, b, c, d, args);
};
G__449241.cljs$lang$maxFixedArity = 5;
G__449241.cljs$lang$applyTo = (function (arglist__449242){
var f = cljs.core.first(arglist__449242);
var a = cljs.core.first(cljs.core.next(arglist__449242));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449242)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__449242))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__449242)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__449242)))));
return G__449241__delegate(f, a, b, c, d, args);
});
G__449241.cljs$lang$arity$variadic = G__449241__delegate;
return G__449241;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__449243){
var obj = cljs.core.first(arglist__449243);
var f = cljs.core.first(cljs.core.next(arglist__449243));
var args = cljs.core.rest(cljs.core.next(arglist__449243));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__449244__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__449244 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__449244__delegate.call(this, x, y, more);
};
G__449244.cljs$lang$maxFixedArity = 2;
G__449244.cljs$lang$applyTo = (function (arglist__449245){
var x = cljs.core.first(arglist__449245);
var y = cljs.core.first(cljs.core.next(arglist__449245));
var more = cljs.core.rest(cljs.core.next(arglist__449245));
return G__449244__delegate(x, y, more);
});
G__449244.cljs$lang$arity$variadic = G__449244__delegate;
return G__449244;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__449246 = pred;
var G__449247 = cljs.core.next.call(null,coll);
pred = G__449246;
coll = G__449247;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3824__auto____449249 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____449249))
{return or__3824__auto____449249;
} else
{{
var G__449250 = pred;
var G__449251 = cljs.core.next.call(null,coll);
pred = G__449250;
coll = G__449251;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__449252 = null;
var G__449252__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__449252__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__449252__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__449252__3 = (function() { 
var G__449253__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__449253 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__449253__delegate.call(this, x, y, zs);
};
G__449253.cljs$lang$maxFixedArity = 2;
G__449253.cljs$lang$applyTo = (function (arglist__449254){
var x = cljs.core.first(arglist__449254);
var y = cljs.core.first(cljs.core.next(arglist__449254));
var zs = cljs.core.rest(cljs.core.next(arglist__449254));
return G__449253__delegate(x, y, zs);
});
G__449253.cljs$lang$arity$variadic = G__449253__delegate;
return G__449253;
})()
;
G__449252 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__449252__0.call(this);
case 1:
return G__449252__1.call(this,x);
case 2:
return G__449252__2.call(this,x,y);
default:
return G__449252__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__449252.cljs$lang$maxFixedArity = 2;
G__449252.cljs$lang$applyTo = G__449252__3.cljs$lang$applyTo;
return G__449252;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__449255__delegate = function (args){
return x;
};
var G__449255 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__449255__delegate.call(this, args);
};
G__449255.cljs$lang$maxFixedArity = 0;
G__449255.cljs$lang$applyTo = (function (arglist__449256){
var args = cljs.core.seq(arglist__449256);;
return G__449255__delegate(args);
});
G__449255.cljs$lang$arity$variadic = G__449255__delegate;
return G__449255;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__449263 = null;
var G__449263__0 = (function (){
return f.call(null,g.call(null));
});
var G__449263__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__449263__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__449263__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__449263__4 = (function() { 
var G__449264__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__449264 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449264__delegate.call(this, x, y, z, args);
};
G__449264.cljs$lang$maxFixedArity = 3;
G__449264.cljs$lang$applyTo = (function (arglist__449265){
var x = cljs.core.first(arglist__449265);
var y = cljs.core.first(cljs.core.next(arglist__449265));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449265)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449265)));
return G__449264__delegate(x, y, z, args);
});
G__449264.cljs$lang$arity$variadic = G__449264__delegate;
return G__449264;
})()
;
G__449263 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__449263__0.call(this);
case 1:
return G__449263__1.call(this,x);
case 2:
return G__449263__2.call(this,x,y);
case 3:
return G__449263__3.call(this,x,y,z);
default:
return G__449263__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__449263.cljs$lang$maxFixedArity = 3;
G__449263.cljs$lang$applyTo = G__449263__4.cljs$lang$applyTo;
return G__449263;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__449266 = null;
var G__449266__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__449266__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__449266__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__449266__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__449266__4 = (function() { 
var G__449267__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__449267 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449267__delegate.call(this, x, y, z, args);
};
G__449267.cljs$lang$maxFixedArity = 3;
G__449267.cljs$lang$applyTo = (function (arglist__449268){
var x = cljs.core.first(arglist__449268);
var y = cljs.core.first(cljs.core.next(arglist__449268));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449268)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449268)));
return G__449267__delegate(x, y, z, args);
});
G__449267.cljs$lang$arity$variadic = G__449267__delegate;
return G__449267;
})()
;
G__449266 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__449266__0.call(this);
case 1:
return G__449266__1.call(this,x);
case 2:
return G__449266__2.call(this,x,y);
case 3:
return G__449266__3.call(this,x,y,z);
default:
return G__449266__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__449266.cljs$lang$maxFixedArity = 3;
G__449266.cljs$lang$applyTo = G__449266__4.cljs$lang$applyTo;
return G__449266;
})()
});
var comp__4 = (function() { 
var G__449269__delegate = function (f1,f2,f3,fs){
var fs__449260 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__449270__delegate = function (args){
var ret__449261 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__449260),args);
var fs__449262 = cljs.core.next.call(null,fs__449260);
while(true){
if(fs__449262)
{{
var G__449271 = cljs.core.first.call(null,fs__449262).call(null,ret__449261);
var G__449272 = cljs.core.next.call(null,fs__449262);
ret__449261 = G__449271;
fs__449262 = G__449272;
continue;
}
} else
{return ret__449261;
}
break;
}
};
var G__449270 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__449270__delegate.call(this, args);
};
G__449270.cljs$lang$maxFixedArity = 0;
G__449270.cljs$lang$applyTo = (function (arglist__449273){
var args = cljs.core.seq(arglist__449273);;
return G__449270__delegate(args);
});
G__449270.cljs$lang$arity$variadic = G__449270__delegate;
return G__449270;
})()
;
};
var G__449269 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449269__delegate.call(this, f1, f2, f3, fs);
};
G__449269.cljs$lang$maxFixedArity = 3;
G__449269.cljs$lang$applyTo = (function (arglist__449274){
var f1 = cljs.core.first(arglist__449274);
var f2 = cljs.core.first(cljs.core.next(arglist__449274));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449274)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449274)));
return G__449269__delegate(f1, f2, f3, fs);
});
G__449269.cljs$lang$arity$variadic = G__449269__delegate;
return G__449269;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__449275__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__449275 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__449275__delegate.call(this, args);
};
G__449275.cljs$lang$maxFixedArity = 0;
G__449275.cljs$lang$applyTo = (function (arglist__449276){
var args = cljs.core.seq(arglist__449276);;
return G__449275__delegate(args);
});
G__449275.cljs$lang$arity$variadic = G__449275__delegate;
return G__449275;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__449277__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__449277 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__449277__delegate.call(this, args);
};
G__449277.cljs$lang$maxFixedArity = 0;
G__449277.cljs$lang$applyTo = (function (arglist__449278){
var args = cljs.core.seq(arglist__449278);;
return G__449277__delegate(args);
});
G__449277.cljs$lang$arity$variadic = G__449277__delegate;
return G__449277;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__449279__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__449279 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__449279__delegate.call(this, args);
};
G__449279.cljs$lang$maxFixedArity = 0;
G__449279.cljs$lang$applyTo = (function (arglist__449280){
var args = cljs.core.seq(arglist__449280);;
return G__449279__delegate(args);
});
G__449279.cljs$lang$arity$variadic = G__449279__delegate;
return G__449279;
})()
;
});
var partial__5 = (function() { 
var G__449281__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__449282__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__449282 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__449282__delegate.call(this, args);
};
G__449282.cljs$lang$maxFixedArity = 0;
G__449282.cljs$lang$applyTo = (function (arglist__449283){
var args = cljs.core.seq(arglist__449283);;
return G__449282__delegate(args);
});
G__449282.cljs$lang$arity$variadic = G__449282__delegate;
return G__449282;
})()
;
};
var G__449281 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__449281__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__449281.cljs$lang$maxFixedArity = 4;
G__449281.cljs$lang$applyTo = (function (arglist__449284){
var f = cljs.core.first(arglist__449284);
var arg1 = cljs.core.first(cljs.core.next(arglist__449284));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449284)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__449284))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__449284))));
return G__449281__delegate(f, arg1, arg2, arg3, more);
});
G__449281.cljs$lang$arity$variadic = G__449281__delegate;
return G__449281;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__449285 = null;
var G__449285__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__449285__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__449285__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__449285__4 = (function() { 
var G__449286__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__449286 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449286__delegate.call(this, a, b, c, ds);
};
G__449286.cljs$lang$maxFixedArity = 3;
G__449286.cljs$lang$applyTo = (function (arglist__449287){
var a = cljs.core.first(arglist__449287);
var b = cljs.core.first(cljs.core.next(arglist__449287));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449287)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449287)));
return G__449286__delegate(a, b, c, ds);
});
G__449286.cljs$lang$arity$variadic = G__449286__delegate;
return G__449286;
})()
;
G__449285 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__449285__1.call(this,a);
case 2:
return G__449285__2.call(this,a,b);
case 3:
return G__449285__3.call(this,a,b,c);
default:
return G__449285__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__449285.cljs$lang$maxFixedArity = 3;
G__449285.cljs$lang$applyTo = G__449285__4.cljs$lang$applyTo;
return G__449285;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__449288 = null;
var G__449288__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__449288__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__449288__4 = (function() { 
var G__449289__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__449289 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449289__delegate.call(this, a, b, c, ds);
};
G__449289.cljs$lang$maxFixedArity = 3;
G__449289.cljs$lang$applyTo = (function (arglist__449290){
var a = cljs.core.first(arglist__449290);
var b = cljs.core.first(cljs.core.next(arglist__449290));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449290)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449290)));
return G__449289__delegate(a, b, c, ds);
});
G__449289.cljs$lang$arity$variadic = G__449289__delegate;
return G__449289;
})()
;
G__449288 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__449288__2.call(this,a,b);
case 3:
return G__449288__3.call(this,a,b,c);
default:
return G__449288__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__449288.cljs$lang$maxFixedArity = 3;
G__449288.cljs$lang$applyTo = G__449288__4.cljs$lang$applyTo;
return G__449288;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__449291 = null;
var G__449291__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__449291__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__449291__4 = (function() { 
var G__449292__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__449292 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449292__delegate.call(this, a, b, c, ds);
};
G__449292.cljs$lang$maxFixedArity = 3;
G__449292.cljs$lang$applyTo = (function (arglist__449293){
var a = cljs.core.first(arglist__449293);
var b = cljs.core.first(cljs.core.next(arglist__449293));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449293)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449293)));
return G__449292__delegate(a, b, c, ds);
});
G__449292.cljs$lang$arity$variadic = G__449292__delegate;
return G__449292;
})()
;
G__449291 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__449291__2.call(this,a,b);
case 3:
return G__449291__3.call(this,a,b,c);
default:
return G__449291__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__449291.cljs$lang$maxFixedArity = 3;
G__449291.cljs$lang$applyTo = G__449291__4.cljs$lang$applyTo;
return G__449291;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__449309 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____449317 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____449317)
{var s__449318 = temp__3974__auto____449317;
if(cljs.core.chunked_seq_QMARK_.call(null,s__449318))
{var c__449319 = cljs.core.chunk_first.call(null,s__449318);
var size__449320 = cljs.core.count.call(null,c__449319);
var b__449321 = cljs.core.chunk_buffer.call(null,size__449320);
var n__2549__auto____449322 = size__449320;
var i__449323 = 0;
while(true){
if((i__449323 < n__2549__auto____449322))
{cljs.core.chunk_append.call(null,b__449321,f.call(null,(idx + i__449323),cljs.core._nth.call(null,c__449319,i__449323)));
{
var G__449324 = (i__449323 + 1);
i__449323 = G__449324;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__449321),mapi.call(null,(idx + size__449320),cljs.core.chunk_rest.call(null,s__449318)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__449318)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__449318)));
}
} else
{return null;
}
}),null));
});
return mapi__449309.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____449334 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____449334)
{var s__449335 = temp__3974__auto____449334;
if(cljs.core.chunked_seq_QMARK_.call(null,s__449335))
{var c__449336 = cljs.core.chunk_first.call(null,s__449335);
var size__449337 = cljs.core.count.call(null,c__449336);
var b__449338 = cljs.core.chunk_buffer.call(null,size__449337);
var n__2549__auto____449339 = size__449337;
var i__449340 = 0;
while(true){
if((i__449340 < n__2549__auto____449339))
{var x__449341 = f.call(null,cljs.core._nth.call(null,c__449336,i__449340));
if((x__449341 == null))
{} else
{cljs.core.chunk_append.call(null,b__449338,x__449341);
}
{
var G__449343 = (i__449340 + 1);
i__449340 = G__449343;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__449338),keep.call(null,f,cljs.core.chunk_rest.call(null,s__449335)));
} else
{var x__449342 = f.call(null,cljs.core.first.call(null,s__449335));
if((x__449342 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__449335));
} else
{return cljs.core.cons.call(null,x__449342,keep.call(null,f,cljs.core.rest.call(null,s__449335)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__449369 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____449379 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____449379)
{var s__449380 = temp__3974__auto____449379;
if(cljs.core.chunked_seq_QMARK_.call(null,s__449380))
{var c__449381 = cljs.core.chunk_first.call(null,s__449380);
var size__449382 = cljs.core.count.call(null,c__449381);
var b__449383 = cljs.core.chunk_buffer.call(null,size__449382);
var n__2549__auto____449384 = size__449382;
var i__449385 = 0;
while(true){
if((i__449385 < n__2549__auto____449384))
{var x__449386 = f.call(null,(idx + i__449385),cljs.core._nth.call(null,c__449381,i__449385));
if((x__449386 == null))
{} else
{cljs.core.chunk_append.call(null,b__449383,x__449386);
}
{
var G__449388 = (i__449385 + 1);
i__449385 = G__449388;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__449383),keepi.call(null,(idx + size__449382),cljs.core.chunk_rest.call(null,s__449380)));
} else
{var x__449387 = f.call(null,idx,cljs.core.first.call(null,s__449380));
if((x__449387 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__449380));
} else
{return cljs.core.cons.call(null,x__449387,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__449380)));
}
}
} else
{return null;
}
}),null));
});
return keepi__449369.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____449474 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____449474))
{return p.call(null,y);
} else
{return and__3822__auto____449474;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____449475 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____449475))
{var and__3822__auto____449476 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____449476))
{return p.call(null,z);
} else
{return and__3822__auto____449476;
}
} else
{return and__3822__auto____449475;
}
})());
});
var ep1__4 = (function() { 
var G__449545__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____449477 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____449477))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____449477;
}
})());
};
var G__449545 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449545__delegate.call(this, x, y, z, args);
};
G__449545.cljs$lang$maxFixedArity = 3;
G__449545.cljs$lang$applyTo = (function (arglist__449546){
var x = cljs.core.first(arglist__449546);
var y = cljs.core.first(cljs.core.next(arglist__449546));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449546)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449546)));
return G__449545__delegate(x, y, z, args);
});
G__449545.cljs$lang$arity$variadic = G__449545__delegate;
return G__449545;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____449489 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____449489))
{return p2.call(null,x);
} else
{return and__3822__auto____449489;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____449490 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____449490))
{var and__3822__auto____449491 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____449491))
{var and__3822__auto____449492 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____449492))
{return p2.call(null,y);
} else
{return and__3822__auto____449492;
}
} else
{return and__3822__auto____449491;
}
} else
{return and__3822__auto____449490;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____449493 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____449493))
{var and__3822__auto____449494 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____449494))
{var and__3822__auto____449495 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____449495))
{var and__3822__auto____449496 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____449496))
{var and__3822__auto____449497 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____449497))
{return p2.call(null,z);
} else
{return and__3822__auto____449497;
}
} else
{return and__3822__auto____449496;
}
} else
{return and__3822__auto____449495;
}
} else
{return and__3822__auto____449494;
}
} else
{return and__3822__auto____449493;
}
})());
});
var ep2__4 = (function() { 
var G__449547__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____449498 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____449498))
{return cljs.core.every_QMARK_.call(null,(function (p1__449344_SHARP_){
var and__3822__auto____449499 = p1.call(null,p1__449344_SHARP_);
if(cljs.core.truth_(and__3822__auto____449499))
{return p2.call(null,p1__449344_SHARP_);
} else
{return and__3822__auto____449499;
}
}),args);
} else
{return and__3822__auto____449498;
}
})());
};
var G__449547 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449547__delegate.call(this, x, y, z, args);
};
G__449547.cljs$lang$maxFixedArity = 3;
G__449547.cljs$lang$applyTo = (function (arglist__449548){
var x = cljs.core.first(arglist__449548);
var y = cljs.core.first(cljs.core.next(arglist__449548));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449548)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449548)));
return G__449547__delegate(x, y, z, args);
});
G__449547.cljs$lang$arity$variadic = G__449547__delegate;
return G__449547;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____449518 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____449518))
{var and__3822__auto____449519 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____449519))
{return p3.call(null,x);
} else
{return and__3822__auto____449519;
}
} else
{return and__3822__auto____449518;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____449520 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____449520))
{var and__3822__auto____449521 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____449521))
{var and__3822__auto____449522 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____449522))
{var and__3822__auto____449523 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____449523))
{var and__3822__auto____449524 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____449524))
{return p3.call(null,y);
} else
{return and__3822__auto____449524;
}
} else
{return and__3822__auto____449523;
}
} else
{return and__3822__auto____449522;
}
} else
{return and__3822__auto____449521;
}
} else
{return and__3822__auto____449520;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____449525 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____449525))
{var and__3822__auto____449526 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____449526))
{var and__3822__auto____449527 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____449527))
{var and__3822__auto____449528 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____449528))
{var and__3822__auto____449529 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____449529))
{var and__3822__auto____449530 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____449530))
{var and__3822__auto____449531 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____449531))
{var and__3822__auto____449532 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____449532))
{return p3.call(null,z);
} else
{return and__3822__auto____449532;
}
} else
{return and__3822__auto____449531;
}
} else
{return and__3822__auto____449530;
}
} else
{return and__3822__auto____449529;
}
} else
{return and__3822__auto____449528;
}
} else
{return and__3822__auto____449527;
}
} else
{return and__3822__auto____449526;
}
} else
{return and__3822__auto____449525;
}
})());
});
var ep3__4 = (function() { 
var G__449549__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____449533 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____449533))
{return cljs.core.every_QMARK_.call(null,(function (p1__449345_SHARP_){
var and__3822__auto____449534 = p1.call(null,p1__449345_SHARP_);
if(cljs.core.truth_(and__3822__auto____449534))
{var and__3822__auto____449535 = p2.call(null,p1__449345_SHARP_);
if(cljs.core.truth_(and__3822__auto____449535))
{return p3.call(null,p1__449345_SHARP_);
} else
{return and__3822__auto____449535;
}
} else
{return and__3822__auto____449534;
}
}),args);
} else
{return and__3822__auto____449533;
}
})());
};
var G__449549 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449549__delegate.call(this, x, y, z, args);
};
G__449549.cljs$lang$maxFixedArity = 3;
G__449549.cljs$lang$applyTo = (function (arglist__449550){
var x = cljs.core.first(arglist__449550);
var y = cljs.core.first(cljs.core.next(arglist__449550));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449550)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449550)));
return G__449549__delegate(x, y, z, args);
});
G__449549.cljs$lang$arity$variadic = G__449549__delegate;
return G__449549;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__449551__delegate = function (p1,p2,p3,ps){
var ps__449536 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__449346_SHARP_){
return p1__449346_SHARP_.call(null,x);
}),ps__449536);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__449347_SHARP_){
var and__3822__auto____449541 = p1__449347_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____449541))
{return p1__449347_SHARP_.call(null,y);
} else
{return and__3822__auto____449541;
}
}),ps__449536);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__449348_SHARP_){
var and__3822__auto____449542 = p1__449348_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____449542))
{var and__3822__auto____449543 = p1__449348_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____449543))
{return p1__449348_SHARP_.call(null,z);
} else
{return and__3822__auto____449543;
}
} else
{return and__3822__auto____449542;
}
}),ps__449536);
});
var epn__4 = (function() { 
var G__449552__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____449544 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____449544))
{return cljs.core.every_QMARK_.call(null,(function (p1__449349_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__449349_SHARP_,args);
}),ps__449536);
} else
{return and__3822__auto____449544;
}
})());
};
var G__449552 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449552__delegate.call(this, x, y, z, args);
};
G__449552.cljs$lang$maxFixedArity = 3;
G__449552.cljs$lang$applyTo = (function (arglist__449553){
var x = cljs.core.first(arglist__449553);
var y = cljs.core.first(cljs.core.next(arglist__449553));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449553)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449553)));
return G__449552__delegate(x, y, z, args);
});
G__449552.cljs$lang$arity$variadic = G__449552__delegate;
return G__449552;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__449551 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449551__delegate.call(this, p1, p2, p3, ps);
};
G__449551.cljs$lang$maxFixedArity = 3;
G__449551.cljs$lang$applyTo = (function (arglist__449554){
var p1 = cljs.core.first(arglist__449554);
var p2 = cljs.core.first(cljs.core.next(arglist__449554));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449554)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449554)));
return G__449551__delegate(p1, p2, p3, ps);
});
G__449551.cljs$lang$arity$variadic = G__449551__delegate;
return G__449551;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3824__auto____449635 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____449635))
{return or__3824__auto____449635;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____449636 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____449636))
{return or__3824__auto____449636;
} else
{var or__3824__auto____449637 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____449637))
{return or__3824__auto____449637;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__449706__delegate = function (x,y,z,args){
var or__3824__auto____449638 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____449638))
{return or__3824__auto____449638;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__449706 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449706__delegate.call(this, x, y, z, args);
};
G__449706.cljs$lang$maxFixedArity = 3;
G__449706.cljs$lang$applyTo = (function (arglist__449707){
var x = cljs.core.first(arglist__449707);
var y = cljs.core.first(cljs.core.next(arglist__449707));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449707)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449707)));
return G__449706__delegate(x, y, z, args);
});
G__449706.cljs$lang$arity$variadic = G__449706__delegate;
return G__449706;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____449650 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____449650))
{return or__3824__auto____449650;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____449651 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____449651))
{return or__3824__auto____449651;
} else
{var or__3824__auto____449652 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____449652))
{return or__3824__auto____449652;
} else
{var or__3824__auto____449653 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____449653))
{return or__3824__auto____449653;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____449654 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____449654))
{return or__3824__auto____449654;
} else
{var or__3824__auto____449655 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____449655))
{return or__3824__auto____449655;
} else
{var or__3824__auto____449656 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____449656))
{return or__3824__auto____449656;
} else
{var or__3824__auto____449657 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____449657))
{return or__3824__auto____449657;
} else
{var or__3824__auto____449658 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____449658))
{return or__3824__auto____449658;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__449708__delegate = function (x,y,z,args){
var or__3824__auto____449659 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____449659))
{return or__3824__auto____449659;
} else
{return cljs.core.some.call(null,(function (p1__449389_SHARP_){
var or__3824__auto____449660 = p1.call(null,p1__449389_SHARP_);
if(cljs.core.truth_(or__3824__auto____449660))
{return or__3824__auto____449660;
} else
{return p2.call(null,p1__449389_SHARP_);
}
}),args);
}
};
var G__449708 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449708__delegate.call(this, x, y, z, args);
};
G__449708.cljs$lang$maxFixedArity = 3;
G__449708.cljs$lang$applyTo = (function (arglist__449709){
var x = cljs.core.first(arglist__449709);
var y = cljs.core.first(cljs.core.next(arglist__449709));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449709)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449709)));
return G__449708__delegate(x, y, z, args);
});
G__449708.cljs$lang$arity$variadic = G__449708__delegate;
return G__449708;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____449679 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____449679))
{return or__3824__auto____449679;
} else
{var or__3824__auto____449680 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____449680))
{return or__3824__auto____449680;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____449681 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____449681))
{return or__3824__auto____449681;
} else
{var or__3824__auto____449682 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____449682))
{return or__3824__auto____449682;
} else
{var or__3824__auto____449683 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____449683))
{return or__3824__auto____449683;
} else
{var or__3824__auto____449684 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____449684))
{return or__3824__auto____449684;
} else
{var or__3824__auto____449685 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____449685))
{return or__3824__auto____449685;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____449686 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____449686))
{return or__3824__auto____449686;
} else
{var or__3824__auto____449687 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____449687))
{return or__3824__auto____449687;
} else
{var or__3824__auto____449688 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____449688))
{return or__3824__auto____449688;
} else
{var or__3824__auto____449689 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____449689))
{return or__3824__auto____449689;
} else
{var or__3824__auto____449690 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____449690))
{return or__3824__auto____449690;
} else
{var or__3824__auto____449691 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____449691))
{return or__3824__auto____449691;
} else
{var or__3824__auto____449692 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____449692))
{return or__3824__auto____449692;
} else
{var or__3824__auto____449693 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____449693))
{return or__3824__auto____449693;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__449710__delegate = function (x,y,z,args){
var or__3824__auto____449694 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____449694))
{return or__3824__auto____449694;
} else
{return cljs.core.some.call(null,(function (p1__449390_SHARP_){
var or__3824__auto____449695 = p1.call(null,p1__449390_SHARP_);
if(cljs.core.truth_(or__3824__auto____449695))
{return or__3824__auto____449695;
} else
{var or__3824__auto____449696 = p2.call(null,p1__449390_SHARP_);
if(cljs.core.truth_(or__3824__auto____449696))
{return or__3824__auto____449696;
} else
{return p3.call(null,p1__449390_SHARP_);
}
}
}),args);
}
};
var G__449710 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449710__delegate.call(this, x, y, z, args);
};
G__449710.cljs$lang$maxFixedArity = 3;
G__449710.cljs$lang$applyTo = (function (arglist__449711){
var x = cljs.core.first(arglist__449711);
var y = cljs.core.first(cljs.core.next(arglist__449711));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449711)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449711)));
return G__449710__delegate(x, y, z, args);
});
G__449710.cljs$lang$arity$variadic = G__449710__delegate;
return G__449710;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__449712__delegate = function (p1,p2,p3,ps){
var ps__449697 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__449391_SHARP_){
return p1__449391_SHARP_.call(null,x);
}),ps__449697);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__449392_SHARP_){
var or__3824__auto____449702 = p1__449392_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____449702))
{return or__3824__auto____449702;
} else
{return p1__449392_SHARP_.call(null,y);
}
}),ps__449697);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__449393_SHARP_){
var or__3824__auto____449703 = p1__449393_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____449703))
{return or__3824__auto____449703;
} else
{var or__3824__auto____449704 = p1__449393_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____449704))
{return or__3824__auto____449704;
} else
{return p1__449393_SHARP_.call(null,z);
}
}
}),ps__449697);
});
var spn__4 = (function() { 
var G__449713__delegate = function (x,y,z,args){
var or__3824__auto____449705 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____449705))
{return or__3824__auto____449705;
} else
{return cljs.core.some.call(null,(function (p1__449394_SHARP_){
return cljs.core.some.call(null,p1__449394_SHARP_,args);
}),ps__449697);
}
};
var G__449713 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449713__delegate.call(this, x, y, z, args);
};
G__449713.cljs$lang$maxFixedArity = 3;
G__449713.cljs$lang$applyTo = (function (arglist__449714){
var x = cljs.core.first(arglist__449714);
var y = cljs.core.first(cljs.core.next(arglist__449714));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449714)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449714)));
return G__449713__delegate(x, y, z, args);
});
G__449713.cljs$lang$arity$variadic = G__449713__delegate;
return G__449713;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__449712 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__449712__delegate.call(this, p1, p2, p3, ps);
};
G__449712.cljs$lang$maxFixedArity = 3;
G__449712.cljs$lang$applyTo = (function (arglist__449715){
var p1 = cljs.core.first(arglist__449715);
var p2 = cljs.core.first(cljs.core.next(arglist__449715));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449715)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449715)));
return G__449712__delegate(p1, p2, p3, ps);
});
G__449712.cljs$lang$arity$variadic = G__449712__delegate;
return G__449712;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____449734 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____449734)
{var s__449735 = temp__3974__auto____449734;
if(cljs.core.chunked_seq_QMARK_.call(null,s__449735))
{var c__449736 = cljs.core.chunk_first.call(null,s__449735);
var size__449737 = cljs.core.count.call(null,c__449736);
var b__449738 = cljs.core.chunk_buffer.call(null,size__449737);
var n__2549__auto____449739 = size__449737;
var i__449740 = 0;
while(true){
if((i__449740 < n__2549__auto____449739))
{cljs.core.chunk_append.call(null,b__449738,f.call(null,cljs.core._nth.call(null,c__449736,i__449740)));
{
var G__449752 = (i__449740 + 1);
i__449740 = G__449752;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__449738),map.call(null,f,cljs.core.chunk_rest.call(null,s__449735)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__449735)),map.call(null,f,cljs.core.rest.call(null,s__449735)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__449741 = cljs.core.seq.call(null,c1);
var s2__449742 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____449743 = s1__449741;
if(and__3822__auto____449743)
{return s2__449742;
} else
{return and__3822__auto____449743;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__449741),cljs.core.first.call(null,s2__449742)),map.call(null,f,cljs.core.rest.call(null,s1__449741),cljs.core.rest.call(null,s2__449742)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__449744 = cljs.core.seq.call(null,c1);
var s2__449745 = cljs.core.seq.call(null,c2);
var s3__449746 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____449747 = s1__449744;
if(and__3822__auto____449747)
{var and__3822__auto____449748 = s2__449745;
if(and__3822__auto____449748)
{return s3__449746;
} else
{return and__3822__auto____449748;
}
} else
{return and__3822__auto____449747;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__449744),cljs.core.first.call(null,s2__449745),cljs.core.first.call(null,s3__449746)),map.call(null,f,cljs.core.rest.call(null,s1__449744),cljs.core.rest.call(null,s2__449745),cljs.core.rest.call(null,s3__449746)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__449753__delegate = function (f,c1,c2,c3,colls){
var step__449751 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__449750 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__449750))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__449750),step.call(null,map.call(null,cljs.core.rest,ss__449750)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__449555_SHARP_){
return cljs.core.apply.call(null,f,p1__449555_SHARP_);
}),step__449751.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__449753 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__449753__delegate.call(this, f, c1, c2, c3, colls);
};
G__449753.cljs$lang$maxFixedArity = 4;
G__449753.cljs$lang$applyTo = (function (arglist__449754){
var f = cljs.core.first(arglist__449754);
var c1 = cljs.core.first(cljs.core.next(arglist__449754));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449754)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__449754))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__449754))));
return G__449753__delegate(f, c1, c2, c3, colls);
});
G__449753.cljs$lang$arity$variadic = G__449753__delegate;
return G__449753;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____449757 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____449757)
{var s__449758 = temp__3974__auto____449757;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__449758),take.call(null,(n - 1),cljs.core.rest.call(null,s__449758)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__449764 = (function (n,coll){
while(true){
var s__449762 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____449763 = (n > 0);
if(and__3822__auto____449763)
{return s__449762;
} else
{return and__3822__auto____449763;
}
})()))
{{
var G__449765 = (n - 1);
var G__449766 = cljs.core.rest.call(null,s__449762);
n = G__449765;
coll = G__449766;
continue;
}
} else
{return s__449762;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__449764.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__449769 = cljs.core.seq.call(null,coll);
var lead__449770 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__449770)
{{
var G__449771 = cljs.core.next.call(null,s__449769);
var G__449772 = cljs.core.next.call(null,lead__449770);
s__449769 = G__449771;
lead__449770 = G__449772;
continue;
}
} else
{return s__449769;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__449778 = (function (pred,coll){
while(true){
var s__449776 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____449777 = s__449776;
if(and__3822__auto____449777)
{return pred.call(null,cljs.core.first.call(null,s__449776));
} else
{return and__3822__auto____449777;
}
})()))
{{
var G__449779 = pred;
var G__449780 = cljs.core.rest.call(null,s__449776);
pred = G__449779;
coll = G__449780;
continue;
}
} else
{return s__449776;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__449778.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____449783 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____449783)
{var s__449784 = temp__3974__auto____449783;
return cljs.core.concat.call(null,s__449784,cycle.call(null,s__449784));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__449789 = cljs.core.seq.call(null,c1);
var s2__449790 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____449791 = s1__449789;
if(and__3822__auto____449791)
{return s2__449790;
} else
{return and__3822__auto____449791;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__449789),cljs.core.cons.call(null,cljs.core.first.call(null,s2__449790),interleave.call(null,cljs.core.rest.call(null,s1__449789),cljs.core.rest.call(null,s2__449790))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__449793__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__449792 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__449792))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__449792),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__449792)));
} else
{return null;
}
}),null));
};
var G__449793 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__449793__delegate.call(this, c1, c2, colls);
};
G__449793.cljs$lang$maxFixedArity = 2;
G__449793.cljs$lang$applyTo = (function (arglist__449794){
var c1 = cljs.core.first(arglist__449794);
var c2 = cljs.core.first(cljs.core.next(arglist__449794));
var colls = cljs.core.rest(cljs.core.next(arglist__449794));
return G__449793__delegate(c1, c2, colls);
});
G__449793.cljs$lang$arity$variadic = G__449793__delegate;
return G__449793;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__449804 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____449802 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____449802)
{var coll__449803 = temp__3971__auto____449802;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__449803),cat.call(null,cljs.core.rest.call(null,coll__449803),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__449804.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__449805__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__449805 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__449805__delegate.call(this, f, coll, colls);
};
G__449805.cljs$lang$maxFixedArity = 2;
G__449805.cljs$lang$applyTo = (function (arglist__449806){
var f = cljs.core.first(arglist__449806);
var coll = cljs.core.first(cljs.core.next(arglist__449806));
var colls = cljs.core.rest(cljs.core.next(arglist__449806));
return G__449805__delegate(f, coll, colls);
});
G__449805.cljs$lang$arity$variadic = G__449805__delegate;
return G__449805;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____449816 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____449816)
{var s__449817 = temp__3974__auto____449816;
if(cljs.core.chunked_seq_QMARK_.call(null,s__449817))
{var c__449818 = cljs.core.chunk_first.call(null,s__449817);
var size__449819 = cljs.core.count.call(null,c__449818);
var b__449820 = cljs.core.chunk_buffer.call(null,size__449819);
var n__2549__auto____449821 = size__449819;
var i__449822 = 0;
while(true){
if((i__449822 < n__2549__auto____449821))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__449818,i__449822))))
{cljs.core.chunk_append.call(null,b__449820,cljs.core._nth.call(null,c__449818,i__449822));
} else
{}
{
var G__449825 = (i__449822 + 1);
i__449822 = G__449825;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__449820),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__449817)));
} else
{var f__449823 = cljs.core.first.call(null,s__449817);
var r__449824 = cljs.core.rest.call(null,s__449817);
if(cljs.core.truth_(pred.call(null,f__449823)))
{return cljs.core.cons.call(null,f__449823,filter.call(null,pred,r__449824));
} else
{return filter.call(null,pred,r__449824);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__449828 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__449828.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__449826_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__449826_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__449832__449833 = to;
if(G__449832__449833)
{if((function (){var or__3824__auto____449834 = (G__449832__449833.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____449834)
{return or__3824__auto____449834;
} else
{return G__449832__449833.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__449832__449833.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__449832__449833);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__449832__449833);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__449835__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__449835 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__449835__delegate.call(this, f, c1, c2, c3, colls);
};
G__449835.cljs$lang$maxFixedArity = 4;
G__449835.cljs$lang$applyTo = (function (arglist__449836){
var f = cljs.core.first(arglist__449836);
var c1 = cljs.core.first(cljs.core.next(arglist__449836));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449836)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__449836))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__449836))));
return G__449835__delegate(f, c1, c2, c3, colls);
});
G__449835.cljs$lang$arity$variadic = G__449835__delegate;
return G__449835;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____449843 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____449843)
{var s__449844 = temp__3974__auto____449843;
var p__449845 = cljs.core.take.call(null,n,s__449844);
if((n === cljs.core.count.call(null,p__449845)))
{return cljs.core.cons.call(null,p__449845,partition.call(null,n,step,cljs.core.drop.call(null,step,s__449844)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____449846 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____449846)
{var s__449847 = temp__3974__auto____449846;
var p__449848 = cljs.core.take.call(null,n,s__449847);
if((n === cljs.core.count.call(null,p__449848)))
{return cljs.core.cons.call(null,p__449848,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__449847)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__449848,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__449853 = cljs.core.lookup_sentinel;
var m__449854 = m;
var ks__449855 = cljs.core.seq.call(null,ks);
while(true){
if(ks__449855)
{var m__449856 = cljs.core._lookup.call(null,m__449854,cljs.core.first.call(null,ks__449855),sentinel__449853);
if((sentinel__449853 === m__449856))
{return not_found;
} else
{{
var G__449857 = sentinel__449853;
var G__449858 = m__449856;
var G__449859 = cljs.core.next.call(null,ks__449855);
sentinel__449853 = G__449857;
m__449854 = G__449858;
ks__449855 = G__449859;
continue;
}
}
} else
{return m__449854;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__449860,v){
var vec__449865__449866 = p__449860;
var k__449867 = cljs.core.nth.call(null,vec__449865__449866,0,null);
var ks__449868 = cljs.core.nthnext.call(null,vec__449865__449866,1);
if(cljs.core.truth_(ks__449868))
{return cljs.core.assoc.call(null,m,k__449867,assoc_in.call(null,cljs.core._lookup.call(null,m,k__449867,null),ks__449868,v));
} else
{return cljs.core.assoc.call(null,m,k__449867,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__449869,f,args){
var vec__449874__449875 = p__449869;
var k__449876 = cljs.core.nth.call(null,vec__449874__449875,0,null);
var ks__449877 = cljs.core.nthnext.call(null,vec__449874__449875,1);
if(cljs.core.truth_(ks__449877))
{return cljs.core.assoc.call(null,m,k__449876,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__449876,null),ks__449877,f,args));
} else
{return cljs.core.assoc.call(null,m,k__449876,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__449876,null),args));
}
};
var update_in = function (m,p__449869,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__449869, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__449878){
var m = cljs.core.first(arglist__449878);
var p__449869 = cljs.core.first(cljs.core.next(arglist__449878));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__449878)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__449878)));
return update_in__delegate(m, p__449869, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

goog.provide('cljs.core.Vector');

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__449881 = this;
var h__2203__auto____449882 = this__449881.__hash;
if(!((h__2203__auto____449882 == null)))
{return h__2203__auto____449882;
} else
{var h__2203__auto____449883 = cljs.core.hash_coll.call(null,coll);
this__449881.__hash = h__2203__auto____449883;
return h__2203__auto____449883;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__449884 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__449885 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__449886 = this;
var new_array__449887 = this__449886.array.slice();
(new_array__449887[k] = v);
return (new cljs.core.Vector(this__449886.meta,new_array__449887,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__449918 = null;
var G__449918__2 = (function (this_sym449888,k){
var this__449890 = this;
var this_sym449888__449891 = this;
var coll__449892 = this_sym449888__449891;
return coll__449892.cljs$core$ILookup$_lookup$arity$2(coll__449892,k);
});
var G__449918__3 = (function (this_sym449889,k,not_found){
var this__449890 = this;
var this_sym449889__449893 = this;
var coll__449894 = this_sym449889__449893;
return coll__449894.cljs$core$ILookup$_lookup$arity$3(coll__449894,k,not_found);
});
G__449918 = function(this_sym449889,k,not_found){
switch(arguments.length){
case 2:
return G__449918__2.call(this,this_sym449889,k);
case 3:
return G__449918__3.call(this,this_sym449889,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__449918;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym449879,args449880){
var this__449895 = this;
return this_sym449879.call.apply(this_sym449879,[this_sym449879].concat(args449880.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__449896 = this;
var new_array__449897 = this__449896.array.slice();
new_array__449897.push(o);
return (new cljs.core.Vector(this__449896.meta,new_array__449897,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__449898 = this;
var this__449899 = this;
return cljs.core.pr_str.call(null,this__449899);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__449900 = this;
return cljs.core.ci_reduce.call(null,this__449900.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__449901 = this;
return cljs.core.ci_reduce.call(null,this__449901.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__449902 = this;
if((this__449902.array.length > 0))
{var vector_seq__449903 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__449902.array.length))
{return cljs.core.cons.call(null,(this__449902.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__449903.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__449904 = this;
return this__449904.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__449905 = this;
var count__449906 = this__449905.array.length;
if((count__449906 > 0))
{return (this__449905.array[(count__449906 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__449907 = this;
if((this__449907.array.length > 0))
{var new_array__449908 = this__449907.array.slice();
new_array__449908.pop();
return (new cljs.core.Vector(this__449907.meta,new_array__449908,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__449909 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__449910 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__449911 = this;
return (new cljs.core.Vector(meta,this__449911.array,this__449911.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__449912 = this;
return this__449912.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__449913 = this;
if((function (){var and__3822__auto____449914 = (0 <= n);
if(and__3822__auto____449914)
{return (n < this__449913.array.length);
} else
{return and__3822__auto____449914;
}
})())
{return (this__449913.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__449915 = this;
if((function (){var and__3822__auto____449916 = (0 <= n);
if(and__3822__auto____449916)
{return (n < this__449915.array.length);
} else
{return and__3822__auto____449916;
}
})())
{return (this__449915.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__449917 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__449917.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

goog.provide('cljs.core.VectorNode');

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2324__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__2324__auto__,writer__2325__auto__){
return cljs.core._write.call(null,writer__2325__auto__,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__449920 = pv.cnt;
if((cnt__449920 < 32))
{return 0;
} else
{return (((cnt__449920 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__449926 = level;
var ret__449927 = node;
while(true){
if((ll__449926 === 0))
{return ret__449927;
} else
{var embed__449928 = ret__449927;
var r__449929 = cljs.core.pv_fresh_node.call(null,edit);
var ___449930 = cljs.core.pv_aset.call(null,r__449929,0,embed__449928);
{
var G__449931 = (ll__449926 - 5);
var G__449932 = r__449929;
ll__449926 = G__449931;
ret__449927 = G__449932;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__449938 = cljs.core.pv_clone_node.call(null,parent);
var subidx__449939 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__449938,subidx__449939,tailnode);
return ret__449938;
} else
{var child__449940 = cljs.core.pv_aget.call(null,parent,subidx__449939);
if(!((child__449940 == null)))
{var node_to_insert__449941 = push_tail.call(null,pv,(level - 5),child__449940,tailnode);
cljs.core.pv_aset.call(null,ret__449938,subidx__449939,node_to_insert__449941);
return ret__449938;
} else
{var node_to_insert__449942 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__449938,subidx__449939,node_to_insert__449942);
return ret__449938;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____449946 = (0 <= i);
if(and__3822__auto____449946)
{return (i < pv.cnt);
} else
{return and__3822__auto____449946;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__449947 = pv.root;
var level__449948 = pv.shift;
while(true){
if((level__449948 > 0))
{{
var G__449949 = cljs.core.pv_aget.call(null,node__449947,((i >>> level__449948) & 31));
var G__449950 = (level__449948 - 5);
node__449947 = G__449949;
level__449948 = G__449950;
continue;
}
} else
{return node__449947.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__449953 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__449953,(i & 31),val);
return ret__449953;
} else
{var subidx__449954 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__449953,subidx__449954,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__449954),i,val));
return ret__449953;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__449960 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__449961 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__449960));
if((function (){var and__3822__auto____449962 = (new_child__449961 == null);
if(and__3822__auto____449962)
{return (subidx__449960 === 0);
} else
{return and__3822__auto____449962;
}
})())
{return null;
} else
{var ret__449963 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__449963,subidx__449960,new_child__449961);
return ret__449963;
}
} else
{if((subidx__449960 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__449964 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__449964,subidx__449960,null);
return ret__449964;
} else
{return null;
}
}
}
});

goog.provide('cljs.core.PersistentVector');

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__449967 = this;
return (new cljs.core.TransientVector(this__449967.cnt,this__449967.shift,cljs.core.tv_editable_root.call(null,this__449967.root),cljs.core.tv_editable_tail.call(null,this__449967.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__449968 = this;
var h__2203__auto____449969 = this__449968.__hash;
if(!((h__2203__auto____449969 == null)))
{return h__2203__auto____449969;
} else
{var h__2203__auto____449970 = cljs.core.hash_coll.call(null,coll);
this__449968.__hash = h__2203__auto____449970;
return h__2203__auto____449970;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__449971 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__449972 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__449973 = this;
if((function (){var and__3822__auto____449974 = (0 <= k);
if(and__3822__auto____449974)
{return (k < this__449973.cnt);
} else
{return and__3822__auto____449974;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__449975 = this__449973.tail.slice();
(new_tail__449975[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__449973.meta,this__449973.cnt,this__449973.shift,this__449973.root,new_tail__449975,null));
} else
{return (new cljs.core.PersistentVector(this__449973.meta,this__449973.cnt,this__449973.shift,cljs.core.do_assoc.call(null,coll,this__449973.shift,this__449973.root,k,v),this__449973.tail,null));
}
} else
{if((k === this__449973.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__449973.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__450023 = null;
var G__450023__2 = (function (this_sym449976,k){
var this__449978 = this;
var this_sym449976__449979 = this;
var coll__449980 = this_sym449976__449979;
return coll__449980.cljs$core$ILookup$_lookup$arity$2(coll__449980,k);
});
var G__450023__3 = (function (this_sym449977,k,not_found){
var this__449978 = this;
var this_sym449977__449981 = this;
var coll__449982 = this_sym449977__449981;
return coll__449982.cljs$core$ILookup$_lookup$arity$3(coll__449982,k,not_found);
});
G__450023 = function(this_sym449977,k,not_found){
switch(arguments.length){
case 2:
return G__450023__2.call(this,this_sym449977,k);
case 3:
return G__450023__3.call(this,this_sym449977,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__450023;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym449965,args449966){
var this__449983 = this;
return this_sym449965.call.apply(this_sym449965,[this_sym449965].concat(args449966.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__449984 = this;
var step_init__449985 = [0,init];
var i__449986 = 0;
while(true){
if((i__449986 < this__449984.cnt))
{var arr__449987 = cljs.core.array_for.call(null,v,i__449986);
var len__449988 = arr__449987.length;
var init__449992 = (function (){var j__449989 = 0;
var init__449990 = (step_init__449985[1]);
while(true){
if((j__449989 < len__449988))
{var init__449991 = f.call(null,init__449990,(j__449989 + i__449986),(arr__449987[j__449989]));
if(cljs.core.reduced_QMARK_.call(null,init__449991))
{return init__449991;
} else
{{
var G__450024 = (j__449989 + 1);
var G__450025 = init__449991;
j__449989 = G__450024;
init__449990 = G__450025;
continue;
}
}
} else
{(step_init__449985[0] = len__449988);
(step_init__449985[1] = init__449990);
return init__449990;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__449992))
{return cljs.core.deref.call(null,init__449992);
} else
{{
var G__450026 = (i__449986 + (step_init__449985[0]));
i__449986 = G__450026;
continue;
}
}
} else
{return (step_init__449985[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__449993 = this;
if(((this__449993.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__449994 = this__449993.tail.slice();
new_tail__449994.push(o);
return (new cljs.core.PersistentVector(this__449993.meta,(this__449993.cnt + 1),this__449993.shift,this__449993.root,new_tail__449994,null));
} else
{var root_overflow_QMARK___449995 = ((this__449993.cnt >>> 5) > (1 << this__449993.shift));
var new_shift__449996 = ((root_overflow_QMARK___449995)?(this__449993.shift + 5):this__449993.shift);
var new_root__449998 = ((root_overflow_QMARK___449995)?(function (){var n_r__449997 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__449997,0,this__449993.root);
cljs.core.pv_aset.call(null,n_r__449997,1,cljs.core.new_path.call(null,null,this__449993.shift,(new cljs.core.VectorNode(null,this__449993.tail))));
return n_r__449997;
})():cljs.core.push_tail.call(null,coll,this__449993.shift,this__449993.root,(new cljs.core.VectorNode(null,this__449993.tail))));
return (new cljs.core.PersistentVector(this__449993.meta,(this__449993.cnt + 1),new_shift__449996,new_root__449998,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__449999 = this;
if((this__449999.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__449999.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__450000 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__450001 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__450002 = this;
var this__450003 = this;
return cljs.core.pr_str.call(null,this__450003);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__450004 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__450005 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__450006 = this;
if((this__450006.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__450007 = this;
return this__450007.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__450008 = this;
if((this__450008.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__450008.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__450009 = this;
if((this__450009.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__450009.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__450009.meta);
} else
{if((1 < (this__450009.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__450009.meta,(this__450009.cnt - 1),this__450009.shift,this__450009.root,this__450009.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__450010 = cljs.core.array_for.call(null,coll,(this__450009.cnt - 2));
var nr__450011 = cljs.core.pop_tail.call(null,coll,this__450009.shift,this__450009.root);
var new_root__450012 = (((nr__450011 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__450011);
var cnt_1__450013 = (this__450009.cnt - 1);
if((function (){var and__3822__auto____450014 = (5 < this__450009.shift);
if(and__3822__auto____450014)
{return (cljs.core.pv_aget.call(null,new_root__450012,1) == null);
} else
{return and__3822__auto____450014;
}
})())
{return (new cljs.core.PersistentVector(this__450009.meta,cnt_1__450013,(this__450009.shift - 5),cljs.core.pv_aget.call(null,new_root__450012,0),new_tail__450010,null));
} else
{return (new cljs.core.PersistentVector(this__450009.meta,cnt_1__450013,this__450009.shift,new_root__450012,new_tail__450010,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__450015 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450016 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__450017 = this;
return (new cljs.core.PersistentVector(meta,this__450017.cnt,this__450017.shift,this__450017.root,this__450017.tail,this__450017.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__450018 = this;
return this__450018.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__450019 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__450020 = this;
if((function (){var and__3822__auto____450021 = (0 <= n);
if(and__3822__auto____450021)
{return (n < this__450020.cnt);
} else
{return and__3822__auto____450021;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450022 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__450022.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__450027 = xs.length;
var xs__450028 = (((no_clone === true))?xs:xs.slice());
if((l__450027 < 32))
{return (new cljs.core.PersistentVector(null,l__450027,5,cljs.core.PersistentVector.EMPTY_NODE,xs__450028,null));
} else
{var node__450029 = xs__450028.slice(0,32);
var v__450030 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__450029,null));
var i__450031 = 32;
var out__450032 = cljs.core._as_transient.call(null,v__450030);
while(true){
if((i__450031 < l__450027))
{{
var G__450033 = (i__450031 + 1);
var G__450034 = cljs.core.conj_BANG_.call(null,out__450032,(xs__450028[i__450031]));
i__450031 = G__450033;
out__450032 = G__450034;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__450032);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__450035){
var args = cljs.core.seq(arglist__450035);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

goog.provide('cljs.core.ChunkedSeq');

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31719660;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450036 = this;
var h__2203__auto____450037 = this__450036.__hash;
if(!((h__2203__auto____450037 == null)))
{return h__2203__auto____450037;
} else
{var h__2203__auto____450038 = cljs.core.hash_coll.call(null,coll);
this__450036.__hash = h__2203__auto____450038;
return h__2203__auto____450038;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__450039 = this;
if(((this__450039.off + 1) < this__450039.node.length))
{var s__450040 = cljs.core.chunked_seq.call(null,this__450039.vec,this__450039.node,this__450039.i,(this__450039.off + 1));
if((s__450040 == null))
{return null;
} else
{return s__450040;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__450041 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__450042 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__450043 = this;
return (this__450043.node[this__450043.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__450044 = this;
if(((this__450044.off + 1) < this__450044.node.length))
{var s__450045 = cljs.core.chunked_seq.call(null,this__450044.vec,this__450044.node,this__450044.i,(this__450044.off + 1));
if((s__450045 == null))
{return cljs.core.List.EMPTY;
} else
{return s__450045;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__450046 = this;
var l__450047 = this__450046.node.length;
var s__450048 = ((((this__450046.i + l__450047) < cljs.core._count.call(null,this__450046.vec)))?cljs.core.chunked_seq.call(null,this__450046.vec,(this__450046.i + l__450047),0):null);
if((s__450048 == null))
{return null;
} else
{return s__450048;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450049 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__450050 = this;
return cljs.core.chunked_seq.call(null,this__450050.vec,this__450050.node,this__450050.i,this__450050.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__450051 = this;
return this__450051.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450052 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__450052.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__450053 = this;
return cljs.core.array_chunk.call(null,this__450053.node,this__450053.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__450054 = this;
var l__450055 = this__450054.node.length;
var s__450056 = ((((this__450054.i + l__450055) < cljs.core._count.call(null,this__450054.vec)))?cljs.core.chunked_seq.call(null,this__450054.vec,(this__450054.i + l__450055),0):null);
if((s__450056 == null))
{return cljs.core.List.EMPTY;
} else
{return s__450056;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

goog.provide('cljs.core.Subvec');

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450059 = this;
var h__2203__auto____450060 = this__450059.__hash;
if(!((h__2203__auto____450060 == null)))
{return h__2203__auto____450060;
} else
{var h__2203__auto____450061 = cljs.core.hash_coll.call(null,coll);
this__450059.__hash = h__2203__auto____450061;
return h__2203__auto____450061;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__450062 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__450063 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__450064 = this;
var v_pos__450065 = (this__450064.start + key);
return (new cljs.core.Subvec(this__450064.meta,cljs.core._assoc.call(null,this__450064.v,v_pos__450065,val),this__450064.start,((this__450064.end > (v_pos__450065 + 1)) ? this__450064.end : (v_pos__450065 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__450091 = null;
var G__450091__2 = (function (this_sym450066,k){
var this__450068 = this;
var this_sym450066__450069 = this;
var coll__450070 = this_sym450066__450069;
return coll__450070.cljs$core$ILookup$_lookup$arity$2(coll__450070,k);
});
var G__450091__3 = (function (this_sym450067,k,not_found){
var this__450068 = this;
var this_sym450067__450071 = this;
var coll__450072 = this_sym450067__450071;
return coll__450072.cljs$core$ILookup$_lookup$arity$3(coll__450072,k,not_found);
});
G__450091 = function(this_sym450067,k,not_found){
switch(arguments.length){
case 2:
return G__450091__2.call(this,this_sym450067,k);
case 3:
return G__450091__3.call(this,this_sym450067,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__450091;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym450057,args450058){
var this__450073 = this;
return this_sym450057.call.apply(this_sym450057,[this_sym450057].concat(args450058.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__450074 = this;
return (new cljs.core.Subvec(this__450074.meta,cljs.core._assoc_n.call(null,this__450074.v,this__450074.end,o),this__450074.start,(this__450074.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__450075 = this;
var this__450076 = this;
return cljs.core.pr_str.call(null,this__450076);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__450077 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__450078 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__450079 = this;
var subvec_seq__450080 = (function subvec_seq(i){
if((i === this__450079.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__450079.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__450080.call(null,this__450079.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__450081 = this;
return (this__450081.end - this__450081.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__450082 = this;
return cljs.core._nth.call(null,this__450082.v,(this__450082.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__450083 = this;
if((this__450083.start === this__450083.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__450083.meta,this__450083.v,this__450083.start,(this__450083.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__450084 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450085 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__450086 = this;
return (new cljs.core.Subvec(meta,this__450086.v,this__450086.start,this__450086.end,this__450086.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__450087 = this;
return this__450087.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__450088 = this;
return cljs.core._nth.call(null,this__450088.v,(this__450088.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__450089 = this;
return cljs.core._nth.call(null,this__450089.v,(this__450089.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450090 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__450090.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__450093 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__450093,0,tl.length);
return ret__450093;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__450097 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__450098 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__450097,subidx__450098,(((level === 5))?tail_node:(function (){var child__450099 = cljs.core.pv_aget.call(null,ret__450097,subidx__450098);
if(!((child__450099 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__450099,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__450097;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__450104 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__450105 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__450106 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__450104,subidx__450105));
if((function (){var and__3822__auto____450107 = (new_child__450106 == null);
if(and__3822__auto____450107)
{return (subidx__450105 === 0);
} else
{return and__3822__auto____450107;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__450104,subidx__450105,new_child__450106);
return node__450104;
}
} else
{if((subidx__450105 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__450104,subidx__450105,null);
return node__450104;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____450112 = (0 <= i);
if(and__3822__auto____450112)
{return (i < tv.cnt);
} else
{return and__3822__auto____450112;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__450113 = tv.root;
var node__450114 = root__450113;
var level__450115 = tv.shift;
while(true){
if((level__450115 > 0))
{{
var G__450116 = cljs.core.tv_ensure_editable.call(null,root__450113.edit,cljs.core.pv_aget.call(null,node__450114,((i >>> level__450115) & 31)));
var G__450117 = (level__450115 - 5);
node__450114 = G__450116;
level__450115 = G__450117;
continue;
}
} else
{return node__450114.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

goog.provide('cljs.core.TransientVector');

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__450157 = null;
var G__450157__2 = (function (this_sym450120,k){
var this__450122 = this;
var this_sym450120__450123 = this;
var coll__450124 = this_sym450120__450123;
return coll__450124.cljs$core$ILookup$_lookup$arity$2(coll__450124,k);
});
var G__450157__3 = (function (this_sym450121,k,not_found){
var this__450122 = this;
var this_sym450121__450125 = this;
var coll__450126 = this_sym450121__450125;
return coll__450126.cljs$core$ILookup$_lookup$arity$3(coll__450126,k,not_found);
});
G__450157 = function(this_sym450121,k,not_found){
switch(arguments.length){
case 2:
return G__450157__2.call(this,this_sym450121,k);
case 3:
return G__450157__3.call(this,this_sym450121,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__450157;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym450118,args450119){
var this__450127 = this;
return this_sym450118.call.apply(this_sym450118,[this_sym450118].concat(args450119.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__450128 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__450129 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__450130 = this;
if(this__450130.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__450131 = this;
if((function (){var and__3822__auto____450132 = (0 <= n);
if(and__3822__auto____450132)
{return (n < this__450131.cnt);
} else
{return and__3822__auto____450132;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__450133 = this;
if(this__450133.root.edit)
{return this__450133.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__450134 = this;
if(this__450134.root.edit)
{if((function (){var and__3822__auto____450135 = (0 <= n);
if(and__3822__auto____450135)
{return (n < this__450134.cnt);
} else
{return and__3822__auto____450135;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__450134.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__450140 = (function go(level,node){
var node__450138 = cljs.core.tv_ensure_editable.call(null,this__450134.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__450138,(n & 31),val);
return node__450138;
} else
{var subidx__450139 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__450138,subidx__450139,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__450138,subidx__450139)));
return node__450138;
}
}).call(null,this__450134.shift,this__450134.root);
this__450134.root = new_root__450140;
return tcoll;
}
} else
{if((n === this__450134.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__450134.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__450141 = this;
if(this__450141.root.edit)
{if((this__450141.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__450141.cnt))
{this__450141.cnt = 0;
return tcoll;
} else
{if((((this__450141.cnt - 1) & 31) > 0))
{this__450141.cnt = (this__450141.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__450142 = cljs.core.editable_array_for.call(null,tcoll,(this__450141.cnt - 2));
var new_root__450144 = (function (){var nr__450143 = cljs.core.tv_pop_tail.call(null,tcoll,this__450141.shift,this__450141.root);
if(!((nr__450143 == null)))
{return nr__450143;
} else
{return (new cljs.core.VectorNode(this__450141.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____450145 = (5 < this__450141.shift);
if(and__3822__auto____450145)
{return (cljs.core.pv_aget.call(null,new_root__450144,1) == null);
} else
{return and__3822__auto____450145;
}
})())
{var new_root__450146 = cljs.core.tv_ensure_editable.call(null,this__450141.root.edit,cljs.core.pv_aget.call(null,new_root__450144,0));
this__450141.root = new_root__450146;
this__450141.shift = (this__450141.shift - 5);
this__450141.cnt = (this__450141.cnt - 1);
this__450141.tail = new_tail__450142;
return tcoll;
} else
{this__450141.root = new_root__450144;
this__450141.cnt = (this__450141.cnt - 1);
this__450141.tail = new_tail__450142;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__450147 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__450148 = this;
if(this__450148.root.edit)
{if(((this__450148.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__450148.tail[(this__450148.cnt & 31)] = o);
this__450148.cnt = (this__450148.cnt + 1);
return tcoll;
} else
{var tail_node__450149 = (new cljs.core.VectorNode(this__450148.root.edit,this__450148.tail));
var new_tail__450150 = cljs.core.make_array.call(null,32);
(new_tail__450150[0] = o);
this__450148.tail = new_tail__450150;
if(((this__450148.cnt >>> 5) > (1 << this__450148.shift)))
{var new_root_array__450151 = cljs.core.make_array.call(null,32);
var new_shift__450152 = (this__450148.shift + 5);
(new_root_array__450151[0] = this__450148.root);
(new_root_array__450151[1] = cljs.core.new_path.call(null,this__450148.root.edit,this__450148.shift,tail_node__450149));
this__450148.root = (new cljs.core.VectorNode(this__450148.root.edit,new_root_array__450151));
this__450148.shift = new_shift__450152;
this__450148.cnt = (this__450148.cnt + 1);
return tcoll;
} else
{var new_root__450153 = cljs.core.tv_push_tail.call(null,tcoll,this__450148.shift,this__450148.root,tail_node__450149);
this__450148.root = new_root__450153;
this__450148.cnt = (this__450148.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__450154 = this;
if(this__450154.root.edit)
{this__450154.root.edit = null;
var len__450155 = (this__450154.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__450156 = cljs.core.make_array.call(null,len__450155);
cljs.core.array_copy.call(null,this__450154.tail,0,trimmed_tail__450156,0,len__450155);
return (new cljs.core.PersistentVector(null,this__450154.cnt,this__450154.shift,this__450154.root,trimmed_tail__450156,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

goog.provide('cljs.core.PersistentQueueSeq');

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450158 = this;
var h__2203__auto____450159 = this__450158.__hash;
if(!((h__2203__auto____450159 == null)))
{return h__2203__auto____450159;
} else
{var h__2203__auto____450160 = cljs.core.hash_coll.call(null,coll);
this__450158.__hash = h__2203__auto____450160;
return h__2203__auto____450160;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__450161 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__450162 = this;
var this__450163 = this;
return cljs.core.pr_str.call(null,this__450163);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__450164 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__450165 = this;
return cljs.core._first.call(null,this__450165.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__450166 = this;
var temp__3971__auto____450167 = cljs.core.next.call(null,this__450166.front);
if(temp__3971__auto____450167)
{var f1__450168 = temp__3971__auto____450167;
return (new cljs.core.PersistentQueueSeq(this__450166.meta,f1__450168,this__450166.rear,null));
} else
{if((this__450166.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__450166.meta,this__450166.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450169 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__450170 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__450170.front,this__450170.rear,this__450170.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__450171 = this;
return this__450171.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450172 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__450172.meta);
});
cljs.core.PersistentQueueSeq;

goog.provide('cljs.core.PersistentQueue');

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450173 = this;
var h__2203__auto____450174 = this__450173.__hash;
if(!((h__2203__auto____450174 == null)))
{return h__2203__auto____450174;
} else
{var h__2203__auto____450175 = cljs.core.hash_coll.call(null,coll);
this__450173.__hash = h__2203__auto____450175;
return h__2203__auto____450175;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__450176 = this;
if(cljs.core.truth_(this__450176.front))
{return (new cljs.core.PersistentQueue(this__450176.meta,(this__450176.count + 1),this__450176.front,cljs.core.conj.call(null,(function (){var or__3824__auto____450177 = this__450176.rear;
if(cljs.core.truth_(or__3824__auto____450177))
{return or__3824__auto____450177;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__450176.meta,(this__450176.count + 1),cljs.core.conj.call(null,this__450176.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__450178 = this;
var this__450179 = this;
return cljs.core.pr_str.call(null,this__450179);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__450180 = this;
var rear__450181 = cljs.core.seq.call(null,this__450180.rear);
if(cljs.core.truth_((function (){var or__3824__auto____450182 = this__450180.front;
if(cljs.core.truth_(or__3824__auto____450182))
{return or__3824__auto____450182;
} else
{return rear__450181;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__450180.front,cljs.core.seq.call(null,rear__450181),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__450183 = this;
return this__450183.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__450184 = this;
return cljs.core._first.call(null,this__450184.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__450185 = this;
if(cljs.core.truth_(this__450185.front))
{var temp__3971__auto____450186 = cljs.core.next.call(null,this__450185.front);
if(temp__3971__auto____450186)
{var f1__450187 = temp__3971__auto____450186;
return (new cljs.core.PersistentQueue(this__450185.meta,(this__450185.count - 1),f1__450187,this__450185.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__450185.meta,(this__450185.count - 1),cljs.core.seq.call(null,this__450185.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__450188 = this;
return cljs.core.first.call(null,this__450188.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__450189 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450190 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__450191 = this;
return (new cljs.core.PersistentQueue(meta,this__450191.count,this__450191.front,this__450191.rear,this__450191.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__450192 = this;
return this__450192.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450193 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

goog.provide('cljs.core.NeverEquiv');

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__450194 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__450197 = array.length;
var i__450198 = 0;
while(true){
if((i__450198 < len__450197))
{if((k === (array[i__450198])))
{return i__450198;
} else
{{
var G__450199 = (i__450198 + incr);
i__450198 = G__450199;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__450202 = cljs.core.hash.call(null,a);
var b__450203 = cljs.core.hash.call(null,b);
if((a__450202 < b__450203))
{return -1;
} else
{if((a__450202 > b__450203))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__450211 = m.keys;
var len__450212 = ks__450211.length;
var so__450213 = m.strobj;
var out__450214 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__450215 = 0;
var out__450216 = cljs.core.transient$.call(null,out__450214);
while(true){
if((i__450215 < len__450212))
{var k__450217 = (ks__450211[i__450215]);
{
var G__450218 = (i__450215 + 1);
var G__450219 = cljs.core.assoc_BANG_.call(null,out__450216,k__450217,(so__450213[k__450217]));
i__450215 = G__450218;
out__450216 = G__450219;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__450216,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__450225 = {};
var l__450226 = ks.length;
var i__450227 = 0;
while(true){
if((i__450227 < l__450226))
{var k__450228 = (ks[i__450227]);
(new_obj__450225[k__450228] = (obj[k__450228]));
{
var G__450229 = (i__450227 + 1);
i__450227 = G__450229;
continue;
}
} else
{}
break;
}
return new_obj__450225;
});

goog.provide('cljs.core.ObjMap');

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__450232 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450233 = this;
var h__2203__auto____450234 = this__450233.__hash;
if(!((h__2203__auto____450234 == null)))
{return h__2203__auto____450234;
} else
{var h__2203__auto____450235 = cljs.core.hash_imap.call(null,coll);
this__450233.__hash = h__2203__auto____450235;
return h__2203__auto____450235;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__450236 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__450237 = this;
if((function (){var and__3822__auto____450238 = goog.isString(k);
if(and__3822__auto____450238)
{return !((cljs.core.scan_array.call(null,1,k,this__450237.keys) == null));
} else
{return and__3822__auto____450238;
}
})())
{return (this__450237.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__450239 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____450240 = (this__450239.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____450240)
{return or__3824__auto____450240;
} else
{return (this__450239.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__450239.keys) == null)))
{var new_strobj__450241 = cljs.core.obj_clone.call(null,this__450239.strobj,this__450239.keys);
(new_strobj__450241[k] = v);
return (new cljs.core.ObjMap(this__450239.meta,this__450239.keys,new_strobj__450241,(this__450239.update_count + 1),null));
} else
{var new_strobj__450242 = cljs.core.obj_clone.call(null,this__450239.strobj,this__450239.keys);
var new_keys__450243 = this__450239.keys.slice();
(new_strobj__450242[k] = v);
new_keys__450243.push(k);
return (new cljs.core.ObjMap(this__450239.meta,new_keys__450243,new_strobj__450242,(this__450239.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__450244 = this;
if((function (){var and__3822__auto____450245 = goog.isString(k);
if(and__3822__auto____450245)
{return !((cljs.core.scan_array.call(null,1,k,this__450244.keys) == null));
} else
{return and__3822__auto____450245;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__450267 = null;
var G__450267__2 = (function (this_sym450246,k){
var this__450248 = this;
var this_sym450246__450249 = this;
var coll__450250 = this_sym450246__450249;
return coll__450250.cljs$core$ILookup$_lookup$arity$2(coll__450250,k);
});
var G__450267__3 = (function (this_sym450247,k,not_found){
var this__450248 = this;
var this_sym450247__450251 = this;
var coll__450252 = this_sym450247__450251;
return coll__450252.cljs$core$ILookup$_lookup$arity$3(coll__450252,k,not_found);
});
G__450267 = function(this_sym450247,k,not_found){
switch(arguments.length){
case 2:
return G__450267__2.call(this,this_sym450247,k);
case 3:
return G__450267__3.call(this,this_sym450247,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__450267;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym450230,args450231){
var this__450253 = this;
return this_sym450230.call.apply(this_sym450230,[this_sym450230].concat(args450231.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__450254 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__450255 = this;
var this__450256 = this;
return cljs.core.pr_str.call(null,this__450256);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__450257 = this;
if((this__450257.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__450220_SHARP_){
return cljs.core.vector.call(null,p1__450220_SHARP_,(this__450257.strobj[p1__450220_SHARP_]));
}),this__450257.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__450258 = this;
return this__450258.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450259 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__450260 = this;
return (new cljs.core.ObjMap(meta,this__450260.keys,this__450260.strobj,this__450260.update_count,this__450260.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__450261 = this;
return this__450261.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450262 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__450262.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__450263 = this;
if((function (){var and__3822__auto____450264 = goog.isString(k);
if(and__3822__auto____450264)
{return !((cljs.core.scan_array.call(null,1,k,this__450263.keys) == null));
} else
{return and__3822__auto____450264;
}
})())
{var new_keys__450265 = this__450263.keys.slice();
var new_strobj__450266 = cljs.core.obj_clone.call(null,this__450263.strobj,this__450263.keys);
new_keys__450265.splice(cljs.core.scan_array.call(null,1,k,new_keys__450265),1);
cljs.core.js_delete.call(null,new_strobj__450266,k);
return (new cljs.core.ObjMap(this__450263.meta,new_keys__450265,new_strobj__450266,(this__450263.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

goog.provide('cljs.core.HashMap');

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450271 = this;
var h__2203__auto____450272 = this__450271.__hash;
if(!((h__2203__auto____450272 == null)))
{return h__2203__auto____450272;
} else
{var h__2203__auto____450273 = cljs.core.hash_imap.call(null,coll);
this__450271.__hash = h__2203__auto____450273;
return h__2203__auto____450273;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__450274 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__450275 = this;
var bucket__450276 = (this__450275.hashobj[cljs.core.hash.call(null,k)]);
var i__450277 = (cljs.core.truth_(bucket__450276)?cljs.core.scan_array.call(null,2,k,bucket__450276):null);
if(cljs.core.truth_(i__450277))
{return (bucket__450276[(i__450277 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__450278 = this;
var h__450279 = cljs.core.hash.call(null,k);
var bucket__450280 = (this__450278.hashobj[h__450279]);
if(cljs.core.truth_(bucket__450280))
{var new_bucket__450281 = bucket__450280.slice();
var new_hashobj__450282 = goog.object.clone(this__450278.hashobj);
(new_hashobj__450282[h__450279] = new_bucket__450281);
var temp__3971__auto____450283 = cljs.core.scan_array.call(null,2,k,new_bucket__450281);
if(cljs.core.truth_(temp__3971__auto____450283))
{var i__450284 = temp__3971__auto____450283;
(new_bucket__450281[(i__450284 + 1)] = v);
return (new cljs.core.HashMap(this__450278.meta,this__450278.count,new_hashobj__450282,null));
} else
{new_bucket__450281.push(k,v);
return (new cljs.core.HashMap(this__450278.meta,(this__450278.count + 1),new_hashobj__450282,null));
}
} else
{var new_hashobj__450285 = goog.object.clone(this__450278.hashobj);
(new_hashobj__450285[h__450279] = [k,v]);
return (new cljs.core.HashMap(this__450278.meta,(this__450278.count + 1),new_hashobj__450285,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__450286 = this;
var bucket__450287 = (this__450286.hashobj[cljs.core.hash.call(null,k)]);
var i__450288 = (cljs.core.truth_(bucket__450287)?cljs.core.scan_array.call(null,2,k,bucket__450287):null);
if(cljs.core.truth_(i__450288))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__450313 = null;
var G__450313__2 = (function (this_sym450289,k){
var this__450291 = this;
var this_sym450289__450292 = this;
var coll__450293 = this_sym450289__450292;
return coll__450293.cljs$core$ILookup$_lookup$arity$2(coll__450293,k);
});
var G__450313__3 = (function (this_sym450290,k,not_found){
var this__450291 = this;
var this_sym450290__450294 = this;
var coll__450295 = this_sym450290__450294;
return coll__450295.cljs$core$ILookup$_lookup$arity$3(coll__450295,k,not_found);
});
G__450313 = function(this_sym450290,k,not_found){
switch(arguments.length){
case 2:
return G__450313__2.call(this,this_sym450290,k);
case 3:
return G__450313__3.call(this,this_sym450290,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__450313;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym450269,args450270){
var this__450296 = this;
return this_sym450269.call.apply(this_sym450269,[this_sym450269].concat(args450270.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__450297 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__450298 = this;
var this__450299 = this;
return cljs.core.pr_str.call(null,this__450299);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__450300 = this;
if((this__450300.count > 0))
{var hashes__450301 = cljs.core.js_keys.call(null,this__450300.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__450268_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__450300.hashobj[p1__450268_SHARP_])));
}),hashes__450301);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__450302 = this;
return this__450302.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450303 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__450304 = this;
return (new cljs.core.HashMap(meta,this__450304.count,this__450304.hashobj,this__450304.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__450305 = this;
return this__450305.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450306 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__450306.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__450307 = this;
var h__450308 = cljs.core.hash.call(null,k);
var bucket__450309 = (this__450307.hashobj[h__450308]);
var i__450310 = (cljs.core.truth_(bucket__450309)?cljs.core.scan_array.call(null,2,k,bucket__450309):null);
if(cljs.core.not.call(null,i__450310))
{return coll;
} else
{var new_hashobj__450311 = goog.object.clone(this__450307.hashobj);
if((3 > bucket__450309.length))
{cljs.core.js_delete.call(null,new_hashobj__450311,h__450308);
} else
{var new_bucket__450312 = bucket__450309.slice();
new_bucket__450312.splice(i__450310,2);
(new_hashobj__450311[h__450308] = new_bucket__450312);
}
return (new cljs.core.HashMap(this__450307.meta,(this__450307.count - 1),new_hashobj__450311,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__450314 = ks.length;
var i__450315 = 0;
var out__450316 = cljs.core.HashMap.EMPTY;
while(true){
if((i__450315 < len__450314))
{{
var G__450317 = (i__450315 + 1);
var G__450318 = cljs.core.assoc.call(null,out__450316,(ks[i__450315]),(vs[i__450315]));
i__450315 = G__450317;
out__450316 = G__450318;
continue;
}
} else
{return out__450316;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__450322 = m.arr;
var len__450323 = arr__450322.length;
var i__450324 = 0;
while(true){
if((len__450323 <= i__450324))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__450322[i__450324]),k))
{return i__450324;
} else
{if("\uFDD0'else")
{{
var G__450325 = (i__450324 + 2);
i__450324 = G__450325;
continue;
}
} else
{return null;
}
}
}
break;
}
});

goog.provide('cljs.core.PersistentArrayMap');

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__450328 = this;
return (new cljs.core.TransientArrayMap({},this__450328.arr.length,this__450328.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450329 = this;
var h__2203__auto____450330 = this__450329.__hash;
if(!((h__2203__auto____450330 == null)))
{return h__2203__auto____450330;
} else
{var h__2203__auto____450331 = cljs.core.hash_imap.call(null,coll);
this__450329.__hash = h__2203__auto____450331;
return h__2203__auto____450331;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__450332 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__450333 = this;
var idx__450334 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__450334 === -1))
{return not_found;
} else
{return (this__450333.arr[(idx__450334 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__450335 = this;
var idx__450336 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__450336 === -1))
{if((this__450335.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__450335.meta,(this__450335.cnt + 1),(function (){var G__450337__450338 = this__450335.arr.slice();
G__450337__450338.push(k);
G__450337__450338.push(v);
return G__450337__450338;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__450335.arr[(idx__450336 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__450335.meta,this__450335.cnt,(function (){var G__450339__450340 = this__450335.arr.slice();
(G__450339__450340[(idx__450336 + 1)] = v);
return G__450339__450340;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__450341 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__450373 = null;
var G__450373__2 = (function (this_sym450342,k){
var this__450344 = this;
var this_sym450342__450345 = this;
var coll__450346 = this_sym450342__450345;
return coll__450346.cljs$core$ILookup$_lookup$arity$2(coll__450346,k);
});
var G__450373__3 = (function (this_sym450343,k,not_found){
var this__450344 = this;
var this_sym450343__450347 = this;
var coll__450348 = this_sym450343__450347;
return coll__450348.cljs$core$ILookup$_lookup$arity$3(coll__450348,k,not_found);
});
G__450373 = function(this_sym450343,k,not_found){
switch(arguments.length){
case 2:
return G__450373__2.call(this,this_sym450343,k);
case 3:
return G__450373__3.call(this,this_sym450343,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__450373;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym450326,args450327){
var this__450349 = this;
return this_sym450326.call.apply(this_sym450326,[this_sym450326].concat(args450327.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__450350 = this;
var len__450351 = this__450350.arr.length;
var i__450352 = 0;
var init__450353 = init;
while(true){
if((i__450352 < len__450351))
{var init__450354 = f.call(null,init__450353,(this__450350.arr[i__450352]),(this__450350.arr[(i__450352 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__450354))
{return cljs.core.deref.call(null,init__450354);
} else
{{
var G__450374 = (i__450352 + 2);
var G__450375 = init__450354;
i__450352 = G__450374;
init__450353 = G__450375;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__450355 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__450356 = this;
var this__450357 = this;
return cljs.core.pr_str.call(null,this__450357);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__450358 = this;
if((this__450358.cnt > 0))
{var len__450359 = this__450358.arr.length;
var array_map_seq__450360 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__450359))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__450358.arr[i]),(this__450358.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__450360.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__450361 = this;
return this__450361.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450362 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__450363 = this;
return (new cljs.core.PersistentArrayMap(meta,this__450363.cnt,this__450363.arr,this__450363.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__450364 = this;
return this__450364.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450365 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__450365.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__450366 = this;
var idx__450367 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__450367 >= 0))
{var len__450368 = this__450366.arr.length;
var new_len__450369 = (len__450368 - 2);
if((new_len__450369 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__450370 = cljs.core.make_array.call(null,new_len__450369);
var s__450371 = 0;
var d__450372 = 0;
while(true){
if((s__450371 >= len__450368))
{return (new cljs.core.PersistentArrayMap(this__450366.meta,(this__450366.cnt - 1),new_arr__450370,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__450366.arr[s__450371])))
{{
var G__450376 = (s__450371 + 2);
var G__450377 = d__450372;
s__450371 = G__450376;
d__450372 = G__450377;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__450370[d__450372] = (this__450366.arr[s__450371]));
(new_arr__450370[(d__450372 + 1)] = (this__450366.arr[(s__450371 + 1)]));
{
var G__450378 = (s__450371 + 2);
var G__450379 = (d__450372 + 2);
s__450371 = G__450378;
d__450372 = G__450379;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__450380 = cljs.core.count.call(null,ks);
var i__450381 = 0;
var out__450382 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__450381 < len__450380))
{{
var G__450383 = (i__450381 + 1);
var G__450384 = cljs.core.assoc_BANG_.call(null,out__450382,(ks[i__450381]),(vs[i__450381]));
i__450381 = G__450383;
out__450382 = G__450384;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__450382);
}
break;
}
});

goog.provide('cljs.core.TransientArrayMap');

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__450385 = this;
if(cljs.core.truth_(this__450385.editable_QMARK_))
{var idx__450386 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__450386 >= 0))
{(this__450385.arr[idx__450386] = (this__450385.arr[(this__450385.len - 2)]));
(this__450385.arr[(idx__450386 + 1)] = (this__450385.arr[(this__450385.len - 1)]));
var G__450387__450388 = this__450385.arr;
G__450387__450388.pop();
G__450387__450388.pop();
G__450387__450388;
this__450385.len = (this__450385.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__450389 = this;
if(cljs.core.truth_(this__450389.editable_QMARK_))
{var idx__450390 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__450390 === -1))
{if(((this__450389.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__450389.len = (this__450389.len + 2);
this__450389.arr.push(key);
this__450389.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__450389.len,this__450389.arr),key,val);
}
} else
{if((val === (this__450389.arr[(idx__450390 + 1)])))
{return tcoll;
} else
{(this__450389.arr[(idx__450390 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__450391 = this;
if(cljs.core.truth_(this__450391.editable_QMARK_))
{if((function (){var G__450392__450393 = o;
if(G__450392__450393)
{if((function (){var or__3824__auto____450394 = (G__450392__450393.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____450394)
{return or__3824__auto____450394;
} else
{return G__450392__450393.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__450392__450393.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__450392__450393);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__450392__450393);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__450395 = cljs.core.seq.call(null,o);
var tcoll__450396 = tcoll;
while(true){
var temp__3971__auto____450397 = cljs.core.first.call(null,es__450395);
if(cljs.core.truth_(temp__3971__auto____450397))
{var e__450398 = temp__3971__auto____450397;
{
var G__450404 = cljs.core.next.call(null,es__450395);
var G__450405 = tcoll__450396.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__450396,cljs.core.key.call(null,e__450398),cljs.core.val.call(null,e__450398));
es__450395 = G__450404;
tcoll__450396 = G__450405;
continue;
}
} else
{return tcoll__450396;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__450399 = this;
if(cljs.core.truth_(this__450399.editable_QMARK_))
{this__450399.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__450399.len,2),this__450399.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__450400 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__450401 = this;
if(cljs.core.truth_(this__450401.editable_QMARK_))
{var idx__450402 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__450402 === -1))
{return not_found;
} else
{return (this__450401.arr[(idx__450402 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__450403 = this;
if(cljs.core.truth_(this__450403.editable_QMARK_))
{return cljs.core.quot.call(null,this__450403.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__450408 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__450409 = 0;
while(true){
if((i__450409 < len))
{{
var G__450410 = cljs.core.assoc_BANG_.call(null,out__450408,(arr[i__450409]),(arr[(i__450409 + 1)]));
var G__450411 = (i__450409 + 2);
out__450408 = G__450410;
i__450409 = G__450411;
continue;
}
} else
{return out__450408;
}
break;
}
});

goog.provide('cljs.core.Box');

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2324__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__2324__auto__,writer__2325__auto__){
return cljs.core._write.call(null,writer__2325__auto__,"cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__450416__450417 = arr.slice();
(G__450416__450417[i] = a);
return G__450416__450417;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__450418__450419 = arr.slice();
(G__450418__450419[i] = a);
(G__450418__450419[j] = b);
return G__450418__450419;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__450421 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__450421,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__450421,(2 * i),(new_arr__450421.length - (2 * i)));
return new_arr__450421;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__450424 = inode.ensure_editable(edit);
(editable__450424.arr[i] = a);
return editable__450424;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__450425 = inode.ensure_editable(edit);
(editable__450425.arr[i] = a);
(editable__450425.arr[j] = b);
return editable__450425;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__450432 = arr.length;
var i__450433 = 0;
var init__450434 = init;
while(true){
if((i__450433 < len__450432))
{var init__450437 = (function (){var k__450435 = (arr[i__450433]);
if(!((k__450435 == null)))
{return f.call(null,init__450434,k__450435,(arr[(i__450433 + 1)]));
} else
{var node__450436 = (arr[(i__450433 + 1)]);
if(!((node__450436 == null)))
{return node__450436.kv_reduce(f,init__450434);
} else
{return init__450434;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__450437))
{return cljs.core.deref.call(null,init__450437);
} else
{{
var G__450438 = (i__450433 + 2);
var G__450439 = init__450437;
i__450433 = G__450438;
init__450434 = G__450439;
continue;
}
}
} else
{return init__450434;
}
break;
}
});

goog.provide('cljs.core.BitmapIndexedNode');

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__450440 = this;
var inode__450441 = this;
if((this__450440.bitmap === bit))
{return null;
} else
{var editable__450442 = inode__450441.ensure_editable(e);
var earr__450443 = editable__450442.arr;
var len__450444 = earr__450443.length;
editable__450442.bitmap = (bit ^ editable__450442.bitmap);
cljs.core.array_copy.call(null,earr__450443,(2 * (i + 1)),earr__450443,(2 * i),(len__450444 - (2 * (i + 1))));
(earr__450443[(len__450444 - 2)] = null);
(earr__450443[(len__450444 - 1)] = null);
return editable__450442;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__450445 = this;
var inode__450446 = this;
var bit__450447 = (1 << ((hash >>> shift) & 0x01f));
var idx__450448 = cljs.core.bitmap_indexed_node_index.call(null,this__450445.bitmap,bit__450447);
if(((this__450445.bitmap & bit__450447) === 0))
{var n__450449 = cljs.core.bit_count.call(null,this__450445.bitmap);
if(((2 * n__450449) < this__450445.arr.length))
{var editable__450450 = inode__450446.ensure_editable(edit);
var earr__450451 = editable__450450.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__450451,(2 * idx__450448),earr__450451,(2 * (idx__450448 + 1)),(2 * (n__450449 - idx__450448)));
(earr__450451[(2 * idx__450448)] = key);
(earr__450451[((2 * idx__450448) + 1)] = val);
editable__450450.bitmap = (editable__450450.bitmap | bit__450447);
return editable__450450;
} else
{if((n__450449 >= 16))
{var nodes__450452 = cljs.core.make_array.call(null,32);
var jdx__450453 = ((hash >>> shift) & 0x01f);
(nodes__450452[jdx__450453] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__450454 = 0;
var j__450455 = 0;
while(true){
if((i__450454 < 32))
{if((((this__450445.bitmap >>> i__450454) & 1) === 0))
{{
var G__450508 = (i__450454 + 1);
var G__450509 = j__450455;
i__450454 = G__450508;
j__450455 = G__450509;
continue;
}
} else
{(nodes__450452[i__450454] = ((!(((this__450445.arr[j__450455]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__450445.arr[j__450455])),(this__450445.arr[j__450455]),(this__450445.arr[(j__450455 + 1)]),added_leaf_QMARK_):(this__450445.arr[(j__450455 + 1)])));
{
var G__450510 = (i__450454 + 1);
var G__450511 = (j__450455 + 2);
i__450454 = G__450510;
j__450455 = G__450511;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__450449 + 1),nodes__450452));
} else
{if("\uFDD0'else")
{var new_arr__450456 = cljs.core.make_array.call(null,(2 * (n__450449 + 4)));
cljs.core.array_copy.call(null,this__450445.arr,0,new_arr__450456,0,(2 * idx__450448));
(new_arr__450456[(2 * idx__450448)] = key);
(new_arr__450456[((2 * idx__450448) + 1)] = val);
cljs.core.array_copy.call(null,this__450445.arr,(2 * idx__450448),new_arr__450456,(2 * (idx__450448 + 1)),(2 * (n__450449 - idx__450448)));
added_leaf_QMARK_.val = true;
var editable__450457 = inode__450446.ensure_editable(edit);
editable__450457.arr = new_arr__450456;
editable__450457.bitmap = (editable__450457.bitmap | bit__450447);
return editable__450457;
} else
{return null;
}
}
}
} else
{var key_or_nil__450458 = (this__450445.arr[(2 * idx__450448)]);
var val_or_node__450459 = (this__450445.arr[((2 * idx__450448) + 1)]);
if((key_or_nil__450458 == null))
{var n__450460 = val_or_node__450459.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__450460 === val_or_node__450459))
{return inode__450446;
} else
{return cljs.core.edit_and_set.call(null,inode__450446,edit,((2 * idx__450448) + 1),n__450460);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__450458))
{if((val === val_or_node__450459))
{return inode__450446;
} else
{return cljs.core.edit_and_set.call(null,inode__450446,edit,((2 * idx__450448) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__450446,edit,(2 * idx__450448),null,((2 * idx__450448) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__450458,val_or_node__450459,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__450461 = this;
var inode__450462 = this;
return cljs.core.create_inode_seq.call(null,this__450461.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__450463 = this;
var inode__450464 = this;
var bit__450465 = (1 << ((hash >>> shift) & 0x01f));
if(((this__450463.bitmap & bit__450465) === 0))
{return inode__450464;
} else
{var idx__450466 = cljs.core.bitmap_indexed_node_index.call(null,this__450463.bitmap,bit__450465);
var key_or_nil__450467 = (this__450463.arr[(2 * idx__450466)]);
var val_or_node__450468 = (this__450463.arr[((2 * idx__450466) + 1)]);
if((key_or_nil__450467 == null))
{var n__450469 = val_or_node__450468.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__450469 === val_or_node__450468))
{return inode__450464;
} else
{if(!((n__450469 == null)))
{return cljs.core.edit_and_set.call(null,inode__450464,edit,((2 * idx__450466) + 1),n__450469);
} else
{if((this__450463.bitmap === bit__450465))
{return null;
} else
{if("\uFDD0'else")
{return inode__450464.edit_and_remove_pair(edit,bit__450465,idx__450466);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__450467))
{(removed_leaf_QMARK_[0] = true);
return inode__450464.edit_and_remove_pair(edit,bit__450465,idx__450466);
} else
{if("\uFDD0'else")
{return inode__450464;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__450470 = this;
var inode__450471 = this;
if((e === this__450470.edit))
{return inode__450471;
} else
{var n__450472 = cljs.core.bit_count.call(null,this__450470.bitmap);
var new_arr__450473 = cljs.core.make_array.call(null,(((n__450472 < 0))?4:(2 * (n__450472 + 1))));
cljs.core.array_copy.call(null,this__450470.arr,0,new_arr__450473,0,(2 * n__450472));
return (new cljs.core.BitmapIndexedNode(e,this__450470.bitmap,new_arr__450473));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__450474 = this;
var inode__450475 = this;
return cljs.core.inode_kv_reduce.call(null,this__450474.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__450476 = this;
var inode__450477 = this;
var bit__450478 = (1 << ((hash >>> shift) & 0x01f));
if(((this__450476.bitmap & bit__450478) === 0))
{return not_found;
} else
{var idx__450479 = cljs.core.bitmap_indexed_node_index.call(null,this__450476.bitmap,bit__450478);
var key_or_nil__450480 = (this__450476.arr[(2 * idx__450479)]);
var val_or_node__450481 = (this__450476.arr[((2 * idx__450479) + 1)]);
if((key_or_nil__450480 == null))
{return val_or_node__450481.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__450480))
{return cljs.core.PersistentVector.fromArray([key_or_nil__450480,val_or_node__450481], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__450482 = this;
var inode__450483 = this;
var bit__450484 = (1 << ((hash >>> shift) & 0x01f));
if(((this__450482.bitmap & bit__450484) === 0))
{return inode__450483;
} else
{var idx__450485 = cljs.core.bitmap_indexed_node_index.call(null,this__450482.bitmap,bit__450484);
var key_or_nil__450486 = (this__450482.arr[(2 * idx__450485)]);
var val_or_node__450487 = (this__450482.arr[((2 * idx__450485) + 1)]);
if((key_or_nil__450486 == null))
{var n__450488 = val_or_node__450487.inode_without((shift + 5),hash,key);
if((n__450488 === val_or_node__450487))
{return inode__450483;
} else
{if(!((n__450488 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__450482.bitmap,cljs.core.clone_and_set.call(null,this__450482.arr,((2 * idx__450485) + 1),n__450488)));
} else
{if((this__450482.bitmap === bit__450484))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__450482.bitmap ^ bit__450484),cljs.core.remove_pair.call(null,this__450482.arr,idx__450485)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__450486))
{return (new cljs.core.BitmapIndexedNode(null,(this__450482.bitmap ^ bit__450484),cljs.core.remove_pair.call(null,this__450482.arr,idx__450485)));
} else
{if("\uFDD0'else")
{return inode__450483;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__450489 = this;
var inode__450490 = this;
var bit__450491 = (1 << ((hash >>> shift) & 0x01f));
var idx__450492 = cljs.core.bitmap_indexed_node_index.call(null,this__450489.bitmap,bit__450491);
if(((this__450489.bitmap & bit__450491) === 0))
{var n__450493 = cljs.core.bit_count.call(null,this__450489.bitmap);
if((n__450493 >= 16))
{var nodes__450494 = cljs.core.make_array.call(null,32);
var jdx__450495 = ((hash >>> shift) & 0x01f);
(nodes__450494[jdx__450495] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__450496 = 0;
var j__450497 = 0;
while(true){
if((i__450496 < 32))
{if((((this__450489.bitmap >>> i__450496) & 1) === 0))
{{
var G__450512 = (i__450496 + 1);
var G__450513 = j__450497;
i__450496 = G__450512;
j__450497 = G__450513;
continue;
}
} else
{(nodes__450494[i__450496] = ((!(((this__450489.arr[j__450497]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__450489.arr[j__450497])),(this__450489.arr[j__450497]),(this__450489.arr[(j__450497 + 1)]),added_leaf_QMARK_):(this__450489.arr[(j__450497 + 1)])));
{
var G__450514 = (i__450496 + 1);
var G__450515 = (j__450497 + 2);
i__450496 = G__450514;
j__450497 = G__450515;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__450493 + 1),nodes__450494));
} else
{var new_arr__450498 = cljs.core.make_array.call(null,(2 * (n__450493 + 1)));
cljs.core.array_copy.call(null,this__450489.arr,0,new_arr__450498,0,(2 * idx__450492));
(new_arr__450498[(2 * idx__450492)] = key);
(new_arr__450498[((2 * idx__450492) + 1)] = val);
cljs.core.array_copy.call(null,this__450489.arr,(2 * idx__450492),new_arr__450498,(2 * (idx__450492 + 1)),(2 * (n__450493 - idx__450492)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__450489.bitmap | bit__450491),new_arr__450498));
}
} else
{var key_or_nil__450499 = (this__450489.arr[(2 * idx__450492)]);
var val_or_node__450500 = (this__450489.arr[((2 * idx__450492) + 1)]);
if((key_or_nil__450499 == null))
{var n__450501 = val_or_node__450500.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__450501 === val_or_node__450500))
{return inode__450490;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__450489.bitmap,cljs.core.clone_and_set.call(null,this__450489.arr,((2 * idx__450492) + 1),n__450501)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__450499))
{if((val === val_or_node__450500))
{return inode__450490;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__450489.bitmap,cljs.core.clone_and_set.call(null,this__450489.arr,((2 * idx__450492) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__450489.bitmap,cljs.core.clone_and_set.call(null,this__450489.arr,(2 * idx__450492),null,((2 * idx__450492) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__450499,val_or_node__450500,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__450502 = this;
var inode__450503 = this;
var bit__450504 = (1 << ((hash >>> shift) & 0x01f));
if(((this__450502.bitmap & bit__450504) === 0))
{return not_found;
} else
{var idx__450505 = cljs.core.bitmap_indexed_node_index.call(null,this__450502.bitmap,bit__450504);
var key_or_nil__450506 = (this__450502.arr[(2 * idx__450505)]);
var val_or_node__450507 = (this__450502.arr[((2 * idx__450505) + 1)]);
if((key_or_nil__450506 == null))
{return val_or_node__450507.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__450506))
{return val_or_node__450507;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__450523 = array_node.arr;
var len__450524 = (2 * (array_node.cnt - 1));
var new_arr__450525 = cljs.core.make_array.call(null,len__450524);
var i__450526 = 0;
var j__450527 = 1;
var bitmap__450528 = 0;
while(true){
if((i__450526 < len__450524))
{if((function (){var and__3822__auto____450529 = !((i__450526 === idx));
if(and__3822__auto____450529)
{return !(((arr__450523[i__450526]) == null));
} else
{return and__3822__auto____450529;
}
})())
{(new_arr__450525[j__450527] = (arr__450523[i__450526]));
{
var G__450530 = (i__450526 + 1);
var G__450531 = (j__450527 + 2);
var G__450532 = (bitmap__450528 | (1 << i__450526));
i__450526 = G__450530;
j__450527 = G__450531;
bitmap__450528 = G__450532;
continue;
}
} else
{{
var G__450533 = (i__450526 + 1);
var G__450534 = j__450527;
var G__450535 = bitmap__450528;
i__450526 = G__450533;
j__450527 = G__450534;
bitmap__450528 = G__450535;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__450528,new_arr__450525));
}
break;
}
});

goog.provide('cljs.core.ArrayNode');

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__450536 = this;
var inode__450537 = this;
var idx__450538 = ((hash >>> shift) & 0x01f);
var node__450539 = (this__450536.arr[idx__450538]);
if((node__450539 == null))
{var editable__450540 = cljs.core.edit_and_set.call(null,inode__450537,edit,idx__450538,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__450540.cnt = (editable__450540.cnt + 1);
return editable__450540;
} else
{var n__450541 = node__450539.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__450541 === node__450539))
{return inode__450537;
} else
{return cljs.core.edit_and_set.call(null,inode__450537,edit,idx__450538,n__450541);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__450542 = this;
var inode__450543 = this;
return cljs.core.create_array_node_seq.call(null,this__450542.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__450544 = this;
var inode__450545 = this;
var idx__450546 = ((hash >>> shift) & 0x01f);
var node__450547 = (this__450544.arr[idx__450546]);
if((node__450547 == null))
{return inode__450545;
} else
{var n__450548 = node__450547.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__450548 === node__450547))
{return inode__450545;
} else
{if((n__450548 == null))
{if((this__450544.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__450545,edit,idx__450546);
} else
{var editable__450549 = cljs.core.edit_and_set.call(null,inode__450545,edit,idx__450546,n__450548);
editable__450549.cnt = (editable__450549.cnt - 1);
return editable__450549;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__450545,edit,idx__450546,n__450548);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__450550 = this;
var inode__450551 = this;
if((e === this__450550.edit))
{return inode__450551;
} else
{return (new cljs.core.ArrayNode(e,this__450550.cnt,this__450550.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__450552 = this;
var inode__450553 = this;
var len__450554 = this__450552.arr.length;
var i__450555 = 0;
var init__450556 = init;
while(true){
if((i__450555 < len__450554))
{var node__450557 = (this__450552.arr[i__450555]);
if(!((node__450557 == null)))
{var init__450558 = node__450557.kv_reduce(f,init__450556);
if(cljs.core.reduced_QMARK_.call(null,init__450558))
{return cljs.core.deref.call(null,init__450558);
} else
{{
var G__450577 = (i__450555 + 1);
var G__450578 = init__450558;
i__450555 = G__450577;
init__450556 = G__450578;
continue;
}
}
} else
{return null;
}
} else
{return init__450556;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__450559 = this;
var inode__450560 = this;
var idx__450561 = ((hash >>> shift) & 0x01f);
var node__450562 = (this__450559.arr[idx__450561]);
if(!((node__450562 == null)))
{return node__450562.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__450563 = this;
var inode__450564 = this;
var idx__450565 = ((hash >>> shift) & 0x01f);
var node__450566 = (this__450563.arr[idx__450565]);
if(!((node__450566 == null)))
{var n__450567 = node__450566.inode_without((shift + 5),hash,key);
if((n__450567 === node__450566))
{return inode__450564;
} else
{if((n__450567 == null))
{if((this__450563.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__450564,null,idx__450565);
} else
{return (new cljs.core.ArrayNode(null,(this__450563.cnt - 1),cljs.core.clone_and_set.call(null,this__450563.arr,idx__450565,n__450567)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__450563.cnt,cljs.core.clone_and_set.call(null,this__450563.arr,idx__450565,n__450567)));
} else
{return null;
}
}
}
} else
{return inode__450564;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__450568 = this;
var inode__450569 = this;
var idx__450570 = ((hash >>> shift) & 0x01f);
var node__450571 = (this__450568.arr[idx__450570]);
if((node__450571 == null))
{return (new cljs.core.ArrayNode(null,(this__450568.cnt + 1),cljs.core.clone_and_set.call(null,this__450568.arr,idx__450570,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__450572 = node__450571.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__450572 === node__450571))
{return inode__450569;
} else
{return (new cljs.core.ArrayNode(null,this__450568.cnt,cljs.core.clone_and_set.call(null,this__450568.arr,idx__450570,n__450572)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__450573 = this;
var inode__450574 = this;
var idx__450575 = ((hash >>> shift) & 0x01f);
var node__450576 = (this__450573.arr[idx__450575]);
if(!((node__450576 == null)))
{return node__450576.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__450581 = (2 * cnt);
var i__450582 = 0;
while(true){
if((i__450582 < lim__450581))
{if(cljs.core.key_test.call(null,key,(arr[i__450582])))
{return i__450582;
} else
{{
var G__450583 = (i__450582 + 2);
i__450582 = G__450583;
continue;
}
}
} else
{return -1;
}
break;
}
});

goog.provide('cljs.core.HashCollisionNode');

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__450584 = this;
var inode__450585 = this;
if((hash === this__450584.collision_hash))
{var idx__450586 = cljs.core.hash_collision_node_find_index.call(null,this__450584.arr,this__450584.cnt,key);
if((idx__450586 === -1))
{if((this__450584.arr.length > (2 * this__450584.cnt)))
{var editable__450587 = cljs.core.edit_and_set.call(null,inode__450585,edit,(2 * this__450584.cnt),key,((2 * this__450584.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__450587.cnt = (editable__450587.cnt + 1);
return editable__450587;
} else
{var len__450588 = this__450584.arr.length;
var new_arr__450589 = cljs.core.make_array.call(null,(len__450588 + 2));
cljs.core.array_copy.call(null,this__450584.arr,0,new_arr__450589,0,len__450588);
(new_arr__450589[len__450588] = key);
(new_arr__450589[(len__450588 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__450585.ensure_editable_array(edit,(this__450584.cnt + 1),new_arr__450589);
}
} else
{if(((this__450584.arr[(idx__450586 + 1)]) === val))
{return inode__450585;
} else
{return cljs.core.edit_and_set.call(null,inode__450585,edit,(idx__450586 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__450584.collision_hash >>> shift) & 0x01f)),[null,inode__450585,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__450590 = this;
var inode__450591 = this;
return cljs.core.create_inode_seq.call(null,this__450590.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__450592 = this;
var inode__450593 = this;
var idx__450594 = cljs.core.hash_collision_node_find_index.call(null,this__450592.arr,this__450592.cnt,key);
if((idx__450594 === -1))
{return inode__450593;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__450592.cnt === 1))
{return null;
} else
{var editable__450595 = inode__450593.ensure_editable(edit);
var earr__450596 = editable__450595.arr;
(earr__450596[idx__450594] = (earr__450596[((2 * this__450592.cnt) - 2)]));
(earr__450596[(idx__450594 + 1)] = (earr__450596[((2 * this__450592.cnt) - 1)]));
(earr__450596[((2 * this__450592.cnt) - 1)] = null);
(earr__450596[((2 * this__450592.cnt) - 2)] = null);
editable__450595.cnt = (editable__450595.cnt - 1);
return editable__450595;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__450597 = this;
var inode__450598 = this;
if((e === this__450597.edit))
{return inode__450598;
} else
{var new_arr__450599 = cljs.core.make_array.call(null,(2 * (this__450597.cnt + 1)));
cljs.core.array_copy.call(null,this__450597.arr,0,new_arr__450599,0,(2 * this__450597.cnt));
return (new cljs.core.HashCollisionNode(e,this__450597.collision_hash,this__450597.cnt,new_arr__450599));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__450600 = this;
var inode__450601 = this;
return cljs.core.inode_kv_reduce.call(null,this__450600.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__450602 = this;
var inode__450603 = this;
var idx__450604 = cljs.core.hash_collision_node_find_index.call(null,this__450602.arr,this__450602.cnt,key);
if((idx__450604 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__450602.arr[idx__450604])))
{return cljs.core.PersistentVector.fromArray([(this__450602.arr[idx__450604]),(this__450602.arr[(idx__450604 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__450605 = this;
var inode__450606 = this;
var idx__450607 = cljs.core.hash_collision_node_find_index.call(null,this__450605.arr,this__450605.cnt,key);
if((idx__450607 === -1))
{return inode__450606;
} else
{if((this__450605.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__450605.collision_hash,(this__450605.cnt - 1),cljs.core.remove_pair.call(null,this__450605.arr,cljs.core.quot.call(null,idx__450607,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__450608 = this;
var inode__450609 = this;
if((hash === this__450608.collision_hash))
{var idx__450610 = cljs.core.hash_collision_node_find_index.call(null,this__450608.arr,this__450608.cnt,key);
if((idx__450610 === -1))
{var len__450611 = this__450608.arr.length;
var new_arr__450612 = cljs.core.make_array.call(null,(len__450611 + 2));
cljs.core.array_copy.call(null,this__450608.arr,0,new_arr__450612,0,len__450611);
(new_arr__450612[len__450611] = key);
(new_arr__450612[(len__450611 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__450608.collision_hash,(this__450608.cnt + 1),new_arr__450612));
} else
{if(cljs.core._EQ_.call(null,(this__450608.arr[idx__450610]),val))
{return inode__450609;
} else
{return (new cljs.core.HashCollisionNode(null,this__450608.collision_hash,this__450608.cnt,cljs.core.clone_and_set.call(null,this__450608.arr,(idx__450610 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__450608.collision_hash >>> shift) & 0x01f)),[null,inode__450609])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__450613 = this;
var inode__450614 = this;
var idx__450615 = cljs.core.hash_collision_node_find_index.call(null,this__450613.arr,this__450613.cnt,key);
if((idx__450615 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__450613.arr[idx__450615])))
{return (this__450613.arr[(idx__450615 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__450616 = this;
var inode__450617 = this;
if((e === this__450616.edit))
{this__450616.arr = array;
this__450616.cnt = count;
return inode__450617;
} else
{return (new cljs.core.HashCollisionNode(this__450616.edit,this__450616.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__450622 = cljs.core.hash.call(null,key1);
if((key1hash__450622 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__450622,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___450623 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__450622,key1,val1,added_leaf_QMARK___450623).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___450623);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__450624 = cljs.core.hash.call(null,key1);
if((key1hash__450624 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__450624,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___450625 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__450624,key1,val1,added_leaf_QMARK___450625).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___450625);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

goog.provide('cljs.core.NodeSeq');

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450626 = this;
var h__2203__auto____450627 = this__450626.__hash;
if(!((h__2203__auto____450627 == null)))
{return h__2203__auto____450627;
} else
{var h__2203__auto____450628 = cljs.core.hash_coll.call(null,coll);
this__450626.__hash = h__2203__auto____450628;
return h__2203__auto____450628;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__450629 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__450630 = this;
var this__450631 = this;
return cljs.core.pr_str.call(null,this__450631);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__450632 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__450633 = this;
if((this__450633.s == null))
{return cljs.core.PersistentVector.fromArray([(this__450633.nodes[this__450633.i]),(this__450633.nodes[(this__450633.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__450633.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__450634 = this;
if((this__450634.s == null))
{return cljs.core.create_inode_seq.call(null,this__450634.nodes,(this__450634.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__450634.nodes,this__450634.i,cljs.core.next.call(null,this__450634.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450635 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__450636 = this;
return (new cljs.core.NodeSeq(meta,this__450636.nodes,this__450636.i,this__450636.s,this__450636.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__450637 = this;
return this__450637.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450638 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__450638.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__450645 = nodes.length;
var j__450646 = i;
while(true){
if((j__450646 < len__450645))
{if(!(((nodes[j__450646]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__450646,null,null));
} else
{var temp__3971__auto____450647 = (nodes[(j__450646 + 1)]);
if(cljs.core.truth_(temp__3971__auto____450647))
{var node__450648 = temp__3971__auto____450647;
var temp__3971__auto____450649 = node__450648.inode_seq();
if(cljs.core.truth_(temp__3971__auto____450649))
{var node_seq__450650 = temp__3971__auto____450649;
return (new cljs.core.NodeSeq(null,nodes,(j__450646 + 2),node_seq__450650,null));
} else
{{
var G__450651 = (j__450646 + 2);
j__450646 = G__450651;
continue;
}
}
} else
{{
var G__450652 = (j__450646 + 2);
j__450646 = G__450652;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

goog.provide('cljs.core.ArrayNodeSeq');

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450653 = this;
var h__2203__auto____450654 = this__450653.__hash;
if(!((h__2203__auto____450654 == null)))
{return h__2203__auto____450654;
} else
{var h__2203__auto____450655 = cljs.core.hash_coll.call(null,coll);
this__450653.__hash = h__2203__auto____450655;
return h__2203__auto____450655;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__450656 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__450657 = this;
var this__450658 = this;
return cljs.core.pr_str.call(null,this__450658);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__450659 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__450660 = this;
return cljs.core.first.call(null,this__450660.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__450661 = this;
return cljs.core.create_array_node_seq.call(null,null,this__450661.nodes,this__450661.i,cljs.core.next.call(null,this__450661.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450662 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__450663 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__450663.nodes,this__450663.i,this__450663.s,this__450663.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__450664 = this;
return this__450664.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450665 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__450665.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__450672 = nodes.length;
var j__450673 = i;
while(true){
if((j__450673 < len__450672))
{var temp__3971__auto____450674 = (nodes[j__450673]);
if(cljs.core.truth_(temp__3971__auto____450674))
{var nj__450675 = temp__3971__auto____450674;
var temp__3971__auto____450676 = nj__450675.inode_seq();
if(cljs.core.truth_(temp__3971__auto____450676))
{var ns__450677 = temp__3971__auto____450676;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__450673 + 1),ns__450677,null));
} else
{{
var G__450678 = (j__450673 + 1);
j__450673 = G__450678;
continue;
}
}
} else
{{
var G__450679 = (j__450673 + 1);
j__450673 = G__450679;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

goog.provide('cljs.core.PersistentHashMap');

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__450682 = this;
return (new cljs.core.TransientHashMap({},this__450682.root,this__450682.cnt,this__450682.has_nil_QMARK_,this__450682.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450683 = this;
var h__2203__auto____450684 = this__450683.__hash;
if(!((h__2203__auto____450684 == null)))
{return h__2203__auto____450684;
} else
{var h__2203__auto____450685 = cljs.core.hash_imap.call(null,coll);
this__450683.__hash = h__2203__auto____450685;
return h__2203__auto____450685;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__450686 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__450687 = this;
if((k == null))
{if(this__450687.has_nil_QMARK_)
{return this__450687.nil_val;
} else
{return not_found;
}
} else
{if((this__450687.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__450687.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__450688 = this;
if((k == null))
{if((function (){var and__3822__auto____450689 = this__450688.has_nil_QMARK_;
if(and__3822__auto____450689)
{return (v === this__450688.nil_val);
} else
{return and__3822__auto____450689;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__450688.meta,((this__450688.has_nil_QMARK_)?this__450688.cnt:(this__450688.cnt + 1)),this__450688.root,true,v,null));
}
} else
{var added_leaf_QMARK___450690 = (new cljs.core.Box(false));
var new_root__450691 = (((this__450688.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__450688.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___450690);
if((new_root__450691 === this__450688.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__450688.meta,((added_leaf_QMARK___450690.val)?(this__450688.cnt + 1):this__450688.cnt),new_root__450691,this__450688.has_nil_QMARK_,this__450688.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__450692 = this;
if((k == null))
{return this__450692.has_nil_QMARK_;
} else
{if((this__450692.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__450692.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__450715 = null;
var G__450715__2 = (function (this_sym450693,k){
var this__450695 = this;
var this_sym450693__450696 = this;
var coll__450697 = this_sym450693__450696;
return coll__450697.cljs$core$ILookup$_lookup$arity$2(coll__450697,k);
});
var G__450715__3 = (function (this_sym450694,k,not_found){
var this__450695 = this;
var this_sym450694__450698 = this;
var coll__450699 = this_sym450694__450698;
return coll__450699.cljs$core$ILookup$_lookup$arity$3(coll__450699,k,not_found);
});
G__450715 = function(this_sym450694,k,not_found){
switch(arguments.length){
case 2:
return G__450715__2.call(this,this_sym450694,k);
case 3:
return G__450715__3.call(this,this_sym450694,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__450715;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym450680,args450681){
var this__450700 = this;
return this_sym450680.call.apply(this_sym450680,[this_sym450680].concat(args450681.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__450701 = this;
var init__450702 = ((this__450701.has_nil_QMARK_)?f.call(null,init,null,this__450701.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__450702))
{return cljs.core.deref.call(null,init__450702);
} else
{if(!((this__450701.root == null)))
{return this__450701.root.kv_reduce(f,init__450702);
} else
{if("\uFDD0'else")
{return init__450702;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__450703 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__450704 = this;
var this__450705 = this;
return cljs.core.pr_str.call(null,this__450705);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__450706 = this;
if((this__450706.cnt > 0))
{var s__450707 = ((!((this__450706.root == null)))?this__450706.root.inode_seq():null);
if(this__450706.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__450706.nil_val], true),s__450707);
} else
{return s__450707;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__450708 = this;
return this__450708.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450709 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__450710 = this;
return (new cljs.core.PersistentHashMap(meta,this__450710.cnt,this__450710.root,this__450710.has_nil_QMARK_,this__450710.nil_val,this__450710.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__450711 = this;
return this__450711.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450712 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__450712.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__450713 = this;
if((k == null))
{if(this__450713.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__450713.meta,(this__450713.cnt - 1),this__450713.root,false,null,null));
} else
{return coll;
}
} else
{if((this__450713.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__450714 = this__450713.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__450714 === this__450713.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__450713.meta,(this__450713.cnt - 1),new_root__450714,this__450713.has_nil_QMARK_,this__450713.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__450716 = ks.length;
var i__450717 = 0;
var out__450718 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__450717 < len__450716))
{{
var G__450719 = (i__450717 + 1);
var G__450720 = cljs.core.assoc_BANG_.call(null,out__450718,(ks[i__450717]),(vs[i__450717]));
i__450717 = G__450719;
out__450718 = G__450720;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__450718);
}
break;
}
});

goog.provide('cljs.core.TransientHashMap');

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__450721 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__450722 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__450723 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__450724 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__450725 = this;
if((k == null))
{if(this__450725.has_nil_QMARK_)
{return this__450725.nil_val;
} else
{return null;
}
} else
{if((this__450725.root == null))
{return null;
} else
{return this__450725.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__450726 = this;
if((k == null))
{if(this__450726.has_nil_QMARK_)
{return this__450726.nil_val;
} else
{return not_found;
}
} else
{if((this__450726.root == null))
{return not_found;
} else
{return this__450726.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__450727 = this;
if(this__450727.edit)
{return this__450727.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__450728 = this;
var tcoll__450729 = this;
if(this__450728.edit)
{if((function (){var G__450730__450731 = o;
if(G__450730__450731)
{if((function (){var or__3824__auto____450732 = (G__450730__450731.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____450732)
{return or__3824__auto____450732;
} else
{return G__450730__450731.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__450730__450731.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__450730__450731);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__450730__450731);
}
})())
{return tcoll__450729.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__450733 = cljs.core.seq.call(null,o);
var tcoll__450734 = tcoll__450729;
while(true){
var temp__3971__auto____450735 = cljs.core.first.call(null,es__450733);
if(cljs.core.truth_(temp__3971__auto____450735))
{var e__450736 = temp__3971__auto____450735;
{
var G__450747 = cljs.core.next.call(null,es__450733);
var G__450748 = tcoll__450734.assoc_BANG_(cljs.core.key.call(null,e__450736),cljs.core.val.call(null,e__450736));
es__450733 = G__450747;
tcoll__450734 = G__450748;
continue;
}
} else
{return tcoll__450734;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__450737 = this;
var tcoll__450738 = this;
if(this__450737.edit)
{if((k == null))
{if((this__450737.nil_val === v))
{} else
{this__450737.nil_val = v;
}
if(this__450737.has_nil_QMARK_)
{} else
{this__450737.count = (this__450737.count + 1);
this__450737.has_nil_QMARK_ = true;
}
return tcoll__450738;
} else
{var added_leaf_QMARK___450739 = (new cljs.core.Box(false));
var node__450740 = (((this__450737.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__450737.root).inode_assoc_BANG_(this__450737.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___450739);
if((node__450740 === this__450737.root))
{} else
{this__450737.root = node__450740;
}
if(added_leaf_QMARK___450739.val)
{this__450737.count = (this__450737.count + 1);
} else
{}
return tcoll__450738;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__450741 = this;
var tcoll__450742 = this;
if(this__450741.edit)
{if((k == null))
{if(this__450741.has_nil_QMARK_)
{this__450741.has_nil_QMARK_ = false;
this__450741.nil_val = null;
this__450741.count = (this__450741.count - 1);
return tcoll__450742;
} else
{return tcoll__450742;
}
} else
{if((this__450741.root == null))
{return tcoll__450742;
} else
{var removed_leaf_QMARK___450743 = (new cljs.core.Box(false));
var node__450744 = this__450741.root.inode_without_BANG_(this__450741.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___450743);
if((node__450744 === this__450741.root))
{} else
{this__450741.root = node__450744;
}
if(cljs.core.truth_((removed_leaf_QMARK___450743[0])))
{this__450741.count = (this__450741.count - 1);
} else
{}
return tcoll__450742;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__450745 = this;
var tcoll__450746 = this;
if(this__450745.edit)
{this__450745.edit = null;
return (new cljs.core.PersistentHashMap(null,this__450745.count,this__450745.root,this__450745.has_nil_QMARK_,this__450745.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__450751 = node;
var stack__450752 = stack;
while(true){
if(!((t__450751 == null)))
{{
var G__450753 = ((ascending_QMARK_)?t__450751.left:t__450751.right);
var G__450754 = cljs.core.conj.call(null,stack__450752,t__450751);
t__450751 = G__450753;
stack__450752 = G__450754;
continue;
}
} else
{return stack__450752;
}
break;
}
});

goog.provide('cljs.core.PersistentTreeMapSeq');

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450755 = this;
var h__2203__auto____450756 = this__450755.__hash;
if(!((h__2203__auto____450756 == null)))
{return h__2203__auto____450756;
} else
{var h__2203__auto____450757 = cljs.core.hash_coll.call(null,coll);
this__450755.__hash = h__2203__auto____450757;
return h__2203__auto____450757;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__450758 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__450759 = this;
var this__450760 = this;
return cljs.core.pr_str.call(null,this__450760);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__450761 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__450762 = this;
if((this__450762.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__450762.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__450763 = this;
return cljs.core.peek.call(null,this__450763.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__450764 = this;
var t__450765 = cljs.core.first.call(null,this__450764.stack);
var next_stack__450766 = cljs.core.tree_map_seq_push.call(null,((this__450764.ascending_QMARK_)?t__450765.right:t__450765.left),cljs.core.next.call(null,this__450764.stack),this__450764.ascending_QMARK_);
if(!((next_stack__450766 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__450766,this__450764.ascending_QMARK_,(this__450764.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450767 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__450768 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__450768.stack,this__450768.ascending_QMARK_,this__450768.cnt,this__450768.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__450769 = this;
return this__450769.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450770 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__450770.meta);
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____450772 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____450772)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____450772;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____450774 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____450774)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____450774;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__450778 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__450778))
{return cljs.core.deref.call(null,init__450778);
} else
{var init__450779 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__450778):init__450778);
if(cljs.core.reduced_QMARK_.call(null,init__450779))
{return cljs.core.deref.call(null,init__450779);
} else
{var init__450780 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__450779):init__450779);
if(cljs.core.reduced_QMARK_.call(null,init__450780))
{return cljs.core.deref.call(null,init__450780);
} else
{return init__450780;
}
}
}
});

goog.provide('cljs.core.BlackNode');

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450783 = this;
var h__2203__auto____450784 = this__450783.__hash;
if(!((h__2203__auto____450784 == null)))
{return h__2203__auto____450784;
} else
{var h__2203__auto____450785 = cljs.core.hash_coll.call(null,coll);
this__450783.__hash = h__2203__auto____450785;
return h__2203__auto____450785;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__450786 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__450787 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__450788 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__450788.key,this__450788.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__450836 = null;
var G__450836__2 = (function (this_sym450789,k){
var this__450791 = this;
var this_sym450789__450792 = this;
var node__450793 = this_sym450789__450792;
return node__450793.cljs$core$ILookup$_lookup$arity$2(node__450793,k);
});
var G__450836__3 = (function (this_sym450790,k,not_found){
var this__450791 = this;
var this_sym450790__450794 = this;
var node__450795 = this_sym450790__450794;
return node__450795.cljs$core$ILookup$_lookup$arity$3(node__450795,k,not_found);
});
G__450836 = function(this_sym450790,k,not_found){
switch(arguments.length){
case 2:
return G__450836__2.call(this,this_sym450790,k);
case 3:
return G__450836__3.call(this,this_sym450790,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__450836;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym450781,args450782){
var this__450796 = this;
return this_sym450781.call.apply(this_sym450781,[this_sym450781].concat(args450782.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__450797 = this;
return cljs.core.PersistentVector.fromArray([this__450797.key,this__450797.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__450798 = this;
return this__450798.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__450799 = this;
return this__450799.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__450800 = this;
var node__450801 = this;
return ins.balance_right(node__450801);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__450802 = this;
var node__450803 = this;
return (new cljs.core.RedNode(this__450802.key,this__450802.val,this__450802.left,this__450802.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__450804 = this;
var node__450805 = this;
return cljs.core.balance_right_del.call(null,this__450804.key,this__450804.val,this__450804.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__450806 = this;
var node__450807 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__450808 = this;
var node__450809 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__450809,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__450810 = this;
var node__450811 = this;
return cljs.core.balance_left_del.call(null,this__450810.key,this__450810.val,del,this__450810.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__450812 = this;
var node__450813 = this;
return ins.balance_left(node__450813);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__450814 = this;
var node__450815 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__450815,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__450837 = null;
var G__450837__0 = (function (){
var this__450816 = this;
var this__450818 = this;
return cljs.core.pr_str.call(null,this__450818);
});
G__450837 = function(){
switch(arguments.length){
case 0:
return G__450837__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__450837;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__450819 = this;
var node__450820 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__450820,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__450821 = this;
var node__450822 = this;
return node__450822;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__450823 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__450824 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__450825 = this;
return cljs.core.list.call(null,this__450825.key,this__450825.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__450826 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__450827 = this;
return this__450827.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__450828 = this;
return cljs.core.PersistentVector.fromArray([this__450828.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__450829 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__450829.key,this__450829.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450830 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__450831 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__450831.key,this__450831.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__450832 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__450833 = this;
if((n === 0))
{return this__450833.key;
} else
{if((n === 1))
{return this__450833.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__450834 = this;
if((n === 0))
{return this__450834.key;
} else
{if((n === 1))
{return this__450834.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__450835 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

goog.provide('cljs.core.RedNode');

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450840 = this;
var h__2203__auto____450841 = this__450840.__hash;
if(!((h__2203__auto____450841 == null)))
{return h__2203__auto____450841;
} else
{var h__2203__auto____450842 = cljs.core.hash_coll.call(null,coll);
this__450840.__hash = h__2203__auto____450842;
return h__2203__auto____450842;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__450843 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__450844 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__450845 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__450845.key,this__450845.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__450893 = null;
var G__450893__2 = (function (this_sym450846,k){
var this__450848 = this;
var this_sym450846__450849 = this;
var node__450850 = this_sym450846__450849;
return node__450850.cljs$core$ILookup$_lookup$arity$2(node__450850,k);
});
var G__450893__3 = (function (this_sym450847,k,not_found){
var this__450848 = this;
var this_sym450847__450851 = this;
var node__450852 = this_sym450847__450851;
return node__450852.cljs$core$ILookup$_lookup$arity$3(node__450852,k,not_found);
});
G__450893 = function(this_sym450847,k,not_found){
switch(arguments.length){
case 2:
return G__450893__2.call(this,this_sym450847,k);
case 3:
return G__450893__3.call(this,this_sym450847,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__450893;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym450838,args450839){
var this__450853 = this;
return this_sym450838.call.apply(this_sym450838,[this_sym450838].concat(args450839.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__450854 = this;
return cljs.core.PersistentVector.fromArray([this__450854.key,this__450854.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__450855 = this;
return this__450855.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__450856 = this;
return this__450856.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__450857 = this;
var node__450858 = this;
return (new cljs.core.RedNode(this__450857.key,this__450857.val,this__450857.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__450859 = this;
var node__450860 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__450861 = this;
var node__450862 = this;
return (new cljs.core.RedNode(this__450861.key,this__450861.val,this__450861.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__450863 = this;
var node__450864 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__450865 = this;
var node__450866 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__450866,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__450867 = this;
var node__450868 = this;
return (new cljs.core.RedNode(this__450867.key,this__450867.val,del,this__450867.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__450869 = this;
var node__450870 = this;
return (new cljs.core.RedNode(this__450869.key,this__450869.val,ins,this__450869.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__450871 = this;
var node__450872 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__450871.left))
{return (new cljs.core.RedNode(this__450871.key,this__450871.val,this__450871.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__450871.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__450871.right))
{return (new cljs.core.RedNode(this__450871.right.key,this__450871.right.val,(new cljs.core.BlackNode(this__450871.key,this__450871.val,this__450871.left,this__450871.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__450871.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__450872,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__450894 = null;
var G__450894__0 = (function (){
var this__450873 = this;
var this__450875 = this;
return cljs.core.pr_str.call(null,this__450875);
});
G__450894 = function(){
switch(arguments.length){
case 0:
return G__450894__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__450894;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__450876 = this;
var node__450877 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__450876.right))
{return (new cljs.core.RedNode(this__450876.key,this__450876.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__450876.left,null)),this__450876.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__450876.left))
{return (new cljs.core.RedNode(this__450876.left.key,this__450876.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__450876.left.left,null)),(new cljs.core.BlackNode(this__450876.key,this__450876.val,this__450876.left.right,this__450876.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__450877,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__450878 = this;
var node__450879 = this;
return (new cljs.core.BlackNode(this__450878.key,this__450878.val,this__450878.left,this__450878.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__450880 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__450881 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__450882 = this;
return cljs.core.list.call(null,this__450882.key,this__450882.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__450883 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__450884 = this;
return this__450884.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__450885 = this;
return cljs.core.PersistentVector.fromArray([this__450885.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__450886 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__450886.key,this__450886.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450887 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__450888 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__450888.key,this__450888.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__450889 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__450890 = this;
if((n === 0))
{return this__450890.key;
} else
{if((n === 1))
{return this__450890.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__450891 = this;
if((n === 0))
{return this__450891.key;
} else
{if((n === 1))
{return this__450891.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__450892 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__450898 = comp.call(null,k,tree.key);
if((c__450898 === 0))
{(found[0] = tree);
return null;
} else
{if((c__450898 < 0))
{var ins__450899 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__450899 == null)))
{return tree.add_left(ins__450899);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__450900 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__450900 == null)))
{return tree.add_right(ins__450900);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__450903 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__450903))
{return (new cljs.core.RedNode(app__450903.key,app__450903.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__450903.left,null)),(new cljs.core.RedNode(right.key,right.val,app__450903.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__450903,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__450904 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__450904))
{return (new cljs.core.RedNode(app__450904.key,app__450904.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__450904.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__450904.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__450904,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__450910 = comp.call(null,k,tree.key);
if((c__450910 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__450910 < 0))
{var del__450911 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____450912 = !((del__450911 == null));
if(or__3824__auto____450912)
{return or__3824__auto____450912;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__450911,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__450911,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__450913 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____450914 = !((del__450913 == null));
if(or__3824__auto____450914)
{return or__3824__auto____450914;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__450913);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__450913,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__450917 = tree.key;
var c__450918 = comp.call(null,k,tk__450917);
if((c__450918 === 0))
{return tree.replace(tk__450917,v,tree.left,tree.right);
} else
{if((c__450918 < 0))
{return tree.replace(tk__450917,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__450917,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});

goog.provide('cljs.core.PersistentTreeMap');

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__450921 = this;
var h__2203__auto____450922 = this__450921.__hash;
if(!((h__2203__auto____450922 == null)))
{return h__2203__auto____450922;
} else
{var h__2203__auto____450923 = cljs.core.hash_imap.call(null,coll);
this__450921.__hash = h__2203__auto____450923;
return h__2203__auto____450923;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__450924 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__450925 = this;
var n__450926 = coll.entry_at(k);
if(!((n__450926 == null)))
{return n__450926.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__450927 = this;
var found__450928 = [null];
var t__450929 = cljs.core.tree_map_add.call(null,this__450927.comp,this__450927.tree,k,v,found__450928);
if((t__450929 == null))
{var found_node__450930 = cljs.core.nth.call(null,found__450928,0);
if(cljs.core._EQ_.call(null,v,found_node__450930.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__450927.comp,cljs.core.tree_map_replace.call(null,this__450927.comp,this__450927.tree,k,v),this__450927.cnt,this__450927.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__450927.comp,t__450929.blacken(),(this__450927.cnt + 1),this__450927.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__450931 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__450965 = null;
var G__450965__2 = (function (this_sym450932,k){
var this__450934 = this;
var this_sym450932__450935 = this;
var coll__450936 = this_sym450932__450935;
return coll__450936.cljs$core$ILookup$_lookup$arity$2(coll__450936,k);
});
var G__450965__3 = (function (this_sym450933,k,not_found){
var this__450934 = this;
var this_sym450933__450937 = this;
var coll__450938 = this_sym450933__450937;
return coll__450938.cljs$core$ILookup$_lookup$arity$3(coll__450938,k,not_found);
});
G__450965 = function(this_sym450933,k,not_found){
switch(arguments.length){
case 2:
return G__450965__2.call(this,this_sym450933,k);
case 3:
return G__450965__3.call(this,this_sym450933,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__450965;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym450919,args450920){
var this__450939 = this;
return this_sym450919.call.apply(this_sym450919,[this_sym450919].concat(args450920.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__450940 = this;
if(!((this__450940.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__450940.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__450941 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__450942 = this;
if((this__450942.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__450942.tree,false,this__450942.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__450943 = this;
var this__450944 = this;
return cljs.core.pr_str.call(null,this__450944);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__450945 = this;
var coll__450946 = this;
var t__450947 = this__450945.tree;
while(true){
if(!((t__450947 == null)))
{var c__450948 = this__450945.comp.call(null,k,t__450947.key);
if((c__450948 === 0))
{return t__450947;
} else
{if((c__450948 < 0))
{{
var G__450966 = t__450947.left;
t__450947 = G__450966;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__450967 = t__450947.right;
t__450947 = G__450967;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__450949 = this;
if((this__450949.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__450949.tree,ascending_QMARK_,this__450949.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__450950 = this;
if((this__450950.cnt > 0))
{var stack__450951 = null;
var t__450952 = this__450950.tree;
while(true){
if(!((t__450952 == null)))
{var c__450953 = this__450950.comp.call(null,k,t__450952.key);
if((c__450953 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__450951,t__450952),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__450953 < 0))
{{
var G__450968 = cljs.core.conj.call(null,stack__450951,t__450952);
var G__450969 = t__450952.left;
stack__450951 = G__450968;
t__450952 = G__450969;
continue;
}
} else
{{
var G__450970 = stack__450951;
var G__450971 = t__450952.right;
stack__450951 = G__450970;
t__450952 = G__450971;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__450953 > 0))
{{
var G__450972 = cljs.core.conj.call(null,stack__450951,t__450952);
var G__450973 = t__450952.right;
stack__450951 = G__450972;
t__450952 = G__450973;
continue;
}
} else
{{
var G__450974 = stack__450951;
var G__450975 = t__450952.left;
stack__450951 = G__450974;
t__450952 = G__450975;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__450951 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__450951,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__450954 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__450955 = this;
return this__450955.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__450956 = this;
if((this__450956.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__450956.tree,true,this__450956.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__450957 = this;
return this__450957.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__450958 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__450959 = this;
return (new cljs.core.PersistentTreeMap(this__450959.comp,this__450959.tree,this__450959.cnt,meta,this__450959.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__450960 = this;
return this__450960.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__450961 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__450961.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__450962 = this;
var found__450963 = [null];
var t__450964 = cljs.core.tree_map_remove.call(null,this__450962.comp,this__450962.tree,k,found__450963);
if((t__450964 == null))
{if((cljs.core.nth.call(null,found__450963,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__450962.comp,null,0,this__450962.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__450962.comp,t__450964.blacken(),(this__450962.cnt - 1),this__450962.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__450978 = cljs.core.seq.call(null,keyvals);
var out__450979 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__450978)
{{
var G__450980 = cljs.core.nnext.call(null,in__450978);
var G__450981 = cljs.core.assoc_BANG_.call(null,out__450979,cljs.core.first.call(null,in__450978),cljs.core.second.call(null,in__450978));
in__450978 = G__450980;
out__450979 = G__450981;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__450979);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__450982){
var keyvals = cljs.core.seq(arglist__450982);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__450983){
var keyvals = cljs.core.seq(arglist__450983);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__450987 = [];
var obj__450988 = {};
var kvs__450989 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__450989)
{ks__450987.push(cljs.core.first.call(null,kvs__450989));
(obj__450988[cljs.core.first.call(null,kvs__450989)] = cljs.core.second.call(null,kvs__450989));
{
var G__450990 = cljs.core.nnext.call(null,kvs__450989);
kvs__450989 = G__450990;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__450987,obj__450988);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__450991){
var keyvals = cljs.core.seq(arglist__450991);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__450994 = cljs.core.seq.call(null,keyvals);
var out__450995 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__450994)
{{
var G__450996 = cljs.core.nnext.call(null,in__450994);
var G__450997 = cljs.core.assoc.call(null,out__450995,cljs.core.first.call(null,in__450994),cljs.core.second.call(null,in__450994));
in__450994 = G__450996;
out__450995 = G__450997;
continue;
}
} else
{return out__450995;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__450998){
var keyvals = cljs.core.seq(arglist__450998);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__451001 = cljs.core.seq.call(null,keyvals);
var out__451002 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__451001)
{{
var G__451003 = cljs.core.nnext.call(null,in__451001);
var G__451004 = cljs.core.assoc.call(null,out__451002,cljs.core.first.call(null,in__451001),cljs.core.second.call(null,in__451001));
in__451001 = G__451003;
out__451002 = G__451004;
continue;
}
} else
{return out__451002;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__451005){
var comparator = cljs.core.first(arglist__451005);
var keyvals = cljs.core.rest(arglist__451005);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__451006_SHARP_,p2__451007_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____451009 = p1__451006_SHARP_;
if(cljs.core.truth_(or__3824__auto____451009))
{return or__3824__auto____451009;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__451007_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__451010){
var maps = cljs.core.seq(arglist__451010);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__451018 = (function (m,e){
var k__451016 = cljs.core.first.call(null,e);
var v__451017 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__451016))
{return cljs.core.assoc.call(null,m,k__451016,f.call(null,cljs.core._lookup.call(null,m,k__451016,null),v__451017));
} else
{return cljs.core.assoc.call(null,m,k__451016,v__451017);
}
});
var merge2__451020 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__451018,(function (){var or__3824__auto____451019 = m1;
if(cljs.core.truth_(or__3824__auto____451019))
{return or__3824__auto____451019;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__451020,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__451021){
var f = cljs.core.first(arglist__451021);
var maps = cljs.core.rest(arglist__451021);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__451026 = cljs.core.ObjMap.EMPTY;
var keys__451027 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__451027)
{var key__451028 = cljs.core.first.call(null,keys__451027);
var entry__451029 = cljs.core._lookup.call(null,map,key__451028,"\uFDD0'cljs.core/not-found");
{
var G__451030 = ((cljs.core.not_EQ_.call(null,entry__451029,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__451026,key__451028,entry__451029):ret__451026);
var G__451031 = cljs.core.next.call(null,keys__451027);
ret__451026 = G__451030;
keys__451027 = G__451031;
continue;
}
} else
{return ret__451026;
}
break;
}
});

goog.provide('cljs.core.PersistentHashSet');

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__451035 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__451035.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__451036 = this;
var h__2203__auto____451037 = this__451036.__hash;
if(!((h__2203__auto____451037 == null)))
{return h__2203__auto____451037;
} else
{var h__2203__auto____451038 = cljs.core.hash_iset.call(null,coll);
this__451036.__hash = h__2203__auto____451038;
return h__2203__auto____451038;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__451039 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__451040 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__451040.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__451061 = null;
var G__451061__2 = (function (this_sym451041,k){
var this__451043 = this;
var this_sym451041__451044 = this;
var coll__451045 = this_sym451041__451044;
return coll__451045.cljs$core$ILookup$_lookup$arity$2(coll__451045,k);
});
var G__451061__3 = (function (this_sym451042,k,not_found){
var this__451043 = this;
var this_sym451042__451046 = this;
var coll__451047 = this_sym451042__451046;
return coll__451047.cljs$core$ILookup$_lookup$arity$3(coll__451047,k,not_found);
});
G__451061 = function(this_sym451042,k,not_found){
switch(arguments.length){
case 2:
return G__451061__2.call(this,this_sym451042,k);
case 3:
return G__451061__3.call(this,this_sym451042,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__451061;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym451033,args451034){
var this__451048 = this;
return this_sym451033.call.apply(this_sym451033,[this_sym451033].concat(args451034.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__451049 = this;
return (new cljs.core.PersistentHashSet(this__451049.meta,cljs.core.assoc.call(null,this__451049.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__451050 = this;
var this__451051 = this;
return cljs.core.pr_str.call(null,this__451051);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__451052 = this;
return cljs.core.keys.call(null,this__451052.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__451053 = this;
return (new cljs.core.PersistentHashSet(this__451053.meta,cljs.core.dissoc.call(null,this__451053.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__451054 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__451055 = this;
var and__3822__auto____451056 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____451056)
{var and__3822__auto____451057 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____451057)
{return cljs.core.every_QMARK_.call(null,(function (p1__451032_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__451032_SHARP_);
}),other);
} else
{return and__3822__auto____451057;
}
} else
{return and__3822__auto____451056;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__451058 = this;
return (new cljs.core.PersistentHashSet(meta,this__451058.hash_map,this__451058.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__451059 = this;
return this__451059.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__451060 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__451060.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__451062 = cljs.core.count.call(null,items);
var i__451063 = 0;
var out__451064 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__451063 < len__451062))
{{
var G__451065 = (i__451063 + 1);
var G__451066 = cljs.core.conj_BANG_.call(null,out__451064,(items[i__451063]));
i__451063 = G__451065;
out__451064 = G__451066;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__451064);
}
break;
}
});

goog.provide('cljs.core.TransientHashSet');

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__451084 = null;
var G__451084__2 = (function (this_sym451070,k){
var this__451072 = this;
var this_sym451070__451073 = this;
var tcoll__451074 = this_sym451070__451073;
if((cljs.core._lookup.call(null,this__451072.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__451084__3 = (function (this_sym451071,k,not_found){
var this__451072 = this;
var this_sym451071__451075 = this;
var tcoll__451076 = this_sym451071__451075;
if((cljs.core._lookup.call(null,this__451072.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__451084 = function(this_sym451071,k,not_found){
switch(arguments.length){
case 2:
return G__451084__2.call(this,this_sym451071,k);
case 3:
return G__451084__3.call(this,this_sym451071,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__451084;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym451068,args451069){
var this__451077 = this;
return this_sym451068.call.apply(this_sym451068,[this_sym451068].concat(args451069.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__451078 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__451079 = this;
if((cljs.core._lookup.call(null,this__451079.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__451080 = this;
return cljs.core.count.call(null,this__451080.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__451081 = this;
this__451081.transient_map = cljs.core.dissoc_BANG_.call(null,this__451081.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__451082 = this;
this__451082.transient_map = cljs.core.assoc_BANG_.call(null,this__451082.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__451083 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__451083.transient_map),null));
});
cljs.core.TransientHashSet;

goog.provide('cljs.core.PersistentTreeSet');

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__451087 = this;
var h__2203__auto____451088 = this__451087.__hash;
if(!((h__2203__auto____451088 == null)))
{return h__2203__auto____451088;
} else
{var h__2203__auto____451089 = cljs.core.hash_iset.call(null,coll);
this__451087.__hash = h__2203__auto____451089;
return h__2203__auto____451089;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__451090 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__451091 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__451091.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__451117 = null;
var G__451117__2 = (function (this_sym451092,k){
var this__451094 = this;
var this_sym451092__451095 = this;
var coll__451096 = this_sym451092__451095;
return coll__451096.cljs$core$ILookup$_lookup$arity$2(coll__451096,k);
});
var G__451117__3 = (function (this_sym451093,k,not_found){
var this__451094 = this;
var this_sym451093__451097 = this;
var coll__451098 = this_sym451093__451097;
return coll__451098.cljs$core$ILookup$_lookup$arity$3(coll__451098,k,not_found);
});
G__451117 = function(this_sym451093,k,not_found){
switch(arguments.length){
case 2:
return G__451117__2.call(this,this_sym451093,k);
case 3:
return G__451117__3.call(this,this_sym451093,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__451117;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym451085,args451086){
var this__451099 = this;
return this_sym451085.call.apply(this_sym451085,[this_sym451085].concat(args451086.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__451100 = this;
return (new cljs.core.PersistentTreeSet(this__451100.meta,cljs.core.assoc.call(null,this__451100.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__451101 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__451101.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__451102 = this;
var this__451103 = this;
return cljs.core.pr_str.call(null,this__451103);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__451104 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__451104.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__451105 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__451105.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__451106 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__451107 = this;
return cljs.core._comparator.call(null,this__451107.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__451108 = this;
return cljs.core.keys.call(null,this__451108.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__451109 = this;
return (new cljs.core.PersistentTreeSet(this__451109.meta,cljs.core.dissoc.call(null,this__451109.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__451110 = this;
return cljs.core.count.call(null,this__451110.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__451111 = this;
var and__3822__auto____451112 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____451112)
{var and__3822__auto____451113 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____451113)
{return cljs.core.every_QMARK_.call(null,(function (p1__451067_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__451067_SHARP_);
}),other);
} else
{return and__3822__auto____451113;
}
} else
{return and__3822__auto____451112;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__451114 = this;
return (new cljs.core.PersistentTreeSet(meta,this__451114.tree_map,this__451114.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__451115 = this;
return this__451115.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__451116 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__451116.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__451122__delegate = function (keys){
var in__451120 = cljs.core.seq.call(null,keys);
var out__451121 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__451120))
{{
var G__451123 = cljs.core.next.call(null,in__451120);
var G__451124 = cljs.core.conj_BANG_.call(null,out__451121,cljs.core.first.call(null,in__451120));
in__451120 = G__451123;
out__451121 = G__451124;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__451121);
}
break;
}
};
var G__451122 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__451122__delegate.call(this, keys);
};
G__451122.cljs$lang$maxFixedArity = 0;
G__451122.cljs$lang$applyTo = (function (arglist__451125){
var keys = cljs.core.seq(arglist__451125);;
return G__451122__delegate(keys);
});
G__451122.cljs$lang$arity$variadic = G__451122__delegate;
return G__451122;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__451126){
var keys = cljs.core.seq(arglist__451126);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__451128){
var comparator = cljs.core.first(arglist__451128);
var keys = cljs.core.rest(arglist__451128);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__451134 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____451135 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____451135))
{var e__451136 = temp__3971__auto____451135;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__451136));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__451134,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__451127_SHARP_){
var temp__3971__auto____451137 = cljs.core.find.call(null,smap,p1__451127_SHARP_);
if(cljs.core.truth_(temp__3971__auto____451137))
{var e__451138 = temp__3971__auto____451137;
return cljs.core.second.call(null,e__451138);
} else
{return p1__451127_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__451168 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__451161,seen){
while(true){
var vec__451162__451163 = p__451161;
var f__451164 = cljs.core.nth.call(null,vec__451162__451163,0,null);
var xs__451165 = vec__451162__451163;
var temp__3974__auto____451166 = cljs.core.seq.call(null,xs__451165);
if(temp__3974__auto____451166)
{var s__451167 = temp__3974__auto____451166;
if(cljs.core.contains_QMARK_.call(null,seen,f__451164))
{{
var G__451169 = cljs.core.rest.call(null,s__451167);
var G__451170 = seen;
p__451161 = G__451169;
seen = G__451170;
continue;
}
} else
{return cljs.core.cons.call(null,f__451164,step.call(null,cljs.core.rest.call(null,s__451167),cljs.core.conj.call(null,seen,f__451164)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__451168.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__451173 = cljs.core.PersistentVector.EMPTY;
var s__451174 = s;
while(true){
if(cljs.core.next.call(null,s__451174))
{{
var G__451175 = cljs.core.conj.call(null,ret__451173,cljs.core.first.call(null,s__451174));
var G__451176 = cljs.core.next.call(null,s__451174);
ret__451173 = G__451175;
s__451174 = G__451176;
continue;
}
} else
{return cljs.core.seq.call(null,ret__451173);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3824__auto____451179 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____451179)
{return or__3824__auto____451179;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__451180 = x.lastIndexOf("/");
if((i__451180 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__451180 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____451183 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____451183)
{return or__3824__auto____451183;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__451184 = x.lastIndexOf("/");
if((i__451184 > -1))
{return cljs.core.subs.call(null,x,2,i__451184);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__451191 = cljs.core.ObjMap.EMPTY;
var ks__451192 = cljs.core.seq.call(null,keys);
var vs__451193 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____451194 = ks__451192;
if(and__3822__auto____451194)
{return vs__451193;
} else
{return and__3822__auto____451194;
}
})())
{{
var G__451195 = cljs.core.assoc.call(null,map__451191,cljs.core.first.call(null,ks__451192),cljs.core.first.call(null,vs__451193));
var G__451196 = cljs.core.next.call(null,ks__451192);
var G__451197 = cljs.core.next.call(null,vs__451193);
map__451191 = G__451195;
ks__451192 = G__451196;
vs__451193 = G__451197;
continue;
}
} else
{return map__451191;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__451200__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__451185_SHARP_,p2__451186_SHARP_){
return max_key.call(null,k,p1__451185_SHARP_,p2__451186_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__451200 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__451200__delegate.call(this, k, x, y, more);
};
G__451200.cljs$lang$maxFixedArity = 3;
G__451200.cljs$lang$applyTo = (function (arglist__451201){
var k = cljs.core.first(arglist__451201);
var x = cljs.core.first(cljs.core.next(arglist__451201));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__451201)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__451201)));
return G__451200__delegate(k, x, y, more);
});
G__451200.cljs$lang$arity$variadic = G__451200__delegate;
return G__451200;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__451202__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__451198_SHARP_,p2__451199_SHARP_){
return min_key.call(null,k,p1__451198_SHARP_,p2__451199_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__451202 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__451202__delegate.call(this, k, x, y, more);
};
G__451202.cljs$lang$maxFixedArity = 3;
G__451202.cljs$lang$applyTo = (function (arglist__451203){
var k = cljs.core.first(arglist__451203);
var x = cljs.core.first(cljs.core.next(arglist__451203));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__451203)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__451203)));
return G__451202__delegate(k, x, y, more);
});
G__451202.cljs$lang$arity$variadic = G__451202__delegate;
return G__451202;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____451206 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____451206)
{var s__451207 = temp__3974__auto____451206;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__451207),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__451207)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____451210 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____451210)
{var s__451211 = temp__3974__auto____451210;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__451211))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__451211),take_while.call(null,pred,cljs.core.rest.call(null,s__451211)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__451213 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__451213.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__451225 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____451226 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____451226))
{var vec__451227__451228 = temp__3974__auto____451226;
var e__451229 = cljs.core.nth.call(null,vec__451227__451228,0,null);
var s__451230 = vec__451227__451228;
if(cljs.core.truth_(include__451225.call(null,e__451229)))
{return s__451230;
} else
{return cljs.core.next.call(null,s__451230);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__451225,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____451231 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____451231))
{var vec__451232__451233 = temp__3974__auto____451231;
var e__451234 = cljs.core.nth.call(null,vec__451232__451233,0,null);
var s__451235 = vec__451232__451233;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__451234))?s__451235:cljs.core.next.call(null,s__451235)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__451247 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____451248 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____451248))
{var vec__451249__451250 = temp__3974__auto____451248;
var e__451251 = cljs.core.nth.call(null,vec__451249__451250,0,null);
var s__451252 = vec__451249__451250;
if(cljs.core.truth_(include__451247.call(null,e__451251)))
{return s__451252;
} else
{return cljs.core.next.call(null,s__451252);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__451247,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____451253 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____451253))
{var vec__451254__451255 = temp__3974__auto____451253;
var e__451256 = cljs.core.nth.call(null,vec__451254__451255,0,null);
var s__451257 = vec__451254__451255;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__451256))?s__451257:cljs.core.next.call(null,s__451257)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

goog.provide('cljs.core.Range');

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__451258 = this;
var h__2203__auto____451259 = this__451258.__hash;
if(!((h__2203__auto____451259 == null)))
{return h__2203__auto____451259;
} else
{var h__2203__auto____451260 = cljs.core.hash_coll.call(null,rng);
this__451258.__hash = h__2203__auto____451260;
return h__2203__auto____451260;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__451261 = this;
if((this__451261.step > 0))
{if(((this__451261.start + this__451261.step) < this__451261.end))
{return (new cljs.core.Range(this__451261.meta,(this__451261.start + this__451261.step),this__451261.end,this__451261.step,null));
} else
{return null;
}
} else
{if(((this__451261.start + this__451261.step) > this__451261.end))
{return (new cljs.core.Range(this__451261.meta,(this__451261.start + this__451261.step),this__451261.end,this__451261.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__451262 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__451263 = this;
var this__451264 = this;
return cljs.core.pr_str.call(null,this__451264);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__451265 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__451266 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__451267 = this;
if((this__451267.step > 0))
{if((this__451267.start < this__451267.end))
{return rng;
} else
{return null;
}
} else
{if((this__451267.start > this__451267.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__451268 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__451268.end - this__451268.start) / this__451268.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__451269 = this;
return this__451269.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__451270 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__451270.meta,(this__451270.start + this__451270.step),this__451270.end,this__451270.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__451271 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__451272 = this;
return (new cljs.core.Range(meta,this__451272.start,this__451272.end,this__451272.step,this__451272.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__451273 = this;
return this__451273.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__451274 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__451274.start + (n * this__451274.step));
} else
{if((function (){var and__3822__auto____451275 = (this__451274.start > this__451274.end);
if(and__3822__auto____451275)
{return (this__451274.step === 0);
} else
{return and__3822__auto____451275;
}
})())
{return this__451274.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__451276 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__451276.start + (n * this__451276.step));
} else
{if((function (){var and__3822__auto____451277 = (this__451276.start > this__451276.end);
if(and__3822__auto____451277)
{return (this__451276.step === 0);
} else
{return and__3822__auto____451277;
}
})())
{return this__451276.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__451278 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__451278.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____451281 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____451281)
{var s__451282 = temp__3974__auto____451281;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__451282),take_nth.call(null,n,cljs.core.drop.call(null,n,s__451282)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____451289 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____451289)
{var s__451290 = temp__3974__auto____451289;
var fst__451291 = cljs.core.first.call(null,s__451290);
var fv__451292 = f.call(null,fst__451291);
var run__451293 = cljs.core.cons.call(null,fst__451291,cljs.core.take_while.call(null,(function (p1__451283_SHARP_){
return cljs.core._EQ_.call(null,fv__451292,f.call(null,p1__451283_SHARP_));
}),cljs.core.next.call(null,s__451290)));
return cljs.core.cons.call(null,run__451293,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__451293),s__451290))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____451308 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____451308)
{var s__451309 = temp__3971__auto____451308;
return reductions.call(null,f,cljs.core.first.call(null,s__451309),cljs.core.rest.call(null,s__451309));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____451310 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____451310)
{var s__451311 = temp__3974__auto____451310;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__451311)),cljs.core.rest.call(null,s__451311));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__451314 = null;
var G__451314__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__451314__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__451314__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__451314__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__451314__4 = (function() { 
var G__451315__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__451315 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__451315__delegate.call(this, x, y, z, args);
};
G__451315.cljs$lang$maxFixedArity = 3;
G__451315.cljs$lang$applyTo = (function (arglist__451316){
var x = cljs.core.first(arglist__451316);
var y = cljs.core.first(cljs.core.next(arglist__451316));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__451316)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__451316)));
return G__451315__delegate(x, y, z, args);
});
G__451315.cljs$lang$arity$variadic = G__451315__delegate;
return G__451315;
})()
;
G__451314 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__451314__0.call(this);
case 1:
return G__451314__1.call(this,x);
case 2:
return G__451314__2.call(this,x,y);
case 3:
return G__451314__3.call(this,x,y,z);
default:
return G__451314__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__451314.cljs$lang$maxFixedArity = 3;
G__451314.cljs$lang$applyTo = G__451314__4.cljs$lang$applyTo;
return G__451314;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__451317 = null;
var G__451317__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__451317__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__451317__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__451317__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__451317__4 = (function() { 
var G__451318__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__451318 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__451318__delegate.call(this, x, y, z, args);
};
G__451318.cljs$lang$maxFixedArity = 3;
G__451318.cljs$lang$applyTo = (function (arglist__451319){
var x = cljs.core.first(arglist__451319);
var y = cljs.core.first(cljs.core.next(arglist__451319));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__451319)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__451319)));
return G__451318__delegate(x, y, z, args);
});
G__451318.cljs$lang$arity$variadic = G__451318__delegate;
return G__451318;
})()
;
G__451317 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__451317__0.call(this);
case 1:
return G__451317__1.call(this,x);
case 2:
return G__451317__2.call(this,x,y);
case 3:
return G__451317__3.call(this,x,y,z);
default:
return G__451317__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__451317.cljs$lang$maxFixedArity = 3;
G__451317.cljs$lang$applyTo = G__451317__4.cljs$lang$applyTo;
return G__451317;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__451320 = null;
var G__451320__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__451320__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__451320__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__451320__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__451320__4 = (function() { 
var G__451321__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__451321 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__451321__delegate.call(this, x, y, z, args);
};
G__451321.cljs$lang$maxFixedArity = 3;
G__451321.cljs$lang$applyTo = (function (arglist__451322){
var x = cljs.core.first(arglist__451322);
var y = cljs.core.first(cljs.core.next(arglist__451322));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__451322)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__451322)));
return G__451321__delegate(x, y, z, args);
});
G__451321.cljs$lang$arity$variadic = G__451321__delegate;
return G__451321;
})()
;
G__451320 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__451320__0.call(this);
case 1:
return G__451320__1.call(this,x);
case 2:
return G__451320__2.call(this,x,y);
case 3:
return G__451320__3.call(this,x,y,z);
default:
return G__451320__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__451320.cljs$lang$maxFixedArity = 3;
G__451320.cljs$lang$applyTo = G__451320__4.cljs$lang$applyTo;
return G__451320;
})()
});
var juxt__4 = (function() { 
var G__451323__delegate = function (f,g,h,fs){
var fs__451313 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__451324 = null;
var G__451324__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__451294_SHARP_,p2__451295_SHARP_){
return cljs.core.conj.call(null,p1__451294_SHARP_,p2__451295_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__451313);
});
var G__451324__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__451296_SHARP_,p2__451297_SHARP_){
return cljs.core.conj.call(null,p1__451296_SHARP_,p2__451297_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__451313);
});
var G__451324__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__451298_SHARP_,p2__451299_SHARP_){
return cljs.core.conj.call(null,p1__451298_SHARP_,p2__451299_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__451313);
});
var G__451324__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__451300_SHARP_,p2__451301_SHARP_){
return cljs.core.conj.call(null,p1__451300_SHARP_,p2__451301_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__451313);
});
var G__451324__4 = (function() { 
var G__451325__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__451302_SHARP_,p2__451303_SHARP_){
return cljs.core.conj.call(null,p1__451302_SHARP_,cljs.core.apply.call(null,p2__451303_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__451313);
};
var G__451325 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__451325__delegate.call(this, x, y, z, args);
};
G__451325.cljs$lang$maxFixedArity = 3;
G__451325.cljs$lang$applyTo = (function (arglist__451326){
var x = cljs.core.first(arglist__451326);
var y = cljs.core.first(cljs.core.next(arglist__451326));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__451326)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__451326)));
return G__451325__delegate(x, y, z, args);
});
G__451325.cljs$lang$arity$variadic = G__451325__delegate;
return G__451325;
})()
;
G__451324 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__451324__0.call(this);
case 1:
return G__451324__1.call(this,x);
case 2:
return G__451324__2.call(this,x,y);
case 3:
return G__451324__3.call(this,x,y,z);
default:
return G__451324__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__451324.cljs$lang$maxFixedArity = 3;
G__451324.cljs$lang$applyTo = G__451324__4.cljs$lang$applyTo;
return G__451324;
})()
};
var G__451323 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__451323__delegate.call(this, f, g, h, fs);
};
G__451323.cljs$lang$maxFixedArity = 3;
G__451323.cljs$lang$applyTo = (function (arglist__451327){
var f = cljs.core.first(arglist__451327);
var g = cljs.core.first(cljs.core.next(arglist__451327));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__451327)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__451327)));
return G__451323__delegate(f, g, h, fs);
});
G__451323.cljs$lang$arity$variadic = G__451323__delegate;
return G__451323;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__451330 = cljs.core.next.call(null,coll);
coll = G__451330;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____451329 = cljs.core.seq.call(null,coll);
if(and__3822__auto____451329)
{return (n > 0);
} else
{return and__3822__auto____451329;
}
})()))
{{
var G__451331 = (n - 1);
var G__451332 = cljs.core.next.call(null,coll);
n = G__451331;
coll = G__451332;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__451334 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__451334),s))
{if((cljs.core.count.call(null,matches__451334) === 1))
{return cljs.core.first.call(null,matches__451334);
} else
{return cljs.core.vec.call(null,matches__451334);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__451336 = re.exec(s);
if((matches__451336 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__451336) === 1))
{return cljs.core.first.call(null,matches__451336);
} else
{return cljs.core.vec.call(null,matches__451336);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__451341 = cljs.core.re_find.call(null,re,s);
var match_idx__451342 = s.search(re);
var match_str__451343 = ((cljs.core.coll_QMARK_.call(null,match_data__451341))?cljs.core.first.call(null,match_data__451341):match_data__451341);
var post_match__451344 = cljs.core.subs.call(null,s,(match_idx__451342 + cljs.core.count.call(null,match_str__451343)));
if(cljs.core.truth_(match_data__451341))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__451341,re_seq.call(null,re,post_match__451344));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__451351__451352 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___451353 = cljs.core.nth.call(null,vec__451351__451352,0,null);
var flags__451354 = cljs.core.nth.call(null,vec__451351__451352,1,null);
var pattern__451355 = cljs.core.nth.call(null,vec__451351__451352,2,null);
return (new RegExp(pattern__451355,flags__451354));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__451345_SHARP_){
return print_one.call(null,p1__451345_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__451359__451360 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__451359__451360)
{var o__451361 = cljs.core.first.call(null,G__451359__451360);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__451361,writer,opts);
{
var G__451362 = cljs.core.next.call(null,G__451359__451360);
G__451359__451360 = G__451362;
continue;
}
} else
{}
break;
}
return cljs.core._write.call(null,writer,end);
});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var G__451366__451367 = cljs.core.seq.call(null,ss);
while(true){
if(G__451366__451367)
{var s__451368 = cljs.core.first.call(null,G__451366__451367);
cljs.core._write.call(null,writer,s__451368);
{
var G__451369 = cljs.core.next.call(null,G__451366__451367);
G__451366__451367 = G__451369;
continue;
}
} else
{return null;
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (goog.isDef(var_args)) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this, writer, ss);
};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__451370){
var writer = cljs.core.first(arglist__451370);
var ss = cljs.core.rest(arglist__451370);
return write_all__delegate(writer, ss);
});
write_all.cljs$lang$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});

goog.provide('cljs.core.StringBufferWriter');

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var this__451371 = this;
return this__451371.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__451372 = this;
return null;
});
cljs.core.StringBufferWriter;
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____451382 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____451382))
{var and__3822__auto____451386 = (function (){var G__451383__451384 = obj;
if(G__451383__451384)
{if((function (){var or__3824__auto____451385 = (G__451383__451384.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____451385)
{return or__3824__auto____451385;
} else
{return G__451383__451384.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__451383__451384.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__451383__451384);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__451383__451384);
}
})();
if(cljs.core.truth_(and__3822__auto____451386))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____451386;
}
} else
{return and__3822__auto____451382;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____451387 = !((obj == null));
if(and__3822__auto____451387)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____451387;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__451388__451389 = obj;
if(G__451388__451389)
{if((function (){var or__3824__auto____451390 = (G__451388__451389.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____451390)
{return or__3824__auto____451390;
} else
{return G__451388__451389.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__451388__451389.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__451388__451389);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__451388__451389);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null))
{return cljs.core._write.call(null,writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write.call(null,writer,"#<undefined>");
} else
{if("\uFDD0'else")
{if(cljs.core.truth_((function (){var and__3822__auto____451403 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____451403))
{var and__3822__auto____451407 = (function (){var G__451404__451405 = obj;
if(G__451404__451405)
{if((function (){var or__3824__auto____451406 = (G__451404__451405.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____451406)
{return or__3824__auto____451406;
} else
{return G__451404__451405.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__451404__451405.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__451404__451405);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__451404__451405);
}
})();
if(cljs.core.truth_(and__3822__auto____451407))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____451407;
}
} else
{return and__3822__auto____451403;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____451408 = !((obj == null));
if(and__3822__auto____451408)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____451408;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__451409__451410 = obj;
if(G__451409__451410)
{if((function (){var or__3824__auto____451411 = (G__451409__451410.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____451411)
{return or__3824__auto____451411;
} else
{return G__451409__451410.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__451409__451410.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__451409__451410);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__451409__451410);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__451412__451413 = obj;
if(G__451412__451413)
{if((function (){var or__3824__auto____451414 = (G__451412__451413.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____451414)
{return or__3824__auto____451414;
} else
{return G__451412__451413.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__451412__451413.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__451412__451413);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__451412__451413);
}
})())
{return cljs.core.apply.call(null,cljs.core.write_all,writer,cljs.core._pr_seq.call(null,obj,opts));
} else
{if(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj)))
{return cljs.core.write_all.call(null,writer,"#\"",obj.source,"\"");
} else
{if("\uFDD0'else")
{return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(obj)].join(''),">");
} else
{return null;
}
}
}
}
}
} else
{return null;
}
}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer.call(null,cljs.core.first.call(null,objs),writer,opts);
var G__451418__451419 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__451418__451419)
{var obj__451420 = cljs.core.first.call(null,G__451418__451419);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__451420,writer,opts);
{
var G__451421 = cljs.core.next.call(null,G__451418__451419);
G__451418__451419 = G__451421;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__451424 = (new goog.string.StringBuffer());
var writer__451425 = (new cljs.core.StringBufferWriter(sb__451424));
cljs.core.pr_seq_writer.call(null,objs,writer__451425,opts);
cljs.core._flush.call(null,writer__451425);
return sb__451424;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return "";
} else
{return [cljs.core.str(cljs.core.pr_sb_with_opts.call(null,objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return "\n";
} else
{var sb__451427 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__451427.append("\n");
return [cljs.core.str(sb__451427)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print.call(null,cljs.core.pr_str_with_opts.call(null,objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__451428){
var objs = cljs.core.seq(arglist__451428);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__451429){
var objs = cljs.core.seq(arglist__451429);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__451430){
var objs = cljs.core.seq(arglist__451430);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__451431){
var objs = cljs.core.seq(arglist__451431);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__451432){
var objs = cljs.core.seq(arglist__451432);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__451433){
var objs = cljs.core.seq(arglist__451433);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__451434){
var objs = cljs.core.seq(arglist__451434);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__451435){
var objs = cljs.core.seq(arglist__451435);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__451436){
var fmt = cljs.core.first(arglist__451436);
var args = cljs.core.rest(arglist__451436);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__451437 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__451437,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__451438 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__451438,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__451439 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__451439,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____451440 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____451440))
{var nspc__451441 = temp__3974__auto____451440;
return [cljs.core.str(nspc__451441),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____451442 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____451442))
{var nspc__451443 = temp__3974__auto____451442;
return [cljs.core.str(nspc__451443),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__451444 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__451444,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__451446 = (function (n,len){
var ns__451445 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__451445) < len))
{{
var G__451448 = [cljs.core.str("0"),cljs.core.str(ns__451445)].join('');
ns__451445 = G__451448;
continue;
}
} else
{return ns__451445;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__451446.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__451446.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__451446.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__451446.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__451446.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__451446.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__451447 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__451447,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__451449 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__451449,"{",", ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["number"] = true);
(cljs.core._pr_writer["number"] = (function (n,writer,opts){
(1 / 0);
return cljs.core._write.call(null,writer,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__451450 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__451450,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__451451 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__451451,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["boolean"] = true);
(cljs.core._pr_writer["boolean"] = (function (bool,writer,opts){
return cljs.core._write.call(null,writer,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintWithWriter["string"] = true);
(cljs.core._pr_writer["string"] = (function (obj,writer,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{cljs.core._write.call(null,writer,":");
var temp__3974__auto____451452 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____451452))
{var nspc__451453 = temp__3974__auto____451452;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__451453)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____451454 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____451454))
{var nspc__451455 = temp__3974__auto____451454;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__451455)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if("\uFDD0'else")
{if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts)))
{return cljs.core._write.call(null,writer,goog.string.quote(obj));
} else
{return cljs.core._write.call(null,writer,obj);
}
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__451456 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__451456,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
(cljs.core.IPrintWithWriter["array"] = true);
(cljs.core._pr_writer["array"] = (function (a,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintWithWriter["function"] = true);
(cljs.core._pr_writer["function"] = (function (this$,writer,_){
return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core._write.call(null,writer,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintWithWriter$ = true;
Date.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,_){
var normalize__451458 = (function (n,len){
var ns__451457 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__451457) < len))
{{
var G__451460 = [cljs.core.str("0"),cljs.core.str(ns__451457)].join('');
ns__451457 = G__451460;
continue;
}
} else
{return ns__451457;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__451458.call(null,(d.getUTCMonth() + 1),2),"-",normalize__451458.call(null,d.getUTCDate(),2),"T",normalize__451458.call(null,d.getUTCHours(),2),":",normalize__451458.call(null,d.getUTCMinutes(),2),":",normalize__451458.call(null,d.getUTCSeconds(),2),".",normalize__451458.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__451459 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__451459,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

goog.provide('cljs.core.Atom');

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__451461 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__451462 = this;
var G__451463__451464 = cljs.core.seq.call(null,this__451462.watches);
while(true){
if(G__451463__451464)
{var vec__451465__451466 = cljs.core.first.call(null,G__451463__451464);
var key__451467 = cljs.core.nth.call(null,vec__451465__451466,0,null);
var f__451468 = cljs.core.nth.call(null,vec__451465__451466,1,null);
f__451468.call(null,key__451467,this$,oldval,newval);
{
var G__451476 = cljs.core.next.call(null,G__451463__451464);
G__451463__451464 = G__451476;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__451469 = this;
return this$.watches = cljs.core.assoc.call(null,this__451469.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__451470 = this;
return this$.watches = cljs.core.dissoc.call(null,this__451470.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__451471 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__451471.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__451472 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__451472.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__451473 = this;
return this__451473.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__451474 = this;
return this__451474.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__451475 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__451488__delegate = function (x,p__451477){
var map__451483__451484 = p__451477;
var map__451483__451485 = ((cljs.core.seq_QMARK_.call(null,map__451483__451484))?cljs.core.apply.call(null,cljs.core.hash_map,map__451483__451484):map__451483__451484);
var validator__451486 = cljs.core._lookup.call(null,map__451483__451485,"\uFDD0'validator",null);
var meta__451487 = cljs.core._lookup.call(null,map__451483__451485,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__451487,validator__451486,null));
};
var G__451488 = function (x,var_args){
var p__451477 = null;
if (goog.isDef(var_args)) {
  p__451477 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__451488__delegate.call(this, x, p__451477);
};
G__451488.cljs$lang$maxFixedArity = 1;
G__451488.cljs$lang$applyTo = (function (arglist__451489){
var x = cljs.core.first(arglist__451489);
var p__451477 = cljs.core.rest(arglist__451489);
return G__451488__delegate(x, p__451477);
});
G__451488.cljs$lang$arity$variadic = G__451488__delegate;
return G__451488;
})()
;
atom = function(x,var_args){
var p__451477 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____451493 = a.validator;
if(cljs.core.truth_(temp__3974__auto____451493))
{var validate__451494 = temp__3974__auto____451493;
if(cljs.core.truth_(validate__451494.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__451495 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__451495,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__451496__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__451496 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__451496__delegate.call(this, a, f, x, y, z, more);
};
G__451496.cljs$lang$maxFixedArity = 5;
G__451496.cljs$lang$applyTo = (function (arglist__451497){
var a = cljs.core.first(arglist__451497);
var f = cljs.core.first(cljs.core.next(arglist__451497));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__451497)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__451497))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__451497)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__451497)))));
return G__451496__delegate(a, f, x, y, z, more);
});
G__451496.cljs$lang$arity$variadic = G__451496__delegate;
return G__451496;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__451498){
var iref = cljs.core.first(arglist__451498);
var f = cljs.core.first(cljs.core.next(arglist__451498));
var args = cljs.core.rest(cljs.core.next(arglist__451498));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

goog.provide('cljs.core.Delay');

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__451499 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__451499.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__451500 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__451500.state,(function (p__451501){
var map__451502__451503 = p__451501;
var map__451502__451504 = ((cljs.core.seq_QMARK_.call(null,map__451502__451503))?cljs.core.apply.call(null,cljs.core.hash_map,map__451502__451503):map__451502__451503);
var curr_state__451505 = map__451502__451504;
var done__451506 = cljs.core._lookup.call(null,map__451502__451504,"\uFDD0'done",null);
if(cljs.core.truth_(done__451506))
{return curr_state__451505;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__451500.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__451527__451528 = options;
var map__451527__451529 = ((cljs.core.seq_QMARK_.call(null,map__451527__451528))?cljs.core.apply.call(null,cljs.core.hash_map,map__451527__451528):map__451527__451528);
var keywordize_keys__451530 = cljs.core._lookup.call(null,map__451527__451529,"\uFDD0'keywordize-keys",null);
var keyfn__451531 = (cljs.core.truth_(keywordize_keys__451530)?cljs.core.keyword:cljs.core.str);
var f__451546 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2484__auto____451545 = (function iter__451539(s__451540){
return (new cljs.core.LazySeq(null,false,(function (){
var s__451540__451543 = s__451540;
while(true){
if(cljs.core.seq.call(null,s__451540__451543))
{var k__451544 = cljs.core.first.call(null,s__451540__451543);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__451531.call(null,k__451544),thisfn.call(null,(x[k__451544]))], true),iter__451539.call(null,cljs.core.rest.call(null,s__451540__451543)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2484__auto____451545.call(null,cljs.core.js_keys.call(null,x));
})());
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
return f__451546.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__451547){
var x = cljs.core.first(arglist__451547);
var options = cljs.core.rest(arglist__451547);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__451552 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__451556__delegate = function (args){
var temp__3971__auto____451553 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__451552),args,null);
if(cljs.core.truth_(temp__3971__auto____451553))
{var v__451554 = temp__3971__auto____451553;
return v__451554;
} else
{var ret__451555 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__451552,cljs.core.assoc,args,ret__451555);
return ret__451555;
}
};
var G__451556 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__451556__delegate.call(this, args);
};
G__451556.cljs$lang$maxFixedArity = 0;
G__451556.cljs$lang$applyTo = (function (arglist__451557){
var args = cljs.core.seq(arglist__451557);;
return G__451556__delegate(args);
});
G__451556.cljs$lang$arity$variadic = G__451556__delegate;
return G__451556;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__451559 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__451559))
{{
var G__451560 = ret__451559;
f = G__451560;
continue;
}
} else
{return ret__451559;
}
break;
}
});
var trampoline__2 = (function() { 
var G__451561__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__451561 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__451561__delegate.call(this, f, args);
};
G__451561.cljs$lang$maxFixedArity = 1;
G__451561.cljs$lang$applyTo = (function (arglist__451562){
var f = cljs.core.first(arglist__451562);
var args = cljs.core.rest(arglist__451562);
return G__451561__delegate(f, args);
});
G__451561.cljs$lang$arity$variadic = G__451561__delegate;
return G__451561;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__451564 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__451564,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__451564,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____451573 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____451573)
{return or__3824__auto____451573;
} else
{var or__3824__auto____451574 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____451574)
{return or__3824__auto____451574;
} else
{var and__3822__auto____451575 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____451575)
{var and__3822__auto____451576 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____451576)
{var and__3822__auto____451577 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____451577)
{var ret__451578 = true;
var i__451579 = 0;
while(true){
if((function (){var or__3824__auto____451580 = cljs.core.not.call(null,ret__451578);
if(or__3824__auto____451580)
{return or__3824__auto____451580;
} else
{return (i__451579 === cljs.core.count.call(null,parent));
}
})())
{return ret__451578;
} else
{{
var G__451581 = isa_QMARK_.call(null,h,child.call(null,i__451579),parent.call(null,i__451579));
var G__451582 = (i__451579 + 1);
ret__451578 = G__451581;
i__451579 = G__451582;
continue;
}
}
break;
}
} else
{return and__3822__auto____451577;
}
} else
{return and__3822__auto____451576;
}
} else
{return and__3822__auto____451575;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6967))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6971))))].join('')));
}
var tp__451591 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__451592 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__451593 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__451594 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____451595 = ((cljs.core.contains_QMARK_.call(null,tp__451591.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__451593.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__451593.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__451591,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__451594.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__451592,parent,ta__451593),"\uFDD0'descendants":tf__451594.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__451593,tag,td__451592)});
})());
if(cljs.core.truth_(or__3824__auto____451595))
{return or__3824__auto____451595;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__451600 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__451601 = (cljs.core.truth_(parentMap__451600.call(null,tag))?cljs.core.disj.call(null,parentMap__451600.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__451602 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__451601))?cljs.core.assoc.call(null,parentMap__451600,tag,childsParents__451601):cljs.core.dissoc.call(null,parentMap__451600,tag));
var deriv_seq__451603 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__451583_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__451583_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__451583_SHARP_),cljs.core.second.call(null,p1__451583_SHARP_)));
}),cljs.core.seq.call(null,newParents__451602)));
if(cljs.core.contains_QMARK_.call(null,parentMap__451600.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__451584_SHARP_,p2__451585_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__451584_SHARP_,p2__451585_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__451603));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__451611 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____451613 = (cljs.core.truth_((function (){var and__3822__auto____451612 = xprefs__451611;
if(cljs.core.truth_(and__3822__auto____451612))
{return xprefs__451611.call(null,y);
} else
{return and__3822__auto____451612;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____451613))
{return or__3824__auto____451613;
} else
{var or__3824__auto____451615 = (function (){var ps__451614 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__451614) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__451614),prefer_table)))
{} else
{}
{
var G__451618 = cljs.core.rest.call(null,ps__451614);
ps__451614 = G__451618;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____451615))
{return or__3824__auto____451615;
} else
{var or__3824__auto____451617 = (function (){var ps__451616 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__451616) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__451616),y,prefer_table)))
{} else
{}
{
var G__451619 = cljs.core.rest.call(null,ps__451616);
ps__451616 = G__451619;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____451617))
{return or__3824__auto____451617;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____451621 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____451621))
{return or__3824__auto____451621;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__451639 = cljs.core.reduce.call(null,(function (be,p__451631){
var vec__451632__451633 = p__451631;
var k__451634 = cljs.core.nth.call(null,vec__451632__451633,0,null);
var ___451635 = cljs.core.nth.call(null,vec__451632__451633,1,null);
var e__451636 = vec__451632__451633;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__451634))
{var be2__451638 = (cljs.core.truth_((function (){var or__3824__auto____451637 = (be == null);
if(or__3824__auto____451637)
{return or__3824__auto____451637;
} else
{return cljs.core.dominates.call(null,k__451634,cljs.core.first.call(null,be),prefer_table);
}
})())?e__451636:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__451638),k__451634,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__451634),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__451638)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__451638;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__451639))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__451639));
return cljs.core.second.call(null,best_entry__451639);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____451644 = mf;
if(and__3822__auto____451644)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____451644;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2387__auto____451645 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____451646 = (cljs.core._reset[goog.typeOf(x__2387__auto____451645)]);
if(or__3824__auto____451646)
{return or__3824__auto____451646;
} else
{var or__3824__auto____451647 = (cljs.core._reset["_"]);
if(or__3824__auto____451647)
{return or__3824__auto____451647;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____451652 = mf;
if(and__3822__auto____451652)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____451652;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2387__auto____451653 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____451654 = (cljs.core._add_method[goog.typeOf(x__2387__auto____451653)]);
if(or__3824__auto____451654)
{return or__3824__auto____451654;
} else
{var or__3824__auto____451655 = (cljs.core._add_method["_"]);
if(or__3824__auto____451655)
{return or__3824__auto____451655;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____451660 = mf;
if(and__3822__auto____451660)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____451660;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2387__auto____451661 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____451662 = (cljs.core._remove_method[goog.typeOf(x__2387__auto____451661)]);
if(or__3824__auto____451662)
{return or__3824__auto____451662;
} else
{var or__3824__auto____451663 = (cljs.core._remove_method["_"]);
if(or__3824__auto____451663)
{return or__3824__auto____451663;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____451668 = mf;
if(and__3822__auto____451668)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____451668;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2387__auto____451669 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____451670 = (cljs.core._prefer_method[goog.typeOf(x__2387__auto____451669)]);
if(or__3824__auto____451670)
{return or__3824__auto____451670;
} else
{var or__3824__auto____451671 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____451671)
{return or__3824__auto____451671;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____451676 = mf;
if(and__3822__auto____451676)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____451676;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2387__auto____451677 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____451678 = (cljs.core._get_method[goog.typeOf(x__2387__auto____451677)]);
if(or__3824__auto____451678)
{return or__3824__auto____451678;
} else
{var or__3824__auto____451679 = (cljs.core._get_method["_"]);
if(or__3824__auto____451679)
{return or__3824__auto____451679;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____451684 = mf;
if(and__3822__auto____451684)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____451684;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2387__auto____451685 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____451686 = (cljs.core._methods[goog.typeOf(x__2387__auto____451685)]);
if(or__3824__auto____451686)
{return or__3824__auto____451686;
} else
{var or__3824__auto____451687 = (cljs.core._methods["_"]);
if(or__3824__auto____451687)
{return or__3824__auto____451687;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____451692 = mf;
if(and__3822__auto____451692)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____451692;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2387__auto____451693 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____451694 = (cljs.core._prefers[goog.typeOf(x__2387__auto____451693)]);
if(or__3824__auto____451694)
{return or__3824__auto____451694;
} else
{var or__3824__auto____451695 = (cljs.core._prefers["_"]);
if(or__3824__auto____451695)
{return or__3824__auto____451695;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____451700 = mf;
if(and__3822__auto____451700)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____451700;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2387__auto____451701 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____451702 = (cljs.core._dispatch[goog.typeOf(x__2387__auto____451701)]);
if(or__3824__auto____451702)
{return or__3824__auto____451702;
} else
{var or__3824__auto____451703 = (cljs.core._dispatch["_"]);
if(or__3824__auto____451703)
{return or__3824__auto____451703;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__451706 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__451707 = cljs.core._get_method.call(null,mf,dispatch_val__451706);
if(cljs.core.truth_(target_fn__451707))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__451706)].join('')));
}
return cljs.core.apply.call(null,target_fn__451707,args);
});

goog.provide('cljs.core.MultiFn');

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__451708 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__451709 = this;
cljs.core.swap_BANG_.call(null,this__451709.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__451709.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__451709.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__451709.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__451710 = this;
cljs.core.swap_BANG_.call(null,this__451710.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__451710.method_cache,this__451710.method_table,this__451710.cached_hierarchy,this__451710.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__451711 = this;
cljs.core.swap_BANG_.call(null,this__451711.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__451711.method_cache,this__451711.method_table,this__451711.cached_hierarchy,this__451711.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__451712 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__451712.cached_hierarchy),cljs.core.deref.call(null,this__451712.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__451712.method_cache,this__451712.method_table,this__451712.cached_hierarchy,this__451712.hierarchy);
}
var temp__3971__auto____451713 = cljs.core.deref.call(null,this__451712.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____451713))
{var target_fn__451714 = temp__3971__auto____451713;
return target_fn__451714;
} else
{var temp__3971__auto____451715 = cljs.core.find_and_cache_best_method.call(null,this__451712.name,dispatch_val,this__451712.hierarchy,this__451712.method_table,this__451712.prefer_table,this__451712.method_cache,this__451712.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____451715))
{var target_fn__451716 = temp__3971__auto____451715;
return target_fn__451716;
} else
{return cljs.core.deref.call(null,this__451712.method_table).call(null,this__451712.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__451717 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__451717.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__451717.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__451717.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__451717.method_cache,this__451717.method_table,this__451717.cached_hierarchy,this__451717.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__451718 = this;
return cljs.core.deref.call(null,this__451718.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__451719 = this;
return cljs.core.deref.call(null,this__451719.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__451720 = this;
return cljs.core.do_dispatch.call(null,mf,this__451720.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__451722__delegate = function (_,args){
var self__451721 = this;
return cljs.core._dispatch.call(null,self__451721,args);
};
var G__451722 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__451722__delegate.call(this, _, args);
};
G__451722.cljs$lang$maxFixedArity = 1;
G__451722.cljs$lang$applyTo = (function (arglist__451723){
var _ = cljs.core.first(arglist__451723);
var args = cljs.core.rest(arglist__451723);
return G__451722__delegate(_, args);
});
G__451722.cljs$lang$arity$variadic = G__451722__delegate;
return G__451722;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__451724 = this;
return cljs.core._dispatch.call(null,self__451724,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

goog.provide('cljs.core.UUID');

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690646016;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2322__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__2322__auto__,writer__2323__auto__){
return cljs.core._write.call(null,writer__2323__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__451725 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_451727,writer,_){
var this__451726 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__451726.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_451729,_){
var this__451728 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__451728.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__451730 = this;
var and__3822__auto____451731 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____451731)
{return (this__451730.uuid === other.uuid);
} else
{return and__3822__auto____451731;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__451732 = this;
var this__451733 = this;
return cljs.core.pr_str.call(null,this__451733);
});
cljs.core.UUID;
