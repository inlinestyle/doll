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
var this__500157 = this;
var h__2203__auto____500158 = this__500157.__hash;
if(!((h__2203__auto____500158 == null)))
{return h__2203__auto____500158;
} else
{var h__2203__auto____500159 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__500157.__hash = h__2203__auto____500159;
return h__2203__auto____500159;
}
});
doll.client.lib.types.Model.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__500160 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Model.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k500155,else__2341__auto__){
var this__500161 = this;
if((k500155 === "\uFDD0'field-atom"))
{return this__500161.field_atom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__500161.__extmap,k500155,else__2341__auto__);
} else
{return null;
}
}
});
doll.client.lib.types.Model.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__500154){
var this__500162 = this;
var pred__500163__500166 = cljs.core.identical_QMARK_;
var expr__500164__500167 = k__2346__auto__;
if(pred__500163__500166.call(null,"\uFDD0'field-atom",expr__500164__500167))
{return (new doll.client.lib.types.Model(G__500154,this__500162.__meta,this__500162.__extmap,null));
} else
{return (new doll.client.lib.types.Model(this__500162.field_atom,this__500162.__meta,cljs.core.assoc.call(null,this__500162.__extmap,k__2346__auto__,G__500154),null));
}
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$ = true;
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$set_field$arity$3 = (function (self,field,value){
var this__500168 = this;
return cljs.core.swap_BANG_.call(null,this__500168.field_atom,cljs.core.assoc,field,value);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$get_field$arity$2 = (function (self,value){
var this__500169 = this;
return cljs.core.deref.call(null,this__500169.field_atom).call(null,value);
});
doll.client.lib.types.Model.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__500170 = this;
var pr_pair__2360__auto____500171 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____500171,[cljs.core.str("#"),cljs.core.str("Model"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__500170.field_atom)], true),this__500170.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__500172 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Model.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__500173 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__500173.field_atom)], true),this__500173.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__500174 = this;
var pr_pair__2354__auto____500175 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____500175,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Model"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__500174.field_atom)], true),this__500174.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__500176 = this;
return (1 + cljs.core.count.call(null,this__500176.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__500177 = this;
if(cljs.core.truth_((function (){var and__3822__auto____500178 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____500178))
{var and__3822__auto____500179 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____500179)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____500179;
}
} else
{return and__3822__auto____500178;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Model.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__500154){
var this__500180 = this;
return (new doll.client.lib.types.Model(this__500180.field_atom,G__500154,this__500180.__extmap,this__500180.__hash));
});
doll.client.lib.types.Model.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__500181 = this;
return this__500181.__meta;
});
doll.client.lib.types.Model.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__500182 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'field-atom"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__500182.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Model(this__500182.field_atom,this__500182.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__500182.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_Model = (function map__GT_Model(G__500156){
return (new doll.client.lib.types.Model((new cljs.core.Keyword("\uFDD0'field-atom")).call(null,G__500156),null,cljs.core.dissoc.call(null,G__500156,"\uFDD0'field-atom")));
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
var this__500186 = this;
var h__2203__auto____500187 = this__500186.__hash;
if(!((h__2203__auto____500187 == null)))
{return h__2203__auto____500187;
} else
{var h__2203__auto____500188 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__500186.__hash = h__2203__auto____500188;
return h__2203__auto____500188;
}
});
doll.client.lib.types.View.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__500189 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.View.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k500184,else__2341__auto__){
var this__500190 = this;
if((k500184 === "\uFDD0'$el"))
{return this__500190.$el;
} else
{if((k500184 === "\uFDD0'options-atom"))
{return this__500190.options_atom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__500190.__extmap,k500184,else__2341__auto__);
} else
{return null;
}
}
}
});
doll.client.lib.types.View.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__500183){
var this__500191 = this;
var pred__500192__500195 = cljs.core.identical_QMARK_;
var expr__500193__500196 = k__2346__auto__;
if(pred__500192__500195.call(null,"\uFDD0'$el",expr__500193__500196))
{return (new doll.client.lib.types.View(G__500183,this__500191.options_atom,this__500191.__meta,this__500191.__extmap,null));
} else
{if(pred__500192__500195.call(null,"\uFDD0'options-atom",expr__500193__500196))
{return (new doll.client.lib.types.View(this__500191.$el,G__500183,this__500191.__meta,this__500191.__extmap,null));
} else
{return (new doll.client.lib.types.View(this__500191.$el,this__500191.options_atom,this__500191.__meta,cljs.core.assoc.call(null,this__500191.__extmap,k__2346__auto__,G__500183),null));
}
}
});
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$ = true;
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$set_field$arity$3 = (function (self,field,value){
var this__500197 = this;
return cljs.core.swap_BANG_.call(null,this__500197.options_atom,cljs.core.assoc,field,value);
});
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$get_field$arity$2 = (function (self,value){
var this__500198 = this;
return cljs.core.deref.call(null,this__500198.options_atom).call(null,value);
});
doll.client.lib.types.View.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__500199 = this;
var pr_pair__2360__auto____500200 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____500200,[cljs.core.str("#"),cljs.core.str("View"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__500199.$el),cljs.core.vector.call(null,"\uFDD0'options-atom",this__500199.options_atom)], true),this__500199.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__500201 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.View.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__500202 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__500202.$el),cljs.core.vector.call(null,"\uFDD0'options-atom",this__500202.options_atom)], true),this__500202.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__500203 = this;
var pr_pair__2354__auto____500204 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____500204,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.View"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__500203.$el),cljs.core.vector.call(null,"\uFDD0'options-atom",this__500203.options_atom)], true),this__500203.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__500205 = this;
return (2 + cljs.core.count.call(null,this__500205.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__500206 = this;
if(cljs.core.truth_((function (){var and__3822__auto____500207 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____500207))
{var and__3822__auto____500208 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____500208)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____500208;
}
} else
{return and__3822__auto____500207;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.View.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__500183){
var this__500209 = this;
return (new doll.client.lib.types.View(this__500209.$el,this__500209.options_atom,G__500183,this__500209.__extmap,this__500209.__hash));
});
doll.client.lib.types.View.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__500210 = this;
return this__500210.__meta;
});
doll.client.lib.types.View.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__500211 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'$el","\uFDD0'options-atom"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__500211.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.View(this__500211.$el,this__500211.options_atom,this__500211.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__500211.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_View = (function map__GT_View(G__500185){
return (new doll.client.lib.types.View((new cljs.core.Keyword("\uFDD0'$el")).call(null,G__500185),(new cljs.core.Keyword("\uFDD0'options-atom")).call(null,G__500185),null,cljs.core.dissoc.call(null,G__500185,"\uFDD0'$el","\uFDD0'options-atom")));
});
doll.client.lib.types.View;
