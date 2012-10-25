goog.provide('doll.client.lib.protocols');
goog.require('cljs.core');
doll.client.lib.protocols.State = {};
doll.client.lib.protocols.set_field = (function set_field(self,field,value){
if((function (){var and__3822__auto____447350 = self;
if(and__3822__auto____447350)
{return self.doll$client$lib$protocols$State$set_field$arity$3;
} else
{return and__3822__auto____447350;
}
})())
{return self.doll$client$lib$protocols$State$set_field$arity$3(self,field,value);
} else
{var x__2387__auto____447351 = (((self == null))?null:self);
return (function (){var or__3824__auto____447352 = (doll.client.lib.protocols.set_field[goog.typeOf(x__2387__auto____447351)]);
if(or__3824__auto____447352)
{return or__3824__auto____447352;
} else
{var or__3824__auto____447353 = (doll.client.lib.protocols.set_field["_"]);
if(or__3824__auto____447353)
{return or__3824__auto____447353;
} else
{throw cljs.core.missing_protocol.call(null,"State.set-field",self);
}
}
})().call(null,self,field,value);
}
});
doll.client.lib.protocols.set_fields = (function set_fields(self,fvs){
if((function (){var and__3822__auto____447358 = self;
if(and__3822__auto____447358)
{return self.doll$client$lib$protocols$State$set_fields$arity$2;
} else
{return and__3822__auto____447358;
}
})())
{return self.doll$client$lib$protocols$State$set_fields$arity$2(self,fvs);
} else
{var x__2387__auto____447359 = (((self == null))?null:self);
return (function (){var or__3824__auto____447360 = (doll.client.lib.protocols.set_fields[goog.typeOf(x__2387__auto____447359)]);
if(or__3824__auto____447360)
{return or__3824__auto____447360;
} else
{var or__3824__auto____447361 = (doll.client.lib.protocols.set_fields["_"]);
if(or__3824__auto____447361)
{return or__3824__auto____447361;
} else
{throw cljs.core.missing_protocol.call(null,"State.set-fields",self);
}
}
})().call(null,self,fvs);
}
});
doll.client.lib.protocols.get_field = (function get_field(self,field){
if((function (){var and__3822__auto____447366 = self;
if(and__3822__auto____447366)
{return self.doll$client$lib$protocols$State$get_field$arity$2;
} else
{return and__3822__auto____447366;
}
})())
{return self.doll$client$lib$protocols$State$get_field$arity$2(self,field);
} else
{var x__2387__auto____447367 = (((self == null))?null:self);
return (function (){var or__3824__auto____447368 = (doll.client.lib.protocols.get_field[goog.typeOf(x__2387__auto____447367)]);
if(or__3824__auto____447368)
{return or__3824__auto____447368;
} else
{var or__3824__auto____447369 = (doll.client.lib.protocols.get_field["_"]);
if(or__3824__auto____447369)
{return or__3824__auto____447369;
} else
{throw cljs.core.missing_protocol.call(null,"State.get-field",self);
}
}
})().call(null,self,field);
}
});
doll.client.lib.protocols.get_fields = (function get_fields(self,fields){
if((function (){var and__3822__auto____447374 = self;
if(and__3822__auto____447374)
{return self.doll$client$lib$protocols$State$get_fields$arity$2;
} else
{return and__3822__auto____447374;
}
})())
{return self.doll$client$lib$protocols$State$get_fields$arity$2(self,fields);
} else
{var x__2387__auto____447375 = (((self == null))?null:self);
return (function (){var or__3824__auto____447376 = (doll.client.lib.protocols.get_fields[goog.typeOf(x__2387__auto____447375)]);
if(or__3824__auto____447376)
{return or__3824__auto____447376;
} else
{var or__3824__auto____447377 = (doll.client.lib.protocols.get_fields["_"]);
if(or__3824__auto____447377)
{return or__3824__auto____447377;
} else
{throw cljs.core.missing_protocol.call(null,"State.get-fields",self);
}
}
})().call(null,self,fields);
}
});
doll.client.lib.protocols.update_field = (function update_field(self,field,function$){
if((function (){var and__3822__auto____447382 = self;
if(and__3822__auto____447382)
{return self.doll$client$lib$protocols$State$update_field$arity$3;
} else
{return and__3822__auto____447382;
}
})())
{return self.doll$client$lib$protocols$State$update_field$arity$3(self,field,function$);
} else
{var x__2387__auto____447383 = (((self == null))?null:self);
return (function (){var or__3824__auto____447384 = (doll.client.lib.protocols.update_field[goog.typeOf(x__2387__auto____447383)]);
if(or__3824__auto____447384)
{return or__3824__auto____447384;
} else
{var or__3824__auto____447385 = (doll.client.lib.protocols.update_field["_"]);
if(or__3824__auto____447385)
{return or__3824__auto____447385;
} else
{throw cljs.core.missing_protocol.call(null,"State.update-field",self);
}
}
})().call(null,self,field,function$);
}
});
doll.client.lib.protocols.Event = {};
doll.client.lib.protocols.on = (function on(self,watch_id,should_react_QMARK_,reaction){
if((function (){var and__3822__auto____447390 = self;
if(and__3822__auto____447390)
{return self.doll$client$lib$protocols$Event$on$arity$4;
} else
{return and__3822__auto____447390;
}
})())
{return self.doll$client$lib$protocols$Event$on$arity$4(self,watch_id,should_react_QMARK_,reaction);
} else
{var x__2387__auto____447391 = (((self == null))?null:self);
return (function (){var or__3824__auto____447392 = (doll.client.lib.protocols.on[goog.typeOf(x__2387__auto____447391)]);
if(or__3824__auto____447392)
{return or__3824__auto____447392;
} else
{var or__3824__auto____447393 = (doll.client.lib.protocols.on["_"]);
if(or__3824__auto____447393)
{return or__3824__auto____447393;
} else
{throw cljs.core.missing_protocol.call(null,"Event.on",self);
}
}
})().call(null,self,watch_id,should_react_QMARK_,reaction);
}
});
doll.client.lib.protocols.off = (function off(self,watch_id){
if((function (){var and__3822__auto____447398 = self;
if(and__3822__auto____447398)
{return self.doll$client$lib$protocols$Event$off$arity$2;
} else
{return and__3822__auto____447398;
}
})())
{return self.doll$client$lib$protocols$Event$off$arity$2(self,watch_id);
} else
{var x__2387__auto____447399 = (((self == null))?null:self);
return (function (){var or__3824__auto____447400 = (doll.client.lib.protocols.off[goog.typeOf(x__2387__auto____447399)]);
if(or__3824__auto____447400)
{return or__3824__auto____447400;
} else
{var or__3824__auto____447401 = (doll.client.lib.protocols.off["_"]);
if(or__3824__auto____447401)
{return or__3824__auto____447401;
} else
{throw cljs.core.missing_protocol.call(null,"Event.off",self);
}
}
})().call(null,self,watch_id);
}
});
doll.client.lib.protocols.Shape = {};
doll.client.lib.protocols.draw = (function draw(self){
if((function (){var and__3822__auto____447406 = self;
if(and__3822__auto____447406)
{return self.doll$client$lib$protocols$Shape$draw$arity$1;
} else
{return and__3822__auto____447406;
}
})())
{return self.doll$client$lib$protocols$Shape$draw$arity$1(self);
} else
{var x__2387__auto____447407 = (((self == null))?null:self);
return (function (){var or__3824__auto____447408 = (doll.client.lib.protocols.draw[goog.typeOf(x__2387__auto____447407)]);
if(or__3824__auto____447408)
{return or__3824__auto____447408;
} else
{var or__3824__auto____447409 = (doll.client.lib.protocols.draw["_"]);
if(or__3824__auto____447409)
{return or__3824__auto____447409;
} else
{throw cljs.core.missing_protocol.call(null,"Shape.draw",self);
}
}
})().call(null,self);
}
});
