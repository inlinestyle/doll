goog.provide('doll.client.lib.protocols');
goog.require('cljs.core');
doll.client.lib.protocols.State = {};
doll.client.lib.protocols.set_field = (function set_field(self,field,value){
if((function (){var and__3822__auto____493022 = self;
if(and__3822__auto____493022)
{return self.doll$client$lib$protocols$State$set_field$arity$3;
} else
{return and__3822__auto____493022;
}
})())
{return self.doll$client$lib$protocols$State$set_field$arity$3(self,field,value);
} else
{var x__2387__auto____493023 = (((self == null))?null:self);
return (function (){var or__3824__auto____493024 = (doll.client.lib.protocols.set_field[goog.typeOf(x__2387__auto____493023)]);
if(or__3824__auto____493024)
{return or__3824__auto____493024;
} else
{var or__3824__auto____493025 = (doll.client.lib.protocols.set_field["_"]);
if(or__3824__auto____493025)
{return or__3824__auto____493025;
} else
{throw cljs.core.missing_protocol.call(null,"State.set-field",self);
}
}
})().call(null,self,field,value);
}
});
doll.client.lib.protocols.get_field = (function get_field(self,field){
if((function (){var and__3822__auto____493030 = self;
if(and__3822__auto____493030)
{return self.doll$client$lib$protocols$State$get_field$arity$2;
} else
{return and__3822__auto____493030;
}
})())
{return self.doll$client$lib$protocols$State$get_field$arity$2(self,field);
} else
{var x__2387__auto____493031 = (((self == null))?null:self);
return (function (){var or__3824__auto____493032 = (doll.client.lib.protocols.get_field[goog.typeOf(x__2387__auto____493031)]);
if(or__3824__auto____493032)
{return or__3824__auto____493032;
} else
{var or__3824__auto____493033 = (doll.client.lib.protocols.get_field["_"]);
if(or__3824__auto____493033)
{return or__3824__auto____493033;
} else
{throw cljs.core.missing_protocol.call(null,"State.get-field",self);
}
}
})().call(null,self,field);
}
});
