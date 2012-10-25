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
var this__556167 = this;
var h__2203__auto____556168 = this__556167.__hash;
if(!((h__2203__auto____556168 == null)))
{return h__2203__auto____556168;
} else
{var h__2203__auto____556169 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__556167.__hash = h__2203__auto____556169;
return h__2203__auto____556169;
}
});
doll.client.lib.types.Model.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__556170 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Model.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k556165,else__2341__auto__){
var this__556171 = this;
if((k556165 === "\uFDD0'field-atom"))
{return this__556171.field_atom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__556171.__extmap,k556165,else__2341__auto__);
} else
{return null;
}
}
});
doll.client.lib.types.Model.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__556164){
var this__556172 = this;
var pred__556173__556176 = cljs.core.identical_QMARK_;
var expr__556174__556177 = k__2346__auto__;
if(pred__556173__556176.call(null,"\uFDD0'field-atom",expr__556174__556177))
{return (new doll.client.lib.types.Model(G__556164,this__556172.__meta,this__556172.__extmap,null));
} else
{return (new doll.client.lib.types.Model(this__556172.field_atom,this__556172.__meta,cljs.core.assoc.call(null,this__556172.__extmap,k__2346__auto__,G__556164),null));
}
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$ = true;
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$set_field$arity$3 = (function (self,field,value){
var this__556178 = this;
return cljs.core.swap_BANG_.call(null,this__556178.field_atom,cljs.core.assoc,field,value);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$set_fields$arity$2 = (function (self,fvs){
var this__556179 = this;
return cljs.core.swap_BANG_.call(null,this__556179.field_atom,(function (p1__556159_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__556159_SHARP_,fvs);
}));
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$get_field$arity$2 = (function (self,value){
var this__556180 = this;
return cljs.core.deref.call(null,this__556180.field_atom).call(null,value);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$get_fields$arity$2 = (function (self,fields){
var this__556181 = this;
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,this__556181.field_atom),fields);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$update_field$arity$3 = (function (self,field,function$){
var this__556182 = this;
return cljs.core.swap_BANG_.call(null,this__556182.field_atom,cljs.core.update_in,cljs.core.PersistentVector.fromArray([field], true),function$);
});
doll.client.lib.types.Model.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__556183 = this;
var pr_pair__2360__auto____556184 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____556184,[cljs.core.str("#"),cljs.core.str("Model"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__556183.field_atom)], true),this__556183.__extmap));
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$Event$ = true;
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$Event$on$arity$4 = (function (self,watch_id,should_react_QMARK_,reaction){
var this__556185 = this;
return cljs.core.add_watch.call(null,this__556185.field_atom,watch_id,(function (p1__556162_SHARP_,p2__556163_SHARP_,p3__556160_SHARP_,p4__556161_SHARP_){
if(cljs.core.truth_(should_react_QMARK_.call(null,p3__556160_SHARP_,p4__556161_SHARP_)))
{return reaction.call(null,p4__556161_SHARP_);
} else
{return null;
}
}));
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$Event$off$arity$2 = (function (self,watch_id){
var this__556186 = this;
return cljs.core.remove_watch.call(null,this__556186.field_atom,watch_id);
});
doll.client.lib.types.Model.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__556187 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Model.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__556188 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__556188.field_atom)], true),this__556188.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__556189 = this;
var pr_pair__2354__auto____556190 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____556190,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Model"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__556189.field_atom)], true),this__556189.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__556191 = this;
return (1 + cljs.core.count.call(null,this__556191.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__556192 = this;
if(cljs.core.truth_((function (){var and__3822__auto____556193 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____556193))
{var and__3822__auto____556194 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____556194)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____556194;
}
} else
{return and__3822__auto____556193;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Model.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__556164){
var this__556195 = this;
return (new doll.client.lib.types.Model(this__556195.field_atom,G__556164,this__556195.__extmap,this__556195.__hash));
});
doll.client.lib.types.Model.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__556196 = this;
return this__556196.__meta;
});
doll.client.lib.types.Model.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__556197 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'field-atom"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__556197.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Model(this__556197.field_atom,this__556197.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__556197.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_Model = (function map__GT_Model(G__556166){
return (new doll.client.lib.types.Model((new cljs.core.Keyword("\uFDD0'field-atom")).call(null,G__556166),null,cljs.core.dissoc.call(null,G__556166,"\uFDD0'field-atom")));
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
var this__556201 = this;
var h__2203__auto____556202 = this__556201.__hash;
if(!((h__2203__auto____556202 == null)))
{return h__2203__auto____556202;
} else
{var h__2203__auto____556203 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__556201.__hash = h__2203__auto____556203;
return h__2203__auto____556203;
}
});
doll.client.lib.types.View.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__556204 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.View.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k556199,else__2341__auto__){
var this__556205 = this;
if((k556199 === "\uFDD0'$el"))
{return this__556205.$el;
} else
{if((k556199 === "\uFDD0'model"))
{return this__556205.model;
} else
{if((k556199 === "\uFDD0'options-atom"))
{return this__556205.options_atom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__556205.__extmap,k556199,else__2341__auto__);
} else
{return null;
}
}
}
}
});
doll.client.lib.types.View.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__556198){
var this__556206 = this;
var pred__556207__556210 = cljs.core.identical_QMARK_;
var expr__556208__556211 = k__2346__auto__;
if(pred__556207__556210.call(null,"\uFDD0'$el",expr__556208__556211))
{return (new doll.client.lib.types.View(G__556198,this__556206.model,this__556206.options_atom,this__556206.__meta,this__556206.__extmap,null));
} else
{if(pred__556207__556210.call(null,"\uFDD0'model",expr__556208__556211))
{return (new doll.client.lib.types.View(this__556206.$el,G__556198,this__556206.options_atom,this__556206.__meta,this__556206.__extmap,null));
} else
{if(pred__556207__556210.call(null,"\uFDD0'options-atom",expr__556208__556211))
{return (new doll.client.lib.types.View(this__556206.$el,this__556206.model,G__556198,this__556206.__meta,this__556206.__extmap,null));
} else
{return (new doll.client.lib.types.View(this__556206.$el,this__556206.model,this__556206.options_atom,this__556206.__meta,cljs.core.assoc.call(null,this__556206.__extmap,k__2346__auto__,G__556198),null));
}
}
}
});
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$ = true;
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$set_field$arity$3 = (function (self,field,value){
var this__556212 = this;
return cljs.core.swap_BANG_.call(null,this__556212.options_atom,cljs.core.assoc,field,value);
});
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$get_field$arity$2 = (function (self,value){
var this__556213 = this;
return cljs.core.deref.call(null,this__556213.options_atom).call(null,value);
});
doll.client.lib.types.View.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__556214 = this;
var pr_pair__2360__auto____556215 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____556215,[cljs.core.str("#"),cljs.core.str("View"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__556214.$el),cljs.core.vector.call(null,"\uFDD0'model",this__556214.model),cljs.core.vector.call(null,"\uFDD0'options-atom",this__556214.options_atom)], true),this__556214.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__556216 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.View.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__556217 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__556217.$el),cljs.core.vector.call(null,"\uFDD0'model",this__556217.model),cljs.core.vector.call(null,"\uFDD0'options-atom",this__556217.options_atom)], true),this__556217.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__556218 = this;
var pr_pair__2354__auto____556219 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____556219,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.View"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__556218.$el),cljs.core.vector.call(null,"\uFDD0'model",this__556218.model),cljs.core.vector.call(null,"\uFDD0'options-atom",this__556218.options_atom)], true),this__556218.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__556220 = this;
return (3 + cljs.core.count.call(null,this__556220.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__556221 = this;
if(cljs.core.truth_((function (){var and__3822__auto____556222 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____556222))
{var and__3822__auto____556223 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____556223)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____556223;
}
} else
{return and__3822__auto____556222;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.View.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__556198){
var this__556224 = this;
return (new doll.client.lib.types.View(this__556224.$el,this__556224.model,this__556224.options_atom,G__556198,this__556224.__extmap,this__556224.__hash));
});
doll.client.lib.types.View.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__556225 = this;
return this__556225.__meta;
});
doll.client.lib.types.View.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__556226 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'model","\uFDD0'$el","\uFDD0'options-atom"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__556226.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.View(this__556226.$el,this__556226.model,this__556226.options_atom,this__556226.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__556226.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_View = (function map__GT_View(G__556200){
return (new doll.client.lib.types.View((new cljs.core.Keyword("\uFDD0'$el")).call(null,G__556200),(new cljs.core.Keyword("\uFDD0'model")).call(null,G__556200),(new cljs.core.Keyword("\uFDD0'options-atom")).call(null,G__556200),null,cljs.core.dissoc.call(null,G__556200,"\uFDD0'$el","\uFDD0'model","\uFDD0'options-atom")));
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
var this__556230 = this;
var h__2203__auto____556231 = this__556230.__hash;
if(!((h__2203__auto____556231 == null)))
{return h__2203__auto____556231;
} else
{var h__2203__auto____556232 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__556230.__hash = h__2203__auto____556232;
return h__2203__auto____556232;
}
});
doll.client.lib.types.Cube.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__556233 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Cube.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k556228,else__2341__auto__){
var this__556234 = this;
if((k556228 === "\uFDD0'xscale"))
{return this__556234.xscale;
} else
{if((k556228 === "\uFDD0'yscale"))
{return this__556234.yscale;
} else
{if((k556228 === "\uFDD0'zscale"))
{return this__556234.zscale;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__556234.__extmap,k556228,else__2341__auto__);
} else
{return null;
}
}
}
}
});
doll.client.lib.types.Cube.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__556227){
var this__556235 = this;
var pred__556236__556239 = cljs.core.identical_QMARK_;
var expr__556237__556240 = k__2346__auto__;
if(pred__556236__556239.call(null,"\uFDD0'xscale",expr__556237__556240))
{return (new doll.client.lib.types.Cube(G__556227,this__556235.yscale,this__556235.zscale,this__556235.__meta,this__556235.__extmap,null));
} else
{if(pred__556236__556239.call(null,"\uFDD0'yscale",expr__556237__556240))
{return (new doll.client.lib.types.Cube(this__556235.xscale,G__556227,this__556235.zscale,this__556235.__meta,this__556235.__extmap,null));
} else
{if(pred__556236__556239.call(null,"\uFDD0'zscale",expr__556237__556240))
{return (new doll.client.lib.types.Cube(this__556235.xscale,this__556235.yscale,G__556227,this__556235.__meta,this__556235.__extmap,null));
} else
{return (new doll.client.lib.types.Cube(this__556235.xscale,this__556235.yscale,this__556235.zscale,this__556235.__meta,cljs.core.assoc.call(null,this__556235.__extmap,k__2346__auto__,G__556227),null));
}
}
}
});
doll.client.lib.types.Cube.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__556241 = this;
var pr_pair__2360__auto____556242 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____556242,[cljs.core.str("#"),cljs.core.str("Cube"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__556241.xscale),cljs.core.vector.call(null,"\uFDD0'yscale",this__556241.yscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__556241.zscale)], true),this__556241.__extmap));
});
doll.client.lib.types.Cube.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__556243 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Cube.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__556244 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__556244.xscale),cljs.core.vector.call(null,"\uFDD0'yscale",this__556244.yscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__556244.zscale)], true),this__556244.__extmap));
});
doll.client.lib.types.Cube.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__556245 = this;
var pr_pair__2354__auto____556246 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____556246,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Cube"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__556245.xscale),cljs.core.vector.call(null,"\uFDD0'yscale",this__556245.yscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__556245.zscale)], true),this__556245.__extmap));
});
doll.client.lib.types.Cube.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__556247 = this;
return (3 + cljs.core.count.call(null,this__556247.__extmap));
});
doll.client.lib.types.Cube.prototype.doll$client$lib$protocols$Shape$ = true;
doll.client.lib.types.Cube.prototype.doll$client$lib$protocols$Shape$draw$arity$1 = (function (self){
var this__556248 = this;
return (new THREE.CubeGeometry(this__556248.xscale,this__556248.yscale,this__556248.zscale));
});
doll.client.lib.types.Cube.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__556249 = this;
if(cljs.core.truth_((function (){var and__3822__auto____556250 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____556250))
{var and__3822__auto____556251 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____556251)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____556251;
}
} else
{return and__3822__auto____556250;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Cube.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__556227){
var this__556252 = this;
return (new doll.client.lib.types.Cube(this__556252.xscale,this__556252.yscale,this__556252.zscale,G__556227,this__556252.__extmap,this__556252.__hash));
});
doll.client.lib.types.Cube.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__556253 = this;
return this__556253.__meta;
});
doll.client.lib.types.Cube.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__556254 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'zscale","\uFDD0'xscale","\uFDD0'yscale"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__556254.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Cube(this__556254.xscale,this__556254.yscale,this__556254.zscale,this__556254.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__556254.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_Cube = (function map__GT_Cube(G__556229){
return (new doll.client.lib.types.Cube((new cljs.core.Keyword("\uFDD0'xscale")).call(null,G__556229),(new cljs.core.Keyword("\uFDD0'yscale")).call(null,G__556229),(new cljs.core.Keyword("\uFDD0'zscale")).call(null,G__556229),null,cljs.core.dissoc.call(null,G__556229,"\uFDD0'xscale","\uFDD0'yscale","\uFDD0'zscale")));
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
var this__556258 = this;
var h__2203__auto____556259 = this__556258.__hash;
if(!((h__2203__auto____556259 == null)))
{return h__2203__auto____556259;
} else
{var h__2203__auto____556260 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__556258.__hash = h__2203__auto____556260;
return h__2203__auto____556260;
}
});
doll.client.lib.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__556261 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k556256,else__2341__auto__){
var this__556262 = this;
if((k556256 === "\uFDD0'xscale"))
{return this__556262.xscale;
} else
{if((k556256 === "\uFDD0'zscale"))
{return this__556262.zscale;
} else
{if((k556256 === "\uFDD0'xsegments"))
{return this__556262.xsegments;
} else
{if((k556256 === "\uFDD0'zsegments"))
{return this__556262.zsegments;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__556262.__extmap,k556256,else__2341__auto__);
} else
{return null;
}
}
}
}
}
});
doll.client.lib.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__556255){
var this__556263 = this;
var pred__556264__556267 = cljs.core.identical_QMARK_;
var expr__556265__556268 = k__2346__auto__;
if(pred__556264__556267.call(null,"\uFDD0'xscale",expr__556265__556268))
{return (new doll.client.lib.types.Plane(G__556255,this__556263.zscale,this__556263.xsegments,this__556263.zsegments,this__556263.__meta,this__556263.__extmap,null));
} else
{if(pred__556264__556267.call(null,"\uFDD0'zscale",expr__556265__556268))
{return (new doll.client.lib.types.Plane(this__556263.xscale,G__556255,this__556263.xsegments,this__556263.zsegments,this__556263.__meta,this__556263.__extmap,null));
} else
{if(pred__556264__556267.call(null,"\uFDD0'xsegments",expr__556265__556268))
{return (new doll.client.lib.types.Plane(this__556263.xscale,this__556263.zscale,G__556255,this__556263.zsegments,this__556263.__meta,this__556263.__extmap,null));
} else
{if(pred__556264__556267.call(null,"\uFDD0'zsegments",expr__556265__556268))
{return (new doll.client.lib.types.Plane(this__556263.xscale,this__556263.zscale,this__556263.xsegments,G__556255,this__556263.__meta,this__556263.__extmap,null));
} else
{return (new doll.client.lib.types.Plane(this__556263.xscale,this__556263.zscale,this__556263.xsegments,this__556263.zsegments,this__556263.__meta,cljs.core.assoc.call(null,this__556263.__extmap,k__2346__auto__,G__556255),null));
}
}
}
}
});
doll.client.lib.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__556269 = this;
var pr_pair__2360__auto____556270 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____556270,[cljs.core.str("#"),cljs.core.str("Plane"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__556269.xscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__556269.zscale),cljs.core.vector.call(null,"\uFDD0'xsegments",this__556269.xsegments),cljs.core.vector.call(null,"\uFDD0'zsegments",this__556269.zsegments)], true),this__556269.__extmap));
});
doll.client.lib.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__556271 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__556272 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__556272.xscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__556272.zscale),cljs.core.vector.call(null,"\uFDD0'xsegments",this__556272.xsegments),cljs.core.vector.call(null,"\uFDD0'zsegments",this__556272.zsegments)], true),this__556272.__extmap));
});
doll.client.lib.types.Plane.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__556273 = this;
var pr_pair__2354__auto____556274 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____556274,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Plane"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__556273.xscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__556273.zscale),cljs.core.vector.call(null,"\uFDD0'xsegments",this__556273.xsegments),cljs.core.vector.call(null,"\uFDD0'zsegments",this__556273.zsegments)], true),this__556273.__extmap));
});
doll.client.lib.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__556275 = this;
return (4 + cljs.core.count.call(null,this__556275.__extmap));
});
doll.client.lib.types.Plane.prototype.doll$client$lib$protocols$Shape$ = true;
doll.client.lib.types.Plane.prototype.doll$client$lib$protocols$Shape$draw$arity$1 = (function (self){
var this__556276 = this;
return (new THREE.PlaneGeometry(this__556276.xscale,this__556276.zscale,this__556276.xsegments,this__556276.zsegments));
});
doll.client.lib.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__556277 = this;
if(cljs.core.truth_((function (){var and__3822__auto____556278 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____556278))
{var and__3822__auto____556279 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____556279)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____556279;
}
} else
{return and__3822__auto____556278;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__556255){
var this__556280 = this;
return (new doll.client.lib.types.Plane(this__556280.xscale,this__556280.zscale,this__556280.xsegments,this__556280.zsegments,G__556255,this__556280.__extmap,this__556280.__hash));
});
doll.client.lib.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__556281 = this;
return this__556281.__meta;
});
doll.client.lib.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__556282 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'xsegments","\uFDD0'zscale","\uFDD0'xscale","\uFDD0'zsegments"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__556282.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Plane(this__556282.xscale,this__556282.zscale,this__556282.xsegments,this__556282.zsegments,this__556282.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__556282.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_Plane = (function map__GT_Plane(G__556257){
return (new doll.client.lib.types.Plane((new cljs.core.Keyword("\uFDD0'xscale")).call(null,G__556257),(new cljs.core.Keyword("\uFDD0'zscale")).call(null,G__556257),(new cljs.core.Keyword("\uFDD0'xsegments")).call(null,G__556257),(new cljs.core.Keyword("\uFDD0'zsegments")).call(null,G__556257),null,cljs.core.dissoc.call(null,G__556257,"\uFDD0'xscale","\uFDD0'zscale","\uFDD0'xsegments","\uFDD0'zsegments")));
});
doll.client.lib.types.Plane;
