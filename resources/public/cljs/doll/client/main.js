goog.provide('doll.client.main');
goog.require('cljs.core');
goog.require('doll.client.lib.types');
goog.require('jayq.util');
goog.require('doll.client.lib.protocols');
goog.require('jayq.core');
goog.require('jayq.util');
goog.require('doll.client.lib.protocols');
goog.require('doll.client.lib.types');
doll.client.main.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
doll.client.main.key_codes = cljs.core.ObjMap.fromObject(["\uFDD0'a","\uFDD0'w","\uFDD0's","\uFDD0'd"],{"\uFDD0'a":65,"\uFDD0'w":87,"\uFDD0's":83,"\uFDD0'd":68});
doll.client.main.test_shapes = cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Plane(100,100,2,2)),"\uFDD0'x":-100,"\uFDD0'y":100,"\uFDD0'z":0,"\uFDD0'color":56797}),cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Plane(100,100,2,2)),"\uFDD0'x":-100,"\uFDD0'y":100,"\uFDD0'z":-50,"\uFDD0'color":14540032}),cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Plane(100,100,2,2)),"\uFDD0'x":-100,"\uFDD0'y":100,"\uFDD0'z":-100,"\uFDD0'color":4491281}),cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,50,200)),"\uFDD0'x":200,"\uFDD0'y":0,"\uFDD0'z":-500,"\uFDD0'color":14483677}),cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,200,200)),"\uFDD0'x":200,"\uFDD0'y":0,"\uFDD0'z":-700,"\uFDD0'color":221})], true);
doll.client.main.render = (function render(view,p__499581){
var map__499593__499594 = p__499581;
var map__499593__499595 = ((cljs.core.seq_QMARK_.call(null,map__499593__499594))?cljs.core.apply.call(null,cljs.core.hash_map,map__499593__499594):map__499593__499594);
var color__499596 = cljs.core._lookup.call(null,map__499593__499595,"\uFDD0'color",null);
var z__499597 = cljs.core._lookup.call(null,map__499593__499595,"\uFDD0'z",null);
var y__499598 = cljs.core._lookup.call(null,map__499593__499595,"\uFDD0'y",null);
var x__499599 = cljs.core._lookup.call(null,map__499593__499595,"\uFDD0'x",null);
var shape__499600 = cljs.core._lookup.call(null,map__499593__499595,"\uFDD0'shape",null);
var geometry__499601 = doll.client.lib.protocols.draw.call(null,shape__499600);
var material__499602 = (new THREE.MeshLambertMaterial(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'wireframe"],{"\uFDD0'color":color__499596,"\uFDD0'wireframe":true}))));
var mesh__499603 = (new THREE.Mesh(geometry__499601,material__499602));
(mesh__499603["position"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":x__499599,"\uFDD0'y":y__499598,"\uFDD0'z":z__499597})));
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene").add(mesh__499603);
return mesh__499603;
});
doll.client.main.make_scenery = (function make_scenery(view,object_maps){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,doll.client.main.render,view),object_maps));
});
doll.client.main.scene_setup = (function scene_setup(view){
var $canvas__499605 = (new cljs.core.Keyword("\uFDD0'$el")).call(null,view);
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'camera",(new THREE.PerspectiveCamera(45,($canvas__499605.width() / $canvas__499605.height()),1,10000)));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'scene",(new THREE.Scene()));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'controls",(new THREE.TrackballControls(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"),(new cljs.core.Keyword("\uFDD0'$el")).call(null,view).get(0))));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'renderer",(new THREE.CanvasRenderer(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'canvas"],{"\uFDD0'canvas":$canvas__499605.get(0)})))));
doll.client.main.make_scenery.call(null,view,doll.client.main.test_shapes);
(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls")["target"]).set(0,0,-1);
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer").setSize($canvas__499605.width(),$canvas__499605.height());
$canvas__499605.mouseenter((function (){
return $canvas__499605.focus();
}));
return view;
});
doll.client.main.update_position_fields = (function update_position_fields(model,x_function,z_function){
var old_x__499610 = doll.client.lib.protocols.get_field.call(null,model,"\uFDD0'x");
var old_z__499611 = doll.client.lib.protocols.get_field.call(null,model,"\uFDD0'z");
return doll.client.lib.protocols.set_fields.call(null,model,cljs.core.PersistentVector.fromArray(["\uFDD0'x",x_function.call(null,old_x__499610),"\uFDD0'z",z_function.call(null,old_z__499611)], true));
});
doll.client.main.update_position = (function update_position(model,_PLUS_or_){
var yrot__499617 = doll.client.lib.protocols.get_field.call(null,model,"\uFDD0'yrot");
var x_delta__499618 = (5 * Math.sin.call(null,yrot__499617));
var z_delta__499619 = (5 * Math.cos.call(null,yrot__499617));
return doll.client.main.update_position_fields.call(null,model,(function (p1__499606_SHARP_){
return _PLUS_or_.call(null,p1__499606_SHARP_,x_delta__499618);
}),(function (p1__499607_SHARP_){
return _PLUS_or_.call(null,p1__499607_SHARP_,z_delta__499619);
}));
});
doll.client.main.character_setup = (function character_setup(view){
doll.client.lib.protocols.set_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),cljs.core.PersistentVector.fromArray(["\uFDD0'x",0,"\uFDD0'y",200,"\uFDD0'z",400,"\uFDD0'yrot",0], true));
var deferred__499625 = jayq.core.ajax.call(null,"/character/id",cljs.core.ObjMap.fromObject(["\uFDD0'type"],{"\uFDD0'type":"GET"}));
deferred__499625.done((function (data){
console.log(data);
return doll.client.lib.protocols.set_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),cljs.core.flatten.call(null,cljs.core.vec.call(null,cljs.core.js__GT_clj.call(null,data,"\uFDD0'keywordize-keys",true))));
}));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'character",doll.client.main.render.call(null,view,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'shape"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,400,200))}),doll.client.lib.protocols.get_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'z"], true)))));
var $canvas__499626 = (new cljs.core.Keyword("\uFDD0'$el")).call(null,view);
var character__499627 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'character");
var model__499628 = (new cljs.core.Keyword("\uFDD0'model")).call(null,view);
character__499627.add(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"));
doll.client.lib.protocols.on.call(null,model__499628,"\uFDD0'any-change",cljs.core.not_EQ_,(function (fieldmap){
(character__499627["position"] = jayq.util.map__GT_js.call(null,cljs.core.select_keys.call(null,fieldmap,cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'z"], true))));
(character__499627["rotation"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":0,"\uFDD0'y":fieldmap.call(null,"\uFDD0'yrot"),"\uFDD0'z":0})));
return jayq.core.ajax.call(null,"/character/id",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data"],{"\uFDD0'type":"POST","\uFDD0'data":fieldmap}));
}));
jayq.core.on.call(null,$canvas__499626,"\uFDD0'keydown",(function (event){
var which__499629 = (event["which"]);
if(cljs.core._EQ_.call(null,which__499629,doll.client.main.key_codes.call(null,"\uFDD0'a")))
{return doll.client.lib.protocols.update_field.call(null,model__499628,"\uFDD0'yrot",(function (p1__499612_SHARP_){
return (p1__499612_SHARP_ + 0.1);
}));
} else
{if(cljs.core._EQ_.call(null,which__499629,doll.client.main.key_codes.call(null,"\uFDD0'w")))
{return doll.client.main.update_position.call(null,model__499628,cljs.core._);
} else
{if(cljs.core._EQ_.call(null,which__499629,doll.client.main.key_codes.call(null,"\uFDD0's")))
{return doll.client.main.update_position.call(null,model__499628,cljs.core._PLUS_);
} else
{if(cljs.core._EQ_.call(null,which__499629,doll.client.main.key_codes.call(null,"\uFDD0'd")))
{return doll.client.lib.protocols.update_field.call(null,model__499628,"\uFDD0'yrot",(function (p1__499613_SHARP_){
return (p1__499613_SHARP_ - 0.1);
}));
} else
{return null;
}
}
}
}
}));
return view;
});
doll.client.main.animate = (function animate(view){
requestAnimationFrame((function (){
return animate.call(null,view);
}));
var renderer__499633 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer");
var camera__499634 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera");
var scene__499635 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene");
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls").update();
return renderer__499633.render(scene__499635,camera__499634);
});
doll.client.main.view = (new doll.client.lib.types.View(jayq.core.$.call(null,"\uFDD0'.mainCanvas"),(new doll.client.lib.types.Model(cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY))),cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY)));
doll.client.main.document_ready.call(null,(function (){
return doll.client.main.animate.call(null,doll.client.main.character_setup.call(null,doll.client.main.scene_setup.call(null,doll.client.main.view)));
}));
