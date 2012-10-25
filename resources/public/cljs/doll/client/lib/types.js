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
var this__55187 = this;
var h__2203__auto____55188 = this__55187.__hash;
if(!((h__2203__auto____55188 == null)))
{return h__2203__auto____55188;
} else
{var h__2203__auto____55189 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__55187.__hash = h__2203__auto____55189;
return h__2203__auto____55189;
}
});
doll.client.lib.types.Model.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__55190 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Model.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k55185,else__2341__auto__){
var this__55191 = this;
if((k55185 === "\uFDD0'field-atom"))
{return this__55191.field_atom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__55191.__extmap,k55185,else__2341__auto__);
} else
{return null;
}
}
});
doll.client.lib.types.Model.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__55184){
var this__55192 = this;
var pred__55193__55196 = cljs.core.identical_QMARK_;
var expr__55194__55197 = k__2346__auto__;
if(pred__55193__55196.call(null,"\uFDD0'field-atom",expr__55194__55197))
{return (new doll.client.lib.types.Model(G__55184,this__55192.__meta,this__55192.__extmap,null));
} else
{return (new doll.client.lib.types.Model(this__55192.field_atom,this__55192.__meta,cljs.core.assoc.call(null,this__55192.__extmap,k__2346__auto__,G__55184),null));
}
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$ = true;
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$set_field$arity$3 = (function (self,field,value){
var this__55198 = this;
return cljs.core.swap_BANG_.call(null,this__55198.field_atom,cljs.core.assoc,field,value);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$set_fields$arity$2 = (function (self,fvs){
var this__55199 = this;
return cljs.core.swap_BANG_.call(null,this__55199.field_atom,(function (p1__55115_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__55115_SHARP_,fvs);
}));
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$get_field$arity$2 = (function (self,value){
var this__55200 = this;
return cljs.core.deref.call(null,this__55200.field_atom).call(null,value);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$get_fields$arity$2 = (function (self,fields){
var this__55201 = this;
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,this__55201.field_atom),fields);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$update_field$arity$3 = (function (self,field,function$){
var this__55202 = this;
return cljs.core.swap_BANG_.call(null,this__55202.field_atom,cljs.core.update_in,cljs.core.PersistentVector.fromArray([field], true),function$);
});
doll.client.lib.types.Model.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__55203 = this;
var pr_pair__2360__auto____55204 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____55204,[cljs.core.str("#"),cljs.core.str("Model"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__55203.field_atom)], true),this__55203.__extmap));
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$Event$ = true;
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$Event$on$arity$4 = (function (self,watch_id,should_react_QMARK_,reaction){
var this__55205 = this;
return cljs.core.add_watch.call(null,this__55205.field_atom,watch_id,(function (p1__55118_SHARP_,p2__55119_SHARP_,p3__55116_SHARP_,p4__55117_SHARP_){
if(cljs.core.truth_(should_react_QMARK_.call(null,p3__55116_SHARP_,p4__55117_SHARP_)))
{return reaction.call(null,p4__55117_SHARP_);
} else
{return null;
}
}));
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$Event$off$arity$2 = (function (self,watch_id){
var this__55206 = this;
return cljs.core.remove_watch.call(null,this__55206.field_atom,watch_id);
});
doll.client.lib.types.Model.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__55207 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Model.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__55208 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__55208.field_atom)], true),this__55208.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__55209 = this;
var pr_pair__2354__auto____55210 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____55210,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Model"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__55209.field_atom)], true),this__55209.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__55211 = this;
return (1 + cljs.core.count.call(null,this__55211.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__55212 = this;
if(cljs.core.truth_((function (){var and__3822__auto____55213 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____55213))
{var and__3822__auto____55214 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____55214)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____55214;
}
} else
{return and__3822__auto____55213;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Model.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__55184){
var this__55215 = this;
return (new doll.client.lib.types.Model(this__55215.field_atom,G__55184,this__55215.__extmap,this__55215.__hash));
});
doll.client.lib.types.Model.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__55216 = this;
return this__55216.__meta;
});
doll.client.lib.types.Model.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__55217 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'field-atom"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__55217.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Model(this__55217.field_atom,this__55217.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__55217.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_Model = (function map__GT_Model(G__55186){
return (new doll.client.lib.types.Model((new cljs.core.Keyword("\uFDD0'field-atom")).call(null,G__55186),null,cljs.core.dissoc.call(null,G__55186,"\uFDD0'field-atom")));
});
doll.client.lib.types.Model;

goog.provide('doll.client.lib.types.View');

/**
* @constructor
* @param {*} $el
* @param {*} model
* @param {*} options_atom
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
doll.client.lib.types.View = (function ($el,model,options_atom,__meta,__extmap){
this.$el = $el;
this.model = model;
this.options_atom = options_atom;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2766538506;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
doll.client.lib.types.View.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2333__auto__){
var this__55221 = this;
var h__2203__auto____55222 = this__55221.__hash;
if(!((h__2203__auto____55222 == null)))
{return h__2203__auto____55222;
} else
{var h__2203__auto____55223 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__55221.__hash = h__2203__auto____55223;
return h__2203__auto____55223;
}
});
doll.client.lib.types.View.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__55224 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.View.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k55219,else__2341__auto__){
var this__55225 = this;
if((k55219 === "\uFDD0'$el"))
{return this__55225.$el;
} else
{if((k55219 === "\uFDD0'model"))
{return this__55225.model;
} else
{if((k55219 === "\uFDD0'options-atom"))
{return this__55225.options_atom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__55225.__extmap,k55219,else__2341__auto__);
} else
{return null;
}
}
}
}
});
doll.client.lib.types.View.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__55218){
var this__55226 = this;
var pred__55227__55230 = cljs.core.identical_QMARK_;
var expr__55228__55231 = k__2346__auto__;
if(pred__55227__55230.call(null,"\uFDD0'$el",expr__55228__55231))
{return (new doll.client.lib.types.View(G__55218,this__55226.model,this__55226.options_atom,this__55226.__meta,this__55226.__extmap,null));
} else
{if(pred__55227__55230.call(null,"\uFDD0'model",expr__55228__55231))
{return (new doll.client.lib.types.View(this__55226.$el,G__55218,this__55226.options_atom,this__55226.__meta,this__55226.__extmap,null));
} else
{if(pred__55227__55230.call(null,"\uFDD0'options-atom",expr__55228__55231))
{return (new doll.client.lib.types.View(this__55226.$el,this__55226.model,G__55218,this__55226.__meta,this__55226.__extmap,null));
} else
{return (new doll.client.lib.types.View(this__55226.$el,this__55226.model,this__55226.options_atom,this__55226.__meta,cljs.core.assoc.call(null,this__55226.__extmap,k__2346__auto__,G__55218),null));
}
}
}
});
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$ = true;
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$set_field$arity$3 = (function (self,field,value){
var this__55232 = this;
return cljs.core.swap_BANG_.call(null,this__55232.options_atom,cljs.core.assoc,field,value);
});
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$get_field$arity$2 = (function (self,value){
var this__55233 = this;
return cljs.core.deref.call(null,this__55233.options_atom).call(null,value);
});
doll.client.lib.types.View.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__55234 = this;
var pr_pair__2360__auto____55235 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____55235,[cljs.core.str("#"),cljs.core.str("View"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__55234.$el),cljs.core.vector.call(null,"\uFDD0'model",this__55234.model),cljs.core.vector.call(null,"\uFDD0'options-atom",this__55234.options_atom)], true),this__55234.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__55236 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.View.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__55237 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__55237.$el),cljs.core.vector.call(null,"\uFDD0'model",this__55237.model),cljs.core.vector.call(null,"\uFDD0'options-atom",this__55237.options_atom)], true),this__55237.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__55238 = this;
var pr_pair__2354__auto____55239 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____55239,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.View"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__55238.$el),cljs.core.vector.call(null,"\uFDD0'model",this__55238.model),cljs.core.vector.call(null,"\uFDD0'options-atom",this__55238.options_atom)], true),this__55238.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__55240 = this;
return (3 + cljs.core.count.call(null,this__55240.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__55241 = this;
if(cljs.core.truth_((function (){var and__3822__auto____55242 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____55242))
{var and__3822__auto____55243 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____55243)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____55243;
}
} else
{return and__3822__auto____55242;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.View.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__55218){
var this__55244 = this;
return (new doll.client.lib.types.View(this__55244.$el,this__55244.model,this__55244.options_atom,G__55218,this__55244.__extmap,this__55244.__hash));
});
doll.client.lib.types.View.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__55245 = this;
return this__55245.__meta;
});
doll.client.lib.types.View.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__55246 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'model","\uFDD0'$el","\uFDD0'options-atom"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__55246.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.View(this__55246.$el,this__55246.model,this__55246.options_atom,this__55246.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__55246.__extmap,k__2348__auto__)),null));
}
});
doll.client.lib.types.View.cljs$lang$type = true;
doll.client.lib.types.View.cljs$lang$ctorPrSeq = (function (this__2380__auto__){
return cljs.core.list.call(null,"doll.client.lib.types/View");
});
doll.client.lib.types.View.cljs$lang$ctorPrWriter = (function (this__2380__auto__,writer__2381__auto__){
return cljs.core._write.call(null,writer__2381__auto__,"doll.client.lib.types/View");
});
doll.client.lib.types.__GT_View = (function __GT_View($el,model,options_atom){
return (new doll.client.lib.types.View($el,model,options_atom));
});
doll.client.lib.types.map__GT_View = (function map__GT_View(G__55220){
return (new doll.client.lib.types.View((new cljs.core.Keyword("\uFDD0'$el")).call(null,G__55220),(new cljs.core.Keyword("\uFDD0'model")).call(null,G__55220),(new cljs.core.Keyword("\uFDD0'options-atom")).call(null,G__55220),null,cljs.core.dissoc.call(null,G__55220,"\uFDD0'$el","\uFDD0'model","\uFDD0'options-atom")));
});
doll.client.lib.types.View;

goog.provide('doll.client.lib.types.Cube');

/**
* @constructor
* @param {*} xscale
* @param {*} yscale
* @param {*} zscale
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
doll.client.lib.types.Cube = (function (xscale,yscale,zscale,__meta,__extmap){
this.xscale = xscale;
this.yscale = yscale;
this.zscale = zscale;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2766538506;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
doll.client.lib.types.Cube.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2333__auto__){
var this__55250 = this;
var h__2203__auto____55251 = this__55250.__hash;
if(!((h__2203__auto____55251 == null)))
{return h__2203__auto____55251;
} else
{var h__2203__auto____55252 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__55250.__hash = h__2203__auto____55252;
return h__2203__auto____55252;
}
});
doll.client.lib.types.Cube.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__55253 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Cube.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k55248,else__2341__auto__){
var this__55254 = this;
if((k55248 === "\uFDD0'xscale"))
{return this__55254.xscale;
} else
{if((k55248 === "\uFDD0'yscale"))
{return this__55254.yscale;
} else
{if((k55248 === "\uFDD0'zscale"))
{return this__55254.zscale;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__55254.__extmap,k55248,else__2341__auto__);
} else
{return null;
}
}
}
}
});
doll.client.lib.types.Cube.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__55247){
var this__55255 = this;
var pred__55256__55259 = cljs.core.identical_QMARK_;
var expr__55257__55260 = k__2346__auto__;
if(pred__55256__55259.call(null,"\uFDD0'xscale",expr__55257__55260))
{return (new doll.client.lib.types.Cube(G__55247,this__55255.yscale,this__55255.zscale,this__55255.__meta,this__55255.__extmap,null));
} else
{if(pred__55256__55259.call(null,"\uFDD0'yscale",expr__55257__55260))
{return (new doll.client.lib.types.Cube(this__55255.xscale,G__55247,this__55255.zscale,this__55255.__meta,this__55255.__extmap,null));
} else
{if(pred__55256__55259.call(null,"\uFDD0'zscale",expr__55257__55260))
{return (new doll.client.lib.types.Cube(this__55255.xscale,this__55255.yscale,G__55247,this__55255.__meta,this__55255.__extmap,null));
} else
{return (new doll.client.lib.types.Cube(this__55255.xscale,this__55255.yscale,this__55255.zscale,this__55255.__meta,cljs.core.assoc.call(null,this__55255.__extmap,k__2346__auto__,G__55247),null));
}
}
}
});
doll.client.lib.types.Cube.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__55261 = this;
var pr_pair__2360__auto____55262 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____55262,[cljs.core.str("#"),cljs.core.str("Cube"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__55261.xscale),cljs.core.vector.call(null,"\uFDD0'yscale",this__55261.yscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__55261.zscale)], true),this__55261.__extmap));
});
doll.client.lib.types.Cube.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__55263 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Cube.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__55264 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__55264.xscale),cljs.core.vector.call(null,"\uFDD0'yscale",this__55264.yscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__55264.zscale)], true),this__55264.__extmap));
});
doll.client.lib.types.Cube.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__55265 = this;
var pr_pair__2354__auto____55266 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____55266,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Cube"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__55265.xscale),cljs.core.vector.call(null,"\uFDD0'yscale",this__55265.yscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__55265.zscale)], true),this__55265.__extmap));
});
doll.client.lib.types.Cube.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__55267 = this;
return (3 + cljs.core.count.call(null,this__55267.__extmap));
});
doll.client.lib.types.Cube.prototype.doll$client$lib$protocols$Shape$ = true;
doll.client.lib.types.Cube.prototype.doll$client$lib$protocols$Shape$draw$arity$1 = (function (self){
var this__55268 = this;
return (new THREE.CubeGeometry(this__55268.xscale,this__55268.yscale,this__55268.zscale));
});
doll.client.lib.types.Cube.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__55269 = this;
if(cljs.core.truth_((function (){var and__3822__auto____55270 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____55270))
{var and__3822__auto____55271 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____55271)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____55271;
}
} else
{return and__3822__auto____55270;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Cube.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__55247){
var this__55272 = this;
return (new doll.client.lib.types.Cube(this__55272.xscale,this__55272.yscale,this__55272.zscale,G__55247,this__55272.__extmap,this__55272.__hash));
});
doll.client.lib.types.Cube.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__55273 = this;
return this__55273.__meta;
});
doll.client.lib.types.Cube.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__55274 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'zscale","\uFDD0'xscale","\uFDD0'yscale"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__55274.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Cube(this__55274.xscale,this__55274.yscale,this__55274.zscale,this__55274.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__55274.__extmap,k__2348__auto__)),null));
}
});
doll.client.lib.types.Cube.cljs$lang$type = true;
doll.client.lib.types.Cube.cljs$lang$ctorPrSeq = (function (this__2380__auto__){
return cljs.core.list.call(null,"doll.client.lib.types/Cube");
});
doll.client.lib.types.Cube.cljs$lang$ctorPrWriter = (function (this__2380__auto__,writer__2381__auto__){
return cljs.core._write.call(null,writer__2381__auto__,"doll.client.lib.types/Cube");
});
doll.client.lib.types.__GT_Cube = (function __GT_Cube(xscale,yscale,zscale){
return (new doll.client.lib.types.Cube(xscale,yscale,zscale));
});
doll.client.lib.types.map__GT_Cube = (function map__GT_Cube(G__55249){
return (new doll.client.lib.types.Cube((new cljs.core.Keyword("\uFDD0'xscale")).call(null,G__55249),(new cljs.core.Keyword("\uFDD0'yscale")).call(null,G__55249),(new cljs.core.Keyword("\uFDD0'zscale")).call(null,G__55249),null,cljs.core.dissoc.call(null,G__55249,"\uFDD0'xscale","\uFDD0'yscale","\uFDD0'zscale")));
});
doll.client.lib.types.Cube;

goog.provide('doll.client.lib.types.Plane');

/**
* @constructor
* @param {*} xscale
* @param {*} zscale
* @param {*} xsegments
* @param {*} zsegments
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
doll.client.lib.types.Plane = (function (xscale,zscale,xsegments,zsegments,__meta,__extmap){
this.xscale = xscale;
this.zscale = zscale;
this.xsegments = xsegments;
this.zsegments = zsegments;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2766538506;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
doll.client.lib.types.Plane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2333__auto__){
var this__55278 = this;
var h__2203__auto____55279 = this__55278.__hash;
if(!((h__2203__auto____55279 == null)))
{return h__2203__auto____55279;
} else
{var h__2203__auto____55280 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__55278.__hash = h__2203__auto____55280;
return h__2203__auto____55280;
}
});
doll.client.lib.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__55281 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k55276,else__2341__auto__){
var this__55282 = this;
if((k55276 === "\uFDD0'xscale"))
{return this__55282.xscale;
} else
{if((k55276 === "\uFDD0'zscale"))
{return this__55282.zscale;
} else
{if((k55276 === "\uFDD0'xsegments"))
{return this__55282.xsegments;
} else
{if((k55276 === "\uFDD0'zsegments"))
{return this__55282.zsegments;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__55282.__extmap,k55276,else__2341__auto__);
} else
{return null;
}
}
}
}
}
});
doll.client.lib.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__55275){
var this__55283 = this;
var pred__55284__55287 = cljs.core.identical_QMARK_;
var expr__55285__55288 = k__2346__auto__;
if(pred__55284__55287.call(null,"\uFDD0'xscale",expr__55285__55288))
{return (new doll.client.lib.types.Plane(G__55275,this__55283.zscale,this__55283.xsegments,this__55283.zsegments,this__55283.__meta,this__55283.__extmap,null));
} else
{if(pred__55284__55287.call(null,"\uFDD0'zscale",expr__55285__55288))
{return (new doll.client.lib.types.Plane(this__55283.xscale,G__55275,this__55283.xsegments,this__55283.zsegments,this__55283.__meta,this__55283.__extmap,null));
} else
{if(pred__55284__55287.call(null,"\uFDD0'xsegments",expr__55285__55288))
{return (new doll.client.lib.types.Plane(this__55283.xscale,this__55283.zscale,G__55275,this__55283.zsegments,this__55283.__meta,this__55283.__extmap,null));
} else
{if(pred__55284__55287.call(null,"\uFDD0'zsegments",expr__55285__55288))
{return (new doll.client.lib.types.Plane(this__55283.xscale,this__55283.zscale,this__55283.xsegments,G__55275,this__55283.__meta,this__55283.__extmap,null));
} else
{return (new doll.client.lib.types.Plane(this__55283.xscale,this__55283.zscale,this__55283.xsegments,this__55283.zsegments,this__55283.__meta,cljs.core.assoc.call(null,this__55283.__extmap,k__2346__auto__,G__55275),null));
}
}
}
}
});
doll.client.lib.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__55289 = this;
var pr_pair__2360__auto____55290 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____55290,[cljs.core.str("#"),cljs.core.str("Plane"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__55289.xscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__55289.zscale),cljs.core.vector.call(null,"\uFDD0'xsegments",this__55289.xsegments),cljs.core.vector.call(null,"\uFDD0'zsegments",this__55289.zsegments)], true),this__55289.__extmap));
});
doll.client.lib.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__55291 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__55292 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__55292.xscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__55292.zscale),cljs.core.vector.call(null,"\uFDD0'xsegments",this__55292.xsegments),cljs.core.vector.call(null,"\uFDD0'zsegments",this__55292.zsegments)], true),this__55292.__extmap));
});
doll.client.lib.types.Plane.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__55293 = this;
var pr_pair__2354__auto____55294 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____55294,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Plane"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__55293.xscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__55293.zscale),cljs.core.vector.call(null,"\uFDD0'xsegments",this__55293.xsegments),cljs.core.vector.call(null,"\uFDD0'zsegments",this__55293.zsegments)], true),this__55293.__extmap));
});
doll.client.lib.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__55295 = this;
return (4 + cljs.core.count.call(null,this__55295.__extmap));
});
doll.client.lib.types.Plane.prototype.doll$client$lib$protocols$Shape$ = true;
doll.client.lib.types.Plane.prototype.doll$client$lib$protocols$Shape$draw$arity$1 = (function (self){
var this__55296 = this;
return (new THREE.PlaneGeometry(this__55296.xscale,this__55296.zscale,this__55296.xsegments,this__55296.zsegments));
});
doll.client.lib.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__55297 = this;
if(cljs.core.truth_((function (){var and__3822__auto____55298 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____55298))
{var and__3822__auto____55299 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____55299)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____55299;
}
} else
{return and__3822__auto____55298;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__55275){
var this__55300 = this;
return (new doll.client.lib.types.Plane(this__55300.xscale,this__55300.zscale,this__55300.xsegments,this__55300.zsegments,G__55275,this__55300.__extmap,this__55300.__hash));
});
doll.client.lib.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__55301 = this;
return this__55301.__meta;
});
doll.client.lib.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__55302 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'xsegments","\uFDD0'zscale","\uFDD0'xscale","\uFDD0'zsegments"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__55302.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Plane(this__55302.xscale,this__55302.zscale,this__55302.xsegments,this__55302.zsegments,this__55302.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__55302.__extmap,k__2348__auto__)),null));
}
});
doll.client.lib.types.Plane.cljs$lang$type = true;
doll.client.lib.types.Plane.cljs$lang$ctorPrSeq = (function (this__2380__auto__){
return cljs.core.list.call(null,"doll.client.lib.types/Plane");
});
doll.client.lib.types.Plane.cljs$lang$ctorPrWriter = (function (this__2380__auto__,writer__2381__auto__){
return cljs.core._write.call(null,writer__2381__auto__,"doll.client.lib.types/Plane");
});
doll.client.lib.types.__GT_Plane = (function __GT_Plane(xscale,zscale,xsegments,zsegments){
return (new doll.client.lib.types.Plane(xscale,zscale,xsegments,zsegments));
});
doll.client.lib.types.map__GT_Plane = (function map__GT_Plane(G__55277){
return (new doll.client.lib.types.Plane((new cljs.core.Keyword("\uFDD0'xscale")).call(null,G__55277),(new cljs.core.Keyword("\uFDD0'zscale")).call(null,G__55277),(new cljs.core.Keyword("\uFDD0'xsegments")).call(null,G__55277),(new cljs.core.Keyword("\uFDD0'zsegments")).call(null,G__55277),null,cljs.core.dissoc.call(null,G__55277,"\uFDD0'xscale","\uFDD0'zscale","\uFDD0'xsegments","\uFDD0'zsegments")));
});
doll.client.lib.types.Plane;
