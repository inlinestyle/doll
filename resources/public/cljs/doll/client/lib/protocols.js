goog.provide('doll.client.lib.protocols');
goog.require('cljs.core');
doll.client.lib.protocols.State = {};
doll.client.lib.protocols.set_field = (function set_field(self,field,value){
if((function (){var and__3822__auto____44134 = self;
if(and__3822__auto____44134)
{return self.doll$client$lib$protocols$State$set_field$arity$3;
} else
{return and__3822__auto____44134;
}
})())
{return self.doll$client$lib$protocols$State$set_field$arity$3(self,field,value);
} else
{var x__2387__auto____44135 = (((self == null))?null:self);
return (function (){var or__3824__auto____44136 = (doll.client.lib.protocols.set_field[goog.typeOf(x__2387__auto____44135)]);
if(or__3824__auto____44136)
{return or__3824__auto____44136;
} else
{var or__3824__auto____44137 = (doll.client.lib.protocols.set_field["_"]);
if(or__3824__auto____44137)
{return or__3824__auto____44137;
} else
{throw cljs.core.missing_protocol.call(null,"State.set-field",self);
}
}
})().call(null,self,field,value);
}
});
doll.client.lib.protocols.set_fields = (function set_fields(self,fvs){
if((function (){var and__3822__auto____44142 = self;
if(and__3822__auto____44142)
{return self.doll$client$lib$protocols$State$set_fields$arity$2;
} else
{return and__3822__auto____44142;
}
})())
{return self.doll$client$lib$protocols$State$set_fields$arity$2(self,fvs);
} else
{var x__2387__auto____44143 = (((self == null))?null:self);
return (function (){var or__3824__auto____44144 = (doll.client.lib.protocols.set_fields[goog.typeOf(x__2387__auto____44143)]);
if(or__3824__auto____44144)
{return or__3824__auto____44144;
} else
{var or__3824__auto____44145 = (doll.client.lib.protocols.set_fields["_"]);
if(or__3824__auto____44145)
{return or__3824__auto____44145;
} else
{throw cljs.core.missing_protocol.call(null,"State.set-fields",self);
}
}
})().call(null,self,fvs);
}
});
doll.client.lib.protocols.get_field = (function get_field(self,field){
if((function (){var and__3822__auto____44150 = self;
if(and__3822__auto____44150)
{return self.doll$client$lib$protocols$State$get_field$arity$2;
} else
{return and__3822__auto____44150;
}
})())
{return self.doll$client$lib$protocols$State$get_field$arity$2(self,field);
} else
{var x__2387__auto____44151 = (((self == null))?null:self);
return (function (){var or__3824__auto____44152 = (doll.client.lib.protocols.get_field[goog.typeOf(x__2387__auto____44151)]);
if(or__3824__auto____44152)
{return or__3824__auto____44152;
} else
{var or__3824__auto____44153 = (doll.client.lib.protocols.get_field["_"]);
if(or__3824__auto____44153)
{return or__3824__auto____44153;
} else
{throw cljs.core.missing_protocol.call(null,"State.get-field",self);
}
}
})().call(null,self,field);
}
});
doll.client.lib.protocols.get_fields = (function get_fields(self,fields){
if((function (){var and__3822__auto____44158 = self;
if(and__3822__auto____44158)
{return self.doll$client$lib$protocols$State$get_fields$arity$2;
} else
{return and__3822__auto____44158;
}
})())
{return self.doll$client$lib$protocols$State$get_fields$arity$2(self,fields);
} else
{var x__2387__auto____44159 = (((self == null))?null:self);
return (function (){var or__3824__auto____44160 = (doll.client.lib.protocols.get_fields[goog.typeOf(x__2387__auto____44159)]);
if(or__3824__auto____44160)
{return or__3824__auto____44160;
} else
{var or__3824__auto____44161 = (doll.client.lib.protocols.get_fields["_"]);
if(or__3824__auto____44161)
{return or__3824__auto____44161;
} else
{throw cljs.core.missing_protocol.call(null,"State.get-fields",self);
}
}
})().call(null,self,fields);
}
});
doll.client.lib.protocols.update_field = (function update_field(self,field,function$){
if((function (){var and__3822__auto____44166 = self;
if(and__3822__auto____44166)
{return self.doll$client$lib$protocols$State$update_field$arity$3;
} else
{return and__3822__auto____44166;
}
})())
{return self.doll$client$lib$protocols$State$update_field$arity$3(self,field,function$);
} else
{var x__2387__auto____44167 = (((self == null))?null:self);
return (function (){var or__3824__auto____44168 = (doll.client.lib.protocols.update_field[goog.typeOf(x__2387__auto____44167)]);
if(or__3824__auto____44168)
{return or__3824__auto____44168;
} else
{var or__3824__auto____44169 = (doll.client.lib.protocols.update_field["_"]);
if(or__3824__auto____44169)
{return or__3824__auto____44169;
} else
{throw cljs.core.missing_protocol.call(null,"State.update-field",self);
}
}
})().call(null,self,field,function$);
}
});
doll.client.lib.protocols.Event = {};
doll.client.lib.protocols.on = (function on(self,watch_id,should_react_QMARK_,reaction){
if((function (){var and__3822__auto____44174 = self;
if(and__3822__auto____44174)
{return self.doll$client$lib$protocols$Event$on$arity$4;
} else
{return and__3822__auto____44174;
}
})())
{return self.doll$client$lib$protocols$Event$on$arity$4(self,watch_id,should_react_QMARK_,reaction);
} else
{var x__2387__auto____44175 = (((self == null))?null:self);
return (function (){var or__3824__auto____44176 = (doll.client.lib.protocols.on[goog.typeOf(x__2387__auto____44175)]);
if(or__3824__auto____44176)
{return or__3824__auto____44176;
} else
{var or__3824__auto____44177 = (doll.client.lib.protocols.on["_"]);
if(or__3824__auto____44177)
{return or__3824__auto____44177;
} else
{throw cljs.core.missing_protocol.call(null,"Event.on",self);
}
}
})().call(null,self,watch_id,should_react_QMARK_,reaction);
}
});
doll.client.lib.protocols.off = (function off(self,watch_id){
if((function (){var and__3822__auto____44182 = self;
if(and__3822__auto____44182)
{return self.doll$client$lib$protocols$Event$off$arity$2;
} else
{return and__3822__auto____44182;
}
})())
{return self.doll$client$lib$protocols$Event$off$arity$2(self,watch_id);
} else
{var x__2387__auto____44183 = (((self == null))?null:self);
return (function (){var or__3824__auto____44184 = (doll.client.lib.protocols.off[goog.typeOf(x__2387__auto____44183)]);
if(or__3824__auto____44184)
{return or__3824__auto____44184;
} else
{var or__3824__auto____44185 = (doll.client.lib.protocols.off["_"]);
if(or__3824__auto____44185)
{return or__3824__auto____44185;
} else
{throw cljs.core.missing_protocol.call(null,"Event.off",self);
}
}
})().call(null,self,watch_id);
}
});
doll.client.lib.protocols.Shape = {};
doll.client.lib.protocols.draw = (function draw(self){
if((function (){var and__3822__auto____44190 = self;
if(and__3822__auto____44190)
{return self.doll$client$lib$protocols$Shape$draw$arity$1;
} else
{return and__3822__auto____44190;
}
})())
{return self.doll$client$lib$protocols$Shape$draw$arity$1(self);
} else
{var x__2387__auto____44191 = (((self == null))?null:self);
return (function (){var or__3824__auto____44192 = (doll.client.lib.protocols.draw[goog.typeOf(x__2387__auto____44191)]);
if(or__3824__auto____44192)
{return or__3824__auto____44192;
} else
{var or__3824__auto____44193 = (doll.client.lib.protocols.draw["_"]);
if(or__3824__auto____44193)
{return or__3824__auto____44193;
} else
{throw cljs.core.missing_protocol.call(null,"Shape.draw",self);
}
}
})().call(null,self);
}
});
