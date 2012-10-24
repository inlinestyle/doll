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
var this__111915 = this;
var h__2203__auto____111916 = this__111915.__hash;
if(!((h__2203__auto____111916 == null)))
{return h__2203__auto____111916;
} else
{var h__2203__auto____111917 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__111915.__hash = h__2203__auto____111917;
return h__2203__auto____111917;
}
});
doll.client.lib.types.Model.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__111918 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Model.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k111913,else__2341__auto__){
var this__111919 = this;
if((k111913 === "\uFDD0'field-atom"))
{return this__111919.field_atom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__111919.__extmap,k111913,else__2341__auto__);
} else
{return null;
}
}
});
doll.client.lib.types.Model.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__111912){
var this__111920 = this;
var pred__111921__111924 = cljs.core.identical_QMARK_;
var expr__111922__111925 = k__2346__auto__;
if(pred__111921__111924.call(null,"\uFDD0'field-atom",expr__111922__111925))
{return (new doll.client.lib.types.Model(G__111912,this__111920.__meta,this__111920.__extmap,null));
} else
{return (new doll.client.lib.types.Model(this__111920.field_atom,this__111920.__meta,cljs.core.assoc.call(null,this__111920.__extmap,k__2346__auto__,G__111912),null));
}
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$ = true;
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$set_field$arity$3 = (function (self,field,value){
var this__111926 = this;
return cljs.core.swap_BANG_.call(null,this__111926.field_atom,cljs.core.assoc,field,value);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$set_fields$arity$2 = (function (self,fvs){
var this__111927 = this;
return cljs.core.swap_BANG_.call(null,this__111927.field_atom,(function (p1__111871_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__111871_SHARP_,fvs);
}));
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$get_field$arity$2 = (function (self,value){
var this__111928 = this;
return cljs.core.deref.call(null,this__111928.field_atom).call(null,value);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$get_fields$arity$2 = (function (self,fields){
var this__111929 = this;
return cljs.core.select_keys.call(null,cljs.core.deref.call(null,this__111929.field_atom),fields);
});
doll.client.lib.types.Model.prototype.doll$client$lib$protocols$State$update_field$arity$3 = (function (self,field,function$){
var this__111930 = this;
return cljs.core.swap_BANG_.call(null,this__111930.field_atom,cljs.core.update_in,cljs.core.PersistentVector.fromArray([field], true),function$);
});
doll.client.lib.types.Model.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__111931 = this;
var pr_pair__2360__auto____111932 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____111932,[cljs.core.str("#"),cljs.core.str("Model"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__111931.field_atom)], true),this__111931.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__111933 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Model.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__111934 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__111934.field_atom)], true),this__111934.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__111935 = this;
var pr_pair__2354__auto____111936 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____111936,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Model"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'field-atom",this__111935.field_atom)], true),this__111935.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__111937 = this;
return (1 + cljs.core.count.call(null,this__111937.__extmap));
});
doll.client.lib.types.Model.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__111938 = this;
if(cljs.core.truth_((function (){var and__3822__auto____111939 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____111939))
{var and__3822__auto____111940 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____111940)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____111940;
}
} else
{return and__3822__auto____111939;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Model.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__111912){
var this__111941 = this;
return (new doll.client.lib.types.Model(this__111941.field_atom,G__111912,this__111941.__extmap,this__111941.__hash));
});
doll.client.lib.types.Model.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__111942 = this;
return this__111942.__meta;
});
doll.client.lib.types.Model.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__111943 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'field-atom"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__111943.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Model(this__111943.field_atom,this__111943.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__111943.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_Model = (function map__GT_Model(G__111914){
return (new doll.client.lib.types.Model((new cljs.core.Keyword("\uFDD0'field-atom")).call(null,G__111914),null,cljs.core.dissoc.call(null,G__111914,"\uFDD0'field-atom")));
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
var this__111947 = this;
var h__2203__auto____111948 = this__111947.__hash;
if(!((h__2203__auto____111948 == null)))
{return h__2203__auto____111948;
} else
{var h__2203__auto____111949 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__111947.__hash = h__2203__auto____111949;
return h__2203__auto____111949;
}
});
doll.client.lib.types.View.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__111950 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.View.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k111945,else__2341__auto__){
var this__111951 = this;
if((k111945 === "\uFDD0'$el"))
{return this__111951.$el;
} else
{if((k111945 === "\uFDD0'model"))
{return this__111951.model;
} else
{if((k111945 === "\uFDD0'options-atom"))
{return this__111951.options_atom;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__111951.__extmap,k111945,else__2341__auto__);
} else
{return null;
}
}
}
}
});
doll.client.lib.types.View.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__111944){
var this__111952 = this;
var pred__111953__111956 = cljs.core.identical_QMARK_;
var expr__111954__111957 = k__2346__auto__;
if(pred__111953__111956.call(null,"\uFDD0'$el",expr__111954__111957))
{return (new doll.client.lib.types.View(G__111944,this__111952.model,this__111952.options_atom,this__111952.__meta,this__111952.__extmap,null));
} else
{if(pred__111953__111956.call(null,"\uFDD0'model",expr__111954__111957))
{return (new doll.client.lib.types.View(this__111952.$el,G__111944,this__111952.options_atom,this__111952.__meta,this__111952.__extmap,null));
} else
{if(pred__111953__111956.call(null,"\uFDD0'options-atom",expr__111954__111957))
{return (new doll.client.lib.types.View(this__111952.$el,this__111952.model,G__111944,this__111952.__meta,this__111952.__extmap,null));
} else
{return (new doll.client.lib.types.View(this__111952.$el,this__111952.model,this__111952.options_atom,this__111952.__meta,cljs.core.assoc.call(null,this__111952.__extmap,k__2346__auto__,G__111944),null));
}
}
}
});
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$ = true;
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$set_field$arity$3 = (function (self,field,value){
var this__111958 = this;
return cljs.core.swap_BANG_.call(null,this__111958.options_atom,cljs.core.assoc,field,value);
});
doll.client.lib.types.View.prototype.doll$client$lib$protocols$State$get_field$arity$2 = (function (self,value){
var this__111959 = this;
return cljs.core.deref.call(null,this__111959.options_atom).call(null,value);
});
doll.client.lib.types.View.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__111960 = this;
var pr_pair__2360__auto____111961 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____111961,[cljs.core.str("#"),cljs.core.str("View"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__111960.$el),cljs.core.vector.call(null,"\uFDD0'model",this__111960.model),cljs.core.vector.call(null,"\uFDD0'options-atom",this__111960.options_atom)], true),this__111960.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__111962 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.View.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__111963 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__111963.$el),cljs.core.vector.call(null,"\uFDD0'model",this__111963.model),cljs.core.vector.call(null,"\uFDD0'options-atom",this__111963.options_atom)], true),this__111963.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__111964 = this;
var pr_pair__2354__auto____111965 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____111965,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.View"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'$el",this__111964.$el),cljs.core.vector.call(null,"\uFDD0'model",this__111964.model),cljs.core.vector.call(null,"\uFDD0'options-atom",this__111964.options_atom)], true),this__111964.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__111966 = this;
return (3 + cljs.core.count.call(null,this__111966.__extmap));
});
doll.client.lib.types.View.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__111967 = this;
if(cljs.core.truth_((function (){var and__3822__auto____111968 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____111968))
{var and__3822__auto____111969 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____111969)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____111969;
}
} else
{return and__3822__auto____111968;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.View.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__111944){
var this__111970 = this;
return (new doll.client.lib.types.View(this__111970.$el,this__111970.model,this__111970.options_atom,G__111944,this__111970.__extmap,this__111970.__hash));
});
doll.client.lib.types.View.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__111971 = this;
return this__111971.__meta;
});
doll.client.lib.types.View.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__111972 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'model","\uFDD0'$el","\uFDD0'options-atom"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__111972.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.View(this__111972.$el,this__111972.model,this__111972.options_atom,this__111972.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__111972.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_View = (function map__GT_View(G__111946){
return (new doll.client.lib.types.View((new cljs.core.Keyword("\uFDD0'$el")).call(null,G__111946),(new cljs.core.Keyword("\uFDD0'model")).call(null,G__111946),(new cljs.core.Keyword("\uFDD0'options-atom")).call(null,G__111946),null,cljs.core.dissoc.call(null,G__111946,"\uFDD0'$el","\uFDD0'model","\uFDD0'options-atom")));
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
var this__111976 = this;
var h__2203__auto____111977 = this__111976.__hash;
if(!((h__2203__auto____111977 == null)))
{return h__2203__auto____111977;
} else
{var h__2203__auto____111978 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__111976.__hash = h__2203__auto____111978;
return h__2203__auto____111978;
}
});
doll.client.lib.types.Cube.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__111979 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Cube.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k111974,else__2341__auto__){
var this__111980 = this;
if((k111974 === "\uFDD0'xscale"))
{return this__111980.xscale;
} else
{if((k111974 === "\uFDD0'yscale"))
{return this__111980.yscale;
} else
{if((k111974 === "\uFDD0'zscale"))
{return this__111980.zscale;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__111980.__extmap,k111974,else__2341__auto__);
} else
{return null;
}
}
}
}
});
doll.client.lib.types.Cube.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__111973){
var this__111981 = this;
var pred__111982__111985 = cljs.core.identical_QMARK_;
var expr__111983__111986 = k__2346__auto__;
if(pred__111982__111985.call(null,"\uFDD0'xscale",expr__111983__111986))
{return (new doll.client.lib.types.Cube(G__111973,this__111981.yscale,this__111981.zscale,this__111981.__meta,this__111981.__extmap,null));
} else
{if(pred__111982__111985.call(null,"\uFDD0'yscale",expr__111983__111986))
{return (new doll.client.lib.types.Cube(this__111981.xscale,G__111973,this__111981.zscale,this__111981.__meta,this__111981.__extmap,null));
} else
{if(pred__111982__111985.call(null,"\uFDD0'zscale",expr__111983__111986))
{return (new doll.client.lib.types.Cube(this__111981.xscale,this__111981.yscale,G__111973,this__111981.__meta,this__111981.__extmap,null));
} else
{return (new doll.client.lib.types.Cube(this__111981.xscale,this__111981.yscale,this__111981.zscale,this__111981.__meta,cljs.core.assoc.call(null,this__111981.__extmap,k__2346__auto__,G__111973),null));
}
}
}
});
doll.client.lib.types.Cube.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__111987 = this;
var pr_pair__2360__auto____111988 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____111988,[cljs.core.str("#"),cljs.core.str("Cube"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__111987.xscale),cljs.core.vector.call(null,"\uFDD0'yscale",this__111987.yscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__111987.zscale)], true),this__111987.__extmap));
});
doll.client.lib.types.Cube.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__111989 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Cube.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__111990 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__111990.xscale),cljs.core.vector.call(null,"\uFDD0'yscale",this__111990.yscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__111990.zscale)], true),this__111990.__extmap));
});
doll.client.lib.types.Cube.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__111991 = this;
var pr_pair__2354__auto____111992 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____111992,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Cube"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__111991.xscale),cljs.core.vector.call(null,"\uFDD0'yscale",this__111991.yscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__111991.zscale)], true),this__111991.__extmap));
});
doll.client.lib.types.Cube.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__111993 = this;
return (3 + cljs.core.count.call(null,this__111993.__extmap));
});
doll.client.lib.types.Cube.prototype.doll$client$lib$protocols$Shape$ = true;
doll.client.lib.types.Cube.prototype.doll$client$lib$protocols$Shape$draw$arity$1 = (function (self){
var this__111994 = this;
return (new THREE.CubeGeometry(this__111994.xscale,this__111994.yscale,this__111994.zscale));
});
doll.client.lib.types.Cube.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__111995 = this;
if(cljs.core.truth_((function (){var and__3822__auto____111996 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____111996))
{var and__3822__auto____111997 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____111997)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____111997;
}
} else
{return and__3822__auto____111996;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Cube.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__111973){
var this__111998 = this;
return (new doll.client.lib.types.Cube(this__111998.xscale,this__111998.yscale,this__111998.zscale,G__111973,this__111998.__extmap,this__111998.__hash));
});
doll.client.lib.types.Cube.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__111999 = this;
return this__111999.__meta;
});
doll.client.lib.types.Cube.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__112000 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'zscale","\uFDD0'xscale","\uFDD0'yscale"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__112000.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Cube(this__112000.xscale,this__112000.yscale,this__112000.zscale,this__112000.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__112000.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_Cube = (function map__GT_Cube(G__111975){
return (new doll.client.lib.types.Cube((new cljs.core.Keyword("\uFDD0'xscale")).call(null,G__111975),(new cljs.core.Keyword("\uFDD0'yscale")).call(null,G__111975),(new cljs.core.Keyword("\uFDD0'zscale")).call(null,G__111975),null,cljs.core.dissoc.call(null,G__111975,"\uFDD0'xscale","\uFDD0'yscale","\uFDD0'zscale")));
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
var this__112004 = this;
var h__2203__auto____112005 = this__112004.__hash;
if(!((h__2203__auto____112005 == null)))
{return h__2203__auto____112005;
} else
{var h__2203__auto____112006 = cljs.core.hash_imap.call(null,this__2333__auto__);
this__112004.__hash = h__2203__auto____112006;
return h__2203__auto____112006;
}
});
doll.client.lib.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2338__auto__,k__2339__auto__){
var this__112007 = this;
return this__2338__auto__.cljs$core$ILookup$_lookup$arity$3(this__2338__auto__,k__2339__auto__,null);
});
doll.client.lib.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2340__auto__,k112002,else__2341__auto__){
var this__112008 = this;
if((k112002 === "\uFDD0'xscale"))
{return this__112008.xscale;
} else
{if((k112002 === "\uFDD0'zscale"))
{return this__112008.zscale;
} else
{if((k112002 === "\uFDD0'xsegments"))
{return this__112008.xsegments;
} else
{if((k112002 === "\uFDD0'zsegments"))
{return this__112008.zsegments;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__112008.__extmap,k112002,else__2341__auto__);
} else
{return null;
}
}
}
}
}
});
doll.client.lib.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2345__auto__,k__2346__auto__,G__112001){
var this__112009 = this;
var pred__112010__112013 = cljs.core.identical_QMARK_;
var expr__112011__112014 = k__2346__auto__;
if(pred__112010__112013.call(null,"\uFDD0'xscale",expr__112011__112014))
{return (new doll.client.lib.types.Plane(G__112001,this__112009.zscale,this__112009.xsegments,this__112009.zsegments,this__112009.__meta,this__112009.__extmap,null));
} else
{if(pred__112010__112013.call(null,"\uFDD0'zscale",expr__112011__112014))
{return (new doll.client.lib.types.Plane(this__112009.xscale,G__112001,this__112009.xsegments,this__112009.zsegments,this__112009.__meta,this__112009.__extmap,null));
} else
{if(pred__112010__112013.call(null,"\uFDD0'xsegments",expr__112011__112014))
{return (new doll.client.lib.types.Plane(this__112009.xscale,this__112009.zscale,G__112001,this__112009.zsegments,this__112009.__meta,this__112009.__extmap,null));
} else
{if(pred__112010__112013.call(null,"\uFDD0'zsegments",expr__112011__112014))
{return (new doll.client.lib.types.Plane(this__112009.xscale,this__112009.zscale,this__112009.xsegments,G__112001,this__112009.__meta,this__112009.__extmap,null));
} else
{return (new doll.client.lib.types.Plane(this__112009.xscale,this__112009.zscale,this__112009.xsegments,this__112009.zsegments,this__112009.__meta,cljs.core.assoc.call(null,this__112009.__extmap,k__2346__auto__,G__112001),null));
}
}
}
}
});
doll.client.lib.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__2357__auto__,writer__2358__auto__,opts__2359__auto__){
var this__112015 = this;
var pr_pair__2360__auto____112016 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,cljs.core.pr_writer,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__2358__auto__,pr_pair__2360__auto____112016,[cljs.core.str("#"),cljs.core.str("Plane"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__112015.xscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__112015.zscale),cljs.core.vector.call(null,"\uFDD0'xsegments",this__112015.xsegments),cljs.core.vector.call(null,"\uFDD0'zsegments",this__112015.zsegments)], true),this__112015.__extmap));
});
doll.client.lib.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2343__auto__,entry__2344__auto__){
var this__112017 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2344__auto__))
{return this__2343__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2343__auto__,cljs.core._nth.call(null,entry__2344__auto__,0),cljs.core._nth.call(null,entry__2344__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2343__auto__,entry__2344__auto__);
}
});
doll.client.lib.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2350__auto__){
var this__112018 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__112018.xscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__112018.zscale),cljs.core.vector.call(null,"\uFDD0'xsegments",this__112018.xsegments),cljs.core.vector.call(null,"\uFDD0'zsegments",this__112018.zsegments)], true),this__112018.__extmap));
});
doll.client.lib.types.Plane.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2352__auto__,opts__2353__auto__){
var this__112019 = this;
var pr_pair__2354__auto____112020 = (function (keyval__2355__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2353__auto__,keyval__2355__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2354__auto____112020,[cljs.core.str("#"),cljs.core.str("doll.client.lib.types.Plane"),cljs.core.str("{")].join(''),", ","}",opts__2353__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'xscale",this__112019.xscale),cljs.core.vector.call(null,"\uFDD0'zscale",this__112019.zscale),cljs.core.vector.call(null,"\uFDD0'xsegments",this__112019.xsegments),cljs.core.vector.call(null,"\uFDD0'zsegments",this__112019.zsegments)], true),this__112019.__extmap));
});
doll.client.lib.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2342__auto__){
var this__112021 = this;
return (4 + cljs.core.count.call(null,this__112021.__extmap));
});
doll.client.lib.types.Plane.prototype.doll$client$lib$protocols$Shape$ = true;
doll.client.lib.types.Plane.prototype.doll$client$lib$protocols$Shape$draw$arity$1 = (function (self){
var this__112022 = this;
return (new THREE.PlaneGeometry(this__112022.xscale,this__112022.zscale,this__112022.xsegments,this__112022.zsegments));
});
doll.client.lib.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2334__auto__,other__2335__auto__){
var this__112023 = this;
if(cljs.core.truth_((function (){var and__3822__auto____112024 = other__2335__auto__;
if(cljs.core.truth_(and__3822__auto____112024))
{var and__3822__auto____112025 = (this__2334__auto__.constructor === other__2335__auto__.constructor);
if(and__3822__auto____112025)
{return cljs.core.equiv_map.call(null,this__2334__auto__,other__2335__auto__);
} else
{return and__3822__auto____112025;
}
} else
{return and__3822__auto____112024;
}
})()))
{return true;
} else
{return false;
}
});
doll.client.lib.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2337__auto__,G__112001){
var this__112026 = this;
return (new doll.client.lib.types.Plane(this__112026.xscale,this__112026.zscale,this__112026.xsegments,this__112026.zsegments,G__112001,this__112026.__extmap,this__112026.__hash));
});
doll.client.lib.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2336__auto__){
var this__112027 = this;
return this__112027.__meta;
});
doll.client.lib.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2347__auto__,k__2348__auto__){
var this__112028 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray(["\uFDD0'xsegments","\uFDD0'zscale","\uFDD0'xscale","\uFDD0'zsegments"]),k__2348__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2347__auto__),this__112028.__meta),k__2348__auto__);
} else
{return (new doll.client.lib.types.Plane(this__112028.xscale,this__112028.zscale,this__112028.xsegments,this__112028.zsegments,this__112028.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__112028.__extmap,k__2348__auto__)),null));
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
doll.client.lib.types.map__GT_Plane = (function map__GT_Plane(G__112003){
return (new doll.client.lib.types.Plane((new cljs.core.Keyword("\uFDD0'xscale")).call(null,G__112003),(new cljs.core.Keyword("\uFDD0'zscale")).call(null,G__112003),(new cljs.core.Keyword("\uFDD0'xsegments")).call(null,G__112003),(new cljs.core.Keyword("\uFDD0'zsegments")).call(null,G__112003),null,cljs.core.dissoc.call(null,G__112003,"\uFDD0'xscale","\uFDD0'zscale","\uFDD0'xsegments","\uFDD0'zsegments")));
});
doll.client.lib.types.Plane;
