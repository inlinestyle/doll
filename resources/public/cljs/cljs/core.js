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
var x__556563 = (((x == null))?null:x);
if((p[goog.typeOf(x__556563)]))
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
var G__556564__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__556564 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__556564__delegate.call(this, array, i, idxs);
};
G__556564.cljs$lang$maxFixedArity = 2;
G__556564.cljs$lang$applyTo = (function (arglist__556565){
var array = cljs.core.first(arglist__556565);
var i = cljs.core.first(cljs.core.next(arglist__556565));
var idxs = cljs.core.rest(cljs.core.next(arglist__556565));
return G__556564__delegate(array, i, idxs);
});
G__556564.cljs$lang$arity$variadic = G__556564__delegate;
return G__556564;
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
if((function (){var and__3822__auto____556650 = this$;
if(and__3822__auto____556650)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____556650;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2387__auto____556651 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556652 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556651)]);
if(or__3824__auto____556652)
{return or__3824__auto____556652;
} else
{var or__3824__auto____556653 = (cljs.core._invoke["_"]);
if(or__3824__auto____556653)
{return or__3824__auto____556653;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____556654 = this$;
if(and__3822__auto____556654)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____556654;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2387__auto____556655 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556656 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556655)]);
if(or__3824__auto____556656)
{return or__3824__auto____556656;
} else
{var or__3824__auto____556657 = (cljs.core._invoke["_"]);
if(or__3824__auto____556657)
{return or__3824__auto____556657;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____556658 = this$;
if(and__3822__auto____556658)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____556658;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2387__auto____556659 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556660 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556659)]);
if(or__3824__auto____556660)
{return or__3824__auto____556660;
} else
{var or__3824__auto____556661 = (cljs.core._invoke["_"]);
if(or__3824__auto____556661)
{return or__3824__auto____556661;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____556662 = this$;
if(and__3822__auto____556662)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____556662;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2387__auto____556663 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556664 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556663)]);
if(or__3824__auto____556664)
{return or__3824__auto____556664;
} else
{var or__3824__auto____556665 = (cljs.core._invoke["_"]);
if(or__3824__auto____556665)
{return or__3824__auto____556665;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____556666 = this$;
if(and__3822__auto____556666)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____556666;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2387__auto____556667 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556668 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556667)]);
if(or__3824__auto____556668)
{return or__3824__auto____556668;
} else
{var or__3824__auto____556669 = (cljs.core._invoke["_"]);
if(or__3824__auto____556669)
{return or__3824__auto____556669;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____556670 = this$;
if(and__3822__auto____556670)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____556670;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2387__auto____556671 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556672 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556671)]);
if(or__3824__auto____556672)
{return or__3824__auto____556672;
} else
{var or__3824__auto____556673 = (cljs.core._invoke["_"]);
if(or__3824__auto____556673)
{return or__3824__auto____556673;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____556674 = this$;
if(and__3822__auto____556674)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____556674;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2387__auto____556675 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556676 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556675)]);
if(or__3824__auto____556676)
{return or__3824__auto____556676;
} else
{var or__3824__auto____556677 = (cljs.core._invoke["_"]);
if(or__3824__auto____556677)
{return or__3824__auto____556677;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____556678 = this$;
if(and__3822__auto____556678)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____556678;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2387__auto____556679 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556680 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556679)]);
if(or__3824__auto____556680)
{return or__3824__auto____556680;
} else
{var or__3824__auto____556681 = (cljs.core._invoke["_"]);
if(or__3824__auto____556681)
{return or__3824__auto____556681;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____556682 = this$;
if(and__3822__auto____556682)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____556682;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2387__auto____556683 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556684 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556683)]);
if(or__3824__auto____556684)
{return or__3824__auto____556684;
} else
{var or__3824__auto____556685 = (cljs.core._invoke["_"]);
if(or__3824__auto____556685)
{return or__3824__auto____556685;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____556686 = this$;
if(and__3822__auto____556686)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____556686;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2387__auto____556687 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556688 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556687)]);
if(or__3824__auto____556688)
{return or__3824__auto____556688;
} else
{var or__3824__auto____556689 = (cljs.core._invoke["_"]);
if(or__3824__auto____556689)
{return or__3824__auto____556689;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____556690 = this$;
if(and__3822__auto____556690)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____556690;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2387__auto____556691 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556692 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556691)]);
if(or__3824__auto____556692)
{return or__3824__auto____556692;
} else
{var or__3824__auto____556693 = (cljs.core._invoke["_"]);
if(or__3824__auto____556693)
{return or__3824__auto____556693;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____556694 = this$;
if(and__3822__auto____556694)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____556694;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2387__auto____556695 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556696 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556695)]);
if(or__3824__auto____556696)
{return or__3824__auto____556696;
} else
{var or__3824__auto____556697 = (cljs.core._invoke["_"]);
if(or__3824__auto____556697)
{return or__3824__auto____556697;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____556698 = this$;
if(and__3822__auto____556698)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____556698;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2387__auto____556699 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556700 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556699)]);
if(or__3824__auto____556700)
{return or__3824__auto____556700;
} else
{var or__3824__auto____556701 = (cljs.core._invoke["_"]);
if(or__3824__auto____556701)
{return or__3824__auto____556701;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____556702 = this$;
if(and__3822__auto____556702)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____556702;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2387__auto____556703 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556704 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556703)]);
if(or__3824__auto____556704)
{return or__3824__auto____556704;
} else
{var or__3824__auto____556705 = (cljs.core._invoke["_"]);
if(or__3824__auto____556705)
{return or__3824__auto____556705;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____556706 = this$;
if(and__3822__auto____556706)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____556706;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2387__auto____556707 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556708 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556707)]);
if(or__3824__auto____556708)
{return or__3824__auto____556708;
} else
{var or__3824__auto____556709 = (cljs.core._invoke["_"]);
if(or__3824__auto____556709)
{return or__3824__auto____556709;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____556710 = this$;
if(and__3822__auto____556710)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____556710;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2387__auto____556711 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556712 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556711)]);
if(or__3824__auto____556712)
{return or__3824__auto____556712;
} else
{var or__3824__auto____556713 = (cljs.core._invoke["_"]);
if(or__3824__auto____556713)
{return or__3824__auto____556713;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____556714 = this$;
if(and__3822__auto____556714)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____556714;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2387__auto____556715 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556716 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556715)]);
if(or__3824__auto____556716)
{return or__3824__auto____556716;
} else
{var or__3824__auto____556717 = (cljs.core._invoke["_"]);
if(or__3824__auto____556717)
{return or__3824__auto____556717;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____556718 = this$;
if(and__3822__auto____556718)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____556718;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2387__auto____556719 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556720 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556719)]);
if(or__3824__auto____556720)
{return or__3824__auto____556720;
} else
{var or__3824__auto____556721 = (cljs.core._invoke["_"]);
if(or__3824__auto____556721)
{return or__3824__auto____556721;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____556722 = this$;
if(and__3822__auto____556722)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____556722;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2387__auto____556723 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556724 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556723)]);
if(or__3824__auto____556724)
{return or__3824__auto____556724;
} else
{var or__3824__auto____556725 = (cljs.core._invoke["_"]);
if(or__3824__auto____556725)
{return or__3824__auto____556725;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____556726 = this$;
if(and__3822__auto____556726)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____556726;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2387__auto____556727 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556728 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556727)]);
if(or__3824__auto____556728)
{return or__3824__auto____556728;
} else
{var or__3824__auto____556729 = (cljs.core._invoke["_"]);
if(or__3824__auto____556729)
{return or__3824__auto____556729;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____556730 = this$;
if(and__3822__auto____556730)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____556730;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2387__auto____556731 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____556732 = (cljs.core._invoke[goog.typeOf(x__2387__auto____556731)]);
if(or__3824__auto____556732)
{return or__3824__auto____556732;
} else
{var or__3824__auto____556733 = (cljs.core._invoke["_"]);
if(or__3824__auto____556733)
{return or__3824__auto____556733;
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
if((function (){var and__3822__auto____556738 = coll;
if(and__3822__auto____556738)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____556738;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2387__auto____556739 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556740 = (cljs.core._count[goog.typeOf(x__2387__auto____556739)]);
if(or__3824__auto____556740)
{return or__3824__auto____556740;
} else
{var or__3824__auto____556741 = (cljs.core._count["_"]);
if(or__3824__auto____556741)
{return or__3824__auto____556741;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____556746 = coll;
if(and__3822__auto____556746)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____556746;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2387__auto____556747 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556748 = (cljs.core._empty[goog.typeOf(x__2387__auto____556747)]);
if(or__3824__auto____556748)
{return or__3824__auto____556748;
} else
{var or__3824__auto____556749 = (cljs.core._empty["_"]);
if(or__3824__auto____556749)
{return or__3824__auto____556749;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____556754 = coll;
if(and__3822__auto____556754)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____556754;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2387__auto____556755 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556756 = (cljs.core._conj[goog.typeOf(x__2387__auto____556755)]);
if(or__3824__auto____556756)
{return or__3824__auto____556756;
} else
{var or__3824__auto____556757 = (cljs.core._conj["_"]);
if(or__3824__auto____556757)
{return or__3824__auto____556757;
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
if((function (){var and__3822__auto____556766 = coll;
if(and__3822__auto____556766)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____556766;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2387__auto____556767 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556768 = (cljs.core._nth[goog.typeOf(x__2387__auto____556767)]);
if(or__3824__auto____556768)
{return or__3824__auto____556768;
} else
{var or__3824__auto____556769 = (cljs.core._nth["_"]);
if(or__3824__auto____556769)
{return or__3824__auto____556769;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____556770 = coll;
if(and__3822__auto____556770)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____556770;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2387__auto____556771 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556772 = (cljs.core._nth[goog.typeOf(x__2387__auto____556771)]);
if(or__3824__auto____556772)
{return or__3824__auto____556772;
} else
{var or__3824__auto____556773 = (cljs.core._nth["_"]);
if(or__3824__auto____556773)
{return or__3824__auto____556773;
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
if((function (){var and__3822__auto____556778 = coll;
if(and__3822__auto____556778)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____556778;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2387__auto____556779 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556780 = (cljs.core._first[goog.typeOf(x__2387__auto____556779)]);
if(or__3824__auto____556780)
{return or__3824__auto____556780;
} else
{var or__3824__auto____556781 = (cljs.core._first["_"]);
if(or__3824__auto____556781)
{return or__3824__auto____556781;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____556786 = coll;
if(and__3822__auto____556786)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____556786;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2387__auto____556787 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556788 = (cljs.core._rest[goog.typeOf(x__2387__auto____556787)]);
if(or__3824__auto____556788)
{return or__3824__auto____556788;
} else
{var or__3824__auto____556789 = (cljs.core._rest["_"]);
if(or__3824__auto____556789)
{return or__3824__auto____556789;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____556794 = coll;
if(and__3822__auto____556794)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____556794;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2387__auto____556795 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556796 = (cljs.core._next[goog.typeOf(x__2387__auto____556795)]);
if(or__3824__auto____556796)
{return or__3824__auto____556796;
} else
{var or__3824__auto____556797 = (cljs.core._next["_"]);
if(or__3824__auto____556797)
{return or__3824__auto____556797;
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
if((function (){var and__3822__auto____556806 = o;
if(and__3822__auto____556806)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____556806;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2387__auto____556807 = (((o == null))?null:o);
return (function (){var or__3824__auto____556808 = (cljs.core._lookup[goog.typeOf(x__2387__auto____556807)]);
if(or__3824__auto____556808)
{return or__3824__auto____556808;
} else
{var or__3824__auto____556809 = (cljs.core._lookup["_"]);
if(or__3824__auto____556809)
{return or__3824__auto____556809;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____556810 = o;
if(and__3822__auto____556810)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____556810;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2387__auto____556811 = (((o == null))?null:o);
return (function (){var or__3824__auto____556812 = (cljs.core._lookup[goog.typeOf(x__2387__auto____556811)]);
if(or__3824__auto____556812)
{return or__3824__auto____556812;
} else
{var or__3824__auto____556813 = (cljs.core._lookup["_"]);
if(or__3824__auto____556813)
{return or__3824__auto____556813;
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
if((function (){var and__3822__auto____556818 = coll;
if(and__3822__auto____556818)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____556818;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2387__auto____556819 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556820 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2387__auto____556819)]);
if(or__3824__auto____556820)
{return or__3824__auto____556820;
} else
{var or__3824__auto____556821 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____556821)
{return or__3824__auto____556821;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____556826 = coll;
if(and__3822__auto____556826)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____556826;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2387__auto____556827 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556828 = (cljs.core._assoc[goog.typeOf(x__2387__auto____556827)]);
if(or__3824__auto____556828)
{return or__3824__auto____556828;
} else
{var or__3824__auto____556829 = (cljs.core._assoc["_"]);
if(or__3824__auto____556829)
{return or__3824__auto____556829;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____556834 = coll;
if(and__3822__auto____556834)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____556834;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2387__auto____556835 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556836 = (cljs.core._dissoc[goog.typeOf(x__2387__auto____556835)]);
if(or__3824__auto____556836)
{return or__3824__auto____556836;
} else
{var or__3824__auto____556837 = (cljs.core._dissoc["_"]);
if(or__3824__auto____556837)
{return or__3824__auto____556837;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____556842 = coll;
if(and__3822__auto____556842)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____556842;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2387__auto____556843 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556844 = (cljs.core._key[goog.typeOf(x__2387__auto____556843)]);
if(or__3824__auto____556844)
{return or__3824__auto____556844;
} else
{var or__3824__auto____556845 = (cljs.core._key["_"]);
if(or__3824__auto____556845)
{return or__3824__auto____556845;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____556850 = coll;
if(and__3822__auto____556850)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____556850;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2387__auto____556851 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556852 = (cljs.core._val[goog.typeOf(x__2387__auto____556851)]);
if(or__3824__auto____556852)
{return or__3824__auto____556852;
} else
{var or__3824__auto____556853 = (cljs.core._val["_"]);
if(or__3824__auto____556853)
{return or__3824__auto____556853;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____556858 = coll;
if(and__3822__auto____556858)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____556858;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2387__auto____556859 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556860 = (cljs.core._disjoin[goog.typeOf(x__2387__auto____556859)]);
if(or__3824__auto____556860)
{return or__3824__auto____556860;
} else
{var or__3824__auto____556861 = (cljs.core._disjoin["_"]);
if(or__3824__auto____556861)
{return or__3824__auto____556861;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____556866 = coll;
if(and__3822__auto____556866)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____556866;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2387__auto____556867 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556868 = (cljs.core._peek[goog.typeOf(x__2387__auto____556867)]);
if(or__3824__auto____556868)
{return or__3824__auto____556868;
} else
{var or__3824__auto____556869 = (cljs.core._peek["_"]);
if(or__3824__auto____556869)
{return or__3824__auto____556869;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____556874 = coll;
if(and__3822__auto____556874)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____556874;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2387__auto____556875 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556876 = (cljs.core._pop[goog.typeOf(x__2387__auto____556875)]);
if(or__3824__auto____556876)
{return or__3824__auto____556876;
} else
{var or__3824__auto____556877 = (cljs.core._pop["_"]);
if(or__3824__auto____556877)
{return or__3824__auto____556877;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____556882 = coll;
if(and__3822__auto____556882)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____556882;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2387__auto____556883 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556884 = (cljs.core._assoc_n[goog.typeOf(x__2387__auto____556883)]);
if(or__3824__auto____556884)
{return or__3824__auto____556884;
} else
{var or__3824__auto____556885 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____556885)
{return or__3824__auto____556885;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____556890 = o;
if(and__3822__auto____556890)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____556890;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2387__auto____556891 = (((o == null))?null:o);
return (function (){var or__3824__auto____556892 = (cljs.core._deref[goog.typeOf(x__2387__auto____556891)]);
if(or__3824__auto____556892)
{return or__3824__auto____556892;
} else
{var or__3824__auto____556893 = (cljs.core._deref["_"]);
if(or__3824__auto____556893)
{return or__3824__auto____556893;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____556898 = o;
if(and__3822__auto____556898)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____556898;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2387__auto____556899 = (((o == null))?null:o);
return (function (){var or__3824__auto____556900 = (cljs.core._deref_with_timeout[goog.typeOf(x__2387__auto____556899)]);
if(or__3824__auto____556900)
{return or__3824__auto____556900;
} else
{var or__3824__auto____556901 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____556901)
{return or__3824__auto____556901;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____556906 = o;
if(and__3822__auto____556906)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____556906;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2387__auto____556907 = (((o == null))?null:o);
return (function (){var or__3824__auto____556908 = (cljs.core._meta[goog.typeOf(x__2387__auto____556907)]);
if(or__3824__auto____556908)
{return or__3824__auto____556908;
} else
{var or__3824__auto____556909 = (cljs.core._meta["_"]);
if(or__3824__auto____556909)
{return or__3824__auto____556909;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____556914 = o;
if(and__3822__auto____556914)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____556914;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2387__auto____556915 = (((o == null))?null:o);
return (function (){var or__3824__auto____556916 = (cljs.core._with_meta[goog.typeOf(x__2387__auto____556915)]);
if(or__3824__auto____556916)
{return or__3824__auto____556916;
} else
{var or__3824__auto____556917 = (cljs.core._with_meta["_"]);
if(or__3824__auto____556917)
{return or__3824__auto____556917;
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
if((function (){var and__3822__auto____556926 = coll;
if(and__3822__auto____556926)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____556926;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2387__auto____556927 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556928 = (cljs.core._reduce[goog.typeOf(x__2387__auto____556927)]);
if(or__3824__auto____556928)
{return or__3824__auto____556928;
} else
{var or__3824__auto____556929 = (cljs.core._reduce["_"]);
if(or__3824__auto____556929)
{return or__3824__auto____556929;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____556930 = coll;
if(and__3822__auto____556930)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____556930;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2387__auto____556931 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556932 = (cljs.core._reduce[goog.typeOf(x__2387__auto____556931)]);
if(or__3824__auto____556932)
{return or__3824__auto____556932;
} else
{var or__3824__auto____556933 = (cljs.core._reduce["_"]);
if(or__3824__auto____556933)
{return or__3824__auto____556933;
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
if((function (){var and__3822__auto____556938 = coll;
if(and__3822__auto____556938)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____556938;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2387__auto____556939 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556940 = (cljs.core._kv_reduce[goog.typeOf(x__2387__auto____556939)]);
if(or__3824__auto____556940)
{return or__3824__auto____556940;
} else
{var or__3824__auto____556941 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____556941)
{return or__3824__auto____556941;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____556946 = o;
if(and__3822__auto____556946)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____556946;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2387__auto____556947 = (((o == null))?null:o);
return (function (){var or__3824__auto____556948 = (cljs.core._equiv[goog.typeOf(x__2387__auto____556947)]);
if(or__3824__auto____556948)
{return or__3824__auto____556948;
} else
{var or__3824__auto____556949 = (cljs.core._equiv["_"]);
if(or__3824__auto____556949)
{return or__3824__auto____556949;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____556954 = o;
if(and__3822__auto____556954)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____556954;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2387__auto____556955 = (((o == null))?null:o);
return (function (){var or__3824__auto____556956 = (cljs.core._hash[goog.typeOf(x__2387__auto____556955)]);
if(or__3824__auto____556956)
{return or__3824__auto____556956;
} else
{var or__3824__auto____556957 = (cljs.core._hash["_"]);
if(or__3824__auto____556957)
{return or__3824__auto____556957;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____556962 = o;
if(and__3822__auto____556962)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____556962;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2387__auto____556963 = (((o == null))?null:o);
return (function (){var or__3824__auto____556964 = (cljs.core._seq[goog.typeOf(x__2387__auto____556963)]);
if(or__3824__auto____556964)
{return or__3824__auto____556964;
} else
{var or__3824__auto____556965 = (cljs.core._seq["_"]);
if(or__3824__auto____556965)
{return or__3824__auto____556965;
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
if((function (){var and__3822__auto____556970 = coll;
if(and__3822__auto____556970)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____556970;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2387__auto____556971 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556972 = (cljs.core._rseq[goog.typeOf(x__2387__auto____556971)]);
if(or__3824__auto____556972)
{return or__3824__auto____556972;
} else
{var or__3824__auto____556973 = (cljs.core._rseq["_"]);
if(or__3824__auto____556973)
{return or__3824__auto____556973;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____556978 = coll;
if(and__3822__auto____556978)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____556978;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2387__auto____556979 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556980 = (cljs.core._sorted_seq[goog.typeOf(x__2387__auto____556979)]);
if(or__3824__auto____556980)
{return or__3824__auto____556980;
} else
{var or__3824__auto____556981 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____556981)
{return or__3824__auto____556981;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____556986 = coll;
if(and__3822__auto____556986)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____556986;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2387__auto____556987 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556988 = (cljs.core._sorted_seq_from[goog.typeOf(x__2387__auto____556987)]);
if(or__3824__auto____556988)
{return or__3824__auto____556988;
} else
{var or__3824__auto____556989 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____556989)
{return or__3824__auto____556989;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____556994 = coll;
if(and__3822__auto____556994)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____556994;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2387__auto____556995 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____556996 = (cljs.core._entry_key[goog.typeOf(x__2387__auto____556995)]);
if(or__3824__auto____556996)
{return or__3824__auto____556996;
} else
{var or__3824__auto____556997 = (cljs.core._entry_key["_"]);
if(or__3824__auto____556997)
{return or__3824__auto____556997;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____557002 = coll;
if(and__3822__auto____557002)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____557002;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2387__auto____557003 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____557004 = (cljs.core._comparator[goog.typeOf(x__2387__auto____557003)]);
if(or__3824__auto____557004)
{return or__3824__auto____557004;
} else
{var or__3824__auto____557005 = (cljs.core._comparator["_"]);
if(or__3824__auto____557005)
{return or__3824__auto____557005;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____557010 = o;
if(and__3822__auto____557010)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____557010;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2387__auto____557011 = (((o == null))?null:o);
return (function (){var or__3824__auto____557012 = (cljs.core._pr_seq[goog.typeOf(x__2387__auto____557011)]);
if(or__3824__auto____557012)
{return or__3824__auto____557012;
} else
{var or__3824__auto____557013 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____557013)
{return or__3824__auto____557013;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____557018 = writer;
if(and__3822__auto____557018)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____557018;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__2387__auto____557019 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____557020 = (cljs.core._write[goog.typeOf(x__2387__auto____557019)]);
if(or__3824__auto____557020)
{return or__3824__auto____557020;
} else
{var or__3824__auto____557021 = (cljs.core._write["_"]);
if(or__3824__auto____557021)
{return or__3824__auto____557021;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____557026 = writer;
if(and__3822__auto____557026)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____557026;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__2387__auto____557027 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____557028 = (cljs.core._flush[goog.typeOf(x__2387__auto____557027)]);
if(or__3824__auto____557028)
{return or__3824__auto____557028;
} else
{var or__3824__auto____557029 = (cljs.core._flush["_"]);
if(or__3824__auto____557029)
{return or__3824__auto____557029;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____557034 = o;
if(and__3822__auto____557034)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____557034;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__2387__auto____557035 = (((o == null))?null:o);
return (function (){var or__3824__auto____557036 = (cljs.core._pr_writer[goog.typeOf(x__2387__auto____557035)]);
if(or__3824__auto____557036)
{return or__3824__auto____557036;
} else
{var or__3824__auto____557037 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____557037)
{return or__3824__auto____557037;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____557042 = d;
if(and__3822__auto____557042)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____557042;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2387__auto____557043 = (((d == null))?null:d);
return (function (){var or__3824__auto____557044 = (cljs.core._realized_QMARK_[goog.typeOf(x__2387__auto____557043)]);
if(or__3824__auto____557044)
{return or__3824__auto____557044;
} else
{var or__3824__auto____557045 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____557045)
{return or__3824__auto____557045;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____557050 = this$;
if(and__3822__auto____557050)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____557050;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2387__auto____557051 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____557052 = (cljs.core._notify_watches[goog.typeOf(x__2387__auto____557051)]);
if(or__3824__auto____557052)
{return or__3824__auto____557052;
} else
{var or__3824__auto____557053 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____557053)
{return or__3824__auto____557053;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____557058 = this$;
if(and__3822__auto____557058)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____557058;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2387__auto____557059 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____557060 = (cljs.core._add_watch[goog.typeOf(x__2387__auto____557059)]);
if(or__3824__auto____557060)
{return or__3824__auto____557060;
} else
{var or__3824__auto____557061 = (cljs.core._add_watch["_"]);
if(or__3824__auto____557061)
{return or__3824__auto____557061;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____557066 = this$;
if(and__3822__auto____557066)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____557066;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2387__auto____557067 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____557068 = (cljs.core._remove_watch[goog.typeOf(x__2387__auto____557067)]);
if(or__3824__auto____557068)
{return or__3824__auto____557068;
} else
{var or__3824__auto____557069 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____557069)
{return or__3824__auto____557069;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____557074 = coll;
if(and__3822__auto____557074)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____557074;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2387__auto____557075 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____557076 = (cljs.core._as_transient[goog.typeOf(x__2387__auto____557075)]);
if(or__3824__auto____557076)
{return or__3824__auto____557076;
} else
{var or__3824__auto____557077 = (cljs.core._as_transient["_"]);
if(or__3824__auto____557077)
{return or__3824__auto____557077;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____557082 = tcoll;
if(and__3822__auto____557082)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____557082;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2387__auto____557083 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____557084 = (cljs.core._conj_BANG_[goog.typeOf(x__2387__auto____557083)]);
if(or__3824__auto____557084)
{return or__3824__auto____557084;
} else
{var or__3824__auto____557085 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____557085)
{return or__3824__auto____557085;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____557090 = tcoll;
if(and__3822__auto____557090)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____557090;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2387__auto____557091 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____557092 = (cljs.core._persistent_BANG_[goog.typeOf(x__2387__auto____557091)]);
if(or__3824__auto____557092)
{return or__3824__auto____557092;
} else
{var or__3824__auto____557093 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____557093)
{return or__3824__auto____557093;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____557098 = tcoll;
if(and__3822__auto____557098)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____557098;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2387__auto____557099 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____557100 = (cljs.core._assoc_BANG_[goog.typeOf(x__2387__auto____557099)]);
if(or__3824__auto____557100)
{return or__3824__auto____557100;
} else
{var or__3824__auto____557101 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____557101)
{return or__3824__auto____557101;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____557106 = tcoll;
if(and__3822__auto____557106)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____557106;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2387__auto____557107 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____557108 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2387__auto____557107)]);
if(or__3824__auto____557108)
{return or__3824__auto____557108;
} else
{var or__3824__auto____557109 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____557109)
{return or__3824__auto____557109;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____557114 = tcoll;
if(and__3822__auto____557114)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____557114;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2387__auto____557115 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____557116 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2387__auto____557115)]);
if(or__3824__auto____557116)
{return or__3824__auto____557116;
} else
{var or__3824__auto____557117 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____557117)
{return or__3824__auto____557117;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____557122 = tcoll;
if(and__3822__auto____557122)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____557122;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2387__auto____557123 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____557124 = (cljs.core._pop_BANG_[goog.typeOf(x__2387__auto____557123)]);
if(or__3824__auto____557124)
{return or__3824__auto____557124;
} else
{var or__3824__auto____557125 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____557125)
{return or__3824__auto____557125;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____557130 = tcoll;
if(and__3822__auto____557130)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____557130;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2387__auto____557131 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____557132 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2387__auto____557131)]);
if(or__3824__auto____557132)
{return or__3824__auto____557132;
} else
{var or__3824__auto____557133 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____557133)
{return or__3824__auto____557133;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____557138 = x;
if(and__3822__auto____557138)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____557138;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2387__auto____557139 = (((x == null))?null:x);
return (function (){var or__3824__auto____557140 = (cljs.core._compare[goog.typeOf(x__2387__auto____557139)]);
if(or__3824__auto____557140)
{return or__3824__auto____557140;
} else
{var or__3824__auto____557141 = (cljs.core._compare["_"]);
if(or__3824__auto____557141)
{return or__3824__auto____557141;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____557146 = coll;
if(and__3822__auto____557146)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____557146;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2387__auto____557147 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____557148 = (cljs.core._drop_first[goog.typeOf(x__2387__auto____557147)]);
if(or__3824__auto____557148)
{return or__3824__auto____557148;
} else
{var or__3824__auto____557149 = (cljs.core._drop_first["_"]);
if(or__3824__auto____557149)
{return or__3824__auto____557149;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____557154 = coll;
if(and__3822__auto____557154)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____557154;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2387__auto____557155 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____557156 = (cljs.core._chunked_first[goog.typeOf(x__2387__auto____557155)]);
if(or__3824__auto____557156)
{return or__3824__auto____557156;
} else
{var or__3824__auto____557157 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____557157)
{return or__3824__auto____557157;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____557162 = coll;
if(and__3822__auto____557162)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____557162;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2387__auto____557163 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____557164 = (cljs.core._chunked_rest[goog.typeOf(x__2387__auto____557163)]);
if(or__3824__auto____557164)
{return or__3824__auto____557164;
} else
{var or__3824__auto____557165 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____557165)
{return or__3824__auto____557165;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____557170 = coll;
if(and__3822__auto____557170)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____557170;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2387__auto____557171 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____557172 = (cljs.core._chunked_next[goog.typeOf(x__2387__auto____557171)]);
if(or__3824__auto____557172)
{return or__3824__auto____557172;
} else
{var or__3824__auto____557173 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____557173)
{return or__3824__auto____557173;
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
{if((function (){var G__557177__557178 = coll;
if(G__557177__557178)
{if((function (){var or__3824__auto____557179 = (G__557177__557178.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____557179)
{return or__3824__auto____557179;
} else
{return G__557177__557178.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__557177__557178.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__557177__557178);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__557177__557178);
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
{if((function (){var G__557184__557185 = coll;
if(G__557184__557185)
{if((function (){var or__3824__auto____557186 = (G__557184__557185.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____557186)
{return or__3824__auto____557186;
} else
{return G__557184__557185.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__557184__557185.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__557184__557185);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__557184__557185);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__557187 = cljs.core.seq.call(null,coll);
if((s__557187 == null))
{return null;
} else
{return cljs.core._first.call(null,s__557187);
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
{if((function (){var G__557192__557193 = coll;
if(G__557192__557193)
{if((function (){var or__3824__auto____557194 = (G__557192__557193.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____557194)
{return or__3824__auto____557194;
} else
{return G__557192__557193.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__557192__557193.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__557192__557193);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__557192__557193);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__557195 = cljs.core.seq.call(null,coll);
if(!((s__557195 == null)))
{return cljs.core._rest.call(null,s__557195);
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
{if((function (){var G__557199__557200 = coll;
if(G__557199__557200)
{if((function (){var or__3824__auto____557201 = (G__557199__557200.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____557201)
{return or__3824__auto____557201;
} else
{return G__557199__557200.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__557199__557200.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__557199__557200);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__557199__557200);
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
var or__3824__auto____557203 = (x === y);
if(or__3824__auto____557203)
{return or__3824__auto____557203;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__557204__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__557205 = y;
var G__557206 = cljs.core.first.call(null,more);
var G__557207 = cljs.core.next.call(null,more);
x = G__557205;
y = G__557206;
more = G__557207;
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
var G__557204 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557204__delegate.call(this, x, y, more);
};
G__557204.cljs$lang$maxFixedArity = 2;
G__557204.cljs$lang$applyTo = (function (arglist__557208){
var x = cljs.core.first(arglist__557208);
var y = cljs.core.first(cljs.core.next(arglist__557208));
var more = cljs.core.rest(cljs.core.next(arglist__557208));
return G__557204__delegate(x, y, more);
});
G__557204.cljs$lang$arity$variadic = G__557204__delegate;
return G__557204;
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
var G__557209 = null;
var G__557209__2 = (function (o,k){
return null;
});
var G__557209__3 = (function (o,k,not_found){
return not_found;
});
G__557209 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__557209__2.call(this,o,k);
case 3:
return G__557209__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__557209;
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
var G__557210 = null;
var G__557210__2 = (function (_,f){
return f.call(null);
});
var G__557210__3 = (function (_,f,start){
return start;
});
G__557210 = function(_,f,start){
switch(arguments.length){
case 2:
return G__557210__2.call(this,_,f);
case 3:
return G__557210__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__557210;
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
var G__557211 = null;
var G__557211__2 = (function (_,n){
return null;
});
var G__557211__3 = (function (_,n,not_found){
return not_found;
});
G__557211 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__557211__2.call(this,_,n);
case 3:
return G__557211__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__557211;
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
var and__3822__auto____557212 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____557212)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____557212;
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
var this__557213 = this;
return this__557213.val;
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
var cnt__557226 = cljs.core._count.call(null,cicoll);
if((cnt__557226 === 0))
{return f.call(null);
} else
{var val__557227 = cljs.core._nth.call(null,cicoll,0);
var n__557228 = 1;
while(true){
if((n__557228 < cnt__557226))
{var nval__557229 = f.call(null,val__557227,cljs.core._nth.call(null,cicoll,n__557228));
if(cljs.core.reduced_QMARK_.call(null,nval__557229))
{return cljs.core.deref.call(null,nval__557229);
} else
{{
var G__557238 = nval__557229;
var G__557239 = (n__557228 + 1);
val__557227 = G__557238;
n__557228 = G__557239;
continue;
}
}
} else
{return val__557227;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__557230 = cljs.core._count.call(null,cicoll);
var val__557231 = val;
var n__557232 = 0;
while(true){
if((n__557232 < cnt__557230))
{var nval__557233 = f.call(null,val__557231,cljs.core._nth.call(null,cicoll,n__557232));
if(cljs.core.reduced_QMARK_.call(null,nval__557233))
{return cljs.core.deref.call(null,nval__557233);
} else
{{
var G__557240 = nval__557233;
var G__557241 = (n__557232 + 1);
val__557231 = G__557240;
n__557232 = G__557241;
continue;
}
}
} else
{return val__557231;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__557234 = cljs.core._count.call(null,cicoll);
var val__557235 = val;
var n__557236 = idx;
while(true){
if((n__557236 < cnt__557234))
{var nval__557237 = f.call(null,val__557235,cljs.core._nth.call(null,cicoll,n__557236));
if(cljs.core.reduced_QMARK_.call(null,nval__557237))
{return cljs.core.deref.call(null,nval__557237);
} else
{{
var G__557242 = nval__557237;
var G__557243 = (n__557236 + 1);
val__557235 = G__557242;
n__557236 = G__557243;
continue;
}
}
} else
{return val__557235;
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
var cnt__557256 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__557257 = (arr[0]);
var n__557258 = 1;
while(true){
if((n__557258 < cnt__557256))
{var nval__557259 = f.call(null,val__557257,(arr[n__557258]));
if(cljs.core.reduced_QMARK_.call(null,nval__557259))
{return cljs.core.deref.call(null,nval__557259);
} else
{{
var G__557268 = nval__557259;
var G__557269 = (n__557258 + 1);
val__557257 = G__557268;
n__557258 = G__557269;
continue;
}
}
} else
{return val__557257;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__557260 = arr.length;
var val__557261 = val;
var n__557262 = 0;
while(true){
if((n__557262 < cnt__557260))
{var nval__557263 = f.call(null,val__557261,(arr[n__557262]));
if(cljs.core.reduced_QMARK_.call(null,nval__557263))
{return cljs.core.deref.call(null,nval__557263);
} else
{{
var G__557270 = nval__557263;
var G__557271 = (n__557262 + 1);
val__557261 = G__557270;
n__557262 = G__557271;
continue;
}
}
} else
{return val__557261;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__557264 = arr.length;
var val__557265 = val;
var n__557266 = idx;
while(true){
if((n__557266 < cnt__557264))
{var nval__557267 = f.call(null,val__557265,(arr[n__557266]));
if(cljs.core.reduced_QMARK_.call(null,nval__557267))
{return cljs.core.deref.call(null,nval__557267);
} else
{{
var G__557272 = nval__557267;
var G__557273 = (n__557266 + 1);
val__557265 = G__557272;
n__557266 = G__557273;
continue;
}
}
} else
{return val__557265;
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
var G__557277__557278 = x;
if(G__557277__557278)
{if((function (){var or__3824__auto____557279 = (G__557277__557278.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____557279)
{return or__3824__auto____557279;
} else
{return G__557277__557278.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__557277__557278.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__557277__557278);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__557277__557278);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__557283__557284 = x;
if(G__557283__557284)
{if((function (){var or__3824__auto____557285 = (G__557283__557284.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____557285)
{return or__3824__auto____557285;
} else
{return G__557283__557284.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__557283__557284.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__557283__557284);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__557283__557284);
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
var this__557286 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__557287 = this;
if(((this__557287.i + 1) < this__557287.a.length))
{return (new cljs.core.IndexedSeq(this__557287.a,(this__557287.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__557288 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__557289 = this;
var c__557290 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__557290 > 0))
{return (new cljs.core.RSeq(coll,(c__557290 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__557291 = this;
var this__557292 = this;
return cljs.core.pr_str.call(null,this__557292);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__557293 = this;
if(cljs.core.counted_QMARK_.call(null,this__557293.a))
{return cljs.core.ci_reduce.call(null,this__557293.a,f,(this__557293.a[this__557293.i]),(this__557293.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__557293.a[this__557293.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__557294 = this;
if(cljs.core.counted_QMARK_.call(null,this__557294.a))
{return cljs.core.ci_reduce.call(null,this__557294.a,f,start,this__557294.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__557295 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__557296 = this;
return (this__557296.a.length - this__557296.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__557297 = this;
return (this__557297.a[this__557297.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__557298 = this;
if(((this__557298.i + 1) < this__557298.a.length))
{return (new cljs.core.IndexedSeq(this__557298.a,(this__557298.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__557299 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__557300 = this;
var i__557301 = (n + this__557300.i);
if((i__557301 < this__557300.a.length))
{return (this__557300.a[i__557301]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__557302 = this;
var i__557303 = (n + this__557302.i);
if((i__557303 < this__557302.a.length))
{return (this__557302.a[i__557303]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__557304 = this;
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
var G__557305 = null;
var G__557305__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__557305__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__557305 = function(array,f,start){
switch(arguments.length){
case 2:
return G__557305__2.call(this,array,f);
case 3:
return G__557305__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__557305;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__557306 = null;
var G__557306__2 = (function (array,k){
return (array[k]);
});
var G__557306__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__557306 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__557306__2.call(this,array,k);
case 3:
return G__557306__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__557306;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__557307 = null;
var G__557307__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__557307__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__557307 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__557307__2.call(this,array,n);
case 3:
return G__557307__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__557307;
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
var this__557308 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__557309 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__557310 = this;
var this__557311 = this;
return cljs.core.pr_str.call(null,this__557311);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__557312 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__557313 = this;
return (this__557313.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__557314 = this;
return cljs.core._nth.call(null,this__557314.ci,this__557314.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__557315 = this;
if((this__557315.i > 0))
{return (new cljs.core.RSeq(this__557315.ci,(this__557315.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__557316 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__557317 = this;
return (new cljs.core.RSeq(this__557317.ci,this__557317.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__557318 = this;
return this__557318.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__557319 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__557319.meta);
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
var sn__557321 = cljs.core.next.call(null,s);
if(!((sn__557321 == null)))
{{
var G__557322 = sn__557321;
s = G__557322;
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
var G__557323__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__557324 = conj.call(null,coll,x);
var G__557325 = cljs.core.first.call(null,xs);
var G__557326 = cljs.core.next.call(null,xs);
coll = G__557324;
x = G__557325;
xs = G__557326;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__557323 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557323__delegate.call(this, coll, x, xs);
};
G__557323.cljs$lang$maxFixedArity = 2;
G__557323.cljs$lang$applyTo = (function (arglist__557327){
var coll = cljs.core.first(arglist__557327);
var x = cljs.core.first(cljs.core.next(arglist__557327));
var xs = cljs.core.rest(cljs.core.next(arglist__557327));
return G__557323__delegate(coll, x, xs);
});
G__557323.cljs$lang$arity$variadic = G__557323__delegate;
return G__557323;
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
var s__557330 = cljs.core.seq.call(null,coll);
var acc__557331 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__557330))
{return (acc__557331 + cljs.core._count.call(null,s__557330));
} else
{{
var G__557332 = cljs.core.next.call(null,s__557330);
var G__557333 = (acc__557331 + 1);
s__557330 = G__557332;
acc__557331 = G__557333;
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
var G__557334 = cljs.core.next.call(null,coll);
var G__557335 = (n - 1);
coll = G__557334;
n = G__557335;
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
var G__557336 = cljs.core.next.call(null,coll);
var G__557337 = (n - 1);
var G__557338 = not_found;
coll = G__557336;
n = G__557337;
not_found = G__557338;
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
{if((function (){var G__557345__557346 = coll;
if(G__557345__557346)
{if((function (){var or__3824__auto____557347 = (G__557345__557346.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____557347)
{return or__3824__auto____557347;
} else
{return G__557345__557346.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__557345__557346.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__557345__557346);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__557345__557346);
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
{if((function (){var G__557348__557349 = coll;
if(G__557348__557349)
{if((function (){var or__3824__auto____557350 = (G__557348__557349.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____557350)
{return or__3824__auto____557350;
} else
{return G__557348__557349.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__557348__557349.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__557348__557349);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__557348__557349);
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
var G__557353__delegate = function (coll,k,v,kvs){
while(true){
var ret__557352 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__557354 = ret__557352;
var G__557355 = cljs.core.first.call(null,kvs);
var G__557356 = cljs.core.second.call(null,kvs);
var G__557357 = cljs.core.nnext.call(null,kvs);
coll = G__557354;
k = G__557355;
v = G__557356;
kvs = G__557357;
continue;
}
} else
{return ret__557352;
}
break;
}
};
var G__557353 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__557353__delegate.call(this, coll, k, v, kvs);
};
G__557353.cljs$lang$maxFixedArity = 3;
G__557353.cljs$lang$applyTo = (function (arglist__557358){
var coll = cljs.core.first(arglist__557358);
var k = cljs.core.first(cljs.core.next(arglist__557358));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__557358)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__557358)));
return G__557353__delegate(coll, k, v, kvs);
});
G__557353.cljs$lang$arity$variadic = G__557353__delegate;
return G__557353;
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
var G__557361__delegate = function (coll,k,ks){
while(true){
var ret__557360 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__557362 = ret__557360;
var G__557363 = cljs.core.first.call(null,ks);
var G__557364 = cljs.core.next.call(null,ks);
coll = G__557362;
k = G__557363;
ks = G__557364;
continue;
}
} else
{return ret__557360;
}
break;
}
};
var G__557361 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557361__delegate.call(this, coll, k, ks);
};
G__557361.cljs$lang$maxFixedArity = 2;
G__557361.cljs$lang$applyTo = (function (arglist__557365){
var coll = cljs.core.first(arglist__557365);
var k = cljs.core.first(cljs.core.next(arglist__557365));
var ks = cljs.core.rest(cljs.core.next(arglist__557365));
return G__557361__delegate(coll, k, ks);
});
G__557361.cljs$lang$arity$variadic = G__557361__delegate;
return G__557361;
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
if((function (){var G__557369__557370 = o;
if(G__557369__557370)
{if((function (){var or__3824__auto____557371 = (G__557369__557370.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____557371)
{return or__3824__auto____557371;
} else
{return G__557369__557370.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__557369__557370.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__557369__557370);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__557369__557370);
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
var G__557374__delegate = function (coll,k,ks){
while(true){
var ret__557373 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__557375 = ret__557373;
var G__557376 = cljs.core.first.call(null,ks);
var G__557377 = cljs.core.next.call(null,ks);
coll = G__557375;
k = G__557376;
ks = G__557377;
continue;
}
} else
{return ret__557373;
}
break;
}
};
var G__557374 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557374__delegate.call(this, coll, k, ks);
};
G__557374.cljs$lang$maxFixedArity = 2;
G__557374.cljs$lang$applyTo = (function (arglist__557378){
var coll = cljs.core.first(arglist__557378);
var k = cljs.core.first(cljs.core.next(arglist__557378));
var ks = cljs.core.rest(cljs.core.next(arglist__557378));
return G__557374__delegate(coll, k, ks);
});
G__557374.cljs$lang$arity$variadic = G__557374__delegate;
return G__557374;
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
var h__557380 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__557380);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__557380;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__557382 = (cljs.core.string_hash_cache[k]);
if(!((h__557382 == null)))
{return h__557382;
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
if((function (){var and__3822__auto____557384 = goog.isString(o);
if(and__3822__auto____557384)
{return check_cache;
} else
{return and__3822__auto____557384;
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
{var G__557388__557389 = x;
if(G__557388__557389)
{if((function (){var or__3824__auto____557390 = (G__557388__557389.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____557390)
{return or__3824__auto____557390;
} else
{return G__557388__557389.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__557388__557389.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__557388__557389);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__557388__557389);
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
{var G__557394__557395 = x;
if(G__557394__557395)
{if((function (){var or__3824__auto____557396 = (G__557394__557395.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____557396)
{return or__3824__auto____557396;
} else
{return G__557394__557395.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__557394__557395.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__557394__557395);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__557394__557395);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__557400__557401 = x;
if(G__557400__557401)
{if((function (){var or__3824__auto____557402 = (G__557400__557401.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____557402)
{return or__3824__auto____557402;
} else
{return G__557400__557401.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__557400__557401.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__557400__557401);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__557400__557401);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__557406__557407 = x;
if(G__557406__557407)
{if((function (){var or__3824__auto____557408 = (G__557406__557407.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____557408)
{return or__3824__auto____557408;
} else
{return G__557406__557407.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__557406__557407.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__557406__557407);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__557406__557407);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__557412__557413 = x;
if(G__557412__557413)
{if((function (){var or__3824__auto____557414 = (G__557412__557413.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____557414)
{return or__3824__auto____557414;
} else
{return G__557412__557413.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__557412__557413.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__557412__557413);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__557412__557413);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__557418__557419 = x;
if(G__557418__557419)
{if((function (){var or__3824__auto____557420 = (G__557418__557419.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____557420)
{return or__3824__auto____557420;
} else
{return G__557418__557419.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__557418__557419.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__557418__557419);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__557418__557419);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__557424__557425 = x;
if(G__557424__557425)
{if((function (){var or__3824__auto____557426 = (G__557424__557425.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____557426)
{return or__3824__auto____557426;
} else
{return G__557424__557425.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__557424__557425.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__557424__557425);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__557424__557425);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__557430__557431 = x;
if(G__557430__557431)
{if((function (){var or__3824__auto____557432 = (G__557430__557431.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____557432)
{return or__3824__auto____557432;
} else
{return G__557430__557431.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__557430__557431.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__557430__557431);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__557430__557431);
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
var G__557433__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__557433 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__557433__delegate.call(this, keyvals);
};
G__557433.cljs$lang$maxFixedArity = 0;
G__557433.cljs$lang$applyTo = (function (arglist__557434){
var keyvals = cljs.core.seq(arglist__557434);;
return G__557433__delegate(keyvals);
});
G__557433.cljs$lang$arity$variadic = G__557433__delegate;
return G__557433;
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
var keys__557436 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__557436.push(key);
}));
return keys__557436;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__557440 = i;
var j__557441 = j;
var len__557442 = len;
while(true){
if((len__557442 === 0))
{return to;
} else
{(to[j__557441] = (from[i__557440]));
{
var G__557443 = (i__557440 + 1);
var G__557444 = (j__557441 + 1);
var G__557445 = (len__557442 - 1);
i__557440 = G__557443;
j__557441 = G__557444;
len__557442 = G__557445;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__557449 = (i + (len - 1));
var j__557450 = (j + (len - 1));
var len__557451 = len;
while(true){
if((len__557451 === 0))
{return to;
} else
{(to[j__557450] = (from[i__557449]));
{
var G__557452 = (i__557449 - 1);
var G__557453 = (j__557450 - 1);
var G__557454 = (len__557451 - 1);
i__557449 = G__557452;
j__557450 = G__557453;
len__557451 = G__557454;
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
{var G__557458__557459 = s;
if(G__557458__557459)
{if((function (){var or__3824__auto____557460 = (G__557458__557459.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____557460)
{return or__3824__auto____557460;
} else
{return G__557458__557459.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__557458__557459.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__557458__557459);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__557458__557459);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__557464__557465 = s;
if(G__557464__557465)
{if((function (){var or__3824__auto____557466 = (G__557464__557465.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____557466)
{return or__3824__auto____557466;
} else
{return G__557464__557465.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__557464__557465.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__557464__557465);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__557464__557465);
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
var and__3822__auto____557469 = goog.isString(x);
if(and__3822__auto____557469)
{return !((function (){var or__3824__auto____557470 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____557470)
{return or__3824__auto____557470;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____557469;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____557472 = goog.isString(x);
if(and__3822__auto____557472)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____557472;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____557474 = goog.isString(x);
if(and__3822__auto____557474)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____557474;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____557479 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____557479)
{return or__3824__auto____557479;
} else
{var G__557480__557481 = f;
if(G__557480__557481)
{if((function (){var or__3824__auto____557482 = (G__557480__557481.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____557482)
{return or__3824__auto____557482;
} else
{return G__557480__557481.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__557480__557481.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__557480__557481);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__557480__557481);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____557486 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____557486)
{var and__3822__auto____557487 = !(isNaN(n));
if(and__3822__auto____557487)
{var and__3822__auto____557488 = !((n === Infinity));
if(and__3822__auto____557488)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____557488;
}
} else
{return and__3822__auto____557487;
}
} else
{return and__3822__auto____557486;
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
if((function (){var and__3822__auto____557491 = !((coll == null));
if(and__3822__auto____557491)
{var and__3822__auto____557492 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____557492)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____557492;
}
} else
{return and__3822__auto____557491;
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
var G__557501__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__557497 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__557498 = more;
while(true){
var x__557499 = cljs.core.first.call(null,xs__557498);
var etc__557500 = cljs.core.next.call(null,xs__557498);
if(cljs.core.truth_(xs__557498))
{if(cljs.core.contains_QMARK_.call(null,s__557497,x__557499))
{return false;
} else
{{
var G__557502 = cljs.core.conj.call(null,s__557497,x__557499);
var G__557503 = etc__557500;
s__557497 = G__557502;
xs__557498 = G__557503;
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
var G__557501 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557501__delegate.call(this, x, y, more);
};
G__557501.cljs$lang$maxFixedArity = 2;
G__557501.cljs$lang$applyTo = (function (arglist__557504){
var x = cljs.core.first(arglist__557504);
var y = cljs.core.first(cljs.core.next(arglist__557504));
var more = cljs.core.rest(cljs.core.next(arglist__557504));
return G__557501__delegate(x, y, more);
});
G__557501.cljs$lang$arity$variadic = G__557501__delegate;
return G__557501;
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
{if((function (){var G__557508__557509 = x;
if(G__557508__557509)
{if((function (){var or__3824__auto____557510 = (G__557508__557509.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____557510)
{return or__3824__auto____557510;
} else
{return G__557508__557509.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__557508__557509.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__557508__557509);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__557508__557509);
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
var xl__557515 = cljs.core.count.call(null,xs);
var yl__557516 = cljs.core.count.call(null,ys);
if((xl__557515 < yl__557516))
{return -1;
} else
{if((xl__557515 > yl__557516))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__557515,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__557517 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____557518 = (d__557517 === 0);
if(and__3822__auto____557518)
{return ((n + 1) < len);
} else
{return and__3822__auto____557518;
}
})())
{{
var G__557519 = xs;
var G__557520 = ys;
var G__557521 = len;
var G__557522 = (n + 1);
xs = G__557519;
ys = G__557520;
len = G__557521;
n = G__557522;
continue;
}
} else
{return d__557517;
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
var r__557524 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__557524))
{return r__557524;
} else
{if(cljs.core.truth_(r__557524))
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
{var a__557526 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__557526,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__557526);
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
var temp__3971__auto____557532 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____557532)
{var s__557533 = temp__3971__auto____557532;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__557533),cljs.core.next.call(null,s__557533));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__557534 = val;
var coll__557535 = cljs.core.seq.call(null,coll);
while(true){
if(coll__557535)
{var nval__557536 = f.call(null,val__557534,cljs.core.first.call(null,coll__557535));
if(cljs.core.reduced_QMARK_.call(null,nval__557536))
{return cljs.core.deref.call(null,nval__557536);
} else
{{
var G__557537 = nval__557536;
var G__557538 = cljs.core.next.call(null,coll__557535);
val__557534 = G__557537;
coll__557535 = G__557538;
continue;
}
}
} else
{return val__557534;
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
var a__557540 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__557540);
return cljs.core.vec.call(null,a__557540);
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
if((function (){var G__557547__557548 = coll;
if(G__557547__557548)
{if((function (){var or__3824__auto____557549 = (G__557547__557548.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____557549)
{return or__3824__auto____557549;
} else
{return G__557547__557548.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__557547__557548.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__557547__557548);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__557547__557548);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__557550__557551 = coll;
if(G__557550__557551)
{if((function (){var or__3824__auto____557552 = (G__557550__557551.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____557552)
{return or__3824__auto____557552;
} else
{return G__557550__557551.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__557550__557551.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__557550__557551);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__557550__557551);
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
var G__557553__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__557553 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557553__delegate.call(this, x, y, more);
};
G__557553.cljs$lang$maxFixedArity = 2;
G__557553.cljs$lang$applyTo = (function (arglist__557554){
var x = cljs.core.first(arglist__557554);
var y = cljs.core.first(cljs.core.next(arglist__557554));
var more = cljs.core.rest(cljs.core.next(arglist__557554));
return G__557553__delegate(x, y, more);
});
G__557553.cljs$lang$arity$variadic = G__557553__delegate;
return G__557553;
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
var G__557555__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__557555 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557555__delegate.call(this, x, y, more);
};
G__557555.cljs$lang$maxFixedArity = 2;
G__557555.cljs$lang$applyTo = (function (arglist__557556){
var x = cljs.core.first(arglist__557556);
var y = cljs.core.first(cljs.core.next(arglist__557556));
var more = cljs.core.rest(cljs.core.next(arglist__557556));
return G__557555__delegate(x, y, more);
});
G__557555.cljs$lang$arity$variadic = G__557555__delegate;
return G__557555;
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
var G__557557__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__557557 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557557__delegate.call(this, x, y, more);
};
G__557557.cljs$lang$maxFixedArity = 2;
G__557557.cljs$lang$applyTo = (function (arglist__557558){
var x = cljs.core.first(arglist__557558);
var y = cljs.core.first(cljs.core.next(arglist__557558));
var more = cljs.core.rest(cljs.core.next(arglist__557558));
return G__557557__delegate(x, y, more);
});
G__557557.cljs$lang$arity$variadic = G__557557__delegate;
return G__557557;
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
var G__557559__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__557559 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557559__delegate.call(this, x, y, more);
};
G__557559.cljs$lang$maxFixedArity = 2;
G__557559.cljs$lang$applyTo = (function (arglist__557560){
var x = cljs.core.first(arglist__557560);
var y = cljs.core.first(cljs.core.next(arglist__557560));
var more = cljs.core.rest(cljs.core.next(arglist__557560));
return G__557559__delegate(x, y, more);
});
G__557559.cljs$lang$arity$variadic = G__557559__delegate;
return G__557559;
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
var G__557561__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__557562 = y;
var G__557563 = cljs.core.first.call(null,more);
var G__557564 = cljs.core.next.call(null,more);
x = G__557562;
y = G__557563;
more = G__557564;
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
var G__557561 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557561__delegate.call(this, x, y, more);
};
G__557561.cljs$lang$maxFixedArity = 2;
G__557561.cljs$lang$applyTo = (function (arglist__557565){
var x = cljs.core.first(arglist__557565);
var y = cljs.core.first(cljs.core.next(arglist__557565));
var more = cljs.core.rest(cljs.core.next(arglist__557565));
return G__557561__delegate(x, y, more);
});
G__557561.cljs$lang$arity$variadic = G__557561__delegate;
return G__557561;
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
var G__557566__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__557567 = y;
var G__557568 = cljs.core.first.call(null,more);
var G__557569 = cljs.core.next.call(null,more);
x = G__557567;
y = G__557568;
more = G__557569;
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
var G__557566 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557566__delegate.call(this, x, y, more);
};
G__557566.cljs$lang$maxFixedArity = 2;
G__557566.cljs$lang$applyTo = (function (arglist__557570){
var x = cljs.core.first(arglist__557570);
var y = cljs.core.first(cljs.core.next(arglist__557570));
var more = cljs.core.rest(cljs.core.next(arglist__557570));
return G__557566__delegate(x, y, more);
});
G__557566.cljs$lang$arity$variadic = G__557566__delegate;
return G__557566;
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
var G__557571__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__557572 = y;
var G__557573 = cljs.core.first.call(null,more);
var G__557574 = cljs.core.next.call(null,more);
x = G__557572;
y = G__557573;
more = G__557574;
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
var G__557571 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557571__delegate.call(this, x, y, more);
};
G__557571.cljs$lang$maxFixedArity = 2;
G__557571.cljs$lang$applyTo = (function (arglist__557575){
var x = cljs.core.first(arglist__557575);
var y = cljs.core.first(cljs.core.next(arglist__557575));
var more = cljs.core.rest(cljs.core.next(arglist__557575));
return G__557571__delegate(x, y, more);
});
G__557571.cljs$lang$arity$variadic = G__557571__delegate;
return G__557571;
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
var G__557576__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__557577 = y;
var G__557578 = cljs.core.first.call(null,more);
var G__557579 = cljs.core.next.call(null,more);
x = G__557577;
y = G__557578;
more = G__557579;
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
var G__557576 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557576__delegate.call(this, x, y, more);
};
G__557576.cljs$lang$maxFixedArity = 2;
G__557576.cljs$lang$applyTo = (function (arglist__557580){
var x = cljs.core.first(arglist__557580);
var y = cljs.core.first(cljs.core.next(arglist__557580));
var more = cljs.core.rest(cljs.core.next(arglist__557580));
return G__557576__delegate(x, y, more);
});
G__557576.cljs$lang$arity$variadic = G__557576__delegate;
return G__557576;
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
var G__557581__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__557581 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557581__delegate.call(this, x, y, more);
};
G__557581.cljs$lang$maxFixedArity = 2;
G__557581.cljs$lang$applyTo = (function (arglist__557582){
var x = cljs.core.first(arglist__557582);
var y = cljs.core.first(cljs.core.next(arglist__557582));
var more = cljs.core.rest(cljs.core.next(arglist__557582));
return G__557581__delegate(x, y, more);
});
G__557581.cljs$lang$arity$variadic = G__557581__delegate;
return G__557581;
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
var G__557583__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__557583 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557583__delegate.call(this, x, y, more);
};
G__557583.cljs$lang$maxFixedArity = 2;
G__557583.cljs$lang$applyTo = (function (arglist__557584){
var x = cljs.core.first(arglist__557584);
var y = cljs.core.first(cljs.core.next(arglist__557584));
var more = cljs.core.rest(cljs.core.next(arglist__557584));
return G__557583__delegate(x, y, more);
});
G__557583.cljs$lang$arity$variadic = G__557583__delegate;
return G__557583;
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
var rem__557586 = (n % d);
return cljs.core.fix.call(null,((n - rem__557586) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__557588 = cljs.core.quot.call(null,n,d);
return (n - (d * q__557588));
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
var v__557591 = (v - ((v >> 1) & 1431655765));
var v__557592 = ((v__557591 & 858993459) + ((v__557591 >> 2) & 858993459));
return ((((v__557592 + (v__557592 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__557593__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__557594 = y;
var G__557595 = cljs.core.first.call(null,more);
var G__557596 = cljs.core.next.call(null,more);
x = G__557594;
y = G__557595;
more = G__557596;
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
var G__557593 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557593__delegate.call(this, x, y, more);
};
G__557593.cljs$lang$maxFixedArity = 2;
G__557593.cljs$lang$applyTo = (function (arglist__557597){
var x = cljs.core.first(arglist__557597);
var y = cljs.core.first(cljs.core.next(arglist__557597));
var more = cljs.core.rest(cljs.core.next(arglist__557597));
return G__557593__delegate(x, y, more);
});
G__557593.cljs$lang$arity$variadic = G__557593__delegate;
return G__557593;
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
var n__557601 = n;
var xs__557602 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____557603 = xs__557602;
if(and__3822__auto____557603)
{return (n__557601 > 0);
} else
{return and__3822__auto____557603;
}
})()))
{{
var G__557604 = (n__557601 - 1);
var G__557605 = cljs.core.next.call(null,xs__557602);
n__557601 = G__557604;
xs__557602 = G__557605;
continue;
}
} else
{return xs__557602;
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
var G__557606__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__557607 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__557608 = cljs.core.next.call(null,more);
sb = G__557607;
more = G__557608;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__557606 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__557606__delegate.call(this, x, ys);
};
G__557606.cljs$lang$maxFixedArity = 1;
G__557606.cljs$lang$applyTo = (function (arglist__557609){
var x = cljs.core.first(arglist__557609);
var ys = cljs.core.rest(arglist__557609);
return G__557606__delegate(x, ys);
});
G__557606.cljs$lang$arity$variadic = G__557606__delegate;
return G__557606;
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
var G__557610__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__557611 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__557612 = cljs.core.next.call(null,more);
sb = G__557611;
more = G__557612;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__557610 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__557610__delegate.call(this, x, ys);
};
G__557610.cljs$lang$maxFixedArity = 1;
G__557610.cljs$lang$applyTo = (function (arglist__557613){
var x = cljs.core.first(arglist__557613);
var ys = cljs.core.rest(arglist__557613);
return G__557610__delegate(x, ys);
});
G__557610.cljs$lang$arity$variadic = G__557610__delegate;
return G__557610;
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
var args__557617 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____557616 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____557616)
{return or__3824__auto____557616;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__557617);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__557618){
var fmt = cljs.core.first(arglist__557618);
var args = cljs.core.rest(arglist__557618);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__557621 = cljs.core.seq.call(null,x);
var ys__557622 = cljs.core.seq.call(null,y);
while(true){
if((xs__557621 == null))
{return (ys__557622 == null);
} else
{if((ys__557622 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__557621),cljs.core.first.call(null,ys__557622)))
{{
var G__557623 = cljs.core.next.call(null,xs__557621);
var G__557624 = cljs.core.next.call(null,ys__557622);
xs__557621 = G__557623;
ys__557622 = G__557624;
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
return cljs.core.reduce.call(null,(function (p1__557625_SHARP_,p2__557626_SHARP_){
return cljs.core.hash_combine.call(null,p1__557625_SHARP_,cljs.core.hash.call(null,p2__557626_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__557630 = 0;
var s__557631 = cljs.core.seq.call(null,m);
while(true){
if(s__557631)
{var e__557632 = cljs.core.first.call(null,s__557631);
{
var G__557633 = ((h__557630 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__557632)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__557632)))) % 4503599627370496);
var G__557634 = cljs.core.next.call(null,s__557631);
h__557630 = G__557633;
s__557631 = G__557634;
continue;
}
} else
{return h__557630;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__557638 = 0;
var s__557639 = cljs.core.seq.call(null,s);
while(true){
if(s__557639)
{var e__557640 = cljs.core.first.call(null,s__557639);
{
var G__557641 = ((h__557638 + cljs.core.hash.call(null,e__557640)) % 4503599627370496);
var G__557642 = cljs.core.next.call(null,s__557639);
h__557638 = G__557641;
s__557639 = G__557642;
continue;
}
} else
{return h__557638;
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
var G__557650__557651 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__557650__557651)
{var vec__557652__557653 = cljs.core.first.call(null,G__557650__557651);
var key_name__557654 = cljs.core.nth.call(null,vec__557652__557653,0,null);
var f__557655 = cljs.core.nth.call(null,vec__557652__557653,1,null);
var str_name__557656 = cljs.core.name.call(null,key_name__557654);
(obj[str_name__557656] = f__557655);
{
var G__557657 = cljs.core.next.call(null,G__557650__557651);
G__557650__557651 = G__557657;
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
var this__557658 = this;
var h__2203__auto____557659 = this__557658.__hash;
if(!((h__2203__auto____557659 == null)))
{return h__2203__auto____557659;
} else
{var h__2203__auto____557660 = cljs.core.hash_coll.call(null,coll);
this__557658.__hash = h__2203__auto____557660;
return h__2203__auto____557660;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__557661 = this;
if((this__557661.count === 1))
{return null;
} else
{return this__557661.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__557662 = this;
return (new cljs.core.List(this__557662.meta,o,coll,(this__557662.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__557663 = this;
var this__557664 = this;
return cljs.core.pr_str.call(null,this__557664);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__557665 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__557666 = this;
return this__557666.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__557667 = this;
return this__557667.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__557668 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__557669 = this;
return this__557669.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__557670 = this;
if((this__557670.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__557670.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__557671 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__557672 = this;
return (new cljs.core.List(meta,this__557672.first,this__557672.rest,this__557672.count,this__557672.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__557673 = this;
return this__557673.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__557674 = this;
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
var this__557675 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__557676 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__557677 = this;
return (new cljs.core.List(this__557677.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__557678 = this;
var this__557679 = this;
return cljs.core.pr_str.call(null,this__557679);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__557680 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__557681 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__557682 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__557683 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__557684 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__557685 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__557686 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__557687 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__557688 = this;
return this__557688.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__557689 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__557693__557694 = coll;
if(G__557693__557694)
{if((function (){var or__3824__auto____557695 = (G__557693__557694.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____557695)
{return or__3824__auto____557695;
} else
{return G__557693__557694.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__557693__557694.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__557693__557694);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__557693__557694);
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
var G__557696__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__557696 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__557696__delegate.call(this, x, y, z, items);
};
G__557696.cljs$lang$maxFixedArity = 3;
G__557696.cljs$lang$applyTo = (function (arglist__557697){
var x = cljs.core.first(arglist__557697);
var y = cljs.core.first(cljs.core.next(arglist__557697));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__557697)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__557697)));
return G__557696__delegate(x, y, z, items);
});
G__557696.cljs$lang$arity$variadic = G__557696__delegate;
return G__557696;
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
var this__557698 = this;
var h__2203__auto____557699 = this__557698.__hash;
if(!((h__2203__auto____557699 == null)))
{return h__2203__auto____557699;
} else
{var h__2203__auto____557700 = cljs.core.hash_coll.call(null,coll);
this__557698.__hash = h__2203__auto____557700;
return h__2203__auto____557700;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__557701 = this;
if((this__557701.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__557701.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__557702 = this;
return (new cljs.core.Cons(null,o,coll,this__557702.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__557703 = this;
var this__557704 = this;
return cljs.core.pr_str.call(null,this__557704);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__557705 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__557706 = this;
return this__557706.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__557707 = this;
if((this__557707.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__557707.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__557708 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__557709 = this;
return (new cljs.core.Cons(meta,this__557709.first,this__557709.rest,this__557709.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__557710 = this;
return this__557710.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__557711 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__557711.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____557716 = (coll == null);
if(or__3824__auto____557716)
{return or__3824__auto____557716;
} else
{var G__557717__557718 = coll;
if(G__557717__557718)
{if((function (){var or__3824__auto____557719 = (G__557717__557718.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____557719)
{return or__3824__auto____557719;
} else
{return G__557717__557718.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__557717__557718.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__557717__557718);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__557717__557718);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__557723__557724 = x;
if(G__557723__557724)
{if((function (){var or__3824__auto____557725 = (G__557723__557724.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____557725)
{return or__3824__auto____557725;
} else
{return G__557723__557724.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__557723__557724.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__557723__557724);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__557723__557724);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__557726 = null;
var G__557726__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__557726__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__557726 = function(string,f,start){
switch(arguments.length){
case 2:
return G__557726__2.call(this,string,f);
case 3:
return G__557726__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__557726;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__557727 = null;
var G__557727__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__557727__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__557727 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__557727__2.call(this,string,k);
case 3:
return G__557727__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__557727;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__557728 = null;
var G__557728__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__557728__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__557728 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__557728__2.call(this,string,n);
case 3:
return G__557728__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__557728;
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
var G__557740 = null;
var G__557740__2 = (function (this_sym557731,coll){
var this__557733 = this;
var this_sym557731__557734 = this;
var ___557735 = this_sym557731__557734;
if((coll == null))
{return null;
} else
{var strobj__557736 = coll.strobj;
if((strobj__557736 == null))
{return cljs.core._lookup.call(null,coll,this__557733.k,null);
} else
{return (strobj__557736[this__557733.k]);
}
}
});
var G__557740__3 = (function (this_sym557732,coll,not_found){
var this__557733 = this;
var this_sym557732__557737 = this;
var ___557738 = this_sym557732__557737;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__557733.k,not_found);
}
});
G__557740 = function(this_sym557732,coll,not_found){
switch(arguments.length){
case 2:
return G__557740__2.call(this,this_sym557732,coll);
case 3:
return G__557740__3.call(this,this_sym557732,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__557740;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym557729,args557730){
var this__557739 = this;
return this_sym557729.call.apply(this_sym557729,[this_sym557729].concat(args557730.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__557749 = null;
var G__557749__2 = (function (this_sym557743,coll){
var this_sym557743__557745 = this;
var this__557746 = this_sym557743__557745;
return cljs.core._lookup.call(null,coll,this__557746.toString(),null);
});
var G__557749__3 = (function (this_sym557744,coll,not_found){
var this_sym557744__557747 = this;
var this__557748 = this_sym557744__557747;
return cljs.core._lookup.call(null,coll,this__557748.toString(),not_found);
});
G__557749 = function(this_sym557744,coll,not_found){
switch(arguments.length){
case 2:
return G__557749__2.call(this,this_sym557744,coll);
case 3:
return G__557749__3.call(this,this_sym557744,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__557749;
})()
;
String.prototype.apply = (function (this_sym557741,args557742){
return this_sym557741.call.apply(this_sym557741,[this_sym557741].concat(args557742.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__557751 = lazy_seq.x;
if(lazy_seq.realized)
{return x__557751;
} else
{lazy_seq.x = x__557751.call(null);
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
var this__557752 = this;
var h__2203__auto____557753 = this__557752.__hash;
if(!((h__2203__auto____557753 == null)))
{return h__2203__auto____557753;
} else
{var h__2203__auto____557754 = cljs.core.hash_coll.call(null,coll);
this__557752.__hash = h__2203__auto____557754;
return h__2203__auto____557754;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__557755 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__557756 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__557757 = this;
var this__557758 = this;
return cljs.core.pr_str.call(null,this__557758);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__557759 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__557760 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__557761 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__557762 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__557763 = this;
return (new cljs.core.LazySeq(meta,this__557763.realized,this__557763.x,this__557763.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__557764 = this;
return this__557764.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__557765 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__557765.meta);
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
var this__557766 = this;
return this__557766.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__557767 = this;
var ___557768 = this;
(this__557767.buf[this__557767.end] = o);
return this__557767.end = (this__557767.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__557769 = this;
var ___557770 = this;
var ret__557771 = (new cljs.core.ArrayChunk(this__557769.buf,0,this__557769.end));
this__557769.buf = null;
return ret__557771;
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
var this__557772 = this;
return cljs.core.array_reduce.call(null,this__557772.arr,f,(this__557772.arr[this__557772.off]),(this__557772.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__557773 = this;
return cljs.core.array_reduce.call(null,this__557773.arr,f,start,this__557773.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__557774 = this;
if((this__557774.off === this__557774.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__557774.arr,(this__557774.off + 1),this__557774.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__557775 = this;
return (this__557775.arr[(this__557775.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__557776 = this;
if((function (){var and__3822__auto____557777 = (i >= 0);
if(and__3822__auto____557777)
{return (i < (this__557776.end - this__557776.off));
} else
{return and__3822__auto____557777;
}
})())
{return (this__557776.arr[(this__557776.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__557778 = this;
return (this__557778.end - this__557778.off);
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
var this__557779 = this;
var h__2203__auto____557780 = this__557779.__hash;
if(!((h__2203__auto____557780 == null)))
{return h__2203__auto____557780;
} else
{var h__2203__auto____557781 = cljs.core.hash_coll.call(null,coll);
this__557779.__hash = h__2203__auto____557781;
return h__2203__auto____557781;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__557782 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__557783 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__557784 = this;
return cljs.core._nth.call(null,this__557784.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__557785 = this;
if((cljs.core._count.call(null,this__557785.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__557785.chunk),this__557785.more,this__557785.meta,null));
} else
{if((this__557785.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__557785.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__557786 = this;
if((this__557786.more == null))
{return null;
} else
{return this__557786.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__557787 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__557788 = this;
return (new cljs.core.ChunkedCons(this__557788.chunk,this__557788.more,m,this__557788.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__557789 = this;
return this__557789.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__557790 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__557790.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__557791 = this;
return this__557791.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__557792 = this;
if((this__557792.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__557792.more;
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
if((function (){var G__557796__557797 = s;
if(G__557796__557797)
{if((function (){var or__3824__auto____557798 = (G__557796__557797.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____557798)
{return or__3824__auto____557798;
} else
{return G__557796__557797.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__557796__557797.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__557796__557797);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__557796__557797);
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
var ary__557801 = [];
var s__557802 = s;
while(true){
if(cljs.core.seq.call(null,s__557802))
{ary__557801.push(cljs.core.first.call(null,s__557802));
{
var G__557803 = cljs.core.next.call(null,s__557802);
s__557802 = G__557803;
continue;
}
} else
{return ary__557801;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__557807 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__557808 = 0;
var xs__557809 = cljs.core.seq.call(null,coll);
while(true){
if(xs__557809)
{(ret__557807[i__557808] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__557809)));
{
var G__557810 = (i__557808 + 1);
var G__557811 = cljs.core.next.call(null,xs__557809);
i__557808 = G__557810;
xs__557809 = G__557811;
continue;
}
} else
{}
break;
}
return ret__557807;
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
var a__557819 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__557820 = cljs.core.seq.call(null,init_val_or_seq);
var i__557821 = 0;
var s__557822 = s__557820;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____557823 = s__557822;
if(and__3822__auto____557823)
{return (i__557821 < size);
} else
{return and__3822__auto____557823;
}
})()))
{(a__557819[i__557821] = cljs.core.first.call(null,s__557822));
{
var G__557826 = (i__557821 + 1);
var G__557827 = cljs.core.next.call(null,s__557822);
i__557821 = G__557826;
s__557822 = G__557827;
continue;
}
} else
{return a__557819;
}
break;
}
} else
{var n__2549__auto____557824 = size;
var i__557825 = 0;
while(true){
if((i__557825 < n__2549__auto____557824))
{(a__557819[i__557825] = init_val_or_seq);
{
var G__557828 = (i__557825 + 1);
i__557825 = G__557828;
continue;
}
} else
{}
break;
}
return a__557819;
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
var a__557836 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__557837 = cljs.core.seq.call(null,init_val_or_seq);
var i__557838 = 0;
var s__557839 = s__557837;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____557840 = s__557839;
if(and__3822__auto____557840)
{return (i__557838 < size);
} else
{return and__3822__auto____557840;
}
})()))
{(a__557836[i__557838] = cljs.core.first.call(null,s__557839));
{
var G__557843 = (i__557838 + 1);
var G__557844 = cljs.core.next.call(null,s__557839);
i__557838 = G__557843;
s__557839 = G__557844;
continue;
}
} else
{return a__557836;
}
break;
}
} else
{var n__2549__auto____557841 = size;
var i__557842 = 0;
while(true){
if((i__557842 < n__2549__auto____557841))
{(a__557836[i__557842] = init_val_or_seq);
{
var G__557845 = (i__557842 + 1);
i__557842 = G__557845;
continue;
}
} else
{}
break;
}
return a__557836;
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
var a__557853 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__557854 = cljs.core.seq.call(null,init_val_or_seq);
var i__557855 = 0;
var s__557856 = s__557854;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____557857 = s__557856;
if(and__3822__auto____557857)
{return (i__557855 < size);
} else
{return and__3822__auto____557857;
}
})()))
{(a__557853[i__557855] = cljs.core.first.call(null,s__557856));
{
var G__557860 = (i__557855 + 1);
var G__557861 = cljs.core.next.call(null,s__557856);
i__557855 = G__557860;
s__557856 = G__557861;
continue;
}
} else
{return a__557853;
}
break;
}
} else
{var n__2549__auto____557858 = size;
var i__557859 = 0;
while(true){
if((i__557859 < n__2549__auto____557858))
{(a__557853[i__557859] = init_val_or_seq);
{
var G__557862 = (i__557859 + 1);
i__557859 = G__557862;
continue;
}
} else
{}
break;
}
return a__557853;
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
{var s__557867 = s;
var i__557868 = n;
var sum__557869 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____557870 = (i__557868 > 0);
if(and__3822__auto____557870)
{return cljs.core.seq.call(null,s__557867);
} else
{return and__3822__auto____557870;
}
})()))
{{
var G__557871 = cljs.core.next.call(null,s__557867);
var G__557872 = (i__557868 - 1);
var G__557873 = (sum__557869 + 1);
s__557867 = G__557871;
i__557868 = G__557872;
sum__557869 = G__557873;
continue;
}
} else
{return sum__557869;
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
var s__557878 = cljs.core.seq.call(null,x);
if(s__557878)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__557878))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__557878),concat.call(null,cljs.core.chunk_rest.call(null,s__557878),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__557878),concat.call(null,cljs.core.rest.call(null,s__557878),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__557882__delegate = function (x,y,zs){
var cat__557881 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__557880 = cljs.core.seq.call(null,xys);
if(xys__557880)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__557880))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__557880),cat.call(null,cljs.core.chunk_rest.call(null,xys__557880),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__557880),cat.call(null,cljs.core.rest.call(null,xys__557880),zs));
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
return cat__557881.call(null,concat.call(null,x,y),zs);
};
var G__557882 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557882__delegate.call(this, x, y, zs);
};
G__557882.cljs$lang$maxFixedArity = 2;
G__557882.cljs$lang$applyTo = (function (arglist__557883){
var x = cljs.core.first(arglist__557883);
var y = cljs.core.first(cljs.core.next(arglist__557883));
var zs = cljs.core.rest(cljs.core.next(arglist__557883));
return G__557882__delegate(x, y, zs);
});
G__557882.cljs$lang$arity$variadic = G__557882__delegate;
return G__557882;
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
var G__557884__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__557884 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__557884__delegate.call(this, a, b, c, d, more);
};
G__557884.cljs$lang$maxFixedArity = 4;
G__557884.cljs$lang$applyTo = (function (arglist__557885){
var a = cljs.core.first(arglist__557885);
var b = cljs.core.first(cljs.core.next(arglist__557885));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__557885)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__557885))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__557885))));
return G__557884__delegate(a, b, c, d, more);
});
G__557884.cljs$lang$arity$variadic = G__557884__delegate;
return G__557884;
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
var args__557927 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__557928 = cljs.core._first.call(null,args__557927);
var args__557929 = cljs.core._rest.call(null,args__557927);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__557928);
} else
{return f.call(null,a__557928);
}
} else
{var b__557930 = cljs.core._first.call(null,args__557929);
var args__557931 = cljs.core._rest.call(null,args__557929);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__557928,b__557930);
} else
{return f.call(null,a__557928,b__557930);
}
} else
{var c__557932 = cljs.core._first.call(null,args__557931);
var args__557933 = cljs.core._rest.call(null,args__557931);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__557928,b__557930,c__557932);
} else
{return f.call(null,a__557928,b__557930,c__557932);
}
} else
{var d__557934 = cljs.core._first.call(null,args__557933);
var args__557935 = cljs.core._rest.call(null,args__557933);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__557928,b__557930,c__557932,d__557934);
} else
{return f.call(null,a__557928,b__557930,c__557932,d__557934);
}
} else
{var e__557936 = cljs.core._first.call(null,args__557935);
var args__557937 = cljs.core._rest.call(null,args__557935);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__557928,b__557930,c__557932,d__557934,e__557936);
} else
{return f.call(null,a__557928,b__557930,c__557932,d__557934,e__557936);
}
} else
{var f__557938 = cljs.core._first.call(null,args__557937);
var args__557939 = cljs.core._rest.call(null,args__557937);
if((argc === 6))
{if(f__557938.cljs$lang$arity$6)
{return f__557938.cljs$lang$arity$6(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938);
}
} else
{var g__557940 = cljs.core._first.call(null,args__557939);
var args__557941 = cljs.core._rest.call(null,args__557939);
if((argc === 7))
{if(f__557938.cljs$lang$arity$7)
{return f__557938.cljs$lang$arity$7(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940);
}
} else
{var h__557942 = cljs.core._first.call(null,args__557941);
var args__557943 = cljs.core._rest.call(null,args__557941);
if((argc === 8))
{if(f__557938.cljs$lang$arity$8)
{return f__557938.cljs$lang$arity$8(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942);
}
} else
{var i__557944 = cljs.core._first.call(null,args__557943);
var args__557945 = cljs.core._rest.call(null,args__557943);
if((argc === 9))
{if(f__557938.cljs$lang$arity$9)
{return f__557938.cljs$lang$arity$9(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944);
}
} else
{var j__557946 = cljs.core._first.call(null,args__557945);
var args__557947 = cljs.core._rest.call(null,args__557945);
if((argc === 10))
{if(f__557938.cljs$lang$arity$10)
{return f__557938.cljs$lang$arity$10(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946);
}
} else
{var k__557948 = cljs.core._first.call(null,args__557947);
var args__557949 = cljs.core._rest.call(null,args__557947);
if((argc === 11))
{if(f__557938.cljs$lang$arity$11)
{return f__557938.cljs$lang$arity$11(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948);
}
} else
{var l__557950 = cljs.core._first.call(null,args__557949);
var args__557951 = cljs.core._rest.call(null,args__557949);
if((argc === 12))
{if(f__557938.cljs$lang$arity$12)
{return f__557938.cljs$lang$arity$12(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950);
}
} else
{var m__557952 = cljs.core._first.call(null,args__557951);
var args__557953 = cljs.core._rest.call(null,args__557951);
if((argc === 13))
{if(f__557938.cljs$lang$arity$13)
{return f__557938.cljs$lang$arity$13(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952);
}
} else
{var n__557954 = cljs.core._first.call(null,args__557953);
var args__557955 = cljs.core._rest.call(null,args__557953);
if((argc === 14))
{if(f__557938.cljs$lang$arity$14)
{return f__557938.cljs$lang$arity$14(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954);
}
} else
{var o__557956 = cljs.core._first.call(null,args__557955);
var args__557957 = cljs.core._rest.call(null,args__557955);
if((argc === 15))
{if(f__557938.cljs$lang$arity$15)
{return f__557938.cljs$lang$arity$15(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954,o__557956);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954,o__557956);
}
} else
{var p__557958 = cljs.core._first.call(null,args__557957);
var args__557959 = cljs.core._rest.call(null,args__557957);
if((argc === 16))
{if(f__557938.cljs$lang$arity$16)
{return f__557938.cljs$lang$arity$16(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954,o__557956,p__557958);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954,o__557956,p__557958);
}
} else
{var q__557960 = cljs.core._first.call(null,args__557959);
var args__557961 = cljs.core._rest.call(null,args__557959);
if((argc === 17))
{if(f__557938.cljs$lang$arity$17)
{return f__557938.cljs$lang$arity$17(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954,o__557956,p__557958,q__557960);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954,o__557956,p__557958,q__557960);
}
} else
{var r__557962 = cljs.core._first.call(null,args__557961);
var args__557963 = cljs.core._rest.call(null,args__557961);
if((argc === 18))
{if(f__557938.cljs$lang$arity$18)
{return f__557938.cljs$lang$arity$18(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954,o__557956,p__557958,q__557960,r__557962);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954,o__557956,p__557958,q__557960,r__557962);
}
} else
{var s__557964 = cljs.core._first.call(null,args__557963);
var args__557965 = cljs.core._rest.call(null,args__557963);
if((argc === 19))
{if(f__557938.cljs$lang$arity$19)
{return f__557938.cljs$lang$arity$19(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954,o__557956,p__557958,q__557960,r__557962,s__557964);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954,o__557956,p__557958,q__557960,r__557962,s__557964);
}
} else
{var t__557966 = cljs.core._first.call(null,args__557965);
var args__557967 = cljs.core._rest.call(null,args__557965);
if((argc === 20))
{if(f__557938.cljs$lang$arity$20)
{return f__557938.cljs$lang$arity$20(a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954,o__557956,p__557958,q__557960,r__557962,s__557964,t__557966);
} else
{return f__557938.call(null,a__557928,b__557930,c__557932,d__557934,e__557936,f__557938,g__557940,h__557942,i__557944,j__557946,k__557948,l__557950,m__557952,n__557954,o__557956,p__557958,q__557960,r__557962,s__557964,t__557966);
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
var fixed_arity__557982 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__557983 = cljs.core.bounded_count.call(null,args,(fixed_arity__557982 + 1));
if((bc__557983 <= fixed_arity__557982))
{return cljs.core.apply_to.call(null,f,bc__557983,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__557984 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__557985 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__557986 = cljs.core.bounded_count.call(null,arglist__557984,(fixed_arity__557985 + 1));
if((bc__557986 <= fixed_arity__557985))
{return cljs.core.apply_to.call(null,f,bc__557986,arglist__557984);
} else
{return f.cljs$lang$applyTo(arglist__557984);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__557984));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__557987 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__557988 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__557989 = cljs.core.bounded_count.call(null,arglist__557987,(fixed_arity__557988 + 1));
if((bc__557989 <= fixed_arity__557988))
{return cljs.core.apply_to.call(null,f,bc__557989,arglist__557987);
} else
{return f.cljs$lang$applyTo(arglist__557987);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__557987));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__557990 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__557991 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__557992 = cljs.core.bounded_count.call(null,arglist__557990,(fixed_arity__557991 + 1));
if((bc__557992 <= fixed_arity__557991))
{return cljs.core.apply_to.call(null,f,bc__557992,arglist__557990);
} else
{return f.cljs$lang$applyTo(arglist__557990);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__557990));
}
});
var apply__6 = (function() { 
var G__557996__delegate = function (f,a,b,c,d,args){
var arglist__557993 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__557994 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__557995 = cljs.core.bounded_count.call(null,arglist__557993,(fixed_arity__557994 + 1));
if((bc__557995 <= fixed_arity__557994))
{return cljs.core.apply_to.call(null,f,bc__557995,arglist__557993);
} else
{return f.cljs$lang$applyTo(arglist__557993);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__557993));
}
};
var G__557996 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__557996__delegate.call(this, f, a, b, c, d, args);
};
G__557996.cljs$lang$maxFixedArity = 5;
G__557996.cljs$lang$applyTo = (function (arglist__557997){
var f = cljs.core.first(arglist__557997);
var a = cljs.core.first(cljs.core.next(arglist__557997));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__557997)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__557997))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__557997)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__557997)))));
return G__557996__delegate(f, a, b, c, d, args);
});
G__557996.cljs$lang$arity$variadic = G__557996__delegate;
return G__557996;
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
vary_meta.cljs$lang$applyTo = (function (arglist__557998){
var obj = cljs.core.first(arglist__557998);
var f = cljs.core.first(cljs.core.next(arglist__557998));
var args = cljs.core.rest(cljs.core.next(arglist__557998));
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
var G__557999__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__557999 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__557999__delegate.call(this, x, y, more);
};
G__557999.cljs$lang$maxFixedArity = 2;
G__557999.cljs$lang$applyTo = (function (arglist__558000){
var x = cljs.core.first(arglist__558000);
var y = cljs.core.first(cljs.core.next(arglist__558000));
var more = cljs.core.rest(cljs.core.next(arglist__558000));
return G__557999__delegate(x, y, more);
});
G__557999.cljs$lang$arity$variadic = G__557999__delegate;
return G__557999;
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
var G__558001 = pred;
var G__558002 = cljs.core.next.call(null,coll);
pred = G__558001;
coll = G__558002;
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
{var or__3824__auto____558004 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____558004))
{return or__3824__auto____558004;
} else
{{
var G__558005 = pred;
var G__558006 = cljs.core.next.call(null,coll);
pred = G__558005;
coll = G__558006;
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
var G__558007 = null;
var G__558007__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__558007__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__558007__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__558007__3 = (function() { 
var G__558008__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__558008 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__558008__delegate.call(this, x, y, zs);
};
G__558008.cljs$lang$maxFixedArity = 2;
G__558008.cljs$lang$applyTo = (function (arglist__558009){
var x = cljs.core.first(arglist__558009);
var y = cljs.core.first(cljs.core.next(arglist__558009));
var zs = cljs.core.rest(cljs.core.next(arglist__558009));
return G__558008__delegate(x, y, zs);
});
G__558008.cljs$lang$arity$variadic = G__558008__delegate;
return G__558008;
})()
;
G__558007 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__558007__0.call(this);
case 1:
return G__558007__1.call(this,x);
case 2:
return G__558007__2.call(this,x,y);
default:
return G__558007__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__558007.cljs$lang$maxFixedArity = 2;
G__558007.cljs$lang$applyTo = G__558007__3.cljs$lang$applyTo;
return G__558007;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__558010__delegate = function (args){
return x;
};
var G__558010 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__558010__delegate.call(this, args);
};
G__558010.cljs$lang$maxFixedArity = 0;
G__558010.cljs$lang$applyTo = (function (arglist__558011){
var args = cljs.core.seq(arglist__558011);;
return G__558010__delegate(args);
});
G__558010.cljs$lang$arity$variadic = G__558010__delegate;
return G__558010;
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
var G__558018 = null;
var G__558018__0 = (function (){
return f.call(null,g.call(null));
});
var G__558018__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__558018__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__558018__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__558018__4 = (function() { 
var G__558019__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__558019 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558019__delegate.call(this, x, y, z, args);
};
G__558019.cljs$lang$maxFixedArity = 3;
G__558019.cljs$lang$applyTo = (function (arglist__558020){
var x = cljs.core.first(arglist__558020);
var y = cljs.core.first(cljs.core.next(arglist__558020));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558020)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558020)));
return G__558019__delegate(x, y, z, args);
});
G__558019.cljs$lang$arity$variadic = G__558019__delegate;
return G__558019;
})()
;
G__558018 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__558018__0.call(this);
case 1:
return G__558018__1.call(this,x);
case 2:
return G__558018__2.call(this,x,y);
case 3:
return G__558018__3.call(this,x,y,z);
default:
return G__558018__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__558018.cljs$lang$maxFixedArity = 3;
G__558018.cljs$lang$applyTo = G__558018__4.cljs$lang$applyTo;
return G__558018;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__558021 = null;
var G__558021__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__558021__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__558021__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__558021__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__558021__4 = (function() { 
var G__558022__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__558022 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558022__delegate.call(this, x, y, z, args);
};
G__558022.cljs$lang$maxFixedArity = 3;
G__558022.cljs$lang$applyTo = (function (arglist__558023){
var x = cljs.core.first(arglist__558023);
var y = cljs.core.first(cljs.core.next(arglist__558023));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558023)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558023)));
return G__558022__delegate(x, y, z, args);
});
G__558022.cljs$lang$arity$variadic = G__558022__delegate;
return G__558022;
})()
;
G__558021 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__558021__0.call(this);
case 1:
return G__558021__1.call(this,x);
case 2:
return G__558021__2.call(this,x,y);
case 3:
return G__558021__3.call(this,x,y,z);
default:
return G__558021__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__558021.cljs$lang$maxFixedArity = 3;
G__558021.cljs$lang$applyTo = G__558021__4.cljs$lang$applyTo;
return G__558021;
})()
});
var comp__4 = (function() { 
var G__558024__delegate = function (f1,f2,f3,fs){
var fs__558015 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__558025__delegate = function (args){
var ret__558016 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__558015),args);
var fs__558017 = cljs.core.next.call(null,fs__558015);
while(true){
if(fs__558017)
{{
var G__558026 = cljs.core.first.call(null,fs__558017).call(null,ret__558016);
var G__558027 = cljs.core.next.call(null,fs__558017);
ret__558016 = G__558026;
fs__558017 = G__558027;
continue;
}
} else
{return ret__558016;
}
break;
}
};
var G__558025 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__558025__delegate.call(this, args);
};
G__558025.cljs$lang$maxFixedArity = 0;
G__558025.cljs$lang$applyTo = (function (arglist__558028){
var args = cljs.core.seq(arglist__558028);;
return G__558025__delegate(args);
});
G__558025.cljs$lang$arity$variadic = G__558025__delegate;
return G__558025;
})()
;
};
var G__558024 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558024__delegate.call(this, f1, f2, f3, fs);
};
G__558024.cljs$lang$maxFixedArity = 3;
G__558024.cljs$lang$applyTo = (function (arglist__558029){
var f1 = cljs.core.first(arglist__558029);
var f2 = cljs.core.first(cljs.core.next(arglist__558029));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558029)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558029)));
return G__558024__delegate(f1, f2, f3, fs);
});
G__558024.cljs$lang$arity$variadic = G__558024__delegate;
return G__558024;
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
var G__558030__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__558030 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__558030__delegate.call(this, args);
};
G__558030.cljs$lang$maxFixedArity = 0;
G__558030.cljs$lang$applyTo = (function (arglist__558031){
var args = cljs.core.seq(arglist__558031);;
return G__558030__delegate(args);
});
G__558030.cljs$lang$arity$variadic = G__558030__delegate;
return G__558030;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__558032__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__558032 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__558032__delegate.call(this, args);
};
G__558032.cljs$lang$maxFixedArity = 0;
G__558032.cljs$lang$applyTo = (function (arglist__558033){
var args = cljs.core.seq(arglist__558033);;
return G__558032__delegate(args);
});
G__558032.cljs$lang$arity$variadic = G__558032__delegate;
return G__558032;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__558034__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__558034 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__558034__delegate.call(this, args);
};
G__558034.cljs$lang$maxFixedArity = 0;
G__558034.cljs$lang$applyTo = (function (arglist__558035){
var args = cljs.core.seq(arglist__558035);;
return G__558034__delegate(args);
});
G__558034.cljs$lang$arity$variadic = G__558034__delegate;
return G__558034;
})()
;
});
var partial__5 = (function() { 
var G__558036__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__558037__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__558037 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__558037__delegate.call(this, args);
};
G__558037.cljs$lang$maxFixedArity = 0;
G__558037.cljs$lang$applyTo = (function (arglist__558038){
var args = cljs.core.seq(arglist__558038);;
return G__558037__delegate(args);
});
G__558037.cljs$lang$arity$variadic = G__558037__delegate;
return G__558037;
})()
;
};
var G__558036 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__558036__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__558036.cljs$lang$maxFixedArity = 4;
G__558036.cljs$lang$applyTo = (function (arglist__558039){
var f = cljs.core.first(arglist__558039);
var arg1 = cljs.core.first(cljs.core.next(arglist__558039));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558039)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__558039))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__558039))));
return G__558036__delegate(f, arg1, arg2, arg3, more);
});
G__558036.cljs$lang$arity$variadic = G__558036__delegate;
return G__558036;
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
var G__558040 = null;
var G__558040__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__558040__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__558040__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__558040__4 = (function() { 
var G__558041__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__558041 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558041__delegate.call(this, a, b, c, ds);
};
G__558041.cljs$lang$maxFixedArity = 3;
G__558041.cljs$lang$applyTo = (function (arglist__558042){
var a = cljs.core.first(arglist__558042);
var b = cljs.core.first(cljs.core.next(arglist__558042));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558042)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558042)));
return G__558041__delegate(a, b, c, ds);
});
G__558041.cljs$lang$arity$variadic = G__558041__delegate;
return G__558041;
})()
;
G__558040 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__558040__1.call(this,a);
case 2:
return G__558040__2.call(this,a,b);
case 3:
return G__558040__3.call(this,a,b,c);
default:
return G__558040__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__558040.cljs$lang$maxFixedArity = 3;
G__558040.cljs$lang$applyTo = G__558040__4.cljs$lang$applyTo;
return G__558040;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__558043 = null;
var G__558043__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__558043__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__558043__4 = (function() { 
var G__558044__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__558044 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558044__delegate.call(this, a, b, c, ds);
};
G__558044.cljs$lang$maxFixedArity = 3;
G__558044.cljs$lang$applyTo = (function (arglist__558045){
var a = cljs.core.first(arglist__558045);
var b = cljs.core.first(cljs.core.next(arglist__558045));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558045)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558045)));
return G__558044__delegate(a, b, c, ds);
});
G__558044.cljs$lang$arity$variadic = G__558044__delegate;
return G__558044;
})()
;
G__558043 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__558043__2.call(this,a,b);
case 3:
return G__558043__3.call(this,a,b,c);
default:
return G__558043__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__558043.cljs$lang$maxFixedArity = 3;
G__558043.cljs$lang$applyTo = G__558043__4.cljs$lang$applyTo;
return G__558043;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__558046 = null;
var G__558046__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__558046__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__558046__4 = (function() { 
var G__558047__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__558047 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558047__delegate.call(this, a, b, c, ds);
};
G__558047.cljs$lang$maxFixedArity = 3;
G__558047.cljs$lang$applyTo = (function (arglist__558048){
var a = cljs.core.first(arglist__558048);
var b = cljs.core.first(cljs.core.next(arglist__558048));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558048)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558048)));
return G__558047__delegate(a, b, c, ds);
});
G__558047.cljs$lang$arity$variadic = G__558047__delegate;
return G__558047;
})()
;
G__558046 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__558046__2.call(this,a,b);
case 3:
return G__558046__3.call(this,a,b,c);
default:
return G__558046__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__558046.cljs$lang$maxFixedArity = 3;
G__558046.cljs$lang$applyTo = G__558046__4.cljs$lang$applyTo;
return G__558046;
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
var mapi__558064 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____558072 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____558072)
{var s__558073 = temp__3974__auto____558072;
if(cljs.core.chunked_seq_QMARK_.call(null,s__558073))
{var c__558074 = cljs.core.chunk_first.call(null,s__558073);
var size__558075 = cljs.core.count.call(null,c__558074);
var b__558076 = cljs.core.chunk_buffer.call(null,size__558075);
var n__2549__auto____558077 = size__558075;
var i__558078 = 0;
while(true){
if((i__558078 < n__2549__auto____558077))
{cljs.core.chunk_append.call(null,b__558076,f.call(null,(idx + i__558078),cljs.core._nth.call(null,c__558074,i__558078)));
{
var G__558079 = (i__558078 + 1);
i__558078 = G__558079;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__558076),mapi.call(null,(idx + size__558075),cljs.core.chunk_rest.call(null,s__558073)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__558073)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__558073)));
}
} else
{return null;
}
}),null));
});
return mapi__558064.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____558089 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____558089)
{var s__558090 = temp__3974__auto____558089;
if(cljs.core.chunked_seq_QMARK_.call(null,s__558090))
{var c__558091 = cljs.core.chunk_first.call(null,s__558090);
var size__558092 = cljs.core.count.call(null,c__558091);
var b__558093 = cljs.core.chunk_buffer.call(null,size__558092);
var n__2549__auto____558094 = size__558092;
var i__558095 = 0;
while(true){
if((i__558095 < n__2549__auto____558094))
{var x__558096 = f.call(null,cljs.core._nth.call(null,c__558091,i__558095));
if((x__558096 == null))
{} else
{cljs.core.chunk_append.call(null,b__558093,x__558096);
}
{
var G__558098 = (i__558095 + 1);
i__558095 = G__558098;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__558093),keep.call(null,f,cljs.core.chunk_rest.call(null,s__558090)));
} else
{var x__558097 = f.call(null,cljs.core.first.call(null,s__558090));
if((x__558097 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__558090));
} else
{return cljs.core.cons.call(null,x__558097,keep.call(null,f,cljs.core.rest.call(null,s__558090)));
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
var keepi__558124 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____558134 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____558134)
{var s__558135 = temp__3974__auto____558134;
if(cljs.core.chunked_seq_QMARK_.call(null,s__558135))
{var c__558136 = cljs.core.chunk_first.call(null,s__558135);
var size__558137 = cljs.core.count.call(null,c__558136);
var b__558138 = cljs.core.chunk_buffer.call(null,size__558137);
var n__2549__auto____558139 = size__558137;
var i__558140 = 0;
while(true){
if((i__558140 < n__2549__auto____558139))
{var x__558141 = f.call(null,(idx + i__558140),cljs.core._nth.call(null,c__558136,i__558140));
if((x__558141 == null))
{} else
{cljs.core.chunk_append.call(null,b__558138,x__558141);
}
{
var G__558143 = (i__558140 + 1);
i__558140 = G__558143;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__558138),keepi.call(null,(idx + size__558137),cljs.core.chunk_rest.call(null,s__558135)));
} else
{var x__558142 = f.call(null,idx,cljs.core.first.call(null,s__558135));
if((x__558142 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__558135));
} else
{return cljs.core.cons.call(null,x__558142,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__558135)));
}
}
} else
{return null;
}
}),null));
});
return keepi__558124.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____558229 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____558229))
{return p.call(null,y);
} else
{return and__3822__auto____558229;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____558230 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____558230))
{var and__3822__auto____558231 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____558231))
{return p.call(null,z);
} else
{return and__3822__auto____558231;
}
} else
{return and__3822__auto____558230;
}
})());
});
var ep1__4 = (function() { 
var G__558300__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____558232 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____558232))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____558232;
}
})());
};
var G__558300 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558300__delegate.call(this, x, y, z, args);
};
G__558300.cljs$lang$maxFixedArity = 3;
G__558300.cljs$lang$applyTo = (function (arglist__558301){
var x = cljs.core.first(arglist__558301);
var y = cljs.core.first(cljs.core.next(arglist__558301));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558301)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558301)));
return G__558300__delegate(x, y, z, args);
});
G__558300.cljs$lang$arity$variadic = G__558300__delegate;
return G__558300;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____558244 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____558244))
{return p2.call(null,x);
} else
{return and__3822__auto____558244;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____558245 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____558245))
{var and__3822__auto____558246 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____558246))
{var and__3822__auto____558247 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____558247))
{return p2.call(null,y);
} else
{return and__3822__auto____558247;
}
} else
{return and__3822__auto____558246;
}
} else
{return and__3822__auto____558245;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____558248 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____558248))
{var and__3822__auto____558249 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____558249))
{var and__3822__auto____558250 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____558250))
{var and__3822__auto____558251 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____558251))
{var and__3822__auto____558252 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____558252))
{return p2.call(null,z);
} else
{return and__3822__auto____558252;
}
} else
{return and__3822__auto____558251;
}
} else
{return and__3822__auto____558250;
}
} else
{return and__3822__auto____558249;
}
} else
{return and__3822__auto____558248;
}
})());
});
var ep2__4 = (function() { 
var G__558302__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____558253 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____558253))
{return cljs.core.every_QMARK_.call(null,(function (p1__558099_SHARP_){
var and__3822__auto____558254 = p1.call(null,p1__558099_SHARP_);
if(cljs.core.truth_(and__3822__auto____558254))
{return p2.call(null,p1__558099_SHARP_);
} else
{return and__3822__auto____558254;
}
}),args);
} else
{return and__3822__auto____558253;
}
})());
};
var G__558302 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558302__delegate.call(this, x, y, z, args);
};
G__558302.cljs$lang$maxFixedArity = 3;
G__558302.cljs$lang$applyTo = (function (arglist__558303){
var x = cljs.core.first(arglist__558303);
var y = cljs.core.first(cljs.core.next(arglist__558303));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558303)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558303)));
return G__558302__delegate(x, y, z, args);
});
G__558302.cljs$lang$arity$variadic = G__558302__delegate;
return G__558302;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____558273 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____558273))
{var and__3822__auto____558274 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____558274))
{return p3.call(null,x);
} else
{return and__3822__auto____558274;
}
} else
{return and__3822__auto____558273;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____558275 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____558275))
{var and__3822__auto____558276 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____558276))
{var and__3822__auto____558277 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____558277))
{var and__3822__auto____558278 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____558278))
{var and__3822__auto____558279 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____558279))
{return p3.call(null,y);
} else
{return and__3822__auto____558279;
}
} else
{return and__3822__auto____558278;
}
} else
{return and__3822__auto____558277;
}
} else
{return and__3822__auto____558276;
}
} else
{return and__3822__auto____558275;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____558280 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____558280))
{var and__3822__auto____558281 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____558281))
{var and__3822__auto____558282 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____558282))
{var and__3822__auto____558283 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____558283))
{var and__3822__auto____558284 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____558284))
{var and__3822__auto____558285 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____558285))
{var and__3822__auto____558286 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____558286))
{var and__3822__auto____558287 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____558287))
{return p3.call(null,z);
} else
{return and__3822__auto____558287;
}
} else
{return and__3822__auto____558286;
}
} else
{return and__3822__auto____558285;
}
} else
{return and__3822__auto____558284;
}
} else
{return and__3822__auto____558283;
}
} else
{return and__3822__auto____558282;
}
} else
{return and__3822__auto____558281;
}
} else
{return and__3822__auto____558280;
}
})());
});
var ep3__4 = (function() { 
var G__558304__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____558288 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____558288))
{return cljs.core.every_QMARK_.call(null,(function (p1__558100_SHARP_){
var and__3822__auto____558289 = p1.call(null,p1__558100_SHARP_);
if(cljs.core.truth_(and__3822__auto____558289))
{var and__3822__auto____558290 = p2.call(null,p1__558100_SHARP_);
if(cljs.core.truth_(and__3822__auto____558290))
{return p3.call(null,p1__558100_SHARP_);
} else
{return and__3822__auto____558290;
}
} else
{return and__3822__auto____558289;
}
}),args);
} else
{return and__3822__auto____558288;
}
})());
};
var G__558304 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558304__delegate.call(this, x, y, z, args);
};
G__558304.cljs$lang$maxFixedArity = 3;
G__558304.cljs$lang$applyTo = (function (arglist__558305){
var x = cljs.core.first(arglist__558305);
var y = cljs.core.first(cljs.core.next(arglist__558305));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558305)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558305)));
return G__558304__delegate(x, y, z, args);
});
G__558304.cljs$lang$arity$variadic = G__558304__delegate;
return G__558304;
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
var G__558306__delegate = function (p1,p2,p3,ps){
var ps__558291 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__558101_SHARP_){
return p1__558101_SHARP_.call(null,x);
}),ps__558291);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__558102_SHARP_){
var and__3822__auto____558296 = p1__558102_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____558296))
{return p1__558102_SHARP_.call(null,y);
} else
{return and__3822__auto____558296;
}
}),ps__558291);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__558103_SHARP_){
var and__3822__auto____558297 = p1__558103_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____558297))
{var and__3822__auto____558298 = p1__558103_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____558298))
{return p1__558103_SHARP_.call(null,z);
} else
{return and__3822__auto____558298;
}
} else
{return and__3822__auto____558297;
}
}),ps__558291);
});
var epn__4 = (function() { 
var G__558307__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____558299 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____558299))
{return cljs.core.every_QMARK_.call(null,(function (p1__558104_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__558104_SHARP_,args);
}),ps__558291);
} else
{return and__3822__auto____558299;
}
})());
};
var G__558307 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558307__delegate.call(this, x, y, z, args);
};
G__558307.cljs$lang$maxFixedArity = 3;
G__558307.cljs$lang$applyTo = (function (arglist__558308){
var x = cljs.core.first(arglist__558308);
var y = cljs.core.first(cljs.core.next(arglist__558308));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558308)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558308)));
return G__558307__delegate(x, y, z, args);
});
G__558307.cljs$lang$arity$variadic = G__558307__delegate;
return G__558307;
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
var G__558306 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558306__delegate.call(this, p1, p2, p3, ps);
};
G__558306.cljs$lang$maxFixedArity = 3;
G__558306.cljs$lang$applyTo = (function (arglist__558309){
var p1 = cljs.core.first(arglist__558309);
var p2 = cljs.core.first(cljs.core.next(arglist__558309));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558309)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558309)));
return G__558306__delegate(p1, p2, p3, ps);
});
G__558306.cljs$lang$arity$variadic = G__558306__delegate;
return G__558306;
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
var or__3824__auto____558390 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____558390))
{return or__3824__auto____558390;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____558391 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____558391))
{return or__3824__auto____558391;
} else
{var or__3824__auto____558392 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____558392))
{return or__3824__auto____558392;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__558461__delegate = function (x,y,z,args){
var or__3824__auto____558393 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____558393))
{return or__3824__auto____558393;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__558461 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558461__delegate.call(this, x, y, z, args);
};
G__558461.cljs$lang$maxFixedArity = 3;
G__558461.cljs$lang$applyTo = (function (arglist__558462){
var x = cljs.core.first(arglist__558462);
var y = cljs.core.first(cljs.core.next(arglist__558462));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558462)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558462)));
return G__558461__delegate(x, y, z, args);
});
G__558461.cljs$lang$arity$variadic = G__558461__delegate;
return G__558461;
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
var or__3824__auto____558405 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____558405))
{return or__3824__auto____558405;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____558406 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____558406))
{return or__3824__auto____558406;
} else
{var or__3824__auto____558407 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____558407))
{return or__3824__auto____558407;
} else
{var or__3824__auto____558408 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____558408))
{return or__3824__auto____558408;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____558409 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____558409))
{return or__3824__auto____558409;
} else
{var or__3824__auto____558410 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____558410))
{return or__3824__auto____558410;
} else
{var or__3824__auto____558411 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____558411))
{return or__3824__auto____558411;
} else
{var or__3824__auto____558412 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____558412))
{return or__3824__auto____558412;
} else
{var or__3824__auto____558413 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____558413))
{return or__3824__auto____558413;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__558463__delegate = function (x,y,z,args){
var or__3824__auto____558414 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____558414))
{return or__3824__auto____558414;
} else
{return cljs.core.some.call(null,(function (p1__558144_SHARP_){
var or__3824__auto____558415 = p1.call(null,p1__558144_SHARP_);
if(cljs.core.truth_(or__3824__auto____558415))
{return or__3824__auto____558415;
} else
{return p2.call(null,p1__558144_SHARP_);
}
}),args);
}
};
var G__558463 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558463__delegate.call(this, x, y, z, args);
};
G__558463.cljs$lang$maxFixedArity = 3;
G__558463.cljs$lang$applyTo = (function (arglist__558464){
var x = cljs.core.first(arglist__558464);
var y = cljs.core.first(cljs.core.next(arglist__558464));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558464)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558464)));
return G__558463__delegate(x, y, z, args);
});
G__558463.cljs$lang$arity$variadic = G__558463__delegate;
return G__558463;
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
var or__3824__auto____558434 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____558434))
{return or__3824__auto____558434;
} else
{var or__3824__auto____558435 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____558435))
{return or__3824__auto____558435;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____558436 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____558436))
{return or__3824__auto____558436;
} else
{var or__3824__auto____558437 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____558437))
{return or__3824__auto____558437;
} else
{var or__3824__auto____558438 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____558438))
{return or__3824__auto____558438;
} else
{var or__3824__auto____558439 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____558439))
{return or__3824__auto____558439;
} else
{var or__3824__auto____558440 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____558440))
{return or__3824__auto____558440;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____558441 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____558441))
{return or__3824__auto____558441;
} else
{var or__3824__auto____558442 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____558442))
{return or__3824__auto____558442;
} else
{var or__3824__auto____558443 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____558443))
{return or__3824__auto____558443;
} else
{var or__3824__auto____558444 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____558444))
{return or__3824__auto____558444;
} else
{var or__3824__auto____558445 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____558445))
{return or__3824__auto____558445;
} else
{var or__3824__auto____558446 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____558446))
{return or__3824__auto____558446;
} else
{var or__3824__auto____558447 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____558447))
{return or__3824__auto____558447;
} else
{var or__3824__auto____558448 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____558448))
{return or__3824__auto____558448;
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
var G__558465__delegate = function (x,y,z,args){
var or__3824__auto____558449 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____558449))
{return or__3824__auto____558449;
} else
{return cljs.core.some.call(null,(function (p1__558145_SHARP_){
var or__3824__auto____558450 = p1.call(null,p1__558145_SHARP_);
if(cljs.core.truth_(or__3824__auto____558450))
{return or__3824__auto____558450;
} else
{var or__3824__auto____558451 = p2.call(null,p1__558145_SHARP_);
if(cljs.core.truth_(or__3824__auto____558451))
{return or__3824__auto____558451;
} else
{return p3.call(null,p1__558145_SHARP_);
}
}
}),args);
}
};
var G__558465 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558465__delegate.call(this, x, y, z, args);
};
G__558465.cljs$lang$maxFixedArity = 3;
G__558465.cljs$lang$applyTo = (function (arglist__558466){
var x = cljs.core.first(arglist__558466);
var y = cljs.core.first(cljs.core.next(arglist__558466));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558466)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558466)));
return G__558465__delegate(x, y, z, args);
});
G__558465.cljs$lang$arity$variadic = G__558465__delegate;
return G__558465;
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
var G__558467__delegate = function (p1,p2,p3,ps){
var ps__558452 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__558146_SHARP_){
return p1__558146_SHARP_.call(null,x);
}),ps__558452);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__558147_SHARP_){
var or__3824__auto____558457 = p1__558147_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____558457))
{return or__3824__auto____558457;
} else
{return p1__558147_SHARP_.call(null,y);
}
}),ps__558452);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__558148_SHARP_){
var or__3824__auto____558458 = p1__558148_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____558458))
{return or__3824__auto____558458;
} else
{var or__3824__auto____558459 = p1__558148_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____558459))
{return or__3824__auto____558459;
} else
{return p1__558148_SHARP_.call(null,z);
}
}
}),ps__558452);
});
var spn__4 = (function() { 
var G__558468__delegate = function (x,y,z,args){
var or__3824__auto____558460 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____558460))
{return or__3824__auto____558460;
} else
{return cljs.core.some.call(null,(function (p1__558149_SHARP_){
return cljs.core.some.call(null,p1__558149_SHARP_,args);
}),ps__558452);
}
};
var G__558468 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558468__delegate.call(this, x, y, z, args);
};
G__558468.cljs$lang$maxFixedArity = 3;
G__558468.cljs$lang$applyTo = (function (arglist__558469){
var x = cljs.core.first(arglist__558469);
var y = cljs.core.first(cljs.core.next(arglist__558469));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558469)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558469)));
return G__558468__delegate(x, y, z, args);
});
G__558468.cljs$lang$arity$variadic = G__558468__delegate;
return G__558468;
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
var G__558467 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__558467__delegate.call(this, p1, p2, p3, ps);
};
G__558467.cljs$lang$maxFixedArity = 3;
G__558467.cljs$lang$applyTo = (function (arglist__558470){
var p1 = cljs.core.first(arglist__558470);
var p2 = cljs.core.first(cljs.core.next(arglist__558470));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558470)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558470)));
return G__558467__delegate(p1, p2, p3, ps);
});
G__558467.cljs$lang$arity$variadic = G__558467__delegate;
return G__558467;
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
var temp__3974__auto____558489 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____558489)
{var s__558490 = temp__3974__auto____558489;
if(cljs.core.chunked_seq_QMARK_.call(null,s__558490))
{var c__558491 = cljs.core.chunk_first.call(null,s__558490);
var size__558492 = cljs.core.count.call(null,c__558491);
var b__558493 = cljs.core.chunk_buffer.call(null,size__558492);
var n__2549__auto____558494 = size__558492;
var i__558495 = 0;
while(true){
if((i__558495 < n__2549__auto____558494))
{cljs.core.chunk_append.call(null,b__558493,f.call(null,cljs.core._nth.call(null,c__558491,i__558495)));
{
var G__558507 = (i__558495 + 1);
i__558495 = G__558507;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__558493),map.call(null,f,cljs.core.chunk_rest.call(null,s__558490)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__558490)),map.call(null,f,cljs.core.rest.call(null,s__558490)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__558496 = cljs.core.seq.call(null,c1);
var s2__558497 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____558498 = s1__558496;
if(and__3822__auto____558498)
{return s2__558497;
} else
{return and__3822__auto____558498;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__558496),cljs.core.first.call(null,s2__558497)),map.call(null,f,cljs.core.rest.call(null,s1__558496),cljs.core.rest.call(null,s2__558497)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__558499 = cljs.core.seq.call(null,c1);
var s2__558500 = cljs.core.seq.call(null,c2);
var s3__558501 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____558502 = s1__558499;
if(and__3822__auto____558502)
{var and__3822__auto____558503 = s2__558500;
if(and__3822__auto____558503)
{return s3__558501;
} else
{return and__3822__auto____558503;
}
} else
{return and__3822__auto____558502;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__558499),cljs.core.first.call(null,s2__558500),cljs.core.first.call(null,s3__558501)),map.call(null,f,cljs.core.rest.call(null,s1__558499),cljs.core.rest.call(null,s2__558500),cljs.core.rest.call(null,s3__558501)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__558508__delegate = function (f,c1,c2,c3,colls){
var step__558506 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__558505 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__558505))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__558505),step.call(null,map.call(null,cljs.core.rest,ss__558505)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__558310_SHARP_){
return cljs.core.apply.call(null,f,p1__558310_SHARP_);
}),step__558506.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__558508 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__558508__delegate.call(this, f, c1, c2, c3, colls);
};
G__558508.cljs$lang$maxFixedArity = 4;
G__558508.cljs$lang$applyTo = (function (arglist__558509){
var f = cljs.core.first(arglist__558509);
var c1 = cljs.core.first(cljs.core.next(arglist__558509));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558509)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__558509))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__558509))));
return G__558508__delegate(f, c1, c2, c3, colls);
});
G__558508.cljs$lang$arity$variadic = G__558508__delegate;
return G__558508;
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
{var temp__3974__auto____558512 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____558512)
{var s__558513 = temp__3974__auto____558512;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__558513),take.call(null,(n - 1),cljs.core.rest.call(null,s__558513)));
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
var step__558519 = (function (n,coll){
while(true){
var s__558517 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____558518 = (n > 0);
if(and__3822__auto____558518)
{return s__558517;
} else
{return and__3822__auto____558518;
}
})()))
{{
var G__558520 = (n - 1);
var G__558521 = cljs.core.rest.call(null,s__558517);
n = G__558520;
coll = G__558521;
continue;
}
} else
{return s__558517;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__558519.call(null,n,coll);
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
var s__558524 = cljs.core.seq.call(null,coll);
var lead__558525 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__558525)
{{
var G__558526 = cljs.core.next.call(null,s__558524);
var G__558527 = cljs.core.next.call(null,lead__558525);
s__558524 = G__558526;
lead__558525 = G__558527;
continue;
}
} else
{return s__558524;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__558533 = (function (pred,coll){
while(true){
var s__558531 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____558532 = s__558531;
if(and__3822__auto____558532)
{return pred.call(null,cljs.core.first.call(null,s__558531));
} else
{return and__3822__auto____558532;
}
})()))
{{
var G__558534 = pred;
var G__558535 = cljs.core.rest.call(null,s__558531);
pred = G__558534;
coll = G__558535;
continue;
}
} else
{return s__558531;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__558533.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____558538 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____558538)
{var s__558539 = temp__3974__auto____558538;
return cljs.core.concat.call(null,s__558539,cycle.call(null,s__558539));
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
var s1__558544 = cljs.core.seq.call(null,c1);
var s2__558545 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____558546 = s1__558544;
if(and__3822__auto____558546)
{return s2__558545;
} else
{return and__3822__auto____558546;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__558544),cljs.core.cons.call(null,cljs.core.first.call(null,s2__558545),interleave.call(null,cljs.core.rest.call(null,s1__558544),cljs.core.rest.call(null,s2__558545))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__558548__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__558547 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__558547))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__558547),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__558547)));
} else
{return null;
}
}),null));
};
var G__558548 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__558548__delegate.call(this, c1, c2, colls);
};
G__558548.cljs$lang$maxFixedArity = 2;
G__558548.cljs$lang$applyTo = (function (arglist__558549){
var c1 = cljs.core.first(arglist__558549);
var c2 = cljs.core.first(cljs.core.next(arglist__558549));
var colls = cljs.core.rest(cljs.core.next(arglist__558549));
return G__558548__delegate(c1, c2, colls);
});
G__558548.cljs$lang$arity$variadic = G__558548__delegate;
return G__558548;
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
var cat__558559 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____558557 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____558557)
{var coll__558558 = temp__3971__auto____558557;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__558558),cat.call(null,cljs.core.rest.call(null,coll__558558),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__558559.call(null,null,colls);
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
var G__558560__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__558560 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__558560__delegate.call(this, f, coll, colls);
};
G__558560.cljs$lang$maxFixedArity = 2;
G__558560.cljs$lang$applyTo = (function (arglist__558561){
var f = cljs.core.first(arglist__558561);
var coll = cljs.core.first(cljs.core.next(arglist__558561));
var colls = cljs.core.rest(cljs.core.next(arglist__558561));
return G__558560__delegate(f, coll, colls);
});
G__558560.cljs$lang$arity$variadic = G__558560__delegate;
return G__558560;
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
var temp__3974__auto____558571 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____558571)
{var s__558572 = temp__3974__auto____558571;
if(cljs.core.chunked_seq_QMARK_.call(null,s__558572))
{var c__558573 = cljs.core.chunk_first.call(null,s__558572);
var size__558574 = cljs.core.count.call(null,c__558573);
var b__558575 = cljs.core.chunk_buffer.call(null,size__558574);
var n__2549__auto____558576 = size__558574;
var i__558577 = 0;
while(true){
if((i__558577 < n__2549__auto____558576))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__558573,i__558577))))
{cljs.core.chunk_append.call(null,b__558575,cljs.core._nth.call(null,c__558573,i__558577));
} else
{}
{
var G__558580 = (i__558577 + 1);
i__558577 = G__558580;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__558575),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__558572)));
} else
{var f__558578 = cljs.core.first.call(null,s__558572);
var r__558579 = cljs.core.rest.call(null,s__558572);
if(cljs.core.truth_(pred.call(null,f__558578)))
{return cljs.core.cons.call(null,f__558578,filter.call(null,pred,r__558579));
} else
{return filter.call(null,pred,r__558579);
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
var walk__558583 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__558583.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__558581_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__558581_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__558587__558588 = to;
if(G__558587__558588)
{if((function (){var or__3824__auto____558589 = (G__558587__558588.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____558589)
{return or__3824__auto____558589;
} else
{return G__558587__558588.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__558587__558588.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__558587__558588);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__558587__558588);
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
var G__558590__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__558590 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__558590__delegate.call(this, f, c1, c2, c3, colls);
};
G__558590.cljs$lang$maxFixedArity = 4;
G__558590.cljs$lang$applyTo = (function (arglist__558591){
var f = cljs.core.first(arglist__558591);
var c1 = cljs.core.first(cljs.core.next(arglist__558591));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558591)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__558591))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__558591))));
return G__558590__delegate(f, c1, c2, c3, colls);
});
G__558590.cljs$lang$arity$variadic = G__558590__delegate;
return G__558590;
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
var temp__3974__auto____558598 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____558598)
{var s__558599 = temp__3974__auto____558598;
var p__558600 = cljs.core.take.call(null,n,s__558599);
if((n === cljs.core.count.call(null,p__558600)))
{return cljs.core.cons.call(null,p__558600,partition.call(null,n,step,cljs.core.drop.call(null,step,s__558599)));
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
var temp__3974__auto____558601 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____558601)
{var s__558602 = temp__3974__auto____558601;
var p__558603 = cljs.core.take.call(null,n,s__558602);
if((n === cljs.core.count.call(null,p__558603)))
{return cljs.core.cons.call(null,p__558603,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__558602)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__558603,pad)));
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
var sentinel__558608 = cljs.core.lookup_sentinel;
var m__558609 = m;
var ks__558610 = cljs.core.seq.call(null,ks);
while(true){
if(ks__558610)
{var m__558611 = cljs.core._lookup.call(null,m__558609,cljs.core.first.call(null,ks__558610),sentinel__558608);
if((sentinel__558608 === m__558611))
{return not_found;
} else
{{
var G__558612 = sentinel__558608;
var G__558613 = m__558611;
var G__558614 = cljs.core.next.call(null,ks__558610);
sentinel__558608 = G__558612;
m__558609 = G__558613;
ks__558610 = G__558614;
continue;
}
}
} else
{return m__558609;
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
cljs.core.assoc_in = (function assoc_in(m,p__558615,v){
var vec__558620__558621 = p__558615;
var k__558622 = cljs.core.nth.call(null,vec__558620__558621,0,null);
var ks__558623 = cljs.core.nthnext.call(null,vec__558620__558621,1);
if(cljs.core.truth_(ks__558623))
{return cljs.core.assoc.call(null,m,k__558622,assoc_in.call(null,cljs.core._lookup.call(null,m,k__558622,null),ks__558623,v));
} else
{return cljs.core.assoc.call(null,m,k__558622,v);
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
var update_in__delegate = function (m,p__558624,f,args){
var vec__558629__558630 = p__558624;
var k__558631 = cljs.core.nth.call(null,vec__558629__558630,0,null);
var ks__558632 = cljs.core.nthnext.call(null,vec__558629__558630,1);
if(cljs.core.truth_(ks__558632))
{return cljs.core.assoc.call(null,m,k__558631,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__558631,null),ks__558632,f,args));
} else
{return cljs.core.assoc.call(null,m,k__558631,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__558631,null),args));
}
};
var update_in = function (m,p__558624,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__558624, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__558633){
var m = cljs.core.first(arglist__558633);
var p__558624 = cljs.core.first(cljs.core.next(arglist__558633));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__558633)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__558633)));
return update_in__delegate(m, p__558624, f, args);
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
var this__558636 = this;
var h__2203__auto____558637 = this__558636.__hash;
if(!((h__2203__auto____558637 == null)))
{return h__2203__auto____558637;
} else
{var h__2203__auto____558638 = cljs.core.hash_coll.call(null,coll);
this__558636.__hash = h__2203__auto____558638;
return h__2203__auto____558638;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__558639 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__558640 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__558641 = this;
var new_array__558642 = this__558641.array.slice();
(new_array__558642[k] = v);
return (new cljs.core.Vector(this__558641.meta,new_array__558642,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__558673 = null;
var G__558673__2 = (function (this_sym558643,k){
var this__558645 = this;
var this_sym558643__558646 = this;
var coll__558647 = this_sym558643__558646;
return coll__558647.cljs$core$ILookup$_lookup$arity$2(coll__558647,k);
});
var G__558673__3 = (function (this_sym558644,k,not_found){
var this__558645 = this;
var this_sym558644__558648 = this;
var coll__558649 = this_sym558644__558648;
return coll__558649.cljs$core$ILookup$_lookup$arity$3(coll__558649,k,not_found);
});
G__558673 = function(this_sym558644,k,not_found){
switch(arguments.length){
case 2:
return G__558673__2.call(this,this_sym558644,k);
case 3:
return G__558673__3.call(this,this_sym558644,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__558673;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym558634,args558635){
var this__558650 = this;
return this_sym558634.call.apply(this_sym558634,[this_sym558634].concat(args558635.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__558651 = this;
var new_array__558652 = this__558651.array.slice();
new_array__558652.push(o);
return (new cljs.core.Vector(this__558651.meta,new_array__558652,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__558653 = this;
var this__558654 = this;
return cljs.core.pr_str.call(null,this__558654);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__558655 = this;
return cljs.core.ci_reduce.call(null,this__558655.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__558656 = this;
return cljs.core.ci_reduce.call(null,this__558656.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__558657 = this;
if((this__558657.array.length > 0))
{var vector_seq__558658 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__558657.array.length))
{return cljs.core.cons.call(null,(this__558657.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__558658.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__558659 = this;
return this__558659.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__558660 = this;
var count__558661 = this__558660.array.length;
if((count__558661 > 0))
{return (this__558660.array[(count__558661 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__558662 = this;
if((this__558662.array.length > 0))
{var new_array__558663 = this__558662.array.slice();
new_array__558663.pop();
return (new cljs.core.Vector(this__558662.meta,new_array__558663,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__558664 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__558665 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__558666 = this;
return (new cljs.core.Vector(meta,this__558666.array,this__558666.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__558667 = this;
return this__558667.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__558668 = this;
if((function (){var and__3822__auto____558669 = (0 <= n);
if(and__3822__auto____558669)
{return (n < this__558668.array.length);
} else
{return and__3822__auto____558669;
}
})())
{return (this__558668.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__558670 = this;
if((function (){var and__3822__auto____558671 = (0 <= n);
if(and__3822__auto____558671)
{return (n < this__558670.array.length);
} else
{return and__3822__auto____558671;
}
})())
{return (this__558670.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__558672 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__558672.meta);
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
var cnt__558675 = pv.cnt;
if((cnt__558675 < 32))
{return 0;
} else
{return (((cnt__558675 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__558681 = level;
var ret__558682 = node;
while(true){
if((ll__558681 === 0))
{return ret__558682;
} else
{var embed__558683 = ret__558682;
var r__558684 = cljs.core.pv_fresh_node.call(null,edit);
var ___558685 = cljs.core.pv_aset.call(null,r__558684,0,embed__558683);
{
var G__558686 = (ll__558681 - 5);
var G__558687 = r__558684;
ll__558681 = G__558686;
ret__558682 = G__558687;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__558693 = cljs.core.pv_clone_node.call(null,parent);
var subidx__558694 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__558693,subidx__558694,tailnode);
return ret__558693;
} else
{var child__558695 = cljs.core.pv_aget.call(null,parent,subidx__558694);
if(!((child__558695 == null)))
{var node_to_insert__558696 = push_tail.call(null,pv,(level - 5),child__558695,tailnode);
cljs.core.pv_aset.call(null,ret__558693,subidx__558694,node_to_insert__558696);
return ret__558693;
} else
{var node_to_insert__558697 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__558693,subidx__558694,node_to_insert__558697);
return ret__558693;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____558701 = (0 <= i);
if(and__3822__auto____558701)
{return (i < pv.cnt);
} else
{return and__3822__auto____558701;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__558702 = pv.root;
var level__558703 = pv.shift;
while(true){
if((level__558703 > 0))
{{
var G__558704 = cljs.core.pv_aget.call(null,node__558702,((i >>> level__558703) & 31));
var G__558705 = (level__558703 - 5);
node__558702 = G__558704;
level__558703 = G__558705;
continue;
}
} else
{return node__558702.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__558708 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__558708,(i & 31),val);
return ret__558708;
} else
{var subidx__558709 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__558708,subidx__558709,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__558709),i,val));
return ret__558708;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__558715 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__558716 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__558715));
if((function (){var and__3822__auto____558717 = (new_child__558716 == null);
if(and__3822__auto____558717)
{return (subidx__558715 === 0);
} else
{return and__3822__auto____558717;
}
})())
{return null;
} else
{var ret__558718 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__558718,subidx__558715,new_child__558716);
return ret__558718;
}
} else
{if((subidx__558715 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__558719 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__558719,subidx__558715,null);
return ret__558719;
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
var this__558722 = this;
return (new cljs.core.TransientVector(this__558722.cnt,this__558722.shift,cljs.core.tv_editable_root.call(null,this__558722.root),cljs.core.tv_editable_tail.call(null,this__558722.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__558723 = this;
var h__2203__auto____558724 = this__558723.__hash;
if(!((h__2203__auto____558724 == null)))
{return h__2203__auto____558724;
} else
{var h__2203__auto____558725 = cljs.core.hash_coll.call(null,coll);
this__558723.__hash = h__2203__auto____558725;
return h__2203__auto____558725;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__558726 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__558727 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__558728 = this;
if((function (){var and__3822__auto____558729 = (0 <= k);
if(and__3822__auto____558729)
{return (k < this__558728.cnt);
} else
{return and__3822__auto____558729;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__558730 = this__558728.tail.slice();
(new_tail__558730[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__558728.meta,this__558728.cnt,this__558728.shift,this__558728.root,new_tail__558730,null));
} else
{return (new cljs.core.PersistentVector(this__558728.meta,this__558728.cnt,this__558728.shift,cljs.core.do_assoc.call(null,coll,this__558728.shift,this__558728.root,k,v),this__558728.tail,null));
}
} else
{if((k === this__558728.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__558728.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__558778 = null;
var G__558778__2 = (function (this_sym558731,k){
var this__558733 = this;
var this_sym558731__558734 = this;
var coll__558735 = this_sym558731__558734;
return coll__558735.cljs$core$ILookup$_lookup$arity$2(coll__558735,k);
});
var G__558778__3 = (function (this_sym558732,k,not_found){
var this__558733 = this;
var this_sym558732__558736 = this;
var coll__558737 = this_sym558732__558736;
return coll__558737.cljs$core$ILookup$_lookup$arity$3(coll__558737,k,not_found);
});
G__558778 = function(this_sym558732,k,not_found){
switch(arguments.length){
case 2:
return G__558778__2.call(this,this_sym558732,k);
case 3:
return G__558778__3.call(this,this_sym558732,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__558778;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym558720,args558721){
var this__558738 = this;
return this_sym558720.call.apply(this_sym558720,[this_sym558720].concat(args558721.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__558739 = this;
var step_init__558740 = [0,init];
var i__558741 = 0;
while(true){
if((i__558741 < this__558739.cnt))
{var arr__558742 = cljs.core.array_for.call(null,v,i__558741);
var len__558743 = arr__558742.length;
var init__558747 = (function (){var j__558744 = 0;
var init__558745 = (step_init__558740[1]);
while(true){
if((j__558744 < len__558743))
{var init__558746 = f.call(null,init__558745,(j__558744 + i__558741),(arr__558742[j__558744]));
if(cljs.core.reduced_QMARK_.call(null,init__558746))
{return init__558746;
} else
{{
var G__558779 = (j__558744 + 1);
var G__558780 = init__558746;
j__558744 = G__558779;
init__558745 = G__558780;
continue;
}
}
} else
{(step_init__558740[0] = len__558743);
(step_init__558740[1] = init__558745);
return init__558745;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__558747))
{return cljs.core.deref.call(null,init__558747);
} else
{{
var G__558781 = (i__558741 + (step_init__558740[0]));
i__558741 = G__558781;
continue;
}
}
} else
{return (step_init__558740[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__558748 = this;
if(((this__558748.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__558749 = this__558748.tail.slice();
new_tail__558749.push(o);
return (new cljs.core.PersistentVector(this__558748.meta,(this__558748.cnt + 1),this__558748.shift,this__558748.root,new_tail__558749,null));
} else
{var root_overflow_QMARK___558750 = ((this__558748.cnt >>> 5) > (1 << this__558748.shift));
var new_shift__558751 = ((root_overflow_QMARK___558750)?(this__558748.shift + 5):this__558748.shift);
var new_root__558753 = ((root_overflow_QMARK___558750)?(function (){var n_r__558752 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__558752,0,this__558748.root);
cljs.core.pv_aset.call(null,n_r__558752,1,cljs.core.new_path.call(null,null,this__558748.shift,(new cljs.core.VectorNode(null,this__558748.tail))));
return n_r__558752;
})():cljs.core.push_tail.call(null,coll,this__558748.shift,this__558748.root,(new cljs.core.VectorNode(null,this__558748.tail))));
return (new cljs.core.PersistentVector(this__558748.meta,(this__558748.cnt + 1),new_shift__558751,new_root__558753,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__558754 = this;
if((this__558754.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__558754.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__558755 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__558756 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__558757 = this;
var this__558758 = this;
return cljs.core.pr_str.call(null,this__558758);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__558759 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__558760 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__558761 = this;
if((this__558761.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__558762 = this;
return this__558762.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__558763 = this;
if((this__558763.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__558763.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__558764 = this;
if((this__558764.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__558764.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__558764.meta);
} else
{if((1 < (this__558764.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__558764.meta,(this__558764.cnt - 1),this__558764.shift,this__558764.root,this__558764.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__558765 = cljs.core.array_for.call(null,coll,(this__558764.cnt - 2));
var nr__558766 = cljs.core.pop_tail.call(null,coll,this__558764.shift,this__558764.root);
var new_root__558767 = (((nr__558766 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__558766);
var cnt_1__558768 = (this__558764.cnt - 1);
if((function (){var and__3822__auto____558769 = (5 < this__558764.shift);
if(and__3822__auto____558769)
{return (cljs.core.pv_aget.call(null,new_root__558767,1) == null);
} else
{return and__3822__auto____558769;
}
})())
{return (new cljs.core.PersistentVector(this__558764.meta,cnt_1__558768,(this__558764.shift - 5),cljs.core.pv_aget.call(null,new_root__558767,0),new_tail__558765,null));
} else
{return (new cljs.core.PersistentVector(this__558764.meta,cnt_1__558768,this__558764.shift,new_root__558767,new_tail__558765,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__558770 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__558771 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__558772 = this;
return (new cljs.core.PersistentVector(meta,this__558772.cnt,this__558772.shift,this__558772.root,this__558772.tail,this__558772.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__558773 = this;
return this__558773.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__558774 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__558775 = this;
if((function (){var and__3822__auto____558776 = (0 <= n);
if(and__3822__auto____558776)
{return (n < this__558775.cnt);
} else
{return and__3822__auto____558776;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__558777 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__558777.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__558782 = xs.length;
var xs__558783 = (((no_clone === true))?xs:xs.slice());
if((l__558782 < 32))
{return (new cljs.core.PersistentVector(null,l__558782,5,cljs.core.PersistentVector.EMPTY_NODE,xs__558783,null));
} else
{var node__558784 = xs__558783.slice(0,32);
var v__558785 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__558784,null));
var i__558786 = 32;
var out__558787 = cljs.core._as_transient.call(null,v__558785);
while(true){
if((i__558786 < l__558782))
{{
var G__558788 = (i__558786 + 1);
var G__558789 = cljs.core.conj_BANG_.call(null,out__558787,(xs__558783[i__558786]));
i__558786 = G__558788;
out__558787 = G__558789;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__558787);
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
vector.cljs$lang$applyTo = (function (arglist__558790){
var args = cljs.core.seq(arglist__558790);;
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
var this__558791 = this;
var h__2203__auto____558792 = this__558791.__hash;
if(!((h__2203__auto____558792 == null)))
{return h__2203__auto____558792;
} else
{var h__2203__auto____558793 = cljs.core.hash_coll.call(null,coll);
this__558791.__hash = h__2203__auto____558793;
return h__2203__auto____558793;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__558794 = this;
if(((this__558794.off + 1) < this__558794.node.length))
{var s__558795 = cljs.core.chunked_seq.call(null,this__558794.vec,this__558794.node,this__558794.i,(this__558794.off + 1));
if((s__558795 == null))
{return null;
} else
{return s__558795;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__558796 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__558797 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__558798 = this;
return (this__558798.node[this__558798.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__558799 = this;
if(((this__558799.off + 1) < this__558799.node.length))
{var s__558800 = cljs.core.chunked_seq.call(null,this__558799.vec,this__558799.node,this__558799.i,(this__558799.off + 1));
if((s__558800 == null))
{return cljs.core.List.EMPTY;
} else
{return s__558800;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__558801 = this;
var l__558802 = this__558801.node.length;
var s__558803 = ((((this__558801.i + l__558802) < cljs.core._count.call(null,this__558801.vec)))?cljs.core.chunked_seq.call(null,this__558801.vec,(this__558801.i + l__558802),0):null);
if((s__558803 == null))
{return null;
} else
{return s__558803;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__558804 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__558805 = this;
return cljs.core.chunked_seq.call(null,this__558805.vec,this__558805.node,this__558805.i,this__558805.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__558806 = this;
return this__558806.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__558807 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__558807.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__558808 = this;
return cljs.core.array_chunk.call(null,this__558808.node,this__558808.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__558809 = this;
var l__558810 = this__558809.node.length;
var s__558811 = ((((this__558809.i + l__558810) < cljs.core._count.call(null,this__558809.vec)))?cljs.core.chunked_seq.call(null,this__558809.vec,(this__558809.i + l__558810),0):null);
if((s__558811 == null))
{return cljs.core.List.EMPTY;
} else
{return s__558811;
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
var this__558814 = this;
var h__2203__auto____558815 = this__558814.__hash;
if(!((h__2203__auto____558815 == null)))
{return h__2203__auto____558815;
} else
{var h__2203__auto____558816 = cljs.core.hash_coll.call(null,coll);
this__558814.__hash = h__2203__auto____558816;
return h__2203__auto____558816;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__558817 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__558818 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__558819 = this;
var v_pos__558820 = (this__558819.start + key);
return (new cljs.core.Subvec(this__558819.meta,cljs.core._assoc.call(null,this__558819.v,v_pos__558820,val),this__558819.start,((this__558819.end > (v_pos__558820 + 1)) ? this__558819.end : (v_pos__558820 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__558846 = null;
var G__558846__2 = (function (this_sym558821,k){
var this__558823 = this;
var this_sym558821__558824 = this;
var coll__558825 = this_sym558821__558824;
return coll__558825.cljs$core$ILookup$_lookup$arity$2(coll__558825,k);
});
var G__558846__3 = (function (this_sym558822,k,not_found){
var this__558823 = this;
var this_sym558822__558826 = this;
var coll__558827 = this_sym558822__558826;
return coll__558827.cljs$core$ILookup$_lookup$arity$3(coll__558827,k,not_found);
});
G__558846 = function(this_sym558822,k,not_found){
switch(arguments.length){
case 2:
return G__558846__2.call(this,this_sym558822,k);
case 3:
return G__558846__3.call(this,this_sym558822,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__558846;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym558812,args558813){
var this__558828 = this;
return this_sym558812.call.apply(this_sym558812,[this_sym558812].concat(args558813.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__558829 = this;
return (new cljs.core.Subvec(this__558829.meta,cljs.core._assoc_n.call(null,this__558829.v,this__558829.end,o),this__558829.start,(this__558829.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__558830 = this;
var this__558831 = this;
return cljs.core.pr_str.call(null,this__558831);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__558832 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__558833 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__558834 = this;
var subvec_seq__558835 = (function subvec_seq(i){
if((i === this__558834.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__558834.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__558835.call(null,this__558834.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__558836 = this;
return (this__558836.end - this__558836.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__558837 = this;
return cljs.core._nth.call(null,this__558837.v,(this__558837.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__558838 = this;
if((this__558838.start === this__558838.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__558838.meta,this__558838.v,this__558838.start,(this__558838.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__558839 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__558840 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__558841 = this;
return (new cljs.core.Subvec(meta,this__558841.v,this__558841.start,this__558841.end,this__558841.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__558842 = this;
return this__558842.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__558843 = this;
return cljs.core._nth.call(null,this__558843.v,(this__558843.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__558844 = this;
return cljs.core._nth.call(null,this__558844.v,(this__558844.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__558845 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__558845.meta);
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
var ret__558848 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__558848,0,tl.length);
return ret__558848;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__558852 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__558853 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__558852,subidx__558853,(((level === 5))?tail_node:(function (){var child__558854 = cljs.core.pv_aget.call(null,ret__558852,subidx__558853);
if(!((child__558854 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__558854,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__558852;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__558859 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__558860 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__558861 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__558859,subidx__558860));
if((function (){var and__3822__auto____558862 = (new_child__558861 == null);
if(and__3822__auto____558862)
{return (subidx__558860 === 0);
} else
{return and__3822__auto____558862;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__558859,subidx__558860,new_child__558861);
return node__558859;
}
} else
{if((subidx__558860 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__558859,subidx__558860,null);
return node__558859;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____558867 = (0 <= i);
if(and__3822__auto____558867)
{return (i < tv.cnt);
} else
{return and__3822__auto____558867;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__558868 = tv.root;
var node__558869 = root__558868;
var level__558870 = tv.shift;
while(true){
if((level__558870 > 0))
{{
var G__558871 = cljs.core.tv_ensure_editable.call(null,root__558868.edit,cljs.core.pv_aget.call(null,node__558869,((i >>> level__558870) & 31)));
var G__558872 = (level__558870 - 5);
node__558869 = G__558871;
level__558870 = G__558872;
continue;
}
} else
{return node__558869.arr;
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
var G__558912 = null;
var G__558912__2 = (function (this_sym558875,k){
var this__558877 = this;
var this_sym558875__558878 = this;
var coll__558879 = this_sym558875__558878;
return coll__558879.cljs$core$ILookup$_lookup$arity$2(coll__558879,k);
});
var G__558912__3 = (function (this_sym558876,k,not_found){
var this__558877 = this;
var this_sym558876__558880 = this;
var coll__558881 = this_sym558876__558880;
return coll__558881.cljs$core$ILookup$_lookup$arity$3(coll__558881,k,not_found);
});
G__558912 = function(this_sym558876,k,not_found){
switch(arguments.length){
case 2:
return G__558912__2.call(this,this_sym558876,k);
case 3:
return G__558912__3.call(this,this_sym558876,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__558912;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym558873,args558874){
var this__558882 = this;
return this_sym558873.call.apply(this_sym558873,[this_sym558873].concat(args558874.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__558883 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__558884 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__558885 = this;
if(this__558885.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__558886 = this;
if((function (){var and__3822__auto____558887 = (0 <= n);
if(and__3822__auto____558887)
{return (n < this__558886.cnt);
} else
{return and__3822__auto____558887;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__558888 = this;
if(this__558888.root.edit)
{return this__558888.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__558889 = this;
if(this__558889.root.edit)
{if((function (){var and__3822__auto____558890 = (0 <= n);
if(and__3822__auto____558890)
{return (n < this__558889.cnt);
} else
{return and__3822__auto____558890;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__558889.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__558895 = (function go(level,node){
var node__558893 = cljs.core.tv_ensure_editable.call(null,this__558889.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__558893,(n & 31),val);
return node__558893;
} else
{var subidx__558894 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__558893,subidx__558894,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__558893,subidx__558894)));
return node__558893;
}
}).call(null,this__558889.shift,this__558889.root);
this__558889.root = new_root__558895;
return tcoll;
}
} else
{if((n === this__558889.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__558889.cnt)].join('')));
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
var this__558896 = this;
if(this__558896.root.edit)
{if((this__558896.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__558896.cnt))
{this__558896.cnt = 0;
return tcoll;
} else
{if((((this__558896.cnt - 1) & 31) > 0))
{this__558896.cnt = (this__558896.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__558897 = cljs.core.editable_array_for.call(null,tcoll,(this__558896.cnt - 2));
var new_root__558899 = (function (){var nr__558898 = cljs.core.tv_pop_tail.call(null,tcoll,this__558896.shift,this__558896.root);
if(!((nr__558898 == null)))
{return nr__558898;
} else
{return (new cljs.core.VectorNode(this__558896.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____558900 = (5 < this__558896.shift);
if(and__3822__auto____558900)
{return (cljs.core.pv_aget.call(null,new_root__558899,1) == null);
} else
{return and__3822__auto____558900;
}
})())
{var new_root__558901 = cljs.core.tv_ensure_editable.call(null,this__558896.root.edit,cljs.core.pv_aget.call(null,new_root__558899,0));
this__558896.root = new_root__558901;
this__558896.shift = (this__558896.shift - 5);
this__558896.cnt = (this__558896.cnt - 1);
this__558896.tail = new_tail__558897;
return tcoll;
} else
{this__558896.root = new_root__558899;
this__558896.cnt = (this__558896.cnt - 1);
this__558896.tail = new_tail__558897;
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
var this__558902 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__558903 = this;
if(this__558903.root.edit)
{if(((this__558903.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__558903.tail[(this__558903.cnt & 31)] = o);
this__558903.cnt = (this__558903.cnt + 1);
return tcoll;
} else
{var tail_node__558904 = (new cljs.core.VectorNode(this__558903.root.edit,this__558903.tail));
var new_tail__558905 = cljs.core.make_array.call(null,32);
(new_tail__558905[0] = o);
this__558903.tail = new_tail__558905;
if(((this__558903.cnt >>> 5) > (1 << this__558903.shift)))
{var new_root_array__558906 = cljs.core.make_array.call(null,32);
var new_shift__558907 = (this__558903.shift + 5);
(new_root_array__558906[0] = this__558903.root);
(new_root_array__558906[1] = cljs.core.new_path.call(null,this__558903.root.edit,this__558903.shift,tail_node__558904));
this__558903.root = (new cljs.core.VectorNode(this__558903.root.edit,new_root_array__558906));
this__558903.shift = new_shift__558907;
this__558903.cnt = (this__558903.cnt + 1);
return tcoll;
} else
{var new_root__558908 = cljs.core.tv_push_tail.call(null,tcoll,this__558903.shift,this__558903.root,tail_node__558904);
this__558903.root = new_root__558908;
this__558903.cnt = (this__558903.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__558909 = this;
if(this__558909.root.edit)
{this__558909.root.edit = null;
var len__558910 = (this__558909.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__558911 = cljs.core.make_array.call(null,len__558910);
cljs.core.array_copy.call(null,this__558909.tail,0,trimmed_tail__558911,0,len__558910);
return (new cljs.core.PersistentVector(null,this__558909.cnt,this__558909.shift,this__558909.root,trimmed_tail__558911,null));
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
var this__558913 = this;
var h__2203__auto____558914 = this__558913.__hash;
if(!((h__2203__auto____558914 == null)))
{return h__2203__auto____558914;
} else
{var h__2203__auto____558915 = cljs.core.hash_coll.call(null,coll);
this__558913.__hash = h__2203__auto____558915;
return h__2203__auto____558915;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__558916 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__558917 = this;
var this__558918 = this;
return cljs.core.pr_str.call(null,this__558918);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__558919 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__558920 = this;
return cljs.core._first.call(null,this__558920.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__558921 = this;
var temp__3971__auto____558922 = cljs.core.next.call(null,this__558921.front);
if(temp__3971__auto____558922)
{var f1__558923 = temp__3971__auto____558922;
return (new cljs.core.PersistentQueueSeq(this__558921.meta,f1__558923,this__558921.rear,null));
} else
{if((this__558921.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__558921.meta,this__558921.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__558924 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__558925 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__558925.front,this__558925.rear,this__558925.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__558926 = this;
return this__558926.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__558927 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__558927.meta);
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
var this__558928 = this;
var h__2203__auto____558929 = this__558928.__hash;
if(!((h__2203__auto____558929 == null)))
{return h__2203__auto____558929;
} else
{var h__2203__auto____558930 = cljs.core.hash_coll.call(null,coll);
this__558928.__hash = h__2203__auto____558930;
return h__2203__auto____558930;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__558931 = this;
if(cljs.core.truth_(this__558931.front))
{return (new cljs.core.PersistentQueue(this__558931.meta,(this__558931.count + 1),this__558931.front,cljs.core.conj.call(null,(function (){var or__3824__auto____558932 = this__558931.rear;
if(cljs.core.truth_(or__3824__auto____558932))
{return or__3824__auto____558932;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__558931.meta,(this__558931.count + 1),cljs.core.conj.call(null,this__558931.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__558933 = this;
var this__558934 = this;
return cljs.core.pr_str.call(null,this__558934);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__558935 = this;
var rear__558936 = cljs.core.seq.call(null,this__558935.rear);
if(cljs.core.truth_((function (){var or__3824__auto____558937 = this__558935.front;
if(cljs.core.truth_(or__3824__auto____558937))
{return or__3824__auto____558937;
} else
{return rear__558936;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__558935.front,cljs.core.seq.call(null,rear__558936),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__558938 = this;
return this__558938.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__558939 = this;
return cljs.core._first.call(null,this__558939.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__558940 = this;
if(cljs.core.truth_(this__558940.front))
{var temp__3971__auto____558941 = cljs.core.next.call(null,this__558940.front);
if(temp__3971__auto____558941)
{var f1__558942 = temp__3971__auto____558941;
return (new cljs.core.PersistentQueue(this__558940.meta,(this__558940.count - 1),f1__558942,this__558940.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__558940.meta,(this__558940.count - 1),cljs.core.seq.call(null,this__558940.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__558943 = this;
return cljs.core.first.call(null,this__558943.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__558944 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__558945 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__558946 = this;
return (new cljs.core.PersistentQueue(meta,this__558946.count,this__558946.front,this__558946.rear,this__558946.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__558947 = this;
return this__558947.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__558948 = this;
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
var this__558949 = this;
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
var len__558952 = array.length;
var i__558953 = 0;
while(true){
if((i__558953 < len__558952))
{if((k === (array[i__558953])))
{return i__558953;
} else
{{
var G__558954 = (i__558953 + incr);
i__558953 = G__558954;
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
var a__558957 = cljs.core.hash.call(null,a);
var b__558958 = cljs.core.hash.call(null,b);
if((a__558957 < b__558958))
{return -1;
} else
{if((a__558957 > b__558958))
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
var ks__558966 = m.keys;
var len__558967 = ks__558966.length;
var so__558968 = m.strobj;
var out__558969 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__558970 = 0;
var out__558971 = cljs.core.transient$.call(null,out__558969);
while(true){
if((i__558970 < len__558967))
{var k__558972 = (ks__558966[i__558970]);
{
var G__558973 = (i__558970 + 1);
var G__558974 = cljs.core.assoc_BANG_.call(null,out__558971,k__558972,(so__558968[k__558972]));
i__558970 = G__558973;
out__558971 = G__558974;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__558971,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__558980 = {};
var l__558981 = ks.length;
var i__558982 = 0;
while(true){
if((i__558982 < l__558981))
{var k__558983 = (ks[i__558982]);
(new_obj__558980[k__558983] = (obj[k__558983]));
{
var G__558984 = (i__558982 + 1);
i__558982 = G__558984;
continue;
}
} else
{}
break;
}
return new_obj__558980;
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
var this__558987 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__558988 = this;
var h__2203__auto____558989 = this__558988.__hash;
if(!((h__2203__auto____558989 == null)))
{return h__2203__auto____558989;
} else
{var h__2203__auto____558990 = cljs.core.hash_imap.call(null,coll);
this__558988.__hash = h__2203__auto____558990;
return h__2203__auto____558990;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__558991 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__558992 = this;
if((function (){var and__3822__auto____558993 = goog.isString(k);
if(and__3822__auto____558993)
{return !((cljs.core.scan_array.call(null,1,k,this__558992.keys) == null));
} else
{return and__3822__auto____558993;
}
})())
{return (this__558992.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__558994 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____558995 = (this__558994.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____558995)
{return or__3824__auto____558995;
} else
{return (this__558994.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__558994.keys) == null)))
{var new_strobj__558996 = cljs.core.obj_clone.call(null,this__558994.strobj,this__558994.keys);
(new_strobj__558996[k] = v);
return (new cljs.core.ObjMap(this__558994.meta,this__558994.keys,new_strobj__558996,(this__558994.update_count + 1),null));
} else
{var new_strobj__558997 = cljs.core.obj_clone.call(null,this__558994.strobj,this__558994.keys);
var new_keys__558998 = this__558994.keys.slice();
(new_strobj__558997[k] = v);
new_keys__558998.push(k);
return (new cljs.core.ObjMap(this__558994.meta,new_keys__558998,new_strobj__558997,(this__558994.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__558999 = this;
if((function (){var and__3822__auto____559000 = goog.isString(k);
if(and__3822__auto____559000)
{return !((cljs.core.scan_array.call(null,1,k,this__558999.keys) == null));
} else
{return and__3822__auto____559000;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__559022 = null;
var G__559022__2 = (function (this_sym559001,k){
var this__559003 = this;
var this_sym559001__559004 = this;
var coll__559005 = this_sym559001__559004;
return coll__559005.cljs$core$ILookup$_lookup$arity$2(coll__559005,k);
});
var G__559022__3 = (function (this_sym559002,k,not_found){
var this__559003 = this;
var this_sym559002__559006 = this;
var coll__559007 = this_sym559002__559006;
return coll__559007.cljs$core$ILookup$_lookup$arity$3(coll__559007,k,not_found);
});
G__559022 = function(this_sym559002,k,not_found){
switch(arguments.length){
case 2:
return G__559022__2.call(this,this_sym559002,k);
case 3:
return G__559022__3.call(this,this_sym559002,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__559022;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym558985,args558986){
var this__559008 = this;
return this_sym558985.call.apply(this_sym558985,[this_sym558985].concat(args558986.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__559009 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__559010 = this;
var this__559011 = this;
return cljs.core.pr_str.call(null,this__559011);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__559012 = this;
if((this__559012.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__558975_SHARP_){
return cljs.core.vector.call(null,p1__558975_SHARP_,(this__559012.strobj[p1__558975_SHARP_]));
}),this__559012.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__559013 = this;
return this__559013.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__559014 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__559015 = this;
return (new cljs.core.ObjMap(meta,this__559015.keys,this__559015.strobj,this__559015.update_count,this__559015.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__559016 = this;
return this__559016.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__559017 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__559017.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__559018 = this;
if((function (){var and__3822__auto____559019 = goog.isString(k);
if(and__3822__auto____559019)
{return !((cljs.core.scan_array.call(null,1,k,this__559018.keys) == null));
} else
{return and__3822__auto____559019;
}
})())
{var new_keys__559020 = this__559018.keys.slice();
var new_strobj__559021 = cljs.core.obj_clone.call(null,this__559018.strobj,this__559018.keys);
new_keys__559020.splice(cljs.core.scan_array.call(null,1,k,new_keys__559020),1);
cljs.core.js_delete.call(null,new_strobj__559021,k);
return (new cljs.core.ObjMap(this__559018.meta,new_keys__559020,new_strobj__559021,(this__559018.update_count + 1),null));
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
var this__559026 = this;
var h__2203__auto____559027 = this__559026.__hash;
if(!((h__2203__auto____559027 == null)))
{return h__2203__auto____559027;
} else
{var h__2203__auto____559028 = cljs.core.hash_imap.call(null,coll);
this__559026.__hash = h__2203__auto____559028;
return h__2203__auto____559028;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__559029 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__559030 = this;
var bucket__559031 = (this__559030.hashobj[cljs.core.hash.call(null,k)]);
var i__559032 = (cljs.core.truth_(bucket__559031)?cljs.core.scan_array.call(null,2,k,bucket__559031):null);
if(cljs.core.truth_(i__559032))
{return (bucket__559031[(i__559032 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__559033 = this;
var h__559034 = cljs.core.hash.call(null,k);
var bucket__559035 = (this__559033.hashobj[h__559034]);
if(cljs.core.truth_(bucket__559035))
{var new_bucket__559036 = bucket__559035.slice();
var new_hashobj__559037 = goog.object.clone(this__559033.hashobj);
(new_hashobj__559037[h__559034] = new_bucket__559036);
var temp__3971__auto____559038 = cljs.core.scan_array.call(null,2,k,new_bucket__559036);
if(cljs.core.truth_(temp__3971__auto____559038))
{var i__559039 = temp__3971__auto____559038;
(new_bucket__559036[(i__559039 + 1)] = v);
return (new cljs.core.HashMap(this__559033.meta,this__559033.count,new_hashobj__559037,null));
} else
{new_bucket__559036.push(k,v);
return (new cljs.core.HashMap(this__559033.meta,(this__559033.count + 1),new_hashobj__559037,null));
}
} else
{var new_hashobj__559040 = goog.object.clone(this__559033.hashobj);
(new_hashobj__559040[h__559034] = [k,v]);
return (new cljs.core.HashMap(this__559033.meta,(this__559033.count + 1),new_hashobj__559040,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__559041 = this;
var bucket__559042 = (this__559041.hashobj[cljs.core.hash.call(null,k)]);
var i__559043 = (cljs.core.truth_(bucket__559042)?cljs.core.scan_array.call(null,2,k,bucket__559042):null);
if(cljs.core.truth_(i__559043))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__559068 = null;
var G__559068__2 = (function (this_sym559044,k){
var this__559046 = this;
var this_sym559044__559047 = this;
var coll__559048 = this_sym559044__559047;
return coll__559048.cljs$core$ILookup$_lookup$arity$2(coll__559048,k);
});
var G__559068__3 = (function (this_sym559045,k,not_found){
var this__559046 = this;
var this_sym559045__559049 = this;
var coll__559050 = this_sym559045__559049;
return coll__559050.cljs$core$ILookup$_lookup$arity$3(coll__559050,k,not_found);
});
G__559068 = function(this_sym559045,k,not_found){
switch(arguments.length){
case 2:
return G__559068__2.call(this,this_sym559045,k);
case 3:
return G__559068__3.call(this,this_sym559045,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__559068;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym559024,args559025){
var this__559051 = this;
return this_sym559024.call.apply(this_sym559024,[this_sym559024].concat(args559025.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__559052 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__559053 = this;
var this__559054 = this;
return cljs.core.pr_str.call(null,this__559054);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__559055 = this;
if((this__559055.count > 0))
{var hashes__559056 = cljs.core.js_keys.call(null,this__559055.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__559023_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__559055.hashobj[p1__559023_SHARP_])));
}),hashes__559056);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__559057 = this;
return this__559057.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__559058 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__559059 = this;
return (new cljs.core.HashMap(meta,this__559059.count,this__559059.hashobj,this__559059.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__559060 = this;
return this__559060.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__559061 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__559061.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__559062 = this;
var h__559063 = cljs.core.hash.call(null,k);
var bucket__559064 = (this__559062.hashobj[h__559063]);
var i__559065 = (cljs.core.truth_(bucket__559064)?cljs.core.scan_array.call(null,2,k,bucket__559064):null);
if(cljs.core.not.call(null,i__559065))
{return coll;
} else
{var new_hashobj__559066 = goog.object.clone(this__559062.hashobj);
if((3 > bucket__559064.length))
{cljs.core.js_delete.call(null,new_hashobj__559066,h__559063);
} else
{var new_bucket__559067 = bucket__559064.slice();
new_bucket__559067.splice(i__559065,2);
(new_hashobj__559066[h__559063] = new_bucket__559067);
}
return (new cljs.core.HashMap(this__559062.meta,(this__559062.count - 1),new_hashobj__559066,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__559069 = ks.length;
var i__559070 = 0;
var out__559071 = cljs.core.HashMap.EMPTY;
while(true){
if((i__559070 < len__559069))
{{
var G__559072 = (i__559070 + 1);
var G__559073 = cljs.core.assoc.call(null,out__559071,(ks[i__559070]),(vs[i__559070]));
i__559070 = G__559072;
out__559071 = G__559073;
continue;
}
} else
{return out__559071;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__559077 = m.arr;
var len__559078 = arr__559077.length;
var i__559079 = 0;
while(true){
if((len__559078 <= i__559079))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__559077[i__559079]),k))
{return i__559079;
} else
{if("\uFDD0'else")
{{
var G__559080 = (i__559079 + 2);
i__559079 = G__559080;
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
var this__559083 = this;
return (new cljs.core.TransientArrayMap({},this__559083.arr.length,this__559083.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__559084 = this;
var h__2203__auto____559085 = this__559084.__hash;
if(!((h__2203__auto____559085 == null)))
{return h__2203__auto____559085;
} else
{var h__2203__auto____559086 = cljs.core.hash_imap.call(null,coll);
this__559084.__hash = h__2203__auto____559086;
return h__2203__auto____559086;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__559087 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__559088 = this;
var idx__559089 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__559089 === -1))
{return not_found;
} else
{return (this__559088.arr[(idx__559089 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__559090 = this;
var idx__559091 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__559091 === -1))
{if((this__559090.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__559090.meta,(this__559090.cnt + 1),(function (){var G__559092__559093 = this__559090.arr.slice();
G__559092__559093.push(k);
G__559092__559093.push(v);
return G__559092__559093;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__559090.arr[(idx__559091 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__559090.meta,this__559090.cnt,(function (){var G__559094__559095 = this__559090.arr.slice();
(G__559094__559095[(idx__559091 + 1)] = v);
return G__559094__559095;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__559096 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__559128 = null;
var G__559128__2 = (function (this_sym559097,k){
var this__559099 = this;
var this_sym559097__559100 = this;
var coll__559101 = this_sym559097__559100;
return coll__559101.cljs$core$ILookup$_lookup$arity$2(coll__559101,k);
});
var G__559128__3 = (function (this_sym559098,k,not_found){
var this__559099 = this;
var this_sym559098__559102 = this;
var coll__559103 = this_sym559098__559102;
return coll__559103.cljs$core$ILookup$_lookup$arity$3(coll__559103,k,not_found);
});
G__559128 = function(this_sym559098,k,not_found){
switch(arguments.length){
case 2:
return G__559128__2.call(this,this_sym559098,k);
case 3:
return G__559128__3.call(this,this_sym559098,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__559128;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym559081,args559082){
var this__559104 = this;
return this_sym559081.call.apply(this_sym559081,[this_sym559081].concat(args559082.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__559105 = this;
var len__559106 = this__559105.arr.length;
var i__559107 = 0;
var init__559108 = init;
while(true){
if((i__559107 < len__559106))
{var init__559109 = f.call(null,init__559108,(this__559105.arr[i__559107]),(this__559105.arr[(i__559107 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__559109))
{return cljs.core.deref.call(null,init__559109);
} else
{{
var G__559129 = (i__559107 + 2);
var G__559130 = init__559109;
i__559107 = G__559129;
init__559108 = G__559130;
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
var this__559110 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__559111 = this;
var this__559112 = this;
return cljs.core.pr_str.call(null,this__559112);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__559113 = this;
if((this__559113.cnt > 0))
{var len__559114 = this__559113.arr.length;
var array_map_seq__559115 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__559114))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__559113.arr[i]),(this__559113.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__559115.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__559116 = this;
return this__559116.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__559117 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__559118 = this;
return (new cljs.core.PersistentArrayMap(meta,this__559118.cnt,this__559118.arr,this__559118.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__559119 = this;
return this__559119.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__559120 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__559120.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__559121 = this;
var idx__559122 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__559122 >= 0))
{var len__559123 = this__559121.arr.length;
var new_len__559124 = (len__559123 - 2);
if((new_len__559124 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__559125 = cljs.core.make_array.call(null,new_len__559124);
var s__559126 = 0;
var d__559127 = 0;
while(true){
if((s__559126 >= len__559123))
{return (new cljs.core.PersistentArrayMap(this__559121.meta,(this__559121.cnt - 1),new_arr__559125,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__559121.arr[s__559126])))
{{
var G__559131 = (s__559126 + 2);
var G__559132 = d__559127;
s__559126 = G__559131;
d__559127 = G__559132;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__559125[d__559127] = (this__559121.arr[s__559126]));
(new_arr__559125[(d__559127 + 1)] = (this__559121.arr[(s__559126 + 1)]));
{
var G__559133 = (s__559126 + 2);
var G__559134 = (d__559127 + 2);
s__559126 = G__559133;
d__559127 = G__559134;
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
var len__559135 = cljs.core.count.call(null,ks);
var i__559136 = 0;
var out__559137 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__559136 < len__559135))
{{
var G__559138 = (i__559136 + 1);
var G__559139 = cljs.core.assoc_BANG_.call(null,out__559137,(ks[i__559136]),(vs[i__559136]));
i__559136 = G__559138;
out__559137 = G__559139;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__559137);
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
var this__559140 = this;
if(cljs.core.truth_(this__559140.editable_QMARK_))
{var idx__559141 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__559141 >= 0))
{(this__559140.arr[idx__559141] = (this__559140.arr[(this__559140.len - 2)]));
(this__559140.arr[(idx__559141 + 1)] = (this__559140.arr[(this__559140.len - 1)]));
var G__559142__559143 = this__559140.arr;
G__559142__559143.pop();
G__559142__559143.pop();
G__559142__559143;
this__559140.len = (this__559140.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__559144 = this;
if(cljs.core.truth_(this__559144.editable_QMARK_))
{var idx__559145 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__559145 === -1))
{if(((this__559144.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__559144.len = (this__559144.len + 2);
this__559144.arr.push(key);
this__559144.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__559144.len,this__559144.arr),key,val);
}
} else
{if((val === (this__559144.arr[(idx__559145 + 1)])))
{return tcoll;
} else
{(this__559144.arr[(idx__559145 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__559146 = this;
if(cljs.core.truth_(this__559146.editable_QMARK_))
{if((function (){var G__559147__559148 = o;
if(G__559147__559148)
{if((function (){var or__3824__auto____559149 = (G__559147__559148.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____559149)
{return or__3824__auto____559149;
} else
{return G__559147__559148.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__559147__559148.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__559147__559148);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__559147__559148);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__559150 = cljs.core.seq.call(null,o);
var tcoll__559151 = tcoll;
while(true){
var temp__3971__auto____559152 = cljs.core.first.call(null,es__559150);
if(cljs.core.truth_(temp__3971__auto____559152))
{var e__559153 = temp__3971__auto____559152;
{
var G__559159 = cljs.core.next.call(null,es__559150);
var G__559160 = tcoll__559151.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__559151,cljs.core.key.call(null,e__559153),cljs.core.val.call(null,e__559153));
es__559150 = G__559159;
tcoll__559151 = G__559160;
continue;
}
} else
{return tcoll__559151;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__559154 = this;
if(cljs.core.truth_(this__559154.editable_QMARK_))
{this__559154.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__559154.len,2),this__559154.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__559155 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__559156 = this;
if(cljs.core.truth_(this__559156.editable_QMARK_))
{var idx__559157 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__559157 === -1))
{return not_found;
} else
{return (this__559156.arr[(idx__559157 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__559158 = this;
if(cljs.core.truth_(this__559158.editable_QMARK_))
{return cljs.core.quot.call(null,this__559158.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__559163 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__559164 = 0;
while(true){
if((i__559164 < len))
{{
var G__559165 = cljs.core.assoc_BANG_.call(null,out__559163,(arr[i__559164]),(arr[(i__559164 + 1)]));
var G__559166 = (i__559164 + 2);
out__559163 = G__559165;
i__559164 = G__559166;
continue;
}
} else
{return out__559163;
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
var G__559171__559172 = arr.slice();
(G__559171__559172[i] = a);
return G__559171__559172;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__559173__559174 = arr.slice();
(G__559173__559174[i] = a);
(G__559173__559174[j] = b);
return G__559173__559174;
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
var new_arr__559176 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__559176,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__559176,(2 * i),(new_arr__559176.length - (2 * i)));
return new_arr__559176;
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
var editable__559179 = inode.ensure_editable(edit);
(editable__559179.arr[i] = a);
return editable__559179;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__559180 = inode.ensure_editable(edit);
(editable__559180.arr[i] = a);
(editable__559180.arr[j] = b);
return editable__559180;
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
var len__559187 = arr.length;
var i__559188 = 0;
var init__559189 = init;
while(true){
if((i__559188 < len__559187))
{var init__559192 = (function (){var k__559190 = (arr[i__559188]);
if(!((k__559190 == null)))
{return f.call(null,init__559189,k__559190,(arr[(i__559188 + 1)]));
} else
{var node__559191 = (arr[(i__559188 + 1)]);
if(!((node__559191 == null)))
{return node__559191.kv_reduce(f,init__559189);
} else
{return init__559189;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__559192))
{return cljs.core.deref.call(null,init__559192);
} else
{{
var G__559193 = (i__559188 + 2);
var G__559194 = init__559192;
i__559188 = G__559193;
init__559189 = G__559194;
continue;
}
}
} else
{return init__559189;
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
var this__559195 = this;
var inode__559196 = this;
if((this__559195.bitmap === bit))
{return null;
} else
{var editable__559197 = inode__559196.ensure_editable(e);
var earr__559198 = editable__559197.arr;
var len__559199 = earr__559198.length;
editable__559197.bitmap = (bit ^ editable__559197.bitmap);
cljs.core.array_copy.call(null,earr__559198,(2 * (i + 1)),earr__559198,(2 * i),(len__559199 - (2 * (i + 1))));
(earr__559198[(len__559199 - 2)] = null);
(earr__559198[(len__559199 - 1)] = null);
return editable__559197;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__559200 = this;
var inode__559201 = this;
var bit__559202 = (1 << ((hash >>> shift) & 0x01f));
var idx__559203 = cljs.core.bitmap_indexed_node_index.call(null,this__559200.bitmap,bit__559202);
if(((this__559200.bitmap & bit__559202) === 0))
{var n__559204 = cljs.core.bit_count.call(null,this__559200.bitmap);
if(((2 * n__559204) < this__559200.arr.length))
{var editable__559205 = inode__559201.ensure_editable(edit);
var earr__559206 = editable__559205.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__559206,(2 * idx__559203),earr__559206,(2 * (idx__559203 + 1)),(2 * (n__559204 - idx__559203)));
(earr__559206[(2 * idx__559203)] = key);
(earr__559206[((2 * idx__559203) + 1)] = val);
editable__559205.bitmap = (editable__559205.bitmap | bit__559202);
return editable__559205;
} else
{if((n__559204 >= 16))
{var nodes__559207 = cljs.core.make_array.call(null,32);
var jdx__559208 = ((hash >>> shift) & 0x01f);
(nodes__559207[jdx__559208] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__559209 = 0;
var j__559210 = 0;
while(true){
if((i__559209 < 32))
{if((((this__559200.bitmap >>> i__559209) & 1) === 0))
{{
var G__559263 = (i__559209 + 1);
var G__559264 = j__559210;
i__559209 = G__559263;
j__559210 = G__559264;
continue;
}
} else
{(nodes__559207[i__559209] = ((!(((this__559200.arr[j__559210]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__559200.arr[j__559210])),(this__559200.arr[j__559210]),(this__559200.arr[(j__559210 + 1)]),added_leaf_QMARK_):(this__559200.arr[(j__559210 + 1)])));
{
var G__559265 = (i__559209 + 1);
var G__559266 = (j__559210 + 2);
i__559209 = G__559265;
j__559210 = G__559266;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__559204 + 1),nodes__559207));
} else
{if("\uFDD0'else")
{var new_arr__559211 = cljs.core.make_array.call(null,(2 * (n__559204 + 4)));
cljs.core.array_copy.call(null,this__559200.arr,0,new_arr__559211,0,(2 * idx__559203));
(new_arr__559211[(2 * idx__559203)] = key);
(new_arr__559211[((2 * idx__559203) + 1)] = val);
cljs.core.array_copy.call(null,this__559200.arr,(2 * idx__559203),new_arr__559211,(2 * (idx__559203 + 1)),(2 * (n__559204 - idx__559203)));
added_leaf_QMARK_.val = true;
var editable__559212 = inode__559201.ensure_editable(edit);
editable__559212.arr = new_arr__559211;
editable__559212.bitmap = (editable__559212.bitmap | bit__559202);
return editable__559212;
} else
{return null;
}
}
}
} else
{var key_or_nil__559213 = (this__559200.arr[(2 * idx__559203)]);
var val_or_node__559214 = (this__559200.arr[((2 * idx__559203) + 1)]);
if((key_or_nil__559213 == null))
{var n__559215 = val_or_node__559214.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__559215 === val_or_node__559214))
{return inode__559201;
} else
{return cljs.core.edit_and_set.call(null,inode__559201,edit,((2 * idx__559203) + 1),n__559215);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__559213))
{if((val === val_or_node__559214))
{return inode__559201;
} else
{return cljs.core.edit_and_set.call(null,inode__559201,edit,((2 * idx__559203) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__559201,edit,(2 * idx__559203),null,((2 * idx__559203) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__559213,val_or_node__559214,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__559216 = this;
var inode__559217 = this;
return cljs.core.create_inode_seq.call(null,this__559216.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__559218 = this;
var inode__559219 = this;
var bit__559220 = (1 << ((hash >>> shift) & 0x01f));
if(((this__559218.bitmap & bit__559220) === 0))
{return inode__559219;
} else
{var idx__559221 = cljs.core.bitmap_indexed_node_index.call(null,this__559218.bitmap,bit__559220);
var key_or_nil__559222 = (this__559218.arr[(2 * idx__559221)]);
var val_or_node__559223 = (this__559218.arr[((2 * idx__559221) + 1)]);
if((key_or_nil__559222 == null))
{var n__559224 = val_or_node__559223.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__559224 === val_or_node__559223))
{return inode__559219;
} else
{if(!((n__559224 == null)))
{return cljs.core.edit_and_set.call(null,inode__559219,edit,((2 * idx__559221) + 1),n__559224);
} else
{if((this__559218.bitmap === bit__559220))
{return null;
} else
{if("\uFDD0'else")
{return inode__559219.edit_and_remove_pair(edit,bit__559220,idx__559221);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__559222))
{(removed_leaf_QMARK_[0] = true);
return inode__559219.edit_and_remove_pair(edit,bit__559220,idx__559221);
} else
{if("\uFDD0'else")
{return inode__559219;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__559225 = this;
var inode__559226 = this;
if((e === this__559225.edit))
{return inode__559226;
} else
{var n__559227 = cljs.core.bit_count.call(null,this__559225.bitmap);
var new_arr__559228 = cljs.core.make_array.call(null,(((n__559227 < 0))?4:(2 * (n__559227 + 1))));
cljs.core.array_copy.call(null,this__559225.arr,0,new_arr__559228,0,(2 * n__559227));
return (new cljs.core.BitmapIndexedNode(e,this__559225.bitmap,new_arr__559228));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__559229 = this;
var inode__559230 = this;
return cljs.core.inode_kv_reduce.call(null,this__559229.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__559231 = this;
var inode__559232 = this;
var bit__559233 = (1 << ((hash >>> shift) & 0x01f));
if(((this__559231.bitmap & bit__559233) === 0))
{return not_found;
} else
{var idx__559234 = cljs.core.bitmap_indexed_node_index.call(null,this__559231.bitmap,bit__559233);
var key_or_nil__559235 = (this__559231.arr[(2 * idx__559234)]);
var val_or_node__559236 = (this__559231.arr[((2 * idx__559234) + 1)]);
if((key_or_nil__559235 == null))
{return val_or_node__559236.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__559235))
{return cljs.core.PersistentVector.fromArray([key_or_nil__559235,val_or_node__559236], true);
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
var this__559237 = this;
var inode__559238 = this;
var bit__559239 = (1 << ((hash >>> shift) & 0x01f));
if(((this__559237.bitmap & bit__559239) === 0))
{return inode__559238;
} else
{var idx__559240 = cljs.core.bitmap_indexed_node_index.call(null,this__559237.bitmap,bit__559239);
var key_or_nil__559241 = (this__559237.arr[(2 * idx__559240)]);
var val_or_node__559242 = (this__559237.arr[((2 * idx__559240) + 1)]);
if((key_or_nil__559241 == null))
{var n__559243 = val_or_node__559242.inode_without((shift + 5),hash,key);
if((n__559243 === val_or_node__559242))
{return inode__559238;
} else
{if(!((n__559243 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__559237.bitmap,cljs.core.clone_and_set.call(null,this__559237.arr,((2 * idx__559240) + 1),n__559243)));
} else
{if((this__559237.bitmap === bit__559239))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__559237.bitmap ^ bit__559239),cljs.core.remove_pair.call(null,this__559237.arr,idx__559240)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__559241))
{return (new cljs.core.BitmapIndexedNode(null,(this__559237.bitmap ^ bit__559239),cljs.core.remove_pair.call(null,this__559237.arr,idx__559240)));
} else
{if("\uFDD0'else")
{return inode__559238;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__559244 = this;
var inode__559245 = this;
var bit__559246 = (1 << ((hash >>> shift) & 0x01f));
var idx__559247 = cljs.core.bitmap_indexed_node_index.call(null,this__559244.bitmap,bit__559246);
if(((this__559244.bitmap & bit__559246) === 0))
{var n__559248 = cljs.core.bit_count.call(null,this__559244.bitmap);
if((n__559248 >= 16))
{var nodes__559249 = cljs.core.make_array.call(null,32);
var jdx__559250 = ((hash >>> shift) & 0x01f);
(nodes__559249[jdx__559250] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__559251 = 0;
var j__559252 = 0;
while(true){
if((i__559251 < 32))
{if((((this__559244.bitmap >>> i__559251) & 1) === 0))
{{
var G__559267 = (i__559251 + 1);
var G__559268 = j__559252;
i__559251 = G__559267;
j__559252 = G__559268;
continue;
}
} else
{(nodes__559249[i__559251] = ((!(((this__559244.arr[j__559252]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__559244.arr[j__559252])),(this__559244.arr[j__559252]),(this__559244.arr[(j__559252 + 1)]),added_leaf_QMARK_):(this__559244.arr[(j__559252 + 1)])));
{
var G__559269 = (i__559251 + 1);
var G__559270 = (j__559252 + 2);
i__559251 = G__559269;
j__559252 = G__559270;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__559248 + 1),nodes__559249));
} else
{var new_arr__559253 = cljs.core.make_array.call(null,(2 * (n__559248 + 1)));
cljs.core.array_copy.call(null,this__559244.arr,0,new_arr__559253,0,(2 * idx__559247));
(new_arr__559253[(2 * idx__559247)] = key);
(new_arr__559253[((2 * idx__559247) + 1)] = val);
cljs.core.array_copy.call(null,this__559244.arr,(2 * idx__559247),new_arr__559253,(2 * (idx__559247 + 1)),(2 * (n__559248 - idx__559247)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__559244.bitmap | bit__559246),new_arr__559253));
}
} else
{var key_or_nil__559254 = (this__559244.arr[(2 * idx__559247)]);
var val_or_node__559255 = (this__559244.arr[((2 * idx__559247) + 1)]);
if((key_or_nil__559254 == null))
{var n__559256 = val_or_node__559255.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__559256 === val_or_node__559255))
{return inode__559245;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__559244.bitmap,cljs.core.clone_and_set.call(null,this__559244.arr,((2 * idx__559247) + 1),n__559256)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__559254))
{if((val === val_or_node__559255))
{return inode__559245;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__559244.bitmap,cljs.core.clone_and_set.call(null,this__559244.arr,((2 * idx__559247) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__559244.bitmap,cljs.core.clone_and_set.call(null,this__559244.arr,(2 * idx__559247),null,((2 * idx__559247) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__559254,val_or_node__559255,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__559257 = this;
var inode__559258 = this;
var bit__559259 = (1 << ((hash >>> shift) & 0x01f));
if(((this__559257.bitmap & bit__559259) === 0))
{return not_found;
} else
{var idx__559260 = cljs.core.bitmap_indexed_node_index.call(null,this__559257.bitmap,bit__559259);
var key_or_nil__559261 = (this__559257.arr[(2 * idx__559260)]);
var val_or_node__559262 = (this__559257.arr[((2 * idx__559260) + 1)]);
if((key_or_nil__559261 == null))
{return val_or_node__559262.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__559261))
{return val_or_node__559262;
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
var arr__559278 = array_node.arr;
var len__559279 = (2 * (array_node.cnt - 1));
var new_arr__559280 = cljs.core.make_array.call(null,len__559279);
var i__559281 = 0;
var j__559282 = 1;
var bitmap__559283 = 0;
while(true){
if((i__559281 < len__559279))
{if((function (){var and__3822__auto____559284 = !((i__559281 === idx));
if(and__3822__auto____559284)
{return !(((arr__559278[i__559281]) == null));
} else
{return and__3822__auto____559284;
}
})())
{(new_arr__559280[j__559282] = (arr__559278[i__559281]));
{
var G__559285 = (i__559281 + 1);
var G__559286 = (j__559282 + 2);
var G__559287 = (bitmap__559283 | (1 << i__559281));
i__559281 = G__559285;
j__559282 = G__559286;
bitmap__559283 = G__559287;
continue;
}
} else
{{
var G__559288 = (i__559281 + 1);
var G__559289 = j__559282;
var G__559290 = bitmap__559283;
i__559281 = G__559288;
j__559282 = G__559289;
bitmap__559283 = G__559290;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__559283,new_arr__559280));
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
var this__559291 = this;
var inode__559292 = this;
var idx__559293 = ((hash >>> shift) & 0x01f);
var node__559294 = (this__559291.arr[idx__559293]);
if((node__559294 == null))
{var editable__559295 = cljs.core.edit_and_set.call(null,inode__559292,edit,idx__559293,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__559295.cnt = (editable__559295.cnt + 1);
return editable__559295;
} else
{var n__559296 = node__559294.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__559296 === node__559294))
{return inode__559292;
} else
{return cljs.core.edit_and_set.call(null,inode__559292,edit,idx__559293,n__559296);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__559297 = this;
var inode__559298 = this;
return cljs.core.create_array_node_seq.call(null,this__559297.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__559299 = this;
var inode__559300 = this;
var idx__559301 = ((hash >>> shift) & 0x01f);
var node__559302 = (this__559299.arr[idx__559301]);
if((node__559302 == null))
{return inode__559300;
} else
{var n__559303 = node__559302.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__559303 === node__559302))
{return inode__559300;
} else
{if((n__559303 == null))
{if((this__559299.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__559300,edit,idx__559301);
} else
{var editable__559304 = cljs.core.edit_and_set.call(null,inode__559300,edit,idx__559301,n__559303);
editable__559304.cnt = (editable__559304.cnt - 1);
return editable__559304;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__559300,edit,idx__559301,n__559303);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__559305 = this;
var inode__559306 = this;
if((e === this__559305.edit))
{return inode__559306;
} else
{return (new cljs.core.ArrayNode(e,this__559305.cnt,this__559305.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__559307 = this;
var inode__559308 = this;
var len__559309 = this__559307.arr.length;
var i__559310 = 0;
var init__559311 = init;
while(true){
if((i__559310 < len__559309))
{var node__559312 = (this__559307.arr[i__559310]);
if(!((node__559312 == null)))
{var init__559313 = node__559312.kv_reduce(f,init__559311);
if(cljs.core.reduced_QMARK_.call(null,init__559313))
{return cljs.core.deref.call(null,init__559313);
} else
{{
var G__559332 = (i__559310 + 1);
var G__559333 = init__559313;
i__559310 = G__559332;
init__559311 = G__559333;
continue;
}
}
} else
{return null;
}
} else
{return init__559311;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__559314 = this;
var inode__559315 = this;
var idx__559316 = ((hash >>> shift) & 0x01f);
var node__559317 = (this__559314.arr[idx__559316]);
if(!((node__559317 == null)))
{return node__559317.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__559318 = this;
var inode__559319 = this;
var idx__559320 = ((hash >>> shift) & 0x01f);
var node__559321 = (this__559318.arr[idx__559320]);
if(!((node__559321 == null)))
{var n__559322 = node__559321.inode_without((shift + 5),hash,key);
if((n__559322 === node__559321))
{return inode__559319;
} else
{if((n__559322 == null))
{if((this__559318.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__559319,null,idx__559320);
} else
{return (new cljs.core.ArrayNode(null,(this__559318.cnt - 1),cljs.core.clone_and_set.call(null,this__559318.arr,idx__559320,n__559322)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__559318.cnt,cljs.core.clone_and_set.call(null,this__559318.arr,idx__559320,n__559322)));
} else
{return null;
}
}
}
} else
{return inode__559319;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__559323 = this;
var inode__559324 = this;
var idx__559325 = ((hash >>> shift) & 0x01f);
var node__559326 = (this__559323.arr[idx__559325]);
if((node__559326 == null))
{return (new cljs.core.ArrayNode(null,(this__559323.cnt + 1),cljs.core.clone_and_set.call(null,this__559323.arr,idx__559325,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__559327 = node__559326.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__559327 === node__559326))
{return inode__559324;
} else
{return (new cljs.core.ArrayNode(null,this__559323.cnt,cljs.core.clone_and_set.call(null,this__559323.arr,idx__559325,n__559327)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__559328 = this;
var inode__559329 = this;
var idx__559330 = ((hash >>> shift) & 0x01f);
var node__559331 = (this__559328.arr[idx__559330]);
if(!((node__559331 == null)))
{return node__559331.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__559336 = (2 * cnt);
var i__559337 = 0;
while(true){
if((i__559337 < lim__559336))
{if(cljs.core.key_test.call(null,key,(arr[i__559337])))
{return i__559337;
} else
{{
var G__559338 = (i__559337 + 2);
i__559337 = G__559338;
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
var this__559339 = this;
var inode__559340 = this;
if((hash === this__559339.collision_hash))
{var idx__559341 = cljs.core.hash_collision_node_find_index.call(null,this__559339.arr,this__559339.cnt,key);
if((idx__559341 === -1))
{if((this__559339.arr.length > (2 * this__559339.cnt)))
{var editable__559342 = cljs.core.edit_and_set.call(null,inode__559340,edit,(2 * this__559339.cnt),key,((2 * this__559339.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__559342.cnt = (editable__559342.cnt + 1);
return editable__559342;
} else
{var len__559343 = this__559339.arr.length;
var new_arr__559344 = cljs.core.make_array.call(null,(len__559343 + 2));
cljs.core.array_copy.call(null,this__559339.arr,0,new_arr__559344,0,len__559343);
(new_arr__559344[len__559343] = key);
(new_arr__559344[(len__559343 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__559340.ensure_editable_array(edit,(this__559339.cnt + 1),new_arr__559344);
}
} else
{if(((this__559339.arr[(idx__559341 + 1)]) === val))
{return inode__559340;
} else
{return cljs.core.edit_and_set.call(null,inode__559340,edit,(idx__559341 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__559339.collision_hash >>> shift) & 0x01f)),[null,inode__559340,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__559345 = this;
var inode__559346 = this;
return cljs.core.create_inode_seq.call(null,this__559345.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__559347 = this;
var inode__559348 = this;
var idx__559349 = cljs.core.hash_collision_node_find_index.call(null,this__559347.arr,this__559347.cnt,key);
if((idx__559349 === -1))
{return inode__559348;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__559347.cnt === 1))
{return null;
} else
{var editable__559350 = inode__559348.ensure_editable(edit);
var earr__559351 = editable__559350.arr;
(earr__559351[idx__559349] = (earr__559351[((2 * this__559347.cnt) - 2)]));
(earr__559351[(idx__559349 + 1)] = (earr__559351[((2 * this__559347.cnt) - 1)]));
(earr__559351[((2 * this__559347.cnt) - 1)] = null);
(earr__559351[((2 * this__559347.cnt) - 2)] = null);
editable__559350.cnt = (editable__559350.cnt - 1);
return editable__559350;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__559352 = this;
var inode__559353 = this;
if((e === this__559352.edit))
{return inode__559353;
} else
{var new_arr__559354 = cljs.core.make_array.call(null,(2 * (this__559352.cnt + 1)));
cljs.core.array_copy.call(null,this__559352.arr,0,new_arr__559354,0,(2 * this__559352.cnt));
return (new cljs.core.HashCollisionNode(e,this__559352.collision_hash,this__559352.cnt,new_arr__559354));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__559355 = this;
var inode__559356 = this;
return cljs.core.inode_kv_reduce.call(null,this__559355.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__559357 = this;
var inode__559358 = this;
var idx__559359 = cljs.core.hash_collision_node_find_index.call(null,this__559357.arr,this__559357.cnt,key);
if((idx__559359 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__559357.arr[idx__559359])))
{return cljs.core.PersistentVector.fromArray([(this__559357.arr[idx__559359]),(this__559357.arr[(idx__559359 + 1)])], true);
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
var this__559360 = this;
var inode__559361 = this;
var idx__559362 = cljs.core.hash_collision_node_find_index.call(null,this__559360.arr,this__559360.cnt,key);
if((idx__559362 === -1))
{return inode__559361;
} else
{if((this__559360.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__559360.collision_hash,(this__559360.cnt - 1),cljs.core.remove_pair.call(null,this__559360.arr,cljs.core.quot.call(null,idx__559362,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__559363 = this;
var inode__559364 = this;
if((hash === this__559363.collision_hash))
{var idx__559365 = cljs.core.hash_collision_node_find_index.call(null,this__559363.arr,this__559363.cnt,key);
if((idx__559365 === -1))
{var len__559366 = this__559363.arr.length;
var new_arr__559367 = cljs.core.make_array.call(null,(len__559366 + 2));
cljs.core.array_copy.call(null,this__559363.arr,0,new_arr__559367,0,len__559366);
(new_arr__559367[len__559366] = key);
(new_arr__559367[(len__559366 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__559363.collision_hash,(this__559363.cnt + 1),new_arr__559367));
} else
{if(cljs.core._EQ_.call(null,(this__559363.arr[idx__559365]),val))
{return inode__559364;
} else
{return (new cljs.core.HashCollisionNode(null,this__559363.collision_hash,this__559363.cnt,cljs.core.clone_and_set.call(null,this__559363.arr,(idx__559365 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__559363.collision_hash >>> shift) & 0x01f)),[null,inode__559364])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__559368 = this;
var inode__559369 = this;
var idx__559370 = cljs.core.hash_collision_node_find_index.call(null,this__559368.arr,this__559368.cnt,key);
if((idx__559370 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__559368.arr[idx__559370])))
{return (this__559368.arr[(idx__559370 + 1)]);
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
var this__559371 = this;
var inode__559372 = this;
if((e === this__559371.edit))
{this__559371.arr = array;
this__559371.cnt = count;
return inode__559372;
} else
{return (new cljs.core.HashCollisionNode(this__559371.edit,this__559371.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__559377 = cljs.core.hash.call(null,key1);
if((key1hash__559377 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__559377,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___559378 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__559377,key1,val1,added_leaf_QMARK___559378).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___559378);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__559379 = cljs.core.hash.call(null,key1);
if((key1hash__559379 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__559379,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___559380 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__559379,key1,val1,added_leaf_QMARK___559380).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___559380);
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
var this__559381 = this;
var h__2203__auto____559382 = this__559381.__hash;
if(!((h__2203__auto____559382 == null)))
{return h__2203__auto____559382;
} else
{var h__2203__auto____559383 = cljs.core.hash_coll.call(null,coll);
this__559381.__hash = h__2203__auto____559383;
return h__2203__auto____559383;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__559384 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__559385 = this;
var this__559386 = this;
return cljs.core.pr_str.call(null,this__559386);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__559387 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__559388 = this;
if((this__559388.s == null))
{return cljs.core.PersistentVector.fromArray([(this__559388.nodes[this__559388.i]),(this__559388.nodes[(this__559388.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__559388.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__559389 = this;
if((this__559389.s == null))
{return cljs.core.create_inode_seq.call(null,this__559389.nodes,(this__559389.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__559389.nodes,this__559389.i,cljs.core.next.call(null,this__559389.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__559390 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__559391 = this;
return (new cljs.core.NodeSeq(meta,this__559391.nodes,this__559391.i,this__559391.s,this__559391.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__559392 = this;
return this__559392.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__559393 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__559393.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__559400 = nodes.length;
var j__559401 = i;
while(true){
if((j__559401 < len__559400))
{if(!(((nodes[j__559401]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__559401,null,null));
} else
{var temp__3971__auto____559402 = (nodes[(j__559401 + 1)]);
if(cljs.core.truth_(temp__3971__auto____559402))
{var node__559403 = temp__3971__auto____559402;
var temp__3971__auto____559404 = node__559403.inode_seq();
if(cljs.core.truth_(temp__3971__auto____559404))
{var node_seq__559405 = temp__3971__auto____559404;
return (new cljs.core.NodeSeq(null,nodes,(j__559401 + 2),node_seq__559405,null));
} else
{{
var G__559406 = (j__559401 + 2);
j__559401 = G__559406;
continue;
}
}
} else
{{
var G__559407 = (j__559401 + 2);
j__559401 = G__559407;
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
var this__559408 = this;
var h__2203__auto____559409 = this__559408.__hash;
if(!((h__2203__auto____559409 == null)))
{return h__2203__auto____559409;
} else
{var h__2203__auto____559410 = cljs.core.hash_coll.call(null,coll);
this__559408.__hash = h__2203__auto____559410;
return h__2203__auto____559410;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__559411 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__559412 = this;
var this__559413 = this;
return cljs.core.pr_str.call(null,this__559413);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__559414 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__559415 = this;
return cljs.core.first.call(null,this__559415.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__559416 = this;
return cljs.core.create_array_node_seq.call(null,null,this__559416.nodes,this__559416.i,cljs.core.next.call(null,this__559416.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__559417 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__559418 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__559418.nodes,this__559418.i,this__559418.s,this__559418.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__559419 = this;
return this__559419.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__559420 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__559420.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__559427 = nodes.length;
var j__559428 = i;
while(true){
if((j__559428 < len__559427))
{var temp__3971__auto____559429 = (nodes[j__559428]);
if(cljs.core.truth_(temp__3971__auto____559429))
{var nj__559430 = temp__3971__auto____559429;
var temp__3971__auto____559431 = nj__559430.inode_seq();
if(cljs.core.truth_(temp__3971__auto____559431))
{var ns__559432 = temp__3971__auto____559431;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__559428 + 1),ns__559432,null));
} else
{{
var G__559433 = (j__559428 + 1);
j__559428 = G__559433;
continue;
}
}
} else
{{
var G__559434 = (j__559428 + 1);
j__559428 = G__559434;
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
var this__559437 = this;
return (new cljs.core.TransientHashMap({},this__559437.root,this__559437.cnt,this__559437.has_nil_QMARK_,this__559437.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__559438 = this;
var h__2203__auto____559439 = this__559438.__hash;
if(!((h__2203__auto____559439 == null)))
{return h__2203__auto____559439;
} else
{var h__2203__auto____559440 = cljs.core.hash_imap.call(null,coll);
this__559438.__hash = h__2203__auto____559440;
return h__2203__auto____559440;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__559441 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__559442 = this;
if((k == null))
{if(this__559442.has_nil_QMARK_)
{return this__559442.nil_val;
} else
{return not_found;
}
} else
{if((this__559442.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__559442.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__559443 = this;
if((k == null))
{if((function (){var and__3822__auto____559444 = this__559443.has_nil_QMARK_;
if(and__3822__auto____559444)
{return (v === this__559443.nil_val);
} else
{return and__3822__auto____559444;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__559443.meta,((this__559443.has_nil_QMARK_)?this__559443.cnt:(this__559443.cnt + 1)),this__559443.root,true,v,null));
}
} else
{var added_leaf_QMARK___559445 = (new cljs.core.Box(false));
var new_root__559446 = (((this__559443.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__559443.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___559445);
if((new_root__559446 === this__559443.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__559443.meta,((added_leaf_QMARK___559445.val)?(this__559443.cnt + 1):this__559443.cnt),new_root__559446,this__559443.has_nil_QMARK_,this__559443.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__559447 = this;
if((k == null))
{return this__559447.has_nil_QMARK_;
} else
{if((this__559447.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__559447.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__559470 = null;
var G__559470__2 = (function (this_sym559448,k){
var this__559450 = this;
var this_sym559448__559451 = this;
var coll__559452 = this_sym559448__559451;
return coll__559452.cljs$core$ILookup$_lookup$arity$2(coll__559452,k);
});
var G__559470__3 = (function (this_sym559449,k,not_found){
var this__559450 = this;
var this_sym559449__559453 = this;
var coll__559454 = this_sym559449__559453;
return coll__559454.cljs$core$ILookup$_lookup$arity$3(coll__559454,k,not_found);
});
G__559470 = function(this_sym559449,k,not_found){
switch(arguments.length){
case 2:
return G__559470__2.call(this,this_sym559449,k);
case 3:
return G__559470__3.call(this,this_sym559449,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__559470;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym559435,args559436){
var this__559455 = this;
return this_sym559435.call.apply(this_sym559435,[this_sym559435].concat(args559436.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__559456 = this;
var init__559457 = ((this__559456.has_nil_QMARK_)?f.call(null,init,null,this__559456.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__559457))
{return cljs.core.deref.call(null,init__559457);
} else
{if(!((this__559456.root == null)))
{return this__559456.root.kv_reduce(f,init__559457);
} else
{if("\uFDD0'else")
{return init__559457;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__559458 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__559459 = this;
var this__559460 = this;
return cljs.core.pr_str.call(null,this__559460);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__559461 = this;
if((this__559461.cnt > 0))
{var s__559462 = ((!((this__559461.root == null)))?this__559461.root.inode_seq():null);
if(this__559461.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__559461.nil_val], true),s__559462);
} else
{return s__559462;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__559463 = this;
return this__559463.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__559464 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__559465 = this;
return (new cljs.core.PersistentHashMap(meta,this__559465.cnt,this__559465.root,this__559465.has_nil_QMARK_,this__559465.nil_val,this__559465.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__559466 = this;
return this__559466.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__559467 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__559467.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__559468 = this;
if((k == null))
{if(this__559468.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__559468.meta,(this__559468.cnt - 1),this__559468.root,false,null,null));
} else
{return coll;
}
} else
{if((this__559468.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__559469 = this__559468.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__559469 === this__559468.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__559468.meta,(this__559468.cnt - 1),new_root__559469,this__559468.has_nil_QMARK_,this__559468.nil_val,null));
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
var len__559471 = ks.length;
var i__559472 = 0;
var out__559473 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__559472 < len__559471))
{{
var G__559474 = (i__559472 + 1);
var G__559475 = cljs.core.assoc_BANG_.call(null,out__559473,(ks[i__559472]),(vs[i__559472]));
i__559472 = G__559474;
out__559473 = G__559475;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__559473);
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
var this__559476 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__559477 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__559478 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__559479 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__559480 = this;
if((k == null))
{if(this__559480.has_nil_QMARK_)
{return this__559480.nil_val;
} else
{return null;
}
} else
{if((this__559480.root == null))
{return null;
} else
{return this__559480.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__559481 = this;
if((k == null))
{if(this__559481.has_nil_QMARK_)
{return this__559481.nil_val;
} else
{return not_found;
}
} else
{if((this__559481.root == null))
{return not_found;
} else
{return this__559481.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__559482 = this;
if(this__559482.edit)
{return this__559482.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__559483 = this;
var tcoll__559484 = this;
if(this__559483.edit)
{if((function (){var G__559485__559486 = o;
if(G__559485__559486)
{if((function (){var or__3824__auto____559487 = (G__559485__559486.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____559487)
{return or__3824__auto____559487;
} else
{return G__559485__559486.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__559485__559486.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__559485__559486);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__559485__559486);
}
})())
{return tcoll__559484.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__559488 = cljs.core.seq.call(null,o);
var tcoll__559489 = tcoll__559484;
while(true){
var temp__3971__auto____559490 = cljs.core.first.call(null,es__559488);
if(cljs.core.truth_(temp__3971__auto____559490))
{var e__559491 = temp__3971__auto____559490;
{
var G__559502 = cljs.core.next.call(null,es__559488);
var G__559503 = tcoll__559489.assoc_BANG_(cljs.core.key.call(null,e__559491),cljs.core.val.call(null,e__559491));
es__559488 = G__559502;
tcoll__559489 = G__559503;
continue;
}
} else
{return tcoll__559489;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__559492 = this;
var tcoll__559493 = this;
if(this__559492.edit)
{if((k == null))
{if((this__559492.nil_val === v))
{} else
{this__559492.nil_val = v;
}
if(this__559492.has_nil_QMARK_)
{} else
{this__559492.count = (this__559492.count + 1);
this__559492.has_nil_QMARK_ = true;
}
return tcoll__559493;
} else
{var added_leaf_QMARK___559494 = (new cljs.core.Box(false));
var node__559495 = (((this__559492.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__559492.root).inode_assoc_BANG_(this__559492.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___559494);
if((node__559495 === this__559492.root))
{} else
{this__559492.root = node__559495;
}
if(added_leaf_QMARK___559494.val)
{this__559492.count = (this__559492.count + 1);
} else
{}
return tcoll__559493;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__559496 = this;
var tcoll__559497 = this;
if(this__559496.edit)
{if((k == null))
{if(this__559496.has_nil_QMARK_)
{this__559496.has_nil_QMARK_ = false;
this__559496.nil_val = null;
this__559496.count = (this__559496.count - 1);
return tcoll__559497;
} else
{return tcoll__559497;
}
} else
{if((this__559496.root == null))
{return tcoll__559497;
} else
{var removed_leaf_QMARK___559498 = (new cljs.core.Box(false));
var node__559499 = this__559496.root.inode_without_BANG_(this__559496.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___559498);
if((node__559499 === this__559496.root))
{} else
{this__559496.root = node__559499;
}
if(cljs.core.truth_((removed_leaf_QMARK___559498[0])))
{this__559496.count = (this__559496.count - 1);
} else
{}
return tcoll__559497;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__559500 = this;
var tcoll__559501 = this;
if(this__559500.edit)
{this__559500.edit = null;
return (new cljs.core.PersistentHashMap(null,this__559500.count,this__559500.root,this__559500.has_nil_QMARK_,this__559500.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__559506 = node;
var stack__559507 = stack;
while(true){
if(!((t__559506 == null)))
{{
var G__559508 = ((ascending_QMARK_)?t__559506.left:t__559506.right);
var G__559509 = cljs.core.conj.call(null,stack__559507,t__559506);
t__559506 = G__559508;
stack__559507 = G__559509;
continue;
}
} else
{return stack__559507;
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
var this__559510 = this;
var h__2203__auto____559511 = this__559510.__hash;
if(!((h__2203__auto____559511 == null)))
{return h__2203__auto____559511;
} else
{var h__2203__auto____559512 = cljs.core.hash_coll.call(null,coll);
this__559510.__hash = h__2203__auto____559512;
return h__2203__auto____559512;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__559513 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__559514 = this;
var this__559515 = this;
return cljs.core.pr_str.call(null,this__559515);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__559516 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__559517 = this;
if((this__559517.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__559517.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__559518 = this;
return cljs.core.peek.call(null,this__559518.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__559519 = this;
var t__559520 = cljs.core.first.call(null,this__559519.stack);
var next_stack__559521 = cljs.core.tree_map_seq_push.call(null,((this__559519.ascending_QMARK_)?t__559520.right:t__559520.left),cljs.core.next.call(null,this__559519.stack),this__559519.ascending_QMARK_);
if(!((next_stack__559521 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__559521,this__559519.ascending_QMARK_,(this__559519.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__559522 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__559523 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__559523.stack,this__559523.ascending_QMARK_,this__559523.cnt,this__559523.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__559524 = this;
return this__559524.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__559525 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__559525.meta);
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
{if((function (){var and__3822__auto____559527 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____559527)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____559527;
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
{if((function (){var and__3822__auto____559529 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____559529)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____559529;
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
var init__559533 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__559533))
{return cljs.core.deref.call(null,init__559533);
} else
{var init__559534 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__559533):init__559533);
if(cljs.core.reduced_QMARK_.call(null,init__559534))
{return cljs.core.deref.call(null,init__559534);
} else
{var init__559535 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__559534):init__559534);
if(cljs.core.reduced_QMARK_.call(null,init__559535))
{return cljs.core.deref.call(null,init__559535);
} else
{return init__559535;
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
var this__559538 = this;
var h__2203__auto____559539 = this__559538.__hash;
if(!((h__2203__auto____559539 == null)))
{return h__2203__auto____559539;
} else
{var h__2203__auto____559540 = cljs.core.hash_coll.call(null,coll);
this__559538.__hash = h__2203__auto____559540;
return h__2203__auto____559540;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__559541 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__559542 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__559543 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__559543.key,this__559543.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__559591 = null;
var G__559591__2 = (function (this_sym559544,k){
var this__559546 = this;
var this_sym559544__559547 = this;
var node__559548 = this_sym559544__559547;
return node__559548.cljs$core$ILookup$_lookup$arity$2(node__559548,k);
});
var G__559591__3 = (function (this_sym559545,k,not_found){
var this__559546 = this;
var this_sym559545__559549 = this;
var node__559550 = this_sym559545__559549;
return node__559550.cljs$core$ILookup$_lookup$arity$3(node__559550,k,not_found);
});
G__559591 = function(this_sym559545,k,not_found){
switch(arguments.length){
case 2:
return G__559591__2.call(this,this_sym559545,k);
case 3:
return G__559591__3.call(this,this_sym559545,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__559591;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym559536,args559537){
var this__559551 = this;
return this_sym559536.call.apply(this_sym559536,[this_sym559536].concat(args559537.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__559552 = this;
return cljs.core.PersistentVector.fromArray([this__559552.key,this__559552.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__559553 = this;
return this__559553.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__559554 = this;
return this__559554.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__559555 = this;
var node__559556 = this;
return ins.balance_right(node__559556);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__559557 = this;
var node__559558 = this;
return (new cljs.core.RedNode(this__559557.key,this__559557.val,this__559557.left,this__559557.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__559559 = this;
var node__559560 = this;
return cljs.core.balance_right_del.call(null,this__559559.key,this__559559.val,this__559559.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__559561 = this;
var node__559562 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__559563 = this;
var node__559564 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__559564,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__559565 = this;
var node__559566 = this;
return cljs.core.balance_left_del.call(null,this__559565.key,this__559565.val,del,this__559565.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__559567 = this;
var node__559568 = this;
return ins.balance_left(node__559568);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__559569 = this;
var node__559570 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__559570,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__559592 = null;
var G__559592__0 = (function (){
var this__559571 = this;
var this__559573 = this;
return cljs.core.pr_str.call(null,this__559573);
});
G__559592 = function(){
switch(arguments.length){
case 0:
return G__559592__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__559592;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__559574 = this;
var node__559575 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__559575,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__559576 = this;
var node__559577 = this;
return node__559577;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__559578 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__559579 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__559580 = this;
return cljs.core.list.call(null,this__559580.key,this__559580.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__559581 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__559582 = this;
return this__559582.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__559583 = this;
return cljs.core.PersistentVector.fromArray([this__559583.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__559584 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__559584.key,this__559584.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__559585 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__559586 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__559586.key,this__559586.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__559587 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__559588 = this;
if((n === 0))
{return this__559588.key;
} else
{if((n === 1))
{return this__559588.val;
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
var this__559589 = this;
if((n === 0))
{return this__559589.key;
} else
{if((n === 1))
{return this__559589.val;
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
var this__559590 = this;
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
var this__559595 = this;
var h__2203__auto____559596 = this__559595.__hash;
if(!((h__2203__auto____559596 == null)))
{return h__2203__auto____559596;
} else
{var h__2203__auto____559597 = cljs.core.hash_coll.call(null,coll);
this__559595.__hash = h__2203__auto____559597;
return h__2203__auto____559597;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__559598 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__559599 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__559600 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__559600.key,this__559600.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__559648 = null;
var G__559648__2 = (function (this_sym559601,k){
var this__559603 = this;
var this_sym559601__559604 = this;
var node__559605 = this_sym559601__559604;
return node__559605.cljs$core$ILookup$_lookup$arity$2(node__559605,k);
});
var G__559648__3 = (function (this_sym559602,k,not_found){
var this__559603 = this;
var this_sym559602__559606 = this;
var node__559607 = this_sym559602__559606;
return node__559607.cljs$core$ILookup$_lookup$arity$3(node__559607,k,not_found);
});
G__559648 = function(this_sym559602,k,not_found){
switch(arguments.length){
case 2:
return G__559648__2.call(this,this_sym559602,k);
case 3:
return G__559648__3.call(this,this_sym559602,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__559648;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym559593,args559594){
var this__559608 = this;
return this_sym559593.call.apply(this_sym559593,[this_sym559593].concat(args559594.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__559609 = this;
return cljs.core.PersistentVector.fromArray([this__559609.key,this__559609.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__559610 = this;
return this__559610.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__559611 = this;
return this__559611.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__559612 = this;
var node__559613 = this;
return (new cljs.core.RedNode(this__559612.key,this__559612.val,this__559612.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__559614 = this;
var node__559615 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__559616 = this;
var node__559617 = this;
return (new cljs.core.RedNode(this__559616.key,this__559616.val,this__559616.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__559618 = this;
var node__559619 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__559620 = this;
var node__559621 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__559621,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__559622 = this;
var node__559623 = this;
return (new cljs.core.RedNode(this__559622.key,this__559622.val,del,this__559622.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__559624 = this;
var node__559625 = this;
return (new cljs.core.RedNode(this__559624.key,this__559624.val,ins,this__559624.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__559626 = this;
var node__559627 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__559626.left))
{return (new cljs.core.RedNode(this__559626.key,this__559626.val,this__559626.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__559626.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__559626.right))
{return (new cljs.core.RedNode(this__559626.right.key,this__559626.right.val,(new cljs.core.BlackNode(this__559626.key,this__559626.val,this__559626.left,this__559626.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__559626.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__559627,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__559649 = null;
var G__559649__0 = (function (){
var this__559628 = this;
var this__559630 = this;
return cljs.core.pr_str.call(null,this__559630);
});
G__559649 = function(){
switch(arguments.length){
case 0:
return G__559649__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__559649;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__559631 = this;
var node__559632 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__559631.right))
{return (new cljs.core.RedNode(this__559631.key,this__559631.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__559631.left,null)),this__559631.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__559631.left))
{return (new cljs.core.RedNode(this__559631.left.key,this__559631.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__559631.left.left,null)),(new cljs.core.BlackNode(this__559631.key,this__559631.val,this__559631.left.right,this__559631.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__559632,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__559633 = this;
var node__559634 = this;
return (new cljs.core.BlackNode(this__559633.key,this__559633.val,this__559633.left,this__559633.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__559635 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__559636 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__559637 = this;
return cljs.core.list.call(null,this__559637.key,this__559637.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__559638 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__559639 = this;
return this__559639.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__559640 = this;
return cljs.core.PersistentVector.fromArray([this__559640.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__559641 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__559641.key,this__559641.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__559642 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__559643 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__559643.key,this__559643.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__559644 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__559645 = this;
if((n === 0))
{return this__559645.key;
} else
{if((n === 1))
{return this__559645.val;
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
var this__559646 = this;
if((n === 0))
{return this__559646.key;
} else
{if((n === 1))
{return this__559646.val;
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
var this__559647 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__559653 = comp.call(null,k,tree.key);
if((c__559653 === 0))
{(found[0] = tree);
return null;
} else
{if((c__559653 < 0))
{var ins__559654 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__559654 == null)))
{return tree.add_left(ins__559654);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__559655 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__559655 == null)))
{return tree.add_right(ins__559655);
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
{var app__559658 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__559658))
{return (new cljs.core.RedNode(app__559658.key,app__559658.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__559658.left,null)),(new cljs.core.RedNode(right.key,right.val,app__559658.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__559658,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__559659 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__559659))
{return (new cljs.core.RedNode(app__559659.key,app__559659.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__559659.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__559659.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__559659,right.right,null)));
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
{var c__559665 = comp.call(null,k,tree.key);
if((c__559665 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__559665 < 0))
{var del__559666 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____559667 = !((del__559666 == null));
if(or__3824__auto____559667)
{return or__3824__auto____559667;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__559666,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__559666,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__559668 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____559669 = !((del__559668 == null));
if(or__3824__auto____559669)
{return or__3824__auto____559669;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__559668);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__559668,null));
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
var tk__559672 = tree.key;
var c__559673 = comp.call(null,k,tk__559672);
if((c__559673 === 0))
{return tree.replace(tk__559672,v,tree.left,tree.right);
} else
{if((c__559673 < 0))
{return tree.replace(tk__559672,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__559672,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__559676 = this;
var h__2203__auto____559677 = this__559676.__hash;
if(!((h__2203__auto____559677 == null)))
{return h__2203__auto____559677;
} else
{var h__2203__auto____559678 = cljs.core.hash_imap.call(null,coll);
this__559676.__hash = h__2203__auto____559678;
return h__2203__auto____559678;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__559679 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__559680 = this;
var n__559681 = coll.entry_at(k);
if(!((n__559681 == null)))
{return n__559681.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__559682 = this;
var found__559683 = [null];
var t__559684 = cljs.core.tree_map_add.call(null,this__559682.comp,this__559682.tree,k,v,found__559683);
if((t__559684 == null))
{var found_node__559685 = cljs.core.nth.call(null,found__559683,0);
if(cljs.core._EQ_.call(null,v,found_node__559685.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__559682.comp,cljs.core.tree_map_replace.call(null,this__559682.comp,this__559682.tree,k,v),this__559682.cnt,this__559682.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__559682.comp,t__559684.blacken(),(this__559682.cnt + 1),this__559682.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__559686 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__559720 = null;
var G__559720__2 = (function (this_sym559687,k){
var this__559689 = this;
var this_sym559687__559690 = this;
var coll__559691 = this_sym559687__559690;
return coll__559691.cljs$core$ILookup$_lookup$arity$2(coll__559691,k);
});
var G__559720__3 = (function (this_sym559688,k,not_found){
var this__559689 = this;
var this_sym559688__559692 = this;
var coll__559693 = this_sym559688__559692;
return coll__559693.cljs$core$ILookup$_lookup$arity$3(coll__559693,k,not_found);
});
G__559720 = function(this_sym559688,k,not_found){
switch(arguments.length){
case 2:
return G__559720__2.call(this,this_sym559688,k);
case 3:
return G__559720__3.call(this,this_sym559688,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__559720;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym559674,args559675){
var this__559694 = this;
return this_sym559674.call.apply(this_sym559674,[this_sym559674].concat(args559675.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__559695 = this;
if(!((this__559695.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__559695.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__559696 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__559697 = this;
if((this__559697.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__559697.tree,false,this__559697.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__559698 = this;
var this__559699 = this;
return cljs.core.pr_str.call(null,this__559699);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__559700 = this;
var coll__559701 = this;
var t__559702 = this__559700.tree;
while(true){
if(!((t__559702 == null)))
{var c__559703 = this__559700.comp.call(null,k,t__559702.key);
if((c__559703 === 0))
{return t__559702;
} else
{if((c__559703 < 0))
{{
var G__559721 = t__559702.left;
t__559702 = G__559721;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__559722 = t__559702.right;
t__559702 = G__559722;
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
var this__559704 = this;
if((this__559704.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__559704.tree,ascending_QMARK_,this__559704.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__559705 = this;
if((this__559705.cnt > 0))
{var stack__559706 = null;
var t__559707 = this__559705.tree;
while(true){
if(!((t__559707 == null)))
{var c__559708 = this__559705.comp.call(null,k,t__559707.key);
if((c__559708 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__559706,t__559707),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__559708 < 0))
{{
var G__559723 = cljs.core.conj.call(null,stack__559706,t__559707);
var G__559724 = t__559707.left;
stack__559706 = G__559723;
t__559707 = G__559724;
continue;
}
} else
{{
var G__559725 = stack__559706;
var G__559726 = t__559707.right;
stack__559706 = G__559725;
t__559707 = G__559726;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__559708 > 0))
{{
var G__559727 = cljs.core.conj.call(null,stack__559706,t__559707);
var G__559728 = t__559707.right;
stack__559706 = G__559727;
t__559707 = G__559728;
continue;
}
} else
{{
var G__559729 = stack__559706;
var G__559730 = t__559707.left;
stack__559706 = G__559729;
t__559707 = G__559730;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__559706 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__559706,ascending_QMARK_,-1,null));
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
var this__559709 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__559710 = this;
return this__559710.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__559711 = this;
if((this__559711.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__559711.tree,true,this__559711.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__559712 = this;
return this__559712.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__559713 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__559714 = this;
return (new cljs.core.PersistentTreeMap(this__559714.comp,this__559714.tree,this__559714.cnt,meta,this__559714.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__559715 = this;
return this__559715.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__559716 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__559716.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__559717 = this;
var found__559718 = [null];
var t__559719 = cljs.core.tree_map_remove.call(null,this__559717.comp,this__559717.tree,k,found__559718);
if((t__559719 == null))
{if((cljs.core.nth.call(null,found__559718,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__559717.comp,null,0,this__559717.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__559717.comp,t__559719.blacken(),(this__559717.cnt - 1),this__559717.meta,null));
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
var in__559733 = cljs.core.seq.call(null,keyvals);
var out__559734 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__559733)
{{
var G__559735 = cljs.core.nnext.call(null,in__559733);
var G__559736 = cljs.core.assoc_BANG_.call(null,out__559734,cljs.core.first.call(null,in__559733),cljs.core.second.call(null,in__559733));
in__559733 = G__559735;
out__559734 = G__559736;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__559734);
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
hash_map.cljs$lang$applyTo = (function (arglist__559737){
var keyvals = cljs.core.seq(arglist__559737);;
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
array_map.cljs$lang$applyTo = (function (arglist__559738){
var keyvals = cljs.core.seq(arglist__559738);;
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
var ks__559742 = [];
var obj__559743 = {};
var kvs__559744 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__559744)
{ks__559742.push(cljs.core.first.call(null,kvs__559744));
(obj__559743[cljs.core.first.call(null,kvs__559744)] = cljs.core.second.call(null,kvs__559744));
{
var G__559745 = cljs.core.nnext.call(null,kvs__559744);
kvs__559744 = G__559745;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__559742,obj__559743);
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
obj_map.cljs$lang$applyTo = (function (arglist__559746){
var keyvals = cljs.core.seq(arglist__559746);;
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
var in__559749 = cljs.core.seq.call(null,keyvals);
var out__559750 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__559749)
{{
var G__559751 = cljs.core.nnext.call(null,in__559749);
var G__559752 = cljs.core.assoc.call(null,out__559750,cljs.core.first.call(null,in__559749),cljs.core.second.call(null,in__559749));
in__559749 = G__559751;
out__559750 = G__559752;
continue;
}
} else
{return out__559750;
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
sorted_map.cljs$lang$applyTo = (function (arglist__559753){
var keyvals = cljs.core.seq(arglist__559753);;
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
var in__559756 = cljs.core.seq.call(null,keyvals);
var out__559757 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__559756)
{{
var G__559758 = cljs.core.nnext.call(null,in__559756);
var G__559759 = cljs.core.assoc.call(null,out__559757,cljs.core.first.call(null,in__559756),cljs.core.second.call(null,in__559756));
in__559756 = G__559758;
out__559757 = G__559759;
continue;
}
} else
{return out__559757;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__559760){
var comparator = cljs.core.first(arglist__559760);
var keyvals = cljs.core.rest(arglist__559760);
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
{return cljs.core.reduce.call(null,(function (p1__559761_SHARP_,p2__559762_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____559764 = p1__559761_SHARP_;
if(cljs.core.truth_(or__3824__auto____559764))
{return or__3824__auto____559764;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__559762_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__559765){
var maps = cljs.core.seq(arglist__559765);;
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
{var merge_entry__559773 = (function (m,e){
var k__559771 = cljs.core.first.call(null,e);
var v__559772 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__559771))
{return cljs.core.assoc.call(null,m,k__559771,f.call(null,cljs.core._lookup.call(null,m,k__559771,null),v__559772));
} else
{return cljs.core.assoc.call(null,m,k__559771,v__559772);
}
});
var merge2__559775 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__559773,(function (){var or__3824__auto____559774 = m1;
if(cljs.core.truth_(or__3824__auto____559774))
{return or__3824__auto____559774;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__559775,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__559776){
var f = cljs.core.first(arglist__559776);
var maps = cljs.core.rest(arglist__559776);
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
var ret__559781 = cljs.core.ObjMap.EMPTY;
var keys__559782 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__559782)
{var key__559783 = cljs.core.first.call(null,keys__559782);
var entry__559784 = cljs.core._lookup.call(null,map,key__559783,"\uFDD0'cljs.core/not-found");
{
var G__559785 = ((cljs.core.not_EQ_.call(null,entry__559784,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__559781,key__559783,entry__559784):ret__559781);
var G__559786 = cljs.core.next.call(null,keys__559782);
ret__559781 = G__559785;
keys__559782 = G__559786;
continue;
}
} else
{return ret__559781;
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
var this__559790 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__559790.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__559791 = this;
var h__2203__auto____559792 = this__559791.__hash;
if(!((h__2203__auto____559792 == null)))
{return h__2203__auto____559792;
} else
{var h__2203__auto____559793 = cljs.core.hash_iset.call(null,coll);
this__559791.__hash = h__2203__auto____559793;
return h__2203__auto____559793;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__559794 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__559795 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__559795.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__559816 = null;
var G__559816__2 = (function (this_sym559796,k){
var this__559798 = this;
var this_sym559796__559799 = this;
var coll__559800 = this_sym559796__559799;
return coll__559800.cljs$core$ILookup$_lookup$arity$2(coll__559800,k);
});
var G__559816__3 = (function (this_sym559797,k,not_found){
var this__559798 = this;
var this_sym559797__559801 = this;
var coll__559802 = this_sym559797__559801;
return coll__559802.cljs$core$ILookup$_lookup$arity$3(coll__559802,k,not_found);
});
G__559816 = function(this_sym559797,k,not_found){
switch(arguments.length){
case 2:
return G__559816__2.call(this,this_sym559797,k);
case 3:
return G__559816__3.call(this,this_sym559797,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__559816;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym559788,args559789){
var this__559803 = this;
return this_sym559788.call.apply(this_sym559788,[this_sym559788].concat(args559789.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__559804 = this;
return (new cljs.core.PersistentHashSet(this__559804.meta,cljs.core.assoc.call(null,this__559804.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__559805 = this;
var this__559806 = this;
return cljs.core.pr_str.call(null,this__559806);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__559807 = this;
return cljs.core.keys.call(null,this__559807.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__559808 = this;
return (new cljs.core.PersistentHashSet(this__559808.meta,cljs.core.dissoc.call(null,this__559808.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__559809 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__559810 = this;
var and__3822__auto____559811 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____559811)
{var and__3822__auto____559812 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____559812)
{return cljs.core.every_QMARK_.call(null,(function (p1__559787_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__559787_SHARP_);
}),other);
} else
{return and__3822__auto____559812;
}
} else
{return and__3822__auto____559811;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__559813 = this;
return (new cljs.core.PersistentHashSet(meta,this__559813.hash_map,this__559813.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__559814 = this;
return this__559814.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__559815 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__559815.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__559817 = cljs.core.count.call(null,items);
var i__559818 = 0;
var out__559819 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__559818 < len__559817))
{{
var G__559820 = (i__559818 + 1);
var G__559821 = cljs.core.conj_BANG_.call(null,out__559819,(items[i__559818]));
i__559818 = G__559820;
out__559819 = G__559821;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__559819);
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
var G__559839 = null;
var G__559839__2 = (function (this_sym559825,k){
var this__559827 = this;
var this_sym559825__559828 = this;
var tcoll__559829 = this_sym559825__559828;
if((cljs.core._lookup.call(null,this__559827.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__559839__3 = (function (this_sym559826,k,not_found){
var this__559827 = this;
var this_sym559826__559830 = this;
var tcoll__559831 = this_sym559826__559830;
if((cljs.core._lookup.call(null,this__559827.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__559839 = function(this_sym559826,k,not_found){
switch(arguments.length){
case 2:
return G__559839__2.call(this,this_sym559826,k);
case 3:
return G__559839__3.call(this,this_sym559826,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__559839;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym559823,args559824){
var this__559832 = this;
return this_sym559823.call.apply(this_sym559823,[this_sym559823].concat(args559824.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__559833 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__559834 = this;
if((cljs.core._lookup.call(null,this__559834.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__559835 = this;
return cljs.core.count.call(null,this__559835.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__559836 = this;
this__559836.transient_map = cljs.core.dissoc_BANG_.call(null,this__559836.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__559837 = this;
this__559837.transient_map = cljs.core.assoc_BANG_.call(null,this__559837.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__559838 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__559838.transient_map),null));
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
var this__559842 = this;
var h__2203__auto____559843 = this__559842.__hash;
if(!((h__2203__auto____559843 == null)))
{return h__2203__auto____559843;
} else
{var h__2203__auto____559844 = cljs.core.hash_iset.call(null,coll);
this__559842.__hash = h__2203__auto____559844;
return h__2203__auto____559844;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__559845 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__559846 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__559846.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__559872 = null;
var G__559872__2 = (function (this_sym559847,k){
var this__559849 = this;
var this_sym559847__559850 = this;
var coll__559851 = this_sym559847__559850;
return coll__559851.cljs$core$ILookup$_lookup$arity$2(coll__559851,k);
});
var G__559872__3 = (function (this_sym559848,k,not_found){
var this__559849 = this;
var this_sym559848__559852 = this;
var coll__559853 = this_sym559848__559852;
return coll__559853.cljs$core$ILookup$_lookup$arity$3(coll__559853,k,not_found);
});
G__559872 = function(this_sym559848,k,not_found){
switch(arguments.length){
case 2:
return G__559872__2.call(this,this_sym559848,k);
case 3:
return G__559872__3.call(this,this_sym559848,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__559872;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym559840,args559841){
var this__559854 = this;
return this_sym559840.call.apply(this_sym559840,[this_sym559840].concat(args559841.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__559855 = this;
return (new cljs.core.PersistentTreeSet(this__559855.meta,cljs.core.assoc.call(null,this__559855.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__559856 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__559856.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__559857 = this;
var this__559858 = this;
return cljs.core.pr_str.call(null,this__559858);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__559859 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__559859.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__559860 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__559860.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__559861 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__559862 = this;
return cljs.core._comparator.call(null,this__559862.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__559863 = this;
return cljs.core.keys.call(null,this__559863.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__559864 = this;
return (new cljs.core.PersistentTreeSet(this__559864.meta,cljs.core.dissoc.call(null,this__559864.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__559865 = this;
return cljs.core.count.call(null,this__559865.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__559866 = this;
var and__3822__auto____559867 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____559867)
{var and__3822__auto____559868 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____559868)
{return cljs.core.every_QMARK_.call(null,(function (p1__559822_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__559822_SHARP_);
}),other);
} else
{return and__3822__auto____559868;
}
} else
{return and__3822__auto____559867;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__559869 = this;
return (new cljs.core.PersistentTreeSet(meta,this__559869.tree_map,this__559869.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__559870 = this;
return this__559870.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__559871 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__559871.meta);
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
var G__559877__delegate = function (keys){
var in__559875 = cljs.core.seq.call(null,keys);
var out__559876 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__559875))
{{
var G__559878 = cljs.core.next.call(null,in__559875);
var G__559879 = cljs.core.conj_BANG_.call(null,out__559876,cljs.core.first.call(null,in__559875));
in__559875 = G__559878;
out__559876 = G__559879;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__559876);
}
break;
}
};
var G__559877 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__559877__delegate.call(this, keys);
};
G__559877.cljs$lang$maxFixedArity = 0;
G__559877.cljs$lang$applyTo = (function (arglist__559880){
var keys = cljs.core.seq(arglist__559880);;
return G__559877__delegate(keys);
});
G__559877.cljs$lang$arity$variadic = G__559877__delegate;
return G__559877;
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
sorted_set.cljs$lang$applyTo = (function (arglist__559881){
var keys = cljs.core.seq(arglist__559881);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__559883){
var comparator = cljs.core.first(arglist__559883);
var keys = cljs.core.rest(arglist__559883);
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
{var n__559889 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____559890 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____559890))
{var e__559891 = temp__3971__auto____559890;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__559891));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__559889,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__559882_SHARP_){
var temp__3971__auto____559892 = cljs.core.find.call(null,smap,p1__559882_SHARP_);
if(cljs.core.truth_(temp__3971__auto____559892))
{var e__559893 = temp__3971__auto____559892;
return cljs.core.second.call(null,e__559893);
} else
{return p1__559882_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__559923 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__559916,seen){
while(true){
var vec__559917__559918 = p__559916;
var f__559919 = cljs.core.nth.call(null,vec__559917__559918,0,null);
var xs__559920 = vec__559917__559918;
var temp__3974__auto____559921 = cljs.core.seq.call(null,xs__559920);
if(temp__3974__auto____559921)
{var s__559922 = temp__3974__auto____559921;
if(cljs.core.contains_QMARK_.call(null,seen,f__559919))
{{
var G__559924 = cljs.core.rest.call(null,s__559922);
var G__559925 = seen;
p__559916 = G__559924;
seen = G__559925;
continue;
}
} else
{return cljs.core.cons.call(null,f__559919,step.call(null,cljs.core.rest.call(null,s__559922),cljs.core.conj.call(null,seen,f__559919)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__559923.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__559928 = cljs.core.PersistentVector.EMPTY;
var s__559929 = s;
while(true){
if(cljs.core.next.call(null,s__559929))
{{
var G__559930 = cljs.core.conj.call(null,ret__559928,cljs.core.first.call(null,s__559929));
var G__559931 = cljs.core.next.call(null,s__559929);
ret__559928 = G__559930;
s__559929 = G__559931;
continue;
}
} else
{return cljs.core.seq.call(null,ret__559928);
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
{if((function (){var or__3824__auto____559934 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____559934)
{return or__3824__auto____559934;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__559935 = x.lastIndexOf("/");
if((i__559935 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__559935 + 1));
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
if((function (){var or__3824__auto____559938 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____559938)
{return or__3824__auto____559938;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__559939 = x.lastIndexOf("/");
if((i__559939 > -1))
{return cljs.core.subs.call(null,x,2,i__559939);
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
var map__559946 = cljs.core.ObjMap.EMPTY;
var ks__559947 = cljs.core.seq.call(null,keys);
var vs__559948 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____559949 = ks__559947;
if(and__3822__auto____559949)
{return vs__559948;
} else
{return and__3822__auto____559949;
}
})())
{{
var G__559950 = cljs.core.assoc.call(null,map__559946,cljs.core.first.call(null,ks__559947),cljs.core.first.call(null,vs__559948));
var G__559951 = cljs.core.next.call(null,ks__559947);
var G__559952 = cljs.core.next.call(null,vs__559948);
map__559946 = G__559950;
ks__559947 = G__559951;
vs__559948 = G__559952;
continue;
}
} else
{return map__559946;
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
var G__559955__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__559940_SHARP_,p2__559941_SHARP_){
return max_key.call(null,k,p1__559940_SHARP_,p2__559941_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__559955 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__559955__delegate.call(this, k, x, y, more);
};
G__559955.cljs$lang$maxFixedArity = 3;
G__559955.cljs$lang$applyTo = (function (arglist__559956){
var k = cljs.core.first(arglist__559956);
var x = cljs.core.first(cljs.core.next(arglist__559956));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__559956)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__559956)));
return G__559955__delegate(k, x, y, more);
});
G__559955.cljs$lang$arity$variadic = G__559955__delegate;
return G__559955;
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
var G__559957__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__559953_SHARP_,p2__559954_SHARP_){
return min_key.call(null,k,p1__559953_SHARP_,p2__559954_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__559957 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__559957__delegate.call(this, k, x, y, more);
};
G__559957.cljs$lang$maxFixedArity = 3;
G__559957.cljs$lang$applyTo = (function (arglist__559958){
var k = cljs.core.first(arglist__559958);
var x = cljs.core.first(cljs.core.next(arglist__559958));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__559958)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__559958)));
return G__559957__delegate(k, x, y, more);
});
G__559957.cljs$lang$arity$variadic = G__559957__delegate;
return G__559957;
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
var temp__3974__auto____559961 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____559961)
{var s__559962 = temp__3974__auto____559961;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__559962),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__559962)));
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
var temp__3974__auto____559965 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____559965)
{var s__559966 = temp__3974__auto____559965;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__559966))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__559966),take_while.call(null,pred,cljs.core.rest.call(null,s__559966)));
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
var comp__559968 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__559968.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__559980 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____559981 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____559981))
{var vec__559982__559983 = temp__3974__auto____559981;
var e__559984 = cljs.core.nth.call(null,vec__559982__559983,0,null);
var s__559985 = vec__559982__559983;
if(cljs.core.truth_(include__559980.call(null,e__559984)))
{return s__559985;
} else
{return cljs.core.next.call(null,s__559985);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__559980,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____559986 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____559986))
{var vec__559987__559988 = temp__3974__auto____559986;
var e__559989 = cljs.core.nth.call(null,vec__559987__559988,0,null);
var s__559990 = vec__559987__559988;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__559989))?s__559990:cljs.core.next.call(null,s__559990)));
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
var include__560002 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____560003 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____560003))
{var vec__560004__560005 = temp__3974__auto____560003;
var e__560006 = cljs.core.nth.call(null,vec__560004__560005,0,null);
var s__560007 = vec__560004__560005;
if(cljs.core.truth_(include__560002.call(null,e__560006)))
{return s__560007;
} else
{return cljs.core.next.call(null,s__560007);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__560002,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____560008 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____560008))
{var vec__560009__560010 = temp__3974__auto____560008;
var e__560011 = cljs.core.nth.call(null,vec__560009__560010,0,null);
var s__560012 = vec__560009__560010;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__560011))?s__560012:cljs.core.next.call(null,s__560012)));
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
var this__560013 = this;
var h__2203__auto____560014 = this__560013.__hash;
if(!((h__2203__auto____560014 == null)))
{return h__2203__auto____560014;
} else
{var h__2203__auto____560015 = cljs.core.hash_coll.call(null,rng);
this__560013.__hash = h__2203__auto____560015;
return h__2203__auto____560015;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__560016 = this;
if((this__560016.step > 0))
{if(((this__560016.start + this__560016.step) < this__560016.end))
{return (new cljs.core.Range(this__560016.meta,(this__560016.start + this__560016.step),this__560016.end,this__560016.step,null));
} else
{return null;
}
} else
{if(((this__560016.start + this__560016.step) > this__560016.end))
{return (new cljs.core.Range(this__560016.meta,(this__560016.start + this__560016.step),this__560016.end,this__560016.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__560017 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__560018 = this;
var this__560019 = this;
return cljs.core.pr_str.call(null,this__560019);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__560020 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__560021 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__560022 = this;
if((this__560022.step > 0))
{if((this__560022.start < this__560022.end))
{return rng;
} else
{return null;
}
} else
{if((this__560022.start > this__560022.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__560023 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__560023.end - this__560023.start) / this__560023.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__560024 = this;
return this__560024.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__560025 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__560025.meta,(this__560025.start + this__560025.step),this__560025.end,this__560025.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__560026 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__560027 = this;
return (new cljs.core.Range(meta,this__560027.start,this__560027.end,this__560027.step,this__560027.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__560028 = this;
return this__560028.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__560029 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__560029.start + (n * this__560029.step));
} else
{if((function (){var and__3822__auto____560030 = (this__560029.start > this__560029.end);
if(and__3822__auto____560030)
{return (this__560029.step === 0);
} else
{return and__3822__auto____560030;
}
})())
{return this__560029.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__560031 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__560031.start + (n * this__560031.step));
} else
{if((function (){var and__3822__auto____560032 = (this__560031.start > this__560031.end);
if(and__3822__auto____560032)
{return (this__560031.step === 0);
} else
{return and__3822__auto____560032;
}
})())
{return this__560031.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__560033 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__560033.meta);
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
var temp__3974__auto____560036 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____560036)
{var s__560037 = temp__3974__auto____560036;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__560037),take_nth.call(null,n,cljs.core.drop.call(null,n,s__560037)));
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
var temp__3974__auto____560044 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____560044)
{var s__560045 = temp__3974__auto____560044;
var fst__560046 = cljs.core.first.call(null,s__560045);
var fv__560047 = f.call(null,fst__560046);
var run__560048 = cljs.core.cons.call(null,fst__560046,cljs.core.take_while.call(null,(function (p1__560038_SHARP_){
return cljs.core._EQ_.call(null,fv__560047,f.call(null,p1__560038_SHARP_));
}),cljs.core.next.call(null,s__560045)));
return cljs.core.cons.call(null,run__560048,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__560048),s__560045))));
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
var temp__3971__auto____560063 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____560063)
{var s__560064 = temp__3971__auto____560063;
return reductions.call(null,f,cljs.core.first.call(null,s__560064),cljs.core.rest.call(null,s__560064));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____560065 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____560065)
{var s__560066 = temp__3974__auto____560065;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__560066)),cljs.core.rest.call(null,s__560066));
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
var G__560069 = null;
var G__560069__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__560069__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__560069__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__560069__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__560069__4 = (function() { 
var G__560070__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__560070 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__560070__delegate.call(this, x, y, z, args);
};
G__560070.cljs$lang$maxFixedArity = 3;
G__560070.cljs$lang$applyTo = (function (arglist__560071){
var x = cljs.core.first(arglist__560071);
var y = cljs.core.first(cljs.core.next(arglist__560071));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__560071)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__560071)));
return G__560070__delegate(x, y, z, args);
});
G__560070.cljs$lang$arity$variadic = G__560070__delegate;
return G__560070;
})()
;
G__560069 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__560069__0.call(this);
case 1:
return G__560069__1.call(this,x);
case 2:
return G__560069__2.call(this,x,y);
case 3:
return G__560069__3.call(this,x,y,z);
default:
return G__560069__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__560069.cljs$lang$maxFixedArity = 3;
G__560069.cljs$lang$applyTo = G__560069__4.cljs$lang$applyTo;
return G__560069;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__560072 = null;
var G__560072__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__560072__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__560072__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__560072__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__560072__4 = (function() { 
var G__560073__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__560073 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__560073__delegate.call(this, x, y, z, args);
};
G__560073.cljs$lang$maxFixedArity = 3;
G__560073.cljs$lang$applyTo = (function (arglist__560074){
var x = cljs.core.first(arglist__560074);
var y = cljs.core.first(cljs.core.next(arglist__560074));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__560074)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__560074)));
return G__560073__delegate(x, y, z, args);
});
G__560073.cljs$lang$arity$variadic = G__560073__delegate;
return G__560073;
})()
;
G__560072 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__560072__0.call(this);
case 1:
return G__560072__1.call(this,x);
case 2:
return G__560072__2.call(this,x,y);
case 3:
return G__560072__3.call(this,x,y,z);
default:
return G__560072__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__560072.cljs$lang$maxFixedArity = 3;
G__560072.cljs$lang$applyTo = G__560072__4.cljs$lang$applyTo;
return G__560072;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__560075 = null;
var G__560075__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__560075__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__560075__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__560075__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__560075__4 = (function() { 
var G__560076__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__560076 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__560076__delegate.call(this, x, y, z, args);
};
G__560076.cljs$lang$maxFixedArity = 3;
G__560076.cljs$lang$applyTo = (function (arglist__560077){
var x = cljs.core.first(arglist__560077);
var y = cljs.core.first(cljs.core.next(arglist__560077));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__560077)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__560077)));
return G__560076__delegate(x, y, z, args);
});
G__560076.cljs$lang$arity$variadic = G__560076__delegate;
return G__560076;
})()
;
G__560075 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__560075__0.call(this);
case 1:
return G__560075__1.call(this,x);
case 2:
return G__560075__2.call(this,x,y);
case 3:
return G__560075__3.call(this,x,y,z);
default:
return G__560075__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__560075.cljs$lang$maxFixedArity = 3;
G__560075.cljs$lang$applyTo = G__560075__4.cljs$lang$applyTo;
return G__560075;
})()
});
var juxt__4 = (function() { 
var G__560078__delegate = function (f,g,h,fs){
var fs__560068 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__560079 = null;
var G__560079__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__560049_SHARP_,p2__560050_SHARP_){
return cljs.core.conj.call(null,p1__560049_SHARP_,p2__560050_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__560068);
});
var G__560079__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__560051_SHARP_,p2__560052_SHARP_){
return cljs.core.conj.call(null,p1__560051_SHARP_,p2__560052_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__560068);
});
var G__560079__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__560053_SHARP_,p2__560054_SHARP_){
return cljs.core.conj.call(null,p1__560053_SHARP_,p2__560054_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__560068);
});
var G__560079__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__560055_SHARP_,p2__560056_SHARP_){
return cljs.core.conj.call(null,p1__560055_SHARP_,p2__560056_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__560068);
});
var G__560079__4 = (function() { 
var G__560080__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__560057_SHARP_,p2__560058_SHARP_){
return cljs.core.conj.call(null,p1__560057_SHARP_,cljs.core.apply.call(null,p2__560058_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__560068);
};
var G__560080 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__560080__delegate.call(this, x, y, z, args);
};
G__560080.cljs$lang$maxFixedArity = 3;
G__560080.cljs$lang$applyTo = (function (arglist__560081){
var x = cljs.core.first(arglist__560081);
var y = cljs.core.first(cljs.core.next(arglist__560081));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__560081)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__560081)));
return G__560080__delegate(x, y, z, args);
});
G__560080.cljs$lang$arity$variadic = G__560080__delegate;
return G__560080;
})()
;
G__560079 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__560079__0.call(this);
case 1:
return G__560079__1.call(this,x);
case 2:
return G__560079__2.call(this,x,y);
case 3:
return G__560079__3.call(this,x,y,z);
default:
return G__560079__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__560079.cljs$lang$maxFixedArity = 3;
G__560079.cljs$lang$applyTo = G__560079__4.cljs$lang$applyTo;
return G__560079;
})()
};
var G__560078 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__560078__delegate.call(this, f, g, h, fs);
};
G__560078.cljs$lang$maxFixedArity = 3;
G__560078.cljs$lang$applyTo = (function (arglist__560082){
var f = cljs.core.first(arglist__560082);
var g = cljs.core.first(cljs.core.next(arglist__560082));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__560082)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__560082)));
return G__560078__delegate(f, g, h, fs);
});
G__560078.cljs$lang$arity$variadic = G__560078__delegate;
return G__560078;
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
var G__560085 = cljs.core.next.call(null,coll);
coll = G__560085;
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
if(cljs.core.truth_((function (){var and__3822__auto____560084 = cljs.core.seq.call(null,coll);
if(and__3822__auto____560084)
{return (n > 0);
} else
{return and__3822__auto____560084;
}
})()))
{{
var G__560086 = (n - 1);
var G__560087 = cljs.core.next.call(null,coll);
n = G__560086;
coll = G__560087;
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
var matches__560089 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__560089),s))
{if((cljs.core.count.call(null,matches__560089) === 1))
{return cljs.core.first.call(null,matches__560089);
} else
{return cljs.core.vec.call(null,matches__560089);
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
var matches__560091 = re.exec(s);
if((matches__560091 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__560091) === 1))
{return cljs.core.first.call(null,matches__560091);
} else
{return cljs.core.vec.call(null,matches__560091);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__560096 = cljs.core.re_find.call(null,re,s);
var match_idx__560097 = s.search(re);
var match_str__560098 = ((cljs.core.coll_QMARK_.call(null,match_data__560096))?cljs.core.first.call(null,match_data__560096):match_data__560096);
var post_match__560099 = cljs.core.subs.call(null,s,(match_idx__560097 + cljs.core.count.call(null,match_str__560098)));
if(cljs.core.truth_(match_data__560096))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__560096,re_seq.call(null,re,post_match__560099));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__560106__560107 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___560108 = cljs.core.nth.call(null,vec__560106__560107,0,null);
var flags__560109 = cljs.core.nth.call(null,vec__560106__560107,1,null);
var pattern__560110 = cljs.core.nth.call(null,vec__560106__560107,2,null);
return (new RegExp(pattern__560110,flags__560109));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__560100_SHARP_){
return print_one.call(null,p1__560100_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__560114__560115 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__560114__560115)
{var o__560116 = cljs.core.first.call(null,G__560114__560115);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__560116,writer,opts);
{
var G__560117 = cljs.core.next.call(null,G__560114__560115);
G__560114__560115 = G__560117;
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
var G__560121__560122 = cljs.core.seq.call(null,ss);
while(true){
if(G__560121__560122)
{var s__560123 = cljs.core.first.call(null,G__560121__560122);
cljs.core._write.call(null,writer,s__560123);
{
var G__560124 = cljs.core.next.call(null,G__560121__560122);
G__560121__560122 = G__560124;
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
write_all.cljs$lang$applyTo = (function (arglist__560125){
var writer = cljs.core.first(arglist__560125);
var ss = cljs.core.rest(arglist__560125);
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
var this__560126 = this;
return this__560126.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__560127 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____560137 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____560137))
{var and__3822__auto____560141 = (function (){var G__560138__560139 = obj;
if(G__560138__560139)
{if((function (){var or__3824__auto____560140 = (G__560138__560139.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____560140)
{return or__3824__auto____560140;
} else
{return G__560138__560139.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__560138__560139.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__560138__560139);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__560138__560139);
}
})();
if(cljs.core.truth_(and__3822__auto____560141))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____560141;
}
} else
{return and__3822__auto____560137;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____560142 = !((obj == null));
if(and__3822__auto____560142)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____560142;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__560143__560144 = obj;
if(G__560143__560144)
{if((function (){var or__3824__auto____560145 = (G__560143__560144.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____560145)
{return or__3824__auto____560145;
} else
{return G__560143__560144.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__560143__560144.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__560143__560144);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__560143__560144);
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
{if(cljs.core.truth_((function (){var and__3822__auto____560158 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____560158))
{var and__3822__auto____560162 = (function (){var G__560159__560160 = obj;
if(G__560159__560160)
{if((function (){var or__3824__auto____560161 = (G__560159__560160.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____560161)
{return or__3824__auto____560161;
} else
{return G__560159__560160.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__560159__560160.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__560159__560160);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__560159__560160);
}
})();
if(cljs.core.truth_(and__3822__auto____560162))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____560162;
}
} else
{return and__3822__auto____560158;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____560163 = !((obj == null));
if(and__3822__auto____560163)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____560163;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__560164__560165 = obj;
if(G__560164__560165)
{if((function (){var or__3824__auto____560166 = (G__560164__560165.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____560166)
{return or__3824__auto____560166;
} else
{return G__560164__560165.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__560164__560165.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__560164__560165);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__560164__560165);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__560167__560168 = obj;
if(G__560167__560168)
{if((function (){var or__3824__auto____560169 = (G__560167__560168.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____560169)
{return or__3824__auto____560169;
} else
{return G__560167__560168.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__560167__560168.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__560167__560168);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__560167__560168);
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
var G__560173__560174 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__560173__560174)
{var obj__560175 = cljs.core.first.call(null,G__560173__560174);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__560175,writer,opts);
{
var G__560176 = cljs.core.next.call(null,G__560173__560174);
G__560173__560174 = G__560176;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__560179 = (new goog.string.StringBuffer());
var writer__560180 = (new cljs.core.StringBufferWriter(sb__560179));
cljs.core.pr_seq_writer.call(null,objs,writer__560180,opts);
cljs.core._flush.call(null,writer__560180);
return sb__560179;
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
{var sb__560182 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__560182.append("\n");
return [cljs.core.str(sb__560182)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__560183){
var objs = cljs.core.seq(arglist__560183);;
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
prn_str.cljs$lang$applyTo = (function (arglist__560184){
var objs = cljs.core.seq(arglist__560184);;
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
pr.cljs$lang$applyTo = (function (arglist__560185){
var objs = cljs.core.seq(arglist__560185);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__560186){
var objs = cljs.core.seq(arglist__560186);;
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
print_str.cljs$lang$applyTo = (function (arglist__560187){
var objs = cljs.core.seq(arglist__560187);;
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
println.cljs$lang$applyTo = (function (arglist__560188){
var objs = cljs.core.seq(arglist__560188);;
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
println_str.cljs$lang$applyTo = (function (arglist__560189){
var objs = cljs.core.seq(arglist__560189);;
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
prn.cljs$lang$applyTo = (function (arglist__560190){
var objs = cljs.core.seq(arglist__560190);;
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
printf.cljs$lang$applyTo = (function (arglist__560191){
var fmt = cljs.core.first(arglist__560191);
var args = cljs.core.rest(arglist__560191);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__560192 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__560192,"{",", ","}",opts,coll);
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
var pr_pair__560193 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__560193,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__560194 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__560194,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____560195 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____560195))
{var nspc__560196 = temp__3974__auto____560195;
return [cljs.core.str(nspc__560196),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____560197 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____560197))
{var nspc__560198 = temp__3974__auto____560197;
return [cljs.core.str(nspc__560198),cljs.core.str("/")].join('');
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
var pr_pair__560199 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__560199,"{",", ","}",opts,coll);
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
var normalize__560201 = (function (n,len){
var ns__560200 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__560200) < len))
{{
var G__560203 = [cljs.core.str("0"),cljs.core.str(ns__560200)].join('');
ns__560200 = G__560203;
continue;
}
} else
{return ns__560200;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__560201.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__560201.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__560201.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__560201.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__560201.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__560201.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__560202 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__560202,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__560204 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__560204,"{",", ","}",opts,coll);
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
var pr_pair__560205 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__560205,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__560206 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__560206,"{",", ","}",opts,coll);
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
var temp__3974__auto____560207 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____560207))
{var nspc__560208 = temp__3974__auto____560207;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__560208)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____560209 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____560209))
{var nspc__560210 = temp__3974__auto____560209;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__560210)].join(''),"/");
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
var pr_pair__560211 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__560211,"{",", ","}",opts,coll);
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
var normalize__560213 = (function (n,len){
var ns__560212 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__560212) < len))
{{
var G__560215 = [cljs.core.str("0"),cljs.core.str(ns__560212)].join('');
ns__560212 = G__560215;
continue;
}
} else
{return ns__560212;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__560213.call(null,(d.getUTCMonth() + 1),2),"-",normalize__560213.call(null,d.getUTCDate(),2),"T",normalize__560213.call(null,d.getUTCHours(),2),":",normalize__560213.call(null,d.getUTCMinutes(),2),":",normalize__560213.call(null,d.getUTCSeconds(),2),".",normalize__560213.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__560214 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__560214,"{",", ","}",opts,coll);
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
var this__560216 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__560217 = this;
var G__560218__560219 = cljs.core.seq.call(null,this__560217.watches);
while(true){
if(G__560218__560219)
{var vec__560220__560221 = cljs.core.first.call(null,G__560218__560219);
var key__560222 = cljs.core.nth.call(null,vec__560220__560221,0,null);
var f__560223 = cljs.core.nth.call(null,vec__560220__560221,1,null);
f__560223.call(null,key__560222,this$,oldval,newval);
{
var G__560231 = cljs.core.next.call(null,G__560218__560219);
G__560218__560219 = G__560231;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__560224 = this;
return this$.watches = cljs.core.assoc.call(null,this__560224.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__560225 = this;
return this$.watches = cljs.core.dissoc.call(null,this__560225.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__560226 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__560226.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__560227 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__560227.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__560228 = this;
return this__560228.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__560229 = this;
return this__560229.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__560230 = this;
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
var G__560243__delegate = function (x,p__560232){
var map__560238__560239 = p__560232;
var map__560238__560240 = ((cljs.core.seq_QMARK_.call(null,map__560238__560239))?cljs.core.apply.call(null,cljs.core.hash_map,map__560238__560239):map__560238__560239);
var validator__560241 = cljs.core._lookup.call(null,map__560238__560240,"\uFDD0'validator",null);
var meta__560242 = cljs.core._lookup.call(null,map__560238__560240,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__560242,validator__560241,null));
};
var G__560243 = function (x,var_args){
var p__560232 = null;
if (goog.isDef(var_args)) {
  p__560232 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__560243__delegate.call(this, x, p__560232);
};
G__560243.cljs$lang$maxFixedArity = 1;
G__560243.cljs$lang$applyTo = (function (arglist__560244){
var x = cljs.core.first(arglist__560244);
var p__560232 = cljs.core.rest(arglist__560244);
return G__560243__delegate(x, p__560232);
});
G__560243.cljs$lang$arity$variadic = G__560243__delegate;
return G__560243;
})()
;
atom = function(x,var_args){
var p__560232 = var_args;
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
var temp__3974__auto____560248 = a.validator;
if(cljs.core.truth_(temp__3974__auto____560248))
{var validate__560249 = temp__3974__auto____560248;
if(cljs.core.truth_(validate__560249.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__560250 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__560250,new_value);
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
var G__560251__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__560251 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__560251__delegate.call(this, a, f, x, y, z, more);
};
G__560251.cljs$lang$maxFixedArity = 5;
G__560251.cljs$lang$applyTo = (function (arglist__560252){
var a = cljs.core.first(arglist__560252);
var f = cljs.core.first(cljs.core.next(arglist__560252));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__560252)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__560252))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__560252)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__560252)))));
return G__560251__delegate(a, f, x, y, z, more);
});
G__560251.cljs$lang$arity$variadic = G__560251__delegate;
return G__560251;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__560253){
var iref = cljs.core.first(arglist__560253);
var f = cljs.core.first(cljs.core.next(arglist__560253));
var args = cljs.core.rest(cljs.core.next(arglist__560253));
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
var this__560254 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__560254.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__560255 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__560255.state,(function (p__560256){
var map__560257__560258 = p__560256;
var map__560257__560259 = ((cljs.core.seq_QMARK_.call(null,map__560257__560258))?cljs.core.apply.call(null,cljs.core.hash_map,map__560257__560258):map__560257__560258);
var curr_state__560260 = map__560257__560259;
var done__560261 = cljs.core._lookup.call(null,map__560257__560259,"\uFDD0'done",null);
if(cljs.core.truth_(done__560261))
{return curr_state__560260;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__560255.f.call(null)});
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
var map__560282__560283 = options;
var map__560282__560284 = ((cljs.core.seq_QMARK_.call(null,map__560282__560283))?cljs.core.apply.call(null,cljs.core.hash_map,map__560282__560283):map__560282__560283);
var keywordize_keys__560285 = cljs.core._lookup.call(null,map__560282__560284,"\uFDD0'keywordize-keys",null);
var keyfn__560286 = (cljs.core.truth_(keywordize_keys__560285)?cljs.core.keyword:cljs.core.str);
var f__560301 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2484__auto____560300 = (function iter__560294(s__560295){
return (new cljs.core.LazySeq(null,false,(function (){
var s__560295__560298 = s__560295;
while(true){
if(cljs.core.seq.call(null,s__560295__560298))
{var k__560299 = cljs.core.first.call(null,s__560295__560298);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__560286.call(null,k__560299),thisfn.call(null,(x[k__560299]))], true),iter__560294.call(null,cljs.core.rest.call(null,s__560295__560298)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2484__auto____560300.call(null,cljs.core.js_keys.call(null,x));
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
return f__560301.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__560302){
var x = cljs.core.first(arglist__560302);
var options = cljs.core.rest(arglist__560302);
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
var mem__560307 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__560311__delegate = function (args){
var temp__3971__auto____560308 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__560307),args,null);
if(cljs.core.truth_(temp__3971__auto____560308))
{var v__560309 = temp__3971__auto____560308;
return v__560309;
} else
{var ret__560310 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__560307,cljs.core.assoc,args,ret__560310);
return ret__560310;
}
};
var G__560311 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__560311__delegate.call(this, args);
};
G__560311.cljs$lang$maxFixedArity = 0;
G__560311.cljs$lang$applyTo = (function (arglist__560312){
var args = cljs.core.seq(arglist__560312);;
return G__560311__delegate(args);
});
G__560311.cljs$lang$arity$variadic = G__560311__delegate;
return G__560311;
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
var ret__560314 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__560314))
{{
var G__560315 = ret__560314;
f = G__560315;
continue;
}
} else
{return ret__560314;
}
break;
}
});
var trampoline__2 = (function() { 
var G__560316__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__560316 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__560316__delegate.call(this, f, args);
};
G__560316.cljs$lang$maxFixedArity = 1;
G__560316.cljs$lang$applyTo = (function (arglist__560317){
var f = cljs.core.first(arglist__560317);
var args = cljs.core.rest(arglist__560317);
return G__560316__delegate(f, args);
});
G__560316.cljs$lang$arity$variadic = G__560316__delegate;
return G__560316;
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
var k__560319 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__560319,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__560319,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____560328 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____560328)
{return or__3824__auto____560328;
} else
{var or__3824__auto____560329 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____560329)
{return or__3824__auto____560329;
} else
{var and__3822__auto____560330 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____560330)
{var and__3822__auto____560331 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____560331)
{var and__3822__auto____560332 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____560332)
{var ret__560333 = true;
var i__560334 = 0;
while(true){
if((function (){var or__3824__auto____560335 = cljs.core.not.call(null,ret__560333);
if(or__3824__auto____560335)
{return or__3824__auto____560335;
} else
{return (i__560334 === cljs.core.count.call(null,parent));
}
})())
{return ret__560333;
} else
{{
var G__560336 = isa_QMARK_.call(null,h,child.call(null,i__560334),parent.call(null,i__560334));
var G__560337 = (i__560334 + 1);
ret__560333 = G__560336;
i__560334 = G__560337;
continue;
}
}
break;
}
} else
{return and__3822__auto____560332;
}
} else
{return and__3822__auto____560331;
}
} else
{return and__3822__auto____560330;
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
var tp__560346 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__560347 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__560348 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__560349 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____560350 = ((cljs.core.contains_QMARK_.call(null,tp__560346.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__560348.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__560348.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__560346,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__560349.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__560347,parent,ta__560348),"\uFDD0'descendants":tf__560349.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__560348,tag,td__560347)});
})());
if(cljs.core.truth_(or__3824__auto____560350))
{return or__3824__auto____560350;
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
var parentMap__560355 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__560356 = (cljs.core.truth_(parentMap__560355.call(null,tag))?cljs.core.disj.call(null,parentMap__560355.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__560357 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__560356))?cljs.core.assoc.call(null,parentMap__560355,tag,childsParents__560356):cljs.core.dissoc.call(null,parentMap__560355,tag));
var deriv_seq__560358 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__560338_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__560338_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__560338_SHARP_),cljs.core.second.call(null,p1__560338_SHARP_)));
}),cljs.core.seq.call(null,newParents__560357)));
if(cljs.core.contains_QMARK_.call(null,parentMap__560355.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__560339_SHARP_,p2__560340_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__560339_SHARP_,p2__560340_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__560358));
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
var xprefs__560366 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____560368 = (cljs.core.truth_((function (){var and__3822__auto____560367 = xprefs__560366;
if(cljs.core.truth_(and__3822__auto____560367))
{return xprefs__560366.call(null,y);
} else
{return and__3822__auto____560367;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____560368))
{return or__3824__auto____560368;
} else
{var or__3824__auto____560370 = (function (){var ps__560369 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__560369) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__560369),prefer_table)))
{} else
{}
{
var G__560373 = cljs.core.rest.call(null,ps__560369);
ps__560369 = G__560373;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____560370))
{return or__3824__auto____560370;
} else
{var or__3824__auto____560372 = (function (){var ps__560371 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__560371) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__560371),y,prefer_table)))
{} else
{}
{
var G__560374 = cljs.core.rest.call(null,ps__560371);
ps__560371 = G__560374;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____560372))
{return or__3824__auto____560372;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____560376 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____560376))
{return or__3824__auto____560376;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__560394 = cljs.core.reduce.call(null,(function (be,p__560386){
var vec__560387__560388 = p__560386;
var k__560389 = cljs.core.nth.call(null,vec__560387__560388,0,null);
var ___560390 = cljs.core.nth.call(null,vec__560387__560388,1,null);
var e__560391 = vec__560387__560388;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__560389))
{var be2__560393 = (cljs.core.truth_((function (){var or__3824__auto____560392 = (be == null);
if(or__3824__auto____560392)
{return or__3824__auto____560392;
} else
{return cljs.core.dominates.call(null,k__560389,cljs.core.first.call(null,be),prefer_table);
}
})())?e__560391:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__560393),k__560389,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__560389),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__560393)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__560393;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__560394))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__560394));
return cljs.core.second.call(null,best_entry__560394);
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
if((function (){var and__3822__auto____560399 = mf;
if(and__3822__auto____560399)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____560399;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2387__auto____560400 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____560401 = (cljs.core._reset[goog.typeOf(x__2387__auto____560400)]);
if(or__3824__auto____560401)
{return or__3824__auto____560401;
} else
{var or__3824__auto____560402 = (cljs.core._reset["_"]);
if(or__3824__auto____560402)
{return or__3824__auto____560402;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____560407 = mf;
if(and__3822__auto____560407)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____560407;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2387__auto____560408 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____560409 = (cljs.core._add_method[goog.typeOf(x__2387__auto____560408)]);
if(or__3824__auto____560409)
{return or__3824__auto____560409;
} else
{var or__3824__auto____560410 = (cljs.core._add_method["_"]);
if(or__3824__auto____560410)
{return or__3824__auto____560410;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____560415 = mf;
if(and__3822__auto____560415)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____560415;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2387__auto____560416 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____560417 = (cljs.core._remove_method[goog.typeOf(x__2387__auto____560416)]);
if(or__3824__auto____560417)
{return or__3824__auto____560417;
} else
{var or__3824__auto____560418 = (cljs.core._remove_method["_"]);
if(or__3824__auto____560418)
{return or__3824__auto____560418;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____560423 = mf;
if(and__3822__auto____560423)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____560423;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2387__auto____560424 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____560425 = (cljs.core._prefer_method[goog.typeOf(x__2387__auto____560424)]);
if(or__3824__auto____560425)
{return or__3824__auto____560425;
} else
{var or__3824__auto____560426 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____560426)
{return or__3824__auto____560426;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____560431 = mf;
if(and__3822__auto____560431)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____560431;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2387__auto____560432 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____560433 = (cljs.core._get_method[goog.typeOf(x__2387__auto____560432)]);
if(or__3824__auto____560433)
{return or__3824__auto____560433;
} else
{var or__3824__auto____560434 = (cljs.core._get_method["_"]);
if(or__3824__auto____560434)
{return or__3824__auto____560434;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____560439 = mf;
if(and__3822__auto____560439)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____560439;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2387__auto____560440 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____560441 = (cljs.core._methods[goog.typeOf(x__2387__auto____560440)]);
if(or__3824__auto____560441)
{return or__3824__auto____560441;
} else
{var or__3824__auto____560442 = (cljs.core._methods["_"]);
if(or__3824__auto____560442)
{return or__3824__auto____560442;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____560447 = mf;
if(and__3822__auto____560447)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____560447;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2387__auto____560448 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____560449 = (cljs.core._prefers[goog.typeOf(x__2387__auto____560448)]);
if(or__3824__auto____560449)
{return or__3824__auto____560449;
} else
{var or__3824__auto____560450 = (cljs.core._prefers["_"]);
if(or__3824__auto____560450)
{return or__3824__auto____560450;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____560455 = mf;
if(and__3822__auto____560455)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____560455;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2387__auto____560456 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____560457 = (cljs.core._dispatch[goog.typeOf(x__2387__auto____560456)]);
if(or__3824__auto____560457)
{return or__3824__auto____560457;
} else
{var or__3824__auto____560458 = (cljs.core._dispatch["_"]);
if(or__3824__auto____560458)
{return or__3824__auto____560458;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__560461 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__560462 = cljs.core._get_method.call(null,mf,dispatch_val__560461);
if(cljs.core.truth_(target_fn__560462))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__560461)].join('')));
}
return cljs.core.apply.call(null,target_fn__560462,args);
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
var this__560463 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__560464 = this;
cljs.core.swap_BANG_.call(null,this__560464.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__560464.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__560464.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__560464.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__560465 = this;
cljs.core.swap_BANG_.call(null,this__560465.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__560465.method_cache,this__560465.method_table,this__560465.cached_hierarchy,this__560465.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__560466 = this;
cljs.core.swap_BANG_.call(null,this__560466.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__560466.method_cache,this__560466.method_table,this__560466.cached_hierarchy,this__560466.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__560467 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__560467.cached_hierarchy),cljs.core.deref.call(null,this__560467.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__560467.method_cache,this__560467.method_table,this__560467.cached_hierarchy,this__560467.hierarchy);
}
var temp__3971__auto____560468 = cljs.core.deref.call(null,this__560467.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____560468))
{var target_fn__560469 = temp__3971__auto____560468;
return target_fn__560469;
} else
{var temp__3971__auto____560470 = cljs.core.find_and_cache_best_method.call(null,this__560467.name,dispatch_val,this__560467.hierarchy,this__560467.method_table,this__560467.prefer_table,this__560467.method_cache,this__560467.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____560470))
{var target_fn__560471 = temp__3971__auto____560470;
return target_fn__560471;
} else
{return cljs.core.deref.call(null,this__560467.method_table).call(null,this__560467.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__560472 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__560472.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__560472.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__560472.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__560472.method_cache,this__560472.method_table,this__560472.cached_hierarchy,this__560472.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__560473 = this;
return cljs.core.deref.call(null,this__560473.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__560474 = this;
return cljs.core.deref.call(null,this__560474.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__560475 = this;
return cljs.core.do_dispatch.call(null,mf,this__560475.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__560477__delegate = function (_,args){
var self__560476 = this;
return cljs.core._dispatch.call(null,self__560476,args);
};
var G__560477 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__560477__delegate.call(this, _, args);
};
G__560477.cljs$lang$maxFixedArity = 1;
G__560477.cljs$lang$applyTo = (function (arglist__560478){
var _ = cljs.core.first(arglist__560478);
var args = cljs.core.rest(arglist__560478);
return G__560477__delegate(_, args);
});
G__560477.cljs$lang$arity$variadic = G__560477__delegate;
return G__560477;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__560479 = this;
return cljs.core._dispatch.call(null,self__560479,args);
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
var this__560480 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_560482,writer,_){
var this__560481 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__560481.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_560484,_){
var this__560483 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__560483.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__560485 = this;
var and__3822__auto____560486 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____560486)
{return (this__560485.uuid === other.uuid);
} else
{return and__3822__auto____560486;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__560487 = this;
var this__560488 = this;
return cljs.core.pr_str.call(null,this__560488);
});
cljs.core.UUID;
