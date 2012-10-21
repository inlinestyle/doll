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
var x__327414 = (((x == null))?null:x);
if((p[goog.typeOf(x__327414)]))
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
var G__327415__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__327415 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__327415__delegate.call(this, array, i, idxs);
};
G__327415.cljs$lang$maxFixedArity = 2;
G__327415.cljs$lang$applyTo = (function (arglist__327416){
var array = cljs.core.first(arglist__327416);
var i = cljs.core.first(cljs.core.next(arglist__327416));
var idxs = cljs.core.rest(cljs.core.next(arglist__327416));
return G__327415__delegate(array, i, idxs);
});
G__327415.cljs$lang$arity$variadic = G__327415__delegate;
return G__327415;
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
if((function (){var and__3822__auto____327501 = this$;
if(and__3822__auto____327501)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____327501;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2387__auto____327502 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327503 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327502)]);
if(or__3824__auto____327503)
{return or__3824__auto____327503;
} else
{var or__3824__auto____327504 = (cljs.core._invoke["_"]);
if(or__3824__auto____327504)
{return or__3824__auto____327504;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____327505 = this$;
if(and__3822__auto____327505)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____327505;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2387__auto____327506 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327507 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327506)]);
if(or__3824__auto____327507)
{return or__3824__auto____327507;
} else
{var or__3824__auto____327508 = (cljs.core._invoke["_"]);
if(or__3824__auto____327508)
{return or__3824__auto____327508;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____327509 = this$;
if(and__3822__auto____327509)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____327509;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2387__auto____327510 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327511 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327510)]);
if(or__3824__auto____327511)
{return or__3824__auto____327511;
} else
{var or__3824__auto____327512 = (cljs.core._invoke["_"]);
if(or__3824__auto____327512)
{return or__3824__auto____327512;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____327513 = this$;
if(and__3822__auto____327513)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____327513;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2387__auto____327514 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327515 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327514)]);
if(or__3824__auto____327515)
{return or__3824__auto____327515;
} else
{var or__3824__auto____327516 = (cljs.core._invoke["_"]);
if(or__3824__auto____327516)
{return or__3824__auto____327516;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____327517 = this$;
if(and__3822__auto____327517)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____327517;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2387__auto____327518 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327519 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327518)]);
if(or__3824__auto____327519)
{return or__3824__auto____327519;
} else
{var or__3824__auto____327520 = (cljs.core._invoke["_"]);
if(or__3824__auto____327520)
{return or__3824__auto____327520;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____327521 = this$;
if(and__3822__auto____327521)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____327521;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2387__auto____327522 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327523 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327522)]);
if(or__3824__auto____327523)
{return or__3824__auto____327523;
} else
{var or__3824__auto____327524 = (cljs.core._invoke["_"]);
if(or__3824__auto____327524)
{return or__3824__auto____327524;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____327525 = this$;
if(and__3822__auto____327525)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____327525;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2387__auto____327526 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327527 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327526)]);
if(or__3824__auto____327527)
{return or__3824__auto____327527;
} else
{var or__3824__auto____327528 = (cljs.core._invoke["_"]);
if(or__3824__auto____327528)
{return or__3824__auto____327528;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____327529 = this$;
if(and__3822__auto____327529)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____327529;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2387__auto____327530 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327531 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327530)]);
if(or__3824__auto____327531)
{return or__3824__auto____327531;
} else
{var or__3824__auto____327532 = (cljs.core._invoke["_"]);
if(or__3824__auto____327532)
{return or__3824__auto____327532;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____327533 = this$;
if(and__3822__auto____327533)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____327533;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2387__auto____327534 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327535 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327534)]);
if(or__3824__auto____327535)
{return or__3824__auto____327535;
} else
{var or__3824__auto____327536 = (cljs.core._invoke["_"]);
if(or__3824__auto____327536)
{return or__3824__auto____327536;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____327537 = this$;
if(and__3822__auto____327537)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____327537;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2387__auto____327538 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327539 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327538)]);
if(or__3824__auto____327539)
{return or__3824__auto____327539;
} else
{var or__3824__auto____327540 = (cljs.core._invoke["_"]);
if(or__3824__auto____327540)
{return or__3824__auto____327540;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____327541 = this$;
if(and__3822__auto____327541)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____327541;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2387__auto____327542 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327543 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327542)]);
if(or__3824__auto____327543)
{return or__3824__auto____327543;
} else
{var or__3824__auto____327544 = (cljs.core._invoke["_"]);
if(or__3824__auto____327544)
{return or__3824__auto____327544;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____327545 = this$;
if(and__3822__auto____327545)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____327545;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2387__auto____327546 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327547 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327546)]);
if(or__3824__auto____327547)
{return or__3824__auto____327547;
} else
{var or__3824__auto____327548 = (cljs.core._invoke["_"]);
if(or__3824__auto____327548)
{return or__3824__auto____327548;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____327549 = this$;
if(and__3822__auto____327549)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____327549;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2387__auto____327550 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327551 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327550)]);
if(or__3824__auto____327551)
{return or__3824__auto____327551;
} else
{var or__3824__auto____327552 = (cljs.core._invoke["_"]);
if(or__3824__auto____327552)
{return or__3824__auto____327552;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____327553 = this$;
if(and__3822__auto____327553)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____327553;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2387__auto____327554 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327555 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327554)]);
if(or__3824__auto____327555)
{return or__3824__auto____327555;
} else
{var or__3824__auto____327556 = (cljs.core._invoke["_"]);
if(or__3824__auto____327556)
{return or__3824__auto____327556;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____327557 = this$;
if(and__3822__auto____327557)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____327557;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2387__auto____327558 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327559 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327558)]);
if(or__3824__auto____327559)
{return or__3824__auto____327559;
} else
{var or__3824__auto____327560 = (cljs.core._invoke["_"]);
if(or__3824__auto____327560)
{return or__3824__auto____327560;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____327561 = this$;
if(and__3822__auto____327561)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____327561;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2387__auto____327562 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327563 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327562)]);
if(or__3824__auto____327563)
{return or__3824__auto____327563;
} else
{var or__3824__auto____327564 = (cljs.core._invoke["_"]);
if(or__3824__auto____327564)
{return or__3824__auto____327564;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____327565 = this$;
if(and__3822__auto____327565)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____327565;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2387__auto____327566 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327567 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327566)]);
if(or__3824__auto____327567)
{return or__3824__auto____327567;
} else
{var or__3824__auto____327568 = (cljs.core._invoke["_"]);
if(or__3824__auto____327568)
{return or__3824__auto____327568;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____327569 = this$;
if(and__3822__auto____327569)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____327569;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2387__auto____327570 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327571 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327570)]);
if(or__3824__auto____327571)
{return or__3824__auto____327571;
} else
{var or__3824__auto____327572 = (cljs.core._invoke["_"]);
if(or__3824__auto____327572)
{return or__3824__auto____327572;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____327573 = this$;
if(and__3822__auto____327573)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____327573;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2387__auto____327574 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327575 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327574)]);
if(or__3824__auto____327575)
{return or__3824__auto____327575;
} else
{var or__3824__auto____327576 = (cljs.core._invoke["_"]);
if(or__3824__auto____327576)
{return or__3824__auto____327576;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____327577 = this$;
if(and__3822__auto____327577)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____327577;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2387__auto____327578 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327579 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327578)]);
if(or__3824__auto____327579)
{return or__3824__auto____327579;
} else
{var or__3824__auto____327580 = (cljs.core._invoke["_"]);
if(or__3824__auto____327580)
{return or__3824__auto____327580;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____327581 = this$;
if(and__3822__auto____327581)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____327581;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2387__auto____327582 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327583 = (cljs.core._invoke[goog.typeOf(x__2387__auto____327582)]);
if(or__3824__auto____327583)
{return or__3824__auto____327583;
} else
{var or__3824__auto____327584 = (cljs.core._invoke["_"]);
if(or__3824__auto____327584)
{return or__3824__auto____327584;
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
if((function (){var and__3822__auto____327589 = coll;
if(and__3822__auto____327589)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____327589;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2387__auto____327590 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327591 = (cljs.core._count[goog.typeOf(x__2387__auto____327590)]);
if(or__3824__auto____327591)
{return or__3824__auto____327591;
} else
{var or__3824__auto____327592 = (cljs.core._count["_"]);
if(or__3824__auto____327592)
{return or__3824__auto____327592;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____327597 = coll;
if(and__3822__auto____327597)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____327597;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2387__auto____327598 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327599 = (cljs.core._empty[goog.typeOf(x__2387__auto____327598)]);
if(or__3824__auto____327599)
{return or__3824__auto____327599;
} else
{var or__3824__auto____327600 = (cljs.core._empty["_"]);
if(or__3824__auto____327600)
{return or__3824__auto____327600;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____327605 = coll;
if(and__3822__auto____327605)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____327605;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2387__auto____327606 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327607 = (cljs.core._conj[goog.typeOf(x__2387__auto____327606)]);
if(or__3824__auto____327607)
{return or__3824__auto____327607;
} else
{var or__3824__auto____327608 = (cljs.core._conj["_"]);
if(or__3824__auto____327608)
{return or__3824__auto____327608;
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
if((function (){var and__3822__auto____327617 = coll;
if(and__3822__auto____327617)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____327617;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2387__auto____327618 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327619 = (cljs.core._nth[goog.typeOf(x__2387__auto____327618)]);
if(or__3824__auto____327619)
{return or__3824__auto____327619;
} else
{var or__3824__auto____327620 = (cljs.core._nth["_"]);
if(or__3824__auto____327620)
{return or__3824__auto____327620;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____327621 = coll;
if(and__3822__auto____327621)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____327621;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2387__auto____327622 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327623 = (cljs.core._nth[goog.typeOf(x__2387__auto____327622)]);
if(or__3824__auto____327623)
{return or__3824__auto____327623;
} else
{var or__3824__auto____327624 = (cljs.core._nth["_"]);
if(or__3824__auto____327624)
{return or__3824__auto____327624;
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
if((function (){var and__3822__auto____327629 = coll;
if(and__3822__auto____327629)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____327629;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2387__auto____327630 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327631 = (cljs.core._first[goog.typeOf(x__2387__auto____327630)]);
if(or__3824__auto____327631)
{return or__3824__auto____327631;
} else
{var or__3824__auto____327632 = (cljs.core._first["_"]);
if(or__3824__auto____327632)
{return or__3824__auto____327632;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____327637 = coll;
if(and__3822__auto____327637)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____327637;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2387__auto____327638 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327639 = (cljs.core._rest[goog.typeOf(x__2387__auto____327638)]);
if(or__3824__auto____327639)
{return or__3824__auto____327639;
} else
{var or__3824__auto____327640 = (cljs.core._rest["_"]);
if(or__3824__auto____327640)
{return or__3824__auto____327640;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____327645 = coll;
if(and__3822__auto____327645)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____327645;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2387__auto____327646 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327647 = (cljs.core._next[goog.typeOf(x__2387__auto____327646)]);
if(or__3824__auto____327647)
{return or__3824__auto____327647;
} else
{var or__3824__auto____327648 = (cljs.core._next["_"]);
if(or__3824__auto____327648)
{return or__3824__auto____327648;
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
if((function (){var and__3822__auto____327657 = o;
if(and__3822__auto____327657)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____327657;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2387__auto____327658 = (((o == null))?null:o);
return (function (){var or__3824__auto____327659 = (cljs.core._lookup[goog.typeOf(x__2387__auto____327658)]);
if(or__3824__auto____327659)
{return or__3824__auto____327659;
} else
{var or__3824__auto____327660 = (cljs.core._lookup["_"]);
if(or__3824__auto____327660)
{return or__3824__auto____327660;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____327661 = o;
if(and__3822__auto____327661)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____327661;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2387__auto____327662 = (((o == null))?null:o);
return (function (){var or__3824__auto____327663 = (cljs.core._lookup[goog.typeOf(x__2387__auto____327662)]);
if(or__3824__auto____327663)
{return or__3824__auto____327663;
} else
{var or__3824__auto____327664 = (cljs.core._lookup["_"]);
if(or__3824__auto____327664)
{return or__3824__auto____327664;
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
if((function (){var and__3822__auto____327669 = coll;
if(and__3822__auto____327669)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____327669;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2387__auto____327670 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327671 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2387__auto____327670)]);
if(or__3824__auto____327671)
{return or__3824__auto____327671;
} else
{var or__3824__auto____327672 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____327672)
{return or__3824__auto____327672;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____327677 = coll;
if(and__3822__auto____327677)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____327677;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2387__auto____327678 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327679 = (cljs.core._assoc[goog.typeOf(x__2387__auto____327678)]);
if(or__3824__auto____327679)
{return or__3824__auto____327679;
} else
{var or__3824__auto____327680 = (cljs.core._assoc["_"]);
if(or__3824__auto____327680)
{return or__3824__auto____327680;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____327685 = coll;
if(and__3822__auto____327685)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____327685;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2387__auto____327686 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327687 = (cljs.core._dissoc[goog.typeOf(x__2387__auto____327686)]);
if(or__3824__auto____327687)
{return or__3824__auto____327687;
} else
{var or__3824__auto____327688 = (cljs.core._dissoc["_"]);
if(or__3824__auto____327688)
{return or__3824__auto____327688;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____327693 = coll;
if(and__3822__auto____327693)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____327693;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2387__auto____327694 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327695 = (cljs.core._key[goog.typeOf(x__2387__auto____327694)]);
if(or__3824__auto____327695)
{return or__3824__auto____327695;
} else
{var or__3824__auto____327696 = (cljs.core._key["_"]);
if(or__3824__auto____327696)
{return or__3824__auto____327696;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____327701 = coll;
if(and__3822__auto____327701)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____327701;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2387__auto____327702 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327703 = (cljs.core._val[goog.typeOf(x__2387__auto____327702)]);
if(or__3824__auto____327703)
{return or__3824__auto____327703;
} else
{var or__3824__auto____327704 = (cljs.core._val["_"]);
if(or__3824__auto____327704)
{return or__3824__auto____327704;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____327709 = coll;
if(and__3822__auto____327709)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____327709;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2387__auto____327710 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327711 = (cljs.core._disjoin[goog.typeOf(x__2387__auto____327710)]);
if(or__3824__auto____327711)
{return or__3824__auto____327711;
} else
{var or__3824__auto____327712 = (cljs.core._disjoin["_"]);
if(or__3824__auto____327712)
{return or__3824__auto____327712;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____327717 = coll;
if(and__3822__auto____327717)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____327717;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2387__auto____327718 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327719 = (cljs.core._peek[goog.typeOf(x__2387__auto____327718)]);
if(or__3824__auto____327719)
{return or__3824__auto____327719;
} else
{var or__3824__auto____327720 = (cljs.core._peek["_"]);
if(or__3824__auto____327720)
{return or__3824__auto____327720;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____327725 = coll;
if(and__3822__auto____327725)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____327725;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2387__auto____327726 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327727 = (cljs.core._pop[goog.typeOf(x__2387__auto____327726)]);
if(or__3824__auto____327727)
{return or__3824__auto____327727;
} else
{var or__3824__auto____327728 = (cljs.core._pop["_"]);
if(or__3824__auto____327728)
{return or__3824__auto____327728;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____327733 = coll;
if(and__3822__auto____327733)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____327733;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2387__auto____327734 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327735 = (cljs.core._assoc_n[goog.typeOf(x__2387__auto____327734)]);
if(or__3824__auto____327735)
{return or__3824__auto____327735;
} else
{var or__3824__auto____327736 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____327736)
{return or__3824__auto____327736;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____327741 = o;
if(and__3822__auto____327741)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____327741;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2387__auto____327742 = (((o == null))?null:o);
return (function (){var or__3824__auto____327743 = (cljs.core._deref[goog.typeOf(x__2387__auto____327742)]);
if(or__3824__auto____327743)
{return or__3824__auto____327743;
} else
{var or__3824__auto____327744 = (cljs.core._deref["_"]);
if(or__3824__auto____327744)
{return or__3824__auto____327744;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____327749 = o;
if(and__3822__auto____327749)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____327749;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2387__auto____327750 = (((o == null))?null:o);
return (function (){var or__3824__auto____327751 = (cljs.core._deref_with_timeout[goog.typeOf(x__2387__auto____327750)]);
if(or__3824__auto____327751)
{return or__3824__auto____327751;
} else
{var or__3824__auto____327752 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____327752)
{return or__3824__auto____327752;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____327757 = o;
if(and__3822__auto____327757)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____327757;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2387__auto____327758 = (((o == null))?null:o);
return (function (){var or__3824__auto____327759 = (cljs.core._meta[goog.typeOf(x__2387__auto____327758)]);
if(or__3824__auto____327759)
{return or__3824__auto____327759;
} else
{var or__3824__auto____327760 = (cljs.core._meta["_"]);
if(or__3824__auto____327760)
{return or__3824__auto____327760;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____327765 = o;
if(and__3822__auto____327765)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____327765;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2387__auto____327766 = (((o == null))?null:o);
return (function (){var or__3824__auto____327767 = (cljs.core._with_meta[goog.typeOf(x__2387__auto____327766)]);
if(or__3824__auto____327767)
{return or__3824__auto____327767;
} else
{var or__3824__auto____327768 = (cljs.core._with_meta["_"]);
if(or__3824__auto____327768)
{return or__3824__auto____327768;
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
if((function (){var and__3822__auto____327777 = coll;
if(and__3822__auto____327777)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____327777;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2387__auto____327778 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327779 = (cljs.core._reduce[goog.typeOf(x__2387__auto____327778)]);
if(or__3824__auto____327779)
{return or__3824__auto____327779;
} else
{var or__3824__auto____327780 = (cljs.core._reduce["_"]);
if(or__3824__auto____327780)
{return or__3824__auto____327780;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____327781 = coll;
if(and__3822__auto____327781)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____327781;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2387__auto____327782 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327783 = (cljs.core._reduce[goog.typeOf(x__2387__auto____327782)]);
if(or__3824__auto____327783)
{return or__3824__auto____327783;
} else
{var or__3824__auto____327784 = (cljs.core._reduce["_"]);
if(or__3824__auto____327784)
{return or__3824__auto____327784;
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
if((function (){var and__3822__auto____327789 = coll;
if(and__3822__auto____327789)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____327789;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2387__auto____327790 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327791 = (cljs.core._kv_reduce[goog.typeOf(x__2387__auto____327790)]);
if(or__3824__auto____327791)
{return or__3824__auto____327791;
} else
{var or__3824__auto____327792 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____327792)
{return or__3824__auto____327792;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____327797 = o;
if(and__3822__auto____327797)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____327797;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2387__auto____327798 = (((o == null))?null:o);
return (function (){var or__3824__auto____327799 = (cljs.core._equiv[goog.typeOf(x__2387__auto____327798)]);
if(or__3824__auto____327799)
{return or__3824__auto____327799;
} else
{var or__3824__auto____327800 = (cljs.core._equiv["_"]);
if(or__3824__auto____327800)
{return or__3824__auto____327800;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____327805 = o;
if(and__3822__auto____327805)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____327805;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2387__auto____327806 = (((o == null))?null:o);
return (function (){var or__3824__auto____327807 = (cljs.core._hash[goog.typeOf(x__2387__auto____327806)]);
if(or__3824__auto____327807)
{return or__3824__auto____327807;
} else
{var or__3824__auto____327808 = (cljs.core._hash["_"]);
if(or__3824__auto____327808)
{return or__3824__auto____327808;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____327813 = o;
if(and__3822__auto____327813)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____327813;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2387__auto____327814 = (((o == null))?null:o);
return (function (){var or__3824__auto____327815 = (cljs.core._seq[goog.typeOf(x__2387__auto____327814)]);
if(or__3824__auto____327815)
{return or__3824__auto____327815;
} else
{var or__3824__auto____327816 = (cljs.core._seq["_"]);
if(or__3824__auto____327816)
{return or__3824__auto____327816;
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
if((function (){var and__3822__auto____327821 = coll;
if(and__3822__auto____327821)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____327821;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2387__auto____327822 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327823 = (cljs.core._rseq[goog.typeOf(x__2387__auto____327822)]);
if(or__3824__auto____327823)
{return or__3824__auto____327823;
} else
{var or__3824__auto____327824 = (cljs.core._rseq["_"]);
if(or__3824__auto____327824)
{return or__3824__auto____327824;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____327829 = coll;
if(and__3822__auto____327829)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____327829;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2387__auto____327830 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327831 = (cljs.core._sorted_seq[goog.typeOf(x__2387__auto____327830)]);
if(or__3824__auto____327831)
{return or__3824__auto____327831;
} else
{var or__3824__auto____327832 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____327832)
{return or__3824__auto____327832;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____327837 = coll;
if(and__3822__auto____327837)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____327837;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2387__auto____327838 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327839 = (cljs.core._sorted_seq_from[goog.typeOf(x__2387__auto____327838)]);
if(or__3824__auto____327839)
{return or__3824__auto____327839;
} else
{var or__3824__auto____327840 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____327840)
{return or__3824__auto____327840;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____327845 = coll;
if(and__3822__auto____327845)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____327845;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2387__auto____327846 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327847 = (cljs.core._entry_key[goog.typeOf(x__2387__auto____327846)]);
if(or__3824__auto____327847)
{return or__3824__auto____327847;
} else
{var or__3824__auto____327848 = (cljs.core._entry_key["_"]);
if(or__3824__auto____327848)
{return or__3824__auto____327848;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____327853 = coll;
if(and__3822__auto____327853)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____327853;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2387__auto____327854 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327855 = (cljs.core._comparator[goog.typeOf(x__2387__auto____327854)]);
if(or__3824__auto____327855)
{return or__3824__auto____327855;
} else
{var or__3824__auto____327856 = (cljs.core._comparator["_"]);
if(or__3824__auto____327856)
{return or__3824__auto____327856;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____327861 = o;
if(and__3822__auto____327861)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____327861;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2387__auto____327862 = (((o == null))?null:o);
return (function (){var or__3824__auto____327863 = (cljs.core._pr_seq[goog.typeOf(x__2387__auto____327862)]);
if(or__3824__auto____327863)
{return or__3824__auto____327863;
} else
{var or__3824__auto____327864 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____327864)
{return or__3824__auto____327864;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____327869 = writer;
if(and__3822__auto____327869)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____327869;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__2387__auto____327870 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____327871 = (cljs.core._write[goog.typeOf(x__2387__auto____327870)]);
if(or__3824__auto____327871)
{return or__3824__auto____327871;
} else
{var or__3824__auto____327872 = (cljs.core._write["_"]);
if(or__3824__auto____327872)
{return or__3824__auto____327872;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____327877 = writer;
if(and__3822__auto____327877)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____327877;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__2387__auto____327878 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____327879 = (cljs.core._flush[goog.typeOf(x__2387__auto____327878)]);
if(or__3824__auto____327879)
{return or__3824__auto____327879;
} else
{var or__3824__auto____327880 = (cljs.core._flush["_"]);
if(or__3824__auto____327880)
{return or__3824__auto____327880;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____327885 = o;
if(and__3822__auto____327885)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____327885;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__2387__auto____327886 = (((o == null))?null:o);
return (function (){var or__3824__auto____327887 = (cljs.core._pr_writer[goog.typeOf(x__2387__auto____327886)]);
if(or__3824__auto____327887)
{return or__3824__auto____327887;
} else
{var or__3824__auto____327888 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____327888)
{return or__3824__auto____327888;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____327893 = d;
if(and__3822__auto____327893)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____327893;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2387__auto____327894 = (((d == null))?null:d);
return (function (){var or__3824__auto____327895 = (cljs.core._realized_QMARK_[goog.typeOf(x__2387__auto____327894)]);
if(or__3824__auto____327895)
{return or__3824__auto____327895;
} else
{var or__3824__auto____327896 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____327896)
{return or__3824__auto____327896;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____327901 = this$;
if(and__3822__auto____327901)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____327901;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2387__auto____327902 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327903 = (cljs.core._notify_watches[goog.typeOf(x__2387__auto____327902)]);
if(or__3824__auto____327903)
{return or__3824__auto____327903;
} else
{var or__3824__auto____327904 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____327904)
{return or__3824__auto____327904;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____327909 = this$;
if(and__3822__auto____327909)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____327909;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2387__auto____327910 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327911 = (cljs.core._add_watch[goog.typeOf(x__2387__auto____327910)]);
if(or__3824__auto____327911)
{return or__3824__auto____327911;
} else
{var or__3824__auto____327912 = (cljs.core._add_watch["_"]);
if(or__3824__auto____327912)
{return or__3824__auto____327912;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____327917 = this$;
if(and__3822__auto____327917)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____327917;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2387__auto____327918 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____327919 = (cljs.core._remove_watch[goog.typeOf(x__2387__auto____327918)]);
if(or__3824__auto____327919)
{return or__3824__auto____327919;
} else
{var or__3824__auto____327920 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____327920)
{return or__3824__auto____327920;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____327925 = coll;
if(and__3822__auto____327925)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____327925;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2387__auto____327926 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327927 = (cljs.core._as_transient[goog.typeOf(x__2387__auto____327926)]);
if(or__3824__auto____327927)
{return or__3824__auto____327927;
} else
{var or__3824__auto____327928 = (cljs.core._as_transient["_"]);
if(or__3824__auto____327928)
{return or__3824__auto____327928;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____327933 = tcoll;
if(and__3822__auto____327933)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____327933;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2387__auto____327934 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____327935 = (cljs.core._conj_BANG_[goog.typeOf(x__2387__auto____327934)]);
if(or__3824__auto____327935)
{return or__3824__auto____327935;
} else
{var or__3824__auto____327936 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____327936)
{return or__3824__auto____327936;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____327941 = tcoll;
if(and__3822__auto____327941)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____327941;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2387__auto____327942 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____327943 = (cljs.core._persistent_BANG_[goog.typeOf(x__2387__auto____327942)]);
if(or__3824__auto____327943)
{return or__3824__auto____327943;
} else
{var or__3824__auto____327944 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____327944)
{return or__3824__auto____327944;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____327949 = tcoll;
if(and__3822__auto____327949)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____327949;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2387__auto____327950 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____327951 = (cljs.core._assoc_BANG_[goog.typeOf(x__2387__auto____327950)]);
if(or__3824__auto____327951)
{return or__3824__auto____327951;
} else
{var or__3824__auto____327952 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____327952)
{return or__3824__auto____327952;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____327957 = tcoll;
if(and__3822__auto____327957)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____327957;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2387__auto____327958 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____327959 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2387__auto____327958)]);
if(or__3824__auto____327959)
{return or__3824__auto____327959;
} else
{var or__3824__auto____327960 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____327960)
{return or__3824__auto____327960;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____327965 = tcoll;
if(and__3822__auto____327965)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____327965;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2387__auto____327966 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____327967 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2387__auto____327966)]);
if(or__3824__auto____327967)
{return or__3824__auto____327967;
} else
{var or__3824__auto____327968 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____327968)
{return or__3824__auto____327968;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____327973 = tcoll;
if(and__3822__auto____327973)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____327973;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2387__auto____327974 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____327975 = (cljs.core._pop_BANG_[goog.typeOf(x__2387__auto____327974)]);
if(or__3824__auto____327975)
{return or__3824__auto____327975;
} else
{var or__3824__auto____327976 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____327976)
{return or__3824__auto____327976;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____327981 = tcoll;
if(and__3822__auto____327981)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____327981;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2387__auto____327982 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____327983 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2387__auto____327982)]);
if(or__3824__auto____327983)
{return or__3824__auto____327983;
} else
{var or__3824__auto____327984 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____327984)
{return or__3824__auto____327984;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____327989 = x;
if(and__3822__auto____327989)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____327989;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2387__auto____327990 = (((x == null))?null:x);
return (function (){var or__3824__auto____327991 = (cljs.core._compare[goog.typeOf(x__2387__auto____327990)]);
if(or__3824__auto____327991)
{return or__3824__auto____327991;
} else
{var or__3824__auto____327992 = (cljs.core._compare["_"]);
if(or__3824__auto____327992)
{return or__3824__auto____327992;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____327997 = coll;
if(and__3822__auto____327997)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____327997;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2387__auto____327998 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____327999 = (cljs.core._drop_first[goog.typeOf(x__2387__auto____327998)]);
if(or__3824__auto____327999)
{return or__3824__auto____327999;
} else
{var or__3824__auto____328000 = (cljs.core._drop_first["_"]);
if(or__3824__auto____328000)
{return or__3824__auto____328000;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____328005 = coll;
if(and__3822__auto____328005)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____328005;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2387__auto____328006 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____328007 = (cljs.core._chunked_first[goog.typeOf(x__2387__auto____328006)]);
if(or__3824__auto____328007)
{return or__3824__auto____328007;
} else
{var or__3824__auto____328008 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____328008)
{return or__3824__auto____328008;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____328013 = coll;
if(and__3822__auto____328013)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____328013;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2387__auto____328014 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____328015 = (cljs.core._chunked_rest[goog.typeOf(x__2387__auto____328014)]);
if(or__3824__auto____328015)
{return or__3824__auto____328015;
} else
{var or__3824__auto____328016 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____328016)
{return or__3824__auto____328016;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____328021 = coll;
if(and__3822__auto____328021)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____328021;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2387__auto____328022 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____328023 = (cljs.core._chunked_next[goog.typeOf(x__2387__auto____328022)]);
if(or__3824__auto____328023)
{return or__3824__auto____328023;
} else
{var or__3824__auto____328024 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____328024)
{return or__3824__auto____328024;
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
{if((function (){var G__328028__328029 = coll;
if(G__328028__328029)
{if((function (){var or__3824__auto____328030 = (G__328028__328029.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____328030)
{return or__3824__auto____328030;
} else
{return G__328028__328029.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__328028__328029.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__328028__328029);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__328028__328029);
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
{if((function (){var G__328035__328036 = coll;
if(G__328035__328036)
{if((function (){var or__3824__auto____328037 = (G__328035__328036.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____328037)
{return or__3824__auto____328037;
} else
{return G__328035__328036.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__328035__328036.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__328035__328036);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__328035__328036);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__328038 = cljs.core.seq.call(null,coll);
if((s__328038 == null))
{return null;
} else
{return cljs.core._first.call(null,s__328038);
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
{if((function (){var G__328043__328044 = coll;
if(G__328043__328044)
{if((function (){var or__3824__auto____328045 = (G__328043__328044.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____328045)
{return or__3824__auto____328045;
} else
{return G__328043__328044.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__328043__328044.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__328043__328044);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__328043__328044);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__328046 = cljs.core.seq.call(null,coll);
if(!((s__328046 == null)))
{return cljs.core._rest.call(null,s__328046);
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
{if((function (){var G__328050__328051 = coll;
if(G__328050__328051)
{if((function (){var or__3824__auto____328052 = (G__328050__328051.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____328052)
{return or__3824__auto____328052;
} else
{return G__328050__328051.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__328050__328051.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__328050__328051);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__328050__328051);
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
var or__3824__auto____328054 = (x === y);
if(or__3824__auto____328054)
{return or__3824__auto____328054;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__328055__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__328056 = y;
var G__328057 = cljs.core.first.call(null,more);
var G__328058 = cljs.core.next.call(null,more);
x = G__328056;
y = G__328057;
more = G__328058;
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
var G__328055 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328055__delegate.call(this, x, y, more);
};
G__328055.cljs$lang$maxFixedArity = 2;
G__328055.cljs$lang$applyTo = (function (arglist__328059){
var x = cljs.core.first(arglist__328059);
var y = cljs.core.first(cljs.core.next(arglist__328059));
var more = cljs.core.rest(cljs.core.next(arglist__328059));
return G__328055__delegate(x, y, more);
});
G__328055.cljs$lang$arity$variadic = G__328055__delegate;
return G__328055;
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
var G__328060 = null;
var G__328060__2 = (function (o,k){
return null;
});
var G__328060__3 = (function (o,k,not_found){
return not_found;
});
G__328060 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__328060__2.call(this,o,k);
case 3:
return G__328060__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328060;
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
var G__328061 = null;
var G__328061__2 = (function (_,f){
return f.call(null);
});
var G__328061__3 = (function (_,f,start){
return start;
});
G__328061 = function(_,f,start){
switch(arguments.length){
case 2:
return G__328061__2.call(this,_,f);
case 3:
return G__328061__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328061;
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
var G__328062 = null;
var G__328062__2 = (function (_,n){
return null;
});
var G__328062__3 = (function (_,n,not_found){
return not_found;
});
G__328062 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__328062__2.call(this,_,n);
case 3:
return G__328062__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328062;
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
var and__3822__auto____328063 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____328063)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____328063;
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
var this__328064 = this;
return this__328064.val;
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
var cnt__328077 = cljs.core._count.call(null,cicoll);
if((cnt__328077 === 0))
{return f.call(null);
} else
{var val__328078 = cljs.core._nth.call(null,cicoll,0);
var n__328079 = 1;
while(true){
if((n__328079 < cnt__328077))
{var nval__328080 = f.call(null,val__328078,cljs.core._nth.call(null,cicoll,n__328079));
if(cljs.core.reduced_QMARK_.call(null,nval__328080))
{return cljs.core.deref.call(null,nval__328080);
} else
{{
var G__328089 = nval__328080;
var G__328090 = (n__328079 + 1);
val__328078 = G__328089;
n__328079 = G__328090;
continue;
}
}
} else
{return val__328078;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__328081 = cljs.core._count.call(null,cicoll);
var val__328082 = val;
var n__328083 = 0;
while(true){
if((n__328083 < cnt__328081))
{var nval__328084 = f.call(null,val__328082,cljs.core._nth.call(null,cicoll,n__328083));
if(cljs.core.reduced_QMARK_.call(null,nval__328084))
{return cljs.core.deref.call(null,nval__328084);
} else
{{
var G__328091 = nval__328084;
var G__328092 = (n__328083 + 1);
val__328082 = G__328091;
n__328083 = G__328092;
continue;
}
}
} else
{return val__328082;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__328085 = cljs.core._count.call(null,cicoll);
var val__328086 = val;
var n__328087 = idx;
while(true){
if((n__328087 < cnt__328085))
{var nval__328088 = f.call(null,val__328086,cljs.core._nth.call(null,cicoll,n__328087));
if(cljs.core.reduced_QMARK_.call(null,nval__328088))
{return cljs.core.deref.call(null,nval__328088);
} else
{{
var G__328093 = nval__328088;
var G__328094 = (n__328087 + 1);
val__328086 = G__328093;
n__328087 = G__328094;
continue;
}
}
} else
{return val__328086;
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
var cnt__328107 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__328108 = (arr[0]);
var n__328109 = 1;
while(true){
if((n__328109 < cnt__328107))
{var nval__328110 = f.call(null,val__328108,(arr[n__328109]));
if(cljs.core.reduced_QMARK_.call(null,nval__328110))
{return cljs.core.deref.call(null,nval__328110);
} else
{{
var G__328119 = nval__328110;
var G__328120 = (n__328109 + 1);
val__328108 = G__328119;
n__328109 = G__328120;
continue;
}
}
} else
{return val__328108;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__328111 = arr.length;
var val__328112 = val;
var n__328113 = 0;
while(true){
if((n__328113 < cnt__328111))
{var nval__328114 = f.call(null,val__328112,(arr[n__328113]));
if(cljs.core.reduced_QMARK_.call(null,nval__328114))
{return cljs.core.deref.call(null,nval__328114);
} else
{{
var G__328121 = nval__328114;
var G__328122 = (n__328113 + 1);
val__328112 = G__328121;
n__328113 = G__328122;
continue;
}
}
} else
{return val__328112;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__328115 = arr.length;
var val__328116 = val;
var n__328117 = idx;
while(true){
if((n__328117 < cnt__328115))
{var nval__328118 = f.call(null,val__328116,(arr[n__328117]));
if(cljs.core.reduced_QMARK_.call(null,nval__328118))
{return cljs.core.deref.call(null,nval__328118);
} else
{{
var G__328123 = nval__328118;
var G__328124 = (n__328117 + 1);
val__328116 = G__328123;
n__328117 = G__328124;
continue;
}
}
} else
{return val__328116;
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
var G__328128__328129 = x;
if(G__328128__328129)
{if((function (){var or__3824__auto____328130 = (G__328128__328129.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____328130)
{return or__3824__auto____328130;
} else
{return G__328128__328129.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__328128__328129.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__328128__328129);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__328128__328129);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__328134__328135 = x;
if(G__328134__328135)
{if((function (){var or__3824__auto____328136 = (G__328134__328135.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____328136)
{return or__3824__auto____328136;
} else
{return G__328134__328135.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__328134__328135.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__328134__328135);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__328134__328135);
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
var this__328137 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__328138 = this;
if(((this__328138.i + 1) < this__328138.a.length))
{return (new cljs.core.IndexedSeq(this__328138.a,(this__328138.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__328139 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__328140 = this;
var c__328141 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__328141 > 0))
{return (new cljs.core.RSeq(coll,(c__328141 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__328142 = this;
var this__328143 = this;
return cljs.core.pr_str.call(null,this__328143);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__328144 = this;
if(cljs.core.counted_QMARK_.call(null,this__328144.a))
{return cljs.core.ci_reduce.call(null,this__328144.a,f,(this__328144.a[this__328144.i]),(this__328144.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__328144.a[this__328144.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__328145 = this;
if(cljs.core.counted_QMARK_.call(null,this__328145.a))
{return cljs.core.ci_reduce.call(null,this__328145.a,f,start,this__328145.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__328146 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__328147 = this;
return (this__328147.a.length - this__328147.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__328148 = this;
return (this__328148.a[this__328148.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__328149 = this;
if(((this__328149.i + 1) < this__328149.a.length))
{return (new cljs.core.IndexedSeq(this__328149.a,(this__328149.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__328150 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__328151 = this;
var i__328152 = (n + this__328151.i);
if((i__328152 < this__328151.a.length))
{return (this__328151.a[i__328152]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__328153 = this;
var i__328154 = (n + this__328153.i);
if((i__328154 < this__328153.a.length))
{return (this__328153.a[i__328154]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__328155 = this;
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
var G__328156 = null;
var G__328156__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__328156__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__328156 = function(array,f,start){
switch(arguments.length){
case 2:
return G__328156__2.call(this,array,f);
case 3:
return G__328156__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328156;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__328157 = null;
var G__328157__2 = (function (array,k){
return (array[k]);
});
var G__328157__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__328157 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__328157__2.call(this,array,k);
case 3:
return G__328157__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328157;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__328158 = null;
var G__328158__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__328158__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__328158 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__328158__2.call(this,array,n);
case 3:
return G__328158__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328158;
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
var this__328159 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__328160 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__328161 = this;
var this__328162 = this;
return cljs.core.pr_str.call(null,this__328162);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__328163 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__328164 = this;
return (this__328164.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__328165 = this;
return cljs.core._nth.call(null,this__328165.ci,this__328165.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__328166 = this;
if((this__328166.i > 0))
{return (new cljs.core.RSeq(this__328166.ci,(this__328166.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__328167 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__328168 = this;
return (new cljs.core.RSeq(this__328168.ci,this__328168.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__328169 = this;
return this__328169.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__328170 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__328170.meta);
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
var sn__328172 = cljs.core.next.call(null,s);
if(!((sn__328172 == null)))
{{
var G__328173 = sn__328172;
s = G__328173;
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
var G__328174__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__328175 = conj.call(null,coll,x);
var G__328176 = cljs.core.first.call(null,xs);
var G__328177 = cljs.core.next.call(null,xs);
coll = G__328175;
x = G__328176;
xs = G__328177;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__328174 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328174__delegate.call(this, coll, x, xs);
};
G__328174.cljs$lang$maxFixedArity = 2;
G__328174.cljs$lang$applyTo = (function (arglist__328178){
var coll = cljs.core.first(arglist__328178);
var x = cljs.core.first(cljs.core.next(arglist__328178));
var xs = cljs.core.rest(cljs.core.next(arglist__328178));
return G__328174__delegate(coll, x, xs);
});
G__328174.cljs$lang$arity$variadic = G__328174__delegate;
return G__328174;
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
var s__328181 = cljs.core.seq.call(null,coll);
var acc__328182 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__328181))
{return (acc__328182 + cljs.core._count.call(null,s__328181));
} else
{{
var G__328183 = cljs.core.next.call(null,s__328181);
var G__328184 = (acc__328182 + 1);
s__328181 = G__328183;
acc__328182 = G__328184;
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
var G__328185 = cljs.core.next.call(null,coll);
var G__328186 = (n - 1);
coll = G__328185;
n = G__328186;
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
var G__328187 = cljs.core.next.call(null,coll);
var G__328188 = (n - 1);
var G__328189 = not_found;
coll = G__328187;
n = G__328188;
not_found = G__328189;
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
{if((function (){var G__328196__328197 = coll;
if(G__328196__328197)
{if((function (){var or__3824__auto____328198 = (G__328196__328197.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____328198)
{return or__3824__auto____328198;
} else
{return G__328196__328197.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__328196__328197.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__328196__328197);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__328196__328197);
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
{if((function (){var G__328199__328200 = coll;
if(G__328199__328200)
{if((function (){var or__3824__auto____328201 = (G__328199__328200.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____328201)
{return or__3824__auto____328201;
} else
{return G__328199__328200.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__328199__328200.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__328199__328200);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__328199__328200);
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
var G__328204__delegate = function (coll,k,v,kvs){
while(true){
var ret__328203 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__328205 = ret__328203;
var G__328206 = cljs.core.first.call(null,kvs);
var G__328207 = cljs.core.second.call(null,kvs);
var G__328208 = cljs.core.nnext.call(null,kvs);
coll = G__328205;
k = G__328206;
v = G__328207;
kvs = G__328208;
continue;
}
} else
{return ret__328203;
}
break;
}
};
var G__328204 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__328204__delegate.call(this, coll, k, v, kvs);
};
G__328204.cljs$lang$maxFixedArity = 3;
G__328204.cljs$lang$applyTo = (function (arglist__328209){
var coll = cljs.core.first(arglist__328209);
var k = cljs.core.first(cljs.core.next(arglist__328209));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__328209)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__328209)));
return G__328204__delegate(coll, k, v, kvs);
});
G__328204.cljs$lang$arity$variadic = G__328204__delegate;
return G__328204;
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
var G__328212__delegate = function (coll,k,ks){
while(true){
var ret__328211 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__328213 = ret__328211;
var G__328214 = cljs.core.first.call(null,ks);
var G__328215 = cljs.core.next.call(null,ks);
coll = G__328213;
k = G__328214;
ks = G__328215;
continue;
}
} else
{return ret__328211;
}
break;
}
};
var G__328212 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328212__delegate.call(this, coll, k, ks);
};
G__328212.cljs$lang$maxFixedArity = 2;
G__328212.cljs$lang$applyTo = (function (arglist__328216){
var coll = cljs.core.first(arglist__328216);
var k = cljs.core.first(cljs.core.next(arglist__328216));
var ks = cljs.core.rest(cljs.core.next(arglist__328216));
return G__328212__delegate(coll, k, ks);
});
G__328212.cljs$lang$arity$variadic = G__328212__delegate;
return G__328212;
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
if((function (){var G__328220__328221 = o;
if(G__328220__328221)
{if((function (){var or__3824__auto____328222 = (G__328220__328221.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____328222)
{return or__3824__auto____328222;
} else
{return G__328220__328221.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__328220__328221.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__328220__328221);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__328220__328221);
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
var G__328225__delegate = function (coll,k,ks){
while(true){
var ret__328224 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__328226 = ret__328224;
var G__328227 = cljs.core.first.call(null,ks);
var G__328228 = cljs.core.next.call(null,ks);
coll = G__328226;
k = G__328227;
ks = G__328228;
continue;
}
} else
{return ret__328224;
}
break;
}
};
var G__328225 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328225__delegate.call(this, coll, k, ks);
};
G__328225.cljs$lang$maxFixedArity = 2;
G__328225.cljs$lang$applyTo = (function (arglist__328229){
var coll = cljs.core.first(arglist__328229);
var k = cljs.core.first(cljs.core.next(arglist__328229));
var ks = cljs.core.rest(cljs.core.next(arglist__328229));
return G__328225__delegate(coll, k, ks);
});
G__328225.cljs$lang$arity$variadic = G__328225__delegate;
return G__328225;
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
var h__328231 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__328231);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__328231;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__328233 = (cljs.core.string_hash_cache[k]);
if(!((h__328233 == null)))
{return h__328233;
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
if((function (){var and__3822__auto____328235 = goog.isString(o);
if(and__3822__auto____328235)
{return check_cache;
} else
{return and__3822__auto____328235;
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
{var G__328239__328240 = x;
if(G__328239__328240)
{if((function (){var or__3824__auto____328241 = (G__328239__328240.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____328241)
{return or__3824__auto____328241;
} else
{return G__328239__328240.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__328239__328240.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__328239__328240);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__328239__328240);
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
{var G__328245__328246 = x;
if(G__328245__328246)
{if((function (){var or__3824__auto____328247 = (G__328245__328246.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____328247)
{return or__3824__auto____328247;
} else
{return G__328245__328246.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__328245__328246.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__328245__328246);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__328245__328246);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__328251__328252 = x;
if(G__328251__328252)
{if((function (){var or__3824__auto____328253 = (G__328251__328252.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____328253)
{return or__3824__auto____328253;
} else
{return G__328251__328252.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__328251__328252.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__328251__328252);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__328251__328252);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__328257__328258 = x;
if(G__328257__328258)
{if((function (){var or__3824__auto____328259 = (G__328257__328258.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____328259)
{return or__3824__auto____328259;
} else
{return G__328257__328258.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__328257__328258.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__328257__328258);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__328257__328258);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__328263__328264 = x;
if(G__328263__328264)
{if((function (){var or__3824__auto____328265 = (G__328263__328264.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____328265)
{return or__3824__auto____328265;
} else
{return G__328263__328264.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__328263__328264.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__328263__328264);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__328263__328264);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__328269__328270 = x;
if(G__328269__328270)
{if((function (){var or__3824__auto____328271 = (G__328269__328270.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____328271)
{return or__3824__auto____328271;
} else
{return G__328269__328270.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__328269__328270.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__328269__328270);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__328269__328270);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__328275__328276 = x;
if(G__328275__328276)
{if((function (){var or__3824__auto____328277 = (G__328275__328276.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____328277)
{return or__3824__auto____328277;
} else
{return G__328275__328276.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__328275__328276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__328275__328276);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__328275__328276);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__328281__328282 = x;
if(G__328281__328282)
{if((function (){var or__3824__auto____328283 = (G__328281__328282.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____328283)
{return or__3824__auto____328283;
} else
{return G__328281__328282.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__328281__328282.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__328281__328282);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__328281__328282);
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
var G__328284__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__328284 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__328284__delegate.call(this, keyvals);
};
G__328284.cljs$lang$maxFixedArity = 0;
G__328284.cljs$lang$applyTo = (function (arglist__328285){
var keyvals = cljs.core.seq(arglist__328285);;
return G__328284__delegate(keyvals);
});
G__328284.cljs$lang$arity$variadic = G__328284__delegate;
return G__328284;
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
var keys__328287 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__328287.push(key);
}));
return keys__328287;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__328291 = i;
var j__328292 = j;
var len__328293 = len;
while(true){
if((len__328293 === 0))
{return to;
} else
{(to[j__328292] = (from[i__328291]));
{
var G__328294 = (i__328291 + 1);
var G__328295 = (j__328292 + 1);
var G__328296 = (len__328293 - 1);
i__328291 = G__328294;
j__328292 = G__328295;
len__328293 = G__328296;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__328300 = (i + (len - 1));
var j__328301 = (j + (len - 1));
var len__328302 = len;
while(true){
if((len__328302 === 0))
{return to;
} else
{(to[j__328301] = (from[i__328300]));
{
var G__328303 = (i__328300 - 1);
var G__328304 = (j__328301 - 1);
var G__328305 = (len__328302 - 1);
i__328300 = G__328303;
j__328301 = G__328304;
len__328302 = G__328305;
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
{var G__328309__328310 = s;
if(G__328309__328310)
{if((function (){var or__3824__auto____328311 = (G__328309__328310.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____328311)
{return or__3824__auto____328311;
} else
{return G__328309__328310.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__328309__328310.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__328309__328310);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__328309__328310);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__328315__328316 = s;
if(G__328315__328316)
{if((function (){var or__3824__auto____328317 = (G__328315__328316.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____328317)
{return or__3824__auto____328317;
} else
{return G__328315__328316.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__328315__328316.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__328315__328316);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__328315__328316);
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
var and__3822__auto____328320 = goog.isString(x);
if(and__3822__auto____328320)
{return !((function (){var or__3824__auto____328321 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____328321)
{return or__3824__auto____328321;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____328320;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____328323 = goog.isString(x);
if(and__3822__auto____328323)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____328323;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____328325 = goog.isString(x);
if(and__3822__auto____328325)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____328325;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____328330 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____328330)
{return or__3824__auto____328330;
} else
{var G__328331__328332 = f;
if(G__328331__328332)
{if((function (){var or__3824__auto____328333 = (G__328331__328332.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____328333)
{return or__3824__auto____328333;
} else
{return G__328331__328332.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__328331__328332.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__328331__328332);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__328331__328332);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____328337 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____328337)
{var and__3822__auto____328338 = !(isNaN(n));
if(and__3822__auto____328338)
{var and__3822__auto____328339 = !((n === Infinity));
if(and__3822__auto____328339)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____328339;
}
} else
{return and__3822__auto____328338;
}
} else
{return and__3822__auto____328337;
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
if((function (){var and__3822__auto____328342 = !((coll == null));
if(and__3822__auto____328342)
{var and__3822__auto____328343 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____328343)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____328343;
}
} else
{return and__3822__auto____328342;
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
var G__328352__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__328348 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__328349 = more;
while(true){
var x__328350 = cljs.core.first.call(null,xs__328349);
var etc__328351 = cljs.core.next.call(null,xs__328349);
if(cljs.core.truth_(xs__328349))
{if(cljs.core.contains_QMARK_.call(null,s__328348,x__328350))
{return false;
} else
{{
var G__328353 = cljs.core.conj.call(null,s__328348,x__328350);
var G__328354 = etc__328351;
s__328348 = G__328353;
xs__328349 = G__328354;
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
var G__328352 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328352__delegate.call(this, x, y, more);
};
G__328352.cljs$lang$maxFixedArity = 2;
G__328352.cljs$lang$applyTo = (function (arglist__328355){
var x = cljs.core.first(arglist__328355);
var y = cljs.core.first(cljs.core.next(arglist__328355));
var more = cljs.core.rest(cljs.core.next(arglist__328355));
return G__328352__delegate(x, y, more);
});
G__328352.cljs$lang$arity$variadic = G__328352__delegate;
return G__328352;
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
{if((function (){var G__328359__328360 = x;
if(G__328359__328360)
{if((function (){var or__3824__auto____328361 = (G__328359__328360.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____328361)
{return or__3824__auto____328361;
} else
{return G__328359__328360.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__328359__328360.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__328359__328360);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__328359__328360);
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
var xl__328366 = cljs.core.count.call(null,xs);
var yl__328367 = cljs.core.count.call(null,ys);
if((xl__328366 < yl__328367))
{return -1;
} else
{if((xl__328366 > yl__328367))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__328366,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__328368 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____328369 = (d__328368 === 0);
if(and__3822__auto____328369)
{return ((n + 1) < len);
} else
{return and__3822__auto____328369;
}
})())
{{
var G__328370 = xs;
var G__328371 = ys;
var G__328372 = len;
var G__328373 = (n + 1);
xs = G__328370;
ys = G__328371;
len = G__328372;
n = G__328373;
continue;
}
} else
{return d__328368;
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
var r__328375 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__328375))
{return r__328375;
} else
{if(cljs.core.truth_(r__328375))
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
{var a__328377 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__328377,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__328377);
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
var temp__3971__auto____328383 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____328383)
{var s__328384 = temp__3971__auto____328383;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__328384),cljs.core.next.call(null,s__328384));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__328385 = val;
var coll__328386 = cljs.core.seq.call(null,coll);
while(true){
if(coll__328386)
{var nval__328387 = f.call(null,val__328385,cljs.core.first.call(null,coll__328386));
if(cljs.core.reduced_QMARK_.call(null,nval__328387))
{return cljs.core.deref.call(null,nval__328387);
} else
{{
var G__328388 = nval__328387;
var G__328389 = cljs.core.next.call(null,coll__328386);
val__328385 = G__328388;
coll__328386 = G__328389;
continue;
}
}
} else
{return val__328385;
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
var a__328391 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__328391);
return cljs.core.vec.call(null,a__328391);
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
if((function (){var G__328398__328399 = coll;
if(G__328398__328399)
{if((function (){var or__3824__auto____328400 = (G__328398__328399.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____328400)
{return or__3824__auto____328400;
} else
{return G__328398__328399.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__328398__328399.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__328398__328399);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__328398__328399);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__328401__328402 = coll;
if(G__328401__328402)
{if((function (){var or__3824__auto____328403 = (G__328401__328402.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____328403)
{return or__3824__auto____328403;
} else
{return G__328401__328402.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__328401__328402.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__328401__328402);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__328401__328402);
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
var G__328404__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__328404 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328404__delegate.call(this, x, y, more);
};
G__328404.cljs$lang$maxFixedArity = 2;
G__328404.cljs$lang$applyTo = (function (arglist__328405){
var x = cljs.core.first(arglist__328405);
var y = cljs.core.first(cljs.core.next(arglist__328405));
var more = cljs.core.rest(cljs.core.next(arglist__328405));
return G__328404__delegate(x, y, more);
});
G__328404.cljs$lang$arity$variadic = G__328404__delegate;
return G__328404;
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
var G__328406__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__328406 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328406__delegate.call(this, x, y, more);
};
G__328406.cljs$lang$maxFixedArity = 2;
G__328406.cljs$lang$applyTo = (function (arglist__328407){
var x = cljs.core.first(arglist__328407);
var y = cljs.core.first(cljs.core.next(arglist__328407));
var more = cljs.core.rest(cljs.core.next(arglist__328407));
return G__328406__delegate(x, y, more);
});
G__328406.cljs$lang$arity$variadic = G__328406__delegate;
return G__328406;
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
var G__328408__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__328408 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328408__delegate.call(this, x, y, more);
};
G__328408.cljs$lang$maxFixedArity = 2;
G__328408.cljs$lang$applyTo = (function (arglist__328409){
var x = cljs.core.first(arglist__328409);
var y = cljs.core.first(cljs.core.next(arglist__328409));
var more = cljs.core.rest(cljs.core.next(arglist__328409));
return G__328408__delegate(x, y, more);
});
G__328408.cljs$lang$arity$variadic = G__328408__delegate;
return G__328408;
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
var G__328410__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__328410 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328410__delegate.call(this, x, y, more);
};
G__328410.cljs$lang$maxFixedArity = 2;
G__328410.cljs$lang$applyTo = (function (arglist__328411){
var x = cljs.core.first(arglist__328411);
var y = cljs.core.first(cljs.core.next(arglist__328411));
var more = cljs.core.rest(cljs.core.next(arglist__328411));
return G__328410__delegate(x, y, more);
});
G__328410.cljs$lang$arity$variadic = G__328410__delegate;
return G__328410;
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
var G__328412__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__328413 = y;
var G__328414 = cljs.core.first.call(null,more);
var G__328415 = cljs.core.next.call(null,more);
x = G__328413;
y = G__328414;
more = G__328415;
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
var G__328412 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328412__delegate.call(this, x, y, more);
};
G__328412.cljs$lang$maxFixedArity = 2;
G__328412.cljs$lang$applyTo = (function (arglist__328416){
var x = cljs.core.first(arglist__328416);
var y = cljs.core.first(cljs.core.next(arglist__328416));
var more = cljs.core.rest(cljs.core.next(arglist__328416));
return G__328412__delegate(x, y, more);
});
G__328412.cljs$lang$arity$variadic = G__328412__delegate;
return G__328412;
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
var G__328417__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__328418 = y;
var G__328419 = cljs.core.first.call(null,more);
var G__328420 = cljs.core.next.call(null,more);
x = G__328418;
y = G__328419;
more = G__328420;
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
var G__328417 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328417__delegate.call(this, x, y, more);
};
G__328417.cljs$lang$maxFixedArity = 2;
G__328417.cljs$lang$applyTo = (function (arglist__328421){
var x = cljs.core.first(arglist__328421);
var y = cljs.core.first(cljs.core.next(arglist__328421));
var more = cljs.core.rest(cljs.core.next(arglist__328421));
return G__328417__delegate(x, y, more);
});
G__328417.cljs$lang$arity$variadic = G__328417__delegate;
return G__328417;
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
var G__328422__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__328423 = y;
var G__328424 = cljs.core.first.call(null,more);
var G__328425 = cljs.core.next.call(null,more);
x = G__328423;
y = G__328424;
more = G__328425;
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
var G__328422 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328422__delegate.call(this, x, y, more);
};
G__328422.cljs$lang$maxFixedArity = 2;
G__328422.cljs$lang$applyTo = (function (arglist__328426){
var x = cljs.core.first(arglist__328426);
var y = cljs.core.first(cljs.core.next(arglist__328426));
var more = cljs.core.rest(cljs.core.next(arglist__328426));
return G__328422__delegate(x, y, more);
});
G__328422.cljs$lang$arity$variadic = G__328422__delegate;
return G__328422;
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
var G__328427__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__328428 = y;
var G__328429 = cljs.core.first.call(null,more);
var G__328430 = cljs.core.next.call(null,more);
x = G__328428;
y = G__328429;
more = G__328430;
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
var G__328427 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328427__delegate.call(this, x, y, more);
};
G__328427.cljs$lang$maxFixedArity = 2;
G__328427.cljs$lang$applyTo = (function (arglist__328431){
var x = cljs.core.first(arglist__328431);
var y = cljs.core.first(cljs.core.next(arglist__328431));
var more = cljs.core.rest(cljs.core.next(arglist__328431));
return G__328427__delegate(x, y, more);
});
G__328427.cljs$lang$arity$variadic = G__328427__delegate;
return G__328427;
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
var G__328432__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__328432 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328432__delegate.call(this, x, y, more);
};
G__328432.cljs$lang$maxFixedArity = 2;
G__328432.cljs$lang$applyTo = (function (arglist__328433){
var x = cljs.core.first(arglist__328433);
var y = cljs.core.first(cljs.core.next(arglist__328433));
var more = cljs.core.rest(cljs.core.next(arglist__328433));
return G__328432__delegate(x, y, more);
});
G__328432.cljs$lang$arity$variadic = G__328432__delegate;
return G__328432;
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
var G__328434__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__328434 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328434__delegate.call(this, x, y, more);
};
G__328434.cljs$lang$maxFixedArity = 2;
G__328434.cljs$lang$applyTo = (function (arglist__328435){
var x = cljs.core.first(arglist__328435);
var y = cljs.core.first(cljs.core.next(arglist__328435));
var more = cljs.core.rest(cljs.core.next(arglist__328435));
return G__328434__delegate(x, y, more);
});
G__328434.cljs$lang$arity$variadic = G__328434__delegate;
return G__328434;
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
var rem__328437 = (n % d);
return cljs.core.fix.call(null,((n - rem__328437) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__328439 = cljs.core.quot.call(null,n,d);
return (n - (d * q__328439));
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
var v__328442 = (v - ((v >> 1) & 1431655765));
var v__328443 = ((v__328442 & 858993459) + ((v__328442 >> 2) & 858993459));
return ((((v__328443 + (v__328443 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__328444__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__328445 = y;
var G__328446 = cljs.core.first.call(null,more);
var G__328447 = cljs.core.next.call(null,more);
x = G__328445;
y = G__328446;
more = G__328447;
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
var G__328444 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328444__delegate.call(this, x, y, more);
};
G__328444.cljs$lang$maxFixedArity = 2;
G__328444.cljs$lang$applyTo = (function (arglist__328448){
var x = cljs.core.first(arglist__328448);
var y = cljs.core.first(cljs.core.next(arglist__328448));
var more = cljs.core.rest(cljs.core.next(arglist__328448));
return G__328444__delegate(x, y, more);
});
G__328444.cljs$lang$arity$variadic = G__328444__delegate;
return G__328444;
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
var n__328452 = n;
var xs__328453 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____328454 = xs__328453;
if(and__3822__auto____328454)
{return (n__328452 > 0);
} else
{return and__3822__auto____328454;
}
})()))
{{
var G__328455 = (n__328452 - 1);
var G__328456 = cljs.core.next.call(null,xs__328453);
n__328452 = G__328455;
xs__328453 = G__328456;
continue;
}
} else
{return xs__328453;
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
var G__328457__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__328458 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__328459 = cljs.core.next.call(null,more);
sb = G__328458;
more = G__328459;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__328457 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__328457__delegate.call(this, x, ys);
};
G__328457.cljs$lang$maxFixedArity = 1;
G__328457.cljs$lang$applyTo = (function (arglist__328460){
var x = cljs.core.first(arglist__328460);
var ys = cljs.core.rest(arglist__328460);
return G__328457__delegate(x, ys);
});
G__328457.cljs$lang$arity$variadic = G__328457__delegate;
return G__328457;
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
var G__328461__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__328462 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__328463 = cljs.core.next.call(null,more);
sb = G__328462;
more = G__328463;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__328461 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__328461__delegate.call(this, x, ys);
};
G__328461.cljs$lang$maxFixedArity = 1;
G__328461.cljs$lang$applyTo = (function (arglist__328464){
var x = cljs.core.first(arglist__328464);
var ys = cljs.core.rest(arglist__328464);
return G__328461__delegate(x, ys);
});
G__328461.cljs$lang$arity$variadic = G__328461__delegate;
return G__328461;
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
var args__328468 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____328467 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____328467)
{return or__3824__auto____328467;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__328468);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__328469){
var fmt = cljs.core.first(arglist__328469);
var args = cljs.core.rest(arglist__328469);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__328472 = cljs.core.seq.call(null,x);
var ys__328473 = cljs.core.seq.call(null,y);
while(true){
if((xs__328472 == null))
{return (ys__328473 == null);
} else
{if((ys__328473 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__328472),cljs.core.first.call(null,ys__328473)))
{{
var G__328474 = cljs.core.next.call(null,xs__328472);
var G__328475 = cljs.core.next.call(null,ys__328473);
xs__328472 = G__328474;
ys__328473 = G__328475;
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
return cljs.core.reduce.call(null,(function (p1__328476_SHARP_,p2__328477_SHARP_){
return cljs.core.hash_combine.call(null,p1__328476_SHARP_,cljs.core.hash.call(null,p2__328477_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__328481 = 0;
var s__328482 = cljs.core.seq.call(null,m);
while(true){
if(s__328482)
{var e__328483 = cljs.core.first.call(null,s__328482);
{
var G__328484 = ((h__328481 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__328483)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__328483)))) % 4503599627370496);
var G__328485 = cljs.core.next.call(null,s__328482);
h__328481 = G__328484;
s__328482 = G__328485;
continue;
}
} else
{return h__328481;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__328489 = 0;
var s__328490 = cljs.core.seq.call(null,s);
while(true){
if(s__328490)
{var e__328491 = cljs.core.first.call(null,s__328490);
{
var G__328492 = ((h__328489 + cljs.core.hash.call(null,e__328491)) % 4503599627370496);
var G__328493 = cljs.core.next.call(null,s__328490);
h__328489 = G__328492;
s__328490 = G__328493;
continue;
}
} else
{return h__328489;
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
var G__328501__328502 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__328501__328502)
{var vec__328503__328504 = cljs.core.first.call(null,G__328501__328502);
var key_name__328505 = cljs.core.nth.call(null,vec__328503__328504,0,null);
var f__328506 = cljs.core.nth.call(null,vec__328503__328504,1,null);
var str_name__328507 = cljs.core.name.call(null,key_name__328505);
(obj[str_name__328507] = f__328506);
{
var G__328508 = cljs.core.next.call(null,G__328501__328502);
G__328501__328502 = G__328508;
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
var this__328509 = this;
var h__2203__auto____328510 = this__328509.__hash;
if(!((h__2203__auto____328510 == null)))
{return h__2203__auto____328510;
} else
{var h__2203__auto____328511 = cljs.core.hash_coll.call(null,coll);
this__328509.__hash = h__2203__auto____328511;
return h__2203__auto____328511;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__328512 = this;
if((this__328512.count === 1))
{return null;
} else
{return this__328512.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__328513 = this;
return (new cljs.core.List(this__328513.meta,o,coll,(this__328513.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__328514 = this;
var this__328515 = this;
return cljs.core.pr_str.call(null,this__328515);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__328516 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__328517 = this;
return this__328517.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__328518 = this;
return this__328518.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__328519 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__328520 = this;
return this__328520.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__328521 = this;
if((this__328521.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__328521.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__328522 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__328523 = this;
return (new cljs.core.List(meta,this__328523.first,this__328523.rest,this__328523.count,this__328523.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__328524 = this;
return this__328524.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__328525 = this;
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
var this__328526 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__328527 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__328528 = this;
return (new cljs.core.List(this__328528.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__328529 = this;
var this__328530 = this;
return cljs.core.pr_str.call(null,this__328530);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__328531 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__328532 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__328533 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__328534 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__328535 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__328536 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__328537 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__328538 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__328539 = this;
return this__328539.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__328540 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__328544__328545 = coll;
if(G__328544__328545)
{if((function (){var or__3824__auto____328546 = (G__328544__328545.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____328546)
{return or__3824__auto____328546;
} else
{return G__328544__328545.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__328544__328545.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__328544__328545);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__328544__328545);
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
var G__328547__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__328547 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__328547__delegate.call(this, x, y, z, items);
};
G__328547.cljs$lang$maxFixedArity = 3;
G__328547.cljs$lang$applyTo = (function (arglist__328548){
var x = cljs.core.first(arglist__328548);
var y = cljs.core.first(cljs.core.next(arglist__328548));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__328548)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__328548)));
return G__328547__delegate(x, y, z, items);
});
G__328547.cljs$lang$arity$variadic = G__328547__delegate;
return G__328547;
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
var this__328549 = this;
var h__2203__auto____328550 = this__328549.__hash;
if(!((h__2203__auto____328550 == null)))
{return h__2203__auto____328550;
} else
{var h__2203__auto____328551 = cljs.core.hash_coll.call(null,coll);
this__328549.__hash = h__2203__auto____328551;
return h__2203__auto____328551;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__328552 = this;
if((this__328552.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__328552.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__328553 = this;
return (new cljs.core.Cons(null,o,coll,this__328553.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__328554 = this;
var this__328555 = this;
return cljs.core.pr_str.call(null,this__328555);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__328556 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__328557 = this;
return this__328557.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__328558 = this;
if((this__328558.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__328558.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__328559 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__328560 = this;
return (new cljs.core.Cons(meta,this__328560.first,this__328560.rest,this__328560.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__328561 = this;
return this__328561.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__328562 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__328562.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____328567 = (coll == null);
if(or__3824__auto____328567)
{return or__3824__auto____328567;
} else
{var G__328568__328569 = coll;
if(G__328568__328569)
{if((function (){var or__3824__auto____328570 = (G__328568__328569.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____328570)
{return or__3824__auto____328570;
} else
{return G__328568__328569.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__328568__328569.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__328568__328569);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__328568__328569);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__328574__328575 = x;
if(G__328574__328575)
{if((function (){var or__3824__auto____328576 = (G__328574__328575.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____328576)
{return or__3824__auto____328576;
} else
{return G__328574__328575.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__328574__328575.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__328574__328575);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__328574__328575);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__328577 = null;
var G__328577__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__328577__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__328577 = function(string,f,start){
switch(arguments.length){
case 2:
return G__328577__2.call(this,string,f);
case 3:
return G__328577__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328577;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__328578 = null;
var G__328578__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__328578__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__328578 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__328578__2.call(this,string,k);
case 3:
return G__328578__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328578;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__328579 = null;
var G__328579__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__328579__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__328579 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__328579__2.call(this,string,n);
case 3:
return G__328579__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328579;
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
var G__328591 = null;
var G__328591__2 = (function (this_sym328582,coll){
var this__328584 = this;
var this_sym328582__328585 = this;
var ___328586 = this_sym328582__328585;
if((coll == null))
{return null;
} else
{var strobj__328587 = coll.strobj;
if((strobj__328587 == null))
{return cljs.core._lookup.call(null,coll,this__328584.k,null);
} else
{return (strobj__328587[this__328584.k]);
}
}
});
var G__328591__3 = (function (this_sym328583,coll,not_found){
var this__328584 = this;
var this_sym328583__328588 = this;
var ___328589 = this_sym328583__328588;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__328584.k,not_found);
}
});
G__328591 = function(this_sym328583,coll,not_found){
switch(arguments.length){
case 2:
return G__328591__2.call(this,this_sym328583,coll);
case 3:
return G__328591__3.call(this,this_sym328583,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328591;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym328580,args328581){
var this__328590 = this;
return this_sym328580.call.apply(this_sym328580,[this_sym328580].concat(args328581.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__328600 = null;
var G__328600__2 = (function (this_sym328594,coll){
var this_sym328594__328596 = this;
var this__328597 = this_sym328594__328596;
return cljs.core._lookup.call(null,coll,this__328597.toString(),null);
});
var G__328600__3 = (function (this_sym328595,coll,not_found){
var this_sym328595__328598 = this;
var this__328599 = this_sym328595__328598;
return cljs.core._lookup.call(null,coll,this__328599.toString(),not_found);
});
G__328600 = function(this_sym328595,coll,not_found){
switch(arguments.length){
case 2:
return G__328600__2.call(this,this_sym328595,coll);
case 3:
return G__328600__3.call(this,this_sym328595,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__328600;
})()
;
String.prototype.apply = (function (this_sym328592,args328593){
return this_sym328592.call.apply(this_sym328592,[this_sym328592].concat(args328593.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__328602 = lazy_seq.x;
if(lazy_seq.realized)
{return x__328602;
} else
{lazy_seq.x = x__328602.call(null);
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
var this__328603 = this;
var h__2203__auto____328604 = this__328603.__hash;
if(!((h__2203__auto____328604 == null)))
{return h__2203__auto____328604;
} else
{var h__2203__auto____328605 = cljs.core.hash_coll.call(null,coll);
this__328603.__hash = h__2203__auto____328605;
return h__2203__auto____328605;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__328606 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__328607 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__328608 = this;
var this__328609 = this;
return cljs.core.pr_str.call(null,this__328609);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__328610 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__328611 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__328612 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__328613 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__328614 = this;
return (new cljs.core.LazySeq(meta,this__328614.realized,this__328614.x,this__328614.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__328615 = this;
return this__328615.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__328616 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__328616.meta);
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
var this__328617 = this;
return this__328617.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__328618 = this;
var ___328619 = this;
(this__328618.buf[this__328618.end] = o);
return this__328618.end = (this__328618.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__328620 = this;
var ___328621 = this;
var ret__328622 = (new cljs.core.ArrayChunk(this__328620.buf,0,this__328620.end));
this__328620.buf = null;
return ret__328622;
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
var this__328623 = this;
return cljs.core.array_reduce.call(null,this__328623.arr,f,(this__328623.arr[this__328623.off]),(this__328623.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__328624 = this;
return cljs.core.array_reduce.call(null,this__328624.arr,f,start,this__328624.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__328625 = this;
if((this__328625.off === this__328625.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__328625.arr,(this__328625.off + 1),this__328625.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__328626 = this;
return (this__328626.arr[(this__328626.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__328627 = this;
if((function (){var and__3822__auto____328628 = (i >= 0);
if(and__3822__auto____328628)
{return (i < (this__328627.end - this__328627.off));
} else
{return and__3822__auto____328628;
}
})())
{return (this__328627.arr[(this__328627.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__328629 = this;
return (this__328629.end - this__328629.off);
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
var this__328630 = this;
var h__2203__auto____328631 = this__328630.__hash;
if(!((h__2203__auto____328631 == null)))
{return h__2203__auto____328631;
} else
{var h__2203__auto____328632 = cljs.core.hash_coll.call(null,coll);
this__328630.__hash = h__2203__auto____328632;
return h__2203__auto____328632;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__328633 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__328634 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__328635 = this;
return cljs.core._nth.call(null,this__328635.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__328636 = this;
if((cljs.core._count.call(null,this__328636.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__328636.chunk),this__328636.more,this__328636.meta,null));
} else
{if((this__328636.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__328636.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__328637 = this;
if((this__328637.more == null))
{return null;
} else
{return this__328637.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__328638 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__328639 = this;
return (new cljs.core.ChunkedCons(this__328639.chunk,this__328639.more,m,this__328639.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__328640 = this;
return this__328640.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__328641 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__328641.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__328642 = this;
return this__328642.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__328643 = this;
if((this__328643.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__328643.more;
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
if((function (){var G__328647__328648 = s;
if(G__328647__328648)
{if((function (){var or__3824__auto____328649 = (G__328647__328648.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____328649)
{return or__3824__auto____328649;
} else
{return G__328647__328648.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__328647__328648.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__328647__328648);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__328647__328648);
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
var ary__328652 = [];
var s__328653 = s;
while(true){
if(cljs.core.seq.call(null,s__328653))
{ary__328652.push(cljs.core.first.call(null,s__328653));
{
var G__328654 = cljs.core.next.call(null,s__328653);
s__328653 = G__328654;
continue;
}
} else
{return ary__328652;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__328658 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__328659 = 0;
var xs__328660 = cljs.core.seq.call(null,coll);
while(true){
if(xs__328660)
{(ret__328658[i__328659] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__328660)));
{
var G__328661 = (i__328659 + 1);
var G__328662 = cljs.core.next.call(null,xs__328660);
i__328659 = G__328661;
xs__328660 = G__328662;
continue;
}
} else
{}
break;
}
return ret__328658;
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
var a__328670 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__328671 = cljs.core.seq.call(null,init_val_or_seq);
var i__328672 = 0;
var s__328673 = s__328671;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____328674 = s__328673;
if(and__3822__auto____328674)
{return (i__328672 < size);
} else
{return and__3822__auto____328674;
}
})()))
{(a__328670[i__328672] = cljs.core.first.call(null,s__328673));
{
var G__328677 = (i__328672 + 1);
var G__328678 = cljs.core.next.call(null,s__328673);
i__328672 = G__328677;
s__328673 = G__328678;
continue;
}
} else
{return a__328670;
}
break;
}
} else
{var n__2549__auto____328675 = size;
var i__328676 = 0;
while(true){
if((i__328676 < n__2549__auto____328675))
{(a__328670[i__328676] = init_val_or_seq);
{
var G__328679 = (i__328676 + 1);
i__328676 = G__328679;
continue;
}
} else
{}
break;
}
return a__328670;
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
var a__328687 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__328688 = cljs.core.seq.call(null,init_val_or_seq);
var i__328689 = 0;
var s__328690 = s__328688;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____328691 = s__328690;
if(and__3822__auto____328691)
{return (i__328689 < size);
} else
{return and__3822__auto____328691;
}
})()))
{(a__328687[i__328689] = cljs.core.first.call(null,s__328690));
{
var G__328694 = (i__328689 + 1);
var G__328695 = cljs.core.next.call(null,s__328690);
i__328689 = G__328694;
s__328690 = G__328695;
continue;
}
} else
{return a__328687;
}
break;
}
} else
{var n__2549__auto____328692 = size;
var i__328693 = 0;
while(true){
if((i__328693 < n__2549__auto____328692))
{(a__328687[i__328693] = init_val_or_seq);
{
var G__328696 = (i__328693 + 1);
i__328693 = G__328696;
continue;
}
} else
{}
break;
}
return a__328687;
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
var a__328704 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__328705 = cljs.core.seq.call(null,init_val_or_seq);
var i__328706 = 0;
var s__328707 = s__328705;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____328708 = s__328707;
if(and__3822__auto____328708)
{return (i__328706 < size);
} else
{return and__3822__auto____328708;
}
})()))
{(a__328704[i__328706] = cljs.core.first.call(null,s__328707));
{
var G__328711 = (i__328706 + 1);
var G__328712 = cljs.core.next.call(null,s__328707);
i__328706 = G__328711;
s__328707 = G__328712;
continue;
}
} else
{return a__328704;
}
break;
}
} else
{var n__2549__auto____328709 = size;
var i__328710 = 0;
while(true){
if((i__328710 < n__2549__auto____328709))
{(a__328704[i__328710] = init_val_or_seq);
{
var G__328713 = (i__328710 + 1);
i__328710 = G__328713;
continue;
}
} else
{}
break;
}
return a__328704;
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
{var s__328718 = s;
var i__328719 = n;
var sum__328720 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____328721 = (i__328719 > 0);
if(and__3822__auto____328721)
{return cljs.core.seq.call(null,s__328718);
} else
{return and__3822__auto____328721;
}
})()))
{{
var G__328722 = cljs.core.next.call(null,s__328718);
var G__328723 = (i__328719 - 1);
var G__328724 = (sum__328720 + 1);
s__328718 = G__328722;
i__328719 = G__328723;
sum__328720 = G__328724;
continue;
}
} else
{return sum__328720;
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
var s__328729 = cljs.core.seq.call(null,x);
if(s__328729)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__328729))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__328729),concat.call(null,cljs.core.chunk_rest.call(null,s__328729),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__328729),concat.call(null,cljs.core.rest.call(null,s__328729),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__328733__delegate = function (x,y,zs){
var cat__328732 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__328731 = cljs.core.seq.call(null,xys);
if(xys__328731)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__328731))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__328731),cat.call(null,cljs.core.chunk_rest.call(null,xys__328731),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__328731),cat.call(null,cljs.core.rest.call(null,xys__328731),zs));
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
return cat__328732.call(null,concat.call(null,x,y),zs);
};
var G__328733 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328733__delegate.call(this, x, y, zs);
};
G__328733.cljs$lang$maxFixedArity = 2;
G__328733.cljs$lang$applyTo = (function (arglist__328734){
var x = cljs.core.first(arglist__328734);
var y = cljs.core.first(cljs.core.next(arglist__328734));
var zs = cljs.core.rest(cljs.core.next(arglist__328734));
return G__328733__delegate(x, y, zs);
});
G__328733.cljs$lang$arity$variadic = G__328733__delegate;
return G__328733;
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
var G__328735__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__328735 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__328735__delegate.call(this, a, b, c, d, more);
};
G__328735.cljs$lang$maxFixedArity = 4;
G__328735.cljs$lang$applyTo = (function (arglist__328736){
var a = cljs.core.first(arglist__328736);
var b = cljs.core.first(cljs.core.next(arglist__328736));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__328736)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__328736))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__328736))));
return G__328735__delegate(a, b, c, d, more);
});
G__328735.cljs$lang$arity$variadic = G__328735__delegate;
return G__328735;
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
var args__328778 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__328779 = cljs.core._first.call(null,args__328778);
var args__328780 = cljs.core._rest.call(null,args__328778);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__328779);
} else
{return f.call(null,a__328779);
}
} else
{var b__328781 = cljs.core._first.call(null,args__328780);
var args__328782 = cljs.core._rest.call(null,args__328780);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__328779,b__328781);
} else
{return f.call(null,a__328779,b__328781);
}
} else
{var c__328783 = cljs.core._first.call(null,args__328782);
var args__328784 = cljs.core._rest.call(null,args__328782);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__328779,b__328781,c__328783);
} else
{return f.call(null,a__328779,b__328781,c__328783);
}
} else
{var d__328785 = cljs.core._first.call(null,args__328784);
var args__328786 = cljs.core._rest.call(null,args__328784);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__328779,b__328781,c__328783,d__328785);
} else
{return f.call(null,a__328779,b__328781,c__328783,d__328785);
}
} else
{var e__328787 = cljs.core._first.call(null,args__328786);
var args__328788 = cljs.core._rest.call(null,args__328786);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__328779,b__328781,c__328783,d__328785,e__328787);
} else
{return f.call(null,a__328779,b__328781,c__328783,d__328785,e__328787);
}
} else
{var f__328789 = cljs.core._first.call(null,args__328788);
var args__328790 = cljs.core._rest.call(null,args__328788);
if((argc === 6))
{if(f__328789.cljs$lang$arity$6)
{return f__328789.cljs$lang$arity$6(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789);
}
} else
{var g__328791 = cljs.core._first.call(null,args__328790);
var args__328792 = cljs.core._rest.call(null,args__328790);
if((argc === 7))
{if(f__328789.cljs$lang$arity$7)
{return f__328789.cljs$lang$arity$7(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791);
}
} else
{var h__328793 = cljs.core._first.call(null,args__328792);
var args__328794 = cljs.core._rest.call(null,args__328792);
if((argc === 8))
{if(f__328789.cljs$lang$arity$8)
{return f__328789.cljs$lang$arity$8(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793);
}
} else
{var i__328795 = cljs.core._first.call(null,args__328794);
var args__328796 = cljs.core._rest.call(null,args__328794);
if((argc === 9))
{if(f__328789.cljs$lang$arity$9)
{return f__328789.cljs$lang$arity$9(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795);
}
} else
{var j__328797 = cljs.core._first.call(null,args__328796);
var args__328798 = cljs.core._rest.call(null,args__328796);
if((argc === 10))
{if(f__328789.cljs$lang$arity$10)
{return f__328789.cljs$lang$arity$10(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797);
}
} else
{var k__328799 = cljs.core._first.call(null,args__328798);
var args__328800 = cljs.core._rest.call(null,args__328798);
if((argc === 11))
{if(f__328789.cljs$lang$arity$11)
{return f__328789.cljs$lang$arity$11(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799);
}
} else
{var l__328801 = cljs.core._first.call(null,args__328800);
var args__328802 = cljs.core._rest.call(null,args__328800);
if((argc === 12))
{if(f__328789.cljs$lang$arity$12)
{return f__328789.cljs$lang$arity$12(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801);
}
} else
{var m__328803 = cljs.core._first.call(null,args__328802);
var args__328804 = cljs.core._rest.call(null,args__328802);
if((argc === 13))
{if(f__328789.cljs$lang$arity$13)
{return f__328789.cljs$lang$arity$13(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803);
}
} else
{var n__328805 = cljs.core._first.call(null,args__328804);
var args__328806 = cljs.core._rest.call(null,args__328804);
if((argc === 14))
{if(f__328789.cljs$lang$arity$14)
{return f__328789.cljs$lang$arity$14(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805);
}
} else
{var o__328807 = cljs.core._first.call(null,args__328806);
var args__328808 = cljs.core._rest.call(null,args__328806);
if((argc === 15))
{if(f__328789.cljs$lang$arity$15)
{return f__328789.cljs$lang$arity$15(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805,o__328807);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805,o__328807);
}
} else
{var p__328809 = cljs.core._first.call(null,args__328808);
var args__328810 = cljs.core._rest.call(null,args__328808);
if((argc === 16))
{if(f__328789.cljs$lang$arity$16)
{return f__328789.cljs$lang$arity$16(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805,o__328807,p__328809);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805,o__328807,p__328809);
}
} else
{var q__328811 = cljs.core._first.call(null,args__328810);
var args__328812 = cljs.core._rest.call(null,args__328810);
if((argc === 17))
{if(f__328789.cljs$lang$arity$17)
{return f__328789.cljs$lang$arity$17(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805,o__328807,p__328809,q__328811);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805,o__328807,p__328809,q__328811);
}
} else
{var r__328813 = cljs.core._first.call(null,args__328812);
var args__328814 = cljs.core._rest.call(null,args__328812);
if((argc === 18))
{if(f__328789.cljs$lang$arity$18)
{return f__328789.cljs$lang$arity$18(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805,o__328807,p__328809,q__328811,r__328813);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805,o__328807,p__328809,q__328811,r__328813);
}
} else
{var s__328815 = cljs.core._first.call(null,args__328814);
var args__328816 = cljs.core._rest.call(null,args__328814);
if((argc === 19))
{if(f__328789.cljs$lang$arity$19)
{return f__328789.cljs$lang$arity$19(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805,o__328807,p__328809,q__328811,r__328813,s__328815);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805,o__328807,p__328809,q__328811,r__328813,s__328815);
}
} else
{var t__328817 = cljs.core._first.call(null,args__328816);
var args__328818 = cljs.core._rest.call(null,args__328816);
if((argc === 20))
{if(f__328789.cljs$lang$arity$20)
{return f__328789.cljs$lang$arity$20(a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805,o__328807,p__328809,q__328811,r__328813,s__328815,t__328817);
} else
{return f__328789.call(null,a__328779,b__328781,c__328783,d__328785,e__328787,f__328789,g__328791,h__328793,i__328795,j__328797,k__328799,l__328801,m__328803,n__328805,o__328807,p__328809,q__328811,r__328813,s__328815,t__328817);
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
var fixed_arity__328833 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__328834 = cljs.core.bounded_count.call(null,args,(fixed_arity__328833 + 1));
if((bc__328834 <= fixed_arity__328833))
{return cljs.core.apply_to.call(null,f,bc__328834,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__328835 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__328836 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__328837 = cljs.core.bounded_count.call(null,arglist__328835,(fixed_arity__328836 + 1));
if((bc__328837 <= fixed_arity__328836))
{return cljs.core.apply_to.call(null,f,bc__328837,arglist__328835);
} else
{return f.cljs$lang$applyTo(arglist__328835);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__328835));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__328838 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__328839 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__328840 = cljs.core.bounded_count.call(null,arglist__328838,(fixed_arity__328839 + 1));
if((bc__328840 <= fixed_arity__328839))
{return cljs.core.apply_to.call(null,f,bc__328840,arglist__328838);
} else
{return f.cljs$lang$applyTo(arglist__328838);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__328838));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__328841 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__328842 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__328843 = cljs.core.bounded_count.call(null,arglist__328841,(fixed_arity__328842 + 1));
if((bc__328843 <= fixed_arity__328842))
{return cljs.core.apply_to.call(null,f,bc__328843,arglist__328841);
} else
{return f.cljs$lang$applyTo(arglist__328841);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__328841));
}
});
var apply__6 = (function() { 
var G__328847__delegate = function (f,a,b,c,d,args){
var arglist__328844 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__328845 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__328846 = cljs.core.bounded_count.call(null,arglist__328844,(fixed_arity__328845 + 1));
if((bc__328846 <= fixed_arity__328845))
{return cljs.core.apply_to.call(null,f,bc__328846,arglist__328844);
} else
{return f.cljs$lang$applyTo(arglist__328844);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__328844));
}
};
var G__328847 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__328847__delegate.call(this, f, a, b, c, d, args);
};
G__328847.cljs$lang$maxFixedArity = 5;
G__328847.cljs$lang$applyTo = (function (arglist__328848){
var f = cljs.core.first(arglist__328848);
var a = cljs.core.first(cljs.core.next(arglist__328848));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__328848)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__328848))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__328848)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__328848)))));
return G__328847__delegate(f, a, b, c, d, args);
});
G__328847.cljs$lang$arity$variadic = G__328847__delegate;
return G__328847;
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
vary_meta.cljs$lang$applyTo = (function (arglist__328849){
var obj = cljs.core.first(arglist__328849);
var f = cljs.core.first(cljs.core.next(arglist__328849));
var args = cljs.core.rest(cljs.core.next(arglist__328849));
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
var G__328850__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__328850 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328850__delegate.call(this, x, y, more);
};
G__328850.cljs$lang$maxFixedArity = 2;
G__328850.cljs$lang$applyTo = (function (arglist__328851){
var x = cljs.core.first(arglist__328851);
var y = cljs.core.first(cljs.core.next(arglist__328851));
var more = cljs.core.rest(cljs.core.next(arglist__328851));
return G__328850__delegate(x, y, more);
});
G__328850.cljs$lang$arity$variadic = G__328850__delegate;
return G__328850;
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
var G__328852 = pred;
var G__328853 = cljs.core.next.call(null,coll);
pred = G__328852;
coll = G__328853;
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
{var or__3824__auto____328855 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____328855))
{return or__3824__auto____328855;
} else
{{
var G__328856 = pred;
var G__328857 = cljs.core.next.call(null,coll);
pred = G__328856;
coll = G__328857;
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
var G__328858 = null;
var G__328858__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__328858__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__328858__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__328858__3 = (function() { 
var G__328859__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__328859 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__328859__delegate.call(this, x, y, zs);
};
G__328859.cljs$lang$maxFixedArity = 2;
G__328859.cljs$lang$applyTo = (function (arglist__328860){
var x = cljs.core.first(arglist__328860);
var y = cljs.core.first(cljs.core.next(arglist__328860));
var zs = cljs.core.rest(cljs.core.next(arglist__328860));
return G__328859__delegate(x, y, zs);
});
G__328859.cljs$lang$arity$variadic = G__328859__delegate;
return G__328859;
})()
;
G__328858 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__328858__0.call(this);
case 1:
return G__328858__1.call(this,x);
case 2:
return G__328858__2.call(this,x,y);
default:
return G__328858__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__328858.cljs$lang$maxFixedArity = 2;
G__328858.cljs$lang$applyTo = G__328858__3.cljs$lang$applyTo;
return G__328858;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__328861__delegate = function (args){
return x;
};
var G__328861 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__328861__delegate.call(this, args);
};
G__328861.cljs$lang$maxFixedArity = 0;
G__328861.cljs$lang$applyTo = (function (arglist__328862){
var args = cljs.core.seq(arglist__328862);;
return G__328861__delegate(args);
});
G__328861.cljs$lang$arity$variadic = G__328861__delegate;
return G__328861;
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
var G__328869 = null;
var G__328869__0 = (function (){
return f.call(null,g.call(null));
});
var G__328869__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__328869__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__328869__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__328869__4 = (function() { 
var G__328870__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__328870 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__328870__delegate.call(this, x, y, z, args);
};
G__328870.cljs$lang$maxFixedArity = 3;
G__328870.cljs$lang$applyTo = (function (arglist__328871){
var x = cljs.core.first(arglist__328871);
var y = cljs.core.first(cljs.core.next(arglist__328871));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__328871)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__328871)));
return G__328870__delegate(x, y, z, args);
});
G__328870.cljs$lang$arity$variadic = G__328870__delegate;
return G__328870;
})()
;
G__328869 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__328869__0.call(this);
case 1:
return G__328869__1.call(this,x);
case 2:
return G__328869__2.call(this,x,y);
case 3:
return G__328869__3.call(this,x,y,z);
default:
return G__328869__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__328869.cljs$lang$maxFixedArity = 3;
G__328869.cljs$lang$applyTo = G__328869__4.cljs$lang$applyTo;
return G__328869;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__328872 = null;
var G__328872__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__328872__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__328872__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__328872__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__328872__4 = (function() { 
var G__328873__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__328873 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__328873__delegate.call(this, x, y, z, args);
};
G__328873.cljs$lang$maxFixedArity = 3;
G__328873.cljs$lang$applyTo = (function (arglist__328874){
var x = cljs.core.first(arglist__328874);
var y = cljs.core.first(cljs.core.next(arglist__328874));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__328874)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__328874)));
return G__328873__delegate(x, y, z, args);
});
G__328873.cljs$lang$arity$variadic = G__328873__delegate;
return G__328873;
})()
;
G__328872 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__328872__0.call(this);
case 1:
return G__328872__1.call(this,x);
case 2:
return G__328872__2.call(this,x,y);
case 3:
return G__328872__3.call(this,x,y,z);
default:
return G__328872__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__328872.cljs$lang$maxFixedArity = 3;
G__328872.cljs$lang$applyTo = G__328872__4.cljs$lang$applyTo;
return G__328872;
})()
});
var comp__4 = (function() { 
var G__328875__delegate = function (f1,f2,f3,fs){
var fs__328866 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__328876__delegate = function (args){
var ret__328867 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__328866),args);
var fs__328868 = cljs.core.next.call(null,fs__328866);
while(true){
if(fs__328868)
{{
var G__328877 = cljs.core.first.call(null,fs__328868).call(null,ret__328867);
var G__328878 = cljs.core.next.call(null,fs__328868);
ret__328867 = G__328877;
fs__328868 = G__328878;
continue;
}
} else
{return ret__328867;
}
break;
}
};
var G__328876 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__328876__delegate.call(this, args);
};
G__328876.cljs$lang$maxFixedArity = 0;
G__328876.cljs$lang$applyTo = (function (arglist__328879){
var args = cljs.core.seq(arglist__328879);;
return G__328876__delegate(args);
});
G__328876.cljs$lang$arity$variadic = G__328876__delegate;
return G__328876;
})()
;
};
var G__328875 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__328875__delegate.call(this, f1, f2, f3, fs);
};
G__328875.cljs$lang$maxFixedArity = 3;
G__328875.cljs$lang$applyTo = (function (arglist__328880){
var f1 = cljs.core.first(arglist__328880);
var f2 = cljs.core.first(cljs.core.next(arglist__328880));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__328880)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__328880)));
return G__328875__delegate(f1, f2, f3, fs);
});
G__328875.cljs$lang$arity$variadic = G__328875__delegate;
return G__328875;
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
var G__328881__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__328881 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__328881__delegate.call(this, args);
};
G__328881.cljs$lang$maxFixedArity = 0;
G__328881.cljs$lang$applyTo = (function (arglist__328882){
var args = cljs.core.seq(arglist__328882);;
return G__328881__delegate(args);
});
G__328881.cljs$lang$arity$variadic = G__328881__delegate;
return G__328881;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__328883__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__328883 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__328883__delegate.call(this, args);
};
G__328883.cljs$lang$maxFixedArity = 0;
G__328883.cljs$lang$applyTo = (function (arglist__328884){
var args = cljs.core.seq(arglist__328884);;
return G__328883__delegate(args);
});
G__328883.cljs$lang$arity$variadic = G__328883__delegate;
return G__328883;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__328885__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__328885 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__328885__delegate.call(this, args);
};
G__328885.cljs$lang$maxFixedArity = 0;
G__328885.cljs$lang$applyTo = (function (arglist__328886){
var args = cljs.core.seq(arglist__328886);;
return G__328885__delegate(args);
});
G__328885.cljs$lang$arity$variadic = G__328885__delegate;
return G__328885;
})()
;
});
var partial__5 = (function() { 
var G__328887__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__328888__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__328888 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__328888__delegate.call(this, args);
};
G__328888.cljs$lang$maxFixedArity = 0;
G__328888.cljs$lang$applyTo = (function (arglist__328889){
var args = cljs.core.seq(arglist__328889);;
return G__328888__delegate(args);
});
G__328888.cljs$lang$arity$variadic = G__328888__delegate;
return G__328888;
})()
;
};
var G__328887 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__328887__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__328887.cljs$lang$maxFixedArity = 4;
G__328887.cljs$lang$applyTo = (function (arglist__328890){
var f = cljs.core.first(arglist__328890);
var arg1 = cljs.core.first(cljs.core.next(arglist__328890));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__328890)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__328890))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__328890))));
return G__328887__delegate(f, arg1, arg2, arg3, more);
});
G__328887.cljs$lang$arity$variadic = G__328887__delegate;
return G__328887;
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
var G__328891 = null;
var G__328891__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__328891__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__328891__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__328891__4 = (function() { 
var G__328892__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__328892 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__328892__delegate.call(this, a, b, c, ds);
};
G__328892.cljs$lang$maxFixedArity = 3;
G__328892.cljs$lang$applyTo = (function (arglist__328893){
var a = cljs.core.first(arglist__328893);
var b = cljs.core.first(cljs.core.next(arglist__328893));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__328893)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__328893)));
return G__328892__delegate(a, b, c, ds);
});
G__328892.cljs$lang$arity$variadic = G__328892__delegate;
return G__328892;
})()
;
G__328891 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__328891__1.call(this,a);
case 2:
return G__328891__2.call(this,a,b);
case 3:
return G__328891__3.call(this,a,b,c);
default:
return G__328891__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__328891.cljs$lang$maxFixedArity = 3;
G__328891.cljs$lang$applyTo = G__328891__4.cljs$lang$applyTo;
return G__328891;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__328894 = null;
var G__328894__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__328894__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__328894__4 = (function() { 
var G__328895__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__328895 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__328895__delegate.call(this, a, b, c, ds);
};
G__328895.cljs$lang$maxFixedArity = 3;
G__328895.cljs$lang$applyTo = (function (arglist__328896){
var a = cljs.core.first(arglist__328896);
var b = cljs.core.first(cljs.core.next(arglist__328896));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__328896)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__328896)));
return G__328895__delegate(a, b, c, ds);
});
G__328895.cljs$lang$arity$variadic = G__328895__delegate;
return G__328895;
})()
;
G__328894 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__328894__2.call(this,a,b);
case 3:
return G__328894__3.call(this,a,b,c);
default:
return G__328894__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__328894.cljs$lang$maxFixedArity = 3;
G__328894.cljs$lang$applyTo = G__328894__4.cljs$lang$applyTo;
return G__328894;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__328897 = null;
var G__328897__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__328897__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__328897__4 = (function() { 
var G__328898__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__328898 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__328898__delegate.call(this, a, b, c, ds);
};
G__328898.cljs$lang$maxFixedArity = 3;
G__328898.cljs$lang$applyTo = (function (arglist__328899){
var a = cljs.core.first(arglist__328899);
var b = cljs.core.first(cljs.core.next(arglist__328899));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__328899)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__328899)));
return G__328898__delegate(a, b, c, ds);
});
G__328898.cljs$lang$arity$variadic = G__328898__delegate;
return G__328898;
})()
;
G__328897 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__328897__2.call(this,a,b);
case 3:
return G__328897__3.call(this,a,b,c);
default:
return G__328897__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__328897.cljs$lang$maxFixedArity = 3;
G__328897.cljs$lang$applyTo = G__328897__4.cljs$lang$applyTo;
return G__328897;
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
var mapi__328915 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____328923 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____328923)
{var s__328924 = temp__3974__auto____328923;
if(cljs.core.chunked_seq_QMARK_.call(null,s__328924))
{var c__328925 = cljs.core.chunk_first.call(null,s__328924);
var size__328926 = cljs.core.count.call(null,c__328925);
var b__328927 = cljs.core.chunk_buffer.call(null,size__328926);
var n__2549__auto____328928 = size__328926;
var i__328929 = 0;
while(true){
if((i__328929 < n__2549__auto____328928))
{cljs.core.chunk_append.call(null,b__328927,f.call(null,(idx + i__328929),cljs.core._nth.call(null,c__328925,i__328929)));
{
var G__328930 = (i__328929 + 1);
i__328929 = G__328930;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__328927),mapi.call(null,(idx + size__328926),cljs.core.chunk_rest.call(null,s__328924)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__328924)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__328924)));
}
} else
{return null;
}
}),null));
});
return mapi__328915.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____328940 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____328940)
{var s__328941 = temp__3974__auto____328940;
if(cljs.core.chunked_seq_QMARK_.call(null,s__328941))
{var c__328942 = cljs.core.chunk_first.call(null,s__328941);
var size__328943 = cljs.core.count.call(null,c__328942);
var b__328944 = cljs.core.chunk_buffer.call(null,size__328943);
var n__2549__auto____328945 = size__328943;
var i__328946 = 0;
while(true){
if((i__328946 < n__2549__auto____328945))
{var x__328947 = f.call(null,cljs.core._nth.call(null,c__328942,i__328946));
if((x__328947 == null))
{} else
{cljs.core.chunk_append.call(null,b__328944,x__328947);
}
{
var G__328949 = (i__328946 + 1);
i__328946 = G__328949;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__328944),keep.call(null,f,cljs.core.chunk_rest.call(null,s__328941)));
} else
{var x__328948 = f.call(null,cljs.core.first.call(null,s__328941));
if((x__328948 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__328941));
} else
{return cljs.core.cons.call(null,x__328948,keep.call(null,f,cljs.core.rest.call(null,s__328941)));
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
var keepi__328975 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____328985 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____328985)
{var s__328986 = temp__3974__auto____328985;
if(cljs.core.chunked_seq_QMARK_.call(null,s__328986))
{var c__328987 = cljs.core.chunk_first.call(null,s__328986);
var size__328988 = cljs.core.count.call(null,c__328987);
var b__328989 = cljs.core.chunk_buffer.call(null,size__328988);
var n__2549__auto____328990 = size__328988;
var i__328991 = 0;
while(true){
if((i__328991 < n__2549__auto____328990))
{var x__328992 = f.call(null,(idx + i__328991),cljs.core._nth.call(null,c__328987,i__328991));
if((x__328992 == null))
{} else
{cljs.core.chunk_append.call(null,b__328989,x__328992);
}
{
var G__328994 = (i__328991 + 1);
i__328991 = G__328994;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__328989),keepi.call(null,(idx + size__328988),cljs.core.chunk_rest.call(null,s__328986)));
} else
{var x__328993 = f.call(null,idx,cljs.core.first.call(null,s__328986));
if((x__328993 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__328986));
} else
{return cljs.core.cons.call(null,x__328993,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__328986)));
}
}
} else
{return null;
}
}),null));
});
return keepi__328975.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____329080 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____329080))
{return p.call(null,y);
} else
{return and__3822__auto____329080;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____329081 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____329081))
{var and__3822__auto____329082 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____329082))
{return p.call(null,z);
} else
{return and__3822__auto____329082;
}
} else
{return and__3822__auto____329081;
}
})());
});
var ep1__4 = (function() { 
var G__329151__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____329083 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____329083))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____329083;
}
})());
};
var G__329151 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__329151__delegate.call(this, x, y, z, args);
};
G__329151.cljs$lang$maxFixedArity = 3;
G__329151.cljs$lang$applyTo = (function (arglist__329152){
var x = cljs.core.first(arglist__329152);
var y = cljs.core.first(cljs.core.next(arglist__329152));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329152)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__329152)));
return G__329151__delegate(x, y, z, args);
});
G__329151.cljs$lang$arity$variadic = G__329151__delegate;
return G__329151;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____329095 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____329095))
{return p2.call(null,x);
} else
{return and__3822__auto____329095;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____329096 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____329096))
{var and__3822__auto____329097 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____329097))
{var and__3822__auto____329098 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____329098))
{return p2.call(null,y);
} else
{return and__3822__auto____329098;
}
} else
{return and__3822__auto____329097;
}
} else
{return and__3822__auto____329096;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____329099 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____329099))
{var and__3822__auto____329100 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____329100))
{var and__3822__auto____329101 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____329101))
{var and__3822__auto____329102 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____329102))
{var and__3822__auto____329103 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____329103))
{return p2.call(null,z);
} else
{return and__3822__auto____329103;
}
} else
{return and__3822__auto____329102;
}
} else
{return and__3822__auto____329101;
}
} else
{return and__3822__auto____329100;
}
} else
{return and__3822__auto____329099;
}
})());
});
var ep2__4 = (function() { 
var G__329153__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____329104 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____329104))
{return cljs.core.every_QMARK_.call(null,(function (p1__328950_SHARP_){
var and__3822__auto____329105 = p1.call(null,p1__328950_SHARP_);
if(cljs.core.truth_(and__3822__auto____329105))
{return p2.call(null,p1__328950_SHARP_);
} else
{return and__3822__auto____329105;
}
}),args);
} else
{return and__3822__auto____329104;
}
})());
};
var G__329153 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__329153__delegate.call(this, x, y, z, args);
};
G__329153.cljs$lang$maxFixedArity = 3;
G__329153.cljs$lang$applyTo = (function (arglist__329154){
var x = cljs.core.first(arglist__329154);
var y = cljs.core.first(cljs.core.next(arglist__329154));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329154)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__329154)));
return G__329153__delegate(x, y, z, args);
});
G__329153.cljs$lang$arity$variadic = G__329153__delegate;
return G__329153;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____329124 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____329124))
{var and__3822__auto____329125 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____329125))
{return p3.call(null,x);
} else
{return and__3822__auto____329125;
}
} else
{return and__3822__auto____329124;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____329126 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____329126))
{var and__3822__auto____329127 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____329127))
{var and__3822__auto____329128 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____329128))
{var and__3822__auto____329129 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____329129))
{var and__3822__auto____329130 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____329130))
{return p3.call(null,y);
} else
{return and__3822__auto____329130;
}
} else
{return and__3822__auto____329129;
}
} else
{return and__3822__auto____329128;
}
} else
{return and__3822__auto____329127;
}
} else
{return and__3822__auto____329126;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____329131 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____329131))
{var and__3822__auto____329132 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____329132))
{var and__3822__auto____329133 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____329133))
{var and__3822__auto____329134 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____329134))
{var and__3822__auto____329135 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____329135))
{var and__3822__auto____329136 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____329136))
{var and__3822__auto____329137 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____329137))
{var and__3822__auto____329138 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____329138))
{return p3.call(null,z);
} else
{return and__3822__auto____329138;
}
} else
{return and__3822__auto____329137;
}
} else
{return and__3822__auto____329136;
}
} else
{return and__3822__auto____329135;
}
} else
{return and__3822__auto____329134;
}
} else
{return and__3822__auto____329133;
}
} else
{return and__3822__auto____329132;
}
} else
{return and__3822__auto____329131;
}
})());
});
var ep3__4 = (function() { 
var G__329155__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____329139 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____329139))
{return cljs.core.every_QMARK_.call(null,(function (p1__328951_SHARP_){
var and__3822__auto____329140 = p1.call(null,p1__328951_SHARP_);
if(cljs.core.truth_(and__3822__auto____329140))
{var and__3822__auto____329141 = p2.call(null,p1__328951_SHARP_);
if(cljs.core.truth_(and__3822__auto____329141))
{return p3.call(null,p1__328951_SHARP_);
} else
{return and__3822__auto____329141;
}
} else
{return and__3822__auto____329140;
}
}),args);
} else
{return and__3822__auto____329139;
}
})());
};
var G__329155 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__329155__delegate.call(this, x, y, z, args);
};
G__329155.cljs$lang$maxFixedArity = 3;
G__329155.cljs$lang$applyTo = (function (arglist__329156){
var x = cljs.core.first(arglist__329156);
var y = cljs.core.first(cljs.core.next(arglist__329156));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329156)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__329156)));
return G__329155__delegate(x, y, z, args);
});
G__329155.cljs$lang$arity$variadic = G__329155__delegate;
return G__329155;
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
var G__329157__delegate = function (p1,p2,p3,ps){
var ps__329142 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__328952_SHARP_){
return p1__328952_SHARP_.call(null,x);
}),ps__329142);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__328953_SHARP_){
var and__3822__auto____329147 = p1__328953_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____329147))
{return p1__328953_SHARP_.call(null,y);
} else
{return and__3822__auto____329147;
}
}),ps__329142);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__328954_SHARP_){
var and__3822__auto____329148 = p1__328954_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____329148))
{var and__3822__auto____329149 = p1__328954_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____329149))
{return p1__328954_SHARP_.call(null,z);
} else
{return and__3822__auto____329149;
}
} else
{return and__3822__auto____329148;
}
}),ps__329142);
});
var epn__4 = (function() { 
var G__329158__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____329150 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____329150))
{return cljs.core.every_QMARK_.call(null,(function (p1__328955_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__328955_SHARP_,args);
}),ps__329142);
} else
{return and__3822__auto____329150;
}
})());
};
var G__329158 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__329158__delegate.call(this, x, y, z, args);
};
G__329158.cljs$lang$maxFixedArity = 3;
G__329158.cljs$lang$applyTo = (function (arglist__329159){
var x = cljs.core.first(arglist__329159);
var y = cljs.core.first(cljs.core.next(arglist__329159));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329159)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__329159)));
return G__329158__delegate(x, y, z, args);
});
G__329158.cljs$lang$arity$variadic = G__329158__delegate;
return G__329158;
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
var G__329157 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__329157__delegate.call(this, p1, p2, p3, ps);
};
G__329157.cljs$lang$maxFixedArity = 3;
G__329157.cljs$lang$applyTo = (function (arglist__329160){
var p1 = cljs.core.first(arglist__329160);
var p2 = cljs.core.first(cljs.core.next(arglist__329160));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329160)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__329160)));
return G__329157__delegate(p1, p2, p3, ps);
});
G__329157.cljs$lang$arity$variadic = G__329157__delegate;
return G__329157;
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
var or__3824__auto____329241 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____329241))
{return or__3824__auto____329241;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____329242 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____329242))
{return or__3824__auto____329242;
} else
{var or__3824__auto____329243 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____329243))
{return or__3824__auto____329243;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__329312__delegate = function (x,y,z,args){
var or__3824__auto____329244 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____329244))
{return or__3824__auto____329244;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__329312 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__329312__delegate.call(this, x, y, z, args);
};
G__329312.cljs$lang$maxFixedArity = 3;
G__329312.cljs$lang$applyTo = (function (arglist__329313){
var x = cljs.core.first(arglist__329313);
var y = cljs.core.first(cljs.core.next(arglist__329313));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329313)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__329313)));
return G__329312__delegate(x, y, z, args);
});
G__329312.cljs$lang$arity$variadic = G__329312__delegate;
return G__329312;
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
var or__3824__auto____329256 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____329256))
{return or__3824__auto____329256;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____329257 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____329257))
{return or__3824__auto____329257;
} else
{var or__3824__auto____329258 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____329258))
{return or__3824__auto____329258;
} else
{var or__3824__auto____329259 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____329259))
{return or__3824__auto____329259;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____329260 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____329260))
{return or__3824__auto____329260;
} else
{var or__3824__auto____329261 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____329261))
{return or__3824__auto____329261;
} else
{var or__3824__auto____329262 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____329262))
{return or__3824__auto____329262;
} else
{var or__3824__auto____329263 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____329263))
{return or__3824__auto____329263;
} else
{var or__3824__auto____329264 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____329264))
{return or__3824__auto____329264;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__329314__delegate = function (x,y,z,args){
var or__3824__auto____329265 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____329265))
{return or__3824__auto____329265;
} else
{return cljs.core.some.call(null,(function (p1__328995_SHARP_){
var or__3824__auto____329266 = p1.call(null,p1__328995_SHARP_);
if(cljs.core.truth_(or__3824__auto____329266))
{return or__3824__auto____329266;
} else
{return p2.call(null,p1__328995_SHARP_);
}
}),args);
}
};
var G__329314 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__329314__delegate.call(this, x, y, z, args);
};
G__329314.cljs$lang$maxFixedArity = 3;
G__329314.cljs$lang$applyTo = (function (arglist__329315){
var x = cljs.core.first(arglist__329315);
var y = cljs.core.first(cljs.core.next(arglist__329315));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329315)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__329315)));
return G__329314__delegate(x, y, z, args);
});
G__329314.cljs$lang$arity$variadic = G__329314__delegate;
return G__329314;
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
var or__3824__auto____329285 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____329285))
{return or__3824__auto____329285;
} else
{var or__3824__auto____329286 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____329286))
{return or__3824__auto____329286;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____329287 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____329287))
{return or__3824__auto____329287;
} else
{var or__3824__auto____329288 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____329288))
{return or__3824__auto____329288;
} else
{var or__3824__auto____329289 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____329289))
{return or__3824__auto____329289;
} else
{var or__3824__auto____329290 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____329290))
{return or__3824__auto____329290;
} else
{var or__3824__auto____329291 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____329291))
{return or__3824__auto____329291;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____329292 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____329292))
{return or__3824__auto____329292;
} else
{var or__3824__auto____329293 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____329293))
{return or__3824__auto____329293;
} else
{var or__3824__auto____329294 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____329294))
{return or__3824__auto____329294;
} else
{var or__3824__auto____329295 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____329295))
{return or__3824__auto____329295;
} else
{var or__3824__auto____329296 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____329296))
{return or__3824__auto____329296;
} else
{var or__3824__auto____329297 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____329297))
{return or__3824__auto____329297;
} else
{var or__3824__auto____329298 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____329298))
{return or__3824__auto____329298;
} else
{var or__3824__auto____329299 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____329299))
{return or__3824__auto____329299;
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
var G__329316__delegate = function (x,y,z,args){
var or__3824__auto____329300 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____329300))
{return or__3824__auto____329300;
} else
{return cljs.core.some.call(null,(function (p1__328996_SHARP_){
var or__3824__auto____329301 = p1.call(null,p1__328996_SHARP_);
if(cljs.core.truth_(or__3824__auto____329301))
{return or__3824__auto____329301;
} else
{var or__3824__auto____329302 = p2.call(null,p1__328996_SHARP_);
if(cljs.core.truth_(or__3824__auto____329302))
{return or__3824__auto____329302;
} else
{return p3.call(null,p1__328996_SHARP_);
}
}
}),args);
}
};
var G__329316 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__329316__delegate.call(this, x, y, z, args);
};
G__329316.cljs$lang$maxFixedArity = 3;
G__329316.cljs$lang$applyTo = (function (arglist__329317){
var x = cljs.core.first(arglist__329317);
var y = cljs.core.first(cljs.core.next(arglist__329317));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329317)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__329317)));
return G__329316__delegate(x, y, z, args);
});
G__329316.cljs$lang$arity$variadic = G__329316__delegate;
return G__329316;
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
var G__329318__delegate = function (p1,p2,p3,ps){
var ps__329303 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__328997_SHARP_){
return p1__328997_SHARP_.call(null,x);
}),ps__329303);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__328998_SHARP_){
var or__3824__auto____329308 = p1__328998_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____329308))
{return or__3824__auto____329308;
} else
{return p1__328998_SHARP_.call(null,y);
}
}),ps__329303);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__328999_SHARP_){
var or__3824__auto____329309 = p1__328999_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____329309))
{return or__3824__auto____329309;
} else
{var or__3824__auto____329310 = p1__328999_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____329310))
{return or__3824__auto____329310;
} else
{return p1__328999_SHARP_.call(null,z);
}
}
}),ps__329303);
});
var spn__4 = (function() { 
var G__329319__delegate = function (x,y,z,args){
var or__3824__auto____329311 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____329311))
{return or__3824__auto____329311;
} else
{return cljs.core.some.call(null,(function (p1__329000_SHARP_){
return cljs.core.some.call(null,p1__329000_SHARP_,args);
}),ps__329303);
}
};
var G__329319 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__329319__delegate.call(this, x, y, z, args);
};
G__329319.cljs$lang$maxFixedArity = 3;
G__329319.cljs$lang$applyTo = (function (arglist__329320){
var x = cljs.core.first(arglist__329320);
var y = cljs.core.first(cljs.core.next(arglist__329320));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329320)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__329320)));
return G__329319__delegate(x, y, z, args);
});
G__329319.cljs$lang$arity$variadic = G__329319__delegate;
return G__329319;
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
var G__329318 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__329318__delegate.call(this, p1, p2, p3, ps);
};
G__329318.cljs$lang$maxFixedArity = 3;
G__329318.cljs$lang$applyTo = (function (arglist__329321){
var p1 = cljs.core.first(arglist__329321);
var p2 = cljs.core.first(cljs.core.next(arglist__329321));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329321)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__329321)));
return G__329318__delegate(p1, p2, p3, ps);
});
G__329318.cljs$lang$arity$variadic = G__329318__delegate;
return G__329318;
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
var temp__3974__auto____329340 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____329340)
{var s__329341 = temp__3974__auto____329340;
if(cljs.core.chunked_seq_QMARK_.call(null,s__329341))
{var c__329342 = cljs.core.chunk_first.call(null,s__329341);
var size__329343 = cljs.core.count.call(null,c__329342);
var b__329344 = cljs.core.chunk_buffer.call(null,size__329343);
var n__2549__auto____329345 = size__329343;
var i__329346 = 0;
while(true){
if((i__329346 < n__2549__auto____329345))
{cljs.core.chunk_append.call(null,b__329344,f.call(null,cljs.core._nth.call(null,c__329342,i__329346)));
{
var G__329358 = (i__329346 + 1);
i__329346 = G__329358;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__329344),map.call(null,f,cljs.core.chunk_rest.call(null,s__329341)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__329341)),map.call(null,f,cljs.core.rest.call(null,s__329341)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__329347 = cljs.core.seq.call(null,c1);
var s2__329348 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____329349 = s1__329347;
if(and__3822__auto____329349)
{return s2__329348;
} else
{return and__3822__auto____329349;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__329347),cljs.core.first.call(null,s2__329348)),map.call(null,f,cljs.core.rest.call(null,s1__329347),cljs.core.rest.call(null,s2__329348)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__329350 = cljs.core.seq.call(null,c1);
var s2__329351 = cljs.core.seq.call(null,c2);
var s3__329352 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____329353 = s1__329350;
if(and__3822__auto____329353)
{var and__3822__auto____329354 = s2__329351;
if(and__3822__auto____329354)
{return s3__329352;
} else
{return and__3822__auto____329354;
}
} else
{return and__3822__auto____329353;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__329350),cljs.core.first.call(null,s2__329351),cljs.core.first.call(null,s3__329352)),map.call(null,f,cljs.core.rest.call(null,s1__329350),cljs.core.rest.call(null,s2__329351),cljs.core.rest.call(null,s3__329352)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__329359__delegate = function (f,c1,c2,c3,colls){
var step__329357 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__329356 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__329356))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__329356),step.call(null,map.call(null,cljs.core.rest,ss__329356)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__329161_SHARP_){
return cljs.core.apply.call(null,f,p1__329161_SHARP_);
}),step__329357.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__329359 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__329359__delegate.call(this, f, c1, c2, c3, colls);
};
G__329359.cljs$lang$maxFixedArity = 4;
G__329359.cljs$lang$applyTo = (function (arglist__329360){
var f = cljs.core.first(arglist__329360);
var c1 = cljs.core.first(cljs.core.next(arglist__329360));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329360)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__329360))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__329360))));
return G__329359__delegate(f, c1, c2, c3, colls);
});
G__329359.cljs$lang$arity$variadic = G__329359__delegate;
return G__329359;
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
{var temp__3974__auto____329363 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____329363)
{var s__329364 = temp__3974__auto____329363;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__329364),take.call(null,(n - 1),cljs.core.rest.call(null,s__329364)));
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
var step__329370 = (function (n,coll){
while(true){
var s__329368 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____329369 = (n > 0);
if(and__3822__auto____329369)
{return s__329368;
} else
{return and__3822__auto____329369;
}
})()))
{{
var G__329371 = (n - 1);
var G__329372 = cljs.core.rest.call(null,s__329368);
n = G__329371;
coll = G__329372;
continue;
}
} else
{return s__329368;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__329370.call(null,n,coll);
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
var s__329375 = cljs.core.seq.call(null,coll);
var lead__329376 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__329376)
{{
var G__329377 = cljs.core.next.call(null,s__329375);
var G__329378 = cljs.core.next.call(null,lead__329376);
s__329375 = G__329377;
lead__329376 = G__329378;
continue;
}
} else
{return s__329375;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__329384 = (function (pred,coll){
while(true){
var s__329382 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____329383 = s__329382;
if(and__3822__auto____329383)
{return pred.call(null,cljs.core.first.call(null,s__329382));
} else
{return and__3822__auto____329383;
}
})()))
{{
var G__329385 = pred;
var G__329386 = cljs.core.rest.call(null,s__329382);
pred = G__329385;
coll = G__329386;
continue;
}
} else
{return s__329382;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__329384.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____329389 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____329389)
{var s__329390 = temp__3974__auto____329389;
return cljs.core.concat.call(null,s__329390,cycle.call(null,s__329390));
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
var s1__329395 = cljs.core.seq.call(null,c1);
var s2__329396 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____329397 = s1__329395;
if(and__3822__auto____329397)
{return s2__329396;
} else
{return and__3822__auto____329397;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__329395),cljs.core.cons.call(null,cljs.core.first.call(null,s2__329396),interleave.call(null,cljs.core.rest.call(null,s1__329395),cljs.core.rest.call(null,s2__329396))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__329399__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__329398 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__329398))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__329398),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__329398)));
} else
{return null;
}
}),null));
};
var G__329399 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__329399__delegate.call(this, c1, c2, colls);
};
G__329399.cljs$lang$maxFixedArity = 2;
G__329399.cljs$lang$applyTo = (function (arglist__329400){
var c1 = cljs.core.first(arglist__329400);
var c2 = cljs.core.first(cljs.core.next(arglist__329400));
var colls = cljs.core.rest(cljs.core.next(arglist__329400));
return G__329399__delegate(c1, c2, colls);
});
G__329399.cljs$lang$arity$variadic = G__329399__delegate;
return G__329399;
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
var cat__329410 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____329408 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____329408)
{var coll__329409 = temp__3971__auto____329408;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__329409),cat.call(null,cljs.core.rest.call(null,coll__329409),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__329410.call(null,null,colls);
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
var G__329411__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__329411 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__329411__delegate.call(this, f, coll, colls);
};
G__329411.cljs$lang$maxFixedArity = 2;
G__329411.cljs$lang$applyTo = (function (arglist__329412){
var f = cljs.core.first(arglist__329412);
var coll = cljs.core.first(cljs.core.next(arglist__329412));
var colls = cljs.core.rest(cljs.core.next(arglist__329412));
return G__329411__delegate(f, coll, colls);
});
G__329411.cljs$lang$arity$variadic = G__329411__delegate;
return G__329411;
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
var temp__3974__auto____329422 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____329422)
{var s__329423 = temp__3974__auto____329422;
if(cljs.core.chunked_seq_QMARK_.call(null,s__329423))
{var c__329424 = cljs.core.chunk_first.call(null,s__329423);
var size__329425 = cljs.core.count.call(null,c__329424);
var b__329426 = cljs.core.chunk_buffer.call(null,size__329425);
var n__2549__auto____329427 = size__329425;
var i__329428 = 0;
while(true){
if((i__329428 < n__2549__auto____329427))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__329424,i__329428))))
{cljs.core.chunk_append.call(null,b__329426,cljs.core._nth.call(null,c__329424,i__329428));
} else
{}
{
var G__329431 = (i__329428 + 1);
i__329428 = G__329431;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__329426),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__329423)));
} else
{var f__329429 = cljs.core.first.call(null,s__329423);
var r__329430 = cljs.core.rest.call(null,s__329423);
if(cljs.core.truth_(pred.call(null,f__329429)))
{return cljs.core.cons.call(null,f__329429,filter.call(null,pred,r__329430));
} else
{return filter.call(null,pred,r__329430);
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
var walk__329434 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__329434.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__329432_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__329432_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__329438__329439 = to;
if(G__329438__329439)
{if((function (){var or__3824__auto____329440 = (G__329438__329439.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____329440)
{return or__3824__auto____329440;
} else
{return G__329438__329439.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__329438__329439.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__329438__329439);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__329438__329439);
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
var G__329441__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__329441 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__329441__delegate.call(this, f, c1, c2, c3, colls);
};
G__329441.cljs$lang$maxFixedArity = 4;
G__329441.cljs$lang$applyTo = (function (arglist__329442){
var f = cljs.core.first(arglist__329442);
var c1 = cljs.core.first(cljs.core.next(arglist__329442));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329442)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__329442))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__329442))));
return G__329441__delegate(f, c1, c2, c3, colls);
});
G__329441.cljs$lang$arity$variadic = G__329441__delegate;
return G__329441;
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
var temp__3974__auto____329449 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____329449)
{var s__329450 = temp__3974__auto____329449;
var p__329451 = cljs.core.take.call(null,n,s__329450);
if((n === cljs.core.count.call(null,p__329451)))
{return cljs.core.cons.call(null,p__329451,partition.call(null,n,step,cljs.core.drop.call(null,step,s__329450)));
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
var temp__3974__auto____329452 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____329452)
{var s__329453 = temp__3974__auto____329452;
var p__329454 = cljs.core.take.call(null,n,s__329453);
if((n === cljs.core.count.call(null,p__329454)))
{return cljs.core.cons.call(null,p__329454,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__329453)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__329454,pad)));
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
var sentinel__329459 = cljs.core.lookup_sentinel;
var m__329460 = m;
var ks__329461 = cljs.core.seq.call(null,ks);
while(true){
if(ks__329461)
{var m__329462 = cljs.core._lookup.call(null,m__329460,cljs.core.first.call(null,ks__329461),sentinel__329459);
if((sentinel__329459 === m__329462))
{return not_found;
} else
{{
var G__329463 = sentinel__329459;
var G__329464 = m__329462;
var G__329465 = cljs.core.next.call(null,ks__329461);
sentinel__329459 = G__329463;
m__329460 = G__329464;
ks__329461 = G__329465;
continue;
}
}
} else
{return m__329460;
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
cljs.core.assoc_in = (function assoc_in(m,p__329466,v){
var vec__329471__329472 = p__329466;
var k__329473 = cljs.core.nth.call(null,vec__329471__329472,0,null);
var ks__329474 = cljs.core.nthnext.call(null,vec__329471__329472,1);
if(cljs.core.truth_(ks__329474))
{return cljs.core.assoc.call(null,m,k__329473,assoc_in.call(null,cljs.core._lookup.call(null,m,k__329473,null),ks__329474,v));
} else
{return cljs.core.assoc.call(null,m,k__329473,v);
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
var update_in__delegate = function (m,p__329475,f,args){
var vec__329480__329481 = p__329475;
var k__329482 = cljs.core.nth.call(null,vec__329480__329481,0,null);
var ks__329483 = cljs.core.nthnext.call(null,vec__329480__329481,1);
if(cljs.core.truth_(ks__329483))
{return cljs.core.assoc.call(null,m,k__329482,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__329482,null),ks__329483,f,args));
} else
{return cljs.core.assoc.call(null,m,k__329482,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__329482,null),args));
}
};
var update_in = function (m,p__329475,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__329475, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__329484){
var m = cljs.core.first(arglist__329484);
var p__329475 = cljs.core.first(cljs.core.next(arglist__329484));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__329484)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__329484)));
return update_in__delegate(m, p__329475, f, args);
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
var this__329487 = this;
var h__2203__auto____329488 = this__329487.__hash;
if(!((h__2203__auto____329488 == null)))
{return h__2203__auto____329488;
} else
{var h__2203__auto____329489 = cljs.core.hash_coll.call(null,coll);
this__329487.__hash = h__2203__auto____329489;
return h__2203__auto____329489;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__329490 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__329491 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__329492 = this;
var new_array__329493 = this__329492.array.slice();
(new_array__329493[k] = v);
return (new cljs.core.Vector(this__329492.meta,new_array__329493,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__329524 = null;
var G__329524__2 = (function (this_sym329494,k){
var this__329496 = this;
var this_sym329494__329497 = this;
var coll__329498 = this_sym329494__329497;
return coll__329498.cljs$core$ILookup$_lookup$arity$2(coll__329498,k);
});
var G__329524__3 = (function (this_sym329495,k,not_found){
var this__329496 = this;
var this_sym329495__329499 = this;
var coll__329500 = this_sym329495__329499;
return coll__329500.cljs$core$ILookup$_lookup$arity$3(coll__329500,k,not_found);
});
G__329524 = function(this_sym329495,k,not_found){
switch(arguments.length){
case 2:
return G__329524__2.call(this,this_sym329495,k);
case 3:
return G__329524__3.call(this,this_sym329495,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__329524;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym329485,args329486){
var this__329501 = this;
return this_sym329485.call.apply(this_sym329485,[this_sym329485].concat(args329486.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__329502 = this;
var new_array__329503 = this__329502.array.slice();
new_array__329503.push(o);
return (new cljs.core.Vector(this__329502.meta,new_array__329503,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__329504 = this;
var this__329505 = this;
return cljs.core.pr_str.call(null,this__329505);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__329506 = this;
return cljs.core.ci_reduce.call(null,this__329506.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__329507 = this;
return cljs.core.ci_reduce.call(null,this__329507.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__329508 = this;
if((this__329508.array.length > 0))
{var vector_seq__329509 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__329508.array.length))
{return cljs.core.cons.call(null,(this__329508.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__329509.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__329510 = this;
return this__329510.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__329511 = this;
var count__329512 = this__329511.array.length;
if((count__329512 > 0))
{return (this__329511.array[(count__329512 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__329513 = this;
if((this__329513.array.length > 0))
{var new_array__329514 = this__329513.array.slice();
new_array__329514.pop();
return (new cljs.core.Vector(this__329513.meta,new_array__329514,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__329515 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__329516 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__329517 = this;
return (new cljs.core.Vector(meta,this__329517.array,this__329517.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__329518 = this;
return this__329518.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__329519 = this;
if((function (){var and__3822__auto____329520 = (0 <= n);
if(and__3822__auto____329520)
{return (n < this__329519.array.length);
} else
{return and__3822__auto____329520;
}
})())
{return (this__329519.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__329521 = this;
if((function (){var and__3822__auto____329522 = (0 <= n);
if(and__3822__auto____329522)
{return (n < this__329521.array.length);
} else
{return and__3822__auto____329522;
}
})())
{return (this__329521.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__329523 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__329523.meta);
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
var cnt__329526 = pv.cnt;
if((cnt__329526 < 32))
{return 0;
} else
{return (((cnt__329526 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__329532 = level;
var ret__329533 = node;
while(true){
if((ll__329532 === 0))
{return ret__329533;
} else
{var embed__329534 = ret__329533;
var r__329535 = cljs.core.pv_fresh_node.call(null,edit);
var ___329536 = cljs.core.pv_aset.call(null,r__329535,0,embed__329534);
{
var G__329537 = (ll__329532 - 5);
var G__329538 = r__329535;
ll__329532 = G__329537;
ret__329533 = G__329538;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__329544 = cljs.core.pv_clone_node.call(null,parent);
var subidx__329545 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__329544,subidx__329545,tailnode);
return ret__329544;
} else
{var child__329546 = cljs.core.pv_aget.call(null,parent,subidx__329545);
if(!((child__329546 == null)))
{var node_to_insert__329547 = push_tail.call(null,pv,(level - 5),child__329546,tailnode);
cljs.core.pv_aset.call(null,ret__329544,subidx__329545,node_to_insert__329547);
return ret__329544;
} else
{var node_to_insert__329548 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__329544,subidx__329545,node_to_insert__329548);
return ret__329544;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____329552 = (0 <= i);
if(and__3822__auto____329552)
{return (i < pv.cnt);
} else
{return and__3822__auto____329552;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__329553 = pv.root;
var level__329554 = pv.shift;
while(true){
if((level__329554 > 0))
{{
var G__329555 = cljs.core.pv_aget.call(null,node__329553,((i >>> level__329554) & 31));
var G__329556 = (level__329554 - 5);
node__329553 = G__329555;
level__329554 = G__329556;
continue;
}
} else
{return node__329553.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__329559 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__329559,(i & 31),val);
return ret__329559;
} else
{var subidx__329560 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__329559,subidx__329560,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__329560),i,val));
return ret__329559;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__329566 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__329567 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__329566));
if((function (){var and__3822__auto____329568 = (new_child__329567 == null);
if(and__3822__auto____329568)
{return (subidx__329566 === 0);
} else
{return and__3822__auto____329568;
}
})())
{return null;
} else
{var ret__329569 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__329569,subidx__329566,new_child__329567);
return ret__329569;
}
} else
{if((subidx__329566 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__329570 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__329570,subidx__329566,null);
return ret__329570;
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
var this__329573 = this;
return (new cljs.core.TransientVector(this__329573.cnt,this__329573.shift,cljs.core.tv_editable_root.call(null,this__329573.root),cljs.core.tv_editable_tail.call(null,this__329573.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__329574 = this;
var h__2203__auto____329575 = this__329574.__hash;
if(!((h__2203__auto____329575 == null)))
{return h__2203__auto____329575;
} else
{var h__2203__auto____329576 = cljs.core.hash_coll.call(null,coll);
this__329574.__hash = h__2203__auto____329576;
return h__2203__auto____329576;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__329577 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__329578 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__329579 = this;
if((function (){var and__3822__auto____329580 = (0 <= k);
if(and__3822__auto____329580)
{return (k < this__329579.cnt);
} else
{return and__3822__auto____329580;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__329581 = this__329579.tail.slice();
(new_tail__329581[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__329579.meta,this__329579.cnt,this__329579.shift,this__329579.root,new_tail__329581,null));
} else
{return (new cljs.core.PersistentVector(this__329579.meta,this__329579.cnt,this__329579.shift,cljs.core.do_assoc.call(null,coll,this__329579.shift,this__329579.root,k,v),this__329579.tail,null));
}
} else
{if((k === this__329579.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__329579.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__329629 = null;
var G__329629__2 = (function (this_sym329582,k){
var this__329584 = this;
var this_sym329582__329585 = this;
var coll__329586 = this_sym329582__329585;
return coll__329586.cljs$core$ILookup$_lookup$arity$2(coll__329586,k);
});
var G__329629__3 = (function (this_sym329583,k,not_found){
var this__329584 = this;
var this_sym329583__329587 = this;
var coll__329588 = this_sym329583__329587;
return coll__329588.cljs$core$ILookup$_lookup$arity$3(coll__329588,k,not_found);
});
G__329629 = function(this_sym329583,k,not_found){
switch(arguments.length){
case 2:
return G__329629__2.call(this,this_sym329583,k);
case 3:
return G__329629__3.call(this,this_sym329583,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__329629;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym329571,args329572){
var this__329589 = this;
return this_sym329571.call.apply(this_sym329571,[this_sym329571].concat(args329572.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__329590 = this;
var step_init__329591 = [0,init];
var i__329592 = 0;
while(true){
if((i__329592 < this__329590.cnt))
{var arr__329593 = cljs.core.array_for.call(null,v,i__329592);
var len__329594 = arr__329593.length;
var init__329598 = (function (){var j__329595 = 0;
var init__329596 = (step_init__329591[1]);
while(true){
if((j__329595 < len__329594))
{var init__329597 = f.call(null,init__329596,(j__329595 + i__329592),(arr__329593[j__329595]));
if(cljs.core.reduced_QMARK_.call(null,init__329597))
{return init__329597;
} else
{{
var G__329630 = (j__329595 + 1);
var G__329631 = init__329597;
j__329595 = G__329630;
init__329596 = G__329631;
continue;
}
}
} else
{(step_init__329591[0] = len__329594);
(step_init__329591[1] = init__329596);
return init__329596;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__329598))
{return cljs.core.deref.call(null,init__329598);
} else
{{
var G__329632 = (i__329592 + (step_init__329591[0]));
i__329592 = G__329632;
continue;
}
}
} else
{return (step_init__329591[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__329599 = this;
if(((this__329599.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__329600 = this__329599.tail.slice();
new_tail__329600.push(o);
return (new cljs.core.PersistentVector(this__329599.meta,(this__329599.cnt + 1),this__329599.shift,this__329599.root,new_tail__329600,null));
} else
{var root_overflow_QMARK___329601 = ((this__329599.cnt >>> 5) > (1 << this__329599.shift));
var new_shift__329602 = ((root_overflow_QMARK___329601)?(this__329599.shift + 5):this__329599.shift);
var new_root__329604 = ((root_overflow_QMARK___329601)?(function (){var n_r__329603 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__329603,0,this__329599.root);
cljs.core.pv_aset.call(null,n_r__329603,1,cljs.core.new_path.call(null,null,this__329599.shift,(new cljs.core.VectorNode(null,this__329599.tail))));
return n_r__329603;
})():cljs.core.push_tail.call(null,coll,this__329599.shift,this__329599.root,(new cljs.core.VectorNode(null,this__329599.tail))));
return (new cljs.core.PersistentVector(this__329599.meta,(this__329599.cnt + 1),new_shift__329602,new_root__329604,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__329605 = this;
if((this__329605.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__329605.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__329606 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__329607 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__329608 = this;
var this__329609 = this;
return cljs.core.pr_str.call(null,this__329609);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__329610 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__329611 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__329612 = this;
if((this__329612.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__329613 = this;
return this__329613.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__329614 = this;
if((this__329614.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__329614.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__329615 = this;
if((this__329615.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__329615.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__329615.meta);
} else
{if((1 < (this__329615.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__329615.meta,(this__329615.cnt - 1),this__329615.shift,this__329615.root,this__329615.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__329616 = cljs.core.array_for.call(null,coll,(this__329615.cnt - 2));
var nr__329617 = cljs.core.pop_tail.call(null,coll,this__329615.shift,this__329615.root);
var new_root__329618 = (((nr__329617 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__329617);
var cnt_1__329619 = (this__329615.cnt - 1);
if((function (){var and__3822__auto____329620 = (5 < this__329615.shift);
if(and__3822__auto____329620)
{return (cljs.core.pv_aget.call(null,new_root__329618,1) == null);
} else
{return and__3822__auto____329620;
}
})())
{return (new cljs.core.PersistentVector(this__329615.meta,cnt_1__329619,(this__329615.shift - 5),cljs.core.pv_aget.call(null,new_root__329618,0),new_tail__329616,null));
} else
{return (new cljs.core.PersistentVector(this__329615.meta,cnt_1__329619,this__329615.shift,new_root__329618,new_tail__329616,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__329621 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__329622 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__329623 = this;
return (new cljs.core.PersistentVector(meta,this__329623.cnt,this__329623.shift,this__329623.root,this__329623.tail,this__329623.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__329624 = this;
return this__329624.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__329625 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__329626 = this;
if((function (){var and__3822__auto____329627 = (0 <= n);
if(and__3822__auto____329627)
{return (n < this__329626.cnt);
} else
{return and__3822__auto____329627;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__329628 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__329628.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__329633 = xs.length;
var xs__329634 = (((no_clone === true))?xs:xs.slice());
if((l__329633 < 32))
{return (new cljs.core.PersistentVector(null,l__329633,5,cljs.core.PersistentVector.EMPTY_NODE,xs__329634,null));
} else
{var node__329635 = xs__329634.slice(0,32);
var v__329636 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__329635,null));
var i__329637 = 32;
var out__329638 = cljs.core._as_transient.call(null,v__329636);
while(true){
if((i__329637 < l__329633))
{{
var G__329639 = (i__329637 + 1);
var G__329640 = cljs.core.conj_BANG_.call(null,out__329638,(xs__329634[i__329637]));
i__329637 = G__329639;
out__329638 = G__329640;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__329638);
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
vector.cljs$lang$applyTo = (function (arglist__329641){
var args = cljs.core.seq(arglist__329641);;
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
var this__329642 = this;
var h__2203__auto____329643 = this__329642.__hash;
if(!((h__2203__auto____329643 == null)))
{return h__2203__auto____329643;
} else
{var h__2203__auto____329644 = cljs.core.hash_coll.call(null,coll);
this__329642.__hash = h__2203__auto____329644;
return h__2203__auto____329644;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__329645 = this;
if(((this__329645.off + 1) < this__329645.node.length))
{var s__329646 = cljs.core.chunked_seq.call(null,this__329645.vec,this__329645.node,this__329645.i,(this__329645.off + 1));
if((s__329646 == null))
{return null;
} else
{return s__329646;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__329647 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__329648 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__329649 = this;
return (this__329649.node[this__329649.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__329650 = this;
if(((this__329650.off + 1) < this__329650.node.length))
{var s__329651 = cljs.core.chunked_seq.call(null,this__329650.vec,this__329650.node,this__329650.i,(this__329650.off + 1));
if((s__329651 == null))
{return cljs.core.List.EMPTY;
} else
{return s__329651;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__329652 = this;
var l__329653 = this__329652.node.length;
var s__329654 = ((((this__329652.i + l__329653) < cljs.core._count.call(null,this__329652.vec)))?cljs.core.chunked_seq.call(null,this__329652.vec,(this__329652.i + l__329653),0):null);
if((s__329654 == null))
{return null;
} else
{return s__329654;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__329655 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__329656 = this;
return cljs.core.chunked_seq.call(null,this__329656.vec,this__329656.node,this__329656.i,this__329656.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__329657 = this;
return this__329657.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__329658 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__329658.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__329659 = this;
return cljs.core.array_chunk.call(null,this__329659.node,this__329659.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__329660 = this;
var l__329661 = this__329660.node.length;
var s__329662 = ((((this__329660.i + l__329661) < cljs.core._count.call(null,this__329660.vec)))?cljs.core.chunked_seq.call(null,this__329660.vec,(this__329660.i + l__329661),0):null);
if((s__329662 == null))
{return cljs.core.List.EMPTY;
} else
{return s__329662;
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
var this__329665 = this;
var h__2203__auto____329666 = this__329665.__hash;
if(!((h__2203__auto____329666 == null)))
{return h__2203__auto____329666;
} else
{var h__2203__auto____329667 = cljs.core.hash_coll.call(null,coll);
this__329665.__hash = h__2203__auto____329667;
return h__2203__auto____329667;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__329668 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__329669 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__329670 = this;
var v_pos__329671 = (this__329670.start + key);
return (new cljs.core.Subvec(this__329670.meta,cljs.core._assoc.call(null,this__329670.v,v_pos__329671,val),this__329670.start,((this__329670.end > (v_pos__329671 + 1)) ? this__329670.end : (v_pos__329671 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__329697 = null;
var G__329697__2 = (function (this_sym329672,k){
var this__329674 = this;
var this_sym329672__329675 = this;
var coll__329676 = this_sym329672__329675;
return coll__329676.cljs$core$ILookup$_lookup$arity$2(coll__329676,k);
});
var G__329697__3 = (function (this_sym329673,k,not_found){
var this__329674 = this;
var this_sym329673__329677 = this;
var coll__329678 = this_sym329673__329677;
return coll__329678.cljs$core$ILookup$_lookup$arity$3(coll__329678,k,not_found);
});
G__329697 = function(this_sym329673,k,not_found){
switch(arguments.length){
case 2:
return G__329697__2.call(this,this_sym329673,k);
case 3:
return G__329697__3.call(this,this_sym329673,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__329697;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym329663,args329664){
var this__329679 = this;
return this_sym329663.call.apply(this_sym329663,[this_sym329663].concat(args329664.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__329680 = this;
return (new cljs.core.Subvec(this__329680.meta,cljs.core._assoc_n.call(null,this__329680.v,this__329680.end,o),this__329680.start,(this__329680.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__329681 = this;
var this__329682 = this;
return cljs.core.pr_str.call(null,this__329682);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__329683 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__329684 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__329685 = this;
var subvec_seq__329686 = (function subvec_seq(i){
if((i === this__329685.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__329685.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__329686.call(null,this__329685.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__329687 = this;
return (this__329687.end - this__329687.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__329688 = this;
return cljs.core._nth.call(null,this__329688.v,(this__329688.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__329689 = this;
if((this__329689.start === this__329689.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__329689.meta,this__329689.v,this__329689.start,(this__329689.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__329690 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__329691 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__329692 = this;
return (new cljs.core.Subvec(meta,this__329692.v,this__329692.start,this__329692.end,this__329692.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__329693 = this;
return this__329693.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__329694 = this;
return cljs.core._nth.call(null,this__329694.v,(this__329694.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__329695 = this;
return cljs.core._nth.call(null,this__329695.v,(this__329695.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__329696 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__329696.meta);
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
var ret__329699 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__329699,0,tl.length);
return ret__329699;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__329703 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__329704 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__329703,subidx__329704,(((level === 5))?tail_node:(function (){var child__329705 = cljs.core.pv_aget.call(null,ret__329703,subidx__329704);
if(!((child__329705 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__329705,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__329703;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__329710 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__329711 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__329712 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__329710,subidx__329711));
if((function (){var and__3822__auto____329713 = (new_child__329712 == null);
if(and__3822__auto____329713)
{return (subidx__329711 === 0);
} else
{return and__3822__auto____329713;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__329710,subidx__329711,new_child__329712);
return node__329710;
}
} else
{if((subidx__329711 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__329710,subidx__329711,null);
return node__329710;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____329718 = (0 <= i);
if(and__3822__auto____329718)
{return (i < tv.cnt);
} else
{return and__3822__auto____329718;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__329719 = tv.root;
var node__329720 = root__329719;
var level__329721 = tv.shift;
while(true){
if((level__329721 > 0))
{{
var G__329722 = cljs.core.tv_ensure_editable.call(null,root__329719.edit,cljs.core.pv_aget.call(null,node__329720,((i >>> level__329721) & 31)));
var G__329723 = (level__329721 - 5);
node__329720 = G__329722;
level__329721 = G__329723;
continue;
}
} else
{return node__329720.arr;
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
var G__329763 = null;
var G__329763__2 = (function (this_sym329726,k){
var this__329728 = this;
var this_sym329726__329729 = this;
var coll__329730 = this_sym329726__329729;
return coll__329730.cljs$core$ILookup$_lookup$arity$2(coll__329730,k);
});
var G__329763__3 = (function (this_sym329727,k,not_found){
var this__329728 = this;
var this_sym329727__329731 = this;
var coll__329732 = this_sym329727__329731;
return coll__329732.cljs$core$ILookup$_lookup$arity$3(coll__329732,k,not_found);
});
G__329763 = function(this_sym329727,k,not_found){
switch(arguments.length){
case 2:
return G__329763__2.call(this,this_sym329727,k);
case 3:
return G__329763__3.call(this,this_sym329727,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__329763;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym329724,args329725){
var this__329733 = this;
return this_sym329724.call.apply(this_sym329724,[this_sym329724].concat(args329725.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__329734 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__329735 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__329736 = this;
if(this__329736.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__329737 = this;
if((function (){var and__3822__auto____329738 = (0 <= n);
if(and__3822__auto____329738)
{return (n < this__329737.cnt);
} else
{return and__3822__auto____329738;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__329739 = this;
if(this__329739.root.edit)
{return this__329739.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__329740 = this;
if(this__329740.root.edit)
{if((function (){var and__3822__auto____329741 = (0 <= n);
if(and__3822__auto____329741)
{return (n < this__329740.cnt);
} else
{return and__3822__auto____329741;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__329740.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__329746 = (function go(level,node){
var node__329744 = cljs.core.tv_ensure_editable.call(null,this__329740.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__329744,(n & 31),val);
return node__329744;
} else
{var subidx__329745 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__329744,subidx__329745,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__329744,subidx__329745)));
return node__329744;
}
}).call(null,this__329740.shift,this__329740.root);
this__329740.root = new_root__329746;
return tcoll;
}
} else
{if((n === this__329740.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__329740.cnt)].join('')));
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
var this__329747 = this;
if(this__329747.root.edit)
{if((this__329747.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__329747.cnt))
{this__329747.cnt = 0;
return tcoll;
} else
{if((((this__329747.cnt - 1) & 31) > 0))
{this__329747.cnt = (this__329747.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__329748 = cljs.core.editable_array_for.call(null,tcoll,(this__329747.cnt - 2));
var new_root__329750 = (function (){var nr__329749 = cljs.core.tv_pop_tail.call(null,tcoll,this__329747.shift,this__329747.root);
if(!((nr__329749 == null)))
{return nr__329749;
} else
{return (new cljs.core.VectorNode(this__329747.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____329751 = (5 < this__329747.shift);
if(and__3822__auto____329751)
{return (cljs.core.pv_aget.call(null,new_root__329750,1) == null);
} else
{return and__3822__auto____329751;
}
})())
{var new_root__329752 = cljs.core.tv_ensure_editable.call(null,this__329747.root.edit,cljs.core.pv_aget.call(null,new_root__329750,0));
this__329747.root = new_root__329752;
this__329747.shift = (this__329747.shift - 5);
this__329747.cnt = (this__329747.cnt - 1);
this__329747.tail = new_tail__329748;
return tcoll;
} else
{this__329747.root = new_root__329750;
this__329747.cnt = (this__329747.cnt - 1);
this__329747.tail = new_tail__329748;
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
var this__329753 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__329754 = this;
if(this__329754.root.edit)
{if(((this__329754.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__329754.tail[(this__329754.cnt & 31)] = o);
this__329754.cnt = (this__329754.cnt + 1);
return tcoll;
} else
{var tail_node__329755 = (new cljs.core.VectorNode(this__329754.root.edit,this__329754.tail));
var new_tail__329756 = cljs.core.make_array.call(null,32);
(new_tail__329756[0] = o);
this__329754.tail = new_tail__329756;
if(((this__329754.cnt >>> 5) > (1 << this__329754.shift)))
{var new_root_array__329757 = cljs.core.make_array.call(null,32);
var new_shift__329758 = (this__329754.shift + 5);
(new_root_array__329757[0] = this__329754.root);
(new_root_array__329757[1] = cljs.core.new_path.call(null,this__329754.root.edit,this__329754.shift,tail_node__329755));
this__329754.root = (new cljs.core.VectorNode(this__329754.root.edit,new_root_array__329757));
this__329754.shift = new_shift__329758;
this__329754.cnt = (this__329754.cnt + 1);
return tcoll;
} else
{var new_root__329759 = cljs.core.tv_push_tail.call(null,tcoll,this__329754.shift,this__329754.root,tail_node__329755);
this__329754.root = new_root__329759;
this__329754.cnt = (this__329754.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__329760 = this;
if(this__329760.root.edit)
{this__329760.root.edit = null;
var len__329761 = (this__329760.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__329762 = cljs.core.make_array.call(null,len__329761);
cljs.core.array_copy.call(null,this__329760.tail,0,trimmed_tail__329762,0,len__329761);
return (new cljs.core.PersistentVector(null,this__329760.cnt,this__329760.shift,this__329760.root,trimmed_tail__329762,null));
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
var this__329764 = this;
var h__2203__auto____329765 = this__329764.__hash;
if(!((h__2203__auto____329765 == null)))
{return h__2203__auto____329765;
} else
{var h__2203__auto____329766 = cljs.core.hash_coll.call(null,coll);
this__329764.__hash = h__2203__auto____329766;
return h__2203__auto____329766;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__329767 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__329768 = this;
var this__329769 = this;
return cljs.core.pr_str.call(null,this__329769);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__329770 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__329771 = this;
return cljs.core._first.call(null,this__329771.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__329772 = this;
var temp__3971__auto____329773 = cljs.core.next.call(null,this__329772.front);
if(temp__3971__auto____329773)
{var f1__329774 = temp__3971__auto____329773;
return (new cljs.core.PersistentQueueSeq(this__329772.meta,f1__329774,this__329772.rear,null));
} else
{if((this__329772.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__329772.meta,this__329772.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__329775 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__329776 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__329776.front,this__329776.rear,this__329776.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__329777 = this;
return this__329777.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__329778 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__329778.meta);
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
var this__329779 = this;
var h__2203__auto____329780 = this__329779.__hash;
if(!((h__2203__auto____329780 == null)))
{return h__2203__auto____329780;
} else
{var h__2203__auto____329781 = cljs.core.hash_coll.call(null,coll);
this__329779.__hash = h__2203__auto____329781;
return h__2203__auto____329781;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__329782 = this;
if(cljs.core.truth_(this__329782.front))
{return (new cljs.core.PersistentQueue(this__329782.meta,(this__329782.count + 1),this__329782.front,cljs.core.conj.call(null,(function (){var or__3824__auto____329783 = this__329782.rear;
if(cljs.core.truth_(or__3824__auto____329783))
{return or__3824__auto____329783;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__329782.meta,(this__329782.count + 1),cljs.core.conj.call(null,this__329782.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__329784 = this;
var this__329785 = this;
return cljs.core.pr_str.call(null,this__329785);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__329786 = this;
var rear__329787 = cljs.core.seq.call(null,this__329786.rear);
if(cljs.core.truth_((function (){var or__3824__auto____329788 = this__329786.front;
if(cljs.core.truth_(or__3824__auto____329788))
{return or__3824__auto____329788;
} else
{return rear__329787;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__329786.front,cljs.core.seq.call(null,rear__329787),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__329789 = this;
return this__329789.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__329790 = this;
return cljs.core._first.call(null,this__329790.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__329791 = this;
if(cljs.core.truth_(this__329791.front))
{var temp__3971__auto____329792 = cljs.core.next.call(null,this__329791.front);
if(temp__3971__auto____329792)
{var f1__329793 = temp__3971__auto____329792;
return (new cljs.core.PersistentQueue(this__329791.meta,(this__329791.count - 1),f1__329793,this__329791.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__329791.meta,(this__329791.count - 1),cljs.core.seq.call(null,this__329791.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__329794 = this;
return cljs.core.first.call(null,this__329794.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__329795 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__329796 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__329797 = this;
return (new cljs.core.PersistentQueue(meta,this__329797.count,this__329797.front,this__329797.rear,this__329797.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__329798 = this;
return this__329798.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__329799 = this;
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
var this__329800 = this;
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
var len__329803 = array.length;
var i__329804 = 0;
while(true){
if((i__329804 < len__329803))
{if((k === (array[i__329804])))
{return i__329804;
} else
{{
var G__329805 = (i__329804 + incr);
i__329804 = G__329805;
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
var a__329808 = cljs.core.hash.call(null,a);
var b__329809 = cljs.core.hash.call(null,b);
if((a__329808 < b__329809))
{return -1;
} else
{if((a__329808 > b__329809))
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
var ks__329817 = m.keys;
var len__329818 = ks__329817.length;
var so__329819 = m.strobj;
var out__329820 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__329821 = 0;
var out__329822 = cljs.core.transient$.call(null,out__329820);
while(true){
if((i__329821 < len__329818))
{var k__329823 = (ks__329817[i__329821]);
{
var G__329824 = (i__329821 + 1);
var G__329825 = cljs.core.assoc_BANG_.call(null,out__329822,k__329823,(so__329819[k__329823]));
i__329821 = G__329824;
out__329822 = G__329825;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__329822,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__329831 = {};
var l__329832 = ks.length;
var i__329833 = 0;
while(true){
if((i__329833 < l__329832))
{var k__329834 = (ks[i__329833]);
(new_obj__329831[k__329834] = (obj[k__329834]));
{
var G__329835 = (i__329833 + 1);
i__329833 = G__329835;
continue;
}
} else
{}
break;
}
return new_obj__329831;
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
var this__329838 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__329839 = this;
var h__2203__auto____329840 = this__329839.__hash;
if(!((h__2203__auto____329840 == null)))
{return h__2203__auto____329840;
} else
{var h__2203__auto____329841 = cljs.core.hash_imap.call(null,coll);
this__329839.__hash = h__2203__auto____329841;
return h__2203__auto____329841;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__329842 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__329843 = this;
if((function (){var and__3822__auto____329844 = goog.isString(k);
if(and__3822__auto____329844)
{return !((cljs.core.scan_array.call(null,1,k,this__329843.keys) == null));
} else
{return and__3822__auto____329844;
}
})())
{return (this__329843.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__329845 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____329846 = (this__329845.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____329846)
{return or__3824__auto____329846;
} else
{return (this__329845.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__329845.keys) == null)))
{var new_strobj__329847 = cljs.core.obj_clone.call(null,this__329845.strobj,this__329845.keys);
(new_strobj__329847[k] = v);
return (new cljs.core.ObjMap(this__329845.meta,this__329845.keys,new_strobj__329847,(this__329845.update_count + 1),null));
} else
{var new_strobj__329848 = cljs.core.obj_clone.call(null,this__329845.strobj,this__329845.keys);
var new_keys__329849 = this__329845.keys.slice();
(new_strobj__329848[k] = v);
new_keys__329849.push(k);
return (new cljs.core.ObjMap(this__329845.meta,new_keys__329849,new_strobj__329848,(this__329845.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__329850 = this;
if((function (){var and__3822__auto____329851 = goog.isString(k);
if(and__3822__auto____329851)
{return !((cljs.core.scan_array.call(null,1,k,this__329850.keys) == null));
} else
{return and__3822__auto____329851;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__329873 = null;
var G__329873__2 = (function (this_sym329852,k){
var this__329854 = this;
var this_sym329852__329855 = this;
var coll__329856 = this_sym329852__329855;
return coll__329856.cljs$core$ILookup$_lookup$arity$2(coll__329856,k);
});
var G__329873__3 = (function (this_sym329853,k,not_found){
var this__329854 = this;
var this_sym329853__329857 = this;
var coll__329858 = this_sym329853__329857;
return coll__329858.cljs$core$ILookup$_lookup$arity$3(coll__329858,k,not_found);
});
G__329873 = function(this_sym329853,k,not_found){
switch(arguments.length){
case 2:
return G__329873__2.call(this,this_sym329853,k);
case 3:
return G__329873__3.call(this,this_sym329853,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__329873;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym329836,args329837){
var this__329859 = this;
return this_sym329836.call.apply(this_sym329836,[this_sym329836].concat(args329837.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__329860 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__329861 = this;
var this__329862 = this;
return cljs.core.pr_str.call(null,this__329862);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__329863 = this;
if((this__329863.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__329826_SHARP_){
return cljs.core.vector.call(null,p1__329826_SHARP_,(this__329863.strobj[p1__329826_SHARP_]));
}),this__329863.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__329864 = this;
return this__329864.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__329865 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__329866 = this;
return (new cljs.core.ObjMap(meta,this__329866.keys,this__329866.strobj,this__329866.update_count,this__329866.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__329867 = this;
return this__329867.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__329868 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__329868.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__329869 = this;
if((function (){var and__3822__auto____329870 = goog.isString(k);
if(and__3822__auto____329870)
{return !((cljs.core.scan_array.call(null,1,k,this__329869.keys) == null));
} else
{return and__3822__auto____329870;
}
})())
{var new_keys__329871 = this__329869.keys.slice();
var new_strobj__329872 = cljs.core.obj_clone.call(null,this__329869.strobj,this__329869.keys);
new_keys__329871.splice(cljs.core.scan_array.call(null,1,k,new_keys__329871),1);
cljs.core.js_delete.call(null,new_strobj__329872,k);
return (new cljs.core.ObjMap(this__329869.meta,new_keys__329871,new_strobj__329872,(this__329869.update_count + 1),null));
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
var this__329877 = this;
var h__2203__auto____329878 = this__329877.__hash;
if(!((h__2203__auto____329878 == null)))
{return h__2203__auto____329878;
} else
{var h__2203__auto____329879 = cljs.core.hash_imap.call(null,coll);
this__329877.__hash = h__2203__auto____329879;
return h__2203__auto____329879;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__329880 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__329881 = this;
var bucket__329882 = (this__329881.hashobj[cljs.core.hash.call(null,k)]);
var i__329883 = (cljs.core.truth_(bucket__329882)?cljs.core.scan_array.call(null,2,k,bucket__329882):null);
if(cljs.core.truth_(i__329883))
{return (bucket__329882[(i__329883 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__329884 = this;
var h__329885 = cljs.core.hash.call(null,k);
var bucket__329886 = (this__329884.hashobj[h__329885]);
if(cljs.core.truth_(bucket__329886))
{var new_bucket__329887 = bucket__329886.slice();
var new_hashobj__329888 = goog.object.clone(this__329884.hashobj);
(new_hashobj__329888[h__329885] = new_bucket__329887);
var temp__3971__auto____329889 = cljs.core.scan_array.call(null,2,k,new_bucket__329887);
if(cljs.core.truth_(temp__3971__auto____329889))
{var i__329890 = temp__3971__auto____329889;
(new_bucket__329887[(i__329890 + 1)] = v);
return (new cljs.core.HashMap(this__329884.meta,this__329884.count,new_hashobj__329888,null));
} else
{new_bucket__329887.push(k,v);
return (new cljs.core.HashMap(this__329884.meta,(this__329884.count + 1),new_hashobj__329888,null));
}
} else
{var new_hashobj__329891 = goog.object.clone(this__329884.hashobj);
(new_hashobj__329891[h__329885] = [k,v]);
return (new cljs.core.HashMap(this__329884.meta,(this__329884.count + 1),new_hashobj__329891,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__329892 = this;
var bucket__329893 = (this__329892.hashobj[cljs.core.hash.call(null,k)]);
var i__329894 = (cljs.core.truth_(bucket__329893)?cljs.core.scan_array.call(null,2,k,bucket__329893):null);
if(cljs.core.truth_(i__329894))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__329919 = null;
var G__329919__2 = (function (this_sym329895,k){
var this__329897 = this;
var this_sym329895__329898 = this;
var coll__329899 = this_sym329895__329898;
return coll__329899.cljs$core$ILookup$_lookup$arity$2(coll__329899,k);
});
var G__329919__3 = (function (this_sym329896,k,not_found){
var this__329897 = this;
var this_sym329896__329900 = this;
var coll__329901 = this_sym329896__329900;
return coll__329901.cljs$core$ILookup$_lookup$arity$3(coll__329901,k,not_found);
});
G__329919 = function(this_sym329896,k,not_found){
switch(arguments.length){
case 2:
return G__329919__2.call(this,this_sym329896,k);
case 3:
return G__329919__3.call(this,this_sym329896,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__329919;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym329875,args329876){
var this__329902 = this;
return this_sym329875.call.apply(this_sym329875,[this_sym329875].concat(args329876.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__329903 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__329904 = this;
var this__329905 = this;
return cljs.core.pr_str.call(null,this__329905);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__329906 = this;
if((this__329906.count > 0))
{var hashes__329907 = cljs.core.js_keys.call(null,this__329906.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__329874_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__329906.hashobj[p1__329874_SHARP_])));
}),hashes__329907);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__329908 = this;
return this__329908.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__329909 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__329910 = this;
return (new cljs.core.HashMap(meta,this__329910.count,this__329910.hashobj,this__329910.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__329911 = this;
return this__329911.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__329912 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__329912.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__329913 = this;
var h__329914 = cljs.core.hash.call(null,k);
var bucket__329915 = (this__329913.hashobj[h__329914]);
var i__329916 = (cljs.core.truth_(bucket__329915)?cljs.core.scan_array.call(null,2,k,bucket__329915):null);
if(cljs.core.not.call(null,i__329916))
{return coll;
} else
{var new_hashobj__329917 = goog.object.clone(this__329913.hashobj);
if((3 > bucket__329915.length))
{cljs.core.js_delete.call(null,new_hashobj__329917,h__329914);
} else
{var new_bucket__329918 = bucket__329915.slice();
new_bucket__329918.splice(i__329916,2);
(new_hashobj__329917[h__329914] = new_bucket__329918);
}
return (new cljs.core.HashMap(this__329913.meta,(this__329913.count - 1),new_hashobj__329917,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__329920 = ks.length;
var i__329921 = 0;
var out__329922 = cljs.core.HashMap.EMPTY;
while(true){
if((i__329921 < len__329920))
{{
var G__329923 = (i__329921 + 1);
var G__329924 = cljs.core.assoc.call(null,out__329922,(ks[i__329921]),(vs[i__329921]));
i__329921 = G__329923;
out__329922 = G__329924;
continue;
}
} else
{return out__329922;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__329928 = m.arr;
var len__329929 = arr__329928.length;
var i__329930 = 0;
while(true){
if((len__329929 <= i__329930))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__329928[i__329930]),k))
{return i__329930;
} else
{if("\uFDD0'else")
{{
var G__329931 = (i__329930 + 2);
i__329930 = G__329931;
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
var this__329934 = this;
return (new cljs.core.TransientArrayMap({},this__329934.arr.length,this__329934.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__329935 = this;
var h__2203__auto____329936 = this__329935.__hash;
if(!((h__2203__auto____329936 == null)))
{return h__2203__auto____329936;
} else
{var h__2203__auto____329937 = cljs.core.hash_imap.call(null,coll);
this__329935.__hash = h__2203__auto____329937;
return h__2203__auto____329937;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__329938 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__329939 = this;
var idx__329940 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__329940 === -1))
{return not_found;
} else
{return (this__329939.arr[(idx__329940 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__329941 = this;
var idx__329942 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__329942 === -1))
{if((this__329941.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__329941.meta,(this__329941.cnt + 1),(function (){var G__329943__329944 = this__329941.arr.slice();
G__329943__329944.push(k);
G__329943__329944.push(v);
return G__329943__329944;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__329941.arr[(idx__329942 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__329941.meta,this__329941.cnt,(function (){var G__329945__329946 = this__329941.arr.slice();
(G__329945__329946[(idx__329942 + 1)] = v);
return G__329945__329946;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__329947 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__329979 = null;
var G__329979__2 = (function (this_sym329948,k){
var this__329950 = this;
var this_sym329948__329951 = this;
var coll__329952 = this_sym329948__329951;
return coll__329952.cljs$core$ILookup$_lookup$arity$2(coll__329952,k);
});
var G__329979__3 = (function (this_sym329949,k,not_found){
var this__329950 = this;
var this_sym329949__329953 = this;
var coll__329954 = this_sym329949__329953;
return coll__329954.cljs$core$ILookup$_lookup$arity$3(coll__329954,k,not_found);
});
G__329979 = function(this_sym329949,k,not_found){
switch(arguments.length){
case 2:
return G__329979__2.call(this,this_sym329949,k);
case 3:
return G__329979__3.call(this,this_sym329949,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__329979;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym329932,args329933){
var this__329955 = this;
return this_sym329932.call.apply(this_sym329932,[this_sym329932].concat(args329933.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__329956 = this;
var len__329957 = this__329956.arr.length;
var i__329958 = 0;
var init__329959 = init;
while(true){
if((i__329958 < len__329957))
{var init__329960 = f.call(null,init__329959,(this__329956.arr[i__329958]),(this__329956.arr[(i__329958 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__329960))
{return cljs.core.deref.call(null,init__329960);
} else
{{
var G__329980 = (i__329958 + 2);
var G__329981 = init__329960;
i__329958 = G__329980;
init__329959 = G__329981;
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
var this__329961 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__329962 = this;
var this__329963 = this;
return cljs.core.pr_str.call(null,this__329963);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__329964 = this;
if((this__329964.cnt > 0))
{var len__329965 = this__329964.arr.length;
var array_map_seq__329966 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__329965))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__329964.arr[i]),(this__329964.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__329966.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__329967 = this;
return this__329967.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__329968 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__329969 = this;
return (new cljs.core.PersistentArrayMap(meta,this__329969.cnt,this__329969.arr,this__329969.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__329970 = this;
return this__329970.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__329971 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__329971.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__329972 = this;
var idx__329973 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__329973 >= 0))
{var len__329974 = this__329972.arr.length;
var new_len__329975 = (len__329974 - 2);
if((new_len__329975 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__329976 = cljs.core.make_array.call(null,new_len__329975);
var s__329977 = 0;
var d__329978 = 0;
while(true){
if((s__329977 >= len__329974))
{return (new cljs.core.PersistentArrayMap(this__329972.meta,(this__329972.cnt - 1),new_arr__329976,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__329972.arr[s__329977])))
{{
var G__329982 = (s__329977 + 2);
var G__329983 = d__329978;
s__329977 = G__329982;
d__329978 = G__329983;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__329976[d__329978] = (this__329972.arr[s__329977]));
(new_arr__329976[(d__329978 + 1)] = (this__329972.arr[(s__329977 + 1)]));
{
var G__329984 = (s__329977 + 2);
var G__329985 = (d__329978 + 2);
s__329977 = G__329984;
d__329978 = G__329985;
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
var len__329986 = cljs.core.count.call(null,ks);
var i__329987 = 0;
var out__329988 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__329987 < len__329986))
{{
var G__329989 = (i__329987 + 1);
var G__329990 = cljs.core.assoc_BANG_.call(null,out__329988,(ks[i__329987]),(vs[i__329987]));
i__329987 = G__329989;
out__329988 = G__329990;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__329988);
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
var this__329991 = this;
if(cljs.core.truth_(this__329991.editable_QMARK_))
{var idx__329992 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__329992 >= 0))
{(this__329991.arr[idx__329992] = (this__329991.arr[(this__329991.len - 2)]));
(this__329991.arr[(idx__329992 + 1)] = (this__329991.arr[(this__329991.len - 1)]));
var G__329993__329994 = this__329991.arr;
G__329993__329994.pop();
G__329993__329994.pop();
G__329993__329994;
this__329991.len = (this__329991.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__329995 = this;
if(cljs.core.truth_(this__329995.editable_QMARK_))
{var idx__329996 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__329996 === -1))
{if(((this__329995.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__329995.len = (this__329995.len + 2);
this__329995.arr.push(key);
this__329995.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__329995.len,this__329995.arr),key,val);
}
} else
{if((val === (this__329995.arr[(idx__329996 + 1)])))
{return tcoll;
} else
{(this__329995.arr[(idx__329996 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__329997 = this;
if(cljs.core.truth_(this__329997.editable_QMARK_))
{if((function (){var G__329998__329999 = o;
if(G__329998__329999)
{if((function (){var or__3824__auto____330000 = (G__329998__329999.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____330000)
{return or__3824__auto____330000;
} else
{return G__329998__329999.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__329998__329999.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__329998__329999);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__329998__329999);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__330001 = cljs.core.seq.call(null,o);
var tcoll__330002 = tcoll;
while(true){
var temp__3971__auto____330003 = cljs.core.first.call(null,es__330001);
if(cljs.core.truth_(temp__3971__auto____330003))
{var e__330004 = temp__3971__auto____330003;
{
var G__330010 = cljs.core.next.call(null,es__330001);
var G__330011 = tcoll__330002.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__330002,cljs.core.key.call(null,e__330004),cljs.core.val.call(null,e__330004));
es__330001 = G__330010;
tcoll__330002 = G__330011;
continue;
}
} else
{return tcoll__330002;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__330005 = this;
if(cljs.core.truth_(this__330005.editable_QMARK_))
{this__330005.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__330005.len,2),this__330005.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__330006 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__330007 = this;
if(cljs.core.truth_(this__330007.editable_QMARK_))
{var idx__330008 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__330008 === -1))
{return not_found;
} else
{return (this__330007.arr[(idx__330008 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__330009 = this;
if(cljs.core.truth_(this__330009.editable_QMARK_))
{return cljs.core.quot.call(null,this__330009.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__330014 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__330015 = 0;
while(true){
if((i__330015 < len))
{{
var G__330016 = cljs.core.assoc_BANG_.call(null,out__330014,(arr[i__330015]),(arr[(i__330015 + 1)]));
var G__330017 = (i__330015 + 2);
out__330014 = G__330016;
i__330015 = G__330017;
continue;
}
} else
{return out__330014;
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
var G__330022__330023 = arr.slice();
(G__330022__330023[i] = a);
return G__330022__330023;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__330024__330025 = arr.slice();
(G__330024__330025[i] = a);
(G__330024__330025[j] = b);
return G__330024__330025;
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
var new_arr__330027 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__330027,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__330027,(2 * i),(new_arr__330027.length - (2 * i)));
return new_arr__330027;
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
var editable__330030 = inode.ensure_editable(edit);
(editable__330030.arr[i] = a);
return editable__330030;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__330031 = inode.ensure_editable(edit);
(editable__330031.arr[i] = a);
(editable__330031.arr[j] = b);
return editable__330031;
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
var len__330038 = arr.length;
var i__330039 = 0;
var init__330040 = init;
while(true){
if((i__330039 < len__330038))
{var init__330043 = (function (){var k__330041 = (arr[i__330039]);
if(!((k__330041 == null)))
{return f.call(null,init__330040,k__330041,(arr[(i__330039 + 1)]));
} else
{var node__330042 = (arr[(i__330039 + 1)]);
if(!((node__330042 == null)))
{return node__330042.kv_reduce(f,init__330040);
} else
{return init__330040;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__330043))
{return cljs.core.deref.call(null,init__330043);
} else
{{
var G__330044 = (i__330039 + 2);
var G__330045 = init__330043;
i__330039 = G__330044;
init__330040 = G__330045;
continue;
}
}
} else
{return init__330040;
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
var this__330046 = this;
var inode__330047 = this;
if((this__330046.bitmap === bit))
{return null;
} else
{var editable__330048 = inode__330047.ensure_editable(e);
var earr__330049 = editable__330048.arr;
var len__330050 = earr__330049.length;
editable__330048.bitmap = (bit ^ editable__330048.bitmap);
cljs.core.array_copy.call(null,earr__330049,(2 * (i + 1)),earr__330049,(2 * i),(len__330050 - (2 * (i + 1))));
(earr__330049[(len__330050 - 2)] = null);
(earr__330049[(len__330050 - 1)] = null);
return editable__330048;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__330051 = this;
var inode__330052 = this;
var bit__330053 = (1 << ((hash >>> shift) & 0x01f));
var idx__330054 = cljs.core.bitmap_indexed_node_index.call(null,this__330051.bitmap,bit__330053);
if(((this__330051.bitmap & bit__330053) === 0))
{var n__330055 = cljs.core.bit_count.call(null,this__330051.bitmap);
if(((2 * n__330055) < this__330051.arr.length))
{var editable__330056 = inode__330052.ensure_editable(edit);
var earr__330057 = editable__330056.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__330057,(2 * idx__330054),earr__330057,(2 * (idx__330054 + 1)),(2 * (n__330055 - idx__330054)));
(earr__330057[(2 * idx__330054)] = key);
(earr__330057[((2 * idx__330054) + 1)] = val);
editable__330056.bitmap = (editable__330056.bitmap | bit__330053);
return editable__330056;
} else
{if((n__330055 >= 16))
{var nodes__330058 = cljs.core.make_array.call(null,32);
var jdx__330059 = ((hash >>> shift) & 0x01f);
(nodes__330058[jdx__330059] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__330060 = 0;
var j__330061 = 0;
while(true){
if((i__330060 < 32))
{if((((this__330051.bitmap >>> i__330060) & 1) === 0))
{{
var G__330114 = (i__330060 + 1);
var G__330115 = j__330061;
i__330060 = G__330114;
j__330061 = G__330115;
continue;
}
} else
{(nodes__330058[i__330060] = ((!(((this__330051.arr[j__330061]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__330051.arr[j__330061])),(this__330051.arr[j__330061]),(this__330051.arr[(j__330061 + 1)]),added_leaf_QMARK_):(this__330051.arr[(j__330061 + 1)])));
{
var G__330116 = (i__330060 + 1);
var G__330117 = (j__330061 + 2);
i__330060 = G__330116;
j__330061 = G__330117;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__330055 + 1),nodes__330058));
} else
{if("\uFDD0'else")
{var new_arr__330062 = cljs.core.make_array.call(null,(2 * (n__330055 + 4)));
cljs.core.array_copy.call(null,this__330051.arr,0,new_arr__330062,0,(2 * idx__330054));
(new_arr__330062[(2 * idx__330054)] = key);
(new_arr__330062[((2 * idx__330054) + 1)] = val);
cljs.core.array_copy.call(null,this__330051.arr,(2 * idx__330054),new_arr__330062,(2 * (idx__330054 + 1)),(2 * (n__330055 - idx__330054)));
added_leaf_QMARK_.val = true;
var editable__330063 = inode__330052.ensure_editable(edit);
editable__330063.arr = new_arr__330062;
editable__330063.bitmap = (editable__330063.bitmap | bit__330053);
return editable__330063;
} else
{return null;
}
}
}
} else
{var key_or_nil__330064 = (this__330051.arr[(2 * idx__330054)]);
var val_or_node__330065 = (this__330051.arr[((2 * idx__330054) + 1)]);
if((key_or_nil__330064 == null))
{var n__330066 = val_or_node__330065.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__330066 === val_or_node__330065))
{return inode__330052;
} else
{return cljs.core.edit_and_set.call(null,inode__330052,edit,((2 * idx__330054) + 1),n__330066);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__330064))
{if((val === val_or_node__330065))
{return inode__330052;
} else
{return cljs.core.edit_and_set.call(null,inode__330052,edit,((2 * idx__330054) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__330052,edit,(2 * idx__330054),null,((2 * idx__330054) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__330064,val_or_node__330065,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__330067 = this;
var inode__330068 = this;
return cljs.core.create_inode_seq.call(null,this__330067.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__330069 = this;
var inode__330070 = this;
var bit__330071 = (1 << ((hash >>> shift) & 0x01f));
if(((this__330069.bitmap & bit__330071) === 0))
{return inode__330070;
} else
{var idx__330072 = cljs.core.bitmap_indexed_node_index.call(null,this__330069.bitmap,bit__330071);
var key_or_nil__330073 = (this__330069.arr[(2 * idx__330072)]);
var val_or_node__330074 = (this__330069.arr[((2 * idx__330072) + 1)]);
if((key_or_nil__330073 == null))
{var n__330075 = val_or_node__330074.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__330075 === val_or_node__330074))
{return inode__330070;
} else
{if(!((n__330075 == null)))
{return cljs.core.edit_and_set.call(null,inode__330070,edit,((2 * idx__330072) + 1),n__330075);
} else
{if((this__330069.bitmap === bit__330071))
{return null;
} else
{if("\uFDD0'else")
{return inode__330070.edit_and_remove_pair(edit,bit__330071,idx__330072);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__330073))
{(removed_leaf_QMARK_[0] = true);
return inode__330070.edit_and_remove_pair(edit,bit__330071,idx__330072);
} else
{if("\uFDD0'else")
{return inode__330070;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__330076 = this;
var inode__330077 = this;
if((e === this__330076.edit))
{return inode__330077;
} else
{var n__330078 = cljs.core.bit_count.call(null,this__330076.bitmap);
var new_arr__330079 = cljs.core.make_array.call(null,(((n__330078 < 0))?4:(2 * (n__330078 + 1))));
cljs.core.array_copy.call(null,this__330076.arr,0,new_arr__330079,0,(2 * n__330078));
return (new cljs.core.BitmapIndexedNode(e,this__330076.bitmap,new_arr__330079));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__330080 = this;
var inode__330081 = this;
return cljs.core.inode_kv_reduce.call(null,this__330080.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__330082 = this;
var inode__330083 = this;
var bit__330084 = (1 << ((hash >>> shift) & 0x01f));
if(((this__330082.bitmap & bit__330084) === 0))
{return not_found;
} else
{var idx__330085 = cljs.core.bitmap_indexed_node_index.call(null,this__330082.bitmap,bit__330084);
var key_or_nil__330086 = (this__330082.arr[(2 * idx__330085)]);
var val_or_node__330087 = (this__330082.arr[((2 * idx__330085) + 1)]);
if((key_or_nil__330086 == null))
{return val_or_node__330087.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__330086))
{return cljs.core.PersistentVector.fromArray([key_or_nil__330086,val_or_node__330087], true);
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
var this__330088 = this;
var inode__330089 = this;
var bit__330090 = (1 << ((hash >>> shift) & 0x01f));
if(((this__330088.bitmap & bit__330090) === 0))
{return inode__330089;
} else
{var idx__330091 = cljs.core.bitmap_indexed_node_index.call(null,this__330088.bitmap,bit__330090);
var key_or_nil__330092 = (this__330088.arr[(2 * idx__330091)]);
var val_or_node__330093 = (this__330088.arr[((2 * idx__330091) + 1)]);
if((key_or_nil__330092 == null))
{var n__330094 = val_or_node__330093.inode_without((shift + 5),hash,key);
if((n__330094 === val_or_node__330093))
{return inode__330089;
} else
{if(!((n__330094 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__330088.bitmap,cljs.core.clone_and_set.call(null,this__330088.arr,((2 * idx__330091) + 1),n__330094)));
} else
{if((this__330088.bitmap === bit__330090))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__330088.bitmap ^ bit__330090),cljs.core.remove_pair.call(null,this__330088.arr,idx__330091)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__330092))
{return (new cljs.core.BitmapIndexedNode(null,(this__330088.bitmap ^ bit__330090),cljs.core.remove_pair.call(null,this__330088.arr,idx__330091)));
} else
{if("\uFDD0'else")
{return inode__330089;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__330095 = this;
var inode__330096 = this;
var bit__330097 = (1 << ((hash >>> shift) & 0x01f));
var idx__330098 = cljs.core.bitmap_indexed_node_index.call(null,this__330095.bitmap,bit__330097);
if(((this__330095.bitmap & bit__330097) === 0))
{var n__330099 = cljs.core.bit_count.call(null,this__330095.bitmap);
if((n__330099 >= 16))
{var nodes__330100 = cljs.core.make_array.call(null,32);
var jdx__330101 = ((hash >>> shift) & 0x01f);
(nodes__330100[jdx__330101] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__330102 = 0;
var j__330103 = 0;
while(true){
if((i__330102 < 32))
{if((((this__330095.bitmap >>> i__330102) & 1) === 0))
{{
var G__330118 = (i__330102 + 1);
var G__330119 = j__330103;
i__330102 = G__330118;
j__330103 = G__330119;
continue;
}
} else
{(nodes__330100[i__330102] = ((!(((this__330095.arr[j__330103]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__330095.arr[j__330103])),(this__330095.arr[j__330103]),(this__330095.arr[(j__330103 + 1)]),added_leaf_QMARK_):(this__330095.arr[(j__330103 + 1)])));
{
var G__330120 = (i__330102 + 1);
var G__330121 = (j__330103 + 2);
i__330102 = G__330120;
j__330103 = G__330121;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__330099 + 1),nodes__330100));
} else
{var new_arr__330104 = cljs.core.make_array.call(null,(2 * (n__330099 + 1)));
cljs.core.array_copy.call(null,this__330095.arr,0,new_arr__330104,0,(2 * idx__330098));
(new_arr__330104[(2 * idx__330098)] = key);
(new_arr__330104[((2 * idx__330098) + 1)] = val);
cljs.core.array_copy.call(null,this__330095.arr,(2 * idx__330098),new_arr__330104,(2 * (idx__330098 + 1)),(2 * (n__330099 - idx__330098)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__330095.bitmap | bit__330097),new_arr__330104));
}
} else
{var key_or_nil__330105 = (this__330095.arr[(2 * idx__330098)]);
var val_or_node__330106 = (this__330095.arr[((2 * idx__330098) + 1)]);
if((key_or_nil__330105 == null))
{var n__330107 = val_or_node__330106.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__330107 === val_or_node__330106))
{return inode__330096;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__330095.bitmap,cljs.core.clone_and_set.call(null,this__330095.arr,((2 * idx__330098) + 1),n__330107)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__330105))
{if((val === val_or_node__330106))
{return inode__330096;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__330095.bitmap,cljs.core.clone_and_set.call(null,this__330095.arr,((2 * idx__330098) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__330095.bitmap,cljs.core.clone_and_set.call(null,this__330095.arr,(2 * idx__330098),null,((2 * idx__330098) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__330105,val_or_node__330106,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__330108 = this;
var inode__330109 = this;
var bit__330110 = (1 << ((hash >>> shift) & 0x01f));
if(((this__330108.bitmap & bit__330110) === 0))
{return not_found;
} else
{var idx__330111 = cljs.core.bitmap_indexed_node_index.call(null,this__330108.bitmap,bit__330110);
var key_or_nil__330112 = (this__330108.arr[(2 * idx__330111)]);
var val_or_node__330113 = (this__330108.arr[((2 * idx__330111) + 1)]);
if((key_or_nil__330112 == null))
{return val_or_node__330113.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__330112))
{return val_or_node__330113;
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
var arr__330129 = array_node.arr;
var len__330130 = (2 * (array_node.cnt - 1));
var new_arr__330131 = cljs.core.make_array.call(null,len__330130);
var i__330132 = 0;
var j__330133 = 1;
var bitmap__330134 = 0;
while(true){
if((i__330132 < len__330130))
{if((function (){var and__3822__auto____330135 = !((i__330132 === idx));
if(and__3822__auto____330135)
{return !(((arr__330129[i__330132]) == null));
} else
{return and__3822__auto____330135;
}
})())
{(new_arr__330131[j__330133] = (arr__330129[i__330132]));
{
var G__330136 = (i__330132 + 1);
var G__330137 = (j__330133 + 2);
var G__330138 = (bitmap__330134 | (1 << i__330132));
i__330132 = G__330136;
j__330133 = G__330137;
bitmap__330134 = G__330138;
continue;
}
} else
{{
var G__330139 = (i__330132 + 1);
var G__330140 = j__330133;
var G__330141 = bitmap__330134;
i__330132 = G__330139;
j__330133 = G__330140;
bitmap__330134 = G__330141;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__330134,new_arr__330131));
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
var this__330142 = this;
var inode__330143 = this;
var idx__330144 = ((hash >>> shift) & 0x01f);
var node__330145 = (this__330142.arr[idx__330144]);
if((node__330145 == null))
{var editable__330146 = cljs.core.edit_and_set.call(null,inode__330143,edit,idx__330144,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__330146.cnt = (editable__330146.cnt + 1);
return editable__330146;
} else
{var n__330147 = node__330145.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__330147 === node__330145))
{return inode__330143;
} else
{return cljs.core.edit_and_set.call(null,inode__330143,edit,idx__330144,n__330147);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__330148 = this;
var inode__330149 = this;
return cljs.core.create_array_node_seq.call(null,this__330148.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__330150 = this;
var inode__330151 = this;
var idx__330152 = ((hash >>> shift) & 0x01f);
var node__330153 = (this__330150.arr[idx__330152]);
if((node__330153 == null))
{return inode__330151;
} else
{var n__330154 = node__330153.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__330154 === node__330153))
{return inode__330151;
} else
{if((n__330154 == null))
{if((this__330150.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__330151,edit,idx__330152);
} else
{var editable__330155 = cljs.core.edit_and_set.call(null,inode__330151,edit,idx__330152,n__330154);
editable__330155.cnt = (editable__330155.cnt - 1);
return editable__330155;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__330151,edit,idx__330152,n__330154);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__330156 = this;
var inode__330157 = this;
if((e === this__330156.edit))
{return inode__330157;
} else
{return (new cljs.core.ArrayNode(e,this__330156.cnt,this__330156.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__330158 = this;
var inode__330159 = this;
var len__330160 = this__330158.arr.length;
var i__330161 = 0;
var init__330162 = init;
while(true){
if((i__330161 < len__330160))
{var node__330163 = (this__330158.arr[i__330161]);
if(!((node__330163 == null)))
{var init__330164 = node__330163.kv_reduce(f,init__330162);
if(cljs.core.reduced_QMARK_.call(null,init__330164))
{return cljs.core.deref.call(null,init__330164);
} else
{{
var G__330183 = (i__330161 + 1);
var G__330184 = init__330164;
i__330161 = G__330183;
init__330162 = G__330184;
continue;
}
}
} else
{return null;
}
} else
{return init__330162;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__330165 = this;
var inode__330166 = this;
var idx__330167 = ((hash >>> shift) & 0x01f);
var node__330168 = (this__330165.arr[idx__330167]);
if(!((node__330168 == null)))
{return node__330168.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__330169 = this;
var inode__330170 = this;
var idx__330171 = ((hash >>> shift) & 0x01f);
var node__330172 = (this__330169.arr[idx__330171]);
if(!((node__330172 == null)))
{var n__330173 = node__330172.inode_without((shift + 5),hash,key);
if((n__330173 === node__330172))
{return inode__330170;
} else
{if((n__330173 == null))
{if((this__330169.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__330170,null,idx__330171);
} else
{return (new cljs.core.ArrayNode(null,(this__330169.cnt - 1),cljs.core.clone_and_set.call(null,this__330169.arr,idx__330171,n__330173)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__330169.cnt,cljs.core.clone_and_set.call(null,this__330169.arr,idx__330171,n__330173)));
} else
{return null;
}
}
}
} else
{return inode__330170;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__330174 = this;
var inode__330175 = this;
var idx__330176 = ((hash >>> shift) & 0x01f);
var node__330177 = (this__330174.arr[idx__330176]);
if((node__330177 == null))
{return (new cljs.core.ArrayNode(null,(this__330174.cnt + 1),cljs.core.clone_and_set.call(null,this__330174.arr,idx__330176,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__330178 = node__330177.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__330178 === node__330177))
{return inode__330175;
} else
{return (new cljs.core.ArrayNode(null,this__330174.cnt,cljs.core.clone_and_set.call(null,this__330174.arr,idx__330176,n__330178)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__330179 = this;
var inode__330180 = this;
var idx__330181 = ((hash >>> shift) & 0x01f);
var node__330182 = (this__330179.arr[idx__330181]);
if(!((node__330182 == null)))
{return node__330182.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__330187 = (2 * cnt);
var i__330188 = 0;
while(true){
if((i__330188 < lim__330187))
{if(cljs.core.key_test.call(null,key,(arr[i__330188])))
{return i__330188;
} else
{{
var G__330189 = (i__330188 + 2);
i__330188 = G__330189;
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
var this__330190 = this;
var inode__330191 = this;
if((hash === this__330190.collision_hash))
{var idx__330192 = cljs.core.hash_collision_node_find_index.call(null,this__330190.arr,this__330190.cnt,key);
if((idx__330192 === -1))
{if((this__330190.arr.length > (2 * this__330190.cnt)))
{var editable__330193 = cljs.core.edit_and_set.call(null,inode__330191,edit,(2 * this__330190.cnt),key,((2 * this__330190.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__330193.cnt = (editable__330193.cnt + 1);
return editable__330193;
} else
{var len__330194 = this__330190.arr.length;
var new_arr__330195 = cljs.core.make_array.call(null,(len__330194 + 2));
cljs.core.array_copy.call(null,this__330190.arr,0,new_arr__330195,0,len__330194);
(new_arr__330195[len__330194] = key);
(new_arr__330195[(len__330194 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__330191.ensure_editable_array(edit,(this__330190.cnt + 1),new_arr__330195);
}
} else
{if(((this__330190.arr[(idx__330192 + 1)]) === val))
{return inode__330191;
} else
{return cljs.core.edit_and_set.call(null,inode__330191,edit,(idx__330192 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__330190.collision_hash >>> shift) & 0x01f)),[null,inode__330191,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__330196 = this;
var inode__330197 = this;
return cljs.core.create_inode_seq.call(null,this__330196.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__330198 = this;
var inode__330199 = this;
var idx__330200 = cljs.core.hash_collision_node_find_index.call(null,this__330198.arr,this__330198.cnt,key);
if((idx__330200 === -1))
{return inode__330199;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__330198.cnt === 1))
{return null;
} else
{var editable__330201 = inode__330199.ensure_editable(edit);
var earr__330202 = editable__330201.arr;
(earr__330202[idx__330200] = (earr__330202[((2 * this__330198.cnt) - 2)]));
(earr__330202[(idx__330200 + 1)] = (earr__330202[((2 * this__330198.cnt) - 1)]));
(earr__330202[((2 * this__330198.cnt) - 1)] = null);
(earr__330202[((2 * this__330198.cnt) - 2)] = null);
editable__330201.cnt = (editable__330201.cnt - 1);
return editable__330201;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__330203 = this;
var inode__330204 = this;
if((e === this__330203.edit))
{return inode__330204;
} else
{var new_arr__330205 = cljs.core.make_array.call(null,(2 * (this__330203.cnt + 1)));
cljs.core.array_copy.call(null,this__330203.arr,0,new_arr__330205,0,(2 * this__330203.cnt));
return (new cljs.core.HashCollisionNode(e,this__330203.collision_hash,this__330203.cnt,new_arr__330205));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__330206 = this;
var inode__330207 = this;
return cljs.core.inode_kv_reduce.call(null,this__330206.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__330208 = this;
var inode__330209 = this;
var idx__330210 = cljs.core.hash_collision_node_find_index.call(null,this__330208.arr,this__330208.cnt,key);
if((idx__330210 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__330208.arr[idx__330210])))
{return cljs.core.PersistentVector.fromArray([(this__330208.arr[idx__330210]),(this__330208.arr[(idx__330210 + 1)])], true);
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
var this__330211 = this;
var inode__330212 = this;
var idx__330213 = cljs.core.hash_collision_node_find_index.call(null,this__330211.arr,this__330211.cnt,key);
if((idx__330213 === -1))
{return inode__330212;
} else
{if((this__330211.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__330211.collision_hash,(this__330211.cnt - 1),cljs.core.remove_pair.call(null,this__330211.arr,cljs.core.quot.call(null,idx__330213,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__330214 = this;
var inode__330215 = this;
if((hash === this__330214.collision_hash))
{var idx__330216 = cljs.core.hash_collision_node_find_index.call(null,this__330214.arr,this__330214.cnt,key);
if((idx__330216 === -1))
{var len__330217 = this__330214.arr.length;
var new_arr__330218 = cljs.core.make_array.call(null,(len__330217 + 2));
cljs.core.array_copy.call(null,this__330214.arr,0,new_arr__330218,0,len__330217);
(new_arr__330218[len__330217] = key);
(new_arr__330218[(len__330217 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__330214.collision_hash,(this__330214.cnt + 1),new_arr__330218));
} else
{if(cljs.core._EQ_.call(null,(this__330214.arr[idx__330216]),val))
{return inode__330215;
} else
{return (new cljs.core.HashCollisionNode(null,this__330214.collision_hash,this__330214.cnt,cljs.core.clone_and_set.call(null,this__330214.arr,(idx__330216 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__330214.collision_hash >>> shift) & 0x01f)),[null,inode__330215])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__330219 = this;
var inode__330220 = this;
var idx__330221 = cljs.core.hash_collision_node_find_index.call(null,this__330219.arr,this__330219.cnt,key);
if((idx__330221 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__330219.arr[idx__330221])))
{return (this__330219.arr[(idx__330221 + 1)]);
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
var this__330222 = this;
var inode__330223 = this;
if((e === this__330222.edit))
{this__330222.arr = array;
this__330222.cnt = count;
return inode__330223;
} else
{return (new cljs.core.HashCollisionNode(this__330222.edit,this__330222.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__330228 = cljs.core.hash.call(null,key1);
if((key1hash__330228 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__330228,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___330229 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__330228,key1,val1,added_leaf_QMARK___330229).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___330229);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__330230 = cljs.core.hash.call(null,key1);
if((key1hash__330230 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__330230,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___330231 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__330230,key1,val1,added_leaf_QMARK___330231).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___330231);
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
var this__330232 = this;
var h__2203__auto____330233 = this__330232.__hash;
if(!((h__2203__auto____330233 == null)))
{return h__2203__auto____330233;
} else
{var h__2203__auto____330234 = cljs.core.hash_coll.call(null,coll);
this__330232.__hash = h__2203__auto____330234;
return h__2203__auto____330234;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__330235 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__330236 = this;
var this__330237 = this;
return cljs.core.pr_str.call(null,this__330237);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__330238 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__330239 = this;
if((this__330239.s == null))
{return cljs.core.PersistentVector.fromArray([(this__330239.nodes[this__330239.i]),(this__330239.nodes[(this__330239.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__330239.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__330240 = this;
if((this__330240.s == null))
{return cljs.core.create_inode_seq.call(null,this__330240.nodes,(this__330240.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__330240.nodes,this__330240.i,cljs.core.next.call(null,this__330240.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__330241 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__330242 = this;
return (new cljs.core.NodeSeq(meta,this__330242.nodes,this__330242.i,this__330242.s,this__330242.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__330243 = this;
return this__330243.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__330244 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__330244.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__330251 = nodes.length;
var j__330252 = i;
while(true){
if((j__330252 < len__330251))
{if(!(((nodes[j__330252]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__330252,null,null));
} else
{var temp__3971__auto____330253 = (nodes[(j__330252 + 1)]);
if(cljs.core.truth_(temp__3971__auto____330253))
{var node__330254 = temp__3971__auto____330253;
var temp__3971__auto____330255 = node__330254.inode_seq();
if(cljs.core.truth_(temp__3971__auto____330255))
{var node_seq__330256 = temp__3971__auto____330255;
return (new cljs.core.NodeSeq(null,nodes,(j__330252 + 2),node_seq__330256,null));
} else
{{
var G__330257 = (j__330252 + 2);
j__330252 = G__330257;
continue;
}
}
} else
{{
var G__330258 = (j__330252 + 2);
j__330252 = G__330258;
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
var this__330259 = this;
var h__2203__auto____330260 = this__330259.__hash;
if(!((h__2203__auto____330260 == null)))
{return h__2203__auto____330260;
} else
{var h__2203__auto____330261 = cljs.core.hash_coll.call(null,coll);
this__330259.__hash = h__2203__auto____330261;
return h__2203__auto____330261;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__330262 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__330263 = this;
var this__330264 = this;
return cljs.core.pr_str.call(null,this__330264);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__330265 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__330266 = this;
return cljs.core.first.call(null,this__330266.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__330267 = this;
return cljs.core.create_array_node_seq.call(null,null,this__330267.nodes,this__330267.i,cljs.core.next.call(null,this__330267.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__330268 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__330269 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__330269.nodes,this__330269.i,this__330269.s,this__330269.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__330270 = this;
return this__330270.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__330271 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__330271.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__330278 = nodes.length;
var j__330279 = i;
while(true){
if((j__330279 < len__330278))
{var temp__3971__auto____330280 = (nodes[j__330279]);
if(cljs.core.truth_(temp__3971__auto____330280))
{var nj__330281 = temp__3971__auto____330280;
var temp__3971__auto____330282 = nj__330281.inode_seq();
if(cljs.core.truth_(temp__3971__auto____330282))
{var ns__330283 = temp__3971__auto____330282;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__330279 + 1),ns__330283,null));
} else
{{
var G__330284 = (j__330279 + 1);
j__330279 = G__330284;
continue;
}
}
} else
{{
var G__330285 = (j__330279 + 1);
j__330279 = G__330285;
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
var this__330288 = this;
return (new cljs.core.TransientHashMap({},this__330288.root,this__330288.cnt,this__330288.has_nil_QMARK_,this__330288.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__330289 = this;
var h__2203__auto____330290 = this__330289.__hash;
if(!((h__2203__auto____330290 == null)))
{return h__2203__auto____330290;
} else
{var h__2203__auto____330291 = cljs.core.hash_imap.call(null,coll);
this__330289.__hash = h__2203__auto____330291;
return h__2203__auto____330291;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__330292 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__330293 = this;
if((k == null))
{if(this__330293.has_nil_QMARK_)
{return this__330293.nil_val;
} else
{return not_found;
}
} else
{if((this__330293.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__330293.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__330294 = this;
if((k == null))
{if((function (){var and__3822__auto____330295 = this__330294.has_nil_QMARK_;
if(and__3822__auto____330295)
{return (v === this__330294.nil_val);
} else
{return and__3822__auto____330295;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__330294.meta,((this__330294.has_nil_QMARK_)?this__330294.cnt:(this__330294.cnt + 1)),this__330294.root,true,v,null));
}
} else
{var added_leaf_QMARK___330296 = (new cljs.core.Box(false));
var new_root__330297 = (((this__330294.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__330294.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___330296);
if((new_root__330297 === this__330294.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__330294.meta,((added_leaf_QMARK___330296.val)?(this__330294.cnt + 1):this__330294.cnt),new_root__330297,this__330294.has_nil_QMARK_,this__330294.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__330298 = this;
if((k == null))
{return this__330298.has_nil_QMARK_;
} else
{if((this__330298.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__330298.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__330321 = null;
var G__330321__2 = (function (this_sym330299,k){
var this__330301 = this;
var this_sym330299__330302 = this;
var coll__330303 = this_sym330299__330302;
return coll__330303.cljs$core$ILookup$_lookup$arity$2(coll__330303,k);
});
var G__330321__3 = (function (this_sym330300,k,not_found){
var this__330301 = this;
var this_sym330300__330304 = this;
var coll__330305 = this_sym330300__330304;
return coll__330305.cljs$core$ILookup$_lookup$arity$3(coll__330305,k,not_found);
});
G__330321 = function(this_sym330300,k,not_found){
switch(arguments.length){
case 2:
return G__330321__2.call(this,this_sym330300,k);
case 3:
return G__330321__3.call(this,this_sym330300,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__330321;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym330286,args330287){
var this__330306 = this;
return this_sym330286.call.apply(this_sym330286,[this_sym330286].concat(args330287.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__330307 = this;
var init__330308 = ((this__330307.has_nil_QMARK_)?f.call(null,init,null,this__330307.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__330308))
{return cljs.core.deref.call(null,init__330308);
} else
{if(!((this__330307.root == null)))
{return this__330307.root.kv_reduce(f,init__330308);
} else
{if("\uFDD0'else")
{return init__330308;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__330309 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__330310 = this;
var this__330311 = this;
return cljs.core.pr_str.call(null,this__330311);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__330312 = this;
if((this__330312.cnt > 0))
{var s__330313 = ((!((this__330312.root == null)))?this__330312.root.inode_seq():null);
if(this__330312.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__330312.nil_val], true),s__330313);
} else
{return s__330313;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__330314 = this;
return this__330314.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__330315 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__330316 = this;
return (new cljs.core.PersistentHashMap(meta,this__330316.cnt,this__330316.root,this__330316.has_nil_QMARK_,this__330316.nil_val,this__330316.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__330317 = this;
return this__330317.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__330318 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__330318.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__330319 = this;
if((k == null))
{if(this__330319.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__330319.meta,(this__330319.cnt - 1),this__330319.root,false,null,null));
} else
{return coll;
}
} else
{if((this__330319.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__330320 = this__330319.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__330320 === this__330319.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__330319.meta,(this__330319.cnt - 1),new_root__330320,this__330319.has_nil_QMARK_,this__330319.nil_val,null));
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
var len__330322 = ks.length;
var i__330323 = 0;
var out__330324 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__330323 < len__330322))
{{
var G__330325 = (i__330323 + 1);
var G__330326 = cljs.core.assoc_BANG_.call(null,out__330324,(ks[i__330323]),(vs[i__330323]));
i__330323 = G__330325;
out__330324 = G__330326;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__330324);
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
var this__330327 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__330328 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__330329 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__330330 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__330331 = this;
if((k == null))
{if(this__330331.has_nil_QMARK_)
{return this__330331.nil_val;
} else
{return null;
}
} else
{if((this__330331.root == null))
{return null;
} else
{return this__330331.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__330332 = this;
if((k == null))
{if(this__330332.has_nil_QMARK_)
{return this__330332.nil_val;
} else
{return not_found;
}
} else
{if((this__330332.root == null))
{return not_found;
} else
{return this__330332.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__330333 = this;
if(this__330333.edit)
{return this__330333.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__330334 = this;
var tcoll__330335 = this;
if(this__330334.edit)
{if((function (){var G__330336__330337 = o;
if(G__330336__330337)
{if((function (){var or__3824__auto____330338 = (G__330336__330337.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____330338)
{return or__3824__auto____330338;
} else
{return G__330336__330337.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__330336__330337.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__330336__330337);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__330336__330337);
}
})())
{return tcoll__330335.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__330339 = cljs.core.seq.call(null,o);
var tcoll__330340 = tcoll__330335;
while(true){
var temp__3971__auto____330341 = cljs.core.first.call(null,es__330339);
if(cljs.core.truth_(temp__3971__auto____330341))
{var e__330342 = temp__3971__auto____330341;
{
var G__330353 = cljs.core.next.call(null,es__330339);
var G__330354 = tcoll__330340.assoc_BANG_(cljs.core.key.call(null,e__330342),cljs.core.val.call(null,e__330342));
es__330339 = G__330353;
tcoll__330340 = G__330354;
continue;
}
} else
{return tcoll__330340;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__330343 = this;
var tcoll__330344 = this;
if(this__330343.edit)
{if((k == null))
{if((this__330343.nil_val === v))
{} else
{this__330343.nil_val = v;
}
if(this__330343.has_nil_QMARK_)
{} else
{this__330343.count = (this__330343.count + 1);
this__330343.has_nil_QMARK_ = true;
}
return tcoll__330344;
} else
{var added_leaf_QMARK___330345 = (new cljs.core.Box(false));
var node__330346 = (((this__330343.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__330343.root).inode_assoc_BANG_(this__330343.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___330345);
if((node__330346 === this__330343.root))
{} else
{this__330343.root = node__330346;
}
if(added_leaf_QMARK___330345.val)
{this__330343.count = (this__330343.count + 1);
} else
{}
return tcoll__330344;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__330347 = this;
var tcoll__330348 = this;
if(this__330347.edit)
{if((k == null))
{if(this__330347.has_nil_QMARK_)
{this__330347.has_nil_QMARK_ = false;
this__330347.nil_val = null;
this__330347.count = (this__330347.count - 1);
return tcoll__330348;
} else
{return tcoll__330348;
}
} else
{if((this__330347.root == null))
{return tcoll__330348;
} else
{var removed_leaf_QMARK___330349 = (new cljs.core.Box(false));
var node__330350 = this__330347.root.inode_without_BANG_(this__330347.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___330349);
if((node__330350 === this__330347.root))
{} else
{this__330347.root = node__330350;
}
if(cljs.core.truth_((removed_leaf_QMARK___330349[0])))
{this__330347.count = (this__330347.count - 1);
} else
{}
return tcoll__330348;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__330351 = this;
var tcoll__330352 = this;
if(this__330351.edit)
{this__330351.edit = null;
return (new cljs.core.PersistentHashMap(null,this__330351.count,this__330351.root,this__330351.has_nil_QMARK_,this__330351.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__330357 = node;
var stack__330358 = stack;
while(true){
if(!((t__330357 == null)))
{{
var G__330359 = ((ascending_QMARK_)?t__330357.left:t__330357.right);
var G__330360 = cljs.core.conj.call(null,stack__330358,t__330357);
t__330357 = G__330359;
stack__330358 = G__330360;
continue;
}
} else
{return stack__330358;
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
var this__330361 = this;
var h__2203__auto____330362 = this__330361.__hash;
if(!((h__2203__auto____330362 == null)))
{return h__2203__auto____330362;
} else
{var h__2203__auto____330363 = cljs.core.hash_coll.call(null,coll);
this__330361.__hash = h__2203__auto____330363;
return h__2203__auto____330363;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__330364 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__330365 = this;
var this__330366 = this;
return cljs.core.pr_str.call(null,this__330366);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__330367 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__330368 = this;
if((this__330368.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__330368.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__330369 = this;
return cljs.core.peek.call(null,this__330369.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__330370 = this;
var t__330371 = cljs.core.first.call(null,this__330370.stack);
var next_stack__330372 = cljs.core.tree_map_seq_push.call(null,((this__330370.ascending_QMARK_)?t__330371.right:t__330371.left),cljs.core.next.call(null,this__330370.stack),this__330370.ascending_QMARK_);
if(!((next_stack__330372 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__330372,this__330370.ascending_QMARK_,(this__330370.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__330373 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__330374 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__330374.stack,this__330374.ascending_QMARK_,this__330374.cnt,this__330374.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__330375 = this;
return this__330375.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__330376 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__330376.meta);
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
{if((function (){var and__3822__auto____330378 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____330378)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____330378;
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
{if((function (){var and__3822__auto____330380 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____330380)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____330380;
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
var init__330384 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__330384))
{return cljs.core.deref.call(null,init__330384);
} else
{var init__330385 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__330384):init__330384);
if(cljs.core.reduced_QMARK_.call(null,init__330385))
{return cljs.core.deref.call(null,init__330385);
} else
{var init__330386 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__330385):init__330385);
if(cljs.core.reduced_QMARK_.call(null,init__330386))
{return cljs.core.deref.call(null,init__330386);
} else
{return init__330386;
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
var this__330389 = this;
var h__2203__auto____330390 = this__330389.__hash;
if(!((h__2203__auto____330390 == null)))
{return h__2203__auto____330390;
} else
{var h__2203__auto____330391 = cljs.core.hash_coll.call(null,coll);
this__330389.__hash = h__2203__auto____330391;
return h__2203__auto____330391;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__330392 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__330393 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__330394 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__330394.key,this__330394.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__330442 = null;
var G__330442__2 = (function (this_sym330395,k){
var this__330397 = this;
var this_sym330395__330398 = this;
var node__330399 = this_sym330395__330398;
return node__330399.cljs$core$ILookup$_lookup$arity$2(node__330399,k);
});
var G__330442__3 = (function (this_sym330396,k,not_found){
var this__330397 = this;
var this_sym330396__330400 = this;
var node__330401 = this_sym330396__330400;
return node__330401.cljs$core$ILookup$_lookup$arity$3(node__330401,k,not_found);
});
G__330442 = function(this_sym330396,k,not_found){
switch(arguments.length){
case 2:
return G__330442__2.call(this,this_sym330396,k);
case 3:
return G__330442__3.call(this,this_sym330396,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__330442;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym330387,args330388){
var this__330402 = this;
return this_sym330387.call.apply(this_sym330387,[this_sym330387].concat(args330388.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__330403 = this;
return cljs.core.PersistentVector.fromArray([this__330403.key,this__330403.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__330404 = this;
return this__330404.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__330405 = this;
return this__330405.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__330406 = this;
var node__330407 = this;
return ins.balance_right(node__330407);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__330408 = this;
var node__330409 = this;
return (new cljs.core.RedNode(this__330408.key,this__330408.val,this__330408.left,this__330408.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__330410 = this;
var node__330411 = this;
return cljs.core.balance_right_del.call(null,this__330410.key,this__330410.val,this__330410.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__330412 = this;
var node__330413 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__330414 = this;
var node__330415 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__330415,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__330416 = this;
var node__330417 = this;
return cljs.core.balance_left_del.call(null,this__330416.key,this__330416.val,del,this__330416.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__330418 = this;
var node__330419 = this;
return ins.balance_left(node__330419);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__330420 = this;
var node__330421 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__330421,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__330443 = null;
var G__330443__0 = (function (){
var this__330422 = this;
var this__330424 = this;
return cljs.core.pr_str.call(null,this__330424);
});
G__330443 = function(){
switch(arguments.length){
case 0:
return G__330443__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__330443;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__330425 = this;
var node__330426 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__330426,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__330427 = this;
var node__330428 = this;
return node__330428;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__330429 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__330430 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__330431 = this;
return cljs.core.list.call(null,this__330431.key,this__330431.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__330432 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__330433 = this;
return this__330433.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__330434 = this;
return cljs.core.PersistentVector.fromArray([this__330434.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__330435 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__330435.key,this__330435.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__330436 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__330437 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__330437.key,this__330437.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__330438 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__330439 = this;
if((n === 0))
{return this__330439.key;
} else
{if((n === 1))
{return this__330439.val;
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
var this__330440 = this;
if((n === 0))
{return this__330440.key;
} else
{if((n === 1))
{return this__330440.val;
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
var this__330441 = this;
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
var this__330446 = this;
var h__2203__auto____330447 = this__330446.__hash;
if(!((h__2203__auto____330447 == null)))
{return h__2203__auto____330447;
} else
{var h__2203__auto____330448 = cljs.core.hash_coll.call(null,coll);
this__330446.__hash = h__2203__auto____330448;
return h__2203__auto____330448;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__330449 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__330450 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__330451 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__330451.key,this__330451.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__330499 = null;
var G__330499__2 = (function (this_sym330452,k){
var this__330454 = this;
var this_sym330452__330455 = this;
var node__330456 = this_sym330452__330455;
return node__330456.cljs$core$ILookup$_lookup$arity$2(node__330456,k);
});
var G__330499__3 = (function (this_sym330453,k,not_found){
var this__330454 = this;
var this_sym330453__330457 = this;
var node__330458 = this_sym330453__330457;
return node__330458.cljs$core$ILookup$_lookup$arity$3(node__330458,k,not_found);
});
G__330499 = function(this_sym330453,k,not_found){
switch(arguments.length){
case 2:
return G__330499__2.call(this,this_sym330453,k);
case 3:
return G__330499__3.call(this,this_sym330453,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__330499;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym330444,args330445){
var this__330459 = this;
return this_sym330444.call.apply(this_sym330444,[this_sym330444].concat(args330445.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__330460 = this;
return cljs.core.PersistentVector.fromArray([this__330460.key,this__330460.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__330461 = this;
return this__330461.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__330462 = this;
return this__330462.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__330463 = this;
var node__330464 = this;
return (new cljs.core.RedNode(this__330463.key,this__330463.val,this__330463.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__330465 = this;
var node__330466 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__330467 = this;
var node__330468 = this;
return (new cljs.core.RedNode(this__330467.key,this__330467.val,this__330467.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__330469 = this;
var node__330470 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__330471 = this;
var node__330472 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__330472,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__330473 = this;
var node__330474 = this;
return (new cljs.core.RedNode(this__330473.key,this__330473.val,del,this__330473.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__330475 = this;
var node__330476 = this;
return (new cljs.core.RedNode(this__330475.key,this__330475.val,ins,this__330475.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__330477 = this;
var node__330478 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__330477.left))
{return (new cljs.core.RedNode(this__330477.key,this__330477.val,this__330477.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__330477.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__330477.right))
{return (new cljs.core.RedNode(this__330477.right.key,this__330477.right.val,(new cljs.core.BlackNode(this__330477.key,this__330477.val,this__330477.left,this__330477.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__330477.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__330478,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__330500 = null;
var G__330500__0 = (function (){
var this__330479 = this;
var this__330481 = this;
return cljs.core.pr_str.call(null,this__330481);
});
G__330500 = function(){
switch(arguments.length){
case 0:
return G__330500__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__330500;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__330482 = this;
var node__330483 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__330482.right))
{return (new cljs.core.RedNode(this__330482.key,this__330482.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__330482.left,null)),this__330482.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__330482.left))
{return (new cljs.core.RedNode(this__330482.left.key,this__330482.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__330482.left.left,null)),(new cljs.core.BlackNode(this__330482.key,this__330482.val,this__330482.left.right,this__330482.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__330483,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__330484 = this;
var node__330485 = this;
return (new cljs.core.BlackNode(this__330484.key,this__330484.val,this__330484.left,this__330484.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__330486 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__330487 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__330488 = this;
return cljs.core.list.call(null,this__330488.key,this__330488.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__330489 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__330490 = this;
return this__330490.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__330491 = this;
return cljs.core.PersistentVector.fromArray([this__330491.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__330492 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__330492.key,this__330492.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__330493 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__330494 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__330494.key,this__330494.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__330495 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__330496 = this;
if((n === 0))
{return this__330496.key;
} else
{if((n === 1))
{return this__330496.val;
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
var this__330497 = this;
if((n === 0))
{return this__330497.key;
} else
{if((n === 1))
{return this__330497.val;
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
var this__330498 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__330504 = comp.call(null,k,tree.key);
if((c__330504 === 0))
{(found[0] = tree);
return null;
} else
{if((c__330504 < 0))
{var ins__330505 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__330505 == null)))
{return tree.add_left(ins__330505);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__330506 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__330506 == null)))
{return tree.add_right(ins__330506);
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
{var app__330509 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__330509))
{return (new cljs.core.RedNode(app__330509.key,app__330509.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__330509.left,null)),(new cljs.core.RedNode(right.key,right.val,app__330509.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__330509,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__330510 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__330510))
{return (new cljs.core.RedNode(app__330510.key,app__330510.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__330510.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__330510.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__330510,right.right,null)));
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
{var c__330516 = comp.call(null,k,tree.key);
if((c__330516 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__330516 < 0))
{var del__330517 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____330518 = !((del__330517 == null));
if(or__3824__auto____330518)
{return or__3824__auto____330518;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__330517,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__330517,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__330519 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____330520 = !((del__330519 == null));
if(or__3824__auto____330520)
{return or__3824__auto____330520;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__330519);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__330519,null));
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
var tk__330523 = tree.key;
var c__330524 = comp.call(null,k,tk__330523);
if((c__330524 === 0))
{return tree.replace(tk__330523,v,tree.left,tree.right);
} else
{if((c__330524 < 0))
{return tree.replace(tk__330523,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__330523,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__330527 = this;
var h__2203__auto____330528 = this__330527.__hash;
if(!((h__2203__auto____330528 == null)))
{return h__2203__auto____330528;
} else
{var h__2203__auto____330529 = cljs.core.hash_imap.call(null,coll);
this__330527.__hash = h__2203__auto____330529;
return h__2203__auto____330529;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__330530 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__330531 = this;
var n__330532 = coll.entry_at(k);
if(!((n__330532 == null)))
{return n__330532.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__330533 = this;
var found__330534 = [null];
var t__330535 = cljs.core.tree_map_add.call(null,this__330533.comp,this__330533.tree,k,v,found__330534);
if((t__330535 == null))
{var found_node__330536 = cljs.core.nth.call(null,found__330534,0);
if(cljs.core._EQ_.call(null,v,found_node__330536.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__330533.comp,cljs.core.tree_map_replace.call(null,this__330533.comp,this__330533.tree,k,v),this__330533.cnt,this__330533.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__330533.comp,t__330535.blacken(),(this__330533.cnt + 1),this__330533.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__330537 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__330571 = null;
var G__330571__2 = (function (this_sym330538,k){
var this__330540 = this;
var this_sym330538__330541 = this;
var coll__330542 = this_sym330538__330541;
return coll__330542.cljs$core$ILookup$_lookup$arity$2(coll__330542,k);
});
var G__330571__3 = (function (this_sym330539,k,not_found){
var this__330540 = this;
var this_sym330539__330543 = this;
var coll__330544 = this_sym330539__330543;
return coll__330544.cljs$core$ILookup$_lookup$arity$3(coll__330544,k,not_found);
});
G__330571 = function(this_sym330539,k,not_found){
switch(arguments.length){
case 2:
return G__330571__2.call(this,this_sym330539,k);
case 3:
return G__330571__3.call(this,this_sym330539,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__330571;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym330525,args330526){
var this__330545 = this;
return this_sym330525.call.apply(this_sym330525,[this_sym330525].concat(args330526.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__330546 = this;
if(!((this__330546.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__330546.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__330547 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__330548 = this;
if((this__330548.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__330548.tree,false,this__330548.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__330549 = this;
var this__330550 = this;
return cljs.core.pr_str.call(null,this__330550);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__330551 = this;
var coll__330552 = this;
var t__330553 = this__330551.tree;
while(true){
if(!((t__330553 == null)))
{var c__330554 = this__330551.comp.call(null,k,t__330553.key);
if((c__330554 === 0))
{return t__330553;
} else
{if((c__330554 < 0))
{{
var G__330572 = t__330553.left;
t__330553 = G__330572;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__330573 = t__330553.right;
t__330553 = G__330573;
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
var this__330555 = this;
if((this__330555.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__330555.tree,ascending_QMARK_,this__330555.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__330556 = this;
if((this__330556.cnt > 0))
{var stack__330557 = null;
var t__330558 = this__330556.tree;
while(true){
if(!((t__330558 == null)))
{var c__330559 = this__330556.comp.call(null,k,t__330558.key);
if((c__330559 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__330557,t__330558),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__330559 < 0))
{{
var G__330574 = cljs.core.conj.call(null,stack__330557,t__330558);
var G__330575 = t__330558.left;
stack__330557 = G__330574;
t__330558 = G__330575;
continue;
}
} else
{{
var G__330576 = stack__330557;
var G__330577 = t__330558.right;
stack__330557 = G__330576;
t__330558 = G__330577;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__330559 > 0))
{{
var G__330578 = cljs.core.conj.call(null,stack__330557,t__330558);
var G__330579 = t__330558.right;
stack__330557 = G__330578;
t__330558 = G__330579;
continue;
}
} else
{{
var G__330580 = stack__330557;
var G__330581 = t__330558.left;
stack__330557 = G__330580;
t__330558 = G__330581;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__330557 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__330557,ascending_QMARK_,-1,null));
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
var this__330560 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__330561 = this;
return this__330561.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__330562 = this;
if((this__330562.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__330562.tree,true,this__330562.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__330563 = this;
return this__330563.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__330564 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__330565 = this;
return (new cljs.core.PersistentTreeMap(this__330565.comp,this__330565.tree,this__330565.cnt,meta,this__330565.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__330566 = this;
return this__330566.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__330567 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__330567.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__330568 = this;
var found__330569 = [null];
var t__330570 = cljs.core.tree_map_remove.call(null,this__330568.comp,this__330568.tree,k,found__330569);
if((t__330570 == null))
{if((cljs.core.nth.call(null,found__330569,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__330568.comp,null,0,this__330568.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__330568.comp,t__330570.blacken(),(this__330568.cnt - 1),this__330568.meta,null));
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
var in__330584 = cljs.core.seq.call(null,keyvals);
var out__330585 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__330584)
{{
var G__330586 = cljs.core.nnext.call(null,in__330584);
var G__330587 = cljs.core.assoc_BANG_.call(null,out__330585,cljs.core.first.call(null,in__330584),cljs.core.second.call(null,in__330584));
in__330584 = G__330586;
out__330585 = G__330587;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__330585);
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
hash_map.cljs$lang$applyTo = (function (arglist__330588){
var keyvals = cljs.core.seq(arglist__330588);;
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
array_map.cljs$lang$applyTo = (function (arglist__330589){
var keyvals = cljs.core.seq(arglist__330589);;
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
var ks__330593 = [];
var obj__330594 = {};
var kvs__330595 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__330595)
{ks__330593.push(cljs.core.first.call(null,kvs__330595));
(obj__330594[cljs.core.first.call(null,kvs__330595)] = cljs.core.second.call(null,kvs__330595));
{
var G__330596 = cljs.core.nnext.call(null,kvs__330595);
kvs__330595 = G__330596;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__330593,obj__330594);
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
obj_map.cljs$lang$applyTo = (function (arglist__330597){
var keyvals = cljs.core.seq(arglist__330597);;
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
var in__330600 = cljs.core.seq.call(null,keyvals);
var out__330601 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__330600)
{{
var G__330602 = cljs.core.nnext.call(null,in__330600);
var G__330603 = cljs.core.assoc.call(null,out__330601,cljs.core.first.call(null,in__330600),cljs.core.second.call(null,in__330600));
in__330600 = G__330602;
out__330601 = G__330603;
continue;
}
} else
{return out__330601;
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
sorted_map.cljs$lang$applyTo = (function (arglist__330604){
var keyvals = cljs.core.seq(arglist__330604);;
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
var in__330607 = cljs.core.seq.call(null,keyvals);
var out__330608 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__330607)
{{
var G__330609 = cljs.core.nnext.call(null,in__330607);
var G__330610 = cljs.core.assoc.call(null,out__330608,cljs.core.first.call(null,in__330607),cljs.core.second.call(null,in__330607));
in__330607 = G__330609;
out__330608 = G__330610;
continue;
}
} else
{return out__330608;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__330611){
var comparator = cljs.core.first(arglist__330611);
var keyvals = cljs.core.rest(arglist__330611);
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
{return cljs.core.reduce.call(null,(function (p1__330612_SHARP_,p2__330613_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____330615 = p1__330612_SHARP_;
if(cljs.core.truth_(or__3824__auto____330615))
{return or__3824__auto____330615;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__330613_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__330616){
var maps = cljs.core.seq(arglist__330616);;
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
{var merge_entry__330624 = (function (m,e){
var k__330622 = cljs.core.first.call(null,e);
var v__330623 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__330622))
{return cljs.core.assoc.call(null,m,k__330622,f.call(null,cljs.core._lookup.call(null,m,k__330622,null),v__330623));
} else
{return cljs.core.assoc.call(null,m,k__330622,v__330623);
}
});
var merge2__330626 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__330624,(function (){var or__3824__auto____330625 = m1;
if(cljs.core.truth_(or__3824__auto____330625))
{return or__3824__auto____330625;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__330626,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__330627){
var f = cljs.core.first(arglist__330627);
var maps = cljs.core.rest(arglist__330627);
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
var ret__330632 = cljs.core.ObjMap.EMPTY;
var keys__330633 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__330633)
{var key__330634 = cljs.core.first.call(null,keys__330633);
var entry__330635 = cljs.core._lookup.call(null,map,key__330634,"\uFDD0'cljs.core/not-found");
{
var G__330636 = ((cljs.core.not_EQ_.call(null,entry__330635,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__330632,key__330634,entry__330635):ret__330632);
var G__330637 = cljs.core.next.call(null,keys__330633);
ret__330632 = G__330636;
keys__330633 = G__330637;
continue;
}
} else
{return ret__330632;
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
var this__330641 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__330641.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__330642 = this;
var h__2203__auto____330643 = this__330642.__hash;
if(!((h__2203__auto____330643 == null)))
{return h__2203__auto____330643;
} else
{var h__2203__auto____330644 = cljs.core.hash_iset.call(null,coll);
this__330642.__hash = h__2203__auto____330644;
return h__2203__auto____330644;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__330645 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__330646 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__330646.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__330667 = null;
var G__330667__2 = (function (this_sym330647,k){
var this__330649 = this;
var this_sym330647__330650 = this;
var coll__330651 = this_sym330647__330650;
return coll__330651.cljs$core$ILookup$_lookup$arity$2(coll__330651,k);
});
var G__330667__3 = (function (this_sym330648,k,not_found){
var this__330649 = this;
var this_sym330648__330652 = this;
var coll__330653 = this_sym330648__330652;
return coll__330653.cljs$core$ILookup$_lookup$arity$3(coll__330653,k,not_found);
});
G__330667 = function(this_sym330648,k,not_found){
switch(arguments.length){
case 2:
return G__330667__2.call(this,this_sym330648,k);
case 3:
return G__330667__3.call(this,this_sym330648,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__330667;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym330639,args330640){
var this__330654 = this;
return this_sym330639.call.apply(this_sym330639,[this_sym330639].concat(args330640.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__330655 = this;
return (new cljs.core.PersistentHashSet(this__330655.meta,cljs.core.assoc.call(null,this__330655.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__330656 = this;
var this__330657 = this;
return cljs.core.pr_str.call(null,this__330657);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__330658 = this;
return cljs.core.keys.call(null,this__330658.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__330659 = this;
return (new cljs.core.PersistentHashSet(this__330659.meta,cljs.core.dissoc.call(null,this__330659.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__330660 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__330661 = this;
var and__3822__auto____330662 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____330662)
{var and__3822__auto____330663 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____330663)
{return cljs.core.every_QMARK_.call(null,(function (p1__330638_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__330638_SHARP_);
}),other);
} else
{return and__3822__auto____330663;
}
} else
{return and__3822__auto____330662;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__330664 = this;
return (new cljs.core.PersistentHashSet(meta,this__330664.hash_map,this__330664.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__330665 = this;
return this__330665.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__330666 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__330666.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__330668 = cljs.core.count.call(null,items);
var i__330669 = 0;
var out__330670 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__330669 < len__330668))
{{
var G__330671 = (i__330669 + 1);
var G__330672 = cljs.core.conj_BANG_.call(null,out__330670,(items[i__330669]));
i__330669 = G__330671;
out__330670 = G__330672;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__330670);
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
var G__330690 = null;
var G__330690__2 = (function (this_sym330676,k){
var this__330678 = this;
var this_sym330676__330679 = this;
var tcoll__330680 = this_sym330676__330679;
if((cljs.core._lookup.call(null,this__330678.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__330690__3 = (function (this_sym330677,k,not_found){
var this__330678 = this;
var this_sym330677__330681 = this;
var tcoll__330682 = this_sym330677__330681;
if((cljs.core._lookup.call(null,this__330678.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__330690 = function(this_sym330677,k,not_found){
switch(arguments.length){
case 2:
return G__330690__2.call(this,this_sym330677,k);
case 3:
return G__330690__3.call(this,this_sym330677,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__330690;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym330674,args330675){
var this__330683 = this;
return this_sym330674.call.apply(this_sym330674,[this_sym330674].concat(args330675.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__330684 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__330685 = this;
if((cljs.core._lookup.call(null,this__330685.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__330686 = this;
return cljs.core.count.call(null,this__330686.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__330687 = this;
this__330687.transient_map = cljs.core.dissoc_BANG_.call(null,this__330687.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__330688 = this;
this__330688.transient_map = cljs.core.assoc_BANG_.call(null,this__330688.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__330689 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__330689.transient_map),null));
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
var this__330693 = this;
var h__2203__auto____330694 = this__330693.__hash;
if(!((h__2203__auto____330694 == null)))
{return h__2203__auto____330694;
} else
{var h__2203__auto____330695 = cljs.core.hash_iset.call(null,coll);
this__330693.__hash = h__2203__auto____330695;
return h__2203__auto____330695;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__330696 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__330697 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__330697.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__330723 = null;
var G__330723__2 = (function (this_sym330698,k){
var this__330700 = this;
var this_sym330698__330701 = this;
var coll__330702 = this_sym330698__330701;
return coll__330702.cljs$core$ILookup$_lookup$arity$2(coll__330702,k);
});
var G__330723__3 = (function (this_sym330699,k,not_found){
var this__330700 = this;
var this_sym330699__330703 = this;
var coll__330704 = this_sym330699__330703;
return coll__330704.cljs$core$ILookup$_lookup$arity$3(coll__330704,k,not_found);
});
G__330723 = function(this_sym330699,k,not_found){
switch(arguments.length){
case 2:
return G__330723__2.call(this,this_sym330699,k);
case 3:
return G__330723__3.call(this,this_sym330699,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__330723;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym330691,args330692){
var this__330705 = this;
return this_sym330691.call.apply(this_sym330691,[this_sym330691].concat(args330692.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__330706 = this;
return (new cljs.core.PersistentTreeSet(this__330706.meta,cljs.core.assoc.call(null,this__330706.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__330707 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__330707.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__330708 = this;
var this__330709 = this;
return cljs.core.pr_str.call(null,this__330709);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__330710 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__330710.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__330711 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__330711.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__330712 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__330713 = this;
return cljs.core._comparator.call(null,this__330713.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__330714 = this;
return cljs.core.keys.call(null,this__330714.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__330715 = this;
return (new cljs.core.PersistentTreeSet(this__330715.meta,cljs.core.dissoc.call(null,this__330715.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__330716 = this;
return cljs.core.count.call(null,this__330716.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__330717 = this;
var and__3822__auto____330718 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____330718)
{var and__3822__auto____330719 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____330719)
{return cljs.core.every_QMARK_.call(null,(function (p1__330673_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__330673_SHARP_);
}),other);
} else
{return and__3822__auto____330719;
}
} else
{return and__3822__auto____330718;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__330720 = this;
return (new cljs.core.PersistentTreeSet(meta,this__330720.tree_map,this__330720.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__330721 = this;
return this__330721.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__330722 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__330722.meta);
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
var G__330728__delegate = function (keys){
var in__330726 = cljs.core.seq.call(null,keys);
var out__330727 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__330726))
{{
var G__330729 = cljs.core.next.call(null,in__330726);
var G__330730 = cljs.core.conj_BANG_.call(null,out__330727,cljs.core.first.call(null,in__330726));
in__330726 = G__330729;
out__330727 = G__330730;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__330727);
}
break;
}
};
var G__330728 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__330728__delegate.call(this, keys);
};
G__330728.cljs$lang$maxFixedArity = 0;
G__330728.cljs$lang$applyTo = (function (arglist__330731){
var keys = cljs.core.seq(arglist__330731);;
return G__330728__delegate(keys);
});
G__330728.cljs$lang$arity$variadic = G__330728__delegate;
return G__330728;
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
sorted_set.cljs$lang$applyTo = (function (arglist__330732){
var keys = cljs.core.seq(arglist__330732);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__330734){
var comparator = cljs.core.first(arglist__330734);
var keys = cljs.core.rest(arglist__330734);
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
{var n__330740 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____330741 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____330741))
{var e__330742 = temp__3971__auto____330741;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__330742));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__330740,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__330733_SHARP_){
var temp__3971__auto____330743 = cljs.core.find.call(null,smap,p1__330733_SHARP_);
if(cljs.core.truth_(temp__3971__auto____330743))
{var e__330744 = temp__3971__auto____330743;
return cljs.core.second.call(null,e__330744);
} else
{return p1__330733_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__330774 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__330767,seen){
while(true){
var vec__330768__330769 = p__330767;
var f__330770 = cljs.core.nth.call(null,vec__330768__330769,0,null);
var xs__330771 = vec__330768__330769;
var temp__3974__auto____330772 = cljs.core.seq.call(null,xs__330771);
if(temp__3974__auto____330772)
{var s__330773 = temp__3974__auto____330772;
if(cljs.core.contains_QMARK_.call(null,seen,f__330770))
{{
var G__330775 = cljs.core.rest.call(null,s__330773);
var G__330776 = seen;
p__330767 = G__330775;
seen = G__330776;
continue;
}
} else
{return cljs.core.cons.call(null,f__330770,step.call(null,cljs.core.rest.call(null,s__330773),cljs.core.conj.call(null,seen,f__330770)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__330774.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__330779 = cljs.core.PersistentVector.EMPTY;
var s__330780 = s;
while(true){
if(cljs.core.next.call(null,s__330780))
{{
var G__330781 = cljs.core.conj.call(null,ret__330779,cljs.core.first.call(null,s__330780));
var G__330782 = cljs.core.next.call(null,s__330780);
ret__330779 = G__330781;
s__330780 = G__330782;
continue;
}
} else
{return cljs.core.seq.call(null,ret__330779);
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
{if((function (){var or__3824__auto____330785 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____330785)
{return or__3824__auto____330785;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__330786 = x.lastIndexOf("/");
if((i__330786 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__330786 + 1));
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
if((function (){var or__3824__auto____330789 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____330789)
{return or__3824__auto____330789;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__330790 = x.lastIndexOf("/");
if((i__330790 > -1))
{return cljs.core.subs.call(null,x,2,i__330790);
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
var map__330797 = cljs.core.ObjMap.EMPTY;
var ks__330798 = cljs.core.seq.call(null,keys);
var vs__330799 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____330800 = ks__330798;
if(and__3822__auto____330800)
{return vs__330799;
} else
{return and__3822__auto____330800;
}
})())
{{
var G__330801 = cljs.core.assoc.call(null,map__330797,cljs.core.first.call(null,ks__330798),cljs.core.first.call(null,vs__330799));
var G__330802 = cljs.core.next.call(null,ks__330798);
var G__330803 = cljs.core.next.call(null,vs__330799);
map__330797 = G__330801;
ks__330798 = G__330802;
vs__330799 = G__330803;
continue;
}
} else
{return map__330797;
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
var G__330806__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__330791_SHARP_,p2__330792_SHARP_){
return max_key.call(null,k,p1__330791_SHARP_,p2__330792_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__330806 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__330806__delegate.call(this, k, x, y, more);
};
G__330806.cljs$lang$maxFixedArity = 3;
G__330806.cljs$lang$applyTo = (function (arglist__330807){
var k = cljs.core.first(arglist__330807);
var x = cljs.core.first(cljs.core.next(arglist__330807));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__330807)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__330807)));
return G__330806__delegate(k, x, y, more);
});
G__330806.cljs$lang$arity$variadic = G__330806__delegate;
return G__330806;
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
var G__330808__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__330804_SHARP_,p2__330805_SHARP_){
return min_key.call(null,k,p1__330804_SHARP_,p2__330805_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__330808 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__330808__delegate.call(this, k, x, y, more);
};
G__330808.cljs$lang$maxFixedArity = 3;
G__330808.cljs$lang$applyTo = (function (arglist__330809){
var k = cljs.core.first(arglist__330809);
var x = cljs.core.first(cljs.core.next(arglist__330809));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__330809)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__330809)));
return G__330808__delegate(k, x, y, more);
});
G__330808.cljs$lang$arity$variadic = G__330808__delegate;
return G__330808;
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
var temp__3974__auto____330812 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____330812)
{var s__330813 = temp__3974__auto____330812;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__330813),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__330813)));
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
var temp__3974__auto____330816 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____330816)
{var s__330817 = temp__3974__auto____330816;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__330817))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__330817),take_while.call(null,pred,cljs.core.rest.call(null,s__330817)));
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
var comp__330819 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__330819.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__330831 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____330832 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____330832))
{var vec__330833__330834 = temp__3974__auto____330832;
var e__330835 = cljs.core.nth.call(null,vec__330833__330834,0,null);
var s__330836 = vec__330833__330834;
if(cljs.core.truth_(include__330831.call(null,e__330835)))
{return s__330836;
} else
{return cljs.core.next.call(null,s__330836);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__330831,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____330837 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____330837))
{var vec__330838__330839 = temp__3974__auto____330837;
var e__330840 = cljs.core.nth.call(null,vec__330838__330839,0,null);
var s__330841 = vec__330838__330839;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__330840))?s__330841:cljs.core.next.call(null,s__330841)));
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
var include__330853 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____330854 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____330854))
{var vec__330855__330856 = temp__3974__auto____330854;
var e__330857 = cljs.core.nth.call(null,vec__330855__330856,0,null);
var s__330858 = vec__330855__330856;
if(cljs.core.truth_(include__330853.call(null,e__330857)))
{return s__330858;
} else
{return cljs.core.next.call(null,s__330858);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__330853,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____330859 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____330859))
{var vec__330860__330861 = temp__3974__auto____330859;
var e__330862 = cljs.core.nth.call(null,vec__330860__330861,0,null);
var s__330863 = vec__330860__330861;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__330862))?s__330863:cljs.core.next.call(null,s__330863)));
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
var this__330864 = this;
var h__2203__auto____330865 = this__330864.__hash;
if(!((h__2203__auto____330865 == null)))
{return h__2203__auto____330865;
} else
{var h__2203__auto____330866 = cljs.core.hash_coll.call(null,rng);
this__330864.__hash = h__2203__auto____330866;
return h__2203__auto____330866;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__330867 = this;
if((this__330867.step > 0))
{if(((this__330867.start + this__330867.step) < this__330867.end))
{return (new cljs.core.Range(this__330867.meta,(this__330867.start + this__330867.step),this__330867.end,this__330867.step,null));
} else
{return null;
}
} else
{if(((this__330867.start + this__330867.step) > this__330867.end))
{return (new cljs.core.Range(this__330867.meta,(this__330867.start + this__330867.step),this__330867.end,this__330867.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__330868 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__330869 = this;
var this__330870 = this;
return cljs.core.pr_str.call(null,this__330870);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__330871 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__330872 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__330873 = this;
if((this__330873.step > 0))
{if((this__330873.start < this__330873.end))
{return rng;
} else
{return null;
}
} else
{if((this__330873.start > this__330873.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__330874 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__330874.end - this__330874.start) / this__330874.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__330875 = this;
return this__330875.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__330876 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__330876.meta,(this__330876.start + this__330876.step),this__330876.end,this__330876.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__330877 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__330878 = this;
return (new cljs.core.Range(meta,this__330878.start,this__330878.end,this__330878.step,this__330878.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__330879 = this;
return this__330879.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__330880 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__330880.start + (n * this__330880.step));
} else
{if((function (){var and__3822__auto____330881 = (this__330880.start > this__330880.end);
if(and__3822__auto____330881)
{return (this__330880.step === 0);
} else
{return and__3822__auto____330881;
}
})())
{return this__330880.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__330882 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__330882.start + (n * this__330882.step));
} else
{if((function (){var and__3822__auto____330883 = (this__330882.start > this__330882.end);
if(and__3822__auto____330883)
{return (this__330882.step === 0);
} else
{return and__3822__auto____330883;
}
})())
{return this__330882.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__330884 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__330884.meta);
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
var temp__3974__auto____330887 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____330887)
{var s__330888 = temp__3974__auto____330887;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__330888),take_nth.call(null,n,cljs.core.drop.call(null,n,s__330888)));
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
var temp__3974__auto____330895 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____330895)
{var s__330896 = temp__3974__auto____330895;
var fst__330897 = cljs.core.first.call(null,s__330896);
var fv__330898 = f.call(null,fst__330897);
var run__330899 = cljs.core.cons.call(null,fst__330897,cljs.core.take_while.call(null,(function (p1__330889_SHARP_){
return cljs.core._EQ_.call(null,fv__330898,f.call(null,p1__330889_SHARP_));
}),cljs.core.next.call(null,s__330896)));
return cljs.core.cons.call(null,run__330899,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__330899),s__330896))));
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
var temp__3971__auto____330914 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____330914)
{var s__330915 = temp__3971__auto____330914;
return reductions.call(null,f,cljs.core.first.call(null,s__330915),cljs.core.rest.call(null,s__330915));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____330916 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____330916)
{var s__330917 = temp__3974__auto____330916;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__330917)),cljs.core.rest.call(null,s__330917));
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
var G__330920 = null;
var G__330920__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__330920__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__330920__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__330920__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__330920__4 = (function() { 
var G__330921__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__330921 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__330921__delegate.call(this, x, y, z, args);
};
G__330921.cljs$lang$maxFixedArity = 3;
G__330921.cljs$lang$applyTo = (function (arglist__330922){
var x = cljs.core.first(arglist__330922);
var y = cljs.core.first(cljs.core.next(arglist__330922));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__330922)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__330922)));
return G__330921__delegate(x, y, z, args);
});
G__330921.cljs$lang$arity$variadic = G__330921__delegate;
return G__330921;
})()
;
G__330920 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__330920__0.call(this);
case 1:
return G__330920__1.call(this,x);
case 2:
return G__330920__2.call(this,x,y);
case 3:
return G__330920__3.call(this,x,y,z);
default:
return G__330920__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__330920.cljs$lang$maxFixedArity = 3;
G__330920.cljs$lang$applyTo = G__330920__4.cljs$lang$applyTo;
return G__330920;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__330923 = null;
var G__330923__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__330923__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__330923__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__330923__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__330923__4 = (function() { 
var G__330924__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__330924 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__330924__delegate.call(this, x, y, z, args);
};
G__330924.cljs$lang$maxFixedArity = 3;
G__330924.cljs$lang$applyTo = (function (arglist__330925){
var x = cljs.core.first(arglist__330925);
var y = cljs.core.first(cljs.core.next(arglist__330925));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__330925)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__330925)));
return G__330924__delegate(x, y, z, args);
});
G__330924.cljs$lang$arity$variadic = G__330924__delegate;
return G__330924;
})()
;
G__330923 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__330923__0.call(this);
case 1:
return G__330923__1.call(this,x);
case 2:
return G__330923__2.call(this,x,y);
case 3:
return G__330923__3.call(this,x,y,z);
default:
return G__330923__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__330923.cljs$lang$maxFixedArity = 3;
G__330923.cljs$lang$applyTo = G__330923__4.cljs$lang$applyTo;
return G__330923;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__330926 = null;
var G__330926__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__330926__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__330926__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__330926__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__330926__4 = (function() { 
var G__330927__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__330927 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__330927__delegate.call(this, x, y, z, args);
};
G__330927.cljs$lang$maxFixedArity = 3;
G__330927.cljs$lang$applyTo = (function (arglist__330928){
var x = cljs.core.first(arglist__330928);
var y = cljs.core.first(cljs.core.next(arglist__330928));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__330928)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__330928)));
return G__330927__delegate(x, y, z, args);
});
G__330927.cljs$lang$arity$variadic = G__330927__delegate;
return G__330927;
})()
;
G__330926 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__330926__0.call(this);
case 1:
return G__330926__1.call(this,x);
case 2:
return G__330926__2.call(this,x,y);
case 3:
return G__330926__3.call(this,x,y,z);
default:
return G__330926__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__330926.cljs$lang$maxFixedArity = 3;
G__330926.cljs$lang$applyTo = G__330926__4.cljs$lang$applyTo;
return G__330926;
})()
});
var juxt__4 = (function() { 
var G__330929__delegate = function (f,g,h,fs){
var fs__330919 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__330930 = null;
var G__330930__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__330900_SHARP_,p2__330901_SHARP_){
return cljs.core.conj.call(null,p1__330900_SHARP_,p2__330901_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__330919);
});
var G__330930__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__330902_SHARP_,p2__330903_SHARP_){
return cljs.core.conj.call(null,p1__330902_SHARP_,p2__330903_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__330919);
});
var G__330930__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__330904_SHARP_,p2__330905_SHARP_){
return cljs.core.conj.call(null,p1__330904_SHARP_,p2__330905_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__330919);
});
var G__330930__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__330906_SHARP_,p2__330907_SHARP_){
return cljs.core.conj.call(null,p1__330906_SHARP_,p2__330907_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__330919);
});
var G__330930__4 = (function() { 
var G__330931__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__330908_SHARP_,p2__330909_SHARP_){
return cljs.core.conj.call(null,p1__330908_SHARP_,cljs.core.apply.call(null,p2__330909_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__330919);
};
var G__330931 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__330931__delegate.call(this, x, y, z, args);
};
G__330931.cljs$lang$maxFixedArity = 3;
G__330931.cljs$lang$applyTo = (function (arglist__330932){
var x = cljs.core.first(arglist__330932);
var y = cljs.core.first(cljs.core.next(arglist__330932));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__330932)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__330932)));
return G__330931__delegate(x, y, z, args);
});
G__330931.cljs$lang$arity$variadic = G__330931__delegate;
return G__330931;
})()
;
G__330930 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__330930__0.call(this);
case 1:
return G__330930__1.call(this,x);
case 2:
return G__330930__2.call(this,x,y);
case 3:
return G__330930__3.call(this,x,y,z);
default:
return G__330930__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__330930.cljs$lang$maxFixedArity = 3;
G__330930.cljs$lang$applyTo = G__330930__4.cljs$lang$applyTo;
return G__330930;
})()
};
var G__330929 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__330929__delegate.call(this, f, g, h, fs);
};
G__330929.cljs$lang$maxFixedArity = 3;
G__330929.cljs$lang$applyTo = (function (arglist__330933){
var f = cljs.core.first(arglist__330933);
var g = cljs.core.first(cljs.core.next(arglist__330933));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__330933)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__330933)));
return G__330929__delegate(f, g, h, fs);
});
G__330929.cljs$lang$arity$variadic = G__330929__delegate;
return G__330929;
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
var G__330936 = cljs.core.next.call(null,coll);
coll = G__330936;
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
if(cljs.core.truth_((function (){var and__3822__auto____330935 = cljs.core.seq.call(null,coll);
if(and__3822__auto____330935)
{return (n > 0);
} else
{return and__3822__auto____330935;
}
})()))
{{
var G__330937 = (n - 1);
var G__330938 = cljs.core.next.call(null,coll);
n = G__330937;
coll = G__330938;
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
var matches__330940 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__330940),s))
{if((cljs.core.count.call(null,matches__330940) === 1))
{return cljs.core.first.call(null,matches__330940);
} else
{return cljs.core.vec.call(null,matches__330940);
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
var matches__330942 = re.exec(s);
if((matches__330942 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__330942) === 1))
{return cljs.core.first.call(null,matches__330942);
} else
{return cljs.core.vec.call(null,matches__330942);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__330947 = cljs.core.re_find.call(null,re,s);
var match_idx__330948 = s.search(re);
var match_str__330949 = ((cljs.core.coll_QMARK_.call(null,match_data__330947))?cljs.core.first.call(null,match_data__330947):match_data__330947);
var post_match__330950 = cljs.core.subs.call(null,s,(match_idx__330948 + cljs.core.count.call(null,match_str__330949)));
if(cljs.core.truth_(match_data__330947))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__330947,re_seq.call(null,re,post_match__330950));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__330957__330958 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___330959 = cljs.core.nth.call(null,vec__330957__330958,0,null);
var flags__330960 = cljs.core.nth.call(null,vec__330957__330958,1,null);
var pattern__330961 = cljs.core.nth.call(null,vec__330957__330958,2,null);
return (new RegExp(pattern__330961,flags__330960));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__330951_SHARP_){
return print_one.call(null,p1__330951_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__330965__330966 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__330965__330966)
{var o__330967 = cljs.core.first.call(null,G__330965__330966);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__330967,writer,opts);
{
var G__330968 = cljs.core.next.call(null,G__330965__330966);
G__330965__330966 = G__330968;
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
var G__330972__330973 = cljs.core.seq.call(null,ss);
while(true){
if(G__330972__330973)
{var s__330974 = cljs.core.first.call(null,G__330972__330973);
cljs.core._write.call(null,writer,s__330974);
{
var G__330975 = cljs.core.next.call(null,G__330972__330973);
G__330972__330973 = G__330975;
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
write_all.cljs$lang$applyTo = (function (arglist__330976){
var writer = cljs.core.first(arglist__330976);
var ss = cljs.core.rest(arglist__330976);
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
var this__330977 = this;
return this__330977.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__330978 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____330988 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____330988))
{var and__3822__auto____330992 = (function (){var G__330989__330990 = obj;
if(G__330989__330990)
{if((function (){var or__3824__auto____330991 = (G__330989__330990.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____330991)
{return or__3824__auto____330991;
} else
{return G__330989__330990.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__330989__330990.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__330989__330990);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__330989__330990);
}
})();
if(cljs.core.truth_(and__3822__auto____330992))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____330992;
}
} else
{return and__3822__auto____330988;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____330993 = !((obj == null));
if(and__3822__auto____330993)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____330993;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__330994__330995 = obj;
if(G__330994__330995)
{if((function (){var or__3824__auto____330996 = (G__330994__330995.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____330996)
{return or__3824__auto____330996;
} else
{return G__330994__330995.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__330994__330995.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__330994__330995);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__330994__330995);
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
{if(cljs.core.truth_((function (){var and__3822__auto____331009 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____331009))
{var and__3822__auto____331013 = (function (){var G__331010__331011 = obj;
if(G__331010__331011)
{if((function (){var or__3824__auto____331012 = (G__331010__331011.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____331012)
{return or__3824__auto____331012;
} else
{return G__331010__331011.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__331010__331011.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__331010__331011);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__331010__331011);
}
})();
if(cljs.core.truth_(and__3822__auto____331013))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____331013;
}
} else
{return and__3822__auto____331009;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____331014 = !((obj == null));
if(and__3822__auto____331014)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____331014;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__331015__331016 = obj;
if(G__331015__331016)
{if((function (){var or__3824__auto____331017 = (G__331015__331016.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____331017)
{return or__3824__auto____331017;
} else
{return G__331015__331016.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__331015__331016.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__331015__331016);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__331015__331016);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__331018__331019 = obj;
if(G__331018__331019)
{if((function (){var or__3824__auto____331020 = (G__331018__331019.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____331020)
{return or__3824__auto____331020;
} else
{return G__331018__331019.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__331018__331019.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__331018__331019);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__331018__331019);
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
var G__331024__331025 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__331024__331025)
{var obj__331026 = cljs.core.first.call(null,G__331024__331025);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__331026,writer,opts);
{
var G__331027 = cljs.core.next.call(null,G__331024__331025);
G__331024__331025 = G__331027;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__331030 = (new goog.string.StringBuffer());
var writer__331031 = (new cljs.core.StringBufferWriter(sb__331030));
cljs.core.pr_seq_writer.call(null,objs,writer__331031,opts);
cljs.core._flush.call(null,writer__331031);
return sb__331030;
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
{var sb__331033 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__331033.append("\n");
return [cljs.core.str(sb__331033)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__331034){
var objs = cljs.core.seq(arglist__331034);;
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
prn_str.cljs$lang$applyTo = (function (arglist__331035){
var objs = cljs.core.seq(arglist__331035);;
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
pr.cljs$lang$applyTo = (function (arglist__331036){
var objs = cljs.core.seq(arglist__331036);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__331037){
var objs = cljs.core.seq(arglist__331037);;
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
print_str.cljs$lang$applyTo = (function (arglist__331038){
var objs = cljs.core.seq(arglist__331038);;
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
println.cljs$lang$applyTo = (function (arglist__331039){
var objs = cljs.core.seq(arglist__331039);;
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
println_str.cljs$lang$applyTo = (function (arglist__331040){
var objs = cljs.core.seq(arglist__331040);;
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
prn.cljs$lang$applyTo = (function (arglist__331041){
var objs = cljs.core.seq(arglist__331041);;
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
printf.cljs$lang$applyTo = (function (arglist__331042){
var fmt = cljs.core.first(arglist__331042);
var args = cljs.core.rest(arglist__331042);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__331043 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__331043,"{",", ","}",opts,coll);
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
var pr_pair__331044 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__331044,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__331045 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__331045,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____331046 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____331046))
{var nspc__331047 = temp__3974__auto____331046;
return [cljs.core.str(nspc__331047),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____331048 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____331048))
{var nspc__331049 = temp__3974__auto____331048;
return [cljs.core.str(nspc__331049),cljs.core.str("/")].join('');
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
var pr_pair__331050 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__331050,"{",", ","}",opts,coll);
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
var normalize__331052 = (function (n,len){
var ns__331051 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__331051) < len))
{{
var G__331054 = [cljs.core.str("0"),cljs.core.str(ns__331051)].join('');
ns__331051 = G__331054;
continue;
}
} else
{return ns__331051;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__331052.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__331052.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__331052.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__331052.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__331052.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__331052.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__331053 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__331053,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__331055 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__331055,"{",", ","}",opts,coll);
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
var pr_pair__331056 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__331056,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__331057 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__331057,"{",", ","}",opts,coll);
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
var temp__3974__auto____331058 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____331058))
{var nspc__331059 = temp__3974__auto____331058;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__331059)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____331060 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____331060))
{var nspc__331061 = temp__3974__auto____331060;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__331061)].join(''),"/");
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
var pr_pair__331062 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__331062,"{",", ","}",opts,coll);
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
var normalize__331064 = (function (n,len){
var ns__331063 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__331063) < len))
{{
var G__331066 = [cljs.core.str("0"),cljs.core.str(ns__331063)].join('');
ns__331063 = G__331066;
continue;
}
} else
{return ns__331063;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__331064.call(null,(d.getUTCMonth() + 1),2),"-",normalize__331064.call(null,d.getUTCDate(),2),"T",normalize__331064.call(null,d.getUTCHours(),2),":",normalize__331064.call(null,d.getUTCMinutes(),2),":",normalize__331064.call(null,d.getUTCSeconds(),2),".",normalize__331064.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__331065 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__331065,"{",", ","}",opts,coll);
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
var this__331067 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__331068 = this;
var G__331069__331070 = cljs.core.seq.call(null,this__331068.watches);
while(true){
if(G__331069__331070)
{var vec__331071__331072 = cljs.core.first.call(null,G__331069__331070);
var key__331073 = cljs.core.nth.call(null,vec__331071__331072,0,null);
var f__331074 = cljs.core.nth.call(null,vec__331071__331072,1,null);
f__331074.call(null,key__331073,this$,oldval,newval);
{
var G__331082 = cljs.core.next.call(null,G__331069__331070);
G__331069__331070 = G__331082;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__331075 = this;
return this$.watches = cljs.core.assoc.call(null,this__331075.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__331076 = this;
return this$.watches = cljs.core.dissoc.call(null,this__331076.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__331077 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__331077.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__331078 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__331078.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__331079 = this;
return this__331079.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__331080 = this;
return this__331080.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__331081 = this;
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
var G__331094__delegate = function (x,p__331083){
var map__331089__331090 = p__331083;
var map__331089__331091 = ((cljs.core.seq_QMARK_.call(null,map__331089__331090))?cljs.core.apply.call(null,cljs.core.hash_map,map__331089__331090):map__331089__331090);
var validator__331092 = cljs.core._lookup.call(null,map__331089__331091,"\uFDD0'validator",null);
var meta__331093 = cljs.core._lookup.call(null,map__331089__331091,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__331093,validator__331092,null));
};
var G__331094 = function (x,var_args){
var p__331083 = null;
if (goog.isDef(var_args)) {
  p__331083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__331094__delegate.call(this, x, p__331083);
};
G__331094.cljs$lang$maxFixedArity = 1;
G__331094.cljs$lang$applyTo = (function (arglist__331095){
var x = cljs.core.first(arglist__331095);
var p__331083 = cljs.core.rest(arglist__331095);
return G__331094__delegate(x, p__331083);
});
G__331094.cljs$lang$arity$variadic = G__331094__delegate;
return G__331094;
})()
;
atom = function(x,var_args){
var p__331083 = var_args;
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
var temp__3974__auto____331099 = a.validator;
if(cljs.core.truth_(temp__3974__auto____331099))
{var validate__331100 = temp__3974__auto____331099;
if(cljs.core.truth_(validate__331100.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__331101 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__331101,new_value);
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
var G__331102__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__331102 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__331102__delegate.call(this, a, f, x, y, z, more);
};
G__331102.cljs$lang$maxFixedArity = 5;
G__331102.cljs$lang$applyTo = (function (arglist__331103){
var a = cljs.core.first(arglist__331103);
var f = cljs.core.first(cljs.core.next(arglist__331103));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__331103)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__331103))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__331103)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__331103)))));
return G__331102__delegate(a, f, x, y, z, more);
});
G__331102.cljs$lang$arity$variadic = G__331102__delegate;
return G__331102;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__331104){
var iref = cljs.core.first(arglist__331104);
var f = cljs.core.first(cljs.core.next(arglist__331104));
var args = cljs.core.rest(cljs.core.next(arglist__331104));
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
var this__331105 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__331105.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__331106 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__331106.state,(function (p__331107){
var map__331108__331109 = p__331107;
var map__331108__331110 = ((cljs.core.seq_QMARK_.call(null,map__331108__331109))?cljs.core.apply.call(null,cljs.core.hash_map,map__331108__331109):map__331108__331109);
var curr_state__331111 = map__331108__331110;
var done__331112 = cljs.core._lookup.call(null,map__331108__331110,"\uFDD0'done",null);
if(cljs.core.truth_(done__331112))
{return curr_state__331111;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__331106.f.call(null)});
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
var map__331133__331134 = options;
var map__331133__331135 = ((cljs.core.seq_QMARK_.call(null,map__331133__331134))?cljs.core.apply.call(null,cljs.core.hash_map,map__331133__331134):map__331133__331134);
var keywordize_keys__331136 = cljs.core._lookup.call(null,map__331133__331135,"\uFDD0'keywordize-keys",null);
var keyfn__331137 = (cljs.core.truth_(keywordize_keys__331136)?cljs.core.keyword:cljs.core.str);
var f__331152 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2484__auto____331151 = (function iter__331145(s__331146){
return (new cljs.core.LazySeq(null,false,(function (){
var s__331146__331149 = s__331146;
while(true){
if(cljs.core.seq.call(null,s__331146__331149))
{var k__331150 = cljs.core.first.call(null,s__331146__331149);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__331137.call(null,k__331150),thisfn.call(null,(x[k__331150]))], true),iter__331145.call(null,cljs.core.rest.call(null,s__331146__331149)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2484__auto____331151.call(null,cljs.core.js_keys.call(null,x));
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
return f__331152.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__331153){
var x = cljs.core.first(arglist__331153);
var options = cljs.core.rest(arglist__331153);
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
var mem__331158 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__331162__delegate = function (args){
var temp__3971__auto____331159 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__331158),args,null);
if(cljs.core.truth_(temp__3971__auto____331159))
{var v__331160 = temp__3971__auto____331159;
return v__331160;
} else
{var ret__331161 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__331158,cljs.core.assoc,args,ret__331161);
return ret__331161;
}
};
var G__331162 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__331162__delegate.call(this, args);
};
G__331162.cljs$lang$maxFixedArity = 0;
G__331162.cljs$lang$applyTo = (function (arglist__331163){
var args = cljs.core.seq(arglist__331163);;
return G__331162__delegate(args);
});
G__331162.cljs$lang$arity$variadic = G__331162__delegate;
return G__331162;
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
var ret__331165 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__331165))
{{
var G__331166 = ret__331165;
f = G__331166;
continue;
}
} else
{return ret__331165;
}
break;
}
});
var trampoline__2 = (function() { 
var G__331167__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__331167 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__331167__delegate.call(this, f, args);
};
G__331167.cljs$lang$maxFixedArity = 1;
G__331167.cljs$lang$applyTo = (function (arglist__331168){
var f = cljs.core.first(arglist__331168);
var args = cljs.core.rest(arglist__331168);
return G__331167__delegate(f, args);
});
G__331167.cljs$lang$arity$variadic = G__331167__delegate;
return G__331167;
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
var k__331170 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__331170,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__331170,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____331179 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____331179)
{return or__3824__auto____331179;
} else
{var or__3824__auto____331180 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____331180)
{return or__3824__auto____331180;
} else
{var and__3822__auto____331181 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____331181)
{var and__3822__auto____331182 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____331182)
{var and__3822__auto____331183 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____331183)
{var ret__331184 = true;
var i__331185 = 0;
while(true){
if((function (){var or__3824__auto____331186 = cljs.core.not.call(null,ret__331184);
if(or__3824__auto____331186)
{return or__3824__auto____331186;
} else
{return (i__331185 === cljs.core.count.call(null,parent));
}
})())
{return ret__331184;
} else
{{
var G__331187 = isa_QMARK_.call(null,h,child.call(null,i__331185),parent.call(null,i__331185));
var G__331188 = (i__331185 + 1);
ret__331184 = G__331187;
i__331185 = G__331188;
continue;
}
}
break;
}
} else
{return and__3822__auto____331183;
}
} else
{return and__3822__auto____331182;
}
} else
{return and__3822__auto____331181;
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
var tp__331197 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__331198 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__331199 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__331200 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____331201 = ((cljs.core.contains_QMARK_.call(null,tp__331197.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__331199.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__331199.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__331197,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__331200.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__331198,parent,ta__331199),"\uFDD0'descendants":tf__331200.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__331199,tag,td__331198)});
})());
if(cljs.core.truth_(or__3824__auto____331201))
{return or__3824__auto____331201;
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
var parentMap__331206 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__331207 = (cljs.core.truth_(parentMap__331206.call(null,tag))?cljs.core.disj.call(null,parentMap__331206.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__331208 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__331207))?cljs.core.assoc.call(null,parentMap__331206,tag,childsParents__331207):cljs.core.dissoc.call(null,parentMap__331206,tag));
var deriv_seq__331209 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__331189_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__331189_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__331189_SHARP_),cljs.core.second.call(null,p1__331189_SHARP_)));
}),cljs.core.seq.call(null,newParents__331208)));
if(cljs.core.contains_QMARK_.call(null,parentMap__331206.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__331190_SHARP_,p2__331191_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__331190_SHARP_,p2__331191_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__331209));
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
var xprefs__331217 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____331219 = (cljs.core.truth_((function (){var and__3822__auto____331218 = xprefs__331217;
if(cljs.core.truth_(and__3822__auto____331218))
{return xprefs__331217.call(null,y);
} else
{return and__3822__auto____331218;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____331219))
{return or__3824__auto____331219;
} else
{var or__3824__auto____331221 = (function (){var ps__331220 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__331220) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__331220),prefer_table)))
{} else
{}
{
var G__331224 = cljs.core.rest.call(null,ps__331220);
ps__331220 = G__331224;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____331221))
{return or__3824__auto____331221;
} else
{var or__3824__auto____331223 = (function (){var ps__331222 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__331222) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__331222),y,prefer_table)))
{} else
{}
{
var G__331225 = cljs.core.rest.call(null,ps__331222);
ps__331222 = G__331225;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____331223))
{return or__3824__auto____331223;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____331227 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____331227))
{return or__3824__auto____331227;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__331245 = cljs.core.reduce.call(null,(function (be,p__331237){
var vec__331238__331239 = p__331237;
var k__331240 = cljs.core.nth.call(null,vec__331238__331239,0,null);
var ___331241 = cljs.core.nth.call(null,vec__331238__331239,1,null);
var e__331242 = vec__331238__331239;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__331240))
{var be2__331244 = (cljs.core.truth_((function (){var or__3824__auto____331243 = (be == null);
if(or__3824__auto____331243)
{return or__3824__auto____331243;
} else
{return cljs.core.dominates.call(null,k__331240,cljs.core.first.call(null,be),prefer_table);
}
})())?e__331242:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__331244),k__331240,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__331240),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__331244)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__331244;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__331245))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__331245));
return cljs.core.second.call(null,best_entry__331245);
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
if((function (){var and__3822__auto____331250 = mf;
if(and__3822__auto____331250)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____331250;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2387__auto____331251 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____331252 = (cljs.core._reset[goog.typeOf(x__2387__auto____331251)]);
if(or__3824__auto____331252)
{return or__3824__auto____331252;
} else
{var or__3824__auto____331253 = (cljs.core._reset["_"]);
if(or__3824__auto____331253)
{return or__3824__auto____331253;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____331258 = mf;
if(and__3822__auto____331258)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____331258;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2387__auto____331259 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____331260 = (cljs.core._add_method[goog.typeOf(x__2387__auto____331259)]);
if(or__3824__auto____331260)
{return or__3824__auto____331260;
} else
{var or__3824__auto____331261 = (cljs.core._add_method["_"]);
if(or__3824__auto____331261)
{return or__3824__auto____331261;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____331266 = mf;
if(and__3822__auto____331266)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____331266;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2387__auto____331267 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____331268 = (cljs.core._remove_method[goog.typeOf(x__2387__auto____331267)]);
if(or__3824__auto____331268)
{return or__3824__auto____331268;
} else
{var or__3824__auto____331269 = (cljs.core._remove_method["_"]);
if(or__3824__auto____331269)
{return or__3824__auto____331269;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____331274 = mf;
if(and__3822__auto____331274)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____331274;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2387__auto____331275 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____331276 = (cljs.core._prefer_method[goog.typeOf(x__2387__auto____331275)]);
if(or__3824__auto____331276)
{return or__3824__auto____331276;
} else
{var or__3824__auto____331277 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____331277)
{return or__3824__auto____331277;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____331282 = mf;
if(and__3822__auto____331282)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____331282;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2387__auto____331283 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____331284 = (cljs.core._get_method[goog.typeOf(x__2387__auto____331283)]);
if(or__3824__auto____331284)
{return or__3824__auto____331284;
} else
{var or__3824__auto____331285 = (cljs.core._get_method["_"]);
if(or__3824__auto____331285)
{return or__3824__auto____331285;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____331290 = mf;
if(and__3822__auto____331290)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____331290;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2387__auto____331291 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____331292 = (cljs.core._methods[goog.typeOf(x__2387__auto____331291)]);
if(or__3824__auto____331292)
{return or__3824__auto____331292;
} else
{var or__3824__auto____331293 = (cljs.core._methods["_"]);
if(or__3824__auto____331293)
{return or__3824__auto____331293;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____331298 = mf;
if(and__3822__auto____331298)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____331298;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2387__auto____331299 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____331300 = (cljs.core._prefers[goog.typeOf(x__2387__auto____331299)]);
if(or__3824__auto____331300)
{return or__3824__auto____331300;
} else
{var or__3824__auto____331301 = (cljs.core._prefers["_"]);
if(or__3824__auto____331301)
{return or__3824__auto____331301;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____331306 = mf;
if(and__3822__auto____331306)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____331306;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2387__auto____331307 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____331308 = (cljs.core._dispatch[goog.typeOf(x__2387__auto____331307)]);
if(or__3824__auto____331308)
{return or__3824__auto____331308;
} else
{var or__3824__auto____331309 = (cljs.core._dispatch["_"]);
if(or__3824__auto____331309)
{return or__3824__auto____331309;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__331312 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__331313 = cljs.core._get_method.call(null,mf,dispatch_val__331312);
if(cljs.core.truth_(target_fn__331313))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__331312)].join('')));
}
return cljs.core.apply.call(null,target_fn__331313,args);
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
var this__331314 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__331315 = this;
cljs.core.swap_BANG_.call(null,this__331315.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__331315.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__331315.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__331315.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__331316 = this;
cljs.core.swap_BANG_.call(null,this__331316.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__331316.method_cache,this__331316.method_table,this__331316.cached_hierarchy,this__331316.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__331317 = this;
cljs.core.swap_BANG_.call(null,this__331317.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__331317.method_cache,this__331317.method_table,this__331317.cached_hierarchy,this__331317.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__331318 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__331318.cached_hierarchy),cljs.core.deref.call(null,this__331318.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__331318.method_cache,this__331318.method_table,this__331318.cached_hierarchy,this__331318.hierarchy);
}
var temp__3971__auto____331319 = cljs.core.deref.call(null,this__331318.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____331319))
{var target_fn__331320 = temp__3971__auto____331319;
return target_fn__331320;
} else
{var temp__3971__auto____331321 = cljs.core.find_and_cache_best_method.call(null,this__331318.name,dispatch_val,this__331318.hierarchy,this__331318.method_table,this__331318.prefer_table,this__331318.method_cache,this__331318.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____331321))
{var target_fn__331322 = temp__3971__auto____331321;
return target_fn__331322;
} else
{return cljs.core.deref.call(null,this__331318.method_table).call(null,this__331318.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__331323 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__331323.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__331323.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__331323.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__331323.method_cache,this__331323.method_table,this__331323.cached_hierarchy,this__331323.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__331324 = this;
return cljs.core.deref.call(null,this__331324.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__331325 = this;
return cljs.core.deref.call(null,this__331325.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__331326 = this;
return cljs.core.do_dispatch.call(null,mf,this__331326.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__331328__delegate = function (_,args){
var self__331327 = this;
return cljs.core._dispatch.call(null,self__331327,args);
};
var G__331328 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__331328__delegate.call(this, _, args);
};
G__331328.cljs$lang$maxFixedArity = 1;
G__331328.cljs$lang$applyTo = (function (arglist__331329){
var _ = cljs.core.first(arglist__331329);
var args = cljs.core.rest(arglist__331329);
return G__331328__delegate(_, args);
});
G__331328.cljs$lang$arity$variadic = G__331328__delegate;
return G__331328;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__331330 = this;
return cljs.core._dispatch.call(null,self__331330,args);
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
var this__331331 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_331333,writer,_){
var this__331332 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__331332.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_331335,_){
var this__331334 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__331334.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__331336 = this;
var and__3822__auto____331337 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____331337)
{return (this__331336.uuid === other.uuid);
} else
{return and__3822__auto____331337;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__331338 = this;
var this__331339 = this;
return cljs.core.pr_str.call(null,this__331339);
});
cljs.core.UUID;
