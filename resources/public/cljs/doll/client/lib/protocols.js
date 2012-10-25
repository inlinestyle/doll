goog.provide('doll.client.lib.protocols');
goog.require('cljs.core');
doll.client.lib.protocols.State = {};
doll.client.lib.protocols.set_field = (function set_field(self,field,value){
if((function (){var and__3822__auto____556099 = self;
if(and__3822__auto____556099)
{return self.doll$client$lib$protocols$State$set_field$arity$3;
} else
{return and__3822__auto____556099;
}
})())
{return self.doll$client$lib$protocols$State$set_field$arity$3(self,field,value);
} else
{var x__2387__auto____556100 = (((self == null))?null:self);
return (function (){var or__3824__auto____556101 = (doll.client.lib.protocols.set_field[goog.typeOf(x__2387__auto____556100)]);
if(or__3824__auto____556101)
{return or__3824__auto____556101;
} else
{var or__3824__auto____556102 = (doll.client.lib.protocols.set_field["_"]);
if(or__3824__auto____556102)
{return or__3824__auto____556102;
} else
{throw cljs.core.missing_protocol.call(null,"State.set-field",self);
}
}
})().call(null,self,field,value);
}
});
doll.client.lib.protocols.set_fields = (function set_fields(self,fvs){
if((function (){var and__3822__auto____556107 = self;
if(and__3822__auto____556107)
{return self.doll$client$lib$protocols$State$set_fields$arity$2;
} else
{return and__3822__auto____556107;
}
})())
{return self.doll$client$lib$protocols$State$set_fields$arity$2(self,fvs);
} else
{var x__2387__auto____556108 = (((self == null))?null:self);
return (function (){var or__3824__auto____556109 = (doll.client.lib.protocols.set_fields[goog.typeOf(x__2387__auto____556108)]);
if(or__3824__auto____556109)
{return or__3824__auto____556109;
} else
{var or__3824__auto____556110 = (doll.client.lib.protocols.set_fields["_"]);
if(or__3824__auto____556110)
{return or__3824__auto____556110;
} else
{throw cljs.core.missing_protocol.call(null,"State.set-fields",self);
}
}
})().call(null,self,fvs);
}
});
doll.client.lib.protocols.get_field = (function get_field(self,field){
if((function (){var and__3822__auto____556115 = self;
if(and__3822__auto____556115)
{return self.doll$client$lib$protocols$State$get_field$arity$2;
} else
{return and__3822__auto____556115;
}
})())
{return self.doll$client$lib$protocols$State$get_field$arity$2(self,field);
} else
{var x__2387__auto____556116 = (((self == null))?null:self);
return (function (){var or__3824__auto____556117 = (doll.client.lib.protocols.get_field[goog.typeOf(x__2387__auto____556116)]);
if(or__3824__auto____556117)
{return or__3824__auto____556117;
} else
{var or__3824__auto____556118 = (doll.client.lib.protocols.get_field["_"]);
if(or__3824__auto____556118)
{return or__3824__auto____556118;
} else
{throw cljs.core.missing_protocol.call(null,"State.get-field",self);
}
}
})().call(null,self,field);
}
});
doll.client.lib.protocols.get_fields = (function get_fields(self,fields){
if((function (){var and__3822__auto____556123 = self;
if(and__3822__auto____556123)
{return self.doll$client$lib$protocols$State$get_fields$arity$2;
} else
{return and__3822__auto____556123;
}
})())
{return self.doll$client$lib$protocols$State$get_fields$arity$2(self,fields);
} else
{var x__2387__auto____556124 = (((self == null))?null:self);
return (function (){var or__3824__auto____556125 = (doll.client.lib.protocols.get_fields[goog.typeOf(x__2387__auto____556124)]);
if(or__3824__auto____556125)
{return or__3824__auto____556125;
} else
{var or__3824__auto____556126 = (doll.client.lib.protocols.get_fields["_"]);
if(or__3824__auto____556126)
{return or__3824__auto____556126;
} else
{throw cljs.core.missing_protocol.call(null,"State.get-fields",self);
}
}
})().call(null,self,fields);
}
});
doll.client.lib.protocols.update_field = (function update_field(self,field,function$){
if((function (){var and__3822__auto____556131 = self;
if(and__3822__auto____556131)
{return self.doll$client$lib$protocols$State$update_field$arity$3;
} else
{return and__3822__auto____556131;
}
})())
{return self.doll$client$lib$protocols$State$update_field$arity$3(self,field,function$);
} else
{var x__2387__auto____556132 = (((self == null))?null:self);
return (function (){var or__3824__auto____556133 = (doll.client.lib.protocols.update_field[goog.typeOf(x__2387__auto____556132)]);
if(or__3824__auto____556133)
{return or__3824__auto____556133;
} else
{var or__3824__auto____556134 = (doll.client.lib.protocols.update_field["_"]);
if(or__3824__auto____556134)
{return or__3824__auto____556134;
} else
{throw cljs.core.missing_protocol.call(null,"State.update-field",self);
}
}
})().call(null,self,field,function$);
}
});
doll.client.lib.protocols.Event = {};
doll.client.lib.protocols.on = (function on(self,watch_id,should_react_QMARK_,reaction){
if((function (){var and__3822__auto____556139 = self;
if(and__3822__auto____556139)
{return self.doll$client$lib$protocols$Event$on$arity$4;
} else
{return and__3822__auto____556139;
}
})())
{return self.doll$client$lib$protocols$Event$on$arity$4(self,watch_id,should_react_QMARK_,reaction);
} else
{var x__2387__auto____556140 = (((self == null))?null:self);
return (function (){var or__3824__auto____556141 = (doll.client.lib.protocols.on[goog.typeOf(x__2387__auto____556140)]);
if(or__3824__auto____556141)
{return or__3824__auto____556141;
} else
{var or__3824__auto____556142 = (doll.client.lib.protocols.on["_"]);
if(or__3824__auto____556142)
{return or__3824__auto____556142;
} else
{throw cljs.core.missing_protocol.call(null,"Event.on",self);
}
}
})().call(null,self,watch_id,should_react_QMARK_,reaction);
}
});
doll.client.lib.protocols.off = (function off(self,watch_id){
if((function (){var and__3822__auto____556147 = self;
if(and__3822__auto____556147)
{return self.doll$client$lib$protocols$Event$off$arity$2;
} else
{return and__3822__auto____556147;
}
})())
{return self.doll$client$lib$protocols$Event$off$arity$2(self,watch_id);
} else
{var x__2387__auto____556148 = (((self == null))?null:self);
return (function (){var or__3824__auto____556149 = (doll.client.lib.protocols.off[goog.typeOf(x__2387__auto____556148)]);
if(or__3824__auto____556149)
{return or__3824__auto____556149;
} else
{var or__3824__auto____556150 = (doll.client.lib.protocols.off["_"]);
if(or__3824__auto____556150)
{return or__3824__auto____556150;
} else
{throw cljs.core.missing_protocol.call(null,"Event.off",self);
}
}
})().call(null,self,watch_id);
}
});
doll.client.lib.protocols.Shape = {};
doll.client.lib.protocols.draw = (function draw(self){
if((function (){var and__3822__auto____556155 = self;
if(and__3822__auto____556155)
{return self.doll$client$lib$protocols$Shape$draw$arity$1;
} else
{return and__3822__auto____556155;
}
})())
{return self.doll$client$lib$protocols$Shape$draw$arity$1(self);
} else
{var x__2387__auto____556156 = (((self == null))?null:self);
return (function (){var or__3824__auto____556157 = (doll.client.lib.protocols.draw[goog.typeOf(x__2387__auto____556156)]);
if(or__3824__auto____556157)
{return or__3824__auto____556157;
} else
{var or__3824__auto____556158 = (doll.client.lib.protocols.draw["_"]);
if(or__3824__auto____556158)
{return or__3824__auto____556158;
} else
{throw cljs.core.missing_protocol.call(null,"Shape.draw",self);
}
}
})().call(null,self);
}
});
