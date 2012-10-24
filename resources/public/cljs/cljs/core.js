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
var x__28018 = (((x == null))?null:x);
if((p[goog.typeOf(x__28018)]))
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
var G__28019__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__28019 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28019__delegate.call(this, array, i, idxs);
};
G__28019.cljs$lang$maxFixedArity = 2;
G__28019.cljs$lang$applyTo = (function (arglist__28020){
var array = cljs.core.first(arglist__28020);
var i = cljs.core.first(cljs.core.next(arglist__28020));
var idxs = cljs.core.rest(cljs.core.next(arglist__28020));
return G__28019__delegate(array, i, idxs);
});
G__28019.cljs$lang$arity$variadic = G__28019__delegate;
return G__28019;
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
if((function (){var and__3822__auto____28105 = this$;
if(and__3822__auto____28105)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____28105;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2387__auto____28106 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28107 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28106)]);
if(or__3824__auto____28107)
{return or__3824__auto____28107;
} else
{var or__3824__auto____28108 = (cljs.core._invoke["_"]);
if(or__3824__auto____28108)
{return or__3824__auto____28108;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____28109 = this$;
if(and__3822__auto____28109)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____28109;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2387__auto____28110 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28111 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28110)]);
if(or__3824__auto____28111)
{return or__3824__auto____28111;
} else
{var or__3824__auto____28112 = (cljs.core._invoke["_"]);
if(or__3824__auto____28112)
{return or__3824__auto____28112;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____28113 = this$;
if(and__3822__auto____28113)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____28113;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2387__auto____28114 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28115 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28114)]);
if(or__3824__auto____28115)
{return or__3824__auto____28115;
} else
{var or__3824__auto____28116 = (cljs.core._invoke["_"]);
if(or__3824__auto____28116)
{return or__3824__auto____28116;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____28117 = this$;
if(and__3822__auto____28117)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____28117;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2387__auto____28118 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28119 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28118)]);
if(or__3824__auto____28119)
{return or__3824__auto____28119;
} else
{var or__3824__auto____28120 = (cljs.core._invoke["_"]);
if(or__3824__auto____28120)
{return or__3824__auto____28120;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____28121 = this$;
if(and__3822__auto____28121)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____28121;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2387__auto____28122 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28123 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28122)]);
if(or__3824__auto____28123)
{return or__3824__auto____28123;
} else
{var or__3824__auto____28124 = (cljs.core._invoke["_"]);
if(or__3824__auto____28124)
{return or__3824__auto____28124;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____28125 = this$;
if(and__3822__auto____28125)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____28125;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2387__auto____28126 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28127 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28126)]);
if(or__3824__auto____28127)
{return or__3824__auto____28127;
} else
{var or__3824__auto____28128 = (cljs.core._invoke["_"]);
if(or__3824__auto____28128)
{return or__3824__auto____28128;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____28129 = this$;
if(and__3822__auto____28129)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____28129;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2387__auto____28130 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28131 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28130)]);
if(or__3824__auto____28131)
{return or__3824__auto____28131;
} else
{var or__3824__auto____28132 = (cljs.core._invoke["_"]);
if(or__3824__auto____28132)
{return or__3824__auto____28132;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____28133 = this$;
if(and__3822__auto____28133)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____28133;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2387__auto____28134 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28135 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28134)]);
if(or__3824__auto____28135)
{return or__3824__auto____28135;
} else
{var or__3824__auto____28136 = (cljs.core._invoke["_"]);
if(or__3824__auto____28136)
{return or__3824__auto____28136;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____28137 = this$;
if(and__3822__auto____28137)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____28137;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2387__auto____28138 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28139 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28138)]);
if(or__3824__auto____28139)
{return or__3824__auto____28139;
} else
{var or__3824__auto____28140 = (cljs.core._invoke["_"]);
if(or__3824__auto____28140)
{return or__3824__auto____28140;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____28141 = this$;
if(and__3822__auto____28141)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____28141;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2387__auto____28142 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28143 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28142)]);
if(or__3824__auto____28143)
{return or__3824__auto____28143;
} else
{var or__3824__auto____28144 = (cljs.core._invoke["_"]);
if(or__3824__auto____28144)
{return or__3824__auto____28144;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____28145 = this$;
if(and__3822__auto____28145)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____28145;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2387__auto____28146 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28147 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28146)]);
if(or__3824__auto____28147)
{return or__3824__auto____28147;
} else
{var or__3824__auto____28148 = (cljs.core._invoke["_"]);
if(or__3824__auto____28148)
{return or__3824__auto____28148;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____28149 = this$;
if(and__3822__auto____28149)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____28149;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2387__auto____28150 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28151 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28150)]);
if(or__3824__auto____28151)
{return or__3824__auto____28151;
} else
{var or__3824__auto____28152 = (cljs.core._invoke["_"]);
if(or__3824__auto____28152)
{return or__3824__auto____28152;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____28153 = this$;
if(and__3822__auto____28153)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____28153;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2387__auto____28154 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28155 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28154)]);
if(or__3824__auto____28155)
{return or__3824__auto____28155;
} else
{var or__3824__auto____28156 = (cljs.core._invoke["_"]);
if(or__3824__auto____28156)
{return or__3824__auto____28156;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____28157 = this$;
if(and__3822__auto____28157)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____28157;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2387__auto____28158 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28159 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28158)]);
if(or__3824__auto____28159)
{return or__3824__auto____28159;
} else
{var or__3824__auto____28160 = (cljs.core._invoke["_"]);
if(or__3824__auto____28160)
{return or__3824__auto____28160;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____28161 = this$;
if(and__3822__auto____28161)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____28161;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2387__auto____28162 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28163 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28162)]);
if(or__3824__auto____28163)
{return or__3824__auto____28163;
} else
{var or__3824__auto____28164 = (cljs.core._invoke["_"]);
if(or__3824__auto____28164)
{return or__3824__auto____28164;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____28165 = this$;
if(and__3822__auto____28165)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____28165;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2387__auto____28166 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28167 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28166)]);
if(or__3824__auto____28167)
{return or__3824__auto____28167;
} else
{var or__3824__auto____28168 = (cljs.core._invoke["_"]);
if(or__3824__auto____28168)
{return or__3824__auto____28168;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____28169 = this$;
if(and__3822__auto____28169)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____28169;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2387__auto____28170 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28171 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28170)]);
if(or__3824__auto____28171)
{return or__3824__auto____28171;
} else
{var or__3824__auto____28172 = (cljs.core._invoke["_"]);
if(or__3824__auto____28172)
{return or__3824__auto____28172;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____28173 = this$;
if(and__3822__auto____28173)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____28173;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2387__auto____28174 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28175 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28174)]);
if(or__3824__auto____28175)
{return or__3824__auto____28175;
} else
{var or__3824__auto____28176 = (cljs.core._invoke["_"]);
if(or__3824__auto____28176)
{return or__3824__auto____28176;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____28177 = this$;
if(and__3822__auto____28177)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____28177;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2387__auto____28178 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28179 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28178)]);
if(or__3824__auto____28179)
{return or__3824__auto____28179;
} else
{var or__3824__auto____28180 = (cljs.core._invoke["_"]);
if(or__3824__auto____28180)
{return or__3824__auto____28180;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____28181 = this$;
if(and__3822__auto____28181)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____28181;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2387__auto____28182 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28183 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28182)]);
if(or__3824__auto____28183)
{return or__3824__auto____28183;
} else
{var or__3824__auto____28184 = (cljs.core._invoke["_"]);
if(or__3824__auto____28184)
{return or__3824__auto____28184;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____28185 = this$;
if(and__3822__auto____28185)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____28185;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2387__auto____28186 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28187 = (cljs.core._invoke[goog.typeOf(x__2387__auto____28186)]);
if(or__3824__auto____28187)
{return or__3824__auto____28187;
} else
{var or__3824__auto____28188 = (cljs.core._invoke["_"]);
if(or__3824__auto____28188)
{return or__3824__auto____28188;
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
if((function (){var and__3822__auto____28193 = coll;
if(and__3822__auto____28193)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____28193;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2387__auto____28194 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28195 = (cljs.core._count[goog.typeOf(x__2387__auto____28194)]);
if(or__3824__auto____28195)
{return or__3824__auto____28195;
} else
{var or__3824__auto____28196 = (cljs.core._count["_"]);
if(or__3824__auto____28196)
{return or__3824__auto____28196;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____28201 = coll;
if(and__3822__auto____28201)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____28201;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2387__auto____28202 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28203 = (cljs.core._empty[goog.typeOf(x__2387__auto____28202)]);
if(or__3824__auto____28203)
{return or__3824__auto____28203;
} else
{var or__3824__auto____28204 = (cljs.core._empty["_"]);
if(or__3824__auto____28204)
{return or__3824__auto____28204;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____28209 = coll;
if(and__3822__auto____28209)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____28209;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2387__auto____28210 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28211 = (cljs.core._conj[goog.typeOf(x__2387__auto____28210)]);
if(or__3824__auto____28211)
{return or__3824__auto____28211;
} else
{var or__3824__auto____28212 = (cljs.core._conj["_"]);
if(or__3824__auto____28212)
{return or__3824__auto____28212;
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
if((function (){var and__3822__auto____28221 = coll;
if(and__3822__auto____28221)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____28221;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2387__auto____28222 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28223 = (cljs.core._nth[goog.typeOf(x__2387__auto____28222)]);
if(or__3824__auto____28223)
{return or__3824__auto____28223;
} else
{var or__3824__auto____28224 = (cljs.core._nth["_"]);
if(or__3824__auto____28224)
{return or__3824__auto____28224;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____28225 = coll;
if(and__3822__auto____28225)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____28225;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2387__auto____28226 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28227 = (cljs.core._nth[goog.typeOf(x__2387__auto____28226)]);
if(or__3824__auto____28227)
{return or__3824__auto____28227;
} else
{var or__3824__auto____28228 = (cljs.core._nth["_"]);
if(or__3824__auto____28228)
{return or__3824__auto____28228;
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
if((function (){var and__3822__auto____28233 = coll;
if(and__3822__auto____28233)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____28233;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2387__auto____28234 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28235 = (cljs.core._first[goog.typeOf(x__2387__auto____28234)]);
if(or__3824__auto____28235)
{return or__3824__auto____28235;
} else
{var or__3824__auto____28236 = (cljs.core._first["_"]);
if(or__3824__auto____28236)
{return or__3824__auto____28236;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____28241 = coll;
if(and__3822__auto____28241)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____28241;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2387__auto____28242 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28243 = (cljs.core._rest[goog.typeOf(x__2387__auto____28242)]);
if(or__3824__auto____28243)
{return or__3824__auto____28243;
} else
{var or__3824__auto____28244 = (cljs.core._rest["_"]);
if(or__3824__auto____28244)
{return or__3824__auto____28244;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____28249 = coll;
if(and__3822__auto____28249)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____28249;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2387__auto____28250 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28251 = (cljs.core._next[goog.typeOf(x__2387__auto____28250)]);
if(or__3824__auto____28251)
{return or__3824__auto____28251;
} else
{var or__3824__auto____28252 = (cljs.core._next["_"]);
if(or__3824__auto____28252)
{return or__3824__auto____28252;
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
if((function (){var and__3822__auto____28261 = o;
if(and__3822__auto____28261)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____28261;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2387__auto____28262 = (((o == null))?null:o);
return (function (){var or__3824__auto____28263 = (cljs.core._lookup[goog.typeOf(x__2387__auto____28262)]);
if(or__3824__auto____28263)
{return or__3824__auto____28263;
} else
{var or__3824__auto____28264 = (cljs.core._lookup["_"]);
if(or__3824__auto____28264)
{return or__3824__auto____28264;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____28265 = o;
if(and__3822__auto____28265)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____28265;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2387__auto____28266 = (((o == null))?null:o);
return (function (){var or__3824__auto____28267 = (cljs.core._lookup[goog.typeOf(x__2387__auto____28266)]);
if(or__3824__auto____28267)
{return or__3824__auto____28267;
} else
{var or__3824__auto____28268 = (cljs.core._lookup["_"]);
if(or__3824__auto____28268)
{return or__3824__auto____28268;
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
if((function (){var and__3822__auto____28273 = coll;
if(and__3822__auto____28273)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____28273;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2387__auto____28274 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28275 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2387__auto____28274)]);
if(or__3824__auto____28275)
{return or__3824__auto____28275;
} else
{var or__3824__auto____28276 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____28276)
{return or__3824__auto____28276;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____28281 = coll;
if(and__3822__auto____28281)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____28281;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2387__auto____28282 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28283 = (cljs.core._assoc[goog.typeOf(x__2387__auto____28282)]);
if(or__3824__auto____28283)
{return or__3824__auto____28283;
} else
{var or__3824__auto____28284 = (cljs.core._assoc["_"]);
if(or__3824__auto____28284)
{return or__3824__auto____28284;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____28289 = coll;
if(and__3822__auto____28289)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____28289;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2387__auto____28290 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28291 = (cljs.core._dissoc[goog.typeOf(x__2387__auto____28290)]);
if(or__3824__auto____28291)
{return or__3824__auto____28291;
} else
{var or__3824__auto____28292 = (cljs.core._dissoc["_"]);
if(or__3824__auto____28292)
{return or__3824__auto____28292;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____28297 = coll;
if(and__3822__auto____28297)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____28297;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2387__auto____28298 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28299 = (cljs.core._key[goog.typeOf(x__2387__auto____28298)]);
if(or__3824__auto____28299)
{return or__3824__auto____28299;
} else
{var or__3824__auto____28300 = (cljs.core._key["_"]);
if(or__3824__auto____28300)
{return or__3824__auto____28300;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____28305 = coll;
if(and__3822__auto____28305)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____28305;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2387__auto____28306 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28307 = (cljs.core._val[goog.typeOf(x__2387__auto____28306)]);
if(or__3824__auto____28307)
{return or__3824__auto____28307;
} else
{var or__3824__auto____28308 = (cljs.core._val["_"]);
if(or__3824__auto____28308)
{return or__3824__auto____28308;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____28313 = coll;
if(and__3822__auto____28313)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____28313;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2387__auto____28314 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28315 = (cljs.core._disjoin[goog.typeOf(x__2387__auto____28314)]);
if(or__3824__auto____28315)
{return or__3824__auto____28315;
} else
{var or__3824__auto____28316 = (cljs.core._disjoin["_"]);
if(or__3824__auto____28316)
{return or__3824__auto____28316;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____28321 = coll;
if(and__3822__auto____28321)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____28321;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2387__auto____28322 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28323 = (cljs.core._peek[goog.typeOf(x__2387__auto____28322)]);
if(or__3824__auto____28323)
{return or__3824__auto____28323;
} else
{var or__3824__auto____28324 = (cljs.core._peek["_"]);
if(or__3824__auto____28324)
{return or__3824__auto____28324;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____28329 = coll;
if(and__3822__auto____28329)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____28329;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2387__auto____28330 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28331 = (cljs.core._pop[goog.typeOf(x__2387__auto____28330)]);
if(or__3824__auto____28331)
{return or__3824__auto____28331;
} else
{var or__3824__auto____28332 = (cljs.core._pop["_"]);
if(or__3824__auto____28332)
{return or__3824__auto____28332;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____28337 = coll;
if(and__3822__auto____28337)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____28337;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2387__auto____28338 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28339 = (cljs.core._assoc_n[goog.typeOf(x__2387__auto____28338)]);
if(or__3824__auto____28339)
{return or__3824__auto____28339;
} else
{var or__3824__auto____28340 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____28340)
{return or__3824__auto____28340;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____28345 = o;
if(and__3822__auto____28345)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____28345;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2387__auto____28346 = (((o == null))?null:o);
return (function (){var or__3824__auto____28347 = (cljs.core._deref[goog.typeOf(x__2387__auto____28346)]);
if(or__3824__auto____28347)
{return or__3824__auto____28347;
} else
{var or__3824__auto____28348 = (cljs.core._deref["_"]);
if(or__3824__auto____28348)
{return or__3824__auto____28348;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____28353 = o;
if(and__3822__auto____28353)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____28353;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2387__auto____28354 = (((o == null))?null:o);
return (function (){var or__3824__auto____28355 = (cljs.core._deref_with_timeout[goog.typeOf(x__2387__auto____28354)]);
if(or__3824__auto____28355)
{return or__3824__auto____28355;
} else
{var or__3824__auto____28356 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____28356)
{return or__3824__auto____28356;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____28361 = o;
if(and__3822__auto____28361)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____28361;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2387__auto____28362 = (((o == null))?null:o);
return (function (){var or__3824__auto____28363 = (cljs.core._meta[goog.typeOf(x__2387__auto____28362)]);
if(or__3824__auto____28363)
{return or__3824__auto____28363;
} else
{var or__3824__auto____28364 = (cljs.core._meta["_"]);
if(or__3824__auto____28364)
{return or__3824__auto____28364;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____28369 = o;
if(and__3822__auto____28369)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____28369;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2387__auto____28370 = (((o == null))?null:o);
return (function (){var or__3824__auto____28371 = (cljs.core._with_meta[goog.typeOf(x__2387__auto____28370)]);
if(or__3824__auto____28371)
{return or__3824__auto____28371;
} else
{var or__3824__auto____28372 = (cljs.core._with_meta["_"]);
if(or__3824__auto____28372)
{return or__3824__auto____28372;
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
if((function (){var and__3822__auto____28381 = coll;
if(and__3822__auto____28381)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____28381;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2387__auto____28382 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28383 = (cljs.core._reduce[goog.typeOf(x__2387__auto____28382)]);
if(or__3824__auto____28383)
{return or__3824__auto____28383;
} else
{var or__3824__auto____28384 = (cljs.core._reduce["_"]);
if(or__3824__auto____28384)
{return or__3824__auto____28384;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____28385 = coll;
if(and__3822__auto____28385)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____28385;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2387__auto____28386 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28387 = (cljs.core._reduce[goog.typeOf(x__2387__auto____28386)]);
if(or__3824__auto____28387)
{return or__3824__auto____28387;
} else
{var or__3824__auto____28388 = (cljs.core._reduce["_"]);
if(or__3824__auto____28388)
{return or__3824__auto____28388;
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
if((function (){var and__3822__auto____28393 = coll;
if(and__3822__auto____28393)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____28393;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2387__auto____28394 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28395 = (cljs.core._kv_reduce[goog.typeOf(x__2387__auto____28394)]);
if(or__3824__auto____28395)
{return or__3824__auto____28395;
} else
{var or__3824__auto____28396 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____28396)
{return or__3824__auto____28396;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____28401 = o;
if(and__3822__auto____28401)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____28401;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2387__auto____28402 = (((o == null))?null:o);
return (function (){var or__3824__auto____28403 = (cljs.core._equiv[goog.typeOf(x__2387__auto____28402)]);
if(or__3824__auto____28403)
{return or__3824__auto____28403;
} else
{var or__3824__auto____28404 = (cljs.core._equiv["_"]);
if(or__3824__auto____28404)
{return or__3824__auto____28404;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____28409 = o;
if(and__3822__auto____28409)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____28409;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2387__auto____28410 = (((o == null))?null:o);
return (function (){var or__3824__auto____28411 = (cljs.core._hash[goog.typeOf(x__2387__auto____28410)]);
if(or__3824__auto____28411)
{return or__3824__auto____28411;
} else
{var or__3824__auto____28412 = (cljs.core._hash["_"]);
if(or__3824__auto____28412)
{return or__3824__auto____28412;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____28417 = o;
if(and__3822__auto____28417)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____28417;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2387__auto____28418 = (((o == null))?null:o);
return (function (){var or__3824__auto____28419 = (cljs.core._seq[goog.typeOf(x__2387__auto____28418)]);
if(or__3824__auto____28419)
{return or__3824__auto____28419;
} else
{var or__3824__auto____28420 = (cljs.core._seq["_"]);
if(or__3824__auto____28420)
{return or__3824__auto____28420;
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
if((function (){var and__3822__auto____28425 = coll;
if(and__3822__auto____28425)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____28425;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2387__auto____28426 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28427 = (cljs.core._rseq[goog.typeOf(x__2387__auto____28426)]);
if(or__3824__auto____28427)
{return or__3824__auto____28427;
} else
{var or__3824__auto____28428 = (cljs.core._rseq["_"]);
if(or__3824__auto____28428)
{return or__3824__auto____28428;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____28433 = coll;
if(and__3822__auto____28433)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____28433;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2387__auto____28434 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28435 = (cljs.core._sorted_seq[goog.typeOf(x__2387__auto____28434)]);
if(or__3824__auto____28435)
{return or__3824__auto____28435;
} else
{var or__3824__auto____28436 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____28436)
{return or__3824__auto____28436;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____28441 = coll;
if(and__3822__auto____28441)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____28441;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2387__auto____28442 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28443 = (cljs.core._sorted_seq_from[goog.typeOf(x__2387__auto____28442)]);
if(or__3824__auto____28443)
{return or__3824__auto____28443;
} else
{var or__3824__auto____28444 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____28444)
{return or__3824__auto____28444;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____28449 = coll;
if(and__3822__auto____28449)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____28449;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2387__auto____28450 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28451 = (cljs.core._entry_key[goog.typeOf(x__2387__auto____28450)]);
if(or__3824__auto____28451)
{return or__3824__auto____28451;
} else
{var or__3824__auto____28452 = (cljs.core._entry_key["_"]);
if(or__3824__auto____28452)
{return or__3824__auto____28452;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____28457 = coll;
if(and__3822__auto____28457)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____28457;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2387__auto____28458 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28459 = (cljs.core._comparator[goog.typeOf(x__2387__auto____28458)]);
if(or__3824__auto____28459)
{return or__3824__auto____28459;
} else
{var or__3824__auto____28460 = (cljs.core._comparator["_"]);
if(or__3824__auto____28460)
{return or__3824__auto____28460;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____28465 = o;
if(and__3822__auto____28465)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____28465;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2387__auto____28466 = (((o == null))?null:o);
return (function (){var or__3824__auto____28467 = (cljs.core._pr_seq[goog.typeOf(x__2387__auto____28466)]);
if(or__3824__auto____28467)
{return or__3824__auto____28467;
} else
{var or__3824__auto____28468 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____28468)
{return or__3824__auto____28468;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3822__auto____28473 = writer;
if(and__3822__auto____28473)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3822__auto____28473;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__2387__auto____28474 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____28475 = (cljs.core._write[goog.typeOf(x__2387__auto____28474)]);
if(or__3824__auto____28475)
{return or__3824__auto____28475;
} else
{var or__3824__auto____28476 = (cljs.core._write["_"]);
if(or__3824__auto____28476)
{return or__3824__auto____28476;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3822__auto____28481 = writer;
if(and__3822__auto____28481)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3822__auto____28481;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__2387__auto____28482 = (((writer == null))?null:writer);
return (function (){var or__3824__auto____28483 = (cljs.core._flush[goog.typeOf(x__2387__auto____28482)]);
if(or__3824__auto____28483)
{return or__3824__auto____28483;
} else
{var or__3824__auto____28484 = (cljs.core._flush["_"]);
if(or__3824__auto____28484)
{return or__3824__auto____28484;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3822__auto____28489 = o;
if(and__3822__auto____28489)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3822__auto____28489;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__2387__auto____28490 = (((o == null))?null:o);
return (function (){var or__3824__auto____28491 = (cljs.core._pr_writer[goog.typeOf(x__2387__auto____28490)]);
if(or__3824__auto____28491)
{return or__3824__auto____28491;
} else
{var or__3824__auto____28492 = (cljs.core._pr_writer["_"]);
if(or__3824__auto____28492)
{return or__3824__auto____28492;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____28497 = d;
if(and__3822__auto____28497)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____28497;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2387__auto____28498 = (((d == null))?null:d);
return (function (){var or__3824__auto____28499 = (cljs.core._realized_QMARK_[goog.typeOf(x__2387__auto____28498)]);
if(or__3824__auto____28499)
{return or__3824__auto____28499;
} else
{var or__3824__auto____28500 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____28500)
{return or__3824__auto____28500;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____28505 = this$;
if(and__3822__auto____28505)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____28505;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2387__auto____28506 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28507 = (cljs.core._notify_watches[goog.typeOf(x__2387__auto____28506)]);
if(or__3824__auto____28507)
{return or__3824__auto____28507;
} else
{var or__3824__auto____28508 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____28508)
{return or__3824__auto____28508;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____28513 = this$;
if(and__3822__auto____28513)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____28513;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2387__auto____28514 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28515 = (cljs.core._add_watch[goog.typeOf(x__2387__auto____28514)]);
if(or__3824__auto____28515)
{return or__3824__auto____28515;
} else
{var or__3824__auto____28516 = (cljs.core._add_watch["_"]);
if(or__3824__auto____28516)
{return or__3824__auto____28516;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____28521 = this$;
if(and__3822__auto____28521)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____28521;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2387__auto____28522 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____28523 = (cljs.core._remove_watch[goog.typeOf(x__2387__auto____28522)]);
if(or__3824__auto____28523)
{return or__3824__auto____28523;
} else
{var or__3824__auto____28524 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____28524)
{return or__3824__auto____28524;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____28529 = coll;
if(and__3822__auto____28529)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____28529;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2387__auto____28530 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28531 = (cljs.core._as_transient[goog.typeOf(x__2387__auto____28530)]);
if(or__3824__auto____28531)
{return or__3824__auto____28531;
} else
{var or__3824__auto____28532 = (cljs.core._as_transient["_"]);
if(or__3824__auto____28532)
{return or__3824__auto____28532;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____28537 = tcoll;
if(and__3822__auto____28537)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____28537;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2387__auto____28538 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____28539 = (cljs.core._conj_BANG_[goog.typeOf(x__2387__auto____28538)]);
if(or__3824__auto____28539)
{return or__3824__auto____28539;
} else
{var or__3824__auto____28540 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____28540)
{return or__3824__auto____28540;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____28545 = tcoll;
if(and__3822__auto____28545)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____28545;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2387__auto____28546 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____28547 = (cljs.core._persistent_BANG_[goog.typeOf(x__2387__auto____28546)]);
if(or__3824__auto____28547)
{return or__3824__auto____28547;
} else
{var or__3824__auto____28548 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____28548)
{return or__3824__auto____28548;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____28553 = tcoll;
if(and__3822__auto____28553)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____28553;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2387__auto____28554 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____28555 = (cljs.core._assoc_BANG_[goog.typeOf(x__2387__auto____28554)]);
if(or__3824__auto____28555)
{return or__3824__auto____28555;
} else
{var or__3824__auto____28556 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____28556)
{return or__3824__auto____28556;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____28561 = tcoll;
if(and__3822__auto____28561)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____28561;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2387__auto____28562 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____28563 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2387__auto____28562)]);
if(or__3824__auto____28563)
{return or__3824__auto____28563;
} else
{var or__3824__auto____28564 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____28564)
{return or__3824__auto____28564;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____28569 = tcoll;
if(and__3822__auto____28569)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____28569;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2387__auto____28570 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____28571 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2387__auto____28570)]);
if(or__3824__auto____28571)
{return or__3824__auto____28571;
} else
{var or__3824__auto____28572 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____28572)
{return or__3824__auto____28572;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____28577 = tcoll;
if(and__3822__auto____28577)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____28577;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2387__auto____28578 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____28579 = (cljs.core._pop_BANG_[goog.typeOf(x__2387__auto____28578)]);
if(or__3824__auto____28579)
{return or__3824__auto____28579;
} else
{var or__3824__auto____28580 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____28580)
{return or__3824__auto____28580;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____28585 = tcoll;
if(and__3822__auto____28585)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____28585;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2387__auto____28586 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____28587 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2387__auto____28586)]);
if(or__3824__auto____28587)
{return or__3824__auto____28587;
} else
{var or__3824__auto____28588 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____28588)
{return or__3824__auto____28588;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____28593 = x;
if(and__3822__auto____28593)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____28593;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2387__auto____28594 = (((x == null))?null:x);
return (function (){var or__3824__auto____28595 = (cljs.core._compare[goog.typeOf(x__2387__auto____28594)]);
if(or__3824__auto____28595)
{return or__3824__auto____28595;
} else
{var or__3824__auto____28596 = (cljs.core._compare["_"]);
if(or__3824__auto____28596)
{return or__3824__auto____28596;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____28601 = coll;
if(and__3822__auto____28601)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____28601;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2387__auto____28602 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28603 = (cljs.core._drop_first[goog.typeOf(x__2387__auto____28602)]);
if(or__3824__auto____28603)
{return or__3824__auto____28603;
} else
{var or__3824__auto____28604 = (cljs.core._drop_first["_"]);
if(or__3824__auto____28604)
{return or__3824__auto____28604;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____28609 = coll;
if(and__3822__auto____28609)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____28609;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2387__auto____28610 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28611 = (cljs.core._chunked_first[goog.typeOf(x__2387__auto____28610)]);
if(or__3824__auto____28611)
{return or__3824__auto____28611;
} else
{var or__3824__auto____28612 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____28612)
{return or__3824__auto____28612;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____28617 = coll;
if(and__3822__auto____28617)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____28617;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2387__auto____28618 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28619 = (cljs.core._chunked_rest[goog.typeOf(x__2387__auto____28618)]);
if(or__3824__auto____28619)
{return or__3824__auto____28619;
} else
{var or__3824__auto____28620 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____28620)
{return or__3824__auto____28620;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____28625 = coll;
if(and__3822__auto____28625)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____28625;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2387__auto____28626 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____28627 = (cljs.core._chunked_next[goog.typeOf(x__2387__auto____28626)]);
if(or__3824__auto____28627)
{return or__3824__auto____28627;
} else
{var or__3824__auto____28628 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____28628)
{return or__3824__auto____28628;
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
{if((function (){var G__28632__28633 = coll;
if(G__28632__28633)
{if((function (){var or__3824__auto____28634 = (G__28632__28633.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____28634)
{return or__3824__auto____28634;
} else
{return G__28632__28633.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__28632__28633.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__28632__28633);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__28632__28633);
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
{if((function (){var G__28639__28640 = coll;
if(G__28639__28640)
{if((function (){var or__3824__auto____28641 = (G__28639__28640.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____28641)
{return or__3824__auto____28641;
} else
{return G__28639__28640.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__28639__28640.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__28639__28640);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__28639__28640);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__28642 = cljs.core.seq.call(null,coll);
if((s__28642 == null))
{return null;
} else
{return cljs.core._first.call(null,s__28642);
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
{if((function (){var G__28647__28648 = coll;
if(G__28647__28648)
{if((function (){var or__3824__auto____28649 = (G__28647__28648.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____28649)
{return or__3824__auto____28649;
} else
{return G__28647__28648.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__28647__28648.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__28647__28648);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__28647__28648);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__28650 = cljs.core.seq.call(null,coll);
if(!((s__28650 == null)))
{return cljs.core._rest.call(null,s__28650);
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
{if((function (){var G__28654__28655 = coll;
if(G__28654__28655)
{if((function (){var or__3824__auto____28656 = (G__28654__28655.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____28656)
{return or__3824__auto____28656;
} else
{return G__28654__28655.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__28654__28655.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__28654__28655);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__28654__28655);
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
var or__3824__auto____28658 = (x === y);
if(or__3824__auto____28658)
{return or__3824__auto____28658;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__28659__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__28660 = y;
var G__28661 = cljs.core.first.call(null,more);
var G__28662 = cljs.core.next.call(null,more);
x = G__28660;
y = G__28661;
more = G__28662;
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
var G__28659 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28659__delegate.call(this, x, y, more);
};
G__28659.cljs$lang$maxFixedArity = 2;
G__28659.cljs$lang$applyTo = (function (arglist__28663){
var x = cljs.core.first(arglist__28663);
var y = cljs.core.first(cljs.core.next(arglist__28663));
var more = cljs.core.rest(cljs.core.next(arglist__28663));
return G__28659__delegate(x, y, more);
});
G__28659.cljs$lang$arity$variadic = G__28659__delegate;
return G__28659;
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
var G__28664 = null;
var G__28664__2 = (function (o,k){
return null;
});
var G__28664__3 = (function (o,k,not_found){
return not_found;
});
G__28664 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__28664__2.call(this,o,k);
case 3:
return G__28664__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28664;
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
var G__28665 = null;
var G__28665__2 = (function (_,f){
return f.call(null);
});
var G__28665__3 = (function (_,f,start){
return start;
});
G__28665 = function(_,f,start){
switch(arguments.length){
case 2:
return G__28665__2.call(this,_,f);
case 3:
return G__28665__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28665;
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
var G__28666 = null;
var G__28666__2 = (function (_,n){
return null;
});
var G__28666__3 = (function (_,n,not_found){
return not_found;
});
G__28666 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__28666__2.call(this,_,n);
case 3:
return G__28666__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28666;
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
var and__3822__auto____28667 = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3822__auto____28667)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____28667;
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
var this__28668 = this;
return this__28668.val;
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
var cnt__28681 = cljs.core._count.call(null,cicoll);
if((cnt__28681 === 0))
{return f.call(null);
} else
{var val__28682 = cljs.core._nth.call(null,cicoll,0);
var n__28683 = 1;
while(true){
if((n__28683 < cnt__28681))
{var nval__28684 = f.call(null,val__28682,cljs.core._nth.call(null,cicoll,n__28683));
if(cljs.core.reduced_QMARK_.call(null,nval__28684))
{return cljs.core.deref.call(null,nval__28684);
} else
{{
var G__28693 = nval__28684;
var G__28694 = (n__28683 + 1);
val__28682 = G__28693;
n__28683 = G__28694;
continue;
}
}
} else
{return val__28682;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__28685 = cljs.core._count.call(null,cicoll);
var val__28686 = val;
var n__28687 = 0;
while(true){
if((n__28687 < cnt__28685))
{var nval__28688 = f.call(null,val__28686,cljs.core._nth.call(null,cicoll,n__28687));
if(cljs.core.reduced_QMARK_.call(null,nval__28688))
{return cljs.core.deref.call(null,nval__28688);
} else
{{
var G__28695 = nval__28688;
var G__28696 = (n__28687 + 1);
val__28686 = G__28695;
n__28687 = G__28696;
continue;
}
}
} else
{return val__28686;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__28689 = cljs.core._count.call(null,cicoll);
var val__28690 = val;
var n__28691 = idx;
while(true){
if((n__28691 < cnt__28689))
{var nval__28692 = f.call(null,val__28690,cljs.core._nth.call(null,cicoll,n__28691));
if(cljs.core.reduced_QMARK_.call(null,nval__28692))
{return cljs.core.deref.call(null,nval__28692);
} else
{{
var G__28697 = nval__28692;
var G__28698 = (n__28691 + 1);
val__28690 = G__28697;
n__28691 = G__28698;
continue;
}
}
} else
{return val__28690;
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
var cnt__28711 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__28712 = (arr[0]);
var n__28713 = 1;
while(true){
if((n__28713 < cnt__28711))
{var nval__28714 = f.call(null,val__28712,(arr[n__28713]));
if(cljs.core.reduced_QMARK_.call(null,nval__28714))
{return cljs.core.deref.call(null,nval__28714);
} else
{{
var G__28723 = nval__28714;
var G__28724 = (n__28713 + 1);
val__28712 = G__28723;
n__28713 = G__28724;
continue;
}
}
} else
{return val__28712;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__28715 = arr.length;
var val__28716 = val;
var n__28717 = 0;
while(true){
if((n__28717 < cnt__28715))
{var nval__28718 = f.call(null,val__28716,(arr[n__28717]));
if(cljs.core.reduced_QMARK_.call(null,nval__28718))
{return cljs.core.deref.call(null,nval__28718);
} else
{{
var G__28725 = nval__28718;
var G__28726 = (n__28717 + 1);
val__28716 = G__28725;
n__28717 = G__28726;
continue;
}
}
} else
{return val__28716;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__28719 = arr.length;
var val__28720 = val;
var n__28721 = idx;
while(true){
if((n__28721 < cnt__28719))
{var nval__28722 = f.call(null,val__28720,(arr[n__28721]));
if(cljs.core.reduced_QMARK_.call(null,nval__28722))
{return cljs.core.deref.call(null,nval__28722);
} else
{{
var G__28727 = nval__28722;
var G__28728 = (n__28721 + 1);
val__28720 = G__28727;
n__28721 = G__28728;
continue;
}
}
} else
{return val__28720;
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
var G__28732__28733 = x;
if(G__28732__28733)
{if((function (){var or__3824__auto____28734 = (G__28732__28733.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____28734)
{return or__3824__auto____28734;
} else
{return G__28732__28733.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__28732__28733.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__28732__28733);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__28732__28733);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__28738__28739 = x;
if(G__28738__28739)
{if((function (){var or__3824__auto____28740 = (G__28738__28739.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____28740)
{return or__3824__auto____28740;
} else
{return G__28738__28739.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__28738__28739.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__28738__28739);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__28738__28739);
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
var this__28741 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__28742 = this;
if(((this__28742.i + 1) < this__28742.a.length))
{return (new cljs.core.IndexedSeq(this__28742.a,(this__28742.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__28743 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__28744 = this;
var c__28745 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__28745 > 0))
{return (new cljs.core.RSeq(coll,(c__28745 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__28746 = this;
var this__28747 = this;
return cljs.core.pr_str.call(null,this__28747);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__28748 = this;
if(cljs.core.counted_QMARK_.call(null,this__28748.a))
{return cljs.core.ci_reduce.call(null,this__28748.a,f,(this__28748.a[this__28748.i]),(this__28748.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__28748.a[this__28748.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__28749 = this;
if(cljs.core.counted_QMARK_.call(null,this__28749.a))
{return cljs.core.ci_reduce.call(null,this__28749.a,f,start,this__28749.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__28750 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__28751 = this;
return (this__28751.a.length - this__28751.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__28752 = this;
return (this__28752.a[this__28752.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__28753 = this;
if(((this__28753.i + 1) < this__28753.a.length))
{return (new cljs.core.IndexedSeq(this__28753.a,(this__28753.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28754 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__28755 = this;
var i__28756 = (n + this__28755.i);
if((i__28756 < this__28755.a.length))
{return (this__28755.a[i__28756]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__28757 = this;
var i__28758 = (n + this__28757.i);
if((i__28758 < this__28757.a.length))
{return (this__28757.a[i__28758]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28759 = this;
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
var G__28760 = null;
var G__28760__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__28760__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__28760 = function(array,f,start){
switch(arguments.length){
case 2:
return G__28760__2.call(this,array,f);
case 3:
return G__28760__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28760;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__28761 = null;
var G__28761__2 = (function (array,k){
return (array[k]);
});
var G__28761__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__28761 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__28761__2.call(this,array,k);
case 3:
return G__28761__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28761;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__28762 = null;
var G__28762__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__28762__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__28762 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__28762__2.call(this,array,n);
case 3:
return G__28762__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__28762;
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
var this__28763 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__28764 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__28765 = this;
var this__28766 = this;
return cljs.core.pr_str.call(null,this__28766);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__28767 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__28768 = this;
return (this__28768.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__28769 = this;
return cljs.core._nth.call(null,this__28769.ci,this__28769.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__28770 = this;
if((this__28770.i > 0))
{return (new cljs.core.RSeq(this__28770.ci,(this__28770.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__28771 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__28772 = this;
return (new cljs.core.RSeq(this__28772.ci,this__28772.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__28773 = this;
return this__28773.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__28774 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__28774.meta);
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
var sn__28776 = cljs.core.next.call(null,s);
if(!((sn__28776 == null)))
{{
var G__28777 = sn__28776;
s = G__28777;
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
var G__28778__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__28779 = conj.call(null,coll,x);
var G__28780 = cljs.core.first.call(null,xs);
var G__28781 = cljs.core.next.call(null,xs);
coll = G__28779;
x = G__28780;
xs = G__28781;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__28778 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28778__delegate.call(this, coll, x, xs);
};
G__28778.cljs$lang$maxFixedArity = 2;
G__28778.cljs$lang$applyTo = (function (arglist__28782){
var coll = cljs.core.first(arglist__28782);
var x = cljs.core.first(cljs.core.next(arglist__28782));
var xs = cljs.core.rest(cljs.core.next(arglist__28782));
return G__28778__delegate(coll, x, xs);
});
G__28778.cljs$lang$arity$variadic = G__28778__delegate;
return G__28778;
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
var s__28785 = cljs.core.seq.call(null,coll);
var acc__28786 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__28785))
{return (acc__28786 + cljs.core._count.call(null,s__28785));
} else
{{
var G__28787 = cljs.core.next.call(null,s__28785);
var G__28788 = (acc__28786 + 1);
s__28785 = G__28787;
acc__28786 = G__28788;
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
var G__28789 = cljs.core.next.call(null,coll);
var G__28790 = (n - 1);
coll = G__28789;
n = G__28790;
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
var G__28791 = cljs.core.next.call(null,coll);
var G__28792 = (n - 1);
var G__28793 = not_found;
coll = G__28791;
n = G__28792;
not_found = G__28793;
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
{if((function (){var G__28800__28801 = coll;
if(G__28800__28801)
{if((function (){var or__3824__auto____28802 = (G__28800__28801.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____28802)
{return or__3824__auto____28802;
} else
{return G__28800__28801.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__28800__28801.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__28800__28801);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__28800__28801);
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
{if((function (){var G__28803__28804 = coll;
if(G__28803__28804)
{if((function (){var or__3824__auto____28805 = (G__28803__28804.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____28805)
{return or__3824__auto____28805;
} else
{return G__28803__28804.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__28803__28804.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__28803__28804);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__28803__28804);
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
var G__28808__delegate = function (coll,k,v,kvs){
while(true){
var ret__28807 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__28809 = ret__28807;
var G__28810 = cljs.core.first.call(null,kvs);
var G__28811 = cljs.core.second.call(null,kvs);
var G__28812 = cljs.core.nnext.call(null,kvs);
coll = G__28809;
k = G__28810;
v = G__28811;
kvs = G__28812;
continue;
}
} else
{return ret__28807;
}
break;
}
};
var G__28808 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__28808__delegate.call(this, coll, k, v, kvs);
};
G__28808.cljs$lang$maxFixedArity = 3;
G__28808.cljs$lang$applyTo = (function (arglist__28813){
var coll = cljs.core.first(arglist__28813);
var k = cljs.core.first(cljs.core.next(arglist__28813));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__28813)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__28813)));
return G__28808__delegate(coll, k, v, kvs);
});
G__28808.cljs$lang$arity$variadic = G__28808__delegate;
return G__28808;
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
var G__28816__delegate = function (coll,k,ks){
while(true){
var ret__28815 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__28817 = ret__28815;
var G__28818 = cljs.core.first.call(null,ks);
var G__28819 = cljs.core.next.call(null,ks);
coll = G__28817;
k = G__28818;
ks = G__28819;
continue;
}
} else
{return ret__28815;
}
break;
}
};
var G__28816 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28816__delegate.call(this, coll, k, ks);
};
G__28816.cljs$lang$maxFixedArity = 2;
G__28816.cljs$lang$applyTo = (function (arglist__28820){
var coll = cljs.core.first(arglist__28820);
var k = cljs.core.first(cljs.core.next(arglist__28820));
var ks = cljs.core.rest(cljs.core.next(arglist__28820));
return G__28816__delegate(coll, k, ks);
});
G__28816.cljs$lang$arity$variadic = G__28816__delegate;
return G__28816;
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
if((function (){var G__28824__28825 = o;
if(G__28824__28825)
{if((function (){var or__3824__auto____28826 = (G__28824__28825.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____28826)
{return or__3824__auto____28826;
} else
{return G__28824__28825.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__28824__28825.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__28824__28825);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__28824__28825);
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
var G__28829__delegate = function (coll,k,ks){
while(true){
var ret__28828 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__28830 = ret__28828;
var G__28831 = cljs.core.first.call(null,ks);
var G__28832 = cljs.core.next.call(null,ks);
coll = G__28830;
k = G__28831;
ks = G__28832;
continue;
}
} else
{return ret__28828;
}
break;
}
};
var G__28829 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28829__delegate.call(this, coll, k, ks);
};
G__28829.cljs$lang$maxFixedArity = 2;
G__28829.cljs$lang$applyTo = (function (arglist__28833){
var coll = cljs.core.first(arglist__28833);
var k = cljs.core.first(cljs.core.next(arglist__28833));
var ks = cljs.core.rest(cljs.core.next(arglist__28833));
return G__28829__delegate(coll, k, ks);
});
G__28829.cljs$lang$arity$variadic = G__28829__delegate;
return G__28829;
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
var h__28835 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__28835);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__28835;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__28837 = (cljs.core.string_hash_cache[k]);
if(!((h__28837 == null)))
{return h__28837;
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
if((function (){var and__3822__auto____28839 = goog.isString(o);
if(and__3822__auto____28839)
{return check_cache;
} else
{return and__3822__auto____28839;
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
{var G__28843__28844 = x;
if(G__28843__28844)
{if((function (){var or__3824__auto____28845 = (G__28843__28844.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____28845)
{return or__3824__auto____28845;
} else
{return G__28843__28844.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__28843__28844.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__28843__28844);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__28843__28844);
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
{var G__28849__28850 = x;
if(G__28849__28850)
{if((function (){var or__3824__auto____28851 = (G__28849__28850.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____28851)
{return or__3824__auto____28851;
} else
{return G__28849__28850.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__28849__28850.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__28849__28850);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__28849__28850);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__28855__28856 = x;
if(G__28855__28856)
{if((function (){var or__3824__auto____28857 = (G__28855__28856.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____28857)
{return or__3824__auto____28857;
} else
{return G__28855__28856.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__28855__28856.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__28855__28856);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__28855__28856);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__28861__28862 = x;
if(G__28861__28862)
{if((function (){var or__3824__auto____28863 = (G__28861__28862.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____28863)
{return or__3824__auto____28863;
} else
{return G__28861__28862.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__28861__28862.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__28861__28862);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__28861__28862);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__28867__28868 = x;
if(G__28867__28868)
{if((function (){var or__3824__auto____28869 = (G__28867__28868.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____28869)
{return or__3824__auto____28869;
} else
{return G__28867__28868.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__28867__28868.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__28867__28868);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__28867__28868);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__28873__28874 = x;
if(G__28873__28874)
{if((function (){var or__3824__auto____28875 = (G__28873__28874.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____28875)
{return or__3824__auto____28875;
} else
{return G__28873__28874.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__28873__28874.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__28873__28874);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__28873__28874);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__28879__28880 = x;
if(G__28879__28880)
{if((function (){var or__3824__auto____28881 = (G__28879__28880.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____28881)
{return or__3824__auto____28881;
} else
{return G__28879__28880.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__28879__28880.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__28879__28880);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__28879__28880);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__28885__28886 = x;
if(G__28885__28886)
{if((function (){var or__3824__auto____28887 = (G__28885__28886.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3824__auto____28887)
{return or__3824__auto____28887;
} else
{return G__28885__28886.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__28885__28886.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__28885__28886);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__28885__28886);
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
var G__28888__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__28888 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__28888__delegate.call(this, keyvals);
};
G__28888.cljs$lang$maxFixedArity = 0;
G__28888.cljs$lang$applyTo = (function (arglist__28889){
var keyvals = cljs.core.seq(arglist__28889);;
return G__28888__delegate(keyvals);
});
G__28888.cljs$lang$arity$variadic = G__28888__delegate;
return G__28888;
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
var keys__28891 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__28891.push(key);
}));
return keys__28891;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__28895 = i;
var j__28896 = j;
var len__28897 = len;
while(true){
if((len__28897 === 0))
{return to;
} else
{(to[j__28896] = (from[i__28895]));
{
var G__28898 = (i__28895 + 1);
var G__28899 = (j__28896 + 1);
var G__28900 = (len__28897 - 1);
i__28895 = G__28898;
j__28896 = G__28899;
len__28897 = G__28900;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__28904 = (i + (len - 1));
var j__28905 = (j + (len - 1));
var len__28906 = len;
while(true){
if((len__28906 === 0))
{return to;
} else
{(to[j__28905] = (from[i__28904]));
{
var G__28907 = (i__28904 - 1);
var G__28908 = (j__28905 - 1);
var G__28909 = (len__28906 - 1);
i__28904 = G__28907;
j__28905 = G__28908;
len__28906 = G__28909;
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
{var G__28913__28914 = s;
if(G__28913__28914)
{if((function (){var or__3824__auto____28915 = (G__28913__28914.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____28915)
{return or__3824__auto____28915;
} else
{return G__28913__28914.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__28913__28914.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__28913__28914);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__28913__28914);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__28919__28920 = s;
if(G__28919__28920)
{if((function (){var or__3824__auto____28921 = (G__28919__28920.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____28921)
{return or__3824__auto____28921;
} else
{return G__28919__28920.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__28919__28920.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__28919__28920);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__28919__28920);
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
var and__3822__auto____28924 = goog.isString(x);
if(and__3822__auto____28924)
{return !((function (){var or__3824__auto____28925 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____28925)
{return or__3824__auto____28925;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____28924;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____28927 = goog.isString(x);
if(and__3822__auto____28927)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____28927;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____28929 = goog.isString(x);
if(and__3822__auto____28929)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____28929;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____28934 = cljs.core.fn_QMARK_.call(null,f);
if(or__3824__auto____28934)
{return or__3824__auto____28934;
} else
{var G__28935__28936 = f;
if(G__28935__28936)
{if((function (){var or__3824__auto____28937 = (G__28935__28936.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____28937)
{return or__3824__auto____28937;
} else
{return G__28935__28936.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__28935__28936.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__28935__28936);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__28935__28936);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____28941 = cljs.core.number_QMARK_.call(null,n);
if(and__3822__auto____28941)
{var and__3822__auto____28942 = !(isNaN(n));
if(and__3822__auto____28942)
{var and__3822__auto____28943 = !((n === Infinity));
if(and__3822__auto____28943)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3822__auto____28943;
}
} else
{return and__3822__auto____28942;
}
} else
{return and__3822__auto____28941;
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
if((function (){var and__3822__auto____28946 = !((coll == null));
if(and__3822__auto____28946)
{var and__3822__auto____28947 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3822__auto____28947)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3822__auto____28947;
}
} else
{return and__3822__auto____28946;
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
var G__28956__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__28952 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__28953 = more;
while(true){
var x__28954 = cljs.core.first.call(null,xs__28953);
var etc__28955 = cljs.core.next.call(null,xs__28953);
if(cljs.core.truth_(xs__28953))
{if(cljs.core.contains_QMARK_.call(null,s__28952,x__28954))
{return false;
} else
{{
var G__28957 = cljs.core.conj.call(null,s__28952,x__28954);
var G__28958 = etc__28955;
s__28952 = G__28957;
xs__28953 = G__28958;
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
var G__28956 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__28956__delegate.call(this, x, y, more);
};
G__28956.cljs$lang$maxFixedArity = 2;
G__28956.cljs$lang$applyTo = (function (arglist__28959){
var x = cljs.core.first(arglist__28959);
var y = cljs.core.first(cljs.core.next(arglist__28959));
var more = cljs.core.rest(cljs.core.next(arglist__28959));
return G__28956__delegate(x, y, more);
});
G__28956.cljs$lang$arity$variadic = G__28956__delegate;
return G__28956;
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
{if((function (){var G__28963__28964 = x;
if(G__28963__28964)
{if((function (){var or__3824__auto____28965 = (G__28963__28964.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3824__auto____28965)
{return or__3824__auto____28965;
} else
{return G__28963__28964.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__28963__28964.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__28963__28964);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__28963__28964);
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
var xl__28970 = cljs.core.count.call(null,xs);
var yl__28971 = cljs.core.count.call(null,ys);
if((xl__28970 < yl__28971))
{return -1;
} else
{if((xl__28970 > yl__28971))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__28970,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__28972 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3822__auto____28973 = (d__28972 === 0);
if(and__3822__auto____28973)
{return ((n + 1) < len);
} else
{return and__3822__auto____28973;
}
})())
{{
var G__28974 = xs;
var G__28975 = ys;
var G__28976 = len;
var G__28977 = (n + 1);
xs = G__28974;
ys = G__28975;
len = G__28976;
n = G__28977;
continue;
}
} else
{return d__28972;
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
var r__28979 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__28979))
{return r__28979;
} else
{if(cljs.core.truth_(r__28979))
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
{var a__28981 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__28981,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__28981);
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
var temp__3971__auto____28987 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____28987)
{var s__28988 = temp__3971__auto____28987;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__28988),cljs.core.next.call(null,s__28988));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__28989 = val;
var coll__28990 = cljs.core.seq.call(null,coll);
while(true){
if(coll__28990)
{var nval__28991 = f.call(null,val__28989,cljs.core.first.call(null,coll__28990));
if(cljs.core.reduced_QMARK_.call(null,nval__28991))
{return cljs.core.deref.call(null,nval__28991);
} else
{{
var G__28992 = nval__28991;
var G__28993 = cljs.core.next.call(null,coll__28990);
val__28989 = G__28992;
coll__28990 = G__28993;
continue;
}
}
} else
{return val__28989;
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
var a__28995 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__28995);
return cljs.core.vec.call(null,a__28995);
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
if((function (){var G__29002__29003 = coll;
if(G__29002__29003)
{if((function (){var or__3824__auto____29004 = (G__29002__29003.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____29004)
{return or__3824__auto____29004;
} else
{return G__29002__29003.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__29002__29003.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__29002__29003);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__29002__29003);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__29005__29006 = coll;
if(G__29005__29006)
{if((function (){var or__3824__auto____29007 = (G__29005__29006.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____29007)
{return or__3824__auto____29007;
} else
{return G__29005__29006.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__29005__29006.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__29005__29006);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__29005__29006);
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
var G__29008__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__29008 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29008__delegate.call(this, x, y, more);
};
G__29008.cljs$lang$maxFixedArity = 2;
G__29008.cljs$lang$applyTo = (function (arglist__29009){
var x = cljs.core.first(arglist__29009);
var y = cljs.core.first(cljs.core.next(arglist__29009));
var more = cljs.core.rest(cljs.core.next(arglist__29009));
return G__29008__delegate(x, y, more);
});
G__29008.cljs$lang$arity$variadic = G__29008__delegate;
return G__29008;
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
var G__29010__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__29010 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29010__delegate.call(this, x, y, more);
};
G__29010.cljs$lang$maxFixedArity = 2;
G__29010.cljs$lang$applyTo = (function (arglist__29011){
var x = cljs.core.first(arglist__29011);
var y = cljs.core.first(cljs.core.next(arglist__29011));
var more = cljs.core.rest(cljs.core.next(arglist__29011));
return G__29010__delegate(x, y, more);
});
G__29010.cljs$lang$arity$variadic = G__29010__delegate;
return G__29010;
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
var G__29012__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__29012 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29012__delegate.call(this, x, y, more);
};
G__29012.cljs$lang$maxFixedArity = 2;
G__29012.cljs$lang$applyTo = (function (arglist__29013){
var x = cljs.core.first(arglist__29013);
var y = cljs.core.first(cljs.core.next(arglist__29013));
var more = cljs.core.rest(cljs.core.next(arglist__29013));
return G__29012__delegate(x, y, more);
});
G__29012.cljs$lang$arity$variadic = G__29012__delegate;
return G__29012;
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
var G__29014__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__29014 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29014__delegate.call(this, x, y, more);
};
G__29014.cljs$lang$maxFixedArity = 2;
G__29014.cljs$lang$applyTo = (function (arglist__29015){
var x = cljs.core.first(arglist__29015);
var y = cljs.core.first(cljs.core.next(arglist__29015));
var more = cljs.core.rest(cljs.core.next(arglist__29015));
return G__29014__delegate(x, y, more);
});
G__29014.cljs$lang$arity$variadic = G__29014__delegate;
return G__29014;
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
var G__29016__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__29017 = y;
var G__29018 = cljs.core.first.call(null,more);
var G__29019 = cljs.core.next.call(null,more);
x = G__29017;
y = G__29018;
more = G__29019;
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
var G__29016 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29016__delegate.call(this, x, y, more);
};
G__29016.cljs$lang$maxFixedArity = 2;
G__29016.cljs$lang$applyTo = (function (arglist__29020){
var x = cljs.core.first(arglist__29020);
var y = cljs.core.first(cljs.core.next(arglist__29020));
var more = cljs.core.rest(cljs.core.next(arglist__29020));
return G__29016__delegate(x, y, more);
});
G__29016.cljs$lang$arity$variadic = G__29016__delegate;
return G__29016;
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
var G__29021__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__29022 = y;
var G__29023 = cljs.core.first.call(null,more);
var G__29024 = cljs.core.next.call(null,more);
x = G__29022;
y = G__29023;
more = G__29024;
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
var G__29021 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29021__delegate.call(this, x, y, more);
};
G__29021.cljs$lang$maxFixedArity = 2;
G__29021.cljs$lang$applyTo = (function (arglist__29025){
var x = cljs.core.first(arglist__29025);
var y = cljs.core.first(cljs.core.next(arglist__29025));
var more = cljs.core.rest(cljs.core.next(arglist__29025));
return G__29021__delegate(x, y, more);
});
G__29021.cljs$lang$arity$variadic = G__29021__delegate;
return G__29021;
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
var G__29026__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__29027 = y;
var G__29028 = cljs.core.first.call(null,more);
var G__29029 = cljs.core.next.call(null,more);
x = G__29027;
y = G__29028;
more = G__29029;
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
var G__29026 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29026__delegate.call(this, x, y, more);
};
G__29026.cljs$lang$maxFixedArity = 2;
G__29026.cljs$lang$applyTo = (function (arglist__29030){
var x = cljs.core.first(arglist__29030);
var y = cljs.core.first(cljs.core.next(arglist__29030));
var more = cljs.core.rest(cljs.core.next(arglist__29030));
return G__29026__delegate(x, y, more);
});
G__29026.cljs$lang$arity$variadic = G__29026__delegate;
return G__29026;
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
var G__29031__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__29032 = y;
var G__29033 = cljs.core.first.call(null,more);
var G__29034 = cljs.core.next.call(null,more);
x = G__29032;
y = G__29033;
more = G__29034;
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
var G__29031 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29031__delegate.call(this, x, y, more);
};
G__29031.cljs$lang$maxFixedArity = 2;
G__29031.cljs$lang$applyTo = (function (arglist__29035){
var x = cljs.core.first(arglist__29035);
var y = cljs.core.first(cljs.core.next(arglist__29035));
var more = cljs.core.rest(cljs.core.next(arglist__29035));
return G__29031__delegate(x, y, more);
});
G__29031.cljs$lang$arity$variadic = G__29031__delegate;
return G__29031;
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
var G__29036__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__29036 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29036__delegate.call(this, x, y, more);
};
G__29036.cljs$lang$maxFixedArity = 2;
G__29036.cljs$lang$applyTo = (function (arglist__29037){
var x = cljs.core.first(arglist__29037);
var y = cljs.core.first(cljs.core.next(arglist__29037));
var more = cljs.core.rest(cljs.core.next(arglist__29037));
return G__29036__delegate(x, y, more);
});
G__29036.cljs$lang$arity$variadic = G__29036__delegate;
return G__29036;
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
var G__29038__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__29038 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29038__delegate.call(this, x, y, more);
};
G__29038.cljs$lang$maxFixedArity = 2;
G__29038.cljs$lang$applyTo = (function (arglist__29039){
var x = cljs.core.first(arglist__29039);
var y = cljs.core.first(cljs.core.next(arglist__29039));
var more = cljs.core.rest(cljs.core.next(arglist__29039));
return G__29038__delegate(x, y, more);
});
G__29038.cljs$lang$arity$variadic = G__29038__delegate;
return G__29038;
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
var rem__29041 = (n % d);
return cljs.core.fix.call(null,((n - rem__29041) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__29043 = cljs.core.quot.call(null,n,d);
return (n - (d * q__29043));
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
var v__29046 = (v - ((v >> 1) & 1431655765));
var v__29047 = ((v__29046 & 858993459) + ((v__29046 >> 2) & 858993459));
return ((((v__29047 + (v__29047 >> 4)) & 252645135) * 16843009) >> 24);
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
var G__29048__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__29049 = y;
var G__29050 = cljs.core.first.call(null,more);
var G__29051 = cljs.core.next.call(null,more);
x = G__29049;
y = G__29050;
more = G__29051;
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
var G__29048 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29048__delegate.call(this, x, y, more);
};
G__29048.cljs$lang$maxFixedArity = 2;
G__29048.cljs$lang$applyTo = (function (arglist__29052){
var x = cljs.core.first(arglist__29052);
var y = cljs.core.first(cljs.core.next(arglist__29052));
var more = cljs.core.rest(cljs.core.next(arglist__29052));
return G__29048__delegate(x, y, more);
});
G__29048.cljs$lang$arity$variadic = G__29048__delegate;
return G__29048;
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
var n__29056 = n;
var xs__29057 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____29058 = xs__29057;
if(and__3822__auto____29058)
{return (n__29056 > 0);
} else
{return and__3822__auto____29058;
}
})()))
{{
var G__29059 = (n__29056 - 1);
var G__29060 = cljs.core.next.call(null,xs__29057);
n__29056 = G__29059;
xs__29057 = G__29060;
continue;
}
} else
{return xs__29057;
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
var G__29061__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__29062 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__29063 = cljs.core.next.call(null,more);
sb = G__29062;
more = G__29063;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__29061 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__29061__delegate.call(this, x, ys);
};
G__29061.cljs$lang$maxFixedArity = 1;
G__29061.cljs$lang$applyTo = (function (arglist__29064){
var x = cljs.core.first(arglist__29064);
var ys = cljs.core.rest(arglist__29064);
return G__29061__delegate(x, ys);
});
G__29061.cljs$lang$arity$variadic = G__29061__delegate;
return G__29061;
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
var G__29065__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__29066 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__29067 = cljs.core.next.call(null,more);
sb = G__29066;
more = G__29067;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__29065 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__29065__delegate.call(this, x, ys);
};
G__29065.cljs$lang$maxFixedArity = 1;
G__29065.cljs$lang$applyTo = (function (arglist__29068){
var x = cljs.core.first(arglist__29068);
var ys = cljs.core.rest(arglist__29068);
return G__29065__delegate(x, ys);
});
G__29065.cljs$lang$arity$variadic = G__29065__delegate;
return G__29065;
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
var args__29072 = cljs.core.map.call(null,(function (x){
if((function (){var or__3824__auto____29071 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____29071)
{return or__3824__auto____29071;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__29072);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__29073){
var fmt = cljs.core.first(arglist__29073);
var args = cljs.core.rest(arglist__29073);
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
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__29076 = cljs.core.seq.call(null,x);
var ys__29077 = cljs.core.seq.call(null,y);
while(true){
if((xs__29076 == null))
{return (ys__29077 == null);
} else
{if((ys__29077 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__29076),cljs.core.first.call(null,ys__29077)))
{{
var G__29078 = cljs.core.next.call(null,xs__29076);
var G__29079 = cljs.core.next.call(null,ys__29077);
xs__29076 = G__29078;
ys__29077 = G__29079;
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
return cljs.core.reduce.call(null,(function (p1__29080_SHARP_,p2__29081_SHARP_){
return cljs.core.hash_combine.call(null,p1__29080_SHARP_,cljs.core.hash.call(null,p2__29081_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__29085 = 0;
var s__29086 = cljs.core.seq.call(null,m);
while(true){
if(s__29086)
{var e__29087 = cljs.core.first.call(null,s__29086);
{
var G__29088 = ((h__29085 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__29087)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__29087)))) % 4503599627370496);
var G__29089 = cljs.core.next.call(null,s__29086);
h__29085 = G__29088;
s__29086 = G__29089;
continue;
}
} else
{return h__29085;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__29093 = 0;
var s__29094 = cljs.core.seq.call(null,s);
while(true){
if(s__29094)
{var e__29095 = cljs.core.first.call(null,s__29094);
{
var G__29096 = ((h__29093 + cljs.core.hash.call(null,e__29095)) % 4503599627370496);
var G__29097 = cljs.core.next.call(null,s__29094);
h__29093 = G__29096;
s__29094 = G__29097;
continue;
}
} else
{return h__29093;
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
var G__29105__29106 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__29105__29106)
{var vec__29107__29108 = cljs.core.first.call(null,G__29105__29106);
var key_name__29109 = cljs.core.nth.call(null,vec__29107__29108,0,null);
var f__29110 = cljs.core.nth.call(null,vec__29107__29108,1,null);
var str_name__29111 = cljs.core.name.call(null,key_name__29109);
(obj[str_name__29111] = f__29110);
{
var G__29112 = cljs.core.next.call(null,G__29105__29106);
G__29105__29106 = G__29112;
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
var this__29113 = this;
var h__2203__auto____29114 = this__29113.__hash;
if(!((h__2203__auto____29114 == null)))
{return h__2203__auto____29114;
} else
{var h__2203__auto____29115 = cljs.core.hash_coll.call(null,coll);
this__29113.__hash = h__2203__auto____29115;
return h__2203__auto____29115;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__29116 = this;
if((this__29116.count === 1))
{return null;
} else
{return this__29116.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__29117 = this;
return (new cljs.core.List(this__29117.meta,o,coll,(this__29117.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__29118 = this;
var this__29119 = this;
return cljs.core.pr_str.call(null,this__29119);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__29120 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__29121 = this;
return this__29121.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__29122 = this;
return this__29122.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__29123 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__29124 = this;
return this__29124.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__29125 = this;
if((this__29125.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__29125.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__29126 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__29127 = this;
return (new cljs.core.List(meta,this__29127.first,this__29127.rest,this__29127.count,this__29127.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__29128 = this;
return this__29128.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__29129 = this;
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
var this__29130 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__29131 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__29132 = this;
return (new cljs.core.List(this__29132.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__29133 = this;
var this__29134 = this;
return cljs.core.pr_str.call(null,this__29134);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__29135 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__29136 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__29137 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__29138 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__29139 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__29140 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__29141 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__29142 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__29143 = this;
return this__29143.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__29144 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__29148__29149 = coll;
if(G__29148__29149)
{if((function (){var or__3824__auto____29150 = (G__29148__29149.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____29150)
{return or__3824__auto____29150;
} else
{return G__29148__29149.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__29148__29149.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__29148__29149);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__29148__29149);
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
var G__29151__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__29151 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29151__delegate.call(this, x, y, z, items);
};
G__29151.cljs$lang$maxFixedArity = 3;
G__29151.cljs$lang$applyTo = (function (arglist__29152){
var x = cljs.core.first(arglist__29152);
var y = cljs.core.first(cljs.core.next(arglist__29152));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29152)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29152)));
return G__29151__delegate(x, y, z, items);
});
G__29151.cljs$lang$arity$variadic = G__29151__delegate;
return G__29151;
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
var this__29153 = this;
var h__2203__auto____29154 = this__29153.__hash;
if(!((h__2203__auto____29154 == null)))
{return h__2203__auto____29154;
} else
{var h__2203__auto____29155 = cljs.core.hash_coll.call(null,coll);
this__29153.__hash = h__2203__auto____29155;
return h__2203__auto____29155;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__29156 = this;
if((this__29156.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__29156.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__29157 = this;
return (new cljs.core.Cons(null,o,coll,this__29157.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__29158 = this;
var this__29159 = this;
return cljs.core.pr_str.call(null,this__29159);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__29160 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__29161 = this;
return this__29161.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__29162 = this;
if((this__29162.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__29162.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__29163 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__29164 = this;
return (new cljs.core.Cons(meta,this__29164.first,this__29164.rest,this__29164.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__29165 = this;
return this__29165.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__29166 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__29166.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____29171 = (coll == null);
if(or__3824__auto____29171)
{return or__3824__auto____29171;
} else
{var G__29172__29173 = coll;
if(G__29172__29173)
{if((function (){var or__3824__auto____29174 = (G__29172__29173.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____29174)
{return or__3824__auto____29174;
} else
{return G__29172__29173.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__29172__29173.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__29172__29173);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__29172__29173);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__29178__29179 = x;
if(G__29178__29179)
{if((function (){var or__3824__auto____29180 = (G__29178__29179.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____29180)
{return or__3824__auto____29180;
} else
{return G__29178__29179.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__29178__29179.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__29178__29179);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__29178__29179);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__29181 = null;
var G__29181__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__29181__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__29181 = function(string,f,start){
switch(arguments.length){
case 2:
return G__29181__2.call(this,string,f);
case 3:
return G__29181__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__29181;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__29182 = null;
var G__29182__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__29182__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__29182 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__29182__2.call(this,string,k);
case 3:
return G__29182__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__29182;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__29183 = null;
var G__29183__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__29183__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__29183 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__29183__2.call(this,string,n);
case 3:
return G__29183__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__29183;
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
var G__29195 = null;
var G__29195__2 = (function (this_sym29186,coll){
var this__29188 = this;
var this_sym29186__29189 = this;
var ___29190 = this_sym29186__29189;
if((coll == null))
{return null;
} else
{var strobj__29191 = coll.strobj;
if((strobj__29191 == null))
{return cljs.core._lookup.call(null,coll,this__29188.k,null);
} else
{return (strobj__29191[this__29188.k]);
}
}
});
var G__29195__3 = (function (this_sym29187,coll,not_found){
var this__29188 = this;
var this_sym29187__29192 = this;
var ___29193 = this_sym29187__29192;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,this__29188.k,not_found);
}
});
G__29195 = function(this_sym29187,coll,not_found){
switch(arguments.length){
case 2:
return G__29195__2.call(this,this_sym29187,coll);
case 3:
return G__29195__3.call(this,this_sym29187,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__29195;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym29184,args29185){
var this__29194 = this;
return this_sym29184.call.apply(this_sym29184,[this_sym29184].concat(args29185.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__29204 = null;
var G__29204__2 = (function (this_sym29198,coll){
var this_sym29198__29200 = this;
var this__29201 = this_sym29198__29200;
return cljs.core._lookup.call(null,coll,this__29201.toString(),null);
});
var G__29204__3 = (function (this_sym29199,coll,not_found){
var this_sym29199__29202 = this;
var this__29203 = this_sym29199__29202;
return cljs.core._lookup.call(null,coll,this__29203.toString(),not_found);
});
G__29204 = function(this_sym29199,coll,not_found){
switch(arguments.length){
case 2:
return G__29204__2.call(this,this_sym29199,coll);
case 3:
return G__29204__3.call(this,this_sym29199,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__29204;
})()
;
String.prototype.apply = (function (this_sym29196,args29197){
return this_sym29196.call.apply(this_sym29196,[this_sym29196].concat(args29197.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__29206 = lazy_seq.x;
if(lazy_seq.realized)
{return x__29206;
} else
{lazy_seq.x = x__29206.call(null);
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
var this__29207 = this;
var h__2203__auto____29208 = this__29207.__hash;
if(!((h__2203__auto____29208 == null)))
{return h__2203__auto____29208;
} else
{var h__2203__auto____29209 = cljs.core.hash_coll.call(null,coll);
this__29207.__hash = h__2203__auto____29209;
return h__2203__auto____29209;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__29210 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__29211 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__29212 = this;
var this__29213 = this;
return cljs.core.pr_str.call(null,this__29213);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__29214 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__29215 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__29216 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__29217 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__29218 = this;
return (new cljs.core.LazySeq(meta,this__29218.realized,this__29218.x,this__29218.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__29219 = this;
return this__29219.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__29220 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__29220.meta);
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
var this__29221 = this;
return this__29221.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__29222 = this;
var ___29223 = this;
(this__29222.buf[this__29222.end] = o);
return this__29222.end = (this__29222.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__29224 = this;
var ___29225 = this;
var ret__29226 = (new cljs.core.ArrayChunk(this__29224.buf,0,this__29224.end));
this__29224.buf = null;
return ret__29226;
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
var this__29227 = this;
return cljs.core.array_reduce.call(null,this__29227.arr,f,(this__29227.arr[this__29227.off]),(this__29227.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__29228 = this;
return cljs.core.array_reduce.call(null,this__29228.arr,f,start,this__29228.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__29229 = this;
if((this__29229.off === this__29229.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__29229.arr,(this__29229.off + 1),this__29229.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__29230 = this;
return (this__29230.arr[(this__29230.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__29231 = this;
if((function (){var and__3822__auto____29232 = (i >= 0);
if(and__3822__auto____29232)
{return (i < (this__29231.end - this__29231.off));
} else
{return and__3822__auto____29232;
}
})())
{return (this__29231.arr[(this__29231.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__29233 = this;
return (this__29233.end - this__29233.off);
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
var this__29234 = this;
var h__2203__auto____29235 = this__29234.__hash;
if(!((h__2203__auto____29235 == null)))
{return h__2203__auto____29235;
} else
{var h__2203__auto____29236 = cljs.core.hash_coll.call(null,coll);
this__29234.__hash = h__2203__auto____29236;
return h__2203__auto____29236;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__29237 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__29238 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__29239 = this;
return cljs.core._nth.call(null,this__29239.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__29240 = this;
if((cljs.core._count.call(null,this__29240.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__29240.chunk),this__29240.more,this__29240.meta,null));
} else
{if((this__29240.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__29240.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__29241 = this;
if((this__29241.more == null))
{return null;
} else
{return this__29241.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__29242 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__29243 = this;
return (new cljs.core.ChunkedCons(this__29243.chunk,this__29243.more,m,this__29243.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__29244 = this;
return this__29244.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__29245 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__29245.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__29246 = this;
return this__29246.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__29247 = this;
if((this__29247.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__29247.more;
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
if((function (){var G__29251__29252 = s;
if(G__29251__29252)
{if((function (){var or__3824__auto____29253 = (G__29251__29252.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3824__auto____29253)
{return or__3824__auto____29253;
} else
{return G__29251__29252.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__29251__29252.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__29251__29252);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__29251__29252);
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
var ary__29256 = [];
var s__29257 = s;
while(true){
if(cljs.core.seq.call(null,s__29257))
{ary__29256.push(cljs.core.first.call(null,s__29257));
{
var G__29258 = cljs.core.next.call(null,s__29257);
s__29257 = G__29258;
continue;
}
} else
{return ary__29256;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__29262 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__29263 = 0;
var xs__29264 = cljs.core.seq.call(null,coll);
while(true){
if(xs__29264)
{(ret__29262[i__29263] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__29264)));
{
var G__29265 = (i__29263 + 1);
var G__29266 = cljs.core.next.call(null,xs__29264);
i__29263 = G__29265;
xs__29264 = G__29266;
continue;
}
} else
{}
break;
}
return ret__29262;
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
var a__29274 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__29275 = cljs.core.seq.call(null,init_val_or_seq);
var i__29276 = 0;
var s__29277 = s__29275;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____29278 = s__29277;
if(and__3822__auto____29278)
{return (i__29276 < size);
} else
{return and__3822__auto____29278;
}
})()))
{(a__29274[i__29276] = cljs.core.first.call(null,s__29277));
{
var G__29281 = (i__29276 + 1);
var G__29282 = cljs.core.next.call(null,s__29277);
i__29276 = G__29281;
s__29277 = G__29282;
continue;
}
} else
{return a__29274;
}
break;
}
} else
{var n__2549__auto____29279 = size;
var i__29280 = 0;
while(true){
if((i__29280 < n__2549__auto____29279))
{(a__29274[i__29280] = init_val_or_seq);
{
var G__29283 = (i__29280 + 1);
i__29280 = G__29283;
continue;
}
} else
{}
break;
}
return a__29274;
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
var a__29291 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__29292 = cljs.core.seq.call(null,init_val_or_seq);
var i__29293 = 0;
var s__29294 = s__29292;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____29295 = s__29294;
if(and__3822__auto____29295)
{return (i__29293 < size);
} else
{return and__3822__auto____29295;
}
})()))
{(a__29291[i__29293] = cljs.core.first.call(null,s__29294));
{
var G__29298 = (i__29293 + 1);
var G__29299 = cljs.core.next.call(null,s__29294);
i__29293 = G__29298;
s__29294 = G__29299;
continue;
}
} else
{return a__29291;
}
break;
}
} else
{var n__2549__auto____29296 = size;
var i__29297 = 0;
while(true){
if((i__29297 < n__2549__auto____29296))
{(a__29291[i__29297] = init_val_or_seq);
{
var G__29300 = (i__29297 + 1);
i__29297 = G__29300;
continue;
}
} else
{}
break;
}
return a__29291;
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
var a__29308 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__29309 = cljs.core.seq.call(null,init_val_or_seq);
var i__29310 = 0;
var s__29311 = s__29309;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____29312 = s__29311;
if(and__3822__auto____29312)
{return (i__29310 < size);
} else
{return and__3822__auto____29312;
}
})()))
{(a__29308[i__29310] = cljs.core.first.call(null,s__29311));
{
var G__29315 = (i__29310 + 1);
var G__29316 = cljs.core.next.call(null,s__29311);
i__29310 = G__29315;
s__29311 = G__29316;
continue;
}
} else
{return a__29308;
}
break;
}
} else
{var n__2549__auto____29313 = size;
var i__29314 = 0;
while(true){
if((i__29314 < n__2549__auto____29313))
{(a__29308[i__29314] = init_val_or_seq);
{
var G__29317 = (i__29314 + 1);
i__29314 = G__29317;
continue;
}
} else
{}
break;
}
return a__29308;
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
{var s__29322 = s;
var i__29323 = n;
var sum__29324 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____29325 = (i__29323 > 0);
if(and__3822__auto____29325)
{return cljs.core.seq.call(null,s__29322);
} else
{return and__3822__auto____29325;
}
})()))
{{
var G__29326 = cljs.core.next.call(null,s__29322);
var G__29327 = (i__29323 - 1);
var G__29328 = (sum__29324 + 1);
s__29322 = G__29326;
i__29323 = G__29327;
sum__29324 = G__29328;
continue;
}
} else
{return sum__29324;
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
var s__29333 = cljs.core.seq.call(null,x);
if(s__29333)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__29333))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__29333),concat.call(null,cljs.core.chunk_rest.call(null,s__29333),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__29333),concat.call(null,cljs.core.rest.call(null,s__29333),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__29337__delegate = function (x,y,zs){
var cat__29336 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__29335 = cljs.core.seq.call(null,xys);
if(xys__29335)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__29335))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__29335),cat.call(null,cljs.core.chunk_rest.call(null,xys__29335),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__29335),cat.call(null,cljs.core.rest.call(null,xys__29335),zs));
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
return cat__29336.call(null,concat.call(null,x,y),zs);
};
var G__29337 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29337__delegate.call(this, x, y, zs);
};
G__29337.cljs$lang$maxFixedArity = 2;
G__29337.cljs$lang$applyTo = (function (arglist__29338){
var x = cljs.core.first(arglist__29338);
var y = cljs.core.first(cljs.core.next(arglist__29338));
var zs = cljs.core.rest(cljs.core.next(arglist__29338));
return G__29337__delegate(x, y, zs);
});
G__29337.cljs$lang$arity$variadic = G__29337__delegate;
return G__29337;
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
var G__29339__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__29339 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__29339__delegate.call(this, a, b, c, d, more);
};
G__29339.cljs$lang$maxFixedArity = 4;
G__29339.cljs$lang$applyTo = (function (arglist__29340){
var a = cljs.core.first(arglist__29340);
var b = cljs.core.first(cljs.core.next(arglist__29340));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29340)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__29340))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__29340))));
return G__29339__delegate(a, b, c, d, more);
});
G__29339.cljs$lang$arity$variadic = G__29339__delegate;
return G__29339;
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
var args__29382 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__29383 = cljs.core._first.call(null,args__29382);
var args__29384 = cljs.core._rest.call(null,args__29382);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__29383);
} else
{return f.call(null,a__29383);
}
} else
{var b__29385 = cljs.core._first.call(null,args__29384);
var args__29386 = cljs.core._rest.call(null,args__29384);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__29383,b__29385);
} else
{return f.call(null,a__29383,b__29385);
}
} else
{var c__29387 = cljs.core._first.call(null,args__29386);
var args__29388 = cljs.core._rest.call(null,args__29386);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__29383,b__29385,c__29387);
} else
{return f.call(null,a__29383,b__29385,c__29387);
}
} else
{var d__29389 = cljs.core._first.call(null,args__29388);
var args__29390 = cljs.core._rest.call(null,args__29388);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__29383,b__29385,c__29387,d__29389);
} else
{return f.call(null,a__29383,b__29385,c__29387,d__29389);
}
} else
{var e__29391 = cljs.core._first.call(null,args__29390);
var args__29392 = cljs.core._rest.call(null,args__29390);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__29383,b__29385,c__29387,d__29389,e__29391);
} else
{return f.call(null,a__29383,b__29385,c__29387,d__29389,e__29391);
}
} else
{var f__29393 = cljs.core._first.call(null,args__29392);
var args__29394 = cljs.core._rest.call(null,args__29392);
if((argc === 6))
{if(f__29393.cljs$lang$arity$6)
{return f__29393.cljs$lang$arity$6(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393);
}
} else
{var g__29395 = cljs.core._first.call(null,args__29394);
var args__29396 = cljs.core._rest.call(null,args__29394);
if((argc === 7))
{if(f__29393.cljs$lang$arity$7)
{return f__29393.cljs$lang$arity$7(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395);
}
} else
{var h__29397 = cljs.core._first.call(null,args__29396);
var args__29398 = cljs.core._rest.call(null,args__29396);
if((argc === 8))
{if(f__29393.cljs$lang$arity$8)
{return f__29393.cljs$lang$arity$8(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397);
}
} else
{var i__29399 = cljs.core._first.call(null,args__29398);
var args__29400 = cljs.core._rest.call(null,args__29398);
if((argc === 9))
{if(f__29393.cljs$lang$arity$9)
{return f__29393.cljs$lang$arity$9(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399);
}
} else
{var j__29401 = cljs.core._first.call(null,args__29400);
var args__29402 = cljs.core._rest.call(null,args__29400);
if((argc === 10))
{if(f__29393.cljs$lang$arity$10)
{return f__29393.cljs$lang$arity$10(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401);
}
} else
{var k__29403 = cljs.core._first.call(null,args__29402);
var args__29404 = cljs.core._rest.call(null,args__29402);
if((argc === 11))
{if(f__29393.cljs$lang$arity$11)
{return f__29393.cljs$lang$arity$11(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403);
}
} else
{var l__29405 = cljs.core._first.call(null,args__29404);
var args__29406 = cljs.core._rest.call(null,args__29404);
if((argc === 12))
{if(f__29393.cljs$lang$arity$12)
{return f__29393.cljs$lang$arity$12(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405);
}
} else
{var m__29407 = cljs.core._first.call(null,args__29406);
var args__29408 = cljs.core._rest.call(null,args__29406);
if((argc === 13))
{if(f__29393.cljs$lang$arity$13)
{return f__29393.cljs$lang$arity$13(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407);
}
} else
{var n__29409 = cljs.core._first.call(null,args__29408);
var args__29410 = cljs.core._rest.call(null,args__29408);
if((argc === 14))
{if(f__29393.cljs$lang$arity$14)
{return f__29393.cljs$lang$arity$14(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409);
}
} else
{var o__29411 = cljs.core._first.call(null,args__29410);
var args__29412 = cljs.core._rest.call(null,args__29410);
if((argc === 15))
{if(f__29393.cljs$lang$arity$15)
{return f__29393.cljs$lang$arity$15(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409,o__29411);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409,o__29411);
}
} else
{var p__29413 = cljs.core._first.call(null,args__29412);
var args__29414 = cljs.core._rest.call(null,args__29412);
if((argc === 16))
{if(f__29393.cljs$lang$arity$16)
{return f__29393.cljs$lang$arity$16(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409,o__29411,p__29413);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409,o__29411,p__29413);
}
} else
{var q__29415 = cljs.core._first.call(null,args__29414);
var args__29416 = cljs.core._rest.call(null,args__29414);
if((argc === 17))
{if(f__29393.cljs$lang$arity$17)
{return f__29393.cljs$lang$arity$17(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409,o__29411,p__29413,q__29415);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409,o__29411,p__29413,q__29415);
}
} else
{var r__29417 = cljs.core._first.call(null,args__29416);
var args__29418 = cljs.core._rest.call(null,args__29416);
if((argc === 18))
{if(f__29393.cljs$lang$arity$18)
{return f__29393.cljs$lang$arity$18(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409,o__29411,p__29413,q__29415,r__29417);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409,o__29411,p__29413,q__29415,r__29417);
}
} else
{var s__29419 = cljs.core._first.call(null,args__29418);
var args__29420 = cljs.core._rest.call(null,args__29418);
if((argc === 19))
{if(f__29393.cljs$lang$arity$19)
{return f__29393.cljs$lang$arity$19(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409,o__29411,p__29413,q__29415,r__29417,s__29419);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409,o__29411,p__29413,q__29415,r__29417,s__29419);
}
} else
{var t__29421 = cljs.core._first.call(null,args__29420);
var args__29422 = cljs.core._rest.call(null,args__29420);
if((argc === 20))
{if(f__29393.cljs$lang$arity$20)
{return f__29393.cljs$lang$arity$20(a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409,o__29411,p__29413,q__29415,r__29417,s__29419,t__29421);
} else
{return f__29393.call(null,a__29383,b__29385,c__29387,d__29389,e__29391,f__29393,g__29395,h__29397,i__29399,j__29401,k__29403,l__29405,m__29407,n__29409,o__29411,p__29413,q__29415,r__29417,s__29419,t__29421);
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
var fixed_arity__29437 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__29438 = cljs.core.bounded_count.call(null,args,(fixed_arity__29437 + 1));
if((bc__29438 <= fixed_arity__29437))
{return cljs.core.apply_to.call(null,f,bc__29438,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__29439 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__29440 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__29441 = cljs.core.bounded_count.call(null,arglist__29439,(fixed_arity__29440 + 1));
if((bc__29441 <= fixed_arity__29440))
{return cljs.core.apply_to.call(null,f,bc__29441,arglist__29439);
} else
{return f.cljs$lang$applyTo(arglist__29439);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__29439));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__29442 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__29443 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__29444 = cljs.core.bounded_count.call(null,arglist__29442,(fixed_arity__29443 + 1));
if((bc__29444 <= fixed_arity__29443))
{return cljs.core.apply_to.call(null,f,bc__29444,arglist__29442);
} else
{return f.cljs$lang$applyTo(arglist__29442);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__29442));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__29445 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__29446 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__29447 = cljs.core.bounded_count.call(null,arglist__29445,(fixed_arity__29446 + 1));
if((bc__29447 <= fixed_arity__29446))
{return cljs.core.apply_to.call(null,f,bc__29447,arglist__29445);
} else
{return f.cljs$lang$applyTo(arglist__29445);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__29445));
}
});
var apply__6 = (function() { 
var G__29451__delegate = function (f,a,b,c,d,args){
var arglist__29448 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__29449 = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc__29450 = cljs.core.bounded_count.call(null,arglist__29448,(fixed_arity__29449 + 1));
if((bc__29450 <= fixed_arity__29449))
{return cljs.core.apply_to.call(null,f,bc__29450,arglist__29448);
} else
{return f.cljs$lang$applyTo(arglist__29448);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__29448));
}
};
var G__29451 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__29451__delegate.call(this, f, a, b, c, d, args);
};
G__29451.cljs$lang$maxFixedArity = 5;
G__29451.cljs$lang$applyTo = (function (arglist__29452){
var f = cljs.core.first(arglist__29452);
var a = cljs.core.first(cljs.core.next(arglist__29452));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29452)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__29452))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__29452)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__29452)))));
return G__29451__delegate(f, a, b, c, d, args);
});
G__29451.cljs$lang$arity$variadic = G__29451__delegate;
return G__29451;
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
vary_meta.cljs$lang$applyTo = (function (arglist__29453){
var obj = cljs.core.first(arglist__29453);
var f = cljs.core.first(cljs.core.next(arglist__29453));
var args = cljs.core.rest(cljs.core.next(arglist__29453));
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
var G__29454__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__29454 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29454__delegate.call(this, x, y, more);
};
G__29454.cljs$lang$maxFixedArity = 2;
G__29454.cljs$lang$applyTo = (function (arglist__29455){
var x = cljs.core.first(arglist__29455);
var y = cljs.core.first(cljs.core.next(arglist__29455));
var more = cljs.core.rest(cljs.core.next(arglist__29455));
return G__29454__delegate(x, y, more);
});
G__29454.cljs$lang$arity$variadic = G__29454__delegate;
return G__29454;
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
var G__29456 = pred;
var G__29457 = cljs.core.next.call(null,coll);
pred = G__29456;
coll = G__29457;
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
{var or__3824__auto____29459 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3824__auto____29459))
{return or__3824__auto____29459;
} else
{{
var G__29460 = pred;
var G__29461 = cljs.core.next.call(null,coll);
pred = G__29460;
coll = G__29461;
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
var G__29462 = null;
var G__29462__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__29462__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__29462__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__29462__3 = (function() { 
var G__29463__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__29463 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__29463__delegate.call(this, x, y, zs);
};
G__29463.cljs$lang$maxFixedArity = 2;
G__29463.cljs$lang$applyTo = (function (arglist__29464){
var x = cljs.core.first(arglist__29464);
var y = cljs.core.first(cljs.core.next(arglist__29464));
var zs = cljs.core.rest(cljs.core.next(arglist__29464));
return G__29463__delegate(x, y, zs);
});
G__29463.cljs$lang$arity$variadic = G__29463__delegate;
return G__29463;
})()
;
G__29462 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__29462__0.call(this);
case 1:
return G__29462__1.call(this,x);
case 2:
return G__29462__2.call(this,x,y);
default:
return G__29462__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__29462.cljs$lang$maxFixedArity = 2;
G__29462.cljs$lang$applyTo = G__29462__3.cljs$lang$applyTo;
return G__29462;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__29465__delegate = function (args){
return x;
};
var G__29465 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__29465__delegate.call(this, args);
};
G__29465.cljs$lang$maxFixedArity = 0;
G__29465.cljs$lang$applyTo = (function (arglist__29466){
var args = cljs.core.seq(arglist__29466);;
return G__29465__delegate(args);
});
G__29465.cljs$lang$arity$variadic = G__29465__delegate;
return G__29465;
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
var G__29473 = null;
var G__29473__0 = (function (){
return f.call(null,g.call(null));
});
var G__29473__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__29473__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__29473__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__29473__4 = (function() { 
var G__29474__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__29474 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29474__delegate.call(this, x, y, z, args);
};
G__29474.cljs$lang$maxFixedArity = 3;
G__29474.cljs$lang$applyTo = (function (arglist__29475){
var x = cljs.core.first(arglist__29475);
var y = cljs.core.first(cljs.core.next(arglist__29475));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29475)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29475)));
return G__29474__delegate(x, y, z, args);
});
G__29474.cljs$lang$arity$variadic = G__29474__delegate;
return G__29474;
})()
;
G__29473 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29473__0.call(this);
case 1:
return G__29473__1.call(this,x);
case 2:
return G__29473__2.call(this,x,y);
case 3:
return G__29473__3.call(this,x,y,z);
default:
return G__29473__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__29473.cljs$lang$maxFixedArity = 3;
G__29473.cljs$lang$applyTo = G__29473__4.cljs$lang$applyTo;
return G__29473;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__29476 = null;
var G__29476__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__29476__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__29476__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__29476__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__29476__4 = (function() { 
var G__29477__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__29477 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29477__delegate.call(this, x, y, z, args);
};
G__29477.cljs$lang$maxFixedArity = 3;
G__29477.cljs$lang$applyTo = (function (arglist__29478){
var x = cljs.core.first(arglist__29478);
var y = cljs.core.first(cljs.core.next(arglist__29478));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29478)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29478)));
return G__29477__delegate(x, y, z, args);
});
G__29477.cljs$lang$arity$variadic = G__29477__delegate;
return G__29477;
})()
;
G__29476 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__29476__0.call(this);
case 1:
return G__29476__1.call(this,x);
case 2:
return G__29476__2.call(this,x,y);
case 3:
return G__29476__3.call(this,x,y,z);
default:
return G__29476__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__29476.cljs$lang$maxFixedArity = 3;
G__29476.cljs$lang$applyTo = G__29476__4.cljs$lang$applyTo;
return G__29476;
})()
});
var comp__4 = (function() { 
var G__29479__delegate = function (f1,f2,f3,fs){
var fs__29470 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__29480__delegate = function (args){
var ret__29471 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__29470),args);
var fs__29472 = cljs.core.next.call(null,fs__29470);
while(true){
if(fs__29472)
{{
var G__29481 = cljs.core.first.call(null,fs__29472).call(null,ret__29471);
var G__29482 = cljs.core.next.call(null,fs__29472);
ret__29471 = G__29481;
fs__29472 = G__29482;
continue;
}
} else
{return ret__29471;
}
break;
}
};
var G__29480 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__29480__delegate.call(this, args);
};
G__29480.cljs$lang$maxFixedArity = 0;
G__29480.cljs$lang$applyTo = (function (arglist__29483){
var args = cljs.core.seq(arglist__29483);;
return G__29480__delegate(args);
});
G__29480.cljs$lang$arity$variadic = G__29480__delegate;
return G__29480;
})()
;
};
var G__29479 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29479__delegate.call(this, f1, f2, f3, fs);
};
G__29479.cljs$lang$maxFixedArity = 3;
G__29479.cljs$lang$applyTo = (function (arglist__29484){
var f1 = cljs.core.first(arglist__29484);
var f2 = cljs.core.first(cljs.core.next(arglist__29484));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29484)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29484)));
return G__29479__delegate(f1, f2, f3, fs);
});
G__29479.cljs$lang$arity$variadic = G__29479__delegate;
return G__29479;
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
var G__29485__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__29485 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__29485__delegate.call(this, args);
};
G__29485.cljs$lang$maxFixedArity = 0;
G__29485.cljs$lang$applyTo = (function (arglist__29486){
var args = cljs.core.seq(arglist__29486);;
return G__29485__delegate(args);
});
G__29485.cljs$lang$arity$variadic = G__29485__delegate;
return G__29485;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__29487__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__29487 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__29487__delegate.call(this, args);
};
G__29487.cljs$lang$maxFixedArity = 0;
G__29487.cljs$lang$applyTo = (function (arglist__29488){
var args = cljs.core.seq(arglist__29488);;
return G__29487__delegate(args);
});
G__29487.cljs$lang$arity$variadic = G__29487__delegate;
return G__29487;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__29489__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__29489 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__29489__delegate.call(this, args);
};
G__29489.cljs$lang$maxFixedArity = 0;
G__29489.cljs$lang$applyTo = (function (arglist__29490){
var args = cljs.core.seq(arglist__29490);;
return G__29489__delegate(args);
});
G__29489.cljs$lang$arity$variadic = G__29489__delegate;
return G__29489;
})()
;
});
var partial__5 = (function() { 
var G__29491__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__29492__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__29492 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__29492__delegate.call(this, args);
};
G__29492.cljs$lang$maxFixedArity = 0;
G__29492.cljs$lang$applyTo = (function (arglist__29493){
var args = cljs.core.seq(arglist__29493);;
return G__29492__delegate(args);
});
G__29492.cljs$lang$arity$variadic = G__29492__delegate;
return G__29492;
})()
;
};
var G__29491 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__29491__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__29491.cljs$lang$maxFixedArity = 4;
G__29491.cljs$lang$applyTo = (function (arglist__29494){
var f = cljs.core.first(arglist__29494);
var arg1 = cljs.core.first(cljs.core.next(arglist__29494));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29494)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__29494))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__29494))));
return G__29491__delegate(f, arg1, arg2, arg3, more);
});
G__29491.cljs$lang$arity$variadic = G__29491__delegate;
return G__29491;
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
var G__29495 = null;
var G__29495__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__29495__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__29495__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__29495__4 = (function() { 
var G__29496__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__29496 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29496__delegate.call(this, a, b, c, ds);
};
G__29496.cljs$lang$maxFixedArity = 3;
G__29496.cljs$lang$applyTo = (function (arglist__29497){
var a = cljs.core.first(arglist__29497);
var b = cljs.core.first(cljs.core.next(arglist__29497));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29497)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29497)));
return G__29496__delegate(a, b, c, ds);
});
G__29496.cljs$lang$arity$variadic = G__29496__delegate;
return G__29496;
})()
;
G__29495 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__29495__1.call(this,a);
case 2:
return G__29495__2.call(this,a,b);
case 3:
return G__29495__3.call(this,a,b,c);
default:
return G__29495__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__29495.cljs$lang$maxFixedArity = 3;
G__29495.cljs$lang$applyTo = G__29495__4.cljs$lang$applyTo;
return G__29495;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__29498 = null;
var G__29498__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__29498__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__29498__4 = (function() { 
var G__29499__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__29499 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29499__delegate.call(this, a, b, c, ds);
};
G__29499.cljs$lang$maxFixedArity = 3;
G__29499.cljs$lang$applyTo = (function (arglist__29500){
var a = cljs.core.first(arglist__29500);
var b = cljs.core.first(cljs.core.next(arglist__29500));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29500)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29500)));
return G__29499__delegate(a, b, c, ds);
});
G__29499.cljs$lang$arity$variadic = G__29499__delegate;
return G__29499;
})()
;
G__29498 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__29498__2.call(this,a,b);
case 3:
return G__29498__3.call(this,a,b,c);
default:
return G__29498__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__29498.cljs$lang$maxFixedArity = 3;
G__29498.cljs$lang$applyTo = G__29498__4.cljs$lang$applyTo;
return G__29498;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__29501 = null;
var G__29501__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__29501__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__29501__4 = (function() { 
var G__29502__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__29502 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29502__delegate.call(this, a, b, c, ds);
};
G__29502.cljs$lang$maxFixedArity = 3;
G__29502.cljs$lang$applyTo = (function (arglist__29503){
var a = cljs.core.first(arglist__29503);
var b = cljs.core.first(cljs.core.next(arglist__29503));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29503)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29503)));
return G__29502__delegate(a, b, c, ds);
});
G__29502.cljs$lang$arity$variadic = G__29502__delegate;
return G__29502;
})()
;
G__29501 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__29501__2.call(this,a,b);
case 3:
return G__29501__3.call(this,a,b,c);
default:
return G__29501__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__29501.cljs$lang$maxFixedArity = 3;
G__29501.cljs$lang$applyTo = G__29501__4.cljs$lang$applyTo;
return G__29501;
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
var mapi__29519 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____29527 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____29527)
{var s__29528 = temp__3974__auto____29527;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29528))
{var c__29529 = cljs.core.chunk_first.call(null,s__29528);
var size__29530 = cljs.core.count.call(null,c__29529);
var b__29531 = cljs.core.chunk_buffer.call(null,size__29530);
var n__2549__auto____29532 = size__29530;
var i__29533 = 0;
while(true){
if((i__29533 < n__2549__auto____29532))
{cljs.core.chunk_append.call(null,b__29531,f.call(null,(idx + i__29533),cljs.core._nth.call(null,c__29529,i__29533)));
{
var G__29534 = (i__29533 + 1);
i__29533 = G__29534;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29531),mapi.call(null,(idx + size__29530),cljs.core.chunk_rest.call(null,s__29528)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__29528)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__29528)));
}
} else
{return null;
}
}),null));
});
return mapi__29519.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____29544 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____29544)
{var s__29545 = temp__3974__auto____29544;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29545))
{var c__29546 = cljs.core.chunk_first.call(null,s__29545);
var size__29547 = cljs.core.count.call(null,c__29546);
var b__29548 = cljs.core.chunk_buffer.call(null,size__29547);
var n__2549__auto____29549 = size__29547;
var i__29550 = 0;
while(true){
if((i__29550 < n__2549__auto____29549))
{var x__29551 = f.call(null,cljs.core._nth.call(null,c__29546,i__29550));
if((x__29551 == null))
{} else
{cljs.core.chunk_append.call(null,b__29548,x__29551);
}
{
var G__29553 = (i__29550 + 1);
i__29550 = G__29553;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29548),keep.call(null,f,cljs.core.chunk_rest.call(null,s__29545)));
} else
{var x__29552 = f.call(null,cljs.core.first.call(null,s__29545));
if((x__29552 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__29545));
} else
{return cljs.core.cons.call(null,x__29552,keep.call(null,f,cljs.core.rest.call(null,s__29545)));
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
var keepi__29579 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____29589 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____29589)
{var s__29590 = temp__3974__auto____29589;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29590))
{var c__29591 = cljs.core.chunk_first.call(null,s__29590);
var size__29592 = cljs.core.count.call(null,c__29591);
var b__29593 = cljs.core.chunk_buffer.call(null,size__29592);
var n__2549__auto____29594 = size__29592;
var i__29595 = 0;
while(true){
if((i__29595 < n__2549__auto____29594))
{var x__29596 = f.call(null,(idx + i__29595),cljs.core._nth.call(null,c__29591,i__29595));
if((x__29596 == null))
{} else
{cljs.core.chunk_append.call(null,b__29593,x__29596);
}
{
var G__29598 = (i__29595 + 1);
i__29595 = G__29598;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29593),keepi.call(null,(idx + size__29592),cljs.core.chunk_rest.call(null,s__29590)));
} else
{var x__29597 = f.call(null,idx,cljs.core.first.call(null,s__29590));
if((x__29597 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__29590));
} else
{return cljs.core.cons.call(null,x__29597,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__29590)));
}
}
} else
{return null;
}
}),null));
});
return keepi__29579.call(null,0,coll);
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____29684 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____29684))
{return p.call(null,y);
} else
{return and__3822__auto____29684;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____29685 = p.call(null,x);
if(cljs.core.truth_(and__3822__auto____29685))
{var and__3822__auto____29686 = p.call(null,y);
if(cljs.core.truth_(and__3822__auto____29686))
{return p.call(null,z);
} else
{return and__3822__auto____29686;
}
} else
{return and__3822__auto____29685;
}
})());
});
var ep1__4 = (function() { 
var G__29755__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____29687 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____29687))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3822__auto____29687;
}
})());
};
var G__29755 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29755__delegate.call(this, x, y, z, args);
};
G__29755.cljs$lang$maxFixedArity = 3;
G__29755.cljs$lang$applyTo = (function (arglist__29756){
var x = cljs.core.first(arglist__29756);
var y = cljs.core.first(cljs.core.next(arglist__29756));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29756)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29756)));
return G__29755__delegate(x, y, z, args);
});
G__29755.cljs$lang$arity$variadic = G__29755__delegate;
return G__29755;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____29699 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____29699))
{return p2.call(null,x);
} else
{return and__3822__auto____29699;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____29700 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____29700))
{var and__3822__auto____29701 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____29701))
{var and__3822__auto____29702 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____29702))
{return p2.call(null,y);
} else
{return and__3822__auto____29702;
}
} else
{return and__3822__auto____29701;
}
} else
{return and__3822__auto____29700;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____29703 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____29703))
{var and__3822__auto____29704 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____29704))
{var and__3822__auto____29705 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____29705))
{var and__3822__auto____29706 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____29706))
{var and__3822__auto____29707 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____29707))
{return p2.call(null,z);
} else
{return and__3822__auto____29707;
}
} else
{return and__3822__auto____29706;
}
} else
{return and__3822__auto____29705;
}
} else
{return and__3822__auto____29704;
}
} else
{return and__3822__auto____29703;
}
})());
});
var ep2__4 = (function() { 
var G__29757__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____29708 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____29708))
{return cljs.core.every_QMARK_.call(null,(function (p1__29554_SHARP_){
var and__3822__auto____29709 = p1.call(null,p1__29554_SHARP_);
if(cljs.core.truth_(and__3822__auto____29709))
{return p2.call(null,p1__29554_SHARP_);
} else
{return and__3822__auto____29709;
}
}),args);
} else
{return and__3822__auto____29708;
}
})());
};
var G__29757 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29757__delegate.call(this, x, y, z, args);
};
G__29757.cljs$lang$maxFixedArity = 3;
G__29757.cljs$lang$applyTo = (function (arglist__29758){
var x = cljs.core.first(arglist__29758);
var y = cljs.core.first(cljs.core.next(arglist__29758));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29758)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29758)));
return G__29757__delegate(x, y, z, args);
});
G__29757.cljs$lang$arity$variadic = G__29757__delegate;
return G__29757;
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
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____29728 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____29728))
{var and__3822__auto____29729 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____29729))
{return p3.call(null,x);
} else
{return and__3822__auto____29729;
}
} else
{return and__3822__auto____29728;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____29730 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____29730))
{var and__3822__auto____29731 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____29731))
{var and__3822__auto____29732 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____29732))
{var and__3822__auto____29733 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____29733))
{var and__3822__auto____29734 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____29734))
{return p3.call(null,y);
} else
{return and__3822__auto____29734;
}
} else
{return and__3822__auto____29733;
}
} else
{return and__3822__auto____29732;
}
} else
{return and__3822__auto____29731;
}
} else
{return and__3822__auto____29730;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____29735 = p1.call(null,x);
if(cljs.core.truth_(and__3822__auto____29735))
{var and__3822__auto____29736 = p2.call(null,x);
if(cljs.core.truth_(and__3822__auto____29736))
{var and__3822__auto____29737 = p3.call(null,x);
if(cljs.core.truth_(and__3822__auto____29737))
{var and__3822__auto____29738 = p1.call(null,y);
if(cljs.core.truth_(and__3822__auto____29738))
{var and__3822__auto____29739 = p2.call(null,y);
if(cljs.core.truth_(and__3822__auto____29739))
{var and__3822__auto____29740 = p3.call(null,y);
if(cljs.core.truth_(and__3822__auto____29740))
{var and__3822__auto____29741 = p1.call(null,z);
if(cljs.core.truth_(and__3822__auto____29741))
{var and__3822__auto____29742 = p2.call(null,z);
if(cljs.core.truth_(and__3822__auto____29742))
{return p3.call(null,z);
} else
{return and__3822__auto____29742;
}
} else
{return and__3822__auto____29741;
}
} else
{return and__3822__auto____29740;
}
} else
{return and__3822__auto____29739;
}
} else
{return and__3822__auto____29738;
}
} else
{return and__3822__auto____29737;
}
} else
{return and__3822__auto____29736;
}
} else
{return and__3822__auto____29735;
}
})());
});
var ep3__4 = (function() { 
var G__29759__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____29743 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____29743))
{return cljs.core.every_QMARK_.call(null,(function (p1__29555_SHARP_){
var and__3822__auto____29744 = p1.call(null,p1__29555_SHARP_);
if(cljs.core.truth_(and__3822__auto____29744))
{var and__3822__auto____29745 = p2.call(null,p1__29555_SHARP_);
if(cljs.core.truth_(and__3822__auto____29745))
{return p3.call(null,p1__29555_SHARP_);
} else
{return and__3822__auto____29745;
}
} else
{return and__3822__auto____29744;
}
}),args);
} else
{return and__3822__auto____29743;
}
})());
};
var G__29759 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29759__delegate.call(this, x, y, z, args);
};
G__29759.cljs$lang$maxFixedArity = 3;
G__29759.cljs$lang$applyTo = (function (arglist__29760){
var x = cljs.core.first(arglist__29760);
var y = cljs.core.first(cljs.core.next(arglist__29760));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29760)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29760)));
return G__29759__delegate(x, y, z, args);
});
G__29759.cljs$lang$arity$variadic = G__29759__delegate;
return G__29759;
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
var G__29761__delegate = function (p1,p2,p3,ps){
var ps__29746 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__29556_SHARP_){
return p1__29556_SHARP_.call(null,x);
}),ps__29746);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__29557_SHARP_){
var and__3822__auto____29751 = p1__29557_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____29751))
{return p1__29557_SHARP_.call(null,y);
} else
{return and__3822__auto____29751;
}
}),ps__29746);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__29558_SHARP_){
var and__3822__auto____29752 = p1__29558_SHARP_.call(null,x);
if(cljs.core.truth_(and__3822__auto____29752))
{var and__3822__auto____29753 = p1__29558_SHARP_.call(null,y);
if(cljs.core.truth_(and__3822__auto____29753))
{return p1__29558_SHARP_.call(null,z);
} else
{return and__3822__auto____29753;
}
} else
{return and__3822__auto____29752;
}
}),ps__29746);
});
var epn__4 = (function() { 
var G__29762__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3822__auto____29754 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3822__auto____29754))
{return cljs.core.every_QMARK_.call(null,(function (p1__29559_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__29559_SHARP_,args);
}),ps__29746);
} else
{return and__3822__auto____29754;
}
})());
};
var G__29762 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29762__delegate.call(this, x, y, z, args);
};
G__29762.cljs$lang$maxFixedArity = 3;
G__29762.cljs$lang$applyTo = (function (arglist__29763){
var x = cljs.core.first(arglist__29763);
var y = cljs.core.first(cljs.core.next(arglist__29763));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29763)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29763)));
return G__29762__delegate(x, y, z, args);
});
G__29762.cljs$lang$arity$variadic = G__29762__delegate;
return G__29762;
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
var G__29761 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29761__delegate.call(this, p1, p2, p3, ps);
};
G__29761.cljs$lang$maxFixedArity = 3;
G__29761.cljs$lang$applyTo = (function (arglist__29764){
var p1 = cljs.core.first(arglist__29764);
var p2 = cljs.core.first(cljs.core.next(arglist__29764));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29764)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29764)));
return G__29761__delegate(p1, p2, p3, ps);
});
G__29761.cljs$lang$arity$variadic = G__29761__delegate;
return G__29761;
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
var or__3824__auto____29845 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____29845))
{return or__3824__auto____29845;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____29846 = p.call(null,x);
if(cljs.core.truth_(or__3824__auto____29846))
{return or__3824__auto____29846;
} else
{var or__3824__auto____29847 = p.call(null,y);
if(cljs.core.truth_(or__3824__auto____29847))
{return or__3824__auto____29847;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__29916__delegate = function (x,y,z,args){
var or__3824__auto____29848 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____29848))
{return or__3824__auto____29848;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__29916 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29916__delegate.call(this, x, y, z, args);
};
G__29916.cljs$lang$maxFixedArity = 3;
G__29916.cljs$lang$applyTo = (function (arglist__29917){
var x = cljs.core.first(arglist__29917);
var y = cljs.core.first(cljs.core.next(arglist__29917));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29917)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29917)));
return G__29916__delegate(x, y, z, args);
});
G__29916.cljs$lang$arity$variadic = G__29916__delegate;
return G__29916;
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
var or__3824__auto____29860 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____29860))
{return or__3824__auto____29860;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____29861 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____29861))
{return or__3824__auto____29861;
} else
{var or__3824__auto____29862 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____29862))
{return or__3824__auto____29862;
} else
{var or__3824__auto____29863 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____29863))
{return or__3824__auto____29863;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____29864 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____29864))
{return or__3824__auto____29864;
} else
{var or__3824__auto____29865 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____29865))
{return or__3824__auto____29865;
} else
{var or__3824__auto____29866 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____29866))
{return or__3824__auto____29866;
} else
{var or__3824__auto____29867 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____29867))
{return or__3824__auto____29867;
} else
{var or__3824__auto____29868 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____29868))
{return or__3824__auto____29868;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__29918__delegate = function (x,y,z,args){
var or__3824__auto____29869 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____29869))
{return or__3824__auto____29869;
} else
{return cljs.core.some.call(null,(function (p1__29599_SHARP_){
var or__3824__auto____29870 = p1.call(null,p1__29599_SHARP_);
if(cljs.core.truth_(or__3824__auto____29870))
{return or__3824__auto____29870;
} else
{return p2.call(null,p1__29599_SHARP_);
}
}),args);
}
};
var G__29918 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29918__delegate.call(this, x, y, z, args);
};
G__29918.cljs$lang$maxFixedArity = 3;
G__29918.cljs$lang$applyTo = (function (arglist__29919){
var x = cljs.core.first(arglist__29919);
var y = cljs.core.first(cljs.core.next(arglist__29919));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29919)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29919)));
return G__29918__delegate(x, y, z, args);
});
G__29918.cljs$lang$arity$variadic = G__29918__delegate;
return G__29918;
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
var or__3824__auto____29889 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____29889))
{return or__3824__auto____29889;
} else
{var or__3824__auto____29890 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____29890))
{return or__3824__auto____29890;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____29891 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____29891))
{return or__3824__auto____29891;
} else
{var or__3824__auto____29892 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____29892))
{return or__3824__auto____29892;
} else
{var or__3824__auto____29893 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____29893))
{return or__3824__auto____29893;
} else
{var or__3824__auto____29894 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____29894))
{return or__3824__auto____29894;
} else
{var or__3824__auto____29895 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____29895))
{return or__3824__auto____29895;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____29896 = p1.call(null,x);
if(cljs.core.truth_(or__3824__auto____29896))
{return or__3824__auto____29896;
} else
{var or__3824__auto____29897 = p2.call(null,x);
if(cljs.core.truth_(or__3824__auto____29897))
{return or__3824__auto____29897;
} else
{var or__3824__auto____29898 = p3.call(null,x);
if(cljs.core.truth_(or__3824__auto____29898))
{return or__3824__auto____29898;
} else
{var or__3824__auto____29899 = p1.call(null,y);
if(cljs.core.truth_(or__3824__auto____29899))
{return or__3824__auto____29899;
} else
{var or__3824__auto____29900 = p2.call(null,y);
if(cljs.core.truth_(or__3824__auto____29900))
{return or__3824__auto____29900;
} else
{var or__3824__auto____29901 = p3.call(null,y);
if(cljs.core.truth_(or__3824__auto____29901))
{return or__3824__auto____29901;
} else
{var or__3824__auto____29902 = p1.call(null,z);
if(cljs.core.truth_(or__3824__auto____29902))
{return or__3824__auto____29902;
} else
{var or__3824__auto____29903 = p2.call(null,z);
if(cljs.core.truth_(or__3824__auto____29903))
{return or__3824__auto____29903;
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
var G__29920__delegate = function (x,y,z,args){
var or__3824__auto____29904 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____29904))
{return or__3824__auto____29904;
} else
{return cljs.core.some.call(null,(function (p1__29600_SHARP_){
var or__3824__auto____29905 = p1.call(null,p1__29600_SHARP_);
if(cljs.core.truth_(or__3824__auto____29905))
{return or__3824__auto____29905;
} else
{var or__3824__auto____29906 = p2.call(null,p1__29600_SHARP_);
if(cljs.core.truth_(or__3824__auto____29906))
{return or__3824__auto____29906;
} else
{return p3.call(null,p1__29600_SHARP_);
}
}
}),args);
}
};
var G__29920 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29920__delegate.call(this, x, y, z, args);
};
G__29920.cljs$lang$maxFixedArity = 3;
G__29920.cljs$lang$applyTo = (function (arglist__29921){
var x = cljs.core.first(arglist__29921);
var y = cljs.core.first(cljs.core.next(arglist__29921));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29921)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29921)));
return G__29920__delegate(x, y, z, args);
});
G__29920.cljs$lang$arity$variadic = G__29920__delegate;
return G__29920;
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
var G__29922__delegate = function (p1,p2,p3,ps){
var ps__29907 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__29601_SHARP_){
return p1__29601_SHARP_.call(null,x);
}),ps__29907);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__29602_SHARP_){
var or__3824__auto____29912 = p1__29602_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____29912))
{return or__3824__auto____29912;
} else
{return p1__29602_SHARP_.call(null,y);
}
}),ps__29907);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__29603_SHARP_){
var or__3824__auto____29913 = p1__29603_SHARP_.call(null,x);
if(cljs.core.truth_(or__3824__auto____29913))
{return or__3824__auto____29913;
} else
{var or__3824__auto____29914 = p1__29603_SHARP_.call(null,y);
if(cljs.core.truth_(or__3824__auto____29914))
{return or__3824__auto____29914;
} else
{return p1__29603_SHARP_.call(null,z);
}
}
}),ps__29907);
});
var spn__4 = (function() { 
var G__29923__delegate = function (x,y,z,args){
var or__3824__auto____29915 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3824__auto____29915))
{return or__3824__auto____29915;
} else
{return cljs.core.some.call(null,(function (p1__29604_SHARP_){
return cljs.core.some.call(null,p1__29604_SHARP_,args);
}),ps__29907);
}
};
var G__29923 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29923__delegate.call(this, x, y, z, args);
};
G__29923.cljs$lang$maxFixedArity = 3;
G__29923.cljs$lang$applyTo = (function (arglist__29924){
var x = cljs.core.first(arglist__29924);
var y = cljs.core.first(cljs.core.next(arglist__29924));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29924)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29924)));
return G__29923__delegate(x, y, z, args);
});
G__29923.cljs$lang$arity$variadic = G__29923__delegate;
return G__29923;
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
var G__29922 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__29922__delegate.call(this, p1, p2, p3, ps);
};
G__29922.cljs$lang$maxFixedArity = 3;
G__29922.cljs$lang$applyTo = (function (arglist__29925){
var p1 = cljs.core.first(arglist__29925);
var p2 = cljs.core.first(cljs.core.next(arglist__29925));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29925)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__29925)));
return G__29922__delegate(p1, p2, p3, ps);
});
G__29922.cljs$lang$arity$variadic = G__29922__delegate;
return G__29922;
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
var temp__3974__auto____29944 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____29944)
{var s__29945 = temp__3974__auto____29944;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29945))
{var c__29946 = cljs.core.chunk_first.call(null,s__29945);
var size__29947 = cljs.core.count.call(null,c__29946);
var b__29948 = cljs.core.chunk_buffer.call(null,size__29947);
var n__2549__auto____29949 = size__29947;
var i__29950 = 0;
while(true){
if((i__29950 < n__2549__auto____29949))
{cljs.core.chunk_append.call(null,b__29948,f.call(null,cljs.core._nth.call(null,c__29946,i__29950)));
{
var G__29962 = (i__29950 + 1);
i__29950 = G__29962;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29948),map.call(null,f,cljs.core.chunk_rest.call(null,s__29945)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__29945)),map.call(null,f,cljs.core.rest.call(null,s__29945)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__29951 = cljs.core.seq.call(null,c1);
var s2__29952 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____29953 = s1__29951;
if(and__3822__auto____29953)
{return s2__29952;
} else
{return and__3822__auto____29953;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__29951),cljs.core.first.call(null,s2__29952)),map.call(null,f,cljs.core.rest.call(null,s1__29951),cljs.core.rest.call(null,s2__29952)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__29954 = cljs.core.seq.call(null,c1);
var s2__29955 = cljs.core.seq.call(null,c2);
var s3__29956 = cljs.core.seq.call(null,c3);
if((function (){var and__3822__auto____29957 = s1__29954;
if(and__3822__auto____29957)
{var and__3822__auto____29958 = s2__29955;
if(and__3822__auto____29958)
{return s3__29956;
} else
{return and__3822__auto____29958;
}
} else
{return and__3822__auto____29957;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__29954),cljs.core.first.call(null,s2__29955),cljs.core.first.call(null,s3__29956)),map.call(null,f,cljs.core.rest.call(null,s1__29954),cljs.core.rest.call(null,s2__29955),cljs.core.rest.call(null,s3__29956)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__29963__delegate = function (f,c1,c2,c3,colls){
var step__29961 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__29960 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__29960))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__29960),step.call(null,map.call(null,cljs.core.rest,ss__29960)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__29765_SHARP_){
return cljs.core.apply.call(null,f,p1__29765_SHARP_);
}),step__29961.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__29963 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__29963__delegate.call(this, f, c1, c2, c3, colls);
};
G__29963.cljs$lang$maxFixedArity = 4;
G__29963.cljs$lang$applyTo = (function (arglist__29964){
var f = cljs.core.first(arglist__29964);
var c1 = cljs.core.first(cljs.core.next(arglist__29964));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__29964)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__29964))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__29964))));
return G__29963__delegate(f, c1, c2, c3, colls);
});
G__29963.cljs$lang$arity$variadic = G__29963__delegate;
return G__29963;
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
{var temp__3974__auto____29967 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____29967)
{var s__29968 = temp__3974__auto____29967;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__29968),take.call(null,(n - 1),cljs.core.rest.call(null,s__29968)));
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
var step__29974 = (function (n,coll){
while(true){
var s__29972 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____29973 = (n > 0);
if(and__3822__auto____29973)
{return s__29972;
} else
{return and__3822__auto____29973;
}
})()))
{{
var G__29975 = (n - 1);
var G__29976 = cljs.core.rest.call(null,s__29972);
n = G__29975;
coll = G__29976;
continue;
}
} else
{return s__29972;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__29974.call(null,n,coll);
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
var s__29979 = cljs.core.seq.call(null,coll);
var lead__29980 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__29980)
{{
var G__29981 = cljs.core.next.call(null,s__29979);
var G__29982 = cljs.core.next.call(null,lead__29980);
s__29979 = G__29981;
lead__29980 = G__29982;
continue;
}
} else
{return s__29979;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__29988 = (function (pred,coll){
while(true){
var s__29986 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3822__auto____29987 = s__29986;
if(and__3822__auto____29987)
{return pred.call(null,cljs.core.first.call(null,s__29986));
} else
{return and__3822__auto____29987;
}
})()))
{{
var G__29989 = pred;
var G__29990 = cljs.core.rest.call(null,s__29986);
pred = G__29989;
coll = G__29990;
continue;
}
} else
{return s__29986;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__29988.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____29993 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____29993)
{var s__29994 = temp__3974__auto____29993;
return cljs.core.concat.call(null,s__29994,cycle.call(null,s__29994));
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
var s1__29999 = cljs.core.seq.call(null,c1);
var s2__30000 = cljs.core.seq.call(null,c2);
if((function (){var and__3822__auto____30001 = s1__29999;
if(and__3822__auto____30001)
{return s2__30000;
} else
{return and__3822__auto____30001;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__29999),cljs.core.cons.call(null,cljs.core.first.call(null,s2__30000),interleave.call(null,cljs.core.rest.call(null,s1__29999),cljs.core.rest.call(null,s2__30000))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__30003__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__30002 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__30002))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__30002),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__30002)));
} else
{return null;
}
}),null));
};
var G__30003 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30003__delegate.call(this, c1, c2, colls);
};
G__30003.cljs$lang$maxFixedArity = 2;
G__30003.cljs$lang$applyTo = (function (arglist__30004){
var c1 = cljs.core.first(arglist__30004);
var c2 = cljs.core.first(cljs.core.next(arglist__30004));
var colls = cljs.core.rest(cljs.core.next(arglist__30004));
return G__30003__delegate(c1, c2, colls);
});
G__30003.cljs$lang$arity$variadic = G__30003__delegate;
return G__30003;
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
var cat__30014 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____30012 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____30012)
{var coll__30013 = temp__3971__auto____30012;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__30013),cat.call(null,cljs.core.rest.call(null,coll__30013),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__30014.call(null,null,colls);
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
var G__30015__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__30015 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__30015__delegate.call(this, f, coll, colls);
};
G__30015.cljs$lang$maxFixedArity = 2;
G__30015.cljs$lang$applyTo = (function (arglist__30016){
var f = cljs.core.first(arglist__30016);
var coll = cljs.core.first(cljs.core.next(arglist__30016));
var colls = cljs.core.rest(cljs.core.next(arglist__30016));
return G__30015__delegate(f, coll, colls);
});
G__30015.cljs$lang$arity$variadic = G__30015__delegate;
return G__30015;
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
var temp__3974__auto____30026 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____30026)
{var s__30027 = temp__3974__auto____30026;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30027))
{var c__30028 = cljs.core.chunk_first.call(null,s__30027);
var size__30029 = cljs.core.count.call(null,c__30028);
var b__30030 = cljs.core.chunk_buffer.call(null,size__30029);
var n__2549__auto____30031 = size__30029;
var i__30032 = 0;
while(true){
if((i__30032 < n__2549__auto____30031))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__30028,i__30032))))
{cljs.core.chunk_append.call(null,b__30030,cljs.core._nth.call(null,c__30028,i__30032));
} else
{}
{
var G__30035 = (i__30032 + 1);
i__30032 = G__30035;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30030),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__30027)));
} else
{var f__30033 = cljs.core.first.call(null,s__30027);
var r__30034 = cljs.core.rest.call(null,s__30027);
if(cljs.core.truth_(pred.call(null,f__30033)))
{return cljs.core.cons.call(null,f__30033,filter.call(null,pred,r__30034));
} else
{return filter.call(null,pred,r__30034);
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
var walk__30038 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__30038.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__30036_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__30036_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__30042__30043 = to;
if(G__30042__30043)
{if((function (){var or__3824__auto____30044 = (G__30042__30043.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3824__auto____30044)
{return or__3824__auto____30044;
} else
{return G__30042__30043.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__30042__30043.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__30042__30043);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__30042__30043);
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
var G__30045__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__30045 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__30045__delegate.call(this, f, c1, c2, c3, colls);
};
G__30045.cljs$lang$maxFixedArity = 4;
G__30045.cljs$lang$applyTo = (function (arglist__30046){
var f = cljs.core.first(arglist__30046);
var c1 = cljs.core.first(cljs.core.next(arglist__30046));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30046)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30046))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__30046))));
return G__30045__delegate(f, c1, c2, c3, colls);
});
G__30045.cljs$lang$arity$variadic = G__30045__delegate;
return G__30045;
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
var temp__3974__auto____30053 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____30053)
{var s__30054 = temp__3974__auto____30053;
var p__30055 = cljs.core.take.call(null,n,s__30054);
if((n === cljs.core.count.call(null,p__30055)))
{return cljs.core.cons.call(null,p__30055,partition.call(null,n,step,cljs.core.drop.call(null,step,s__30054)));
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
var temp__3974__auto____30056 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____30056)
{var s__30057 = temp__3974__auto____30056;
var p__30058 = cljs.core.take.call(null,n,s__30057);
if((n === cljs.core.count.call(null,p__30058)))
{return cljs.core.cons.call(null,p__30058,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__30057)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__30058,pad)));
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
var sentinel__30063 = cljs.core.lookup_sentinel;
var m__30064 = m;
var ks__30065 = cljs.core.seq.call(null,ks);
while(true){
if(ks__30065)
{var m__30066 = cljs.core._lookup.call(null,m__30064,cljs.core.first.call(null,ks__30065),sentinel__30063);
if((sentinel__30063 === m__30066))
{return not_found;
} else
{{
var G__30067 = sentinel__30063;
var G__30068 = m__30066;
var G__30069 = cljs.core.next.call(null,ks__30065);
sentinel__30063 = G__30067;
m__30064 = G__30068;
ks__30065 = G__30069;
continue;
}
}
} else
{return m__30064;
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
cljs.core.assoc_in = (function assoc_in(m,p__30070,v){
var vec__30075__30076 = p__30070;
var k__30077 = cljs.core.nth.call(null,vec__30075__30076,0,null);
var ks__30078 = cljs.core.nthnext.call(null,vec__30075__30076,1);
if(cljs.core.truth_(ks__30078))
{return cljs.core.assoc.call(null,m,k__30077,assoc_in.call(null,cljs.core._lookup.call(null,m,k__30077,null),ks__30078,v));
} else
{return cljs.core.assoc.call(null,m,k__30077,v);
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
var update_in__delegate = function (m,p__30079,f,args){
var vec__30084__30085 = p__30079;
var k__30086 = cljs.core.nth.call(null,vec__30084__30085,0,null);
var ks__30087 = cljs.core.nthnext.call(null,vec__30084__30085,1);
if(cljs.core.truth_(ks__30087))
{return cljs.core.assoc.call(null,m,k__30086,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__30086,null),ks__30087,f,args));
} else
{return cljs.core.assoc.call(null,m,k__30086,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__30086,null),args));
}
};
var update_in = function (m,p__30079,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__30079, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__30088){
var m = cljs.core.first(arglist__30088);
var p__30079 = cljs.core.first(cljs.core.next(arglist__30088));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__30088)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__30088)));
return update_in__delegate(m, p__30079, f, args);
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
var this__30091 = this;
var h__2203__auto____30092 = this__30091.__hash;
if(!((h__2203__auto____30092 == null)))
{return h__2203__auto____30092;
} else
{var h__2203__auto____30093 = cljs.core.hash_coll.call(null,coll);
this__30091.__hash = h__2203__auto____30093;
return h__2203__auto____30093;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__30094 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__30095 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__30096 = this;
var new_array__30097 = this__30096.array.slice();
(new_array__30097[k] = v);
return (new cljs.core.Vector(this__30096.meta,new_array__30097,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__30128 = null;
var G__30128__2 = (function (this_sym30098,k){
var this__30100 = this;
var this_sym30098__30101 = this;
var coll__30102 = this_sym30098__30101;
return coll__30102.cljs$core$ILookup$_lookup$arity$2(coll__30102,k);
});
var G__30128__3 = (function (this_sym30099,k,not_found){
var this__30100 = this;
var this_sym30099__30103 = this;
var coll__30104 = this_sym30099__30103;
return coll__30104.cljs$core$ILookup$_lookup$arity$3(coll__30104,k,not_found);
});
G__30128 = function(this_sym30099,k,not_found){
switch(arguments.length){
case 2:
return G__30128__2.call(this,this_sym30099,k);
case 3:
return G__30128__3.call(this,this_sym30099,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30128;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym30089,args30090){
var this__30105 = this;
return this_sym30089.call.apply(this_sym30089,[this_sym30089].concat(args30090.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30106 = this;
var new_array__30107 = this__30106.array.slice();
new_array__30107.push(o);
return (new cljs.core.Vector(this__30106.meta,new_array__30107,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__30108 = this;
var this__30109 = this;
return cljs.core.pr_str.call(null,this__30109);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__30110 = this;
return cljs.core.ci_reduce.call(null,this__30110.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__30111 = this;
return cljs.core.ci_reduce.call(null,this__30111.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30112 = this;
if((this__30112.array.length > 0))
{var vector_seq__30113 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__30112.array.length))
{return cljs.core.cons.call(null,(this__30112.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__30113.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30114 = this;
return this__30114.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__30115 = this;
var count__30116 = this__30115.array.length;
if((count__30116 > 0))
{return (this__30115.array[(count__30116 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__30117 = this;
if((this__30117.array.length > 0))
{var new_array__30118 = this__30117.array.slice();
new_array__30118.pop();
return (new cljs.core.Vector(this__30117.meta,new_array__30118,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__30119 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30120 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30121 = this;
return (new cljs.core.Vector(meta,this__30121.array,this__30121.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30122 = this;
return this__30122.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__30123 = this;
if((function (){var and__3822__auto____30124 = (0 <= n);
if(and__3822__auto____30124)
{return (n < this__30123.array.length);
} else
{return and__3822__auto____30124;
}
})())
{return (this__30123.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__30125 = this;
if((function (){var and__3822__auto____30126 = (0 <= n);
if(and__3822__auto____30126)
{return (n < this__30125.array.length);
} else
{return and__3822__auto____30126;
}
})())
{return (this__30125.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30127 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__30127.meta);
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
var cnt__30130 = pv.cnt;
if((cnt__30130 < 32))
{return 0;
} else
{return (((cnt__30130 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__30136 = level;
var ret__30137 = node;
while(true){
if((ll__30136 === 0))
{return ret__30137;
} else
{var embed__30138 = ret__30137;
var r__30139 = cljs.core.pv_fresh_node.call(null,edit);
var ___30140 = cljs.core.pv_aset.call(null,r__30139,0,embed__30138);
{
var G__30141 = (ll__30136 - 5);
var G__30142 = r__30139;
ll__30136 = G__30141;
ret__30137 = G__30142;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__30148 = cljs.core.pv_clone_node.call(null,parent);
var subidx__30149 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__30148,subidx__30149,tailnode);
return ret__30148;
} else
{var child__30150 = cljs.core.pv_aget.call(null,parent,subidx__30149);
if(!((child__30150 == null)))
{var node_to_insert__30151 = push_tail.call(null,pv,(level - 5),child__30150,tailnode);
cljs.core.pv_aset.call(null,ret__30148,subidx__30149,node_to_insert__30151);
return ret__30148;
} else
{var node_to_insert__30152 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__30148,subidx__30149,node_to_insert__30152);
return ret__30148;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____30156 = (0 <= i);
if(and__3822__auto____30156)
{return (i < pv.cnt);
} else
{return and__3822__auto____30156;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__30157 = pv.root;
var level__30158 = pv.shift;
while(true){
if((level__30158 > 0))
{{
var G__30159 = cljs.core.pv_aget.call(null,node__30157,((i >>> level__30158) & 31));
var G__30160 = (level__30158 - 5);
node__30157 = G__30159;
level__30158 = G__30160;
continue;
}
} else
{return node__30157.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__30163 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__30163,(i & 31),val);
return ret__30163;
} else
{var subidx__30164 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__30163,subidx__30164,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__30164),i,val));
return ret__30163;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__30170 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__30171 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__30170));
if((function (){var and__3822__auto____30172 = (new_child__30171 == null);
if(and__3822__auto____30172)
{return (subidx__30170 === 0);
} else
{return and__3822__auto____30172;
}
})())
{return null;
} else
{var ret__30173 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__30173,subidx__30170,new_child__30171);
return ret__30173;
}
} else
{if((subidx__30170 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__30174 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__30174,subidx__30170,null);
return ret__30174;
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
var this__30177 = this;
return (new cljs.core.TransientVector(this__30177.cnt,this__30177.shift,cljs.core.tv_editable_root.call(null,this__30177.root),cljs.core.tv_editable_tail.call(null,this__30177.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__30178 = this;
var h__2203__auto____30179 = this__30178.__hash;
if(!((h__2203__auto____30179 == null)))
{return h__2203__auto____30179;
} else
{var h__2203__auto____30180 = cljs.core.hash_coll.call(null,coll);
this__30178.__hash = h__2203__auto____30180;
return h__2203__auto____30180;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__30181 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__30182 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__30183 = this;
if((function (){var and__3822__auto____30184 = (0 <= k);
if(and__3822__auto____30184)
{return (k < this__30183.cnt);
} else
{return and__3822__auto____30184;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__30185 = this__30183.tail.slice();
(new_tail__30185[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__30183.meta,this__30183.cnt,this__30183.shift,this__30183.root,new_tail__30185,null));
} else
{return (new cljs.core.PersistentVector(this__30183.meta,this__30183.cnt,this__30183.shift,cljs.core.do_assoc.call(null,coll,this__30183.shift,this__30183.root,k,v),this__30183.tail,null));
}
} else
{if((k === this__30183.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__30183.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__30233 = null;
var G__30233__2 = (function (this_sym30186,k){
var this__30188 = this;
var this_sym30186__30189 = this;
var coll__30190 = this_sym30186__30189;
return coll__30190.cljs$core$ILookup$_lookup$arity$2(coll__30190,k);
});
var G__30233__3 = (function (this_sym30187,k,not_found){
var this__30188 = this;
var this_sym30187__30191 = this;
var coll__30192 = this_sym30187__30191;
return coll__30192.cljs$core$ILookup$_lookup$arity$3(coll__30192,k,not_found);
});
G__30233 = function(this_sym30187,k,not_found){
switch(arguments.length){
case 2:
return G__30233__2.call(this,this_sym30187,k);
case 3:
return G__30233__3.call(this,this_sym30187,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30233;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym30175,args30176){
var this__30193 = this;
return this_sym30175.call.apply(this_sym30175,[this_sym30175].concat(args30176.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__30194 = this;
var step_init__30195 = [0,init];
var i__30196 = 0;
while(true){
if((i__30196 < this__30194.cnt))
{var arr__30197 = cljs.core.array_for.call(null,v,i__30196);
var len__30198 = arr__30197.length;
var init__30202 = (function (){var j__30199 = 0;
var init__30200 = (step_init__30195[1]);
while(true){
if((j__30199 < len__30198))
{var init__30201 = f.call(null,init__30200,(j__30199 + i__30196),(arr__30197[j__30199]));
if(cljs.core.reduced_QMARK_.call(null,init__30201))
{return init__30201;
} else
{{
var G__30234 = (j__30199 + 1);
var G__30235 = init__30201;
j__30199 = G__30234;
init__30200 = G__30235;
continue;
}
}
} else
{(step_init__30195[0] = len__30198);
(step_init__30195[1] = init__30200);
return init__30200;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__30202))
{return cljs.core.deref.call(null,init__30202);
} else
{{
var G__30236 = (i__30196 + (step_init__30195[0]));
i__30196 = G__30236;
continue;
}
}
} else
{return (step_init__30195[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30203 = this;
if(((this__30203.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__30204 = this__30203.tail.slice();
new_tail__30204.push(o);
return (new cljs.core.PersistentVector(this__30203.meta,(this__30203.cnt + 1),this__30203.shift,this__30203.root,new_tail__30204,null));
} else
{var root_overflow_QMARK___30205 = ((this__30203.cnt >>> 5) > (1 << this__30203.shift));
var new_shift__30206 = ((root_overflow_QMARK___30205)?(this__30203.shift + 5):this__30203.shift);
var new_root__30208 = ((root_overflow_QMARK___30205)?(function (){var n_r__30207 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__30207,0,this__30203.root);
cljs.core.pv_aset.call(null,n_r__30207,1,cljs.core.new_path.call(null,null,this__30203.shift,(new cljs.core.VectorNode(null,this__30203.tail))));
return n_r__30207;
})():cljs.core.push_tail.call(null,coll,this__30203.shift,this__30203.root,(new cljs.core.VectorNode(null,this__30203.tail))));
return (new cljs.core.PersistentVector(this__30203.meta,(this__30203.cnt + 1),new_shift__30206,new_root__30208,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__30209 = this;
if((this__30209.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__30209.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__30210 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__30211 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__30212 = this;
var this__30213 = this;
return cljs.core.pr_str.call(null,this__30213);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__30214 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__30215 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30216 = this;
if((this__30216.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30217 = this;
return this__30217.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__30218 = this;
if((this__30218.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__30218.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__30219 = this;
if((this__30219.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__30219.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__30219.meta);
} else
{if((1 < (this__30219.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__30219.meta,(this__30219.cnt - 1),this__30219.shift,this__30219.root,this__30219.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__30220 = cljs.core.array_for.call(null,coll,(this__30219.cnt - 2));
var nr__30221 = cljs.core.pop_tail.call(null,coll,this__30219.shift,this__30219.root);
var new_root__30222 = (((nr__30221 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__30221);
var cnt_1__30223 = (this__30219.cnt - 1);
if((function (){var and__3822__auto____30224 = (5 < this__30219.shift);
if(and__3822__auto____30224)
{return (cljs.core.pv_aget.call(null,new_root__30222,1) == null);
} else
{return and__3822__auto____30224;
}
})())
{return (new cljs.core.PersistentVector(this__30219.meta,cnt_1__30223,(this__30219.shift - 5),cljs.core.pv_aget.call(null,new_root__30222,0),new_tail__30220,null));
} else
{return (new cljs.core.PersistentVector(this__30219.meta,cnt_1__30223,this__30219.shift,new_root__30222,new_tail__30220,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__30225 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30226 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30227 = this;
return (new cljs.core.PersistentVector(meta,this__30227.cnt,this__30227.shift,this__30227.root,this__30227.tail,this__30227.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30228 = this;
return this__30228.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__30229 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__30230 = this;
if((function (){var and__3822__auto____30231 = (0 <= n);
if(and__3822__auto____30231)
{return (n < this__30230.cnt);
} else
{return and__3822__auto____30231;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30232 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__30232.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__30237 = xs.length;
var xs__30238 = (((no_clone === true))?xs:xs.slice());
if((l__30237 < 32))
{return (new cljs.core.PersistentVector(null,l__30237,5,cljs.core.PersistentVector.EMPTY_NODE,xs__30238,null));
} else
{var node__30239 = xs__30238.slice(0,32);
var v__30240 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__30239,null));
var i__30241 = 32;
var out__30242 = cljs.core._as_transient.call(null,v__30240);
while(true){
if((i__30241 < l__30237))
{{
var G__30243 = (i__30241 + 1);
var G__30244 = cljs.core.conj_BANG_.call(null,out__30242,(xs__30238[i__30241]));
i__30241 = G__30243;
out__30242 = G__30244;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__30242);
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
vector.cljs$lang$applyTo = (function (arglist__30245){
var args = cljs.core.seq(arglist__30245);;
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
var this__30246 = this;
var h__2203__auto____30247 = this__30246.__hash;
if(!((h__2203__auto____30247 == null)))
{return h__2203__auto____30247;
} else
{var h__2203__auto____30248 = cljs.core.hash_coll.call(null,coll);
this__30246.__hash = h__2203__auto____30248;
return h__2203__auto____30248;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__30249 = this;
if(((this__30249.off + 1) < this__30249.node.length))
{var s__30250 = cljs.core.chunked_seq.call(null,this__30249.vec,this__30249.node,this__30249.i,(this__30249.off + 1));
if((s__30250 == null))
{return null;
} else
{return s__30250;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30251 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30252 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__30253 = this;
return (this__30253.node[this__30253.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__30254 = this;
if(((this__30254.off + 1) < this__30254.node.length))
{var s__30255 = cljs.core.chunked_seq.call(null,this__30254.vec,this__30254.node,this__30254.i,(this__30254.off + 1));
if((s__30255 == null))
{return cljs.core.List.EMPTY;
} else
{return s__30255;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__30256 = this;
var l__30257 = this__30256.node.length;
var s__30258 = ((((this__30256.i + l__30257) < cljs.core._count.call(null,this__30256.vec)))?cljs.core.chunked_seq.call(null,this__30256.vec,(this__30256.i + l__30257),0):null);
if((s__30258 == null))
{return null;
} else
{return s__30258;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30259 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__30260 = this;
return cljs.core.chunked_seq.call(null,this__30260.vec,this__30260.node,this__30260.i,this__30260.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__30261 = this;
return this__30261.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30262 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__30262.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__30263 = this;
return cljs.core.array_chunk.call(null,this__30263.node,this__30263.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__30264 = this;
var l__30265 = this__30264.node.length;
var s__30266 = ((((this__30264.i + l__30265) < cljs.core._count.call(null,this__30264.vec)))?cljs.core.chunked_seq.call(null,this__30264.vec,(this__30264.i + l__30265),0):null);
if((s__30266 == null))
{return cljs.core.List.EMPTY;
} else
{return s__30266;
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
var this__30269 = this;
var h__2203__auto____30270 = this__30269.__hash;
if(!((h__2203__auto____30270 == null)))
{return h__2203__auto____30270;
} else
{var h__2203__auto____30271 = cljs.core.hash_coll.call(null,coll);
this__30269.__hash = h__2203__auto____30271;
return h__2203__auto____30271;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__30272 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__30273 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__30274 = this;
var v_pos__30275 = (this__30274.start + key);
return (new cljs.core.Subvec(this__30274.meta,cljs.core._assoc.call(null,this__30274.v,v_pos__30275,val),this__30274.start,((this__30274.end > (v_pos__30275 + 1)) ? this__30274.end : (v_pos__30275 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__30301 = null;
var G__30301__2 = (function (this_sym30276,k){
var this__30278 = this;
var this_sym30276__30279 = this;
var coll__30280 = this_sym30276__30279;
return coll__30280.cljs$core$ILookup$_lookup$arity$2(coll__30280,k);
});
var G__30301__3 = (function (this_sym30277,k,not_found){
var this__30278 = this;
var this_sym30277__30281 = this;
var coll__30282 = this_sym30277__30281;
return coll__30282.cljs$core$ILookup$_lookup$arity$3(coll__30282,k,not_found);
});
G__30301 = function(this_sym30277,k,not_found){
switch(arguments.length){
case 2:
return G__30301__2.call(this,this_sym30277,k);
case 3:
return G__30301__3.call(this,this_sym30277,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30301;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym30267,args30268){
var this__30283 = this;
return this_sym30267.call.apply(this_sym30267,[this_sym30267].concat(args30268.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30284 = this;
return (new cljs.core.Subvec(this__30284.meta,cljs.core._assoc_n.call(null,this__30284.v,this__30284.end,o),this__30284.start,(this__30284.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__30285 = this;
var this__30286 = this;
return cljs.core.pr_str.call(null,this__30286);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__30287 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__30288 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30289 = this;
var subvec_seq__30290 = (function subvec_seq(i){
if((i === this__30289.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__30289.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__30290.call(null,this__30289.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30291 = this;
return (this__30291.end - this__30291.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__30292 = this;
return cljs.core._nth.call(null,this__30292.v,(this__30292.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__30293 = this;
if((this__30293.start === this__30293.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__30293.meta,this__30293.v,this__30293.start,(this__30293.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__30294 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30295 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30296 = this;
return (new cljs.core.Subvec(meta,this__30296.v,this__30296.start,this__30296.end,this__30296.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30297 = this;
return this__30297.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__30298 = this;
return cljs.core._nth.call(null,this__30298.v,(this__30298.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__30299 = this;
return cljs.core._nth.call(null,this__30299.v,(this__30299.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30300 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__30300.meta);
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
var ret__30303 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__30303,0,tl.length);
return ret__30303;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__30307 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__30308 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__30307,subidx__30308,(((level === 5))?tail_node:(function (){var child__30309 = cljs.core.pv_aget.call(null,ret__30307,subidx__30308);
if(!((child__30309 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__30309,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__30307;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__30314 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__30315 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__30316 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__30314,subidx__30315));
if((function (){var and__3822__auto____30317 = (new_child__30316 == null);
if(and__3822__auto____30317)
{return (subidx__30315 === 0);
} else
{return and__3822__auto____30317;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__30314,subidx__30315,new_child__30316);
return node__30314;
}
} else
{if((subidx__30315 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__30314,subidx__30315,null);
return node__30314;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____30322 = (0 <= i);
if(and__3822__auto____30322)
{return (i < tv.cnt);
} else
{return and__3822__auto____30322;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__30323 = tv.root;
var node__30324 = root__30323;
var level__30325 = tv.shift;
while(true){
if((level__30325 > 0))
{{
var G__30326 = cljs.core.tv_ensure_editable.call(null,root__30323.edit,cljs.core.pv_aget.call(null,node__30324,((i >>> level__30325) & 31)));
var G__30327 = (level__30325 - 5);
node__30324 = G__30326;
level__30325 = G__30327;
continue;
}
} else
{return node__30324.arr;
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
var G__30367 = null;
var G__30367__2 = (function (this_sym30330,k){
var this__30332 = this;
var this_sym30330__30333 = this;
var coll__30334 = this_sym30330__30333;
return coll__30334.cljs$core$ILookup$_lookup$arity$2(coll__30334,k);
});
var G__30367__3 = (function (this_sym30331,k,not_found){
var this__30332 = this;
var this_sym30331__30335 = this;
var coll__30336 = this_sym30331__30335;
return coll__30336.cljs$core$ILookup$_lookup$arity$3(coll__30336,k,not_found);
});
G__30367 = function(this_sym30331,k,not_found){
switch(arguments.length){
case 2:
return G__30367__2.call(this,this_sym30331,k);
case 3:
return G__30367__3.call(this,this_sym30331,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30367;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym30328,args30329){
var this__30337 = this;
return this_sym30328.call.apply(this_sym30328,[this_sym30328].concat(args30329.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__30338 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__30339 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__30340 = this;
if(this__30340.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__30341 = this;
if((function (){var and__3822__auto____30342 = (0 <= n);
if(and__3822__auto____30342)
{return (n < this__30341.cnt);
} else
{return and__3822__auto____30342;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30343 = this;
if(this__30343.root.edit)
{return this__30343.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__30344 = this;
if(this__30344.root.edit)
{if((function (){var and__3822__auto____30345 = (0 <= n);
if(and__3822__auto____30345)
{return (n < this__30344.cnt);
} else
{return and__3822__auto____30345;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__30344.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__30350 = (function go(level,node){
var node__30348 = cljs.core.tv_ensure_editable.call(null,this__30344.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__30348,(n & 31),val);
return node__30348;
} else
{var subidx__30349 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__30348,subidx__30349,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__30348,subidx__30349)));
return node__30348;
}
}).call(null,this__30344.shift,this__30344.root);
this__30344.root = new_root__30350;
return tcoll;
}
} else
{if((n === this__30344.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__30344.cnt)].join('')));
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
var this__30351 = this;
if(this__30351.root.edit)
{if((this__30351.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__30351.cnt))
{this__30351.cnt = 0;
return tcoll;
} else
{if((((this__30351.cnt - 1) & 31) > 0))
{this__30351.cnt = (this__30351.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__30352 = cljs.core.editable_array_for.call(null,tcoll,(this__30351.cnt - 2));
var new_root__30354 = (function (){var nr__30353 = cljs.core.tv_pop_tail.call(null,tcoll,this__30351.shift,this__30351.root);
if(!((nr__30353 == null)))
{return nr__30353;
} else
{return (new cljs.core.VectorNode(this__30351.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3822__auto____30355 = (5 < this__30351.shift);
if(and__3822__auto____30355)
{return (cljs.core.pv_aget.call(null,new_root__30354,1) == null);
} else
{return and__3822__auto____30355;
}
})())
{var new_root__30356 = cljs.core.tv_ensure_editable.call(null,this__30351.root.edit,cljs.core.pv_aget.call(null,new_root__30354,0));
this__30351.root = new_root__30356;
this__30351.shift = (this__30351.shift - 5);
this__30351.cnt = (this__30351.cnt - 1);
this__30351.tail = new_tail__30352;
return tcoll;
} else
{this__30351.root = new_root__30354;
this__30351.cnt = (this__30351.cnt - 1);
this__30351.tail = new_tail__30352;
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
var this__30357 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__30358 = this;
if(this__30358.root.edit)
{if(((this__30358.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__30358.tail[(this__30358.cnt & 31)] = o);
this__30358.cnt = (this__30358.cnt + 1);
return tcoll;
} else
{var tail_node__30359 = (new cljs.core.VectorNode(this__30358.root.edit,this__30358.tail));
var new_tail__30360 = cljs.core.make_array.call(null,32);
(new_tail__30360[0] = o);
this__30358.tail = new_tail__30360;
if(((this__30358.cnt >>> 5) > (1 << this__30358.shift)))
{var new_root_array__30361 = cljs.core.make_array.call(null,32);
var new_shift__30362 = (this__30358.shift + 5);
(new_root_array__30361[0] = this__30358.root);
(new_root_array__30361[1] = cljs.core.new_path.call(null,this__30358.root.edit,this__30358.shift,tail_node__30359));
this__30358.root = (new cljs.core.VectorNode(this__30358.root.edit,new_root_array__30361));
this__30358.shift = new_shift__30362;
this__30358.cnt = (this__30358.cnt + 1);
return tcoll;
} else
{var new_root__30363 = cljs.core.tv_push_tail.call(null,tcoll,this__30358.shift,this__30358.root,tail_node__30359);
this__30358.root = new_root__30363;
this__30358.cnt = (this__30358.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__30364 = this;
if(this__30364.root.edit)
{this__30364.root.edit = null;
var len__30365 = (this__30364.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__30366 = cljs.core.make_array.call(null,len__30365);
cljs.core.array_copy.call(null,this__30364.tail,0,trimmed_tail__30366,0,len__30365);
return (new cljs.core.PersistentVector(null,this__30364.cnt,this__30364.shift,this__30364.root,trimmed_tail__30366,null));
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
var this__30368 = this;
var h__2203__auto____30369 = this__30368.__hash;
if(!((h__2203__auto____30369 == null)))
{return h__2203__auto____30369;
} else
{var h__2203__auto____30370 = cljs.core.hash_coll.call(null,coll);
this__30368.__hash = h__2203__auto____30370;
return h__2203__auto____30370;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30371 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__30372 = this;
var this__30373 = this;
return cljs.core.pr_str.call(null,this__30373);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30374 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__30375 = this;
return cljs.core._first.call(null,this__30375.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__30376 = this;
var temp__3971__auto____30377 = cljs.core.next.call(null,this__30376.front);
if(temp__3971__auto____30377)
{var f1__30378 = temp__3971__auto____30377;
return (new cljs.core.PersistentQueueSeq(this__30376.meta,f1__30378,this__30376.rear,null));
} else
{if((this__30376.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__30376.meta,this__30376.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30379 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30380 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__30380.front,this__30380.rear,this__30380.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30381 = this;
return this__30381.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30382 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__30382.meta);
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
var this__30383 = this;
var h__2203__auto____30384 = this__30383.__hash;
if(!((h__2203__auto____30384 == null)))
{return h__2203__auto____30384;
} else
{var h__2203__auto____30385 = cljs.core.hash_coll.call(null,coll);
this__30383.__hash = h__2203__auto____30385;
return h__2203__auto____30385;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30386 = this;
if(cljs.core.truth_(this__30386.front))
{return (new cljs.core.PersistentQueue(this__30386.meta,(this__30386.count + 1),this__30386.front,cljs.core.conj.call(null,(function (){var or__3824__auto____30387 = this__30386.rear;
if(cljs.core.truth_(or__3824__auto____30387))
{return or__3824__auto____30387;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__30386.meta,(this__30386.count + 1),cljs.core.conj.call(null,this__30386.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__30388 = this;
var this__30389 = this;
return cljs.core.pr_str.call(null,this__30389);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30390 = this;
var rear__30391 = cljs.core.seq.call(null,this__30390.rear);
if(cljs.core.truth_((function (){var or__3824__auto____30392 = this__30390.front;
if(cljs.core.truth_(or__3824__auto____30392))
{return or__3824__auto____30392;
} else
{return rear__30391;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__30390.front,cljs.core.seq.call(null,rear__30391),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30393 = this;
return this__30393.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__30394 = this;
return cljs.core._first.call(null,this__30394.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__30395 = this;
if(cljs.core.truth_(this__30395.front))
{var temp__3971__auto____30396 = cljs.core.next.call(null,this__30395.front);
if(temp__3971__auto____30396)
{var f1__30397 = temp__3971__auto____30396;
return (new cljs.core.PersistentQueue(this__30395.meta,(this__30395.count - 1),f1__30397,this__30395.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__30395.meta,(this__30395.count - 1),cljs.core.seq.call(null,this__30395.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__30398 = this;
return cljs.core.first.call(null,this__30398.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__30399 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30400 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30401 = this;
return (new cljs.core.PersistentQueue(meta,this__30401.count,this__30401.front,this__30401.rear,this__30401.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30402 = this;
return this__30402.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30403 = this;
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
var this__30404 = this;
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
var len__30407 = array.length;
var i__30408 = 0;
while(true){
if((i__30408 < len__30407))
{if((k === (array[i__30408])))
{return i__30408;
} else
{{
var G__30409 = (i__30408 + incr);
i__30408 = G__30409;
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
var a__30412 = cljs.core.hash.call(null,a);
var b__30413 = cljs.core.hash.call(null,b);
if((a__30412 < b__30413))
{return -1;
} else
{if((a__30412 > b__30413))
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
var ks__30421 = m.keys;
var len__30422 = ks__30421.length;
var so__30423 = m.strobj;
var out__30424 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__30425 = 0;
var out__30426 = cljs.core.transient$.call(null,out__30424);
while(true){
if((i__30425 < len__30422))
{var k__30427 = (ks__30421[i__30425]);
{
var G__30428 = (i__30425 + 1);
var G__30429 = cljs.core.assoc_BANG_.call(null,out__30426,k__30427,(so__30423[k__30427]));
i__30425 = G__30428;
out__30426 = G__30429;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__30426,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__30435 = {};
var l__30436 = ks.length;
var i__30437 = 0;
while(true){
if((i__30437 < l__30436))
{var k__30438 = (ks[i__30437]);
(new_obj__30435[k__30438] = (obj[k__30438]));
{
var G__30439 = (i__30437 + 1);
i__30437 = G__30439;
continue;
}
} else
{}
break;
}
return new_obj__30435;
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
var this__30442 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__30443 = this;
var h__2203__auto____30444 = this__30443.__hash;
if(!((h__2203__auto____30444 == null)))
{return h__2203__auto____30444;
} else
{var h__2203__auto____30445 = cljs.core.hash_imap.call(null,coll);
this__30443.__hash = h__2203__auto____30445;
return h__2203__auto____30445;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__30446 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__30447 = this;
if((function (){var and__3822__auto____30448 = goog.isString(k);
if(and__3822__auto____30448)
{return !((cljs.core.scan_array.call(null,1,k,this__30447.keys) == null));
} else
{return and__3822__auto____30448;
}
})())
{return (this__30447.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__30449 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____30450 = (this__30449.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____30450)
{return or__3824__auto____30450;
} else
{return (this__30449.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__30449.keys) == null)))
{var new_strobj__30451 = cljs.core.obj_clone.call(null,this__30449.strobj,this__30449.keys);
(new_strobj__30451[k] = v);
return (new cljs.core.ObjMap(this__30449.meta,this__30449.keys,new_strobj__30451,(this__30449.update_count + 1),null));
} else
{var new_strobj__30452 = cljs.core.obj_clone.call(null,this__30449.strobj,this__30449.keys);
var new_keys__30453 = this__30449.keys.slice();
(new_strobj__30452[k] = v);
new_keys__30453.push(k);
return (new cljs.core.ObjMap(this__30449.meta,new_keys__30453,new_strobj__30452,(this__30449.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__30454 = this;
if((function (){var and__3822__auto____30455 = goog.isString(k);
if(and__3822__auto____30455)
{return !((cljs.core.scan_array.call(null,1,k,this__30454.keys) == null));
} else
{return and__3822__auto____30455;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__30477 = null;
var G__30477__2 = (function (this_sym30456,k){
var this__30458 = this;
var this_sym30456__30459 = this;
var coll__30460 = this_sym30456__30459;
return coll__30460.cljs$core$ILookup$_lookup$arity$2(coll__30460,k);
});
var G__30477__3 = (function (this_sym30457,k,not_found){
var this__30458 = this;
var this_sym30457__30461 = this;
var coll__30462 = this_sym30457__30461;
return coll__30462.cljs$core$ILookup$_lookup$arity$3(coll__30462,k,not_found);
});
G__30477 = function(this_sym30457,k,not_found){
switch(arguments.length){
case 2:
return G__30477__2.call(this,this_sym30457,k);
case 3:
return G__30477__3.call(this,this_sym30457,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30477;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym30440,args30441){
var this__30463 = this;
return this_sym30440.call.apply(this_sym30440,[this_sym30440].concat(args30441.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__30464 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__30465 = this;
var this__30466 = this;
return cljs.core.pr_str.call(null,this__30466);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30467 = this;
if((this__30467.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__30430_SHARP_){
return cljs.core.vector.call(null,p1__30430_SHARP_,(this__30467.strobj[p1__30430_SHARP_]));
}),this__30467.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30468 = this;
return this__30468.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30469 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30470 = this;
return (new cljs.core.ObjMap(meta,this__30470.keys,this__30470.strobj,this__30470.update_count,this__30470.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30471 = this;
return this__30471.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30472 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__30472.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__30473 = this;
if((function (){var and__3822__auto____30474 = goog.isString(k);
if(and__3822__auto____30474)
{return !((cljs.core.scan_array.call(null,1,k,this__30473.keys) == null));
} else
{return and__3822__auto____30474;
}
})())
{var new_keys__30475 = this__30473.keys.slice();
var new_strobj__30476 = cljs.core.obj_clone.call(null,this__30473.strobj,this__30473.keys);
new_keys__30475.splice(cljs.core.scan_array.call(null,1,k,new_keys__30475),1);
cljs.core.js_delete.call(null,new_strobj__30476,k);
return (new cljs.core.ObjMap(this__30473.meta,new_keys__30475,new_strobj__30476,(this__30473.update_count + 1),null));
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
var this__30481 = this;
var h__2203__auto____30482 = this__30481.__hash;
if(!((h__2203__auto____30482 == null)))
{return h__2203__auto____30482;
} else
{var h__2203__auto____30483 = cljs.core.hash_imap.call(null,coll);
this__30481.__hash = h__2203__auto____30483;
return h__2203__auto____30483;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__30484 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__30485 = this;
var bucket__30486 = (this__30485.hashobj[cljs.core.hash.call(null,k)]);
var i__30487 = (cljs.core.truth_(bucket__30486)?cljs.core.scan_array.call(null,2,k,bucket__30486):null);
if(cljs.core.truth_(i__30487))
{return (bucket__30486[(i__30487 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__30488 = this;
var h__30489 = cljs.core.hash.call(null,k);
var bucket__30490 = (this__30488.hashobj[h__30489]);
if(cljs.core.truth_(bucket__30490))
{var new_bucket__30491 = bucket__30490.slice();
var new_hashobj__30492 = goog.object.clone(this__30488.hashobj);
(new_hashobj__30492[h__30489] = new_bucket__30491);
var temp__3971__auto____30493 = cljs.core.scan_array.call(null,2,k,new_bucket__30491);
if(cljs.core.truth_(temp__3971__auto____30493))
{var i__30494 = temp__3971__auto____30493;
(new_bucket__30491[(i__30494 + 1)] = v);
return (new cljs.core.HashMap(this__30488.meta,this__30488.count,new_hashobj__30492,null));
} else
{new_bucket__30491.push(k,v);
return (new cljs.core.HashMap(this__30488.meta,(this__30488.count + 1),new_hashobj__30492,null));
}
} else
{var new_hashobj__30495 = goog.object.clone(this__30488.hashobj);
(new_hashobj__30495[h__30489] = [k,v]);
return (new cljs.core.HashMap(this__30488.meta,(this__30488.count + 1),new_hashobj__30495,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__30496 = this;
var bucket__30497 = (this__30496.hashobj[cljs.core.hash.call(null,k)]);
var i__30498 = (cljs.core.truth_(bucket__30497)?cljs.core.scan_array.call(null,2,k,bucket__30497):null);
if(cljs.core.truth_(i__30498))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__30523 = null;
var G__30523__2 = (function (this_sym30499,k){
var this__30501 = this;
var this_sym30499__30502 = this;
var coll__30503 = this_sym30499__30502;
return coll__30503.cljs$core$ILookup$_lookup$arity$2(coll__30503,k);
});
var G__30523__3 = (function (this_sym30500,k,not_found){
var this__30501 = this;
var this_sym30500__30504 = this;
var coll__30505 = this_sym30500__30504;
return coll__30505.cljs$core$ILookup$_lookup$arity$3(coll__30505,k,not_found);
});
G__30523 = function(this_sym30500,k,not_found){
switch(arguments.length){
case 2:
return G__30523__2.call(this,this_sym30500,k);
case 3:
return G__30523__3.call(this,this_sym30500,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30523;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym30479,args30480){
var this__30506 = this;
return this_sym30479.call.apply(this_sym30479,[this_sym30479].concat(args30480.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__30507 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__30508 = this;
var this__30509 = this;
return cljs.core.pr_str.call(null,this__30509);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30510 = this;
if((this__30510.count > 0))
{var hashes__30511 = cljs.core.js_keys.call(null,this__30510.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__30478_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__30510.hashobj[p1__30478_SHARP_])));
}),hashes__30511);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30512 = this;
return this__30512.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30513 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30514 = this;
return (new cljs.core.HashMap(meta,this__30514.count,this__30514.hashobj,this__30514.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30515 = this;
return this__30515.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30516 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__30516.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__30517 = this;
var h__30518 = cljs.core.hash.call(null,k);
var bucket__30519 = (this__30517.hashobj[h__30518]);
var i__30520 = (cljs.core.truth_(bucket__30519)?cljs.core.scan_array.call(null,2,k,bucket__30519):null);
if(cljs.core.not.call(null,i__30520))
{return coll;
} else
{var new_hashobj__30521 = goog.object.clone(this__30517.hashobj);
if((3 > bucket__30519.length))
{cljs.core.js_delete.call(null,new_hashobj__30521,h__30518);
} else
{var new_bucket__30522 = bucket__30519.slice();
new_bucket__30522.splice(i__30520,2);
(new_hashobj__30521[h__30518] = new_bucket__30522);
}
return (new cljs.core.HashMap(this__30517.meta,(this__30517.count - 1),new_hashobj__30521,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__30524 = ks.length;
var i__30525 = 0;
var out__30526 = cljs.core.HashMap.EMPTY;
while(true){
if((i__30525 < len__30524))
{{
var G__30527 = (i__30525 + 1);
var G__30528 = cljs.core.assoc.call(null,out__30526,(ks[i__30525]),(vs[i__30525]));
i__30525 = G__30527;
out__30526 = G__30528;
continue;
}
} else
{return out__30526;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__30532 = m.arr;
var len__30533 = arr__30532.length;
var i__30534 = 0;
while(true){
if((len__30533 <= i__30534))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__30532[i__30534]),k))
{return i__30534;
} else
{if("\uFDD0'else")
{{
var G__30535 = (i__30534 + 2);
i__30534 = G__30535;
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
var this__30538 = this;
return (new cljs.core.TransientArrayMap({},this__30538.arr.length,this__30538.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__30539 = this;
var h__2203__auto____30540 = this__30539.__hash;
if(!((h__2203__auto____30540 == null)))
{return h__2203__auto____30540;
} else
{var h__2203__auto____30541 = cljs.core.hash_imap.call(null,coll);
this__30539.__hash = h__2203__auto____30541;
return h__2203__auto____30541;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__30542 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__30543 = this;
var idx__30544 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__30544 === -1))
{return not_found;
} else
{return (this__30543.arr[(idx__30544 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__30545 = this;
var idx__30546 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__30546 === -1))
{if((this__30545.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__30545.meta,(this__30545.cnt + 1),(function (){var G__30547__30548 = this__30545.arr.slice();
G__30547__30548.push(k);
G__30547__30548.push(v);
return G__30547__30548;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__30545.arr[(idx__30546 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__30545.meta,this__30545.cnt,(function (){var G__30549__30550 = this__30545.arr.slice();
(G__30549__30550[(idx__30546 + 1)] = v);
return G__30549__30550;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__30551 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__30583 = null;
var G__30583__2 = (function (this_sym30552,k){
var this__30554 = this;
var this_sym30552__30555 = this;
var coll__30556 = this_sym30552__30555;
return coll__30556.cljs$core$ILookup$_lookup$arity$2(coll__30556,k);
});
var G__30583__3 = (function (this_sym30553,k,not_found){
var this__30554 = this;
var this_sym30553__30557 = this;
var coll__30558 = this_sym30553__30557;
return coll__30558.cljs$core$ILookup$_lookup$arity$3(coll__30558,k,not_found);
});
G__30583 = function(this_sym30553,k,not_found){
switch(arguments.length){
case 2:
return G__30583__2.call(this,this_sym30553,k);
case 3:
return G__30583__3.call(this,this_sym30553,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30583;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym30536,args30537){
var this__30559 = this;
return this_sym30536.call.apply(this_sym30536,[this_sym30536].concat(args30537.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__30560 = this;
var len__30561 = this__30560.arr.length;
var i__30562 = 0;
var init__30563 = init;
while(true){
if((i__30562 < len__30561))
{var init__30564 = f.call(null,init__30563,(this__30560.arr[i__30562]),(this__30560.arr[(i__30562 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__30564))
{return cljs.core.deref.call(null,init__30564);
} else
{{
var G__30584 = (i__30562 + 2);
var G__30585 = init__30564;
i__30562 = G__30584;
init__30563 = G__30585;
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
var this__30565 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__30566 = this;
var this__30567 = this;
return cljs.core.pr_str.call(null,this__30567);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30568 = this;
if((this__30568.cnt > 0))
{var len__30569 = this__30568.arr.length;
var array_map_seq__30570 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__30569))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__30568.arr[i]),(this__30568.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__30570.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30571 = this;
return this__30571.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30572 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30573 = this;
return (new cljs.core.PersistentArrayMap(meta,this__30573.cnt,this__30573.arr,this__30573.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30574 = this;
return this__30574.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30575 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30575.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__30576 = this;
var idx__30577 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__30577 >= 0))
{var len__30578 = this__30576.arr.length;
var new_len__30579 = (len__30578 - 2);
if((new_len__30579 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__30580 = cljs.core.make_array.call(null,new_len__30579);
var s__30581 = 0;
var d__30582 = 0;
while(true){
if((s__30581 >= len__30578))
{return (new cljs.core.PersistentArrayMap(this__30576.meta,(this__30576.cnt - 1),new_arr__30580,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__30576.arr[s__30581])))
{{
var G__30586 = (s__30581 + 2);
var G__30587 = d__30582;
s__30581 = G__30586;
d__30582 = G__30587;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__30580[d__30582] = (this__30576.arr[s__30581]));
(new_arr__30580[(d__30582 + 1)] = (this__30576.arr[(s__30581 + 1)]));
{
var G__30588 = (s__30581 + 2);
var G__30589 = (d__30582 + 2);
s__30581 = G__30588;
d__30582 = G__30589;
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
var len__30590 = cljs.core.count.call(null,ks);
var i__30591 = 0;
var out__30592 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__30591 < len__30590))
{{
var G__30593 = (i__30591 + 1);
var G__30594 = cljs.core.assoc_BANG_.call(null,out__30592,(ks[i__30591]),(vs[i__30591]));
i__30591 = G__30593;
out__30592 = G__30594;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__30592);
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
var this__30595 = this;
if(cljs.core.truth_(this__30595.editable_QMARK_))
{var idx__30596 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__30596 >= 0))
{(this__30595.arr[idx__30596] = (this__30595.arr[(this__30595.len - 2)]));
(this__30595.arr[(idx__30596 + 1)] = (this__30595.arr[(this__30595.len - 1)]));
var G__30597__30598 = this__30595.arr;
G__30597__30598.pop();
G__30597__30598.pop();
G__30597__30598;
this__30595.len = (this__30595.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__30599 = this;
if(cljs.core.truth_(this__30599.editable_QMARK_))
{var idx__30600 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__30600 === -1))
{if(((this__30599.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__30599.len = (this__30599.len + 2);
this__30599.arr.push(key);
this__30599.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__30599.len,this__30599.arr),key,val);
}
} else
{if((val === (this__30599.arr[(idx__30600 + 1)])))
{return tcoll;
} else
{(this__30599.arr[(idx__30600 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__30601 = this;
if(cljs.core.truth_(this__30601.editable_QMARK_))
{if((function (){var G__30602__30603 = o;
if(G__30602__30603)
{if((function (){var or__3824__auto____30604 = (G__30602__30603.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____30604)
{return or__3824__auto____30604;
} else
{return G__30602__30603.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__30602__30603.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__30602__30603);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__30602__30603);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__30605 = cljs.core.seq.call(null,o);
var tcoll__30606 = tcoll;
while(true){
var temp__3971__auto____30607 = cljs.core.first.call(null,es__30605);
if(cljs.core.truth_(temp__3971__auto____30607))
{var e__30608 = temp__3971__auto____30607;
{
var G__30614 = cljs.core.next.call(null,es__30605);
var G__30615 = tcoll__30606.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__30606,cljs.core.key.call(null,e__30608),cljs.core.val.call(null,e__30608));
es__30605 = G__30614;
tcoll__30606 = G__30615;
continue;
}
} else
{return tcoll__30606;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__30609 = this;
if(cljs.core.truth_(this__30609.editable_QMARK_))
{this__30609.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__30609.len,2),this__30609.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__30610 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__30611 = this;
if(cljs.core.truth_(this__30611.editable_QMARK_))
{var idx__30612 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__30612 === -1))
{return not_found;
} else
{return (this__30611.arr[(idx__30612 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__30613 = this;
if(cljs.core.truth_(this__30613.editable_QMARK_))
{return cljs.core.quot.call(null,this__30613.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__30618 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__30619 = 0;
while(true){
if((i__30619 < len))
{{
var G__30620 = cljs.core.assoc_BANG_.call(null,out__30618,(arr[i__30619]),(arr[(i__30619 + 1)]));
var G__30621 = (i__30619 + 2);
out__30618 = G__30620;
i__30619 = G__30621;
continue;
}
} else
{return out__30618;
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
var G__30626__30627 = arr.slice();
(G__30626__30627[i] = a);
return G__30626__30627;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__30628__30629 = arr.slice();
(G__30628__30629[i] = a);
(G__30628__30629[j] = b);
return G__30628__30629;
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
var new_arr__30631 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__30631,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__30631,(2 * i),(new_arr__30631.length - (2 * i)));
return new_arr__30631;
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
var editable__30634 = inode.ensure_editable(edit);
(editable__30634.arr[i] = a);
return editable__30634;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__30635 = inode.ensure_editable(edit);
(editable__30635.arr[i] = a);
(editable__30635.arr[j] = b);
return editable__30635;
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
var len__30642 = arr.length;
var i__30643 = 0;
var init__30644 = init;
while(true){
if((i__30643 < len__30642))
{var init__30647 = (function (){var k__30645 = (arr[i__30643]);
if(!((k__30645 == null)))
{return f.call(null,init__30644,k__30645,(arr[(i__30643 + 1)]));
} else
{var node__30646 = (arr[(i__30643 + 1)]);
if(!((node__30646 == null)))
{return node__30646.kv_reduce(f,init__30644);
} else
{return init__30644;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__30647))
{return cljs.core.deref.call(null,init__30647);
} else
{{
var G__30648 = (i__30643 + 2);
var G__30649 = init__30647;
i__30643 = G__30648;
init__30644 = G__30649;
continue;
}
}
} else
{return init__30644;
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
var this__30650 = this;
var inode__30651 = this;
if((this__30650.bitmap === bit))
{return null;
} else
{var editable__30652 = inode__30651.ensure_editable(e);
var earr__30653 = editable__30652.arr;
var len__30654 = earr__30653.length;
editable__30652.bitmap = (bit ^ editable__30652.bitmap);
cljs.core.array_copy.call(null,earr__30653,(2 * (i + 1)),earr__30653,(2 * i),(len__30654 - (2 * (i + 1))));
(earr__30653[(len__30654 - 2)] = null);
(earr__30653[(len__30654 - 1)] = null);
return editable__30652;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__30655 = this;
var inode__30656 = this;
var bit__30657 = (1 << ((hash >>> shift) & 0x01f));
var idx__30658 = cljs.core.bitmap_indexed_node_index.call(null,this__30655.bitmap,bit__30657);
if(((this__30655.bitmap & bit__30657) === 0))
{var n__30659 = cljs.core.bit_count.call(null,this__30655.bitmap);
if(((2 * n__30659) < this__30655.arr.length))
{var editable__30660 = inode__30656.ensure_editable(edit);
var earr__30661 = editable__30660.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__30661,(2 * idx__30658),earr__30661,(2 * (idx__30658 + 1)),(2 * (n__30659 - idx__30658)));
(earr__30661[(2 * idx__30658)] = key);
(earr__30661[((2 * idx__30658) + 1)] = val);
editable__30660.bitmap = (editable__30660.bitmap | bit__30657);
return editable__30660;
} else
{if((n__30659 >= 16))
{var nodes__30662 = cljs.core.make_array.call(null,32);
var jdx__30663 = ((hash >>> shift) & 0x01f);
(nodes__30662[jdx__30663] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__30664 = 0;
var j__30665 = 0;
while(true){
if((i__30664 < 32))
{if((((this__30655.bitmap >>> i__30664) & 1) === 0))
{{
var G__30718 = (i__30664 + 1);
var G__30719 = j__30665;
i__30664 = G__30718;
j__30665 = G__30719;
continue;
}
} else
{(nodes__30662[i__30664] = ((!(((this__30655.arr[j__30665]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__30655.arr[j__30665])),(this__30655.arr[j__30665]),(this__30655.arr[(j__30665 + 1)]),added_leaf_QMARK_):(this__30655.arr[(j__30665 + 1)])));
{
var G__30720 = (i__30664 + 1);
var G__30721 = (j__30665 + 2);
i__30664 = G__30720;
j__30665 = G__30721;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__30659 + 1),nodes__30662));
} else
{if("\uFDD0'else")
{var new_arr__30666 = cljs.core.make_array.call(null,(2 * (n__30659 + 4)));
cljs.core.array_copy.call(null,this__30655.arr,0,new_arr__30666,0,(2 * idx__30658));
(new_arr__30666[(2 * idx__30658)] = key);
(new_arr__30666[((2 * idx__30658) + 1)] = val);
cljs.core.array_copy.call(null,this__30655.arr,(2 * idx__30658),new_arr__30666,(2 * (idx__30658 + 1)),(2 * (n__30659 - idx__30658)));
added_leaf_QMARK_.val = true;
var editable__30667 = inode__30656.ensure_editable(edit);
editable__30667.arr = new_arr__30666;
editable__30667.bitmap = (editable__30667.bitmap | bit__30657);
return editable__30667;
} else
{return null;
}
}
}
} else
{var key_or_nil__30668 = (this__30655.arr[(2 * idx__30658)]);
var val_or_node__30669 = (this__30655.arr[((2 * idx__30658) + 1)]);
if((key_or_nil__30668 == null))
{var n__30670 = val_or_node__30669.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__30670 === val_or_node__30669))
{return inode__30656;
} else
{return cljs.core.edit_and_set.call(null,inode__30656,edit,((2 * idx__30658) + 1),n__30670);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__30668))
{if((val === val_or_node__30669))
{return inode__30656;
} else
{return cljs.core.edit_and_set.call(null,inode__30656,edit,((2 * idx__30658) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__30656,edit,(2 * idx__30658),null,((2 * idx__30658) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__30668,val_or_node__30669,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__30671 = this;
var inode__30672 = this;
return cljs.core.create_inode_seq.call(null,this__30671.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__30673 = this;
var inode__30674 = this;
var bit__30675 = (1 << ((hash >>> shift) & 0x01f));
if(((this__30673.bitmap & bit__30675) === 0))
{return inode__30674;
} else
{var idx__30676 = cljs.core.bitmap_indexed_node_index.call(null,this__30673.bitmap,bit__30675);
var key_or_nil__30677 = (this__30673.arr[(2 * idx__30676)]);
var val_or_node__30678 = (this__30673.arr[((2 * idx__30676) + 1)]);
if((key_or_nil__30677 == null))
{var n__30679 = val_or_node__30678.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__30679 === val_or_node__30678))
{return inode__30674;
} else
{if(!((n__30679 == null)))
{return cljs.core.edit_and_set.call(null,inode__30674,edit,((2 * idx__30676) + 1),n__30679);
} else
{if((this__30673.bitmap === bit__30675))
{return null;
} else
{if("\uFDD0'else")
{return inode__30674.edit_and_remove_pair(edit,bit__30675,idx__30676);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__30677))
{(removed_leaf_QMARK_[0] = true);
return inode__30674.edit_and_remove_pair(edit,bit__30675,idx__30676);
} else
{if("\uFDD0'else")
{return inode__30674;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__30680 = this;
var inode__30681 = this;
if((e === this__30680.edit))
{return inode__30681;
} else
{var n__30682 = cljs.core.bit_count.call(null,this__30680.bitmap);
var new_arr__30683 = cljs.core.make_array.call(null,(((n__30682 < 0))?4:(2 * (n__30682 + 1))));
cljs.core.array_copy.call(null,this__30680.arr,0,new_arr__30683,0,(2 * n__30682));
return (new cljs.core.BitmapIndexedNode(e,this__30680.bitmap,new_arr__30683));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__30684 = this;
var inode__30685 = this;
return cljs.core.inode_kv_reduce.call(null,this__30684.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__30686 = this;
var inode__30687 = this;
var bit__30688 = (1 << ((hash >>> shift) & 0x01f));
if(((this__30686.bitmap & bit__30688) === 0))
{return not_found;
} else
{var idx__30689 = cljs.core.bitmap_indexed_node_index.call(null,this__30686.bitmap,bit__30688);
var key_or_nil__30690 = (this__30686.arr[(2 * idx__30689)]);
var val_or_node__30691 = (this__30686.arr[((2 * idx__30689) + 1)]);
if((key_or_nil__30690 == null))
{return val_or_node__30691.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__30690))
{return cljs.core.PersistentVector.fromArray([key_or_nil__30690,val_or_node__30691], true);
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
var this__30692 = this;
var inode__30693 = this;
var bit__30694 = (1 << ((hash >>> shift) & 0x01f));
if(((this__30692.bitmap & bit__30694) === 0))
{return inode__30693;
} else
{var idx__30695 = cljs.core.bitmap_indexed_node_index.call(null,this__30692.bitmap,bit__30694);
var key_or_nil__30696 = (this__30692.arr[(2 * idx__30695)]);
var val_or_node__30697 = (this__30692.arr[((2 * idx__30695) + 1)]);
if((key_or_nil__30696 == null))
{var n__30698 = val_or_node__30697.inode_without((shift + 5),hash,key);
if((n__30698 === val_or_node__30697))
{return inode__30693;
} else
{if(!((n__30698 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__30692.bitmap,cljs.core.clone_and_set.call(null,this__30692.arr,((2 * idx__30695) + 1),n__30698)));
} else
{if((this__30692.bitmap === bit__30694))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__30692.bitmap ^ bit__30694),cljs.core.remove_pair.call(null,this__30692.arr,idx__30695)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__30696))
{return (new cljs.core.BitmapIndexedNode(null,(this__30692.bitmap ^ bit__30694),cljs.core.remove_pair.call(null,this__30692.arr,idx__30695)));
} else
{if("\uFDD0'else")
{return inode__30693;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__30699 = this;
var inode__30700 = this;
var bit__30701 = (1 << ((hash >>> shift) & 0x01f));
var idx__30702 = cljs.core.bitmap_indexed_node_index.call(null,this__30699.bitmap,bit__30701);
if(((this__30699.bitmap & bit__30701) === 0))
{var n__30703 = cljs.core.bit_count.call(null,this__30699.bitmap);
if((n__30703 >= 16))
{var nodes__30704 = cljs.core.make_array.call(null,32);
var jdx__30705 = ((hash >>> shift) & 0x01f);
(nodes__30704[jdx__30705] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__30706 = 0;
var j__30707 = 0;
while(true){
if((i__30706 < 32))
{if((((this__30699.bitmap >>> i__30706) & 1) === 0))
{{
var G__30722 = (i__30706 + 1);
var G__30723 = j__30707;
i__30706 = G__30722;
j__30707 = G__30723;
continue;
}
} else
{(nodes__30704[i__30706] = ((!(((this__30699.arr[j__30707]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__30699.arr[j__30707])),(this__30699.arr[j__30707]),(this__30699.arr[(j__30707 + 1)]),added_leaf_QMARK_):(this__30699.arr[(j__30707 + 1)])));
{
var G__30724 = (i__30706 + 1);
var G__30725 = (j__30707 + 2);
i__30706 = G__30724;
j__30707 = G__30725;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__30703 + 1),nodes__30704));
} else
{var new_arr__30708 = cljs.core.make_array.call(null,(2 * (n__30703 + 1)));
cljs.core.array_copy.call(null,this__30699.arr,0,new_arr__30708,0,(2 * idx__30702));
(new_arr__30708[(2 * idx__30702)] = key);
(new_arr__30708[((2 * idx__30702) + 1)] = val);
cljs.core.array_copy.call(null,this__30699.arr,(2 * idx__30702),new_arr__30708,(2 * (idx__30702 + 1)),(2 * (n__30703 - idx__30702)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__30699.bitmap | bit__30701),new_arr__30708));
}
} else
{var key_or_nil__30709 = (this__30699.arr[(2 * idx__30702)]);
var val_or_node__30710 = (this__30699.arr[((2 * idx__30702) + 1)]);
if((key_or_nil__30709 == null))
{var n__30711 = val_or_node__30710.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__30711 === val_or_node__30710))
{return inode__30700;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__30699.bitmap,cljs.core.clone_and_set.call(null,this__30699.arr,((2 * idx__30702) + 1),n__30711)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__30709))
{if((val === val_or_node__30710))
{return inode__30700;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__30699.bitmap,cljs.core.clone_and_set.call(null,this__30699.arr,((2 * idx__30702) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__30699.bitmap,cljs.core.clone_and_set.call(null,this__30699.arr,(2 * idx__30702),null,((2 * idx__30702) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__30709,val_or_node__30710,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__30712 = this;
var inode__30713 = this;
var bit__30714 = (1 << ((hash >>> shift) & 0x01f));
if(((this__30712.bitmap & bit__30714) === 0))
{return not_found;
} else
{var idx__30715 = cljs.core.bitmap_indexed_node_index.call(null,this__30712.bitmap,bit__30714);
var key_or_nil__30716 = (this__30712.arr[(2 * idx__30715)]);
var val_or_node__30717 = (this__30712.arr[((2 * idx__30715) + 1)]);
if((key_or_nil__30716 == null))
{return val_or_node__30717.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__30716))
{return val_or_node__30717;
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
var arr__30733 = array_node.arr;
var len__30734 = (2 * (array_node.cnt - 1));
var new_arr__30735 = cljs.core.make_array.call(null,len__30734);
var i__30736 = 0;
var j__30737 = 1;
var bitmap__30738 = 0;
while(true){
if((i__30736 < len__30734))
{if((function (){var and__3822__auto____30739 = !((i__30736 === idx));
if(and__3822__auto____30739)
{return !(((arr__30733[i__30736]) == null));
} else
{return and__3822__auto____30739;
}
})())
{(new_arr__30735[j__30737] = (arr__30733[i__30736]));
{
var G__30740 = (i__30736 + 1);
var G__30741 = (j__30737 + 2);
var G__30742 = (bitmap__30738 | (1 << i__30736));
i__30736 = G__30740;
j__30737 = G__30741;
bitmap__30738 = G__30742;
continue;
}
} else
{{
var G__30743 = (i__30736 + 1);
var G__30744 = j__30737;
var G__30745 = bitmap__30738;
i__30736 = G__30743;
j__30737 = G__30744;
bitmap__30738 = G__30745;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__30738,new_arr__30735));
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
var this__30746 = this;
var inode__30747 = this;
var idx__30748 = ((hash >>> shift) & 0x01f);
var node__30749 = (this__30746.arr[idx__30748]);
if((node__30749 == null))
{var editable__30750 = cljs.core.edit_and_set.call(null,inode__30747,edit,idx__30748,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__30750.cnt = (editable__30750.cnt + 1);
return editable__30750;
} else
{var n__30751 = node__30749.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__30751 === node__30749))
{return inode__30747;
} else
{return cljs.core.edit_and_set.call(null,inode__30747,edit,idx__30748,n__30751);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__30752 = this;
var inode__30753 = this;
return cljs.core.create_array_node_seq.call(null,this__30752.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__30754 = this;
var inode__30755 = this;
var idx__30756 = ((hash >>> shift) & 0x01f);
var node__30757 = (this__30754.arr[idx__30756]);
if((node__30757 == null))
{return inode__30755;
} else
{var n__30758 = node__30757.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__30758 === node__30757))
{return inode__30755;
} else
{if((n__30758 == null))
{if((this__30754.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__30755,edit,idx__30756);
} else
{var editable__30759 = cljs.core.edit_and_set.call(null,inode__30755,edit,idx__30756,n__30758);
editable__30759.cnt = (editable__30759.cnt - 1);
return editable__30759;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__30755,edit,idx__30756,n__30758);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__30760 = this;
var inode__30761 = this;
if((e === this__30760.edit))
{return inode__30761;
} else
{return (new cljs.core.ArrayNode(e,this__30760.cnt,this__30760.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__30762 = this;
var inode__30763 = this;
var len__30764 = this__30762.arr.length;
var i__30765 = 0;
var init__30766 = init;
while(true){
if((i__30765 < len__30764))
{var node__30767 = (this__30762.arr[i__30765]);
if(!((node__30767 == null)))
{var init__30768 = node__30767.kv_reduce(f,init__30766);
if(cljs.core.reduced_QMARK_.call(null,init__30768))
{return cljs.core.deref.call(null,init__30768);
} else
{{
var G__30787 = (i__30765 + 1);
var G__30788 = init__30768;
i__30765 = G__30787;
init__30766 = G__30788;
continue;
}
}
} else
{return null;
}
} else
{return init__30766;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__30769 = this;
var inode__30770 = this;
var idx__30771 = ((hash >>> shift) & 0x01f);
var node__30772 = (this__30769.arr[idx__30771]);
if(!((node__30772 == null)))
{return node__30772.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__30773 = this;
var inode__30774 = this;
var idx__30775 = ((hash >>> shift) & 0x01f);
var node__30776 = (this__30773.arr[idx__30775]);
if(!((node__30776 == null)))
{var n__30777 = node__30776.inode_without((shift + 5),hash,key);
if((n__30777 === node__30776))
{return inode__30774;
} else
{if((n__30777 == null))
{if((this__30773.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__30774,null,idx__30775);
} else
{return (new cljs.core.ArrayNode(null,(this__30773.cnt - 1),cljs.core.clone_and_set.call(null,this__30773.arr,idx__30775,n__30777)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__30773.cnt,cljs.core.clone_and_set.call(null,this__30773.arr,idx__30775,n__30777)));
} else
{return null;
}
}
}
} else
{return inode__30774;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__30778 = this;
var inode__30779 = this;
var idx__30780 = ((hash >>> shift) & 0x01f);
var node__30781 = (this__30778.arr[idx__30780]);
if((node__30781 == null))
{return (new cljs.core.ArrayNode(null,(this__30778.cnt + 1),cljs.core.clone_and_set.call(null,this__30778.arr,idx__30780,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__30782 = node__30781.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__30782 === node__30781))
{return inode__30779;
} else
{return (new cljs.core.ArrayNode(null,this__30778.cnt,cljs.core.clone_and_set.call(null,this__30778.arr,idx__30780,n__30782)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__30783 = this;
var inode__30784 = this;
var idx__30785 = ((hash >>> shift) & 0x01f);
var node__30786 = (this__30783.arr[idx__30785]);
if(!((node__30786 == null)))
{return node__30786.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__30791 = (2 * cnt);
var i__30792 = 0;
while(true){
if((i__30792 < lim__30791))
{if(cljs.core.key_test.call(null,key,(arr[i__30792])))
{return i__30792;
} else
{{
var G__30793 = (i__30792 + 2);
i__30792 = G__30793;
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
var this__30794 = this;
var inode__30795 = this;
if((hash === this__30794.collision_hash))
{var idx__30796 = cljs.core.hash_collision_node_find_index.call(null,this__30794.arr,this__30794.cnt,key);
if((idx__30796 === -1))
{if((this__30794.arr.length > (2 * this__30794.cnt)))
{var editable__30797 = cljs.core.edit_and_set.call(null,inode__30795,edit,(2 * this__30794.cnt),key,((2 * this__30794.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__30797.cnt = (editable__30797.cnt + 1);
return editable__30797;
} else
{var len__30798 = this__30794.arr.length;
var new_arr__30799 = cljs.core.make_array.call(null,(len__30798 + 2));
cljs.core.array_copy.call(null,this__30794.arr,0,new_arr__30799,0,len__30798);
(new_arr__30799[len__30798] = key);
(new_arr__30799[(len__30798 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__30795.ensure_editable_array(edit,(this__30794.cnt + 1),new_arr__30799);
}
} else
{if(((this__30794.arr[(idx__30796 + 1)]) === val))
{return inode__30795;
} else
{return cljs.core.edit_and_set.call(null,inode__30795,edit,(idx__30796 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__30794.collision_hash >>> shift) & 0x01f)),[null,inode__30795,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__30800 = this;
var inode__30801 = this;
return cljs.core.create_inode_seq.call(null,this__30800.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__30802 = this;
var inode__30803 = this;
var idx__30804 = cljs.core.hash_collision_node_find_index.call(null,this__30802.arr,this__30802.cnt,key);
if((idx__30804 === -1))
{return inode__30803;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__30802.cnt === 1))
{return null;
} else
{var editable__30805 = inode__30803.ensure_editable(edit);
var earr__30806 = editable__30805.arr;
(earr__30806[idx__30804] = (earr__30806[((2 * this__30802.cnt) - 2)]));
(earr__30806[(idx__30804 + 1)] = (earr__30806[((2 * this__30802.cnt) - 1)]));
(earr__30806[((2 * this__30802.cnt) - 1)] = null);
(earr__30806[((2 * this__30802.cnt) - 2)] = null);
editable__30805.cnt = (editable__30805.cnt - 1);
return editable__30805;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__30807 = this;
var inode__30808 = this;
if((e === this__30807.edit))
{return inode__30808;
} else
{var new_arr__30809 = cljs.core.make_array.call(null,(2 * (this__30807.cnt + 1)));
cljs.core.array_copy.call(null,this__30807.arr,0,new_arr__30809,0,(2 * this__30807.cnt));
return (new cljs.core.HashCollisionNode(e,this__30807.collision_hash,this__30807.cnt,new_arr__30809));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__30810 = this;
var inode__30811 = this;
return cljs.core.inode_kv_reduce.call(null,this__30810.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__30812 = this;
var inode__30813 = this;
var idx__30814 = cljs.core.hash_collision_node_find_index.call(null,this__30812.arr,this__30812.cnt,key);
if((idx__30814 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__30812.arr[idx__30814])))
{return cljs.core.PersistentVector.fromArray([(this__30812.arr[idx__30814]),(this__30812.arr[(idx__30814 + 1)])], true);
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
var this__30815 = this;
var inode__30816 = this;
var idx__30817 = cljs.core.hash_collision_node_find_index.call(null,this__30815.arr,this__30815.cnt,key);
if((idx__30817 === -1))
{return inode__30816;
} else
{if((this__30815.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__30815.collision_hash,(this__30815.cnt - 1),cljs.core.remove_pair.call(null,this__30815.arr,cljs.core.quot.call(null,idx__30817,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__30818 = this;
var inode__30819 = this;
if((hash === this__30818.collision_hash))
{var idx__30820 = cljs.core.hash_collision_node_find_index.call(null,this__30818.arr,this__30818.cnt,key);
if((idx__30820 === -1))
{var len__30821 = this__30818.arr.length;
var new_arr__30822 = cljs.core.make_array.call(null,(len__30821 + 2));
cljs.core.array_copy.call(null,this__30818.arr,0,new_arr__30822,0,len__30821);
(new_arr__30822[len__30821] = key);
(new_arr__30822[(len__30821 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__30818.collision_hash,(this__30818.cnt + 1),new_arr__30822));
} else
{if(cljs.core._EQ_.call(null,(this__30818.arr[idx__30820]),val))
{return inode__30819;
} else
{return (new cljs.core.HashCollisionNode(null,this__30818.collision_hash,this__30818.cnt,cljs.core.clone_and_set.call(null,this__30818.arr,(idx__30820 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__30818.collision_hash >>> shift) & 0x01f)),[null,inode__30819])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__30823 = this;
var inode__30824 = this;
var idx__30825 = cljs.core.hash_collision_node_find_index.call(null,this__30823.arr,this__30823.cnt,key);
if((idx__30825 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__30823.arr[idx__30825])))
{return (this__30823.arr[(idx__30825 + 1)]);
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
var this__30826 = this;
var inode__30827 = this;
if((e === this__30826.edit))
{this__30826.arr = array;
this__30826.cnt = count;
return inode__30827;
} else
{return (new cljs.core.HashCollisionNode(this__30826.edit,this__30826.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__30832 = cljs.core.hash.call(null,key1);
if((key1hash__30832 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__30832,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___30833 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__30832,key1,val1,added_leaf_QMARK___30833).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___30833);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__30834 = cljs.core.hash.call(null,key1);
if((key1hash__30834 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__30834,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___30835 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__30834,key1,val1,added_leaf_QMARK___30835).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___30835);
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
var this__30836 = this;
var h__2203__auto____30837 = this__30836.__hash;
if(!((h__2203__auto____30837 == null)))
{return h__2203__auto____30837;
} else
{var h__2203__auto____30838 = cljs.core.hash_coll.call(null,coll);
this__30836.__hash = h__2203__auto____30838;
return h__2203__auto____30838;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30839 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__30840 = this;
var this__30841 = this;
return cljs.core.pr_str.call(null,this__30841);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__30842 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__30843 = this;
if((this__30843.s == null))
{return cljs.core.PersistentVector.fromArray([(this__30843.nodes[this__30843.i]),(this__30843.nodes[(this__30843.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__30843.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__30844 = this;
if((this__30844.s == null))
{return cljs.core.create_inode_seq.call(null,this__30844.nodes,(this__30844.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__30844.nodes,this__30844.i,cljs.core.next.call(null,this__30844.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30845 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30846 = this;
return (new cljs.core.NodeSeq(meta,this__30846.nodes,this__30846.i,this__30846.s,this__30846.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30847 = this;
return this__30847.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30848 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__30848.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__30855 = nodes.length;
var j__30856 = i;
while(true){
if((j__30856 < len__30855))
{if(!(((nodes[j__30856]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__30856,null,null));
} else
{var temp__3971__auto____30857 = (nodes[(j__30856 + 1)]);
if(cljs.core.truth_(temp__3971__auto____30857))
{var node__30858 = temp__3971__auto____30857;
var temp__3971__auto____30859 = node__30858.inode_seq();
if(cljs.core.truth_(temp__3971__auto____30859))
{var node_seq__30860 = temp__3971__auto____30859;
return (new cljs.core.NodeSeq(null,nodes,(j__30856 + 2),node_seq__30860,null));
} else
{{
var G__30861 = (j__30856 + 2);
j__30856 = G__30861;
continue;
}
}
} else
{{
var G__30862 = (j__30856 + 2);
j__30856 = G__30862;
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
var this__30863 = this;
var h__2203__auto____30864 = this__30863.__hash;
if(!((h__2203__auto____30864 == null)))
{return h__2203__auto____30864;
} else
{var h__2203__auto____30865 = cljs.core.hash_coll.call(null,coll);
this__30863.__hash = h__2203__auto____30865;
return h__2203__auto____30865;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30866 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__30867 = this;
var this__30868 = this;
return cljs.core.pr_str.call(null,this__30868);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__30869 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__30870 = this;
return cljs.core.first.call(null,this__30870.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__30871 = this;
return cljs.core.create_array_node_seq.call(null,null,this__30871.nodes,this__30871.i,cljs.core.next.call(null,this__30871.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30872 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30873 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__30873.nodes,this__30873.i,this__30873.s,this__30873.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30874 = this;
return this__30874.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30875 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__30875.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__30882 = nodes.length;
var j__30883 = i;
while(true){
if((j__30883 < len__30882))
{var temp__3971__auto____30884 = (nodes[j__30883]);
if(cljs.core.truth_(temp__3971__auto____30884))
{var nj__30885 = temp__3971__auto____30884;
var temp__3971__auto____30886 = nj__30885.inode_seq();
if(cljs.core.truth_(temp__3971__auto____30886))
{var ns__30887 = temp__3971__auto____30886;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__30883 + 1),ns__30887,null));
} else
{{
var G__30888 = (j__30883 + 1);
j__30883 = G__30888;
continue;
}
}
} else
{{
var G__30889 = (j__30883 + 1);
j__30883 = G__30889;
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
var this__30892 = this;
return (new cljs.core.TransientHashMap({},this__30892.root,this__30892.cnt,this__30892.has_nil_QMARK_,this__30892.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__30893 = this;
var h__2203__auto____30894 = this__30893.__hash;
if(!((h__2203__auto____30894 == null)))
{return h__2203__auto____30894;
} else
{var h__2203__auto____30895 = cljs.core.hash_imap.call(null,coll);
this__30893.__hash = h__2203__auto____30895;
return h__2203__auto____30895;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__30896 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__30897 = this;
if((k == null))
{if(this__30897.has_nil_QMARK_)
{return this__30897.nil_val;
} else
{return not_found;
}
} else
{if((this__30897.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__30897.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__30898 = this;
if((k == null))
{if((function (){var and__3822__auto____30899 = this__30898.has_nil_QMARK_;
if(and__3822__auto____30899)
{return (v === this__30898.nil_val);
} else
{return and__3822__auto____30899;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__30898.meta,((this__30898.has_nil_QMARK_)?this__30898.cnt:(this__30898.cnt + 1)),this__30898.root,true,v,null));
}
} else
{var added_leaf_QMARK___30900 = (new cljs.core.Box(false));
var new_root__30901 = (((this__30898.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__30898.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___30900);
if((new_root__30901 === this__30898.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__30898.meta,((added_leaf_QMARK___30900.val)?(this__30898.cnt + 1):this__30898.cnt),new_root__30901,this__30898.has_nil_QMARK_,this__30898.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__30902 = this;
if((k == null))
{return this__30902.has_nil_QMARK_;
} else
{if((this__30902.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__30902.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__30925 = null;
var G__30925__2 = (function (this_sym30903,k){
var this__30905 = this;
var this_sym30903__30906 = this;
var coll__30907 = this_sym30903__30906;
return coll__30907.cljs$core$ILookup$_lookup$arity$2(coll__30907,k);
});
var G__30925__3 = (function (this_sym30904,k,not_found){
var this__30905 = this;
var this_sym30904__30908 = this;
var coll__30909 = this_sym30904__30908;
return coll__30909.cljs$core$ILookup$_lookup$arity$3(coll__30909,k,not_found);
});
G__30925 = function(this_sym30904,k,not_found){
switch(arguments.length){
case 2:
return G__30925__2.call(this,this_sym30904,k);
case 3:
return G__30925__3.call(this,this_sym30904,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__30925;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym30890,args30891){
var this__30910 = this;
return this_sym30890.call.apply(this_sym30890,[this_sym30890].concat(args30891.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__30911 = this;
var init__30912 = ((this__30911.has_nil_QMARK_)?f.call(null,init,null,this__30911.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__30912))
{return cljs.core.deref.call(null,init__30912);
} else
{if(!((this__30911.root == null)))
{return this__30911.root.kv_reduce(f,init__30912);
} else
{if("\uFDD0'else")
{return init__30912;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__30913 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__30914 = this;
var this__30915 = this;
return cljs.core.pr_str.call(null,this__30915);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__30916 = this;
if((this__30916.cnt > 0))
{var s__30917 = ((!((this__30916.root == null)))?this__30916.root.inode_seq():null);
if(this__30916.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__30916.nil_val], true),s__30917);
} else
{return s__30917;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30918 = this;
return this__30918.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30919 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30920 = this;
return (new cljs.core.PersistentHashMap(meta,this__30920.cnt,this__30920.root,this__30920.has_nil_QMARK_,this__30920.nil_val,this__30920.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30921 = this;
return this__30921.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30922 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__30922.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__30923 = this;
if((k == null))
{if(this__30923.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__30923.meta,(this__30923.cnt - 1),this__30923.root,false,null,null));
} else
{return coll;
}
} else
{if((this__30923.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__30924 = this__30923.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__30924 === this__30923.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__30923.meta,(this__30923.cnt - 1),new_root__30924,this__30923.has_nil_QMARK_,this__30923.nil_val,null));
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
var len__30926 = ks.length;
var i__30927 = 0;
var out__30928 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__30927 < len__30926))
{{
var G__30929 = (i__30927 + 1);
var G__30930 = cljs.core.assoc_BANG_.call(null,out__30928,(ks[i__30927]),(vs[i__30927]));
i__30927 = G__30929;
out__30928 = G__30930;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__30928);
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
var this__30931 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__30932 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__30933 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__30934 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__30935 = this;
if((k == null))
{if(this__30935.has_nil_QMARK_)
{return this__30935.nil_val;
} else
{return null;
}
} else
{if((this__30935.root == null))
{return null;
} else
{return this__30935.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__30936 = this;
if((k == null))
{if(this__30936.has_nil_QMARK_)
{return this__30936.nil_val;
} else
{return not_found;
}
} else
{if((this__30936.root == null))
{return not_found;
} else
{return this__30936.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30937 = this;
if(this__30937.edit)
{return this__30937.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__30938 = this;
var tcoll__30939 = this;
if(this__30938.edit)
{if((function (){var G__30940__30941 = o;
if(G__30940__30941)
{if((function (){var or__3824__auto____30942 = (G__30940__30941.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____30942)
{return or__3824__auto____30942;
} else
{return G__30940__30941.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__30940__30941.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__30940__30941);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__30940__30941);
}
})())
{return tcoll__30939.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__30943 = cljs.core.seq.call(null,o);
var tcoll__30944 = tcoll__30939;
while(true){
var temp__3971__auto____30945 = cljs.core.first.call(null,es__30943);
if(cljs.core.truth_(temp__3971__auto____30945))
{var e__30946 = temp__3971__auto____30945;
{
var G__30957 = cljs.core.next.call(null,es__30943);
var G__30958 = tcoll__30944.assoc_BANG_(cljs.core.key.call(null,e__30946),cljs.core.val.call(null,e__30946));
es__30943 = G__30957;
tcoll__30944 = G__30958;
continue;
}
} else
{return tcoll__30944;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__30947 = this;
var tcoll__30948 = this;
if(this__30947.edit)
{if((k == null))
{if((this__30947.nil_val === v))
{} else
{this__30947.nil_val = v;
}
if(this__30947.has_nil_QMARK_)
{} else
{this__30947.count = (this__30947.count + 1);
this__30947.has_nil_QMARK_ = true;
}
return tcoll__30948;
} else
{var added_leaf_QMARK___30949 = (new cljs.core.Box(false));
var node__30950 = (((this__30947.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__30947.root).inode_assoc_BANG_(this__30947.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___30949);
if((node__30950 === this__30947.root))
{} else
{this__30947.root = node__30950;
}
if(added_leaf_QMARK___30949.val)
{this__30947.count = (this__30947.count + 1);
} else
{}
return tcoll__30948;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__30951 = this;
var tcoll__30952 = this;
if(this__30951.edit)
{if((k == null))
{if(this__30951.has_nil_QMARK_)
{this__30951.has_nil_QMARK_ = false;
this__30951.nil_val = null;
this__30951.count = (this__30951.count - 1);
return tcoll__30952;
} else
{return tcoll__30952;
}
} else
{if((this__30951.root == null))
{return tcoll__30952;
} else
{var removed_leaf_QMARK___30953 = (new cljs.core.Box(false));
var node__30954 = this__30951.root.inode_without_BANG_(this__30951.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___30953);
if((node__30954 === this__30951.root))
{} else
{this__30951.root = node__30954;
}
if(cljs.core.truth_((removed_leaf_QMARK___30953[0])))
{this__30951.count = (this__30951.count - 1);
} else
{}
return tcoll__30952;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__30955 = this;
var tcoll__30956 = this;
if(this__30955.edit)
{this__30955.edit = null;
return (new cljs.core.PersistentHashMap(null,this__30955.count,this__30955.root,this__30955.has_nil_QMARK_,this__30955.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__30961 = node;
var stack__30962 = stack;
while(true){
if(!((t__30961 == null)))
{{
var G__30963 = ((ascending_QMARK_)?t__30961.left:t__30961.right);
var G__30964 = cljs.core.conj.call(null,stack__30962,t__30961);
t__30961 = G__30963;
stack__30962 = G__30964;
continue;
}
} else
{return stack__30962;
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
var this__30965 = this;
var h__2203__auto____30966 = this__30965.__hash;
if(!((h__2203__auto____30966 == null)))
{return h__2203__auto____30966;
} else
{var h__2203__auto____30967 = cljs.core.hash_coll.call(null,coll);
this__30965.__hash = h__2203__auto____30967;
return h__2203__auto____30967;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__30968 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__30969 = this;
var this__30970 = this;
return cljs.core.pr_str.call(null,this__30970);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__30971 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__30972 = this;
if((this__30972.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__30972.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__30973 = this;
return cljs.core.peek.call(null,this__30973.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__30974 = this;
var t__30975 = cljs.core.first.call(null,this__30974.stack);
var next_stack__30976 = cljs.core.tree_map_seq_push.call(null,((this__30974.ascending_QMARK_)?t__30975.right:t__30975.left),cljs.core.next.call(null,this__30974.stack),this__30974.ascending_QMARK_);
if(!((next_stack__30976 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__30976,this__30974.ascending_QMARK_,(this__30974.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__30977 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__30978 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__30978.stack,this__30978.ascending_QMARK_,this__30978.cnt,this__30978.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__30979 = this;
return this__30979.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__30980 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__30980.meta);
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
{if((function (){var and__3822__auto____30982 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3822__auto____30982)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____30982;
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
{if((function (){var and__3822__auto____30984 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3822__auto____30984)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____30984;
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
var init__30988 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__30988))
{return cljs.core.deref.call(null,init__30988);
} else
{var init__30989 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__30988):init__30988);
if(cljs.core.reduced_QMARK_.call(null,init__30989))
{return cljs.core.deref.call(null,init__30989);
} else
{var init__30990 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__30989):init__30989);
if(cljs.core.reduced_QMARK_.call(null,init__30990))
{return cljs.core.deref.call(null,init__30990);
} else
{return init__30990;
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
var this__30993 = this;
var h__2203__auto____30994 = this__30993.__hash;
if(!((h__2203__auto____30994 == null)))
{return h__2203__auto____30994;
} else
{var h__2203__auto____30995 = cljs.core.hash_coll.call(null,coll);
this__30993.__hash = h__2203__auto____30995;
return h__2203__auto____30995;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__30996 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__30997 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__30998 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__30998.key,this__30998.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__31046 = null;
var G__31046__2 = (function (this_sym30999,k){
var this__31001 = this;
var this_sym30999__31002 = this;
var node__31003 = this_sym30999__31002;
return node__31003.cljs$core$ILookup$_lookup$arity$2(node__31003,k);
});
var G__31046__3 = (function (this_sym31000,k,not_found){
var this__31001 = this;
var this_sym31000__31004 = this;
var node__31005 = this_sym31000__31004;
return node__31005.cljs$core$ILookup$_lookup$arity$3(node__31005,k,not_found);
});
G__31046 = function(this_sym31000,k,not_found){
switch(arguments.length){
case 2:
return G__31046__2.call(this,this_sym31000,k);
case 3:
return G__31046__3.call(this,this_sym31000,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31046;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym30991,args30992){
var this__31006 = this;
return this_sym30991.call.apply(this_sym30991,[this_sym30991].concat(args30992.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__31007 = this;
return cljs.core.PersistentVector.fromArray([this__31007.key,this__31007.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__31008 = this;
return this__31008.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__31009 = this;
return this__31009.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__31010 = this;
var node__31011 = this;
return ins.balance_right(node__31011);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__31012 = this;
var node__31013 = this;
return (new cljs.core.RedNode(this__31012.key,this__31012.val,this__31012.left,this__31012.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__31014 = this;
var node__31015 = this;
return cljs.core.balance_right_del.call(null,this__31014.key,this__31014.val,this__31014.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__31016 = this;
var node__31017 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__31018 = this;
var node__31019 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__31019,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__31020 = this;
var node__31021 = this;
return cljs.core.balance_left_del.call(null,this__31020.key,this__31020.val,del,this__31020.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__31022 = this;
var node__31023 = this;
return ins.balance_left(node__31023);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__31024 = this;
var node__31025 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__31025,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__31047 = null;
var G__31047__0 = (function (){
var this__31026 = this;
var this__31028 = this;
return cljs.core.pr_str.call(null,this__31028);
});
G__31047 = function(){
switch(arguments.length){
case 0:
return G__31047__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31047;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__31029 = this;
var node__31030 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__31030,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__31031 = this;
var node__31032 = this;
return node__31032;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__31033 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__31034 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__31035 = this;
return cljs.core.list.call(null,this__31035.key,this__31035.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__31036 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__31037 = this;
return this__31037.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__31038 = this;
return cljs.core.PersistentVector.fromArray([this__31038.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__31039 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__31039.key,this__31039.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31040 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__31041 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__31041.key,this__31041.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__31042 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__31043 = this;
if((n === 0))
{return this__31043.key;
} else
{if((n === 1))
{return this__31043.val;
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
var this__31044 = this;
if((n === 0))
{return this__31044.key;
} else
{if((n === 1))
{return this__31044.val;
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
var this__31045 = this;
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
var this__31050 = this;
var h__2203__auto____31051 = this__31050.__hash;
if(!((h__2203__auto____31051 == null)))
{return h__2203__auto____31051;
} else
{var h__2203__auto____31052 = cljs.core.hash_coll.call(null,coll);
this__31050.__hash = h__2203__auto____31052;
return h__2203__auto____31052;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__31053 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__31054 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__31055 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__31055.key,this__31055.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__31103 = null;
var G__31103__2 = (function (this_sym31056,k){
var this__31058 = this;
var this_sym31056__31059 = this;
var node__31060 = this_sym31056__31059;
return node__31060.cljs$core$ILookup$_lookup$arity$2(node__31060,k);
});
var G__31103__3 = (function (this_sym31057,k,not_found){
var this__31058 = this;
var this_sym31057__31061 = this;
var node__31062 = this_sym31057__31061;
return node__31062.cljs$core$ILookup$_lookup$arity$3(node__31062,k,not_found);
});
G__31103 = function(this_sym31057,k,not_found){
switch(arguments.length){
case 2:
return G__31103__2.call(this,this_sym31057,k);
case 3:
return G__31103__3.call(this,this_sym31057,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31103;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym31048,args31049){
var this__31063 = this;
return this_sym31048.call.apply(this_sym31048,[this_sym31048].concat(args31049.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__31064 = this;
return cljs.core.PersistentVector.fromArray([this__31064.key,this__31064.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__31065 = this;
return this__31065.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__31066 = this;
return this__31066.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__31067 = this;
var node__31068 = this;
return (new cljs.core.RedNode(this__31067.key,this__31067.val,this__31067.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__31069 = this;
var node__31070 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__31071 = this;
var node__31072 = this;
return (new cljs.core.RedNode(this__31071.key,this__31071.val,this__31071.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__31073 = this;
var node__31074 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__31075 = this;
var node__31076 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__31076,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__31077 = this;
var node__31078 = this;
return (new cljs.core.RedNode(this__31077.key,this__31077.val,del,this__31077.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__31079 = this;
var node__31080 = this;
return (new cljs.core.RedNode(this__31079.key,this__31079.val,ins,this__31079.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__31081 = this;
var node__31082 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__31081.left))
{return (new cljs.core.RedNode(this__31081.key,this__31081.val,this__31081.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__31081.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__31081.right))
{return (new cljs.core.RedNode(this__31081.right.key,this__31081.right.val,(new cljs.core.BlackNode(this__31081.key,this__31081.val,this__31081.left,this__31081.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__31081.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__31082,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__31104 = null;
var G__31104__0 = (function (){
var this__31083 = this;
var this__31085 = this;
return cljs.core.pr_str.call(null,this__31085);
});
G__31104 = function(){
switch(arguments.length){
case 0:
return G__31104__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31104;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__31086 = this;
var node__31087 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__31086.right))
{return (new cljs.core.RedNode(this__31086.key,this__31086.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__31086.left,null)),this__31086.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__31086.left))
{return (new cljs.core.RedNode(this__31086.left.key,this__31086.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__31086.left.left,null)),(new cljs.core.BlackNode(this__31086.key,this__31086.val,this__31086.left.right,this__31086.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__31087,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__31088 = this;
var node__31089 = this;
return (new cljs.core.BlackNode(this__31088.key,this__31088.val,this__31088.left,this__31088.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__31090 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__31091 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__31092 = this;
return cljs.core.list.call(null,this__31092.key,this__31092.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__31093 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__31094 = this;
return this__31094.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__31095 = this;
return cljs.core.PersistentVector.fromArray([this__31095.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__31096 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__31096.key,this__31096.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31097 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__31098 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__31098.key,this__31098.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__31099 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__31100 = this;
if((n === 0))
{return this__31100.key;
} else
{if((n === 1))
{return this__31100.val;
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
var this__31101 = this;
if((n === 0))
{return this__31101.key;
} else
{if((n === 1))
{return this__31101.val;
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
var this__31102 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__31108 = comp.call(null,k,tree.key);
if((c__31108 === 0))
{(found[0] = tree);
return null;
} else
{if((c__31108 < 0))
{var ins__31109 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__31109 == null)))
{return tree.add_left(ins__31109);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__31110 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__31110 == null)))
{return tree.add_right(ins__31110);
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
{var app__31113 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__31113))
{return (new cljs.core.RedNode(app__31113.key,app__31113.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__31113.left,null)),(new cljs.core.RedNode(right.key,right.val,app__31113.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__31113,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__31114 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__31114))
{return (new cljs.core.RedNode(app__31114.key,app__31114.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__31114.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__31114.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__31114,right.right,null)));
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
{var c__31120 = comp.call(null,k,tree.key);
if((c__31120 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__31120 < 0))
{var del__31121 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3824__auto____31122 = !((del__31121 == null));
if(or__3824__auto____31122)
{return or__3824__auto____31122;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__31121,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__31121,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__31123 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3824__auto____31124 = !((del__31123 == null));
if(or__3824__auto____31124)
{return or__3824__auto____31124;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__31123);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__31123,null));
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
var tk__31127 = tree.key;
var c__31128 = comp.call(null,k,tk__31127);
if((c__31128 === 0))
{return tree.replace(tk__31127,v,tree.left,tree.right);
} else
{if((c__31128 < 0))
{return tree.replace(tk__31127,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__31127,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
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
var this__31131 = this;
var h__2203__auto____31132 = this__31131.__hash;
if(!((h__2203__auto____31132 == null)))
{return h__2203__auto____31132;
} else
{var h__2203__auto____31133 = cljs.core.hash_imap.call(null,coll);
this__31131.__hash = h__2203__auto____31133;
return h__2203__auto____31133;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__31134 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__31135 = this;
var n__31136 = coll.entry_at(k);
if(!((n__31136 == null)))
{return n__31136.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__31137 = this;
var found__31138 = [null];
var t__31139 = cljs.core.tree_map_add.call(null,this__31137.comp,this__31137.tree,k,v,found__31138);
if((t__31139 == null))
{var found_node__31140 = cljs.core.nth.call(null,found__31138,0);
if(cljs.core._EQ_.call(null,v,found_node__31140.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__31137.comp,cljs.core.tree_map_replace.call(null,this__31137.comp,this__31137.tree,k,v),this__31137.cnt,this__31137.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__31137.comp,t__31139.blacken(),(this__31137.cnt + 1),this__31137.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__31141 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__31175 = null;
var G__31175__2 = (function (this_sym31142,k){
var this__31144 = this;
var this_sym31142__31145 = this;
var coll__31146 = this_sym31142__31145;
return coll__31146.cljs$core$ILookup$_lookup$arity$2(coll__31146,k);
});
var G__31175__3 = (function (this_sym31143,k,not_found){
var this__31144 = this;
var this_sym31143__31147 = this;
var coll__31148 = this_sym31143__31147;
return coll__31148.cljs$core$ILookup$_lookup$arity$3(coll__31148,k,not_found);
});
G__31175 = function(this_sym31143,k,not_found){
switch(arguments.length){
case 2:
return G__31175__2.call(this,this_sym31143,k);
case 3:
return G__31175__3.call(this,this_sym31143,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31175;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym31129,args31130){
var this__31149 = this;
return this_sym31129.call.apply(this_sym31129,[this_sym31129].concat(args31130.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__31150 = this;
if(!((this__31150.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__31150.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__31151 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__31152 = this;
if((this__31152.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__31152.tree,false,this__31152.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__31153 = this;
var this__31154 = this;
return cljs.core.pr_str.call(null,this__31154);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__31155 = this;
var coll__31156 = this;
var t__31157 = this__31155.tree;
while(true){
if(!((t__31157 == null)))
{var c__31158 = this__31155.comp.call(null,k,t__31157.key);
if((c__31158 === 0))
{return t__31157;
} else
{if((c__31158 < 0))
{{
var G__31176 = t__31157.left;
t__31157 = G__31176;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__31177 = t__31157.right;
t__31157 = G__31177;
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
var this__31159 = this;
if((this__31159.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__31159.tree,ascending_QMARK_,this__31159.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__31160 = this;
if((this__31160.cnt > 0))
{var stack__31161 = null;
var t__31162 = this__31160.tree;
while(true){
if(!((t__31162 == null)))
{var c__31163 = this__31160.comp.call(null,k,t__31162.key);
if((c__31163 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__31161,t__31162),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__31163 < 0))
{{
var G__31178 = cljs.core.conj.call(null,stack__31161,t__31162);
var G__31179 = t__31162.left;
stack__31161 = G__31178;
t__31162 = G__31179;
continue;
}
} else
{{
var G__31180 = stack__31161;
var G__31181 = t__31162.right;
stack__31161 = G__31180;
t__31162 = G__31181;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__31163 > 0))
{{
var G__31182 = cljs.core.conj.call(null,stack__31161,t__31162);
var G__31183 = t__31162.right;
stack__31161 = G__31182;
t__31162 = G__31183;
continue;
}
} else
{{
var G__31184 = stack__31161;
var G__31185 = t__31162.left;
stack__31161 = G__31184;
t__31162 = G__31185;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__31161 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__31161,ascending_QMARK_,-1,null));
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
var this__31164 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__31165 = this;
return this__31165.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__31166 = this;
if((this__31166.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__31166.tree,true,this__31166.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__31167 = this;
return this__31167.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31168 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__31169 = this;
return (new cljs.core.PersistentTreeMap(this__31169.comp,this__31169.tree,this__31169.cnt,meta,this__31169.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__31170 = this;
return this__31170.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__31171 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__31171.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__31172 = this;
var found__31173 = [null];
var t__31174 = cljs.core.tree_map_remove.call(null,this__31172.comp,this__31172.tree,k,found__31173);
if((t__31174 == null))
{if((cljs.core.nth.call(null,found__31173,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__31172.comp,null,0,this__31172.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__31172.comp,t__31174.blacken(),(this__31172.cnt - 1),this__31172.meta,null));
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
var in__31188 = cljs.core.seq.call(null,keyvals);
var out__31189 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__31188)
{{
var G__31190 = cljs.core.nnext.call(null,in__31188);
var G__31191 = cljs.core.assoc_BANG_.call(null,out__31189,cljs.core.first.call(null,in__31188),cljs.core.second.call(null,in__31188));
in__31188 = G__31190;
out__31189 = G__31191;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__31189);
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
hash_map.cljs$lang$applyTo = (function (arglist__31192){
var keyvals = cljs.core.seq(arglist__31192);;
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
array_map.cljs$lang$applyTo = (function (arglist__31193){
var keyvals = cljs.core.seq(arglist__31193);;
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
var ks__31197 = [];
var obj__31198 = {};
var kvs__31199 = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs__31199)
{ks__31197.push(cljs.core.first.call(null,kvs__31199));
(obj__31198[cljs.core.first.call(null,kvs__31199)] = cljs.core.second.call(null,kvs__31199));
{
var G__31200 = cljs.core.nnext.call(null,kvs__31199);
kvs__31199 = G__31200;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks__31197,obj__31198);
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
obj_map.cljs$lang$applyTo = (function (arglist__31201){
var keyvals = cljs.core.seq(arglist__31201);;
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
var in__31204 = cljs.core.seq.call(null,keyvals);
var out__31205 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__31204)
{{
var G__31206 = cljs.core.nnext.call(null,in__31204);
var G__31207 = cljs.core.assoc.call(null,out__31205,cljs.core.first.call(null,in__31204),cljs.core.second.call(null,in__31204));
in__31204 = G__31206;
out__31205 = G__31207;
continue;
}
} else
{return out__31205;
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
sorted_map.cljs$lang$applyTo = (function (arglist__31208){
var keyvals = cljs.core.seq(arglist__31208);;
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
var in__31211 = cljs.core.seq.call(null,keyvals);
var out__31212 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__31211)
{{
var G__31213 = cljs.core.nnext.call(null,in__31211);
var G__31214 = cljs.core.assoc.call(null,out__31212,cljs.core.first.call(null,in__31211),cljs.core.second.call(null,in__31211));
in__31211 = G__31213;
out__31212 = G__31214;
continue;
}
} else
{return out__31212;
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
sorted_map_by.cljs$lang$applyTo = (function (arglist__31215){
var comparator = cljs.core.first(arglist__31215);
var keyvals = cljs.core.rest(arglist__31215);
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
{return cljs.core.reduce.call(null,(function (p1__31216_SHARP_,p2__31217_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3824__auto____31219 = p1__31216_SHARP_;
if(cljs.core.truth_(or__3824__auto____31219))
{return or__3824__auto____31219;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__31217_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__31220){
var maps = cljs.core.seq(arglist__31220);;
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
{var merge_entry__31228 = (function (m,e){
var k__31226 = cljs.core.first.call(null,e);
var v__31227 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__31226))
{return cljs.core.assoc.call(null,m,k__31226,f.call(null,cljs.core._lookup.call(null,m,k__31226,null),v__31227));
} else
{return cljs.core.assoc.call(null,m,k__31226,v__31227);
}
});
var merge2__31230 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__31228,(function (){var or__3824__auto____31229 = m1;
if(cljs.core.truth_(or__3824__auto____31229))
{return or__3824__auto____31229;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__31230,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__31231){
var f = cljs.core.first(arglist__31231);
var maps = cljs.core.rest(arglist__31231);
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
var ret__31236 = cljs.core.ObjMap.EMPTY;
var keys__31237 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__31237)
{var key__31238 = cljs.core.first.call(null,keys__31237);
var entry__31239 = cljs.core._lookup.call(null,map,key__31238,"\uFDD0'cljs.core/not-found");
{
var G__31240 = ((cljs.core.not_EQ_.call(null,entry__31239,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret__31236,key__31238,entry__31239):ret__31236);
var G__31241 = cljs.core.next.call(null,keys__31237);
ret__31236 = G__31240;
keys__31237 = G__31241;
continue;
}
} else
{return ret__31236;
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
var this__31245 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__31245.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__31246 = this;
var h__2203__auto____31247 = this__31246.__hash;
if(!((h__2203__auto____31247 == null)))
{return h__2203__auto____31247;
} else
{var h__2203__auto____31248 = cljs.core.hash_iset.call(null,coll);
this__31246.__hash = h__2203__auto____31248;
return h__2203__auto____31248;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__31249 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__31250 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__31250.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__31271 = null;
var G__31271__2 = (function (this_sym31251,k){
var this__31253 = this;
var this_sym31251__31254 = this;
var coll__31255 = this_sym31251__31254;
return coll__31255.cljs$core$ILookup$_lookup$arity$2(coll__31255,k);
});
var G__31271__3 = (function (this_sym31252,k,not_found){
var this__31253 = this;
var this_sym31252__31256 = this;
var coll__31257 = this_sym31252__31256;
return coll__31257.cljs$core$ILookup$_lookup$arity$3(coll__31257,k,not_found);
});
G__31271 = function(this_sym31252,k,not_found){
switch(arguments.length){
case 2:
return G__31271__2.call(this,this_sym31252,k);
case 3:
return G__31271__3.call(this,this_sym31252,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31271;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym31243,args31244){
var this__31258 = this;
return this_sym31243.call.apply(this_sym31243,[this_sym31243].concat(args31244.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__31259 = this;
return (new cljs.core.PersistentHashSet(this__31259.meta,cljs.core.assoc.call(null,this__31259.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__31260 = this;
var this__31261 = this;
return cljs.core.pr_str.call(null,this__31261);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__31262 = this;
return cljs.core.keys.call(null,this__31262.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__31263 = this;
return (new cljs.core.PersistentHashSet(this__31263.meta,cljs.core.dissoc.call(null,this__31263.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__31264 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31265 = this;
var and__3822__auto____31266 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____31266)
{var and__3822__auto____31267 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____31267)
{return cljs.core.every_QMARK_.call(null,(function (p1__31242_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__31242_SHARP_);
}),other);
} else
{return and__3822__auto____31267;
}
} else
{return and__3822__auto____31266;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__31268 = this;
return (new cljs.core.PersistentHashSet(meta,this__31268.hash_map,this__31268.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__31269 = this;
return this__31269.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__31270 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__31270.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__31272 = cljs.core.count.call(null,items);
var i__31273 = 0;
var out__31274 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__31273 < len__31272))
{{
var G__31275 = (i__31273 + 1);
var G__31276 = cljs.core.conj_BANG_.call(null,out__31274,(items[i__31273]));
i__31273 = G__31275;
out__31274 = G__31276;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__31274);
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
var G__31294 = null;
var G__31294__2 = (function (this_sym31280,k){
var this__31282 = this;
var this_sym31280__31283 = this;
var tcoll__31284 = this_sym31280__31283;
if((cljs.core._lookup.call(null,this__31282.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__31294__3 = (function (this_sym31281,k,not_found){
var this__31282 = this;
var this_sym31281__31285 = this;
var tcoll__31286 = this_sym31281__31285;
if((cljs.core._lookup.call(null,this__31282.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__31294 = function(this_sym31281,k,not_found){
switch(arguments.length){
case 2:
return G__31294__2.call(this,this_sym31281,k);
case 3:
return G__31294__3.call(this,this_sym31281,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31294;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym31278,args31279){
var this__31287 = this;
return this_sym31278.call.apply(this_sym31278,[this_sym31278].concat(args31279.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__31288 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__31289 = this;
if((cljs.core._lookup.call(null,this__31289.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__31290 = this;
return cljs.core.count.call(null,this__31290.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__31291 = this;
this__31291.transient_map = cljs.core.dissoc_BANG_.call(null,this__31291.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__31292 = this;
this__31292.transient_map = cljs.core.assoc_BANG_.call(null,this__31292.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__31293 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__31293.transient_map),null));
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
var this__31297 = this;
var h__2203__auto____31298 = this__31297.__hash;
if(!((h__2203__auto____31298 == null)))
{return h__2203__auto____31298;
} else
{var h__2203__auto____31299 = cljs.core.hash_iset.call(null,coll);
this__31297.__hash = h__2203__auto____31299;
return h__2203__auto____31299;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__31300 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__31301 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__31301.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__31327 = null;
var G__31327__2 = (function (this_sym31302,k){
var this__31304 = this;
var this_sym31302__31305 = this;
var coll__31306 = this_sym31302__31305;
return coll__31306.cljs$core$ILookup$_lookup$arity$2(coll__31306,k);
});
var G__31327__3 = (function (this_sym31303,k,not_found){
var this__31304 = this;
var this_sym31303__31307 = this;
var coll__31308 = this_sym31303__31307;
return coll__31308.cljs$core$ILookup$_lookup$arity$3(coll__31308,k,not_found);
});
G__31327 = function(this_sym31303,k,not_found){
switch(arguments.length){
case 2:
return G__31327__2.call(this,this_sym31303,k);
case 3:
return G__31327__3.call(this,this_sym31303,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__31327;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym31295,args31296){
var this__31309 = this;
return this_sym31295.call.apply(this_sym31295,[this_sym31295].concat(args31296.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__31310 = this;
return (new cljs.core.PersistentTreeSet(this__31310.meta,cljs.core.assoc.call(null,this__31310.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__31311 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__31311.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__31312 = this;
var this__31313 = this;
return cljs.core.pr_str.call(null,this__31313);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__31314 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__31314.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__31315 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__31315.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__31316 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__31317 = this;
return cljs.core._comparator.call(null,this__31317.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__31318 = this;
return cljs.core.keys.call(null,this__31318.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__31319 = this;
return (new cljs.core.PersistentTreeSet(this__31319.meta,cljs.core.dissoc.call(null,this__31319.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__31320 = this;
return cljs.core.count.call(null,this__31320.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__31321 = this;
var and__3822__auto____31322 = cljs.core.set_QMARK_.call(null,other);
if(and__3822__auto____31322)
{var and__3822__auto____31323 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3822__auto____31323)
{return cljs.core.every_QMARK_.call(null,(function (p1__31277_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__31277_SHARP_);
}),other);
} else
{return and__3822__auto____31323;
}
} else
{return and__3822__auto____31322;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__31324 = this;
return (new cljs.core.PersistentTreeSet(meta,this__31324.tree_map,this__31324.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__31325 = this;
return this__31325.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__31326 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__31326.meta);
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
var G__31332__delegate = function (keys){
var in__31330 = cljs.core.seq.call(null,keys);
var out__31331 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__31330))
{{
var G__31333 = cljs.core.next.call(null,in__31330);
var G__31334 = cljs.core.conj_BANG_.call(null,out__31331,cljs.core.first.call(null,in__31330));
in__31330 = G__31333;
out__31331 = G__31334;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__31331);
}
break;
}
};
var G__31332 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__31332__delegate.call(this, keys);
};
G__31332.cljs$lang$maxFixedArity = 0;
G__31332.cljs$lang$applyTo = (function (arglist__31335){
var keys = cljs.core.seq(arglist__31335);;
return G__31332__delegate(keys);
});
G__31332.cljs$lang$arity$variadic = G__31332__delegate;
return G__31332;
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
sorted_set.cljs$lang$applyTo = (function (arglist__31336){
var keys = cljs.core.seq(arglist__31336);;
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
sorted_set_by.cljs$lang$applyTo = (function (arglist__31338){
var comparator = cljs.core.first(arglist__31338);
var keys = cljs.core.rest(arglist__31338);
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
{var n__31344 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__3971__auto____31345 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__3971__auto____31345))
{var e__31346 = temp__3971__auto____31345;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__31346));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__31344,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__31337_SHARP_){
var temp__3971__auto____31347 = cljs.core.find.call(null,smap,p1__31337_SHARP_);
if(cljs.core.truth_(temp__3971__auto____31347))
{var e__31348 = temp__3971__auto____31347;
return cljs.core.second.call(null,e__31348);
} else
{return p1__31337_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__31378 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__31371,seen){
while(true){
var vec__31372__31373 = p__31371;
var f__31374 = cljs.core.nth.call(null,vec__31372__31373,0,null);
var xs__31375 = vec__31372__31373;
var temp__3974__auto____31376 = cljs.core.seq.call(null,xs__31375);
if(temp__3974__auto____31376)
{var s__31377 = temp__3974__auto____31376;
if(cljs.core.contains_QMARK_.call(null,seen,f__31374))
{{
var G__31379 = cljs.core.rest.call(null,s__31377);
var G__31380 = seen;
p__31371 = G__31379;
seen = G__31380;
continue;
}
} else
{return cljs.core.cons.call(null,f__31374,step.call(null,cljs.core.rest.call(null,s__31377),cljs.core.conj.call(null,seen,f__31374)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__31378.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret__31383 = cljs.core.PersistentVector.EMPTY;
var s__31384 = s;
while(true){
if(cljs.core.next.call(null,s__31384))
{{
var G__31385 = cljs.core.conj.call(null,ret__31383,cljs.core.first.call(null,s__31384));
var G__31386 = cljs.core.next.call(null,s__31384);
ret__31383 = G__31385;
s__31384 = G__31386;
continue;
}
} else
{return cljs.core.seq.call(null,ret__31383);
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
{if((function (){var or__3824__auto____31389 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____31389)
{return or__3824__auto____31389;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__31390 = x.lastIndexOf("/");
if((i__31390 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__31390 + 1));
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
if((function (){var or__3824__auto____31393 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3824__auto____31393)
{return or__3824__auto____31393;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__31394 = x.lastIndexOf("/");
if((i__31394 > -1))
{return cljs.core.subs.call(null,x,2,i__31394);
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
var map__31401 = cljs.core.ObjMap.EMPTY;
var ks__31402 = cljs.core.seq.call(null,keys);
var vs__31403 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3822__auto____31404 = ks__31402;
if(and__3822__auto____31404)
{return vs__31403;
} else
{return and__3822__auto____31404;
}
})())
{{
var G__31405 = cljs.core.assoc.call(null,map__31401,cljs.core.first.call(null,ks__31402),cljs.core.first.call(null,vs__31403));
var G__31406 = cljs.core.next.call(null,ks__31402);
var G__31407 = cljs.core.next.call(null,vs__31403);
map__31401 = G__31405;
ks__31402 = G__31406;
vs__31403 = G__31407;
continue;
}
} else
{return map__31401;
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
var G__31410__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__31395_SHARP_,p2__31396_SHARP_){
return max_key.call(null,k,p1__31395_SHARP_,p2__31396_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__31410 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31410__delegate.call(this, k, x, y, more);
};
G__31410.cljs$lang$maxFixedArity = 3;
G__31410.cljs$lang$applyTo = (function (arglist__31411){
var k = cljs.core.first(arglist__31411);
var x = cljs.core.first(cljs.core.next(arglist__31411));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31411)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31411)));
return G__31410__delegate(k, x, y, more);
});
G__31410.cljs$lang$arity$variadic = G__31410__delegate;
return G__31410;
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
var G__31412__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__31408_SHARP_,p2__31409_SHARP_){
return min_key.call(null,k,p1__31408_SHARP_,p2__31409_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__31412 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31412__delegate.call(this, k, x, y, more);
};
G__31412.cljs$lang$maxFixedArity = 3;
G__31412.cljs$lang$applyTo = (function (arglist__31413){
var k = cljs.core.first(arglist__31413);
var x = cljs.core.first(cljs.core.next(arglist__31413));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31413)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31413)));
return G__31412__delegate(k, x, y, more);
});
G__31412.cljs$lang$arity$variadic = G__31412__delegate;
return G__31412;
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
var temp__3974__auto____31416 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____31416)
{var s__31417 = temp__3974__auto____31416;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__31417),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__31417)));
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
var temp__3974__auto____31420 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____31420)
{var s__31421 = temp__3974__auto____31420;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__31421))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__31421),take_while.call(null,pred,cljs.core.rest.call(null,s__31421)));
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
var comp__31423 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__31423.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
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
var include__31435 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____31436 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__3974__auto____31436))
{var vec__31437__31438 = temp__3974__auto____31436;
var e__31439 = cljs.core.nth.call(null,vec__31437__31438,0,null);
var s__31440 = vec__31437__31438;
if(cljs.core.truth_(include__31435.call(null,e__31439)))
{return s__31440;
} else
{return cljs.core.next.call(null,s__31440);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__31435,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____31441 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____31441))
{var vec__31442__31443 = temp__3974__auto____31441;
var e__31444 = cljs.core.nth.call(null,vec__31442__31443,0,null);
var s__31445 = vec__31442__31443;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__31444))?s__31445:cljs.core.next.call(null,s__31445)));
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
var include__31457 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____31458 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__3974__auto____31458))
{var vec__31459__31460 = temp__3974__auto____31458;
var e__31461 = cljs.core.nth.call(null,vec__31459__31460,0,null);
var s__31462 = vec__31459__31460;
if(cljs.core.truth_(include__31457.call(null,e__31461)))
{return s__31462;
} else
{return cljs.core.next.call(null,s__31462);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__31457,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____31463 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____31463))
{var vec__31464__31465 = temp__3974__auto____31463;
var e__31466 = cljs.core.nth.call(null,vec__31464__31465,0,null);
var s__31467 = vec__31464__31465;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__31466))?s__31467:cljs.core.next.call(null,s__31467)));
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
var this__31468 = this;
var h__2203__auto____31469 = this__31468.__hash;
if(!((h__2203__auto____31469 == null)))
{return h__2203__auto____31469;
} else
{var h__2203__auto____31470 = cljs.core.hash_coll.call(null,rng);
this__31468.__hash = h__2203__auto____31470;
return h__2203__auto____31470;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__31471 = this;
if((this__31471.step > 0))
{if(((this__31471.start + this__31471.step) < this__31471.end))
{return (new cljs.core.Range(this__31471.meta,(this__31471.start + this__31471.step),this__31471.end,this__31471.step,null));
} else
{return null;
}
} else
{if(((this__31471.start + this__31471.step) > this__31471.end))
{return (new cljs.core.Range(this__31471.meta,(this__31471.start + this__31471.step),this__31471.end,this__31471.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__31472 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__31473 = this;
var this__31474 = this;
return cljs.core.pr_str.call(null,this__31474);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__31475 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__31476 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__31477 = this;
if((this__31477.step > 0))
{if((this__31477.start < this__31477.end))
{return rng;
} else
{return null;
}
} else
{if((this__31477.start > this__31477.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__31478 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__31478.end - this__31478.start) / this__31478.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__31479 = this;
return this__31479.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__31480 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__31480.meta,(this__31480.start + this__31480.step),this__31480.end,this__31480.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__31481 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__31482 = this;
return (new cljs.core.Range(meta,this__31482.start,this__31482.end,this__31482.step,this__31482.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__31483 = this;
return this__31483.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__31484 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__31484.start + (n * this__31484.step));
} else
{if((function (){var and__3822__auto____31485 = (this__31484.start > this__31484.end);
if(and__3822__auto____31485)
{return (this__31484.step === 0);
} else
{return and__3822__auto____31485;
}
})())
{return this__31484.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__31486 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__31486.start + (n * this__31486.step));
} else
{if((function (){var and__3822__auto____31487 = (this__31486.start > this__31486.end);
if(and__3822__auto____31487)
{return (this__31486.step === 0);
} else
{return and__3822__auto____31487;
}
})())
{return this__31486.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__31488 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__31488.meta);
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
var temp__3974__auto____31491 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____31491)
{var s__31492 = temp__3974__auto____31491;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__31492),take_nth.call(null,n,cljs.core.drop.call(null,n,s__31492)));
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
var temp__3974__auto____31499 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____31499)
{var s__31500 = temp__3974__auto____31499;
var fst__31501 = cljs.core.first.call(null,s__31500);
var fv__31502 = f.call(null,fst__31501);
var run__31503 = cljs.core.cons.call(null,fst__31501,cljs.core.take_while.call(null,(function (p1__31493_SHARP_){
return cljs.core._EQ_.call(null,fv__31502,f.call(null,p1__31493_SHARP_));
}),cljs.core.next.call(null,s__31500)));
return cljs.core.cons.call(null,run__31503,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__31503),s__31500))));
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
var temp__3971__auto____31518 = cljs.core.seq.call(null,coll);
if(temp__3971__auto____31518)
{var s__31519 = temp__3971__auto____31518;
return reductions.call(null,f,cljs.core.first.call(null,s__31519),cljs.core.rest.call(null,s__31519));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____31520 = cljs.core.seq.call(null,coll);
if(temp__3974__auto____31520)
{var s__31521 = temp__3974__auto____31520;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__31521)),cljs.core.rest.call(null,s__31521));
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
var G__31524 = null;
var G__31524__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__31524__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__31524__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__31524__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__31524__4 = (function() { 
var G__31525__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__31525 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31525__delegate.call(this, x, y, z, args);
};
G__31525.cljs$lang$maxFixedArity = 3;
G__31525.cljs$lang$applyTo = (function (arglist__31526){
var x = cljs.core.first(arglist__31526);
var y = cljs.core.first(cljs.core.next(arglist__31526));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31526)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31526)));
return G__31525__delegate(x, y, z, args);
});
G__31525.cljs$lang$arity$variadic = G__31525__delegate;
return G__31525;
})()
;
G__31524 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__31524__0.call(this);
case 1:
return G__31524__1.call(this,x);
case 2:
return G__31524__2.call(this,x,y);
case 3:
return G__31524__3.call(this,x,y,z);
default:
return G__31524__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__31524.cljs$lang$maxFixedArity = 3;
G__31524.cljs$lang$applyTo = G__31524__4.cljs$lang$applyTo;
return G__31524;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__31527 = null;
var G__31527__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__31527__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__31527__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__31527__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__31527__4 = (function() { 
var G__31528__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__31528 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31528__delegate.call(this, x, y, z, args);
};
G__31528.cljs$lang$maxFixedArity = 3;
G__31528.cljs$lang$applyTo = (function (arglist__31529){
var x = cljs.core.first(arglist__31529);
var y = cljs.core.first(cljs.core.next(arglist__31529));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31529)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31529)));
return G__31528__delegate(x, y, z, args);
});
G__31528.cljs$lang$arity$variadic = G__31528__delegate;
return G__31528;
})()
;
G__31527 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__31527__0.call(this);
case 1:
return G__31527__1.call(this,x);
case 2:
return G__31527__2.call(this,x,y);
case 3:
return G__31527__3.call(this,x,y,z);
default:
return G__31527__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__31527.cljs$lang$maxFixedArity = 3;
G__31527.cljs$lang$applyTo = G__31527__4.cljs$lang$applyTo;
return G__31527;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__31530 = null;
var G__31530__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__31530__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__31530__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__31530__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__31530__4 = (function() { 
var G__31531__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__31531 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31531__delegate.call(this, x, y, z, args);
};
G__31531.cljs$lang$maxFixedArity = 3;
G__31531.cljs$lang$applyTo = (function (arglist__31532){
var x = cljs.core.first(arglist__31532);
var y = cljs.core.first(cljs.core.next(arglist__31532));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31532)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31532)));
return G__31531__delegate(x, y, z, args);
});
G__31531.cljs$lang$arity$variadic = G__31531__delegate;
return G__31531;
})()
;
G__31530 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__31530__0.call(this);
case 1:
return G__31530__1.call(this,x);
case 2:
return G__31530__2.call(this,x,y);
case 3:
return G__31530__3.call(this,x,y,z);
default:
return G__31530__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__31530.cljs$lang$maxFixedArity = 3;
G__31530.cljs$lang$applyTo = G__31530__4.cljs$lang$applyTo;
return G__31530;
})()
});
var juxt__4 = (function() { 
var G__31533__delegate = function (f,g,h,fs){
var fs__31523 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__31534 = null;
var G__31534__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__31504_SHARP_,p2__31505_SHARP_){
return cljs.core.conj.call(null,p1__31504_SHARP_,p2__31505_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__31523);
});
var G__31534__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__31506_SHARP_,p2__31507_SHARP_){
return cljs.core.conj.call(null,p1__31506_SHARP_,p2__31507_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__31523);
});
var G__31534__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__31508_SHARP_,p2__31509_SHARP_){
return cljs.core.conj.call(null,p1__31508_SHARP_,p2__31509_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__31523);
});
var G__31534__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__31510_SHARP_,p2__31511_SHARP_){
return cljs.core.conj.call(null,p1__31510_SHARP_,p2__31511_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__31523);
});
var G__31534__4 = (function() { 
var G__31535__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__31512_SHARP_,p2__31513_SHARP_){
return cljs.core.conj.call(null,p1__31512_SHARP_,cljs.core.apply.call(null,p2__31513_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__31523);
};
var G__31535 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31535__delegate.call(this, x, y, z, args);
};
G__31535.cljs$lang$maxFixedArity = 3;
G__31535.cljs$lang$applyTo = (function (arglist__31536){
var x = cljs.core.first(arglist__31536);
var y = cljs.core.first(cljs.core.next(arglist__31536));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31536)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31536)));
return G__31535__delegate(x, y, z, args);
});
G__31535.cljs$lang$arity$variadic = G__31535__delegate;
return G__31535;
})()
;
G__31534 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__31534__0.call(this);
case 1:
return G__31534__1.call(this,x);
case 2:
return G__31534__2.call(this,x,y);
case 3:
return G__31534__3.call(this,x,y,z);
default:
return G__31534__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__31534.cljs$lang$maxFixedArity = 3;
G__31534.cljs$lang$applyTo = G__31534__4.cljs$lang$applyTo;
return G__31534;
})()
};
var G__31533 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__31533__delegate.call(this, f, g, h, fs);
};
G__31533.cljs$lang$maxFixedArity = 3;
G__31533.cljs$lang$applyTo = (function (arglist__31537){
var f = cljs.core.first(arglist__31537);
var g = cljs.core.first(cljs.core.next(arglist__31537));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31537)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__31537)));
return G__31533__delegate(f, g, h, fs);
});
G__31533.cljs$lang$arity$variadic = G__31533__delegate;
return G__31533;
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
var G__31540 = cljs.core.next.call(null,coll);
coll = G__31540;
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
if(cljs.core.truth_((function (){var and__3822__auto____31539 = cljs.core.seq.call(null,coll);
if(and__3822__auto____31539)
{return (n > 0);
} else
{return and__3822__auto____31539;
}
})()))
{{
var G__31541 = (n - 1);
var G__31542 = cljs.core.next.call(null,coll);
n = G__31541;
coll = G__31542;
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
var matches__31544 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__31544),s))
{if((cljs.core.count.call(null,matches__31544) === 1))
{return cljs.core.first.call(null,matches__31544);
} else
{return cljs.core.vec.call(null,matches__31544);
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
var matches__31546 = re.exec(s);
if((matches__31546 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__31546) === 1))
{return cljs.core.first.call(null,matches__31546);
} else
{return cljs.core.vec.call(null,matches__31546);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__31551 = cljs.core.re_find.call(null,re,s);
var match_idx__31552 = s.search(re);
var match_str__31553 = ((cljs.core.coll_QMARK_.call(null,match_data__31551))?cljs.core.first.call(null,match_data__31551):match_data__31551);
var post_match__31554 = cljs.core.subs.call(null,s,(match_idx__31552 + cljs.core.count.call(null,match_str__31553)));
if(cljs.core.truth_(match_data__31551))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__31551,re_seq.call(null,re,post_match__31554));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__31561__31562 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___31563 = cljs.core.nth.call(null,vec__31561__31562,0,null);
var flags__31564 = cljs.core.nth.call(null,vec__31561__31562,1,null);
var pattern__31565 = cljs.core.nth.call(null,vec__31561__31562,2,null);
return (new RegExp(pattern__31565,flags__31564));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__31555_SHARP_){
return print_one.call(null,p1__31555_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__31569__31570 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__31569__31570)
{var o__31571 = cljs.core.first.call(null,G__31569__31570);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o__31571,writer,opts);
{
var G__31572 = cljs.core.next.call(null,G__31569__31570);
G__31569__31570 = G__31572;
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
var G__31576__31577 = cljs.core.seq.call(null,ss);
while(true){
if(G__31576__31577)
{var s__31578 = cljs.core.first.call(null,G__31576__31577);
cljs.core._write.call(null,writer,s__31578);
{
var G__31579 = cljs.core.next.call(null,G__31576__31577);
G__31576__31577 = G__31579;
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
write_all.cljs$lang$applyTo = (function (arglist__31580){
var writer = cljs.core.first(arglist__31580);
var ss = cljs.core.rest(arglist__31580);
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
var this__31581 = this;
return this__31581.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var this__31582 = this;
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3822__auto____31592 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____31592))
{var and__3822__auto____31596 = (function (){var G__31593__31594 = obj;
if(G__31593__31594)
{if((function (){var or__3824__auto____31595 = (G__31593__31594.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____31595)
{return or__3824__auto____31595;
} else
{return G__31593__31594.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__31593__31594.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__31593__31594);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__31593__31594);
}
})();
if(cljs.core.truth_(and__3822__auto____31596))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____31596;
}
} else
{return and__3822__auto____31592;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3822__auto____31597 = !((obj == null));
if(and__3822__auto____31597)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____31597;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__31598__31599 = obj;
if(G__31598__31599)
{if((function (){var or__3824__auto____31600 = (G__31598__31599.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____31600)
{return or__3824__auto____31600;
} else
{return G__31598__31599.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__31598__31599.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__31598__31599);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__31598__31599);
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
{if(cljs.core.truth_((function (){var and__3822__auto____31613 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____31613))
{var and__3822__auto____31617 = (function (){var G__31614__31615 = obj;
if(G__31614__31615)
{if((function (){var or__3824__auto____31616 = (G__31614__31615.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____31616)
{return or__3824__auto____31616;
} else
{return G__31614__31615.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__31614__31615.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__31614__31615);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__31614__31615);
}
})();
if(cljs.core.truth_(and__3822__auto____31617))
{return cljs.core.meta.call(null,obj);
} else
{return and__3822__auto____31617;
}
} else
{return and__3822__auto____31613;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3822__auto____31618 = !((obj == null));
if(and__3822__auto____31618)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____31618;
}
})())
{return obj.cljs$lang$ctorPrWriter(writer,opts);
} else
{if((function (){var G__31619__31620 = obj;
if(G__31619__31620)
{if((function (){var or__3824__auto____31621 = (G__31619__31620.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3824__auto____31621)
{return or__3824__auto____31621;
} else
{return G__31619__31620.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__31619__31620.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__31619__31620);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__31619__31620);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__31622__31623 = obj;
if(G__31622__31623)
{if((function (){var or__3824__auto____31624 = (G__31622__31623.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____31624)
{return or__3824__auto____31624;
} else
{return G__31622__31623.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__31622__31623.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__31622__31623);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__31622__31623);
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
var G__31628__31629 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__31628__31629)
{var obj__31630 = cljs.core.first.call(null,G__31628__31629);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj__31630,writer,opts);
{
var G__31631 = cljs.core.next.call(null,G__31628__31629);
G__31628__31629 = G__31631;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb__31634 = (new goog.string.StringBuffer());
var writer__31635 = (new cljs.core.StringBufferWriter(sb__31634));
cljs.core.pr_seq_writer.call(null,objs,writer__31635,opts);
cljs.core._flush.call(null,writer__31635);
return sb__31634;
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
{var sb__31637 = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb__31637.append("\n");
return [cljs.core.str(sb__31637)].join('');
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
pr_str.cljs$lang$applyTo = (function (arglist__31638){
var objs = cljs.core.seq(arglist__31638);;
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
prn_str.cljs$lang$applyTo = (function (arglist__31639){
var objs = cljs.core.seq(arglist__31639);;
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
pr.cljs$lang$applyTo = (function (arglist__31640){
var objs = cljs.core.seq(arglist__31640);;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__31641){
var objs = cljs.core.seq(arglist__31641);;
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
print_str.cljs$lang$applyTo = (function (arglist__31642){
var objs = cljs.core.seq(arglist__31642);;
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
println.cljs$lang$applyTo = (function (arglist__31643){
var objs = cljs.core.seq(arglist__31643);;
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
println_str.cljs$lang$applyTo = (function (arglist__31644){
var objs = cljs.core.seq(arglist__31644);;
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
prn.cljs$lang$applyTo = (function (arglist__31645){
var objs = cljs.core.seq(arglist__31645);;
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
printf.cljs$lang$applyTo = (function (arglist__31646){
var fmt = cljs.core.first(arglist__31646);
var args = cljs.core.rest(arglist__31646);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__31647 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__31647,"{",", ","}",opts,coll);
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
var pr_pair__31648 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__31648,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__31649 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__31649,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____31650 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____31650))
{var nspc__31651 = temp__3974__auto____31650;
return [cljs.core.str(nspc__31651),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__3974__auto____31652 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____31652))
{var nspc__31653 = temp__3974__auto____31652;
return [cljs.core.str(nspc__31653),cljs.core.str("/")].join('');
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
var pr_pair__31654 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__31654,"{",", ","}",opts,coll);
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
var normalize__31656 = (function (n,len){
var ns__31655 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__31655) < len))
{{
var G__31658 = [cljs.core.str("0"),cljs.core.str(ns__31655)].join('');
ns__31655 = G__31658;
continue;
}
} else
{return ns__31655;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__31656.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__31656.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__31656.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__31656.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__31656.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__31656.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
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
var pr_pair__31657 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__31657,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__31659 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__31659,"{",", ","}",opts,coll);
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
var pr_pair__31660 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__31660,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair__31661 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__31661,"{",", ","}",opts,coll);
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
var temp__3974__auto____31662 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____31662))
{var nspc__31663 = temp__3974__auto____31662;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__31663)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{var temp__3974__auto____31664 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__3974__auto____31664))
{var nspc__31665 = temp__3974__auto____31664;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc__31665)].join(''),"/");
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
var pr_pair__31666 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__31666,"{",", ","}",opts,coll);
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
var normalize__31668 = (function (n,len){
var ns__31667 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__31667) < len))
{{
var G__31670 = [cljs.core.str("0"),cljs.core.str(ns__31667)].join('');
ns__31667 = G__31670;
continue;
}
} else
{return ns__31667;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize__31668.call(null,(d.getUTCMonth() + 1),2),"-",normalize__31668.call(null,d.getUTCDate(),2),"T",normalize__31668.call(null,d.getUTCHours(),2),":",normalize__31668.call(null,d.getUTCMinutes(),2),":",normalize__31668.call(null,d.getUTCSeconds(),2),".",normalize__31668.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
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
var pr_pair__31669 = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair__31669,"{",", ","}",opts,coll);
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
var this__31671 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__31672 = this;
var G__31673__31674 = cljs.core.seq.call(null,this__31672.watches);
while(true){
if(G__31673__31674)
{var vec__31675__31676 = cljs.core.first.call(null,G__31673__31674);
var key__31677 = cljs.core.nth.call(null,vec__31675__31676,0,null);
var f__31678 = cljs.core.nth.call(null,vec__31675__31676,1,null);
f__31678.call(null,key__31677,this$,oldval,newval);
{
var G__31686 = cljs.core.next.call(null,G__31673__31674);
G__31673__31674 = G__31686;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__31679 = this;
return this$.watches = cljs.core.assoc.call(null,this__31679.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__31680 = this;
return this$.watches = cljs.core.dissoc.call(null,this__31680.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var this__31681 = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,this__31681.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__31682 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__31682.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__31683 = this;
return this__31683.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__31684 = this;
return this__31684.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__31685 = this;
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
var G__31698__delegate = function (x,p__31687){
var map__31693__31694 = p__31687;
var map__31693__31695 = ((cljs.core.seq_QMARK_.call(null,map__31693__31694))?cljs.core.apply.call(null,cljs.core.hash_map,map__31693__31694):map__31693__31694);
var validator__31696 = cljs.core._lookup.call(null,map__31693__31695,"\uFDD0'validator",null);
var meta__31697 = cljs.core._lookup.call(null,map__31693__31695,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__31697,validator__31696,null));
};
var G__31698 = function (x,var_args){
var p__31687 = null;
if (goog.isDef(var_args)) {
  p__31687 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__31698__delegate.call(this, x, p__31687);
};
G__31698.cljs$lang$maxFixedArity = 1;
G__31698.cljs$lang$applyTo = (function (arglist__31699){
var x = cljs.core.first(arglist__31699);
var p__31687 = cljs.core.rest(arglist__31699);
return G__31698__delegate(x, p__31687);
});
G__31698.cljs$lang$arity$variadic = G__31698__delegate;
return G__31698;
})()
;
atom = function(x,var_args){
var p__31687 = var_args;
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
var temp__3974__auto____31703 = a.validator;
if(cljs.core.truth_(temp__3974__auto____31703))
{var validate__31704 = temp__3974__auto____31703;
if(cljs.core.truth_(validate__31704.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6683))))].join('')));
}
} else
{}
var old_value__31705 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__31705,new_value);
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
var G__31706__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__31706 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__31706__delegate.call(this, a, f, x, y, z, more);
};
G__31706.cljs$lang$maxFixedArity = 5;
G__31706.cljs$lang$applyTo = (function (arglist__31707){
var a = cljs.core.first(arglist__31707);
var f = cljs.core.first(cljs.core.next(arglist__31707));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__31707)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__31707))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__31707)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__31707)))));
return G__31706__delegate(a, f, x, y, z, more);
});
G__31706.cljs$lang$arity$variadic = G__31706__delegate;
return G__31706;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__31708){
var iref = cljs.core.first(arglist__31708);
var f = cljs.core.first(cljs.core.next(arglist__31708));
var args = cljs.core.rest(cljs.core.next(arglist__31708));
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
var this__31709 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__31709.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__31710 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__31710.state,(function (p__31711){
var map__31712__31713 = p__31711;
var map__31712__31714 = ((cljs.core.seq_QMARK_.call(null,map__31712__31713))?cljs.core.apply.call(null,cljs.core.hash_map,map__31712__31713):map__31712__31713);
var curr_state__31715 = map__31712__31714;
var done__31716 = cljs.core._lookup.call(null,map__31712__31714,"\uFDD0'done",null);
if(cljs.core.truth_(done__31716))
{return curr_state__31715;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__31710.f.call(null)});
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
var map__31737__31738 = options;
var map__31737__31739 = ((cljs.core.seq_QMARK_.call(null,map__31737__31738))?cljs.core.apply.call(null,cljs.core.hash_map,map__31737__31738):map__31737__31738);
var keywordize_keys__31740 = cljs.core._lookup.call(null,map__31737__31739,"\uFDD0'keywordize-keys",null);
var keyfn__31741 = (cljs.core.truth_(keywordize_keys__31740)?cljs.core.keyword:cljs.core.str);
var f__31756 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2484__auto____31755 = (function iter__31749(s__31750){
return (new cljs.core.LazySeq(null,false,(function (){
var s__31750__31753 = s__31750;
while(true){
if(cljs.core.seq.call(null,s__31750__31753))
{var k__31754 = cljs.core.first.call(null,s__31750__31753);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__31741.call(null,k__31754),thisfn.call(null,(x[k__31754]))], true),iter__31749.call(null,cljs.core.rest.call(null,s__31750__31753)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2484__auto____31755.call(null,cljs.core.js_keys.call(null,x));
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
return f__31756.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__31757){
var x = cljs.core.first(arglist__31757);
var options = cljs.core.rest(arglist__31757);
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
var mem__31762 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__31766__delegate = function (args){
var temp__3971__auto____31763 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__31762),args,null);
if(cljs.core.truth_(temp__3971__auto____31763))
{var v__31764 = temp__3971__auto____31763;
return v__31764;
} else
{var ret__31765 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__31762,cljs.core.assoc,args,ret__31765);
return ret__31765;
}
};
var G__31766 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__31766__delegate.call(this, args);
};
G__31766.cljs$lang$maxFixedArity = 0;
G__31766.cljs$lang$applyTo = (function (arglist__31767){
var args = cljs.core.seq(arglist__31767);;
return G__31766__delegate(args);
});
G__31766.cljs$lang$arity$variadic = G__31766__delegate;
return G__31766;
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
var ret__31769 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__31769))
{{
var G__31770 = ret__31769;
f = G__31770;
continue;
}
} else
{return ret__31769;
}
break;
}
});
var trampoline__2 = (function() { 
var G__31771__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__31771 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__31771__delegate.call(this, f, args);
};
G__31771.cljs$lang$maxFixedArity = 1;
G__31771.cljs$lang$applyTo = (function (arglist__31772){
var f = cljs.core.first(arglist__31772);
var args = cljs.core.rest(arglist__31772);
return G__31771__delegate(f, args);
});
G__31771.cljs$lang$arity$variadic = G__31771__delegate;
return G__31771;
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
var k__31774 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__31774,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__31774,cljs.core.PersistentVector.EMPTY),x));
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
var or__3824__auto____31783 = cljs.core._EQ_.call(null,child,parent);
if(or__3824__auto____31783)
{return or__3824__auto____31783;
} else
{var or__3824__auto____31784 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____31784)
{return or__3824__auto____31784;
} else
{var and__3822__auto____31785 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3822__auto____31785)
{var and__3822__auto____31786 = cljs.core.vector_QMARK_.call(null,child);
if(and__3822__auto____31786)
{var and__3822__auto____31787 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3822__auto____31787)
{var ret__31788 = true;
var i__31789 = 0;
while(true){
if((function (){var or__3824__auto____31790 = cljs.core.not.call(null,ret__31788);
if(or__3824__auto____31790)
{return or__3824__auto____31790;
} else
{return (i__31789 === cljs.core.count.call(null,parent));
}
})())
{return ret__31788;
} else
{{
var G__31791 = isa_QMARK_.call(null,h,child.call(null,i__31789),parent.call(null,i__31789));
var G__31792 = (i__31789 + 1);
ret__31788 = G__31791;
i__31789 = G__31792;
continue;
}
}
break;
}
} else
{return and__3822__auto____31787;
}
} else
{return and__3822__auto____31786;
}
} else
{return and__3822__auto____31785;
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
var tp__31801 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__31802 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__31803 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__31804 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3824__auto____31805 = ((cljs.core.contains_QMARK_.call(null,tp__31801.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__31803.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__31803.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__31801,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf__31804.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__31802,parent,ta__31803),"\uFDD0'descendants":tf__31804.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__31803,tag,td__31802)});
})());
if(cljs.core.truth_(or__3824__auto____31805))
{return or__3824__auto____31805;
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
var parentMap__31810 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__31811 = (cljs.core.truth_(parentMap__31810.call(null,tag))?cljs.core.disj.call(null,parentMap__31810.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__31812 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__31811))?cljs.core.assoc.call(null,parentMap__31810,tag,childsParents__31811):cljs.core.dissoc.call(null,parentMap__31810,tag));
var deriv_seq__31813 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__31793_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__31793_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__31793_SHARP_),cljs.core.second.call(null,p1__31793_SHARP_)));
}),cljs.core.seq.call(null,newParents__31812)));
if(cljs.core.contains_QMARK_.call(null,parentMap__31810.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__31794_SHARP_,p2__31795_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__31794_SHARP_,p2__31795_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__31813));
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
var xprefs__31821 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3824__auto____31823 = (cljs.core.truth_((function (){var and__3822__auto____31822 = xprefs__31821;
if(cljs.core.truth_(and__3822__auto____31822))
{return xprefs__31821.call(null,y);
} else
{return and__3822__auto____31822;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____31823))
{return or__3824__auto____31823;
} else
{var or__3824__auto____31825 = (function (){var ps__31824 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__31824) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__31824),prefer_table)))
{} else
{}
{
var G__31828 = cljs.core.rest.call(null,ps__31824);
ps__31824 = G__31828;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____31825))
{return or__3824__auto____31825;
} else
{var or__3824__auto____31827 = (function (){var ps__31826 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__31826) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__31826),y,prefer_table)))
{} else
{}
{
var G__31829 = cljs.core.rest.call(null,ps__31826);
ps__31826 = G__31829;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____31827))
{return or__3824__auto____31827;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____31831 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____31831))
{return or__3824__auto____31831;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__31849 = cljs.core.reduce.call(null,(function (be,p__31841){
var vec__31842__31843 = p__31841;
var k__31844 = cljs.core.nth.call(null,vec__31842__31843,0,null);
var ___31845 = cljs.core.nth.call(null,vec__31842__31843,1,null);
var e__31846 = vec__31842__31843;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__31844))
{var be2__31848 = (cljs.core.truth_((function (){var or__3824__auto____31847 = (be == null);
if(or__3824__auto____31847)
{return or__3824__auto____31847;
} else
{return cljs.core.dominates.call(null,k__31844,cljs.core.first.call(null,be),prefer_table);
}
})())?e__31846:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__31848),k__31844,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__31844),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__31848)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__31848;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__31849))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__31849));
return cljs.core.second.call(null,best_entry__31849);
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
if((function (){var and__3822__auto____31854 = mf;
if(and__3822__auto____31854)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____31854;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2387__auto____31855 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____31856 = (cljs.core._reset[goog.typeOf(x__2387__auto____31855)]);
if(or__3824__auto____31856)
{return or__3824__auto____31856;
} else
{var or__3824__auto____31857 = (cljs.core._reset["_"]);
if(or__3824__auto____31857)
{return or__3824__auto____31857;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____31862 = mf;
if(and__3822__auto____31862)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____31862;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2387__auto____31863 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____31864 = (cljs.core._add_method[goog.typeOf(x__2387__auto____31863)]);
if(or__3824__auto____31864)
{return or__3824__auto____31864;
} else
{var or__3824__auto____31865 = (cljs.core._add_method["_"]);
if(or__3824__auto____31865)
{return or__3824__auto____31865;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____31870 = mf;
if(and__3822__auto____31870)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____31870;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2387__auto____31871 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____31872 = (cljs.core._remove_method[goog.typeOf(x__2387__auto____31871)]);
if(or__3824__auto____31872)
{return or__3824__auto____31872;
} else
{var or__3824__auto____31873 = (cljs.core._remove_method["_"]);
if(or__3824__auto____31873)
{return or__3824__auto____31873;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____31878 = mf;
if(and__3822__auto____31878)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____31878;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2387__auto____31879 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____31880 = (cljs.core._prefer_method[goog.typeOf(x__2387__auto____31879)]);
if(or__3824__auto____31880)
{return or__3824__auto____31880;
} else
{var or__3824__auto____31881 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____31881)
{return or__3824__auto____31881;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____31886 = mf;
if(and__3822__auto____31886)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____31886;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2387__auto____31887 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____31888 = (cljs.core._get_method[goog.typeOf(x__2387__auto____31887)]);
if(or__3824__auto____31888)
{return or__3824__auto____31888;
} else
{var or__3824__auto____31889 = (cljs.core._get_method["_"]);
if(or__3824__auto____31889)
{return or__3824__auto____31889;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____31894 = mf;
if(and__3822__auto____31894)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____31894;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2387__auto____31895 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____31896 = (cljs.core._methods[goog.typeOf(x__2387__auto____31895)]);
if(or__3824__auto____31896)
{return or__3824__auto____31896;
} else
{var or__3824__auto____31897 = (cljs.core._methods["_"]);
if(or__3824__auto____31897)
{return or__3824__auto____31897;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____31902 = mf;
if(and__3822__auto____31902)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____31902;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2387__auto____31903 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____31904 = (cljs.core._prefers[goog.typeOf(x__2387__auto____31903)]);
if(or__3824__auto____31904)
{return or__3824__auto____31904;
} else
{var or__3824__auto____31905 = (cljs.core._prefers["_"]);
if(or__3824__auto____31905)
{return or__3824__auto____31905;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____31910 = mf;
if(and__3822__auto____31910)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____31910;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2387__auto____31911 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____31912 = (cljs.core._dispatch[goog.typeOf(x__2387__auto____31911)]);
if(or__3824__auto____31912)
{return or__3824__auto____31912;
} else
{var or__3824__auto____31913 = (cljs.core._dispatch["_"]);
if(or__3824__auto____31913)
{return or__3824__auto____31913;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__31916 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__31917 = cljs.core._get_method.call(null,mf,dispatch_val__31916);
if(cljs.core.truth_(target_fn__31917))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__31916)].join('')));
}
return cljs.core.apply.call(null,target_fn__31917,args);
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
var this__31918 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__31919 = this;
cljs.core.swap_BANG_.call(null,this__31919.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__31919.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__31919.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__31919.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__31920 = this;
cljs.core.swap_BANG_.call(null,this__31920.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__31920.method_cache,this__31920.method_table,this__31920.cached_hierarchy,this__31920.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__31921 = this;
cljs.core.swap_BANG_.call(null,this__31921.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__31921.method_cache,this__31921.method_table,this__31921.cached_hierarchy,this__31921.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__31922 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__31922.cached_hierarchy),cljs.core.deref.call(null,this__31922.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__31922.method_cache,this__31922.method_table,this__31922.cached_hierarchy,this__31922.hierarchy);
}
var temp__3971__auto____31923 = cljs.core.deref.call(null,this__31922.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____31923))
{var target_fn__31924 = temp__3971__auto____31923;
return target_fn__31924;
} else
{var temp__3971__auto____31925 = cljs.core.find_and_cache_best_method.call(null,this__31922.name,dispatch_val,this__31922.hierarchy,this__31922.method_table,this__31922.prefer_table,this__31922.method_cache,this__31922.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____31925))
{var target_fn__31926 = temp__3971__auto____31925;
return target_fn__31926;
} else
{return cljs.core.deref.call(null,this__31922.method_table).call(null,this__31922.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__31927 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__31927.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__31927.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__31927.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__31927.method_cache,this__31927.method_table,this__31927.cached_hierarchy,this__31927.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__31928 = this;
return cljs.core.deref.call(null,this__31928.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__31929 = this;
return cljs.core.deref.call(null,this__31929.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__31930 = this;
return cljs.core.do_dispatch.call(null,mf,this__31930.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__31932__delegate = function (_,args){
var self__31931 = this;
return cljs.core._dispatch.call(null,self__31931,args);
};
var G__31932 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__31932__delegate.call(this, _, args);
};
G__31932.cljs$lang$maxFixedArity = 1;
G__31932.cljs$lang$applyTo = (function (arglist__31933){
var _ = cljs.core.first(arglist__31933);
var args = cljs.core.rest(arglist__31933);
return G__31932__delegate(_, args);
});
G__31932.cljs$lang$arity$variadic = G__31932__delegate;
return G__31932;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__31934 = this;
return cljs.core._dispatch.call(null,self__31934,args);
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
var this__31935 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_31937,writer,_){
var this__31936 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(this__31936.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_31939,_){
var this__31938 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__31938.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__31940 = this;
var and__3822__auto____31941 = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3822__auto____31941)
{return (this__31940.uuid === other.uuid);
} else
{return and__3822__auto____31941;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__31942 = this;
var this__31943 = this;
return cljs.core.pr_str.call(null,this__31943);
});
cljs.core.UUID;
