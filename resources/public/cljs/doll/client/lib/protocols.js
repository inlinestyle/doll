goog.provide('doll.client.lib.protocols');
goog.require('cljs.core');
doll.client.lib.protocols.State = {};
doll.client.lib.protocols.set_field = (function set_field(self,field,value){
if((function (){var and__3822__auto____172998 = self;
if(and__3822__auto____172998)
{return self.doll$client$lib$protocols$State$set_field$arity$3;
} else
{return and__3822__auto____172998;
}
})())
{return self.doll$client$lib$protocols$State$set_field$arity$3(self,field,value);
} else
{var x__2387__auto____172999 = (((self == null))?null:self);
return (function (){var or__3824__auto____173000 = (doll.client.lib.protocols.set_field[goog.typeOf(x__2387__auto____172999)]);
if(or__3824__auto____173000)
{return or__3824__auto____173000;
} else
{var or__3824__auto____173001 = (doll.client.lib.protocols.set_field["_"]);
if(or__3824__auto____173001)
{return or__3824__auto____173001;
} else
{throw cljs.core.missing_protocol.call(null,"State.set-field",self);
}
}
})().call(null,self,field,value);
}
});
doll.client.lib.protocols.set_fields = (function set_fields(self,fvs){
if((function (){var and__3822__auto____173006 = self;
if(and__3822__auto____173006)
{return self.doll$client$lib$protocols$State$set_fields$arity$2;
} else
{return and__3822__auto____173006;
}
})())
{return self.doll$client$lib$protocols$State$set_fields$arity$2(self,fvs);
} else
{var x__2387__auto____173007 = (((self == null))?null:self);
return (function (){var or__3824__auto____173008 = (doll.client.lib.protocols.set_fields[goog.typeOf(x__2387__auto____173007)]);
if(or__3824__auto____173008)
{return or__3824__auto____173008;
} else
{var or__3824__auto____173009 = (doll.client.lib.protocols.set_fields["_"]);
if(or__3824__auto____173009)
{return or__3824__auto____173009;
} else
{throw cljs.core.missing_protocol.call(null,"State.set-fields",self);
}
}
})().call(null,self,fvs);
}
});
doll.client.lib.protocols.get_field = (function get_field(self,field){
if((function (){var and__3822__auto____173014 = self;
if(and__3822__auto____173014)
{return self.doll$client$lib$protocols$State$get_field$arity$2;
} else
{return and__3822__auto____173014;
}
})())
{return self.doll$client$lib$protocols$State$get_field$arity$2(self,field);
} else
{var x__2387__auto____173015 = (((self == null))?null:self);
return (function (){var or__3824__auto____173016 = (doll.client.lib.protocols.get_field[goog.typeOf(x__2387__auto____173015)]);
if(or__3824__auto____173016)
{return or__3824__auto____173016;
} else
{var or__3824__auto____173017 = (doll.client.lib.protocols.get_field["_"]);
if(or__3824__auto____173017)
{return or__3824__auto____173017;
} else
{throw cljs.core.missing_protocol.call(null,"State.get-field",self);
}
}
})().call(null,self,field);
}
});
doll.client.lib.protocols.get_fields = (function get_fields(self,fields){
if((function (){var and__3822__auto____173022 = self;
if(and__3822__auto____173022)
{return self.doll$client$lib$protocols$State$get_fields$arity$2;
} else
{return and__3822__auto____173022;
}
})())
{return self.doll$client$lib$protocols$State$get_fields$arity$2(self,fields);
} else
{var x__2387__auto____173023 = (((self == null))?null:self);
return (function (){var or__3824__auto____173024 = (doll.client.lib.protocols.get_fields[goog.typeOf(x__2387__auto____173023)]);
if(or__3824__auto____173024)
{return or__3824__auto____173024;
} else
{var or__3824__auto____173025 = (doll.client.lib.protocols.get_fields["_"]);
if(or__3824__auto____173025)
{return or__3824__auto____173025;
} else
{throw cljs.core.missing_protocol.call(null,"State.get-fields",self);
}
}
})().call(null,self,fields);
}
});
doll.client.lib.protocols.update_field = (function update_field(self,field,function$){
if((function (){var and__3822__auto____173030 = self;
if(and__3822__auto____173030)
{return self.doll$client$lib$protocols$State$update_field$arity$3;
} else
{return and__3822__auto____173030;
}
})())
{return self.doll$client$lib$protocols$State$update_field$arity$3(self,field,function$);
} else
{var x__2387__auto____173031 = (((self == null))?null:self);
return (function (){var or__3824__auto____173032 = (doll.client.lib.protocols.update_field[goog.typeOf(x__2387__auto____173031)]);
if(or__3824__auto____173032)
{return or__3824__auto____173032;
} else
{var or__3824__auto____173033 = (doll.client.lib.protocols.update_field["_"]);
if(or__3824__auto____173033)
{return or__3824__auto____173033;
} else
{throw cljs.core.missing_protocol.call(null,"State.update-field",self);
}
}
})().call(null,self,field,function$);
}
});
doll.client.lib.protocols.Event = {};
doll.client.lib.protocols.on = (function on(self,watch_id,should_react_QMARK_,reaction){
if((function (){var and__3822__auto____173038 = self;
if(and__3822__auto____173038)
{return self.doll$client$lib$protocols$Event$on$arity$4;
} else
{return and__3822__auto____173038;
}
})())
{return self.doll$client$lib$protocols$Event$on$arity$4(self,watch_id,should_react_QMARK_,reaction);
} else
{var x__2387__auto____173039 = (((self == null))?null:self);
return (function (){var or__3824__auto____173040 = (doll.client.lib.protocols.on[goog.typeOf(x__2387__auto____173039)]);
if(or__3824__auto____173040)
{return or__3824__auto____173040;
} else
{var or__3824__auto____173041 = (doll.client.lib.protocols.on["_"]);
if(or__3824__auto____173041)
{return or__3824__auto____173041;
} else
{throw cljs.core.missing_protocol.call(null,"Event.on",self);
}
}
})().call(null,self,watch_id,should_react_QMARK_,reaction);
}
});
doll.client.lib.protocols.off = (function off(self,watch_id){
if((function (){var and__3822__auto____173046 = self;
if(and__3822__auto____173046)
{return self.doll$client$lib$protocols$Event$off$arity$2;
} else
{return and__3822__auto____173046;
}
})())
{return self.doll$client$lib$protocols$Event$off$arity$2(self,watch_id);
} else
{var x__2387__auto____173047 = (((self == null))?null:self);
return (function (){var or__3824__auto____173048 = (doll.client.lib.protocols.off[goog.typeOf(x__2387__auto____173047)]);
if(or__3824__auto____173048)
{return or__3824__auto____173048;
} else
{var or__3824__auto____173049 = (doll.client.lib.protocols.off["_"]);
if(or__3824__auto____173049)
{return or__3824__auto____173049;
} else
{throw cljs.core.missing_protocol.call(null,"Event.off",self);
}
}
})().call(null,self,watch_id);
}
});
doll.client.lib.protocols.Shape = {};
doll.client.lib.protocols.draw = (function draw(self){
if((function (){var and__3822__auto____173054 = self;
if(and__3822__auto____173054)
{return self.doll$client$lib$protocols$Shape$draw$arity$1;
} else
{return and__3822__auto____173054;
}
})())
{return self.doll$client$lib$protocols$Shape$draw$arity$1(self);
} else
{var x__2387__auto____173055 = (((self == null))?null:self);
return (function (){var or__3824__auto____173056 = (doll.client.lib.protocols.draw[goog.typeOf(x__2387__auto____173055)]);
if(or__3824__auto____173056)
{return or__3824__auto____173056;
} else
{var or__3824__auto____173057 = (doll.client.lib.protocols.draw["_"]);
if(or__3824__auto____173057)
{return or__3824__auto____173057;
} else
{throw cljs.core.missing_protocol.call(null,"Shape.draw",self);
}
}
})().call(null,self);
}
});
