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
var this__447418 = this;
var h__2203__auto____447419 = this__447418.__hash;
if(!((h__2203__auto____447419 == null)))
{return h__2203__auto____447419;
} else
{var h__2203__auto____447420 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__447418.__hash = h__2203__auto____447420;
return h__2203__auto____447420;
}
});
doll.client.lib.types.Model.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__447421 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Model.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k447416,else__2341__auto__){
var this__447422 = this;
if((k447416 === "\uFDD0'field-atom"))
{return this__447422.field_atom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__447422.__extmap,k447416,else__2341__auto__);
} else
{return null;
}
}
});
doll.client.lib.types.Model.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__447415){
var this__447423 = this;
var pred__447424__447427 = cljs.core.identical_QMARK_;
var expr__447425__447428 = k__2346__auto__;
if(pred__447424__447427.call(null,"\uFDD0'field-atom",expr__447425__447428))
{return (new doll.client.lib.types.Model(G__447415,this__447423.__meta,this__447423.__extmap,null));
} else
{return (new doll.client.lib.types.Model(this__447423.field_atom,this__447423.__meta,cljs.core.assoc.call(null,this__447423.__extmap,k__2346__auto__,G__447415),null));
}
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$ = true;
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$set_field$arity$3 = (function (self,field,value){
var this__447429 = this;
return cljs.core.swap_BANG_.call(null,this__447429.field_atom,cljs.core.assoc,field,value);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$set_fields$arity$2 = (function (self,fvs){
var this__447430 = this;
return cljs.core.swap_BANG_.call(null,this__447430.field_atom,(function (p1__447410_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__447410_SHARP_,fvs);
}));
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$get_field$arity$2 = (function (self,value){
var this__447431 = this;
return cljs.core.deref.call(null,this__447431.field_atom).call(null,value);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$get_fields$arity$2 = (function (self,fields){
var this__447432 = this;
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,this__447432.field_atom),fields);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$update_field$arity$3 = (function (self,field,function$){
var this__447433 = this;
return cljs.core.swap_BANG_.call(null,this__447433.field_atom,cljs.core.update_in,cljs.core.PersistentVector.fromArray([field], true),function$);
});
doll.client.lib.types.Model.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__447434 = this;
var pr_pair__2360__auto____447435 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____447435,[cljs.core.str("#"),cljs.core.str("Model"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__447434.field_atom)], true),this__447434.__extmap));
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$Event$ = true;
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$Event$on$arity$4 = (function (self,watch_id,should_react_QMARK_,reaction){
var this__447436 = this;
return cljs.core.add_watch.call(null,this__447436.field_atom,watch_id,(function (p1__447413_SHARP_,p2__447414_SHARP_,p3__447411_SHARP_,p4__447412_SHARP_){
if(cljs.core.truth_(should_react_QMARK_.call(null,p3__447411_SHARP_,p4__447412_SHARP_)))
{return reaction.call(null,p4__447412_SHARP_);
} else
{return null;
}
}));
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$Event$off$arity$2 = (function (self,watch_id){
var this__447437 = this;
return cljs.core.remove_watch.call(null,this__447437.field_atom,watch_id);
});
doll.client.lib.types.Model.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__447438 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Model.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__447439 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__447439.field_atom)], true),this__447439.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__447440 = this;
var pr_pair__2354__auto____447441 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____447441,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Model"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__447440.field_atom)], true),this__447440.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__447442 = this;
return (1 + cljs.core.count.call(null,this__447442.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__447443 = this;
if(cljs.core.truth_((function (){var and__3822__auto____447444 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____447444))
{var and__3822__auto____447445 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____447445)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____447445;
}
} else
{return and__3822__auto____447444;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Model.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__447415){
var this__447446 = this;
return (new doll.client.lib.types.Model(this__447446.field_atom,G__447415,this__447446.__extmap,this__447446.__hash));
});
doll.client.lib.types.Model.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__447447 = this;
return this__447447.__meta;
});
doll.client.lib.types.Model.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__447448 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'field-atom"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__447448.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Model(this__447448.field_atom,this__447448.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__447448.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_Model = (function map__GT_Model(G__447417){
return (new doll.client.lib.types.Model((new cljs.core.Keyword("\uFDD0'field-atom")).call(null,G__447417),null,cljs.core.dissoc.call(null,G__447417,"\uFDD0'field-atom")));
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
var this__447452 = this;
var h__2203__auto____447453 = this__447452.__hash;
if(!((h__2203__auto____447453 == null)))
{return h__2203__auto____447453;
} else
{var h__2203__auto____447454 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__447452.__hash = h__2203__auto____447454;
return h__2203__auto____447454;
}
});
doll.client.lib.types.View.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__447455 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.View.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k447450,else__2341__auto__){
var this__447456 = this;
if((k447450 === "\uFDD0'$el"))
{return this__447456.$el;
} else
{if((k447450 === "\uFDD0'model"))
{return this__447456.model;
} else
{if((k447450 === "\uFDD0'options-atom"))
{return this__447456.options_atom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__447456.__extmap,k447450,else__2341__auto__);
} else
{return null;
}
}
}
}
});
doll.client.lib.types.View.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__447449){
var this__447457 = this;
var pred__447458__447461 = cljs.core.identical_QMARK_;
var expr__447459__447462 = k__2346__auto__;
if(pred__447458__447461.call(null,"\uFDD0'$el",expr__447459__447462))
{return (new doll.client.lib.types.View(G__447449,this__447457.model,this__447457.options_atom,this__447457.__meta,this__447457.__extmap,null));
} else
{if(pred__447458__447461.call(null,"\uFDD0'model",expr__447459__447462))
{return (new doll.client.lib.types.View(this__447457.$el,G__447449,this__447457.options_atom,this__447457.__meta,this__447457.__extmap,null));
} else
{if(pred__447458__447461.call(null,"\uFDD0'options-atom",expr__447459__447462))
{return (new doll.client.lib.types.View(this__447457.$el,this__447457.model,G__447449,this__447457.__meta,this__447457.__extmap,null));
} else
{return (new doll.client.lib.types.View(this__447457.$el,this__447457.model,this__447457.options_atom,this__447457.__meta,cljs.core.assoc.call(null,this__447457.__extmap,k__2346__auto__,G__447449),null));
}
}
}
});
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$ = true;
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$set_field$arity$3 = (function (self,field,value){
var this__447463 = this;
return cljs.core.swap_BANG_.call(null,this__447463.options_atom,cljs.core.assoc,field,value);
});
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$get_field$arity$2 = (function (self,value){
var this__447464 = this;
return cljs.core.deref.call(null,this__447464.options_atom).call(null,value);
});
doll.client.lib.types.View.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__447465 = this;
var pr_pair__2360__auto____447466 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____447466,[cljs.core.str("#"),cljs.core.str("View"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__447465.$el),cljs.core.vector.call(null,"\uFDD0'model",this__447465.model),cljs.core.vector.call(null,"\uFDD0'options-atom",this__447465.options_atom)], true),this__447465.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__447467 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.View.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__447468 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__447468.$el),cljs.core.vector.call(null,"\uFDD0'model",this__447468.model),cljs.core.vector.call(null,"\uFDD0'options-atom",this__447468.options_atom)], true),this__447468.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__447469 = this;
var pr_pair__2354__auto____447470 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____447470,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.View"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__447469.$el),cljs.core.vector.call(null,"\uFDD0'model",this__447469.model),cljs.core.vector.call(null,"\uFDD0'options-atom",this__447469.options_atom)], true),this__447469.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__447471 = this;
return (3 + cljs.core.count.call(null,this__447471.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__447472 = this;
if(cljs.core.truth_((function (){var and__3822__auto____447473 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____447473))
{var and__3822__auto____447474 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____447474)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____447474;
}
} else
{return and__3822__auto____447473;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.View.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__447449){
var this__447475 = this;
return (new doll.client.lib.types.View(this__447475.$el,this__447475.model,this__447475.options_atom,G__447449,this__447475.__extmap,this__447475.__hash));
});
doll.client.lib.types.View.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__447476 = this;
return this__447476.__meta;
});
doll.client.lib.types.View.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__447477 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'model","\uFDD0'$el","\uFDD0'options-atom"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__447477.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.View(this__447477.$el,this__447477.model,this__447477.options_atom,this__447477.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__447477.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_View = (function map__GT_View(G__447451){
return (new doll.client.lib.types.View((new cljs.core.Keyword("\uFDD0'$el")).call(null,G__447451),(new cljs.core.Keyword("\uFDD0'model")).call(null,G__447451),(new cljs.core.Keyword("\uFDD0'options-atom")).call(null,G__447451),null,cljs.core.dissoc.call(null,G__447451,"\uFDD0'$el","\uFDD0'model","\uFDD0'options-atom")));
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
var this__447481 = this;
var h__2203__auto____447482 = this__447481.__hash;
if(!((h__2203__auto____447482 == null)))
{return h__2203__auto____447482;
} else
{var h__2203__auto____447483 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__447481.__hash = h__2203__auto____447483;
return h__2203__auto____447483;
}
});
doll.client.lib.types.Cube.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__447484 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Cube.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k447479,else__2341__auto__){
var this__447485 = this;
if((k447479 === "\uFDD0'xscale"))
{return this__447485.xscale;
} else
{if((k447479 === "\uFDD0'yscale"))
{return this__447485.yscale;
} else
{if((k447479 === "\uFDD0'zscale"))
{return this__447485.zscale;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__447485.__extmap,k447479,else__2341__auto__);
} else
{return null;
}
}
}
}
});
doll.client.lib.types.Cube.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__447478){
var this__447486 = this;
var pred__447487__447490 = cljs.core.identical_QMARK_;
var expr__447488__447491 = k__2346__auto__;
if(pred__447487__447490.call(null,"\uFDD0'xscale",expr__447488__447491))
{return (new doll.client.lib.types.Cube(G__447478,this__447486.yscale,this__447486.zscale,this__447486.__meta,this__447486.__extmap,null));
} else
{if(pred__447487__447490.call(null,"\uFDD0'yscale",expr__447488__447491))
{return (new doll.client.lib.types.Cube(this__447486.xscale,G__447478,this__447486.zscale,this__447486.__meta,this__447486.__extmap,null));
} else
{if(pred__447487__447490.call(null,"\uFDD0'zscale",expr__447488__447491))
{return (new doll.client.lib.types.Cube(this__447486.xscale,this__447486.yscale,G__447478,this__447486.__meta,this__447486.__extmap,null));
} else
{return (new doll.client.lib.types.Cube(this__447486.xscale,this__447486.yscale,this__447486.zscale,this__447486.__meta,cljs.core.assoc.call(null,this__447486.__extmap,k__2346__auto__,G__447478),null));
}
}
}
});
doll.client.lib.types.Cube.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__447492 = this;
var pr_pair__2360__auto____447493 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____447493,[cljs.core.str("#"),cljs.core.str("Cube"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__447492.xscale),cljs.core.vector.call(null,"\uFDD0'yscale",this__447492.yscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__447492.zscale)], true),this__447492.__extmap));
});
doll.client.lib.types.Cube.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__447494 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Cube.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__447495 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__447495.xscale),cljs.core.vector.call(null,"\uFDD0'yscale",this__447495.yscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__447495.zscale)], true),this__447495.__extmap));
});
doll.client.lib.types.Cube.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__447496 = this;
var pr_pair__2354__auto____447497 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____447497,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Cube"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__447496.xscale),cljs.core.vector.call(null,"\uFDD0'yscale",this__447496.yscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__447496.zscale)], true),this__447496.__extmap));
});
doll.client.lib.types.Cube.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__447498 = this;
return (3 + cljs.core.count.call(null,this__447498.__extmap));
});
doll.client.lib.types.Cube.prototype.doll$client$lib$protocols$Shape$ = true;
doll.client.lib.types.Cube.prototype.doll$client$lib$protocols$Shape$draw$arity$1 = (function (self){
var this__447499 = this;
return (new THREE.CubeGeometry(this__447499.xscale,this__447499.yscale,this__447499.zscale));
});
doll.client.lib.types.Cube.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__447500 = this;
if(cljs.core.truth_((function (){var and__3822__auto____447501 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____447501))
{var and__3822__auto____447502 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____447502)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____447502;
}
} else
{return and__3822__auto____447501;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Cube.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__447478){
var this__447503 = this;
return (new doll.client.lib.types.Cube(this__447503.xscale,this__447503.yscale,this__447503.zscale,G__447478,this__447503.__extmap,this__447503.__hash));
});
doll.client.lib.types.Cube.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__447504 = this;
return this__447504.__meta;
});
doll.client.lib.types.Cube.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__447505 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'zscale","\uFDD0'xscale","\uFDD0'yscale"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__447505.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Cube(this__447505.xscale,this__447505.yscale,this__447505.zscale,this__447505.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__447505.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_Cube = (function map__GT_Cube(G__447480){
return (new doll.client.lib.types.Cube((new cljs.core.Keyword("\uFDD0'xscale")).call(null,G__447480),(new cljs.core.Keyword("\uFDD0'yscale")).call(null,G__447480),(new cljs.core.Keyword("\uFDD0'zscale")).call(null,G__447480),null,cljs.core.dissoc.call(null,G__447480,"\uFDD0'xscale","\uFDD0'yscale","\uFDD0'zscale")));
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
var this__447509 = this;
var h__2203__auto____447510 = this__447509.__hash;
if(!((h__2203__auto____447510 == null)))
{return h__2203__auto____447510;
} else
{var h__2203__auto____447511 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__447509.__hash = h__2203__auto____447511;
return h__2203__auto____447511;
}
});
doll.client.lib.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__447512 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k447507,else__2341__auto__){
var this__447513 = this;
if((k447507 === "\uFDD0'xscale"))
{return this__447513.xscale;
} else
{if((k447507 === "\uFDD0'zscale"))
{return this__447513.zscale;
} else
{if((k447507 === "\uFDD0'xsegments"))
{return this__447513.xsegments;
} else
{if((k447507 === "\uFDD0'zsegments"))
{return this__447513.zsegments;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__447513.__extmap,k447507,else__2341__auto__);
} else
{return null;
}
}
}
}
}
});
doll.client.lib.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__447506){
var this__447514 = this;
var pred__447515__447518 = cljs.core.identical_QMARK_;
var expr__447516__447519 = k__2346__auto__;
if(pred__447515__447518.call(null,"\uFDD0'xscale",expr__447516__447519))
{return (new doll.client.lib.types.Plane(G__447506,this__447514.zscale,this__447514.xsegments,this__447514.zsegments,this__447514.__meta,this__447514.__extmap,null));
} else
{if(pred__447515__447518.call(null,"\uFDD0'zscale",expr__447516__447519))
{return (new doll.client.lib.types.Plane(this__447514.xscale,G__447506,this__447514.xsegments,this__447514.zsegments,this__447514.__meta,this__447514.__extmap,null));
} else
{if(pred__447515__447518.call(null,"\uFDD0'xsegments",expr__447516__447519))
{return (new doll.client.lib.types.Plane(this__447514.xscale,this__447514.zscale,G__447506,this__447514.zsegments,this__447514.__meta,this__447514.__extmap,null));
} else
{if(pred__447515__447518.call(null,"\uFDD0'zsegments",expr__447516__447519))
{return (new doll.client.lib.types.Plane(this__447514.xscale,this__447514.zscale,this__447514.xsegments,G__447506,this__447514.__meta,this__447514.__extmap,null));
} else
{return (new doll.client.lib.types.Plane(this__447514.xscale,this__447514.zscale,this__447514.xsegments,this__447514.zsegments,this__447514.__meta,cljs.core.assoc.call(null,this__447514.__extmap,k__2346__auto__,G__447506),null));
}
}
}
}
});
doll.client.lib.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__447520 = this;
var pr_pair__2360__auto____447521 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____447521,[cljs.core.str("#"),cljs.core.str("Plane"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__447520.xscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__447520.zscale),cljs.core.vector.call(null,"\uFDD0'xsegments",this__447520.xsegments),cljs.core.vector.call(null,"\uFDD0'zsegments",this__447520.zsegments)], true),this__447520.__extmap));
});
doll.client.lib.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__447522 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__447523 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__447523.xscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__447523.zscale),cljs.core.vector.call(null,"\uFDD0'xsegments",this__447523.xsegments),cljs.core.vector.call(null,"\uFDD0'zsegments",this__447523.zsegments)], true),this__447523.__extmap));
});
doll.client.lib.types.Plane.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__447524 = this;
var pr_pair__2354__auto____447525 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____447525,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Plane"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__447524.xscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__447524.zscale),cljs.core.vector.call(null,"\uFDD0'xsegments",this__447524.xsegments),cljs.core.vector.call(null,"\uFDD0'zsegments",this__447524.zsegments)], true),this__447524.__extmap));
});
doll.client.lib.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__447526 = this;
return (4 + cljs.core.count.call(null,this__447526.__extmap));
});
doll.client.lib.types.Plane.prototype.doll$client$lib$protocols$Shape$ = true;
doll.client.lib.types.Plane.prototype.doll$client$lib$protocols$Shape$draw$arity$1 = (function (self){
var this__447527 = this;
return (new THREE.PlaneGeometry(this__447527.xscale,this__447527.zscale,this__447527.xsegments,this__447527.zsegments));
});
doll.client.lib.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__447528 = this;
if(cljs.core.truth_((function (){var and__3822__auto____447529 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____447529))
{var and__3822__auto____447530 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____447530)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____447530;
}
} else
{return and__3822__auto____447529;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__447506){
var this__447531 = this;
return (new doll.client.lib.types.Plane(this__447531.xscale,this__447531.zscale,this__447531.xsegments,this__447531.zsegments,G__447506,this__447531.__extmap,this__447531.__hash));
});
doll.client.lib.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__447532 = this;
return this__447532.__meta;
});
doll.client.lib.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__447533 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'xsegments","\uFDD0'zscale","\uFDD0'xscale","\uFDD0'zsegments"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__447533.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Plane(this__447533.xscale,this__447533.zscale,this__447533.xsegments,this__447533.zsegments,this__447533.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__447533.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_Plane = (function map__GT_Plane(G__447508){
return (new doll.client.lib.types.Plane((new cljs.core.Keyword("\uFDD0'xscale")).call(null,G__447508),(new cljs.core.Keyword("\uFDD0'zscale")).call(null,G__447508),(new cljs.core.Keyword("\uFDD0'xsegments")).call(null,G__447508),(new cljs.core.Keyword("\uFDD0'zsegments")).call(null,G__447508),null,cljs.core.dissoc.call(null,G__447508,"\uFDD0'xscale","\uFDD0'zscale","\uFDD0'xsegments","\uFDD0'zsegments")));
});
doll.client.lib.types.Plane;
