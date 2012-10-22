goog.provide('doll.client.lib.types');
goog.require('cljs.core');
goog.require('doll.client.lib.protocols');
goog.require('doll.client.lib.protocols');

goog.provide('doll.client.lib.types.Model');

/**
* @constructor
* @param {*} field_atom
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
doll.client.lib.types.Model = (function (field_atom,__meta,__extmap){
this.field_atom = field_atom;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2766538506;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
doll.client.lib.types.Model.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2333__auto__){
var this__35078 = this;
var h__2203__auto____35079 = this__35078.__hash;
if(!((h__2203__auto____35079 == null)))
{return h__2203__auto____35079;
} else
{var h__2203__auto____35080 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__35078.__hash = h__2203__auto____35080;
return h__2203__auto____35080;
}
});
doll.client.lib.types.Model.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__35081 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Model.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k35076,else__2341__auto__){
var this__35082 = this;
if((k35076 === "\uFDD0'field-atom"))
{return this__35082.field_atom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__35082.__extmap,k35076,else__2341__auto__);
} else
{return null;
}
}
});
doll.client.lib.types.Model.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__35075){
var this__35083 = this;
var pred__35084__35087 = cljs.core.identical_QMARK_;
var expr__35085__35088 = k__2346__auto__;
if(pred__35084__35087.call(null,"\uFDD0'field-atom",expr__35085__35088))
{return (new doll.client.lib.types.Model(G__35075,this__35083.__meta,this__35083.__extmap,null));
} else
{return (new doll.client.lib.types.Model(this__35083.field_atom,this__35083.__meta,cljs.core.assoc.call(null,this__35083.__extmap,k__2346__auto__,G__35075),null));
}
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$ = true;
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$set_field$arity$3 = (function (self,field,value){
var this__35089 = this;
return cljs.core.swap_BANG_.call(null,this__35089.field_atom,cljs.core.assoc,field,value);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$get_field$arity$2 = (function (self,value){
var this__35090 = this;
return cljs.core.deref.call(null,this__35090.field_atom).call(null,value);
});
doll.client.lib.types.Model.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__35091 = this;
var pr_pair__2360__auto____35092 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____35092,[cljs.core.str("#"),cljs.core.str("Model"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__35091.field_atom)], true),this__35091.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__35093 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Model.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__35094 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__35094.field_atom)], true),this__35094.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__35095 = this;
var pr_pair__2354__auto____35096 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____35096,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Model"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__35095.field_atom)], true),this__35095.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__35097 = this;
return (1 + cljs.core.count.call(null,this__35097.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__35098 = this;
if(cljs.core.truth_((function (){var and__3822__auto____35099 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____35099))
{var and__3822__auto____35100 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____35100)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____35100;
}
} else
{return and__3822__auto____35099;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Model.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__35075){
var this__35101 = this;
return (new doll.client.lib.types.Model(this__35101.field_atom,G__35075,this__35101.__extmap,this__35101.__hash));
});
doll.client.lib.types.Model.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__35102 = this;
return this__35102.__meta;
});
doll.client.lib.types.Model.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__35103 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'field-atom"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__35103.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Model(this__35103.field_atom,this__35103.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__35103.__extmap,k__2348__auto__)),null));
}
});
doll.client.lib.types.Model.cljs$lang$type = true;
doll.client.lib.types.Model.cljs$lang$ctorPrSeq = (function (this__2380__auto__){
return cljs.core.list.call(null,"doll.client.lib.types/Model");
});
doll.client.lib.types.Model.cljs$lang$ctorPrWriter = (function (this__2380__auto__,writer__2381__auto__){
return cljs.core._write.call(null,writer__2381__auto__,"doll.client.lib.types/Model");
});
doll.client.lib.types.__GT_Model = (function __GT_Model(field_atom){
return (new doll.client.lib.types.Model(field_atom));
});
doll.client.lib.types.map__GT_Model = (function map__GT_Model(G__35077){
return (new doll.client.lib.types.Model((new cljs.core.Keyword("\uFDD0'field-atom")).call(null,G__35077),null,cljs.core.dissoc.call(null,G__35077,"\uFDD0'field-atom")));
});
doll.client.lib.types.Model;

goog.provide('doll.client.lib.types.View');

/**
* @constructor
* @param {*} $el
* @param {*} options_atom
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
doll.client.lib.types.View = (function ($el,options_atom,__meta,__extmap){
this.$el = $el;
this.options_atom = options_atom;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2766538506;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
doll.client.lib.types.View.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2333__auto__){
var this__35107 = this;
var h__2203__auto____35108 = this__35107.__hash;
if(!((h__2203__auto____35108 == null)))
{return h__2203__auto____35108;
} else
{var h__2203__auto____35109 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__35107.__hash = h__2203__auto____35109;
return h__2203__auto____35109;
}
});
doll.client.lib.types.View.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__35110 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.View.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k35105,else__2341__auto__){
var this__35111 = this;
if((k35105 === "\uFDD0'$el"))
{return this__35111.$el;
} else
{if((k35105 === "\uFDD0'options-atom"))
{return this__35111.options_atom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__35111.__extmap,k35105,else__2341__auto__);
} else
{return null;
}
}
}
});
doll.client.lib.types.View.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__35104){
var this__35112 = this;
var pred__35113__35116 = cljs.core.identical_QMARK_;
var expr__35114__35117 = k__2346__auto__;
if(pred__35113__35116.call(null,"\uFDD0'$el",expr__35114__35117))
{return (new doll.client.lib.types.View(G__35104,this__35112.options_atom,this__35112.__meta,this__35112.__extmap,null));
} else
{if(pred__35113__35116.call(null,"\uFDD0'options-atom",expr__35114__35117))
{return (new doll.client.lib.types.View(this__35112.$el,G__35104,this__35112.__meta,this__35112.__extmap,null));
} else
{return (new doll.client.lib.types.View(this__35112.$el,this__35112.options_atom,this__35112.__meta,cljs.core.assoc.call(null,this__35112.__extmap,k__2346__auto__,G__35104),null));
}
}
});
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$ = true;
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$set_field$arity$3 = (function (self,field,value){
var this__35118 = this;
return cljs.core.swap_BANG_.call(null,this__35118.options_atom,cljs.core.assoc,field,value);
});
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$get_field$arity$2 = (function (self,value){
var this__35119 = this;
return cljs.core.deref.call(null,this__35119.options_atom).call(null,value);
});
doll.client.lib.types.View.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__35120 = this;
var pr_pair__2360__auto____35121 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____35121,[cljs.core.str("#"),cljs.core.str("View"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__35120.$el),cljs.core.vector.call(null,"\uFDD0'options-atom",this__35120.options_atom)], true),this__35120.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__35122 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.View.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__35123 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__35123.$el),cljs.core.vector.call(null,"\uFDD0'options-atom",this__35123.options_atom)], true),this__35123.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__35124 = this;
var pr_pair__2354__auto____35125 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____35125,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.View"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__35124.$el),cljs.core.vector.call(null,"\uFDD0'options-atom",this__35124.options_atom)], true),this__35124.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__35126 = this;
return (2 + cljs.core.count.call(null,this__35126.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__35127 = this;
if(cljs.core.truth_((function (){var and__3822__auto____35128 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____35128))
{var and__3822__auto____35129 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____35129)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____35129;
}
} else
{return and__3822__auto____35128;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.View.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__35104){
var this__35130 = this;
return (new doll.client.lib.types.View(this__35130.$el,this__35130.options_atom,G__35104,this__35130.__extmap,this__35130.__hash));
});
doll.client.lib.types.View.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__35131 = this;
return this__35131.__meta;
});
doll.client.lib.types.View.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__35132 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'$el","\uFDD0'options-atom"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__35132.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.View(this__35132.$el,this__35132.options_atom,this__35132.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__35132.__extmap,k__2348__auto__)),null));
}
});
doll.client.lib.types.View.cljs$lang$type = true;
doll.client.lib.types.View.cljs$lang$ctorPrSeq = (function (this__2380__auto__){
return cljs.core.list.call(null,"doll.client.lib.types/View");
});
doll.client.lib.types.View.cljs$lang$ctorPrWriter = (function (this__2380__auto__,writer__2381__auto__){
return cljs.core._write.call(null,writer__2381__auto__,"doll.client.lib.types/View");
});
doll.client.lib.types.__GT_View = (function __GT_View($el,options_atom){
return (new doll.client.lib.types.View($el,options_atom));
});
doll.client.lib.types.map__GT_View = (function map__GT_View(G__35106){
return (new doll.client.lib.types.View((new cljs.core.Keyword("\uFDD0'$el")).call(null,G__35106),(new cljs.core.Keyword("\uFDD0'options-atom")).call(null,G__35106),null,cljs.core.dissoc.call(null,G__35106,"\uFDD0'$el","\uFDD0'options-atom")));
});
doll.client.lib.types.View;
