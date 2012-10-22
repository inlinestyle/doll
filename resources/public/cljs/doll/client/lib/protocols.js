goog.provide('doll.client.lib.protocols');
goog.require('cljs.core');
doll.client.lib.protocols.State = {};
doll.client.lib.protocols.set_field = (function set_field(self,field,value){
if((function (){var and__3822__auto____35063 = self;
if(and__3822__auto____35063)
{return self.doll$client$lib$protocols$State$set_field$arity$3;
} else
{return and__3822__auto____35063;
}
})())
{return self.doll$client$lib$protocols$State$set_field$arity$3(self,field,value);
} else
{var x__2387__auto____35064 = (((self == null))?null:self);
return (function (){var or__3824__auto____35065 = (doll.client.lib.protocols.set_field[goog.typeOf(x__2387__auto____35064)]);
if(or__3824__auto____35065)
{return or__3824__auto____35065;
} else
{var or__3824__auto____35066 = (doll.client.lib.protocols.set_field["_"]);
if(or__3824__auto____35066)
{return or__3824__auto____35066;
} else
{throw cljs.core.missing_protocol.call(null,"State.set-field",self);
}
}
})().call(null,self,field,value);
}
});
doll.client.lib.protocols.get_field = (function get_field(self,field){
if((function (){var and__3822__auto____35071 = self;
if(and__3822__auto____35071)
{return self.doll$client$lib$protocols$State$get_field$arity$2;
} else
{return and__3822__auto____35071;
}
})())
{return self.doll$client$lib$protocols$State$get_field$arity$2(self,field);
} else
{var x__2387__auto____35072 = (((self == null))?null:self);
return (function (){var or__3824__auto____35073 = (doll.client.lib.protocols.get_field[goog.typeOf(x__2387__auto____35072)]);
if(or__3824__auto____35073)
{return or__3824__auto____35073;
} else
{var or__3824__auto____35074 = (doll.client.lib.protocols.get_field["_"]);
if(or__3824__auto____35074)
{return or__3824__auto____35074;
} else
{throw cljs.core.missing_protocol.call(null,"State.get-field",self);
}
}
})().call(null,self,field);
}
});
