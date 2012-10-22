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
var x__35401 = (((x == null))?null:x);
if((p[goog.typeOf(x__35401)]))
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
var G__35402__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__35402 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__35402__delegate.call(this, array, i, idxs);
};
G__35402.cljs$lang$maxFixedArity = 2;
G__35402.cljs$lang$applyTo = (function (arglist__35403){
var array = cljs.core.first(arglist__35403);
var i = cljs.core.first(cljs.core.next(arglist__35403));
var idxs = cljs.core.rest(cljs.core.next(arglist__35403));
return G__35402__delegate(array, i, idxs);
});
G__35402.cljs$lang$arity$variadic = G__35402__delegate;
return G__35402;
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
if((function (){var and__3822__auto____35488 = this$;
if(and__3822__auto____35488)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____35488;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2387__auto____35489 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35490 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35489)]);
if(or__3824__auto____35490)
{return or__3824__auto____35490;
} else
{var or__3824__auto____35491 = (cljs.core._invoke["_"]);
if(or__3824__auto____35491)
{return or__3824__auto____35491;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____35492 = this$;
if(and__3822__auto____35492)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____35492;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2387__auto____35493 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35494 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35493)]);
if(or__3824__auto____35494)
{return or__3824__auto____35494;
} else
{var or__3824__auto____35495 = (cljs.core._invoke["_"]);
if(or__3824__auto____35495)
{return or__3824__auto____35495;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____35496 = this$;
if(and__3822__auto____35496)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____35496;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2387__auto____35497 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35498 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35497)]);
if(or__3824__auto____35498)
{return or__3824__auto____35498;
} else
{var or__3824__auto____35499 = (cljs.core._invoke["_"]);
if(or__3824__auto____35499)
{return or__3824__auto____35499;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____35500 = this$;
if(and__3822__auto____35500)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____35500;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2387__auto____35501 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35502 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35501)]);
if(or__3824__auto____35502)
{return or__3824__auto____35502;
} else
{var or__3824__auto____35503 = (cljs.core._invoke["_"]);
if(or__3824__auto____35503)
{return or__3824__auto____35503;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____35504 = this$;
if(and__3822__auto____35504)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____35504;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2387__auto____35505 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35506 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35505)]);
if(or__3824__auto____35506)
{return or__3824__auto____35506;
} else
{var or__3824__auto____35507 = (cljs.core._invoke["_"]);
if(or__3824__auto____35507)
{return or__3824__auto____35507;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____35508 = this$;
if(and__3822__auto____35508)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____35508;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2387__auto____35509 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35510 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35509)]);
if(or__3824__auto____35510)
{return or__3824__auto____35510;
} else
{var or__3824__auto____35511 = (cljs.core._invoke["_"]);
if(or__3824__auto____35511)
{return or__3824__auto____35511;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____35512 = this$;
if(and__3822__auto____35512)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____35512;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2387__auto____35513 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35514 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35513)]);
if(or__3824__auto____35514)
{return or__3824__auto____35514;
} else
{var or__3824__auto____35515 = (cljs.core._invoke["_"]);
if(or__3824__auto____35515)
{return or__3824__auto____35515;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____35516 = this$;
if(and__3822__auto____35516)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____35516;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2387__auto____35517 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35518 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35517)]);
if(or__3824__auto____35518)
{return or__3824__auto____35518;
} else
{var or__3824__auto____35519 = (cljs.core._invoke["_"]);
if(or__3824__auto____35519)
{return or__3824__auto____35519;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____35520 = this$;
if(and__3822__auto____35520)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____35520;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2387__auto____35521 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35522 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35521)]);
if(or__3824__auto____35522)
{return or__3824__auto____35522;
} else
{var or__3824__auto____35523 = (cljs.core._invoke["_"]);
if(or__3824__auto____35523)
{return or__3824__auto____35523;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____35524 = this$;
if(and__3822__auto____35524)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____35524;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2387__auto____35525 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35526 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35525)]);
if(or__3824__auto____35526)
{return or__3824__auto____35526;
} else
{var or__3824__auto____35527 = (cljs.core._invoke["_"]);
if(or__3824__auto____35527)
{return or__3824__auto____35527;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____35528 = this$;
if(and__3822__auto____35528)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____35528;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2387__auto____35529 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35530 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35529)]);
if(or__3824__auto____35530)
{return or__3824__auto____35530;
} else
{var or__3824__auto____35531 = (cljs.core._invoke["_"]);
if(or__3824__auto____35531)
{return or__3824__auto____35531;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____35532 = this$;
if(and__3822__auto____35532)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____35532;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2387__auto____35533 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35534 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35533)]);
if(or__3824__auto____35534)
{return or__3824__auto____35534;
} else
{var or__3824__auto____35535 = (cljs.core._invoke["_"]);
if(or__3824__auto____35535)
{return or__3824__auto____35535;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____35536 = this$;
if(and__3822__auto____35536)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____35536;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2387__auto____35537 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35538 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35537)]);
if(or__3824__auto____35538)
{return or__3824__auto____35538;
} else
{var or__3824__auto____35539 = (cljs.core._invoke["_"]);
if(or__3824__auto____35539)
{return or__3824__auto____35539;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____35540 = this$;
if(and__3822__auto____35540)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____35540;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2387__auto____35541 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35542 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35541)]);
if(or__3824__auto____35542)
{return or__3824__auto____35542;
} else
{var or__3824__auto____35543 = (cljs.core._invoke["_"]);
if(or__3824__auto____35543)
{return or__3824__auto____35543;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____35544 = this$;
if(and__3822__auto____35544)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____35544;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2387__auto____35545 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35546 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35545)]);
if(or__3824__auto____35546)
{return or__3824__auto____35546;
} else
{var or__3824__auto____35547 = (cljs.core._invoke["_"]);
if(or__3824__auto____35547)
{return or__3824__auto____35547;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____35548 = this$;
if(and__3822__auto____35548)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____35548;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2387__auto____35549 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35550 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35549)]);
if(or__3824__auto____35550)
{return or__3824__auto____35550;
} else
{var or__3824__auto____35551 = (cljs.core._invoke["_"]);
if(or__3824__auto____35551)
{return or__3824__auto____35551;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____35552 = this$;
if(and__3822__auto____35552)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____35552;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2387__auto____35553 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35554 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35553)]);
if(or__3824__auto____35554)
{return or__3824__auto____35554;
} else
{var or__3824__auto____35555 = (cljs.core._invoke["_"]);
if(or__3824__auto____35555)
{return or__3824__auto____35555;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____35556 = this$;
if(and__3822__auto____35556)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____35556;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2387__auto____35557 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35558 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35557)]);
if(or__3824__auto____35558)
{return or__3824__auto____35558;
} else
{var or__3824__auto____35559 = (cljs.core._invoke["_"]);
if(or__3824__auto____35559)
{return or__3824__auto____35559;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____35560 = this$;
if(and__3822__auto____35560)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____35560;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2387__auto____35561 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35562 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35561)]);
if(or__3824__auto____35562)
{return or__3824__auto____35562;
} else
{var or__3824__auto____35563 = (cljs.core._invoke["_"]);
if(or__3824__auto____35563)
{return or__3824__auto____35563;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____35564 = this$;
if(and__3822__auto____35564)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____35564;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2387__auto____35565 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35566 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35565)]);
if(or__3824__auto____35566)
{return or__3824__auto____35566;
} else
{var or__3824__auto____35567 = (cljs.core._invoke["_"]);
if(or__3824__auto____35567)
{return or__3824__auto____35567;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____35568 = this$;
if(and__3822__auto____35568)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____35568;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2387__auto____35569 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35570 = (cljs.core._invoke[goog.typeOf(x__2387__auto____35569)]);
if(or__3824__auto____35570)
{return or__3824__auto____35570;
} else
{var or__3824__auto____35571 = (cljs.core._invoke["_"]);
if(or__3824__auto____35571)
{return or__3824__auto____35571;
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
if((function (){var and__3822__auto____35576 = coll;
if(and__3822__auto____35576)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____35576;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2387__auto____35577 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35578 = (cljs.core._count[goog.typeOf(x__2387__auto____35577)]);
if(or__3824__auto____35578)
{return or__3824__auto____35578;
} else
{var or__3824__auto____35579 = (cljs.core._count["_"]);
if(or__3824__auto____35579)
{return or__3824__auto____35579;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____35584 = coll;
if(and__3822__auto____35584)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____35584;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2387__auto____35585 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35586 = (cljs.core._empty[goog.typeOf(x__2387__auto____35585)]);
if(or__3824__auto____35586)
{return or__3824__auto____35586;
} else
{var or__3824__auto____35587 = (cljs.core._empty["_"]);
if(or__3824__auto____35587)
{return or__3824__auto____35587;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____35592 = coll;
if(and__3822__auto____35592)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____35592;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2387__auto____35593 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35594 = (cljs.core._conj[goog.typeOf(x__2387__auto____35593)]);
if(or__3824__auto____35594)
{return or__3824__auto____35594;
} else
{var or__3824__auto____35595 = (cljs.core._conj["_"]);
if(or__3824__auto____35595)
{return or__3824__auto____35595;
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
if((function (){var and__3822__auto____35604 = coll;
if(and__3822__auto____35604)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____35604;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2387__auto____35605 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35606 = (cljs.core._nth[goog.typeOf(x__2387__auto____35605)]);
if(or__3824__auto____35606)
{return or__3824__auto____35606;
} else
{var or__3824__auto____35607 = (cljs.core._nth["_"]);
if(or__3824__auto____35607)
{return or__3824__auto____35607;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____35608 = coll;
if(and__3822__auto____35608)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____35608;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2387__auto____35609 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35610 = (cljs.core._nth[goog.typeOf(x__2387__auto____35609)]);
if(or__3824__auto____35610)
{return or__3824__auto____35610;
} else
{var or__3824__auto____35611 = (cljs.core._nth["_"]);
if(or__3824__auto____35611)
{return or__3824__auto____35611;
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
if((function (){var and__3822__auto____35616 = coll;
if(and__3822__auto____35616)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____35616;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2387__auto____35617 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35618 = (cljs.core._first[goog.typeOf(x__2387__auto____35617)]);
if(or__3824__auto____35618)
{return or__3824__auto____35618;
} else
{var or__3824__auto____35619 = (cljs.core._first["_"]);
if(or__3824__auto____35619)
{return or__3824__auto____35619;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____35624 = coll;
if(and__3822__auto____35624)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____35624;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2387__auto____35625 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35626 = (cljs.core._rest[goog.typeOf(x__2387__auto____35625)]);
if(or__3824__auto____35626)
{return or__3824__auto____35626;
} else
{var or__3824__auto____35627 = (cljs.core._rest["_"]);
if(or__3824__auto____35627)
{return or__3824__auto____35627;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____35632 = coll;
if(and__3822__auto____35632)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____35632;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2387__auto____35633 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35634 = (cljs.core._next[goog.typeOf(x__2387__auto____35633)]);
if(or__3824__auto____35634)
{return or__3824__auto____35634;
} else
{var or__3824__auto____35635 = (cljs.core._next["_"]);
if(or__3824__auto____35635)
{return or__3824__auto____35635;
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
if((function (){var and__3822__auto____35644 = o;
if(and__3822__auto____35644)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____35644;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2387__auto____35645 = (((o == null))?null:o);
return (function (){var or__3824__auto____35646 = (cljs.core._lookup[goog.typeOf(x__2387__auto____35645)]);
if(or__3824__auto____35646)
{return or__3824__auto____35646;
} else
{var or__3824__auto____35647 = (cljs.core._lookup["_"]);
if(or__3824__auto____35647)
{return or__3824__auto____35647;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____35648 = o;
if(and__3822__auto____35648)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____35648;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2387__auto____35649 = (((o == null))?null:o);
return (function (){var or__3824__auto____35650 = (cljs.core._lookup[goog.typeOf(x__2387__auto____35649)]);
if(or__3824__auto____35650)
{return or__3824__auto____35650;
} else
{var or__3824__auto____35651 = (cljs.core._lookup["_"]);
if(or__3824__auto____35651)
{return or__3824__auto____35651;
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
if((function (){var and__3822__auto____35656 = coll;
if(and__3822__auto____35656)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____35656;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2387__auto____35657 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35658 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2387__auto____35657)]);
if(or__3824__auto____35658)
{return or__3824__auto____35658;
} else
{var or__3824__auto____35659 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____35659)
{return or__3824__auto____35659;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____35664 = coll;
if(and__3822__auto____35664)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____35664;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2387__auto____35665 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35666 = (cljs.core._assoc[goog.typeOf(x__2387__auto____35665)]);
if(or__3824__auto____35666)
{return or__3824__auto____35666;
} else
{var or__3824__auto____35667 = (cljs.core._assoc["_"]);
if(or__3824__auto____35667)
{return or__3824__auto____35667;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____35672 = coll;
if(and__3822__auto____35672)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____35672;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2387__auto____35673 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35674 = (cljs.core._dissoc[goog.typeOf(x__2387__auto____35673)]);
if(or__3824__auto____35674)
{return or__3824__auto____35674;
} else
{var or__3824__auto____35675 = (cljs.core._dissoc["_"]);
if(or__3824__auto____35675)
{return or__3824__auto____35675;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____35680 = coll;
if(and__3822__auto____35680)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____35680;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2387__auto____35681 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35682 = (cljs.core._key[goog.typeOf(x__2387__auto____35681)]);
if(or__3824__auto____35682)
{return or__3824__auto____35682;
} else
{var or__3824__auto____35683 = (cljs.core._key["_"]);
if(or__3824__auto____35683)
{return or__3824__auto____35683;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____35688 = coll;
if(and__3822__auto____35688)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____35688;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2387__auto____35689 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35690 = (cljs.core._val[goog.typeOf(x__2387__auto____35689)]);
if(or__3824__auto____35690)
{return or__3824__auto____35690;
} else
{var or__3824__auto____35691 = (cljs.core._val["_"]);
if(or__3824__auto____35691)
{return or__3824__auto____35691;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____35696 = coll;
if(and__3822__auto____35696)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____35696;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2387__auto____35697 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35698 = (cljs.core._disjoin[goog.typeOf(x__2387__auto____35697)]);
if(or__3824__auto____35698)
{return or__3824__auto____35698;
} else
{var or__3824__auto____35699 = (cljs.core._disjoin["_"]);
if(or__3824__auto____35699)
{return or__3824__auto____35699;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____35704 = coll;
if(and__3822__auto____35704)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____35704;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2387__auto____35705 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35706 = (cljs.core._peek[goog.typeOf(x__2387__auto____35705)]);
if(or__3824__auto____35706)
{return or__3824__auto____35706;
} else
{var or__3824__auto____35707 = (cljs.core._peek["_"]);
if(or__3824__auto____35707)
{return or__3824__auto____35707;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____35712 = coll;
if(and__3822__auto____35712)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____35712;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2387__auto____35713 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35714 = (cljs.core._pop[goog.typeOf(x__2387__auto____35713)]);
if(or__3824__auto____35714)
{return or__3824__auto____35714;
} else
{var or__3824__auto____35715 = (cljs.core._pop["_"]);
if(or__3824__auto____35715)
{return or__3824__auto____35715;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____35720 = coll;
if(and__3822__auto____35720)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____35720;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2387__auto____35721 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35722 = (cljs.core._assoc_n[goog.typeOf(x__2387__auto____35721)]);
if(or__3824__auto____35722)
{return or__3824__auto____35722;
} else
{var or__3824__auto____35723 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____35723)
{return or__3824__auto____35723;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____35728 = o;
if(and__3822__auto____35728)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____35728;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2387__auto____35729 = (((o == null))?null:o);
return (function (){var or__3824__auto____35730 = (cljs.core._deref[goog.typeOf(x__2387__auto____35729)]);
if(or__3824__auto____35730)
{return or__3824__auto____35730;
} else
{var or__3824__auto____35731 = (cljs.core._deref["_"]);
if(or__3824__auto____35731)
{return or__3824__auto____35731;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____35736 = o;
if(and__3822__auto____35736)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____35736;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2387__auto____35737 = (((o == null))?null:o);
return (function (){var or__3824__auto____35738 = (cljs.core._deref_with_timeout[goog.typeOf(x__2387__auto____35737)]);
if(or__3824__auto____35738)
{return or__3824__auto____35738;
} else
{var or__3824__auto____35739 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____35739)
{return or__3824__auto____35739;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____35744 = o;
if(and__3822__auto____35744)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____35744;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2387__auto____35745 = (((o == null))?null:o);
return (function (){var or__3824__auto____35746 = (cljs.core._meta[goog.typeOf(x__2387__auto____35745)]);
if(or__3824__auto____35746)
{return or__3824__auto____35746;
} else
{var or__3824__auto____35747 = (cljs.core._meta["_"]);
if(or__3824__auto____35747)
{return or__3824__auto____35747;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____35752 = o;
if(and__3822__auto____35752)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____35752;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2387__auto____35753 = (((o == null))?null:o);
return (function (){var or__3824__auto____35754 = (cljs.core._with_meta[goog.typeOf(x__2387__auto____35753)]);
if(or__3824__auto____35754)
{return or__3824__auto____35754;
} else
{var or__3824__auto____35755 = (cljs.core._with_meta["_"]);
if(or__3824__auto____35755)
{return or__3824__auto____35755;
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
if((function (){var and__3822__auto____35764 = coll;
if(and__3822__auto____35764)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____35764;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2387__auto____35765 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35766 = (cljs.core._reduce[goog.typeOf(x__2387__auto____35765)]);
if(or__3824__auto____35766)
{return or__3824__auto____35766;
} else
{var or__3824__auto____35767 = (cljs.core._reduce["_"]);
if(or__3824__auto____35767)
{return or__3824__auto____35767;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____35768 = coll;
if(and__3822__auto____35768)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____35768;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2387__auto____35769 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35770 = (cljs.core._reduce[goog.typeOf(x__2387__auto____35769)]);
if(or__3824__auto____35770)
{return or__3824__auto____35770;
} else
{var or__3824__auto____35771 = (cljs.core._reduce["_"]);
if(or__3824__auto____35771)
{return or__3824__auto____35771;
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
if((function (){var and__3822__auto____35776 = coll;
if(and__3822__auto____35776)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____35776;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2387__auto____35777 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35778 = (cljs.core._kv_reduce[goog.typeOf(x__2387__auto____35777)]);
if(or__3824__auto____35778)
{return or__3824__auto____35778;
} else
{var or__3824__auto____35779 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____35779)
{return or__3824__auto____35779;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____35784 = o;
if(and__3822__auto____35784)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____35784;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2387__auto____35785 = (((o == null))?null:o);
return (function (){var or__3824__auto____35786 = (cljs.core._equiv[goog.typeOf(x__2387__auto____35785)]);
if(or__3824__auto____35786)
{return or__3824__auto____35786;
} else
{var or__3824__auto____35787 = (cljs.core._equiv["_"]);
if(or__3824__auto____35787)
{return or__3824__auto____35787;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____35792 = o;
if(and__3822__auto____35792)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____35792;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2387__auto____35793 = (((o == null))?null:o);
return (function (){var or__3824__auto____35794 = (cljs.core._hash[goog.typeOf(x__2387__auto____35793)]);
if(or__3824__auto____35794)
{return or__3824__auto____35794;
} else
{var or__3824__auto____35795 = (cljs.core._hash["_"]);
if(or__3824__auto____35795)
{return or__3824__auto____35795;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____35800 = o;
if(and__3822__auto____35800)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____35800;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2387__auto____35801 = (((o == null))?null:o);
return (function (){var or__3824__auto____35802 = (cljs.core._seq[goog.typeOf(x__2387__auto____35801)]);
if(or__3824__auto____35802)
{return or__3824__auto____35802;
} else
{var or__3824__auto____35803 = (cljs.core._seq["_"]);
if(or__3824__auto____35803)
{return or__3824__auto____35803;
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
if((function (){var and__3822__auto____35808 = coll;
if(and__3822__auto____35808)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____35808;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2387__auto____35809 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35810 = (cljs.core._rseq[goog.typeOf(x__2387__auto____35809)]);
if(or__3824__auto____35810)
{return or__3824__auto____35810;
} else
{var or__3824__auto____35811 = (cljs.core._rseq["_"]);
if(or__3824__auto____35811)
{return or__3824__auto____35811;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____35816 = coll;
if(and__3822__auto____35816)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____35816;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2387__auto____35817 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35818 = (cljs.core._sorted_seq[goog.typeOf(x__2387__auto____35817)]);
if(or__3824__auto____35818)
{return or__3824__auto____35818;
} else
{var or__3824__auto____35819 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____35819)
{return or__3824__auto____35819;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____35824 = coll;
if(and__3822__auto____35824)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____35824;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2387__auto____35825 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35826 = (cljs.core._sorted_seq_from[goog.typeOf(x__2387__auto____35825)]);
if(or__3824__auto____35826)
{return or__3824__auto____35826;
} else
{var or__3824__auto____35827 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____35827)
{return or__3824__auto____35827;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____35832 = coll;
if(and__3822__auto____35832)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____35832;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2387__auto____35833 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35834 = (cljs.core._entry_key[goog.typeOf(x__2387__auto____35833)]);
if(or__3824__auto____35834)
{return or__3824__auto____35834;
} else
{var or__3824__auto____35835 = (cljs.core._entry_key["_"]);
if(or__3824__auto____35835)
{return or__3824__auto____35835;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____35840 = coll;
if(and__3822__auto____35840)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____35840;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2387__auto____35841 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35842 = (cljs.core._comparator[goog.typeOf(x__2387__auto____35841)]);
if(or__3824__auto____35842)
{return or__3824__auto____35842;
} else
{var or__3824__auto____35843 = (cljs.core._comparator["_"]);
if(or__3824__auto____35843)
{return or__3824__auto____35843;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____35848 = o;
if(and__3822__auto____35848)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____35848;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2387__auto____35849 = (((o == null))?null:o);
return (function (){var or__3824__auto____35850 = (cljs.core._pr_seq[goog.typeOf(x__2387__auto____35849)]);
if(or__3824__auto____35850)
{return or__3824__auto____35850;
} else
{var or__3824__auto____35851 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____35851)
{return or__3824__auto____35851;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____35856 = writer;
if(and__3822__auto____35856)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____35856;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__2387__auto____35857 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____35858 = (cljs.core._write[goog.typeOf(x__2387__auto____35857)]);
if(or__3824__auto____35858)
{return or__3824__auto____35858;
} else
{var or__3824__auto____35859 = (cljs.core._write["_"]);
if(or__3824__auto____35859)
{return or__3824__auto____35859;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____35864 = writer;
if(and__3822__auto____35864)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____35864;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__2387__auto____35865 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____35866 = (cljs.core._flush[goog.typeOf(x__2387__auto____35865)]);
if(or__3824__auto____35866)
{return or__3824__auto____35866;
} else
{var or__3824__auto____35867 = (cljs.core._flush["_"]);
if(or__3824__auto____35867)
{return or__3824__auto____35867;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____35872 = o;
if(and__3822__auto____35872)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____35872;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__2387__auto____35873 = (((o == null))?null:o);
return (function (){var or__3824__auto____35874 = (cljs.core._pr_writer[goog.typeOf(x__2387__auto____35873)]);
if(or__3824__auto____35874)
{return or__3824__auto____35874;
} else
{var or__3824__auto____35875 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____35875)
{return or__3824__auto____35875;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____35880 = d;
if(and__3822__auto____35880)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____35880;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2387__auto____35881 = (((d == null))?null:d);
return (function (){var or__3824__auto____35882 = (cljs.core._realized_QMARK_[goog.typeOf(x__2387__auto____35881)]);
if(or__3824__auto____35882)
{return or__3824__auto____35882;
} else
{var or__3824__auto____35883 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____35883)
{return or__3824__auto____35883;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____35888 = this$;
if(and__3822__auto____35888)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____35888;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2387__auto____35889 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35890 = (cljs.core._notify_watches[goog.typeOf(x__2387__auto____35889)]);
if(or__3824__auto____35890)
{return or__3824__auto____35890;
} else
{var or__3824__auto____35891 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____35891)
{return or__3824__auto____35891;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____35896 = this$;
if(and__3822__auto____35896)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____35896;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2387__auto____35897 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35898 = (cljs.core._add_watch[goog.typeOf(x__2387__auto____35897)]);
if(or__3824__auto____35898)
{return or__3824__auto____35898;
} else
{var or__3824__auto____35899 = (cljs.core._add_watch["_"]);
if(or__3824__auto____35899)
{return or__3824__auto____35899;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____35904 = this$;
if(and__3822__auto____35904)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____35904;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2387__auto____35905 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____35906 = (cljs.core._remove_watch[goog.typeOf(x__2387__auto____35905)]);
if(or__3824__auto____35906)
{return or__3824__auto____35906;
} else
{var or__3824__auto____35907 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____35907)
{return or__3824__auto____35907;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____35912 = coll;
if(and__3822__auto____35912)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____35912;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2387__auto____35913 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35914 = (cljs.core._as_transient[goog.typeOf(x__2387__auto____35913)]);
if(or__3824__auto____35914)
{return or__3824__auto____35914;
} else
{var or__3824__auto____35915 = (cljs.core._as_transient["_"]);
if(or__3824__auto____35915)
{return or__3824__auto____35915;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____35920 = tcoll;
if(and__3822__auto____35920)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____35920;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2387__auto____35921 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____35922 = (cljs.core._conj_BANG_[goog.typeOf(x__2387__auto____35921)]);
if(or__3824__auto____35922)
{return or__3824__auto____35922;
} else
{var or__3824__auto____35923 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____35923)
{return or__3824__auto____35923;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____35928 = tcoll;
if(and__3822__auto____35928)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____35928;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2387__auto____35929 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____35930 = (cljs.core._persistent_BANG_[goog.typeOf(x__2387__auto____35929)]);
if(or__3824__auto____35930)
{return or__3824__auto____35930;
} else
{var or__3824__auto____35931 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____35931)
{return or__3824__auto____35931;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____35936 = tcoll;
if(and__3822__auto____35936)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____35936;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2387__auto____35937 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____35938 = (cljs.core._assoc_BANG_[goog.typeOf(x__2387__auto____35937)]);
if(or__3824__auto____35938)
{return or__3824__auto____35938;
} else
{var or__3824__auto____35939 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____35939)
{return or__3824__auto____35939;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____35944 = tcoll;
if(and__3822__auto____35944)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____35944;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2387__auto____35945 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____35946 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2387__auto____35945)]);
if(or__3824__auto____35946)
{return or__3824__auto____35946;
} else
{var or__3824__auto____35947 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____35947)
{return or__3824__auto____35947;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____35952 = tcoll;
if(and__3822__auto____35952)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____35952;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2387__auto____35953 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____35954 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2387__auto____35953)]);
if(or__3824__auto____35954)
{return or__3824__auto____35954;
} else
{var or__3824__auto____35955 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____35955)
{return or__3824__auto____35955;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____35960 = tcoll;
if(and__3822__auto____35960)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____35960;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2387__auto____35961 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____35962 = (cljs.core._pop_BANG_[goog.typeOf(x__2387__auto____35961)]);
if(or__3824__auto____35962)
{return or__3824__auto____35962;
} else
{var or__3824__auto____35963 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____35963)
{return or__3824__auto____35963;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____35968 = tcoll;
if(and__3822__auto____35968)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____35968;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2387__auto____35969 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____35970 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2387__auto____35969)]);
if(or__3824__auto____35970)
{return or__3824__auto____35970;
} else
{var or__3824__auto____35971 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____35971)
{return or__3824__auto____35971;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____35976 = x;
if(and__3822__auto____35976)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____35976;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2387__auto____35977 = (((x == null))?null:x);
return (function (){var or__3824__auto____35978 = (cljs.core._compare[goog.typeOf(x__2387__auto____35977)]);
if(or__3824__auto____35978)
{return or__3824__auto____35978;
} else
{var or__3824__auto____35979 = (cljs.core._compare["_"]);
if(or__3824__auto____35979)
{return or__3824__auto____35979;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____35984 = coll;
if(and__3822__auto____35984)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____35984;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2387__auto____35985 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35986 = (cljs.core._drop_first[goog.typeOf(x__2387__auto____35985)]);
if(or__3824__auto____35986)
{return or__3824__auto____35986;
} else
{var or__3824__auto____35987 = (cljs.core._drop_first["_"]);
if(or__3824__auto____35987)
{return or__3824__auto____35987;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____35992 = coll;
if(and__3822__auto____35992)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____35992;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2387__auto____35993 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____35994 = (cljs.core._chunked_first[goog.typeOf(x__2387__auto____35993)]);
if(or__3824__auto____35994)
{return or__3824__auto____35994;
} else
{var or__3824__auto____35995 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____35995)
{return or__3824__auto____35995;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____36000 = coll;
if(and__3822__auto____36000)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____36000;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2387__auto____36001 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____36002 = (cljs.core._chunked_rest[goog.typeOf(x__2387__auto____36001)]);
if(or__3824__auto____36002)
{return or__3824__auto____36002;
} else
{var or__3824__auto____36003 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____36003)
{return or__3824__auto____36003;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____36008 = coll;
if(and__3822__auto____36008)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____36008;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2387__auto____36009 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____36010 = (cljs.core._chunked_next[goog.typeOf(x__2387__auto____36009)]);
if(or__3824__auto____36010)
{return or__3824__auto____36010;
} else
{var or__3824__auto____36011 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____36011)
{return or__3824__auto____36011;
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
{if((function (){var G__36015__36016 = coll;
if(G__36015__36016)
{if((function (){var or__3824__auto____36017 = (G__36015__36016.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____36017)
{return or__3824__auto____36017;
} else
{return G__36015__36016.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__36015__36016.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__36015__36016);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__36015__36016);
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
{if((function (){var G__36022__36023 = coll;
if(G__36022__36023)
{if((function (){var or__3824__auto____36024 = (G__36022__36023.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____36024)
{return or__3824__auto____36024;
} else
{return G__36022__36023.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__36022__36023.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__36022__36023);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__36022__36023);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__36025 = cljs.core.seq.call(null,coll);
if((s__36025 == null))
{return null;
} else
{return cljs.core._first.call(null,s__36025);
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
{if((function (){var G__36030__36031 = coll;
if(G__36030__36031)
{if((function (){var or__3824__auto____36032 = (G__36030__36031.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____36032)
{return or__3824__auto____36032;
} else
{return G__36030__36031.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__36030__36031.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__36030__36031);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__36030__36031);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__36033 = cljs.core.seq.call(null,coll);
if(!((s__36033 == null)))
{return cljs.core._rest.call(null,s__36033);
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
{if((function (){var G__36037__36038 = coll;
if(G__36037__36038)
{if((function (){var or__3824__auto____36039 = (G__36037__36038.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____36039)
{return or__3824__auto____36039;
} else
{return G__36037__36038.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__36037__36038.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__36037__36038);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__36037__36038);
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
var or__3824__auto____36041 = (x === y);
if(or__3824__auto____36041)
{return or__3824__auto____36041;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__36042__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__36043 = y;
var G__36044 = cljs.core.first.call(null,more);
var G__36045 = cljs.core.next.call(null,more);
x = G__36043;
y = G__36044;
more = G__36045;
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
var G__36042 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36042__delegate.call(this, x, y, more);
};
G__36042.cljs$lang$maxFixedArity = 2;
G__36042.cljs$lang$applyTo = (function (arglist__36046){
var x = cljs.core.first(arglist__36046);
var y = cljs.core.first(cljs.core.next(arglist__36046));
var more = cljs.core.rest(cljs.core.next(arglist__36046));
return G__36042__delegate(x, y, more);
});
G__36042.cljs$lang$arity$variadic = G__36042__delegate;
return G__36042;
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
var G__36047 = null;
var G__36047__2 = (function (o,k){
return null;
});
var G__36047__3 = (function (o,k,not_found){
return not_found;
});
G__36047 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__36047__2.call(this,o,k);
case 3:
return G__36047__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36047;
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
var G__36048 = null;
var G__36048__2 = (function (_,f){
return f.call(null);
});
var G__36048__3 = (function (_,f,start){
return start;
});
G__36048 = function(_,f,start){
switch(arguments.length){
case 2:
return G__36048__2.call(this,_,f);
case 3:
return G__36048__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36048;
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
var G__36049 = null;
var G__36049__2 = (function (_,n){
return null;
});
var G__36049__3 = (function (_,n,not_found){
return not_found;
});
G__36049 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__36049__2.call(this,_,n);
case 3:
return G__36049__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36049;
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
var and__3822__auto____36050 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____36050)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____36050;
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
var this__36051 = this;
return this__36051.val;
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
var cnt__36064 = cljs.core._count.call(null,cicoll);
if((cnt__36064 === 0))
{return f.call(null);
} else
{var val__36065 = cljs.core._nth.call(null,cicoll,0);
var n__36066 = 1;
while(true){
if((n__36066 < cnt__36064))
{var nval__36067 = f.call(null,val__36065,cljs.core._nth.call(null,cicoll,n__36066));
if(cljs.core.reduced_QMARK_.call(null,nval__36067))
{return cljs.core.deref.call(null,nval__36067);
} else
{{
var G__36076 = nval__36067;
var G__36077 = (n__36066 + 1);
val__36065 = G__36076;
n__36066 = G__36077;
continue;
}
}
} else
{return val__36065;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__36068 = cljs.core._count.call(null,cicoll);
var val__36069 = val;
var n__36070 = 0;
while(true){
if((n__36070 < cnt__36068))
{var nval__36071 = f.call(null,val__36069,cljs.core._nth.call(null,cicoll,n__36070));
if(cljs.core.reduced_QMARK_.call(null,nval__36071))
{return cljs.core.deref.call(null,nval__36071);
} else
{{
var G__36078 = nval__36071;
var G__36079 = (n__36070 + 1);
val__36069 = G__36078;
n__36070 = G__36079;
continue;
}
}
} else
{return val__36069;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__36072 = cljs.core._count.call(null,cicoll);
var val__36073 = val;
var n__36074 = idx;
while(true){
if((n__36074 < cnt__36072))
{var nval__36075 = f.call(null,val__36073,cljs.core._nth.call(null,cicoll,n__36074));
if(cljs.core.reduced_QMARK_.call(null,nval__36075))
{return cljs.core.deref.call(null,nval__36075);
} else
{{
var G__36080 = nval__36075;
var G__36081 = (n__36074 + 1);
val__36073 = G__36080;
n__36074 = G__36081;
continue;
}
}
} else
{return val__36073;
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
var cnt__36094 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__36095 = (arr[0]);
var n__36096 = 1;
while(true){
if((n__36096 < cnt__36094))
{var nval__36097 = f.call(null,val__36095,(arr[n__36096]));
if(cljs.core.reduced_QMARK_.call(null,nval__36097))
{return cljs.core.deref.call(null,nval__36097);
} else
{{
var G__36106 = nval__36097;
var G__36107 = (n__36096 + 1);
val__36095 = G__36106;
n__36096 = G__36107;
continue;
}
}
} else
{return val__36095;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__36098 = arr.length;
var val__36099 = val;
var n__36100 = 0;
while(true){
if((n__36100 < cnt__36098))
{var nval__36101 = f.call(null,val__36099,(arr[n__36100]));
if(cljs.core.reduced_QMARK_.call(null,nval__36101))
{return cljs.core.deref.call(null,nval__36101);
} else
{{
var G__36108 = nval__36101;
var G__36109 = (n__36100 + 1);
val__36099 = G__36108;
n__36100 = G__36109;
continue;
}
}
} else
{return val__36099;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__36102 = arr.length;
var val__36103 = val;
var n__36104 = idx;
while(true){
if((n__36104 < cnt__36102))
{var nval__36105 = f.call(null,val__36103,(arr[n__36104]));
if(cljs.core.reduced_QMARK_.call(null,nval__36105))
{return cljs.core.deref.call(null,nval__36105);
} else
{{
var G__36110 = nval__36105;
var G__36111 = (n__36104 + 1);
val__36103 = G__36110;
n__36104 = G__36111;
continue;
}
}
} else
{return val__36103;
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
var G__36115__36116 = x;
if(G__36115__36116)
{if((function (){var or__3824__auto____36117 = (G__36115__36116.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____36117)
{return or__3824__auto____36117;
} else
{return G__36115__36116.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__36115__36116.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__36115__36116);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__36115__36116);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__36121__36122 = x;
if(G__36121__36122)
{if((function (){var or__3824__auto____36123 = (G__36121__36122.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____36123)
{return or__3824__auto____36123;
} else
{return G__36121__36122.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__36121__36122.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__36121__36122);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__36121__36122);
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
var this__36124 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__36125 = this;
if(((this__36125.i + 1) < this__36125.a.length))
{return (new cljs.core.IndexedSeq(this__36125.a,(this__36125.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__36126 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__36127 = this;
var c__36128 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__36128 > 0))
{return (new cljs.core.RSeq(coll,(c__36128 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__36129 = this;
var this__36130 = this;
return cljs.core.pr_str.call(null,this__36130);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__36131 = this;
if(cljs.core.counted_QMARK_.call(null,this__36131.a))
{return cljs.core.ci_reduce.call(null,this__36131.a,f,(this__36131.a[this__36131.i]),(this__36131.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__36131.a[this__36131.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__36132 = this;
if(cljs.core.counted_QMARK_.call(null,this__36132.a))
{return cljs.core.ci_reduce.call(null,this__36132.a,f,start,this__36132.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__36133 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__36134 = this;
return (this__36134.a.length - this__36134.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__36135 = this;
return (this__36135.a[this__36135.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__36136 = this;
if(((this__36136.i + 1) < this__36136.a.length))
{return (new cljs.core.IndexedSeq(this__36136.a,(this__36136.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__36137 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__36138 = this;
var i__36139 = (n + this__36138.i);
if((i__36139 < this__36138.a.length))
{return (this__36138.a[i__36139]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__36140 = this;
var i__36141 = (n + this__36140.i);
if((i__36141 < this__36140.a.length))
{return (this__36140.a[i__36141]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__36142 = this;
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
var G__36143 = null;
var G__36143__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__36143__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__36143 = function(array,f,start){
switch(arguments.length){
case 2:
return G__36143__2.call(this,array,f);
case 3:
return G__36143__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36143;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__36144 = null;
var G__36144__2 = (function (array,k){
return (array[k]);
});
var G__36144__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__36144 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__36144__2.call(this,array,k);
case 3:
return G__36144__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36144;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__36145 = null;
var G__36145__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__36145__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__36145 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__36145__2.call(this,array,n);
case 3:
return G__36145__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36145;
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
var this__36146 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__36147 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__36148 = this;
var this__36149 = this;
return cljs.core.pr_str.call(null,this__36149);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__36150 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__36151 = this;
return (this__36151.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__36152 = this;
return cljs.core._nth.call(null,this__36152.ci,this__36152.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__36153 = this;
if((this__36153.i > 0))
{return (new cljs.core.RSeq(this__36153.ci,(this__36153.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__36154 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__36155 = this;
return (new cljs.core.RSeq(this__36155.ci,this__36155.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__36156 = this;
return this__36156.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__36157 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__36157.meta);
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
var sn__36159 = cljs.core.next.call(null,s);
if(!((sn__36159 == null)))
{{
var G__36160 = sn__36159;
s = G__36160;
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
var G__36161__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__36162 = conj.call(null,coll,x);
var G__36163 = cljs.core.first.call(null,xs);
var G__36164 = cljs.core.next.call(null,xs);
coll = G__36162;
x = G__36163;
xs = G__36164;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__36161 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36161__delegate.call(this, coll, x, xs);
};
G__36161.cljs$lang$maxFixedArity = 2;
G__36161.cljs$lang$applyTo = (function (arglist__36165){
var coll = cljs.core.first(arglist__36165);
var x = cljs.core.first(cljs.core.next(arglist__36165));
var xs = cljs.core.rest(cljs.core.next(arglist__36165));
return G__36161__delegate(coll, x, xs);
});
G__36161.cljs$lang$arity$variadic = G__36161__delegate;
return G__36161;
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
var s__36168 = cljs.core.seq.call(null,coll);
var acc__36169 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__36168))
{return (acc__36169 + cljs.core._count.call(null,s__36168));
} else
{{
var G__36170 = cljs.core.next.call(null,s__36168);
var G__36171 = (acc__36169 + 1);
s__36168 = G__36170;
acc__36169 = G__36171;
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
var G__36172 = cljs.core.next.call(null,coll);
var G__36173 = (n - 1);
coll = G__36172;
n = G__36173;
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
var G__36174 = cljs.core.next.call(null,coll);
var G__36175 = (n - 1);
var G__36176 = not_found;
coll = G__36174;
n = G__36175;
not_found = G__36176;
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
{if((function (){var G__36183__36184 = coll;
if(G__36183__36184)
{if((function (){var or__3824__auto____36185 = (G__36183__36184.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____36185)
{return or__3824__auto____36185;
} else
{return G__36183__36184.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__36183__36184.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__36183__36184);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__36183__36184);
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
{if((function (){var G__36186__36187 = coll;
if(G__36186__36187)
{if((function (){var or__3824__auto____36188 = (G__36186__36187.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____36188)
{return or__3824__auto____36188;
} else
{return G__36186__36187.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__36186__36187.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__36186__36187);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__36186__36187);
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
var G__36191__delegate = function (coll,k,v,kvs){
while(true){
var ret__36190 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__36192 = ret__36190;
var G__36193 = cljs.core.first.call(null,kvs);
var G__36194 = cljs.core.second.call(null,kvs);
var G__36195 = cljs.core.nnext.call(null,kvs);
coll = G__36192;
k = G__36193;
v = G__36194;
kvs = G__36195;
continue;
}
} else
{return ret__36190;
}
break;
}
};
var G__36191 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__36191__delegate.call(this, coll, k, v, kvs);
};
G__36191.cljs$lang$maxFixedArity = 3;
G__36191.cljs$lang$applyTo = (function (arglist__36196){
var coll = cljs.core.first(arglist__36196);
var k = cljs.core.first(cljs.core.next(arglist__36196));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__36196)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__36196)));
return G__36191__delegate(coll, k, v, kvs);
});
G__36191.cljs$lang$arity$variadic = G__36191__delegate;
return G__36191;
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
var G__36199__delegate = function (coll,k,ks){
while(true){
var ret__36198 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__36200 = ret__36198;
var G__36201 = cljs.core.first.call(null,ks);
var G__36202 = cljs.core.next.call(null,ks);
coll = G__36200;
k = G__36201;
ks = G__36202;
continue;
}
} else
{return ret__36198;
}
break;
}
};
var G__36199 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36199__delegate.call(this, coll, k, ks);
};
G__36199.cljs$lang$maxFixedArity = 2;
G__36199.cljs$lang$applyTo = (function (arglist__36203){
var coll = cljs.core.first(arglist__36203);
var k = cljs.core.first(cljs.core.next(arglist__36203));
var ks = cljs.core.rest(cljs.core.next(arglist__36203));
return G__36199__delegate(coll, k, ks);
});
G__36199.cljs$lang$arity$variadic = G__36199__delegate;
return G__36199;
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
if((function (){var G__36207__36208 = o;
if(G__36207__36208)
{if((function (){var or__3824__auto____36209 = (G__36207__36208.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____36209)
{return or__3824__auto____36209;
} else
{return G__36207__36208.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__36207__36208.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__36207__36208);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__36207__36208);
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
var G__36212__delegate = function (coll,k,ks){
while(true){
var ret__36211 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__36213 = ret__36211;
var G__36214 = cljs.core.first.call(null,ks);
var G__36215 = cljs.core.next.call(null,ks);
coll = G__36213;
k = G__36214;
ks = G__36215;
continue;
}
} else
{return ret__36211;
}
break;
}
};
var G__36212 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36212__delegate.call(this, coll, k, ks);
};
G__36212.cljs$lang$maxFixedArity = 2;
G__36212.cljs$lang$applyTo = (function (arglist__36216){
var coll = cljs.core.first(arglist__36216);
var k = cljs.core.first(cljs.core.next(arglist__36216));
var ks = cljs.core.rest(cljs.core.next(arglist__36216));
return G__36212__delegate(coll, k, ks);
});
G__36212.cljs$lang$arity$variadic = G__36212__delegate;
return G__36212;
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
var h__36218 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__36218);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__36218;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__36220 = (cljs.core.string_hash_cache[k]);
if(!((h__36220 == null)))
{return h__36220;
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
if((function (){var and__3822__auto____36222 = goog.isString(o);
if(and__3822__auto____36222)
{return check_cache;
} else
{return and__3822__auto____36222;
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
{var G__36226__36227 = x;
if(G__36226__36227)
{if((function (){var or__3824__auto____36228 = (G__36226__36227.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____36228)
{return or__3824__auto____36228;
} else
{return G__36226__36227.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__36226__36227.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__36226__36227);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__36226__36227);
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
{var G__36232__36233 = x;
if(G__36232__36233)
{if((function (){var or__3824__auto____36234 = (G__36232__36233.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____36234)
{return or__3824__auto____36234;
} else
{return G__36232__36233.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__36232__36233.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__36232__36233);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__36232__36233);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__36238__36239 = x;
if(G__36238__36239)
{if((function (){var or__3824__auto____36240 = (G__36238__36239.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____36240)
{return or__3824__auto____36240;
} else
{return G__36238__36239.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__36238__36239.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__36238__36239);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__36238__36239);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__36244__36245 = x;
if(G__36244__36245)
{if((function (){var or__3824__auto____36246 = (G__36244__36245.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____36246)
{return or__3824__auto____36246;
} else
{return G__36244__36245.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__36244__36245.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__36244__36245);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__36244__36245);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__36250__36251 = x;
if(G__36250__36251)
{if((function (){var or__3824__auto____36252 = (G__36250__36251.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____36252)
{return or__3824__auto____36252;
} else
{return G__36250__36251.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__36250__36251.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__36250__36251);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__36250__36251);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__36256__36257 = x;
if(G__36256__36257)
{if((function (){var or__3824__auto____36258 = (G__36256__36257.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____36258)
{return or__3824__auto____36258;
} else
{return G__36256__36257.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__36256__36257.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__36256__36257);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__36256__36257);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__36262__36263 = x;
if(G__36262__36263)
{if((function (){var or__3824__auto____36264 = (G__36262__36263.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____36264)
{return or__3824__auto____36264;
} else
{return G__36262__36263.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__36262__36263.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__36262__36263);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__36262__36263);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__36268__36269 = x;
if(G__36268__36269)
{if((function (){var or__3824__auto____36270 = (G__36268__36269.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____36270)
{return or__3824__auto____36270;
} else
{return G__36268__36269.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__36268__36269.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__36268__36269);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__36268__36269);
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
var G__36271__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__36271 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__36271__delegate.call(this, keyvals);
};
G__36271.cljs$lang$maxFixedArity = 0;
G__36271.cljs$lang$applyTo = (function (arglist__36272){
var keyvals = cljs.core.seq(arglist__36272);;
return G__36271__delegate(keyvals);
});
G__36271.cljs$lang$arity$variadic = G__36271__delegate;
return G__36271;
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
var keys__36274 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__36274.push(key);
}));
return keys__36274;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__36278 = i;
var j__36279 = j;
var len__36280 = len;
while(true){
if((len__36280 === 0))
{return to;
} else
{(to[j__36279] = (from[i__36278]));
{
var G__36281 = (i__36278 + 1);
var G__36282 = (j__36279 + 1);
var G__36283 = (len__36280 - 1);
i__36278 = G__36281;
j__36279 = G__36282;
len__36280 = G__36283;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__36287 = (i + (len - 1));
var j__36288 = (j + (len - 1));
var len__36289 = len;
while(true){
if((len__36289 === 0))
{return to;
} else
{(to[j__36288] = (from[i__36287]));
{
var G__36290 = (i__36287 - 1);
var G__36291 = (j__36288 - 1);
var G__36292 = (len__36289 - 1);
i__36287 = G__36290;
j__36288 = G__36291;
len__36289 = G__36292;
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
{var G__36296__36297 = s;
if(G__36296__36297)
{if((function (){var or__3824__auto____36298 = (G__36296__36297.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____36298)
{return or__3824__auto____36298;
} else
{return G__36296__36297.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__36296__36297.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__36296__36297);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__36296__36297);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__36302__36303 = s;
if(G__36302__36303)
{if((function (){var or__3824__auto____36304 = (G__36302__36303.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____36304)
{return or__3824__auto____36304;
} else
{return G__36302__36303.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__36302__36303.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__36302__36303);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__36302__36303);
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
var and__3822__auto____36307 = goog.isString(x);
if(and__3822__auto____36307)
{return !((function (){var or__3824__auto____36308 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____36308)
{return or__3824__auto____36308;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____36307;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____36310 = goog.isString(x);
if(and__3822__auto____36310)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____36310;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____36312 = goog.isString(x);
if(and__3822__auto____36312)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____36312;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____36317 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____36317)
{return or__3824__auto____36317;
} else
{var G__36318__36319 = f;
if(G__36318__36319)
{if((function (){var or__3824__auto____36320 = (G__36318__36319.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____36320)
{return or__3824__auto____36320;
} else
{return G__36318__36319.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__36318__36319.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__36318__36319);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__36318__36319);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____36324 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____36324)
{var and__3822__auto____36325 = !(isNaN(n));
if(and__3822__auto____36325)
{var and__3822__auto____36326 = !((n === Infinity));
if(and__3822__auto____36326)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____36326;
}
} else
{return and__3822__auto____36325;
}
} else
{return and__3822__auto____36324;
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
if((function (){var and__3822__auto____36329 = !((coll == null));
if(and__3822__auto____36329)
{var and__3822__auto____36330 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____36330)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____36330;
}
} else
{return and__3822__auto____36329;
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
var G__36339__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__36335 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__36336 = more;
while(true){
var x__36337 = cljs.core.first.call(null,xs__36336);
var etc__36338 = cljs.core.next.call(null,xs__36336);
if(cljs.core.truth_(xs__36336))
{if(cljs.core.contains_QMARK_.call(null,s__36335,x__36337))
{return false;
} else
{{
var G__36340 = cljs.core.conj.call(null,s__36335,x__36337);
var G__36341 = etc__36338;
s__36335 = G__36340;
xs__36336 = G__36341;
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
var G__36339 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36339__delegate.call(this, x, y, more);
};
G__36339.cljs$lang$maxFixedArity = 2;
G__36339.cljs$lang$applyTo = (function (arglist__36342){
var x = cljs.core.first(arglist__36342);
var y = cljs.core.first(cljs.core.next(arglist__36342));
var more = cljs.core.rest(cljs.core.next(arglist__36342));
return G__36339__delegate(x, y, more);
});
G__36339.cljs$lang$arity$variadic = G__36339__delegate;
return G__36339;
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
{if((function (){var G__36346__36347 = x;
if(G__36346__36347)
{if((function (){var or__3824__auto____36348 = (G__36346__36347.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____36348)
{return or__3824__auto____36348;
} else
{return G__36346__36347.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__36346__36347.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__36346__36347);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__36346__36347);
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
var xl__36353 = cljs.core.count.call(null,xs);
var yl__36354 = cljs.core.count.call(null,ys);
if((xl__36353 < yl__36354))
{return -1;
} else
{if((xl__36353 > yl__36354))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__36353,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__36355 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____36356 = (d__36355 === 0);
if(and__3822__auto____36356)
{return ((n + 1) < len);
} else
{return and__3822__auto____36356;
}
})())
{{
var G__36357 = xs;
var G__36358 = ys;
var G__36359 = len;
var G__36360 = (n + 1);
xs = G__36357;
ys = G__36358;
len = G__36359;
n = G__36360;
continue;
}
} else
{return d__36355;
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
var r__36362 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__36362))
{return r__36362;
} else
{if(cljs.core.truth_(r__36362))
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
{var a__36364 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__36364,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__36364);
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
var temp__3971__auto____36370 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____36370)
{var s__36371 = temp__3971__auto____36370;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__36371),cljs.core.next.call(null,s__36371));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__36372 = val;
var coll__36373 = cljs.core.seq.call(null,coll);
while(true){
if(coll__36373)
{var nval__36374 = f.call(null,val__36372,cljs.core.first.call(null,coll__36373));
if(cljs.core.reduced_QMARK_.call(null,nval__36374))
{return cljs.core.deref.call(null,nval__36374);
} else
{{
var G__36375 = nval__36374;
var G__36376 = cljs.core.next.call(null,coll__36373);
val__36372 = G__36375;
coll__36373 = G__36376;
continue;
}
}
} else
{return val__36372;
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
var a__36378 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__36378);
return cljs.core.vec.call(null,a__36378);
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
if((function (){var G__36385__36386 = coll;
if(G__36385__36386)
{if((function (){var or__3824__auto____36387 = (G__36385__36386.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____36387)
{return or__3824__auto____36387;
} else
{return G__36385__36386.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__36385__36386.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__36385__36386);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__36385__36386);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__36388__36389 = coll;
if(G__36388__36389)
{if((function (){var or__3824__auto____36390 = (G__36388__36389.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____36390)
{return or__3824__auto____36390;
} else
{return G__36388__36389.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__36388__36389.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__36388__36389);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__36388__36389);
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
var G__36391__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__36391 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36391__delegate.call(this, x, y, more);
};
G__36391.cljs$lang$maxFixedArity = 2;
G__36391.cljs$lang$applyTo = (function (arglist__36392){
var x = cljs.core.first(arglist__36392);
var y = cljs.core.first(cljs.core.next(arglist__36392));
var more = cljs.core.rest(cljs.core.next(arglist__36392));
return G__36391__delegate(x, y, more);
});
G__36391.cljs$lang$arity$variadic = G__36391__delegate;
return G__36391;
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
var G__36393__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__36393 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36393__delegate.call(this, x, y, more);
};
G__36393.cljs$lang$maxFixedArity = 2;
G__36393.cljs$lang$applyTo = (function (arglist__36394){
var x = cljs.core.first(arglist__36394);
var y = cljs.core.first(cljs.core.next(arglist__36394));
var more = cljs.core.rest(cljs.core.next(arglist__36394));
return G__36393__delegate(x, y, more);
});
G__36393.cljs$lang$arity$variadic = G__36393__delegate;
return G__36393;
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
var G__36395__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__36395 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36395__delegate.call(this, x, y, more);
};
G__36395.cljs$lang$maxFixedArity = 2;
G__36395.cljs$lang$applyTo = (function (arglist__36396){
var x = cljs.core.first(arglist__36396);
var y = cljs.core.first(cljs.core.next(arglist__36396));
var more = cljs.core.rest(cljs.core.next(arglist__36396));
return G__36395__delegate(x, y, more);
});
G__36395.cljs$lang$arity$variadic = G__36395__delegate;
return G__36395;
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
var G__36397__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__36397 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36397__delegate.call(this, x, y, more);
};
G__36397.cljs$lang$maxFixedArity = 2;
G__36397.cljs$lang$applyTo = (function (arglist__36398){
var x = cljs.core.first(arglist__36398);
var y = cljs.core.first(cljs.core.next(arglist__36398));
var more = cljs.core.rest(cljs.core.next(arglist__36398));
return G__36397__delegate(x, y, more);
});
G__36397.cljs$lang$arity$variadic = G__36397__delegate;
return G__36397;
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
var G__36399__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__36400 = y;
var G__36401 = cljs.core.first.call(null,more);
var G__36402 = cljs.core.next.call(null,more);
x = G__36400;
y = G__36401;
more = G__36402;
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
var G__36399 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36399__delegate.call(this, x, y, more);
};
G__36399.cljs$lang$maxFixedArity = 2;
G__36399.cljs$lang$applyTo = (function (arglist__36403){
var x = cljs.core.first(arglist__36403);
var y = cljs.core.first(cljs.core.next(arglist__36403));
var more = cljs.core.rest(cljs.core.next(arglist__36403));
return G__36399__delegate(x, y, more);
});
G__36399.cljs$lang$arity$variadic = G__36399__delegate;
return G__36399;
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
var G__36404__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__36405 = y;
var G__36406 = cljs.core.first.call(null,more);
var G__36407 = cljs.core.next.call(null,more);
x = G__36405;
y = G__36406;
more = G__36407;
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
var G__36404 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36404__delegate.call(this, x, y, more);
};
G__36404.cljs$lang$maxFixedArity = 2;
G__36404.cljs$lang$applyTo = (function (arglist__36408){
var x = cljs.core.first(arglist__36408);
var y = cljs.core.first(cljs.core.next(arglist__36408));
var more = cljs.core.rest(cljs.core.next(arglist__36408));
return G__36404__delegate(x, y, more);
});
G__36404.cljs$lang$arity$variadic = G__36404__delegate;
return G__36404;
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
var G__36409__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__36410 = y;
var G__36411 = cljs.core.first.call(null,more);
var G__36412 = cljs.core.next.call(null,more);
x = G__36410;
y = G__36411;
more = G__36412;
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
var G__36409 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36409__delegate.call(this, x, y, more);
};
G__36409.cljs$lang$maxFixedArity = 2;
G__36409.cljs$lang$applyTo = (function (arglist__36413){
var x = cljs.core.first(arglist__36413);
var y = cljs.core.first(cljs.core.next(arglist__36413));
var more = cljs.core.rest(cljs.core.next(arglist__36413));
return G__36409__delegate(x, y, more);
});
G__36409.cljs$lang$arity$variadic = G__36409__delegate;
return G__36409;
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
var G__36414__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__36415 = y;
var G__36416 = cljs.core.first.call(null,more);
var G__36417 = cljs.core.next.call(null,more);
x = G__36415;
y = G__36416;
more = G__36417;
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
var G__36414 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36414__delegate.call(this, x, y, more);
};
G__36414.cljs$lang$maxFixedArity = 2;
G__36414.cljs$lang$applyTo = (function (arglist__36418){
var x = cljs.core.first(arglist__36418);
var y = cljs.core.first(cljs.core.next(arglist__36418));
var more = cljs.core.rest(cljs.core.next(arglist__36418));
return G__36414__delegate(x, y, more);
});
G__36414.cljs$lang$arity$variadic = G__36414__delegate;
return G__36414;
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
var G__36419__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__36419 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36419__delegate.call(this, x, y, more);
};
G__36419.cljs$lang$maxFixedArity = 2;
G__36419.cljs$lang$applyTo = (function (arglist__36420){
var x = cljs.core.first(arglist__36420);
var y = cljs.core.first(cljs.core.next(arglist__36420));
var more = cljs.core.rest(cljs.core.next(arglist__36420));
return G__36419__delegate(x, y, more);
});
G__36419.cljs$lang$arity$variadic = G__36419__delegate;
return G__36419;
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
var G__36421__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__36421 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36421__delegate.call(this, x, y, more);
};
G__36421.cljs$lang$maxFixedArity = 2;
G__36421.cljs$lang$applyTo = (function (arglist__36422){
var x = cljs.core.first(arglist__36422);
var y = cljs.core.first(cljs.core.next(arglist__36422));
var more = cljs.core.rest(cljs.core.next(arglist__36422));
return G__36421__delegate(x, y, more);
});
G__36421.cljs$lang$arity$variadic = G__36421__delegate;
return G__36421;
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
var rem__36424 = (n % d);
return cljs.core.fix.call(null,((n - rem__36424) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__36426 = cljs.core.quot.call(null,n,d);
return (n - (d * q__36426));
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
var v__36429 = (v - ((v >> 1) & 1431655765));
var v__36430 = ((v__36429 & 858993459) + ((v__36429 >> 2) & 858993459));
return ((((v__36430 + (v__36430 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__36431__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__36432 = y;
var G__36433 = cljs.core.first.call(null,more);
var G__36434 = cljs.core.next.call(null,more);
x = G__36432;
y = G__36433;
more = G__36434;
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
var G__36431 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36431__delegate.call(this, x, y, more);
};
G__36431.cljs$lang$maxFixedArity = 2;
G__36431.cljs$lang$applyTo = (function (arglist__36435){
var x = cljs.core.first(arglist__36435);
var y = cljs.core.first(cljs.core.next(arglist__36435));
var more = cljs.core.rest(cljs.core.next(arglist__36435));
return G__36431__delegate(x, y, more);
});
G__36431.cljs$lang$arity$variadic = G__36431__delegate;
return G__36431;
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
var n__36439 = n;
var xs__36440 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____36441 = xs__36440;
if(and__3822__auto____36441)
{return (n__36439 > 0);
} else
{return and__3822__auto____36441;
}
})()))
{{
var G__36442 = (n__36439 - 1);
var G__36443 = cljs.core.next.call(null,xs__36440);
n__36439 = G__36442;
xs__36440 = G__36443;
continue;
}
} else
{return xs__36440;
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
var G__36444__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__36445 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__36446 = cljs.core.next.call(null,more);
sb = G__36445;
more = G__36446;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__36444 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__36444__delegate.call(this, x, ys);
};
G__36444.cljs$lang$maxFixedArity = 1;
G__36444.cljs$lang$applyTo = (function (arglist__36447){
var x = cljs.core.first(arglist__36447);
var ys = cljs.core.rest(arglist__36447);
return G__36444__delegate(x, ys);
});
G__36444.cljs$lang$arity$variadic = G__36444__delegate;
return G__36444;
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
var G__36448__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__36449 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__36450 = cljs.core.next.call(null,more);
sb = G__36449;
more = G__36450;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__36448 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__36448__delegate.call(this, x, ys);
};
G__36448.cljs$lang$maxFixedArity = 1;
G__36448.cljs$lang$applyTo = (function (arglist__36451){
var x = cljs.core.first(arglist__36451);
var ys = cljs.core.rest(arglist__36451);
return G__36448__delegate(x, ys);
});
G__36448.cljs$lang$arity$variadic = G__36448__delegate;
return G__36448;
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
var args__36455 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____36454 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____36454)
{return or__3824__auto____36454;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__36455);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__36456){
var fmt = cljs.core.first(arglist__36456);
var args = cljs.core.rest(arglist__36456);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__36459 = cljs.core.seq.call(null,x);
var ys__36460 = cljs.core.seq.call(null,y);
while(true){
if((xs__36459 == null))
{return (ys__36460 == null);
} else
{if((ys__36460 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__36459),cljs.core.first.call(null,ys__36460)))
{{
var G__36461 = cljs.core.next.call(null,xs__36459);
var G__36462 = cljs.core.next.call(null,ys__36460);
xs__36459 = G__36461;
ys__36460 = G__36462;
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
return cljs.core.reduce.call(null,(function (p1__36463_SHARP_,p2__36464_SHARP_){
return cljs.core.hash_combine.call(null,p1__36463_SHARP_,cljs.core.hash.call(null,p2__36464_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__36468 = 0;
var s__36469 = cljs.core.seq.call(null,m);
while(true){
if(s__36469)
{var e__36470 = cljs.core.first.call(null,s__36469);
{
var G__36471 = ((h__36468 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__36470)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__36470)))) % 4503599627370496);
var G__36472 = cljs.core.next.call(null,s__36469);
h__36468 = G__36471;
s__36469 = G__36472;
continue;
}
} else
{return h__36468;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__36476 = 0;
var s__36477 = cljs.core.seq.call(null,s);
while(true){
if(s__36477)
{var e__36478 = cljs.core.first.call(null,s__36477);
{
var G__36479 = ((h__36476 + cljs.core.hash.call(null,e__36478)) % 4503599627370496);
var G__36480 = cljs.core.next.call(null,s__36477);
h__36476 = G__36479;
s__36477 = G__36480;
continue;
}
} else
{return h__36476;
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
var G__36488__36489 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__36488__36489)
{var vec__36490__36491 = cljs.core.first.call(null,G__36488__36489);
var key_name__36492 = cljs.core.nth.call(null,vec__36490__36491,0,null);
var f__36493 = cljs.core.nth.call(null,vec__36490__36491,1,null);
var str_name__36494 = cljs.core.name.call(null,key_name__36492);
(obj[str_name__36494] = f__36493);
{
var G__36495 = cljs.core.next.call(null,G__36488__36489);
G__36488__36489 = G__36495;
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
var this__36496 = this;
var h__2203__auto____36497 = this__36496.__hash;
if(!((h__2203__auto____36497 == null)))
{return h__2203__auto____36497;
} else
{var h__2203__auto____36498 = cljs.core.hash_coll.call(null,coll);
this__36496.__hash = h__2203__auto____36498;
return h__2203__auto____36498;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__36499 = this;
if((this__36499.count === 1))
{return null;
} else
{return this__36499.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__36500 = this;
return (new cljs.core.List(this__36500.meta,o,coll,(this__36500.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__36501 = this;
var this__36502 = this;
return cljs.core.pr_str.call(null,this__36502);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__36503 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__36504 = this;
return this__36504.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__36505 = this;
return this__36505.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__36506 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__36507 = this;
return this__36507.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__36508 = this;
if((this__36508.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__36508.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__36509 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__36510 = this;
return (new cljs.core.List(meta,this__36510.first,this__36510.rest,this__36510.count,this__36510.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__36511 = this;
return this__36511.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__36512 = this;
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
var this__36513 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__36514 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__36515 = this;
return (new cljs.core.List(this__36515.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__36516 = this;
var this__36517 = this;
return cljs.core.pr_str.call(null,this__36517);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__36518 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__36519 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__36520 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__36521 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__36522 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__36523 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__36524 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__36525 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__36526 = this;
return this__36526.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__36527 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__36531__36532 = coll;
if(G__36531__36532)
{if((function (){var or__3824__auto____36533 = (G__36531__36532.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____36533)
{return or__3824__auto____36533;
} else
{return G__36531__36532.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__36531__36532.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__36531__36532);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__36531__36532);
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
var G__36534__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__36534 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__36534__delegate.call(this, x, y, z, items);
};
G__36534.cljs$lang$maxFixedArity = 3;
G__36534.cljs$lang$applyTo = (function (arglist__36535){
var x = cljs.core.first(arglist__36535);
var y = cljs.core.first(cljs.core.next(arglist__36535));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__36535)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__36535)));
return G__36534__delegate(x, y, z, items);
});
G__36534.cljs$lang$arity$variadic = G__36534__delegate;
return G__36534;
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
var this__36536 = this;
var h__2203__auto____36537 = this__36536.__hash;
if(!((h__2203__auto____36537 == null)))
{return h__2203__auto____36537;
} else
{var h__2203__auto____36538 = cljs.core.hash_coll.call(null,coll);
this__36536.__hash = h__2203__auto____36538;
return h__2203__auto____36538;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__36539 = this;
if((this__36539.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__36539.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__36540 = this;
return (new cljs.core.Cons(null,o,coll,this__36540.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__36541 = this;
var this__36542 = this;
return cljs.core.pr_str.call(null,this__36542);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__36543 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__36544 = this;
return this__36544.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__36545 = this;
if((this__36545.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__36545.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__36546 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__36547 = this;
return (new cljs.core.Cons(meta,this__36547.first,this__36547.rest,this__36547.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__36548 = this;
return this__36548.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__36549 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__36549.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____36554 = (coll == null);
if(or__3824__auto____36554)
{return or__3824__auto____36554;
} else
{var G__36555__36556 = coll;
if(G__36555__36556)
{if((function (){var or__3824__auto____36557 = (G__36555__36556.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____36557)
{return or__3824__auto____36557;
} else
{return G__36555__36556.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__36555__36556.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__36555__36556);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__36555__36556);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__36561__36562 = x;
if(G__36561__36562)
{if((function (){var or__3824__auto____36563 = (G__36561__36562.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____36563)
{return or__3824__auto____36563;
} else
{return G__36561__36562.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__36561__36562.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__36561__36562);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__36561__36562);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__36564 = null;
var G__36564__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__36564__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__36564 = function(string,f,start){
switch(arguments.length){
case 2:
return G__36564__2.call(this,string,f);
case 3:
return G__36564__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36564;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__36565 = null;
var G__36565__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__36565__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__36565 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__36565__2.call(this,string,k);
case 3:
return G__36565__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36565;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__36566 = null;
var G__36566__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__36566__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__36566 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__36566__2.call(this,string,n);
case 3:
return G__36566__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36566;
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
var G__36578 = null;
var G__36578__2 = (function (this_sym36569,coll){
var this__36571 = this;
var this_sym36569__36572 = this;
var ___36573 = this_sym36569__36572;
if((coll == null))
{return null;
} else
{var strobj__36574 = coll.strobj;
if((strobj__36574 == null))
{return cljs.core._lookup.call(null,coll,this__36571.k,null);
} else
{return (strobj__36574[this__36571.k]);
}
}
});
var G__36578__3 = (function (this_sym36570,coll,not_found){
var this__36571 = this;
var this_sym36570__36575 = this;
var ___36576 = this_sym36570__36575;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__36571.k,not_found);
}
});
G__36578 = function(this_sym36570,coll,not_found){
switch(arguments.length){
case 2:
return G__36578__2.call(this,this_sym36570,coll);
case 3:
return G__36578__3.call(this,this_sym36570,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36578;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym36567,args36568){
var this__36577 = this;
return this_sym36567.call.apply(this_sym36567,[this_sym36567].concat(args36568.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__36587 = null;
var G__36587__2 = (function (this_sym36581,coll){
var this_sym36581__36583 = this;
var this__36584 = this_sym36581__36583;
return cljs.core._lookup.call(null,coll,this__36584.toString(),null);
});
var G__36587__3 = (function (this_sym36582,coll,not_found){
var this_sym36582__36585 = this;
var this__36586 = this_sym36582__36585;
return cljs.core._lookup.call(null,coll,this__36586.toString(),not_found);
});
G__36587 = function(this_sym36582,coll,not_found){
switch(arguments.length){
case 2:
return G__36587__2.call(this,this_sym36582,coll);
case 3:
return G__36587__3.call(this,this_sym36582,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__36587;
})()
;
String.prototype.apply = (function (this_sym36579,args36580){
return this_sym36579.call.apply(this_sym36579,[this_sym36579].concat(args36580.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__36589 = lazy_seq.x;
if(lazy_seq.realized)
{return x__36589;
} else
{lazy_seq.x = x__36589.call(null);
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
var this__36590 = this;
var h__2203__auto____36591 = this__36590.__hash;
if(!((h__2203__auto____36591 == null)))
{return h__2203__auto____36591;
} else
{var h__2203__auto____36592 = cljs.core.hash_coll.call(null,coll);
this__36590.__hash = h__2203__auto____36592;
return h__2203__auto____36592;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__36593 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__36594 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__36595 = this;
var this__36596 = this;
return cljs.core.pr_str.call(null,this__36596);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__36597 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__36598 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__36599 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__36600 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__36601 = this;
return (new cljs.core.LazySeq(meta,this__36601.realized,this__36601.x,this__36601.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__36602 = this;
return this__36602.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__36603 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__36603.meta);
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
var this__36604 = this;
return this__36604.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__36605 = this;
var ___36606 = this;
(this__36605.buf[this__36605.end] = o);
return this__36605.end = (this__36605.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__36607 = this;
var ___36608 = this;
var ret__36609 = (new cljs.core.ArrayChunk(this__36607.buf,0,this__36607.end));
this__36607.buf = null;
return ret__36609;
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
var this__36610 = this;
return cljs.core.array_reduce.call(null,this__36610.arr,f,(this__36610.arr[this__36610.off]),(this__36610.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__36611 = this;
return cljs.core.array_reduce.call(null,this__36611.arr,f,start,this__36611.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__36612 = this;
if((this__36612.off === this__36612.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__36612.arr,(this__36612.off + 1),this__36612.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__36613 = this;
return (this__36613.arr[(this__36613.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__36614 = this;
if((function (){var and__3822__auto____36615 = (i >= 0);
if(and__3822__auto____36615)
{return (i < (this__36614.end - this__36614.off));
} else
{return and__3822__auto____36615;
}
})())
{return (this__36614.arr[(this__36614.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__36616 = this;
return (this__36616.end - this__36616.off);
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
var this__36617 = this;
var h__2203__auto____36618 = this__36617.__hash;
if(!((h__2203__auto____36618 == null)))
{return h__2203__auto____36618;
} else
{var h__2203__auto____36619 = cljs.core.hash_coll.call(null,coll);
this__36617.__hash = h__2203__auto____36619;
return h__2203__auto____36619;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__36620 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__36621 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__36622 = this;
return cljs.core._nth.call(null,this__36622.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__36623 = this;
if((cljs.core._count.call(null,this__36623.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__36623.chunk),this__36623.more,this__36623.meta,null));
} else
{if((this__36623.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__36623.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__36624 = this;
if((this__36624.more == null))
{return null;
} else
{return this__36624.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__36625 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__36626 = this;
return (new cljs.core.ChunkedCons(this__36626.chunk,this__36626.more,m,this__36626.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__36627 = this;
return this__36627.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__36628 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__36628.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__36629 = this;
return this__36629.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__36630 = this;
if((this__36630.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__36630.more;
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
if((function (){var G__36634__36635 = s;
if(G__36634__36635)
{if((function (){var or__3824__auto____36636 = (G__36634__36635.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____36636)
{return or__3824__auto____36636;
} else
{return G__36634__36635.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__36634__36635.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__36634__36635);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__36634__36635);
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
var ary__36639 = [];
var s__36640 = s;
while(true){
if(cljs.core.seq.call(null,s__36640))
{ary__36639.push(cljs.core.first.call(null,s__36640));
{
var G__36641 = cljs.core.next.call(null,s__36640);
s__36640 = G__36641;
continue;
}
} else
{return ary__36639;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__36645 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__36646 = 0;
var xs__36647 = cljs.core.seq.call(null,coll);
while(true){
if(xs__36647)
{(ret__36645[i__36646] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__36647)));
{
var G__36648 = (i__36646 + 1);
var G__36649 = cljs.core.next.call(null,xs__36647);
i__36646 = G__36648;
xs__36647 = G__36649;
continue;
}
} else
{}
break;
}
return ret__36645;
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
var a__36657 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__36658 = cljs.core.seq.call(null,init_val_or_seq);
var i__36659 = 0;
var s__36660 = s__36658;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____36661 = s__36660;
if(and__3822__auto____36661)
{return (i__36659 < size);
} else
{return and__3822__auto____36661;
}
})()))
{(a__36657[i__36659] = cljs.core.first.call(null,s__36660));
{
var G__36664 = (i__36659 + 1);
var G__36665 = cljs.core.next.call(null,s__36660);
i__36659 = G__36664;
s__36660 = G__36665;
continue;
}
} else
{return a__36657;
}
break;
}
} else
{var n__2549__auto____36662 = size;
var i__36663 = 0;
while(true){
if((i__36663 < n__2549__auto____36662))
{(a__36657[i__36663] = init_val_or_seq);
{
var G__36666 = (i__36663 + 1);
i__36663 = G__36666;
continue;
}
} else
{}
break;
}
return a__36657;
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
var a__36674 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__36675 = cljs.core.seq.call(null,init_val_or_seq);
var i__36676 = 0;
var s__36677 = s__36675;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____36678 = s__36677;
if(and__3822__auto____36678)
{return (i__36676 < size);
} else
{return and__3822__auto____36678;
}
})()))
{(a__36674[i__36676] = cljs.core.first.call(null,s__36677));
{
var G__36681 = (i__36676 + 1);
var G__36682 = cljs.core.next.call(null,s__36677);
i__36676 = G__36681;
s__36677 = G__36682;
continue;
}
} else
{return a__36674;
}
break;
}
} else
{var n__2549__auto____36679 = size;
var i__36680 = 0;
while(true){
if((i__36680 < n__2549__auto____36679))
{(a__36674[i__36680] = init_val_or_seq);
{
var G__36683 = (i__36680 + 1);
i__36680 = G__36683;
continue;
}
} else
{}
break;
}
return a__36674;
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
var a__36691 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__36692 = cljs.core.seq.call(null,init_val_or_seq);
var i__36693 = 0;
var s__36694 = s__36692;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____36695 = s__36694;
if(and__3822__auto____36695)
{return (i__36693 < size);
} else
{return and__3822__auto____36695;
}
})()))
{(a__36691[i__36693] = cljs.core.first.call(null,s__36694));
{
var G__36698 = (i__36693 + 1);
var G__36699 = cljs.core.next.call(null,s__36694);
i__36693 = G__36698;
s__36694 = G__36699;
continue;
}
} else
{return a__36691;
}
break;
}
} else
{var n__2549__auto____36696 = size;
var i__36697 = 0;
while(true){
if((i__36697 < n__2549__auto____36696))
{(a__36691[i__36697] = init_val_or_seq);
{
var G__36700 = (i__36697 + 1);
i__36697 = G__36700;
continue;
}
} else
{}
break;
}
return a__36691;
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
{var s__36705 = s;
var i__36706 = n;
var sum__36707 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____36708 = (i__36706 > 0);
if(and__3822__auto____36708)
{return cljs.core.seq.call(null,s__36705);
} else
{return and__3822__auto____36708;
}
})()))
{{
var G__36709 = cljs.core.next.call(null,s__36705);
var G__36710 = (i__36706 - 1);
var G__36711 = (sum__36707 + 1);
s__36705 = G__36709;
i__36706 = G__36710;
sum__36707 = G__36711;
continue;
}
} else
{return sum__36707;
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
var s__36716 = cljs.core.seq.call(null,x);
if(s__36716)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__36716))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__36716),concat.call(null,cljs.core.chunk_rest.call(null,s__36716),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__36716),concat.call(null,cljs.core.rest.call(null,s__36716),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__36720__delegate = function (x,y,zs){
var cat__36719 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__36718 = cljs.core.seq.call(null,xys);
if(xys__36718)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__36718))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__36718),cat.call(null,cljs.core.chunk_rest.call(null,xys__36718),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__36718),cat.call(null,cljs.core.rest.call(null,xys__36718),zs));
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
return cat__36719.call(null,concat.call(null,x,y),zs);
};
var G__36720 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36720__delegate.call(this, x, y, zs);
};
G__36720.cljs$lang$maxFixedArity = 2;
G__36720.cljs$lang$applyTo = (function (arglist__36721){
var x = cljs.core.first(arglist__36721);
var y = cljs.core.first(cljs.core.next(arglist__36721));
var zs = cljs.core.rest(cljs.core.next(arglist__36721));
return G__36720__delegate(x, y, zs);
});
G__36720.cljs$lang$arity$variadic = G__36720__delegate;
return G__36720;
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
var G__36722__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__36722 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__36722__delegate.call(this, a, b, c, d, more);
};
G__36722.cljs$lang$maxFixedArity = 4;
G__36722.cljs$lang$applyTo = (function (arglist__36723){
var a = cljs.core.first(arglist__36723);
var b = cljs.core.first(cljs.core.next(arglist__36723));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__36723)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__36723))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__36723))));
return G__36722__delegate(a, b, c, d, more);
});
G__36722.cljs$lang$arity$variadic = G__36722__delegate;
return G__36722;
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
var args__36765 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__36766 = cljs.core._first.call(null,args__36765);
var args__36767 = cljs.core._rest.call(null,args__36765);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__36766);
} else
{return f.call(null,a__36766);
}
} else
{var b__36768 = cljs.core._first.call(null,args__36767);
var args__36769 = cljs.core._rest.call(null,args__36767);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__36766,b__36768);
} else
{return f.call(null,a__36766,b__36768);
}
} else
{var c__36770 = cljs.core._first.call(null,args__36769);
var args__36771 = cljs.core._rest.call(null,args__36769);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__36766,b__36768,c__36770);
} else
{return f.call(null,a__36766,b__36768,c__36770);
}
} else
{var d__36772 = cljs.core._first.call(null,args__36771);
var args__36773 = cljs.core._rest.call(null,args__36771);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__36766,b__36768,c__36770,d__36772);
} else
{return f.call(null,a__36766,b__36768,c__36770,d__36772);
}
} else
{var e__36774 = cljs.core._first.call(null,args__36773);
var args__36775 = cljs.core._rest.call(null,args__36773);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__36766,b__36768,c__36770,d__36772,e__36774);
} else
{return f.call(null,a__36766,b__36768,c__36770,d__36772,e__36774);
}
} else
{var f__36776 = cljs.core._first.call(null,args__36775);
var args__36777 = cljs.core._rest.call(null,args__36775);
if((argc === 6))
{if(f__36776.cljs$lang$arity$6)
{return f__36776.cljs$lang$arity$6(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776);
}
} else
{var g__36778 = cljs.core._first.call(null,args__36777);
var args__36779 = cljs.core._rest.call(null,args__36777);
if((argc === 7))
{if(f__36776.cljs$lang$arity$7)
{return f__36776.cljs$lang$arity$7(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778);
}
} else
{var h__36780 = cljs.core._first.call(null,args__36779);
var args__36781 = cljs.core._rest.call(null,args__36779);
if((argc === 8))
{if(f__36776.cljs$lang$arity$8)
{return f__36776.cljs$lang$arity$8(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780);
}
} else
{var i__36782 = cljs.core._first.call(null,args__36781);
var args__36783 = cljs.core._rest.call(null,args__36781);
if((argc === 9))
{if(f__36776.cljs$lang$arity$9)
{return f__36776.cljs$lang$arity$9(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782);
}
} else
{var j__36784 = cljs.core._first.call(null,args__36783);
var args__36785 = cljs.core._rest.call(null,args__36783);
if((argc === 10))
{if(f__36776.cljs$lang$arity$10)
{return f__36776.cljs$lang$arity$10(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784);
}
} else
{var k__36786 = cljs.core._first.call(null,args__36785);
var args__36787 = cljs.core._rest.call(null,args__36785);
if((argc === 11))
{if(f__36776.cljs$lang$arity$11)
{return f__36776.cljs$lang$arity$11(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786);
}
} else
{var l__36788 = cljs.core._first.call(null,args__36787);
var args__36789 = cljs.core._rest.call(null,args__36787);
if((argc === 12))
{if(f__36776.cljs$lang$arity$12)
{return f__36776.cljs$lang$arity$12(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788);
}
} else
{var m__36790 = cljs.core._first.call(null,args__36789);
var args__36791 = cljs.core._rest.call(null,args__36789);
if((argc === 13))
{if(f__36776.cljs$lang$arity$13)
{return f__36776.cljs$lang$arity$13(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790);
}
} else
{var n__36792 = cljs.core._first.call(null,args__36791);
var args__36793 = cljs.core._rest.call(null,args__36791);
if((argc === 14))
{if(f__36776.cljs$lang$arity$14)
{return f__36776.cljs$lang$arity$14(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792);
}
} else
{var o__36794 = cljs.core._first.call(null,args__36793);
var args__36795 = cljs.core._rest.call(null,args__36793);
if((argc === 15))
{if(f__36776.cljs$lang$arity$15)
{return f__36776.cljs$lang$arity$15(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792,o__36794);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792,o__36794);
}
} else
{var p__36796 = cljs.core._first.call(null,args__36795);
var args__36797 = cljs.core._rest.call(null,args__36795);
if((argc === 16))
{if(f__36776.cljs$lang$arity$16)
{return f__36776.cljs$lang$arity$16(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792,o__36794,p__36796);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792,o__36794,p__36796);
}
} else
{var q__36798 = cljs.core._first.call(null,args__36797);
var args__36799 = cljs.core._rest.call(null,args__36797);
if((argc === 17))
{if(f__36776.cljs$lang$arity$17)
{return f__36776.cljs$lang$arity$17(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792,o__36794,p__36796,q__36798);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792,o__36794,p__36796,q__36798);
}
} else
{var r__36800 = cljs.core._first.call(null,args__36799);
var args__36801 = cljs.core._rest.call(null,args__36799);
if((argc === 18))
{if(f__36776.cljs$lang$arity$18)
{return f__36776.cljs$lang$arity$18(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792,o__36794,p__36796,q__36798,r__36800);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792,o__36794,p__36796,q__36798,r__36800);
}
} else
{var s__36802 = cljs.core._first.call(null,args__36801);
var args__36803 = cljs.core._rest.call(null,args__36801);
if((argc === 19))
{if(f__36776.cljs$lang$arity$19)
{return f__36776.cljs$lang$arity$19(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792,o__36794,p__36796,q__36798,r__36800,s__36802);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792,o__36794,p__36796,q__36798,r__36800,s__36802);
}
} else
{var t__36804 = cljs.core._first.call(null,args__36803);
var args__36805 = cljs.core._rest.call(null,args__36803);
if((argc === 20))
{if(f__36776.cljs$lang$arity$20)
{return f__36776.cljs$lang$arity$20(a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792,o__36794,p__36796,q__36798,r__36800,s__36802,t__36804);
} else
{return f__36776.call(null,a__36766,b__36768,c__36770,d__36772,e__36774,f__36776,g__36778,h__36780,i__36782,j__36784,k__36786,l__36788,m__36790,n__36792,o__36794,p__36796,q__36798,r__36800,s__36802,t__36804);
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
var fixed_arity__36820 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__36821 = cljs.core.bounded_count.call(null,args,(fixed_arity__36820 + 1));
if((bc__36821 <= fixed_arity__36820))
{return cljs.core.apply_to.call(null,f,bc__36821,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__36822 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__36823 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__36824 = cljs.core.bounded_count.call(null,arglist__36822,(fixed_arity__36823 + 1));
if((bc__36824 <= fixed_arity__36823))
{return cljs.core.apply_to.call(null,f,bc__36824,arglist__36822);
} else
{return f.cljs$lang$applyTo(arglist__36822);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__36822));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__36825 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__36826 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__36827 = cljs.core.bounded_count.call(null,arglist__36825,(fixed_arity__36826 + 1));
if((bc__36827 <= fixed_arity__36826))
{return cljs.core.apply_to.call(null,f,bc__36827,arglist__36825);
} else
{return f.cljs$lang$applyTo(arglist__36825);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__36825));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__36828 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__36829 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__36830 = cljs.core.bounded_count.call(null,arglist__36828,(fixed_arity__36829 + 1));
if((bc__36830 <= fixed_arity__36829))
{return cljs.core.apply_to.call(null,f,bc__36830,arglist__36828);
} else
{return f.cljs$lang$applyTo(arglist__36828);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__36828));
}
});
var apply__6 = (function() { 
var G__36834__delegate = function (f,a,b,c,d,args){
var arglist__36831 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__36832 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__36833 = cljs.core.bounded_count.call(null,arglist__36831,(fixed_arity__36832 + 1));
if((bc__36833 <= fixed_arity__36832))
{return cljs.core.apply_to.call(null,f,bc__36833,arglist__36831);
} else
{return f.cljs$lang$applyTo(arglist__36831);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__36831));
}
};
var G__36834 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__36834__delegate.call(this, f, a, b, c, d, args);
};
G__36834.cljs$lang$maxFixedArity = 5;
G__36834.cljs$lang$applyTo = (function (arglist__36835){
var f = cljs.core.first(arglist__36835);
var a = cljs.core.first(cljs.core.next(arglist__36835));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__36835)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__36835))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__36835)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__36835)))));
return G__36834__delegate(f, a, b, c, d, args);
});
G__36834.cljs$lang$arity$variadic = G__36834__delegate;
return G__36834;
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
vary_meta.cljs$lang$applyTo = (function (arglist__36836){
var obj = cljs.core.first(arglist__36836);
var f = cljs.core.first(cljs.core.next(arglist__36836));
var args = cljs.core.rest(cljs.core.next(arglist__36836));
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
var G__36837__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__36837 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36837__delegate.call(this, x, y, more);
};
G__36837.cljs$lang$maxFixedArity = 2;
G__36837.cljs$lang$applyTo = (function (arglist__36838){
var x = cljs.core.first(arglist__36838);
var y = cljs.core.first(cljs.core.next(arglist__36838));
var more = cljs.core.rest(cljs.core.next(arglist__36838));
return G__36837__delegate(x, y, more);
});
G__36837.cljs$lang$arity$variadic = G__36837__delegate;
return G__36837;
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
var G__36839 = pred;
var G__36840 = cljs.core.next.call(null,coll);
pred = G__36839;
coll = G__36840;
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
{var or__3824__auto____36842 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____36842))
{return or__3824__auto____36842;
} else
{{
var G__36843 = pred;
var G__36844 = cljs.core.next.call(null,coll);
pred = G__36843;
coll = G__36844;
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
var G__36845 = null;
var G__36845__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__36845__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__36845__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__36845__3 = (function() { 
var G__36846__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__36846 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__36846__delegate.call(this, x, y, zs);
};
G__36846.cljs$lang$maxFixedArity = 2;
G__36846.cljs$lang$applyTo = (function (arglist__36847){
var x = cljs.core.first(arglist__36847);
var y = cljs.core.first(cljs.core.next(arglist__36847));
var zs = cljs.core.rest(cljs.core.next(arglist__36847));
return G__36846__delegate(x, y, zs);
});
G__36846.cljs$lang$arity$variadic = G__36846__delegate;
return G__36846;
})()
;
G__36845 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__36845__0.call(this);
case 1:
return G__36845__1.call(this,x);
case 2:
return G__36845__2.call(this,x,y);
default:
return G__36845__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__36845.cljs$lang$maxFixedArity = 2;
G__36845.cljs$lang$applyTo = G__36845__3.cljs$lang$applyTo;
return G__36845;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__36848__delegate = function (args){
return x;
};
var G__36848 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__36848__delegate.call(this, args);
};
G__36848.cljs$lang$maxFixedArity = 0;
G__36848.cljs$lang$applyTo = (function (arglist__36849){
var args = cljs.core.seq(arglist__36849);;
return G__36848__delegate(args);
});
G__36848.cljs$lang$arity$variadic = G__36848__delegate;
return G__36848;
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
var G__36856 = null;
var G__36856__0 = (function (){
return f.call(null,g.call(null));
});
var G__36856__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__36856__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__36856__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__36856__4 = (function() { 
var G__36857__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__36857 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__36857__delegate.call(this, x, y, z, args);
};
G__36857.cljs$lang$maxFixedArity = 3;
G__36857.cljs$lang$applyTo = (function (arglist__36858){
var x = cljs.core.first(arglist__36858);
var y = cljs.core.first(cljs.core.next(arglist__36858));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__36858)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__36858)));
return G__36857__delegate(x, y, z, args);
});
G__36857.cljs$lang$arity$variadic = G__36857__delegate;
return G__36857;
})()
;
G__36856 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__36856__0.call(this);
case 1:
return G__36856__1.call(this,x);
case 2:
return G__36856__2.call(this,x,y);
case 3:
return G__36856__3.call(this,x,y,z);
default:
return G__36856__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__36856.cljs$lang$maxFixedArity = 3;
G__36856.cljs$lang$applyTo = G__36856__4.cljs$lang$applyTo;
return G__36856;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__36859 = null;
var G__36859__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__36859__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__36859__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__36859__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__36859__4 = (function() { 
var G__36860__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__36860 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__36860__delegate.call(this, x, y, z, args);
};
G__36860.cljs$lang$maxFixedArity = 3;
G__36860.cljs$lang$applyTo = (function (arglist__36861){
var x = cljs.core.first(arglist__36861);
var y = cljs.core.first(cljs.core.next(arglist__36861));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__36861)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__36861)));
return G__36860__delegate(x, y, z, args);
});
G__36860.cljs$lang$arity$variadic = G__36860__delegate;
return G__36860;
})()
;
G__36859 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__36859__0.call(this);
case 1:
return G__36859__1.call(this,x);
case 2:
return G__36859__2.call(this,x,y);
case 3:
return G__36859__3.call(this,x,y,z);
default:
return G__36859__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__36859.cljs$lang$maxFixedArity = 3;
G__36859.cljs$lang$applyTo = G__36859__4.cljs$lang$applyTo;
return G__36859;
})()
});
var comp__4 = (function() { 
var G__36862__delegate = function (f1,f2,f3,fs){
var fs__36853 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__36863__delegate = function (args){
var ret__36854 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__36853),args);
var fs__36855 = cljs.core.next.call(null,fs__36853);
while(true){
if(fs__36855)
{{
var G__36864 = cljs.core.first.call(null,fs__36855).call(null,ret__36854);
var G__36865 = cljs.core.next.call(null,fs__36855);
ret__36854 = G__36864;
fs__36855 = G__36865;
continue;
}
} else
{return ret__36854;
}
break;
}
};
var G__36863 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__36863__delegate.call(this, args);
};
G__36863.cljs$lang$maxFixedArity = 0;
G__36863.cljs$lang$applyTo = (function (arglist__36866){
var args = cljs.core.seq(arglist__36866);;
return G__36863__delegate(args);
});
G__36863.cljs$lang$arity$variadic = G__36863__delegate;
return G__36863;
})()
;
};
var G__36862 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__36862__delegate.call(this, f1, f2, f3, fs);
};
G__36862.cljs$lang$maxFixedArity = 3;
G__36862.cljs$lang$applyTo = (function (arglist__36867){
var f1 = cljs.core.first(arglist__36867);
var f2 = cljs.core.first(cljs.core.next(arglist__36867));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__36867)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__36867)));
return G__36862__delegate(f1, f2, f3, fs);
});
G__36862.cljs$lang$arity$variadic = G__36862__delegate;
return G__36862;
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
var G__36868__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__36868 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__36868__delegate.call(this, args);
};
G__36868.cljs$lang$maxFixedArity = 0;
G__36868.cljs$lang$applyTo = (function (arglist__36869){
var args = cljs.core.seq(arglist__36869);;
return G__36868__delegate(args);
});
G__36868.cljs$lang$arity$variadic = G__36868__delegate;
return G__36868;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__36870__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__36870 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__36870__delegate.call(this, args);
};
G__36870.cljs$lang$maxFixedArity = 0;
G__36870.cljs$lang$applyTo = (function (arglist__36871){
var args = cljs.core.seq(arglist__36871);;
return G__36870__delegate(args);
});
G__36870.cljs$lang$arity$variadic = G__36870__delegate;
return G__36870;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__36872__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__36872 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__36872__delegate.call(this, args);
};
G__36872.cljs$lang$maxFixedArity = 0;
G__36872.cljs$lang$applyTo = (function (arglist__36873){
var args = cljs.core.seq(arglist__36873);;
return G__36872__delegate(args);
});
G__36872.cljs$lang$arity$variadic = G__36872__delegate;
return G__36872;
})()
;
});
var partial__5 = (function() { 
var G__36874__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__36875__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__36875 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__36875__delegate.call(this, args);
};
G__36875.cljs$lang$maxFixedArity = 0;
G__36875.cljs$lang$applyTo = (function (arglist__36876){
var args = cljs.core.seq(arglist__36876);;
return G__36875__delegate(args);
});
G__36875.cljs$lang$arity$variadic = G__36875__delegate;
return G__36875;
})()
;
};
var G__36874 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__36874__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__36874.cljs$lang$maxFixedArity = 4;
G__36874.cljs$lang$applyTo = (function (arglist__36877){
var f = cljs.core.first(arglist__36877);
var arg1 = cljs.core.first(cljs.core.next(arglist__36877));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__36877)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__36877))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__36877))));
return G__36874__delegate(f, arg1, arg2, arg3, more);
});
G__36874.cljs$lang$arity$variadic = G__36874__delegate;
return G__36874;
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
var G__36878 = null;
var G__36878__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__36878__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__36878__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__36878__4 = (function() { 
var G__36879__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__36879 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__36879__delegate.call(this, a, b, c, ds);
};
G__36879.cljs$lang$maxFixedArity = 3;
G__36879.cljs$lang$applyTo = (function (arglist__36880){
var a = cljs.core.first(arglist__36880);
var b = cljs.core.first(cljs.core.next(arglist__36880));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__36880)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__36880)));
return G__36879__delegate(a, b, c, ds);
});
G__36879.cljs$lang$arity$variadic = G__36879__delegate;
return G__36879;
})()
;
G__36878 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__36878__1.call(this,a);
case 2:
return G__36878__2.call(this,a,b);
case 3:
return G__36878__3.call(this,a,b,c);
default:
return G__36878__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__36878.cljs$lang$maxFixedArity = 3;
G__36878.cljs$lang$applyTo = G__36878__4.cljs$lang$applyTo;
return G__36878;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__36881 = null;
var G__36881__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__36881__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__36881__4 = (function() { 
var G__36882__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__36882 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__36882__delegate.call(this, a, b, c, ds);
};
G__36882.cljs$lang$maxFixedArity = 3;
G__36882.cljs$lang$applyTo = (function (arglist__36883){
var a = cljs.core.first(arglist__36883);
var b = cljs.core.first(cljs.core.next(arglist__36883));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__36883)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__36883)));
return G__36882__delegate(a, b, c, ds);
});
G__36882.cljs$lang$arity$variadic = G__36882__delegate;
return G__36882;
})()
;
G__36881 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__36881__2.call(this,a,b);
case 3:
return G__36881__3.call(this,a,b,c);
default:
return G__36881__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__36881.cljs$lang$maxFixedArity = 3;
G__36881.cljs$lang$applyTo = G__36881__4.cljs$lang$applyTo;
return G__36881;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__36884 = null;
var G__36884__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__36884__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__36884__4 = (function() { 
var G__36885__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__36885 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__36885__delegate.call(this, a, b, c, ds);
};
G__36885.cljs$lang$maxFixedArity = 3;
G__36885.cljs$lang$applyTo = (function (arglist__36886){
var a = cljs.core.first(arglist__36886);
var b = cljs.core.first(cljs.core.next(arglist__36886));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__36886)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__36886)));
return G__36885__delegate(a, b, c, ds);
});
G__36885.cljs$lang$arity$variadic = G__36885__delegate;
return G__36885;
})()
;
G__36884 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__36884__2.call(this,a,b);
case 3:
return G__36884__3.call(this,a,b,c);
default:
return G__36884__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__36884.cljs$lang$maxFixedArity = 3;
G__36884.cljs$lang$applyTo = G__36884__4.cljs$lang$applyTo;
return G__36884;
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
var mapi__36902 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____36910 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____36910)
{var s__36911 = temp__3974__auto____36910;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36911))
{var c__36912 = cljs.core.chunk_first.call(null,s__36911);
var size__36913 = cljs.core.count.call(null,c__36912);
var b__36914 = cljs.core.chunk_buffer.call(null,size__36913);
var n__2549__auto____36915 = size__36913;
var i__36916 = 0;
while(true){
if((i__36916 < n__2549__auto____36915))
{cljs.core.chunk_append.call(null,b__36914,f.call(null,(idx + i__36916),cljs.core._nth.call(null,c__36912,i__36916)));
{
var G__36917 = (i__36916 + 1);
i__36916 = G__36917;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36914),mapi.call(null,(idx + size__36913),cljs.core.chunk_rest.call(null,s__36911)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__36911)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__36911)));
}
} else
{return null;
}
}),null));
});
return mapi__36902.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____36927 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____36927)
{var s__36928 = temp__3974__auto____36927;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36928))
{var c__36929 = cljs.core.chunk_first.call(null,s__36928);
var size__36930 = cljs.core.count.call(null,c__36929);
var b__36931 = cljs.core.chunk_buffer.call(null,size__36930);
var n__2549__auto____36932 = size__36930;
var i__36933 = 0;
while(true){
if((i__36933 < n__2549__auto____36932))
{var x__36934 = f.call(null,cljs.core._nth.call(null,c__36929,i__36933));
if((x__36934 == null))
{} else
{cljs.core.chunk_append.call(null,b__36931,x__36934);
}
{
var G__36936 = (i__36933 + 1);
i__36933 = G__36936;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36931),keep.call(null,f,cljs.core.chunk_rest.call(null,s__36928)));
} else
{var x__36935 = f.call(null,cljs.core.first.call(null,s__36928));
if((x__36935 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__36928));
} else
{return cljs.core.cons.call(null,x__36935,keep.call(null,f,cljs.core.rest.call(null,s__36928)));
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
var keepi__36962 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____36972 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____36972)
{var s__36973 = temp__3974__auto____36972;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36973))
{var c__36974 = cljs.core.chunk_first.call(null,s__36973);
var size__36975 = cljs.core.count.call(null,c__36974);
var b__36976 = cljs.core.chunk_buffer.call(null,size__36975);
var n__2549__auto____36977 = size__36975;
var i__36978 = 0;
while(true){
if((i__36978 < n__2549__auto____36977))
{var x__36979 = f.call(null,(idx + i__36978),cljs.core._nth.call(null,c__36974,i__36978));
if((x__36979 == null))
{} else
{cljs.core.chunk_append.call(null,b__36976,x__36979);
}
{
var G__36981 = (i__36978 + 1);
i__36978 = G__36981;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36976),keepi.call(null,(idx + size__36975),cljs.core.chunk_rest.call(null,s__36973)));
} else
{var x__36980 = f.call(null,idx,cljs.core.first.call(null,s__36973));
if((x__36980 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__36973));
} else
{return cljs.core.cons.call(null,x__36980,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__36973)));
}
}
} else
{return null;
}
}),null));
});
return keepi__36962.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____37067 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____37067))
{return p.call(null,y);
} else
{return and__3822__auto____37067;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____37068 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____37068))
{var and__3822__auto____37069 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____37069))
{return p.call(null,z);
} else
{return and__3822__auto____37069;
}
} else
{return and__3822__auto____37068;
}
})());
});
var ep1__4 = (function() { 
var G__37138__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____37070 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____37070))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____37070;
}
})());
};
var G__37138 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__37138__delegate.call(this, x, y, z, args);
};
G__37138.cljs$lang$maxFixedArity = 3;
G__37138.cljs$lang$applyTo = (function (arglist__37139){
var x = cljs.core.first(arglist__37139);
var y = cljs.core.first(cljs.core.next(arglist__37139));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37139)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__37139)));
return G__37138__delegate(x, y, z, args);
});
G__37138.cljs$lang$arity$variadic = G__37138__delegate;
return G__37138;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____37082 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____37082))
{return p2.call(null,x);
} else
{return and__3822__auto____37082;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____37083 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____37083))
{var and__3822__auto____37084 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____37084))
{var and__3822__auto____37085 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____37085))
{return p2.call(null,y);
} else
{return and__3822__auto____37085;
}
} else
{return and__3822__auto____37084;
}
} else
{return and__3822__auto____37083;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____37086 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____37086))
{var and__3822__auto____37087 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____37087))
{var and__3822__auto____37088 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____37088))
{var and__3822__auto____37089 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____37089))
{var and__3822__auto____37090 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____37090))
{return p2.call(null,z);
} else
{return and__3822__auto____37090;
}
} else
{return and__3822__auto____37089;
}
} else
{return and__3822__auto____37088;
}
} else
{return and__3822__auto____37087;
}
} else
{return and__3822__auto____37086;
}
})());
});
var ep2__4 = (function() { 
var G__37140__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____37091 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____37091))
{return cljs.core.every_QMARK_.call(null,(function (p1__36937_SHARP_){
var and__3822__auto____37092 = p1.call(null,p1__36937_SHARP_);
if(cljs.core.truth_(and__3822__auto____37092))
{return p2.call(null,p1__36937_SHARP_);
} else
{return and__3822__auto____37092;
}
}),args);
} else
{return and__3822__auto____37091;
}
})());
};
var G__37140 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__37140__delegate.call(this, x, y, z, args);
};
G__37140.cljs$lang$maxFixedArity = 3;
G__37140.cljs$lang$applyTo = (function (arglist__37141){
var x = cljs.core.first(arglist__37141);
var y = cljs.core.first(cljs.core.next(arglist__37141));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37141)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__37141)));
return G__37140__delegate(x, y, z, args);
});
G__37140.cljs$lang$arity$variadic = G__37140__delegate;
return G__37140;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____37111 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____37111))
{var and__3822__auto____37112 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____37112))
{return p3.call(null,x);
} else
{return and__3822__auto____37112;
}
} else
{return and__3822__auto____37111;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____37113 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____37113))
{var and__3822__auto____37114 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____37114))
{var and__3822__auto____37115 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____37115))
{var and__3822__auto____37116 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____37116))
{var and__3822__auto____37117 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____37117))
{return p3.call(null,y);
} else
{return and__3822__auto____37117;
}
} else
{return and__3822__auto____37116;
}
} else
{return and__3822__auto____37115;
}
} else
{return and__3822__auto____37114;
}
} else
{return and__3822__auto____37113;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____37118 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____37118))
{var and__3822__auto____37119 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____37119))
{var and__3822__auto____37120 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____37120))
{var and__3822__auto____37121 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____37121))
{var and__3822__auto____37122 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____37122))
{var and__3822__auto____37123 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____37123))
{var and__3822__auto____37124 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____37124))
{var and__3822__auto____37125 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____37125))
{return p3.call(null,z);
} else
{return and__3822__auto____37125;
}
} else
{return and__3822__auto____37124;
}
} else
{return and__3822__auto____37123;
}
} else
{return and__3822__auto____37122;
}
} else
{return and__3822__auto____37121;
}
} else
{return and__3822__auto____37120;
}
} else
{return and__3822__auto____37119;
}
} else
{return and__3822__auto____37118;
}
})());
});
var ep3__4 = (function() { 
var G__37142__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____37126 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____37126))
{return cljs.core.every_QMARK_.call(null,(function (p1__36938_SHARP_){
var and__3822__auto____37127 = p1.call(null,p1__36938_SHARP_);
if(cljs.core.truth_(and__3822__auto____37127))
{var and__3822__auto____37128 = p2.call(null,p1__36938_SHARP_);
if(cljs.core.truth_(and__3822__auto____37128))
{return p3.call(null,p1__36938_SHARP_);
} else
{return and__3822__auto____37128;
}
} else
{return and__3822__auto____37127;
}
}),args);
} else
{return and__3822__auto____37126;
}
})());
};
var G__37142 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__37142__delegate.call(this, x, y, z, args);
};
G__37142.cljs$lang$maxFixedArity = 3;
G__37142.cljs$lang$applyTo = (function (arglist__37143){
var x = cljs.core.first(arglist__37143);
var y = cljs.core.first(cljs.core.next(arglist__37143));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37143)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__37143)));
return G__37142__delegate(x, y, z, args);
});
G__37142.cljs$lang$arity$variadic = G__37142__delegate;
return G__37142;
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
var G__37144__delegate = function (p1,p2,p3,ps){
var ps__37129 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__36939_SHARP_){
return p1__36939_SHARP_.call(null,x);
}),ps__37129);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__36940_SHARP_){
var and__3822__auto____37134 = p1__36940_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____37134))
{return p1__36940_SHARP_.call(null,y);
} else
{return and__3822__auto____37134;
}
}),ps__37129);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__36941_SHARP_){
var and__3822__auto____37135 = p1__36941_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____37135))
{var and__3822__auto____37136 = p1__36941_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____37136))
{return p1__36941_SHARP_.call(null,z);
} else
{return and__3822__auto____37136;
}
} else
{return and__3822__auto____37135;
}
}),ps__37129);
});
var epn__4 = (function() { 
var G__37145__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____37137 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____37137))
{return cljs.core.every_QMARK_.call(null,(function (p1__36942_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__36942_SHARP_,args);
}),ps__37129);
} else
{return and__3822__auto____37137;
}
})());
};
var G__37145 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__37145__delegate.call(this, x, y, z, args);
};
G__37145.cljs$lang$maxFixedArity = 3;
G__37145.cljs$lang$applyTo = (function (arglist__37146){
var x = cljs.core.first(arglist__37146);
var y = cljs.core.first(cljs.core.next(arglist__37146));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37146)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__37146)));
return G__37145__delegate(x, y, z, args);
});
G__37145.cljs$lang$arity$variadic = G__37145__delegate;
return G__37145;
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
var G__37144 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__37144__delegate.call(this, p1, p2, p3, ps);
};
G__37144.cljs$lang$maxFixedArity = 3;
G__37144.cljs$lang$applyTo = (function (arglist__37147){
var p1 = cljs.core.first(arglist__37147);
var p2 = cljs.core.first(cljs.core.next(arglist__37147));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37147)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__37147)));
return G__37144__delegate(p1, p2, p3, ps);
});
G__37144.cljs$lang$arity$variadic = G__37144__delegate;
return G__37144;
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
var or__3824__auto____37228 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____37228))
{return or__3824__auto____37228;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____37229 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____37229))
{return or__3824__auto____37229;
} else
{var or__3824__auto____37230 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____37230))
{return or__3824__auto____37230;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__37299__delegate = function (x,y,z,args){
var or__3824__auto____37231 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____37231))
{return or__3824__auto____37231;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__37299 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__37299__delegate.call(this, x, y, z, args);
};
G__37299.cljs$lang$maxFixedArity = 3;
G__37299.cljs$lang$applyTo = (function (arglist__37300){
var x = cljs.core.first(arglist__37300);
var y = cljs.core.first(cljs.core.next(arglist__37300));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37300)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__37300)));
return G__37299__delegate(x, y, z, args);
});
G__37299.cljs$lang$arity$variadic = G__37299__delegate;
return G__37299;
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
var or__3824__auto____37243 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____37243))
{return or__3824__auto____37243;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____37244 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____37244))
{return or__3824__auto____37244;
} else
{var or__3824__auto____37245 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____37245))
{return or__3824__auto____37245;
} else
{var or__3824__auto____37246 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____37246))
{return or__3824__auto____37246;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____37247 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____37247))
{return or__3824__auto____37247;
} else
{var or__3824__auto____37248 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____37248))
{return or__3824__auto____37248;
} else
{var or__3824__auto____37249 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____37249))
{return or__3824__auto____37249;
} else
{var or__3824__auto____37250 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____37250))
{return or__3824__auto____37250;
} else
{var or__3824__auto____37251 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____37251))
{return or__3824__auto____37251;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__37301__delegate = function (x,y,z,args){
var or__3824__auto____37252 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____37252))
{return or__3824__auto____37252;
} else
{return cljs.core.some.call(null,(function (p1__36982_SHARP_){
var or__3824__auto____37253 = p1.call(null,p1__36982_SHARP_);
if(cljs.core.truth_(or__3824__auto____37253))
{return or__3824__auto____37253;
} else
{return p2.call(null,p1__36982_SHARP_);
}
}),args);
}
};
var G__37301 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__37301__delegate.call(this, x, y, z, args);
};
G__37301.cljs$lang$maxFixedArity = 3;
G__37301.cljs$lang$applyTo = (function (arglist__37302){
var x = cljs.core.first(arglist__37302);
var y = cljs.core.first(cljs.core.next(arglist__37302));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37302)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__37302)));
return G__37301__delegate(x, y, z, args);
});
G__37301.cljs$lang$arity$variadic = G__37301__delegate;
return G__37301;
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
var or__3824__auto____37272 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____37272))
{return or__3824__auto____37272;
} else
{var or__3824__auto____37273 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____37273))
{return or__3824__auto____37273;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____37274 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____37274))
{return or__3824__auto____37274;
} else
{var or__3824__auto____37275 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____37275))
{return or__3824__auto____37275;
} else
{var or__3824__auto____37276 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____37276))
{return or__3824__auto____37276;
} else
{var or__3824__auto____37277 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____37277))
{return or__3824__auto____37277;
} else
{var or__3824__auto____37278 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____37278))
{return or__3824__auto____37278;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____37279 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____37279))
{return or__3824__auto____37279;
} else
{var or__3824__auto____37280 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____37280))
{return or__3824__auto____37280;
} else
{var or__3824__auto____37281 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____37281))
{return or__3824__auto____37281;
} else
{var or__3824__auto____37282 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____37282))
{return or__3824__auto____37282;
} else
{var or__3824__auto____37283 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____37283))
{return or__3824__auto____37283;
} else
{var or__3824__auto____37284 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____37284))
{return or__3824__auto____37284;
} else
{var or__3824__auto____37285 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____37285))
{return or__3824__auto____37285;
} else
{var or__3824__auto____37286 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____37286))
{return or__3824__auto____37286;
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
var G__37303__delegate = function (x,y,z,args){
var or__3824__auto____37287 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____37287))
{return or__3824__auto____37287;
} else
{return cljs.core.some.call(null,(function (p1__36983_SHARP_){
var or__3824__auto____37288 = p1.call(null,p1__36983_SHARP_);
if(cljs.core.truth_(or__3824__auto____37288))
{return or__3824__auto____37288;
} else
{var or__3824__auto____37289 = p2.call(null,p1__36983_SHARP_);
if(cljs.core.truth_(or__3824__auto____37289))
{return or__3824__auto____37289;
} else
{return p3.call(null,p1__36983_SHARP_);
}
}
}),args);
}
};
var G__37303 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__37303__delegate.call(this, x, y, z, args);
};
G__37303.cljs$lang$maxFixedArity = 3;
G__37303.cljs$lang$applyTo = (function (arglist__37304){
var x = cljs.core.first(arglist__37304);
var y = cljs.core.first(cljs.core.next(arglist__37304));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37304)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__37304)));
return G__37303__delegate(x, y, z, args);
});
G__37303.cljs$lang$arity$variadic = G__37303__delegate;
return G__37303;
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
var G__37305__delegate = function (p1,p2,p3,ps){
var ps__37290 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__36984_SHARP_){
return p1__36984_SHARP_.call(null,x);
}),ps__37290);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__36985_SHARP_){
var or__3824__auto____37295 = p1__36985_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____37295))
{return or__3824__auto____37295;
} else
{return p1__36985_SHARP_.call(null,y);
}
}),ps__37290);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__36986_SHARP_){
var or__3824__auto____37296 = p1__36986_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____37296))
{return or__3824__auto____37296;
} else
{var or__3824__auto____37297 = p1__36986_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____37297))
{return or__3824__auto____37297;
} else
{return p1__36986_SHARP_.call(null,z);
}
}
}),ps__37290);
});
var spn__4 = (function() { 
var G__37306__delegate = function (x,y,z,args){
var or__3824__auto____37298 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____37298))
{return or__3824__auto____37298;
} else
{return cljs.core.some.call(null,(function (p1__36987_SHARP_){
return cljs.core.some.call(null,p1__36987_SHARP_,args);
}),ps__37290);
}
};
var G__37306 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__37306__delegate.call(this, x, y, z, args);
};
G__37306.cljs$lang$maxFixedArity = 3;
G__37306.cljs$lang$applyTo = (function (arglist__37307){
var x = cljs.core.first(arglist__37307);
var y = cljs.core.first(cljs.core.next(arglist__37307));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37307)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__37307)));
return G__37306__delegate(x, y, z, args);
});
G__37306.cljs$lang$arity$variadic = G__37306__delegate;
return G__37306;
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
var G__37305 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__37305__delegate.call(this, p1, p2, p3, ps);
};
G__37305.cljs$lang$maxFixedArity = 3;
G__37305.cljs$lang$applyTo = (function (arglist__37308){
var p1 = cljs.core.first(arglist__37308);
var p2 = cljs.core.first(cljs.core.next(arglist__37308));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37308)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__37308)));
return G__37305__delegate(p1, p2, p3, ps);
});
G__37305.cljs$lang$arity$variadic = G__37305__delegate;
return G__37305;
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
var temp__3974__auto____37327 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____37327)
{var s__37328 = temp__3974__auto____37327;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37328))
{var c__37329 = cljs.core.chunk_first.call(null,s__37328);
var size__37330 = cljs.core.count.call(null,c__37329);
var b__37331 = cljs.core.chunk_buffer.call(null,size__37330);
var n__2549__auto____37332 = size__37330;
var i__37333 = 0;
while(true){
if((i__37333 < n__2549__auto____37332))
{cljs.core.chunk_append.call(null,b__37331,f.call(null,cljs.core._nth.call(null,c__37329,i__37333)));
{
var G__37345 = (i__37333 + 1);
i__37333 = G__37345;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37331),map.call(null,f,cljs.core.chunk_rest.call(null,s__37328)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__37328)),map.call(null,f,cljs.core.rest.call(null,s__37328)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__37334 = cljs.core.seq.call(null,c1);
var s2__37335 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____37336 = s1__37334;
if(and__3822__auto____37336)
{return s2__37335;
} else
{return and__3822__auto____37336;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__37334),cljs.core.first.call(null,s2__37335)),map.call(null,f,cljs.core.rest.call(null,s1__37334),cljs.core.rest.call(null,s2__37335)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__37337 = cljs.core.seq.call(null,c1);
var s2__37338 = cljs.core.seq.call(null,c2);
var s3__37339 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____37340 = s1__37337;
if(and__3822__auto____37340)
{var and__3822__auto____37341 = s2__37338;
if(and__3822__auto____37341)
{return s3__37339;
} else
{return and__3822__auto____37341;
}
} else
{return and__3822__auto____37340;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__37337),cljs.core.first.call(null,s2__37338),cljs.core.first.call(null,s3__37339)),map.call(null,f,cljs.core.rest.call(null,s1__37337),cljs.core.rest.call(null,s2__37338),cljs.core.rest.call(null,s3__37339)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__37346__delegate = function (f,c1,c2,c3,colls){
var step__37344 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__37343 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__37343))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__37343),step.call(null,map.call(null,cljs.core.rest,ss__37343)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__37148_SHARP_){
return cljs.core.apply.call(null,f,p1__37148_SHARP_);
}),step__37344.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__37346 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__37346__delegate.call(this, f, c1, c2, c3, colls);
};
G__37346.cljs$lang$maxFixedArity = 4;
G__37346.cljs$lang$applyTo = (function (arglist__37347){
var f = cljs.core.first(arglist__37347);
var c1 = cljs.core.first(cljs.core.next(arglist__37347));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37347)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__37347))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__37347))));
return G__37346__delegate(f, c1, c2, c3, colls);
});
G__37346.cljs$lang$arity$variadic = G__37346__delegate;
return G__37346;
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
{var temp__3974__auto____37350 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____37350)
{var s__37351 = temp__3974__auto____37350;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__37351),take.call(null,(n - 1),cljs.core.rest.call(null,s__37351)));
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
var step__37357 = (function (n,coll){
while(true){
var s__37355 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____37356 = (n > 0);
if(and__3822__auto____37356)
{return s__37355;
} else
{return and__3822__auto____37356;
}
})()))
{{
var G__37358 = (n - 1);
var G__37359 = cljs.core.rest.call(null,s__37355);
n = G__37358;
coll = G__37359;
continue;
}
} else
{return s__37355;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__37357.call(null,n,coll);
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
var s__37362 = cljs.core.seq.call(null,coll);
var lead__37363 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__37363)
{{
var G__37364 = cljs.core.next.call(null,s__37362);
var G__37365 = cljs.core.next.call(null,lead__37363);
s__37362 = G__37364;
lead__37363 = G__37365;
continue;
}
} else
{return s__37362;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__37371 = (function (pred,coll){
while(true){
var s__37369 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____37370 = s__37369;
if(and__3822__auto____37370)
{return pred.call(null,cljs.core.first.call(null,s__37369));
} else
{return and__3822__auto____37370;
}
})()))
{{
var G__37372 = pred;
var G__37373 = cljs.core.rest.call(null,s__37369);
pred = G__37372;
coll = G__37373;
continue;
}
} else
{return s__37369;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__37371.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____37376 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____37376)
{var s__37377 = temp__3974__auto____37376;
return cljs.core.concat.call(null,s__37377,cycle.call(null,s__37377));
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
var s1__37382 = cljs.core.seq.call(null,c1);
var s2__37383 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____37384 = s1__37382;
if(and__3822__auto____37384)
{return s2__37383;
} else
{return and__3822__auto____37384;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__37382),cljs.core.cons.call(null,cljs.core.first.call(null,s2__37383),interleave.call(null,cljs.core.rest.call(null,s1__37382),cljs.core.rest.call(null,s2__37383))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__37386__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__37385 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__37385))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__37385),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__37385)));
} else
{return null;
}
}),null));
};
var G__37386 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__37386__delegate.call(this, c1, c2, colls);
};
G__37386.cljs$lang$maxFixedArity = 2;
G__37386.cljs$lang$applyTo = (function (arglist__37387){
var c1 = cljs.core.first(arglist__37387);
var c2 = cljs.core.first(cljs.core.next(arglist__37387));
var colls = cljs.core.rest(cljs.core.next(arglist__37387));
return G__37386__delegate(c1, c2, colls);
});
G__37386.cljs$lang$arity$variadic = G__37386__delegate;
return G__37386;
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
var cat__37397 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____37395 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____37395)
{var coll__37396 = temp__3971__auto____37395;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__37396),cat.call(null,cljs.core.rest.call(null,coll__37396),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__37397.call(null,null,colls);
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
var G__37398__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__37398 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__37398__delegate.call(this, f, coll, colls);
};
G__37398.cljs$lang$maxFixedArity = 2;
G__37398.cljs$lang$applyTo = (function (arglist__37399){
var f = cljs.core.first(arglist__37399);
var coll = cljs.core.first(cljs.core.next(arglist__37399));
var colls = cljs.core.rest(cljs.core.next(arglist__37399));
return G__37398__delegate(f, coll, colls);
});
G__37398.cljs$lang$arity$variadic = G__37398__delegate;
return G__37398;
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
var temp__3974__auto____37409 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____37409)
{var s__37410 = temp__3974__auto____37409;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37410))
{var c__37411 = cljs.core.chunk_first.call(null,s__37410);
var size__37412 = cljs.core.count.call(null,c__37411);
var b__37413 = cljs.core.chunk_buffer.call(null,size__37412);
var n__2549__auto____37414 = size__37412;
var i__37415 = 0;
while(true){
if((i__37415 < n__2549__auto____37414))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__37411,i__37415))))
{cljs.core.chunk_append.call(null,b__37413,cljs.core._nth.call(null,c__37411,i__37415));
} else
{}
{
var G__37418 = (i__37415 + 1);
i__37415 = G__37418;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37413),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__37410)));
} else
{var f__37416 = cljs.core.first.call(null,s__37410);
var r__37417 = cljs.core.rest.call(null,s__37410);
if(cljs.core.truth_(pred.call(null,f__37416)))
{return cljs.core.cons.call(null,f__37416,filter.call(null,pred,r__37417));
} else
{return filter.call(null,pred,r__37417);
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
var walk__37421 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__37421.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__37419_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__37419_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__37425__37426 = to;
if(G__37425__37426)
{if((function (){var or__3824__auto____37427 = (G__37425__37426.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____37427)
{return or__3824__auto____37427;
} else
{return G__37425__37426.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__37425__37426.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__37425__37426);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__37425__37426);
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
var G__37428__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__37428 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__37428__delegate.call(this, f, c1, c2, c3, colls);
};
G__37428.cljs$lang$maxFixedArity = 4;
G__37428.cljs$lang$applyTo = (function (arglist__37429){
var f = cljs.core.first(arglist__37429);
var c1 = cljs.core.first(cljs.core.next(arglist__37429));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37429)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__37429))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__37429))));
return G__37428__delegate(f, c1, c2, c3, colls);
});
G__37428.cljs$lang$arity$variadic = G__37428__delegate;
return G__37428;
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
var temp__3974__auto____37436 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____37436)
{var s__37437 = temp__3974__auto____37436;
var p__37438 = cljs.core.take.call(null,n,s__37437);
if((n === cljs.core.count.call(null,p__37438)))
{return cljs.core.cons.call(null,p__37438,partition.call(null,n,step,cljs.core.drop.call(null,step,s__37437)));
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
var temp__3974__auto____37439 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____37439)
{var s__37440 = temp__3974__auto____37439;
var p__37441 = cljs.core.take.call(null,n,s__37440);
if((n === cljs.core.count.call(null,p__37441)))
{return cljs.core.cons.call(null,p__37441,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__37440)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__37441,pad)));
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
var sentinel__37446 = cljs.core.lookup_sentinel;
var m__37447 = m;
var ks__37448 = cljs.core.seq.call(null,ks);
while(true){
if(ks__37448)
{var m__37449 = cljs.core._lookup.call(null,m__37447,cljs.core.first.call(null,ks__37448),sentinel__37446);
if((sentinel__37446 === m__37449))
{return not_found;
} else
{{
var G__37450 = sentinel__37446;
var G__37451 = m__37449;
var G__37452 = cljs.core.next.call(null,ks__37448);
sentinel__37446 = G__37450;
m__37447 = G__37451;
ks__37448 = G__37452;
continue;
}
}
} else
{return m__37447;
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
cljs.core.assoc_in = (function assoc_in(m,p__37453,v){
var vec__37458__37459 = p__37453;
var k__37460 = cljs.core.nth.call(null,vec__37458__37459,0,null);
var ks__37461 = cljs.core.nthnext.call(null,vec__37458__37459,1);
if(cljs.core.truth_(ks__37461))
{return cljs.core.assoc.call(null,m,k__37460,assoc_in.call(null,cljs.core._lookup.call(null,m,k__37460,null),ks__37461,v));
} else
{return cljs.core.assoc.call(null,m,k__37460,v);
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
var update_in__delegate = function (m,p__37462,f,args){
var vec__37467__37468 = p__37462;
var k__37469 = cljs.core.nth.call(null,vec__37467__37468,0,null);
var ks__37470 = cljs.core.nthnext.call(null,vec__37467__37468,1);
if(cljs.core.truth_(ks__37470))
{return cljs.core.assoc.call(null,m,k__37469,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__37469,null),ks__37470,f,args));
} else
{return cljs.core.assoc.call(null,m,k__37469,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__37469,null),args));
}
};
var update_in = function (m,p__37462,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__37462, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__37471){
var m = cljs.core.first(arglist__37471);
var p__37462 = cljs.core.first(cljs.core.next(arglist__37471));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__37471)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__37471)));
return update_in__delegate(m, p__37462, f, args);
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
var this__37474 = this;
var h__2203__auto____37475 = this__37474.__hash;
if(!((h__2203__auto____37475 == null)))
{return h__2203__auto____37475;
} else
{var h__2203__auto____37476 = cljs.core.hash_coll.call(null,coll);
this__37474.__hash = h__2203__auto____37476;
return h__2203__auto____37476;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__37477 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__37478 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__37479 = this;
var new_array__37480 = this__37479.array.slice();
(new_array__37480[k] = v);
return (new cljs.core.Vector(this__37479.meta,new_array__37480,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__37511 = null;
var G__37511__2 = (function (this_sym37481,k){
var this__37483 = this;
var this_sym37481__37484 = this;
var coll__37485 = this_sym37481__37484;
return coll__37485.cljs$core$ILookup$_lookup$arity$2(coll__37485,k);
});
var G__37511__3 = (function (this_sym37482,k,not_found){
var this__37483 = this;
var this_sym37482__37486 = this;
var coll__37487 = this_sym37482__37486;
return coll__37487.cljs$core$ILookup$_lookup$arity$3(coll__37487,k,not_found);
});
G__37511 = function(this_sym37482,k,not_found){
switch(arguments.length){
case 2:
return G__37511__2.call(this,this_sym37482,k);
case 3:
return G__37511__3.call(this,this_sym37482,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__37511;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym37472,args37473){
var this__37488 = this;
return this_sym37472.call.apply(this_sym37472,[this_sym37472].concat(args37473.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__37489 = this;
var new_array__37490 = this__37489.array.slice();
new_array__37490.push(o);
return (new cljs.core.Vector(this__37489.meta,new_array__37490,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__37491 = this;
var this__37492 = this;
return cljs.core.pr_str.call(null,this__37492);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__37493 = this;
return cljs.core.ci_reduce.call(null,this__37493.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__37494 = this;
return cljs.core.ci_reduce.call(null,this__37494.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__37495 = this;
if((this__37495.array.length > 0))
{var vector_seq__37496 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__37495.array.length))
{return cljs.core.cons.call(null,(this__37495.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__37496.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__37497 = this;
return this__37497.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__37498 = this;
var count__37499 = this__37498.array.length;
if((count__37499 > 0))
{return (this__37498.array[(count__37499 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__37500 = this;
if((this__37500.array.length > 0))
{var new_array__37501 = this__37500.array.slice();
new_array__37501.pop();
return (new cljs.core.Vector(this__37500.meta,new_array__37501,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__37502 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__37503 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__37504 = this;
return (new cljs.core.Vector(meta,this__37504.array,this__37504.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__37505 = this;
return this__37505.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__37506 = this;
if((function (){var and__3822__auto____37507 = (0 <= n);
if(and__3822__auto____37507)
{return (n < this__37506.array.length);
} else
{return and__3822__auto____37507;
}
})())
{return (this__37506.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__37508 = this;
if((function (){var and__3822__auto____37509 = (0 <= n);
if(and__3822__auto____37509)
{return (n < this__37508.array.length);
} else
{return and__3822__auto____37509;
}
})())
{return (this__37508.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__37510 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__37510.meta);
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
var cnt__37513 = pv.cnt;
if((cnt__37513 < 32))
{return 0;
} else
{return (((cnt__37513 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__37519 = level;
var ret__37520 = node;
while(true){
if((ll__37519 === 0))
{return ret__37520;
} else
{var embed__37521 = ret__37520;
var r__37522 = cljs.core.pv_fresh_node.call(null,edit);
var ___37523 = cljs.core.pv_aset.call(null,r__37522,0,embed__37521);
{
var G__37524 = (ll__37519 - 5);
var G__37525 = r__37522;
ll__37519 = G__37524;
ret__37520 = G__37525;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__37531 = cljs.core.pv_clone_node.call(null,parent);
var subidx__37532 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__37531,subidx__37532,tailnode);
return ret__37531;
} else
{var child__37533 = cljs.core.pv_aget.call(null,parent,subidx__37532);
if(!((child__37533 == null)))
{var node_to_insert__37534 = push_tail.call(null,pv,(level - 5),child__37533,tailnode);
cljs.core.pv_aset.call(null,ret__37531,subidx__37532,node_to_insert__37534);
return ret__37531;
} else
{var node_to_insert__37535 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__37531,subidx__37532,node_to_insert__37535);
return ret__37531;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____37539 = (0 <= i);
if(and__3822__auto____37539)
{return (i < pv.cnt);
} else
{return and__3822__auto____37539;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__37540 = pv.root;
var level__37541 = pv.shift;
while(true){
if((level__37541 > 0))
{{
var G__37542 = cljs.core.pv_aget.call(null,node__37540,((i >>> level__37541) & 31));
var G__37543 = (level__37541 - 5);
node__37540 = G__37542;
level__37541 = G__37543;
continue;
}
} else
{return node__37540.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__37546 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__37546,(i & 31),val);
return ret__37546;
} else
{var subidx__37547 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__37546,subidx__37547,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__37547),i,val));
return ret__37546;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__37553 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__37554 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__37553));
if((function (){var and__3822__auto____37555 = (new_child__37554 == null);
if(and__3822__auto____37555)
{return (subidx__37553 === 0);
} else
{return and__3822__auto____37555;
}
})())
{return null;
} else
{var ret__37556 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__37556,subidx__37553,new_child__37554);
return ret__37556;
}
} else
{if((subidx__37553 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__37557 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__37557,subidx__37553,null);
return ret__37557;
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
var this__37560 = this;
return (new cljs.core.TransientVector(this__37560.cnt,this__37560.shift,cljs.core.tv_editable_root.call(null,this__37560.root),cljs.core.tv_editable_tail.call(null,this__37560.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__37561 = this;
var h__2203__auto____37562 = this__37561.__hash;
if(!((h__2203__auto____37562 == null)))
{return h__2203__auto____37562;
} else
{var h__2203__auto____37563 = cljs.core.hash_coll.call(null,coll);
this__37561.__hash = h__2203__auto____37563;
return h__2203__auto____37563;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__37564 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__37565 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__37566 = this;
if((function (){var and__3822__auto____37567 = (0 <= k);
if(and__3822__auto____37567)
{return (k < this__37566.cnt);
} else
{return and__3822__auto____37567;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__37568 = this__37566.tail.slice();
(new_tail__37568[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__37566.meta,this__37566.cnt,this__37566.shift,this__37566.root,new_tail__37568,null));
} else
{return (new cljs.core.PersistentVector(this__37566.meta,this__37566.cnt,this__37566.shift,cljs.core.do_assoc.call(null,coll,this__37566.shift,this__37566.root,k,v),this__37566.tail,null));
}
} else
{if((k === this__37566.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__37566.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__37616 = null;
var G__37616__2 = (function (this_sym37569,k){
var this__37571 = this;
var this_sym37569__37572 = this;
var coll__37573 = this_sym37569__37572;
return coll__37573.cljs$core$ILookup$_lookup$arity$2(coll__37573,k);
});
var G__37616__3 = (function (this_sym37570,k,not_found){
var this__37571 = this;
var this_sym37570__37574 = this;
var coll__37575 = this_sym37570__37574;
return coll__37575.cljs$core$ILookup$_lookup$arity$3(coll__37575,k,not_found);
});
G__37616 = function(this_sym37570,k,not_found){
switch(arguments.length){
case 2:
return G__37616__2.call(this,this_sym37570,k);
case 3:
return G__37616__3.call(this,this_sym37570,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__37616;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym37558,args37559){
var this__37576 = this;
return this_sym37558.call.apply(this_sym37558,[this_sym37558].concat(args37559.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__37577 = this;
var step_init__37578 = [0,init];
var i__37579 = 0;
while(true){
if((i__37579 < this__37577.cnt))
{var arr__37580 = cljs.core.array_for.call(null,v,i__37579);
var len__37581 = arr__37580.length;
var init__37585 = (function (){var j__37582 = 0;
var init__37583 = (step_init__37578[1]);
while(true){
if((j__37582 < len__37581))
{var init__37584 = f.call(null,init__37583,(j__37582 + i__37579),(arr__37580[j__37582]));
if(cljs.core.reduced_QMARK_.call(null,init__37584))
{return init__37584;
} else
{{
var G__37617 = (j__37582 + 1);
var G__37618 = init__37584;
j__37582 = G__37617;
init__37583 = G__37618;
continue;
}
}
} else
{(step_init__37578[0] = len__37581);
(step_init__37578[1] = init__37583);
return init__37583;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__37585))
{return cljs.core.deref.call(null,init__37585);
} else
{{
var G__37619 = (i__37579 + (step_init__37578[0]));
i__37579 = G__37619;
continue;
}
}
} else
{return (step_init__37578[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__37586 = this;
if(((this__37586.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__37587 = this__37586.tail.slice();
new_tail__37587.push(o);
return (new cljs.core.PersistentVector(this__37586.meta,(this__37586.cnt + 1),this__37586.shift,this__37586.root,new_tail__37587,null));
} else
{var root_overflow_QMARK___37588 = ((this__37586.cnt >>> 5) > (1 << this__37586.shift));
var new_shift__37589 = ((root_overflow_QMARK___37588)?(this__37586.shift + 5):this__37586.shift);
var new_root__37591 = ((root_overflow_QMARK___37588)?(function (){var n_r__37590 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__37590,0,this__37586.root);
cljs.core.pv_aset.call(null,n_r__37590,1,cljs.core.new_path.call(null,null,this__37586.shift,(new cljs.core.VectorNode(null,this__37586.tail))));
return n_r__37590;
})():cljs.core.push_tail.call(null,coll,this__37586.shift,this__37586.root,(new cljs.core.VectorNode(null,this__37586.tail))));
return (new cljs.core.PersistentVector(this__37586.meta,(this__37586.cnt + 1),new_shift__37589,new_root__37591,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__37592 = this;
if((this__37592.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__37592.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__37593 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__37594 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__37595 = this;
var this__37596 = this;
return cljs.core.pr_str.call(null,this__37596);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__37597 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__37598 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__37599 = this;
if((this__37599.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__37600 = this;
return this__37600.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__37601 = this;
if((this__37601.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__37601.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__37602 = this;
if((this__37602.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__37602.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__37602.meta);
} else
{if((1 < (this__37602.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__37602.meta,(this__37602.cnt - 1),this__37602.shift,this__37602.root,this__37602.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__37603 = cljs.core.array_for.call(null,coll,(this__37602.cnt - 2));
var nr__37604 = cljs.core.pop_tail.call(null,coll,this__37602.shift,this__37602.root);
var new_root__37605 = (((nr__37604 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__37604);
var cnt_1__37606 = (this__37602.cnt - 1);
if((function (){var and__3822__auto____37607 = (5 < this__37602.shift);
if(and__3822__auto____37607)
{return (cljs.core.pv_aget.call(null,new_root__37605,1) == null);
} else
{return and__3822__auto____37607;
}
})())
{return (new cljs.core.PersistentVector(this__37602.meta,cnt_1__37606,(this__37602.shift - 5),cljs.core.pv_aget.call(null,new_root__37605,0),new_tail__37603,null));
} else
{return (new cljs.core.PersistentVector(this__37602.meta,cnt_1__37606,this__37602.shift,new_root__37605,new_tail__37603,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__37608 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__37609 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__37610 = this;
return (new cljs.core.PersistentVector(meta,this__37610.cnt,this__37610.shift,this__37610.root,this__37610.tail,this__37610.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__37611 = this;
return this__37611.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__37612 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__37613 = this;
if((function (){var and__3822__auto____37614 = (0 <= n);
if(and__3822__auto____37614)
{return (n < this__37613.cnt);
} else
{return and__3822__auto____37614;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__37615 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__37615.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__37620 = xs.length;
var xs__37621 = (((no_clone === true))?xs:xs.slice());
if((l__37620 < 32))
{return (new cljs.core.PersistentVector(null,l__37620,5,cljs.core.PersistentVector.EMPTY_NODE,xs__37621,null));
} else
{var node__37622 = xs__37621.slice(0,32);
var v__37623 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__37622,null));
var i__37624 = 32;
var out__37625 = cljs.core._as_transient.call(null,v__37623);
while(true){
if((i__37624 < l__37620))
{{
var G__37626 = (i__37624 + 1);
var G__37627 = cljs.core.conj_BANG_.call(null,out__37625,(xs__37621[i__37624]));
i__37624 = G__37626;
out__37625 = G__37627;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__37625);
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
vector.cljs$lang$applyTo = (function (arglist__37628){
var args = cljs.core.seq(arglist__37628);;
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
var this__37629 = this;
var h__2203__auto____37630 = this__37629.__hash;
if(!((h__2203__auto____37630 == null)))
{return h__2203__auto____37630;
} else
{var h__2203__auto____37631 = cljs.core.hash_coll.call(null,coll);
this__37629.__hash = h__2203__auto____37631;
return h__2203__auto____37631;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__37632 = this;
if(((this__37632.off + 1) < this__37632.node.length))
{var s__37633 = cljs.core.chunked_seq.call(null,this__37632.vec,this__37632.node,this__37632.i,(this__37632.off + 1));
if((s__37633 == null))
{return null;
} else
{return s__37633;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__37634 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__37635 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__37636 = this;
return (this__37636.node[this__37636.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__37637 = this;
if(((this__37637.off + 1) < this__37637.node.length))
{var s__37638 = cljs.core.chunked_seq.call(null,this__37637.vec,this__37637.node,this__37637.i,(this__37637.off + 1));
if((s__37638 == null))
{return cljs.core.List.EMPTY;
} else
{return s__37638;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__37639 = this;
var l__37640 = this__37639.node.length;
var s__37641 = ((((this__37639.i + l__37640) < cljs.core._count.call(null,this__37639.vec)))?cljs.core.chunked_seq.call(null,this__37639.vec,(this__37639.i + l__37640),0):null);
if((s__37641 == null))
{return null;
} else
{return s__37641;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__37642 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__37643 = this;
return cljs.core.chunked_seq.call(null,this__37643.vec,this__37643.node,this__37643.i,this__37643.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__37644 = this;
return this__37644.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__37645 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__37645.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__37646 = this;
return cljs.core.array_chunk.call(null,this__37646.node,this__37646.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__37647 = this;
var l__37648 = this__37647.node.length;
var s__37649 = ((((this__37647.i + l__37648) < cljs.core._count.call(null,this__37647.vec)))?cljs.core.chunked_seq.call(null,this__37647.vec,(this__37647.i + l__37648),0):null);
if((s__37649 == null))
{return cljs.core.List.EMPTY;
} else
{return s__37649;
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
var this__37652 = this;
var h__2203__auto____37653 = this__37652.__hash;
if(!((h__2203__auto____37653 == null)))
{return h__2203__auto____37653;
} else
{var h__2203__auto____37654 = cljs.core.hash_coll.call(null,coll);
this__37652.__hash = h__2203__auto____37654;
return h__2203__auto____37654;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__37655 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__37656 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__37657 = this;
var v_pos__37658 = (this__37657.start + key);
return (new cljs.core.Subvec(this__37657.meta,cljs.core._assoc.call(null,this__37657.v,v_pos__37658,val),this__37657.start,((this__37657.end > (v_pos__37658 + 1)) ? this__37657.end : (v_pos__37658 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__37684 = null;
var G__37684__2 = (function (this_sym37659,k){
var this__37661 = this;
var this_sym37659__37662 = this;
var coll__37663 = this_sym37659__37662;
return coll__37663.cljs$core$ILookup$_lookup$arity$2(coll__37663,k);
});
var G__37684__3 = (function (this_sym37660,k,not_found){
var this__37661 = this;
var this_sym37660__37664 = this;
var coll__37665 = this_sym37660__37664;
return coll__37665.cljs$core$ILookup$_lookup$arity$3(coll__37665,k,not_found);
});
G__37684 = function(this_sym37660,k,not_found){
switch(arguments.length){
case 2:
return G__37684__2.call(this,this_sym37660,k);
case 3:
return G__37684__3.call(this,this_sym37660,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__37684;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym37650,args37651){
var this__37666 = this;
return this_sym37650.call.apply(this_sym37650,[this_sym37650].concat(args37651.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__37667 = this;
return (new cljs.core.Subvec(this__37667.meta,cljs.core._assoc_n.call(null,this__37667.v,this__37667.end,o),this__37667.start,(this__37667.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__37668 = this;
var this__37669 = this;
return cljs.core.pr_str.call(null,this__37669);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__37670 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__37671 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__37672 = this;
var subvec_seq__37673 = (function subvec_seq(i){
if((i === this__37672.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__37672.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__37673.call(null,this__37672.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__37674 = this;
return (this__37674.end - this__37674.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__37675 = this;
return cljs.core._nth.call(null,this__37675.v,(this__37675.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__37676 = this;
if((this__37676.start === this__37676.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__37676.meta,this__37676.v,this__37676.start,(this__37676.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__37677 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__37678 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__37679 = this;
return (new cljs.core.Subvec(meta,this__37679.v,this__37679.start,this__37679.end,this__37679.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__37680 = this;
return this__37680.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__37681 = this;
return cljs.core._nth.call(null,this__37681.v,(this__37681.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__37682 = this;
return cljs.core._nth.call(null,this__37682.v,(this__37682.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__37683 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__37683.meta);
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
var ret__37686 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__37686,0,tl.length);
return ret__37686;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__37690 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__37691 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__37690,subidx__37691,(((level === 5))?tail_node:(function (){var child__37692 = cljs.core.pv_aget.call(null,ret__37690,subidx__37691);
if(!((child__37692 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__37692,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__37690;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__37697 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__37698 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__37699 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__37697,subidx__37698));
if((function (){var and__3822__auto____37700 = (new_child__37699 == null);
if(and__3822__auto____37700)
{return (subidx__37698 === 0);
} else
{return and__3822__auto____37700;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__37697,subidx__37698,new_child__37699);
return node__37697;
}
} else
{if((subidx__37698 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__37697,subidx__37698,null);
return node__37697;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____37705 = (0 <= i);
if(and__3822__auto____37705)
{return (i < tv.cnt);
} else
{return and__3822__auto____37705;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__37706 = tv.root;
var node__37707 = root__37706;
var level__37708 = tv.shift;
while(true){
if((level__37708 > 0))
{{
var G__37709 = cljs.core.tv_ensure_editable.call(null,root__37706.edit,cljs.core.pv_aget.call(null,node__37707,((i >>> level__37708) & 31)));
var G__37710 = (level__37708 - 5);
node__37707 = G__37709;
level__37708 = G__37710;
continue;
}
} else
{return node__37707.arr;
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
var G__37750 = null;
var G__37750__2 = (function (this_sym37713,k){
var this__37715 = this;
var this_sym37713__37716 = this;
var coll__37717 = this_sym37713__37716;
return coll__37717.cljs$core$ILookup$_lookup$arity$2(coll__37717,k);
});
var G__37750__3 = (function (this_sym37714,k,not_found){
var this__37715 = this;
var this_sym37714__37718 = this;
var coll__37719 = this_sym37714__37718;
return coll__37719.cljs$core$ILookup$_lookup$arity$3(coll__37719,k,not_found);
});
G__37750 = function(this_sym37714,k,not_found){
switch(arguments.length){
case 2:
return G__37750__2.call(this,this_sym37714,k);
case 3:
return G__37750__3.call(this,this_sym37714,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__37750;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym37711,args37712){
var this__37720 = this;
return this_sym37711.call.apply(this_sym37711,[this_sym37711].concat(args37712.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__37721 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__37722 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__37723 = this;
if(this__37723.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__37724 = this;
if((function (){var and__3822__auto____37725 = (0 <= n);
if(and__3822__auto____37725)
{return (n < this__37724.cnt);
} else
{return and__3822__auto____37725;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__37726 = this;
if(this__37726.root.edit)
{return this__37726.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__37727 = this;
if(this__37727.root.edit)
{if((function (){var and__3822__auto____37728 = (0 <= n);
if(and__3822__auto____37728)
{return (n < this__37727.cnt);
} else
{return and__3822__auto____37728;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__37727.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__37733 = (function go(level,node){
var node__37731 = cljs.core.tv_ensure_editable.call(null,this__37727.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__37731,(n & 31),val);
return node__37731;
} else
{var subidx__37732 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__37731,subidx__37732,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__37731,subidx__37732)));
return node__37731;
}
}).call(null,this__37727.shift,this__37727.root);
this__37727.root = new_root__37733;
return tcoll;
}
} else
{if((n === this__37727.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__37727.cnt)].join('')));
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
var this__37734 = this;
if(this__37734.root.edit)
{if((this__37734.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__37734.cnt))
{this__37734.cnt = 0;
return tcoll;
} else
{if((((this__37734.cnt - 1) & 31) > 0))
{this__37734.cnt = (this__37734.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__37735 = cljs.core.editable_array_for.call(null,tcoll,(this__37734.cnt - 2));
var new_root__37737 = (function (){var nr__37736 = cljs.core.tv_pop_tail.call(null,tcoll,this__37734.shift,this__37734.root);
if(!((nr__37736 == null)))
{return nr__37736;
} else
{return (new cljs.core.VectorNode(this__37734.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____37738 = (5 < this__37734.shift);
if(and__3822__auto____37738)
{return (cljs.core.pv_aget.call(null,new_root__37737,1) == null);
} else
{return and__3822__auto____37738;
}
})())
{var new_root__37739 = cljs.core.tv_ensure_editable.call(null,this__37734.root.edit,cljs.core.pv_aget.call(null,new_root__37737,0));
this__37734.root = new_root__37739;
this__37734.shift = (this__37734.shift - 5);
this__37734.cnt = (this__37734.cnt - 1);
this__37734.tail = new_tail__37735;
return tcoll;
} else
{this__37734.root = new_root__37737;
this__37734.cnt = (this__37734.cnt - 1);
this__37734.tail = new_tail__37735;
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
var this__37740 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__37741 = this;
if(this__37741.root.edit)
{if(((this__37741.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__37741.tail[(this__37741.cnt & 31)] = o);
this__37741.cnt = (this__37741.cnt + 1);
return tcoll;
} else
{var tail_node__37742 = (new cljs.core.VectorNode(this__37741.root.edit,this__37741.tail));
var new_tail__37743 = cljs.core.make_array.call(null,32);
(new_tail__37743[0] = o);
this__37741.tail = new_tail__37743;
if(((this__37741.cnt >>> 5) > (1 << this__37741.shift)))
{var new_root_array__37744 = cljs.core.make_array.call(null,32);
var new_shift__37745 = (this__37741.shift + 5);
(new_root_array__37744[0] = this__37741.root);
(new_root_array__37744[1] = cljs.core.new_path.call(null,this__37741.root.edit,this__37741.shift,tail_node__37742));
this__37741.root = (new cljs.core.VectorNode(this__37741.root.edit,new_root_array__37744));
this__37741.shift = new_shift__37745;
this__37741.cnt = (this__37741.cnt + 1);
return tcoll;
} else
{var new_root__37746 = cljs.core.tv_push_tail.call(null,tcoll,this__37741.shift,this__37741.root,tail_node__37742);
this__37741.root = new_root__37746;
this__37741.cnt = (this__37741.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__37747 = this;
if(this__37747.root.edit)
{this__37747.root.edit = null;
var len__37748 = (this__37747.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__37749 = cljs.core.make_array.call(null,len__37748);
cljs.core.array_copy.call(null,this__37747.tail,0,trimmed_tail__37749,0,len__37748);
return (new cljs.core.PersistentVector(null,this__37747.cnt,this__37747.shift,this__37747.root,trimmed_tail__37749,null));
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
var this__37751 = this;
var h__2203__auto____37752 = this__37751.__hash;
if(!((h__2203__auto____37752 == null)))
{return h__2203__auto____37752;
} else
{var h__2203__auto____37753 = cljs.core.hash_coll.call(null,coll);
this__37751.__hash = h__2203__auto____37753;
return h__2203__auto____37753;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__37754 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__37755 = this;
var this__37756 = this;
return cljs.core.pr_str.call(null,this__37756);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__37757 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__37758 = this;
return cljs.core._first.call(null,this__37758.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__37759 = this;
var temp__3971__auto____37760 = cljs.core.next.call(null,this__37759.front);
if(temp__3971__auto____37760)
{var f1__37761 = temp__3971__auto____37760;
return (new cljs.core.PersistentQueueSeq(this__37759.meta,f1__37761,this__37759.rear,null));
} else
{if((this__37759.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__37759.meta,this__37759.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__37762 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__37763 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__37763.front,this__37763.rear,this__37763.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__37764 = this;
return this__37764.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__37765 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__37765.meta);
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
var this__37766 = this;
var h__2203__auto____37767 = this__37766.__hash;
if(!((h__2203__auto____37767 == null)))
{return h__2203__auto____37767;
} else
{var h__2203__auto____37768 = cljs.core.hash_coll.call(null,coll);
this__37766.__hash = h__2203__auto____37768;
return h__2203__auto____37768;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__37769 = this;
if(cljs.core.truth_(this__37769.front))
{return (new cljs.core.PersistentQueue(this__37769.meta,(this__37769.count + 1),this__37769.front,cljs.core.conj.call(null,(function (){var or__3824__auto____37770 = this__37769.rear;
if(cljs.core.truth_(or__3824__auto____37770))
{return or__3824__auto____37770;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__37769.meta,(this__37769.count + 1),cljs.core.conj.call(null,this__37769.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__37771 = this;
var this__37772 = this;
return cljs.core.pr_str.call(null,this__37772);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__37773 = this;
var rear__37774 = cljs.core.seq.call(null,this__37773.rear);
if(cljs.core.truth_((function (){var or__3824__auto____37775 = this__37773.front;
if(cljs.core.truth_(or__3824__auto____37775))
{return or__3824__auto____37775;
} else
{return rear__37774;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__37773.front,cljs.core.seq.call(null,rear__37774),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__37776 = this;
return this__37776.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__37777 = this;
return cljs.core._first.call(null,this__37777.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__37778 = this;
if(cljs.core.truth_(this__37778.front))
{var temp__3971__auto____37779 = cljs.core.next.call(null,this__37778.front);
if(temp__3971__auto____37779)
{var f1__37780 = temp__3971__auto____37779;
return (new cljs.core.PersistentQueue(this__37778.meta,(this__37778.count - 1),f1__37780,this__37778.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__37778.meta,(this__37778.count - 1),cljs.core.seq.call(null,this__37778.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__37781 = this;
return cljs.core.first.call(null,this__37781.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__37782 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__37783 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__37784 = this;
return (new cljs.core.PersistentQueue(meta,this__37784.count,this__37784.front,this__37784.rear,this__37784.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__37785 = this;
return this__37785.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__37786 = this;
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
var this__37787 = this;
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
var len__37790 = array.length;
var i__37791 = 0;
while(true){
if((i__37791 < len__37790))
{if((k === (array[i__37791])))
{return i__37791;
} else
{{
var G__37792 = (i__37791 + incr);
i__37791 = G__37792;
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
var a__37795 = cljs.core.hash.call(null,a);
var b__37796 = cljs.core.hash.call(null,b);
if((a__37795 < b__37796))
{return -1;
} else
{if((a__37795 > b__37796))
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
var ks__37804 = m.keys;
var len__37805 = ks__37804.length;
var so__37806 = m.strobj;
var out__37807 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__37808 = 0;
var out__37809 = cljs.core.transient$.call(null,out__37807);
while(true){
if((i__37808 < len__37805))
{var k__37810 = (ks__37804[i__37808]);
{
var G__37811 = (i__37808 + 1);
var G__37812 = cljs.core.assoc_BANG_.call(null,out__37809,k__37810,(so__37806[k__37810]));
i__37808 = G__37811;
out__37809 = G__37812;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__37809,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__37818 = {};
var l__37819 = ks.length;
var i__37820 = 0;
while(true){
if((i__37820 < l__37819))
{var k__37821 = (ks[i__37820]);
(new_obj__37818[k__37821] = (obj[k__37821]));
{
var G__37822 = (i__37820 + 1);
i__37820 = G__37822;
continue;
}
} else
{}
break;
}
return new_obj__37818;
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
var this__37825 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__37826 = this;
var h__2203__auto____37827 = this__37826.__hash;
if(!((h__2203__auto____37827 == null)))
{return h__2203__auto____37827;
} else
{var h__2203__auto____37828 = cljs.core.hash_imap.call(null,coll);
this__37826.__hash = h__2203__auto____37828;
return h__2203__auto____37828;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__37829 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__37830 = this;
if((function (){var and__3822__auto____37831 = goog.isString(k);
if(and__3822__auto____37831)
{return !((cljs.core.scan_array.call(null,1,k,this__37830.keys) == null));
} else
{return and__3822__auto____37831;
}
})())
{return (this__37830.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__37832 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____37833 = (this__37832.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____37833)
{return or__3824__auto____37833;
} else
{return (this__37832.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__37832.keys) == null)))
{var new_strobj__37834 = cljs.core.obj_clone.call(null,this__37832.strobj,this__37832.keys);
(new_strobj__37834[k] = v);
return (new cljs.core.ObjMap(this__37832.meta,this__37832.keys,new_strobj__37834,(this__37832.update_count + 1),null));
} else
{var new_strobj__37835 = cljs.core.obj_clone.call(null,this__37832.strobj,this__37832.keys);
var new_keys__37836 = this__37832.keys.slice();
(new_strobj__37835[k] = v);
new_keys__37836.push(k);
return (new cljs.core.ObjMap(this__37832.meta,new_keys__37836,new_strobj__37835,(this__37832.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__37837 = this;
if((function (){var and__3822__auto____37838 = goog.isString(k);
if(and__3822__auto____37838)
{return !((cljs.core.scan_array.call(null,1,k,this__37837.keys) == null));
} else
{return and__3822__auto____37838;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__37860 = null;
var G__37860__2 = (function (this_sym37839,k){
var this__37841 = this;
var this_sym37839__37842 = this;
var coll__37843 = this_sym37839__37842;
return coll__37843.cljs$core$ILookup$_lookup$arity$2(coll__37843,k);
});
var G__37860__3 = (function (this_sym37840,k,not_found){
var this__37841 = this;
var this_sym37840__37844 = this;
var coll__37845 = this_sym37840__37844;
return coll__37845.cljs$core$ILookup$_lookup$arity$3(coll__37845,k,not_found);
});
G__37860 = function(this_sym37840,k,not_found){
switch(arguments.length){
case 2:
return G__37860__2.call(this,this_sym37840,k);
case 3:
return G__37860__3.call(this,this_sym37840,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__37860;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym37823,args37824){
var this__37846 = this;
return this_sym37823.call.apply(this_sym37823,[this_sym37823].concat(args37824.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__37847 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__37848 = this;
var this__37849 = this;
return cljs.core.pr_str.call(null,this__37849);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__37850 = this;
if((this__37850.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__37813_SHARP_){
return cljs.core.vector.call(null,p1__37813_SHARP_,(this__37850.strobj[p1__37813_SHARP_]));
}),this__37850.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__37851 = this;
return this__37851.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__37852 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__37853 = this;
return (new cljs.core.ObjMap(meta,this__37853.keys,this__37853.strobj,this__37853.update_count,this__37853.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__37854 = this;
return this__37854.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__37855 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__37855.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__37856 = this;
if((function (){var and__3822__auto____37857 = goog.isString(k);
if(and__3822__auto____37857)
{return !((cljs.core.scan_array.call(null,1,k,this__37856.keys) == null));
} else
{return and__3822__auto____37857;
}
})())
{var new_keys__37858 = this__37856.keys.slice();
var new_strobj__37859 = cljs.core.obj_clone.call(null,this__37856.strobj,this__37856.keys);
new_keys__37858.splice(cljs.core.scan_array.call(null,1,k,new_keys__37858),1);
cljs.core.js_delete.call(null,new_strobj__37859,k);
return (new cljs.core.ObjMap(this__37856.meta,new_keys__37858,new_strobj__37859,(this__37856.update_count + 1),null));
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
var this__37864 = this;
var h__2203__auto____37865 = this__37864.__hash;
if(!((h__2203__auto____37865 == null)))
{return h__2203__auto____37865;
} else
{var h__2203__auto____37866 = cljs.core.hash_imap.call(null,coll);
this__37864.__hash = h__2203__auto____37866;
return h__2203__auto____37866;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__37867 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__37868 = this;
var bucket__37869 = (this__37868.hashobj[cljs.core.hash.call(null,k)]);
var i__37870 = (cljs.core.truth_(bucket__37869)?cljs.core.scan_array.call(null,2,k,bucket__37869):null);
if(cljs.core.truth_(i__37870))
{return (bucket__37869[(i__37870 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__37871 = this;
var h__37872 = cljs.core.hash.call(null,k);
var bucket__37873 = (this__37871.hashobj[h__37872]);
if(cljs.core.truth_(bucket__37873))
{var new_bucket__37874 = bucket__37873.slice();
var new_hashobj__37875 = goog.object.clone(this__37871.hashobj);
(new_hashobj__37875[h__37872] = new_bucket__37874);
var temp__3971__auto____37876 = cljs.core.scan_array.call(null,2,k,new_bucket__37874);
if(cljs.core.truth_(temp__3971__auto____37876))
{var i__37877 = temp__3971__auto____37876;
(new_bucket__37874[(i__37877 + 1)] = v);
return (new cljs.core.HashMap(this__37871.meta,this__37871.count,new_hashobj__37875,null));
} else
{new_bucket__37874.push(k,v);
return (new cljs.core.HashMap(this__37871.meta,(this__37871.count + 1),new_hashobj__37875,null));
}
} else
{var new_hashobj__37878 = goog.object.clone(this__37871.hashobj);
(new_hashobj__37878[h__37872] = [k,v]);
return (new cljs.core.HashMap(this__37871.meta,(this__37871.count + 1),new_hashobj__37878,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__37879 = this;
var bucket__37880 = (this__37879.hashobj[cljs.core.hash.call(null,k)]);
var i__37881 = (cljs.core.truth_(bucket__37880)?cljs.core.scan_array.call(null,2,k,bucket__37880):null);
if(cljs.core.truth_(i__37881))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__37906 = null;
var G__37906__2 = (function (this_sym37882,k){
var this__37884 = this;
var this_sym37882__37885 = this;
var coll__37886 = this_sym37882__37885;
return coll__37886.cljs$core$ILookup$_lookup$arity$2(coll__37886,k);
});
var G__37906__3 = (function (this_sym37883,k,not_found){
var this__37884 = this;
var this_sym37883__37887 = this;
var coll__37888 = this_sym37883__37887;
return coll__37888.cljs$core$ILookup$_lookup$arity$3(coll__37888,k,not_found);
});
G__37906 = function(this_sym37883,k,not_found){
switch(arguments.length){
case 2:
return G__37906__2.call(this,this_sym37883,k);
case 3:
return G__37906__3.call(this,this_sym37883,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__37906;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym37862,args37863){
var this__37889 = this;
return this_sym37862.call.apply(this_sym37862,[this_sym37862].concat(args37863.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__37890 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__37891 = this;
var this__37892 = this;
return cljs.core.pr_str.call(null,this__37892);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__37893 = this;
if((this__37893.count > 0))
{var hashes__37894 = cljs.core.js_keys.call(null,this__37893.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__37861_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__37893.hashobj[p1__37861_SHARP_])));
}),hashes__37894);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__37895 = this;
return this__37895.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__37896 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__37897 = this;
return (new cljs.core.HashMap(meta,this__37897.count,this__37897.hashobj,this__37897.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__37898 = this;
return this__37898.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__37899 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__37899.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__37900 = this;
var h__37901 = cljs.core.hash.call(null,k);
var bucket__37902 = (this__37900.hashobj[h__37901]);
var i__37903 = (cljs.core.truth_(bucket__37902)?cljs.core.scan_array.call(null,2,k,bucket__37902):null);
if(cljs.core.not.call(null,i__37903))
{return coll;
} else
{var new_hashobj__37904 = goog.object.clone(this__37900.hashobj);
if((3 > bucket__37902.length))
{cljs.core.js_delete.call(null,new_hashobj__37904,h__37901);
} else
{var new_bucket__37905 = bucket__37902.slice();
new_bucket__37905.splice(i__37903,2);
(new_hashobj__37904[h__37901] = new_bucket__37905);
}
return (new cljs.core.HashMap(this__37900.meta,(this__37900.count - 1),new_hashobj__37904,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__37907 = ks.length;
var i__37908 = 0;
var out__37909 = cljs.core.HashMap.EMPTY;
while(true){
if((i__37908 < len__37907))
{{
var G__37910 = (i__37908 + 1);
var G__37911 = cljs.core.assoc.call(null,out__37909,(ks[i__37908]),(vs[i__37908]));
i__37908 = G__37910;
out__37909 = G__37911;
continue;
}
} else
{return out__37909;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__37915 = m.arr;
var len__37916 = arr__37915.length;
var i__37917 = 0;
while(true){
if((len__37916 <= i__37917))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__37915[i__37917]),k))
{return i__37917;
} else
{if("\uFDD0'else")
{{
var G__37918 = (i__37917 + 2);
i__37917 = G__37918;
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
var this__37921 = this;
return (new cljs.core.TransientArrayMap({},this__37921.arr.length,this__37921.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__37922 = this;
var h__2203__auto____37923 = this__37922.__hash;
if(!((h__2203__auto____37923 == null)))
{return h__2203__auto____37923;
} else
{var h__2203__auto____37924 = cljs.core.hash_imap.call(null,coll);
this__37922.__hash = h__2203__auto____37924;
return h__2203__auto____37924;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__37925 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__37926 = this;
var idx__37927 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__37927 === -1))
{return not_found;
} else
{return (this__37926.arr[(idx__37927 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__37928 = this;
var idx__37929 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__37929 === -1))
{if((this__37928.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__37928.meta,(this__37928.cnt + 1),(function (){var G__37930__37931 = this__37928.arr.slice();
G__37930__37931.push(k);
G__37930__37931.push(v);
return G__37930__37931;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__37928.arr[(idx__37929 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__37928.meta,this__37928.cnt,(function (){var G__37932__37933 = this__37928.arr.slice();
(G__37932__37933[(idx__37929 + 1)] = v);
return G__37932__37933;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__37934 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__37966 = null;
var G__37966__2 = (function (this_sym37935,k){
var this__37937 = this;
var this_sym37935__37938 = this;
var coll__37939 = this_sym37935__37938;
return coll__37939.cljs$core$ILookup$_lookup$arity$2(coll__37939,k);
});
var G__37966__3 = (function (this_sym37936,k,not_found){
var this__37937 = this;
var this_sym37936__37940 = this;
var coll__37941 = this_sym37936__37940;
return coll__37941.cljs$core$ILookup$_lookup$arity$3(coll__37941,k,not_found);
});
G__37966 = function(this_sym37936,k,not_found){
switch(arguments.length){
case 2:
return G__37966__2.call(this,this_sym37936,k);
case 3:
return G__37966__3.call(this,this_sym37936,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__37966;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym37919,args37920){
var this__37942 = this;
return this_sym37919.call.apply(this_sym37919,[this_sym37919].concat(args37920.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__37943 = this;
var len__37944 = this__37943.arr.length;
var i__37945 = 0;
var init__37946 = init;
while(true){
if((i__37945 < len__37944))
{var init__37947 = f.call(null,init__37946,(this__37943.arr[i__37945]),(this__37943.arr[(i__37945 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__37947))
{return cljs.core.deref.call(null,init__37947);
} else
{{
var G__37967 = (i__37945 + 2);
var G__37968 = init__37947;
i__37945 = G__37967;
init__37946 = G__37968;
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
var this__37948 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__37949 = this;
var this__37950 = this;
return cljs.core.pr_str.call(null,this__37950);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__37951 = this;
if((this__37951.cnt > 0))
{var len__37952 = this__37951.arr.length;
var array_map_seq__37953 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__37952))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__37951.arr[i]),(this__37951.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__37953.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__37954 = this;
return this__37954.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__37955 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__37956 = this;
return (new cljs.core.PersistentArrayMap(meta,this__37956.cnt,this__37956.arr,this__37956.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__37957 = this;
return this__37957.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__37958 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__37958.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__37959 = this;
var idx__37960 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__37960 >= 0))
{var len__37961 = this__37959.arr.length;
var new_len__37962 = (len__37961 - 2);
if((new_len__37962 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__37963 = cljs.core.make_array.call(null,new_len__37962);
var s__37964 = 0;
var d__37965 = 0;
while(true){
if((s__37964 >= len__37961))
{return (new cljs.core.PersistentArrayMap(this__37959.meta,(this__37959.cnt - 1),new_arr__37963,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__37959.arr[s__37964])))
{{
var G__37969 = (s__37964 + 2);
var G__37970 = d__37965;
s__37964 = G__37969;
d__37965 = G__37970;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__37963[d__37965] = (this__37959.arr[s__37964]));
(new_arr__37963[(d__37965 + 1)] = (this__37959.arr[(s__37964 + 1)]));
{
var G__37971 = (s__37964 + 2);
var G__37972 = (d__37965 + 2);
s__37964 = G__37971;
d__37965 = G__37972;
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
var len__37973 = cljs.core.count.call(null,ks);
var i__37974 = 0;
var out__37975 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__37974 < len__37973))
{{
var G__37976 = (i__37974 + 1);
var G__37977 = cljs.core.assoc_BANG_.call(null,out__37975,(ks[i__37974]),(vs[i__37974]));
i__37974 = G__37976;
out__37975 = G__37977;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__37975);
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
var this__37978 = this;
if(cljs.core.truth_(this__37978.editable_QMARK_))
{var idx__37979 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__37979 >= 0))
{(this__37978.arr[idx__37979] = (this__37978.arr[(this__37978.len - 2)]));
(this__37978.arr[(idx__37979 + 1)] = (this__37978.arr[(this__37978.len - 1)]));
var G__37980__37981 = this__37978.arr;
G__37980__37981.pop();
G__37980__37981.pop();
G__37980__37981;
this__37978.len = (this__37978.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__37982 = this;
if(cljs.core.truth_(this__37982.editable_QMARK_))
{var idx__37983 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__37983 === -1))
{if(((this__37982.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__37982.len = (this__37982.len + 2);
this__37982.arr.push(key);
this__37982.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__37982.len,this__37982.arr),key,val);
}
} else
{if((val === (this__37982.arr[(idx__37983 + 1)])))
{return tcoll;
} else
{(this__37982.arr[(idx__37983 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__37984 = this;
if(cljs.core.truth_(this__37984.editable_QMARK_))
{if((function (){var G__37985__37986 = o;
if(G__37985__37986)
{if((function (){var or__3824__auto____37987 = (G__37985__37986.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____37987)
{return or__3824__auto____37987;
} else
{return G__37985__37986.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__37985__37986.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__37985__37986);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__37985__37986);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__37988 = cljs.core.seq.call(null,o);
var tcoll__37989 = tcoll;
while(true){
var temp__3971__auto____37990 = cljs.core.first.call(null,es__37988);
if(cljs.core.truth_(temp__3971__auto____37990))
{var e__37991 = temp__3971__auto____37990;
{
var G__37997 = cljs.core.next.call(null,es__37988);
var G__37998 = tcoll__37989.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__37989,cljs.core.key.call(null,e__37991),cljs.core.val.call(null,e__37991));
es__37988 = G__37997;
tcoll__37989 = G__37998;
continue;
}
} else
{return tcoll__37989;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__37992 = this;
if(cljs.core.truth_(this__37992.editable_QMARK_))
{this__37992.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__37992.len,2),this__37992.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__37993 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__37994 = this;
if(cljs.core.truth_(this__37994.editable_QMARK_))
{var idx__37995 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__37995 === -1))
{return not_found;
} else
{return (this__37994.arr[(idx__37995 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__37996 = this;
if(cljs.core.truth_(this__37996.editable_QMARK_))
{return cljs.core.quot.call(null,this__37996.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__38001 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__38002 = 0;
while(true){
if((i__38002 < len))
{{
var G__38003 = cljs.core.assoc_BANG_.call(null,out__38001,(arr[i__38002]),(arr[(i__38002 + 1)]));
var G__38004 = (i__38002 + 2);
out__38001 = G__38003;
i__38002 = G__38004;
continue;
}
} else
{return out__38001;
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
var G__38009__38010 = arr.slice();
(G__38009__38010[i] = a);
return G__38009__38010;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__38011__38012 = arr.slice();
(G__38011__38012[i] = a);
(G__38011__38012[j] = b);
return G__38011__38012;
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
var new_arr__38014 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__38014,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__38014,(2 * i),(new_arr__38014.length - (2 * i)));
return new_arr__38014;
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
var editable__38017 = inode.ensure_editable(edit);
(editable__38017.arr[i] = a);
return editable__38017;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__38018 = inode.ensure_editable(edit);
(editable__38018.arr[i] = a);
(editable__38018.arr[j] = b);
return editable__38018;
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
var len__38025 = arr.length;
var i__38026 = 0;
var init__38027 = init;
while(true){
if((i__38026 < len__38025))
{var init__38030 = (function (){var k__38028 = (arr[i__38026]);
if(!((k__38028 == null)))
{return f.call(null,init__38027,k__38028,(arr[(i__38026 + 1)]));
} else
{var node__38029 = (arr[(i__38026 + 1)]);
if(!((node__38029 == null)))
{return node__38029.kv_reduce(f,init__38027);
} else
{return init__38027;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__38030))
{return cljs.core.deref.call(null,init__38030);
} else
{{
var G__38031 = (i__38026 + 2);
var G__38032 = init__38030;
i__38026 = G__38031;
init__38027 = G__38032;
continue;
}
}
} else
{return init__38027;
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
var this__38033 = this;
var inode__38034 = this;
if((this__38033.bitmap === bit))
{return null;
} else
{var editable__38035 = inode__38034.ensure_editable(e);
var earr__38036 = editable__38035.arr;
var len__38037 = earr__38036.length;
editable__38035.bitmap = (bit ^ editable__38035.bitmap);
cljs.core.array_copy.call(null,earr__38036,(2 * (i + 1)),earr__38036,(2 * i),(len__38037 - (2 * (i + 1))));
(earr__38036[(len__38037 - 2)] = null);
(earr__38036[(len__38037 - 1)] = null);
return editable__38035;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__38038 = this;
var inode__38039 = this;
var bit__38040 = (1 << ((hash >>> shift) & 0x01f));
var idx__38041 = cljs.core.bitmap_indexed_node_index.call(null,this__38038.bitmap,bit__38040);
if(((this__38038.bitmap & bit__38040) === 0))
{var n__38042 = cljs.core.bit_count.call(null,this__38038.bitmap);
if(((2 * n__38042) < this__38038.arr.length))
{var editable__38043 = inode__38039.ensure_editable(edit);
var earr__38044 = editable__38043.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__38044,(2 * idx__38041),earr__38044,(2 * (idx__38041 + 1)),(2 * (n__38042 - idx__38041)));
(earr__38044[(2 * idx__38041)] = key);
(earr__38044[((2 * idx__38041) + 1)] = val);
editable__38043.bitmap = (editable__38043.bitmap | bit__38040);
return editable__38043;
} else
{if((n__38042 >= 16))
{var nodes__38045 = cljs.core.make_array.call(null,32);
var jdx__38046 = ((hash >>> shift) & 0x01f);
(nodes__38045[jdx__38046] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__38047 = 0;
var j__38048 = 0;
while(true){
if((i__38047 < 32))
{if((((this__38038.bitmap >>> i__38047) & 1) === 0))
{{
var G__38101 = (i__38047 + 1);
var G__38102 = j__38048;
i__38047 = G__38101;
j__38048 = G__38102;
continue;
}
} else
{(nodes__38045[i__38047] = ((!(((this__38038.arr[j__38048]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__38038.arr[j__38048])),(this__38038.arr[j__38048]),(this__38038.arr[(j__38048 + 1)]),added_leaf_QMARK_):(this__38038.arr[(j__38048 + 1)])));
{
var G__38103 = (i__38047 + 1);
var G__38104 = (j__38048 + 2);
i__38047 = G__38103;
j__38048 = G__38104;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__38042 + 1),nodes__38045));
} else
{if("\uFDD0'else")
{var new_arr__38049 = cljs.core.make_array.call(null,(2 * (n__38042 + 4)));
cljs.core.array_copy.call(null,this__38038.arr,0,new_arr__38049,0,(2 * idx__38041));
(new_arr__38049[(2 * idx__38041)] = key);
(new_arr__38049[((2 * idx__38041) + 1)] = val);
cljs.core.array_copy.call(null,this__38038.arr,(2 * idx__38041),new_arr__38049,(2 * (idx__38041 + 1)),(2 * (n__38042 - idx__38041)));
added_leaf_QMARK_.val = true;
var editable__38050 = inode__38039.ensure_editable(edit);
editable__38050.arr = new_arr__38049;
editable__38050.bitmap = (editable__38050.bitmap | bit__38040);
return editable__38050;
} else
{return null;
}
}
}
} else
{var key_or_nil__38051 = (this__38038.arr[(2 * idx__38041)]);
var val_or_node__38052 = (this__38038.arr[((2 * idx__38041) + 1)]);
if((key_or_nil__38051 == null))
{var n__38053 = val_or_node__38052.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__38053 === val_or_node__38052))
{return inode__38039;
} else
{return cljs.core.edit_and_set.call(null,inode__38039,edit,((2 * idx__38041) + 1),n__38053);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__38051))
{if((val === val_or_node__38052))
{return inode__38039;
} else
{return cljs.core.edit_and_set.call(null,inode__38039,edit,((2 * idx__38041) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__38039,edit,(2 * idx__38041),null,((2 * idx__38041) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__38051,val_or_node__38052,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__38054 = this;
var inode__38055 = this;
return cljs.core.create_inode_seq.call(null,this__38054.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__38056 = this;
var inode__38057 = this;
var bit__38058 = (1 << ((hash >>> shift) & 0x01f));
if(((this__38056.bitmap & bit__38058) === 0))
{return inode__38057;
} else
{var idx__38059 = cljs.core.bitmap_indexed_node_index.call(null,this__38056.bitmap,bit__38058);
var key_or_nil__38060 = (this__38056.arr[(2 * idx__38059)]);
var val_or_node__38061 = (this__38056.arr[((2 * idx__38059) + 1)]);
if((key_or_nil__38060 == null))
{var n__38062 = val_or_node__38061.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__38062 === val_or_node__38061))
{return inode__38057;
} else
{if(!((n__38062 == null)))
{return cljs.core.edit_and_set.call(null,inode__38057,edit,((2 * idx__38059) + 1),n__38062);
} else
{if((this__38056.bitmap === bit__38058))
{return null;
} else
{if("\uFDD0'else")
{return inode__38057.edit_and_remove_pair(edit,bit__38058,idx__38059);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__38060))
{(removed_leaf_QMARK_[0] = true);
return inode__38057.edit_and_remove_pair(edit,bit__38058,idx__38059);
} else
{if("\uFDD0'else")
{return inode__38057;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__38063 = this;
var inode__38064 = this;
if((e === this__38063.edit))
{return inode__38064;
} else
{var n__38065 = cljs.core.bit_count.call(null,this__38063.bitmap);
var new_arr__38066 = cljs.core.make_array.call(null,(((n__38065 < 0))?4:(2 * (n__38065 + 1))));
cljs.core.array_copy.call(null,this__38063.arr,0,new_arr__38066,0,(2 * n__38065));
return (new cljs.core.BitmapIndexedNode(e,this__38063.bitmap,new_arr__38066));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__38067 = this;
var inode__38068 = this;
return cljs.core.inode_kv_reduce.call(null,this__38067.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__38069 = this;
var inode__38070 = this;
var bit__38071 = (1 << ((hash >>> shift) & 0x01f));
if(((this__38069.bitmap & bit__38071) === 0))
{return not_found;
} else
{var idx__38072 = cljs.core.bitmap_indexed_node_index.call(null,this__38069.bitmap,bit__38071);
var key_or_nil__38073 = (this__38069.arr[(2 * idx__38072)]);
var val_or_node__38074 = (this__38069.arr[((2 * idx__38072) + 1)]);
if((key_or_nil__38073 == null))
{return val_or_node__38074.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__38073))
{return cljs.core.PersistentVector.fromArray([key_or_nil__38073,val_or_node__38074], true);
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
var this__38075 = this;
var inode__38076 = this;
var bit__38077 = (1 << ((hash >>> shift) & 0x01f));
if(((this__38075.bitmap & bit__38077) === 0))
{return inode__38076;
} else
{var idx__38078 = cljs.core.bitmap_indexed_node_index.call(null,this__38075.bitmap,bit__38077);
var key_or_nil__38079 = (this__38075.arr[(2 * idx__38078)]);
var val_or_node__38080 = (this__38075.arr[((2 * idx__38078) + 1)]);
if((key_or_nil__38079 == null))
{var n__38081 = val_or_node__38080.inode_without((shift + 5),hash,key);
if((n__38081 === val_or_node__38080))
{return inode__38076;
} else
{if(!((n__38081 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__38075.bitmap,cljs.core.clone_and_set.call(null,this__38075.arr,((2 * idx__38078) + 1),n__38081)));
} else
{if((this__38075.bitmap === bit__38077))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__38075.bitmap ^ bit__38077),cljs.core.remove_pair.call(null,this__38075.arr,idx__38078)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__38079))
{return (new cljs.core.BitmapIndexedNode(null,(this__38075.bitmap ^ bit__38077),cljs.core.remove_pair.call(null,this__38075.arr,idx__38078)));
} else
{if("\uFDD0'else")
{return inode__38076;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__38082 = this;
var inode__38083 = this;
var bit__38084 = (1 << ((hash >>> shift) & 0x01f));
var idx__38085 = cljs.core.bitmap_indexed_node_index.call(null,this__38082.bitmap,bit__38084);
if(((this__38082.bitmap & bit__38084) === 0))
{var n__38086 = cljs.core.bit_count.call(null,this__38082.bitmap);
if((n__38086 >= 16))
{var nodes__38087 = cljs.core.make_array.call(null,32);
var jdx__38088 = ((hash >>> shift) & 0x01f);
(nodes__38087[jdx__38088] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__38089 = 0;
var j__38090 = 0;
while(true){
if((i__38089 < 32))
{if((((this__38082.bitmap >>> i__38089) & 1) === 0))
{{
var G__38105 = (i__38089 + 1);
var G__38106 = j__38090;
i__38089 = G__38105;
j__38090 = G__38106;
continue;
}
} else
{(nodes__38087[i__38089] = ((!(((this__38082.arr[j__38090]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__38082.arr[j__38090])),(this__38082.arr[j__38090]),(this__38082.arr[(j__38090 + 1)]),added_leaf_QMARK_):(this__38082.arr[(j__38090 + 1)])));
{
var G__38107 = (i__38089 + 1);
var G__38108 = (j__38090 + 2);
i__38089 = G__38107;
j__38090 = G__38108;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__38086 + 1),nodes__38087));
} else
{var new_arr__38091 = cljs.core.make_array.call(null,(2 * (n__38086 + 1)));
cljs.core.array_copy.call(null,this__38082.arr,0,new_arr__38091,0,(2 * idx__38085));
(new_arr__38091[(2 * idx__38085)] = key);
(new_arr__38091[((2 * idx__38085) + 1)] = val);
cljs.core.array_copy.call(null,this__38082.arr,(2 * idx__38085),new_arr__38091,(2 * (idx__38085 + 1)),(2 * (n__38086 - idx__38085)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__38082.bitmap | bit__38084),new_arr__38091));
}
} else
{var key_or_nil__38092 = (this__38082.arr[(2 * idx__38085)]);
var val_or_node__38093 = (this__38082.arr[((2 * idx__38085) + 1)]);
if((key_or_nil__38092 == null))
{var n__38094 = val_or_node__38093.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__38094 === val_or_node__38093))
{return inode__38083;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__38082.bitmap,cljs.core.clone_and_set.call(null,this__38082.arr,((2 * idx__38085) + 1),n__38094)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__38092))
{if((val === val_or_node__38093))
{return inode__38083;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__38082.bitmap,cljs.core.clone_and_set.call(null,this__38082.arr,((2 * idx__38085) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__38082.bitmap,cljs.core.clone_and_set.call(null,this__38082.arr,(2 * idx__38085),null,((2 * idx__38085) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__38092,val_or_node__38093,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__38095 = this;
var inode__38096 = this;
var bit__38097 = (1 << ((hash >>> shift) & 0x01f));
if(((this__38095.bitmap & bit__38097) === 0))
{return not_found;
} else
{var idx__38098 = cljs.core.bitmap_indexed_node_index.call(null,this__38095.bitmap,bit__38097);
var key_or_nil__38099 = (this__38095.arr[(2 * idx__38098)]);
var val_or_node__38100 = (this__38095.arr[((2 * idx__38098) + 1)]);
if((key_or_nil__38099 == null))
{return val_or_node__38100.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__38099))
{return val_or_node__38100;
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
var arr__38116 = array_node.arr;
var len__38117 = (2 * (array_node.cnt - 1));
var new_arr__38118 = cljs.core.make_array.call(null,len__38117);
var i__38119 = 0;
var j__38120 = 1;
var bitmap__38121 = 0;
while(true){
if((i__38119 < len__38117))
{if((function (){var and__3822__auto____38122 = !((i__38119 === idx));
if(and__3822__auto____38122)
{return !(((arr__38116[i__38119]) == null));
} else
{return and__3822__auto____38122;
}
})())
{(new_arr__38118[j__38120] = (arr__38116[i__38119]));
{
var G__38123 = (i__38119 + 1);
var G__38124 = (j__38120 + 2);
var G__38125 = (bitmap__38121 | (1 << i__38119));
i__38119 = G__38123;
j__38120 = G__38124;
bitmap__38121 = G__38125;
continue;
}
} else
{{
var G__38126 = (i__38119 + 1);
var G__38127 = j__38120;
var G__38128 = bitmap__38121;
i__38119 = G__38126;
j__38120 = G__38127;
bitmap__38121 = G__38128;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__38121,new_arr__38118));
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
var this__38129 = this;
var inode__38130 = this;
var idx__38131 = ((hash >>> shift) & 0x01f);
var node__38132 = (this__38129.arr[idx__38131]);
if((node__38132 == null))
{var editable__38133 = cljs.core.edit_and_set.call(null,inode__38130,edit,idx__38131,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__38133.cnt = (editable__38133.cnt + 1);
return editable__38133;
} else
{var n__38134 = node__38132.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__38134 === node__38132))
{return inode__38130;
} else
{return cljs.core.edit_and_set.call(null,inode__38130,edit,idx__38131,n__38134);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__38135 = this;
var inode__38136 = this;
return cljs.core.create_array_node_seq.call(null,this__38135.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__38137 = this;
var inode__38138 = this;
var idx__38139 = ((hash >>> shift) & 0x01f);
var node__38140 = (this__38137.arr[idx__38139]);
if((node__38140 == null))
{return inode__38138;
} else
{var n__38141 = node__38140.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__38141 === node__38140))
{return inode__38138;
} else
{if((n__38141 == null))
{if((this__38137.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__38138,edit,idx__38139);
} else
{var editable__38142 = cljs.core.edit_and_set.call(null,inode__38138,edit,idx__38139,n__38141);
editable__38142.cnt = (editable__38142.cnt - 1);
return editable__38142;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__38138,edit,idx__38139,n__38141);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__38143 = this;
var inode__38144 = this;
if((e === this__38143.edit))
{return inode__38144;
} else
{return (new cljs.core.ArrayNode(e,this__38143.cnt,this__38143.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__38145 = this;
var inode__38146 = this;
var len__38147 = this__38145.arr.length;
var i__38148 = 0;
var init__38149 = init;
while(true){
if((i__38148 < len__38147))
{var node__38150 = (this__38145.arr[i__38148]);
if(!((node__38150 == null)))
{var init__38151 = node__38150.kv_reduce(f,init__38149);
if(cljs.core.reduced_QMARK_.call(null,init__38151))
{return cljs.core.deref.call(null,init__38151);
} else
{{
var G__38170 = (i__38148 + 1);
var G__38171 = init__38151;
i__38148 = G__38170;
init__38149 = G__38171;
continue;
}
}
} else
{return null;
}
} else
{return init__38149;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__38152 = this;
var inode__38153 = this;
var idx__38154 = ((hash >>> shift) & 0x01f);
var node__38155 = (this__38152.arr[idx__38154]);
if(!((node__38155 == null)))
{return node__38155.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__38156 = this;
var inode__38157 = this;
var idx__38158 = ((hash >>> shift) & 0x01f);
var node__38159 = (this__38156.arr[idx__38158]);
if(!((node__38159 == null)))
{var n__38160 = node__38159.inode_without((shift + 5),hash,key);
if((n__38160 === node__38159))
{return inode__38157;
} else
{if((n__38160 == null))
{if((this__38156.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__38157,null,idx__38158);
} else
{return (new cljs.core.ArrayNode(null,(this__38156.cnt - 1),cljs.core.clone_and_set.call(null,this__38156.arr,idx__38158,n__38160)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__38156.cnt,cljs.core.clone_and_set.call(null,this__38156.arr,idx__38158,n__38160)));
} else
{return null;
}
}
}
} else
{return inode__38157;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__38161 = this;
var inode__38162 = this;
var idx__38163 = ((hash >>> shift) & 0x01f);
var node__38164 = (this__38161.arr[idx__38163]);
if((node__38164 == null))
{return (new cljs.core.ArrayNode(null,(this__38161.cnt + 1),cljs.core.clone_and_set.call(null,this__38161.arr,idx__38163,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__38165 = node__38164.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__38165 === node__38164))
{return inode__38162;
} else
{return (new cljs.core.ArrayNode(null,this__38161.cnt,cljs.core.clone_and_set.call(null,this__38161.arr,idx__38163,n__38165)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__38166 = this;
var inode__38167 = this;
var idx__38168 = ((hash >>> shift) & 0x01f);
var node__38169 = (this__38166.arr[idx__38168]);
if(!((node__38169 == null)))
{return node__38169.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__38174 = (2 * cnt);
var i__38175 = 0;
while(true){
if((i__38175 < lim__38174))
{if(cljs.core.key_test.call(null,key,(arr[i__38175])))
{return i__38175;
} else
{{
var G__38176 = (i__38175 + 2);
i__38175 = G__38176;
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
var this__38177 = this;
var inode__38178 = this;
if((hash === this__38177.collision_hash))
{var idx__38179 = cljs.core.hash_collision_node_find_index.call(null,this__38177.arr,this__38177.cnt,key);
if((idx__38179 === -1))
{if((this__38177.arr.length > (2 * this__38177.cnt)))
{var editable__38180 = cljs.core.edit_and_set.call(null,inode__38178,edit,(2 * this__38177.cnt),key,((2 * this__38177.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__38180.cnt = (editable__38180.cnt + 1);
return editable__38180;
} else
{var len__38181 = this__38177.arr.length;
var new_arr__38182 = cljs.core.make_array.call(null,(len__38181 + 2));
cljs.core.array_copy.call(null,this__38177.arr,0,new_arr__38182,0,len__38181);
(new_arr__38182[len__38181] = key);
(new_arr__38182[(len__38181 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__38178.ensure_editable_array(edit,(this__38177.cnt + 1),new_arr__38182);
}
} else
{if(((this__38177.arr[(idx__38179 + 1)]) === val))
{return inode__38178;
} else
{return cljs.core.edit_and_set.call(null,inode__38178,edit,(idx__38179 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__38177.collision_hash >>> shift) & 0x01f)),[null,inode__38178,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__38183 = this;
var inode__38184 = this;
return cljs.core.create_inode_seq.call(null,this__38183.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__38185 = this;
var inode__38186 = this;
var idx__38187 = cljs.core.hash_collision_node_find_index.call(null,this__38185.arr,this__38185.cnt,key);
if((idx__38187 === -1))
{return inode__38186;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__38185.cnt === 1))
{return null;
} else
{var editable__38188 = inode__38186.ensure_editable(edit);
var earr__38189 = editable__38188.arr;
(earr__38189[idx__38187] = (earr__38189[((2 * this__38185.cnt) - 2)]));
(earr__38189[(idx__38187 + 1)] = (earr__38189[((2 * this__38185.cnt) - 1)]));
(earr__38189[((2 * this__38185.cnt) - 1)] = null);
(earr__38189[((2 * this__38185.cnt) - 2)] = null);
editable__38188.cnt = (editable__38188.cnt - 1);
return editable__38188;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__38190 = this;
var inode__38191 = this;
if((e === this__38190.edit))
{return inode__38191;
} else
{var new_arr__38192 = cljs.core.make_array.call(null,(2 * (this__38190.cnt + 1)));
cljs.core.array_copy.call(null,this__38190.arr,0,new_arr__38192,0,(2 * this__38190.cnt));
return (new cljs.core.HashCollisionNode(e,this__38190.collision_hash,this__38190.cnt,new_arr__38192));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__38193 = this;
var inode__38194 = this;
return cljs.core.inode_kv_reduce.call(null,this__38193.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__38195 = this;
var inode__38196 = this;
var idx__38197 = cljs.core.hash_collision_node_find_index.call(null,this__38195.arr,this__38195.cnt,key);
if((idx__38197 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__38195.arr[idx__38197])))
{return cljs.core.PersistentVector.fromArray([(this__38195.arr[idx__38197]),(this__38195.arr[(idx__38197 + 1)])], true);
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
var this__38198 = this;
var inode__38199 = this;
var idx__38200 = cljs.core.hash_collision_node_find_index.call(null,this__38198.arr,this__38198.cnt,key);
if((idx__38200 === -1))
{return inode__38199;
} else
{if((this__38198.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__38198.collision_hash,(this__38198.cnt - 1),cljs.core.remove_pair.call(null,this__38198.arr,cljs.core.quot.call(null,idx__38200,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__38201 = this;
var inode__38202 = this;
if((hash === this__38201.collision_hash))
{var idx__38203 = cljs.core.hash_collision_node_find_index.call(null,this__38201.arr,this__38201.cnt,key);
if((idx__38203 === -1))
{var len__38204 = this__38201.arr.length;
var new_arr__38205 = cljs.core.make_array.call(null,(len__38204 + 2));
cljs.core.array_copy.call(null,this__38201.arr,0,new_arr__38205,0,len__38204);
(new_arr__38205[len__38204] = key);
(new_arr__38205[(len__38204 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__38201.collision_hash,(this__38201.cnt + 1),new_arr__38205));
} else
{if(cljs.core._EQ_.call(null,(this__38201.arr[idx__38203]),val))
{return inode__38202;
} else
{return (new cljs.core.HashCollisionNode(null,this__38201.collision_hash,this__38201.cnt,cljs.core.clone_and_set.call(null,this__38201.arr,(idx__38203 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__38201.collision_hash >>> shift) & 0x01f)),[null,inode__38202])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__38206 = this;
var inode__38207 = this;
var idx__38208 = cljs.core.hash_collision_node_find_index.call(null,this__38206.arr,this__38206.cnt,key);
if((idx__38208 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__38206.arr[idx__38208])))
{return (this__38206.arr[(idx__38208 + 1)]);
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
var this__38209 = this;
var inode__38210 = this;
if((e === this__38209.edit))
{this__38209.arr = array;
this__38209.cnt = count;
return inode__38210;
} else
{return (new cljs.core.HashCollisionNode(this__38209.edit,this__38209.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__38215 = cljs.core.hash.call(null,key1);
if((key1hash__38215 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__38215,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___38216 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__38215,key1,val1,added_leaf_QMARK___38216).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___38216);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__38217 = cljs.core.hash.call(null,key1);
if((key1hash__38217 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__38217,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___38218 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__38217,key1,val1,added_leaf_QMARK___38218).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___38218);
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
var this__38219 = this;
var h__2203__auto____38220 = this__38219.__hash;
if(!((h__2203__auto____38220 == null)))
{return h__2203__auto____38220;
} else
{var h__2203__auto____38221 = cljs.core.hash_coll.call(null,coll);
this__38219.__hash = h__2203__auto____38221;
return h__2203__auto____38221;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__38222 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__38223 = this;
var this__38224 = this;
return cljs.core.pr_str.call(null,this__38224);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__38225 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__38226 = this;
if((this__38226.s == null))
{return cljs.core.PersistentVector.fromArray([(this__38226.nodes[this__38226.i]),(this__38226.nodes[(this__38226.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__38226.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__38227 = this;
if((this__38227.s == null))
{return cljs.core.create_inode_seq.call(null,this__38227.nodes,(this__38227.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__38227.nodes,this__38227.i,cljs.core.next.call(null,this__38227.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__38228 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__38229 = this;
return (new cljs.core.NodeSeq(meta,this__38229.nodes,this__38229.i,this__38229.s,this__38229.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__38230 = this;
return this__38230.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__38231 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__38231.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__38238 = nodes.length;
var j__38239 = i;
while(true){
if((j__38239 < len__38238))
{if(!(((nodes[j__38239]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__38239,null,null));
} else
{var temp__3971__auto____38240 = (nodes[(j__38239 + 1)]);
if(cljs.core.truth_(temp__3971__auto____38240))
{var node__38241 = temp__3971__auto____38240;
var temp__3971__auto____38242 = node__38241.inode_seq();
if(cljs.core.truth_(temp__3971__auto____38242))
{var node_seq__38243 = temp__3971__auto____38242;
return (new cljs.core.NodeSeq(null,nodes,(j__38239 + 2),node_seq__38243,null));
} else
{{
var G__38244 = (j__38239 + 2);
j__38239 = G__38244;
continue;
}
}
} else
{{
var G__38245 = (j__38239 + 2);
j__38239 = G__38245;
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
var this__38246 = this;
var h__2203__auto____38247 = this__38246.__hash;
if(!((h__2203__auto____38247 == null)))
{return h__2203__auto____38247;
} else
{var h__2203__auto____38248 = cljs.core.hash_coll.call(null,coll);
this__38246.__hash = h__2203__auto____38248;
return h__2203__auto____38248;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__38249 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__38250 = this;
var this__38251 = this;
return cljs.core.pr_str.call(null,this__38251);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__38252 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__38253 = this;
return cljs.core.first.call(null,this__38253.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__38254 = this;
return cljs.core.create_array_node_seq.call(null,null,this__38254.nodes,this__38254.i,cljs.core.next.call(null,this__38254.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__38255 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__38256 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__38256.nodes,this__38256.i,this__38256.s,this__38256.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__38257 = this;
return this__38257.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__38258 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__38258.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__38265 = nodes.length;
var j__38266 = i;
while(true){
if((j__38266 < len__38265))
{var temp__3971__auto____38267 = (nodes[j__38266]);
if(cljs.core.truth_(temp__3971__auto____38267))
{var nj__38268 = temp__3971__auto____38267;
var temp__3971__auto____38269 = nj__38268.inode_seq();
if(cljs.core.truth_(temp__3971__auto____38269))
{var ns__38270 = temp__3971__auto____38269;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__38266 + 1),ns__38270,null));
} else
{{
var G__38271 = (j__38266 + 1);
j__38266 = G__38271;
continue;
}
}
} else
{{
var G__38272 = (j__38266 + 1);
j__38266 = G__38272;
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
var this__38275 = this;
return (new cljs.core.TransientHashMap({},this__38275.root,this__38275.cnt,this__38275.has_nil_QMARK_,this__38275.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__38276 = this;
var h__2203__auto____38277 = this__38276.__hash;
if(!((h__2203__auto____38277 == null)))
{return h__2203__auto____38277;
} else
{var h__2203__auto____38278 = cljs.core.hash_imap.call(null,coll);
this__38276.__hash = h__2203__auto____38278;
return h__2203__auto____38278;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__38279 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__38280 = this;
if((k == null))
{if(this__38280.has_nil_QMARK_)
{return this__38280.nil_val;
} else
{return not_found;
}
} else
{if((this__38280.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__38280.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__38281 = this;
if((k == null))
{if((function (){var and__3822__auto____38282 = this__38281.has_nil_QMARK_;
if(and__3822__auto____38282)
{return (v === this__38281.nil_val);
} else
{return and__3822__auto____38282;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__38281.meta,((this__38281.has_nil_QMARK_)?this__38281.cnt:(this__38281.cnt + 1)),this__38281.root,true,v,null));
}
} else
{var added_leaf_QMARK___38283 = (new cljs.core.Box(false));
var new_root__38284 = (((this__38281.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__38281.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___38283);
if((new_root__38284 === this__38281.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__38281.meta,((added_leaf_QMARK___38283.val)?(this__38281.cnt + 1):this__38281.cnt),new_root__38284,this__38281.has_nil_QMARK_,this__38281.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__38285 = this;
if((k == null))
{return this__38285.has_nil_QMARK_;
} else
{if((this__38285.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__38285.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__38308 = null;
var G__38308__2 = (function (this_sym38286,k){
var this__38288 = this;
var this_sym38286__38289 = this;
var coll__38290 = this_sym38286__38289;
return coll__38290.cljs$core$ILookup$_lookup$arity$2(coll__38290,k);
});
var G__38308__3 = (function (this_sym38287,k,not_found){
var this__38288 = this;
var this_sym38287__38291 = this;
var coll__38292 = this_sym38287__38291;
return coll__38292.cljs$core$ILookup$_lookup$arity$3(coll__38292,k,not_found);
});
G__38308 = function(this_sym38287,k,not_found){
switch(arguments.length){
case 2:
return G__38308__2.call(this,this_sym38287,k);
case 3:
return G__38308__3.call(this,this_sym38287,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__38308;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym38273,args38274){
var this__38293 = this;
return this_sym38273.call.apply(this_sym38273,[this_sym38273].concat(args38274.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__38294 = this;
var init__38295 = ((this__38294.has_nil_QMARK_)?f.call(null,init,null,this__38294.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__38295))
{return cljs.core.deref.call(null,init__38295);
} else
{if(!((this__38294.root == null)))
{return this__38294.root.kv_reduce(f,init__38295);
} else
{if("\uFDD0'else")
{return init__38295;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__38296 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__38297 = this;
var this__38298 = this;
return cljs.core.pr_str.call(null,this__38298);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__38299 = this;
if((this__38299.cnt > 0))
{var s__38300 = ((!((this__38299.root == null)))?this__38299.root.inode_seq():null);
if(this__38299.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__38299.nil_val], true),s__38300);
} else
{return s__38300;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__38301 = this;
return this__38301.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__38302 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__38303 = this;
return (new cljs.core.PersistentHashMap(meta,this__38303.cnt,this__38303.root,this__38303.has_nil_QMARK_,this__38303.nil_val,this__38303.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__38304 = this;
return this__38304.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__38305 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__38305.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__38306 = this;
if((k == null))
{if(this__38306.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__38306.meta,(this__38306.cnt - 1),this__38306.root,false,null,null));
} else
{return coll;
}
} else
{if((this__38306.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__38307 = this__38306.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__38307 === this__38306.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__38306.meta,(this__38306.cnt - 1),new_root__38307,this__38306.has_nil_QMARK_,this__38306.nil_val,null));
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
var len__38309 = ks.length;
var i__38310 = 0;
var out__38311 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__38310 < len__38309))
{{
var G__38312 = (i__38310 + 1);
var G__38313 = cljs.core.assoc_BANG_.call(null,out__38311,(ks[i__38310]),(vs[i__38310]));
i__38310 = G__38312;
out__38311 = G__38313;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__38311);
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
var this__38314 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__38315 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__38316 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__38317 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__38318 = this;
if((k == null))
{if(this__38318.has_nil_QMARK_)
{return this__38318.nil_val;
} else
{return null;
}
} else
{if((this__38318.root == null))
{return null;
} else
{return this__38318.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__38319 = this;
if((k == null))
{if(this__38319.has_nil_QMARK_)
{return this__38319.nil_val;
} else
{return not_found;
}
} else
{if((this__38319.root == null))
{return not_found;
} else
{return this__38319.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__38320 = this;
if(this__38320.edit)
{return this__38320.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__38321 = this;
var tcoll__38322 = this;
if(this__38321.edit)
{if((function (){var G__38323__38324 = o;
if(G__38323__38324)
{if((function (){var or__3824__auto____38325 = (G__38323__38324.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____38325)
{return or__3824__auto____38325;
} else
{return G__38323__38324.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__38323__38324.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__38323__38324);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__38323__38324);
}
})())
{return tcoll__38322.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__38326 = cljs.core.seq.call(null,o);
var tcoll__38327 = tcoll__38322;
while(true){
var temp__3971__auto____38328 = cljs.core.first.call(null,es__38326);
if(cljs.core.truth_(temp__3971__auto____38328))
{var e__38329 = temp__3971__auto____38328;
{
var G__38340 = cljs.core.next.call(null,es__38326);
var G__38341 = tcoll__38327.assoc_BANG_(cljs.core.key.call(null,e__38329),cljs.core.val.call(null,e__38329));
es__38326 = G__38340;
tcoll__38327 = G__38341;
continue;
}
} else
{return tcoll__38327;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__38330 = this;
var tcoll__38331 = this;
if(this__38330.edit)
{if((k == null))
{if((this__38330.nil_val === v))
{} else
{this__38330.nil_val = v;
}
if(this__38330.has_nil_QMARK_)
{} else
{this__38330.count = (this__38330.count + 1);
this__38330.has_nil_QMARK_ = true;
}
return tcoll__38331;
} else
{var added_leaf_QMARK___38332 = (new cljs.core.Box(false));
var node__38333 = (((this__38330.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__38330.root).inode_assoc_BANG_(this__38330.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___38332);
if((node__38333 === this__38330.root))
{} else
{this__38330.root = node__38333;
}
if(added_leaf_QMARK___38332.val)
{this__38330.count = (this__38330.count + 1);
} else
{}
return tcoll__38331;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__38334 = this;
var tcoll__38335 = this;
if(this__38334.edit)
{if((k == null))
{if(this__38334.has_nil_QMARK_)
{this__38334.has_nil_QMARK_ = false;
this__38334.nil_val = null;
this__38334.count = (this__38334.count - 1);
return tcoll__38335;
} else
{return tcoll__38335;
}
} else
{if((this__38334.root == null))
{return tcoll__38335;
} else
{var removed_leaf_QMARK___38336 = (new cljs.core.Box(false));
var node__38337 = this__38334.root.inode_without_BANG_(this__38334.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___38336);
if((node__38337 === this__38334.root))
{} else
{this__38334.root = node__38337;
}
if(cljs.core.truth_((removed_leaf_QMARK___38336[0])))
{this__38334.count = (this__38334.count - 1);
} else
{}
return tcoll__38335;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__38338 = this;
var tcoll__38339 = this;
if(this__38338.edit)
{this__38338.edit = null;
return (new cljs.core.PersistentHashMap(null,this__38338.count,this__38338.root,this__38338.has_nil_QMARK_,this__38338.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__38344 = node;
var stack__38345 = stack;
while(true){
if(!((t__38344 == null)))
{{
var G__38346 = ((ascending_QMARK_)?t__38344.left:t__38344.right);
var G__38347 = cljs.core.conj.call(null,stack__38345,t__38344);
t__38344 = G__38346;
stack__38345 = G__38347;
continue;
}
} else
{return stack__38345;
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
var this__38348 = this;
var h__2203__auto____38349 = this__38348.__hash;
if(!((h__2203__auto____38349 == null)))
{return h__2203__auto____38349;
} else
{var h__2203__auto____38350 = cljs.core.hash_coll.call(null,coll);
this__38348.__hash = h__2203__auto____38350;
return h__2203__auto____38350;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__38351 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__38352 = this;
var this__38353 = this;
return cljs.core.pr_str.call(null,this__38353);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__38354 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__38355 = this;
if((this__38355.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__38355.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__38356 = this;
return cljs.core.peek.call(null,this__38356.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__38357 = this;
var t__38358 = cljs.core.first.call(null,this__38357.stack);
var next_stack__38359 = cljs.core.tree_map_seq_push.call(null,((this__38357.ascending_QMARK_)?t__38358.right:t__38358.left),cljs.core.next.call(null,this__38357.stack),this__38357.ascending_QMARK_);
if(!((next_stack__38359 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__38359,this__38357.ascending_QMARK_,(this__38357.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__38360 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__38361 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__38361.stack,this__38361.ascending_QMARK_,this__38361.cnt,this__38361.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__38362 = this;
return this__38362.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__38363 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__38363.meta);
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
{if((function (){var and__3822__auto____38365 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____38365)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____38365;
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
{if((function (){var and__3822__auto____38367 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____38367)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____38367;
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
var init__38371 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__38371))
{return cljs.core.deref.call(null,init__38371);
} else
{var init__38372 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__38371):init__38371);
if(cljs.core.reduced_QMARK_.call(null,init__38372))
{return cljs.core.deref.call(null,init__38372);
} else
{var init__38373 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__38372):init__38372);
if(cljs.core.reduced_QMARK_.call(null,init__38373))
{return cljs.core.deref.call(null,init__38373);
} else
{return init__38373;
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
var this__38376 = this;
var h__2203__auto____38377 = this__38376.__hash;
if(!((h__2203__auto____38377 == null)))
{return h__2203__auto____38377;
} else
{var h__2203__auto____38378 = cljs.core.hash_coll.call(null,coll);
this__38376.__hash = h__2203__auto____38378;
return h__2203__auto____38378;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__38379 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__38380 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__38381 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__38381.key,this__38381.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__38429 = null;
var G__38429__2 = (function (this_sym38382,k){
var this__38384 = this;
var this_sym38382__38385 = this;
var node__38386 = this_sym38382__38385;
return node__38386.cljs$core$ILookup$_lookup$arity$2(node__38386,k);
});
var G__38429__3 = (function (this_sym38383,k,not_found){
var this__38384 = this;
var this_sym38383__38387 = this;
var node__38388 = this_sym38383__38387;
return node__38388.cljs$core$ILookup$_lookup$arity$3(node__38388,k,not_found);
});
G__38429 = function(this_sym38383,k,not_found){
switch(arguments.length){
case 2:
return G__38429__2.call(this,this_sym38383,k);
case 3:
return G__38429__3.call(this,this_sym38383,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__38429;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym38374,args38375){
var this__38389 = this;
return this_sym38374.call.apply(this_sym38374,[this_sym38374].concat(args38375.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__38390 = this;
return cljs.core.PersistentVector.fromArray([this__38390.key,this__38390.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__38391 = this;
return this__38391.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__38392 = this;
return this__38392.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__38393 = this;
var node__38394 = this;
return ins.balance_right(node__38394);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__38395 = this;
var node__38396 = this;
return (new cljs.core.RedNode(this__38395.key,this__38395.val,this__38395.left,this__38395.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__38397 = this;
var node__38398 = this;
return cljs.core.balance_right_del.call(null,this__38397.key,this__38397.val,this__38397.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__38399 = this;
var node__38400 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__38401 = this;
var node__38402 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__38402,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__38403 = this;
var node__38404 = this;
return cljs.core.balance_left_del.call(null,this__38403.key,this__38403.val,del,this__38403.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__38405 = this;
var node__38406 = this;
return ins.balance_left(node__38406);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__38407 = this;
var node__38408 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__38408,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__38430 = null;
var G__38430__0 = (function (){
var this__38409 = this;
var this__38411 = this;
return cljs.core.pr_str.call(null,this__38411);
});
G__38430 = function(){
switch(arguments.length){
case 0:
return G__38430__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__38430;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__38412 = this;
var node__38413 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__38413,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__38414 = this;
var node__38415 = this;
return node__38415;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__38416 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__38417 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__38418 = this;
return cljs.core.list.call(null,this__38418.key,this__38418.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__38419 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__38420 = this;
return this__38420.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__38421 = this;
return cljs.core.PersistentVector.fromArray([this__38421.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__38422 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__38422.key,this__38422.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__38423 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__38424 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__38424.key,this__38424.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__38425 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__38426 = this;
if((n === 0))
{return this__38426.key;
} else
{if((n === 1))
{return this__38426.val;
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
var this__38427 = this;
if((n === 0))
{return this__38427.key;
} else
{if((n === 1))
{return this__38427.val;
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
var this__38428 = this;
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
var this__38433 = this;
var h__2203__auto____38434 = this__38433.__hash;
if(!((h__2203__auto____38434 == null)))
{return h__2203__auto____38434;
} else
{var h__2203__auto____38435 = cljs.core.hash_coll.call(null,coll);
this__38433.__hash = h__2203__auto____38435;
return h__2203__auto____38435;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__38436 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__38437 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__38438 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__38438.key,this__38438.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__38486 = null;
var G__38486__2 = (function (this_sym38439,k){
var this__38441 = this;
var this_sym38439__38442 = this;
var node__38443 = this_sym38439__38442;
return node__38443.cljs$core$ILookup$_lookup$arity$2(node__38443,k);
});
var G__38486__3 = (function (this_sym38440,k,not_found){
var this__38441 = this;
var this_sym38440__38444 = this;
var node__38445 = this_sym38440__38444;
return node__38445.cljs$core$ILookup$_lookup$arity$3(node__38445,k,not_found);
});
G__38486 = function(this_sym38440,k,not_found){
switch(arguments.length){
case 2:
return G__38486__2.call(this,this_sym38440,k);
case 3:
return G__38486__3.call(this,this_sym38440,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__38486;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym38431,args38432){
var this__38446 = this;
return this_sym38431.call.apply(this_sym38431,[this_sym38431].concat(args38432.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__38447 = this;
return cljs.core.PersistentVector.fromArray([this__38447.key,this__38447.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__38448 = this;
return this__38448.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__38449 = this;
return this__38449.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__38450 = this;
var node__38451 = this;
return (new cljs.core.RedNode(this__38450.key,this__38450.val,this__38450.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__38452 = this;
var node__38453 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__38454 = this;
var node__38455 = this;
return (new cljs.core.RedNode(this__38454.key,this__38454.val,this__38454.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__38456 = this;
var node__38457 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__38458 = this;
var node__38459 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__38459,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__38460 = this;
var node__38461 = this;
return (new cljs.core.RedNode(this__38460.key,this__38460.val,del,this__38460.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__38462 = this;
var node__38463 = this;
return (new cljs.core.RedNode(this__38462.key,this__38462.val,ins,this__38462.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__38464 = this;
var node__38465 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__38464.left))
{return (new cljs.core.RedNode(this__38464.key,this__38464.val,this__38464.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__38464.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__38464.right))
{return (new cljs.core.RedNode(this__38464.right.key,this__38464.right.val,(new cljs.core.BlackNode(this__38464.key,this__38464.val,this__38464.left,this__38464.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__38464.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__38465,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__38487 = null;
var G__38487__0 = (function (){
var this__38466 = this;
var this__38468 = this;
return cljs.core.pr_str.call(null,this__38468);
});
G__38487 = function(){
switch(arguments.length){
case 0:
return G__38487__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__38487;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__38469 = this;
var node__38470 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__38469.right))
{return (new cljs.core.RedNode(this__38469.key,this__38469.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__38469.left,null)),this__38469.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__38469.left))
{return (new cljs.core.RedNode(this__38469.left.key,this__38469.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__38469.left.left,null)),(new cljs.core.BlackNode(this__38469.key,this__38469.val,this__38469.left.right,this__38469.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__38470,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__38471 = this;
var node__38472 = this;
return (new cljs.core.BlackNode(this__38471.key,this__38471.val,this__38471.left,this__38471.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__38473 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__38474 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__38475 = this;
return cljs.core.list.call(null,this__38475.key,this__38475.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__38476 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__38477 = this;
return this__38477.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__38478 = this;
return cljs.core.PersistentVector.fromArray([this__38478.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__38479 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__38479.key,this__38479.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__38480 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__38481 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__38481.key,this__38481.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__38482 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__38483 = this;
if((n === 0))
{return this__38483.key;
} else
{if((n === 1))
{return this__38483.val;
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
var this__38484 = this;
if((n === 0))
{return this__38484.key;
} else
{if((n === 1))
{return this__38484.val;
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
var this__38485 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__38491 = comp.call(null,k,tree.key);
if((c__38491 === 0))
{(found[0] = tree);
return null;
} else
{if((c__38491 < 0))
{var ins__38492 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__38492 == null)))
{return tree.add_left(ins__38492);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__38493 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__38493 == null)))
{return tree.add_right(ins__38493);
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
{var app__38496 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__38496))
{return (new cljs.core.RedNode(app__38496.key,app__38496.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__38496.left,null)),(new cljs.core.RedNode(right.key,right.val,app__38496.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__38496,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__38497 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__38497))
{return (new cljs.core.RedNode(app__38497.key,app__38497.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__38497.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__38497.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__38497,right.right,null)));
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
{var c__38503 = comp.call(null,k,tree.key);
if((c__38503 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__38503 < 0))
{var del__38504 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____38505 = !((del__38504 == null));
if(or__3824__auto____38505)
{return or__3824__auto____38505;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__38504,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__38504,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__38506 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____38507 = !((del__38506 == null));
if(or__3824__auto____38507)
{return or__3824__auto____38507;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__38506);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__38506,null));
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
var tk__38510 = tree.key;
var c__38511 = comp.call(null,k,tk__38510);
if((c__38511 === 0))
{return tree.replace(tk__38510,v,tree.left,tree.right);
} else
{if((c__38511 < 0))
{return tree.replace(tk__38510,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__38510,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__38514 = this;
var h__2203__auto____38515 = this__38514.__hash;
if(!((h__2203__auto____38515 == null)))
{return h__2203__auto____38515;
} else
{var h__2203__auto____38516 = cljs.core.hash_imap.call(null,coll);
this__38514.__hash = h__2203__auto____38516;
return h__2203__auto____38516;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__38517 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__38518 = this;
var n__38519 = coll.entry_at(k);
if(!((n__38519 == null)))
{return n__38519.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__38520 = this;
var found__38521 = [null];
var t__38522 = cljs.core.tree_map_add.call(null,this__38520.comp,this__38520.tree,k,v,found__38521);
if((t__38522 == null))
{var found_node__38523 = cljs.core.nth.call(null,found__38521,0);
if(cljs.core._EQ_.call(null,v,found_node__38523.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__38520.comp,cljs.core.tree_map_replace.call(null,this__38520.comp,this__38520.tree,k,v),this__38520.cnt,this__38520.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__38520.comp,t__38522.blacken(),(this__38520.cnt + 1),this__38520.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__38524 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__38558 = null;
var G__38558__2 = (function (this_sym38525,k){
var this__38527 = this;
var this_sym38525__38528 = this;
var coll__38529 = this_sym38525__38528;
return coll__38529.cljs$core$ILookup$_lookup$arity$2(coll__38529,k);
});
var G__38558__3 = (function (this_sym38526,k,not_found){
var this__38527 = this;
var this_sym38526__38530 = this;
var coll__38531 = this_sym38526__38530;
return coll__38531.cljs$core$ILookup$_lookup$arity$3(coll__38531,k,not_found);
});
G__38558 = function(this_sym38526,k,not_found){
switch(arguments.length){
case 2:
return G__38558__2.call(this,this_sym38526,k);
case 3:
return G__38558__3.call(this,this_sym38526,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__38558;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym38512,args38513){
var this__38532 = this;
return this_sym38512.call.apply(this_sym38512,[this_sym38512].concat(args38513.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__38533 = this;
if(!((this__38533.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__38533.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__38534 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__38535 = this;
if((this__38535.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__38535.tree,false,this__38535.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__38536 = this;
var this__38537 = this;
return cljs.core.pr_str.call(null,this__38537);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__38538 = this;
var coll__38539 = this;
var t__38540 = this__38538.tree;
while(true){
if(!((t__38540 == null)))
{var c__38541 = this__38538.comp.call(null,k,t__38540.key);
if((c__38541 === 0))
{return t__38540;
} else
{if((c__38541 < 0))
{{
var G__38559 = t__38540.left;
t__38540 = G__38559;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__38560 = t__38540.right;
t__38540 = G__38560;
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
var this__38542 = this;
if((this__38542.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__38542.tree,ascending_QMARK_,this__38542.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__38543 = this;
if((this__38543.cnt > 0))
{var stack__38544 = null;
var t__38545 = this__38543.tree;
while(true){
if(!((t__38545 == null)))
{var c__38546 = this__38543.comp.call(null,k,t__38545.key);
if((c__38546 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__38544,t__38545),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__38546 < 0))
{{
var G__38561 = cljs.core.conj.call(null,stack__38544,t__38545);
var G__38562 = t__38545.left;
stack__38544 = G__38561;
t__38545 = G__38562;
continue;
}
} else
{{
var G__38563 = stack__38544;
var G__38564 = t__38545.right;
stack__38544 = G__38563;
t__38545 = G__38564;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__38546 > 0))
{{
var G__38565 = cljs.core.conj.call(null,stack__38544,t__38545);
var G__38566 = t__38545.right;
stack__38544 = G__38565;
t__38545 = G__38566;
continue;
}
} else
{{
var G__38567 = stack__38544;
var G__38568 = t__38545.left;
stack__38544 = G__38567;
t__38545 = G__38568;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__38544 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__38544,ascending_QMARK_,-1,null));
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
var this__38547 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__38548 = this;
return this__38548.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__38549 = this;
if((this__38549.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__38549.tree,true,this__38549.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__38550 = this;
return this__38550.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__38551 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__38552 = this;
return (new cljs.core.PersistentTreeMap(this__38552.comp,this__38552.tree,this__38552.cnt,meta,this__38552.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__38553 = this;
return this__38553.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__38554 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__38554.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__38555 = this;
var found__38556 = [null];
var t__38557 = cljs.core.tree_map_remove.call(null,this__38555.comp,this__38555.tree,k,found__38556);
if((t__38557 == null))
{if((cljs.core.nth.call(null,found__38556,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__38555.comp,null,0,this__38555.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__38555.comp,t__38557.blacken(),(this__38555.cnt - 1),this__38555.meta,null));
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
var in__38571 = cljs.core.seq.call(null,keyvals);
var out__38572 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__38571)
{{
var G__38573 = cljs.core.nnext.call(null,in__38571);
var G__38574 = cljs.core.assoc_BANG_.call(null,out__38572,cljs.core.first.call(null,in__38571),cljs.core.second.call(null,in__38571));
in__38571 = G__38573;
out__38572 = G__38574;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__38572);
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
hash_map.cljs$lang$applyTo = (function (arglist__38575){
var keyvals = cljs.core.seq(arglist__38575);;
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
array_map.cljs$lang$applyTo = (function (arglist__38576){
var keyvals = cljs.core.seq(arglist__38576);;
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
var ks__38580 = [];
var obj__38581 = {};
var kvs__38582 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__38582)
{ks__38580.push(cljs.core.first.call(null,kvs__38582));
(obj__38581[cljs.core.first.call(null,kvs__38582)] = cljs.core.second.call(null,kvs__38582));
{
var G__38583 = cljs.core.nnext.call(null,kvs__38582);
kvs__38582 = G__38583;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__38580,obj__38581);
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
obj_map.cljs$lang$applyTo = (function (arglist__38584){
var keyvals = cljs.core.seq(arglist__38584);;
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
var in__38587 = cljs.core.seq.call(null,keyvals);
var out__38588 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__38587)
{{
var G__38589 = cljs.core.nnext.call(null,in__38587);
var G__38590 = cljs.core.assoc.call(null,out__38588,cljs.core.first.call(null,in__38587),cljs.core.second.call(null,in__38587));
in__38587 = G__38589;
out__38588 = G__38590;
continue;
}
} else
{return out__38588;
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
sorted_map.cljs$lang$applyTo = (function (arglist__38591){
var keyvals = cljs.core.seq(arglist__38591);;
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
var in__38594 = cljs.core.seq.call(null,keyvals);
var out__38595 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__38594)
{{
var G__38596 = cljs.core.nnext.call(null,in__38594);
var G__38597 = cljs.core.assoc.call(null,out__38595,cljs.core.first.call(null,in__38594),cljs.core.second.call(null,in__38594));
in__38594 = G__38596;
out__38595 = G__38597;
continue;
}
} else
{return out__38595;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__38598){
var comparator = cljs.core.first(arglist__38598);
var keyvals = cljs.core.rest(arglist__38598);
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
{return cljs.core.reduce.call(null,(function (p1__38599_SHARP_,p2__38600_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____38602 = p1__38599_SHARP_;
if(cljs.core.truth_(or__3824__auto____38602))
{return or__3824__auto____38602;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__38600_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__38603){
var maps = cljs.core.seq(arglist__38603);;
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
{var merge_entry__38611 = (function (m,e){
var k__38609 = cljs.core.first.call(null,e);
var v__38610 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__38609))
{return cljs.core.assoc.call(null,m,k__38609,f.call(null,cljs.core._lookup.call(null,m,k__38609,null),v__38610));
} else
{return cljs.core.assoc.call(null,m,k__38609,v__38610);
}
});
var merge2__38613 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__38611,(function (){var or__3824__auto____38612 = m1;
if(cljs.core.truth_(or__3824__auto____38612))
{return or__3824__auto____38612;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__38613,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__38614){
var f = cljs.core.first(arglist__38614);
var maps = cljs.core.rest(arglist__38614);
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
var ret__38619 = cljs.core.ObjMap.EMPTY;
var keys__38620 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__38620)
{var key__38621 = cljs.core.first.call(null,keys__38620);
var entry__38622 = cljs.core._lookup.call(null,map,key__38621,"\uFDD0'cljs.core/not-found");
{
var G__38623 = ((cljs.core.not_EQ_.call(null,entry__38622,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__38619,key__38621,entry__38622):ret__38619);
var G__38624 = cljs.core.next.call(null,keys__38620);
ret__38619 = G__38623;
keys__38620 = G__38624;
continue;
}
} else
{return ret__38619;
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
var this__38628 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__38628.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__38629 = this;
var h__2203__auto____38630 = this__38629.__hash;
if(!((h__2203__auto____38630 == null)))
{return h__2203__auto____38630;
} else
{var h__2203__auto____38631 = cljs.core.hash_iset.call(null,coll);
this__38629.__hash = h__2203__auto____38631;
return h__2203__auto____38631;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__38632 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__38633 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__38633.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__38654 = null;
var G__38654__2 = (function (this_sym38634,k){
var this__38636 = this;
var this_sym38634__38637 = this;
var coll__38638 = this_sym38634__38637;
return coll__38638.cljs$core$ILookup$_lookup$arity$2(coll__38638,k);
});
var G__38654__3 = (function (this_sym38635,k,not_found){
var this__38636 = this;
var this_sym38635__38639 = this;
var coll__38640 = this_sym38635__38639;
return coll__38640.cljs$core$ILookup$_lookup$arity$3(coll__38640,k,not_found);
});
G__38654 = function(this_sym38635,k,not_found){
switch(arguments.length){
case 2:
return G__38654__2.call(this,this_sym38635,k);
case 3:
return G__38654__3.call(this,this_sym38635,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__38654;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym38626,args38627){
var this__38641 = this;
return this_sym38626.call.apply(this_sym38626,[this_sym38626].concat(args38627.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__38642 = this;
return (new cljs.core.PersistentHashSet(this__38642.meta,cljs.core.assoc.call(null,this__38642.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__38643 = this;
var this__38644 = this;
return cljs.core.pr_str.call(null,this__38644);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__38645 = this;
return cljs.core.keys.call(null,this__38645.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__38646 = this;
return (new cljs.core.PersistentHashSet(this__38646.meta,cljs.core.dissoc.call(null,this__38646.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__38647 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__38648 = this;
var and__3822__auto____38649 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____38649)
{var and__3822__auto____38650 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____38650)
{return cljs.core.every_QMARK_.call(null,(function (p1__38625_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__38625_SHARP_);
}),other);
} else
{return and__3822__auto____38650;
}
} else
{return and__3822__auto____38649;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__38651 = this;
return (new cljs.core.PersistentHashSet(meta,this__38651.hash_map,this__38651.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__38652 = this;
return this__38652.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__38653 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__38653.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__38655 = cljs.core.count.call(null,items);
var i__38656 = 0;
var out__38657 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__38656 < len__38655))
{{
var G__38658 = (i__38656 + 1);
var G__38659 = cljs.core.conj_BANG_.call(null,out__38657,(items[i__38656]));
i__38656 = G__38658;
out__38657 = G__38659;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__38657);
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
var G__38677 = null;
var G__38677__2 = (function (this_sym38663,k){
var this__38665 = this;
var this_sym38663__38666 = this;
var tcoll__38667 = this_sym38663__38666;
if((cljs.core._lookup.call(null,this__38665.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__38677__3 = (function (this_sym38664,k,not_found){
var this__38665 = this;
var this_sym38664__38668 = this;
var tcoll__38669 = this_sym38664__38668;
if((cljs.core._lookup.call(null,this__38665.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__38677 = function(this_sym38664,k,not_found){
switch(arguments.length){
case 2:
return G__38677__2.call(this,this_sym38664,k);
case 3:
return G__38677__3.call(this,this_sym38664,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__38677;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym38661,args38662){
var this__38670 = this;
return this_sym38661.call.apply(this_sym38661,[this_sym38661].concat(args38662.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__38671 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__38672 = this;
if((cljs.core._lookup.call(null,this__38672.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__38673 = this;
return cljs.core.count.call(null,this__38673.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__38674 = this;
this__38674.transient_map = cljs.core.dissoc_BANG_.call(null,this__38674.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__38675 = this;
this__38675.transient_map = cljs.core.assoc_BANG_.call(null,this__38675.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__38676 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__38676.transient_map),null));
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
var this__38680 = this;
var h__2203__auto____38681 = this__38680.__hash;
if(!((h__2203__auto____38681 == null)))
{return h__2203__auto____38681;
} else
{var h__2203__auto____38682 = cljs.core.hash_iset.call(null,coll);
this__38680.__hash = h__2203__auto____38682;
return h__2203__auto____38682;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__38683 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__38684 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__38684.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__38710 = null;
var G__38710__2 = (function (this_sym38685,k){
var this__38687 = this;
var this_sym38685__38688 = this;
var coll__38689 = this_sym38685__38688;
return coll__38689.cljs$core$ILookup$_lookup$arity$2(coll__38689,k);
});
var G__38710__3 = (function (this_sym38686,k,not_found){
var this__38687 = this;
var this_sym38686__38690 = this;
var coll__38691 = this_sym38686__38690;
return coll__38691.cljs$core$ILookup$_lookup$arity$3(coll__38691,k,not_found);
});
G__38710 = function(this_sym38686,k,not_found){
switch(arguments.length){
case 2:
return G__38710__2.call(this,this_sym38686,k);
case 3:
return G__38710__3.call(this,this_sym38686,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__38710;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym38678,args38679){
var this__38692 = this;
return this_sym38678.call.apply(this_sym38678,[this_sym38678].concat(args38679.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__38693 = this;
return (new cljs.core.PersistentTreeSet(this__38693.meta,cljs.core.assoc.call(null,this__38693.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__38694 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__38694.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__38695 = this;
var this__38696 = this;
return cljs.core.pr_str.call(null,this__38696);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__38697 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__38697.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__38698 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__38698.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__38699 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__38700 = this;
return cljs.core._comparator.call(null,this__38700.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__38701 = this;
return cljs.core.keys.call(null,this__38701.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__38702 = this;
return (new cljs.core.PersistentTreeSet(this__38702.meta,cljs.core.dissoc.call(null,this__38702.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__38703 = this;
return cljs.core.count.call(null,this__38703.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__38704 = this;
var and__3822__auto____38705 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____38705)
{var and__3822__auto____38706 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____38706)
{return cljs.core.every_QMARK_.call(null,(function (p1__38660_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__38660_SHARP_);
}),other);
} else
{return and__3822__auto____38706;
}
} else
{return and__3822__auto____38705;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__38707 = this;
return (new cljs.core.PersistentTreeSet(meta,this__38707.tree_map,this__38707.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__38708 = this;
return this__38708.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__38709 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__38709.meta);
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
var G__38715__delegate = function (keys){
var in__38713 = cljs.core.seq.call(null,keys);
var out__38714 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__38713))
{{
var G__38716 = cljs.core.next.call(null,in__38713);
var G__38717 = cljs.core.conj_BANG_.call(null,out__38714,cljs.core.first.call(null,in__38713));
in__38713 = G__38716;
out__38714 = G__38717;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__38714);
}
break;
}
};
var G__38715 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__38715__delegate.call(this, keys);
};
G__38715.cljs$lang$maxFixedArity = 0;
G__38715.cljs$lang$applyTo = (function (arglist__38718){
var keys = cljs.core.seq(arglist__38718);;
return G__38715__delegate(keys);
});
G__38715.cljs$lang$arity$variadic = G__38715__delegate;
return G__38715;
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
sorted_set.cljs$lang$applyTo = (function (arglist__38719){
var keys = cljs.core.seq(arglist__38719);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__38721){
var comparator = cljs.core.first(arglist__38721);
var keys = cljs.core.rest(arglist__38721);
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
{var n__38727 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____38728 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____38728))
{var e__38729 = temp__3971__auto____38728;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__38729));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__38727,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__38720_SHARP_){
var temp__3971__auto____38730 = cljs.core.find.call(null,smap,p1__38720_SHARP_);
if(cljs.core.truth_(temp__3971__auto____38730))
{var e__38731 = temp__3971__auto____38730;
return cljs.core.second.call(null,e__38731);
} else
{return p1__38720_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__38761 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__38754,seen){
while(true){
var vec__38755__38756 = p__38754;
var f__38757 = cljs.core.nth.call(null,vec__38755__38756,0,null);
var xs__38758 = vec__38755__38756;
var temp__3974__auto____38759 = cljs.core.seq.call(null,xs__38758);
if(temp__3974__auto____38759)
{var s__38760 = temp__3974__auto____38759;
if(cljs.core.contains_QMARK_.call(null,seen,f__38757))
{{
var G__38762 = cljs.core.rest.call(null,s__38760);
var G__38763 = seen;
p__38754 = G__38762;
seen = G__38763;
continue;
}
} else
{return cljs.core.cons.call(null,f__38757,step.call(null,cljs.core.rest.call(null,s__38760),cljs.core.conj.call(null,seen,f__38757)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__38761.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__38766 = cljs.core.PersistentVector.EMPTY;
var s__38767 = s;
while(true){
if(cljs.core.next.call(null,s__38767))
{{
var G__38768 = cljs.core.conj.call(null,ret__38766,cljs.core.first.call(null,s__38767));
var G__38769 = cljs.core.next.call(null,s__38767);
ret__38766 = G__38768;
s__38767 = G__38769;
continue;
}
} else
{return cljs.core.seq.call(null,ret__38766);
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
{if((function (){var or__3824__auto____38772 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____38772)
{return or__3824__auto____38772;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__38773 = x.lastIndexOf("/");
if((i__38773 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__38773 + 1));
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
if((function (){var or__3824__auto____38776 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____38776)
{return or__3824__auto____38776;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__38777 = x.lastIndexOf("/");
if((i__38777 > -1))
{return cljs.core.subs.call(null,x,2,i__38777);
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
var map__38784 = cljs.core.ObjMap.EMPTY;
var ks__38785 = cljs.core.seq.call(null,keys);
var vs__38786 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____38787 = ks__38785;
if(and__3822__auto____38787)
{return vs__38786;
} else
{return and__3822__auto____38787;
}
})())
{{
var G__38788 = cljs.core.assoc.call(null,map__38784,cljs.core.first.call(null,ks__38785),cljs.core.first.call(null,vs__38786));
var G__38789 = cljs.core.next.call(null,ks__38785);
var G__38790 = cljs.core.next.call(null,vs__38786);
map__38784 = G__38788;
ks__38785 = G__38789;
vs__38786 = G__38790;
continue;
}
} else
{return map__38784;
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
var G__38793__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__38778_SHARP_,p2__38779_SHARP_){
return max_key.call(null,k,p1__38778_SHARP_,p2__38779_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__38793 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__38793__delegate.call(this, k, x, y, more);
};
G__38793.cljs$lang$maxFixedArity = 3;
G__38793.cljs$lang$applyTo = (function (arglist__38794){
var k = cljs.core.first(arglist__38794);
var x = cljs.core.first(cljs.core.next(arglist__38794));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__38794)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__38794)));
return G__38793__delegate(k, x, y, more);
});
G__38793.cljs$lang$arity$variadic = G__38793__delegate;
return G__38793;
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
var G__38795__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__38791_SHARP_,p2__38792_SHARP_){
return min_key.call(null,k,p1__38791_SHARP_,p2__38792_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__38795 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__38795__delegate.call(this, k, x, y, more);
};
G__38795.cljs$lang$maxFixedArity = 3;
G__38795.cljs$lang$applyTo = (function (arglist__38796){
var k = cljs.core.first(arglist__38796);
var x = cljs.core.first(cljs.core.next(arglist__38796));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__38796)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__38796)));
return G__38795__delegate(k, x, y, more);
});
G__38795.cljs$lang$arity$variadic = G__38795__delegate;
return G__38795;
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
var temp__3974__auto____38799 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____38799)
{var s__38800 = temp__3974__auto____38799;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__38800),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__38800)));
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
var temp__3974__auto____38803 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____38803)
{var s__38804 = temp__3974__auto____38803;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__38804))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__38804),take_while.call(null,pred,cljs.core.rest.call(null,s__38804)));
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
var comp__38806 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__38806.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__38818 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____38819 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____38819))
{var vec__38820__38821 = temp__3974__auto____38819;
var e__38822 = cljs.core.nth.call(null,vec__38820__38821,0,null);
var s__38823 = vec__38820__38821;
if(cljs.core.truth_(include__38818.call(null,e__38822)))
{return s__38823;
} else
{return cljs.core.next.call(null,s__38823);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__38818,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____38824 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____38824))
{var vec__38825__38826 = temp__3974__auto____38824;
var e__38827 = cljs.core.nth.call(null,vec__38825__38826,0,null);
var s__38828 = vec__38825__38826;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__38827))?s__38828:cljs.core.next.call(null,s__38828)));
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
var include__38840 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____38841 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____38841))
{var vec__38842__38843 = temp__3974__auto____38841;
var e__38844 = cljs.core.nth.call(null,vec__38842__38843,0,null);
var s__38845 = vec__38842__38843;
if(cljs.core.truth_(include__38840.call(null,e__38844)))
{return s__38845;
} else
{return cljs.core.next.call(null,s__38845);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__38840,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____38846 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____38846))
{var vec__38847__38848 = temp__3974__auto____38846;
var e__38849 = cljs.core.nth.call(null,vec__38847__38848,0,null);
var s__38850 = vec__38847__38848;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__38849))?s__38850:cljs.core.next.call(null,s__38850)));
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
var this__38851 = this;
var h__2203__auto____38852 = this__38851.__hash;
if(!((h__2203__auto____38852 == null)))
{return h__2203__auto____38852;
} else
{var h__2203__auto____38853 = cljs.core.hash_coll.call(null,rng);
this__38851.__hash = h__2203__auto____38853;
return h__2203__auto____38853;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__38854 = this;
if((this__38854.step > 0))
{if(((this__38854.start + this__38854.step) < this__38854.end))
{return (new cljs.core.Range(this__38854.meta,(this__38854.start + this__38854.step),this__38854.end,this__38854.step,null));
} else
{return null;
}
} else
{if(((this__38854.start + this__38854.step) > this__38854.end))
{return (new cljs.core.Range(this__38854.meta,(this__38854.start + this__38854.step),this__38854.end,this__38854.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__38855 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__38856 = this;
var this__38857 = this;
return cljs.core.pr_str.call(null,this__38857);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__38858 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__38859 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__38860 = this;
if((this__38860.step > 0))
{if((this__38860.start < this__38860.end))
{return rng;
} else
{return null;
}
} else
{if((this__38860.start > this__38860.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__38861 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__38861.end - this__38861.start) / this__38861.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__38862 = this;
return this__38862.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__38863 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__38863.meta,(this__38863.start + this__38863.step),this__38863.end,this__38863.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__38864 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__38865 = this;
return (new cljs.core.Range(meta,this__38865.start,this__38865.end,this__38865.step,this__38865.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__38866 = this;
return this__38866.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__38867 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__38867.start + (n * this__38867.step));
} else
{if((function (){var and__3822__auto____38868 = (this__38867.start > this__38867.end);
if(and__3822__auto____38868)
{return (this__38867.step === 0);
} else
{return and__3822__auto____38868;
}
})())
{return this__38867.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__38869 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__38869.start + (n * this__38869.step));
} else
{if((function (){var and__3822__auto____38870 = (this__38869.start > this__38869.end);
if(and__3822__auto____38870)
{return (this__38869.step === 0);
} else
{return and__3822__auto____38870;
}
})())
{return this__38869.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__38871 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__38871.meta);
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
var temp__3974__auto____38874 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____38874)
{var s__38875 = temp__3974__auto____38874;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__38875),take_nth.call(null,n,cljs.core.drop.call(null,n,s__38875)));
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
var temp__3974__auto____38882 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____38882)
{var s__38883 = temp__3974__auto____38882;
var fst__38884 = cljs.core.first.call(null,s__38883);
var fv__38885 = f.call(null,fst__38884);
var run__38886 = cljs.core.cons.call(null,fst__38884,cljs.core.take_while.call(null,(function (p1__38876_SHARP_){
return cljs.core._EQ_.call(null,fv__38885,f.call(null,p1__38876_SHARP_));
}),cljs.core.next.call(null,s__38883)));
return cljs.core.cons.call(null,run__38886,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__38886),s__38883))));
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
var temp__3971__auto____38901 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____38901)
{var s__38902 = temp__3971__auto____38901;
return reductions.call(null,f,cljs.core.first.call(null,s__38902),cljs.core.rest.call(null,s__38902));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____38903 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____38903)
{var s__38904 = temp__3974__auto____38903;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__38904)),cljs.core.rest.call(null,s__38904));
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
var G__38907 = null;
var G__38907__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__38907__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__38907__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__38907__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__38907__4 = (function() { 
var G__38908__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__38908 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__38908__delegate.call(this, x, y, z, args);
};
G__38908.cljs$lang$maxFixedArity = 3;
G__38908.cljs$lang$applyTo = (function (arglist__38909){
var x = cljs.core.first(arglist__38909);
var y = cljs.core.first(cljs.core.next(arglist__38909));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__38909)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__38909)));
return G__38908__delegate(x, y, z, args);
});
G__38908.cljs$lang$arity$variadic = G__38908__delegate;
return G__38908;
})()
;
G__38907 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__38907__0.call(this);
case 1:
return G__38907__1.call(this,x);
case 2:
return G__38907__2.call(this,x,y);
case 3:
return G__38907__3.call(this,x,y,z);
default:
return G__38907__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__38907.cljs$lang$maxFixedArity = 3;
G__38907.cljs$lang$applyTo = G__38907__4.cljs$lang$applyTo;
return G__38907;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__38910 = null;
var G__38910__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__38910__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__38910__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__38910__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__38910__4 = (function() { 
var G__38911__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__38911 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__38911__delegate.call(this, x, y, z, args);
};
G__38911.cljs$lang$maxFixedArity = 3;
G__38911.cljs$lang$applyTo = (function (arglist__38912){
var x = cljs.core.first(arglist__38912);
var y = cljs.core.first(cljs.core.next(arglist__38912));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__38912)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__38912)));
return G__38911__delegate(x, y, z, args);
});
G__38911.cljs$lang$arity$variadic = G__38911__delegate;
return G__38911;
})()
;
G__38910 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__38910__0.call(this);
case 1:
return G__38910__1.call(this,x);
case 2:
return G__38910__2.call(this,x,y);
case 3:
return G__38910__3.call(this,x,y,z);
default:
return G__38910__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__38910.cljs$lang$maxFixedArity = 3;
G__38910.cljs$lang$applyTo = G__38910__4.cljs$lang$applyTo;
return G__38910;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__38913 = null;
var G__38913__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__38913__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__38913__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__38913__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__38913__4 = (function() { 
var G__38914__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__38914 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__38914__delegate.call(this, x, y, z, args);
};
G__38914.cljs$lang$maxFixedArity = 3;
G__38914.cljs$lang$applyTo = (function (arglist__38915){
var x = cljs.core.first(arglist__38915);
var y = cljs.core.first(cljs.core.next(arglist__38915));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__38915)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__38915)));
return G__38914__delegate(x, y, z, args);
});
G__38914.cljs$lang$arity$variadic = G__38914__delegate;
return G__38914;
})()
;
G__38913 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__38913__0.call(this);
case 1:
return G__38913__1.call(this,x);
case 2:
return G__38913__2.call(this,x,y);
case 3:
return G__38913__3.call(this,x,y,z);
default:
return G__38913__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__38913.cljs$lang$maxFixedArity = 3;
G__38913.cljs$lang$applyTo = G__38913__4.cljs$lang$applyTo;
return G__38913;
})()
});
var juxt__4 = (function() { 
var G__38916__delegate = function (f,g,h,fs){
var fs__38906 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__38917 = null;
var G__38917__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__38887_SHARP_,p2__38888_SHARP_){
return cljs.core.conj.call(null,p1__38887_SHARP_,p2__38888_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__38906);
});
var G__38917__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__38889_SHARP_,p2__38890_SHARP_){
return cljs.core.conj.call(null,p1__38889_SHARP_,p2__38890_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__38906);
});
var G__38917__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__38891_SHARP_,p2__38892_SHARP_){
return cljs.core.conj.call(null,p1__38891_SHARP_,p2__38892_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__38906);
});
var G__38917__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__38893_SHARP_,p2__38894_SHARP_){
return cljs.core.conj.call(null,p1__38893_SHARP_,p2__38894_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__38906);
});
var G__38917__4 = (function() { 
var G__38918__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__38895_SHARP_,p2__38896_SHARP_){
return cljs.core.conj.call(null,p1__38895_SHARP_,cljs.core.apply.call(null,p2__38896_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__38906);
};
var G__38918 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__38918__delegate.call(this, x, y, z, args);
};
G__38918.cljs$lang$maxFixedArity = 3;
G__38918.cljs$lang$applyTo = (function (arglist__38919){
var x = cljs.core.first(arglist__38919);
var y = cljs.core.first(cljs.core.next(arglist__38919));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__38919)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__38919)));
return G__38918__delegate(x, y, z, args);
});
G__38918.cljs$lang$arity$variadic = G__38918__delegate;
return G__38918;
})()
;
G__38917 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__38917__0.call(this);
case 1:
return G__38917__1.call(this,x);
case 2:
return G__38917__2.call(this,x,y);
case 3:
return G__38917__3.call(this,x,y,z);
default:
return G__38917__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__38917.cljs$lang$maxFixedArity = 3;
G__38917.cljs$lang$applyTo = G__38917__4.cljs$lang$applyTo;
return G__38917;
})()
};
var G__38916 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__38916__delegate.call(this, f, g, h, fs);
};
G__38916.cljs$lang$maxFixedArity = 3;
G__38916.cljs$lang$applyTo = (function (arglist__38920){
var f = cljs.core.first(arglist__38920);
var g = cljs.core.first(cljs.core.next(arglist__38920));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__38920)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__38920)));
return G__38916__delegate(f, g, h, fs);
});
G__38916.cljs$lang$arity$variadic = G__38916__delegate;
return G__38916;
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
var G__38923 = cljs.core.next.call(null,coll);
coll = G__38923;
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
if(cljs.core.truth_((function (){var and__3822__auto____38922 = cljs.core.seq.call(null,coll);
if(and__3822__auto____38922)
{return (n > 0);
} else
{return and__3822__auto____38922;
}
})()))
{{
var G__38924 = (n - 1);
var G__38925 = cljs.core.next.call(null,coll);
n = G__38924;
coll = G__38925;
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
var matches__38927 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__38927),s))
{if((cljs.core.count.call(null,matches__38927) === 1))
{return cljs.core.first.call(null,matches__38927);
} else
{return cljs.core.vec.call(null,matches__38927);
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
var matches__38929 = re.exec(s);
if((matches__38929 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__38929) === 1))
{return cljs.core.first.call(null,matches__38929);
} else
{return cljs.core.vec.call(null,matches__38929);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__38934 = cljs.core.re_find.call(null,re,s);
var match_idx__38935 = s.search(re);
var match_str__38936 = ((cljs.core.coll_QMARK_.call(null,match_data__38934))?cljs.core.first.call(null,match_data__38934):match_data__38934);
var post_match__38937 = cljs.core.subs.call(null,s,(match_idx__38935 + cljs.core.count.call(null,match_str__38936)));
if(cljs.core.truth_(match_data__38934))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__38934,re_seq.call(null,re,post_match__38937));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__38944__38945 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___38946 = cljs.core.nth.call(null,vec__38944__38945,0,null);
var flags__38947 = cljs.core.nth.call(null,vec__38944__38945,1,null);
var pattern__38948 = cljs.core.nth.call(null,vec__38944__38945,2,null);
return (new RegExp(pattern__38948,flags__38947));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__38938_SHARP_){
return print_one.call(null,p1__38938_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__38952__38953 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__38952__38953)
{var o__38954 = cljs.core.first.call(null,G__38952__38953);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__38954,writer,opts);
{
var G__38955 = cljs.core.next.call(null,G__38952__38953);
G__38952__38953 = G__38955;
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
var G__38959__38960 = cljs.core.seq.call(null,ss);
while(true){
if(G__38959__38960)
{var s__38961 = cljs.core.first.call(null,G__38959__38960);
cljs.core._write.call(null,writer,s__38961);
{
var G__38962 = cljs.core.next.call(null,G__38959__38960);
G__38959__38960 = G__38962;
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
write_all.cljs$lang$applyTo = (function (arglist__38963){
var writer = cljs.core.first(arglist__38963);
var ss = cljs.core.rest(arglist__38963);
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
var this__38964 = this;
return this__38964.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__38965 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____38975 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____38975))
{var and__3822__auto____38979 = (function (){var G__38976__38977 = obj;
if(G__38976__38977)
{if((function (){var or__3824__auto____38978 = (G__38976__38977.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____38978)
{return or__3824__auto____38978;
} else
{return G__38976__38977.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__38976__38977.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__38976__38977);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__38976__38977);
}
})();
if(cljs.core.truth_(and__3822__auto____38979))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____38979;
}
} else
{return and__3822__auto____38975;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____38980 = !((obj == null));
if(and__3822__auto____38980)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____38980;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__38981__38982 = obj;
if(G__38981__38982)
{if((function (){var or__3824__auto____38983 = (G__38981__38982.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____38983)
{return or__3824__auto____38983;
} else
{return G__38981__38982.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__38981__38982.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__38981__38982);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__38981__38982);
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
{if(cljs.core.truth_((function (){var and__3822__auto____38996 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____38996))
{var and__3822__auto____39000 = (function (){var G__38997__38998 = obj;
if(G__38997__38998)
{if((function (){var or__3824__auto____38999 = (G__38997__38998.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____38999)
{return or__3824__auto____38999;
} else
{return G__38997__38998.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__38997__38998.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__38997__38998);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__38997__38998);
}
})();
if(cljs.core.truth_(and__3822__auto____39000))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____39000;
}
} else
{return and__3822__auto____38996;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____39001 = !((obj == null));
if(and__3822__auto____39001)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____39001;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__39002__39003 = obj;
if(G__39002__39003)
{if((function (){var or__3824__auto____39004 = (G__39002__39003.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____39004)
{return or__3824__auto____39004;
} else
{return G__39002__39003.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__39002__39003.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__39002__39003);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__39002__39003);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__39005__39006 = obj;
if(G__39005__39006)
{if((function (){var or__3824__auto____39007 = (G__39005__39006.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____39007)
{return or__3824__auto____39007;
} else
{return G__39005__39006.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__39005__39006.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__39005__39006);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__39005__39006);
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
var G__39011__39012 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__39011__39012)
{var obj__39013 = cljs.core.first.call(null,G__39011__39012);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__39013,writer,opts);
{
var G__39014 = cljs.core.next.call(null,G__39011__39012);
G__39011__39012 = G__39014;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__39017 = (new goog.string.StringBuffer());
var writer__39018 = (new cljs.core.StringBufferWriter(sb__39017));
cljs.core.pr_seq_writer.call(null,objs,writer__39018,opts);
cljs.core._flush.call(null,writer__39018);
return sb__39017;
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
{var sb__39020 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__39020.append("\n");
return [cljs.core.str(sb__39020)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__39021){
var objs = cljs.core.seq(arglist__39021);;
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
prn_str.cljs$lang$applyTo = (function (arglist__39022){
var objs = cljs.core.seq(arglist__39022);;
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
pr.cljs$lang$applyTo = (function (arglist__39023){
var objs = cljs.core.seq(arglist__39023);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__39024){
var objs = cljs.core.seq(arglist__39024);;
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
print_str.cljs$lang$applyTo = (function (arglist__39025){
var objs = cljs.core.seq(arglist__39025);;
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
println.cljs$lang$applyTo = (function (arglist__39026){
var objs = cljs.core.seq(arglist__39026);;
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
println_str.cljs$lang$applyTo = (function (arglist__39027){
var objs = cljs.core.seq(arglist__39027);;
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
prn.cljs$lang$applyTo = (function (arglist__39028){
var objs = cljs.core.seq(arglist__39028);;
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
printf.cljs$lang$applyTo = (function (arglist__39029){
var fmt = cljs.core.first(arglist__39029);
var args = cljs.core.rest(arglist__39029);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__39030 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__39030,"{",", ","}",opts,coll);
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
var pr_pair__39031 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__39031,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__39032 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__39032,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____39033 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____39033))
{var nspc__39034 = temp__3974__auto____39033;
return [cljs.core.str(nspc__39034),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____39035 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____39035))
{var nspc__39036 = temp__3974__auto____39035;
return [cljs.core.str(nspc__39036),cljs.core.str("/")].join('');
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
var pr_pair__39037 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__39037,"{",", ","}",opts,coll);
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
var normalize__39039 = (function (n,len){
var ns__39038 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__39038) < len))
{{
var G__39041 = [cljs.core.str("0"),cljs.core.str(ns__39038)].join('');
ns__39038 = G__39041;
continue;
}
} else
{return ns__39038;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__39039.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__39039.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__39039.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__39039.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__39039.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__39039.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__39040 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__39040,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__39042 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__39042,"{",", ","}",opts,coll);
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
var pr_pair__39043 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__39043,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__39044 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__39044,"{",", ","}",opts,coll);
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
var temp__3974__auto____39045 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____39045))
{var nspc__39046 = temp__3974__auto____39045;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__39046)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____39047 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____39047))
{var nspc__39048 = temp__3974__auto____39047;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__39048)].join(''),"/");
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
var pr_pair__39049 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__39049,"{",", ","}",opts,coll);
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
var normalize__39051 = (function (n,len){
var ns__39050 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__39050) < len))
{{
var G__39053 = [cljs.core.str("0"),cljs.core.str(ns__39050)].join('');
ns__39050 = G__39053;
continue;
}
} else
{return ns__39050;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__39051.call(null,(d.getUTCMonth() + 1),2),"-",normalize__39051.call(null,d.getUTCDate(),2),"T",normalize__39051.call(null,d.getUTCHours(),2),":",normalize__39051.call(null,d.getUTCMinutes(),2),":",normalize__39051.call(null,d.getUTCSeconds(),2),".",normalize__39051.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__39052 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__39052,"{",", ","}",opts,coll);
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
var this__39054 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__39055 = this;
var G__39056__39057 = cljs.core.seq.call(null,this__39055.watches);
while(true){
if(G__39056__39057)
{var vec__39058__39059 = cljs.core.first.call(null,G__39056__39057);
var key__39060 = cljs.core.nth.call(null,vec__39058__39059,0,null);
var f__39061 = cljs.core.nth.call(null,vec__39058__39059,1,null);
f__39061.call(null,key__39060,this$,oldval,newval);
{
var G__39069 = cljs.core.next.call(null,G__39056__39057);
G__39056__39057 = G__39069;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__39062 = this;
return this$.watches = cljs.core.assoc.call(null,this__39062.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__39063 = this;
return this$.watches = cljs.core.dissoc.call(null,this__39063.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__39064 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__39064.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__39065 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__39065.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__39066 = this;
return this__39066.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__39067 = this;
return this__39067.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__39068 = this;
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
var G__39081__delegate = function (x,p__39070){
var map__39076__39077 = p__39070;
var map__39076__39078 = ((cljs.core.seq_QMARK_.call(null,map__39076__39077))?cljs.core.apply.call(null,cljs.core.hash_map,map__39076__39077):map__39076__39077);
var validator__39079 = cljs.core._lookup.call(null,map__39076__39078,"\uFDD0'validator",null);
var meta__39080 = cljs.core._lookup.call(null,map__39076__39078,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__39080,validator__39079,null));
};
var G__39081 = function (x,var_args){
var p__39070 = null;
if (goog.isDef(var_args)) {
  p__39070 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__39081__delegate.call(this, x, p__39070);
};
G__39081.cljs$lang$maxFixedArity = 1;
G__39081.cljs$lang$applyTo = (function (arglist__39082){
var x = cljs.core.first(arglist__39082);
var p__39070 = cljs.core.rest(arglist__39082);
return G__39081__delegate(x, p__39070);
});
G__39081.cljs$lang$arity$variadic = G__39081__delegate;
return G__39081;
})()
;
atom = function(x,var_args){
var p__39070 = var_args;
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
var temp__3974__auto____39086 = a.validator;
if(cljs.core.truth_(temp__3974__auto____39086))
{var validate__39087 = temp__3974__auto____39086;
if(cljs.core.truth_(validate__39087.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__39088 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__39088,new_value);
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
var G__39089__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__39089 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__39089__delegate.call(this, a, f, x, y, z, more);
};
G__39089.cljs$lang$maxFixedArity = 5;
G__39089.cljs$lang$applyTo = (function (arglist__39090){
var a = cljs.core.first(arglist__39090);
var f = cljs.core.first(cljs.core.next(arglist__39090));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__39090)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__39090))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__39090)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__39090)))));
return G__39089__delegate(a, f, x, y, z, more);
});
G__39089.cljs$lang$arity$variadic = G__39089__delegate;
return G__39089;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__39091){
var iref = cljs.core.first(arglist__39091);
var f = cljs.core.first(cljs.core.next(arglist__39091));
var args = cljs.core.rest(cljs.core.next(arglist__39091));
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
var this__39092 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__39092.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__39093 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__39093.state,(function (p__39094){
var map__39095__39096 = p__39094;
var map__39095__39097 = ((cljs.core.seq_QMARK_.call(null,map__39095__39096))?cljs.core.apply.call(null,cljs.core.hash_map,map__39095__39096):map__39095__39096);
var curr_state__39098 = map__39095__39097;
var done__39099 = cljs.core._lookup.call(null,map__39095__39097,"\uFDD0'done",null);
if(cljs.core.truth_(done__39099))
{return curr_state__39098;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__39093.f.call(null)});
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
var map__39120__39121 = options;
var map__39120__39122 = ((cljs.core.seq_QMARK_.call(null,map__39120__39121))?cljs.core.apply.call(null,cljs.core.hash_map,map__39120__39121):map__39120__39121);
var keywordize_keys__39123 = cljs.core._lookup.call(null,map__39120__39122,"\uFDD0'keywordize-keys",null);
var keyfn__39124 = (cljs.core.truth_(keywordize_keys__39123)?cljs.core.keyword:cljs.core.str);
var f__39139 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2484__auto____39138 = (function iter__39132(s__39133){
return (new cljs.core.LazySeq(null,false,(function (){
var s__39133__39136 = s__39133;
while(true){
if(cljs.core.seq.call(null,s__39133__39136))
{var k__39137 = cljs.core.first.call(null,s__39133__39136);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__39124.call(null,k__39137),thisfn.call(null,(x[k__39137]))], true),iter__39132.call(null,cljs.core.rest.call(null,s__39133__39136)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2484__auto____39138.call(null,cljs.core.js_keys.call(null,x));
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
return f__39139.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__39140){
var x = cljs.core.first(arglist__39140);
var options = cljs.core.rest(arglist__39140);
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
var mem__39145 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__39149__delegate = function (args){
var temp__3971__auto____39146 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__39145),args,null);
if(cljs.core.truth_(temp__3971__auto____39146))
{var v__39147 = temp__3971__auto____39146;
return v__39147;
} else
{var ret__39148 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__39145,cljs.core.assoc,args,ret__39148);
return ret__39148;
}
};
var G__39149 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__39149__delegate.call(this, args);
};
G__39149.cljs$lang$maxFixedArity = 0;
G__39149.cljs$lang$applyTo = (function (arglist__39150){
var args = cljs.core.seq(arglist__39150);;
return G__39149__delegate(args);
});
G__39149.cljs$lang$arity$variadic = G__39149__delegate;
return G__39149;
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
var ret__39152 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__39152))
{{
var G__39153 = ret__39152;
f = G__39153;
continue;
}
} else
{return ret__39152;
}
break;
}
});
var trampoline__2 = (function() { 
var G__39154__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__39154 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__39154__delegate.call(this, f, args);
};
G__39154.cljs$lang$maxFixedArity = 1;
G__39154.cljs$lang$applyTo = (function (arglist__39155){
var f = cljs.core.first(arglist__39155);
var args = cljs.core.rest(arglist__39155);
return G__39154__delegate(f, args);
});
G__39154.cljs$lang$arity$variadic = G__39154__delegate;
return G__39154;
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
var k__39157 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__39157,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__39157,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____39166 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____39166)
{return or__3824__auto____39166;
} else
{var or__3824__auto____39167 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____39167)
{return or__3824__auto____39167;
} else
{var and__3822__auto____39168 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____39168)
{var and__3822__auto____39169 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____39169)
{var and__3822__auto____39170 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____39170)
{var ret__39171 = true;
var i__39172 = 0;
while(true){
if((function (){var or__3824__auto____39173 = cljs.core.not.call(null,ret__39171);
if(or__3824__auto____39173)
{return or__3824__auto____39173;
} else
{return (i__39172 === cljs.core.count.call(null,parent));
}
})())
{return ret__39171;
} else
{{
var G__39174 = isa_QMARK_.call(null,h,child.call(null,i__39172),parent.call(null,i__39172));
var G__39175 = (i__39172 + 1);
ret__39171 = G__39174;
i__39172 = G__39175;
continue;
}
}
break;
}
} else
{return and__3822__auto____39170;
}
} else
{return and__3822__auto____39169;
}
} else
{return and__3822__auto____39168;
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
var tp__39184 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__39185 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__39186 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__39187 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____39188 = ((cljs.core.contains_QMARK_.call(null,tp__39184.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__39186.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__39186.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__39184,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__39187.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__39185,parent,ta__39186),"\uFDD0'descendants":tf__39187.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__39186,tag,td__39185)});
})());
if(cljs.core.truth_(or__3824__auto____39188))
{return or__3824__auto____39188;
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
var parentMap__39193 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__39194 = (cljs.core.truth_(parentMap__39193.call(null,tag))?cljs.core.disj.call(null,parentMap__39193.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__39195 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__39194))?cljs.core.assoc.call(null,parentMap__39193,tag,childsParents__39194):cljs.core.dissoc.call(null,parentMap__39193,tag));
var deriv_seq__39196 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__39176_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__39176_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__39176_SHARP_),cljs.core.second.call(null,p1__39176_SHARP_)));
}),cljs.core.seq.call(null,newParents__39195)));
if(cljs.core.contains_QMARK_.call(null,parentMap__39193.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__39177_SHARP_,p2__39178_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__39177_SHARP_,p2__39178_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__39196));
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
var xprefs__39204 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____39206 = (cljs.core.truth_((function (){var and__3822__auto____39205 = xprefs__39204;
if(cljs.core.truth_(and__3822__auto____39205))
{return xprefs__39204.call(null,y);
} else
{return and__3822__auto____39205;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____39206))
{return or__3824__auto____39206;
} else
{var or__3824__auto____39208 = (function (){var ps__39207 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__39207) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__39207),prefer_table)))
{} else
{}
{
var G__39211 = cljs.core.rest.call(null,ps__39207);
ps__39207 = G__39211;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____39208))
{return or__3824__auto____39208;
} else
{var or__3824__auto____39210 = (function (){var ps__39209 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__39209) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__39209),y,prefer_table)))
{} else
{}
{
var G__39212 = cljs.core.rest.call(null,ps__39209);
ps__39209 = G__39212;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____39210))
{return or__3824__auto____39210;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____39214 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____39214))
{return or__3824__auto____39214;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__39232 = cljs.core.reduce.call(null,(function (be,p__39224){
var vec__39225__39226 = p__39224;
var k__39227 = cljs.core.nth.call(null,vec__39225__39226,0,null);
var ___39228 = cljs.core.nth.call(null,vec__39225__39226,1,null);
var e__39229 = vec__39225__39226;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__39227))
{var be2__39231 = (cljs.core.truth_((function (){var or__3824__auto____39230 = (be == null);
if(or__3824__auto____39230)
{return or__3824__auto____39230;
} else
{return cljs.core.dominates.call(null,k__39227,cljs.core.first.call(null,be),prefer_table);
}
})())?e__39229:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__39231),k__39227,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__39227),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__39231)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__39231;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__39232))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__39232));
return cljs.core.second.call(null,best_entry__39232);
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
if((function (){var and__3822__auto____39237 = mf;
if(and__3822__auto____39237)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____39237;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2387__auto____39238 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____39239 = (cljs.core._reset[goog.typeOf(x__2387__auto____39238)]);
if(or__3824__auto____39239)
{return or__3824__auto____39239;
} else
{var or__3824__auto____39240 = (cljs.core._reset["_"]);
if(or__3824__auto____39240)
{return or__3824__auto____39240;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____39245 = mf;
if(and__3822__auto____39245)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____39245;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2387__auto____39246 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____39247 = (cljs.core._add_method[goog.typeOf(x__2387__auto____39246)]);
if(or__3824__auto____39247)
{return or__3824__auto____39247;
} else
{var or__3824__auto____39248 = (cljs.core._add_method["_"]);
if(or__3824__auto____39248)
{return or__3824__auto____39248;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____39253 = mf;
if(and__3822__auto____39253)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____39253;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2387__auto____39254 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____39255 = (cljs.core._remove_method[goog.typeOf(x__2387__auto____39254)]);
if(or__3824__auto____39255)
{return or__3824__auto____39255;
} else
{var or__3824__auto____39256 = (cljs.core._remove_method["_"]);
if(or__3824__auto____39256)
{return or__3824__auto____39256;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____39261 = mf;
if(and__3822__auto____39261)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____39261;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2387__auto____39262 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____39263 = (cljs.core._prefer_method[goog.typeOf(x__2387__auto____39262)]);
if(or__3824__auto____39263)
{return or__3824__auto____39263;
} else
{var or__3824__auto____39264 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____39264)
{return or__3824__auto____39264;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____39269 = mf;
if(and__3822__auto____39269)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____39269;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2387__auto____39270 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____39271 = (cljs.core._get_method[goog.typeOf(x__2387__auto____39270)]);
if(or__3824__auto____39271)
{return or__3824__auto____39271;
} else
{var or__3824__auto____39272 = (cljs.core._get_method["_"]);
if(or__3824__auto____39272)
{return or__3824__auto____39272;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____39277 = mf;
if(and__3822__auto____39277)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____39277;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2387__auto____39278 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____39279 = (cljs.core._methods[goog.typeOf(x__2387__auto____39278)]);
if(or__3824__auto____39279)
{return or__3824__auto____39279;
} else
{var or__3824__auto____39280 = (cljs.core._methods["_"]);
if(or__3824__auto____39280)
{return or__3824__auto____39280;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____39285 = mf;
if(and__3822__auto____39285)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____39285;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2387__auto____39286 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____39287 = (cljs.core._prefers[goog.typeOf(x__2387__auto____39286)]);
if(or__3824__auto____39287)
{return or__3824__auto____39287;
} else
{var or__3824__auto____39288 = (cljs.core._prefers["_"]);
if(or__3824__auto____39288)
{return or__3824__auto____39288;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____39293 = mf;
if(and__3822__auto____39293)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____39293;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2387__auto____39294 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____39295 = (cljs.core._dispatch[goog.typeOf(x__2387__auto____39294)]);
if(or__3824__auto____39295)
{return or__3824__auto____39295;
} else
{var or__3824__auto____39296 = (cljs.core._dispatch["_"]);
if(or__3824__auto____39296)
{return or__3824__auto____39296;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__39299 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__39300 = cljs.core._get_method.call(null,mf,dispatch_val__39299);
if(cljs.core.truth_(target_fn__39300))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__39299)].join('')));
}
return cljs.core.apply.call(null,target_fn__39300,args);
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
var this__39301 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__39302 = this;
cljs.core.swap_BANG_.call(null,this__39302.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__39302.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__39302.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__39302.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__39303 = this;
cljs.core.swap_BANG_.call(null,this__39303.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__39303.method_cache,this__39303.method_table,this__39303.cached_hierarchy,this__39303.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__39304 = this;
cljs.core.swap_BANG_.call(null,this__39304.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__39304.method_cache,this__39304.method_table,this__39304.cached_hierarchy,this__39304.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__39305 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__39305.cached_hierarchy),cljs.core.deref.call(null,this__39305.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__39305.method_cache,this__39305.method_table,this__39305.cached_hierarchy,this__39305.hierarchy);
}
var temp__3971__auto____39306 = cljs.core.deref.call(null,this__39305.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____39306))
{var target_fn__39307 = temp__3971__auto____39306;
return target_fn__39307;
} else
{var temp__3971__auto____39308 = cljs.core.find_and_cache_best_method.call(null,this__39305.name,dispatch_val,this__39305.hierarchy,this__39305.method_table,this__39305.prefer_table,this__39305.method_cache,this__39305.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____39308))
{var target_fn__39309 = temp__3971__auto____39308;
return target_fn__39309;
} else
{return cljs.core.deref.call(null,this__39305.method_table).call(null,this__39305.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__39310 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__39310.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__39310.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__39310.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__39310.method_cache,this__39310.method_table,this__39310.cached_hierarchy,this__39310.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__39311 = this;
return cljs.core.deref.call(null,this__39311.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__39312 = this;
return cljs.core.deref.call(null,this__39312.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__39313 = this;
return cljs.core.do_dispatch.call(null,mf,this__39313.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__39315__delegate = function (_,args){
var self__39314 = this;
return cljs.core._dispatch.call(null,self__39314,args);
};
var G__39315 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__39315__delegate.call(this, _, args);
};
G__39315.cljs$lang$maxFixedArity = 1;
G__39315.cljs$lang$applyTo = (function (arglist__39316){
var _ = cljs.core.first(arglist__39316);
var args = cljs.core.rest(arglist__39316);
return G__39315__delegate(_, args);
});
G__39315.cljs$lang$arity$variadic = G__39315__delegate;
return G__39315;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__39317 = this;
return cljs.core._dispatch.call(null,self__39317,args);
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
var this__39318 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_39320,writer,_){
var this__39319 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__39319.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_39322,_){
var this__39321 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__39321.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__39323 = this;
var and__3822__auto____39324 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____39324)
{return (this__39323.uuid === other.uuid);
} else
{return and__3822__auto____39324;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__39325 = this;
var this__39326 = this;
return cljs.core.pr_str.call(null,this__39326);
});
cljs.core.UUID;
